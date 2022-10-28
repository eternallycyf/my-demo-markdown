(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{ugSI:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dEAq");
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dumi_theme__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dumi_theme_default_es_builtins_Alert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("M/Q6");










 // memo for page content, to avoid useless re-render since other context fields changed

const PageContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(({
  demos: DUMI_ALL_DEMOS
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "markdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "1.\\u524D\\u7AEF\\u628A\\u8981\\u767B\\u5F55\\u7CFB\\u7EDF\\u7684\\u6807\\u8BC6\\u548C\\u767B\\u5F55\\u4EBA\\u7684 id \\u53D1\\u7ED9\\u540E\\u7AEF"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "2.\\u540E\\u7AEF\\u628A\\u8BE5\\u4FE1\\u606F\\u50A8\\u5B58\\u8D77\\u6765\\u5E76\\u751F\\u6210\\u4E00\\u4E2A code,\\u8FD4\\u56DE\\u7ED9\\u524D\\u7AEF"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "3.\\u524D\\u7AEF\\u628A\\u8FD9\\u4E2A code \\u62FC\\u63A5\\u5728\\u8981\\u767B\\u5F55\\u7CFB\\u7EDF\\u7684\\u8DEF\\u5F84\\u540E\\u9762"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "4.\\u5728\\u8981\\u767B\\u5F55\\u7684\\u7CFB\\u7EDF\\u7684\\u767B\\u5F55\\u9875\\u628A\\u8FD9\\u4E2A code \\u53D1\\u7ED9\\u540E\\u7AEF(\\u8981\\u76D1\\u542C\\u8DEF\\u7531\\u53C2\\u6570,\\u81EA\\u52A8\\u6267\\u884C)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "5.\\u540E\\u7AEF\\u8BC6\\u522B code,\\u8FD4\\u56DE\\u7528\\u6237\\u4FE1\\u606F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "6.\\u524D\\u7AEF\\u767B\\u5F55\\u6210\\u529F")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_Alert_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null, "\\u603B\\u7ED3: \\u524D\\u7AEF\\u53EA\\u9700\\u8981\\u53D1\\u9001\\u8BF7\\u6C42\\u62FF\\u5230 code,\\u8DF3\\u8F6C\\u9875\\u9762,\\u53D1\\u9001 code,\\u62FF\\u5230\\u7528\\u6237\\u4FE1\\u606F,\\u6267\\u884C\\u767B\\u5F55\\u64CD\\u4F5C"))));
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

//# sourceURL=webpack:///./src/Project/SSO/index.md?`)}}]);
