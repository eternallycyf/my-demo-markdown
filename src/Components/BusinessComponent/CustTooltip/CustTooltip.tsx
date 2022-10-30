import React from 'react';
import { Tooltip, Input, Col, Row } from 'antd';
const { TextArea } = Input;

interface Iprops {
  text: string;
  /**最大长度  */
  maxLength?: number;
  style?: React.CSSProperties | any;
  /**是否自动换行  */
  autoSize?: boolean;
  /**自动换行栅格 */
  col?: number | string;
}

const CustTooltip: React.FC<Iprops> = props => {
  const {
    text = '',
    maxLength = 35,
    style = {},
    autoSize = false,
    col = 8,
  } = props;

  const styles = {
    maxWidth: 370,
    wordWrap: 'break-word',
    wordBreak: 'break-all',
    color: 'rgba(0,0,0,0.45)',
    fontSize: 14,
    ...style,
  };

  if (autoSize) {
    return (
      <Col span={col}>
        <TextArea
          style={{ resize: 'none', ...style }}
          autoSize
          bordered={false}
          readOnly
          value={text ?? '--'}
        />
      </Col>
    );
  }

  const MAXCustTooltip = (
    <Tooltip title={text} style={styles}>
      <span style={styles}>{text.slice(0, maxLength) + '...' ?? '--'}</span>
    </Tooltip>
  );

  const OriginText = <span style={styles}>{text ?? '--'}</span>;

  return (
    <span style={styles}>
      {text && text.length > maxLength ? MAXCustTooltip : OriginText}
    </span>
  );
};

export default CustTooltip;
