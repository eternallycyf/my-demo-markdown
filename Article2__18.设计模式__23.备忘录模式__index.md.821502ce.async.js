(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"8WiV":function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
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
    id: "\\u5907\\u5FD8\\u5F55\\u6A21\\u5F0F"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u5907\\u5FD8\\u5F55\\u6A21\\u5F0F",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u5907\\u5FD8\\u5F55\\u6A21\\u5F0F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u662F\\u5728\\u4E0D\\u7834\\u574F\\u5C01\\u88C5\\u6027\\u7684\\u524D\\u63D0\\u4E0B\\uFF0C\\u5C06\\u5BF9\\u8C61\\u5F53\\u524D\\u7684\\u5185\\u90E8\\u72B6\\u6001\\u4FDD\\u5B58\\u5728\\u5BF9\\u8C61\\u4E4B\\u5916\\uFF0C\\u4EE5\\u4FBF\\u4EE5\\u540E\\u5F53\\u9700\\u8981\\u65F6\\u80FD\\u5C06\\u8BE5\\u5BF9\\u8C61\\u6062\\u590D\\u5230\\u539F\\u5148\\u4FDD\\u5B58\\u7684\\u72B6\\u6001\\u3002\\u5907\\u5FD8\\u5F55\\u6A21\\u5F0F\\u53C8\\u53EB\\u5FEB\\u7167\\u6A21\\u5F0F\\uFF0C\\u662F\\u4E00\\u79CD\\u5BF9\\u8C61\\u884C\\u4E3A\\u578B\\u6A21\\u5F0F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u573A\\u666F", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u9700\\u8981\\u4FDD\\u5B58/\\u6062\\u590D\\u6570\\u636E\\u7684\\u76F8\\u5173\\u72B6\\u6001\\u573A\\u666F\\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u63D0\\u4F9B\\u4E00\\u4E2A\\u53EF\\u56DE\\u6EDA\\u7684\\u64CD\\u4F5C\\u3002")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u4EE3\\u7801\\u5B9E\\u73B0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u4EE3\\u7801\\u5B9E\\u73B0",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u4EE3\\u7801\\u5B9E\\u73B0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// \u4EE5\u6587\u672C\u7F16\u8F91\u5668\u4E3A\u4F8B\uFF0C\u8BE5\u7F16\u8F91\u5668\u4F1A\u4E0D\u65F6\u5730\u4FDD\u5B58\u72B6\u6001\uFF0C\u5E76\u4E14\u53EF\u4EE5\u6839\u636E\u9700\u8981\u8FDB\u884C\u6062\u590D\u3002\\nclass EditorMemento {\\n  // memento\u5BF9\u8C61\u5C06\u80FD\u591F\u4FDD\u6301\u7F16\u8F91\u5668\u72B6\u6001\\n  public _content: string;\\n  constructor(public content: string) {\\n    this._content = content;\\n  }\\n\\n  getContent() {\\n    return this._content;\\n  }\\n}\\n\\nclass Editor {\\n  public _content: string;\\n  constructor() {\\n    this._content = '';\\n  }\\n\\n  type(words: string) {\\n    this._content = \`\${this._content} \${words}\`;\\n  }\\n\\n  getContent() {\\n    return this._content;\\n  }\\n\\n  save() {\\n    return new EditorMemento(this._content);\\n  }\\n\\n  restore(memento: any) {\\n    this._content = memento.getContent();\\n  }\\n}\\n\\nconst editor = new Editor();\\n\\neditor.type('This is the first sentence.');\\neditor.type('This is second.');\\n\\nconst saved = editor.save();\\n\\neditor.type('And this is third.');\\n\\nconsole.log(editor.getContent()); // This is the first sentence. This is second. And this is third.\\n\\neditor.restore(saved);\\n\\nconsole.log(editor.getContent()); // This is the first sentence. This is second.",
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
    to: "https://github.com/Byronlee/Design-patterns"
  }, "https://github.com/Byronlee/Design-patterns")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "https://www.runoob.com/design-pattern/memento-pattern.html"
  }, "https://www.runoob.com/design-pattern/memento-pattern.html")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "https://github.com/sohamkamani/javascript-design-patterns-for-humans#-memento"
  }, "https://github.com/sohamkamani/javascript-design-patterns-for-humans#-memento")))));
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

//# sourceURL=webpack:///./src/Article2/18.%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/23.%E5%A4%87%E5%BF%98%E5%BD%95%E6%A8%A1%E5%BC%8F/index.md?`)}}]);
