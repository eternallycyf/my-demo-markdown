(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{UCGG:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
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

//# sourceURL=webpack:///./src/Components/Npm/EchartsReact/demo.tsx?`)},ZpqZ:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_eternallycyf_Documents_GitHub_case_my_demo_markdown_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tJVT");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Fk5u");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_2__);




const option = {
  title: [{
    text: 'SZ000638',
    left: '3%'
  }],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  legend: {
    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
  },
  axisPointer: {
    link: {
      xAxisIndex: 'all'
    },
    label: {
      backgroundColor: '#777'
    }
  },
  grid: [{
    left: '3%',
    right: '3%',
    top: 80,
    height: 200
  }, {
    left: '3%',
    right: '3%',
    top: 400,
    height: 200
  }],
  xAxis: [{
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
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  }, {
    type: 'category',
    gridIndex: 1,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    scale: true,
    boundaryGap: true // axisLine: {
    //   onZero: true
    // },
    // splitLine: {
    //   show: false
    // },
    // splitNumber: 20,
    // min: 'dataMin',
    // max: 'dataMax'

  }],
  yAxis: [{
    scale: true,
    gridIndex: 0,
    splitNumber: 3 // splitArea: {
    //   show: true
    // }

  }, {
    scale: false,
    gridIndex: 1,
    splitNumber: 3 // splitArea: {
    //   show: true
    // }

  }],
  dataZoom: [{
    type: 'inside',
    start: 25,
    xAxisIndex: [0, 1],
    top: 10,
    end: 75
  }, {
    show: true,
    xAxisIndex: [0, 1],
    type: 'slider',
    y: '90%',
    top: '45%',
    start: 25,
    end: 75
  }],
  series: [{
    name: 'Email',
    type: 'line',
    stack: 'Total',
    data: [120, 132, 101, 134, 90, 230, 210]
  }, {
    name: 'Union Ads',
    type: 'line',
    stack: 'Total',
    data: [220, 182, 191, 234, 290, 330, 310]
  }, {
    name: 'Video Ads',
    type: 'line',
    stack: 'Total',
    data: [150, 232, 201, 154, 190, 330, 410]
  }, {
    name: 'Direct',
    type: 'line',
    stack: 'Total',
    data: [320, 332, 301, 334, 390, 330, 320]
  }, {
    name: 'macd',
    type: 'line',
    xAxisIndex: '1',
    yAxisIndex: '1',
    data: [320, 332, 301, 334, 390, 330, 320],
    lineStyle: {
      normal: {
        opacity: 0.5
      }
    }
  }, {
    name: 'macd',
    type: 'line',
    xAxisIndex: '1',
    yAxisIndex: '1',
    data: [1, 222, 222, 22, 22, 22, 123],
    lineStyle: {
      normal: {
        opacity: 0.5
      }
    }
  }]
};

const Echarts = () => {
  const chartDom = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
        _useState2 = Object(_Users_eternallycyf_Documents_GitHub_case_my_demo_markdown_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
        myChart = _useState2[0],
        setMyChart = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    (chartDom === null || chartDom === void 0 ? void 0 : chartDom.current) && setMyChart(echarts__WEBPACK_IMPORTED_MODULE_2__["init"](chartDom === null || chartDom === void 0 ? void 0 : chartDom.current));
    myChart && option && myChart.setOption(option);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    ref: chartDom,
    style: {
      width: 800,
      height: 800,
      display: 'inline-block',
      verticalAlign: 'top'
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Echarts);

//# sourceURL=webpack:///./src/Components/Npm/EchartsReact/index.tsx?`)}}]);
