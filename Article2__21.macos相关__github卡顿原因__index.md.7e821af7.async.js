(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{sd9z:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dEAq");
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dumi_theme__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("6T1g");










 // memo for page content, to avoid useless re-render since other context fields changed

const PageContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(({
  demos: DUMI_ALL_DEMOS
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "markdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "github-\\u5361\\u987F\\u539F\\u56E0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#github-\\u5361\\u987F\\u539F\\u56E0",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "github \\u5361\\u987F\\u539F\\u56E0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "github\u6CA1\u6709\u88AB\u5899 \u4F46\u662F\u4E9A\u6D32cdn\u88AB\u5899\u4E86 \u6240\u4EE5git push git clone \u4F1A\u5361\\n\u89E3\u51B3\u65B9\u6CD5\\n  1.\u5728host\u6587\u4EF6\u5199\u5165\u6700\u65B0\u7684\u52A8\u6001ip\\n  2.ssr\u5C0F\u98DE\u673A\u5F00\u4EE3\u7406\\n  3.\u6CB9\u7334\u63D2\u4EF6 Github \u589E\u5F3A - \u9AD8\u901F\u4E0B\u8F7D\\n    https://greasyfork.org/zh-CN/scripts\\n    \u5B89\u88C5\u540E\u5728github ssh http zip\u4E0B\u8F7D\u90FD\u4F1A\u591A\u51FA\u51E0\u4E2A\u4E0B\u8F7D\u65B9\u5F0F",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "1\\u5728-host-\\u6587\\u4EF6\\u5199\\u5165\\u6700\\u65B0\\u7684\\u52A8\\u6001-ip"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#1\\u5728-host-\\u6587\\u4EF6\\u5199\\u5165\\u6700\\u65B0\\u7684\\u52A8\\u6001-ip",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "1.\\u5728 host \\u6587\\u4EF6\\u5199\\u5165\\u6700\\u65B0\\u7684\\u52A8\\u6001 ip"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# https://www.ipaddress.com/\\n# /etc/hosts\\n\u67E5\u8BE2\u4E24\u4E2A\u5730\u5740\u7684\u52A8\u6001IP\u5E76\u5728host\u6587\u4EF6\u5199\u5165\\n140.82.113.3 github.com\\n199.232.69.194 github.global.ssl.fastly.net\\n# \u5237\u65B0DNS\\nsudo killall -HUP mDNSResponder",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "2ssr-\\u5C0F\\u98DE\\u673A\\u4EE3\\u7406"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#2ssr-\\u5C0F\\u98DE\\u673A\\u4EE3\\u7406",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "2.ssr \\u5C0F\\u98DE\\u673A\\u4EE3\\u7406"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u4E0B\u8F7D ShadowsocksX-NG (github\u4E0A\u4E5F\u6709)\\n# \u514D\u8D39\u7684ssr\u8282\u70B9 \u70B9\u51FB\u4E8C\u7EF4\u7801\u5C31\u81EA\u52A8\u5BFC\u5165\u4E86\\nhttps://free-ss.site/\\n# \u5F00\u542F\u5168\u5C40\u6A21\u5F0F\\n# \u5F00\u653E\u4EE3\u7406\u7AEF\u53E3\\nexport http_proxy=http://127.0.0.1:1087;export https_proxy=http://127.0.0.1:1087;\\n# git\u8BBE\u7F6E\u4EE3\u7406\\ngit config --global http.https://github.com.proxy socks5://127.0.0.1:1087\\ngit config --global --unset http.https://github.com.proxy",
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

//# sourceURL=webpack:///./src/Article2/21.macos%E7%9B%B8%E5%85%B3/github%E5%8D%A1%E9%A1%BF%E5%8E%9F%E5%9B%A0/index.md?`)}}]);
