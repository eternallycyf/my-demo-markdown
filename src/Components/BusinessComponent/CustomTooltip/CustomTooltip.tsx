import { Col, Input, Tooltip, Typography } from 'antd';
import React, { FC, useState } from 'react';
const { Paragraph } = Typography;
const { TextArea } = Input;

interface IBaseProps {
  /**
   * @description 需要格式化的string
   * @type string
   * @default '''
   */
  text: string;
  style?: React.CSSProperties | any;
  /**
   * @description 栅格
   * @type number
   * @default 35
   */
  col?: number | string;
  /**
   * @description 是否可以复制
   * @type boolean
   * @default false
   */
  copyable?: boolean;
}
interface ISingleRowProps {
  /**
   * @description 最大长度 maxLength和row同时只有一个生效
   * @type number
   * @default 35
   */
  maxLength?: number;
}
interface RowProps {
  /**
   * @description 最大行数
   * @type number | 'autoSize'
   * @default 1
   */
  rows: number | 'autoSize';
  /**
   * @description 是否显示省略号 => ...
   * @type boolean
   * @default true
   */
  EllipsisSymbol?: boolean;
  /**
   * @description 是否可展开收起
   * @type boolean
   * @default true
   */
  expend?: boolean;
}
interface IRowProps {
  /**
   * @description 行配置 (maxLength和row同时只有一个生效)
   * @type IRowProps
   * @default IRowProps
   */
  row?: RowProps;
}
type ICustomTooltipProps = IBaseProps & ISingleRowProps & IRowProps;
type Iprops = {
  [key in keyof ICustomTooltipProps]: ICustomTooltipProps[keyof ICustomTooltipProps];
};
export const IProps = <T,>(props: Iprops) => <></>;
export const IRowProps = <T,>(props: RowProps) => <></>;

const CustomTooltip: FC<Iprops> = props => {
  const [isExpand, setIsExpand] = useState<boolean>(false);
  const {
    text = '',
    maxLength = 35,
    style = {},
    row = { rows: 1, EllipsisSymbol: true, expend: true },
    col = 8,
    copyable = false,
  } = props;

  const copyableProps = copyable ? { copyable: { text } } : {};
  const isShowEllipsisSymbol = row.EllipsisSymbol ? '...' : '';
  const styles = {
    maxWidth: 370,
    wordWrap: 'break-word',
    wordBreak: 'break-all',
    color: 'rgba(0,0,0,0.45)',
    fontSize: 14,
    ...style,
  };

  const getToggleButton = (isExpandStatus: boolean) => {
    if (isExpandStatus) {
      return (
        <a
          className="ant-typography-expand"
          onClick={() => setIsExpand(isExpandStatus)}
        >
          展开
        </a>
      );
    } else {
      return (
        <a
          className="ant-typography-expand"
          onClick={() => setIsExpand(isExpandStatus)}
        >
          收起
        </a>
      );
    }
  };

  const customRowBaseProps = {
    style: styles,
    title: text ?? '--',
    ...copyableProps,
  };
  const customRowEllipsisParagraphProps = isExpand
    ? { ...customRowBaseProps }
    : {
        ...customRowBaseProps,
        ellipsis: {
          rows: row.rows,
          expandable: isExpand,
          suffix: isExpand ? '' : ((getToggleButton(true) as any) as string),
          tooltip: text ?? '--',
          onExpand: () => setIsExpand(true),
        },
      };
  const customRowEllipsisNotExpandParagraphProps = {
    ...customRowBaseProps,
    ellipsis: {
      rows: row.rows,
      expandable: false,
      tooltip: text ?? '--',
    },
  };
  // row.rows = 1 且 text.length > maxLength
  const SingleOverflowParagraph = (
    <Tooltip title={text} style={styles}>
      <Paragraph {...copyableProps} style={styles}>
        {text.slice(0, maxLength) + isShowEllipsisSymbol ?? '--'}
      </Paragraph>
    </Tooltip>
  );

  // row.rows = 1 且 text.length <= maxLength
  const SingleParagraph = (
    <Paragraph {...copyableProps} style={styles}>
      {text ?? '--'}
    </Paragraph>
  );

  // 设置了 row.autoSize
  const AutoSizeParagraph = (
    <Col span={col}>
      <Paragraph {...copyableProps}>
        <TextArea
          style={{ resize: 'none', ...styles }}
          autoSize
          bordered={false}
          readOnly
          value={text ?? '--'}
        />
      </Paragraph>
    </Col>
  );

  const CustomRowExpendParagraph = (
    <Col span={col}>
      <Paragraph {...customRowEllipsisParagraphProps}>
        {text ?? '--'}
        {isExpand && getToggleButton(false)}
      </Paragraph>
    </Col>
  );

  const CustomRowNotExpendParagraph = (
    <Col span={col}>
      <Paragraph {...customRowEllipsisNotExpandParagraphProps}>
        {text ?? '--'}
      </Paragraph>
    </Col>
  );

  if (row.rows == 'autoSize') return AutoSizeParagraph;
  if (row.rows > 1 && row.expend == true) return CustomRowExpendParagraph;
  if (row.rows > 1 && !row.expend) return CustomRowNotExpendParagraph;

  return (
    <Col span={col}>
      <Paragraph style={styles}>
        {text && text.length > maxLength
          ? SingleOverflowParagraph
          : SingleParagraph}
      </Paragraph>
    </Col>
  );
};

export default CustomTooltip;
