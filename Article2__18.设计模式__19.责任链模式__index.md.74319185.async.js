(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{hOpv:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
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
    id: "\\u8D23\\u4EFB\\u94FE\\u6A21\\u5F0F"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u8D23\\u4EFB\\u94FE\\u6A21\\u5F0F",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u8D23\\u4EFB\\u94FE\\u6A21\\u5F0F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u4F7F\\u591A\\u4E2A\\u5BF9\\u8C61\\u90FD\\u8981\\u673A\\u4F1A\\u5904\\u7406\\u8BF7\\u6C42\\uFF0C\\u4ECE\\u800C\\u907F\\u514D\\u4E86\\u8BF7\\u6C42\\u53D1\\u9001\\u8005\\u548C\\u63A5\\u6536\\u8005\\u4E4B\\u95F4\\u7684\\u8026\\u5408\\u5173\\u7CFB\\u3002\\u5C06\\u8FD9\\u4E9B\\u5BF9\\u8C61\\u8FDE\\u6210\\u4E00\\u6761\\u94FE\\uFF0C\\u5E76\\u6CBF\\u7740\\u8FD9\\u6761\\u94FE\\u4F20\\u9012\\u8BE5\\u8BF7\\u6C42\\uFF0C\\u76F4\\u5230\\u6709\\u5BF9\\u8C61\\u5904\\u7406\\u5B83\\u4E3A\\u6B62"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u573A\\u666F: \\u4F20\\u7EDF\\u7684", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "ifelse"), "\\u6216", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "switch"), " \\u5904\\u7406\\u52A8\\u6001\\u6570\\u636E\\u7684\\u65F6\\u5019\\u5904\\u4E8E\\u5F3A\\u8026\\u5408"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u8D23\\u4EFB\\u94FE\\u6A21\\u5F0F\\u662F\\u4E00\\u5BF9\\u4E00\\u7684\\u3002\\u4E00\\u4E2A\\u5BF9\\u8C61\\u5904\\u7406\\u4E0D\\u4E86\\u5C31\\u4F1A\\u4F20\\u9012\\u7ED9\\u4E0B\\u4E00\\u4E2A\\u63A5\\u53D7\\u8005")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u4EE3\\u7801\\u5B9E\\u73B0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u4EE3\\u7801\\u5B9E\\u73B0",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u4EE3\\u7801\\u5B9E\\u73B0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "abstract class Handler {\\n  // \u4E0B\u4E00\u4E2A\u5904\u7406\u8005\\n  public successor?: Handler;\\n  public name: string;\\n  constructor(name: string) {\\n    this.name = name;\\n  }\\n\\n  public abstract handleRequest(request: MyRequest): void;\\n\\n  public setNext(successor: Handler): void {\\n    this.successor = successor;\\n  }\\n}\\n\\nclass ConcreteHandler1 extends Handler {\\n  constructor(name: string) {\\n    super(name);\\n  }\\n\\n  public handleRequest(request: MyRequest): void {\\n    // \u9996\u5148\u5224\u65AD\u5F53\u524D\u7EA7\u522B\u662F\u5426\u80FD\u591F\u5904\u7406\uFF0C\u4E0D\u80FD\u591F\u5904\u7406\u5219\u4EA4\u7ED9\u4E0B\u4E00\u4E2A\u7EA7\u522B\u5904\u7406\\n    if (request.level <= 1) {\\n      console.log('\u88AB\u4E00\u7EA7\u5904\u7406');\\n    } else {\\n      // \u4EA4\u7ED9\u4E0B\u4E00\u7EA7\u5904\u7406\\n      this.successor && this.successor.handleRequest(request);\\n    }\\n  }\\n}\\n\\nclass ConcreteHandler2 extends Handler {\\n  constructor(name: string) {\\n    super(name);\\n  }\\n\\n  public handleRequest(request: MyRequest): void {\\n    // \u9996\u5148\u5224\u65AD\u5F53\u524D\u7EA7\u522B\u662F\u5426\u80FD\u591F\u5904\u7406\uFF0C\u4E0D\u80FD\u591F\u5904\u7406\u5219\u4EA4\u7ED9\u4E0B\u4E00\u4E2A\u7EA7\u522B\u5904\u7406\\n    if (request.level > 1 && request.level <= 2) {\\n      console.log('\u88AB\u4E8C\u7EA7\u5904\u7406');\\n    } else {\\n      // \u4EA4\u7ED9\u4E0B\u4E00\u7EA7\u5904\u7406\\n      this.successor && this.successor.handleRequest(request);\\n    }\\n  }\\n}\\n\\nclass ConcreteHandler3 extends Handler {\\n  constructor(name: string) {\\n    super(name);\\n  }\\n\\n  public handleRequest(request: MyRequest): void {\\n    // \u9996\u5148\u5224\u65AD\u5F53\u524D\u7EA7\u522B\u662F\u5426\u80FD\u591F\u5904\u7406\uFF0C\u4E0D\u80FD\u591F\u5904\u7406\u5219\u4EA4\u7ED9\u4E0B\u4E00\u4E2A\u7EA7\u522B\u5904\u7406\\n    if (request.level > 2) {\\n      console.log('\u88AB\u4E09\u7EA7\u5904\u7406');\\n    } else {\\n      // \u4EA4\u7ED9\u4E0B\u4E00\u7EA7\u5904\u7406\\n      this.successor && this.successor.handleRequest(request);\\n    }\\n  }\\n}\\n\\nclass MyRequest {\\n  private _level: number;\\n  constructor(level: number) {\\n    this._level = level;\\n  }\\n\\n  get level(): number {\\n    return this._level;\\n  }\\n\\n  set level(value: number) {\\n    this._level = this.level;\\n  }\\n}\\n\\nfunction main() {\\n  // \u521B\u5EFA\u4E00\u4E2A\u8BF7\u6C42\\n  const request: MyRequest = new MyRequest(5);\\n\\n  // \u521B\u5EFA\u76F8\u5173\u5904\u7406\u4EBA\\n  const handler1: Handler = new ConcreteHandler1('lili');\\n  const handler2: Handler = new ConcreteHandler2('linlin');\\n  const handler3: Handler = new ConcreteHandler3('shunshun');\\n\\n  // \u8BBE\u7F6E\u4E0B\u7EA7\u522B\u5BA1\u6279\uFF0C\u6784\u6210\u73AF\u5F62\u7ED3\u6784\\n  handler1.setNext(handler2);\\n  handler2.setNext(handler3);\\n  handler3.setNext(handler1);\\n\\n  handler1.handleRequest(request);\\n}\\n\\nmain();",
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
    to: "https://juejin.im/post/6844903855348514829"
  }, "https://juejin.im/post/6844903855348514829")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "https://www.runoob.com/design-pattern/chain-of-responsibility-pattern.html"
  }, "https://www.runoob.com/design-pattern/chain-of-responsibility-pattern.html")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "https://github.com/sohamkamani/javascript-design-patterns-for-humans#-chain-of-responsibility"
  }, "https://github.com/sohamkamani/javascript-design-patterns-for-humans#-chain-of-responsibility")))));
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

//# sourceURL=webpack:///./src/Article2/18.%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/19.%E8%B4%A3%E4%BB%BB%E9%93%BE%E6%A8%A1%E5%BC%8F/index.md?`)}}]);
