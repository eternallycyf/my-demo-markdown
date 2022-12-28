import { Button } from 'antd';
import { createModal } from './CustomModal';

const Base = () => {
  const handleClick = () => {
    createModal({
      onOk: (status, destoryFn) => {
        console.log(status, destoryFn);
      },
    });
  };
  return <Button onClick={handleClick}>模态框</Button>;
};

export default Base;
