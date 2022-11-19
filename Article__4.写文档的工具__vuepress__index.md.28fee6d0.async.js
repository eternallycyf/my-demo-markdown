(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{"x+fW":function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
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
    id: "vuepress"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#vuepress",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "VuePress"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u51C6\\u5907\\u9636\\u6BB5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u51C6\\u5907\\u9636\\u6BB5",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u51C6\\u5907\\u9636\\u6BB5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#start",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "start"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u672C\u5730\\nnpm install -g vuepress\\nmkdir docs && echo '# Hello VuePress' > docs/README.md\\n  \\"scripts\\": {\\n    \\"start\\": \\"vuepress dev docs\\",\\n    \\"build\\": \\"vuepress build docs\\"\\n  },\\n./docs/.vuepress/config.js\\n// \u5305\u542B\u4E00\u4E2A\u641C\u7D22\u6846\u548C \u6700\u5DE6\u8FB9\u7684\u6587\u5B57\\nmodule.exports = {\\n  title: 'Hello VuePress',\\n  description: 'Just playing around',\\n  base: \\"/blog/\\"\\n}\\nyarn start\\nhttp://localhost:8081/\\n# \u914D\u7F6E\u66F4\u6539\u6709\u65F6\u9700\u8981\u91CD\u65B0\u542F\u52A8",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "github"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, ".gitlab-ci.yml")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "image: node:9.11.1\\n\\npages:\\n cache:\\n   paths:\\n   - node_modules/\\n\\n script:\\n - yarn install # npm install\\n - yarn docs:build # npm run docs:build\\n artifacts:\\n   paths:\\n   - public\\n only:\\n - master",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, ".travis.yml")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "language: node_js\\nnode_js:\\n  - lts/*\\ninstall:\\n  - yarn install # npm ci\\nscript:\\n  - yarn docs:build # npm run docs:build\\ndeploy:\\n  provider: pages\\n  skip_cleanup: true\\n  local_dir: docs/.vuepress/dist\\n  github_token: $GITHUB_TOKEN\\n  keep_history: true\\n  on:\\n    branch: master",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "deploy.sh", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "bash deploy.sh")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "#!/usr/bin/env sh\\n\\n# \u786E\u4FDD\u811A\u672C\u629B\u51FA\u9047\u5230\u7684\u9519\u8BEF\\nset -e\\n\\n# \u751F\u6210\u9759\u6001\u6587\u4EF6\\nnpm run docs:build\\n\\n# \u8FDB\u5165\u751F\u6210\u7684\u6587\u4EF6\u5939\\ncd docs/.vuepress/dist\\n\\ngit init\\ngit add -A\\ngit commit -m 'deploy'\\n\\ngit push -f git@github.com:eternallycyf/blog.git master:gh-pages\\n\\ncd -",
    lang: "js"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Github"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "gh-pages /root",
    lang: "unknown"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u76EE\\u5F55\\u7ED3\\u6784"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u76EE\\u5F55\\u7ED3\\u6784",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u76EE\\u5F55\\u7ED3\\u6784"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "#  \u9ED8\u8BA4\u9875\u9762\u8DEF\u7531\u7ED3\u6784\\n ./docs/README.md\\t           \u8DEF\u7531:   /\\n ./docs/guide/README.md      \u8DEF\u7531:   guide\\n\\n\u251C\u2500\u2500 docs\\n\u2502   \u251C\u2500\u2500 .vuepress (\u53EF\u9009\u7684)\\n\u2502   \u2502   \u251C\u2500\u2500 components (\u53EF\u9009\u7684)\\n\u2502   \u2502   \u251C\u2500\u2500 theme (\u53EF\u9009\u7684)\\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 Layout.vue\\n\u2502   \u2502   \u251C\u2500\u2500 public (\u53EF\u9009\u7684) \u56FE\u7247\u653E\u5728\u8FD9\u91CC\\n\u2502   \u2502   \u251C\u2500\u2500 styles (\u53EF\u9009\u7684)\\n\u2502   \u2502   \u2502   \u251C\u2500\u2500 index.styl\\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 palette.styl\\n\u2502   \u2502   \u251C\u2500\u2500 templates (\u53EF\u9009\u7684, \u8C28\u614E\u914D\u7F6E)\\n\u2502   \u2502   \u2502   \u251C\u2500\u2500 dev.html\\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 ssr.html\\n\u2502   \u2502   \u251C\u2500\u2500 config.js (\u53EF\u9009\u7684)\\n\u2502   \u2502   \u2514\u2500\u2500 enhanceApp.js (\u53EF\u9009\u7684)\\n\u2502   \u2502\\n\u2502   \u251C\u2500\u2500 README.md\\n\u2502   \u251C\u2500\u2500 guide\\n\u2502   \u2502   \u2514\u2500\u2500 README.md\\n\u2502   \u2514\u2500\u2500 config.md\\n\u2502\\n\u2514\u2500\u2500 package.json\\n\\ndocs/.vuepress: \u7528\u4E8E\u5B58\u653E\u5168\u5C40\u7684\u914D\u7F6E\u3001\u7EC4\u4EF6\u3001\u9759\u6001\u8D44\u6E90\u7B49\u3002\\ndocs/.vuepress/components: \u8BE5\u76EE\u5F55\u4E2D\u7684 Vue \u7EC4\u4EF6\u5C06\u4F1A\u88AB\u81EA\u52A8\u6CE8\u518C\u4E3A\u5168\u5C40\u7EC4\u4EF6\u3002\\ndocs/.vuepress/theme: \u7528\u4E8E\u5B58\u653E\u672C\u5730\u4E3B\u9898\u3002\\ndocs/.vuepress/styles: \u7528\u4E8E\u5B58\u653E\u6837\u5F0F\u76F8\u5173\u7684\u6587\u4EF6\u3002\\ndocs/.vuepress/styles/index.styl: \u5C06\u4F1A\u88AB\u81EA\u52A8\u5E94\u7528\u7684\u5168\u5C40\u6837\u5F0F\u6587\u4EF6\uFF0C\u4F1A\u751F\u6210\u5728\u6700\u7EC8\u7684 CSS \u6587\u4EF6\u7ED3\u5C3E\uFF0C\u5177\u6709\u6BD4\u9ED8\u8BA4\u6837\u5F0F\u66F4\u9AD8\u7684\u4F18\u5148\u7EA7\u3002\\ndocs/.vuepress/styles/palette.styl: \u7528\u4E8E\u91CD\u5199\u9ED8\u8BA4\u989C\u8272\u5E38\u91CF\uFF0C\u6216\u8005\u8BBE\u7F6E\u65B0\u7684 stylus \u989C\u8272\u5E38\u91CF\u3002\\ndocs/.vuepress/public: \u9759\u6001\u8D44\u6E90\u76EE\u5F55\u3002\\ndocs/.vuepress/templates: \u5B58\u50A8 HTML \u6A21\u677F\u6587\u4EF6\u3002\\ndocs/.vuepress/templates/dev.html: \u7528\u4E8E\u5F00\u53D1\u73AF\u5883\u7684 HTML \u6A21\u677F\u6587\u4EF6\u3002\\ndocs/.vuepress/templates/ssr.html: \u6784\u5EFA\u65F6\u57FA\u4E8E Vue SSR \u7684 HTML \u6A21\u677F\u6587\u4EF6\u3002\\ndocs/.vuepress/config.js: \u914D\u7F6E\u6587\u4EF6\u7684\u5165\u53E3\u6587\u4EF6\uFF0C\u4E5F\u53EF\u4EE5\u662F YML \u6216 toml\u3002\\ndocs/.vuepress/enhanceApp.js: \u5BA2\u6237\u7AEF\u5E94\u7528\u7684\u589E\u5F3A\u3002",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "vuepress-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#vuepress-1",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "VuePress"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u57FA\\u7840\\u914D\\u7F6E"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u57FA\\u7840\\u914D\\u7F6E",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u57FA\\u7840\\u914D\\u7F6E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u4E3B\u9875\u7684\u56FE\u7247\\n/docs/README.md\\nheroImage: ./assets/logom.png\\n// \u56FE\u7247\u4F4D\u7F6E /docs/.vuepress/pubilc/assets/xxx.png\\n# \u4E3B\u9875nav \u5DE6\u4E0A\u89D2 \u56FE\u7247\\n./vuepress/config.js\\nthemeConfig:{\\n  logo: '/assets/favicon.ico',\\n}\\n# favicon.ico\\nconfig.js\\nhead:[['link', { rel: 'icon', href: 'favicon.ico' }]],\\n# nav\\n// \u4E00\u7EA7link \u5BF9\u5E94\u7684\u7EC4\u4EF6\u8DEF\u5F84\u662F  ./docs/document/README.md\\n// \u53EF\u4EE5\u7EE7\u7EED\u5D4C\u5957\\n  themeConfig: {\\n    nav: [\\n      { text: 'Home', link: '/document/' },\\n    ]\\n  }\\n//\u4E8C\u7EA7 link \u5BF9\u5E94\u7684\u7EC4\u4EF6\u8DEF\u5F84\u662F ./docs/more/React/README.md\\n  {\\n            text: 'more',\\n            items: [\\n   { text: 'react', link: '/more/React/' },\\n   { text: 'react Hook', link: '/more/ReactHook/' },\\n            ]\\n          },\\n# SideBar\\n    sidebar: {\\n          '/': [{title: 'sda',},{title: 'stydy',}],\\n          '/zh': [{title: '\u4E60',}, { title: '\u5B66\u4E60',}],\\n        }\\n\\n sidebar: [\\n          {title: '\u524D\u7AEF',},\\n          {title: '\u5B66\u4E60',}\\n        ]\\n  // \u4FA7\u8FB9\u680F\u81EA\u52A8\u751F\u6210\\n  '/more/React/': [\\n    {\\n      title: '\u7B2C\u4E00\u4E2A\u4FA7\u8FB9\u680F', // \u8FD9\u662F\u5FC5\u586B\u7684\\n      collapsable: true,\\n      path: \\"/more/React/\\",\\n      children: [\\n        ['/more/React/1/', '\u7B2C\u4E00\u4E2A\u4FA7\u8FB9\u680F\u7684\u5B50\u4FA7\u8FB9\u680F'],\\n      ]\\n    },\\n  ],\\n// children \u662F\u4E00\u4E2A\u6570\u7EC4 \u5B50\u4FA7\u8FB9\u680F\u4E5F\u662F\u6570\u7EC4\\n//  ./docs/more/React/README.md\\n//  ./docs/more/React/1/README.md\\n\\n// \u4F46\u662F\u6CE8\u610F \u53EA\u80FD ## \u4EE5\u4E0B\u7684 \u6700\u5927\u7684\u4E0D\u884C",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "locales"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#locales",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "locales"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u76EE\u5F55\u7ED3\u6784\\n./docs\\n .vuepress\\n    dist\\n    public\\n    style\\n    config.js\\n guide\\n zh // \u5728zh\u76EE\u5F55\u4E0B \u590D\u5236 docs\u6587\u4EF6\u4E0B\u9664\u4E86.vue press\u4E4B\u5916\u6240\u6709\u6587\u4EF6\\n   guide\\n   README.md // \u5C31\u662Fdocs\u6587\u4EF6\u4E0B\u7684md\\n README.md\\n# config.js\\n  locales: {\\n    '/': { lang: 'en-US', title: 'Pluviophobe', description: 'Pluviophobe' },\\n    '/zh/': { lang: 'zh-CN', title: 'Pluviophobe', description: '\u6015\u96E8\u7684\u4EBA' }\\n  },\\n\\n themeConfig:{\\n   locales:{\\n        // \u591A\u8BED\u8A00\u4E0B\u62C9\u83DC\u5355\u7684\u6807\u9898\\n        selectText: '\u9009\u62E9\u8BED\u8A00',\\n        // \u8BE5\u8BED\u8A00\u5728\u4E0B\u62C9\u83DC\u5355\u4E2D\u7684\u6807\u7B7E\\n        label: '\u7B80\u4F53\u4E2D\u6587',\\n        // \u7F16\u8F91\u94FE\u63A5\u6587\u5B57\\n        editLinkText: '\u5728 GitHub \u4E0A\u7F16\u8F91\u6B64\u9875',\\n        // Service Worker \u7684\u914D\u7F6E\\n        serviceWorker: {\\n          updatePopup: {\\n            message: \\"\u53D1\u73B0\u65B0\u5185\u5BB9\u53EF\u7528.\\",\\n            buttonText: \\"\u5237\u65B0\\"\\n          }\\n        },\\n        // \u5F53\u524D locale \u7684 algolia docsearch \u9009\u9879\\n        algolia: {},\\n     '/':[\\n       xxx\\n     ],\\n     '/zh':[\\n       xxx\\n       // \u8FD9\u91CC\u7684\u6240\u6709\u8DEF\u5F84 \u9700\u8981\u52A0\u4E0A /zh/ \u524D\u7F00\\n     ]\\n   }\\n }",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "markdown-\\u6269\\u5C55"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#markdown-\\u6269\\u5C55",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "markdown \\u6269\\u5C55"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u94FE\u63A5\\n[Home](/)\\n[foo](/foo/)\\n[foo header](./#heading)   \u8DF3\u8F6C\u5E76\u951A\u70B9\u5B9A\u4F4D\\n# \u76EE\u5F55\\n[[toc]]\\n# \u8868\u683C\\n| Tables        | Are           | Cool  |\\n| ------------- | ------------- | ----- |\\n| col 3 is      | right-aligned | $1600 |\\n# \u8868\u60C5\\nhttps://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json\\n:cn:\\n# \u63D0\u793A\u6846\\n::: tip \u81EA\u5B9A\u4E49\u6807\u9898\\n//  warning || danger || details\\n\u8FD9\u662F\u4E00\u4E2A\u63D0\u793A\\n\`\`\`js\\nimport\\n\`\`\`\\n:::\\n# \u4EE3\u7801\u6BB5\u9AD8\u4EAE\\n\`\`\`js {1,2,6-7}\\n\`\`\`\\n# \u6587\u4EF6\\n---\\ntitle: Blogging Like a Hacker\\nlang: en-US\\n---",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "sass"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#sass",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "sass"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "yarn add -D sass-loader@7.3.1 node-sass",
    lang: "unknown"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u8981\\u5199\\u4EC0\\u4E48"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u8981\\u5199\\u4EC0\\u4E48",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u8981\\u5199\\u4EC0\\u4E48"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "#\\n\u9996\u9875\\n\u6307\u5357\\n\u5F00\u53D1\u89C4\u8303\\n\\njsAPI\\n    canvas\\n    ajax\\ncss\\n    css\\n    less\\n    sass\\nnode\\n    express\\n    koa\\ntypescript\\nvue\\n   vue\\n   vue3.0\\n   vue-router\\n   vuex\\n   elementUI\\n   vant\\nreact\\n   react\\n   react-hook\\n   react-router\\n   redux\\n   antdesign\\n   \u6211\u7684\u7EC4\u4EF6\u5E93\\numi\\n   dva\\n\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\\n   \u539F\u751F\u5C0F\u7A0B\u5E8F\\n   uniapp\\n   taro\\n\u8DE8\u7AEF\u6846\u67B6\\n   reactnative\\n   uniapp\\n   flutter\\nElectron\\nSSR\\n   nextJS\\n   nuxt.js\\n\u6E90\u7801\u89E3\u6790\\n      axiox\\n      redux\\n\u6784\u5EFA\u5DE5\u5177\\n      webpack\\n      npm\\n      git\\n      jestjs\\n      docker\\n\u5E38\u7528\u5DE5\u5177\u5E93\\n      lodash\\n      jquery\\n      echarts\\n      ant-react-charts\\n      ant-react-map\\n      axios\\n      vue-press\\n\u9009\u62E9\u8BED\u8A00\\ngithub",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "bug"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#bug",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "bug"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Vuepress \\u65E0\\u6CD5\\u8BBE\\u7F6E\\u4E0A\\u6B21\\u66F4\\u65B0\\u65F6\\u95F4")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "/Users/eternallycyf/Documents/GitHub/case/pluviophobe-vue-document/node_modules/@vuepress/plugin-last-updated/index.js\\n      const lastUpdated = dateFormat(timestamp, 'yyyy-MM-dd hh:mm:ss')",
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

//# sourceURL=webpack:///./src/Article/4.%E5%86%99%E6%96%87%E6%A1%A3%E7%9A%84%E5%B7%A5%E5%85%B7/vuepress/index.md?`)}}]);
