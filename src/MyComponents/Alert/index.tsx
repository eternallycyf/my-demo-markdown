import { Alert, AlertProps } from 'antd';
import React from 'react';

const AlertComponent = (props: AlertProps) => {
  return <Alert showIcon {...props} />;
};

export default AlertComponent;
