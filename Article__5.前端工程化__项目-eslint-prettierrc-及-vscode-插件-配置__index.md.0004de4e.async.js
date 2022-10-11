(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{xYqL:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "eslint"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#eslint",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Eslint"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u53C2\\u8003\\u94FE\\u63A5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "https://github.com/Hibop/Hibop.github.io/issues/34"
  }, "https://github.com/Hibop/Hibop.github.io/issues/34"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "prettier"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#prettier",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "prettier"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# npm i prettier -D\\n\\n# script\\n  \\"scripts\\": {\\n    \\"prettier\\": \\"prettier --write '**/*.{js,jsx,tsx,ts,less,md,json}'\\",\\n    \\"eslint\\": \\"eslint .\\"\\n  },\\n\\"lint-staged\\": {\\n    \\"*.{js,jsx,less,md,json}\\": [\\n      \\"prettier --write\\"\\n    ],\\n    \\"*.ts?(x)\\": [\\n      \\"prettier --parser=typescript --write\\"\\n    ]\\n},\\n\\n# .prettierrc.js\\nmodule.exports = {\\n    printWidth: 80,                    //\uFF08\u9ED8\u8BA4\u503C\uFF09\u5355\u884C\u4EE3\u7801\u8D85\u51FA 80 \u4E2A\u5B57\u7B26\u81EA\u52A8\u6362\u884C\\n    tabWidth: 2,                       //\uFF08\u9ED8\u8BA4\u503C\uFF09\u4E00\u4E2A tab \u952E\u7F29\u8FDB\u76F8\u5F53\u4E8E 2 \u4E2A\u7A7A\u683C\\n    useTabs: true,                     // \u884C\u7F29\u8FDB\u4F7F\u7528 tab \u952E\u4EE3\u66FF\u7A7A\u683C\\n    semi: false,                       //\uFF08\u9ED8\u8BA4\u503C\uFF09\u8BED\u53E5\u7684\u672B\u5C3E\u52A0\u4E0A\u5206\u53F7\\n    singleQuote: true,                 // \u4F7F\u7528\u5355\u5F15\u53F7\\n    quoteProps: 'as-needed',           //\uFF08\u9ED8\u8BA4\u503C\uFF09\u4EC5\u4EC5\u5F53\u5FC5\u987B\u7684\u65F6\u5019\u624D\u4F1A\u52A0\u4E0A\u53CC\u5F15\u53F7\\n    jsxSingleQuote: true,              // \u5728 JSX \u4E2D\u4F7F\u7528\u5355\u5F15\u53F7\\n    trailingComma: 'all',              // \u4E0D\u7528\u5728\u591A\u884C\u7684\u9017\u53F7\u5206\u9694\u7684\u53E5\u6CD5\u7ED3\u6784\u7684\u6700\u540E\u4E00\u884C\u7684\u672B\u5C3E\u52A0\u4E0A\u9017\u53F7\\n    bracketSpacing: true,              //\uFF08\u9ED8\u8BA4\u503C\uFF09\u5728\u62EC\u53F7\u548C\u5BF9\u8C61\u7684\u6587\u5B57\u4E4B\u95F4\u52A0\u4E0A\u4E00\u4E2A\u7A7A\u683C\\n    jsxBracketSameLine: true,          // \u628A > \u7B26\u53F7\u653E\u5728\u591A\u884C\u7684 JSX \u5143\u7D20\u7684\u6700\u540E\u4E00\u884C\\n    arrowParens: 'avoid',              // \u5F53\u7BAD\u5934\u51FD\u6570\u4E2D\u53EA\u6709\u4E00\u4E2A\u53C2\u6570\u7684\u65F6\u5019\u53EF\u4EE5\u5FFD\u7565\u62EC\u5F27\\n    htmlWhitespaceSensitivity: 'ignore', // vue template \u4E2D\u7684\u7ED3\u675F\u6807\u7B7E\u7ED3\u5C3E\u5C16\u62EC\u53F7\u6389\u5230\u4E86\u4E0B\u4E00\u884C\\n    vueIndentScriptAndStyle: false,    //\uFF08\u9ED8\u8BA4\u503C\uFF09\u5BF9\u4E8E .vue \u6587\u4EF6\uFF0C\u4E0D\u7F29\u8FDB <script> \u548C <style> \u91CC\u7684\u5185\u5BB9\\n    embeddedLanguageFormatting: 'auto', //\uFF08\u9ED8\u8BA4\u503C\uFF09\u5141\u8BB8\u81EA\u52A8\u683C\u5F0F\u5316\u5185\u5D4C\u7684\u4EE3\u7801\u5757\\n};",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u901A\\u7528\\u914D\\u7F6E"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u901A\\u7528\\u914D\\u7F6E",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u901A\\u7528\\u914D\\u7F6E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "eslintignore"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#eslintignore",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), ".eslintignore"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "**/\\\\*.svg\\n**/_.ico\\npackage.json\\n/dist\\n.DS_Store\\n.eslintignore\\n_.png\\n_.toml\\n.editorconfig\\n.gitignore\\n.prettierignore\\nLICENSE\\n.eslintcache\\n_.lock\\nyarn-error.log\\n/public\\n**/node_modules/**\\n.npmrc",
    lang: "markdown"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "prettierignore"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#prettierignore",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), ".prettierignore"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "**/\\\\*.svg\\n**/_.ico\\npackage.json\\n/dist\\n.DS_Store\\n.eslintignore\\n_.png\\n_.toml\\n.editorconfig\\n.gitignore\\n.prettierignore\\nLICENSE\\n.eslintcache\\n_.lock\\nyarn-error.log\\n/public\\n**/node_modules/**\\n.npmrc",
    lang: "markdown"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "\\u67D0\\u6587\\u4EF6\\u53D6\\u6D88-eslint-\\u68C0\\u6D4B"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u67D0\\u6587\\u4EF6\\u53D6\\u6D88-eslint-\\u68C0\\u6D4B",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u67D0\\u6587\\u4EF6\\u53D6\\u6D88 eslint \\u68C0\\u6D4B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u6587\\u4EF6\\u5F00\\u5934\\u5199"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "/_ eslint-disable _/")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "vue2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#vue2",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "vue2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "\\u4F7F\\u7528\\u4E86-vue-ui-\\u521B\\u5EFA\\u9879\\u76EE"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u4F7F\\u7528\\u4E86-vue-ui-\\u521B\\u5EFA\\u9879\\u76EE",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u4F7F\\u7528\\u4E86 vue-ui \\u521B\\u5EFA\\u9879\\u76EE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u6211\\u6CA1\\u6709\\u52FE\\u9009 eslint \\u53CA format"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u5982\\u679C\\u9009\\u4E86\\u5C31\\u4E0D\\u7528\\u624B\\u52A8\\u52A0 devDependencies \\u4F9D\\u8D56\\u4E86")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "vscode-\\u4E0B\\u8F7D-eslint-\\u63D2\\u4EF6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#vscode-\\u4E0B\\u8F7D-eslint-\\u63D2\\u4EF6",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "vscode \\u4E0B\\u8F7D eslint \\u63D2\\u4EF6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "npm \\u5B89\\u88C5\\u5B8C\\u4F9D\\u8D56\\u5982\\u679C\\u6CA1\\u6548\\u679C\\u91CD\\u65B0\\u542F\\u52A8\\u4E0B eslint \\u63D2\\u4EF6")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "vscode-\\u4E0B\\u8F7D-prettier-\\u63D2\\u4EF6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#vscode-\\u4E0B\\u8F7D-prettier-\\u63D2\\u4EF6",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "vscode \\u4E0B\\u8F7D Prettier \\u63D2\\u4EF6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "vscode-\\u8BBE\\u7F6E"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#vscode-\\u8BBE\\u7F6E",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "vscode \\u8BBE\\u7F6E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "\\"editor.defaultFormatter\\": \\"esbenp.prettier-vscode\\", //\u81EA\u52A8\u683C\u5F0F\u5316\u7A0B\u5E8F\u4E3Aprettier\\n  \\"javascript.updateImportsOnFileMove.enabled\\": \\"always\\", //js\u91CD\u547D\u540D\u6587\u4EF6\u81EA\u52A8\u66F4\u65B0\u8DEF\u5F84\\n  //js\u81EA\u52A8\u683C\u5F0F\u5316\u7A0B\u5E8F\u4E3Aprettier-eslint\\n  \\"[javascript]\\": {\\n    \\"editor.defaultFormatter\\": \\"dbaeumer.vscode-eslint\\"\\n  },\\n  \\"[vue]\\": {\\n    \\"editor.defaultFormatter\\": \\"octref.vetur\\"\\n  },\\n  // #\u8BA9vue\u4E2D\u7684js\u6309\\"prettier\\"\u683C\u5F0F\u8FDB\u884C\u683C\u5F0F\u5316\\n  \\"vetur.format.defaultFormatter.html\\": \\"prettier\\",\\n  \\"vetur.format.defaultFormatter.js\\": \\"prettier-eslint\\", //\u4E3B\u8981\u662F\u8FD9\u4E00\u884C\u89E3\u51B3\u51B2\u7A81\\n  \\"vetur.format.defaultFormatterOptions\\": {\\n    // #vue\u7EC4\u4EF6\u4E2Dhtml\u4EE3\u7801\u683C\u5F0F\u5316\u6837\u5F0F\\n    // \\"js-beautify-html\\": {},\\n    // \\"prettier-eslint\\": {},\\n    // \\"prettyhtml\\": {}\\n  },\\n  \\"editor.formatOnPaste\\": true, //\u81EA\u52A8\u683C\u5F0F\u5316\u7C98\u8D34\u5185\u5BB9\\n  \\"editor.formatOnType\\": true, //\u952E\u5165\u4E00\u884C\u540E\u81EA\u52A8\u683C\u5F0F\u5316",
    lang: "json"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "devdependencies"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#devdependencies",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "devDependencies"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "\\"eslint-config-standard\\": \\"^10.2.1\\",\\n    \\"eslint-friendly-formatter\\": \\"^3.0.0\\",\\n    \\"eslint-loader\\": \\"^1.7.1\\",\\n    \\"eslint-plugin-html\\": \\"^3.0.0\\",\\n    \\"eslint-plugin-import\\": \\"^2.7.0\\",\\n    \\"eslint-plugin-node\\": \\"^5.2.0\\",\\n    \\"eslint-plugin-promise\\": \\"^3.4.0\\",\\n    \\"eslint-plugin-standard\\": \\"^3.0.1\\",\\n    \\"@babel/core\\": \\"^7.12.16\\",\\n    \\"@babel/eslint-parser\\": \\"^7.12.16\\",\\n    \\"@vue/cli-plugin-eslint\\": \\"~5.0.0\\",\\n    \\"babel-eslint\\": \\"^10.1.0\\",\\n    \\"eslint\\": \\"^7.32.0\\",\\n    \\"eslint-plugin-vue\\": \\"^8.0.3\\"",
    lang: "json"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "packagejson"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#packagejson",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "package.json"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "{\\n  \\"eslintConfig\\": {\\n    \\"root\\": true,\\n    \\"env\\": {\\n      \\"node\\": true\\n    },\\n    \\"extends\\": [\\"plugin:vue/essential\\", \\"eslint:recommended\\"],\\n    \\"parserOptions\\": {\\n      \\"parser\\": \\"@babel/eslint-parser\\"\\n    },\\n    \\"rules\\": {}\\n  }\\n}",
    lang: "json"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "\\u9879\\u76EE\\u6839\\u76EE\\u5F55\\u65B0\\u5EFA-eslintrcjs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u9879\\u76EE\\u6839\\u76EE\\u5F55\\u65B0\\u5EFA-eslintrcjs",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u9879\\u76EE\\u6839\\u76EE\\u5F55\\u65B0\\u5EFA .eslintrc.js"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "module.exports = {\\n  root: true,\\n  env: {\\n    node: true,\\n  },\\n  extends: ['plugin:vue/essential', 'eslint:recommended'],\\n  rules: {\\n    'accessor-pairs': 2,\\n    'arrow-spacing': [\\n      2,\\n      {\\n        before: true,\\n        after: true,\\n      },\\n    ],\\n    'block-spacing': [2, 'always'],\\n    'brace-style': [\\n      2,\\n      '1tbs',\\n      {\\n        allowSingleLine: true,\\n      },\\n    ],\\n    camelcase: [\\n      0,\\n      {\\n        properties: 'always',\\n      },\\n    ],\\n    'comma-dangle': [2, 'never'],\\n    'comma-spacing': [\\n      2,\\n      {\\n        before: false,\\n        after: true,\\n      },\\n    ],\\n    'comma-style': [2, 'last'],\\n    'constructor-super': 2,\\n    curly: [2, 'multi-line'],\\n    'dot-location': [2, 'property'],\\n    'eol-last': 2,\\n    eqeqeq: [2, 'allow-null'],\\n    'generator-star-spacing': [\\n      2,\\n      {\\n        before: true,\\n        after: true,\\n      },\\n    ],\\n    'handle-callback-err': [2, '^(err|error)$'],\\n    indent: [\\n      2,\\n      2,\\n      {\\n        SwitchCase: 1,\\n      },\\n    ],\\n    'jsx-quotes': [2, 'prefer-single'],\\n    'key-spacing': [\\n      2,\\n      {\\n        beforeColon: false,\\n        afterColon: true,\\n      },\\n    ],\\n    'keyword-spacing': [\\n      2,\\n      {\\n        before: true,\\n        after: true,\\n      },\\n    ],\\n    'new-cap': [\\n      2,\\n      {\\n        newIsCap: true,\\n        capIsNew: false,\\n      },\\n    ],\\n    'new-parens': 2,\\n    'no-array-constructor': 2,\\n    'no-caller': 2,\\n    'no-console': 'off',\\n    'no-class-assign': 2,\\n    'no-cond-assign': 2,\\n    'no-const-assign': 2,\\n    'no-control-regex': 2,\\n    'no-delete-var': 2,\\n    'no-dupe-args': 2,\\n    'no-dupe-class-members': 2,\\n    'no-dupe-keys': 2,\\n    'no-duplicate-case': 2,\\n    'no-empty-character-class': 2,\\n    'no-empty-pattern': 2,\\n    'no-eval': 2,\\n    'no-ex-assign': 2,\\n    'no-extend-native': 2,\\n    'no-extra-bind': 2,\\n    'no-extra-boolean-cast': 2,\\n    'no-extra-parens': [2, 'functions'],\\n    'no-fallthrough': 2,\\n    'no-floating-decimal': 2,\\n    'no-func-assign': 2,\\n    'no-implied-eval': 2,\\n    'no-inner-declarations': [2, 'functions'],\\n    'no-invalid-regexp': 2,\\n    'no-irregular-whitespace': 2,\\n    'no-iterator': 2,\\n    'no-label-var': 2,\\n    'no-labels': [\\n      2,\\n      {\\n        allowLoop: false,\\n        allowSwitch: false,\\n      },\\n    ],\\n    'no-lone-blocks': 2,\\n    'no-mixed-spaces-and-tabs': 2,\\n    'no-multi-spaces': 2,\\n    'no-multi-str': 2,\\n    'no-multiple-empty-lines': [\\n      2,\\n      {\\n        max: 1,\\n      },\\n    ],\\n    'no-native-reassign': 2,\\n    'no-negated-in-lhs': 2,\\n    'no-new-object': 2,\\n    'no-new-require': 2,\\n    'no-new-symbol': 2,\\n    'no-new-wrappers': 2,\\n    'no-obj-calls': 2,\\n    'no-octal': 2,\\n    'no-octal-escape': 2,\\n    'no-path-concat': 2,\\n    'no-proto': 2,\\n    'no-redeclare': 2,\\n    'no-regex-spaces': 2,\\n    'no-return-assign': [2, 'except-parens'],\\n    'no-self-assign': 2,\\n    'no-self-compare': 2,\\n    'no-sequences': 2,\\n    'no-shadow-restricted-names': 2,\\n    'no-spaced-func': 2,\\n    'no-sparse-arrays': 2,\\n    'no-this-before-super': 2,\\n    'no-throw-literal': 2,\\n    'no-trailing-spaces': 2,\\n    'no-undef': 2,\\n    'no-undef-init': 2,\\n    'no-unexpected-multiline': 2,\\n    'no-unmodified-loop-condition': 2,\\n    'no-unneeded-ternary': [\\n      2,\\n      {\\n        defaultAssignment: false,\\n      },\\n    ],\\n    'no-unreachable': 2,\\n    'no-unsafe-finally': 2,\\n    'no-unused-vars': [\\n      2,\\n      {\\n        vars: 'all',\\n        args: 'none',\\n      },\\n    ],\\n    'no-useless-call': 2,\\n    'no-useless-computed-key': 2,\\n    'no-useless-constructor': 2,\\n    'no-useless-escape': 0,\\n    'no-whitespace-before-property': 2,\\n    'no-with': 2,\\n    'one-var': [\\n      2,\\n      {\\n        initialized: 'never',\\n      },\\n    ],\\n    'operator-linebreak': [\\n      2,\\n      'after',\\n      {\\n        overrides: {\\n          '?': 'before',\\n          ':': 'before',\\n        },\\n      },\\n    ],\\n    'padded-blocks': [2, 'never'],\\n    quotes: [\\n      2,\\n      'single',\\n      {\\n        avoidEscape: true,\\n        allowTemplateLiterals: true,\\n      },\\n    ],\\n    semi: [2, 'always'], // \u8BED\u53E5\u5F3A\u5236\u5206\u53F7\u7ED3\u5C3E\\n    'space-before-blocks': [2, 'always'],\\n    'space-before-function-paren': [2, 'never'],\\n    'space-in-parens': [2, 'never'],\\n    'space-infix-ops': 2,\\n    'space-unary-ops': [\\n      2,\\n      {\\n        words: true,\\n        nonwords: false,\\n      },\\n    ],\\n    'spaced-comment': [\\n      2,\\n      'always',\\n      {\\n        markers: [\\n          'global',\\n          'globals',\\n          'eslint',\\n          'eslint-disable',\\n          '*package',\\n          '!',\\n          ',',\\n        ],\\n      },\\n    ],\\n    'template-curly-spacing': [2, 'never'],\\n    'use-isnan': 2,\\n    'valid-typeof': 2,\\n    'wrap-iife': [2, 'any'],\\n    'yield-star-spacing': [2, 'both'],\\n    yoda: [2, 'never'],\\n    'prefer-const': 2,\\n    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,\\n    'object-curly-spacing': [\\n      2,\\n      'always',\\n      {\\n        objectsInObjects: false,\\n      },\\n    ],\\n    'array-bracket-spacing': [2, 'never'],\\n  },\\n  parserOptions: {\\n    parser: 'babel-eslint',\\n  },\\n};",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "\\u5982\\u679C\\u62A5\\u9519\\u63D0\\u793A-babel-eslint"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u5982\\u679C\\u62A5\\u9519\\u63D0\\u793A-babel-eslint",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u5982\\u679C\\u62A5\\u9519\\u63D0\\u793A babel-eslint"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u4E00\\u5757\\u91CD\\u65B0\\u5378\\u8F7D\\u548C\\u5B89\\u88C5\\u4E0B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "npm uninstall eslint babel-eslint -g"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "npm install eslint babel-eslint -g")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "\\u6D4B\\u8BD5\\u6548\\u679C"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u6D4B\\u8BD5\\u6548\\u679C",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u6D4B\\u8BD5\\u6548\\u679C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# HomeView.vue\\nlet a;\\n# \u6B64\u65F6\u4F1A\u63D0\u793A 'a' is defined but never used.eslintno-unused-vars",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "vue3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#vue3",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "vue3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "\\u4F7F\\u7528-vue-ui-\\u521B\\u5EFA\\u9879\\u76EE"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u4F7F\\u7528-vue-ui-\\u521B\\u5EFA\\u9879\\u76EE",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u4F7F\\u7528 vue-ui \\u521B\\u5EFA\\u9879\\u76EE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u6211\\u6CA1\\u6709\\u52FE\\u9009 eslint \\u53CA format"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u5982\\u679C\\u9009\\u4E86\\u5C31\\u4E0D\\u7528\\u624B\\u52A8\\u52A0 devDependencies \\u4F9D\\u8D56\\u4E86")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "\\u4F9D\\u8D56"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u4F9D\\u8D56",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u4F9D\\u8D56"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "\\"@typescript-eslint/eslint-plugin\\": \\"^5.32.0\\",\\n    \\"@typescript-eslint/parser\\": \\"^5.32.0\\",\\n    \\"@vue/cli-plugin-babel\\": \\"~5.0.0\\",\\n    \\"@vue/cli-plugin-eslint\\": \\"~5.0.0\\",\\n    \\"@vue/eslint-config-standard\\": \\"^6.1.0\\",\\n    \\"@vue/eslint-config-typescript\\": \\"^9.1.0\\",\\n    \\"eslint\\": \\"^8.21.0\\",\\n    \\"eslint-define-config\\": \\"^1.6.0\\",\\n    \\"eslint-plugin-import\\": \\"^2.25.3\\",\\n    \\"eslint-plugin-node\\": \\"^11.1.0\\",\\n    \\"eslint-plugin-prettier\\": \\"^4.2.1\\",\\n    \\"eslint-plugin-promise\\": \\"^5.1.0\\",\\n    \\"eslint-plugin-vue\\": \\"^9.3.0\\",\\n    \\"eslint-config-prettier\\": \\"^8.5.0\\",\\n    \\"prettier-eslint\\": \\"^15.0.1\\",",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "eslint --init")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "eslintrcjs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#eslintrcjs",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), ".eslintrc.js"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "/* eslint-disable */\\nconst { defineConfig } = require('eslint-define-config');\\nmodule.exports = defineConfig({\\n  root: true,\\n  env: {\\n    browser: true,\\n    node: true,\\n    es6: true,\\n  },\\n  parser: 'vue-eslint-parser',\\n  parserOptions: {\\n    parser: '@typescript-eslint/parser',\\n    ecmaVersion: 2020,\\n    sourceType: 'module',\\n    jsxPragma: 'React',\\n    ecmaFeatures: {\\n      jsx: true,\\n    },\\n  },\\n  extends: [\\n    'plugin:vue/vue3-recommended',\\n    'plugin:@typescript-eslint/recommended',\\n    'prettier',\\n    'plugin:prettier/recommended',\\n  ],\\n  rules: {\\n    'vue/script-setup-uses-vars': 'error',\\n    '@typescript-eslint/ban-ts-ignore': 'off',\\n    '@typescript-eslint/explicit-function-return-type': 'off',\\n    '@typescript-eslint/no-explicit-any': 'off',\\n    '@typescript-eslint/no-var-requires': 'off',\\n    '@typescript-eslint/no-empty-function': 'off',\\n    'vue/custom-event-name-casing': 'off',\\n    'no-use-before-define': 'off',\\n    '@typescript-eslint/no-use-before-define': 'off',\\n    '@typescript-eslint/ban-ts-comment': 'off',\\n    '@typescript-eslint/ban-types': 'off',\\n    '@typescript-eslint/no-non-null-assertion': 'off',\\n    '@typescript-eslint/explicit-module-boundary-types': 'off',\\n    '@typescript-eslint/no-unused-vars': [\\n      'error',\\n      {\\n        argsIgnorePattern: '^_',\\n        varsIgnorePattern: '^_',\\n      },\\n    ],\\n    'no-unused-vars': [\\n      'error',\\n      {\\n        argsIgnorePattern: '^_',\\n        varsIgnorePattern: '^_',\\n      },\\n    ],\\n    'space-before-function-paren': 'off',\\n\\n    'vue/attributes-order': 'off',\\n    'vue/one-component-per-file': 'off',\\n    'vue/html-closing-bracket-newline': 'off',\\n    'vue/max-attributes-per-line': 'off',\\n    'vue/multiline-html-element-content-newline': 'off',\\n    'vue/singleline-html-element-content-newline': 'off',\\n    'vue/attribute-hyphenation': 'off',\\n    'vue/require-default-prop': 'off',\\n    'vue/html-self-closing': [\\n      'error',\\n      {\\n        html: {\\n          void: 'always',\\n          normal: 'never',\\n          component: 'always',\\n        },\\n        svg: 'always',\\n        math: 'always',\\n      },\\n    ],\\n  },\\n});",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "\\u6D4B\\u8BD5\\u6548\\u679C-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u6D4B\\u8BD5\\u6548\\u679C-1",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u6D4B\\u8BD5\\u6548\\u679C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u6B64\\u65F6 let a \\u5C31\\u4F1A\\u62A5\\u9519\\u4E86"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u63D0\\u793A\\u6CA1\\u6709\\u4F7F\\u7528")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "umi"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#umi",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "umi"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# devDependencies\\n  // nvm\u7528\u6700\u65B0\u7684node\\n  // nvm install nvm use lts/fermium\\n  // nvm use lts/fermium\\n    \\"@typescript-eslint/eslint-plugin\\": \\"^5.32.0\\",\\n    \\"@typescript-eslint/parser\\": \\"^5.32.0\\",\\n    \\"@umijs/fabric\\": \\"^2.2.2\\",\\n    \\"eslint-plugin-unicorn\\": \\"^43.0.2\\",\\n    \\"eslint\\": \\"^8.21.0\\",\\n    \\"eslint-plugin-jest\\": \\"^26.7.0\\",\\n    \\"eslint-plugin-react\\": \\"^7.30.1\\",\\n    \\"eslint-plugin-react-hooks\\": \\"^4.6.0\\",\\n# eslint --init\\n# .eslintrc.js\\nmodule.exports = {\\n  extends: [require.resolve('@umijs/fabric/dist/eslint')],\\n};\\n# vscode\\n  \\"[javascript]\\": {\\n    \\"editor.defaultFormatter\\": \\"esbenp.prettier-vscode\\",\\n    \\"editor.codeActionsOnSave\\": {\\n      \\"source.fixAll.eslint\\": false\\n    }\\n  },\\n  \\"[typescriptreact]\\": {\\n    \\"editor.defaultFormatter\\": \\"esbenp.prettier-vscode\\",\\n    \\"editor.codeActionsOnSave\\": {\\n      \\"source.fixAll.eslint\\": false\\n    }\\n  },\\n  \\"[typescript]\\": {\\n    \\"editor.defaultFormatter\\": \\"esbenp.prettier-vscode\\",\\n    \\"editor.codeActionsOnSave\\": {\\n      \\"source.fixAll.eslint\\": false\\n    }\\n  },",
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

//# sourceURL=webpack:///./src/Article/5.%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/%E9%A1%B9%E7%9B%AE-eslint-prettierrc-%E5%8F%8A-vscode-%E6%8F%92%E4%BB%B6-%E9%85%8D%E7%BD%AE/index.md?`)}}]);
