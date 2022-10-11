(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{FxTl:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
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
    id: "umi4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#umi4",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "umi4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "pnpm dlx create-umi@latest",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "alias"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#alias",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "alias"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "alias: {\\n    src: path.resolve(__dirname, '.', './src/'),\\n    Components: path.resolve(__dirname, '.', 'src/Components/'),\\n    MyComponents: path.resolve(__dirname, '.', 'src/MyComponents/'),\\n    style: path.resolve(__dirname, '.', 'src/style/'),\\n  },\\n\\n    from 'src'",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "umi-api"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#umi-api",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "UMI-API"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "history"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#history",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "history"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "import { history } from 'umi';\\n\\n#\\nhistory.location.pathname;\\nhistory.location.search;\\nhistory.location.hash;\\n#\\nhistory.push('/list');\\nhistory.push('/list?a=b&c=d#anchor');\\nhistory.push({\\n  pathname: '/list',\\n  search: '?a=b&c=d',\\n  hash: 'anchor',\\n});\\nhistory.back();\\nhistory.go(-1);\\n# \u76D1\u542C\u8DEF\u7531\\nconst unlisten = history.listen(({ location, action }) => {\\n  console.log(location.pathname);\\n});\\nunlisten();",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#link",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Link"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<Link\\n  // string | {pathname:'',search:'',hash:''}\\n  to={}\\n  // \u76F8\u5F53\u4E8Ea\u94FE\u63A5\\n  reloadDocument={boolean}\\n  state={boolean}\\n  replace={boolean}\\n  // \u9884\u52A0\u8F7D\u76F8\u5173\u6587\u4EF6\\n  prefetch={boolean}\\n/>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "navlink"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#navlink",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "NavLink"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "\u6FC0\u6D3B\u7684Link;",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "umircts"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#umircts",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), ".umirc.ts"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "import { defineConfig } from '@umijs/max';\\nexport default defineConfig({\\n\\n# \u529F\u80FD\u6027\u914D\u7F6E\\n// \u53EF\u4EE5\u8DF3\u8F6C\u5230\u6E90\u7801 option+click\\n  clickToComponent: {},\\n/* \u8DEF\u7531\u9884\u52A0\u8F7D\u6570\u636E \u89E3\u51B3\u7011\u5E03\u6D41\u95EE\u9898\\nimport { useClientLoaderData } from 'umi';\\nconst data = useClientLoaderData();\\n*/\\n  clientLoader: {},\\n// \u7ED9\u8DE8\u57DF\u63D0\u4F9B\u5B8C\u6574\u62A5\u9519\u4FE1\u606F script\u52A0\u4E0A crossorigin=\\"anonymous\\"\\n  crossorigin: {}\\n// css\u538B\u7F29\u5DE5\u5177 esbuild, cssnano, parcelCSS, none \u4E0D\u538B\u7F29\\n  cssMinifier: 'esbuild'\\n// css\u538B\u7F29\u76F8\u5173\u914D\u7F6E\\n  cssMinifierOptions: {\\n    minifyWhitespace: true,\\n    minifySyntax: true,\\n  },\\n// \u5C06CSS\u53D8\u6210\u9A7C\u5CF0\\n   cssLoaderModules: {\\n     exportLocalsConvention: 'camelCase'\\n   }\\n// \u7EA6\u5B9A\u5F0F\u8DEF\u7531\u6392\u9664\u7684\u6587\u4EF6\u5939\\n  conventionRoutes: {\\n    exclude: [/\\\\/components\\\\//, /\\\\/models\\\\//],\\n  },\\n// \u590D\u5236\u5230dist\u76EE\u5F55 \u5C06./src/form\u4E0B\u9762\u6240\u6709\u4E1C\u897F\u590D\u5236\u5230dist/output\u4E0B\\n  copy: [\\n    { from: 'from', to: 'dist/output' },\\n    { from: 'file.json', to: 'dist' }\\n  ]\\n// \u9ED8\u8BA4\u4F1A\u79FB\u9664\u6CE8\u91CA\\n  jsMinifierOptions: {\\n    minifyWhitespace: true,\\n    minifyIdentifiers: true,\\n    minifySyntax: true,\\n  }\\n\\n# \u5E38\u7528\u914D\u7F6E\\n  base: '/',\\n// \u5B9A\u4E49\u5168\u5C40\u53D8\u91CF console(foo) => console('bar')\\n  define: {\\n    foo: 'bar'\\n  },\\n  favicons: ['/assets/favicon.ico'],\\n// \u5F00\u542Fts\u68C0\u67E5\\n  forkTSChecker: { },\\n// \u89E3\u51B3build\u540E\u6D4F\u89C8\u5668\u7F13\u5B58\u95EE\u9898\\n  hash: false,\\n// \u5FFD\u7565Moment\u56FD\u9645\u5316\\n  ignoreMomentLocale: false,\\n// mfsu\\n  mfsu: true,\\n  mock: {},\\n  history: 'browser' | 'hash' | 'momory',\\n// <head> \u4E2D\u989D\u5916\u914D\u7F6E\\n  headScripts: [\\n    { src: '/foo.js', defer: true },\\n    { content: \`alert('\u4F60\u597D');\`, charset: 'utf-8' },\\n  ],\\n  links: [{ href: './xxx',rel:'preload' }],\\n  metas: [ {name:'', content:''}],\\n  proxy: {\\n    ...\\n  },\\n  publicPath: '/',\\n  theme: { '@primary-color': '#1DA57A' },\\n  routes: [],\\n\\n// \u662F\u5426\u6709 sourcemap  eval\u6700\u5FEB source-map\u6700\u6162\\n  devtool: process.env.NODE_ENV === 'development' ? 'eval' : false,\\n  externals:{\\n    react: 'React',\\n  },\\n  scripts: ['...']\\n\\n\\n# \u5176\u4ED6\u63D2\u4EF6\\n// \u4FEE\u6539webpack\u914D\u7F6E\\n  chainWebpack(memoo,{env,webpack}){ }\\n// \u5904\u7406Babel\u7684npm\u5305\\n  extraBabelIncludes: [\\n     join(__dirname, '../../common'),\\n    'react-monaco-editor',\\n  ],\\n// \u914D\u7F6E\u989D\u5916\u7684babel\u63D2\u4EF6\\n   extraBabelPlugins: [ xxx,()=>xxx ]\\n// \u914D\u7F6E postCSS \u989D\u5916\u914D\u7F6E\\n   extraPostCSSPlugins: [ ]\\n//\\n  autoprefixer:{ flexbox:'no-2009' }\\n});",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u76EE\\u5F55\\u7ED3\\u6784"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u76EE\\u5F55\\u7ED3\\u6784",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u76EE\\u5F55\\u7ED3\\u6784"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// \u4FEE\u6539\u8DEF\u7531 \u9519\u8BEF\u5904\u7406 loading dva \u62E6\u622A\u5668\\n./src/app.ts\\n// \u7EA6\u5B9A\u7684\u9996\u9875\u4F4D\u7F6E /\\n./src/layouts/index.tsx\\n// 404 \u8C03\u8BD5\u65F6: /404\\n./src/404.js\\n// \u5168\u5C40\u6837\u5F0F\\n./src/global.less\\n// \u61D2\u52A0\u8F7D\u4E2D\u7684 loading\\n./src/loading.tsx\\n@ant-design/pro-layout/es/PageLoading\\n// \u6743\u9650\u6821\u9A8C\\n./src/wrapperes/auth.tsx",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u8DEF\\u7531"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u8DEF\\u7531",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u8DEF\\u7531"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "routes: [\\n  {\\n    path: '/',\\n    title: '',\\n    component: 'index',\\n    redirect: '/list',\\n    wrappers: ['@/wrappers/auth'],\\n    // \u6743\u9650\u914D\u7F6E\uFF0C\u9700\u8981\u4E0E plugin-access \u63D2\u4EF6\u914D\u5408\u4F7F\u7528\\n    access: 'canRead',\\n    routes: [\\n\\n    ],\\n    // \u6CA1\u6709\u5C31\u4E0D\u663E\u793A\u8BE5\u83DC\u5355\\n    name: '\u6B22\u8FCE',\\n    icon: 'testicon',\\n    target: '_blank',\\n    // \u4E0D\u5C55\u793A\u9876\u680F\\n    headerRender: false,\\n    // \u4E0D\u5C55\u793A\u9875\u811A\\n    footerRender: false,\\n    // \u4E0D\u5C55\u793A\u83DC\u5355\\n    menuRender: false,\\n    // \u4E0D\u5C55\u793A\u83DC\u5355\u9876\u680F\\n    menuHeaderRender: false,\\n    // \u9690\u85CF\u5B50\u83DC\u5355\\n    hideChildrenInMenu: true,\\n    // \u9690\u85CF\u81EA\u5DF1\u548C\u5B50\u83DC\u5355\\n    hideInMenu: true,\\n    // \u5728\u9762\u5305\u5C51\u4E2D\u9690\u85CF\\n    hideInBreadcrumb: true,\\n    // \u5B50\u9879\u5F80\u4E0A\u63D0\uFF0C\u4ECD\u65E7\u5C55\u793A,\\n    flatMenu: true,\\n  }\\n]\\n# \u83B7\u53D6\u8DEF\u7531\u53C2\u6570\\n// params pathname\\nconst match = useMatch('/comp/:id')\\n// pathname search hash state\\nconst location  = useLocation();\\n// \u52A8\u6001\u8DEF\u7531\\nconst params  = useParams();\\n// query => /comp?a=b;\\nconst [searchParams, setSearchParams] = useSearchParams();\\nsearchParams.get('a')  // b\\nsearchParams.toString()  // a=b",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u73AF\\u5883\\u53D8\\u91CF"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u73AF\\u5883\\u53D8\\u91CF",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u73AF\\u5883\\u53D8\\u91CF"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# ./env\\n// \u6307\u5B9A\u7AEF\u53E3\\nPORT=3000\\n// \u53D6\u6D88babel\u7F13\u5B58\\nBABEL_CACHE=none\\n# cross-env \u8DE8\u64CD\u4F5C\u7CFB\u7EDF\u64CD\u4F5C\u73AF\u5883\u53D8\u91CF\\n\\ncross-env PORT=3000 umi dev\\n\\n\\ncross-env UMI_ENV=production umi build\\n\\n.umirc.production.js\\nexport default {\\n  define: {\\n    baseURl: 'ws://172.20.0.87:8099',\\n  },\\n};\\n.umirc.ts\\n  define: {\\n    baseURl: 'ws://121.199.6.173:30261',\\n  },",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "layout"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#layout",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "layout"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# ./umirc.ts\\n  layout: {\\n    title: 'Ant Design',\\n    // \u9ED8\u8BA4\u5F00\u542F\uFF0C\u5982\u65E0\u9700\u83DC\u5355\u56FD\u9645\u5316\u53EF\u5173\u95ED\\n    locale: false,\\n    logo:\\"\\",\\n    // \u9000\u51FA\u767B\u5F55\u7684\u903B\u8F91\\n    logout:(initialState: any) => void,\\n    // \u5C55\u793A\u7528\u6237\u540D\u3001\u5934\u50CF\u3001\u9000\u51FA\u767B\u5F55\u76F8\u5173\u7EC4\u4EF6\\n    rightRender: (initialState: any) => React.ReactNode\\n    pageTitleRender: false,\\n    contentWidth: 'Fluid',\\n    navTheme: 'light',\\n  },",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# ./src/app.tsx\\nhttps://umijs.org/docs/max/layout-menu\\nimport { currentUser as queryCurrentUser } from './services/global';\\nimport { PageLoading } from '@ant-design/pro-layout';\\nimport { history, useModel } from 'umi';\\nimport requestInterceptors from '@/utils/request';\\nimport RightContent from '@/components/RightContent';\\nimport { Link } from 'umi';\\n\\nconst whitelist = ['/user/login'];\\nconst loginPath = '/user/login';\\n\\n// dva errorCatch\\nexport const dva = {\\n  config: {\\n    onError(err) {\\n      err.preventDefault();\\n    },\\n  },\\n};\\n\\n/** \u83B7\u53D6\u7528\u6237\u4FE1\u606F\u6BD4\u8F83\u6162\u7684\u65F6\u5019\u4F1A\u5C55\u793A\u4E00\u4E2A loading */\\n\\nexport const initialStateConfig = {\\n  loading: <PageLoading />,\\n};\\n\\nexport const getInitialState = async () => {\\n  const fetchUserInfo = async () => {\\n    try {\\n      const user = await queryCurrentUser();\\n      return user.data;\\n    } catch (error) {\\n      console.error('\u91CD\u65B0\u767B\u9646');\\n    }\\n    return undefined;\\n  }; // \u5982\u679C\u662F\u767B\u5F55\u9875\u9762\uFF0C\u4E0D\u6267\u884C\\n  // \u5982\u679C\u662F\u767B\u5F55\u9875\u9762\uFF0C\u4E0D\u6267\u884C\\n  const currentUser = await fetchUserInfo();\\n  return {\\n    fetchUserInfo,\\n    currentUser,\\n    settings: {},\\n  };\\n};\\n\\n// umi-request error\u5904\u7406\\nexport const request = {\\n  requestInterceptors: [requestInterceptors],\\n  credentials: 'include', // \u628A\u8FD9\u884C\u52A0\u4E0A\uFF0C\u8BF7\u6C42\u4F1A\u81EA\u52A8\u5E26\u4E0Acookie\u7B49\u6570\u636E\\n  errorConfig: {\\n    adaptor: (resData, { res }) => {\\n      return {\\n        ...resData,\\n        showType:\\n          res.status === 403 || res.status === 405 || res.status === 401\\n            ? 9\\n            : 2,\\n        success: resData.code === 200,\\n        errorMessage: resData.msg || resData.message,\\n      };\\n    },\\n    errorPage: '/user/login',\\n  },\\n};\\n\\nexport const layout = ({ initialState }) => {\\n  return {\\n    disableContentMargin: false,\\n    iconfontUrl: '/fonticon/iconfont.js',\\n    logout: () => {}, // do something\\n    rightContentRender: () => <RightContent />,\\n    itemRender: (route, _params, routes, _paths) => {\\n      return <Link to={route.path}>{route.breadcrumbName}</Link>;\\n    },\\n    waterMarkProps: {\\n      content: initialState?.currentUser?.name,\\n    },\\n    onPageChange: () => {\\n      const { location } = history; // \u5982\u679C\u6CA1\u6709\u767B\u5F55\uFF0C\u91CD\u5B9A\u5411\u5230 login\\n      if (\\n        !initialState?.state?.code === 200 &&\\n        location.pathname !== loginPath\\n      ) {\\n        history.push(loginPath);\\n      }\\n    },\\n    menuHeaderRender: undefined,\\n    ...initialState?.settings,\\n  };\\n};",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u6743\\u9650\\u6D41\\u7A0B"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u6743\\u9650\\u6D41\\u7A0B",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u6743\\u9650\\u6D41\\u7A0B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u521D\u59CB\u5316\u6570\u636E \u5728 ./src/app.ts\u4E2D\u5BFC\u51FA getInitialState \u65B9\u6CD5\\nexport const getInitialState = async () => {\\n  const fetchUserInfo = async () => {\\n    try {\\n      const user = await queryCurrentUser();\\n      return user.data;\\n    } catch (error) {\\n      console.error('\u91CD\u65B0\u767B\u9646');\\n    }\\n    return undefined;\\n  }; // \u5982\u679C\u662F\u767B\u5F55\u9875\u9762\uFF0C\u4E0D\u6267\u884C\\n  // \u5982\u679C\u662F\u767B\u5F55\u9875\u9762\uFF0C\u4E0D\u6267\u884C\\n  const currentUser = await fetchUserInfo();\\n  return {\\n    fetchUserInfo,\\n    currentUser,\\n    settings: {},\\n  };\\n};\\n\\n# src/access.ts\\nexport default function (initialState) {\\n  const menu = initialState?.menu?.split(',') ?? [];\\n  const parentMenu = initialState?.parentMenu?.split(',') ?? [];\\n  const authList = [...parentMenu, ...menu];\\n  return {\\n    // \u83DC\u5355\u6743\u9650\\n    routeAccess: (route) => {\\n      return authList.includes(route.role);\\n    },\\n    // \u6309\u94AE\u6743\u9650\\n    moduleAccess: (foo) => {\\n      return authList.includes(foo);\\n    },\\n  };\\n}\\n\\n  {\\n    path: '/pageA',\\n    component: 'PageA',\\n    access: 'canReadPageA', // \u6743\u9650\u5B9A\u4E49\u8FD4\u56DE\u503C\u7684\u67D0\u4E2A key\\n  },\\n\\n\\n# usemodel \u4F7F\u7528\u521D\u59CB\u5316\u6570\u636E\\nimport { useModel } from 'umi';\\n  const {\\n    initialState, // \u5728app.ts export getInitialState\\n    loading,\\n    error,\\n    refresh,\\n    setInitialState\\n  } =\\n    useModel('@@initialState');\\n// \u4F7F\u7528\u522B\u7684\u547D\u540D\u7A7A\u95F4\u7684\u6570\u636E\\nuseModel('xxx',()=>{\\n  \u66F4\u65B0\\n})\\n\\n# useAccess \u6309\u94AE\u6743\u9650\u63A7\u5236\\nimport { useAccess } from 'umi';\\nconst access = useAccess();\\nif (access.canReadFoo) {\\n   // \u5982\u679C\u53EF\u4EE5\u8BFB\u53D6 Foo\uFF0C\u5219...\\n}\\n\\n# wrapper \u8DEF\u7531\u6743\u9650\u6821\u9A8C\\n\\nimport { useModel, Redirect, Outlet } from 'umi';\\nexport default (props) => {\\n  const { initialState } = useModel('@@initialState');\\n  if (initialState) {\\n    return <Outlet />;\\n  } else {\\n    return <Redirect to=\\"/user/login\\" />;\\n  }\\n};",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u62E6\\u622A\\u5668"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u62E6\\u622A\\u5668",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u62E6\\u622A\\u5668"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "src / app.ts;\\nimport type { RequestConfig } from 'umi';\\nexport const request: RequestConfig = {\\n  timeout: 1000,\\n  // other axios options you want\\n  errorConfig: {\\n    errorHandler() {},\\n    errorThrower() {},\\n  },\\n  requestInterceptors: [],\\n  responseInterceptors: [],\\n};",
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
    id: "react-\\u591A\\u9875\\u7B7E"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#react-\\u591A\\u9875\\u7B7E",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "react \\u591A\\u9875\\u7B7E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "#\\nhttps://github.com/fangzhengjin/umi-plugin-panel-tabs\\nhttps://github.com/MudOnTire/antd-pro-page-tabs\\nnpm i umi-plugin-panel-tabs\\n#\\n  panelTab: {\\n    use404: true,\\n    useAuth: true,\\n    autoI18n: true,\\n    // \u6253\u5F00\u591A\u5C11\u9875\u7B7E\u65F6\u5F39\u51FA\u63D0\u793A\\n    tabsLimit: 10,\\n    // \u9632\u6296\u65F6\u95F4\\n    tabsLimitWait: 500,\\n    tabsLimitWarnTitle: '\u63D0\u793A',\\n    tabsLimitWarnContent: '\u60A8\u5F53\u524D\u6253\u5F00\u9875\u9762\u8FC7\u591A, \u8BF7\u5173\u95ED\u4E0D\u4F7F\u7528\u7684\u9875\u9762\u4EE5\u51CF\u5C11\u5361\u987F!',\\n    tabsBarBackgroundColor: '#FFFFFF',\\n    tabsTagColor: '#1890ff',\\n  },\\n#\\n \u5F53route\u5177\u6709name\u5C31\u4F1A\u663E\u793A\u9875\u7B7E\\n \u6DFB\u52A0hideInPanelTab:true \u5C31\u9690\u85CF\u9875\u7B7E",
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

//# sourceURL=webpack:///./src/Article/9.react/umi4/index.md?`)}}]);
