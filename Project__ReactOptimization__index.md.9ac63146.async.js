(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{"1WBS":function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    id: "react-\\u6027\\u80FD\\u4F18\\u5316"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#react-\\u6027\\u80FD\\u4F18\\u5316",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "React \\u6027\\u80FD\\u4F18\\u5316"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "1\\u51CF\\u5C11-render-\\u6B21\\u6570"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#1\\u51CF\\u5C11-render-\\u6B21\\u6570",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "1.\\u51CF\\u5C11 render \\u6B21\\u6570"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "shouldcomponentupdate-purecomponent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#shouldcomponentupdate-purecomponent",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "shouldComponentUpdate PureComponent"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "shouldComponentUpdate(nextProps,nextState) {\\nreturn !this.props.xxx === nextProps.xxx\\n}\\n// PureComponent \u81EA\u52A8\u6D45\u5BF9\u6BD4",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "reactmemo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#reactmemo",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "React.Memo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// 1.\u5F53props\u53D8\u5316\u7684\u65F6\u5019\u624D\u4F1A\u91CD\u65B0\u6E32\u67D3 \u6D45\u5C42\u5BF9\u6BD4\\nfunction Component(props) {}\\nconst MyComponent = React.memo(Component);\\n// 2.\u81EA\u5B9A\u4E49\u6BD4\u8F83\u5BF9\u6BD4Props \u5982\u679C\u76F8\u7B49\u8FD4\u56DEtrue \u5426\u5219\u8FD4\u56DEfalse\\nfunction MyComponent(props) {}\\nexport default React.memo(MyComponent, (prevProps, nextProps) => boolean);",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "2\\u51CF\\u5C11\\u51FD\\u6570\\u7684\\u91CD\\u65B0\\u6267\\u884C\\u5BFC\\u81F4\\u7684\\u6E32\\u67D3-usecallback"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#2\\u51CF\\u5C11\\u51FD\\u6570\\u7684\\u91CD\\u65B0\\u6267\\u884C\\u5BFC\\u81F4\\u7684\\u6E32\\u67D3-usecallback",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "2.\\u51CF\\u5C11\\u51FD\\u6570\\u7684\\u91CD\\u65B0\\u6267\\u884C\\u5BFC\\u81F4\\u7684\\u6E32\\u67D3: useCallback"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<button onClick={props.onClick}>\u6539\u6807\u9898</button>\\n// \u7EC4\u4EF6\u7684\u6BCF\u6B21\u6E32\u67D3\u90FD\u4F1A\u91CD\u65B0\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u51FD\u6570 \u56E0\u6B64\u51FD\u6570\u7684\u5F15\u7528\u5730\u5740\u53D1\u751F\u4E86\u53D8\u5316\\n// \u51FD\u6570\u4F1A\u91CD\u65B0\u5F00\u59CB\u6267\u884C \u5012\u662F\u5B50\u7EC4\u4EF6\u91CD\u65B0\u6E32\u67D3\\n// \u89E3\u51B3\u529E\u6CD5\u5C31\u662F\u5728\u51FD\u6570\u6CA1\u6709\u6539\u53D8\u7684\u65F6\u5019\uFF0C\u91CD\u65B0\u6E32\u67D3\u7684\u65F6\u5019\u4FDD\u6301\u4E24\u4E2A\u51FD\u6570\u7684\u5F15\u7528\u4E00\u81F4\\nconst memoizedCallback = useCallback(()=>{}, [])\\n<Child onClick={memoizedCallback} name=\\"xxx\\" />",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "3\\u7F13\\u5B58\\u8BA1\\u7B97\\u91CF\\u6BD4\\u8F83\\u5927\\u7684\\u51FD\\u6570\\u7ED3\\u679C-usememo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#3\\u7F13\\u5B58\\u8BA1\\u7B97\\u91CF\\u6BD4\\u8F83\\u5927\\u7684\\u51FD\\u6570\\u7ED3\\u679C-usememo",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "3.\\u7F13\\u5B58\\u8BA1\\u7B97\\u91CF\\u6BD4\\u8F83\\u5927\\u7684\\u51FD\\u6570\\u7ED3\\u679C: useMemo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u5982\\u679C\\u6CA1\\u6709\\u63D0\\u4F9B\\u4F9D\\u8D56\\u9879\\u6570\\u7EC4\\uFF0CuseMemo \\u5728\\u6BCF\\u6B21\\u6E32\\u67D3\\u65F6\\u90FD\\u4F1A\\u8BA1\\u7B97\\u65B0\\u7684\\u503C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u8BA1\\u7B97\\u91CF\\u5982\\u679C\\u5F88\\u5C0F\\u7684\\u8BA1\\u7B97\\u51FD\\u6570\\uFF0C\\u4E5F\\u53EF\\u4EE5\\u9009\\u62E9\\u4E0D\\u4F7F\\u7528 useMemo\\uFF0C\\u56E0\\u4E3A\\u8FD9\\u70B9\\u4F18\\u5316\\u5E76\\u4E0D\\u4F1A\\u4F5C\\u4E3A\\u6027\\u80FD\\u74F6\\u9888\\u7684\\u8981\\u70B9\\uFF0C\\u53CD\\u800C\\u53EF\\u80FD\\u4F7F\\u7528\\u9519\\u8BEF\\u8FD8\\u4F1A\\u5F15\\u8D77\\u4E00\\u4E9B\\u6027\\u80FD\\u95EE\\u9898")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "const base = useMemo(fn, []);",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "4\\u5176\\u4ED6\\u4F18\\u5316"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#4\\u5176\\u4ED6\\u4F18\\u5316",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "4.\\u5176\\u4ED6\\u4F18\\u5316"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "1\\u5728-render-\\u6E32\\u67D3\\u51FD\\u6570\\u4E2D\\u4E0D\\u8981\\u8FDB\\u884C\\u590D\\u6742\\u7684\\u526F\\u4F5C\\u7528\\u6570\\u7EC4\\u6392\\u5E8F-\\u7B49\\u7B49"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#1\\u5728-render-\\u6E32\\u67D3\\u51FD\\u6570\\u4E2D\\u4E0D\\u8981\\u8FDB\\u884C\\u590D\\u6742\\u7684\\u526F\\u4F5C\\u7528\\u6570\\u7EC4\\u6392\\u5E8F-\\u7B49\\u7B49",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "1.\\u5728 render \\u6E32\\u67D3\\u51FD\\u6570\\u4E2D\\u4E0D\\u8981\\u8FDB\\u884C\\u590D\\u6742\\u7684\\u526F\\u4F5C\\u7528(\\u6570\\u7EC4\\u6392\\u5E8F \\u7B49\\u7B49)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "2\\u51CF\\u5C11\\u4E0D\\u5FC5\\u8981\\u7684\\u5D4C\\u5957"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#2\\u51CF\\u5C11\\u4E0D\\u5FC5\\u8981\\u7684\\u5D4C\\u5957",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "2.\\u51CF\\u5C11\\u4E0D\\u5FC5\\u8981\\u7684\\u5D4C\\u5957"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "3\\u865A\\u62DF\\u5217\\u8868"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#3\\u865A\\u62DF\\u5217\\u8868",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "3.\\u865A\\u62DF\\u5217\\u8868"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "https://usehooks-ts.com/react-hook/use-intersection-observer"
  }, "https://usehooks-ts.com/react-hook/use-intersection-observer"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "4\\u60F0\\u6027\\u6E32\\u67D3--\\u60F0\\u6027\\u51FD\\u6570"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#4\\u60F0\\u6027\\u6E32\\u67D3--\\u60F0\\u6027\\u51FD\\u6570",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "4.\\u60F0\\u6027\\u6E32\\u67D3 && \\u60F0\\u6027\\u51FD\\u6570"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u60F0\\u6027\\u52A0\\u8F7D\\u8868\\u793A\\u51FD\\u6570\\u6267\\u884C\\u7684\\u5206\\u652F\\u53EA\\u4F1A\\u5728\\u51FD\\u6570\\u7B2C\\u4E00\\u6B21\\u8C03\\u7528\\u7684\\u65F6\\u5019\\u6267\\u884C\\u3002\\u5728\\u7B2C\\u4E00\\u6B21\\u8C03\\u7528\\u7684\\u8FC7\\u7A0B\\u4E2D\\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u8BE5\\u51FD\\u6570\\u88AB\\u8986\\u76D6\\u4E3A\\u53E6\\u4E00\\u4E2A\\u6309\\u7167\\u5408\\u9002\\u7684\\u65B9\\u5F0F\\u6267\\u884C\\u7684\\u51FD\\u6570\\u3002\\u8FD9\\u6837\\u4EFB\\u4F55\\u5BF9\\u539F\\u51FD\\u6570\\u7684\\u8C03\\u7528\\u5C31\\u4E0D\\u7528\\u518D\\u7ECF\\u8FC7\\u6267\\u884C\\u7684\\u5206\\u652F\\u4E86")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "#\\n var timeStamp = null;\\n  function getTimeStamp() {\\n    if (timeStamp) {\\n      return timeStamp\\n    }\\n    // \u76F4\u63A5\u4E3A\u5916\u754C\u7684\u53D8\u91CF\u8D4B\u503C\\n    timeStamp = new Date().getTime()\\n    return timeStamp;\\n  }\\n  console.log(getTimeStamp());\\n  console.log(getTimeStamp());\\n  console.log(getTimeStamp());\\n  console.log(getTimeStamp());\\n# \u81EA\u6267\u884C\u51FD\u6570 \u907F\u514D\u6C61\u67D3\u5168\u5C40\u53D8\u91CF\\n  var getTimeStamp = (function () {\\n    var timeStamp = null;\\n    return function () {\\n      if (timeStamp) {\\n        return timeStamp;\\n      }\\n      timeStamp = new Date().getTime()\\n      return timeStamp;\\n    }\\n  })()\\n# \u7B2C\u4E00\u6B21\u53EA\u662F\u5728\u7ED9\u51FD\u6570\u91CD\u65B0\u5B9A\u4E49 \u7B2C\u4E8C\u6B21\u6267\u884C\u65F6\u5019\u624D\u751F\u6548\\n var getTimeStamp = function () {\\n    var timeStamp = new Date().getTime()\\n    getTimeStamp = function () {\\n      return timeStamp\\n    }\\n    return getTimeStamp()\\n  }\\n# element ui \u6E90\u7801 \u5904\u7406 dom \u4E8B\u4EF6\\nexport const on = (function() {\\n  if (!isServer && document.addEventListener) {\\n    return function(element, event, handler) {\\n      if (element && event && handler) {\\n        element.addEventListener(event, handler, false);\\n      }\\n    };\\n  } else {\\n    return function(element, event, handler) {\\n      if (element && event && handler) {\\n        element.attachEvent('on' + event, handler);\\n      }\\n    };\\n  }\\n})();\\n#\\n   function test(num) {\\n    switch (num) {\\n      case 1:\\n        test = () => 1\\n        break;\\n      case 2:\\n        test = () => 2\\n        break;\\n      case 3:\\n        test = () => 3\\n        break;\\n      default:\\n        test = () => null\\n        break;\\n    }\\n    return test()\\n  }\\n  console.log(test(null)); // null",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "5\\u51CF\\u5C11\\u4F7F\\u7528\\u7BAD\\u5934\\u51FD\\u6570--\\u5B9E\\u4F8B\\u65B9\\u6CD5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#5\\u51CF\\u5C11\\u4F7F\\u7528\\u7BAD\\u5934\\u51FD\\u6570--\\u5B9E\\u4F8B\\u65B9\\u6CD5",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "5.\\u51CF\\u5C11\\u4F7F\\u7528\\u7BAD\\u5934\\u51FD\\u6570 => \\u5B9E\\u4F8B\\u65B9\\u6CD5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u4F7F\\u7528\\u7BAD\\u5934\\u51FD\\u6570\\u7684\\u60C5\\u51B5\\u4E0B\\uFF0C\\u6BCF\\u6B21\\u7EC4\\u4EF6\\u7684\\u91CD\\u65B0\\u6E32\\u67D3\\u90FD\\u521B\\u5EFA\\u65B0\\u7684\\u4E8B\\u4EF6\\u5904\\u7406\\u7A0B\\u5E8F\\uFF0C\\u8FD9\\u4F1A\\u5BFC\\u81F4\\u5B50\\u7EC4\\u4EF6\\u91CD\\u65B0\\u6E32\\u67D3")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// 1.class\\n<ComplexComponent onClick={evt => onClick(evt.id)} otherProps={values} />;\\nclass MyComponent extends Component {\\n  render() {\\n    <ComplexComponent onClick={this.handleClick} otherProps={values} />;\\n  }\\n  handleClick = () => {};\\n}\\n// 2.hooks \u4F7F\u7528useCallback\u5305\u88F9\\nconst handleClick = useCallback(() => {}, []);\\nreturn <ComplexComponent onClick={handleClick} otherProps={values} />;\\n// 3.\u5F53\u72B6\u6001\u5F88\u591A\u65F6\u5019\\nfunction useRefProps<T>(props: T) {\\n  const ref = useRef < T > props;\\n  // \u6BCF\u6B21\u6E32\u67D3\u66F4\u65B0props\\n  useEffect(() => {\\n    ref.current = props;\\n  });\\n}\\n\\nfunction MyComp(props) {\\n  const propsRef = useRefProps(props);\\n  // \u73B0\u5728handleClick\u662F\u59CB\u7EC8\u4E0D\u53D8\u7684\\n  const handleClick = useCallback(() => {\\n    const { foo, bar, baz, bazz, bazzzz } = propsRef.current;\\n  }, []);\\n}\\n// 4.class\u9700\u8981bind\u7684\u65F6\u5019\\n// \u4E0D\u8981\u8FD9\u6837 <input type=\\"button\\" value=\\"Click\\" onClick={this.handleButtonClick.bind(this)} />\\n<input type=\\"button\\" value=\\"Click\\" onClick={this.handleButtonClick} />;\\n  constructor() {\\n    this.state = {\\n      name: \\"Mayank\\"\\n    }\\n    this.handleButtonClick = this.handleButtonClick.bind(this)\\n  }",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "6\\u4F7F\\u7528-immutablejs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#6\\u4F7F\\u7528-immutablejs",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "6.\\u4F7F\\u7528 Immutable.js"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "7\\u7B80\\u5316-state-\\u548C-props"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#7\\u7B80\\u5316-state-\\u548C-props",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "7.\\u7B80\\u5316 state \\u548C props"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u4E0D\\u662F\\u6240\\u6709\\u6570\\u636E\\u90FD\\u9700\\u8981\\u653E\\u5728 state \\u91CC\\u9762"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u5982\\u679C\\u9700\\u8981\\u7EC4\\u4EF6\\u54CD\\u5E94\\u5B83\\u7684\\u53D8\\u52A8, \\u6216\\u8005\\u9700\\u8981\\u6E32\\u67D3\\u5230\\u89C6\\u56FE\\u4E2D\\u7684\\u6570\\u636E\\u624D\\u5E94\\u8BE5\\u653E\\u5230 state \\u4E2D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u8FD9\\u6837\\u53EF\\u4EE5\\u907F\\u514D\\u4E0D\\u5FC5\\u8981\\u7684\\u6570\\u636E\\u53D8\\u52A8\\u5BFC\\u81F4\\u7EC4\\u4EF6\\u91CD\\u65B0\\u6E32\\u67D3")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "8\\u9897\\u7C92\\u5316\\u7EC4\\u4EF6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#8\\u9897\\u7C92\\u5316\\u7EC4\\u4EF6",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "8.\\u9897\\u7C92\\u5316\\u7EC4\\u4EF6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "vue \\u4E0D\\u9700\\u8981 shouldComponentUpdate \\u4F1A\\u81EA\\u52A8\\u4F18\\u5316"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u4F46\\u662F\\u5982\\u679C\\u592A\\u8FC7\\u8026\\u5408 \\u53EA\\u8981\\u8981\\u4EFB\\u610F\\u4E00\\u4E2A\\u5C5E\\u6027\\u503C\\u53D8\\u52A8\\u5C31\\u4F1A\\u91CD\\u65B0\\u6E32\\u67D3\\u6574\\u4E2A\\u7EC4\\u4EF6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u5E94\\u8BE5\\u5C06\\u6570\\u636E\\u9694\\u79BB\\u62BD\\u53D6\\u5230\\u5355\\u4E00\\u804C\\u8D23\\u7684\\u7EC4\\u4EF6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u8D8A\\u7EC6\\u7C92\\u5EA6\\u7684\\u7EC4\\u4EF6\\uFF0C\\u53EF\\u4EE5\\u6536\\u83B7\\u66F4\\u9AD8\\u7684\\u6027\\u80FD\\u4F18\\u5316\\u6548\\u679C")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "8\\u61D2\\u52A0\\u8F7D\\u5F02\\u6B65\\u7EC4\\u4EF6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#8\\u61D2\\u52A0\\u8F7D\\u5F02\\u6B65\\u7EC4\\u4EF6",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "8.\\u61D2\\u52A0\\u8F7D\\u5F02\\u6B65\\u7EC4\\u4EF6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "lazy Suspense"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u51CF\\u5C11\\u4E3B\\u5305\\u4F53\\u79EF \\u51CF\\u5C11\\u7F51\\u7EDC\\u5E26\\u5BBD")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "if (this.props.name == 'Mayank') {\\n  ComponentToLazyLoad = lazy(() => import('./mayankComponent'));\\n} else if (this.props.name == 'Anshul') {\\n  ComponentToLazyLoad = lazy(() => import('./anshulComponent'));\\n}\\n<div>\\n  <h1>This is the Base User: {this.state.name}</h1>\\n  <Suspense fallback={<div>Loading...</div>}>\\n    <ComponentToLazyLoad />\\n  </Suspense>\\n</div>;",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "8\\u7528-fragment-\\u4EE3\\u66FF\\u81EA\\u5DF1\\u6700\\u5916\\u5C42\\u5199\\u7684\\u5143\\u7D20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#8\\u7528-fragment-\\u4EE3\\u66FF\\u81EA\\u5DF1\\u6700\\u5916\\u5C42\\u5199\\u7684\\u5143\\u7D20",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "8.\\u7528 Fragment \\u4EE3\\u66FF\\u81EA\\u5DF1\\u6700\\u5916\\u5C42\\u5199\\u7684\\u5143\\u7D20"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "9\\u590D\\u6742\\u53D8\\u52A8\\u7684\\u7EC4\\u4EF6key"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#9\\u590D\\u6742\\u53D8\\u52A8\\u7684\\u7EC4\\u4EF6key",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "9.\\u590D\\u6742\\u53D8\\u52A8\\u7684\\u7EC4\\u4EF6+Key"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u5E76\\u4E0D\\u662F\\u53EA\\u6709 map \\u6E32\\u67D3\\u7684\\u65F6\\u5019\\u624D\\u80FD\\u5199 key"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "element \\u7B49\\u7EC4\\u4EF6\\u5E93\\u4F1A\\u5C06\\u4E00\\u4E9B API \\u5229\\u7528 computed \\u7F13\\u5B58\\uFF08computed \\u53EA\\u6709\\u5F53 props \\u548C data \\u4E2D\\u7684\\u53D8\\u91CF\\u53D8\\u5316\\u7684\\u65F6\\u5019\\u624D\\u4F1A\\u91CD\\u65B0\\u7F13\\u5B58\\uFF09"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "vue \\u7684 diff \\u7B97\\u6CD5\\u6709\\u65F6\\u5019\\u81EA\\u52A8\\u8BA1\\u7B97\\u4F1A\\u76F4\\u63A5\\u7F13\\u5B58", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\uFF08\\u6BD4\\u5982\\u4F60\\u5199\\u4E86\\u4E24\\u4E2A El-Button \\u8FD9\\u65F6\\u5019 diff \\u7B97\\u6CD5\\u5C06\\u4ED6\\u4EEC\\u5F53\\u6210\\u4E00\\u4E2A,\\u800C\\u7EC4\\u4EF6\\u5E93\\u5185\\u90E8\\u7684 computed \\u6CA1\\u6709\\u91CD\\u65B0\\u8BA1\\u7B97\\uFF09"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u6B64\\u65F6\\u5C31\\u53EF\\u80FD\\u4EA7\\u751F\\u503C\\u53D8\\u5316 \\u4F46\\u662F\\u8868\\u5355\\u7684 API \\u672A\\u53D8\\u5316\\u7684 bug"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u8FD9\\u65F6\\u5019\\u5C31\\u9700\\u8981\\u7ED9\\u5176\\u52A0\\u4E0D\\u540C\\u7684 key")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "10\\u907F\\u514D\\u4F7F\\u7528\\u5185\\u8054\\u6837\\u5F0F"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#10\\u907F\\u514D\\u4F7F\\u7528\\u5185\\u8054\\u6837\\u5F0F",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "10.\\u907F\\u514D\\u4F7F\\u7528\\u5185\\u8054\\u6837\\u5F0F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "<b style=", "{", "{", "\\"backgroundColor\\": \\"blue\\"", "}", "}", ">Welcome to Sample Page")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "11\\u9632\\u6D41\\u8282\\u6296"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#11\\u9632\\u6D41\\u8282\\u6296",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "11.\\u9632\\u6D41\\u8282\\u6296"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "12cdn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#12cdn",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "12.CDN"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "13gzip-\\u538B\\u7F29"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#13gzip-\\u538B\\u7F29",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "13.gzip \\u538B\\u7F29"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "http{\\n  gzip on;                      #\u5F00\u542Fgzip\u529F\u80FD\\n  gzip_types *;                 #\u538B\u7F29\u6E90\u6587\u4EF6\u7C7B\u578B,\u6839\u636E\u5177\u4F53\u7684\u8BBF\u95EE\u8D44\u6E90\u7C7B\u578B\u8BBE\u5B9A\\n  gzip_comp_level 6;            #gzip\u538B\u7F29\u7EA7\u522B\\n  gzip_min_length 1024;         #\u8FDB\u884C\u538B\u7F29\u54CD\u5E94\u9875\u9762\u7684\u6700\u5C0F\u957F\u5EA6,content-length\\n  gzip_buffers 4 16K;           #\u7F13\u5B58\u7A7A\u95F4\u5927\u5C0F\\n  gzip_http_version 1.1;        #\u6307\u5B9A\u538B\u7F29\u54CD\u5E94\u6240\u9700\u8981\u7684\u6700\u4F4EHTTP\u8BF7\u6C42\u7248\u672C\\n  gzip_vary  on;                #\u5F80\u5934\u4FE1\u606F\u4E2D\u6DFB\u52A0\u538B\u7F29\u6807\u8BC6\\n  gzip_disable \\"MSIE [1-6]\\\\.\\";  #\u5BF9IE6\u4EE5\u4E0B\u7684\u7248\u672C\u90FD\u4E0D\u8FDB\u884C\u538B\u7F29\\n  gzip_proxied  off;            #nginx\u4F5C\u4E3A\u53CD\u5411\u4EE3\u7406\u538B\u7F29\u670D\u52A1\u7AEF\u8FD4\u56DE\u6570\u636E\u7684\u6761\u4EF6\\n}",
    lang: "conf"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "14webpack-\\u62C6\\u5305"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#14webpack-\\u62C6\\u5305",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "14.webpack \\u62C6\\u5305"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "css-\\u62BD\\u79BB"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#css-\\u62BD\\u79BB",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "css \\u62BD\\u79BB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "plugins: [\\n   new MiniCssExtractPlugin({\\n     // \u5BF9\u8F93\u51FA\u7684css\u6587\u4EF6\u8FDB\u884C\u91CD\u547D\u540D\\n     filename: 'css/built.css'\\n   }),\\n   // \u538B\u7F29css\\n   new OptimizeCssAssetsWebpackPlugin()\\n]\\n\\n#\\n  {\\n        test: /\\\\.css$/,\\n        use: [ 'file-loader']\\n             ['file-loader?name=[name].bundle[hash].css']\\n  },",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "js-\\u62BD\\u79BB"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#js-\\u62BD\\u79BB",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "js \\u62BD\\u79BB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "output: {\\n    filename: 'js/[name].js',\\n    path: path.resolve(__dirname, 'dist'),\\n  },",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "\\u4EE3\\u7801\\u5207\\u5272"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u4EE3\\u7801\\u5207\\u5272",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u4EE3\\u7801\\u5207\\u5272"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "1. \u591A\u5165\u53E3 \u81EA\u52A8\u6253\u5305\u591A\u4E2A\u6587\u4EF6\\n   entry: {\\n    'jquery': './src/index.js',\\n    'angular': './src/2.js'\\n  },\\n2. \u5F02\u90E8\u7684chunk\\n   require.ensure([],function(_require){\\n     _require('./xxx')\\n   })\\n  import('./2.css').then(() => {\\n    ...\\n  })\\n}\\n#\\n3.\\noptimization: {\\n  splitChunks: {\\n    chunks: 'all'\\n  }\\n}\\n#\\nexternals: {\\n  jquery: 'jQuery'\\n}\\n\u5F15\u5165cdn",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "dll"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#dll",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "dll"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "#\\n\u786C\u94FE\u63A5\u4E00\u4E2A \u5305,\u518D\u624B\u52A8scrit\u5F15\u5165\u8FD9\u4E2A\u5305 \u4E4B\u540Ewebpack\u5C31\u4E0D\u7528\u7F16\u8BD1\u4E86\\n#\\nyarn add add-asset-html-webpack-plugin\\nwebpack --config webpack.config.dll.js && webpack\\n# \u6587\u4EF6\u8DEF\u5F84\\n  webpack.config.js\\n  webpack.config.dll.js\\n  dist\\n     index.html\\n  src\\n  public\\n  dll\\n     jquery\\n     manifest.json\\n# webpack.config.js\\nconst path = require('path')\\nconst webpack = require('webpack');\\nconst HtmlWebpackPlugin = require('html-webpack-plugin');\\nconst AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');\\nmodule.export = {\\n  ...\\n  externals: {\\n    jquery: 'jQuery'\\n  },\\n  plugins:[\\n    new HtmlWebpackPlugin({\\n      template: './index.html',\\n      filename: 'index.html',\\n      minify: { removeComments: true }\\n    }),\\n    // \u544A\u8BC9webpack\u54EA\u4E9B\u5E93\u4E0D\u53C2\u4E0E\u6253\u5305\uFF0C\u540C\u65F6\u4F7F\u7528\u65F6\u7684\u540D\u79F0\u4E5F\u5F97\u53D8~\\n    new webpack.DllReferencePlugin({\\n        manifest: resolve(__dirname, 'dll/manifest.json')\\n    }),\\n    // \u5C06\u67D0\u4E2A\u6587\u4EF6\u6253\u5305\u8F93\u51FA\u53BB\uFF0C\u5E76\u5728html\u4E2D\u81EA\u52A8\u5F15\u5165\u8BE5\u8D44\u6E90\\n    new AddAssetHtmlPlugin({\\n       filepath: path.resolve(__dirname, 'dll/jquery.js'),\\n       publicPath: '../dll',\\n       outputPath: 'vendor',\\n    }),\\n  ]\\n}\\n# webpack.config.dll.js\\nconst path = require('path');\\nconst webpack = require('webpack')\\nmodule.exports = {\\n  entry: {\\n    jquery: ['jquery'],\\n  },\\n  output: {\\n    filename: '[name].js',\\n    path: path.resolve(__dirname, 'dll'),\\n    library: '[name]_[hash]'\\n  },\\n  plugins: [\\n    // \u6253\u5305\u751F\u6210\u4E00\u4E2A manifest.json --> \u63D0\u4F9B\u548Cjquery\u6620\u5C04\\n    new webpack.DllPlugin({\\n      // \u6620\u5C04\u5E93\u7684\u66B4\u9732\u7684\u5185\u5BB9\u540D\u79F0 \u548C library \u76F8\u540C\\n      name: '[name]_[hash]',\\n      path: path.join(__dirname, 'dll/manifest.json'),\\n    })\\n  ],\\n  mode: 'production'\\n};",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "externals: {\\n    jquery: 'jQuery'\\n},\\nnew webpack.ProvidePlugin({\\n   $: path.resolve(path.join(__dirname, 'dll/jquery.js'))\\n}),",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "\\u5176\\u4ED6-cli-\\u96C6\\u6210"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u5176\\u4ED6-cli-\\u96C6\\u6210",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u5176\\u4ED6 cli \\u96C6\\u6210"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "chainWebpack: function(config, { webpack }) {\\n    config.merge({\\n      optimization: {\\n        splitChunks: {\\n          chunks: 'all',\\n          minSize: 30000,\\n          minChunks: 3,\\n          automaticNameDelimiter: '.',\\n          cacheGroups: {\\n            vendor: {\\n              name: 'vendors',\\n              test({ resource }: any) {\\n                return /[\\\\\\\\/]node_modules[\\\\\\\\/]/.test(resource);\\n              },\\n              priority: 10,\\n            },\\n          },\\n        },\\n      },\\n    });\\n  },",
    lang: "ts"
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

//# sourceURL=webpack:///./src/Project/ReactOptimization/index.md?`)}}]);
