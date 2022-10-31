import { Tooltip } from 'antd';
import React from 'react';

interface Iprops {
  text: string;
  // 最大长度
  maxLength?: number;
  style?: React.CSSProperties;
  // 是否自动换行
  isRow?: boolean;
}

const CustTooltip: React.FC<Iprops> = props => {
  const { text = '', maxLength = 35, style, isRow = false } = props;
  if (isRow)
    return (

      <span
        style={{
          maxWidth: 370,
          wordWrap: 'break-word',
          wordBreak: 'break-all',
          color: 'rgba(0,0,0,0.45)',
          ...style,
        }}
      >
        {text ?? '--'}
      </span>
    );
  return (
    <span style={style}>
      {text && text.length > maxLength ? (
        <Tooltip title={text} style={style}>
          <span>{text.slice(0, maxLength) + '...' ?? '--'}</span>
        </Tooltip>
      ) : (
        text ?? '--'
      )}
    </span>
  );
};

export default CustTooltip;
