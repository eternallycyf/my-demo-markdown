(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{n0nL:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#grid",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "grid"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u7236\\u5143\\u7D20\\u5C5E\\u6027"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u7236\\u5143\\u7D20\\u5C5E\\u6027",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u7236\\u5143\\u7D20\\u5C5E\\u6027"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "display:grid\\ngrid-template-columns: \u7B2C\u4E00\u5217 \u7B2C\u4E8C\u5217 ...\\ngrid-template-rows: \u7B2C\u4E00\u884C \u7B2C\u4E8C\u884C ...\\n#\\nrepeat(3, 100px)\\n// auto-fill \u81EA\u52A8\u586B\u5145\\nrepeat(auto-fill, 100px)\\n// 1fr \u7C7B\u4F3Cflex\u91CC\u6BD4\u4F8B\\nrepeat(3, 1fr)\\n// minmax \u6700\u5927\u503C\u6700\u5C0F\u503C\\n1fr minmax(150px, 1fr) 1fr\\n// auto \u81EA\u9002\u5E94\\n100px auto 100px\\n// \u7F51\u683C\u7EBF \u5B9A\u4F4D\u7528\\n[c1] 100px [c2] auto [c3] 100px [c4];\\n# \u95F4\u8DDD\\ngap: 20px;\\ngap: 20px 20px;\\nrow-gap: 20px;\\ncolumn-gap: 20px;\\n# \u533A\u57DF \u4E0D\u9700\u8981\u7684\u7528 . \u4EE3\u66FF\\ngrid-template-areas:\\n    'a b c'\\n    'd e f'\\n    'g h i';\\n# \u4E3B\u8F74\u65B9\u5411 dense:\u81EA\u52A8\u586B\u5145\\n grid-auto-flow: row|column dense;\\n# \u5BF9\u9F50\u65B9\u5F0F place-items: \u4E3B\u8F74\u65B9\u5411 \u4FA7\u8F74\u65B9\u5411\\n  justify-items: start | end | center| stretch;\\n  align-items: start | end | center| stretch;\\n  place-items: stretch stretch;\\n# \u6BCF\u4E00\u5217\u7684\u5BF9\u9F50\u65B9\u5F0F\\njustify-content: start end enter stretch space-around\\n                 space-between space-evenly\\nalign-content: ...\\nplace-content: ... ...\\n# \u63A7\u5236\u591A\u4F59\u62C9\u4F38\u7684item\\ngrid-auto-columns: 50px;\\ngrid-auto-rows:\\ngrid-auto-flow",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u5B50\\u5143\\u7D20\\u5C5E\\u6027"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u5B50\\u5143\\u7D20\\u5C5E\\u6027",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u5B50\\u5143\\u7D20\\u5C5E\\u6027"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u6BCF\u4E00\u4E2A\u5B50\u9879\u7684 \u5F00\u59CB \u7ED3\u675F\u4F4D\u7F6E, \u4F9D\u636E grid-template-areas \u7F51\u683C\u7EBF\\n  grid-column-start: 1;\\n  grid-column-end: 3;\\n  grid-column: 1 / 3;\\n  grid-row-start: 1;\\n  grid-row-end: 3;\\n  grid-row: 1 / 3;\\n\\n  grid-area: 1 / 1 / 3 / 3;\\n# \u8DE8\u8D8A\u7684\u7F51\u683C\\n  grid-column-start: span 3;\\n  grid-column-end: span 3;\\n#\\n  grid-area: b;\\n# \u548C\u7236\u5143\u7D20\u7684 justify-item \u4E00\u6837\\n  justify-self\\n  align-self\\n  place-self",
    lang: "css"
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

//# sourceURL=webpack:///./src/Article/3.CSS/Grid_%E5%B8%83%E5%B1%80/index.md?`)}}]);
