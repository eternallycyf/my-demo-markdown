import { Col, Input, Tooltip, Typography } from 'antd';
import React, { FC, Fragment, useState, useRef, useCallback } from 'react';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import cx from './index.less';
const { Paragraph } = Typography;
const { TextArea } = Input;

interface IBaseProps {
  /**
   * @description 需要格式化的string
   * @type string | React.ReactNode
   * @default '''
   */
  text: string | any;
  /**
   * @description 样式
   * @type React.CSSProperties
   * @default {color: 'rgba(0,0,0,0.45)',fontSize: 14,}
   */
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

const CustomTooltip: FC<ICustomTooltipProps> = props => {
  const [isExpand, setIsExpand] = useState<boolean>(false);

  // 如果没有展开的话 height只会有一个值 如果可以展开 会先输出两个值 (展开前的高度 收起后的高度)
  const heightList = useRef<number[]>([]);
  const [hasExpend, setHasExpend] = useState<boolean>(false);
  const contentRef = useCallback((node: HTMLDivElement) => {
    if (node !== null) {
      const newHeight = node.getBoundingClientRect().height;
      const list = [...new Set([...heightList.current, newHeight])];
      heightList.current = [...list];
      if (heightList.current.length <= 1) {
        setHasExpend(false);
      } else {
        setHasExpend(true);
      }
    }
    return node;
  }, []);

  const {
    text = '',
    maxLength = 35,
    style = {},
    row = { rows: 1, EllipsisSymbol: true, expend: true },
    col = 8,
    copyable = false,
  } = props;

  const isTextToObject = typeof text === 'object';
  const isShowEllipsisSymbol = row.EllipsisSymbol ? '...' : '';
  const copyableProps = copyable
    ? { copyable: { text, tooltips: ['点击复制', '复制成功'] } }
    : {};
  const ellipsisClassName = row.EllipsisSymbol ? cx.ellipsis : '';
  const styles = {
    // maxWidth: 370,
    // wordWrap: 'break-word',
    // wordBreak: 'break-all',
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
          展开 <UpOutlined className={cx['apply-shake']} />
        </a>
      );
    } else {
      return (
        <a
          className="ant-typography-expand"
          onClick={() => setIsExpand(isExpandStatus)}
        >
          收起 <DownOutlined className={cx['apply-shake']} />
        </a>
      );
    }
  };

  const customRowBaseProps = {
    style: styles,
    ...copyableProps,
  };
  // 如果是元素 Paragraph 组件设置row为1时候 只显示... 需要手动设置为 rows >= 2
  const customRows = isTextToObject
    ? typeof row.rows == 'number'
      ? row.rows + 1
      : 2
    : row.rows;
  const customRowEllipsisParagraphProps = isExpand
    ? { ...customRowBaseProps }
    : {
        ...customRowBaseProps,
        ellipsis: {
          rows: customRows as number,
          expandable: hasExpend ? isExpand : false,
          suffix: hasExpend
            ? isExpand
              ? ''
              : ((getToggleButton(true) as any) as string)
            : '',
          tooltip: isTextToObject ? '' : text,
          onExpand: () => setIsExpand(true),
        },
      };
  const customRowEllipsisNotExpandParagraphProps = {
    ...customRowBaseProps,
    ellipsis: {
      rows: customRows as number,
      expandable: false,
      tooltip: isTextToObject ? '' : text,
    },
  };

  // row.rows = 1 且 text.length > maxLength
  const SingleOverflowParagraph = (
    <Tooltip title={text} style={styles} className={ellipsisClassName}>
      <Paragraph {...copyableProps} style={styles}>
        {isTextToObject
          ? ''
          : text.slice(0, maxLength) + isShowEllipsisSymbol ?? '--'}
      </Paragraph>
    </Tooltip>
  );

  // row.rows = 1 且 text.length <= maxLength
  const SingleParagraph = (
    <Paragraph {...copyableProps} style={styles} className={ellipsisClassName}>
      {text ?? '--'}
    </Paragraph>
  );

  // 设置了 row.autoSize
  const AutoSizeParagraph = isTextToObject ? (
    <Fragment>
      <Col span={col}>{text ?? '--'}</Col>
    </Fragment>
  ) : (
    <Fragment>
      <Col span={col}>
        <Paragraph {...copyableProps} className={ellipsisClassName}>
          <TextArea
            style={{ resize: 'none', ...styles }}
            autoSize
            bordered={false}
            readOnly
            value={text ?? '--'}
          />
        </Paragraph>
      </Col>
    </Fragment>
  );

  const CustomRowExpendParagraph = (
    <Col span={col} className={ellipsisClassName}>
      <Paragraph {...customRowEllipsisParagraphProps} ref={contentRef}>
        {text ?? '--'}
        {isExpand && getToggleButton(false)}
      </Paragraph>
    </Col>
  );

  const CustomRowNotExpendParagraph = (
    <Col span={col} className={ellipsisClassName}>
      <Paragraph {...customRowEllipsisNotExpandParagraphProps}>
        {text ?? '--'}
      </Paragraph>
    </Col>
  );

  if (row.rows == 'autoSize' && isTextToObject) {
    console.log(
      '当传入的text不是string类型时, 建议使用row={{ rows:1, expend: true }}',
    );
  }
  if (row.rows == 'autoSize') return AutoSizeParagraph;
  if (row.rows > 1 && row.expend == true) return CustomRowExpendParagraph;
  if (row.rows > 1 && !row.expend) return CustomRowNotExpendParagraph;
  if (isTextToObject) {
    console.log('只有当 row.rows >= 2 的时候才可以配置 row.expend');
    return CustomRowExpendParagraph;
  }

  return (
    <Col span={col}>
      <Paragraph style={styles} className={ellipsisClassName}>
        {text && text.length > maxLength
          ? SingleOverflowParagraph
          : SingleParagraph}
      </Paragraph>
    </Col>
  );
};

export default CustomTooltip;
