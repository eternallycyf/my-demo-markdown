(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{VxgI:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
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
    id: "ant-design"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#ant-design",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Ant Design"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u51C6\\u5907\\u9636\\u6BB5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u51C6\\u5907\\u9636\\u6BB5",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u51C6\\u5907\\u9636\\u6BB5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "bug"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#bug",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "bug"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# form\\n\u5F53\u4E0Emodal\u7ED3\u5408\u7684\u65F6\u5019 initValus\u6570\u636E\u4F1A\u5F02\u6B65\\n\u9700\u8981\u4F7F\u7528form.setValues \u8BBE\u7F6E\u6570\u636E",
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
    id: "\\u901A\\u7528"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u901A\\u7528",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u901A\\u7528"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#button",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "button"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<Button\\n    # \u57FA\u7840\u5C5E\u6027\\n    // \u6837\u5F0F\\n    type={'default |primary | dashed | text | link'}\\n    // \u5F62\u72B6\\n    shape={'default|circle|round'}\\n    // \u5927\u5C0F\\n    size={'large|middle|small'}\\n    // \u7279\u6B8A\u6837\u5F0F\\n    ghost    \u6309\u94AE\u80CC\u666F\u900F\u660E\\n    danger   \u7EA2\u8272\u5916\u89C2\\n    disabled \u7981\u7528\u6548\u679C\\n    block    \u5BBD\u5EA6\u4E3A\u7236\u5BBD\u5EA6\\n    // \u8BBE\u7F6E\u56FE\u6807\\n    icon={<xxx/>}\\n\\n    # \u5176\u4ED6\u5C5E\u6027\\n    // loading \u6548\u679C\u63A7\u5236\\n    loading={boolean}\\n  />\\n\\n # \u7EC4\u5408\u6309\u94AE\\n// \u70B9\u51FB\u5C31\u5F39\u51FA\u4E00\u4E2A\u7EC4\u4EF6\\n<Dropdown.Button overlay={\u7EC4\u4EF6\u540D} />\\n # bug  \u79FB\u9664\u6309\u94AE\u6587\u4EF6\u4E4B\u95F4\u7684\u7A7A\u683C\\nimport { Button, ConfigProvider } from 'antd';\\n <ConfigProvider autoInsertSpaceInButton = { false }>\\n       <Button type=\\"primary\\">\\n              \u7A7A\u683C\\n      </Button>\\n</ConfigProvider>",
    lang: "unknown"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#icon",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "icon"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u9ED8\u8BA4\u56FE\u6807\\nimport { xxx } from '@ant-design/icons';\\n# \u81EA\u5B9A\u4E49\u56FE\u6807\\nimport Icon from '@ant-design/icons';\\n<Icon component={xxx} />\\n# \u4F7F\u7528 iconfont\\nimport { createFromIconfontCN } from '@ant-design/icons';\\nconst IconFont = createFromIconfontCN({\\n  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',\\n});\\n<IconFont type=\\"icon-tuichu\\" />\\n# \u4E09\u7C7B\u56FE\u6807\u540D\u5B57\u533A\u522B\\nxxxOutlined\\nFuiled\\nTwoTone\\n\\n# spin                    \u65CB\u8F6C\u52A8\u753B\\n# rotate={180}            \u65CB\u8F6C\u89D2\u5EA6\\n# twoToneColor=\\"#eb2f96\\"  \u53CC\u8272\u56FE\u6807\u8BBE\u7F6E\u989C\u8272",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "\\u6392\\u7248"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u6392\\u7248",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u6392\\u7248"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u5E03\\u5C40"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u5E03\\u5C40",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u5E03\\u5C40"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "\\u5206\\u5272\\u7EBF"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u5206\\u5272\\u7EBF",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u5206\\u5272\\u7EBF"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<Divider >\\n   // \u662F\u5426\u865A\u7EBF\\n   dashed\\n   // \u6587\u5B57\u662F\u5426\u4E3A\u666E\u901A\u6B63\u6587\u6837\u5F0F\\n   plain\\n   // \u5206\u5272\u7EBF\u4F4D\u7F6E\\n   orientation={'left|right'}\\n   type={'horizontal|vertical'}\\n/>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#grid",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Grid"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# row\\n<Row\\n  // \u95F4\u9694\\n  gutter={16}\\n  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}\\n  gutter={[16, 24]}   \u6C34\u5E73\u95F4\u8DDD \u5782\u76F4\u95F4\u8DDD\\n  // flex\u5E03\u5C40\\n  justify='start|center|spacce-between....'\\n  // \u5B50\u5143\u7D20\u5BF9\u9F50\u65B9\u5F0F\\n  align='top|middle|bottom'\\n  // \u6362\u884C\\n  wrap={false}\\n\\n/>\\n# col\\n<Col\\n  // \u5212\u5206\u5757\u6570 \u517124\u4EFD\\n  span={6}\\n  // \u5DE6\u53F3\u504F\u79FB \u5411\u53F3\u504F\u79FB6\\n  offset={6}\\n  // \u5411\u5DE6\\n  pull={18}\\n  // \u5411\u53F3\\n  push={2}\\n/>\\n<Row>\\n\\n# \u624B\u52A8\u6307\u5B9A\u6805\u683C\u5BBD\u5EA6\\n\u9ED8\u8BA4\u4E00\u683C\u4E3A 8.33333%\\n\\nstyle=\\"width: 12.499999995%;\\n    flex: 0 0 12.499%;max-width: 12.499%;\\">",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "layout"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#layout",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Layout"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "import { Layout } from 'antd';\\nconst { Header, Footer, Sider, Content } = Layout;\\n\\n<Layout>\\n  <Header>Header</Header>\\n  <Content>Content</Content>\\n  <Footer>Footer</Footer>\\n  <Layout>\\n    <Sider>Sider</Sider>\\n    <Content>Content</Content>\\n  </Layout>\\n</Layout>;",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "space"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#space",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Space"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// \u8BBE\u7F6E\u7EC4\u4EF6\u4E4B\u95F4\u7684\u95F4\u8DDD\\n<Space\\n  size=\\"small|middle|large|number\\"\\n  // \u81EA\u5B9A\u4E49\u95F4\u8DDD\u5927\u5C0F\\n  size={[8, 16]}\\n  align=\\"start|end|center|baseline\\"\\n  direction=\\"vertical|horizontal\\"\\n  wrap\\n  // \u76F8\u90BB\u7EC4\u4EF6\u5206\u9694\u7B26\\n  split={<Divider type=\\"vertical\\" />}\\n/>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u5BFC\\u822A"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u5BFC\\u822A",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u5BFC\\u822A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "affix-\\u56FA\\u9489"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#affix-\\u56FA\\u9489",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Affix \\u56FA\\u9489"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<Affix\\n  // \u7C98\u6027\u5B9A\u4F4D\\n  offsetTop={10}\\n  offsetBottom={10}\\n  // \u6EDA\u52A8\u5143\u7D20\u5BF9\u8C61\\n  target={() => dom}\\n  onChange\\n/>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "breadcrumb"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#breadcrumb",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Breadcrumb"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<Breadcrumb\\n  // \u603B\u4F53\u81EA\u5B9A\u4E49\u5206\u9694\u7B26\\n  separator=\\">\\"\\n>\\n  <Breadcrumb.Item>\\n    <a href=\\"\\">Application Center</a>\\n  </Breadcrumb.Item>\\n  // \u5B50\u9879 \u81EA\u5B9A\u4E49\u5206\u9694\u7B26\\n  <Breadcrumb.Separator>:</Breadcrumb.Separator>\\n</Breadcrumb>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "dropdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#dropdown",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Dropdown"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<Dropdown\\n  overlay={\u5C01\u88C5\u7684Menu\u7EC4\u4EF6}\\n  // \u5F39\u6846\u663E\u793A\u4E00\u4E2A\u7BAD\u5934\\n  arrow\\n  // \u83DC\u5355\u5F39\u51FA\u4F4D\u7F6E\\n  placement=\\"bottomLeft\\"\\n  // \u89E6\u53D1\u65B9\u5F0F contextMenu \u9F20\u6807\u53F3\u952E\u89E6\u53D1\\n  trigger={['click' | 'hover|contextMenu']}\\n>\\n  <Button>\u8FD9\u662F\u6309\u94AE</Button>\\n</Dropdown>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#menu",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Menu"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// SubMenu \u5BF9 menuitem \u8FDB\u884C\u5206\u7EC4\\n<Menu\\n   mode='horizontal|vertical|inline'\\n   theme=\\"dark|light\\"\\n   // \u63A7\u5236\u6574\u4F53\u5C55\u5F00 \u8FD8\u662F \u53EA\u663E\u793A\u4E00\u4E2A\u56FE\u6807\\n   inlineCollapsed={true | false}\\n   inlineIndent={number} \u7F29\u8FDB\u7684\u5BBD\u5EA6\\n   // \u9ED8\u8BA4\u5C55\u5F00\u9879 \u9009\u4E2D\u9879\\n   defaultSelectedKeys={['MenuItemKeys']}\\n   defaultOpenKeys={['SubMenuKeys']}\\n   // \u5F53\u524D\u5C55\u5F00\u7684 SubMenu \u83DC\u5355 keys \u6570\u7EC4\\n   openKeys={['SubMenuKeys']}\\n   // \u5C55\u5F00\u4E8B\u4EF6 \u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E2A\u63A7\u5236 \u540C\u65F6\u53EA\u663E\u793A\u4E00\u4E2A\u5B50\u83DC\u5355\\n   onOpenChange={(openKeys)=>string[]}\\n>\\n  <SubMenu\\n    key='SubMenu'\\n    icon\\n    title\\n  >\\n    // ItemGroup \u4F1A\u5728\u4FA7\u8FB9\u680F\u4E0A\u663E\u793A\u4E00\u4E2A\u6807\u9898 \u6CA1\u6709\u5176\u4ED6\u6548\u679C\\n    <ItemGroup\\n      key=''\\n      title=''\\n    >\\n       <MenuItem\\n          key=''\\n          icon\\n       >\\n          \u8FD9\u662F\u5B50\u83DC\u5355\\n       </MenuItem>\\n    </ItemGroup>\\n  </SubMenu>\\n</Menu>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "pageheader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#pageheader",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "PageHeader"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "",
    lang: "unknown"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "pagination"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#pagination",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Pagination"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u903B\u8F91\\n\u5F53\u524D\u9875\u9762 \u4E00\u9875\u653E\u51E0\u6761\u6570\u636E \u603B\u5171\u591A\u5C11\u6570\u636E  \u5F53\u524D\u9875\u7801\\n pageSize total current\\n\u5F53\u70B9\u51FB\u7684\u65F6\u5019 \u5C06\u70B9\u51FB\u7684\u9875\u7801\u5207\u6362\\n\u901A\u8FC7\u5F53\u524D\u9875\u9762 \u53D1\u8D77\u7F51\u7EDC\u8BF7\u6C42 \u8986\u76D6\u6570\u636E\\n#\\n<Pagination\\n  pageSize={\u6BCF\u9875\u6761\u6570}\\n  total={\u6570\u636E\u603B\u6570}\\n  current={\u5F53\u524D\u9875\u6570}\\n  // \u6309\u94AE\u63A7\u5236 \u4E00\u9875\u663E\u793A\u591A\u5C11\u6761\u3001\\n  pageSizeOptions=[]\\n  onChange={(page,pageSize)=> }\\n  showTotal: (total) => \`\u5171 \${total} \u6761\u6570\u636E\`,\\n  defaultPageSize\\n  defaultCurrent\\n/>\\n\\n# \u9875\u7801\u91CD\u7F6E\u95EE\u9898\\n    https://stackoverflow.com/questions/69638994/how-to-reset-the-paginations-current-page-when-pagesize-changes-in-ant-design",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "steps"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#steps",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Steps"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<Steps\\n  // \u63A7\u5236\u9AD8\u4EAE\u4F4D\u7F6E\\n  current={1}\\n  size=\\"small\\"\\n>\\n  <Step title subTitle description status=\\"finish|process|wait\\" icon></Step>\\n</Steps>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u6570\\u636E\\u5F55\\u5165"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u6570\\u636E\\u5F55\\u5165",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u6570\\u636E\\u5F55\\u5165"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "autocomplete"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#autocomplete",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "AutoComplete"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "#\\n <AutoComplete\\n   placeholder\\n   style\\n\\n   // \u6570\u636E\u6E90\\n   options\\n   //  \u5F53\u524D\u9009\u62E9\u6761\u76EE\\n   value\\n\\n   onSelect\\n   onSearch\\n   onChange\\n   showSearch={{ filter }}\\n />\\n\\tfilter(inputValue, path) {\\n\\t\\t\\treturn path.some(option => option.name.indexOf(inputValue) > -1);\\n\\t\\t},",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "datepicker"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#datepicker",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "DatePicker"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "import moment from 'moment'\\n// \u65F6\u95F4\u9009\u62E9\u5668\\nimport { DatePicker } from 'antd';\\n// \u65F6\u95F4\u8303\u56F4\u9009\u62E9\u5668\\nconst { RangePicker } = DatePicker;\\n// \u4E2D\u6587\u9700\u8981\u7684\u5305\\nimport 'moment/locale/zh-cn';\\nimport locale from 'antd/es/date-picker/locale/zh_CN';\\n\\n<RangePicker\\n## \u57FA\u7840\u914D\u7F6E\\n  // \u7981\u7528\u7EC4\u4EF6\\n  disabled={[false,true]}\\n  // \u9875\u811A\u5185\u5BB9\\n  renderExtraFooter={() => 'extra footer'}\\n  // \u65E0\u8FB9\u6846\\n  bordered={false}\\n  size={'large|miaddle|small'}\\n  // \u4E2D\u6587 \u9700\u8981\u5F15\u5165 moment\u4E2D\u6587 \u548C \u65F6\u95F4\u9009\u62E9\u5668\u4E2D\u6587 \u7684\u5305\\n  locale={locale}\\n\\n## \u5177\u4F53\u65F6\u95F4\u914D\u7F6E\\n  // \u5F53\u662F\u8303\u56F4\u9009\u62E9\u5668\u7684\u65F6\u5019 \u5FC5\u987B\u5F00\u542F\u8FD9\u4E2A \u914D\u5408 Onchange\\n  value={\\"\\"}\\n  // \u70B9\u51FB\u540E \u9650\u5236\u65F6\u95F4\u7C7B\u578B\\n  picker=\\"year|quarter|month|week|date|time\\"\\n  // \u70B9\u51FB\u540E\u5F00\u542F\u5177\u4F53 \u65F6\u5206\u79D2\u9009\u62E9\u5668\\n  showTime={{\\n      format: \\"hh[\u65F6]mm[\u5206]ss[\u79D2]\\",\\n      defaultValue:[\\n            // \u8BBE\u7F6E\u65F6\u5206\u79D2\u9ED8\u8BA4\u503C \u4E0D\u9009\u62E9\u65F6\u5206\u79D2\u5C31\u662F\u9ED8\u8BA4\u7684\\n            moment('01:00:00', 'HH:mm:ss'),\\n            moment('11:59:59', 'HH:mm:ss')\\n          ]\\n     }}\\n  // \u9ED8\u8BA4\u4E00\u70B9\u51FB\u5C31\u663E\u793A\u7684\u65F6\u95F4\u8303\u56F4 \u4E0D\u5199\u5C31\u4ECE\u6700\u65B0\u65F6\u95F4\u5F00\u59CB\\n  \u642D\u914D showTime \u4F7F\u7528\\n  defaultPickerValue={moment(\\"2021-05-01\\")}\\n  // \u4E0D\u70B9\u51FB\u65F6\u663E\u793A\u7684\u65F6\u95F4\u683C\u5F0F\u8FC7\u6EE4\\n  format=\\"YYYY/MM/DD HH:mm:ss\\"\\n  // \u81EA\u5B9A\u4E49\u5FEB\u6377\u65F6\u95F4\u6309\u94AE\u8BBE\u7F6E showToday={false}\\n  ranges={{\\n     Today: [moment(), moment()],\\n     '\u5F53\u6708':[\\n         moment().startOf('month'),\\n         moment().endOf('month')\\n        ]\\n     }}\\n  // \u81EA\u5B9A\u4E49\u6BCF\u4E2A\u65E5\u671F\u7684\u5916\u89C2\\n  dateRender={current => {\\n      const style = {};\\n      if (current.date() === 1) {\\n            style.border = '1px solid #1890ff';\\n            style.borderRadius = '50%';\\n      }\\n      return (\\n         <div className=\\"ant-picker-cell-inner\\" style={style}>\\n              {current.date()}\\n         </div>\\n          )\\n   }}\\n  // \u7981\u7528\u9650\u5236 \u65F6\u95F4   \u5177\u4F53\u89C1\u4E0B\u9762\u7684 demo\\n  disabledDate={disabledDate}\\n\\n## \u4E8B\u4EF6\\n/* \u65F6\u95F4\u6539\u53D8\u7684\u4E8B\u4EF6 \u53C2\u6570\u662F\u6539\u53D8\u7684\u65F6\u95F4\\n  \u5F53\u4E3A datepicker \u65F6\u5019 \u4E0D\u80FD\u53D6\u6D88\u540C\u4E00\u65F6\u95F4 \u9700\u8981\u8BBE\u7F6E value={''}\u624D\u884C\\n*/\\n  onChange={(date:moment,dateString:string)=>}\\n  // \u5F85\u9009\u65E5\u671F\u53D8\u5316\u56DE\u8C03 \u7528\u4E8E\u65F6\u95F4\u8303\u56F4\u9650\u52367\u5929\u65F6\u95F4\\n  onCalendarChange={val => setDates((val))}\\n/>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    id: "\\u7981\\u7528\\u5E74\\u6708\\u65E5\\u65F6\\u5206\\u79D2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u7981\\u7528\\u5E74\\u6708\\u65E5\\u65F6\\u5206\\u79D2",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u7981\\u7528\\u5E74\\u6708\\u65E5\\u65F6\\u5206\\u79D2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "## \u7981\u7528 \u5E74\u6708\u65E5 \u65F6\u5206\u79D2 => \u9650\u5236\u65F6\u95F4\u9009\u62E9\u8303\u56F4\u3001\\n// \u9700\u8981\u5F00\u542F showTime \u6765\u9650\u5236\u65F6\u5206\u79D2\\n<RangePicker\\n    defaultPickerValue={moment(\\"2021-05-01\\")}\\n    showTime={{format: \\"hh\u65F6mm\u5206ss\u79D2\\"}}\\n    // \u9650\u5236\u5E74\u6708\u65E5\\n    disabledDate={disabledDate}\\n    // \u9650\u5236\u65F6\u5206\u79D2\\n    disabledTime={disabledTime}\\n/>\\n\\n const disabledDate = (currentDate) => {\\n    const start = moment(\\"2021-05-01\\")\\n    const end = moment(\\"2021-06-01\\")\\n// \u5C06\u65F6\u95F4\u9650\u5236\u5728 \u53EA\u80FD\u9009\u62E92021\u5E74 5\u52306\u6708 \u7684\u65F6\u95F4\\n    return currentDate && currentDate < start\\n           || currentDate > end\\n// \u5C06\u65F6\u95F4\u9650\u5236\u5728 \u53EA\u80FD\u9009\u62E9 \u9664\u4E86 202105-202106 \u4E4B\u5916\u4EFB\u610F\u65F6\u95F4\\n    return currentDate && !(currentDate < start\\n           || currentDate > end)\\n // \u65F6\u95F4\u6700\u65E9\u662F8\u5929\u524D\\n   return current && current < moment().subtract(8, 'day');\\n  }\\n\\n // \u5DE5\u5177\u51FD\u6570 \u62FF\u5230\u8303\u56F4\u5185\u7684\u6570\u7EC4\\n function range(start, end) {const result = [];\\n for (let i = start; i < end; i++) { result.push(i);\\n }return result;}\\nconst disabledTime = () => {\\n  return {\\n    // \u53EA\u80FD\u9009\u62E9 4-24  \u5C0F\u65F6\\n    disabledHours: () => range(0, 24).splice(4, 20),\\n    // \u53EA\u80FD\u9009\u62E9 00-29 \u5206\u949F\\n    disabledMinutes: () => range(30, 60),\\n    // \u53EA\u80FD\u9009\u62E9 \u9664\u4E8655 56 \u79D2\u7684 \u79D2\u6570\\n    disabledSeconds: () => [55, 56],\\n    }\\n  }",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    id: "\\u7981\\u7528-7-\\u5929\\u8303\\u56F4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u7981\\u7528-7-\\u5929\\u8303\\u56F4",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u7981\\u7528 7 \\u5929\\u8303\\u56F4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u7981\u75287\u5929\u8303\u56F4\\n<RangePicker\\n    defaultPickerValue={moment(\\"2021-05-01\\")}\\n    showTime={{format: \\"hh\u65F6mm\u5206ss\u79D2\\"}}\\n    disabledDate={disabledDate}\\n    onCalendarChange={val => setDates((val))}\\n/>\\n   const [dates, setDates] = useState([]);\\n\\n   const disabledDate = (current) => {\\n// \u9650\u5236 7\u5929\u4EE5\u5185\\n    if (!dates || dates.length === 0) {return false;}\\nconst tooLate = dates[0] && current.diff(dates[0],'days') > 7;\\nconst tooEarly=dates[1] && dates[1].diff(current, 'days') > 7;\\n return tooEarly || tooLate;\\n// 2021-05-01\u81F32021-06-01 && 7\u5929\u4EE5\u5185\\n     if (!dates || dates.length === 0) {return false;}\\n     const start = moment(\\"2021-05-01\\")\\n     const end = moment(\\"2021-06-01\\")\\nconst tooLate=dates[0] && current.diff(dates[0], 'days') > 7;\\nconst tooEarly=dates[1]&&(dates[1]).diff(current, 'days') > 7;\\n     return  current && (tooEarly || tooLate)\\n             || current < start || current > end\\n  };",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    id: "\\u7981\\u7528\\u5E74\\u4EFD"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u7981\\u7528\\u5E74\\u4EFD",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u7981\\u7528\\u5E74\\u4EFD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u9700\\u8981\\u5347\\u7EA7\\u6700\\u65B0\\u7248"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\"ant-design-vue\\": \\"^1.7.8\\",")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<DatePicker format=\\"YYYY\\" disabledDate={disabledYear} />;\\n\\nfunction disabledYear(current) {\\n  return current.year() === 2021; // disabling 2021\\n  // return current.year() !== 2021; // disabling everything besides 2021\\n  // return current.year() !== (new Date).getFullYear(); // disabling everything besides current year\\n  // return current.year() > 2021; // disabling everything further than 2021\\n  // return current.year() < 2021; // disabling everything in the past before 2021\\n  // return [2018, 2019].includes(current.year()); // disabling 2018 and 2019\\n}",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    id: "demo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#demo",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "demo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "import { useState } from 'react';\\nimport { DatePicker } from 'antd';\\nimport 'moment/locale/zh-cn';\\nimport locale from 'antd/es/date-picker/locale/zh_CN';\\nimport moment from 'moment';\\n\\nconst { RangePicker } = DatePicker;\\n\\nconst Test = () => {\\n  const [dates, setDates] = useState([]);\\n\\n  // 1.1 \u5C06\u65F6\u95F4\u9650\u5236\u5728 \u53EA\u80FD\u9009\u62E92021\u5E74 5\u52306\u6708 \u7684\u65F6\u95F4\\n  // const disabledDate = (currentDate) => {\\n  //   const start = moment(\\"2021-05-01\\")\\n  //   const end = moment(\\"2021-06-01\\")\\n  //   return currentDate && currentDate < start\\n  //     || currentDate > end\\n  // }\\n\\n  // 1.2 \u5C06\u65F6\u95F4\u9650\u5236\u5728 \u53EA\u80FD\u9009\u62E9 \u9664\u4E86 202105-202106 \u4E4B\u5916\u4EFB\u610F\u65F6\u95F4\\n  // const disabledDate = (currentDate) => {\\n  //   const start = moment(\\"2021-05-01\\")\\n  //   const end = moment(\\"2021-06-01\\")\\n  //   return currentDate && !(currentDate < start\\n  //     || currentDate > end)\\n  // }\\n\\n  // 1.3 \u9650\u52367\u5929\u4E4B\u5185\\n  // const disabledDate = (current) => {\\n  //   if (!dates || dates.length === 0) { return false; }\\n  //   const tooLate = dates[0] && current.diff(dates[0], 'days') > 7;\\n  //   const tooEarly = dates[1] && dates[1].diff(current, 'days') > 7;\\n  //   return tooEarly || tooLate;\\n  // };\\n\\n  // 1.4 \u9650\u5236 2021-05-01\u81F32021-06-01 && 7\u5929\u4EE5\u5185\\n  const disabledDate = current => {\\n    if (!dates || dates.length === 0) {\\n      return false;\\n    }\\n    const start = moment('2021-05-01');\\n    const end = moment('2021-06-01');\\n    const tooLate = dates[0] && current.diff(dates[0], 'days') > 7;\\n    const tooEarly = dates[1] && dates[1].diff(current, 'days') > 7;\\n    return (\\n      (current && (tooEarly || tooLate)) || current < start || current > end\\n    );\\n  };\\n\\n  // \u5DE5\u5177\u51FD\u6570 \u62FF\u5230\u8303\u56F4\u5185\u7684\u6570\u7EC4\\n  function range(start, end) {\\n    const result = [];\\n    for (let i = start; i < end; i++) {\\n      result.push(i);\\n    }\\n    return result;\\n  }\\n  // 2.1 \u9650\u5236\u65F6\u5206\u79D2\\n  const disabledTime = () => {\\n    return {\\n      // \u53EA\u80FD\u9009\u62E9 4-24  \u5C0F\u65F6\\n      disabledHours: () => range(0, 24).splice(4, 20),\\n      // \u53EA\u80FD\u9009\u62E9 00-29 \u5206\u949F\\n      disabledMinutes: () => range(30, 60),\\n      // \u53EA\u80FD\u9009\u62E9 \u9664\u4E8655 56 \u79D2\u7684 \u79D2\u6570\\n      disabledSeconds: () => [55, 56],\\n    };\\n  };\\n  return (\\n    <>\\n      <RangePicker\\n        // disabled={[false, true]}\\n        renderExtraFooter={() => '\u8FD9\u662F\u9875\u811A'}\\n        bordered={false}\\n        size={'large'}\\n        locale={locale}\\n        // picker=\\"year|quarter|month|week|date|time\\"\\n        showTime={{\\n          format: 'hh\u65F6mm\u5206ss\u79D2',\\n          defaultValue: [\\n            moment('01:00:00', 'HH:mm:ss'),\\n            moment('11:59:59', 'HH:mm:ss'),\\n          ],\\n        }}\\n        defaultPickerValue={moment('2021-05-01')}\\n        format=\\"YYYY/MM/DD HH:mm:ss\\"\\n        ranges={{\\n          Today: [moment(), moment()],\\n          \u5F53\u6708: [moment().startOf('month'), moment().endOf('month')],\\n        }}\\n        dateRender={current => {\\n          const style = {};\\n          if (current.date() === 1) {\\n            style.border = '1px solid #1890ff';\\n            style.borderRadius = '50%';\\n          }\\n          return (\\n            <div className=\\"ant-picker-cell-inner\\" style={style}>\\n              {current.date()}\\n            </div>\\n          );\\n        }}\\n        disabledDate={disabledDate}\\n        // disabledTime={disabledTime}\\n        onCalendarChange={val => setDates(val)}\\n        onChange={(date, dateString) => console.log(date, dateString)}\\n      />\\n    </>\\n  );\\n};\\nexport default Test;",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    id: "\\u9009\\u4E2D\\u591A\\u4E2A\\u65E5\\u671F"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u9009\\u4E2D\\u591A\\u4E2A\\u65E5\\u671F",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u9009\\u4E2D\\u591A\\u4E2A\\u65E5\\u671F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "#\\nimport React, { useState } from \\"react\\";\\nimport { DatePicker, Button } from \\"antd\\";\\nimport moment from \\"moment\\";\\nimport styles from './index.less';\\n\\nconst MultipleDatePicker = () => {\\n  // \u9009\u4E2D\u7684\u65E5\u671F timestamp[]\\n  const [selectedDate, setSelectedDate] = useState([])\\n\\n  // \u65E5\u671F\u53D1\u751F\u53D8\u5316\u65F6 \u91CD\u590D\u53BB\u91CD \u6CA1\u6709\u5219\u6DFB\u52A0\\n  const onValueChange = (date) => {\\n    const newDate = moment(date).startOf(\\"day\\").valueOf()\\n    if (selectedDate.includes(newDate)) {\\n      setSelectedDate([...selectedDate.filter(item => item !== newDate)])\\n    } else {\\n      setSelectedDate([...selectedDate, newDate])\\n    }\\n  };\\n\\n  // \u6E32\u67D3\u9009\u4E2D\u65E5\u671F\u5916\u89C2\\n  const dateRender = (currentDate) => {\\n    const isSelected = selectedDate.includes(moment(currentDate).startOf(\\"day\\").valueOf())\\n    let selectStyle = isSelected ?\\n      {\\n        position: 'relative',\\n        zIndex: 2,\\n        display: 'inlineBlock',\\n        width: \\"24px\\",\\n        height: \\"22px\\",\\n        lineHeight: \\"22px\\",\\n        backgroundColor: \\"#1890ff\\",\\n        color: \\"#fff\\",\\n        margin: \\"auto\\",\\n        borderRadius: \\"2px\\",\\n        transition: \\"background 0.3s, border 0.3s\\"\\n      }\\n      : {}\\n    return (<div style={selectStyle} > {currentDate.date()}  </div >)\\n  }\\n\\n  return (\\n    <>\\n      <div className={styles.multipleDatePicker}>\\n        <DatePicker\\n          open\\n          dateRender={dateRender}\\n          onChange={onValueChange}\\n          showToday={false}\\n          value={\\"\\"}\\n        />\\n        <Button type='primary' onClick={() => console.log(selectedDate)}>\u786E\u5B9A</Button>\\n      </div>\\n    </>\\n  )\\n}\\nexport default MultipleDatePicker\\n#\\n.multipleDatePicker {\\n  :global {\\n    .ant-picker-input {\\n      display: none !important;\\n    }\\n    .ant-picker {\\n      border: none;\\n      padding: 0;\\n    }\\n  }\\n}\\n# \u914D\u5408 select\\nhttps://codesandbox.io/s/antd-reproduction-template-forked-1mos9?file=/index.js",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    id: "\\u7981\\u7528\\u5230\\u67D0\\u4E2A\\u786E\\u5207\\u65F6\\u95F4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u7981\\u7528\\u5230\\u67D0\\u4E2A\\u786E\\u5207\\u65F6\\u95F4",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u7981\\u7528\\u5230\\u67D0\\u4E2A\\u786E\\u5207\\u65F6\\u95F4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    id: "class"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#class",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "class"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "import moment from 'moment';\\nexport default class ToolClass {\\n  protected _range = (start: number, end: number) => {\\n    const result = [];\\n    for (let i = start; i < end; i++) {\\n      result.push(i);\\n    }\\n    return result;\\n  }\\n  disabledDate = (startTime: moment.MomentInput, current: moment.MomentInput) => {\\n    if (startTime == undefined) {\\n      return false;\\n    }\\n    if (current) {\\n      return current < moment(startTime).startOf('days')\\n    }\\n    return false\\n  };\\n  disabledTime = (StartFormMoment: moment.MomentInput, CurrentFormMoment: moment.MomentInput) => {\\n    let startHours = moment(StartFormMoment).hour()\\n    let startMinutes = moment(StartFormMoment).minute()\\n    let startSeconds = moment(StartFormMoment).second()\\n    let startDate = moment(StartFormMoment).date()\\n\\n    let currentHours = moment(CurrentFormMoment).hour()\\n    let currentMinutes = moment(CurrentFormMoment).minute()\\n    let currentDate = moment(CurrentFormMoment).date()\\n    if (CurrentFormMoment == undefined) {\\n      return {};\\n    }\\n    if (CurrentFormMoment && currentDate === startDate) {\\n      if (currentHours === startHours) {\\n        if (currentMinutes === startMinutes) {\\n          return {\\n            disabledHours: () => this._range(0, startHours),\\n            disabledMinutes: (selectedHour: number) => selectedHour >= startHours ? this._range(0, startMinutes) : [],\\n            disabledSeconds: (selectedHour: number, selectedMinute: number) =>\\n              selectedHour >= startHours && selectedMinute >= startMinutes\\n                ? this._range(0, startSeconds)\\n                : []\\n          };\\n        }\\n        return {\\n          disabledHours: () => this._range(0, startHours),\\n          disabledMinutes: (selectedHour: any) => selectedHour >= startHours ? this._range(0, startMinutes) : [],\\n          disabledSeconds: () => []\\n        }\\n      } else {\\n        return {\\n          disabledHours: () => this._range(0, startHours),\\n          disabledMinutes: () => [],\\n          disabledSeconds: () => []\\n        };\\n      }\\n    }\\n    return {}\\n  }\\n}",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    id: "demo1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#demo1",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "demo1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "import moment from 'moment';\\nimport { Form, DatePicker } from 'antd';\\nimport ToolClass from '../toolClass';\\nconst Picker1 = () => {\\n  const [form] = Form.useForm();\\n  const transformFn = new ToolClass();\\n  const disabledTime = (CurrentFormMoment: moment.MomentInput) => {\\n    const StartTime = form.getFieldValue('startTime');\\n    return transformFn.disabledTime(StartTime, CurrentFormMoment);\\n  };\\n  const disabledDate = (CurrentFormMoment: moment.MomentInput) => {\\n    const StartTime = form.getFieldValue('startTime');\\n    return transformFn.disabledDate(StartTime, CurrentFormMoment);\\n  };\\n  return (\\n    <>\\n      <h2>Picker1</h2>\\n      <Form form={form}>\\n        <Form.Item name=\\"startTime\\">\\n          <DatePicker\\n            style={{ minWidth: '100%' }}\\n            showToday={false}\\n            showTime\\n            showNow={false}\\n            onChange={() => form.setFieldsValue({ endTime: null })}\\n          />\\n        </Form.Item>\\n        <Form.Item name=\\"endTime\\">\\n          <DatePicker\\n            style={{ minWidth: '100%' }}\\n            showToday={false}\\n            showTime={{\\n              hideDisabledOptions: true,\\n            }}\\n            showNow={false}\\n            disabledDate={disabledDate}\\n            disabledTime={disabledTime}\\n          />\\n        </Form.Item>\\n      </Form>\\n    </>\\n  );\\n};\\nexport default Picker1;",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    id: "demo2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#demo2",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "demo2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "import { useState } from 'react';\\nimport moment from 'moment';\\nimport { Form, DatePicker } from 'antd';\\nconst { RangePicker } = DatePicker;\\nimport ToolClass from '../toolClass';\\nconst Picker2 = () => {\\n  const [form] = Form.useForm();\\n  const transformFn = new ToolClass();\\n  const [disabledTimeDates1, setDisabledTimeDates1] = useState([]);\\n  const [disabledTimeDates2, setDisabledTimeDates2] = useState([]);\\n  // \u5C06\u8868\u5355\u5206\u4E3A startTime1 startTime2  endTime1 endTime2\\n  const disabledRangeTime1 = (\\n    CurrentFormMoment: moment.MomentInput,\\n    type: string,\\n  ) => {\\n    let StartTime1 = disabledTimeDates1?.[0];\\n    if (type === 'end') {\\n      return transformFn.disabledTime(StartTime1, CurrentFormMoment);\\n    }\\n    return {};\\n  };\\n  const disabledRangeTime2 = (\\n    CurrentFormMoment: moment.MomentInput,\\n    type: string,\\n  ) => {\\n    // startTime1\\n    let StartTime1 = form.getFieldValue('startTime')?.[0];\\n    // endTime1\\n    let endTime1 = disabledTimeDates2?.[0];\\n    if (type === 'start') {\\n      return transformFn.disabledTime(StartTime1, CurrentFormMoment);\\n    }\\n    if (type === 'end') {\\n      return transformFn.disabledTime(endTime1, CurrentFormMoment);\\n    }\\n    return {};\\n  };\\n  const disabledRangeDate = (CurrentFormMoment: moment.MomentInput) => {\\n    let StartTime = form.getFieldValue('startTime')?.[0];\\n    return transformFn.disabledDate(StartTime, CurrentFormMoment);\\n  };\\n  return (\\n    <>\\n      <h2>Picker2</h2>\\n      <Form form={form}>\\n        <Form.Item name=\\"startTime\\">\\n          <RangePicker\\n            onChange={() => form.setFieldsValue({ endTime: null })}\\n            onCalendarChange={(val: any) => setDisabledTimeDates1(val)}\\n            disabledTime={disabledRangeTime1}\\n            showTime={{\\n              hideDisabledOptions: true,\\n            }}\\n          />\\n        </Form.Item>\\n        <Form.Item name=\\"endTime\\">\\n          <RangePicker\\n            onCalendarChange={(val: any) => setDisabledTimeDates2(val)}\\n            disabledDate={disabledRangeDate}\\n            disabledTime={disabledRangeTime2}\\n            showTime={{\\n              hideDisabledOptions: true,\\n            }}\\n          />\\n        </Form.Item>\\n      </Form>\\n    </>\\n  );\\n};\\nexport default Picker2;",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    id: "\\u52A8\\u6001\\u70B9\\u51FB\\u65F6\\u5019\\u7684\\u9ED8\\u8BA4\\u65F6\\u95F4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u52A8\\u6001\\u70B9\\u51FB\\u65F6\\u5019\\u7684\\u9ED8\\u8BA4\\u65F6\\u95F4",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u52A8\\u6001\\u70B9\\u51FB\\u65F6\\u5019\\u7684\\u9ED8\\u8BA4\\u65F6\\u95F4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "\u5F53\u70B9\u51FB\u65F6\u95F4\u9009\u62E9\u6846\u4F1A\u9ED8\u8BA4 \u9009\u62E9\u5F53\u524D\u7684\u65F6\u95F4\u3002\u4F46\u662F\u7981\u7528\u5173\u7CFB\u548C\u5B83\u51B2\u7A81\u7684\u65F6\u5019\u5C31\u9700\u8981\u5B9A\u4E49defaultValue\\ndefaultValue \u53EA\u4F1A\u6E32\u67D3\u4E00\u6B21 \u56E0\u6B64\u53EA\u80FD\u5199\u4E00\u4E2A\u56FA\u5B9A\u503C\u503C\\n\u5982\u679C\u60F3\u4F20\u5165\u53D8\u91CF \u9700\u8981\u5BF9\u8BE5\u7EC4\u4EF6\u8FDB\u884C\u91CD\u65B0\u6E32\u67D3\\n\u89E3\u51B3\u65B9\u6CD5: \u76F4\u63A5\u5229\u7528 Form.Item shouldUpdate \u65B9\u6CD5\u8FDB\u884C \u52A8\u6001\u6761\u4EF6\u6E32\u67D3\\n\u5728Form.Item\u5185\u90E8\u901A\u8FC7\u6CE8\u5165\u7684 getFieldValue \u65B9\u6CD5\u6765\u62FF\u5230\u6700\u65B0\u7684\u503C\\n<Form.Item shouldUpdate={(pre, cru) => cru.xxx != pre.xxx }>\\n{({ getFieldValue }) => {\\n  return (\\n    <Form.Item name='xxx'>\\n      <DatePicker\\n        showTime={{\\n          defaultValue: moment(\\n            getFieldValue('xxx') == null\\n              ? moment().add(2, 'hours').format('HH:00:00')\\n              : moment(getFieldValue('xxx')).add(1, 'hours').format('HH:00:00'),\\n            'HH:mm:ss')\\n        }}\\n      />\\n    </Form.Item>\\n  )\\n}\\n</Form.Item>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#form",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Form"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    id: "\\u7EC4\\u4EF6\\u7ED3\\u6784"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u7EC4\\u4EF6\\u7ED3\\u6784",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u7EC4\\u4EF6\\u7ED3\\u6784"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<Form>\\n  <Form.Item name=''>\\n    <Input/>\\n  </Form.Item>\\n  <span>\u8F85\u52A9\u4FE1\u606F<span/>\\n\\n  <Form.Item>\\n    <Form.Item name=''>\\n      <InputNumber/>\\n    </Form.Item>\\n  </Form.Item>\\n\\n  <Form.Item\\n    name=''\\n    valuePropName=\\"fileList\\"\\n    getValueFromEvent={(e)=>{\\n      if(Array.isArray(e))  return e\\n      return e && e.filelist\\n    }}\\n  >\\n      <Upload/>\\n  </Form.Item>\\n\\n</Form>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    id: "\\u4E0D\\u663E\\u793A-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u4E0D\\u663E\\u793A-label",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u4E0D\\u663E\\u793A label"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "label=\\" \\" colon={false}",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    id: "form-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#form-1",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Form"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    id: "props"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#props",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "props"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "const [form] = Form.useForm();\\n<Form\\n# \u5E38\u7528\u914D\u7F6E\\n  // form \u7684\u5BF9\u8C61 \u62E5\u6709\u5F88\u591A\u65B9\u6CD5\\n  form={form}\\n  // \u5DE6\u4FA7\u8868\u5355\u6587\u5B57\u7684 \u6805\u683C\u5E03\u5C40\\n  labelCol={{ span:8,offset: 4 }}\\n  // \u53F3\u4FA7\u8868\u5355\u7684 \u6805\u683C\u5E03\u5C40\\n  wrapperCol={{ span:8 }}\\n  // \u7EDF\u4E00\u8BBE\u7F6E\u5185\u90E8\u6240\u6709\u8868\u5355\u7684 size\\n  size={\\"large\\"|\\"default\\"|\\"large\\"}\\n  /* \u8868\u5355\u9ED8\u8BA4\u503C \u6CE8\u610F\u5982\u679C\u6709\u5F02\u6B65\u91CD\u65B0\u6E32\u67D3\u7684\u60C5\u51B5\\n    \u8BF7\u4F7F\u7528 form.setFieldsValue({Form.item.name: xxx})\\n  */\\n  initialValues={{ Form.item.name: xxx }}\\n\\n# \u53EF\u80FD\u7528\u5230\u7684\u914D\u7F6E\\n  // \u6821\u9A8C\u5931\u8D25\u81EA\u52A8\u6EDA\u52A8\u5230\u7B2C\u4E00\u4E2A\u9519\u8BEF\u5B57\u6BB5\\n  scrollToFirstError\\n  // \u5F53\u5B57\u6BB5\u503C\u88AB\u5220\u9664\u65F6  \u4FDD\u7559\u5B57\u6BB5\\n  preserve={false}\\n\\n\\n# \u4F7F\u7528\u5F88\u5C11\u7684\u914D\u7F6E\\n  name='xxx'\\n  layout={\\"horizontal\\"|\\"vertical\\"|\\"inline\\"}\\n  // \u624B\u52A8\u63A7\u5236\u53EF\u9009\u548C\u5FC5\u9009\u6837\u5F0F\u7684\u5207\u6362\\n  requiredMark='optional|true|false'\\n  /* \u81EA\u5B9A\u4E49\u6821\u9A8C\u6A21\u677F\\n  const validateMessages = {\\n  required: '\${label} is required!',\\n  types: {\\n    email: '\${label} is not a valid email!',\\n    number: '\${label} is not a valid number!',\\n  },\\n  number: {\\n    range: '\${label} must be between \${min} and \${max}',\\n  },\\n  };*/\\n  validateMessages={validateMessages}\\n\\n# \u4E8B\u4EF6\\n  onFinish={value=> {} }\\n  onFinishFailed={errorValue=> {} }\\n  // \u67D0\u4E2A\u8868\u5355\u66F4\u65B0\u5C31\u89E6\u53D1\\n  onValuesChange={(changeValue,allValues)=> {} }\\n>\\n<Form>\\n\\n# \u5176\u4ED6 label\u53F3\u5BF9\u9F50\\nconst formItemLayout = {\\n  labelCol: {\\n    xs: { span: 24 },\\n    sm: { span: 7 },\\n  },\\n  wrapperCol: {\\n    xs: { span: 24 },\\n    sm: { span: 17 },\\n  },\\n};\\n{...formItemLayout}\\n#\\n labelCol: {\\n    flex: \\"0 0 100px\\"\\n  },",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    id: "api"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#api",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "API"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// \u624B\u52A8\u8BBE\u7F6E\u8868\u5355\u7684\u503C\\n form.setFieldsValue({\\n      form.item.name : 'xxx',\\n })\\n// \u91CD\u7F6E\u8868\u5355\\n form.resetFields();\\n// \u83B7\u53D6\u8868\u5355\u7684\u503C \u4E0D\u5199\u53C2\u6570\u5C31\u662F \u83B7\u53D6\u6240\u6709\u7684\u8868\u5355\\n form.getFieldValue()\\n form.getFieldValue(form.item.name)\\n// \u83B7\u53D6\u5B9E\u4F8B\\n form.getFieldInstance('formItemName')\\n// \u81EA\u5B9A\u4E49\u6821\u9A8C\\n form.validateFields()\\n   .then(values=>{\\n     success\\n   })\\n   .catch(err=>console.log(err))",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    id: "formitem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#formitem",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Form.Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    id: "\\u9759\\u6001\\u8868\\u5355"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u9759\\u6001\\u8868\\u5355",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u9759\\u6001\\u8868\\u5355"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<Form.Item\\n# \u5E38\u7528\u914D\u7F6E\\n// \u9690\u85CF\u5192\u53F7\\n  colon={false}\\n// \u8868\u5355\u5DE6\u8FB9\u7684\u6587\u5B57 \u4F8B\u5982: username\\n  label={'username'}\\n// \u7528\u4E8E\u53CC\u5411\u7ED1\u5B9A\u6570\u636E \u5FC5\u987B\\n  name={'username'}\\n// \u6DFB\u52A0\u4E00\u4E2A * \u7B26\u53F7\u7684\u5FC5\u9009\u56FE\u6807\\n  required\\n/* \u7279\u6B8A\u8868\u5355\u9700\u8981\u8BBE\u7F6E\u8FD9\u4E2A\u5C5E\u6027\u4EE5\u53CA getValueFromEvent \u4F8B\u5982:\\n   \u5982\u679C\u662F upload valuePropName=\\"filelist\\"\\n   \u5982\u679C\u662F switch valuePropName=\\"checked\\"\\n*/\\n  valuePropName=\\"fileList\\"\\n// upload \u8868\u5355\u9700\u8981\u8FD9\u4E2A\u5C5E\u6027 \u5426\u5219\u65E0\u6CD5\u4E0A\u4F20\\n  getValueFromEvent={(e)=>{\\n     if(Array.isArray(e))  return e\\n     return e && e.filelist\\n  }}\\n// \u6821\u9A8C\u89C4\u5219\\n  rules={[\\n    {\\n      required: true,\\n      message: '',\\n      pattern: /^[3]{1}/,\\n      max: 5,\\n      min: 3,\\n      validateTrigger: \\"onChange\\",\\n      // \u6821\u9A8C\u4E0D\u518D\u963B\u585E\u8868\u5355\u63D0\u4EA4\\n      warningOnly: true,\\n      // \u81EA\u5B9A\u4E49\u6821\u9A8C \u9700\u8981\u4EE5 promise \u5F62\u5F0F\u8FD4\u56DE\\n      validator: (usernameFormRules,value)=>{\\n        if (value.length > 5) {\\n        return Promise.reject(new Error('\u4E0D\u80FD\u5927\u4E8E5\u4E2A\u5B57\u7B26'))\\n        }\\n        return Promise.resolve(\\"\u683C\u5F0F\u6B63\u786E\\")\\n      }\\n    }\\n  ]}\\n# \u53EF\u80FD\u7528\u5230\u7684\u914D\u7F6E\\n  // \u5173\u95ED\u8868\u5355\u6805\u683C \u81EA\u5B9A\u4E49\u5E03\u5C40\\n  noStyle\\n  // \u9519\u8BEF\u63D0\u793A\u4FE1\u606F \u4E0D\u5199\u4F1A\u81EA\u52A8\u751F\u6210\\n  help={ReactNode}\\n  // \u6DFB\u52A0\u53CD\u9988\u56FE\u6807 \u6839\u636E validateStatus \u751F\u6210\\n  hasFeedback\\n  // \u6821\u9A8C\u72B6\u6001\\n  validateStatus={'success'|'warning'|'eror'|'validating'}\\n  // \u6307\u5B9A\u7684\u8868\u5355\u503C\u53D8\u5316\u4E86 \u4ED6\u5C31\u66F4\u65B0\\n  dependencies={['Form.Item.name']}\\n\\n# \u4F7F\u7528\u5F88\u5C11\u7684\u914D\u7F6E\\n  // \u53EF\u9009\u63D0\u793A\u4FE1\u606F\\n  tooltip={{title:'xxx',icon:</> }}\\n>\\n\\n<Form.Item>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    id: "\\u52A8\\u6001\\u8868\\u5355"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u52A8\\u6001\\u8868\\u5355",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u52A8\\u6001\\u8868\\u5355"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<Form.Item\\n   shouldUpdate={ (prevValues,curValues)=>\\n   prevValues.\u8868\u5355name !== curValues.\u8868\u5355name }\\n>\\n  { ({getFieldValue}) =>\\n    // \u5982\u679C\u67D0\u4E2A\u8868\u5355\u503C\u4E3A\u5F20\u4E09 \u5C31\u52A8\u6001\u6E32\u67D3\u8FD9\u4E2A\u65B0\u7684\u8868\u5355\\n      getFieldValue('Form.Item.name') === 'zhangsan' ? (\\n          <Form.Item .../>\\n        ) : null\\n  }\\n</Form.Item>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    id: "formlist"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#formlist",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Form.List"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "/*\\n\u81EA\u5B9A\u4E49\u52A8\u6001\u8868\u5355name\u5C5E\u6027\\n\u5F53\u5B9A\u4E49\u4E86  name={[field.name,'\u540D\u5B57\u540E\u7F00']}\\n        fieldKey={[field.fieldKey,'\u540D\u5B57\u540E\u7F00']}\\n\u52A8\u6001\u8868\u5355\u7684name\u5C31\u53D8\u6210\u4E86\\n        name={[field.name,'\u540D\u5B57\u540E\u7F00']}\\n        id: zs_\u6570\u5B57_\u540D\u5B57\u540E\u7F00   \\n*/\\n<Form form={form}>\\n  <Form.List name=\\"zs\\" initialValue={[1, 2, 3]}>\\n    {(fields, { remove, add, move }) => (\\n      <>\\n        {fields.map((field, index) => (\\n          <Form.Item key={field.key} noStyle>\\n            <Form.Item\\n              {...field}\\n              name={[field.name, '\u540D\u5B57\u540E\u7F00']}\\n              fieldKey={[field.fieldKey, '\u540D\u5B57\u540E\u7F00']}\\n            >\\n              <Input />\\n            </Form.Item>\\n            {fields.length > 1 ? (\\n              <Button onClick={() => remove(field.name)}> \u5220\u9664 </Button>\\n            ) : null}\\n            <Button onClick={() => move(index, index - 1)}>\u4E0A\u79FB</Button>\\n          </Form.Item>\\n        ))}\\n        <Form.Item>\\n          <Button onClick={() => add(\u8868\u5355\u7684\u503C, \u4F4D\u7F6E)}>\u6DFB\u52A0</Button>\\n        </Form.Item>\\n      </>\\n    )}\\n  </Form.List>\\n</Form>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    id: "formprovider"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#formprovider",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Form.Provider"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<Form.Provider\\n  // \u5B50\u8868\u5355\u5B57\u6BB5\u66F4\u65B0\u65F6\u89E6\u53D1\\n  onFormChange\\n  // \u5B50\u8868\u5355\u63D0\u4EA4\u65F6\u89E6\u53D1\\n  onFormFinish={(name, { values, forms }) => {\\n    if (name === 'form1') {\\n      const { baseForm } = forms;\\n      const \u53D8\u91CF = baseForm.getFieldValue('\u53D8\u91CF') || [];\\n      baseForm.setFieldsValue({ \u53D8\u91CF: [...\u53D8\u91CF, values] });\\n    }\\n  }}\\n>\\n  <Form name=\\"baseForm\\">\\n    <Form name=\\"form1\\">...</Form>\\n    <Form name=\\"form2\\">...</Form>\\n  </Form>\\n</Form.Provider>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    id: "\\u57FA\\u672C\\u6821\\u9A8C-demo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u57FA\\u672C\\u6821\\u9A8C-demo",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u57FA\\u672C\\u6821\\u9A8C demo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "import React from 'react';\\nimport { Form, Input, Button, Checkbox } from 'antd';\\n\\nconst Test = () => {\\n  const [form] = Form.useForm();\\n  const myValidator = (usernameFormRules, value) => {\\n    if (value.length > 5) {\\n      return Promise.reject(new Error('\u4E0D\u80FD\u5927\u4E8E5\u4E2A\u5B57\u7B26'));\\n    }\\n    return Promise.resolve('\u683C\u5F0F\u6B63\u786E');\\n  };\\n  const formRules = {\\n    username: [\\n      {\\n        required: true,\\n        message: '\u7528\u6237\u540D\u662F\u5FC5\u586B\u9879',\\n        pattern: /^[3]{1}/,\\n        // max: 5,\\n        // min: 3,\\n        // validator: myValidator,\\n        // validateTrigger: \\"onChange\\"\\n      },\\n    ],\\n    password: [\\n      {\\n        required: true,\\n        message: '\u5BC6\u7801',\\n      },\\n    ],\\n  };\\n\\n  function successFormSubmit(value) {\\n    console.log(value);\\n  }\\n\\n  function errorFormSubmit(errorValue) {\\n    console.log(errorValue);\\n  }\\n\\n  const ResetForm = () => {\\n    console.log(form.getFieldsValue());\\n    form.setFieldsValue({ username: '' });\\n    form.resetFields();\\n  };\\n\\n  return (\\n    <Form\\n      form={form}\\n      wrapperCol={{ span: 5 }}\\n      onFinish={successFormSubmit}\\n      onFinishFailed={errorFormSubmit}\\n    >\\n      <Form.Item label=\\"username\\" name=\\"username\\" rules={formRules.username}>\\n        <Input />\\n      </Form.Item>\\n      <Form.Item label=\\"password\\" name=\\"password\\" rules={formRules.password}>\\n        <Input.Password />\\n      </Form.Item>\\n      <Form.Item>\\n        <Button htmlType=\\"submit\\">\u63D0\u4EA4</Button>\\n        <Button htmlType=\\"button\\" onClick={ResetForm}>\\n          \u91CD\u7F6E\\n        </Button>\\n      </Form.Item>\\n    </Form>\\n  );\\n};\\nexport default Test;",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    id: "\\u52A8\\u6001\\u6DFB\\u52A0-demo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u52A8\\u6001\\u6DFB\\u52A0-demo",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u52A8\\u6001\\u6DFB\\u52A0 demo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "import React from 'react';\\nimport { Form, Button, Select } from 'antd';\\nconst { Option } = Select;\\n\\nconst Test = () => {\\n  const [form] = Form.useForm();\\n  let sights = {\\n    beijing: ['\u957F\u57CE', '\u6545\u5BAB'],\\n    hangzhou: ['\u897F\u6E56', '\u96F7\u5CF0\u5854'],\\n  };\\n  return (\\n    <Form form={form}>\\n      <Form.Item label=\\"\u5730\u70B9\\" name=\\"place\\">\\n        <Select onChange={() => form.setFieldsValue({ att: [] })}>\\n          <Option value=\\"beijing\\">\u5317\u4EAC</Option>\\n          <Option value=\\"hangzhou\\">\u676D\u5DDE</Option>\\n        </Select>\\n      </Form.Item>\\n\\n      <Form.List name=\\"att\\">\\n        {(fields, { remove, add, move }) => (\\n          <>\\n            {fields.map(field => (\\n              <Form.Item key={field.key}>\\n                <Form.Item\\n                  noStyle\\n                  shouldUpdate={(pre, cur) =>\\n                    pre.place !== cur.place || pre.sights !== cur.place\\n                  }\\n                >\\n                  <Form.Item\\n                    {...field}\\n                    label=\\"\u98CE\u666F\\"\\n                    // \u52A8\u6001\u589E\u51CF\u5B57\u6BB5\u9700\u8981\u8FD9\u6837\\n                    name={[field.name, 'sights']}\\n                    fieldKey={[field.fieldKey, 'sights']}\\n                  >\\n                    <Select\\n                      disabled={!form.getFieldValue('place')}\\n                      style={{ width: 130 }}\\n                    >\\n                      {(sights[form.getFieldValue('place')] || []).map(item => (\\n                        <Option key={item} value={item}>\\n                          {item}\\n                        </Option>\\n                      ))}\\n                    </Select>\\n                  </Form.Item>\\n                  <Button onClick={() => remove(field.name)}>\u5220\u9664</Button>\\n                </Form.Item>\\n              </Form.Item>\\n            ))}\\n            <Button type=\\"dashed\\" onClick={() => add()} block>\\n              {' '}\\n              \u6DFB\u52A0\\n            </Button>\\n          </>\\n        )}\\n      </Form.List>\\n      <Button\\n        type=\\"primary\\"\\n        htmlType=\\"submit\\"\\n        onClick={() => console.log(form.getFieldValue())}\\n      >\\n        Submit\\n      </Button>\\n    </Form>\\n  );\\n};\\nexport default Test;",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    id: "\\u4E00\\u884C\\u591A\\u4E2A\\u8868\\u5355"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u4E00\\u884C\\u591A\\u4E2A\\u8868\\u5355",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u4E00\\u884C\\u591A\\u4E2A\\u8868\\u5355"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "/* \u6CE8\u610F\\n1.Form.Item \u5185\u53EA\u80FD\u653E\u7F6E\u4E00\u4E2A\u8868\u5355 \u4E0D\u8981\u653E\u7F6E\u5176\u4ED6\u5185\u5BB9\\n  \u5982\u679C\u8981\u6DFB\u52A0\u6587\u5B57\u7B49 \u653E\u5728 Form.Item\u7EC4\u4EF6 \u7684\u524D\u9762\u6216\u8005\u540E\u9762\\n2.InputNumber \u4E0D\u80FD\u76F4\u63A5\u89E6\u53D1\u6570\u5B57\u81EA\u52A8\u53CC\u5411\u7ED1\u5B9A\\n  \u9700\u8981\u8FD9\u6837\\n    <Form.Item>\\n        <Space align=\\"baseline\\" size=\\"large\\">\\n           <Space align=\\"baseline\\">\\n                <Form.Item name=\\"1\\">\\n                  <InputNumber min={0}  max={100} />\\n                </Form.Item>\\n                <span>%</span>\\n            </Space>\\n         </Space>\\n    </Form.Item>\\n  \u6216\u8005\\n  <Form.Item>\\n    <Form.Item name='xxx'>\\n      <InputNumber/>\\n    </Form.Item>\\n  </Form.Item>\\n3.\u4E3B\u8981\u5916\u5C42\u5148\u7528 \u4E00\u4E2AForm.Item\u5305\u88F9 \u8FD9\u4E2AForm.Item \u4E0D\u7ED1\u5B9Aname\\n  \u53EA\u7ED1\u5B9A lable \u548C style \u7B49\\n*/\\n<Form.Item label=\\"\u540D\u79F0\u4E00\\" style={{ marginBottom: 0 }}>\\n\\n    <Form.Item\\n        style={{ display: 'inline-flex',\\n                 width: 'calc(45% - 4px)' }}\\n    >\\n        <Input  />\\n    </Form.Item>\\n\\n    <Form.Item\\n        style={{ display: 'inline-flex',\\n                width: 'calc(55% - 4px)', marginLeft: '8px' }}\\n        name=\\"name2\\"\\n    >\\n       <Input  />\\n    </Form.Item>\\n\\n    <Form.Item label=\\"InputNumber\u8868\u5355\\" style={{ height: 32 }}>\\n        <Space align=\\"baseline\\" size=\\"large\\">\\n           <Space align=\\"baseline\\">\\n                <Form.Item name='inputNumber1' >\\n                  <InputNumber\\n                    className={styles.modalInputNumber}\\n                    min={0}\\n                    max={100}\\n                  />\\n                </Form.Item>\\n                <span>%</span>\\n            </Space>\\n         </Space>\\n    </Form.Item>\\n\\n</Form.Item>\\n#\\n4. \u76F4\u63A5\u901A\u8FC7 Row Col \u63A7\u5236\u5E03\u5C40\\n<Row>\\n  <Col span={12}>\\n    <Form.Item />\\n  </Col>\\n    <Col span={12}>\\n      <Form.Item />\\n  </Col>\\n</Row>\\n5. labelCol wrapperCol \u53EF\u4EE5\u6307\u5B9Apx\u5BBD\u5EA6\\nlabelCol={{flex:'0 0 100px'}}\\nwrapperCol={{flex:'0 0 100px'}}\\nstyle={{ display: 'inline-flex',  width: 'calc(45% - 4px)' }}\\n# \u4F7F\u7528\u6805\u683C\u7684\\noffset push pull",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    id: "\\u62D6\\u52A8\\u6392\\u5E8F"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u62D6\\u52A8\\u6392\\u5E8F",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u62D6\\u52A8\\u6392\\u5E8F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "npm install react-sortable-hoc --save\\nnpm i array-move\\n# SortableTable.jsx\\nimport { Table } from 'antd';\\nimport { sortableContainer, sortableElement } from 'react-sortable-hoc';\\nimport { arrayMoveImmutable } from 'array-move';\\nimport React, { useState, useEffect } from 'react';\\n\\nconst SortableTable = (props) => {\\n  const { columns = [], data = [], DragHandle, ...restProps } = props;\\n  const [dataSource, setDataSource] = useState([]);\\n  useEffect(() => {\\n    props.getNewDataSource(dataSource);\\n  }, [dataSource]);\\n\\n  useEffect(() => {\\n    setDataSource(data);\\n  }, []);\\n\\n  const SortableItem = sortableElement((props) => <tr {...props} />);\\n  const SortableContainer = sortableContainer((props) => <tbody {...props} />);\\n\\n  const DraggableContainer = (props) => {\\n    const onSortEnd = ({ oldIndex, newIndex }) => {\\n      if (oldIndex !== newIndex) {\\n        const newData = arrayMoveImmutable(\\n          [].concat(dataSource),\\n          oldIndex,\\n          newIndex,\\n        ).filter((el) => !!el);\\n        setDataSource(newData);\\n      }\\n    };\\n    return (\\n      <SortableContainer\\n        useDragHandle\\n        disableAutoscroll\\n        helperClass=\\"row-dragging\\"\\n        onSortEnd={onSortEnd}\\n        {...props}\\n      />\\n    );\\n  };\\n\\n  const DraggableBodyRow = ({ className, style, ...restProps }) => {\\n    const index = dataSource.findIndex(\\n      (x) => x.index === restProps['data-row-key'],\\n    );\\n    return <SortableItem index={index} {...restProps} />;\\n  };\\n\\n  return (\\n    <>\\n      <Table\\n        pagination={false}\\n        dataSource={dataSource}\\n        columns={columns}\\n        rowKey=\\"index\\"\\n        components={{\\n          body: {\\n            wrapper: DraggableContainer,\\n            row: DraggableBodyRow,\\n          },\\n        }}\\n        {...restProps}\\n      />\\n    </>\\n  );\\n};\\nexport default SortableTable;\\n#\\nimport SortableTable from './SortableTable'\\nimport { sortableHandle } from 'react-sortable-hoc';\\nimport { MenuOutlined } from '@ant-design/icons';\\nimport React from 'react'\\n\\nconst Demo = () => {\\nconst DragHandle = sortableHandle(() => <MenuOutlined style={{ cursor: 'grab', color: '#999' }} />);\\nconst [reduceList, setReduceList] = React.useState([]);\\n\\n  let columns = [\\n    {\\n      title: 'Name',\\n      dataIndex: 'name',\\n    },\\n    {\\n      title: 'Sort',\\n      dataIndex: 'sort',\\n      width: 30,\\n      className: 'drag-visible',\\n      render: () => <DragHandle />,\\n    },\\n  ];\\n  const data = [\\n    {\\n      key: '1',\\n      name: \\"\u5168\u7AD9-\u65B0\u7528\u6237\u6EE1\u51CF\u6D3B\u52A8\\",\\n      code: 1,\\n      index: 0\\n    },\\n    {\\n      key: '2',\\n      name: \\"\u5168\u7AD9-\u6240\u6709\u7528\u6237\u6EE1\u6298\u6D3B\u52A8\\",\\n      code: 2,\\n      index: 1\\n    },\\n    {\\n      key: '3',\\n      name: \\"G\u7AD9\u4E0A\u65B0-\u7AD9\u70B9\u8BA2\u5355\u7ACB\u51CF\u6D3B\u52A8\\",\\n      code: 3,\\n      index: 2\\n    },\\n    {\\n      key: '4',\\n      name: \\"G\u7AD9\u4E0A\u65B0-\u7AD9\u70B9\u8BA2\u5355\u7ACB\u51CF\u6D3B\u52A8\\",\\n      code: 4,\\n      index: 3\\n    },\\n  ];\\n  return (\\n    <>\\n       <SortableTable\\n         data={data}\\n         columns={columns}\\n         DragHandle={DragHandle}\\n         getNewDataSource={(list) => setReduceList(list)}\\n         showHeader={false}\\n       />\\n    </>\\n  )\\n}\\nexport default Demo",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    id: "upload"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#upload",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "upload"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "#\\ninitialValue\\n#\\nconst fileList = [\\n    {\\n      uid: '-1',\\n      name: 'image.png',\\n      status: 'done',\\n      url: 'https://download.ococmall.com/cheshi-test/site-photo/2A970169120E486A9AD60735B5F9ACD6.jpeg',\\n    },\\n  ]\\n<Form.Item\\n            ...\\n            valuePropName=\\"fileList\\"\\n            getValueFromEvent={normFile}\\n            initialValue={fileList}\\n          >\\n            <Upload\\n              onPreview={onPreview}\\n              beforeUpload={(file) => {\\n                return false;\\n              }}\\n              name=\\"avatar\\"\\n              listType=\\"picture-card\\"\\n              maxCount={1}\\n              accept='image/*'\\n            >\\n              \u4E0A\u4F20\u56FE\u7247\\n      </Upload>\\n</Form.Item>\\n#\\n                  const onPreview = async file => {\\n    let src = file.url;\\n    if (!src) {\\n      src = await new Promise(resolve => {\\n        const reader = new FileReader();\\n        reader.readAsDataURL(file.originFileObj);\\n        reader.onload = () => resolve(reader.result);\\n      });\\n    }\\n    const image = new Image();\\n    image.src = src;\\n    const imgWindow = window.open(src);\\n    imgWindow.document.write(image.outerHTML);\\n  };",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    id: "\\u53EA\\u83B7\\u53D6\\u53D8\\u5316\\u7684\\u8868\\u5355"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u53EA\\u83B7\\u53D6\\u53D8\\u5316\\u7684\\u8868\\u5355",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u53EA\\u83B7\\u53D6\\u53D8\\u5316\\u7684\\u8868\\u5355"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<Form onFieldsChange={passChangeFormItems} />;\\nconst [changeFormItems, setChangeFormItems] = useState({});\\n\\nconst passChangeFormItems = (changedFields, allFields) => {\\n  // \u627E\u5230\u66F4\u6539\u9879 \u8FC7\u6EE4\u91CD\u590D\u9879 \u6DFB\u52A0\u6700\u65B0\u7684value\\n  let newChangeFieldsName = changedFields?.[0]?.name?.[0];\\n  let newChangeValue = changedFields?.[0]?.value;\\n  setChangeFormItems(preval => {\\n    let obj = { ...preval, [newChangeFieldsName]: newChangeValue };\\n    return obj;\\n  });\\n};",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "\\u8868\\u5355\\u7EC4\\u4EF6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u8868\\u5355\\u7EC4\\u4EF6",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u8868\\u5355\\u7EC4\\u4EF6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    id: "input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#input",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Input"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# Input\\n  <input\\n     // \u51FA\u73B0\u5220\u9664\u5FEB\u6377\u56FE\u6807\\n     allowClear\\n     // \u524D\u7F00\u56FE\u6807\\n     prefix\\n     // \u540E\u7F6E\u56FE\u6807\\n     suffix\\n     // \u662F\u5426\u6709\u8FB9\u6846\\n     bordered\\n     // \u524D\u7F6E\u6807\u7B7E addonAfter\\n     addonBefore={ReactNode}\\n     addonAfter={ReactNode}\\n     // \u63A7\u5236\\n     value={inputValue}\\n\\n\\n     type=\\"text\\"\\n     placeholder\\n     defaultValue=''\\n     maxLength={20}\\n     disabled\\n     style\\n     size\\n\\n     onChange\\n     // \u6309\u4E0B\u56DE\u8F66\u952E\u540E\\n     onPressEnter\\n/>\\n\\n# Input.Password\\n<Input.Password\\n  // \u81EA\u5B9A\u4E49\u9690\u85CF\u56FE\u6807\\n  iconRender={(visible)=> visible?\u9690\u85CF\u56FE\u6807:\u663E\u793A\u56FE\u6807 }\\n  // \u662F\u5426\u5F00\u542F\u5207\u6362\u56FE\u6807\\n  visibilityToggle={false}\\n/>\\n\\n# Input.TextArea\\n<Input.TextArea\\n  // \u81EA\u9002\u5E94\u9AD8\u5EA6\\n  autoSize={boolean | {minRows:2,maxRows:6}}\\n  // \u662F\u5426\u663E\u793A\u5B57\u6570\\n  showCount\\n  value\\n  onPressEnter\\n  onResize\\n\\n  allowClear\\n  bordered\\n  defaultValue\\n  maxLength\\n/>\\n# Input.Search\\n<Input.Search\\n  // \u662F\u5426\u6709\u786E\u8BA4\u56FE\u6807 \u53EF\u4EE5\u81EA\u5B9A\u4E49\u56FE\u6807\\n  enterButton={boolean|ReactNode}\\n  loading\\n  // \u70B9\u51FB\u641C\u7D22 \u6E05\u9664 \u6309\u4E0B\u56DE\u8F66\u952E\u65F6\u7684\u56DE\u8C03\\n  onSearch\\n/>\\n# Input.Group\\n<Input.Group\\n  // \u662F\u5426\u91C7\u7528\u7D27\u51D1\u6A21\u5F0F\\n  compact={boolean}\\n  size=\\"large|default|small\\"\\n/>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    id: "inputnumber"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#inputnumber",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Inputnumber"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# InputNumber\\n<InputNumber\\n  defaultValue\\n  min\\n  // \u6700\u5927\u4F4D\u6570\\n  max\\n  size\\n  disabled\\n  addonBefore\\n  addonAfter\\n  bordered\\n  // \u662F\u5426\u91C7\u7528\u952E\u76D8\u5FEB\u6377\u952E\\n  keyboard={boolean}\\n  // \u6700\u53F3\u8FB9\u64CD\u4F5C\u6309\u94AE\u6BCF\u6B21\u6DFB\u52A0\u7684\u6570\u503C\\n  step=\\"0.00000000000001\\"\\n  // \u652F\u6301\u9AD8\u7CBE\u5EA6\u5C0F\u6570 onChange\u4F1A\u8FD4\u56DEstring\\n  stringMode\\n  // \u5C0F\u6570\u70B9\u4F4D\u6570\\n  precision={1}\\n  // \u683C\u5F0F\u5316\\n  formatter={(value)=>}\\n  // \u683C\u5F0F\u5316\u7684\u683C\u5F0F\\n  parser={(value)=>}\\n\\n  onChange\\n/>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    id: "checkbox"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#checkbox",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Checkbox"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "const CheckboxGroup = Checkbox.Group;\\n\\n<Checkbox\\n  disabled\\n  // \u5168\u9009\u72B6\u6001\\n  indeterminate\\n  // \u9ED8\u8BA4\u9009\u4E2D\\n  defaultChecked\\n  onChange\\n>\\n   \u5168\u9009\\n</Checkbox>\\n\\n<CheckboxGroup\\n  option={['a','b','c']}\\n  // \u662F\u5426\u9009\u4E2D\\n  value={['a', 'b', 'c']}\\n  onChange={(checkArr)=>}\\n  diabled\\n/>\\n# \u5168\u9009demo\\nimport { useState } from 'react'\\nimport { Checkbox } from 'antd';\\nconst CheckboxGroup = Checkbox.Group;\\nconst Test = () => {\\n  const option = ['Apple', 'Pear', 'Orange']\\n  // \u5168\u9009\u6309\u94AE\u7684 \u72B6\u6001\\n  const [state, setState] = useState(false)\\n  // checkbox \u7684\u9009\u4E2D\u9879 \u6570\u7EC4\u6570\u636E\\n  const [data, setData] = useState([])\\n  const checkAll = () => {\\n    setState(!state)\\n    state ? setData([]) : setData(option)\\n  }\\n  return (\\n    <>\\n      <Checkbox\\n        indeterminate={state}\\n        onChange={checkAll}\\n      >\\n        \u5168\u9009\\n      </Checkbox>\\n      <CheckboxGroup\\n           onChange={(e) => setData(e)}\\n           options={option}\\n           value={data}\\n      />\\n    </>\\n  )\\n}",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    id: "select"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#select",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Select"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "#\\n<Select\\n  defaultValue='string|['a','b']'\\n  style\\n  disabled\\n  loading\\n  allowClear\\n  // \u53EF\u4EE5\u641C\u7D22\\n  showSearch\\n  // \u5B9A\u5236\u8FC7\u6EE4\u5B57\u6BB5\\n  optionFilterProp={children|label}\\n  // \u8FC7\u6EE4\u529F\u80FD\\n  filterOption={(input,option)=>option.children}\\n  // \u591A\u9009\\n  mode=\\"multiple\\"\\n  // \u5B9A\u5236\u70B9\u51FB\u540E\u7684value  \u6839\u636Eoption\u7684\u5C5E\u6027\\n  optionLabelProp={Option.name | lable ...}\\n  // \u53EF\u4EE5\u81EA\u5B9A\u4E49\u8F93\u5165\\n   mode=\\"tags\\"\\n  // \u5F00\u542F\u540E onChange\u53EF\u4EE5\u62FF\u5230 \u8282\u70B9\u7684 label\u5C5E\u6027 \u53C2\u6570\u4F1A\u53D8\u6210\u4E00\u4E2A\u5BF9\u8C61 \u5E76\u4E14\u53EF\u4EE5\u5BF9\u8C61\u5F0FsetFieldsValue\\n  labelInValue\\n  // \u81EA\u5B9A\u4E49\u6807\u7B7E\u6837\u5F0F\\n  tagRender={(props)=>}\\n  // \u5F53\u6CA1\u6570\u636E\u7684\u65F6\u5019\u663E\u793A\u7684\u5185\u5BB9\\n  notFoundContent={ReactNode}\\n  // \u662F\u5426\u9ED8\u8BA4\u9AD8\u4EAE\u7B2C\u4E00\u4E2A\u9009\u9879\\n  defaultActiveFirstOption={boolean}\\n  // \u662F\u5426\u628A label \u5C5E\u6027\u4E5F\u653E\u5728\u6570\u636E\u4E2D\\n  labelInValue\\n\\n  // \u5F53\u70B9\u51FB\u4E0B\u62C9\u65F6\u89E6\u53D1 \u5728\u8FD9\u91CC\u53D1\u8D77\u8BF7\u6C42\\n  onDropdownVisibleChange={(open)=>open&&Ajax}\\n\\n  onChange\\n  onSearch\\n>\\n  <Option value='' />\\n</Select>\\n# \u5206\u7EC4\\n<Select\\n>\\n  <OptGroup label='xxx'>\\n    <Option/>\\n  </OptGroup>\\n</Select>\\n\\n\\n# \u70B9\u51FB\u7981\u7528\u7684\u6309\u94AE\\ngetPopupContainer dom\u6E32\u67D3\u5230\u5F53\u524D\u9875\u9762\\n const handlebindDisabledElementsClick = () => {\\nconsole.Log(!form.getFieldValue('custName' ) ? .1abel)\\nif(!form.getFieldValue('custName')?.value) return false\\nconst container = document.getElementById('salesMgrName_Container')\\nconst disabledElements = [...container.getElementsByClassName('ant-select-item-option-disabled')] if(disabledElements.length != 0 && disabledElements[0] != undefined) {\\ndisabledElements.forEach\uFF08item \uFF1D\uFF1E item.onclick \uFF1D function () \uFF5B message.error\uFF08\uFF07\u672A\u5B8C\u6210\u7ECF\u529E\u4EBA\u5BA1\u6279\uFF07\uFF09\uFF5D\uFF09 }\\n }",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    id: "radio"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#radio",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Radio"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# Radio.Button\\n<Radio.Group\\n  options=[\\n    {label:\\"\\",value:\\"\\",disabled:true}\\n  ]\\n  optionType=\\"button\\"\\n  buttonStyle=\\"solid\\"\\n  name\\n  onChange\\n>\\n   <Radio.Button\\n     value=''\\n     defaultChecked={boolean}\\n     disabled\\n     checked\\n   />\\n</Radio.Group>\\n\\n# \u5782\u76F4\u7684\u5355\u9009\u6309\u94AE\\n<Radio.Group>\\n <Space direction=\\"vertical\\" />\\n   <Radio/>\\n</Radio.Group>\\n \u5305\u88F9\u6BCF\u4E00\u4E2A\u5B50\u9879\u5C31\u884C",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    id: "cascader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#cascader",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Cascader"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<Cascader\\n  option={\u6570\u636E}\\n  // \u81EA\u5B9A\u4E49\u6570\u636E\u6E90 \u5B57\u6BB5 \u9ED8\u8BA4\u662F children value label\\n  fieldNames={{\\n     label: 'name', value: 'code', children: 'items'\\n  }}\\n  onChange={onChange}\\n  placeholder\\n  size=\\"large|small\\"\\n  // \u7981\u7528\u6548\u679C\\n  \u5728\u6570\u636E\u91CC\u52A0\u5165 diabled:true\\n  defaultValue={['\u4E00\u7EA7','\u4E8C\u7EA7','\u4E09\u7EA7']}\\n  // \u89E6\u53D1\u65B9\u5F0F\\n  expandTrigger=\\"hover\\"\\n/>\\n\\n#\u52A0\u8F7D\u7701\u5E02\u533A\\n\\t:fieldNames=\\"item.fieldNames\\"\\n fieldNames: {\\n      label: 'name', value: 'code', children: 'cascadeDataVoList'\\n    },\\n    :showSearch='{ filter }'\\n\\tfilter: (inputValue, path) => {\\n\\t\\t\\treturn path.some(option => option.name.indexOf(inputValue) > -1);\\n\\t\\t},\\n# \u5F02\u6B65\\n\\n\\n# \u56DE\u663E\\nform.setFieldsValue([1,2,3])\\n\u901A\u8FC7displayRender\u81EA\u5B9A\u4E49\u663E\u793A\\n\u8868\u5355\u786E\u8BA4\u7684\u65F6\u5019 typeof\u5224\u65AD\u7C7B\u578B \u53D6\u503C",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    id: "upload-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#upload-1",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Upload"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    id: "\\u903B\\u8F91"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u903B\\u8F91",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u903B\\u8F91"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u903B\u8F91\\n// \u4E0A\u4F20\u903B\u8F91\\n1. \u6A21\u62DF\u70B9\u51FB\u4E8B\u4EF6\\n2. change \u4E8B\u4EF6 input type=file \u5143\u7D20\u7684 files[0] \u5C5E\u6027\\n3. \u751F\u6210\u5185\u5B58\u5730\u5740 URL.creareObjectURL(files[0])  \u8BA9img.src = xxx\\n4. \u4E0A\u4F20\u56FE\u7247\\n   A => \u4E8C\u8FDB\u5236\u5F62\u5F0F \u4EE5multpart/form-data\\n   B => \u8F6C\u6362\u6210 Base64\u4F4D\u5B57\u7B26\u4E32 \u4F20\u7ED9\u670D\u52A1\u5668\\n5. \u56FE\u7247\u88C1\u5207\\n   \u524D\u7AEF\u88C1\u5207 => \u5C06\u88C1\u5207\u533A\u57DF\u751F\u6210\u5355\u72EC\u7684\u56FE\u7247 \u83B7\u53D6\u56FE\u7247\u7684\u4E34\u65F6\u8DEF\u5F84\\n   \u540E\u7AEF\u88C1\u5207 => \u83B7\u53D6\u88C1\u5207\u6846\u76F8\u5BF9\u4E8E\u539F\u56FE\u7684\u5750\u6807 \u5C06\u88C1\u5207\u533A\u57DF\u5750\u6807\u4EE5\u53CA\u539F\u56FE\u4E34\u65F6\u6587\u4EF6\u4F20\u7ED9\u540E\u7AEF\u8FDB\u884C\u56FE\u7247\u88C1\u5207",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    id: "props-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#props-1",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "props"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# upload\\nimport { Upload } from 'antd';\\n<Upload\\n ## \u57FA\u7840\u5C5E\u6027\\n  // \u4E0A\u4F20\u7684\u5730\u5740\\n  // \u5982\u679C\u4E0D\u5199\u7684\u8BDD \u7EBF\u4E0A\u73AF\u5883\u4F1A\u9ED8\u8BA4\u8BF7\u6C42\u8FD9\u4E2A\u5730\u5740 \u9700\u8981\u540E\u7AEF\u5BF9\u4E00\u4E2A\u6307\u5B9A\u7684 \u63A5\u53E3 \u8FD4\u56DE\u4E00\u4E2A\u7A7A\u5B57\u7B26\u4E32\\n  action = \\"htttp://xxx\\"\\n  // \u8BBE\u7F6E\u8BF7\u6C42\u5934\\n  headers={{ authorization: 'xxx' }}\\n  // \u9650\u5236\u4E0A\u4F20\u6570\u91CF\\n  maxCount={1}\\n  // \u652F\u6301\u591A\u9009\\n  multiple\\n  // \u9650\u5236\u6587\u4EF6\u7C7B\u578B\\n  accept='.xls, .xlsx'\\n  // \u5173\u95ED\u6587\u4EF6\u4FE1\u606F\u663E\u793A\\n  showUploadList= { false }\\n  // \u4E0A\u4F20\u4E00\u4E2A\u6587\u4EF6\u5185\u6240\u6709\u6587\u4EF6\\n  directory\\n  // \u8FDB\u5EA6\u6761 \u548C \u663E\u793A\u98CE\u683C\\n  listType='text | picture | picture-card'\\n  // \u81EA\u5B9A\u4E49 \u6700\u53F3\u4FA7\u4EA4\u4E92\u56FE\u6807\\n  showUploadList = {\\n    showDownloadIcon: true,\\n    downloadIcon: 'download ',\\n    showRemoveIcon: true,\\n    removeIcon: <\u81EA\u5B9A\u4E49Icon onClick={e =>  />\\n  }\\n  // \u81EA\u5B9A\u4E49\u8FDB\u5EA6\u6761\u6837\u5F0F\\n  progress:{\\n    strokeColor: {\\n      '0%': '#108ee9',\\n      '100%': '#87d068',\\n    },\\n    strokeWidth: 3,\\n    format: percent =>\\n       \`\${parseFloat(percent.toFixed(2))}%\`,\\n  }\\n  // \u9ED8\u8BA4\u5DF2\u7ECF\u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868\\n  defaultFileList:[\\n    {\\n      uid:\\"1\\",\\n      name:\\"\\",\\n      status:\\"done\\",\\n      response:\\"Server Error 500\\",\\n      url:\\"xxx\\"\\n    }\\n  ]\\n\\n ## \u4E8B\u4EF6\\n  // \u6539\u53D8\u4E8B\u4EF6\\n- onChange={(info)=>\\n       info.file.status == 'uploading |done|error'}\\n  // beforeUpload \u9650\u5236\u56FE\u7247\u5927\u5C0F\u548C\u683C\u5F0F \u6216\u8005 \u52A0\u6C34\u5370\\n    // \u8FD9\u91CC return false \u5C31\u4E0D\u663E\u793A\u8FDB\u5EA6\u6761\\n    // \u9700\u8981\u5728\u8FD9\u91CC return false \u4E0D\u7136\u4F1A\u62A5405\\n- beforeUpload(file){\\n     file.type == \\"images/jpeg\\"\\n     file.size / 1024 / 1024 < 2\\n     return file.type === 'image/png' ? true\\n         : Upload.LIST_IGNORE; }\\n  //  \u9884\u89C8\u4E8B\u4EF6\\n  onPreview={(file)=>{}}\\n  //  \u79FB\u9664\u6587\u4EF6\u7684\u56DE\u8C03\\n  onRemove(file)\\n  // \u6587\u4EF6\u62D6\u62FD\u8FDB\u4E0A\u4F20\u533A\u57DF\u7684\u56DE\u8C03\\n  onDrop\\n  // \u4E0B\u8F7D\u6587\u4EF6\u7684\u56DE\u8C03\\n  onDownload\\n/>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    id: "\\u62D6\\u62FD-\\u4E0A\\u4F20\\u4E0E\\u6392\\u5E8F"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u62D6\\u62FD-\\u4E0A\\u4F20\\u4E0E\\u6392\\u5E8F",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u62D6\\u62FD \\u4E0A\\u4F20\\u4E0E\\u6392\\u5E8F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u62D6\u62FD\u4E0A\u4F20\\nconst { Dragger } = Upload;\\n<Dragger\\n  onDrop(e)=>{}\\n/>\\n# \u4E0A\u4F20\u5217\u8868\u62D6\u62FD\u6392\u5E8F\\n  react-dnd",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    id: "\\u4E0A\\u4F20\\u524D\\u88C1\\u5207\\u56FE\\u7247"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u4E0A\\u4F20\\u524D\\u88C1\\u5207\\u56FE\\u7247",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u4E0A\\u4F20\\u524D\\u88C1\\u5207\\u56FE\\u7247"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u4E0A\u4F20\u524D\u88C1\u5207\u56FE\u7247\\n yarn add antd-img-crop\\n import 'antd/es/modal/style';\\n import 'antd/es/slider/style';\\n import ImgCrop from 'antd-img-crop';\\n  <ImgCrop\\n    // \u6DFB\u52A0 \u65CB\u8F6C \u7F51\u683C \u529F\u80FD\\n    rotate\\n    grid\\n    // \u88C1\u5207\u5F62\u72B6 \u56FE\u7247\u8D28\u91CF\\n    shape='rect | round'\\n    quality={0-1}\\n    // \u5F39\u7A97\u6807\u9898 \u5F39\u7A97\u5BBD\u5EA6 \u5F39\u7A97\u786E\u5B9A\u6587\u5B57 \u5F39\u7A97\u53D6\u6D88\u6587\u5B57\\n    modalTitle='\u7F16\u8F91\u56FE\u7247'\\n    modalWidth={520}\\n    modalOk='\u786E\u5B9A'\\n    modalCancel='\u53D6\u6D88'\\n    // \u70B9\u51FB\u786E\u5B9A \u53D6\u6D88\u7684 \u4E8B\u4EF6\\n    onModalOK\\n    onModalCancel\\n  >\\n    <Upload>+ Add image</Upload>\\n  </ImgCrop>\\n\\n const onPreview = async file => {\\n    let src = file.url;\\n    if (!src) {\\n      src = await new Promise(resolve => {\\n        const reader = new FileReader();\\n        reader.readAsDataURL(file.originFileObj);\\n        reader.onload = () =>\\n             resolve(reader.result);\\n        });\\n    }\\n    const image = new Image();\\n    image.src = src;\\n    const imgWindow = window.open(src);\\n    imgWindow.document.write(image.outerHTML);\\n  };\\n\\n# \u70B9\u51FB\u6A21\u6001\u6846\u4F9D\u7136\u80FD\u70B9\u51FB\u53CA\u5176\u4ED6\u533A\u57DF\\npoint-events: none;\\ngetContainer \u6302\u8F7D\u5230\u5F53\u524D\u9875\u9762",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    id: "\\u56FE\\u7247\\u52A0\\u6C34\\u5370"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u56FE\\u7247\\u52A0\\u6C34\\u5370",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u56FE\\u7247\\u52A0\\u6C34\\u5370"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u56FE\u7247\u52A0\u6C34\u5370\\nbeforupload(file)=>{\\n return new Promise(resolve)=>{\\n    const reader = new FileReader();\\n    reader.readAsDataURL(file)\\n    reader.onload=()=>{\\n        const img = document.createElement('img');\\n        img.src = reader.result;\\n        img.onload=()=>{\\n          const canvas =\\n              document.createElement('canvas');\\n          canvas.width = img.naturalWidth;\\n          canvas.height = img.naturalHeight;\\n          const ctx = canvas.getContext('2d');\\n          ctx.drawImage(img, 0, 0);\\n          ctx.fillStyle = 'red';\\n          ctx.textBaseline = 'middle';\\n          ctx.font = '33px Arial';\\n          ctx.fillText('Ant Design', 20, 20);\\n          canvas.toBlob(resolve);\\n        }\\n    }\\n  }\\n}",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    id: "\\u8F6C\\u6362-bas64"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u8F6C\\u6362-bas64",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u8F6C\\u6362 bas64"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u8F6C\u6362 base 64\\nconst getBase64 = (img, cb) => {\\n  const reader = new FileReader();\\n  reader.addEventListener(\\"load\\", () => cb(reader.result));\\n  reader.readAsDataURL(img);\\n};\\ngetBase64(info.file.originFileObj,(imgUrl)=>{\\n  // \u5C06\u8F6C\u540E\u540E\u7684 \u56FE\u7247\u5730\u5740\u4FDD\u5B58\\n})",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    id: "excel-demo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#excel-demo",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "excel demo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "const normFile = (e) => {\\n    if (Array.isArray(e)) {\\n      return e;\\n    }\\n    return e && e.fileList;\\n  };\\n\\n<Form.Item\\n           valuePropName=\\"fileList\\"\\n           label=\\"\u9009\u62E9\u6587\u4EF6\\"\\n           name=\\"uploadFile\\"\\n           required\\n           getValueFromEvent={normFile}\\n >\\n       <Upload\\n           // name={'file'}\\n           listType='text'\\n           action=\\"/dpm/customerProblemImport/importExcel\\"\\n           accept=\\".xls, .xlsx\\"\\n           maxCount={1}\\n           beforeUpload={(file) => {\\n                  return true;\\n           }}\\n           showUploadList={{\\n                 showRemoveIcon: true,\\n                 removeIcon: (\\n               <CloseOutlined\\n    onClick={(e) => console.log(e, 'custom removeIcon event')}\\n               />\\n              ),\\n           }}\\n           progress={{\\n                  strokeColor: {\\n                    '0%': '#229DED',\\n                    '100%': '#229DED',\\n                  },\\n                  strokeWidth: 2,\\n                  format: (percent) =>\\n                      \`\${parseFloat(percent.toFixed(0))}%\`,\\n                  }}\\n                  onChange={(info) => {\\n     if (info.file.status !== 'uploading') {\\n                    console.log(info.file, info.fileList);\\n                  }\\n                  if (info.file.status === 'done') {\\n                    message.success(\\n                      \`\${info.file.name} file uploaded successfully\`,\\n                    );\\n                  } else if (info.file.status === 'error') {\\n                    message.error(\`\${info.file.name} file upload failed.\`);\\n                  }\\n                }}\\n              />\\n </Form.Item>\\n#\\n form.validateFields().then(()=>{\\n    const formData = new FormData()\\n\\n    formData.append('file', file[0].originFileObj);\\n\\n  dispatch({\\n          type: 'total/multiSheetUpload',\\n          payload: formData,\\n        });",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    id: "progress-\\u6837\\u5F0F"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#progress-\\u6837\\u5F0F",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "progress \\u6837\\u5F0F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: ".ant-progress-inner {\\n      margin-top: 20px;\\n      width: 235px;\\n    }\\n\\n    .ant-progress-text {\\n      display: none !important;\\n    }\\n\\n    .ant-upload-list-item-info {\\n      width: 270px;\\n\\n      .ant-upload-list-item-card-actions-btn.ant-btn-sm {\\n        height: 28px !important;\\n        line-height: 28px !important;\\n      }\\n    }\\n\\n    .ant-popover-inner {\\n      width: 200px;\\n    }\\n\\n    .ant-upload-list-item .anticon-close:hover {\\n      color: rgba(0, 0, 0, 0.45);\\n    }\\n\\n    .ant-upload-list-item-info::before {\\n      background-color: #fff;\\n    }\\n\\n    .ant-upload-list-item:hover .ant-upload-list-item-info {\\n      background: #fff;\\n    }\\n\\n    .ant-btn-text:hover,\\n    .ant-btn-text:focus {\\n      background-color: #fff;\\n    }",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "mentions"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#mentions",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Mentions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "rate"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#rate",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "slider"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#slider",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Slider"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "switch"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#switch",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Switch"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "timepicker"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#timepicker",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "TimePicker"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "transfer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#transfer",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Transfer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "treeselect"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#treeselect",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "TreeSelect"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u6570\\u636E\\u5C55\\u793A"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u6570\\u636E\\u5C55\\u793A",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u6570\\u636E\\u5C55\\u793A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "avatar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#avatar",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Avatar"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "#\\n<Avatar\\n  size=\\"large|small\\"\\n  shape=\\"circle|square\\"\\n  // \u6587\u5B57\u5934\u50CF\\n  gap=''\\n  src='string|ReactNode'\\n  icon='ReactNode'\\n/>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "badge"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#badge",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Badge"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "#\\n<Badge\\n  color=\\"\\"\\n  count={5}\\n  // \u6700\u5927\u6570\u5B57\\n  overflowCount={10}\\n  // \u53EA\u663E\u793A\u4E00\u4E2A\u5C0F\u7EA2\u70B9\\n  dot\\n  //\u5C0F\u5706\u70B9\u72B6\u6001\\n  status=\\"success|error| default| processing| warning\\"\\n  //\u72B6\u6001\u6587\u672C\\n  text=''\\n/>\\n# \u7EF8\u5E26\\n\\n\\n <Badge.Ribbon text=\\"\\" color='' placement=\\"start |end \\">\\n      <Card title=\\"Pushes open the window\\" size=\\"small\\" />\\n  </Badge.Ribbon>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "calendar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#calendar",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Calendar"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#card",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Card"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<Card\\n  bordered={false}\\n  // \u53F3\u4E0A\u89D2\u6E32\u67D3\u4E00\u4E2A\u5143\u7D20\\n  extra={<a />}\\n  title\\n  style={{}}\\n  bodyStyle={{}}\\n  headStyle={{}}\\n/>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "carousel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#carousel",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Carousel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "collapse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#collapse",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Collapse"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "comment"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#comment",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Comment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "descriptions"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#descriptions",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Descriptions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "#\\n<Descriptions\\n  bordered\\n  column={2}\\n  style\\n>\\n  <Descriptions.Item\\n    label\\n    span\\n    contentStyle\\n  />\\n<Descriptions/>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "empty"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#empty",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Empty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<Empty\\n  // \u5185\u7F6E\u56FE\u7247\\n  image={Empty.PRESENTED_IMAGE_DEFAULT}\\n/>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "image"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#image",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Image"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<Image\\n  width\\n  src\\n  placeholder\\n  preview\\n  src='error'\\n  // \u52A0\u9519\u9519\u8BEF\u56FE\u7247\\n  fallback=''\\n>\\n</Image>\\n#\\n  <Image.PreviewGroup preview>\\n    <Image/>\\n  </>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#list",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "List"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "popover"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#popover",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Popover"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "statistic"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#statistic",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Statistic"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<Statistic\\n  title=\\"\\"\\n  value={112893}\\n  // \u6570\u503C\u7684\u6837\u5F0F\\n  valueStyle={{}}\\n  // \u5C0F\u6570\u70B9\u4F4D\u6570\\n  precision={2}\\n  prefix={<Icon />}\\n  suffix={\u5143\u7D20\u8282\u70B9}\\n/>\\n # \u5012\u8BA1\u65F6\u7EC4\u4EF6\\n const { Countdown } = Statistic;\\nlet deadline=Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;\\n <Countdown title=\\"Countdown\\" value={deadline} onFinish={onFinish} format=\\"D \u5929 HH:mm:ss:SSS\\"/>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#table",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Table"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    id: "table-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#table-1",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Table"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<Table\\n# \u6837\u5F0F\u914D\u7F6E\\n  bordered={true}\\n  size={'default'|'middle'|'small'}\\n// fixed \u4E0D\u4F1A\u5F71\u54CD\u54CD\u5E94\u5F0F\u5E03\u5C40\\n  tableLayout={'auto'|'fixed'}\\n/*\\n  \u6591\u9A6C\u6761\u7EB9\\n  .light {background-color: #ffffff; }\\n  .dark {background-color: #fbfbfb;}\\n*/\\n  rowClassName={(record,index)=>index%2===0?'light':'dark'}\\n// \u4E0D\u663E\u793A\u8868\u5934\\n  showHeader={boolean}\\n  title={(\u5F53\u9875\u6570\u636E)=>'title'}\\n  footer={(\u5F53\u9875\u6570\u636E)=>'title'}\\n/*  colSpan \u5408\u5E76\u5355\u5143\u683C  index={0} \u6307\u5B9A\u662F\u7B2C\u51E0\u4E2A\\n <Table.Summary fixed>\\n         <Table.Summary.Row>\\n            <Table.Summary.Cell colSpan={2} index={0}>\\n               Summary\\n            </Table.Summary.Cell>\\n         </Table.Summary.Row>\\n </Table.Summary>\\n*/\\n  summary={(\u5F53\u9875\u6570\u636E)=>ReactNode}\\n\\n# \u57FA\u672C\u914D\u7F6E\\n  dataSource={dataSource}\\n  columns={columns}\\n  loading\\n  // \u5206\u9875\u7EC4\u4EF6, false \u4E0D\u663E\u793A\\n  pagination:{{\\n    total,\\n    current,\\n    pageSize,\\n    pageSizeOptions:[10, 20, 50, 100]\\n    showTotal: (total) => \`\u5171 \${total} \u6761\u6570\u636E\`,\\n    onChange=((currentPage)=>fetch)\\n  }}\\n  onChange={(pagination,filters,sorter,extra)}\\n\\n# \u53EF\u80FD\u4F1A\u7528\u5230\u7684\u914D\u7F6E\\n// \u5982\u679CdataSource\u6CA1\u6709key \u6307\u5B9A\u4E86rowKey \u5C31\u4F1A\u81EA\u52A8\u52A0\\n  rowKey={record => record.uid}\\n// \u9ED8\u8BA4\u6587\u6848\u8BBE\u7F6E\\n  locale={}\\n// \u7981\u7528\u6392\u5E8F\u6062\u590D\u5230\u9ED8\u8BA4\u72B6\u6001\\n  sortDirections=['ascend', 'descend', 'ascend']\\n// \u7528\u4E8E\u53EF\u7F16\u8F91\u83DC\u5355\\n  components={{\\n    body:{ cell:ReactNode,row:ReactNode }\\n  }}\\n/* \u624B\u98CE\u7434\u6548\u679C \u5C55\u5F00\u591A\u4F59\u4FE1\u606F\\n   expandedRowRender \u63A7\u5236\u663E\u793A\u5185\u5BB9\\n   rowExpandable \u63A7\u5236\u5C55\u5F00\u9879\\n*/\\n  expandable={{\\n    expandedRowRender:(record)=> ReactNode,\\n    rowExpandable:(record)=> record.name !== 'xxx'\\n  }}\\n// \u6BCF\u4E00\u884C\u7684\u89E6\u53D1\u4E8B\u4EF6 \u4F8B\u5982 click,hover \u67D0\u4E00\u884C\\n  onRow={record => {\\n    return {\\n      onClick: event => {},\\n      onDoubleClick: event => {},\\n      onContextMenu: event => {},\\n      onMouseEnter: event => {},\\n      onMouseLeave: event => {},\\n    };\\n  }}\\n// \u70B9\u51FB\u8868\u5934\u884C\\n  onHeaderRow={(columns, index) => {\\n    return {\\n      onClick: (e) => {},\\n    };\\n  }}\\n/* \u5F00\u542F\u8868\u683C\u884C\u5DE6\u8FB9\u529F\u80FD\u9879\\n   type             \u5DE6\u8FB9\u591A\u4E00\u4E2A\u5355\u9009\u6216\u8005\u591A\u9009\u6846\\n   selections       \u5F00\u542F \u5168\u9009 \u53CD\u9009 \u6E05\u7A7A \u81EA\u5B9A\u4E49\u529F\u80FD\\n   fixed:true       \u662F\u5426\u56FA\u5B9A\\n   columnWidth      \u6BCF\u4E00\u9879\u7684\u5BBD\u5EA6\\n   hideSelectAll    \u9690\u85CF\u5168\u9009\u83DC\u5355\\n   defaultSelectedRowKeys \u9ED8\u8BA4\u9009\u4E2D\u9879\\n   getCheckboxProps \u6BCF\u4E00\u9879\u7684\u9ED8\u8BA4Props\\n   renderCell       \u81EA\u5B9A\u4E49\u6E32\u67D3\u529F\u80FD\u6846\\n   selectedRowKeys  \u624B\u52A8\u63A7\u5236\u9009\u4E2D\u9879 \u914D\u5408onChange\\n   onChange         \u53D1\u751F\u6539\u53D8\u7684\u56DE\u8C03\\n*/\\n  rowSelection={{\\n    type: 'radio'| 'checkbox' ,\\n    selections: [\\n        Table.SELECTION_ALL,\\n        Table.SELECTION_INVERT,\\n        Table.SELECTION_NONE,\\n        {key:'',text:\\"\\",onSelect:(changeRowKeys)=>xxx}\\n    ]\\n    fixed: true,\\n    columnWidth:string | number,\\n    hideSelectAll:true,\\n    defaultSelectedRowKeys: string[] | number[],\\n    getCheckboxProps:(record)=>{\\n       disabled: record.name === 'Disabled User',\\n       name: record.name,\\n    }\\n    renderCell:(checked,record,index,originNode),\\n    selectedRowKeys:[],\\n    onChange:(selectedRowKeys,selectedRows)=>{\\n      setData(selectedRowKeys)\\n    },\\n  }}\\n# scroll\\n/* \u56FA\u5B9A\u5355\u5143\u683C\\n   \u6A2A\u5411\u9700\u914D\u5408 columns \u7684 fixed: 'left|right',\\n   \u5782\u76F4\u9700\u914D\u5408 columns \u7684 width:100 \u6307\u5B9A\u5BBD\u5EA6\\n   x:{ 'max-centent' } \u89E3\u51B3\u5BF9\u4E0D\u9F50\u7684\u95EE\u9898\\n*/\\n  scroll={{ x: 1800\uFF0Cy:240 }}\\n/>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    id: "columns"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#columns",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "columns"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u7EB5\\u5411\\u5355\\u5143\\u683C ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "https://segmentfault.com/a/1190000021124610"
  }, "https://segmentfault.com/a/1190000021124610"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "const columns = [\\n  {\\n# \u6837\u5F0F\u914D\u7F6E\\n    align:'left center right',\\n// \u8FD9\u884C\u5DE6\u8FB9\u7684\u90E8\u5206\u90FD\u4F1A\u56FA\u5B9A \u7ECF\u8FC7\u7684\u6BCF\u4E2A\u90FD\u9700\u8981\u52A0\\n    fixed:'left'|'right'|true,\\n    width:100,\\n    className:\\"\\",\\n// \u5355\u5143\u683C\u5408\u5E76\\n    colSpan:number,\\n// \u662F\u5426\u53EF\u7F16\u8F91 \u914D\u5408 tabel component\u91CD\u6784\\n    editable: true,\\n    ellipsis: boolean | {showTitle:false}\\n# \u57FA\u672C\u914D\u7F6E\\n    title:\\"\\",\\n    dataIndex:\\"\\",\\n    key:\\"\\",\\n/* \u6591\u9A6C\u6761\u7EB9\\n  let rowColorOdd = { style: { backgroundColor: '#fff' } }\\n  let rowColorEven = { style: { backgroundColor: 'red' } }\\n*/\\n    onCell: (record, rowIndex)\\n       => rowIndex % 2 === 0 ? rowColorOdd : rowColorEven\\n    render:(text,record,index)=>{\\n      return {\\n        children: ReactNode,\\n        props:{\\n          colSpan:3\\n        }\\n      }\\n    },\\n\\n\\n# filter\\n// \u81EA\u5B9A\u4E49\u5220\u9009\u83DC\u5355\\n    filters:[\\n      {text:\\"\\",value:\\"\\",children:[{...}]}\\n    ]\\n/* \u53D7\u63A7\u6A21\u5F0F \u5728table \u7684onChange\u56DE\u8C03\u51FD\u6570 \u66F4\u65B0\u53D7\u63A7\u6570\u636E\\n   \u503C\u4E3A\u5DF2\u7B5B\u9009\u7684 value \u6570\u7EC4 (filters.value)\\n*/\\n    filteredValue: string[],\\n// \u7B5B\u9009\u89C4\u5219 value\u662Ffilters.value\\n    onFilter:(value,record)=>{record.name.includes(value)}\\n\\n    defaultFilteredValue: string[]\\n// \u7B5B\u9009\u83DC\u5355\u6A21\u5F0F\\n    filterMode: 'tree' | 'menu',\\n    filterSearch: true\\n    filterIcon:(filtered)=> <Icon />\\n// \u591A\u4E2A\u5217\u7684\u7B5B\u9009 \u5408\u5E76\u751F\u6548 \u662F\u5426\u53EA\u5F71\u54CD\u672C\u5217\\n    filterMultiple: true\\n\\n/* \u81EA\u5B9A\u4E49\u7B5B\u9009\u83DC\u5355\\n({setSelectedKeys, selectedKeys, confirm, clearFilters})=>{}\\n*/\\n    filterDropdown:()=>ReactNode\\n// \u81EA\u5B9A\u4E49\u7B5B\u9009\u83DC\u5355 \u663E\u793A\u4E0E\u9690\u85CF\\n    filterDropdownVisible={boolean}\\n// \u81EA\u5B9A\u4E49\u7B5B\u9009\u83DC\u5355 \u5173\u95ED\u548C\u663E\u793A\u65F6\u5019\u7684\u56DE\u8C03\\n    onFilterDropdownVisibleChange=(visible)=>{}\\n// \u7B5B\u9009\u901A\u8FC7\u5B57\u6BB5\u7740\u8272\\n    filtered={true}\\n\\n\\n# sort\\n   defaultSortOrder: 'descend' | 'ascend',\\n// \u5F00\u542F\u6392\u5E8F\u65B9\u5F0F \u964D\u5E8F \u5347\u5E8F\\n   sortDirections:['descend','ascend'],\\n// \u53D7\u63A7\u6A21\u5F0F \u5728table \u7684onChange\u56DE\u8C03\u51FD\u6570 \u66F4\u65B0\u53D7\u63A7\u6570\u636E\\n   sortOrder: boolean | 'descend' | 'ascend',\\n/* \u6392\u5E8F\u89C4\u5219\\n   compare \u6392\u5E8F\u89C4\u5219\\n   multiple \u591A\u5217\u6392\u5E8F\u4F18\u5148\u7EA7 \u8C01\u6700\u5927\u90A3\u4E00\u5217\u89C4\u5219\u4F18\u5148\\n   sorter: {\\n      compare: (a, b) =>a.key - b.key,\\n      multiple: 1,\\n    },\\n*/\\n   sorter:(a, b) => a.key - b.key\\n  }\\n# \u8868\u5934\u5206\u7EC4\\n  children:[\\n    ...\\n  ]\\n]\\n# \u7B5B\u9009\u65F6\u95F4\\nsorter: (a,b) => {\\nconst time1 = moment(a.changeTime, 'YYYY.MM.dd HH:mm:ss')\\nconst time2 = moment(a.changeTime, 'YYYY.MM.dd HH:mm:ss')\\n}\\nreturn moment(time2).isAfter(moment(time1)) ? -1 : 1\\n},\\nsortDirections: ['descend', 'ascend']",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    id: "modal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#modal",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "modal"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "*fetch({payload:{page=1,pageSize=10}},{call,put}){\\n  const{data:{records=[],total}}=\\n     yield call(service.getPage,{pageNumber:page,pageSize })\\n  yield put({\\n        type: 'save',\\n        payload: {\\n          tabelList: records,\\n          page,\\n          pageSize,\\n          total,\\n        },\\n      });\\n    },\\n*upload({ payload: excelData }, { call, put }) {\\n      yield call(service.importExcel, excelData);\\n      message.success('\u4E0A\u4F20\u6210\u529F!');\\n      yield put({\\n        type: 'fetch',\\n        payload: {},\\n      });\\n    },\\nsubscriptions: {\\n    setup({ dispatch, history }) {\\n      return history.listen(({ pathname }) => {\\n        if (pathname === '/backStageMaintain/feedback') {\\n          dispatch({\\n            type: 'fetch',\\n            payload: {}\\n          });\\n        }\\n      });\\n    },\\n  },\\n    <Table\\n            columns={columns}\\n            dataSource={tabelList}\\n            rowKey=\\"id\\"\\n            pagination={{\\n              total,\\n              current: page,\\n              pageSize,\\n              onChange: (page, pageSize) => {\\n                dispatch({\\n                  type: 'feedback/fetch',\\n                  payload: { page, pageSize },\\n                });\\n              },\\n              showTotal: (total) => \`\u603B\u5171\${total}\u6761\u6570\u636E\`,\\n            }}\\n  />",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    id: "\\u53D7\\u63A7\\u7684-sort"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u53D7\\u63A7\\u7684-sort",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u53D7\\u63A7\\u7684 sort"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "#\\n<div\\n  className={styles['dropDown_container_zzz']}\\n  ref={refContainer}\\n/>\\n<Table\\n  getPopupContainer={() => refContainer?.current}\\n  onChange={handleTableChange}\\n/>\\n#\\n{\\n      key: 'availableOrderRange',\\n      filters: [\\n        { text: '\u5168\u90E8\u7AD9\u70B9', value: 0 },\\n        { text: '\u6307\u5B9A\u7AD9\u70B9', value: 1 },\\n      ],\\n      filteredValue: filterValueKey?.availableOrderRange,\\n      filterMultiple: false,\\n},\\n const [filterValueKey, setFilterValueKey] = useState(null);\\nconst refContainer = useRef(null);\\nconst handleTableChange = (pagination, sortFields) => {\\n   setFilterValueKey(sortFields);\\n}\\n#\\n.dropDown_container_zzz {\\n  :global {\\n    .ant-table-filter-dropdown-btns {\\n      display: none;\\n    }\\n  }\\n}\\n// \u91CD\u7F6E\u7684\u65F6\u5019 \u6307\u5B9A\u6BCF\u4E2A\u5BF9\u8C61\u5C5E\u6027\u4E3Anull\\n setFilterValueKey({\\n      activeStatus: null,\\n      ...\\n    });\\n#\\nfunction transformObj_ArrayToValue(obj) {\\n  let newObj = {};\\n  Object.keys(obj).forEach((key) => {\\n    if (obj[key] !== null) {\\n      newObj[key] = obj[key].length > 0 ? obj[key][0] : null;\\n    }\\n  });\\n  return newObj;\\n}",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    id: "checkbox-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#checkbox-1",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "checkbox"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// \u5F53\u70B9\u51FB\u53D7\u63A7\u7684sort\u6309\u94AE\u7684\u65F6\u5019 \u5728table onChange\u4E8B\u4EF6\u9700\u8981\\n// \u91CD\u7F6E\u9009\u4E2D\u7684checkbox\\n<Table\\n   rowKey={(record) => record.id}\\n   rowSelection={{\\n      type: 'checkbox',\\n      preserveSelectedRowKeys: true,\\n      selectedRowKeys: tableSelectKey,\\n      onChange: (selectedRowKeys, selectedRows) => {\\n        setTableSelectKey(selectedRowKeys);\\n      },\\n   }}\\n   pagination={{\\n            total,\\n            current: page,\\n            pageSize,\\n            showTotal: (total) => \`\u603B\u5171\${total}\u6761\u6570\u636E\`,\\n   }}\\n   onChange={handleTableChange}\\n/>\\n#\\nconst [tableSelectKey, setTableSelectKey] = useState([]);\\n\\n\u6B64\u65F6 tableSelectKey \u4E2D\u5B58\u50A8\u7684\u5C31\u662F rowKey \u6307\u5B9A\u7684\u5B57\u6BB5",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "\\u5408\\u5E76\\u5355\\u5143\\u683C"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u5408\\u5E76\\u5355\\u5143\\u683C",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u5408\\u5E76\\u5355\\u5143\\u683C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "const sharedOnCell = (_, index) => {\\n  if (index === 4) {\\n    return { colSpan: 0 };\\n  }\\n};\\nconst columns = [\\n  {\\n    title: 'Name',\\n    dataIndex: 'name',\\n    render: (text, row, index) => <a>{text}</a>,\\n    onCell: (_, index) => ({\\n      colSpan: index < 4 ? 1 : 3,\\n    }),\\n  },\\n  {\\n    title: 'Age',\\n    dataIndex: 'age',\\n    onCell: sharedOnCell,\\n  },\\n  {\\n    title: 'Home phone',\\n    colSpan: 2,\\n    dataIndex: 'tel',\\n    onCell: sharedOnCell,\\n  },\\n];",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "tabs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#tabs",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Tabs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "#\\n<Tabs\\n  activeKey\\n  defaultActiveKey\\n  // \u5C45\u4E2D\u663E\u793A\\n  centered\\n  size\\n  tabPosition\\n  type=\\"line|card|editable-card\\"\\n\\n  onChange\\n>\\n  <TabPane\\n   tab={ReactNode}\\n   key\\n   disabled\\n  >\\n  </TabPane>\\n</Tabs>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#tag",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Tag"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<Tag\\n  closable\\n  color=\\"success|processing|error|warning|default\\"\\n  visible\\n  icon={ReactNode}\\n  onClose\\n/>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "timeline"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#timeline",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Timeline"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "#\\n <Timeline>\\n   <Timeline.Item\\n     color=''\\n   />\\n </Tooltip>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "tooltip"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#tooltip",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Tooltip"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<Tooltip\\n   title=\\"\u63D0\u793A\u6587\u5B57\\"\\n   placement=\\"topLeft\\"\\n   // \u7BAD\u5934\u6307\u5411\u4E2D\u5FC3\\n   arrowPointAtCenter\\n   color\\n>\\n    ...\\n</Tooltip>\\n\\n\\n<span className={styles.left} style={remark && remark.length > 13 ? {} : remark.length == 13 ? { marginRight: 10 } : { marginRight: (13 - remark.length) * 25 }}>\\n            {remark && remark.length > 13 ?\\n              (< Tooltip title={remark}>\\n                <span>{remark.slice(0, 13) + '...' ?? '--'}</span>\\n              </Tooltip>\\n              ) : remark ?? '--'}\\n          </span>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "tree"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#tree",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Tree"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<Tree\\n   treeData={}\\n   // \u7981\u7528\u6574\u884C\\n   \u5728\u6570\u636E\u91CC\u9762\u52A0\u5165 disabled:true\\n   // \u7981\u7528 checkbox\\n   \u5728\u6570\u636E\u91CC\u9762\u52A0\u5165 disableCheckbox:true\\n   // \u81EA\u5B9A\u4E49\u56FE\u6807\\n   \u5728\u6570\u636E\u91CC\u9762\u52A0\u5165 icon\\n\\n   // \u663E\u793A\u590D\u9009\u6846\\n   checkable\\n   // \u9ED8\u8BA4\u5C55\u5F00\u6240\u6709\u8282\u70B9\\n   defaultExpandAll\\n\\n   // \u70B9\u51FB\u590D\u9009\u6846 \u89E6\u53D1\\n   onCheck={(keys,e)=>}\\n   // \u5F53\u524D\u9009\u4E2D\u590D\u9009\u6846\u7684\u8282\u70B9\\n   checkedKeys\\n/>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u53CD\\u9988"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u53CD\\u9988",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u53CD\\u9988"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "alert"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#alert",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Alert"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "import { Alert } from 'antd';\\n<Alert\\n   message=\\"\\"\\n   type=\\"success info warning error\\"\\n   description\\n\\n   showIcon\\n   closable\\n   onClose={()=>}\\n/>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "drawer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#drawer",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Drawer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "#\\nimport { Drawer } from 'antd';\\n<Drawer\\n   title=\\"Basic Drawer\\"\\n   placement=\\"right top bottom left\\"\\n   width={300}\\n   height\\n   mask={boolean}\\n   closable={boolean}\\n   visible={boolean}\\n\\n   footer\\n\\n   onClose={()=>}\\n>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "message"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#message",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Message"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "message.info(\\"\u5185\u5BB9\\",time);\\n      .success({content:\\"\u6587\u672C\u5185\u5BB9\\",className:\\"\\",style:{}},time)\\n      .error\\n      .warning\\n      .loading()",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "modal-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#modal-1",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Modal"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<Modal\\n   title=''\\n   // \u63A7\u5236\u4F4D\u7F6E\\n   centered\\n   style:{{top:0}}\\n\\n   maskClosable\\n   visible={boolean}\\n   width={1000}\\n\\n   okText=\\"\u786E\u8BA4\\"\\n   cancelText=\\"\u53D6\u6D88\\"\\n   // \u662F\u5426\u7981\u7528\u6309\u94AE\\n   okButtonProps={{ disabled: true }}\\n   cancelButtonProps={{ disabled: true }}\\n   onOk\\n   onCancel\\n   footer={null}\\n/>\\n\\n\\n#\\nModal.success({\\n    title:\\"\\",\\n    content: '\u53EF\u4EE5\u653E\u5143\u7D20\u6807\u7B7E \u6216string',\\n  });\\n// \u624B\u52A8\u5173\u95ED\\nmodal.destroy();\\n\\n# modal \u786E\u5B9A\u6309\u94AE\u53D8\u6210\u8868\u5355\u7684\u786E\u5B9A\\nform.validateFields()\\n  .then((values)=>{})\\n  .catch((err)=>)",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "notification"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#notification",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Notification"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u5916\u89C2\u6837\u5F0F\\nnotification[\\"success info warning error\\"]({\\n      message: \\"\\",\\n      description:\\"\\"\\n      onClick:()=>{\\n      },\\n      icon:ReactNode,\\n      className:\\"\\",\\n      stule:{},\\n      // \u5173\u95ED\u7684\u65F6\u95F4\\n      duration: 0,\\n      placement:'bottomRight bottomLeft topRight topLeft',\\n      // \u589E\u52A0 dom\\n      btn:ReactNode(notification.close(key))\\n      key:\`open\${Date.now()}\`\\n})\\n\\n\\n\\n\\n# \u4F4D\u7F6E\\nplacement:\\"bottomRight\\"\\nbottomLeft\\ntopRight\\ntopLeft\\n# \u589E\u52A0 dom\\nbtn\\nkey",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "popconfirm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#popconfirm",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Popconfirm"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<Popconfirm\\n   title:\\"\\",\\n   onText='Yes'\\n   cancelText=\\"No\\"\\n\\n   onConfirm\\n   onCancel\\n/>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "progress"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#progress",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Progress"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<Progress\\n  size\\n  // \u60AC\u6D6E\u63D0\u793A\u5185\u5BB9\\n  title\\n  percent={}\\n  status=\\"active exception\\"\\n  // \u63D0\u793A\u56FE\u6807\u6216\u8005 \u767E\u5206\u6BD4\\n  showInfo={false}\\n  format={percent => \u81EA\u5B9A\u4E49\u63D0\u793A\u6587\u672C}\\n  strokeColor={{ form: '\u989C\u8272', to: '\u989C\u8272' }}\\n  success={{ percent: 30 }}\\n  type=\\"circle dashboard\\" // dashboard \u662F\u6709\u7F3A\u53E3\u7684\\n  gapDegree={30} // \u4FEE\u6539 dashboard \u7F3A\u53E3\u89D2\u5EA6\\n  strokeLinecap=\\"square\\" // dashboard \u8FB9\u7F18\u7684\u68F1\u89D2\\n  steps={3} // \u5E26\u6B65\u9AA4\u7684\u8FDB\u5EA6\u6761\\n/>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "result"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#result",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Result"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<Result\\n   status=\\"success\\",\\n   title:\\"\\",\\n   subTitle:\\"\\",\\n   extra={[ DOM\u5143\u7D20  ]}\\n />",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "skeleton"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#skeleton",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Skeleton"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<Skeleton avatar paragraph={{ rows: 4 }} active />",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "spin"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#spin",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Spin"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<Spin\\n   tip=\\"Loading...\\"\\n   indicator={ <icon/> } />\\n   size\\n   // \u5C06\u5185\u90E8\u5143\u7D20\u4E5F\u53D8\u6210\u52A0\u8F7D\u4E2D \u9576\u5D4C\\n   spinning={true}\\n/>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u5176\\u4ED6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u5176\\u4ED6",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u5176\\u4ED6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "anchor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#anchor",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Anchor"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "import { Anchor } from 'antd';\\nconst { Link } = Anchor;\\n<Link href=\\"#\\">",
    lang: "typescript"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "backtop"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#backtop",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "BackTop"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "import { BackTop } from 'antd';\\n<BackTop />\\n# \u81EA\u5B9A\u4E49\u6837\u5F0F \u6700\u592740px*40px\\n<BackTop >\\n    <div style={xxx} />\\n</BackTop>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "configprovider"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#configprovider",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "ConfigProvider"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u5168\u5C40\u914D\u7F6E\\nimport { ConfigProvider } from 'antd';\\n  <ConfigProvider direction=\\"rtl\\">\\n    <App />\\n  </ConfigProvider>",
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

//# sourceURL=webpack:///./src/Article/9.react/antdDesign/index.md?`)}}]);
