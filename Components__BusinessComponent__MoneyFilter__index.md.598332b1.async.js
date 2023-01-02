(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{"9LyO":function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dumi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rlch");
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("dEAq");
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dumi_theme__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dumi_theme_default_es_builtins_API_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("+pnj");
/* harmony import */ var dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("H1Ra");










 // memo for page content, to avoid useless re-render since other context fields changed

const PageContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(({
  demos: DUMI_ALL_DEMOS
}) => {
  const DumiDemo1 = Object(dumi__WEBPACK_IMPORTED_MODULE_1__[/* dynamic */ "c"])({
    loader: async () => (await Promise.all(/* import() | demos_md_inline */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(155)]).then(__webpack_require__.bind(null, "UCGG"))).default,
    loading: () => null
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "markdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "moneyfilter-\\u91D1\\u989D\\u683C\\u5F0F\\u5316"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#moneyfilter-\\u91D1\\u989D\\u683C\\u5F0F\\u5316",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "MoneyFilter \\u91D1\\u989D\\u683C\\u5F0F\\u5316")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DumiDemo1, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "markdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    code: "/**\\n * \u6570\u5B57\u5343\u5206\u4F4D\u5C55\u793A\u5E76\u663E\u793An\u4F4D\u5C0F\u6570\\n * @param {(number | string)} \u9700\u8981\u683C\u5F0F\u5316\u7684\u503C\\n * @param {number} [precision] \u4FDD\u7559\u51E0\u4F4D\u5C0F\u6570\uFF0C\u4E0D\u4F20\u5C0F\u6570\u4E0D\u5904\u7406\uFF0C\u4E0D\u591F\u4F1A\u586B\u51450\\n * @param {string} [separator=','] \u5206\u9694\u7B26\\n * @return {(number | string)} \u8FD4\u56DE0\u6216\u8005\u683C\u5F0F\u5316\u7684\u503C\\n */\\nconst formatNumber = (\\n  num: number | string,\\n  precision = 2,\\n  separator = ',',\\n): number | string => {\\n  if (num == 0) return 0;\\n  if (!num) return '--';\\n  let parts;\\n  const textStr = num.toString();\\n  const decStr = textStr.split('.')[1];\\n  // \u5224\u65AD\u662F\u5426\u4E3A\u6570\u5B57\\n  if (!isNaN(parseFloat(num as string)) && isFinite(num as number)) {\\n    num = Number(num);\\n    // \u5904\u7406\u5C0F\u6570\u70B9\u4F4D\u6570\\n    num = (typeof precision !== 'undefined'\\n      ? num.toFixed(precision)\\n      : num\\n    ).toString();\\n    // \u5206\u79BB\u6570\u5B57\u7684\u5C0F\u6570\u90E8\u5206\u548C\u6574\u6570\u90E8\u5206\\n    parts = num.split('.');\\n    parts[0] = parts[0]\\n      .toString()\\n      .replace(/(\\\\d)(?=(\\\\d{3})+(?!\\\\d))/g, \`$1\${separator}\`);\\n    if (!decStr) {\\n      parts.pop();\\n      return parts as any;\\n    }\\n    return parts.join('.');\\n  }\\n  return 0;\\n};",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "api-moneyfilterprops"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#api-moneyfilterprops",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "MoneyFilterProps"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_API_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    src: "./index.tsx",
    identifier: "MoneyFilter",
    export: "MoneyFilterProps"
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

//# sourceURL=webpack:///./src/Components/BusinessComponent/MoneyFilter/index.md?`)}}]);
