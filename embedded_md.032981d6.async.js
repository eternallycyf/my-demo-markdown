(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{bI1T:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dEAq");
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dumi_theme__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("H1Ra");










 // memo for page content, to avoid useless re-render since other context fields changed

const PageContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(({
  demos: DUMI_ALL_DEMOS
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "markdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "import React, { useEffect, useState } from 'react';\\nimport { Card, Button } from 'antd';\\nimport * as d3 from 'd3';\\n\\nconst D3 = (props: any) => {\\n  const handleInitChart = () => {\\n    var dataset = [1.2, 2.3, 0.9, 1.5, 3.3];\\n    var min = d3.min(dataset) as number; //\u5F97\u5230\u6700\u5C0F\u503C\\n    var max = d3.max(dataset) as number; //\u5F97\u5230\u6700\u5927\u503C\\n    var scaleLinear = d3\\n      .scaleLinear()\\n      .domain([min, max])\\n      .range([0, 300]);\\n    console.log('scaleLinear(1)\u8F93\u51FA\uFF1A' + scaleLinear(1)); // 12.499999999\\n    d3.select('body').append('br');\\n    console.log('scaleLinear(2)\u8F93\u51FA\uFF1A' + scaleLinear(2)); // 137.5\\n    d3.select('body').append('br');\\n    console.log('scaleLinear(3.3)\u8F93\u51FA\uFF1A' + scaleLinear(3.3)); // 300\\n  };\\n\\n  useEffect(() => {\\n    handleInitChart();\\n  }, []);\\n\\n  const setNewChartData = () => {};\\n\\n  return (\\n    <>\\n      <Card style={{ margin: 24 }}>\\n        <svg width=\\"1200\\" height=\\"180\\" id=\\"mainsvg\\" className=\\"svgs\\" />\\n      </Card>\\n    </>\\n  );\\n};\\nexport default D3;",
    lang: "tsx"
  })));
});
/* harmony default export */ __webpack_exports__["default"] = (props => {
  const _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["context"]),
        demos = _React$useContext.demos; // scroll to anchor after page component loaded


  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    var _props$location;

    if (props !== null && props !== void 0 && (_props$location = props.location) !== null && _props$location !== void 0 && _props$location.hash) {
      dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"].scrollToAnchor(decodeURIComponent(props.location.hash.slice(1)));
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageContent, {
    demos: demos
  });
});

//# sourceURL=webpack:///./src/Visualization/D3/proportion1.md?`)},fPM3:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dEAq");
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dumi_theme__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("H1Ra");










 // memo for page content, to avoid useless re-render since other context fields changed

const PageContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(({
  demos: DUMI_ALL_DEMOS
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "markdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "import React, { useEffect, useState } from 'react';\\nimport { Card, Button } from 'antd';\\nimport * as d3 from 'd3';\\n\\nconst D3 = (props: any) => {\\n  const handleInitChart = () => {\\n    var index = ([0, 1, 2, 3, 4] as unknown) as string;\\n    var color = ['red', 'blue', 'yellow', 'black', 'green'];\\n    var scaleOrdinal = d3\\n      .scaleOrdinal()\\n      .domain(index)\\n      .range(color);\\n    console.log('scaleOrdinal(1)\u8F93\u51FA\uFF1A' + scaleOrdinal('1')); // blue\\n    d3.select('body').append('br');\\n    console.log('scaleOrdinal(2)\u8F93\u51FA\uFF1A' + scaleOrdinal('2')); // yellow\\n    d3.select('body').append('br');\\n    console.log('scaleOrdinal(4)\u8F93\u51FA\uFF1A' + scaleOrdinal('4')); // green\\n  };\\n\\n  useEffect(() => {\\n    handleInitChart();\\n  }, []);\\n\\n  return (\\n    <>\\n      <Card style={{ margin: 24 }}>\\n        <svg width=\\"1200\\" height=\\"180\\" id=\\"mainsvg\\" className=\\"svgs\\" />\\n      </Card>\\n    </>\\n  );\\n};\\nexport default D3;",
    lang: "tsx"
  })));
});
/* harmony default export */ __webpack_exports__["default"] = (props => {
  const _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["context"]),
        demos = _React$useContext.demos; // scroll to anchor after page component loaded


  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    var _props$location;

    if (props !== null && props !== void 0 && (_props$location = props.location) !== null && _props$location !== void 0 && _props$location.hash) {
      dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"].scrollToAnchor(decodeURIComponent(props.location.hash.slice(1)));
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageContent, {
    demos: demos
  });
});

//# sourceURL=webpack:///./src/Visualization/D3/proportion2.md?`)}}]);
