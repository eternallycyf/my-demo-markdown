(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{"4NZI":function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
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
    id: "tsconfig"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#tsconfig",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "tsconfig"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "\\"compilerOptions\\": {\\n  \\"incremental\\": true, // TS\u7F16\u8BD1\u5668\u5728\u7B2C\u4E00\u6B21\u7F16\u8BD1\u4E4B\u540E\u4F1A\u751F\u6210\u4E00\u4E2A\u5B58\u50A8\u7F16\u8BD1\u4FE1\u606F\u7684\u6587\u4EF6\uFF0C\u7B2C\u4E8C\u6B21\u7F16\u8BD1\u4F1A\u5728\u7B2C\u4E00\u6B21\u7684\u57FA\u7840\u4E0A\u8FDB\u884C\u589E\u91CF\u7F16\u8BD1\uFF0C\u53EF\u4EE5\u63D0\u9AD8\u7F16\u8BD1\u7684\u901F\u5EA6\\n  \\"tsBuildInfoFile\\": \\"./buildFile\\", // \u589E\u91CF\u7F16\u8BD1\u6587\u4EF6\u7684\u5B58\u50A8\u4F4D\u7F6E\\n  \\"diagnostics\\": true, // \u6253\u5370\u8BCA\u65AD\u4FE1\u606F\\n  \\"target\\": \\"ES5\\", // \u76EE\u6807\u8BED\u8A00\u7684\u7248\u672C\\n  \\"module\\": \\"CommonJS\\", // \u751F\u6210\u4EE3\u7801\u7684\u6A21\u677F\u6807\u51C6\\n  \\"outFile\\": \\"./app.js\\", // \u5C06\u591A\u4E2A\u76F8\u4E92\u4F9D\u8D56\u7684\u6587\u4EF6\u751F\u6210\u4E00\u4E2A\u6587\u4EF6\uFF0C\u53EF\u4EE5\u7528\u5728AMD\u6A21\u5757\u4E2D\uFF0C\u5373\u5F00\u542F\u65F6\u5E94\u8BBE\u7F6E\\"module\\": \\"AMD\\",\\n  \\"lib\\": [\\"DOM\\", \\"ES2015\\", \\"ScriptHost\\", \\"ES2019.Array\\"], // TS\u9700\u8981\u5F15\u7528\u7684\u5E93\uFF0C\u5373\u58F0\u660E\u6587\u4EF6\uFF0Ces5 \u9ED8\u8BA4\u5F15\u7528dom\u3001es5\u3001scripthost,\u5982\u9700\u8981\u4F7F\u7528es\u7684\u9AD8\u7EA7\u7248\u672C\u7279\u6027\uFF0C\u901A\u5E38\u90FD\u9700\u8981\u914D\u7F6E\uFF0C\u5982es8\u7684\u6570\u7EC4\u65B0\u7279\u6027\u9700\u8981\u5F15\u5165\\"ES2019.Array\\",\\n  \\"allowJS\\": true, // \u5141\u8BB8\u7F16\u8BD1\u5668\u7F16\u8BD1JS\uFF0CJSX\u6587\u4EF6\\n  \\"checkJs\\": true, // \u5141\u8BB8\u5728JS\u6587\u4EF6\u4E2D\u62A5\u9519\uFF0C\u901A\u5E38\u4E0EallowJS\u4E00\u8D77\u4F7F\u7528\\n  \\"outDir\\": \\"./dist\\", // \u6307\u5B9A\u8F93\u51FA\u76EE\u5F55\\n  \\"rootDir\\": \\"./\\", // \u6307\u5B9A\u8F93\u51FA\u6587\u4EF6\u76EE\u5F55(\u7528\u4E8E\u8F93\u51FA)\uFF0C\u7528\u4E8E\u63A7\u5236\u8F93\u51FA\u76EE\u5F55\u7ED3\u6784\\n  \\"declaration\\": true, // \u751F\u6210\u58F0\u660E\u6587\u4EF6\uFF0C\u5F00\u542F\u540E\u4F1A\u81EA\u52A8\u751F\u6210\u58F0\u660E\u6587\u4EF6\\n  \\"declarationDir\\": \\"./file\\", // \u6307\u5B9A\u751F\u6210\u58F0\u660E\u6587\u4EF6\u5B58\u653E\u76EE\u5F55\\n  \\"emitDeclarationOnly\\": true, // \u53EA\u751F\u6210\u58F0\u660E\u6587\u4EF6\uFF0C\u800C\u4E0D\u4F1A\u751F\u6210js\u6587\u4EF6\\n  \\"sourceMap\\": true, // \u751F\u6210\u76EE\u6807\u6587\u4EF6\u7684sourceMap\u6587\u4EF6\\n  \\"inlineSourceMap\\": true, // \u751F\u6210\u76EE\u6807\u6587\u4EF6\u7684inline SourceMap\uFF0Cinline SourceMap\u4F1A\u5305\u542B\u5728\u751F\u6210\u7684js\u6587\u4EF6\u4E2D\\n  \\"declarationMap\\": true, // \u4E3A\u58F0\u660E\u6587\u4EF6\u751F\u6210sourceMap\\n  \\"typeRoots\\": [], // \u58F0\u660E\u6587\u4EF6\u76EE\u5F55\uFF0C\u9ED8\u8BA4\u65F6node_modules/@types\\n  \\"types\\": [], // \u52A0\u8F7D\u7684\u58F0\u660E\u6587\u4EF6\u5305\\n  \\"removeComments\\":true, // \u5220\u9664\u6CE8\u91CA\\n  \\"noEmit\\": true, // \u4E0D\u8F93\u51FA\u6587\u4EF6,\u5373\u7F16\u8BD1\u540E\u4E0D\u4F1A\u751F\u6210\u4EFB\u4F55js\u6587\u4EF6\\n  \\"noEmitOnError\\": true, // \u53D1\u9001\u9519\u8BEF\u65F6\u4E0D\u8F93\u51FA\u4EFB\u4F55\u6587\u4EF6\\n  \\"noEmitHelpers\\": true, // \u4E0D\u751F\u6210helper\u51FD\u6570\uFF0C\u51CF\u5C0F\u4F53\u79EF\uFF0C\u9700\u8981\u989D\u5916\u5B89\u88C5\uFF0C\u5E38\u914D\u5408importHelpers\u4E00\u8D77\u4F7F\u7528\\n  \\"importHelpers\\": true, // \u901A\u8FC7tslib\u5F15\u5165helper\u51FD\u6570\uFF0C\u6587\u4EF6\u5FC5\u987B\u662F\u6A21\u5757\\n  \\"downlevelIteration\\": true, // \u964D\u7EA7\u904D\u5386\u5668\u5B9E\u73B0\uFF0C\u5982\u679C\u76EE\u6807\u6E90\u662Fes3/5\uFF0C\u90A3\u4E48\u904D\u5386\u5668\u4F1A\u6709\u964D\u7EA7\u7684\u5B9E\u73B0\\n  \\"strict\\": true, // \u5F00\u542F\u6240\u6709\u4E25\u683C\u7684\u7C7B\u578B\u68C0\u67E5\\n  \\"jsx\\": \\"preserve\\", // \u6307\u5B9A jsx \u683C\u5F0F\\n  \\"alwaysStrict\\": true, // \u5728\u4EE3\u7801\u4E2D\u6CE8\u5165'use strict'\\n  \\"noImplicitAny\\": true, // \u4E0D\u5141\u8BB8\u9690\u5F0F\u7684any\u7C7B\u578B\\n  \\"strictNullChecks\\": true, // \u4E0D\u5141\u8BB8\u628Anull\u3001undefined\u8D4B\u503C\u7ED9\u5176\u4ED6\u7C7B\u578B\u7684\u53D8\u91CF\\n  \\"strictFunctionTypes\\": true, // \u4E0D\u5141\u8BB8\u51FD\u6570\u53C2\u6570\u53CC\u5411\u534F\u53D8\\n  \\"strictPropertyInitialization\\": true, // \u7C7B\u7684\u5B9E\u4F8B\u5C5E\u6027\u5FC5\u987B\u521D\u59CB\u5316\\n  \\"strictBindCallApply\\": true, // \u4E25\u683C\u7684bind/call/apply\u68C0\u67E5\\n  \\"noImplicitThis\\": true, // \u4E0D\u5141\u8BB8this\u6709\u9690\u5F0F\u7684any\u7C7B\u578B\\n  \\"noUnusedLocals\\": true, // \u68C0\u67E5\u53EA\u58F0\u660E\u3001\u672A\u4F7F\u7528\u7684\u5C40\u90E8\u53D8\u91CF(\u53EA\u63D0\u793A\u4E0D\u62A5\u9519)\\n  \\"noUnusedParameters\\": true, // \u68C0\u67E5\u672A\u4F7F\u7528\u7684\u51FD\u6570\u53C2\u6570(\u53EA\u63D0\u793A\u4E0D\u62A5\u9519)\\n  \\"noFallthroughCasesInSwitch\\": true, // \u9632\u6B62switch\u8BED\u53E5\u8D2F\u7A7F(\u5373\u5982\u679C\u6CA1\u6709break\u8BED\u53E5\u540E\u9762\u4E0D\u4F1A\u6267\u884C)\\n  \\"noImplicitReturns\\": true, //\u6BCF\u4E2A\u5206\u652F\u90FD\u4F1A\u6709\u8FD4\u56DE\u503C\\n  \\"esModuleInterop\\": true, // \u5141\u8BB8export=\u5BFC\u51FA\uFF0C\u7531import from \u5BFC\u5165\\n  \\"allowUmdGlobalAccess\\": true, // \u5141\u8BB8\u5728\u6A21\u5757\u4E2D\u5168\u5C40\u53D8\u91CF\u7684\u65B9\u5F0F\u8BBF\u95EEumd\u6A21\u5757\\n  \\"moduleResolution\\": \\"node\\", // \u6A21\u5757\u89E3\u6790\u7B56\u7565\uFF0Cts\u9ED8\u8BA4\u7528node\u7684\u89E3\u6790\u7B56\u7565\uFF0C\u5373\u76F8\u5BF9\u7684\u65B9\u5F0F\u5BFC\u5165\\n  \\"baseUrl\\": \\"./\\", // \u89E3\u6790\u975E\u76F8\u5BF9\u6A21\u5757\u7684\u57FA\u5730\u5740\uFF0C\u9ED8\u8BA4\u662F\u5F53\u524D\u76EE\u5F55\\n  \\"paths\\": { // \u8DEF\u5F84\u6620\u5C04\uFF0C\u76F8\u5BF9\u4E8EbaseUrl\\n    // \u5982\u4F7F\u7528jq\u65F6\u4E0D\u60F3\u4F7F\u7528\u9ED8\u8BA4\u7248\u672C\uFF0C\u800C\u9700\u8981\u624B\u52A8\u6307\u5B9A\u7248\u672C\uFF0C\u53EF\u8FDB\u884C\u5982\u4E0B\u914D\u7F6E\\n    \\"jquery\\": [\\"node_modules/jquery/dist/jquery.min.js\\"]\\n  },\\n  \\"rootDirs\\": [\\"src\\",\\"out\\"], // \u5C06\u591A\u4E2A\u76EE\u5F55\u653E\u5728\u4E00\u4E2A\u865A\u62DF\u76EE\u5F55\u4E0B\uFF0C\u7528\u4E8E\u8FD0\u884C\u65F6\uFF0C\u5373\u7F16\u8BD1\u540E\u5F15\u5165\u6587\u4EF6\u7684\u4F4D\u7F6E\u53EF\u80FD\u53D1\u751F\u53D8\u5316\uFF0C\u8FD9\u4E5F\u8BBE\u7F6E\u53EF\u4EE5\u865A\u62DFsrc\u548Cout\u5728\u540C\u4E00\u4E2A\u76EE\u5F55\u4E0B\uFF0C\u4E0D\u7528\u518D\u53BB\u6539\u53D8\u8DEF\u5F84\u4E5F\u4E0D\u4F1A\u62A5\u9519\\n  \\"listEmittedFiles\\": true, // \u6253\u5370\u8F93\u51FA\u6587\u4EF6\\n  \\"listFiles\\": true// \u6253\u5370\u7F16\u8BD1\u7684\u6587\u4EF6(\u5305\u62EC\u5F15\u7528\u7684\u58F0\u660E\u6587\u4EF6)\\n}",
    lang: "json"
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

//# sourceURL=webpack:///./src/Article/5.%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/tsconfig/index.md?`)}}]);
