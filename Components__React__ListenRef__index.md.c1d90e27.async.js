(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{fhqd:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
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
    id: "listenref-\\u76D1\\u542C-ref"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#listenref-\\u76D1\\u542C-ref",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "ListenRef \\u76D1\\u542C ref"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "https://zh-hans.reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node"
  }, "https://zh-hans.reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "import { useCallback } from 'react';\\n\\nconst myComponent = () => {\\n  const elemRef = useCallback((node: HTMLDivElement) => {\\n    if (node !== null) {\\n      // do stuff here\\n    }\\n  }, []);\\n\\n  return (\\n    <div id=\\"base-element\\">\\n      <div id=\\"element\\" ref={elemRef}></div>\\n    </div>\\n  );\\n};\\n\\nexport default myComponent;",
    lang: "tsx"
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

//# sourceURL=webpack:///./src/Components/React/ListenRef/index.md?`)}}]);
