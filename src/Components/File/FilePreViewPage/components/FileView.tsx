import type { CSSProperties } from "react";
import { PureComponent } from "react";
import style from "./fileView.less";
import cx from "classnames";
import { Skeleton, Image } from "antd";
import FileViewer from "react-file-viewer";
import { OutTable } from "react-excel-renderer";
import { defaultOptions, renderAsync } from "docx-preview";
import MarkDown from "./MarkDown";

interface IProps {
  styles?: CSSProperties;
  src?: string;
  base64?: string;
  [onherProps: string]: any;
}

const txtFileTypes = [
  "txt",
  "json",
  "js",
  "css",
  "java",
  "py",
  "html",
  "jsx",
  "ts",
  "tsx",
  "xml",
  "md",
  "log",
];

class FileView extends PureComponent<IProps, any> {
  constructor(props: IProps | Readonly<IProps>) {
    super(props);
    this.state = {
      pdfSrc: "",
      loading: true,
      text: "",
    };
  }
  componentDidMount() {
    const { src, base64 } = this.props;
    if (src) {
      this.showPDFBySrc(src);
    } else if (base64) {
      this.showPDFByBase64(base64);
    }
  }
  componentwillUnmount() {
    URL.revokeObjectURL(this.state.pdfSrc);
  }
  //通过src展示
  showPDFBySrc = async (src: string) => {
    try {
      this.setState({
        loading: true,
      });
      this.setState({
        pdfSrc: src,
        loading: false,
      });
    } catch (err) { }
  };

  //base64转blob
  dataURItoBlob = (dataURI: string) => {
    const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0]; // mime类型
    const byteString = atob(dataURI.split(",")[1]); //base64 解码
    const arrayBuffer = new ArrayBuffer(byteString.length); //创建缓冲数组
    const intArray = new Uint8Array(arrayBuffer); //创建视图
    for (let i = 0; i < byteString.length; i++) {
      intArray[i] = byteString.charCodeAt(i);
    }
    return new Blob([intArray], { type: mimeString });
  };

  // 转baffer
  readBuffer = async (file: any): Promise<Buffer> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (loadEvent: any) => resolve(loadEvent.target.result);
      reader.onerror = (e) => reject(e);
      reader.readAsArrayBuffer(file);
    });
  };

  // 转文本string
  readText = async (buffer: Buffer): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (loadEvent: any) => resolve(loadEvent.target.result);
      reader.onerror = (e) => reject(e);
      reader.readAsText(new Blob([buffer]), "utf-8");
    });
  };

  //通过base64展示
  showPDFByBase64 = async (content: string) => {
    const { fileType } = this.props;
    const blob = this.dataURItoBlob(content);
    const fileUrl = URL.createObjectURL(blob);
    this.setState({
      pdfSrc: fileUrl,
      loading: false,
    });

    if (txtFileTypes.includes(fileType)) {
      const Buffer = await this.readBuffer(blob);
      const text = await this.readText(Buffer);
      this.setState({
        text,
      });
    }

    if (fileType == "docx") {
      renderAsync(
        blob,
        document.getElementById("file-preview-modal") as HTMLDivElement,
        null as unknown as HTMLDivElement,
        {
          className: "docx", // 默认和文档样式类的类名/前缀
          inWrapper: true, // 启用围绕文档内容渲染包装器
          ignoreWidth: false, // 禁止页面渲染宽度
          ignoreHeight: false, // 禁止页面渲染高度
          ignoreFonts: false, // 禁止字体渲染
          breakPages: true, // 在分页符上启用分页
          ignoreLastRenderedPageBreak: true, //禁用lastRenderedPageBreak元素的分页
          experimental: false, //启用实验性功能（制表符停止计算）
          trimXmlDeclaration: true, //如果为真，xml声明将在解析之前从xml文档中删除
          debug: false, // 启用额外的日志记录
        },
      );
    }
  };

  render() {
    const { styles, className, fileType, txtFileTypes, excelData } = this.props;
    const { loading, pdfSrc, text } = this.state;
    const src = `${pdfSrc}`;

    if (loading) {
      return <Skeleton loading paragraph={{ rows: 10 }} active />;
    }

    if (fileType == "docx") {
      return null;
    }

    if (fileType == "xlsx") {
      return (
        <OutTable
          data={excelData.rows}
          columns={excelData.cols}
          tableClassName={style.ExcelTable2007}
          tableHeaderRowClass={style.heading}
        />
      );
    }

    if (fileType == "png" || fileType == "jpg") {
      return <Image src={src} />;
    }

    if (txtFileTypes.includes(fileType)) {
      const newText = `
~~~${fileType}
${text}
~~~
`;
      return <MarkDown markdown={newText} />;
    }

    if (fileType == "pdf") {
      return (
        <iframe
          className={cx(style.iframeStyle, className)}
          style={styles}
          src={src}
          title="pdf预览"
        />
      );
    }

    return (
      <FileViewer
        title="预览"
        className={cx(style.iframeStyle, className)}
        style={styles}
        fileType={fileType}
        filePath={src}
        unsupportedComponent={"不支持"}
      />
    );
  }
}
export default FileView;
