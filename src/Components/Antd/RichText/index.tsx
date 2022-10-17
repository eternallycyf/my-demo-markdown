import RichText from './RichText';
import { useRef } from 'react';
import { Form, Row, Col, Button } from 'antd';

const Index = () => {
  const [form] = Form.useForm();
  const richTextRef = useRef<InstanceType<typeof RichText>>(null!);

  const onFinish = (values: any) => {
    console.log(values);
    console.log(form.getFieldValue('content'));
    console.log(richTextRef.current.isContentEmpty());
  };

  const getImageURL = async (file: File): Promise<string> => {
    return await 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn18%2F600%2Fw800h600%2F20180902%2F80c7-hiqtcam8704158.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668560367&t=7375792b4704ea72657886d40a3fa0f6';
  };

  return (
    <>
      <Form form={form} onFinish={onFinish}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Row>
          <Col span={17}>
            <Form.Item
              name="content"
              label="富文本"
              rules={[
                {
                  required: true,
                  validator: () => {
                    if (richTextRef.current.isContentEmpty()) {
                      return Promise.reject(new Error('请填写具体的内容'));
                    }
                    return Promise.resolve('');
                  },
                },
              ]}
            >
              <RichText
                ref={richTextRef}
                form={form}
                name="content"
                extendControlKey={['preview', 'uploader']}
                getImageURL={getImageURL}
                placeholder="请输入正文内容"
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Index;
