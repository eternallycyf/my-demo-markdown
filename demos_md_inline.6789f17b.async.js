(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{JMR6:function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin

//# sourceURL=webpack:///./src/Components/Npm/EchartsReact/DoubleCharts/index.less?`)},Tnyx:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("tJVT");

// EXTERNAL MODULE: external "window.echarts"
var external_window_echarts_ = __webpack_require__("Fk5u");

// EXTERNAL MODULE: external "window.React"
var external_window_React_ = __webpack_require__("cDcd");
var external_window_React_default = /*#__PURE__*/__webpack_require__.n(external_window_React_);

// EXTERNAL MODULE: external "window.moment"
var external_window_moment_ = __webpack_require__("wy2R");
var external_window_moment_default = /*#__PURE__*/__webpack_require__.n(external_window_moment_);

// EXTERNAL MODULE: ./src/Components/Npm/EchartsReact/DoubleCharts/index.less
var DoubleCharts = __webpack_require__("JMR6");

// CONCATENATED MODULE: ./src/Components/Npm/EchartsReact/DoubleCharts/constant.tsx
const TIME = 'time';
const FORMATE_TIME = 'YYYY.MM.DD';
const GREEN = '#0FBE3F';
const RED = '#E62C3B';
const DATA = [{
  time: '2020-01-02',
  compositeAccumulatedReturn: 0.12,
  benchmarkAccumulatedReturn: 0.12,
  compositeReturn: 0.12,
  benchmarkReturn: 0.12,
  compositeIndex: -2000,
  benchmarkIndex: -2000
}, {
  time: '2020-01-03',
  compositeAccumulatedReturn: -0.124,
  benchmarkAccumulatedReturn: -0.123,
  compositeReturn: -0.124,
  benchmarkReturn: -0.123,
  compositeIndex: -3000,
  benchmarkIndex: -3000
}, {
  time: '2020-01-04',
  compositeAccumulatedReturn: -0.124,
  benchmarkAccumulatedReturn: -0.123,
  compositeReturn: -0.124,
  benchmarkReturn: -0.123,
  compositeIndex: -4000,
  benchmarkIndex: -4000
}, {
  time: '2020-01-05',
  compositeAccumulatedReturn: 0.124,
  benchmarkAccumulatedReturn: 0.123,
  compositeReturn: 0.124,
  benchmarkReturn: 0.123,
  compositeIndex: 1000,
  benchmarkIndex: 1000
}, {
  time: '2020-01-06',
  compositeAccumulatedReturn: 0.124,
  benchmarkAccumulatedReturn: 0.123,
  compositeReturn: 0.124,
  benchmarkReturn: 0.123,
  compositeIndex: 1000,
  benchmarkIndex: 1000
}, {
  time: '2020-01-07',
  compositeAccumulatedReturn: 0.124,
  benchmarkAccumulatedReturn: 0.123,
  compositeReturn: 0.124,
  benchmarkReturn: 0.123,
  compositeIndex: 1000,
  benchmarkIndex: 1000
}, {
  time: '2020-01-08',
  compositeAccumulatedReturn: 0.124,
  benchmarkAccumulatedReturn: 0.123,
  compositeReturn: 0.124,
  benchmarkReturn: 0.123,
  compositeIndex: 1000,
  benchmarkIndex: 1000
}];
// CONCATENATED MODULE: ./src/Components/Npm/EchartsReact/DoubleCharts/charts.tsx



const legend1 = [{
  name: '\u7EC4\u5408\u7D2F\u8BA1\u6536\u76CA\u7387',
  icon: 'rect'
}, {
  name: '\u57FA\u51C6\u7D2F\u8BA1\u6536\u76CA\u7387',
  icon: 'rect'
}];
const legend2 = [{
  name: '\u7EC4\u5408\u8F83\u524D\u4E00\u5929\u6536\u76CA\u7387',
  icon: 'rect'
}, {
  name: '\u57FA\u51C6\u8F83\u524D\u4E00\u5929\u6536\u76CA\u7387',
  icon: 'rect'
}];
const index_contrast = [{
  name: '\u7EC4\u5408\u6307\u6570',
  dataKey: 'compositeIndex',
  // \u683C\u5F0F\u5316\u6570\u636E\u540E \u52A0\u7684\u7B26\u53F7 \u5982 '%'
  unitSymbol: '',
  // \u5224\u65AD\u6E32\u67D3\u5230\u7B2C\u4E00\u4E2A\u56FE\u8868 \u8FD8\u662F\u7B2C\u4E8C\u4E2A\u56FE\u8868\u4E0A
  isSecond: false,
  // \u662F\u5426\u6709tooltip\u4E2D\u7684\u77E9\u5F62
  haveRect: false
}, {
  name: '\u57FA\u51C6\u6307\u6570',
  dataKey: 'benchmarkIndex',
  unitSymbol: '',
  isSecond: false,
  haveRect: false
}, {
  name: '\u7EC4\u5408\u7D2F\u8BA1\u6536\u76CA\u7387',
  dataKey: 'compositeAccumulatedReturn',
  color: '#EF785D',
  unitSymbol: '%',
  isSecond: false,
  haveRect: true
}, {
  name: '\u57FA\u51C6\u7D2F\u8BA1\u6536\u76CA\u7387',
  dataKey: 'benchmarkAccumulatedReturn',
  color: '#5B8FF9',
  unitSymbol: '%',
  isSecond: false,
  haveRect: true
}];
const volatility_contrast = [{
  name: '\u7EC4\u5408\u8F83\u524D\u4E00\u5929\u6536\u76CA\u7387',
  dataKey: 'compositeReturn',
  color: '#FDB969',
  unitSymbol: '%',
  isSecond: true,
  haveRect: true
}, {
  name: '\u57FA\u51C6\u8F83\u524D\u4E00\u5929\u6536\u76CA\u7387',
  dataKey: 'benchmarkReturn',
  color: '#43B6E7',
  unitSymbol: '%',
  isSecond: true,
  haveRect: true
}];
const data_config = [...index_contrast, ...volatility_contrast];

const formatNumber = (number, isPercent = true) => {
  if (number == 0) return 0;
  if (number == undefined) return '--';
  if (!number) return '--';

  if (isPercent) {
    const haveDecimal = /\\./.test((number * 100).toString());
    return haveDecimal ? (number * 100).toFixed(2) : number * 100;
  }

  const haveDecimal = /\\./.test(number.toString());
  return haveDecimal ? number.toFixed(2) : number;
};

const renderTooltip = config => {
  return \`
  <div class="tooltipBox" style={{ marginLeft: 100 }}>
        <div class="timeContent">
          <svg viewBox="64 64 896 896" focusable="false" data-icon="calendar" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"></path></svg>
          <span class="time">\${config.time}</span>
        </div>
        <div class="hr"></div>
        <div>
          <div class="contrastContent">
            <div class="title">\${config.index_contrast_title}</div>
            \${config.index_contrast.map(item => {
    const left = item.haveRect ? \`<div class='rect' style=\\"--color:\${item.rectColor};\\"></div>\` : '';
    return \`
            <div class="content">
              <div class='left'>
                \${left}
                <div class='text'>\${item.name}</div>
              </div>
              <div class='right' style=\\"--color:\${item.valueColor};\\">\${item.value}\${item.unitSymbol}</div>
            </div>
            \`;
  }).join('')}
            <div class="hr"></div>
            <div class="title">\${config.volatility_contrast_title}</div>
            \${config.volatility_contrast.map(item => {
    const left = item.haveRect ? \`<div class='rect' style=\\"--color:\${item.rectColor};\\"></div>\` : '';
    return \`
            <div class="content">
              <div class='left'>
                \${left}
                <div class='text'>\${item.name}</div>
              </div>
              <div class='right' style=\\"--color:\${item.valueColor};\\">\${item.value}\${item.unitSymbol}</div>
            </div>
            \`;
  }).join('')}
          </div>
  \`;
};

const charts_option = {
  title: [{
    text: '\u7EC4\u5408\u6307\u6570',
    top: '4%',
    left: '-0.5%'
  }],
  legend: [{
    right: '4%',
    top: 30,
    itemWidth: 16,
    itemHeight: 4,
    textStyle: {
      color: '#5B6371',
      fontSize: 12,
      fontWeight: 400
    },
    orient: 'horizontal',
    data: legend1
  }, {
    top: '40%',
    right: '4%',
    itemWidth: 16,
    itemHeight: 4,
    textStyle: {
      color: '#5B6371',
      fontSize: 12,
      fontWeight: 400
    },
    orient: 'horizontal',
    data: legend2
  }],
  axisPointer: {
    type: 'cross',
    axis: 'radius',
    link: {
      xAxisIndex: 'all'
    },
    lineStyle: {
      type: 'dashed'
    },
    label: {
      backgroundColor: 'black',
      color: '#fff'
    }
  },
  grid: [{
    left: '10%',
    right: '5%',
    top: 80,
    height: 200
  }, {
    left: '10%',
    right: '5%',
    top: 400,
    height: 200
  }],
  xAxis: [{
    type: 'category',
    data: DATA.map(item => external_window_moment_default()(item[TIME]).format(FORMATE_TIME)),
    min: 'dataMin',
    max: 'dataMax',
    boundaryGap: true,
    alignWithLabel: true,
    axisLine: {
      lineStyle: {
        color: '#CACED7'
      }
    },
    axisLabel: {
      textStyle: {
        color: '#5B6371 ',
        fontSize: 12,
        fontWeight: 400
      },
      interval: 0
    },
    splitLine: {
      show: true,
      lineStyle: {
        type: 'dashed',
        //\u9ED8\u8BA4\u5B9E\u7EBF\uFF0Cdashed\u865A\u7EBF
        width: 1,
        color: 'transparent'
      }
    },
    axisTick: {
      alignWithLabel: true
    }
  }, {
    type: 'category',
    data: DATA.map(item => external_window_moment_default()(item[TIME]).format(FORMATE_TIME)),
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
        fontWeight: 400
      },
      interval: 0
    },
    splitLine: {
      show: true,
      lineStyle: {
        type: 'dashed',
        //\u9ED8\u8BA4\u5B9E\u7EBF\uFF0Cdashed\u865A\u7EBF
        width: 1,
        color: 'transparent'
      }
    },
    axisLine: {
      lineStyle: {
        color: '#CACED7'
      }
    },
    axisTick: {
      alignWithLabel: true
    }
  }],
  yAxis: [{
    scale: true,
    gridIndex: 0,
    splitNumber: 3,
    axisLabel: {
      textStyle: {
        color: '#5B6371 ',
        fontSize: 12,
        fontWeight: 400
      },
      formatter: value => ~~value + '%',
      align: 'right'
    },
    splitLine: {
      show: true,
      lineStyle: {
        width: 1,
        color: 'rgba(239,241,244,1)'
      }
    },
    axisLine: {
      lineStyle: {
        color: 'transparent'
      }
    }
  }, {
    scale: false,
    gridIndex: 1,
    splitNumber: 3,
    axisLabel: {
      textStyle: {
        color: '#5B6371 ',
        fontSize: 12,
        fontWeight: 400
      },
      formatter: value => ~~value + '%',
      align: 'right'
    },
    splitLine: {
      show: true,
      lineStyle: {
        type: 'dashed',
        //\u9ED8\u8BA4\u5B9E\u7EBF\uFF0Cdashed\u865A\u7EBF
        width: 1,
        color: 'rgba(239,241,244,1)'
      }
    },
    axisLine: {
      lineStyle: {
        color: 'transparent'
      }
    }
  }],
  dataZoom: [{
    type: 'inside',
    start: 0,
    end: 100,
    xAxisIndex: [0, 1],
    top: 10
  }, {
    show: true,
    xAxisIndex: [0, 1],
    type: 'slider',
    y: '90%',
    top: '45%',
    start: 0,
    end: 100,
    dataBackground: {
      lineStyle: {
        color: '#B2CFFB',
        opacity: 1
      },
      areaStyle: {
        color: '#E0EDFF'
      }
    },
    borderColor: '#B2CFFB',
    fillerColor: 'rgba(245,249,255,0.4)',
    textStyle: {
      color: '#5B6371',
      fontSize: 12,
      fontWeight: 400
    }
  }],
  series: data_config.map(item => ({
    name: item.name,
    data: DATA.map(ele => ele[item.dataKey]),
    lineStyle: {
      color: item.color
    },
    itemStyle: {
      color: item.color
    },
    xAxisIndex: item.isSecond ? '1' : '0',
    yAxisIndex: item.isSecond ? '1' : '0',
    type: 'line',
    stack: 'Total',
    textStyle: {
      color: 'transparent',
      fontSize: 12,
      fontWeight: 400
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
        fontWeight: 400
      },
      formatter: config => formatNumber(config.data[item.dataKey]) + item.unitSymbol
    }
  })),
  tooltip: {
    trigger: 'axis',
    renderMode: 'html',
    className: 'tooltipBox timeContent time hr contrastContent title content left rect text right',
    axisPointer: {
      type: 'cross',
      shadowStyle: {
        color: 'black',
        opacity: 0.1
      }
    },
    backgroundColor: '#fff',
    borderColor: 'transparent',
    formatter: params => {
      const arr = params.sort((a, b) => a.seriesIndex - b.seriesIndex);
      const time = external_window_moment_default()(arr[0].axisValue).format('YYYY\u5E74MM\u6708DD\u65E5');
      let config = {
        time,
        index_contrast: [],
        index_contrast_title: '\u6307\u6570\u5BF9\u6BD4',
        volatility_contrast: [],
        volatility_contrast_title: '\u6CE2\u52A8\u5BF9\u6BD4'
      };
      arr.forEach((item, index) => {
        const seriesName = item.seriesName,
              value = item.value;

        if (index < index_contrast.length) {
          config.index_contrast.push({
            name: seriesName,
            value: index_contrast[index].haveRect ? formatNumber(value) : ~~value,
            haveRect: index_contrast[index].haveRect,
            rectColor: index_contrast[index].color,
            valueColor: formatNumber(value) > 0 ? RED : GREEN,
            unitSymbol: index_contrast[index].unitSymbol
          });
        } else {
          config.volatility_contrast.push({
            name: seriesName,
            value: data_config[index].haveRect ? formatNumber(value) : ~value,
            haveRect: data_config[index].haveRect,
            rectColor: data_config[index].color,
            valueColor: formatNumber(value) > 0 ? RED : GREEN,
            unitSymbol: data_config[index].unitSymbol
          });
        }
      });
      return renderTooltip(config);
    }
  }
};
// CONCATENATED MODULE: ./src/Components/Npm/EchartsReact/DoubleCharts/index.tsx





const Echarts = () => {
  const chartDom = Object(external_window_React_["useRef"])(null);

  const _useState = Object(external_window_React_["useState"])(null),
        _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
        myChart = _useState2[0],
        setMyChart = _useState2[1];

  Object(external_window_React_["useEffect"])(() => {
    (chartDom === null || chartDom === void 0 ? void 0 : chartDom.current) && setMyChart(external_window_echarts_["init"](chartDom === null || chartDom === void 0 ? void 0 : chartDom.current));
    myChart && charts_option && myChart.setOption(charts_option);
  });
  return /*#__PURE__*/external_window_React_default.a.createElement(external_window_React_default.a.Fragment, null, /*#__PURE__*/external_window_React_default.a.createElement("div", {
    ref: chartDom,
    style: {
      width: 800,
      height: 800,
      display: 'inline-block',
      verticalAlign: 'top'
    }
  }));
};

/* harmony default export */ var EchartsReact_DoubleCharts = __webpack_exports__["default"] = (Echarts);

//# sourceURL=webpack:///./src/Components/Npm/EchartsReact/DoubleCharts/index.tsx_+_2_modules?`)},UCGG:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoneyFilterProps", function() { return MoneyFilterProps; });
/* harmony import */ var antd_es_input_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5NDa");
/* harmony import */ var antd_es_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("5rEg");
/* harmony import */ var _Users_eternallycyf_Documents_GitHub_case_my_demo_markdown_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tJVT");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




const MoneyFilterProps = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null);

const App = () => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(11231231111.2312312),
        _useState2 = Object(_Users_eternallycyf_Documents_GitHub_case_my_demo_markdown_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState, 2),
        num = _useState2[0],
        setNum = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(','),
        _useState4 = Object(_Users_eternallycyf_Documents_GitHub_case_my_demo_markdown_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState3, 2),
        SEPARATOR = _useState4[0],
        setSeparator = _useState4[1];
  /**
   * \u6570\u5B57\u5343\u5206\u4F4D\u5C55\u793A\u5E76\u663E\u793An\u4F4D\u5C0F\u6570
   * @param {(number | string)} \u9700\u8981\u683C\u5F0F\u5316\u7684\u503C
   * @param {number} [precision] \u4FDD\u7559\u51E0\u4F4D\u5C0F\u6570\uFF0C\u4E0D\u4F20\u5C0F\u6570\u4E0D\u5904\u7406\uFF0C\u4E0D\u591F\u4F1A\u586B\u51450
   * @param {string} [separator=','] \u5206\u9694\u7B26
   * @return {(number | string)} \u8FD4\u56DE0\u6216\u8005\u683C\u5F0F\u5316\u7684\u503C
   */


  const formatNumber = (num, precision = 2, separator = SEPARATOR) => {
    if (num == 0) return 0;
    if (!num) return '--';
    let parts;
    const textStr = num.toString();
    const decStr = textStr.split('.')[1]; // \u5224\u65AD\u662F\u5426\u4E3A\u6570\u5B57

    if (!isNaN(parseFloat(num)) && isFinite(num)) {
      num = Number(num); // \u5904\u7406\u5C0F\u6570\u70B9\u4F4D\u6570

      num = (typeof precision !== 'undefined' ? num.toFixed(precision) : num).toString(); // \u5206\u79BB\u6570\u5B57\u7684\u5C0F\u6570\u90E8\u5206\u548C\u6574\u6570\u90E8\u5206

      parts = num.split('.');
      parts[0] = parts[0].toString().replace(/(\\d)(?=(\\d{3})+(?!\\d))/g, \`$1\${separator}\`);

      if (!decStr) {
        parts.pop();
        return parts;
      }

      return parts.join('.');
    }

    return 0;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", null, formatNumber(num)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", null, "1.\\u8F93\\u5165\\u91D1\\u989D\\u6D4B\\u8BD5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_es_input__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    value: num,
    onChange: e => setNum(e.target.value)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", null, "2.\\u5206\\u9694\\u7B26\\u53F7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_es_input__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    value: SEPARATOR,
    onChange: e => setSeparator(e.target.value)
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

//# sourceURL=webpack:///./src/Components/BusinessComponent/MoneyFilter/index.tsx?`)},XWPg:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_eternallycyf_Documents_GitHub_case_my_demo_markdown_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tJVT");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Fk5u");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_2__);


// echarts\u5F15\u5165



const Echarts = () => {
  const chartDom = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
        _useState2 = Object(_Users_eternallycyf_Documents_GitHub_case_my_demo_markdown_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
        myChart = _useState2[0],
        setMyChart = _useState2[1]; // echarts \u914D\u7F6E\u9879


  let option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [{
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '40',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [{
        value: 1048,
        name: 'Search Engine'
      }, {
        value: 735,
        name: 'Direct'
      }, {
        value: 580,
        name: 'Email'
      }, {
        value: 484,
        name: 'Union Ads'
      }, {
        value: 300,
        name: 'Video Ads'
      }]
    }]
  };
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setTimeout(() => {
      // echarts \u521D\u59CB\u5316
      (chartDom === null || chartDom === void 0 ? void 0 : chartDom.current) && setMyChart(echarts__WEBPACK_IMPORTED_MODULE_2__["init"](chartDom === null || chartDom === void 0 ? void 0 : chartDom.current));
      myChart && option && myChart.setOption(option);
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    ref: chartDom,
    style: {
      width: 800,
      height: 800,
      display: 'inline-block',
      verticalAlign: 'top'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: 'inline-block',
      fontSize: '24px'
    },
    onMouseOver: () => {
      // \u663E\u793Atooltip
      myChart && myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: 1,
        position: 50
      });
    },
    onMouseLeave: () => {
      // \u9690\u85CFtooltip
      myChart && myChart.dispatchAction({
        type: 'hideTip'
      });
    }
  }, "1111"));
};

/* harmony default export */ __webpack_exports__["default"] = (Echarts);

//# sourceURL=webpack:///./src/Components/Npm/EchartsReact/demo.tsx?`)}}]);
