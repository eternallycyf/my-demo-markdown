import { Spin } from 'antd';

const PageLoding = () => {
  // ! 这个就是测试的
  return (
    <div
      style={{
        paddingTop: 100,
        textAlign: 'center',
      }}
    >
      <Spin size="large" />
    </div>
  );
};
export default PageLoding;
