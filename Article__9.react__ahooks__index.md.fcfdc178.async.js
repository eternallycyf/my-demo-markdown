(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{sqxn:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
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
    id: "ahooks"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#ahooks",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Ahooks"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u51C6\\u5907\\u9636\\u6BB5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u51C6\\u5907\\u9636\\u6BB5",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u51C6\\u5907\\u9636\\u6BB5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "yarn add ahooks",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "api"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#api",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "API"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "userequest"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#userequest",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "useRequest"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "scene"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#scene",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Scene"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "useantdtable"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#useantdtable",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "useAntdTable"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "const { tableProps, search } = useAntdTable(getTableData,{\\n  form?: any;\\n  // \u81EA\u5DF1\u5207\u6362\u8868\u5355\u5C55\u5F00\u6298\u53E0 \u7528 search.changeType \u63A7\u5236\\n  defaultType?: 'simple' | 'advance';\\n  defaultParams?: [pagination, formData],\\n  // \u9ED8\u8BA4\u5206\u9875\u6570\u91CF\\n  defaultPageSize?: number;\\n  // \u53D8\u5316\u5C31\u4F1A\u91CD\u65B0\u5230\u7B2C\u4E00\u9875\u91CD\u65B0\u8BF7\u6C42\\n  refreshDeps?: any[];\\n});\\n# useAntdTable(getTableData, {...} )\\n\\n// getTableData \u662F\u7F51\u7EDC\u8BF7\u6C42\u51FD\u6570 \u76F8\u5F53\u4E8E onChange\u4E8B\u4EF6\\n// \u4ED6\u7684\u7B2C\u4E00\u4E2A\u5F62\u53C2\u662F\u4E2A {}  \u83B7\u53D6\u5230\u4E86 onChange\u7684\u4E00\u4E9B\u53C2\u6570\\n// \u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u4E2A\u5BF9\u8C61 \u76F8\u5F53\u4E8E form.getFieldsValue()\\n// \u8FD9\u4E2A\u51FD\u6570\u9700\u8981\u8FD4\u56DE\\n{\\n  list: [],\\n  total: 1,\\n}\\n\\n// useAntdTable \u7B2C\u4E8C\u4E2A\u5F62\u53C2\u7528\u6765\u8BBE\u7F6E\u8868\u5355\u914D\u7F6E\\n\\n# tableProps  search params\\n// tableProps\\n// \u5305\u62ECtable\u7684props\u5B57\u6BB5 \u8FD8\u6709search\u5BF9\u8C61\\n// params \u7B2C\u4E00\u4E2A\u53C2\u6570table \u7B2C\u4E8C\u4E2A\u662F\u8868\u5355\\n  search:{\\n    // \u5F53\u524D\u8868\u5355\u7C7B\u578B\\n    type: 'simple' | 'advance';\\n    // \u5207\u6362\u8868\u5355\u7C7B\u578B\\n    changeType: () => void;\\n    // \u63D0\u4EA4\u8868\u5355\\n    submit: () => void;\\n    // \u91CD\u7F6E\u8868\u5355\\n    reset: () => void;\\n  }\\n#\\nimport { useAntdTable } from 'ahooks';\\nconst [form] = Form.useForm();\\nconst { tableProps,search,params } = useAntdTable(getTableData,{\\n  form,\\n  defaultPageSize: 5,\\n});\\nconst columns = []\\n\\n<Table\\n    columns={columns}\\n    rowKey=\\"email\\"\\n    {...tableProps}\\n/>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "usefusiontable"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#usefusiontable",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "useFusionTable"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "#\\n\\n#\\n  const { paginationProps, tableProps } = useFusionTable(getTableData);",
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

//# sourceURL=webpack:///./src/Article/9.react/ahooks/index.md?`)}}]);
