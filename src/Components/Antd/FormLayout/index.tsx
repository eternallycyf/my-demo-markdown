import { Form, Card, Space, InputNumber, Input, Row, Col } from "antd";
const FormLayout = () => {
  return (
    <>

      <Card style={{ margin: 24 }}>
        <h1>1. {"<space />"} </h1>
        <Form.Item>
          <Space align="baseline" size="large">
            <Space align="baseline">
              <Form.Item name="1">
                <InputNumber min={0} max={100} />
              </Form.Item>
              <span>%</span>
            </Space>
          </Space>
        </Form.Item>

        <h1>2. inline-flex</h1>
        <Form.Item label="名称一" style={{ marginBottom: 0 }}>
          <Form.Item
            style={{ display: "inline-flex", width: "calc(45% - 4px)" }}
          >
            <Input />
          </Form.Item>
          <Form.Item
            style={{
              display: "inline-flex",
              width: "calc(55% - 4px)",
              marginLeft: "8px",
            }}
            name="name2"
          >
            <Input />
          </Form.Item>

          <Form.Item label="InputNumber表单" style={{ height: 32 }}>
            <Space align="baseline" size="large">
              <Space align="baseline">
                <Form.Item name="inputNumber1">
                  <InputNumber min={0} max={100} />
                </Form.Item>
                <span>%</span>
              </Space>
            </Space>
          </Form.Item>
        </Form.Item>

        <h1>3. row and col</h1>
        <Row>
          <Col span={12}>
            <Form.Item label="col1">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="col2">
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <h1>4. 指定具体的宽度</h1>
        {`
          labelCol={{ flex: '0 0 100px' }} 
          wrapperCol={{ flex: '0 0 100px' }} 
          style={{ display: 'inline-flex', width: 'calc(45% - 4px)' }} 
        `}
      </Card>

    </>
  );
};

export default FormLayout;
