import * as echarts from 'echarts';
import { useEffect, useRef, useState } from 'react';

const option = {
  title: [
    {
      text: 'SZ000638',
      left: '3%',
    },
  ],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
    },
  },
  legend: {
    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
  },
  axisPointer: {
    link: {
      xAxisIndex: 'all',
    },
    label: {
      backgroundColor: '#777',
    },
  },
  grid: [
    {
      left: '3%',
      right: '3%',
      top: 80,
      height: 200,
    },
    {
      left: '3%',
      right: '3%',
      top: 400,
      height: 200,
    },
  ],
  xAxis: [
    {
      // gridIndex: 0,
      // scale: true,
      // boundaryGap: false,
      // axisLine: {
      //   onZero: false
      // },
      // splitLine: {
      //   show: false
      // },
      // splitNumber: 20,
      // min: 'dataMin',
      // max: 'dataMax',
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    {
      type: 'category',
      gridIndex: 1,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      scale: true,
      boundaryGap: true,
      // axisLine: {
      //   onZero: true
      // },
      // splitLine: {
      //   show: false
      // },
      // splitNumber: 20,
      // min: 'dataMin',
      // max: 'dataMax'
    },
  ],
  yAxis: [
    {
      scale: true,
      gridIndex: 0,
      splitNumber: 3,
      // splitArea: {
      //   show: true
      // }
    },
    {
      scale: false,
      gridIndex: 1,
      splitNumber: 3,
      // splitArea: {
      //   show: true
      // }
    },
  ],
  dataZoom: [
    {
      type: 'inside',
      start: 25,
      xAxisIndex: [0, 1],
      top: 10,
      end: 75,
    },
    {
      show: true,
      xAxisIndex: [0, 1],
      type: 'slider',
      y: '90%',
      top: '45%',
      start: 25,
      end: 75,
    },
  ],
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      data: [150, 232, 201, 154, 190, 330, 410],
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      data: [320, 332, 301, 334, 390, 330, 320],
    },
    {
      name: 'macd',
      type: 'line',
      xAxisIndex: '1',
      yAxisIndex: '1',
      data: [320, 332, 301, 334, 390, 330, 320],
      lineStyle: {
        normal: {
          opacity: 0.5,
        },
      },
    },
    {
      name: 'macd',
      type: 'line',
      xAxisIndex: '1',
      yAxisIndex: '1',
      data: [1, 222, 222, 22, 22, 22, 123],
      lineStyle: {
        normal: {
          opacity: 0.5,
        },
      },
    },
  ],
};

const Echarts = () => {
  const chartDom = useRef<HTMLDivElement>(null!);
  const [myChart, setMyChart] = useState<echarts.ECharts>(null!);

  useEffect(() => {
    chartDom?.current && setMyChart(echarts.init(chartDom?.current));
    myChart && option && myChart.setOption(option);
  });

  return (
    <div
      ref={chartDom}
      style={{
        width: 800,
        height: 800,
        display: 'inline-block',
        verticalAlign: 'top',
      }}
    />
  );
};

export default Echarts;
