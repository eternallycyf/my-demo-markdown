import * as echarts from 'echarts';
import React, { useEffect, useRef, useState } from 'react';
import { option } from './charts';

const Echarts = () => {
  const chartDom = useRef<HTMLDivElement>(null!);
  const [myChart, setMyChart] = useState<echarts.ECharts>(null!);

  useEffect(() => {
    chartDom?.current && setMyChart(echarts.init(chartDom?.current));
    myChart && option && myChart.setOption(option);
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
    </>
  );
};

export default Echarts;
