(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{xlLX:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
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
    id: "dva"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#dva",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Dva"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u51C6\\u5907\\u9636\\u6BB5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u51C6\\u5907\\u9636\\u6BB5",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u51C6\\u5907\\u9636\\u6BB5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "routes  \u9996\u9875\u5185\u5BB9\\n#\\n\u5207\u6362\u8DEF\u7531\u6A21\u5F0F \u5728index.js\\nimport { createBrowserHistory as createHistory } from 'history';\\nconst app = dva({history: createHistory(),});\\n\u8986\u76D6\u6389\u4E4B\u524D\u7684 const app = dva();\\n# \u53E6\u4E00\u4E2A\u62A5\u9519 package.json\\n   \\"dva\\":\\"2.6.0-beta.20\\",\\n  \u7136\u540E\u91CD\u65B0\u4E0B\u8F7D\\n# dva\\nuseState\u4E2D\u7684\u6570\u636E \u4E0D\u4F1A\u66F4\u65B0 \u9700\u8981\u7528model\u4E2D\u7684\u8FDB\u884C\u66F4\u65B0",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "js-\\u6587\\u4EF6\\u83B7\\u53D6\\u6570\\u636E"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#js-\\u6587\\u4EF6\\u83B7\\u53D6\\u6570\\u636E",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "js \\u6587\\u4EF6\\u83B7\\u53D6\\u6570\\u636E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "getDvaApp()._store.getState().global.pathname;",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "models"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#models",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Models"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "namespace\\nstate\\nreducers       mutations \u8FD4\u56DE\u5B8C\u6574\u7684 state\\neffects        actions\\n//\u5E76\u53D1 const [r1, r2] = yield all([call(..), call(..)])\\n//yield put(routerRedux.push(\\"/welcome\\"));\\ncommit         dispatch\\nsubscriptions  \u76D1\u542C\u8DEF\u7531 \u952E\u76D8\u4E8B\u4EF6\u7B49\u8C03\u7528\\nconnext",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "state"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#state",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "state"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# models\\nexport default {\\n  namespace: \\"index\\",\\n  state: {\\n    name: \\"\u5F20\u4E09\\"\\n  }\\n};\\n\\n# index.js\\nimport { connect } from 'dva';\\nconst mapStateToProps = state => {\\n  console.log(state);\\n  return {\\n    msg:\\"\u6211\u7231\u4F60\\",\\n    name: state.index.name\\n  }\\n}\\nexport default connect(mapStateToProps)(index)\\n# \u4F7F\u7528\\nthis.props.msg  //\u6211\u7231\u4F60\\nthis.props.name //\u5F20\u4E09",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "reducers"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#reducers",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "reducers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# models\\n  reducers: {\\n    setName (state, action) {\\n      //   console.log(action.data);\\n      return { ...state, ...action.data } // \u5FC5\u987B return\\n    }\\n  }\\n# index.js\\n  const action = { type: \\"login/setName\\",data: { name:\\"xxx\\"} }\\n  // type \u662F  \u547D\u540D\u7A7A\u95F4\u540D\u5B57/\u51FD\u6570\u540D\\n  this.props.dispatch(action)",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "effects"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#effects",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "effects"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Put")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# model\\n// put \u4F20\u5165 action \u540C\u6B65\\n// call \u53D1\u9001\u5F02\u6B65\\n  effects: {\\n    *setNmaeAsync (action, { call, put }) {\\n     const actionSync = { type: \\"setName\\", data: { name: action.data.name } }\\n      yield put(actionSync)\\n    },\\n  }\\n# index.js\\nconst action =\\n    { type: \\"login/setNmaeAsync\\", data: { name: \\"\u5F02\u6B65\u7684\u540D\u5B57\\" } }\\nthis.props.dispatch(action)\\n# \u53EF\u4EE5 return\\n# \u4F7F\u7528 try catch \u6355\u83B7\u9519\u8BEF",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "call")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# model\\n  state: {\\n    cnodeDate: {}\\n  },\\n  reducers: {\\n    getCode (state, action) {\\n      return { ...state, ...action.data }\\n    }\\n  },\\n  effects: {\\n    *testCnode (action, { call, put }) {\\n      const res = yield call(apis.testCnode)\\n      //testCnode \u662F\u5F02\u6B65\u7684\u51FD\u6570\\n      if (res.data) {\\n        const actionAsync = { type: \\"setName\\", cnodeDates: res.data.data }\\n        yield put(actionAsync)\\n      }\\n    }\\n  }\\n#\\n    this.props.dispatch({\\n      type: \\"login/testCnode\\"\\n    })\\n\\n// \u4F7F\u7528 setTimeout \u5916\u754C\u653E\u4E00\u4E2A\u51FD\u6570\\nconst delay = (ms) => new Promise((resolve) => {\\n  setTimeout(resolve, ms);\\n});\\n   yield call(delay, 1000);\\n   yield put",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "poll")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "effects:{\\n      pollStatus: [\\n      function* (_, { put, all }) {\\n        yield all([put({ type: 'chart' })]);\\n        yield all([put({ type: 'chartBatch' })]);\\n        yield all([put({ type: 'chartSinter' })]);\\n      },\\n        // 5\u5206\u949F\\n      { type: 'poll', delay: 1000 * 60 * 5 },\\n    ],\\n}\\n#\\n  subscriptions: {\\n    setup({ dispatch, history }) {\\n  return history.listen(async ({ pathname }) => {\\n  await dispatch({ type: 'xxx/pollStatus-stop' });;\\n        if (true) {\\n          dispatch({\\n            type: 'xxx/pollStatus-start',\\n          });\\n        }\\n      });\\n    },\\n  },",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "subscriptions"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#subscriptions",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "subscriptions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// \u6570\u636E\u521D\u59CB\u5316\\nsubscriptions: {\\n    setup (dispatch, history) {\\n   return history.listen(async (pathname) => {\\n     await dispatch(\\"\u7F51\u7EDC\u8BF7\u6C42stop\\")\\n        if (pathname === 'users') {\\n          dispatch({\\n            type: 'users/\u7F51\u7EDC\u8BF7\u6C42\u521D\u59CB\u5316\u6570\u636Estart',\\n          });\\n        }\\n      })\\n    }\\n  }",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "mock"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#mock",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Mock"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "yarn add mockjs --save\\n\u4F7F\u7528fetch\\n# Mock/index.js\\nmodule.exports = {\\n  'GET /api/mockdate': (req, res) => {\\n    res.send({\\n      msg: \\"\u5915\u9633\u4E0B\\"\\n    })\\n  }\\n}\\n# .roadhogrc.mock.js\\nexport default {\\n  ...require('./mock/index')\\n};\\n# services/example.js\\nexport function getMockData () {\\n  return request('/api/mockdate');\\n}\\n# index.js\\n  async componentDidMount () {\\n    console.log(await getMockData());\\n  }'\\n# yapi\\n\u9700\u8981node 11.0\\nyapi server\\n\u5728\u8FD4\u56DE\u6570\u636E \u8BBE\u7F6E \u7F16\u8F91\u6E90\u7801\\n{\\n  \\"boolean|1\\": true\\n}\\nnode vendors/server/app.js",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u5176\\u4ED6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u5176\\u4ED6",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u5176\\u4ED6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u53CD\\u5411\\u4EE3\\u7406"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u53CD\\u5411\\u4EE3\\u7406",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u53CD\\u5411\\u4EE3\\u7406"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# .webpackrc.js\\nexport default {\\n  \\"proxy\\": {\\n    \\"/api\\": {\\n      \\"target\\": \\"http://jsonplaceholder.typicode.com/\\",\\n      \\"changeOrigin\\": true,\\n      \\"pathRewrite\\": { \\"^/api\\": \\"\\" }\\n    }\\n  },\\n}\\n#\\nreturn request('/api1//api/v1/topics');\\nhttps://cnodejs.org/api\\n#",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "loading"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#loading",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "loading"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "yarn add dva-loading --save\\nimport createLoading from 'dva-loading'\\napp.use(createLoading())\\n\\n// \u968F\u540E reducer \u7684 state \u4E2D\u4F1A\u589E\u52A0\u4E00\u4E2A loading \u7684\u5C5E\u6027\\nfunction mapStateToProps(state, ownProps) {\\n  return {\\n    loading:state.loading\\n  }\\n}\\n\\nconst loading=this.props.loading.effects['todoList/addAsync']\\n\\n <Spin spinning={!!loading}>",
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

//# sourceURL=webpack:///./src/Article/9.react/dva/index.md?`)}}]);
