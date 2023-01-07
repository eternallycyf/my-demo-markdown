(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{xiwk:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
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
    id: "tsrefinstance-ref-\\u7684-ts-\\u5168\\u90E8\\u6CE8\\u89E3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#tsrefinstance-ref-\\u7684-ts-\\u5168\\u90E8\\u6CE8\\u89E3",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "TsRefInstance ref \\u7684 ts \\u5168\\u90E8\\u6CE8\\u89E3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "class-\\u83B7\\u53D6\\u7EC4\\u4EF6\\u5B9E\\u4F8B"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#class-\\u83B7\\u53D6\\u7EC4\\u4EF6\\u5B9E\\u4F8B",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "class \\u83B7\\u53D6\\u7EC4\\u4EF6\\u5B9E\\u4F8B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "import React from 'react';\\nexport default class Child extends React.Component {\\n  b = () => {};\\n  render() {\\n    return <>Child</>;\\n  }\\n}\\nclass AAA extends React.Component {\\n  myRef = React.createRef<InstanceType<typeof Child>>(null!);\\n  state = {};\\n\\n  backgroundOrigin = () => {\\n    this.myRef.current?.b();\\n  };\\n\\n  render() {\\n    return (\\n      <>\\n        <Child ref={this.myRef} />\\n      </>\\n    );\\n  }\\n}",
    lang: "tsx"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "hook-\\u83B7\\u53D6-ref---1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#hook-\\u83B7\\u53D6-ref---1",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "hook \\u83B7\\u53D6 ref - 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "import React from 'react';\\nimport Countdown, { CountdownHandle } from './Countdown';\\n\\nfunction App() {\\n  const countdownEl = React.useRef<CountdownHandle>(null!);\\n\\n  React.useEffect(() => {\\n    if (countdownEl.current) {\\n      countdownEl.current.a = 10;\\n    }\\n  }, []);\\n\\n  return <Countdown ref={countdownEl} />;\\n}",
    lang: "tsx"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "import React from 'react';\\nexport type CountdownHandle = {\\n  start: () => void;\\n  a: number;\\n};\\n\\ntype Props = {};\\n\\nconst Countdown = React.forwardRef<CountdownHandle, Props>((props, ref) => {\\n  React.useImperativeHandle(ref, () => ({\\n    // start() has type inferrence here\\n    start() {\\n      alert('Start');\\n    },\\n    a: 1,\\n  }));\\n\\n  return <div>Countdown</div>;\\n});\\n\\nexport default Countdown;",
    lang: "tsx"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "hook-\\u83B7\\u53D6-ref---2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#hook-\\u83B7\\u53D6-ref---2",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "hook \\u83B7\\u53D6 ref - 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "import React from 'react';\\ntype CountdownHandle = {\\n  start: () => void;\\n};\\ntype CountdownProps = {};\\nconst Countdown: React.ForwardRefRenderFunction<\\n  CountdownHandle,\\n  CountdownProps\\n> = (props, forwardedRef) => {\\n  React.useImperativeHandle(forwardedRef, () => ({\\n    start() {\\n      alert('Start');\\n    },\\n  }));\\n  return <div>Countdown</div>;\\n};\\n\\nexport default React.forwardRef(Countdown);",
    lang: "tsx"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "import React from 'react';\\nimport Countdown from './Countdown';\\n\\nconst App: React.FC = () => {\\n  const ref = React.useRef<React.ElementRef<typeof Countdown>>(null!); // assign null makes it compatible with elements.\\n  ref.current?.start();\\n  return <Countdown ref={ref} />;\\n};",
    lang: "tsx"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "vue3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#vue3",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "vue3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<script setup lang=\\"ts\\">\\nimport xxx from './xxx'\\nconst Child = ref<InstanceType<typeof xxx>>(null!)\\n</script>",
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

//# sourceURL=webpack:///./src/Components/React/TsRefInstance/index.md?`)}}]);
