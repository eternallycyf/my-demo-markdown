(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{nKwW:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dumi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("LtsZ");
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("dEAq");
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dumi_theme__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("H1Ra");










 // memo for page content, to avoid useless re-render since other context fields changed

const PageContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(({
  demos: DUMI_ALL_DEMOS
}) => {
  const DumiDemo1 = Object(dumi__WEBPACK_IMPORTED_MODULE_1__["dynamic"])({
    loader: async function () {
      var _interopRequireDefault = __webpack_require__("K+nK")["default"];

      var _react = _interopRequireDefault(await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "cDcd", 7)));

      var _Alert = _interopRequireDefault(await Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, "DGhM")));

      var _default = function _default() {
        return /*#__PURE__*/_react["default"].createElement(_Alert["default"], {
          type: "warning",
          message: "\\u5F85\\u6574\\u7406",
          description: "\\u6574\\u7406\\u540E\\u5C06\\u79FB\\u52A8\\u5230\\u5176\\u4ED6\\u5730\\u65B9"
        });
      };

      return _default;
    },
    loading: () => null
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DumiDemo1, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "markdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    id: "vueadvanced"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#vueadvanced",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "VueAdvanced"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u91CD\\u7ED8\\u6027\\u80FD\\u6D88\\u8017"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#\\u91CD\\u7ED8\\u6027\\u80FD\\u6D88\\u8017",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u91CD\\u7ED8\\u6027\\u80FD\\u6D88\\u8017"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "innerHTML: render html string O(template size))+ \\u91CD\\u65B0\\u521B\\u5EFA\\u6240\\u6709 DOM \\u5143\\u7D20 O(DOM size)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "vue: Virtual DOM: render Virtual DOM + diff O(template size) + \\u5FC5\\u8981\\u7684 DOM \\u66F4\\u65B0 O(DOM change)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Virtual DOM render + diff \\u65F6\\u95F4 > innerHTML")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "mvvm-vs-virtual-dom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#mvvm-vs-virtual-dom",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "MVVM vs Virtual DOM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "MVVM")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    code: "\u6BD4\u5982 Angular, Knockout \u4EE5\u53CA Vue\u3001Avalon \u91C7\u7528\u7684\u90FD\u662F\u6570\u636E\u7ED1\u5B9A\\n\u6570\u636E\u7ED1\u5B9A\uFF1A\u901A\u8FC7 Directive/Binding \u5BF9\u8C61\uFF0C\u89C2\u5BDF\u6570\u636E\u53D8\u5316\u5E76\u4FDD\u7559\u5BF9\u5B9E\u9645 DOM \u5143\u7D20\u7684\u5F15\u7528\uFF0C\u5F53\u6709\u6570\u636E\u53D8\u5316\u65F6\u8FDB\u884C\u5BF9\u5E94\u7684\u64CD\u4F5C\u3002\\nMVVM \u7684\u53D8\u5316\u68C0\u67E5\u662F\u6570\u636E\u5C42\u9762\u7684\uFF0C\u800C React \u7684\u68C0\u67E5\u662F DOM \u7ED3\u6784\u5C42\u9762\u7684\u3002\\nMVVM \u7684\u6027\u80FD\u4E5F\u6839\u636E\u53D8\u52A8\u68C0\u6D4B\u7684\u5B9E\u73B0\u539F\u7406\u6709\u6240\u4E0D\u540C\uFF1AAngular \u7684\u810F\u68C0\u67E5\u4F7F\u5F97\u4EFB\u4F55\u53D8\u52A8\u90FD\u6709\u56FA\u5B9A\u7684 O(watcher count) \u7684\u4EE3\u4EF7\uFF1B\\nKnockout/Vue/Avalon \u90FD\u91C7\u7528\u4E86\u4F9D\u8D56\u6536\u96C6\uFF0C\u5728 js \u548C DOM \u5C42\u9762\u90FD\u662F O(change)\uFF1A",
    lang: "markdown"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u810F\\u68C0\\u67E5\\uFF1Ascope digest O(watcher count) + \\u5FC5\\u8981 DOM \\u66F4\\u65B0 O(DOM change)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u4F9D\\u8D56\\u6536\\u96C6\\uFF1A\\u91CD\\u65B0\\u6536\\u96C6\\u4F9D\\u8D56 O(data change) + \\u5FC5\\u8981 DOM \\u66F4\\u65B0 O(DOM change)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u7ED3\\u8BBA"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#\\u7ED3\\u8BBA",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u7ED3\\u8BBA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "MVVM \\u5217\\u8868\\u6E32\\u67D3\\u7684\\u521D\\u59CB\\u5316\\u51E0\\u4E4E\\u4E00\\u5B9A\\u6BD4 React \\u6162,\\u56E0\\u4E3A \\u521B\\u5EFA ViewModel / scope \\u5B9E\\u4F8B\\u6BD4\\u8D77 Virtual DOM \\u6765\\u8BF4\\u8981\\u6602\\u8D35\\u5F88\\u591A")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "React \\u7684\\u53D8\\u52A8\\u68C0\\u67E5\\u7531\\u4E8E\\u662F DOM \\u7ED3\\u6784\\u5C42\\u9762\\u7684\\uFF0C\\u5373\\u4F7F\\u662F\\u5168\\u65B0\\u7684\\u6570\\u636E\\uFF0C\\u53EA\\u8981\\u6700\\u540E\\u6E32\\u67D3\\u7ED3\\u679C\\u6CA1\\u53D8\\uFF0C\\u90A3\\u4E48\\u5C31\\u4E0D\\u9700\\u8981\\u505A\\u65E0\\u7528\\u529F\\u3002")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u4E0D\\u540C\\u573A\\u666F")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u521D\\u59CB\\u6E32\\u67D3\\uFF1AVirtual DOM > \\u810F\\u68C0\\u67E5 >= \\u4F9D\\u8D56\\u6536\\u96C6")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u5C0F\\u91CF\\u6570\\u636E\\u66F4\\u65B0\\uFF1A\\u4F9D\\u8D56\\u6536\\u96C6 >> Virtual DOM + \\u4F18\\u5316 > \\u810F\\u68C0\\u67E5\\uFF08\\u65E0\\u6CD5\\u4F18\\u5316\\uFF09 > Virtual DOM \\u65E0\\u4F18\\u5316")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u5927\\u91CF\\u6570\\u636E\\u66F4\\u65B0\\uFF1A\\u810F\\u68C0\\u67E5 + \\u4F18\\u5316 >= \\u4F9D\\u8D56\\u6536\\u96C6 + \\u4F18\\u5316 > Virtual DOM\\uFF08\\u65E0\\u6CD5/\\u65E0\\u9700\\u4F18\\u5316\\uFF09>> MVVM \\u65E0\\u4F18\\u5316"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "form \\u5C24\\u96E8\\u6EAA")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u5728\\u6211\\u770B\\u6765 Virtual DOM \\u771F\\u6B63\\u7684\\u4EF7\\u503C\\u4ECE\\u6765\\u90FD\\u4E0D\\u662F\\u6027\\u80FD\\uFF0C\\u800C\\u662F\\u5B83"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u4E3A\\u51FD\\u6570\\u5F0F\\u7684 UI \\u7F16\\u7A0B\\u65B9\\u5F0F\\u6253\\u5F00\\u4E86\\u5927\\u95E8\\uFF1B"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
    start: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u53EF\\u4EE5\\u6E32\\u67D3\\u5230 DOM \\u4EE5\\u5916\\u7684 backend\\uFF0C\\u6BD4\\u5982 ReactNative\\u201D \\u8BA9\\u6211\\u5BF9\\u865A\\u62DF dom \\u6709\\u4E86\\u65B0\\u5C42\\u6B21\\u7684\\u8BA4\\u8BC6\\uFF0C"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "form \\u77E5\\u4E4E"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    code: "\u4E00\u822C\u53BB\u996D\u5E97\u3001\u65C5\u9986\u524D\uFF0C\u90FD\u4F1A\u6253\u7535\u8BDD\u95EE\u4E00\u4E0B\u8FD8\u6709\u6CA1\u6709\u4F4D\u5B50\uFF0C\u907F\u514D\u767D\u8DD1\u4E00\u8D9F\u3002\\n\u5728\u8FD9\u4E2A\u610F\u4E49\u4E0A\uFF0C\u6211\u4EEC\u8BF4\u6253\u7535\u8BDD\u6BD4\u8DD1\u4E00\u8D9F\u5FEB\u3002\u53EF\u662F\u6253\u5B8C\u7535\u8BDD\u540E\uFF0C\u4F60\u4E0D\u8FD8\u662F\u5F97\u771F\u7684\u53BB\u4E00\u8D9F\u5417\uFF0C\u5BF9\u4E8E\u4F4F\u5E97\u800C\u8A00\uFF0C\u8FD9\u4E2A\u662F\u7701\u4E0D\u4E86\u7684\u3002\\n\u6253\u7535\u8BDD\u7684\u610F\u4E49\u5728\u4E8E\uFF0C\u4E94\u5BB6\u5E97\uFF0C\u4F60\u4E0D\u7528\u6392\u7740\u767D\u8DD1\uFF0C\u786E\u5B9A\u9700\u8981\u771F\u7684\u8DD1\u4E00\u8D9F\u4E86\uFF0C\u624D\u51FA\u95E8\u3002\\n\u6362\u8A00\u4E4B\uFF0C\u8DD1\u4E00\u8D9F\uFF0C\u53EA\u662F\u5BF9\u4E8E\u786E\u8BA4\u6709\u6CA1\u6709\u4F4D\u5B50\u503C\u5F97\u771F\u7684\u51FA\u95E8\u800C\u8A00\uFF0C\u624D\u662F\u53EF\u7701\u7684\u3002\\nvue\u3001react \u7B49\u7684\u865A\u62DF dom \u64CD\u4F5C\uFF0C\u5C31\u76F8\u5F53\u4E8E\u6253\u7535\u8BDD\u786E\u8BA4\u54EA\u4E9B\u66F4\u65B0\u771F\u7684\u53D1\u751F\u4E86\uFF0C\u503C\u5F97\u8FDB\u884C\u771F\u5B9E dom \u64CD\u4F5C\u3002\\n\u56E0\u6B64\uFF0C\u5982\u679C\u4E1A\u52A1\u573A\u666F\u662F\u5168\u90FD\u9700\u8981\u66F4\u65B0\uFF0C\u90A3\u6253\u7535\u8BDD\u53CD\u5012\u6210\u4E86\u989D\u5916\u7684\u5DE5\u4F5C\u4E86\u3002\u4E4B\u6240\u4EE5\u901A\u5E38\u4E0D\u5FC5\u8003\u8651\u8FD9\u79CD\u53EF\u80FD\u6027\uFF0C\\n\u539F\u56E0\u6709\u4E09\uFF1A\\n\\n- 1.\u51E0\u4E4E\u4E0D\u53EF\u80FD\u5168\u90FD\u9700\u8981\u66F4\u65B0\\n- 2.\u6253\u7535\u8BDD\u5C31\u7B97\u6D6A\u8D39\uFF0C\u5F00\u9500\u4E5F\u6781\u4E3A\u4F4E\u5EC9\uFF0C\u4F60\u6709\u5174\u8DA3\u53EF\u4EE5\u5177\u4F53\u5B9A\u91CF\u6D4B\u8BD5\u4E00\u4E0B\uFF0C\u6211\u7B80\u5355\u5B9A\u6027\u5730\u6253\u4E2A\u6BD4\u65B9\uFF0C\u5927\u6982\u7C7B\u4F3C\u4E00\u767E\u4E2A\u5E97\u53EA\u8981\u8282\u7701\u4E86\u4E00\u4E2A\u767D\u8DD1\uFF0C\u4E5D\u5341\u4E5D\u4E2A\u7535\u8BDD\u5C31\u56DE\u672C\u4E86\\n- 3.\u9664\u4E86\u5185\u5BB9\u663E\u793A\uFF0C\u524D\u7AEF\u73B0\u5B9E\u4E1A\u52A1\u5F80\u5F80\u8FD8\u9700\u8981\u7ED1\u5B9A onclick \u7B49\u4EA4\u4E92\u4E8B\u4EF6\uFF0C\u518D\u52A0\u4E0A\u53CC\u5411\u7ED1\u5B9A\uFF0C\u76F4\u89C2\u3001\u667A\u80FD\u7684\u6A21\u677F\u8BED\u6CD5\u662F\u975E\u5E38\u91CD\u8981\u7684\uFF0C\u865A\u62DF dom \u53EA\u662F vue\u3001react \u7B49\u7684\u4E00\u90E8\u5206\uFF0C\u5269\u4E0B\u7684\u8FD9\u4E9B\u90E8\u5206\u90FD\u662F\u6211\u4EEC\u9009\u62E9\u8FD9\u4E9B\u6846\u67B6\u7684\u91CD\u8981\u539F\u56E0\uFF0C\u751A\u81F3\u624D\u662F\u6839\u672C\u539F\u56E0",
    lang: "markdown"
  }))));
});
/* harmony default export */ __webpack_exports__["default"] = (props => {
  const _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["context"]),
        demos = _React$useContext.demos; // scroll to anchor after page component loaded


  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    var _props$location;

    if (props !== null && props !== void 0 && (_props$location = props.location) !== null && _props$location !== void 0 && _props$location.hash) {
      dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"].scrollToAnchor(decodeURIComponent(props.location.hash.slice(1)));
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageContent, {
    demos: demos
  });
});

//# sourceURL=webpack:///./docs/guide/VueAdvanced/index.md?`)}}]);
