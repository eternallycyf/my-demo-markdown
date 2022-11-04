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
