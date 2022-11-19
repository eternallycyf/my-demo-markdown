(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{"0XUV":function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
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
    id: "browserslistrc"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#browserslistrc",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "browserslistrc"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u914D\\u7F6E\\u6D4F\\u89C8\\u5668\\u517C\\u5BB9\\u6027"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u914D\\u7F6E\\u6D4F\\u89C8\\u5668\\u517C\\u5BB9\\u6027",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u914D\\u7F6E\\u6D4F\\u89C8\\u5668\\u517C\\u5BB9\\u6027"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u6CE8\u91CA\u662F\u8FD9\u6837\u5199\u7684\uFF0C\u4EE5#\u53F7\u5F00\u5934\\nlast 1 version #\u6700\u540E\u7684\u4E00\u4E2A\u7248\u672C\\n> 1%  #\u4EE3\u8868\u5168\u7403\u8D85\u8FC71%\u4F7F\u7528\u7684\u6D4F\u89C8\u5668\\nmaintained node versions #\u6240\u6709\u8FD8\u88AB node \u57FA\u91D1\u4F1A\u7EF4\u62A4\u7684 node \u7248\u672C\\nnot dead",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u914D\\u7F6E"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u914D\\u7F6E",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u914D\\u7F6E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "> 5%: \u57FA\u4E8E\u5168\u7403\u4F7F\u7528\u7387\u7EDF\u8BA1\u800C\u9009\u62E9\u7684\u6D4F\u89C8\u5668\u7248\u672C\u8303\u56F4\u3002>=,<,<=\u540C\u6837\u9002\u7528\u3002\\n> 5% in US : \u540C\u4E0A\uFF0C\u53EA\u662F\u4F7F\u7528\u5730\u533A\u53D8\u4E3A\u7F8E\u56FD\u3002\u652F\u6301\u4E24\u4E2A\u5B57\u6BCD\u7684\u56FD\u5BB6\u7801\u6765\u6307\u5B9A\u5730\u533A\u3002\\n> 5% in alt-AS : \u540C\u4E0A\uFF0C\u53EA\u662F\u4F7F\u7528\u5730\u533A\u53D8\u4E3A\u4E9A\u6D32\u6240\u6709\u56FD\u5BB6\u3002\u8FD9\u91CC\u5217\u4E3E\u4E86\u6240\u6709\u7684\u5730\u533A\u7801\u3002\\n> 5% in my stats : \u4F7F\u7528\u5B9A\u5236\u7684\u6D4F\u89C8\u5668\u7EDF\u8BA1\u6570\u636E\u3002\\ncover 99.5% : \u4F7F\u7528\u7387\u603B\u548C\u4E3A99.5%\u7684\u6D4F\u89C8\u5668\u7248\u672C\uFF0C\u524D\u63D0\u662F\u6D4F\u89C8\u5668\u63D0\u4F9B\u4E86\u4F7F\u7528\u8986\u76D6\u7387\u3002\\ncover 99.5% in US : \u540C\u4E0A\uFF0C\u53EA\u662F\u9650\u5236\u4E86\u5730\u57DF\uFF0C\u652F\u6301\u4E24\u4E2A\u5B57\u6BCD\u7684\u56FD\u5BB6\u7801\u3002\\ncover 99.5% in my stats :\u4F7F\u7528\u5B9A\u5236\u7684\u6D4F\u89C8\u5668\u7EDF\u8BA1\u6570\u636E\u3002\\nmaintained node versions :\u6240\u6709\u8FD8\u88AB node \u57FA\u91D1\u4F1A\u7EF4\u62A4\u7684 node \u7248\u672C\u3002\\nnode 10 and node 10.4 : \u6700\u65B0\u7684 node 10.x.x \u6216\u800510.4.x \u7248\u672C\u3002\\ncurrent node :\u5F53\u524D\u88AB browserslist \u4F7F\u7528\u7684 node \u7248\u672C\u3002\\nextends browserslist-config-mycompany :\u6765\u81EAbrowserslist-config-mycompany\u5305\u7684\u67E5\u8BE2\u8BBE\u7F6E\\nie 6-8 : \u9009\u62E9\u4E00\u4E2A\u6D4F\u89C8\u5668\u7684\u7248\u672C\u8303\u56F4\u3002\\nFirefox > 20 : \u7248\u672C\u9AD8\u4E8E20\u7684\u6240\u6709\u706B\u72D0\u6D4F\u89C8\u5668\u7248\u672C\u3002>=,<,<=\u540C\u6837\u9002\u7528\u3002\\nios 7 :ios 7\u81EA\u5E26\u7684\u6D4F\u89C8\u5668\u3002\\nFirefox ESR :\u6700\u65B0\u7684\u706B\u72D0 ESR\uFF08\u957F\u671F\u652F\u6301\u7248\uFF09 \u7248\u672C\u7684\u6D4F\u89C8\u5668\u3002\\nunreleased versions or unreleased Chrome versions : alpha \u548C beta \u7248\u672C\u3002\\nlast 2 major versions or last 2 ios major versions :\u6700\u8FD1\u7684\u4E24\u4E2A\u53D1\u884C\u7248\uFF0C\u5305\u62EC\u6240\u6709\u7684\u6B21\u7248\u672C\u53F7\u548C\u8865\u4E01\u7248\u672C\u53F7\u53D8\u66F4\u7684\u6D4F\u89C8\u5668\u7248\u672C\u3002\\nsince 2015 or last 2 years :\u81EA\u67D0\u4E2A\u65F6\u95F4\u4EE5\u6765\u66F4\u65B0\u7684\u7248\u672C\uFF08\u4E5F\u53EF\u4EE5\u5199\u7684\u66F4\u5177\u4F53since 2015-03\u6216\u8005since 2015-03-10\uFF09\\ndead :\u901A\u8FC7last 2 versions\u7B5B\u9009\u7684\u6D4F\u89C8\u5668\u7248\u672C\u4E2D\uFF0C\u5168\u7403\u4F7F\u7528\u7387\u4F4E\u4E8E0.5%\u5E76\u4E14\u5B98\u65B9\u58F0\u660E\u4E0D\u5728\u7EF4\u62A4\u6216\u8005\u4E8B\u5B9E\u4E0A\u5DF2\u7ECF\u4E24\u5E74\u6CA1\u6709\u518D\u66F4\u65B0\u7684\u7248\u672C\u3002\u76EE\u524D\u7B26\u5408\u6761\u4EF6\u7684\u6709 IE10,IE_Mob 10,BlackBerry 10,BlackBerry 7,OperaMobile 12.1\u3002\\nlast 2 versions :\u6BCF\u4E2A\u6D4F\u89C8\u5668\u6700\u8FD1\u7684\u4E24\u4E2A\u7248\u672C\u3002\\nlast 2 Chrome versions :chrome \u6D4F\u89C8\u5668\u6700\u8FD1\u7684\u4E24\u4E2A\u7248\u672C\u3002\\ndefaults :\u9ED8\u8BA4\u914D\u7F6E> 0.5%, last 2 versions, Firefox ESR, not dead\u3002\\nnot ie <= 8 : \u6D4F\u89C8\u5668\u8303\u56F4\u7684\u53D6\u53CD\u3002\\n\u53EF\u4EE5\u6DFB\u52A0not\u5728\u4EFB\u548C\u67E5\u8BE2\u6761\u4EF6\u524D\u9762\uFF0C\u8868\u793A\u53D6\u53CD",
    lang: "bash"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "demo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#demo",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "demo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, ".browserslistrc")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "[production staging]\\n> 1%\\nie 10\\n\\n[development]\\nlast 1 chrome version\\nlast 1 firefox version",
    lang: "bash"
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

//# sourceURL=webpack:///./src/Article/5.%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/browserslistrc/index.md?`)}}]);
