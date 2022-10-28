import React, { useState } from 'react';
import { Input } from 'antd';

interface IMoneyFilterProps {
  /**
   * @description 需要格式化的值
   * @default 0
   * @param {(number | string)}
   */
  num: number | string;
  /**
   * @description 保留几位小数，不传小数不处理，不够会填充0
   * @default 2
   * @param {number} [precision]
   */
  precision: number | string;
  /**
   * @description 分隔符
   * @default ,
   * @param {string} [separator=',']
   */
  separator: string;
}

export const MoneyFilterProps = <T,>(props: IMoneyFilterProps) => <></>;

const App = () => {
  const [num, setNum] = useState<string | number>(11231231111.2312312);
  const [SEPARATOR, setSeparator] = useState(',');

  /**
   * 数字千分位展示并显示n位小数
   * @param {(number | string)} 需要格式化的值
   * @param {number} [precision] 保留几位小数，不传小数不处理，不够会填充0
   * @param {string} [separator=','] 分隔符
   * @return {(number | string)} 返回0或者格式化的值
   */
  const formatNumber = (
    num: number | string,
    precision = 2,
    separator = SEPARATOR,
  ): number | string => {
    if (num == 0) return 0;
    if (!num) return '--';
    let parts;
    const textStr = num.toString();
    const decStr = textStr.split('.')[1];
    // 判断是否为数字
    if (!isNaN(parseFloat(num as string)) && isFinite(num as number)) {
      num = Number(num);
      // 处理小数点位数
      num = (typeof precision !== 'undefined'
        ? num.toFixed(precision)
        : num
      ).toString();
      // 分离数字的小数部分和整数部分
      parts = num.split('.');
      parts[0] = parts[0]
        .toString()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${separator}`);
      if (!decStr) {
        parts.pop();
        return parts as any;
      }
      return parts.join('.');
    }
    return 0;
  };

  return (
    <div>
      <h3>{formatNumber(num)}</h3>
      <h2>1.输入金额测试</h2>
      <Input value={num} onChange={e => setNum(e.target.value)} />
      <h2>2.分隔符号</h2>
      <Input value={SEPARATOR} onChange={e => setSeparator(e.target.value)} />
    </div>
  );
};

export default App;
