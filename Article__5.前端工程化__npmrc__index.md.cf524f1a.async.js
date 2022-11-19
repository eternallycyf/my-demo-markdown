(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{"8PvT":function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
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
    id: "npmrc"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#npmrc",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "npmrc"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u63D0\u5347\u4E00\u4E9B\u4F9D\u8D56\u5305\u81F3 node_modules\\n# \u89E3\u51B3\u90E8\u5206\u5305\u6A21\u5757not found\u7684\u95EE\u9898\\n# \u7528\u4E8E\u914D\u5408 pnpm\\nshamefully-hoist = true\\n\\n# node-sass \u4E0B\u8F7D\u95EE\u9898\\n# sass_binary_site=\\"https://npm.taobao.org/mirrors/node-sass/\\"\\n\\nhome=https://npm.taobao.org\\nregistry=https://registry.npm.taobao.org/\\nsass_binary_site=\\"https://npm.taobao.org/mirrors/node-sass/\\"\\nphantomjs_cdnurl=\\"http://cnpmjs.org/downloads\\"\\nelectron_mirror=\\"https://npm.taobao.org/mirrors/electron/\\"\\nsqlite3_binary_host_mirror=\\"https://foxgis.oss-cn-shanghai.aliyuncs.com/\\"\\nprofiler_binary_host_mirror=\\"https://npm.taobao.org/mirrors/node-inspector/\\"\\nchromedriver_cdnurl=\\"https://cdn.npm.taobao.org/dist/chromedriver\\"",
    lang: "js"
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

//# sourceURL=webpack:///./src/Article/5.%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/npmrc/index.md?`)}}]);
