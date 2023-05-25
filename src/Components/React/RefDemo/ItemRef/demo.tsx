import { Form } from 'antd';
import React, { useEffect } from 'react';
import Menu from './index';

const Demo = () => {
  const MenuRef = React.useRef<React.ElementRef<typeof Menu>>(null!);

  useEffect(() => {
    MenuRef.current.handleOpen(2);
  }, []);

  return (
    <>
      <Menu ref={MenuRef} />
      <Menu.Item desc={'x'} />
    </>
  );
};

export default Demo;
