import React, { useEffect, useRef, useState } from 'react';
import CustTooltip from './CustTooltip';
import { Tooltip, Input, Col, Row } from 'antd';

const TEXT = 'sadasdasdasdasdsdsdsadasdasdasdasdsdsdsadasdasdasdasdsdsd';

const IndexPage = () => {
  return (
    <>
      <Row gutter={10}>
        <CustTooltip text={TEXT} autoSize={true} col={3} />
        <CustTooltip text={TEXT} col={8} />
        <CustTooltip text={TEXT} maxLength={10} />
      </Row>
    </>
  );
};
export default IndexPage;
