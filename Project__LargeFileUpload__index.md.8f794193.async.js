(self.webpackChunkmy_demo_markdown=self.webpackChunkmy_demo_markdown||[]).push([[269],{39634:function(c,r,e){"use strict";e.r(r);var o=e(12924),n=e.n(o),l=e(16924),i=e(53401);const s=n().memo(({demos:t})=>n().createElement(n().Fragment,null,n().createElement("div",{className:"markdown"},n().createElement(i.Z,{code:`// index.tsx
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
   * \u5C06file\u5BF9\u8C61\u8FDB\u884C\u5207\u7247\uFF0C\u7136\u540E\u6839\u636E\u5207\u7247\u8BA1\u7B97md5
   * @param file \u8981\u4E0A\u4F20\u7684\u6587\u4EF6
   * @returns \u8FD4\u56DEmd5\u548C\u5207\u7247\u5217\u8868
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
   * \u4E0A\u4F20\u6587\u4EF6\u65B9\u6CD5\uFF0C\u5F53FileUploaderClient\u7684\u914D\u7F6E\u9879\u4E2D\u4F20\u5165\u4E86requestOptions\u624D\u80FD\u4F7F\u7528
   * \u4F1A\u4F9D\u6B21\u6267\u884CgetChunkListAndFileMd5\u3001\u914D\u7F6E\u9879\u4E2D\u7684initFilePartUploadFunc\u3001\u914D\u7F6E\u9879\u4E2D\u7684uploadPartFileFunc\u3001\u914D\u7F6E\u9879\u4E2D\u7684finishFilePartUploadFunc
   * \u6267\u884C\u5B8C\u6210\u540E\u8FD4\u56DE\u4E0A\u4F20\u7ED3\u679C\uFF0C\u82E5\u6709\u5206\u7247\u4E0A\u4F20\u5931\u8D25\uFF0C\u5219\u4F1A\u81EA\u52A8\u91CD\u8BD5
   * @param file \u8981\u4E0A\u4F20\u7684\u6587\u4EF6
   * @returns finishFilePartUploadFunc\u51FD\u6570Promise resolve\u7684\u503C
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
        console.warn(\`\${index} part upload failed\`);
        retryList.push(index);
      }
    }

    for (let retry = 0; retry < requestOptions.retryTimes; retry++) {
      if (retryList.length > 0) {
        console.log(\`retry start, times: \${retry}\`);
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
              \`\${blobIndex} part retry upload failed, times: \${retry}\`,
            );
          }
        }
      }
    }

    if (retryList.length === 0) {
      return await requestOptions.finishFilePartUploadFunc(md5);
    } else {
      throw Error(
        \`upload failed, some chunks upload failed: \${JSON.stringify(
          retryList,
        )}\`,
      );
    }
  }
}`,lang:"tsx"}),n().createElement(i.Z,{code:`// utils.tsx
export function getBlobSlice() {
  return (
    File.prototype.slice ||
    (File.prototype as any).mozSlice ||
    (File.prototype as any).webkitSlice
  );
}`,lang:"tsx"}),n().createElement(i.Z,{code:`// \u4F7F\u7528
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
        const { data } = await axios.post(\`\${HOST}api/initUpload\`, {
          name: fileName,
        });
        uploadId = data.uploadId;
        console.log('\u521D\u59CB\u5316\u4E0A\u4F20\u5B8C\u6210');
        setUrl('');
      },
      uploadPartFileFunc: async (chunk: Blob, index: number) => {
        const formData = new FormData();
        formData.append('uploadId', uploadId);
        formData.append('partIndex', index.toString());
        formData.append('partFile', chunk);

        await axios.post(\`\${HOST}api/uploadPart\`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        console.log(\`\u4E0A\u4F20\u5206\u7247\${index}\u5B8C\u6210\`);
      },
      finishFilePartUploadFunc: async (md5: string) => {
        const fileName = (fileInput.current as any).files[0].name;
        const { data } = await axios.post(\`\${HOST}api/finishUpload\`, {
          name: fileName,
          uploadId,
          md5,
        });
        console.log(\`\u4E0A\u4F20\u5B8C\u6210\uFF0C\u5B58\u50A8\u5730\u5740\u4E3A\uFF1A\${HOST}\${data.path}\`);
        setUrl(\`\${HOST}\${data.path}\`);
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
      <h3>\u9009\u62E9\u6587\u4EF6\u540E\u70B9\u51FB\u201C\u4E0A\u4F20\u6587\u4EF6\u201D\u6309\u94AE\u5373\u53EF</h3>
      <div className="App">
        <input type="file" name="file" ref={fileInput} />
        <input type="button" value="\u4E0A\u4F20\u6587\u4EF6" onClick={upload} />
      </div>
      {url && <h3>{\`\u6587\u4EF6\u5730\u5740\uFF1A\${url}\`}</h3>}
    </div>
  );
}

export default App;`,lang:"tsx"}))));r.default=t=>{const u=n().useContext(l.context),d=u.demos;return n().useEffect(()=>{var a;t!=null&&(a=t.location)!==null&&a!==void 0&&a.hash&&l.AnchorLink.scrollToAnchor(decodeURIComponent(t.location.hash.slice(1)))},[]),n().createElement(s,{demos:d})}}}]);
