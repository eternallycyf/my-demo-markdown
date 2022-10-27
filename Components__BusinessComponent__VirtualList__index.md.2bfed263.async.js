(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{"9kvl":function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("FfOG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _history__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("bCY9");
// @ts-nocheck



//# sourceURL=webpack:///./src/.umi-production/core/umiExports.ts?`)},LM00:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dEAq");
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dumi_theme__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dumi_theme_default_es_builtins_Previewer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Zxc8");










 // memo for page content, to avoid useless re-render since other context fields changed

const PageContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(({
  demos: DUMI_ALL_DEMOS
}) => {
  const DumiDemo1 = DUMI_ALL_DEMOS['virtuallist-virtuallist'].component;
  const DumiDemo2 = DUMI_ALL_DEMOS['virtuallist-virtuallisthook'].component;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "markdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "virtuallist"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#virtuallist",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "VirtualList"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "virtuallist-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#virtuallist-1",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "VirtualList"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u4E00\\u6B21\\u53EA\\u6E32\\u67D3 \\u6307\\u5B9A\\u4E2A\\u6570"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u4E0D\\u652F\\u6301 grid \\u9700\\u8981\\u81EA\\u5DF1\\u5BF9\\u6570\\u636E\\u5207\\u5272 \\u7136\\u540E\\u81EA\\u5DF1\\u6805\\u683C", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_Previewer_js__WEBPACK_IMPORTED_MODULE_2__["default"], DUMI_ALL_DEMOS['virtuallist-virtuallist'].previewerProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DumiDemo1, null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "virtuallisthook"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#virtuallisthook",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "VirtualListHook"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u81EA\\u5B9A\\u4E49\\u5E03\\u5C40"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u7F3A\\u70B9: \\u5B9E\\u9645\\u4E0A\\u4E00\\u6B21\\u6027\\u628A\\u6700\\u5916\\u5C42\\u7684 div \\u8FD8\\u662F\\u6E32\\u67D3\\u4E86 \\u5185\\u90E8\\u662F\\u53EF\\u89C6\\u533A\\u6E32\\u67D3", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_Previewer_js__WEBPACK_IMPORTED_MODULE_2__["default"], DUMI_ALL_DEMOS['virtuallist-virtuallisthook'].previewerProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DumiDemo2, null))))));
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

//# sourceURL=webpack:///./src/Components/BusinessComponent/VirtualList/index.md?`)}}]);
