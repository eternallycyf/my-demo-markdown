import TransferClassForm from "./components/class";
import React, { RefObject } from "react";
import { Form, Button } from "antd";
import type { FormInstance } from "antd/es/form";
import { Card } from "antd";
import { IHandle } from './components/class/index'

export default class TransferDemo extends React.Component {
  TransferRef = React.createRef<IHandle>();
  formRef = React.createRef<FormInstance>();
  state = {
    mockData: [],
  };
  componentDidMount() {
    this.setState({
      mockData: Array.from({
        length: 20,
      }).map((_, i) => ({
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
      })),
    });
  }
  testData = () => {
    this.setState({
      mockData: Array.from({
        length: 10,
      }).map((_, i) => ({
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
      })),
    });
  };

  transferOkCallBack = () => {
    const { getData } = this.TransferRef!.current!;
    const ref = this.formRef.current;
    console.log(ref!.getFieldValue("test"));
  };

  onFinish = (values: any) => {
    console.log(values);
  };

  render() {
    return (
      <>
        <Card style={{ margin: 24 }}>
          <h1>
            <button
              onClick={() => {
                this.TransferRef!.current!.useVisible(true);
              }}
            >
              打开穿梭框
            </button>
          </h1>
          <h1>
            <button onClick={() => this.testData()}>设置新的数据源</button>
          </h1>
          <Form ref={this.formRef} onFinish={this.onFinish}>
            <Form.Item style={{ display: "inline-block" }}>
              <TransferClassForm
                formRef={this.formRef}
                originData={this.state.mockData}
                TransferRef={this.TransferRef}
                transferOkCallBack={() => this.transferOkCallBack()}
              />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form>
        </Card>
      </>
    );
  }
}
