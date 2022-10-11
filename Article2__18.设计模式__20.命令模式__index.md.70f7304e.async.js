(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"4BnJ":function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
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
    id: "\\u547D\\u4EE4\\u6A21\\u5F0F"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u547D\\u4EE4\\u6A21\\u5F0F",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u547D\\u4EE4\\u6A21\\u5F0F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u4E3B\\u8981\\u76EE\\u7684\\u662F\\u8BA9\\u8BF7\\u6C42\\u8005\\u548C\\u54CD\\u5E94\\u8005\\u89E3\\u8026\\uFF0C\\u5E76\\u96C6\\u4E2D\\u7BA1\\u7406")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u4EE3\\u7801\\u5B9E\\u73B0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u4EE3\\u7801\\u5B9E\\u73B0",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u4EE3\\u7801\\u5B9E\\u73B0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// \u547D\u4EE4\u63A5\u53E3\\ninterface Command {\\n  execute(): void;\\n  undo(): void;\\n}\\n\\n// \u5F00\u542F\u547D\u4EE4\\nclass ConcreteCommandOn implements Command {\\n  private receiver: Receiver;\\n  constructor(receiver: Receiver) {\\n    this.receiver = receiver;\\n  }\\n\\n  // \u6267\u884C\u547D\u4EE4\u7684\u65B9\u6CD5\\n  public execute(): void {\\n    this.receiver.actionOn();\\n  }\\n\\n  // \u64A4\u9500\u547D\u4EE4\u7684\u65B9\u6CD5\\n  public undo(): void {\\n    this.receiver.actionOff();\\n  }\\n}\\n\\n// \u5173\u95ED\u547D\u4EE4\\nclass ConcreteCommandOff implements Command {\\n  private receiver: Receiver;\\n  constructor(receiver: Receiver) {\\n    this.receiver = receiver;\\n  }\\n\\n  // \u6267\u884C\u547D\u4EE4\u7684\u65B9\u6CD5\\n  public execute(): void {\\n    this.receiver.actionOff();\\n  }\\n\\n  // \u64A4\u9500\u547D\u4EE4\u7684\u65B9\u6CD5\\n  public undo(): void {\\n    this.receiver.actionOn();\\n  }\\n}\\n\\n// \u7A7A\u547D\u4EE4\uFF08\u7701\u53BB\u5224\u7A7A\u64CD\u4F5C\uFF09\\nclass NoCommand implements Command {\\n  public execute(): void {}\\n  public undo(): void {}\\n}\\n\\nclass Receiver {\\n  public actionOn(): void {\\n    console.log('\u6211\u662F\u547D\u4EE4\u63A5\u6536\u8005\uFF0C\u5F00\u542F\u4E86\u67D0\u52A8\u4F5C');\\n  }\\n\\n  public actionOff(): void {\\n    console.log('\u6211\u662F\u547D\u4EE4\u63A5\u6536\u8005\uFF0C\u5173\u95ED\u4E86\u67D0\u52A8\u4F5C');\\n  }\\n}\\n\\nclass Invoker {\\n  private onCommands: Array<Command>;\\n  private offCommands: Array<Command>;\\n  private undoCommand: Command;\\n  private slotNum: number = 7;\\n  constructor() {\\n    this.undoCommand = new NoCommand();\\n    this.onCommands = [];\\n    this.offCommands = [];\\n\\n    for (let i = 0; i < this.slotNum; i++) {\\n      this.onCommands[i] = new NoCommand();\\n      this.offCommands[i] = new NoCommand();\\n    }\\n  }\\n\\n  public setCommand(\\n    index: number,\\n    onCommand: Command,\\n    offCommand: Command,\\n  ): void {\\n    this.onCommands[index] = onCommand;\\n    this.offCommands[index] = offCommand;\\n  }\\n\\n  // \u5F00\u542F\\n  public on(index: number): void {\\n    this.onCommands[index].execute(); // \u8C03\u7528\u76F8\u5E94\u65B9\u6CD5\\n    //\u8BB0\u5F55\u8FD9\u6B21\u64CD\u4F5C\uFF0C\u7528\u4E8E\u64A4\u9500\\n    this.undoCommand = this.onCommands[index];\\n  }\\n\\n  // \u5173\u95ED\\n  public off(index: number): void {\\n    this.offCommands[index].execute();\\n    this.undoCommand = this.offCommands[index];\\n  }\\n\\n  // \u64A4\u9500\\n  public undo(): void {\\n    this.undoCommand.undo();\\n  }\\n}\\n\\nfunction main() {\\n  // \u521B\u5EFA\u63A5\u6536\u8005\\n  const receiver: Receiver = new Receiver();\\n\\n  // \u521B\u5EFA\u547D\u4EE4\\n  const commandOn: Command = new ConcreteCommandOn(receiver);\\n  const commandOff: Command = new ConcreteCommandOff(receiver);\\n\\n  // \u521B\u5EFA\u8C03\u7528\u8005\\n  const invoker: Invoker = new Invoker();\\n  invoker.setCommand(0, commandOn, commandOff);\\n\\n  invoker.on(0);\\n  invoker.off(0);\\n  invoker.undo();\\n}\\n\\nmain();",
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
    to: "https://www.runoob.com/design-pattern/command-pattern.html"
  }, "https://www.runoob.com/design-pattern/command-pattern.html")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "https://github.com/sohamkamani/javascript-design-patterns-for-humans#-command"
  }, "https://github.com/sohamkamani/javascript-design-patterns-for-humans#-command")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "https://design-patterns.readthedocs.io/zh_CN/latest/behavioral_patterns/command.html"
  }, "https://design-patterns.readthedocs.io/zh_CN/latest/behavioral_patterns/command.html")))));
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

//# sourceURL=webpack:///./src/Article2/18.%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/20.%E5%91%BD%E4%BB%A4%E6%A8%A1%E5%BC%8F/index.md?`)}}]);
