---
order: 2
group:
  path: /my-components
  title: 封装的业务组件
  order: 2
---

## MoneyFilter 金额格式化

<code src="./index.tsx" title='MoneyFilter' desc='金额分隔' inline='true'></code>

```ts
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
  separator = ',',
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
```

<API src="./index.tsx"  exports='["MoneyFilterProps"]'></API>
