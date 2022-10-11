(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{Nksx:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dEAq");
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dumi_theme__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("6T1g");










 // memo for page content, to avoid useless re-render since other context fields changed

const PageContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(({
  demos: DUMI_ALL_DEMOS
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "markdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    id: "ant-pro"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#ant-pro",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Ant-Pro"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u51C6\\u5907\\u9636\\u6BB5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u51C6\\u5907\\u9636\\u6BB5",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u51C6\\u5907\\u9636\\u6BB5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "yarn create umi app && tyarn add @umijs/preset-ui -D\\n\\nyarn analyze",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u9879\\u76EE\\u7ED3\\u6784"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u9879\\u76EE\\u7ED3\\u6784",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u9879\\u76EE\\u7ED3\\u6784"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "#\\n\u251C\u2500\u2500 config                   umi \u914D\u7F6E\uFF0C\u5305\u542B\u8DEF\u7531\uFF0C\u6784\u5EFA\u7B49\u914D\u7F6E\\n\u251C\u2500\u2500 mock                     \u672C\u5730\u6A21\u62DF\u6570\u636E\\n\u251C\u2500\u2500 public\\n\u2502   \u2514\u2500\u2500 favicon.png          favicon\\n\u251C\u2500\u2500 src\\n\u2502   \u251C\u2500\u2500 assets               \u672C\u5730\u9759\u6001\u8D44\u6E90\\n\u2502   \u251C\u2500\u2500 components           \u4E1A\u52A1\u901A\u7528\u7EC4\u4EF6\\n\u2502   \u251C\u2500\u2500 e2e                  \u96C6\u6210\u6D4B\u8BD5\u7528\u4F8B\\n\u2502   \u251C\u2500\u2500 layouts              \u901A\u7528\u5E03\u5C40\\n\u2502   \u251C\u2500\u2500 models               \u5168\u5C40 dva model\\n\u2502   \u251C\u2500\u2500 pages                \u4E1A\u52A1\u9875\u9762\u5165\u53E3\u548C\u5E38\u7528\u6A21\u677F\\n\u2502   \u251C\u2500\u2500 services             \u540E\u53F0\u63A5\u53E3\u670D\u52A1\\n\u2502   \u251C\u2500\u2500 utils                \u5DE5\u5177\u5E93\\n\u2502   \u251C\u2500\u2500 locales              \u56FD\u9645\u5316\u8D44\u6E90\\n\u2502   \u251C\u2500\u2500 global.less          \u5168\u5C40\u6837\u5F0F\\n\u2502   \u2514\u2500\u2500 global.ts            \u5168\u5C40 JS\\n\u251C\u2500\u2500 tests                    \u6D4B\u8BD5\u5DE5\u5177\\n\u251C\u2500\u2500 README.md\\n\u2514\u2500\u2500 package.json",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u57FA\\u672C\\u914D\\u7F6E"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u57FA\\u672C\\u914D\\u7F6E",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u57FA\\u672C\\u914D\\u7F6E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u6807\u9898\u548C logo\\n./config/defaultSettings.ts",
    lang: "JS"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u9274\\u6743\\u6D41\\u7A0B"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u9274\\u6743\\u6D41\\u7A0B",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u9274\\u6743\\u6D41\\u7A0B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "1. src/app.ts \u4E2D\u5BFC\u51FA getInitialState \u65B9\u6CD5\\n   \u8FD9\u4E2A\u65B9\u6CD5\u7F51\u7EDC\u8BF7\u6C42 \u767B\u5F55\u7684\u7528\u6237\u4FE1\u606F\\n2. src/auth\\nimport {useModel,Redirect} from 'umi'\\nexport default (props) => {\\n  const {\\n    initalState,\\n    loading,\\n    error,\\n    refresh,\\n    setInitalState,\\n\\n  } = useModel('@@initialState')\\n  if (initialState) {\\n    return <div>{props.children}</div>;\\n    } else {\\n    return <Redirect to=\\"/user/login\\" />;\\n  }\\n}\\n3. \u6743\u9650\\n@umijs/pulgin-access\\n\u8DEF\u7531\\n wrappers: ['@/wrappers/auth'],\\n access: 'routeAccess',\\n role: 'backStageMaintain_message',\\n\u6309\u94AE\\nimport {useAccess,Access} form 'umi'\\nconst access = useAccess();\\n<Access\\n  accessible={ access.moduleAccess('\u6309\u94AE\u6743\u9650\u540D') }\\n/>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u6743\\u9650\\u63A7\\u5236"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u6743\\u9650\\u63A7\\u5236",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u6743\\u9650\\u63A7\\u5236"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u9875\\u9762\\u52A0\\u8F7D\\u987A\\u5E8F"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u9875\\u9762\\u52A0\\u8F7D\\u987A\\u5E8F",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u9875\\u9762\\u52A0\\u8F7D\\u987A\\u5E8F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "./src/access.js\\n./src/wrappers/auth.js\\n\u6839\u8DEF\u5F84\u7684\u9875\u9762\\n./src/wrappers/auth.js\\n\u6309\u94AE\u6743\u9650\\n//\u91CD\u5B9A\u5411 \u5224\u65AD\u662F\u5426\u767B\u5F55 \u672A\u767B\u5F55\u5C31\u8DF3\u8F6C\u5230login \u5426\u5219\u8DF3\u56DE/\\n./src/root.jsx",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u8DEF\\u7531\\u5BFC\\u822A\\u5B88\\u536B\\u63A7\\u5236\\u662F\\u5426\\u767B\\u5F55"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u8DEF\\u7531\\u5BFC\\u822A\\u5B88\\u536B\\u63A7\\u5236\\u662F\\u5426\\u767B\\u5F55",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u8DEF\\u7531\\u5BFC\\u822A\\u5B88\\u536B\\u63A7\\u5236\\u662F\\u5426\\u767B\\u5F55"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# umirc.ts \u8DEF\u7531\u89C4\u5219\u52A0\u4E0A\u8FD9\u4E2A\\n wrappers: ['@/wrappers/auth'],\\n# ./src/wrappers/auth  \u8DEF\u7531\u5BFC\u822A\u5B88\u536B\\nimport { useModel, Redirect } from 'umi';\\nexport default (props) => {\\n  const { initialState } = useModel('@@initialState');\\n  if (initialState) {\\n    return <div>{props.children}</div>;\\n  } else {\\n    return <Redirect to=\\"/user/login\\" />;\\n  }\\n};",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u8DEF\\u7531\\u6743\\u9650"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u8DEF\\u7531\\u6743\\u9650",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u8DEF\\u7531\\u6743\\u9650"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u8DEF\u7531\u5143\u4FE1\u606F\\n wrappers: ['@/wrappers/auth'],\\n access: 'routeAccess',\\n role: 'backStageMaintain_message',\\n# ./src/access.js \u9875\u9762\u5148\u8FDB\u5165\u8FD9\u91CC\\nexport default function (initialState) {\\n  const menu = initialState?.menu?.split(',') ?? [];\\n  const parentMenu = initialState?.parentMenu?.split(',') ?? [];\\n  const authList = [...parentMenu, ...menu];\\n  return {\\n    // \u83DC\u5355\u6743\u9650\\n    routeAccess: (route) => {\\n      return authList.includes(route.role);\\n    },\\n    // \u6309\u94AE\u6743\u9650\\n    moduleAccess: (foo) => {\\n      return authList.includes(foo);\\n    },\\n  };\\n}",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u6309\\u94AE\\u6743\\u9650"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u6309\\u94AE\\u6743\\u9650",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u6309\\u94AE\\u6743\\u9650"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "\u5728\u767B\u5F55\u6210\u529F\u540E\\n\u7F51\u7EDC\u8BF7\u6C42\u7528\u6237\u6743\u9650\u6570\u636E\\nmixin \u6DF7\u5165\u65B9\u6CD5\u8FDB\u884C\u5224\u65AD\\n\\nimport {useAccess,Access} form 'umi'\\nconst access = useAccess();\\n<Access\\n  accessible={ access.moduleAccess('\u6309\u94AE\u6743\u9650\u540D') }\\n/>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u89D2\\u8272\\u6743\\u9650"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u89D2\\u8272\\u6743\\u9650",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u89D2\\u8272\\u6743\\u9650"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "\u63A5\u53E3;",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "api-\\u6743\\u9650\\u63A7\\u5236"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#api-\\u6743\\u9650\\u63A7\\u5236",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "API \\u6743\\u9650\\u63A7\\u5236"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "\u5728\u8BF7\u6C42\u62E6\u622A\u5668\u4E2D\u5904\u7406 axios\u547D\u4EE4",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u7EC4\\u4EF6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u7EC4\\u4EF6",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u7EC4\\u4EF6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u4E0B\\u8F7D"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u4E0B\\u8F7D",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u4E0B\\u8F7D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "npm i @ant-design/pro-form --save\\nnpm i @ant-design/pro-layout --save\\nnpm i @ant-design/pro-table --save",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u9762\\u5305\\u5C51\\u5BFC\\u822A\\u53CA\\u6C34\\u5370"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u9762\\u5305\\u5C51\\u5BFC\\u822A\\u53CA\\u6C34\\u5370",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u9762\\u5305\\u5C51\\u5BFC\\u822A\\u53CA\\u6C34\\u5370"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "import { PageContainer,WaterMark } from '@ant-design/pro-layout';\\nimport { useModel } from 'umi';\\nconst { initialState } = useModel('@@initialState');\\n\\n<WaterMark\\n content={initialState?.name + '(' + initialState?.userName + ')'}\\n>\\n<PageContainer\\n  className={styles.authority}\\n  loading={}\\n  extra={ReactNode}\\n>\\n</PageContainer>\\n</WaterMark>\\n# app.js\\nexport const layout = () => {\\n  return {\\n    itemRender: (route, _params, routes, _paths) => {\\n      const last =\\n        routes[0].path === route.path ||\\n        routes[routes.length - 1].path === route.path;\\n      return last ? (\\n        <span>{route.breadcrumbName}</span>\\n      ) : (\\n        <Link to={route.path}>{route.breadcrumbName}</Link>\\n      );\\n    },\\n  };\\n};\\n#",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u5C55\\u5F00\\u8868\\u5355"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u5C55\\u5F00\\u8868\\u5355",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u5C55\\u5F00\\u8868\\u5355"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u7B5B\\u9009-table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u7B5B\\u9009-table",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u7B5B\\u9009 table"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<QueryFilter\\n  onFinish={async values => {\\n    console.log(values.name);\\n  }}\\n>\\n  <ProFormText name=\\"name\\" label=\\"\u5E94\u7528\u540D\u79F0\\" rules={[{ required: true }]} />\\n  <ProFormText name=\\"creater\\" label=\\"\u521B\u5EFA\u4EBA\\" />\\n  <ProFormSelect\\n    name=\\"sex\\"\\n    label=\\"\u6027\u522B\\"\\n    showSearch\\n    valueEnum={{\\n      man: '\u7537',\\n      woman: '\u5973',\\n    }}\\n  />\\n</QueryFilter>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u6A21\\u6001\\u6846"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u6A21\\u6001\\u6846",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u6A21\\u6001\\u6846"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "import ProForm, { ModalForm } from '@ant-design/pro-form';\\n\\n <ModalForm\\n// \u6A21\u6001\u6846\u6807\u9898\\n \\ttitle=\\"\u65B0\u5EFA\u8868\u5355\\"\\n  width={200}\\n// \u63D0\u4EA4\u8868\u5355\u81EA\u52A8\u91CD\u7F6E\\n  destroyOnClose\\n// \u81EA\u52A8\u9009\u4E2D\u7B2C\u4E00\u9879\u8868\u5355\\n  autoFocusFirstInput\\n\\n// \u6A21\u6001\u6846\u5916\u8868\u7684dom\\n\\ttrigger={ReactNode}\\n\\n// \u5176\u4ED6\u914D\u7F6E,\u4E0D\u652F\u6301visible\\n  modalProps={{\\n  \\tonCancel: ()=>xxx\\n  }}\\n// \u63D0\u4EA4\u6309\u94AE\u7684\u76F8\u5173\u914D\u7F6E\\n  submitter={{\\n     onSubmit:\\n     onReset:\\n     searchConfig:{}\\n     submitButtonProps:{}\\n     resetButtonProps:{}\\n     render:{}\\n  }}\\n// \u63D0\u4EA4\u8868\u5355\u65F6\u89E6\u53D1 \u8FD4\u56DEtrue\u4F1A\u5173\u95ED\u62BD\u5C49\\n  onFinish={boolean}\\n>\\n\\n</ModalForm>",
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

//# sourceURL=webpack:///./src/Article/9.react/antdPro/index.md?`)}}]);
