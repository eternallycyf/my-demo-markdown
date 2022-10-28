(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{fNBF:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
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
    id: "\\u6865\\u63A5\\u6A21\\u5F0F"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u6865\\u63A5\\u6A21\\u5F0F",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u6865\\u63A5\\u6A21\\u5F0F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u6865\\u63A5\\u6A21\\u5F0F\\u4E5F\\u53EB\\u6865\\u6881\\u6A21\\u5F0F\\uFF0C\\u5C06\\u5B9E\\u73B0\\u4E0E\\u62BD\\u8C61\\u653E\\u5728\\u4E24\\u4E2A\\u4E0D\\u540C\\u7684\\u5C42\\u6B21\\u4E2D\\uFF0C\\u4F7F\\u5F97\\u4E24\\u8005\\u53EF\\u4EE5\\u72EC\\u7ACB\\u5730\\u53D8\\u5316\\u3002(\\u6700\\u4E3B\\u8981\\u7684\\u5C06\\u5B9E\\u73B0\\u548C\\u62BD\\u8C61\\u4E24\\u4E2A\\u5C42\\u6B21\\u5212\\u5206\\u5F00\\u6765)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u5E38\\u89C1\\u573A\\u666F\\uFF1AJDBC \\u9A71\\u52A8\\u7A0B\\u5E8F\\u3001\\u94F6\\u884C\\u8F6C\\u8D26\\u7CFB\\u7EDF\\uFF08\\u8F6C\\u8D26\\u5206\\u7C7B\\u548C\\u8F6C\\u8D26\\u7528\\u6237\\u7C7B\\u578B\\uFF09\\u3001\\u6D88\\u606F\\u7BA1\\u7406\\uFF08\\u6D88\\u606F\\u7C7B\\u578B\\u3001\\u6D88\\u606F\\u5206\\u7C7B\\uFF09")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u4EE3\\u7801\\u5B9E\\u73B0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u4EE3\\u7801\\u5B9E\\u73B0",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u4EE3\\u7801\\u5B9E\\u73B0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// \u5B9E\u73B0\u63A5\u53E3\u89D2\u8272\\ninterface Implementor {\\n  doSomething(): void;\\n  doAnything(): void;\\n}\\n\\n// \u5177\u4F53\u5B9E\u73B0\u89D2\u8272\\nclass ConcreteImplementor1 implements Implementor {\\n  public doSomething(): void {}\\n  public doAnything(): void {}\\n}\\nclass ConcreteImplementor2 implements Implementor {\\n  public doSomething(): void {}\\n  public doAnything(): void {}\\n}\\n\\n// \u62BD\u8C61\u7C7B\\nabstract class Abstraction {\\n  private imp: Implementor;\\n  constructor(imp: Implementor) {\\n    this.imp = imp;\\n  }\\n\\n  // \u81EA\u8EAB\u7684\u884C\u4E3A\u548C\u5C5E\u6027\\n  public request(): void {\\n    this.imp.doSomething();\\n  }\\n}\\n// \u5177\u4F53\u62BD\u8C61\u5316\u89D2\u8272\\nclass RefinedAbstraction extends Abstraction {\\n  constructor(imp: Implementor) {\\n    super(imp);\\n  }\\n\\n  public request(): void {\\n    // \u81EA\u5DF1\u5199\u4E00\u4E9B\u5904\u7406\u4E1A\u52A1\\n    super.request();\\n  }\\n}\\n\\n// \u8C03\u7528\\n// \u5B9A\u4E49\u4E00\u4E2A\u5B9E\u73B0\u5316\u89D2\u8272\\nconst imp: Implementor = new ConcreteImplementor1();\\n// \u5B9A\u4E49\u4E00\u4E2A\u62BD\u8C61\u5316\u89D2\u8272\\nconst abs: Abstraction = new RefinedAbstraction(imp);\\n// \u6267\u884C\u4E0A\u4E0B\u6587\\nabs.request();",
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
    to: "https://segmentfault.com/a/1190000012547750"
  }, "https://segmentfault.com/a/1190000012547750")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "https://www.runoob.com/design-pattern/bridge-pattern.html"
  }, "https://www.runoob.com/design-pattern/bridge-pattern.html")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "https://design-patterns.readthedocs.io/zh_CN/latest/structural_patterns/bridge.html"
  }, "https://design-patterns.readthedocs.io/zh_CN/latest/structural_patterns/bridge.html")))));
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

//# sourceURL=webpack:///./src/Article2/18.%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/12.%E6%A1%A5%E6%8E%A5%E6%A8%A1%E5%BC%8F/index.md?`)}}]);
