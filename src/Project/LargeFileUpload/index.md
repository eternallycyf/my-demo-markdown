---
group:
  path: /LargeFileUpload
  title: 大文件断点续传
  order: 5
---

```tsx | pure
// index.tsx
import SparkMD5 from 'spark-md5';
import { getBlobSlice } from './util';

const DEFAULT_CHUNK_SIZE = 5 * 1024 * 1024;
const DEFAULT_OPTIONS = {
  chunkSize: DEFAULT_CHUNK_SIZE,
};

export interface IFileUploaderClientOptions {
  chunkSize: number;
  requestOptions?: {
    retryTimes: number;
    initFilePartUploadFunc: () => Promise<any>;
    uploadPartFileFunc: (chunk: Blob, index: number) => Promise<any>;
    finishFilePartUploadFunc: (md5: string) => Promise<any>;
  };
}

export class FileUploaderClient {
  fileUploaderClientOptions: IFileUploaderClientOptions;

  constructor(options: IFileUploaderClientOptions) {
    this.fileUploaderClientOptions = Object.assign(DEFAULT_OPTIONS, options);
  }

  /**
   * 将file对象进行切片，然后根据切片计算md5
   * @param file 要上传的文件
   * @returns 返回md5和切片列表
   */
  public async getChunkListAndFileMd5(
    file: File,
  ): Promise<{ md5: string; chunkList: Blob[] }> {
    return new Promise((resolve, reject) => {
      let currentChunk = 0;
      const chunkSize = this.fileUploaderClientOptions.chunkSize;
      const chunks = Math.ceil(file.size / chunkSize);
      const spark = new SparkMD5.ArrayBuffer();
      const fileReader = new FileReader();
      const blobSlice = getBlobSlice();
      const chunkList: Blob[] = [];

      fileReader.onload = function(e) {
        if (e?.target?.result instanceof ArrayBuffer) {
          spark.append(e.target.result);
        }
        currentChunk++;

        if (currentChunk < chunks) {
          loadNextChunk();
        } else {
          const computedHash = spark.end();
          resolve({ md5: computedHash, chunkList });
        }
      };

      fileReader.onerror = function(e) {
        console.warn('read file error', e);
        reject(e);
      };

      function loadNextChunk() {
        const start = currentChunk * chunkSize;
        const end =
          start + chunkSize >= file.size ? file.size : start + chunkSize;

        const chunk = blobSlice.call(file, start, end);
        chunkList.push(chunk);
        fileReader.readAsArrayBuffer(chunk);
      }

      loadNextChunk();
    });
  }

  /**
   * 上传文件方法，当FileUploaderClient的配置项中传入了requestOptions才能使用
   * 会依次执行getChunkListAndFileMd5、配置项中的initFilePartUploadFunc、配置项中的uploadPartFileFunc、配置项中的finishFilePartUploadFunc
   * 执行完成后返回上传结果，若有分片上传失败，则会自动重试
   * @param file 要上传的文件
   * @returns finishFilePartUploadFunc函数Promise resolve的值
   */
  public async uploadFile(file: File): Promise<any> {
    const requestOptions = this.fileUploaderClientOptions.requestOptions;
    const { md5, chunkList } = await this.getChunkListAndFileMd5(file);
    const retryList = [];
    if (
      requestOptions?.retryTimes === undefined ||
      !requestOptions?.initFilePartUploadFunc ||
      !requestOptions?.uploadPartFileFunc ||
      !requestOptions?.finishFilePartUploadFunc
    ) {
      throw Error(
        'invalid request options, need retryTimes, initFilePartUploadFunc, uploadPartFileFunc and finishFilePartUploadFunc',
      );
    }

    await requestOptions.initFilePartUploadFunc();

    for (let index = 0; index < chunkList.length; index++) {
      try {
        await requestOptions.uploadPartFileFunc(chunkList[index], index);
      } catch (e) {
        console.warn(`${index} part upload failed`);
        retryList.push(index);
      }
    }

    for (let retry = 0; retry < requestOptions.retryTimes; retry++) {
      if (retryList.length > 0) {
        console.log(`retry start, times: ${retry}`);
        for (let a = 0; a < retryList.length; a++) {
          const blobIndex = retryList[a];
          try {
            await requestOptions.uploadPartFileFunc(
              chunkList[blobIndex],
              blobIndex,
            );
            retryList.splice(a, 1);
          } catch (e) {
            console.warn(
              `${blobIndex} part retry upload failed, times: ${retry}`,
            );
          }
        }
      }
    }

    if (retryList.length === 0) {
      return await requestOptions.finishFilePartUploadFunc(md5);
    } else {
      throw Error(
        `upload failed, some chunks upload failed: ${JSON.stringify(
          retryList,
        )}`,
      );
    }
  }
}
```

```tsx | pure
// utils.tsx
export function getBlobSlice() {
  return (
    File.prototype.slice ||
    (File.prototype as any).mozSlice ||
    (File.prototype as any).webkitSlice
  );
}
```

```tsx | pure
// 使用
import { useRef, useState } from 'react';
import './App.css';
import axios from 'axios';
import { FileUploaderClient } from './index';

const HOST = 'http://localhost:10001/';

function App() {
  const fileInput = useRef(null);
  const [url, setUrl] = useState<string>('');
  let uploadId = '';

  const fileUploaderClient = new FileUploaderClient({
    chunkSize: 2 * 1024 * 1024, // 2MB
    requestOptions: {
      retryTimes: 2,
      initFilePartUploadFunc: async () => {
        const fileName = (fileInput.current as any).files[0].name;
        const { data } = await axios.post(`${HOST}api/initUpload`, {
          name: fileName,
        });
        uploadId = data.uploadId;
        console.log('初始化上传完成');
        setUrl('');
      },
      uploadPartFileFunc: async (chunk: Blob, index: number) => {
        const formData = new FormData();
        formData.append('uploadId', uploadId);
        formData.append('partIndex', index.toString());
        formData.append('partFile', chunk);

        await axios.post(`${HOST}api/uploadPart`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        console.log(`上传分片${index}完成`);
      },
      finishFilePartUploadFunc: async (md5: string) => {
        const fileName = (fileInput.current as any).files[0].name;
        const { data } = await axios.post(`${HOST}api/finishUpload`, {
          name: fileName,
          uploadId,
          md5,
        });
        console.log(`上传完成，存储地址为：${HOST}${data.path}`);
        setUrl(`${HOST}${data.path}`);
      },
    },
  });

  const upload = () => {
    if (fileInput.current) {
      fileUploaderClient.uploadFile((fileInput.current as any).files[0]);
    }
  };

  return (
    <div className="App">
      <h1>easy-file-uploader-demo</h1>
      <h3>选择文件后点击“上传文件”按钮即可</h3>
      <div className="App">
        <input type="file" name="file" ref={fileInput} />
        <input type="button" value="上传文件" onClick={upload} />
      </div>
      {url && <h3>{`文件地址：${url}`}</h3>}
    </div>
  );
}

export default App;
```
