(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{"9kvl":function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("FfOG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _history__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("bCY9");
// @ts-nocheck



//# sourceURL=webpack:///./src/.umi-production/core/umiExports.ts?`)},uZjN:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dumi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("LtsZ");
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("dEAq");
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dumi_theme__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dumi_theme_default_es_builtins_API_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("+pnj");
/* harmony import */ var dumi_theme_default_es_builtins_Previewer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Zxc8");
/* harmony import */ var dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("H1Ra");










 // memo for page content, to avoid useless re-render since other context fields changed

const PageContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(({
  demos: DUMI_ALL_DEMOS
}) => {
  const DumiDemo1 = DUMI_ALL_DEMOS['npm-echartsreact'].component;
  const DumiDemo2 = Object(dumi__WEBPACK_IMPORTED_MODULE_1__["dynamic"])({
    loader: async () => (await Promise.all(/* import() | demos_md_inline */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(139)]).then(__webpack_require__.bind(null, "XWPg"))).default,
    loading: () => null
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "markdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "echarts-for-react"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#echarts-for-react",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "echarts-for-react")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_Previewer_js__WEBPACK_IMPORTED_MODULE_4__["default"], DUMI_ALL_DEMOS['npm-echartsreact'].previewerProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DumiDemo1, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "markdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_API_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    src: "./REcharts/index.tsx",
    hidetitle: "",
    identifier: "REcharts",
    export: "ReactEChart"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u624B\\u52A8\\u89E6\\u53D1-hover"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#\\u624B\\u52A8\\u89E6\\u53D1-hover",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u624B\\u52A8\\u89E6\\u53D1 hover")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DumiDemo2, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "markdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    code: "// echarts\u5F15\u5165\\nimport * as echarts from 'echarts';\\nimport { useEffect, useRef, useState } from 'react';\\n\\nconst Echarts = () => {\\n  const chartDom = useRef(null);\\n  const [myChart, setMyChart] = useState<echarts.ECharts>();\\n  // echarts \u914D\u7F6E\u9879\\n  let option = {\\n    tooltip: {\\n      trigger: 'item',\\n    },\\n    legend: {\\n      top: '5%',\\n      left: 'center',\\n    },\\n    series: [\\n      {\\n        name: 'Access From',\\n        type: 'pie',\\n        radius: ['40%', '70%'],\\n        avoidLabelOverlap: false,\\n        itemStyle: {\\n          borderRadius: 10,\\n          borderColor: '#fff',\\n          borderWidth: 2,\\n        },\\n        label: {\\n          show: false,\\n          position: 'center',\\n        },\\n        emphasis: {\\n          label: {\\n            show: true,\\n            fontSize: '40',\\n            fontWeight: 'bold',\\n          },\\n        },\\n        labelLine: {\\n          show: false,\\n        },\\n        data: [\\n          { value: 1048, name: 'Search Engine' },\\n          { value: 735, name: 'Direct' },\\n          { value: 580, name: 'Email' },\\n          { value: 484, name: 'Union Ads' },\\n          { value: 300, name: 'Video Ads' },\\n        ],\\n      },\\n    ],\\n  };\\n  useEffect(() => {\\n    setTimeout(() => {\\n      // echarts \u521D\u59CB\u5316\\n      chartDom?.current && setMyChart(echarts.init(chartDom?.current));\\n      myChart && option && myChart.setOption(option);\\n    });\\n  });\\n\\n  return (\\n    <>\\n      <div\\n        ref={chartDom}\\n        style={{\\n          width: 800,\\n          height: 800,\\n          display: 'inline-block',\\n          verticalAlign: 'top',\\n        }}\\n      ></div>\\n      <div\\n        style={{ display: 'inline-block', fontSize: '24px' }}\\n        onMouseOver={() => {\\n          // \u663E\u793Atooltip\\n          myChart &&\\n            myChart.dispatchAction({\\n              type: 'showTip',\\n              seriesIndex: 0,\\n              dataIndex: 1,\\n              position: 50,\\n            });\\n        }}\\n        onMouseLeave={() => {\\n          // \u9690\u85CFtooltip\\n          myChart &&\\n            myChart.dispatchAction({\\n              type: 'hideTip',\\n            });\\n        }}\\n      >\\n        1111\\n      </div>\\n    </>\\n  );\\n};\\n\\nexport default Echarts;",
    lang: "tsx"
  }))));
});
/* harmony default export */ __webpack_exports__["default"] = (props => {
  const _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["context"]),
        demos = _React$useContext.demos; // scroll to anchor after page component loaded


  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    var _props$location;

    if (props !== null && props !== void 0 && (_props$location = props.location) !== null && _props$location !== void 0 && _props$location.hash) {
      dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"].scrollToAnchor(decodeURIComponent(props.location.hash.slice(1)));
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageContent, {
    demos: demos
  });
});

//# sourceURL=webpack:///./src/Components/Npm/EchartsReact/index.md?`)}}]);
