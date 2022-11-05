(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{g3w8:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
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
    id: "umipermission"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#umipermission",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "UmiPermission"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "layout-\\u5E03\\u5C40"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#layout-\\u5E03\\u5C40",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "layout \\u5E03\\u5C40"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, ".umirc.ts \\u4E2D\\u5F00\\u542F\\u7B80\\u5355\\u5168\\u5C40\\u6027\\u914D\\u7F6E")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "layout: {\\n    title: 'Ant Design',\\n    // \u9ED8\u8BA4\u5F00\u542F\uFF0C\u5982\u65E0\u9700\u83DC\u5355\u56FD\u9645\u5316\u53EF\u5173\u95ED\\n    locale: false,\\n    logo:\\"\\",\\n  },",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "./src/app.js export \\u4E00\\u4E2A layout \\u540D\\u79F0\\u7684\\u7EC4\\u4EF6\\u3002\\u8FD9\\u91CC\\u5199\\u6240\\u6709\\u7684\\u914D\\u7F6E")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "export const layout = ({ initialState }) => {\\n  return {\\n    // \u95F4\u8DDD \u5207\u6362\u591A\u9875\u9762\u548C\u9762\u5305\u5C51\u6A21\u5F0F\u9700\u8981\u914D\u7F6E\\n    disableContentMargin: false,\\n    iconfontUrl: '/fonticon/iconfont.js',\\n    logout: () => {}, // do something\\n    // \u53F3\u4FA7\u83DC\u5355\\n    rightContentRender: () => <RightContent />,\\n    // \u53EF\u4EE5\u4E0D\u914D\\n    itemRender: (route, _params, routes, _paths) => {\\n      return <Link to={route.path}>{route.breadcrumbName}</Link>;\\n    },\\n    // \u6C34\u5370\\n    waterMarkProps: {\\n      content: initialState?.currentUser?.name,\\n    },\\n    onPageChange: () => {\\n      const { location } = history; // \u5982\u679C\u6CA1\u6709\u767B\u5F55\uFF0C\u91CD\u5B9A\u5411\u5230 login\\n      if (\\n        !initialState?.state?.code === 200 &&\\n        location.pathname !== loginPath\\n      ) {\\n        history.push(loginPath);\\n      }\\n    },\\n    menuHeaderRender: undefined,\\n    ...initialState?.settings,\\n  };\\n};",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u5B50\\u8DEF\\u7531\\u81EA\\u5B9A\\u4E49 layout \\u9875\\u5934\\u9875\\u811A")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// headerRender: false,\\n      // \u4E0D\u5C55\u793A\u9875\u811A\\n      footerRender: false,\\n      // \u4E0D\u5C55\u793A\u83DC\u5355\\n      menuRender: false,\\n      // // \u4E0D\u5C55\u793A\u83DC\u5355\u9876\u680F\\n      // menuHeaderRender: false,",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u8DEF\\u7531 demo")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u5C42\u7EA7\\n.\\n\u251C\u2500\u2500 404.jsx\\n\u251C\u2500\u2500 index.less\\n\u251C\u2500\u2500 index.tsx\\n\u251C\u2500\u2500 marketing\\n\u2502\xA0\xA0 \u251C\u2500\u2500 matter\\n\u2502\xA0\xA0 \u2502\xA0\xA0 \u2514\u2500\u2500 banner\\n\u2502\xA0\xA0 \u2502\xA0\xA0     \u251C\u2500\u2500 bannerDetail\\n\u2502\xA0\xA0 \u2502\xA0\xA0     \u2502\xA0\xA0 \u251C\u2500\u2500 index.jsx\\n\u2502\xA0\xA0 \u2502\xA0\xA0     \u2502\xA0\xA0 \u251C\u2500\u2500 index.less\\n\u2502\xA0\xA0 \u2502\xA0\xA0     \u2502\xA0\xA0 \u251C\u2500\u2500 model.js\\n\u2502\xA0\xA0 \u2502\xA0\xA0     \u2502\xA0\xA0 \u2514\u2500\u2500 service.js\\n\u2502\xA0\xA0 \u2502\xA0\xA0     \u251C\u2500\u2500 bannerEdit\\n\u2502\xA0\xA0 \u2502\xA0\xA0     \u2502\xA0\xA0 \u251C\u2500\u2500 index.jsx\\n\u2502\xA0\xA0 \u2502\xA0\xA0     \u2502\xA0\xA0 \u251C\u2500\u2500 index.less\\n\u2502\xA0\xA0 \u2502\xA0\xA0     \u2502\xA0\xA0 \u251C\u2500\u2500 model.js\\n\u2502\xA0\xA0 \u2502\xA0\xA0     \u2502\xA0\xA0 \u2514\u2500\u2500 service.js\\n\u2502\xA0\xA0 \u2502\xA0\xA0     \u251C\u2500\u2500 bannerOrder\\n\u2502\xA0\xA0 \u2502\xA0\xA0     \u2502\xA0\xA0 \u251C\u2500\u2500 components\\n\u2502\xA0\xA0 \u2502\xA0\xA0     \u2502\xA0\xA0 \u2502\xA0\xA0 \u2514\u2500\u2500 RenderContent\\n\u2502\xA0\xA0 \u2502\xA0\xA0     \u2502\xA0\xA0 \u2502\xA0\xA0     \u251C\u2500\u2500 index.jsx\\n\u2502\xA0\xA0 \u2502\xA0\xA0     \u2502\xA0\xA0 \u2502\xA0\xA0     \u2514\u2500\u2500 index.less\\n\u2502\xA0\xA0 \u2502\xA0\xA0     \u2502\xA0\xA0 \u251C\u2500\u2500 index.jsx\\n\u2502\xA0\xA0 \u2502\xA0\xA0     \u2502\xA0\xA0 \u251C\u2500\u2500 index.less\\n\u2502\xA0\xA0 \u2502\xA0\xA0     \u2502\xA0\xA0 \u251C\u2500\u2500 model.js\\n\u2502\xA0\xA0 \u2502\xA0\xA0     \u2502\xA0\xA0 \u2514\u2500\u2500 service.js\\n\u2502\xA0\xA0 \u2502\xA0\xA0     \u251C\u2500\u2500 components\\n\u2502\xA0\xA0 \u2502\xA0\xA0     \u2502\xA0\xA0 \u2514\u2500\u2500 Section\\n\u2502\xA0\xA0 \u2502\xA0\xA0     \u2502\xA0\xA0     \u251C\u2500\u2500 index.jsx\\n\u2502\xA0\xA0 \u2502\xA0\xA0     \u2502\xA0\xA0     \u2514\u2500\u2500 index.less\\n\u2502\xA0\xA0 \u2502\xA0\xA0     \u251C\u2500\u2500 index.jsx\\n\u2502\xA0\xA0 \u2502\xA0\xA0     \u251C\u2500\u2500 index.less\\n\u2502\xA0\xA0 \u2502\xA0\xA0     \u251C\u2500\u2500 model.js\\n\u2502\xA0\xA0 \u2502\xA0\xA0     \u251C\u2500\u2500 service.js\\n\u2502\xA0\xA0 \u2502\xA0\xA0     \u2514\u2500\u2500 utils.ts\\n\u2502\xA0\xA0 \u2514\u2500\u2500 preferential\\n\u2502\xA0\xA0     \u2514\u2500\u2500 activity\\n\u2502\xA0\xA0         \u251C\u2500\u2500 activityDetail\\n\u2502\xA0\xA0         \u2502\xA0\xA0 \u251C\u2500\u2500 index.jsx\\n\u2502\xA0\xA0         \u2502\xA0\xA0 \u251C\u2500\u2500 index.less\\n\u2502\xA0\xA0         \u2502\xA0\xA0 \u251C\u2500\u2500 model.js\\n\u2502\xA0\xA0         \u2502\xA0\xA0 \u2514\u2500\u2500 service.js\\n\u2502\xA0\xA0         \u251C\u2500\u2500 activityEdit\\n\u2502\xA0\xA0         \u2502\xA0\xA0 \u251C\u2500\u2500 index.jsx\\n\u2502\xA0\xA0         \u2502\xA0\xA0 \u251C\u2500\u2500 index.less\\n\u2502\xA0\xA0         \u2502\xA0\xA0 \u251C\u2500\u2500 model.js\\n\u2502\xA0\xA0         \u2502\xA0\xA0 \u2514\u2500\u2500 service.js\\n\u2502\xA0\xA0         \u251C\u2500\u2500 components\\n\u2502\xA0\xA0         \u2502\xA0\xA0 \u251C\u2500\u2500 RenderPublishTip\\n\u2502\xA0\xA0         \u2502\xA0\xA0 \u2502\xA0\xA0 \u2514\u2500\u2500 index.jsx\\n\u2502\xA0\xA0         \u2502\xA0\xA0 \u2514\u2500\u2500 TableList\\n\u2502\xA0\xA0         \u2502\xA0\xA0     \u2514\u2500\u2500 index.jsx\\n\u2502\xA0\xA0         \u251C\u2500\u2500 index.jsx\\n\u2502\xA0\xA0         \u251C\u2500\u2500 index.less\\n\u2502\xA0\xA0         \u251C\u2500\u2500 model.js\\n\u2502\xA0\xA0         \u251C\u2500\u2500 service.js\\n\u2502\xA0\xA0         \u2514\u2500\u2500 utils.ts\\n\u2514\u2500\u2500 user\\n    \u2514\u2500\u2500 Login\\n        \u251C\u2500\u2500 index.jsx\\n        \u251C\u2500\u2500 index.less\\n        \u2514\u2500\u2500 model.js",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "routes: [\\n    {\\n      path: '/user',\\n      layout: false,\\n      routes: [\\n        {\\n          path: '/user/login',\\n          layout: false,\\n          name: 'login',\\n          component: './user/Login',\\n        },\\n      ],\\n    },\\n    { path: '/', redirect: '/cockpit' },\\n    {\\n      name: '\u8425\u9500\u4E2D\u5FC3',\\n      path: '/marketing',\\n      icon: 'icon-caidan-yingxiaozhongxin',\\n      // headerRender: false,\\n      // \u4E0D\u5C55\u793A\u9875\u811A\\n      footerRender: false,\\n      // \u4E0D\u5C55\u793A\u83DC\u5355\\n      menuRender: false,\\n      // // \u4E0D\u5C55\u793A\u83DC\u5355\u9876\u680F\\n      // menuHeaderRender: false,\\n      routes: [\\n        {\\n          name: '\u4F18\u60E0\u7BA1\u7406',\\n          path: '/marketing',\\n          redirect: '/marketing/preferential',\\n          hideInMenu: true,\\n        },\\n        {\\n          name: '\u4F18\u60E0\u7BA1\u7406',\\n          path: '/marketing/preferential',\\n          hideChildrenInMenu: true,\\n          routes: [\\n            {\\n              name: '\u4F18\u60E0\u6D3B\u52A8',\\n              path: '/marketing/preferential',\\n              redirect: '/marketing/preferential/activity',\\n              hideInMenu: true,\\n            },\\n            {\\n              name: '\u4F18\u60E0\u6D3B\u52A8',\\n              path: '/marketing/preferential/activity',\\n              hideChildrenInMenu: true,\\n              routes: [\\n                {\\n                  name: '\u4F18\u60E0\u6D3B\u52A8',\\n                  path: '/marketing/preferential/activity',\\n                  component: '@/pages/marketing/preferential/activity',\\n                },\\n                {\\n                  name: '\u65B0\u589E\u4F18\u60E0\u6D3B\u52A8',\\n                  path: '/marketing/preferential/activity/activityAdd',\\n                  component:\\n                    '@/pages/marketing/preferential/activity/activityEdit',\\n                },\\n                {\\n                  name: '\u7F16\u8F91\u4F18\u60E0\u6D3B\u52A8',\\n                  path: '/marketing/preferential/activity/activityEdit',\\n                  component:\\n                    '@/pages/marketing/preferential/activity/activityEdit',\\n                },\\n                {\\n                  name: '\u4F18\u60E0\u6D3B\u52A8\u8BE6\u60C5',\\n                  path: '/marketing/preferential/activity/activityDetail',\\n                  component:\\n                    '@/pages/marketing/preferential/activity/activityDetail',\\n                },\\n              ],\\n            },\\n          ],\\n        },\\n        {\\n          name: '\u7D20\u6750\u7BA1\u7406',\\n          path: '/marketing/matter',\\n          hideChildrenInMenu: true,\\n          routes: [\\n            {\\n              name: 'Banner',\\n              path: '/marketing/matter',\\n              redirect: '/marketing/matter/banner',\\n              hideInMenu: true,\\n            },\\n            {\\n              name: 'Banner',\\n              path: '/marketing/matter/banner',\\n              hideChildrenInMenu: true,\\n              routes: [\\n                {\\n                  name: 'Banner',\\n                  path: '/marketing/matter/banner',\\n                  component: '@/pages/marketing/matter/banner',\\n                },\\n                {\\n                  name: '\u8C03\u6574Banner\u987A\u5E8F',\\n                  path: '/marketing/matter/banner/bannerOrder',\\n                  component: '@/pages/marketing/matter/banner/bannerOrder',\\n                },\\n                {\\n                  name: '\u65B0\u589EBanner',\\n                  path: '/marketing/matter/banner/bannerAdd',\\n                  component: '@/pages/marketing/matter/banner/bannerEdit',\\n                },\\n                {\\n                  name: '\u7F16\u8F91Banner',\\n                  path: '/marketing/matter/banner/bannerEdit',\\n                  component: '@/pages/marketing/matter/banner/bannerEdit',\\n                },\\n                {\\n                  name: 'Banner\u8BE6\u60C5',\\n                  path: '/marketing/matter/banner/bannerDetail',\\n                  component: '@/pages/marketing/matter/banner/bannerDetail',\\n                },\\n              ],\\n            },\\n          ],\\n        },\\n      ],\\n    },\\n    { component: '@/pages/404' },\\n  ],",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u521D\\u59CB\\u5316\\u6570\\u636E\\u83B7\\u53D6\\u6D41\\u7A0B"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u521D\\u59CB\\u5316\\u6570\\u636E\\u83B7\\u53D6\\u6D41\\u7A0B",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u521D\\u59CB\\u5316\\u6570\\u636E\\u83B7\\u53D6\\u6D41\\u7A0B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u5728 ./src/app.ts \\u4E2D export getInitialState \\u65B9\\u6CD5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u8FD9\\u662F\\u521D\\u59CB\\u5316\\u83B7\\u53D6\\u7684\\u6570\\u636E(\\u7528\\u6237\\u4FE1\\u606F token \\u7B49\\u7B49)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "export const getInitialState = async () => {\\n  const fetchUserInfo = async () => {\\n    try {\\n      const user = await queryCurrentUser();\\n      return user.data;\\n    } catch (error) {\\n      console.error('\u91CD\u65B0\u767B\u9646');\\n    }\\n    return undefined;\\n  }; // \u5982\u679C\u662F\u767B\u5F55\u9875\u9762\uFF0C\u4E0D\u6267\u884C\\n  // \u5982\u679C\u662F\u767B\u5F55\u9875\u9762\uFF0C\u4E0D\u6267\u884C\\n  const currentUser = await fetchUserInfo();\\n  return {\\n    fetchUserInfo,\\n    currentUser,\\n    settings: {},\\n  };\\n};",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u4F7F\u7528\u65B9\u5F0F\\nimport { useModel } from 'umi';\\n  const {\\n    initialState, // \u5728app.ts export getInitialState\\n    loading,\\n    error,\\n    refresh,\\n    setInitialState\\n  } =\\n    useModel('@@initialState');",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u6743\\u9650\\u7BA1\\u7406"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u6743\\u9650\\u7BA1\\u7406",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u6743\\u9650\\u7BA1\\u7406"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# 1.\u5728./src/app.ts\u91CC\u9762export\u4E86 \u83B7\u53D6\u521D\u59CB\u5316\u6570\u636E\u7684\u65B9\u6CD5\\n# 2.\u5728 ./src/access.ts \u4F1A\u81EA\u52A8\u6CE8\u5165\u521D\u59CB\u5316\u7684\u6570\u636E \u5728\u8FD9\u91CC\u914D\u7F6E\u8DEF\u7531\u548C\u6309\u94AE\u6743\u9650\u6C60\\nexport default function (initialState) {\\n  const menu = initialState?.menu?.split(',') ?? [];\\n  const parentMenu = initialState?.parentMenu?.split(',') ?? [];\\n  const authList = [...parentMenu, ...menu];\\n  return {\\n    // \u83DC\u5355\u6743\u9650\\n    routeAccess: (route) => {\\n      return authList.includes(route.role);\\n    },\\n    // \u6309\u94AE\u6743\u9650\\n    moduleAccess: (foo) => {\\n      return authList.includes(foo);\\n    },\\n  };\\n}\\n# 3.\u9875\u9762\u8BBE\u7F6E\u6309\u94AE\u6743\u9650\\nimport { useAccess } from 'umi';\\nconst access = useAccess();\\nif (access.canReadFoo) {\\n   // \u5982\u679C\u53EF\u4EE5\u8BFB\u53D6 Foo\uFF0C\u5219...\\n}\\n# 4.\u914D\u7F6E\u8DEF\u7531\u6743\u9650 \u901A\u8FC7\u9AD8\u9636\u7EC4\u4EF6 ./src/wrappers/auth.tsx\\nimport { useModel, Redirect } from 'umi';\\n\\nexport default (props) => {\\n  const { initialState } = useModel('@@initialState');\\n  if (initialState) {\\n    return <div>{props.children}</div>;\\n  } else {\\n    return <Redirect to=\\"/user/login\\" />;\\n  }\\n};\\n# \u8DEF\u7531\u8BBE\u7F6E\u6743\u9650 ./umirc.ts => routes\\n  {\\n      name: '\u65E5\u6E05\u65E5\u7ED3\u9A7E\u9A76\u8231',\\n      path: '/dayClearDayOver',\\n      icon: 'icon-jiashicang',\\n      component: '@/pages/dayClearDayOver',\\n      wrappers: ['@/wrappers/auth'], // \u662F\u5426\u9A8C\u8BC1\u6743\u9650\\n      access: 'routeAccess',    // \u6743\u9650code\\n      role: 'dayClearDayOver',  // \u89D2\u8272code\\n    },",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u767B\\u5F55\\u6D41\\u7A0B"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u767B\\u5F55\\u6D41\\u7A0B",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u767B\\u5F55\\u6D41\\u7A0B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u8FD9\\u4E2A\\u90FD\\u662F\\u81EA\\u5DF1\\u5199\\u7684")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "#\\n   {\\n      path: '/user',\\n      layout: false,\\n      routes: [\\n        {\\n          path: '/user/login',\\n          layout: false,\\n          name: 'login',\\n          component: './user/Login',\\n        },\\n      ],\\n    },\\n# ./src/user/login",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u53F3\\u4E0A\\u89D2\\u9000\\u51FA\\u6D41\\u7A0B"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u53F3\\u4E0A\\u89D2\\u9000\\u51FA\\u6D41\\u7A0B",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u53F3\\u4E0A\\u89D2\\u9000\\u51FA\\u6D41\\u7A0B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# ./src/app.ts\\nexport const layout = ({ initialState }) => {\\n  return {\\n    rightContentRender: () => <RightContent />,\\n    ...\\n  };\\n};\\n\\n# ./src/components/RightContent/xxx",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "umi-\\u90E8\\u7F72"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#umi-\\u90E8\\u7F72",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "umi \\u90E8\\u7F72"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# yarn build\\n\\n# .umirc.ts\\n  base: '/',\\n  hash: true,\\n\\n# \u6D4B\u8BD5\\n\u5728dist\u76EE\u5F55\u4E0B\\nnpm i serve -g\\nserve\\n\\n# \u914D\u7F6Enginx \u4EE3\u7406\\n        location / {\\n            root   html;\\n            index  index.html index.htm;\\n        }\\n\\n        location /admin-site/ {\\n          proxy_pass https://platform-test.ococmall.com;\\n        }",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "#user  nobody;\\nworker_processes  1;\\n\\n#error_log  logs/error.log;\\n#error_log  logs/error.log  notice;\\n#error_log  logs/error.log  info;\\n\\n#pid        logs/nginx.pid;\\n\\n\\nevents {\\n    worker_connections  1024;\\n}\\n\\n\\nhttp {\\n    include       mime.types;\\n    default_type  application/octet-stream;\\n\\n    #log_format  main  '$remote_addr - $remote_user [$time_local] \\"$request\\" '\\n    #                  '$status $body_bytes_sent \\"$http_referer\\" '\\n    #                  '\\"$http_user_agent\\" \\"$http_x_forwarded_for\\"';\\n\\n    #access_log  logs/access.log  main;\\n\\n    sendfile        on;\\n    #tcp_nopush     on;\\n\\n    #keepalive_timeout  0;\\n    keepalive_timeout  65;\\n\\n    #gzip  on;\\n\\n    server {\\n        listen       80;\\n        server_name  localhost;\\n\\n        #charset koi8-r;\\n\\n        #access_log  logs/host.access.log  main;\\n\\n        location / {\\n            root   html;\\n            index  index.html index.htm;\\n        }\\n\\n        location /admin-site/ {\\n          proxy_pass https://platform-test.ococmall.com;\\n        }\\n\\n        #error_page  404              /404.html;\\n\\n        # redirect server error pages to the static page /50x.html\\n        #\\n        error_page   500 502 503 504  /50x.html;\\n        location = /50x.html {\\n            root   html;\\n        }\\n\\n        # proxy the PHP scripts to Apache listening on 127.0.0.1:80\\n        #\\n        #location ~ \\\\.php$ {\\n        #    proxy_pass   http://127.0.0.1;\\n        #}\\n\\n        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000\\n        #\\n        #location ~ \\\\.php$ {\\n        #    root           html;\\n        #    fastcgi_pass   127.0.0.1:9000;\\n        #    fastcgi_index  index.php;\\n        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;\\n        #    include        fastcgi_params;\\n        #}\\n\\n        # deny access to .htaccess files, if Apache's document root\\n        # concurs with nginx's one\\n        #\\n        #location ~ /\\\\.ht {\\n        #    deny  all;\\n        #}\\n    }\\n\\n\\n    # another virtual host using mix of IP-, name-, and port-based configuration\\n    #\\n    #server {\\n    #    listen       8000;\\n    #    listen       somename:8080;\\n    #    server_name  somename  alias  another.alias;\\n\\n    #    location / {\\n    #        root   html;\\n    #        index  index.html index.htm;\\n    #    }\\n    #}\\n\\n\\n    # HTTPS server\\n    #\\n    #server {\\n    #    listen       443 ssl;\\n    #    server_name  localhost;\\n\\n    #    ssl_certificate      cert.pem;\\n    #    ssl_certificate_key  cert.key;\\n\\n    #    ssl_session_cache    shared:SSL:1m;\\n    #    ssl_session_timeout  5m;\\n\\n    #    ssl_ciphers  HIGH:!aNULL:!MD5;\\n    #    ssl_prefer_server_ciphers  on;\\n\\n    #    location / {\\n    #        root   html;\\n    #        index  index.html index.htm;\\n    #    }\\n    #}\\n\\n}",
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

//# sourceURL=webpack:///./src/Project/UmiPermission/index.md?`)}}]);
