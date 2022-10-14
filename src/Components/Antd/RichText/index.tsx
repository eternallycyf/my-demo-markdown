import RichText from './RichText';
import { Form, Row, Col, Button } from 'antd';

const Index = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <>
      <Form form={form} onFinish={onFinish}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Row>
          <Col span={15}>
            <Form.Item
              name="content"
              label="富文本"
              // rules={[{ required: true, message: '请编辑具体的内容' }]}
            >
              <RichText
                form={form}
                name="content"
                extendControlKey={['preview', 'uploader']}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Index;
