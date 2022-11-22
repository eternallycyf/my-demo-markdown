import moment from 'moment';
import './index.less';
import {
  DATA,
  FORMATE_TIME,
  GREEN,
  ITooltipConfig,
  RED,
  TIME,
} from './constant';

const legend1 = [
  { name: '组合累计收益率', icon: 'rect' },
  { name: '基准累计收益率', icon: 'rect' },
];

const legend2 = [
  { name: '组合较前一天收益率', icon: 'rect' },
  { name: '基准较前一天收益率', icon: 'rect' },
];

const index_contrast = [
  {
    name: '组合指数',
    dataKey: 'compositeIndex',
    // 格式化数据后 加的符号 如 '%'
    unitSymbol: '',
    // 判断渲染到第一个图表 还是第二个图表上
    isSecond: false,
    // 是否有tooltip中的矩形
    haveRect: false,
  },
  {
    name: '基准指数',
    dataKey: 'benchmarkIndex',
    unitSymbol: '',
    isSecond: false,
    haveRect: false,
  },
  {
    name: '组合累计收益率',
    dataKey: 'compositeAccumulatedReturn',
    color: '#EF785D',
    unitSymbol: '%',
    isSecond: false,
    haveRect: true,
  },
  {
    name: '基准累计收益率',
    dataKey: 'benchmarkAccumulatedReturn',
    color: '#5B8FF9',
    unitSymbol: '%',
    isSecond: false,
    haveRect: true,
  },
];

const volatility_contrast = [
  {
    name: '组合较前一天收益率',
    dataKey: 'compositeReturn',
    color: '#FDB969',
    unitSymbol: '%',
    isSecond: true,
    haveRect: true,
  },
  {
    name: '基准较前一天收益率',
    dataKey: 'benchmarkReturn',
    color: '#43B6E7',
    unitSymbol: '%',
    isSecond: true,
    haveRect: true,
  },
];

const data_config = [...index_contrast, ...volatility_contrast];

const formatNumber = (number: number, isPercent = true) => {
  if (number == 0) return 0;
  if (number == undefined) return '--';
  if (!number) return '--';
  if (isPercent) {
    const haveDecimal = /\./.test((number * 100).toString());
    return haveDecimal ? (number * 100).toFixed(2) : number * 100;
  }
  const haveDecimal = /\./.test(number.toString());
  return haveDecimal ? number.toFixed(2) : number;
};

const renderTooltip = (config: ITooltipConfig) => {
  return `
  <div class="tooltipBox" style={{ marginLeft: 100 }}>
        <div class="timeContent">
          <svg viewBox="64 64 896 896" focusable="false" data-icon="calendar" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"></path></svg>
          <span class="time">${config.time}</span>
        </div>
        <div class="hr"></div>
        <div>
          <div class="contrastContent">
            <div class="title">${config.index_contrast_title}</div>
            ${config.index_contrast
              .map(item => {
                const left = item.haveRect
                  ? `<div class='rect' style=\"--color:${item.rectColor};\"></div>`
                  : '';
                return `
            <div class="content">
              <div class='left'>
                ${left}
                <div class='text'>${item.name}</div>
              </div>
              <div class='right' style=\"--color:${item.valueColor};\">${item.value}${item.unitSymbol}</div>
            </div>
            `;
              })
              .join('')}
            <div class="hr"></div>
            <div class="title">${config.volatility_contrast_title}</div>
            ${config.volatility_contrast
              .map(item => {
                const left = item.haveRect
                  ? `<div class='rect' style=\"--color:${item.rectColor};\"></div>`
                  : '';
                return `
            <div class="content">
              <div class='left'>
                ${left}
                <div class='text'>${item.name}</div>
              </div>
              <div class='right' style=\"--color:${item.valueColor};\">${item.value}${item.unitSymbol}</div>
            </div>
            `;
              })
              .join('')}
          </div>
  `;
};

export const option = {
  title: [
    {
      text: '组合指数',
      top: '4%',
      left: '-0.5%',
    },
  ],
  legend: [
    {
      right: '4%',
      top: 30,
      itemWidth: 16,
      itemHeight: 4,
      textStyle: { color: '#5B6371', fontSize: 12, fontWeight: 400 },
      orient: 'horizontal',
      data: legend1,
    },
    {
      top: '40%',
      right: '4%',
      itemWidth: 16,
      itemHeight: 4,
      textStyle: { color: '#5B6371', fontSize: 12, fontWeight: 400 },
      orient: 'horizontal',
      data: legend2,
    },
  ],
  axisPointer: {
    type: 'cross',
    axis: 'radius',
    link: {
      xAxisIndex: 'all',
    },
    lineStyle: {
      type: 'dashed',
    },
    label: {
      backgroundColor: 'black',
      color: '#fff',
    },
  },
  grid: [
    {
      left: '10%',
      right: '5%',
      top: 80,
      height: 200,
    },
    {
      left: '10%',
      right: '5%',
      top: 400,
      height: 200,
    },
  ],
  xAxis: [
    {
      type: 'category',
      data: DATA.map(item => moment(item[TIME]).format(FORMATE_TIME)),
      min: 'dataMin',
      max: 'dataMax',
      boundaryGap: true,
      alignWithLabel: true,
      axisLine: {
        lineStyle: {
          color: '#CACED7',
        },
      },
      axisLabel: {
        textStyle: {
          color: '#5B6371 ',
          fontSize: 12,
          fontWeight: 400,
        },
        interval: 0,
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed', //默认实线，dashed虚线
          width: 1,
          color: 'transparent',
        },
      },
      axisTick: {
        alignWithLabel: true,
      },
    },
    {
      type: 'category',
      data: DATA.map(item => moment(item[TIME]).format(FORMATE_TIME)),
      gridIndex: 1,
      scale: true,
      min: 'dataMin',
      max: 'dataMax',
      boundaryGap: true,
      alignWithLabel: true,
      axisLabel: {
        textStyle: {
          color: '#5B6371 ',
          fontSize: 12,
          fontWeight: 400,
        },
        interval: 0,
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed', //默认实线，dashed虚线
          width: 1,
          color: 'transparent',
        },
      },
      axisLine: {
        lineStyle: {
          color: '#CACED7',
        },
      },
      axisTick: {
        alignWithLabel: true,
      },
    },
  ],
  yAxis: [
    {
      scale: true,
      gridIndex: 0,
      splitNumber: 3,
      axisLabel: {
        textStyle: {
          color: '#5B6371 ',
          fontSize: 12,
          fontWeight: 400,
        },
        formatter: (value: number) => ~~value + '%',
        align: 'right',
      },
      splitLine: {
        show: true,
        lineStyle: {
          width: 1,
          color: 'rgba(239,241,244,1)',
        },
      },
      axisLine: {
        lineStyle: {
          color: 'transparent',
        },
      },
    },
    {
      scale: false,
      gridIndex: 1,
      splitNumber: 3,
      axisLabel: {
        textStyle: {
          color: '#5B6371 ',
          fontSize: 12,
          fontWeight: 400,
        },
        formatter: (value: number) => ~~value + '%',
        align: 'right',
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed', //默认实线，dashed虚线
          width: 1,
          color: 'rgba(239,241,244,1)',
        },
      },
      axisLine: {
        lineStyle: {
          color: 'transparent',
        },
      },
    },
  ],
  dataZoom: [
    {
      type: 'inside',
      // start: 0,
      // end: 100,
      // 只有在第一个设置有效
      startValue: '2020.01.04',
      xAxisIndex: [0, 1],
      top: 10,
    },
    {
      show: true,
      xAxisIndex: [0, 1],
      type: 'slider',
      y: '90%',
      top: '45%',
      dataBackground: {
        lineStyle: {
          color: '#B2CFFB',
          opacity: 1,
        },
        areaStyle: {
          color: '#E0EDFF',
        },
      },
      borderColor: '#B2CFFB',
      fillerColor: 'rgba(245,249,255,0.4)',
      textStyle: {
        color: '#5B6371',
        fontSize: 12,
        fontWeight: 400,
      },
    },
  ],
  series: data_config.map(item => ({
    name: item.name,
    data: DATA.map((ele: any) => ele[item.dataKey]),
    lineStyle: { color: item.color },
    itemStyle: { color: item.color },
    xAxisIndex: item.isSecond ? '1' : '0',
    yAxisIndex: item.isSecond ? '1' : '0',
    type: 'line',
    stack: 'Total',
    textStyle: {
      color: 'transparent',
      fontSize: 12,
      fontWeight: 400,
    },
    symbol: 'none',
    label: {
      show: false,
      rotate: 0,
      position: 'top',
      distance: -10,
      textStyle: {
        color: '#5B6371',
        fontSize: 12,
        fontWeight: 400,
      },
      formatter: (config: any) =>
        formatNumber(config.data[item.dataKey]) + item.unitSymbol,
    },
  })),
  tooltip: {
    trigger: 'axis',
    renderMode: 'html',
    className:
      'tooltipBox timeContent time hr contrastContent title content left rect text right',
    axisPointer: {
      type: 'cross',
      shadowStyle: {
        color: 'black',
        opacity: 0.1,
      },
    },
    backgroundColor: '#fff',
    borderColor: 'transparent',
    formatter: (params: any) => {
      const arr = params.sort(
        (a: any, b: any) => a.seriesIndex - b.seriesIndex,
      );
      const time = moment(arr[0].axisValue).format('YYYY年MM月DD日');
      let config: any = {
        time,
        index_contrast: [],
        index_contrast_title: '指数对比',
        volatility_contrast: [],
        volatility_contrast_title: '波动对比',
      };
      arr.forEach((item: any, index: number) => {
        const { seriesName, value } = item;
        if (index < index_contrast.length) {
          config.index_contrast.push({
            name: seriesName,
            value: index_contrast[index].haveRect
              ? formatNumber(value)
              : ~~value,
            haveRect: index_contrast[index].haveRect,
            rectColor: index_contrast[index].color,
            valueColor: formatNumber(value) > 0 ? RED : GREEN,
            unitSymbol: index_contrast[index].unitSymbol,
          });
        } else {
          config.volatility_contrast.push({
            name: seriesName,
            value: data_config[index].haveRect ? formatNumber(value) : ~value,
            haveRect: data_config[index].haveRect,
            rectColor: data_config[index].color,
            valueColor: formatNumber(value) > 0 ? RED : GREEN,
            unitSymbol: data_config[index].unitSymbol,
          });
        }
      });
      return renderTooltip(config);
    },
  },
};
