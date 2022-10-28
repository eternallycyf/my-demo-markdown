(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{G1Mb:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
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
    id: "\\u89E3\\u91CA\\u5668\\u6A21\\u5F0F"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u89E3\\u91CA\\u5668\\u6A21\\u5F0F",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u89E3\\u91CA\\u5668\\u6A21\\u5F0F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u89E3\\u91CA\\u5668\\u6A21\\u5F0F", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "Interpreter Pattern"), "\\u63D0\\u4F9B\\u4E86\\u8BC4\\u4F30\\u8BED\\u8A00\\u7684\\u8BED\\u6CD5\\u6216\\u8868\\u8FBE\\u5F0F\\u7684\\u65B9\\u5F0F\\uFF0C\\u5B83\\u5C5E\\u4E8E\\u884C\\u4E3A\\u578B\\u6A21\\u5F0F\\uFF0C\\u8FD9\\u79CD\\u6A21\\u5F0F\\u5B9E\\u73B0\\u4E86\\u4E00\\u4E2A\\u8868\\u8FBE\\u5F0F\\u63A5\\u53E3\\uFF0C\\u8BE5\\u63A5\\u53E3\\u89E3\\u91CA\\u4E00\\u4E2A\\u7279\\u5B9A\\u7684\\u4E0A\\u4E0B\\u6587\\uFF0C\\u89E3\\u91CA\\u5668\\u6A21\\u5F0F\\u901A\\u5E38\\u88AB\\u7528\\u5728 SQL \\u89E3\\u6790\\u3001\\u7B26\\u53F7\\u5904\\u7406\\u5F15\\u64CE\\u7B49\\u3002")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u4EE3\\u7801\\u5B9E\\u73B0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u4EE3\\u7801\\u5B9E\\u73B0",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u4EE3\\u7801\\u5B9E\\u73B0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "function Context() {\\n  var sum = 0;\\n  var list = [];\\n  this.getSum = function() {\\n    return sum;\\n  };\\n  this.setSum = function(_sum) {\\n    sum = _sum;\\n  };\\n  this.add = function(eps) {\\n    list.push(eps);\\n  };\\n  this.getList = function() {\\n    return list;\\n  };\\n}\\n\\nfunction PlusExpression() {\\n  this.interpret = function(context) {\\n    var sum = context.getSum();\\n    sum++;\\n    context.setSum(sum);\\n  };\\n}\\n\\nfunction MinusExpression() {\\n  this.interpret = function(context) {\\n    var sum = context.getSum();\\n    sum--;\\n    context.setSum(sum);\\n  };\\n}\\n\\n(function() {\\n  var context = new Context();\\n  context.setSum(20);\\n  //\u8FD0\u884C\u52A0\u6CD5\u4E09\u6B21\\n  context.add(new PlusExpression());\\n  context.add(new PlusExpression());\\n  context.add(new PlusExpression());\\n  //\u8FD0\u884C\u51CF\u6CD5\u4E24\u6B21\\n  context.add(new MinusExpression());\\n  context.add(new MinusExpression());\\n  var list = context.getList();\\n  for (var i = 0; i < list.length; i++) {\\n    let expression = list[i];\\n    expression.interpret(context);\\n  }\\n  console.log(context.getSum()); // 21\\n})();",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u53C2\\u8003\\u94FE\\u63A5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u53C2\\u8003\\u94FE\\u63A5",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u53C2\\u8003\\u94FE\\u63A5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "http://c.biancheng.net/view/1402.html"
  }, "http://c.biancheng.net/view/1402.html")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "https://blog.csdn.net/itpinpai/article/details/51657199"
  }, "https://blog.csdn.net/itpinpai/article/details/51657199")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "https://www.runoob.com/design-pattern/interpreter-pattern.html"
  }, "https://www.runoob.com/design-pattern/interpreter-pattern.html")))));
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

//# sourceURL=webpack:///./src/Article2/18.%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/25.%E8%A7%A3%E9%87%8A%E5%99%A8%E6%A8%A1%E5%BC%8F/index.md?`)}}]);
