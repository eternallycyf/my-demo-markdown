(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{"9kvl":function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("FfOG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _history__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("bCY9");
// @ts-nocheck



//# sourceURL=webpack:///./src/.umi-production/core/umiExports.ts?`)},dwhl:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dEAq");
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dumi_theme__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dumi_theme_default_es_builtins_API_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("+pnj");
/* harmony import */ var dumi_theme_default_es_builtins_Previewer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Zxc8");
/* harmony import */ var dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("H1Ra");










 // memo for page content, to avoid useless re-render since other context fields changed

const PageContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(({
  demos: DUMI_ALL_DEMOS
}) => {
  const DumiDemo1 = DUMI_ALL_DEMOS['businesscomponent-richtext'].component;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "markdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "richtext-\\u5BCC\\u6587\\u672C"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#richtext-\\u5BCC\\u6587\\u672C",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "RichText \\u5BCC\\u6587\\u672C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    code: "{\\n\\"braft-editor\\": \\"^2.3.9\\",\\n\\"braft-extensions\\": \\"^0.1.1\\",\\n\\"draft-js-prism\\": \\"^1.0.6\\",\\n\\"prismjs\\": \\"^1.29.0\\",\\n\\"react-color\\": \\"^2.19.3\\",\\n\\"vditor\\": \\"^3.8.17\\",\\n}",
    lang: "markdown"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_Previewer_js__WEBPACK_IMPORTED_MODULE_3__["default"], DUMI_ALL_DEMOS['businesscomponent-richtext'].previewerProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DumiDemo1, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "markdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_API_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    src: "./RichText.tsx",
    hidetitle: "",
    identifier: "RichText",
    export: "default"
  }))));
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

//# sourceURL=webpack:///./src/Components/BusinessComponent/RichText/index.md?`)}}]);
