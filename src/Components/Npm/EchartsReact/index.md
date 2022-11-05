---
order: 1
group:
  path: /npm
  title: npm package
  order: 1
---

## echarts-for-react

```tsx | pure
import { useRef, useImperativeHandle, forwardRef } from "react";
import type { EChartsReactProps } from "echarts-for-react/lib/types";
import ReactECharts from "echarts-for-react";

interface IHandle {
  ref: echarts.ECharts
}

const ReactEChart: React.ForwardRefRenderFunction<IHandle, EChartsReactProps> = (props, echartsRef: any) => {
  const { option, ...restProps } = props;
  const ref = useRef<any>(null!);
  useImperativeHandle(echartsRef, () => ({
    ref: ref.current.getEchartsInstance(),
  }));
  return (
    <div ref={echartsRef}>
      <ReactECharts ref={ref} option={option} {...restProps} />
    </div>
  );
};

export default forwardRef(ReactEChart);
```

<API src="./REcharts/index.tsx" hideTitle></API>

## DoubleCharts 两个图表联动

<code src="./DoubleCharts/index.tsx" inline={true} transform={true} iframe={true}></code>

## 手动触发 hover

<code src="./demo.tsx" inline={true} transform={true} iframe={true}></code>

```tsx | pure
// echarts引入
import * as echarts from 'echarts';
import { useEffect, useRef, useState } from 'react';

const Echarts = () => {
  const chartDom = useRef(null);
  const [myChart, setMyChart] = useState<echarts.ECharts>();
  // echarts 配置项
  let option = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      top: '5%',
      left: 'center',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2,
        },
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '40',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' },
        ],
      },
    ],
  };
  useEffect(() => {
    setTimeout(() => {
      // echarts 初始化
      chartDom?.current && setMyChart(echarts.init(chartDom?.current));
      myChart && option && myChart.setOption(option);
    });
  });

  return (
    <>
      <div
        ref={chartDom}
        style={{
          width: 800,
          height: 800,
          display: 'inline-block',
          verticalAlign: 'top',
        }}
      ></div>
      <div
        style={{ display: 'inline-block', fontSize: '24px' }}
        onMouseOver={() => {
          // 显示tooltip
          myChart &&
            myChart.dispatchAction({
              type: 'showTip',
              seriesIndex: 0,
              dataIndex: 1,
              position: 50,
            });
        }}
        onMouseLeave={() => {
          // 隐藏tooltip
          myChart &&
            myChart.dispatchAction({
              type: 'hideTip',
            });
        }}
      >
        1111
      </div>
    </>
  );
};

export default Echarts;
```
