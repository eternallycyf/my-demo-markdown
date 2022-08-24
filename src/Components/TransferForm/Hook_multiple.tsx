import TransferHookForm from "./components/hook";
import React, { useRef, useState, useEffect } from "react";
import { Form, Button } from "antd";
import { Card } from "antd";

const TransferDemo = () => {
  // const TransferRef = useRef(null)
  const [form] = Form.useForm();
  const [mockData, setMockData] = useState<any>([]);
  const TransferRef = useRef<any>([]);

  useEffect(() => {
    const initData = Array.from({
      length: 20,
    }).map((_, i) => ({
      key: i.toString(),
      title: `content${i + 1}`,
      description: `description of content${i + 1}`,
    }));
    setMockData(initData);
  }, []);

  const testData = () => {
    const initData = Array.from({
      length: 10,
    }).map((_, i) => ({
      key: i.toString(),
      title: `content${i + 1}`,
      description: `description of content${i + 1}`,
    }));
    setMockData(initData);
  };

  const transferOkCallBack = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { getData } = TransferRef.current[0];
    console.log(form?.getFieldValue("test"));
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <>
      <Card style={{ margin: 24 }}>
        <h1>
          <button
            onClick={() => {
              TransferRef.current[0].useVisible(true);
            }}
          >
            打开穿梭框1
          </button>
        </h1>
        <h1>
          <button
            onClick={() => {
              TransferRef.current[1].useVisible(true);
            }}
          >
            打开穿梭框2
          </button>
        </h1>
        <h1>
          <button onClick={() => testData()}>两个都设置新的测试数据</button>
        </h1>
        <h1>可遍历生成无限个</h1>
        <Form form={form} onFinish={onFinish}>
          <Form.Item style={{ display: "inline-block" }}>
            <TransferHookForm
              formRef={form}
              originData={mockData}
              ref={(el) => (TransferRef.current[0] = el)}
              transferOkCallBack={() => transferOkCallBack()}
            />
          </Form.Item>
          <Form.Item style={{ display: "inline-block" }}>
            <TransferHookForm
              formRef={form}
              originData={mockData}
              ref={(el) => (TransferRef.current[1] = el)}
              transferOkCallBack={() => transferOkCallBack()}
              falseSelectItmeName="asasd"
            />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </>
  );
};

export default TransferDemo;
