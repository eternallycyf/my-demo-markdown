import { Col } from 'antd';
import React, { FunctionComponent, useRef } from 'react';
import { IVirtualListProps } from './Interface';
import { useVirtualList } from './utils';

const VirtualList: FunctionComponent<IVirtualListProps> = props => {
  const ref = useRef<HTMLDivElement>(null!);
  const entry = useVirtualList(ref, { freezeOnceVisible: false });
  const isVisible = !!entry?.isIntersecting;
  const { rows, children } = props;
  return (
    <Col span={24 / rows} ref={ref} style={{ margin: '10px 0' }}>
      {isVisible ? children : null}
    </Col>
  );
};

export default VirtualList;
