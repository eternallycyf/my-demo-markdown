(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{xYqL:function(d,l,a){"use strict";a.r(l);var s=a("cDcd"),e=a.n(s),n=a("dEAq"),p=a.n(n),t=a("6T1g");const u=e.a.memo(({demos:r})=>e.a.createElement(e.a.Fragment,null,e.a.createElement("div",{className:"markdown"},e.a.createElement("h2",{id:"eslint"},e.a.createElement(n.AnchorLink,{to:"#eslint","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Eslint"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u53C2\u8003\u94FE\u63A5"),e.a.createElement("li",null,e.a.createElement(n.Link,{to:"https://github.com/Hibop/Hibop.github.io/issues/34"},"https://github.com/Hibop/Hibop.github.io/issues/34"))),e.a.createElement("h3",{id:"prettier"},e.a.createElement(n.AnchorLink,{to:"#prettier","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"prettier"),e.a.createElement(t.a,{code:`# npm i prettier -D

# script
  "scripts": {
    "prettier": "prettier --write '**/*.{js,jsx,tsx,ts,less,md,json}'",
    "eslint": "eslint ."
  },
"lint-staged": {
    "*.{js,jsx,less,md,json}": [
      "prettier --write"
    ],
    "*.ts?(x)": [
      "prettier --parser=typescript --write"
    ]
},

# .prettierrc.js
module.exports = {
    printWidth: 80,                    //\uFF08\u9ED8\u8BA4\u503C\uFF09\u5355\u884C\u4EE3\u7801\u8D85\u51FA 80 \u4E2A\u5B57\u7B26\u81EA\u52A8\u6362\u884C
    tabWidth: 2,                       //\uFF08\u9ED8\u8BA4\u503C\uFF09\u4E00\u4E2A tab \u952E\u7F29\u8FDB\u76F8\u5F53\u4E8E 2 \u4E2A\u7A7A\u683C
    useTabs: true,                     // \u884C\u7F29\u8FDB\u4F7F\u7528 tab \u952E\u4EE3\u66FF\u7A7A\u683C
    semi: false,                       //\uFF08\u9ED8\u8BA4\u503C\uFF09\u8BED\u53E5\u7684\u672B\u5C3E\u52A0\u4E0A\u5206\u53F7
    singleQuote: true,                 // \u4F7F\u7528\u5355\u5F15\u53F7
    quoteProps: 'as-needed',           //\uFF08\u9ED8\u8BA4\u503C\uFF09\u4EC5\u4EC5\u5F53\u5FC5\u987B\u7684\u65F6\u5019\u624D\u4F1A\u52A0\u4E0A\u53CC\u5F15\u53F7
    jsxSingleQuote: true,              // \u5728 JSX \u4E2D\u4F7F\u7528\u5355\u5F15\u53F7
    trailingComma: 'all',              // \u4E0D\u7528\u5728\u591A\u884C\u7684\u9017\u53F7\u5206\u9694\u7684\u53E5\u6CD5\u7ED3\u6784\u7684\u6700\u540E\u4E00\u884C\u7684\u672B\u5C3E\u52A0\u4E0A\u9017\u53F7
    bracketSpacing: true,              //\uFF08\u9ED8\u8BA4\u503C\uFF09\u5728\u62EC\u53F7\u548C\u5BF9\u8C61\u7684\u6587\u5B57\u4E4B\u95F4\u52A0\u4E0A\u4E00\u4E2A\u7A7A\u683C
    jsxBracketSameLine: true,          // \u628A > \u7B26\u53F7\u653E\u5728\u591A\u884C\u7684 JSX \u5143\u7D20\u7684\u6700\u540E\u4E00\u884C
    arrowParens: 'avoid',              // \u5F53\u7BAD\u5934\u51FD\u6570\u4E2D\u53EA\u6709\u4E00\u4E2A\u53C2\u6570\u7684\u65F6\u5019\u53EF\u4EE5\u5FFD\u7565\u62EC\u5F27
    htmlWhitespaceSensitivity: 'ignore', // vue template \u4E2D\u7684\u7ED3\u675F\u6807\u7B7E\u7ED3\u5C3E\u5C16\u62EC\u53F7\u6389\u5230\u4E86\u4E0B\u4E00\u884C
    vueIndentScriptAndStyle: false,    //\uFF08\u9ED8\u8BA4\u503C\uFF09\u5BF9\u4E8E .vue \u6587\u4EF6\uFF0C\u4E0D\u7F29\u8FDB <script> \u548C <style> \u91CC\u7684\u5185\u5BB9
    embeddedLanguageFormatting: 'auto', //\uFF08\u9ED8\u8BA4\u503C\uFF09\u5141\u8BB8\u81EA\u52A8\u683C\u5F0F\u5316\u5185\u5D4C\u7684\u4EE3\u7801\u5757
};`,lang:"js"}),e.a.createElement("h3",{id:"\u901A\u7528\u914D\u7F6E"},e.a.createElement(n.AnchorLink,{to:"#\u901A\u7528\u914D\u7F6E","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u901A\u7528\u914D\u7F6E"),e.a.createElement("h4",{id:"eslintignore"},e.a.createElement(n.AnchorLink,{to:"#eslintignore","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),".eslintignore"),e.a.createElement(t.a,{code:`**/\\*.svg
**/_.ico
package.json
/dist
.DS_Store
.eslintignore
_.png
_.toml
.editorconfig
.gitignore
.prettierignore
LICENSE
.eslintcache
_.lock
yarn-error.log
/public
**/node_modules/**
.npmrc`,lang:"markdown"}),e.a.createElement("h4",{id:"prettierignore"},e.a.createElement(n.AnchorLink,{to:"#prettierignore","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),".prettierignore"),e.a.createElement(t.a,{code:`**/\\*.svg
**/_.ico
package.json
/dist
.DS_Store
.eslintignore
_.png
_.toml
.editorconfig
.gitignore
.prettierignore
LICENSE
.eslintcache
_.lock
yarn-error.log
/public
**/node_modules/**
.npmrc`,lang:"markdown"}),e.a.createElement("h4",{id:"\u67D0\u6587\u4EF6\u53D6\u6D88-eslint-\u68C0\u6D4B"},e.a.createElement(n.AnchorLink,{to:"#\u67D0\u6587\u4EF6\u53D6\u6D88-eslint-\u68C0\u6D4B","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u67D0\u6587\u4EF6\u53D6\u6D88 eslint \u68C0\u6D4B"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u6587\u4EF6\u5F00\u5934\u5199"),e.a.createElement("li",null,"/_ eslint-disable _/")),e.a.createElement("h3",{id:"vue2"},e.a.createElement(n.AnchorLink,{to:"#vue2","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"vue2"),e.a.createElement("h4",{id:"\u4F7F\u7528\u4E86-vue-ui-\u521B\u5EFA\u9879\u76EE"},e.a.createElement(n.AnchorLink,{to:"#\u4F7F\u7528\u4E86-vue-ui-\u521B\u5EFA\u9879\u76EE","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u4F7F\u7528\u4E86 vue-ui \u521B\u5EFA\u9879\u76EE"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u6211\u6CA1\u6709\u52FE\u9009 eslint \u53CA format"),e.a.createElement("li",null,"\u5982\u679C\u9009\u4E86\u5C31\u4E0D\u7528\u624B\u52A8\u52A0 devDependencies \u4F9D\u8D56\u4E86")),e.a.createElement("h4",{id:"vscode-\u4E0B\u8F7D-eslint-\u63D2\u4EF6"},e.a.createElement(n.AnchorLink,{to:"#vscode-\u4E0B\u8F7D-eslint-\u63D2\u4EF6","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"vscode \u4E0B\u8F7D eslint \u63D2\u4EF6"),e.a.createElement("ul",null,e.a.createElement("li",null,"npm \u5B89\u88C5\u5B8C\u4F9D\u8D56\u5982\u679C\u6CA1\u6548\u679C\u91CD\u65B0\u542F\u52A8\u4E0B eslint \u63D2\u4EF6")),e.a.createElement("h4",{id:"vscode-\u4E0B\u8F7D-prettier-\u63D2\u4EF6"},e.a.createElement(n.AnchorLink,{to:"#vscode-\u4E0B\u8F7D-prettier-\u63D2\u4EF6","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"vscode \u4E0B\u8F7D Prettier \u63D2\u4EF6"),e.a.createElement("h4",{id:"vscode-\u8BBE\u7F6E"},e.a.createElement(n.AnchorLink,{to:"#vscode-\u8BBE\u7F6E","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"vscode \u8BBE\u7F6E"),e.a.createElement(t.a,{code:`"editor.defaultFormatter": "esbenp.prettier-vscode", //\u81EA\u52A8\u683C\u5F0F\u5316\u7A0B\u5E8F\u4E3Aprettier
  "javascript.updateImportsOnFileMove.enabled": "always", //js\u91CD\u547D\u540D\u6587\u4EF6\u81EA\u52A8\u66F4\u65B0\u8DEF\u5F84
  //js\u81EA\u52A8\u683C\u5F0F\u5316\u7A0B\u5E8F\u4E3Aprettier-eslint
  "[javascript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  },
  // #\u8BA9vue\u4E2D\u7684js\u6309"prettier"\u683C\u5F0F\u8FDB\u884C\u683C\u5F0F\u5316
  "vetur.format.defaultFormatter.html": "prettier",
  "vetur.format.defaultFormatter.js": "prettier-eslint", //\u4E3B\u8981\u662F\u8FD9\u4E00\u884C\u89E3\u51B3\u51B2\u7A81
  "vetur.format.defaultFormatterOptions": {
    // #vue\u7EC4\u4EF6\u4E2Dhtml\u4EE3\u7801\u683C\u5F0F\u5316\u6837\u5F0F
    // "js-beautify-html": {},
    // "prettier-eslint": {},
    // "prettyhtml": {}
  },
  "editor.formatOnPaste": true, //\u81EA\u52A8\u683C\u5F0F\u5316\u7C98\u8D34\u5185\u5BB9
  "editor.formatOnType": true, //\u952E\u5165\u4E00\u884C\u540E\u81EA\u52A8\u683C\u5F0F\u5316`,lang:"json"}),e.a.createElement("h4",{id:"devdependencies"},e.a.createElement(n.AnchorLink,{to:"#devdependencies","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"devDependencies"),e.a.createElement(t.a,{code:`"eslint-config-standard": "^10.2.1",
    "eslint-friendly-formatter": "^3.0.0",
    "eslint-loader": "^1.7.1",
    "eslint-plugin-html": "^3.0.0",
    "eslint-plugin-import": "^2.7.0",
    "eslint-plugin-node": "^5.2.0",
    "eslint-plugin-promise": "^3.4.0",
    "eslint-plugin-standard": "^3.0.1",
    "@babel/core": "^7.12.16",
    "@babel/eslint-parser": "^7.12.16",
    "@vue/cli-plugin-eslint": "~5.0.0",
    "babel-eslint": "^10.1.0",
    "eslint": "^7.32.0",
    "eslint-plugin-vue": "^8.0.3"`,lang:"json"}),e.a.createElement("h4",{id:"packagejson"},e.a.createElement(n.AnchorLink,{to:"#packagejson","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"package.json"),e.a.createElement(t.a,{code:`{
  "eslintConfig": {
    "root": true,
    "env": {
      "node": true
    },
    "extends": ["plugin:vue/essential", "eslint:recommended"],
    "parserOptions": {
      "parser": "@babel/eslint-parser"
    },
    "rules": {}
  }
}`,lang:"json"}),e.a.createElement("h4",{id:"\u9879\u76EE\u6839\u76EE\u5F55\u65B0\u5EFA-eslintrcjs"},e.a.createElement(n.AnchorLink,{to:"#\u9879\u76EE\u6839\u76EE\u5F55\u65B0\u5EFA-eslintrcjs","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u9879\u76EE\u6839\u76EE\u5F55\u65B0\u5EFA .eslintrc.js"),e.a.createElement(t.a,{code:`module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  rules: {
    'accessor-pairs': 2,
    'arrow-spacing': [
      2,
      {
        before: true,
        after: true,
      },
    ],
    'block-spacing': [2, 'always'],
    'brace-style': [
      2,
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],
    camelcase: [
      0,
      {
        properties: 'always',
      },
    ],
    'comma-dangle': [2, 'never'],
    'comma-spacing': [
      2,
      {
        before: false,
        after: true,
      },
    ],
    'comma-style': [2, 'last'],
    'constructor-super': 2,
    curly: [2, 'multi-line'],
    'dot-location': [2, 'property'],
    'eol-last': 2,
    eqeqeq: [2, 'allow-null'],
    'generator-star-spacing': [
      2,
      {
        before: true,
        after: true,
      },
    ],
    'handle-callback-err': [2, '^(err|error)$'],
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
    'jsx-quotes': [2, 'prefer-single'],
    'key-spacing': [
      2,
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    'keyword-spacing': [
      2,
      {
        before: true,
        after: true,
      },
    ],
    'new-cap': [
      2,
      {
        newIsCap: true,
        capIsNew: false,
      },
    ],
    'new-parens': 2,
    'no-array-constructor': 2,
    'no-caller': 2,
    'no-console': 'off',
    'no-class-assign': 2,
    'no-cond-assign': 2,
    'no-const-assign': 2,
    'no-control-regex': 2,
    'no-delete-var': 2,
    'no-dupe-args': 2,
    'no-dupe-class-members': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty-character-class': 2,
    'no-empty-pattern': 2,
    'no-eval': 2,
    'no-ex-assign': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': [2, 'functions'],
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-func-assign': 2,
    'no-implied-eval': 2,
    'no-inner-declarations': [2, 'functions'],
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-labels': [
      2,
      {
        allowLoop: false,
        allowSwitch: false,
      },
    ],
    'no-lone-blocks': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-multiple-empty-lines': [
      2,
      {
        max: 1,
      },
    ],
    'no-native-reassign': 2,
    'no-negated-in-lhs': 2,
    'no-new-object': 2,
    'no-new-require': 2,
    'no-new-symbol': 2,
    'no-new-wrappers': 2,
    'no-obj-calls': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-path-concat': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-regex-spaces': 2,
    'no-return-assign': [2, 'except-parens'],
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-shadow-restricted-names': 2,
    'no-spaced-func': 2,
    'no-sparse-arrays': 2,
    'no-this-before-super': 2,
    'no-throw-literal': 2,
    'no-trailing-spaces': 2,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-unexpected-multiline': 2,
    'no-unmodified-loop-condition': 2,
    'no-unneeded-ternary': [
      2,
      {
        defaultAssignment: false,
      },
    ],
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'none',
      },
    ],
    'no-useless-call': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-escape': 0,
    'no-whitespace-before-property': 2,
    'no-with': 2,
    'one-var': [
      2,
      {
        initialized: 'never',
      },
    ],
    'operator-linebreak': [
      2,
      'after',
      {
        overrides: {
          '?': 'before',
          ':': 'before',
        },
      },
    ],
    'padded-blocks': [2, 'never'],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    semi: [2, 'always'], // \u8BED\u53E5\u5F3A\u5236\u5206\u53F7\u7ED3\u5C3E
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, 'never'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [
      2,
      {
        words: true,
        nonwords: false,
      },
    ],
    'spaced-comment': [
      2,
      'always',
      {
        markers: [
          'global',
          'globals',
          'eslint',
          'eslint-disable',
          '*package',
          '!',
          ',',
        ],
      },
    ],
    'template-curly-spacing': [2, 'never'],
    'use-isnan': 2,
    'valid-typeof': 2,
    'wrap-iife': [2, 'any'],
    'yield-star-spacing': [2, 'both'],
    yoda: [2, 'never'],
    'prefer-const': 2,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'object-curly-spacing': [
      2,
      'always',
      {
        objectsInObjects: false,
      },
    ],
    'array-bracket-spacing': [2, 'never'],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};`,lang:"js"}),e.a.createElement("h4",{id:"\u5982\u679C\u62A5\u9519\u63D0\u793A-babel-eslint"},e.a.createElement(n.AnchorLink,{to:"#\u5982\u679C\u62A5\u9519\u63D0\u793A-babel-eslint","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5982\u679C\u62A5\u9519\u63D0\u793A babel-eslint"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u4E00\u5757\u91CD\u65B0\u5378\u8F7D\u548C\u5B89\u88C5\u4E0B"),e.a.createElement("li",null,"npm uninstall eslint babel-eslint -g"),e.a.createElement("li",null,"npm install eslint babel-eslint -g")),e.a.createElement("h4",{id:"\u6D4B\u8BD5\u6548\u679C"},e.a.createElement(n.AnchorLink,{to:"#\u6D4B\u8BD5\u6548\u679C","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u6D4B\u8BD5\u6548\u679C"),e.a.createElement(t.a,{code:`# HomeView.vue
let a;
# \u6B64\u65F6\u4F1A\u63D0\u793A 'a' is defined but never used.eslintno-unused-vars`,lang:"js"}),e.a.createElement("h3",{id:"vue3"},e.a.createElement(n.AnchorLink,{to:"#vue3","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"vue3"),e.a.createElement("h4",{id:"\u4F7F\u7528-vue-ui-\u521B\u5EFA\u9879\u76EE"},e.a.createElement(n.AnchorLink,{to:"#\u4F7F\u7528-vue-ui-\u521B\u5EFA\u9879\u76EE","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u4F7F\u7528 vue-ui \u521B\u5EFA\u9879\u76EE"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u6211\u6CA1\u6709\u52FE\u9009 eslint \u53CA format"),e.a.createElement("li",null,"\u5982\u679C\u9009\u4E86\u5C31\u4E0D\u7528\u624B\u52A8\u52A0 devDependencies \u4F9D\u8D56\u4E86")),e.a.createElement("h4",{id:"\u4F9D\u8D56"},e.a.createElement(n.AnchorLink,{to:"#\u4F9D\u8D56","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u4F9D\u8D56"),e.a.createElement(t.a,{code:`"@typescript-eslint/eslint-plugin": "^5.32.0",
    "@typescript-eslint/parser": "^5.32.0",
    "@vue/cli-plugin-babel": "~5.0.0",
    "@vue/cli-plugin-eslint": "~5.0.0",
    "@vue/eslint-config-standard": "^6.1.0",
    "@vue/eslint-config-typescript": "^9.1.0",
    "eslint": "^8.21.0",
    "eslint-define-config": "^1.6.0",
    "eslint-plugin-import": "^2.25.3",
    "eslint-plugin-node": "^11.1.0",
    "eslint-plugin-prettier": "^4.2.1",
    "eslint-plugin-promise": "^5.1.0",
    "eslint-plugin-vue": "^9.3.0",
    "eslint-config-prettier": "^8.5.0",
    "prettier-eslint": "^15.0.1",`,lang:"js"}),e.a.createElement("ul",null,e.a.createElement("li",null,"eslint --init")),e.a.createElement("h4",{id:"eslintrcjs"},e.a.createElement(n.AnchorLink,{to:"#eslintrcjs","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),".eslintrc.js"),e.a.createElement(t.a,{code:`/* eslint-disable */
const { defineConfig } = require('eslint-define-config');
module.exports = defineConfig({
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  rules: {
    'vue/script-setup-uses-vars': 'error',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'vue/custom-event-name-casing': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'space-before-function-paren': 'off',

    'vue/attributes-order': 'off',
    'vue/one-component-per-file': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/require-default-prop': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
  },
});`,lang:"js"}),e.a.createElement("h4",{id:"\u6D4B\u8BD5\u6548\u679C-1"},e.a.createElement(n.AnchorLink,{to:"#\u6D4B\u8BD5\u6548\u679C-1","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u6D4B\u8BD5\u6548\u679C"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u6B64\u65F6 let a \u5C31\u4F1A\u62A5\u9519\u4E86"),e.a.createElement("li",null,"\u63D0\u793A\u6CA1\u6709\u4F7F\u7528")),e.a.createElement("h3",{id:"umi"},e.a.createElement(n.AnchorLink,{to:"#umi","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"umi"),e.a.createElement(t.a,{code:`# devDependencies
  // nvm\u7528\u6700\u65B0\u7684node
  // nvm install nvm use lts/fermium
  // nvm use lts/fermium
    "@typescript-eslint/eslint-plugin": "^5.32.0",
    "@typescript-eslint/parser": "^5.32.0",
    "@umijs/fabric": "^2.2.2",
    "eslint-plugin-unicorn": "^43.0.2",
    "eslint": "^8.21.0",
    "eslint-plugin-jest": "^26.7.0",
    "eslint-plugin-react": "^7.30.1",
    "eslint-plugin-react-hooks": "^4.6.0",
# eslint --init
# .eslintrc.js
module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
};
# vscode
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": false
    }
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": false
    }
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": false
    }
  },`,lang:"js"}))));l.default=r=>{const o=e.a.useContext(n.context),c=o.demos;return e.a.useEffect(()=>{var i;r!=null&&(i=r.location)!==null&&i!==void 0&&i.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(r.location.hash.slice(1)))},[]),e.a.createElement(u,{demos:c})}}}]);
