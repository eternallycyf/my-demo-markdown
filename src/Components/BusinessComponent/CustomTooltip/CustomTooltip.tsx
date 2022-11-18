import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { Col, Input, Spin, Tooltip, Typography } from 'antd';
import React, { FC, Fragment, useLayoutEffect, useRef, useState } from 'react';
import cx from './index.less';
const { Paragraph, Text } = Typography;
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
  /**
   * @description
   * 当一页传入两个以上的CustomTooltip展开收起功能时，
   * 第一个不用设置 其他的必须设置该值，否则会出现展开收起的bug
   * 是根据类名查找子元素实现的 传入一个随机的字符串即可
   * @type string
   * @default ''
   */
  className?: string;
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

/**
 * todo
 * 1. 初始化闪烁问题
 * 2. 初始化必须传入类名问题
 */
const CustomTooltip: FC<ICustomTooltipProps> = props => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isExpand, setIsExpand] = useState<boolean>(false);
  const [showButton, setShowButton] = useState<boolean>(true);
  const isInit = useRef<boolean>(false);

  const {
    text = '',
    maxLength = 35,
    style = {},
    row = {
      rows: 1,
      EllipsisSymbol: true,
      expend: true,
      className: Math.random()
        .toString(36)
        .substr(2),
    },
    col = 8,
    copyable = false,
  } = props;

  useLayoutEffect(() => {
    setLoading(true);
    setTimeout(function() {
      try {
        const classNames = row.className ? row.className : cx.ellipsis;
        const content = document.getElementsByClassName(classNames)[0]
          .children[0].children;
        const item = content[content.length - 2];
        const isShow = item.getAttribute('aria-hidden') ? true : false;
        setShowButton(isShow);
        setLoading(false);
        isInit.current = true;
      } catch (error) {
        setShowButton(true);
        setLoading(false);
        isInit.current = true;
      }
    }, 200);
  }, []);

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
          expandable: isExpand,
          suffix: showButton
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
    <Spin spinning={loading}>
      <Col span={col} className={`${ellipsisClassName} ${row.className}`}>
        <Paragraph {...customRowEllipsisParagraphProps}>
          {text ?? '--'}
          {showButton && isExpand && getToggleButton(false)}
        </Paragraph>
      </Col>
    </Spin>
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
