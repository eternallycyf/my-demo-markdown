(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"4vJl":function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
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
    id: "\\u8BBF\\u95EE\\u8005\\u6A21\\u5F0F"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u8BBF\\u95EE\\u8005\\u6A21\\u5F0F",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u8BBF\\u95EE\\u8005\\u6A21\\u5F0F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u5B9A\\u4E49\\u5728\\u4E0D\\u6539\\u53D8\\u8BE5\\u5BF9\\u8C61\\u7684\\u524D\\u63D0\\u4E0B\\u8BBF\\u95EE\\u7ED3\\u6784\\u4E2D\\u5143\\u7D20\\u7684\\u65B0\\u65B9\\u6CD5\\uFF0C\\u5143\\u7D20\\u7684\\u6267\\u884C\\u7B97\\u6CD5\\u53EF\\u4EE5\\u968F\\u7740\\u8BBF\\u95EE\\u8005\\u6539\\u53D8\\u800C\\u6539\\u53D8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u5982\\u679C\\u4E00\\u4E2A\\u7CFB\\u7EDF\\u6709\\u6BD4\\u8F83\\u7A33\\u5B9A\\u7684\\u6570\\u636E\\u7ED3\\u6784\\uFF0C\\u53C8\\u6709\\u7ECF\\u5E38\\u53D8\\u5316\\u7684\\u529F\\u80FD\\u9700\\u6C42\\uFF0C\\u90A3\\u4E48\\u8BBF\\u95EE\\u8005\\u6A21\\u5F0F\\u5C31\\u662F\\u6BD4\\u8F83\\u5408\\u9002\\u7684")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u4EE3\\u7801\\u5B9E\\u73B0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u4EE3\\u7801\\u5B9E\\u73B0",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u4EE3\\u7801\\u5B9E\\u73B0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// \u4EE5\u52A8\u7269\u56ED\u6A21\u62DF\u4E3A\u4F8B\uFF0C\u6211\u4EEC\u6709\u51E0\u79CD\u4E0D\u540C\u79CD\u7C7B\u7684\u52A8\u7269\uFF0C\u5B83\u4EEC\u80FD\u591F\u53D1\u51FA\u4E0D\u540C\u7684\u58F0\u97F3\u3002\\n\\nclass Monkey {\\n  shout() {\\n    console.log('Ooh oo aa aa!');\\n  }\\n\\n  accept(operation: any) {\\n    operation.visitMonkey(this);\\n  }\\n}\\n\\nclass Lion {\\n  roar() {\\n    console.log('Roaaar!');\\n  }\\n\\n  accept(operation: any) {\\n    operation.visitLion(this);\\n  }\\n}\\n\\nconst speak = {\\n  visitMonkey(monkey: any) {\\n    monkey.shout();\\n  },\\n  visitLion(lion: any) {\\n    lion.roar();\\n  },\\n};\\n\\nconst jump = {\\n  visitMonkey(monkey: any) {\\n    console.log('Jumped 20 feet high! on to the tree!');\\n  },\\n  visitLion(lion: any) {\\n    console.log('Jumped 7 feet! Back on the ground!');\\n  },\\n  visitDolphin(dolphin: any) {\\n    console.log('Walked on water a little and disappeared');\\n  },\\n};\\nconst monkey = new Monkey();\\nconst lion = new Lion();\\n\\nmonkey.accept(speak);\\nmonkey.accept(jump);\\nlion.accept(speak);\\nlion.accept(jump);",
    lang: "typescript"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u53C2\\u8003\\u94FE\\u63A5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u53C2\\u8003\\u94FE\\u63A5",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u53C2\\u8003\\u94FE\\u63A5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "https://www.runoob.com/design-pattern/visitor-pattern.html"
  }, "https://www.runoob.com/design-pattern/visitor-pattern.html")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "https://github.com/sohamkamani/javascript-design-patterns-for-humans#-visitor"
  }, "https://github.com/sohamkamani/javascript-design-patterns-for-humans#-visitor")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "https://www.bookstack.cn/read/design-pattern-in-javascript/design-pattern-visitor-pattern-README.md"
  }, "https://www.bookstack.cn/read/design-pattern-in-javascript/design-pattern-visitor-pattern-README.md")))));
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

//# sourceURL=webpack:///./src/Article2/18.%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/21.%E8%AE%BF%E9%97%AE%E8%80%85%E6%A8%A1%E5%BC%8F/index.md?`)}}]);
