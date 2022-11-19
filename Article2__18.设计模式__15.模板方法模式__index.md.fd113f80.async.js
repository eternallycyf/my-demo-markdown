(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{sQUR:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
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
    id: "\\u6A21\\u677F\\u65B9\\u6CD5\\u6A21\\u5F0F"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u6A21\\u677F\\u65B9\\u6CD5\\u6A21\\u5F0F",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u6A21\\u677F\\u65B9\\u6CD5\\u6A21\\u5F0F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u5B9A\\u4E49\\u4E00\\u4E2A\\u64CD\\u4F5C\\u4E2D\\u7684\\u7B97\\u6CD5\\u6846\\u67B6\\uFF0C\\u5C06\\u4E00\\u4E9B\\u6B65\\u9AA4\\u5EF6\\u8FDF\\u5230\\u5B50\\u7C7B\\u4E2D\\uFF0C\\u4F7F\\u5F97\\u5B50\\u7C7B\\u53EF\\u4EE5\\u4E0D\\u6539\\u53D8\\u4E00\\u4E2A\\u7B97\\u6CD5\\u7684\\u7ED3\\u6784\\u5373\\u53EF\\u91CD\\u5B9A\\u4E49\\u8BE5\\u7B97\\u6CD5\\u7684\\u67D0\\u4E9B\\u7279\\u5B9A\\u6B65\\u9AA4")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u4EE3\\u7801\\u5B9E\\u73B0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u4EE3\\u7801\\u5B9E\\u73B0",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u4EE3\\u7801\\u5B9E\\u73B0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "abstract class AbstractClass {\\n  constructor() {}\\n\\n  // \u6A21\u677F\u65B9\u6CD5\\n  public template(): void {\\n    this.operation1();\\n    this.hookMethod() && this.operation2();\\n    this.operation3();\\n  }\\n\\n  // \u57FA\u672C\u65B9\u6CD5\\n  protected operation1(): void {\\n    console.log('\u4F7F\u7528\u4E86\u65B9\u6CD5operation1');\\n  }\\n\\n  protected operation2(): void {\\n    console.log('\u4F7F\u7528\u4E86\u65B9\u6CD5operation2');\\n  }\\n\\n  protected operation3(): void {\\n    console.log('\u4F7F\u7528\u4E86\u65B9\u6CD5operation3');\\n  }\\n\\n  // \u94A9\u5B50\u65B9\u6CD5\\n  protected hookMethod(): boolean {\\n    return true;\\n  }\\n}\\n\\nclass ConcreteClassA extends AbstractClass {\\n  protected operation2(): void {\\n    console.log('\u5BF9\u8BE5\u65B9\u6CD5operation2\u8FDB\u884C\u4E86\u4FEE\u6539\u518D\u4F7F\u7528');\\n  }\\n\\n  protected operation3(): void {\\n    console.log('\u5BF9\u8BE5\u65B9\u6CD5operation3\u8FDB\u884C\u4E86\u4FEE\u6539\u518D\u4F7F\u7528');\\n  }\\n}\\n\\nclass ConcreteClassB extends AbstractClass {\\n  // \u8986\u76D6\u94A9\u5B50\u65B9\u6CD5\\n  protected hookMethod(): boolean {\\n    return false;\\n  }\\n}\\n\\nfunction main() {\\n  const class1: AbstractClass = new ConcreteClassA();\\n  const class2: AbstractClass = new ConcreteClassB();\\n\\n  class1.template();\\n  class2.template();\\n}\\n\\nmain();",
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
    to: "https://juejin.im/post/6844903615476269064"
  }, "https://juejin.im/post/6844903615476269064")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "https://www.runoob.com/design-pattern/template-pattern.html"
  }, "https://www.runoob.com/design-pattern/template-pattern.html")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "https://github.com/sohamkamani/javascript-design-patterns-for-humans#-template-method"
  }, "https://github.com/sohamkamani/javascript-design-patterns-for-humans#-template-method")))));
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

//# sourceURL=webpack:///./src/Article2/18.%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/15.%E6%A8%A1%E6%9D%BF%E6%96%B9%E6%B3%95%E6%A8%A1%E5%BC%8F/index.md?`)}}]);
