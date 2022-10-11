(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"9MQq":function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dEAq");
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dumi_theme__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("6T1g");
/* harmony import */ var dumi_theme_default_es_builtins_Table_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("WtSh");










 // memo for page content, to avoid useless re-render since other context fields changed

const PageContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(({
  demos: DUMI_ALL_DEMOS
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "markdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    id: "typescript"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#typescript",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Typescript"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "1-\\u51C6\\u5907\\u9636\\u6BB5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#1-\\u51C6\\u5907\\u9636\\u6BB5",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "1 \\u51C6\\u5907\\u9636\\u6BB5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "tsc hello.ts     =>  .ts\\ntsc --init\\n\u7EC8\u7AEF ctrl+shift+b \u76D1\u89C6tsc\\n\u6216\u8005\u5728\u6700\u4E0A\u65B9 \u83DC\u5355 \u7EC8\u7AEF \u8FD0\u884C\u4EFB\u52A1 \u76D1\u89C6tsconfig.json",
    lang: "typescript"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "2-\\u6982\\u5FF5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#2-\\u6982\\u5FF5",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "2. \\u6982\\u5FF5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "tsconfig"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#tsconfig",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "tsconfig"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "{\\n   \\"compilerOptions\\": {\\n       // \u5F00\u542Fjs\u63D0\u793A\\n       \\"allowJs\\": true,\\n       // \u6307\u5B9A\u538B\u7F29\u4EE3\u7801\u751F\u6210\u7684\u76EE\u5F55 \u968F\u4FBF\u4E00\u4E2A\u4E0D\u5B58\u5728\u7684\u8DEF\u5F84\u5C31\u884C\\n       \\"outDir\\": \\"./random\\",\\n       \\"declaration\\": true, //\u81EA\u52A8\u751F\u6210.d.ts\u6587\u4EF6\u7C7B\u578B\u6821\u9A8C\\n        \\"module\\": \\"esnext\\", // \u4FDD\u7559import.then\\n          // \u53EA\u5141\u8BB8\u4F7F\u7528@types\u7684\u5305\\n         \\"types\\" : [ \\"jquery\\"],\\n        \\"noImplicitAny\\":true // \u9ED8\u8BA4any\u4E0D\u63D0\u793A\\n        \\"--noImplicitThis\\":true // \u81EA\u52A8\u952E\u5165this\\n        \\"jsx\\": \\"react\\" // preserve\u8868\u793A\u81EA\u5B9A\u4E49\u8F6C\u6362\\n\\n   }\\n}",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "declare"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#declare",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "declare"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// \u5168\u5C40\u7C7B\u578B\u6807\u6CE8\\n// \u58F0\u660E\u4E0D\u5B58\u5728\u7684sdk \u907F\u514D\u62A5\u9519\\ndeclare module '*.css';\\ndeclare module '*.less';\\ndeclare module '*.png';\\ninterface jQuery {}\\ndeclare module 'jquery' {\\n    export = jQuery;\\n}\\ninterface Igradient {\\n  parse?: string;\\n  stringify?: string\\n}\\ndeclare module 'gradient-parser' {\\n  export const gradient: Igradient\\n}\\n# \u9700\u8981\u5728tsconfig.json \u5F15\u5165\u6587\u4EF6\\n  \\"include\\": [\\n    \\"typings.d.ts\\"\\n  ],\\n# react\u6709\u4E9B\u5305\u7684module\u9700\u8981\u5728\u8FD9\u91CC\u5B9A\u4E49\\nreact-app-env.d.ts => declare",
    lang: "typescript"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "namespace"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#namespace",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "namespace"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u76F8\u5F53\u4E8E\u81EA\u6267\u884C\u51FD\u6570\\nnamespace xxx {\\n  export function log(){}\\n}\\nxxx.log('xx')\\n# \u590D\u5236\u4E00\u4E2A\u7C7B\\nnamespace importing {\\n  export class Foo {}\\n}\\nimport Bar = importing.Foo;\\nlet bar: Bar; // ok",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "mixin"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#mixin",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "https://www.typescriptlang.org/docs/handbook/mixins.html"
  }, "mixin")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "class SmartObject implements Disposable, Activatable { }\\n#\\napplyMixins(SmartObject, [Disposable, Activatable]);\\n#\\nfunction applyMixins(derivedCtor: any, baseCtors: any[]) {\\n    baseCtors.forEach(baseCtor => {\\n        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {\\n            derivedCtor.prototype[name] = baseCtor.prototype[name];\\n        })\\n    });\\n}",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "this-\\u6307\\u5411"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#this-\\u6307\\u5411",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "this \\u6307\\u5411"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "type ThisPointer = { name: '19Qingfeng' };\\nfunction xxx(this: ThisPointer) {\\n  this.name;\\n}",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u7248\\u672C\\u95EE\\u9898"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u7248\\u672C\\u95EE\\u9898",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u7248\\u672C\\u95EE\\u9898"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "@types/react \u8981\u548Cts\u7248\u672C\u5BF9\u5E94 \u4E0D\u7136\u4F1A\u62A5\u9519",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "3-\\u6570\\u636E\\u7C7B\\u578B"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#3-\\u6570\\u636E\\u7C7B\\u578B",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "3 \\u6570\\u636E\\u7C7B\\u578B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u57FA\\u672C\\u7C7B\\u578B"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u57FA\\u672C\\u7C7B\\u578B",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u57FA\\u672C\\u7C7B\\u578B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_Table_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "\\u6570\\u636E\\u7C7B\\u578B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "\\u63CF\\u8FF0"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "boolean"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "string"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "\\u63A8\\u8350\\u5355\\u5F15\\u53F7")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Array"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Array", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("t", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "tuple"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "\\u5143\\u7EC4 \\u56FA\\u5B9A\\u957F\\u5EA6\\u7684\\u6570\\u7EC4 [string,string?] => \\u53EF\\u9009")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Object"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "\\u4EFB\\u610F\\u7684 JS \\u5BF9\\u8C61 \\u4F46\\u662F\\u4E0D\\u80FD\\u8C03\\u7528\\u5176\\u4ED6\\u65B9\\u6CD5 \\u5373\\u4FBF\\u5B83\\u771F\\u7684\\u6709")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "any"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "\\u4EFB\\u610F\\u7C7B\\u578B")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "unknown"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "\\u7C7B\\u578B\\u5B89\\u5168\\u7684 any \\u533A\\u522B\\u662F any \\u4F1A\\u628A\\u522B\\u7684\\u4E5F\\u63A8\\u65AD\\u6210 any \\u4ED6\\u53EA\\u63A8\\u65AD\\u81EA\\u5DF1")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "null"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "\\u53EF\\u4EE5\\u8D4B\\u7ED9\\u5176\\u4ED6\\u7C7B\\u578B\\u53D8\\u91CF \\u4F46\\u5982\\u679C--strictNullChecks \\u5C31\\u53EA\\u80FD\\u7ED9\\u81EA\\u5DF1")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "undefined"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "\\u53EF\\u4EE5\\u8D4B\\u7ED9\\u5176\\u4ED6\\u7C7B\\u578B\\u53D8\\u91CF \\u4F46\\u5982\\u679C--strictNullChecks \\u5C31\\u53EA\\u80FD\\u7ED9\\u81EA\\u5DF1")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "void"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "\\u51FD\\u6570\\u6CA1\\u6709\\u8FD4\\u56DE\\u503C\\u4ED6\\u7684\\u7C7B\\u578B\\u5C31\\u662F void \\u53EA\\u80FD undefined null")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "never"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "\\u7528\\u4E8E\\u51FD\\u6570\\u6CA1\\u6709\\u8FD4\\u56DE\\u503C \\u4F8B\\u5982\\u53EA\\u7528\\u4E8E\\u62A5\\u9519\\u7684\\u51FD\\u6570 switch:defualt")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "bigint"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "symbol"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u5176\\u4ED6\\u7C7B\\u578B"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u5176\\u4ED6\\u7C7B\\u578B",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u5176\\u4ED6\\u7C7B\\u578B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_Table_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "\\u6570\\u636E\\u7C7B\\u578B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "\\u63CF\\u8FF0"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "enum"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "\\u679A\\u4E3E \\u53EA\\u80FD\\u8D4B\\u503C\\u4E3A undefined \\u548C null")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "turple"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "let x: [number, string] = [10, \\"jack\\"]")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Union Types"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "| \\u8054\\u5408\\u7C7B\\u578B \\u53EA\\u80FD\\u540C\\u65F6\\u4E3A\\u4E00\\u79CD")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "&"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "& \\u4EA4\\u53C9\\u7C7B\\u578B \\u5408\\u5E76")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u57FA\\u672C\\u4FEE\\u9970\\u7B26"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u57FA\\u672C\\u4FEE\\u9970\\u7B26",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u57FA\\u672C\\u4FEE\\u9970\\u7B26"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_Table_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "\\u4FEE\\u9970\\u7B26"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "\\u63CF\\u8FF0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "\\u5176\\u4ED6"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "?:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "\\u53EF\\u9009\\u5C5E\\u6027"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "!."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "\\u975E\\u7A7A\\u65AD\\u8A00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "\\u53BB\\u9664 Null undefined")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "!:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "\\u5916\\u90E8\\u5F15\\u5165\\u7684\\u53D8\\u91CF"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "readonly"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "\\u53EA\\u8BFB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "\\u6D45\\u7684\\u53EA\\u8BFB")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "is"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "as"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u6620\\u5C04\\u4FEE\\u9970\\u7B26"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u6620\\u5C04\\u4FEE\\u9970\\u7B26",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u6620\\u5C04\\u4FEE\\u9970\\u7B26"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "readonly ? - + \\u6CA1\\u5199\\u7B49\\u4E8E\\u4F7F\\u7528\\u4E86+")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_Table_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "\\u6620\\u5C04\\u4FEE\\u9970\\u7B26"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "\\u63CF\\u8FF0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "\\u5176\\u4ED6"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "-"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "-?:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "\\u9ED8\\u8BA4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "readonly"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "-readonly"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "-?:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u5220\u9664\u5C5E\u6027\u4E2D\u7684\u53EA\u8BFB\u5C5E\u6027\\ntype CreateMutable<Type> = {\\n  -readonly [Property in keyof Type]: Type[Property];\\n};\\ntype LockedAccount = {\\n  readonly id: string;\\n  readonly name: string;\\n};\\ntype UnlockedAccount = CreateMutable<LockedAccount>;\\n// type UnlockedAccount = {\\n//    id: string;\\n//    name: string;\\n// }\\n\\n# \u5220\u9664\u5C5E\u6027\u4E2D\u7684\u53EF\u9009\u5C5E\u6027\\ntype Concrete<Type> = {\\n  [Property in keyof Type]-?: Type[Property];\\n};\\n\\n# as\\ntype MappedTypeWithNewProperties<Type> = {\\n    [Properties in keyof Type as NewKeyType]: Type[Properties]\\n}",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u64CD\\u4F5C\\u7B26"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u64CD\\u4F5C\\u7B26",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u64CD\\u4F5C\\u7B26"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "uppercase"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#uppercase",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Uppercase"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# Uppercase \u628A\u6BCF\u4E2A\u5B57\u7B26\u8F6C\u4E3A\u5927\u5199\u5F62\u5F0F\uFF1A\\ntype Greeting = \\"Hello, world\\"\\ntype ShoutyGreeting = Uppercase<Greeting>\\n// type ShoutyGreeting = \\"HELLO, WORLD\\"\\n\\ntype ASCIICacheKey<Str extends string> = \`ID-\${Uppercase<Str>}\`\\ntype MainID = ASCIICacheKey<\\"my_app\\">\\n// type MainID = \\"ID-MY_APP\\"",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "lowercase"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#lowercase",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Lowercase"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "type Greeting = \\"Hello, world\\"\\ntype QuietGreeting = Lowercase<Greeting>\\n// type QuietGreeting = \\"hello, world\\"\\n\\ntype ASCIICacheKey<Str extends string> = \`id-\${Lowercase<Str>}\`\\ntype MainID = ASCIICacheKey<\\"MY_APP\\">\\n// type MainID = \\"id-my_app\\"",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "capitalize"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#capitalize",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Capitalize"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# Capitalize \u5B57\u7B26\u4E32\u7684\u7B2C\u4E00\u4E2A\u5B57\u7B26\u8F6C\u4E3A\u5927\u5199\u5F62\u5F0F\\ntype LowercaseGreeting = \\"hello, world\\";\\ntype Greeting = Capitalize<LowercaseGreeting>;\\n// type Greeting = \\"Hello, world\\"",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "uncapitalize"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#uncapitalize",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Uncapitalize"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# Uncapitalize\\ntype UppercaseGreeting = \\"HELLO WORLD\\";\\ntype UncomfortableGreeting = Uncapitalize<UppercaseGreeting>;\\n// type UncomfortableGreeting = \\"hELLO WORLD\\"",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u6A21\\u677F\\u5B57\\u9762\\u91CF"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u6A21\\u677F\\u5B57\\u9762\\u91CF",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u6A21\\u677F\\u5B57\\u9762\\u91CF"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "type World = \\"world\\";\\ntype Greeting = \`hello \${World}\`;\\n// type Greeting = \\"hello world\\"\\n# \u5982\u679C\u662F\u8054\u5408\u7C7B\u578B \u5C31\u4F1A\u6709\u591A\u79CD\u53EF\u80FD",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "as")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// \u901A\u8FC7\u6A21\u677F\u5B57\u9762\u91CF\u521B\u5EFA\u4E00\u4E2A\u65B0\u5C5E\u6027\u540D\\ntype Getters<Type> = {\\n    [Property in keyof Type as \`get\${Capitalize<string & Property>}\`]: () => Type[Property]\\n};\\ninterface Person {\\n    name: string;\\n    age: number;\\n    location: string;\\n}\\ntype LazyPerson = Getters<Person>;\\n// type LazyPerson = {\\n//    getName: () => string;\\n//    getAge: () => number;\\n//    getLocation: () => string;\\n// }\\n\\n// \u901A\u8FC7\u6761\u4EF6\u7C7B\u578B\u8FD4\u56DE\u4E00\u4E2Anever \u8FC7\u6EE4\u67D0\u4E9B\u5C5E\u6027\\n// Remove the 'kind' property\\ntype RemoveKindField<Type> = {\\n    [Property in keyof Type as Exclude<Property, \\"kind\\">]: Type[Property]\\n};\\ninterface Circle {\\n    kind: \\"circle\\";\\n    radius: number;\\n}\\ntype KindlessCircle = RemoveKindField<Circle>;\\n\\n// type KindlessCircle = {\\n//    radius: number;\\n// }",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "4-\\u57FA\\u672C-api"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#4-\\u57FA\\u672C-api",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "4. \\u57FA\\u672C API"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u7C7B\\u578B\\u65AD\\u8A00"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u7C7B\\u578B\\u65AD\\u8A00",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u7C7B\\u578B\\u65AD\\u8A00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// \u624B\u52A8\u6307\u5B9A\u67D0\u4E00\u4E2A\u503C\u7684\u7C7B\u578B\\n1.\u503C as \u7C7B\u578B\\n(someValue as string)  React-jsx\u5FC5\u987B\u7528\u8FD9\u4E2A\\n2.<\u7C7B\u578B>\u503C\\n(<string>someValue)\\n\\n# \u53CC\u91CD\u65AD\u8A00\\n const element = (event as any) as HTMLElement; // ok\\n as any as JSX.Element;",
    lang: "typescript"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "type"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#type",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces"
  }, "type \\u548C interface \\u7684\\u533A\\u522B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "interface \\u53EF\\u4EE5\\u540C\\u540D\\u4F1A\\u81EA\\u52A8\\u5408\\u5E76"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "type \\u53EF\\u4F7F\\u7528\\u6A21\\u677F\\u5B57\\u9762\\u91CF \\u7D22\\u5F15\\u4FEE\\u9970\\u7B26\\u7B49")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u6CDB\u578B\\ntype Box<T> = {contents: T; };",
    lang: "typescript"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u51FD\\u6570"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u51FD\\u6570",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u51FD\\u6570"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "type Fn = (...arg: number[]) => void\\nlet IdFn: { <Type>(arg: Type): Type } = IdFn;\\n# \u51FD\u6570\u7684\u91CD\u8F7D\\n...\\n# \u6709\u5C5E\u6027\u7684\u51FD\u6570\\ntype DescribableFunction = {\\n  description: string;\\n  (someArg: number): boolean;\\n};\\nfunction doSomething(fn: DescribableFunction) {\\n  console.log(fn.description + \\" returned \\" + fn(6));\\n}\\n# new\u5B9E\u4F8B\u5316\\ntype SomeConstructor = {\\n  new (str: string): {\\n    num: number;\\n  };\\n};\\nfunction fn(ctor: SomeConstructor) {\\n  return new ctor('1').num;\\n}",
    lang: "typescript"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u679A\\u4E3E"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u679A\\u4E3E",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u679A\\u4E3E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "https://www.typescriptlang.org/docs/handbook/enums.html#const-enums"
  }, "\\u5E38\\u91CF\\u679A\\u4E3E\\u548C\\u76F4\\u63A5\\u679A\\u4E3E\\u7684\\u533A\\u522B"), ": \\u4F1A\\u751F\\u6210\\u989D\\u5916\\u7684\\u4EE3\\u7801"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u76F8\\u540C\\u540D\\u79F0\\u7684\\u679A\\u4E3E\\u81EA\\u52A8\\u5408\\u5E76")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// \u9ED8\u8BA4\u4ECE0\u5F00\u59CB\u9012\u589E \u76F4\u5230\u679A\u4E3E\u8FDB\u884C\u53CD\u5411\u6620\u5C04\\nenum Days {\\n  Sun = 3,\\n  Mon,\\n  Tue,\\n  Wed,\\n  Thu,\\n  Fri,\\n  Sat\\n}\\nlet xxx = Days.Sun\\n# \u5E38\u91CF\u679A\u4E3E\\nconst enum xxx { }\\n# \u83B7\u53D6\u679A\u4E3E\u7684\u7C7B\u578B\\nenum Methods {\\n  'GET',\\n  'POST',\\n}\\nkeyof typeof Methods;  // \\"GET\\" | \\"POST\\"",
    lang: "typescript"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "typeof"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#typeof",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "typeof"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "string | number | boolean | bigint | symbol | undefined | object |function"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u6CA1\\u6709 null"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u9075\\u5B88 falsy \\u503C\\u7EA6\\u5B9A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u901A\\u5E38\\u7ED3\\u5408 keyof \\u4F7F\\u7528"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u53EF\\u4EE5\\u83B7\\u53D6\\u5B9E\\u4F8B\\u7684\\u7C7B\\u578B => InstanceType<typeof \\u5B9E\\u4F8B>")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "keyof"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#keyof",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "keyof"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u53EA\\u80FD\\u8FD4\\u56DE number string symbol \\u7C7B\\u578B \\u9700\\u8981\\u81EA\\u5DF1\\u6536\\u7A84\\u7C7B\\u578B")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u83B7\u53D6\u4E00\u4E2A\u63A5\u53E3\u7684\u6240\u6709key\\ninterface Foo {\\n  name: string;\\n  age: number\\n}\\ntype T = keyof Foo // -> \\"name\\" | \\"age\\"\\n# \u5F53\u53C2\u6570\u4F20\u5165\u5BF9\u8C61 \u548C \u5BF9\u8C61\u7684\u67D0\u4E2A\u952E\u65F6 \u6709\u5173\u7CFB\\nfunction prop<T extends object, K extends keyof T>(obj: T, key: K) {\\n  return obj[key];\\n}\\n# \u751F\u6210\u5B57\u7B26\u4E32\u7684\u8054\u5408\u7C7B\u578B\\ntype xxx = keyof \u63A5\u53E3\\ntype xxx = keyof typeof \u53D8\u91CF(enum)",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u7D22\\u5F15\\u8BBF\\u95EE\\u7C7B\\u578B")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u751F\u6210value\\ntype Person = { age: number; name: string; alive: boolean };\\n\\ntype Age = Person['age'];\\n// type Age = number\\n\\ntype I1 = Person['age' | 'name'];\\n// type I1 = string | number\\n\\ntype I2 = Person[keyof Person];\\n// type I2 = string | number | boolean\\n\\ntype AliveOrName = 'alive' | 'name';\\ntype I3 = Person[AliveOrName];\\n// type I3 = string | boolean\\n\\n# \u6570\u7EC4\u7D22\u5F15 => number\\n const MyArray = [\\n  { name: \\"Alice\\", age: 15 },\\n  { name: \\"Bob\\", age: 23 },\\n  { name: \\"Eve\\", age: 38 },\\n];\\ntype Person = typeof MyArray[number];\\n// type Person = {\\n//    name: string;\\n//    age: number;\\n// }\\n\\ntype Age = typeof MyArray[number][\\"age\\"];\\n// type Age = number\\n\\n// Or\\ntype Age2 = Person[\\"age\\"];\\n// type Age2 = number",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "infer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#infer",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "infer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u6761\\u4EF6\\u7C7B\\u578B => \\u51CF\\u5C11\\u91CD\\u8F7D")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "type NameOrId<T extends number | string> = T extends number\\n  ? IdLabel\\n  : NameLabel;\\nfunction createLabel<T extends number | string>(idOrName: T): NameOrId<T> {\\n  throw \\"unimplemented\\";\\n}\\n\\nlet a = createLabel(\\"typescript\\");\\n// let a: NameLabel\\n\\nlet b = createLabel(2.8);\\n// let b: IdLabel\\n\\nlet c = createLabel(Math.random() ? \\"hello\\" : 42);\\n// let c: NameLabel | IdLabel",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u6761\\u4EF6\\u7C7B\\u578B\\u7EA6\\u675F")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "type MessageOf<T> = T extends { message: unknown } ? T[\\"message\\"] : never;\\n\\ninterface Email {\\n  message: string;\\n}\\n\\ninterface Dog {\\n  bark(): void;\\n}\\n\\ntype EmailMessageContents = MessageOf<Email>;\\n// type EmailMessageContents = string\\n\\ntype DogMessageContents = MessageOf<Dog>;\\n// type DogMessageContents = never\\n#\\ntype Flatten<T> = T extends any[] ? T[number] : T;\\n\\n// Extracts out the element type.\\ntype Str = Flatten<string[]>;\\n// type Str = string\\n\\n// Leaves the type alone.\\ntype Num = Flatten<number>;\\n// type Num = number",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "infer")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "- \u53EF\u4EE5\u4ECE\u6B63\u5728\u6BD4\u8F83\u7684\u7C7B\u578B\u4E2D\u63A8\u65AD\u7C7B\u578B\uFF0C\u7136\u540E\u5728 true \u5206\u652F\u91CC\u5F15\u7528\u8BE5\u63A8\u65AD\u7ED3\u679C\\n  - \u5728\u6761\u4EF6\u7C7B\u578B\u91CC\u63A8\u65AD\\n\`\`\`ts\\n// type Flatten<T> = T extends any[] ? T[number] : T;\\ntype Flatten<T> = T extends Array<infer Item> ? Item : T;\\n# \u83B7\u53D6\u4E00\u4E2A\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u7C7B\u578B\\ntype GetReturnType<Type> = Type extends (...args: never[]) => infer Return\\n  ? Return\\n  : never;\\ntype Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>;\\n// type Bools = boolean[]\\n\`\`\`\\n  - \u5206\u53D1\u6761\u4EF6\u7C7B\u578B\\n\`\`\`ts\\n// \u4F20\u5165\u8054\u5408\u7C7B\u578B\u5C31\u4F1A\u53D8\u6210\u5206\u53D1\\ntype ToArray<Type> = Type extends any ? Type[] : never;\\ntype StrArrOrNumArr = ToArray<string | number>;\\n// type StrArrOrNumArr = string[] | number[]\\n#\\ntype ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;\\n// 'StrArrOrNumArr' is no longer a union.\\ntype StrArrOrNumArr = ToArrayNonDist<string | number>;\\n// type StrArrOrNumArr = (string | number)[]",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "in"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#in",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "in"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "in \u5219\u53EF\u4EE5\u904D\u5386\u679A\u4E3E\u7C7B\u578B\\ntype Keys = \\"a\\" | \\"b\\"\\ntype Obj =  {\\n  [p in Keys]: any\\n} // -> { a: any, b: any }\\n# \u5C06\u6240\u6709\u7684\u7C7B\u578B\u8F6C\u4E3A\u53EF\u9009\u7684\\ntype Partial<T> = {\\n    [P in keyof T]?: T[P];\\n}\\ntype PersonPartial = Partial<Person>;\\n#\\ntype Keys = 'option1' | 'option2';\\ntype Flags = { [K in Keys]: boolean };\\ntype Flags = {\\n    option1: boolean;\\n    option2: boolean;\\n}",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "is"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#is",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "is"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "function isNumber(x: any): x is number { //\u9ED8\u8BA4\u4F20\u5165\u7684\u662Fnumber\u7C7B\u578B\\n  return typeof x === \\"number\\";\\n}\\n\\nconsole.log(isNumber(7)) // true\\nconsole.log(isNumber('7')) //false\\nconsole.log(isNumber(true)) //false",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "5inerface"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#5inerface",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "5.inerface"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# base\\ninterface IPerson {\\n   readonly name: string | number,  // \u53EA\u8BFB\\n   age?: number,                    // \u53EF\u9009\\n   [propsName: string]: any         // \u4EFB\u610F\u5C5E\u6027\u4E2A\u6570\\n}\\n# \u63A5\u53E3\u7EE7\u627F\\ninterface \u65B0\u7684\u63A5\u53E3\u540D entends \u63A5\u53E3\u540D, \u63A5\u53E3\u540D{ }\\n# \u6CDB\u578B\u63A5\u53E3\\ninterface Icreate<T>{ (a:T,b:T):T }\\n# extends \u7C7B\u578B\u6536\u7A84 \u5FC5\u987B\u6709length\u5C5E\u6027\\nfunction longest<Type extends { length: number }>(a: Type, b: Type) {\\n  if (a.length >= b.length) { return a; }\\n  else { return b;}\\n}",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "6-\\u6CDB\\u578B"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#6-\\u6CDB\\u578B",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "6. \\u6CDB\\u578B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "#\\nfunction swap<T, U>(data: [T, U]): [U, T] { } T[]\\n# \u7EA6\u675F\u6CDB\u578B\\nfunction fn<T extends{length: number}>(a: T): number {\\n  return a.length\\n}\\nfn(1)  // \u62A5\u9519 \u6570\u5B57\u6CA1\u6709.length \u5FC5\u987B\u8981\u6709.length\\n# \u4E0E\u51FD\u6570\u7684\u7ED3\u5408\\ninterface Icreate {\\n  <T>(name: string, value: T): Array<T>\\n}\\n# \u4E0E\u7C7B\u7684\u7ED3\u5408\\nclass Person <T>{\\n  name: T;\\n  constructor(name:T){\\n    this.name = name\\n  }\\n}\\nconst xxx = new Person<string>('\u5F20\u4E09')",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "7-class"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#7-class",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "7. class"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "js"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#js",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "js"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "#\u79C1\u6709\u5C5E\u6027",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "api"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#api",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "API"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u904D\u5386\u5C5E\u6027\\nObject.kes(\u5B9E\u4F8B\u540D).forEach(key=>\u5B9E\u4F8B\u540D[key])\\n# \u904D\u5386\u65B9\u6CD5\\nclassName.prototype \u4E0D\u80FD\u901A\u8FC7 forEach\u904D\u5386 // \u6784\u9020\u51FD\u6570 \u53EF\u4EE5\\nObject.getOwnPropertyNames([className].prototype)\\n  .forEach(item=>[className].prototype[item])",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u7C7B\\u8868\\u8FBE\\u5F0F"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u7C7B\\u8868\\u8FBE\\u5F0F",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u7C7B\\u8868\\u8FBE\\u5F0F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "const aaa = class {\\n  // \u533F\u540D\\n}\\nconst bbb = class ccc {\\n  ccc.name\\n  // \u53EA\u6709\u5185\u90E8\u53EF\u4EE5\u8BBF\u95EEccc\\n}",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "4-\\u4E2A\\u72B6\\u6001"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#4-\\u4E2A\\u72B6\\u6001",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "4 \\u4E2A\\u72B6\\u6001"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "public"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#public",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "public"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "\u5B9E\u4F8B\u548C\u7236\u7C7B\u80FD\u90FD\u8BBF\u95EE;",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "static"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#static",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "static"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// \u53EA\u80FD\u7236\u7C7B\u70B9\u51FA\u6765\\n// \u7C7B\u4F3C\u4E8E\u76F4\u63A5\u5728 Person.prototype.aaaa = '\u5B59\u609F\u7A7A'\\n//  constructor() { this.bbb = 12; }\\nclass Person {\\n  static aaaa: string = ' xxx';\\n  bbb: number = 12;\\n  bbb!: number = 12;\\n  [s: string]: boolean | ((s: string) => boolean);\\n}\\nconst per = new Person()\\nconsole.log(Person.aaaa)",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "private"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#private",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "private"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// private    \u79C1\u6709\u7684         \u5916\u754C\u65E0\u6CD5\u8BBF\u95EE \u4E0D\u80FD\u88AB\u7EE7\u627F\\n\u4E3A\u4E86\u907F\u514D\u76F4\u63A5\u4FEE\u6539 class\u4E2D\u7684\u5C5E\u6027 \u4EA7\u751F\u6570\u636E\u6DF7\u4E71\\n\u7528private \u5B9A\u4E49\u5C5E\u6027 \u62D2\u7EDD\u5916\u754C\u8BBF\u95EE\\n\u540C\u65F6\u5728class\u5185\u90E8 \u5B9A\u4E49 getter setter \u5411\u5916\u754C\u5F00\u653E \u83B7\u53D6\u548C\u4FEE\u6539\u7684\u65B9\u6CD5\\n\u5185\u90E8\u53EF\u4EE5\u8BBE\u8BA1 \u65B9\u6CD5\u7684\u6743\u9650\\nclass Person {\\n  _name: string;\\n  private _age: number;\\n  constructor(_name: string, _age: number = 10) {\\n    this._name = _name;\\n    this._age = _age;\\n  }\\n  get age() {\\n    return this._age\\n  }\\n  set age(value: number) {\\n    if (value < 10) {\\n      this._age = value\\n    }\\n  }\\n}\\nconst per = new Person('\u5F20\u4E09', 10)\\nper.age = 200\\nconsole.log(per) //10",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "protected"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#protected",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "protected"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// protected  \u53D7\u4FDD\u62A4\u7684       \u5916\u754C\u65E0\u6CD5\u8BBF\u95EE \u53EF\u4EE5\u88AB\u7EE7\u627F",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "readonly"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#readonly",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "readonly"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "readonly ccc: string = 'ss'\\nstatic readonly ccc: string = 'ss'\\n\u53EA\u80FD\u5728\u6784\u9020\u5668\u91CC\u9762\u4FEE\u6539",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "get-set"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#get-set",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "get set"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// \u624B\u52A8\u5B9A\u4E49 \u83B7\u53D6\u548C\u66F4\u6539\u65B9\u6CD5 \u7684computed\\n// get \u5B9A\u4E49\u7684 \u53EF\u4EE5\u76F4\u63A5\u70B9\u51FA\u6765 \u4E0D\u7528\u8C03\u65B9\u6CD5\\n// \u5982\u679C\u4E0D\u662F\u5173\u952E\u5B57 get \u5C31\u5F97\u4F7F\u7528\u5B9A\u4E49\u7684\u65B9\u6CD5\u4FEE\u6539\\nclass Person {\\n  _name: string;\\n  private _age: number;\\n  constructor(_name: string, _age: number = 10) {\\n    this._name = _name;\\n    this._age = _age;\\n  }\\n  get age() {\\n    return this._age\\n  }\\n  set age(value: number) {\\n    if (value < 10) {\\n      this._age = value\\n    }\\n  }\\n}\\nconst per = new Person('\u5F20\u4E09', 10)\\nper.age = 200\\nconsole.log(per) //10",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "constructor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#constructor",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "constructor"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "constructor-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#constructor-1",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "constructor"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "class Person {\\n  name: string;\\n  age: number;\\n  constructor(name: string, age: number) {\\n    this.name = name;\\n    this.age = age;\\n  }\\n  sayHi() {\\n    console.log('hello')\\n  }\\n}\\nconst per: Person = new Person('2', 2)\\n# \u6216\u8005\\nclass Person {\\n  constructor(public name: string,public age: number) {\\n  }\\n  sayHi() {\\n    console.log('hello')\\n  }\\n}\\nconst per: Person = new Person('2', 2)",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "super"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#super",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "super"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "class Animal {\\n  name: string;\\n  age: number;\\n  constructor(name: string, age: number) {\\n    this.name = name;\\n    this.age = age;\\n  }\\n  sayHi() {\\n    console.log('sss');\\n  }\\n}\\n\\nclass Cat extends Animal {\\n  type: string;\\n  constructor(name: string, age: number, type: string) {\\n    super(name, age);\\n    this.type = type;\\n  }\\n  sayHi() {\\n    super.sayHi();\\n  }\\n}\\nnew Cat('as', 1, 'asd').sayHi();",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "extends"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#extends",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "extends"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "\u5B50\u7C7B\u91CD\u5199\u65B9\u6CD5 \u5728\u5B50\u7C7B\u4E2D \u4F1A\u8986\u76D6\u7236\u7C7B\u7684\u65B9\u6CD5\\n// \u5982\u679C\u8981\u52A0\u5C5E\u6027 \u5FC5\u987B\u5199super \u91CD\u5199\u5C5E\u6027",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "implements"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#implements",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "implements"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# implements  \u9700\u8981\u91CD\u5199\u5C5E\u6027\u548C\u65B9\u6CD5\\nclass A implements \u63A5\u53E3{\\n   /**\\n    * @override\\n    */\\n}\\n// \u4E0D\u7528\u5B9A\u4E49 super() \u53EF\u4EE5\u91CD\u5199 \u5C5E\u6027\u548C\u65B9\u6CD5",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "abstract"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#abstract",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "abstract"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u62BD\u8C61\u7C7B \u7981\u6B62\u88AB\u5B9E\u4F8B\u5316 \u7528\u6765\u88AB\u7EE7\u627F\u7684\\nabstract class Parent{\\n\\n}\\n# \u7236\u7C7B\u6307\u5B9A\u7ED3\u6784 \u5B50\u7C7B\u6765\u5B9E\u73B0 \u907F\u514D\u5FD8\u8BB0\u91CD\u5199\u65B9\u6CD5\u5BFC\u81F4\u4F7F\u7528\u9ED8\u8BA4\u7684\u65B9\u6CD5\\n// \u62BD\u8C61\u65B9\u6CD5\u53EA\u80FD\u4EE5abstract\u5F00\u5934 \u6CA1\u6709\u65B9\u6CD5\u4F53\\n// \u53EA\u80FD\u5B9A\u4E49\u5728\u62BD\u8C61\u7C7B\u91CC\u9762 \u5B50\u7C7B\u5FC5\u987B\u91CD\u5199\\nabstract class Parent{\\n abstract sayHi():void;\\n}",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "8-\\u88C5\\u9970\\u5668"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#8-\\u88C5\\u9970\\u5668",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "8. \\u88C5\\u9970\\u5668"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u5728\\u8FD0\\u884C\\u65F6\\u7ACB\\u5373\\u8C03\\u7528 \\u88AB\\u88C5\\u9970\\u7684\\u58F0\\u660E\\u4FE1\\u606F\\u505A\\u4E3A\\u53C2\\u6570\\u4F20\\u5165")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "function Path(name: string) {\\n  console.log('\u9700\u8981\u901A\u8FC7\u67EF\u91CC\u5316\u5F62\u5F0F\u62FF\u5230\u53C2\u6570,\u9ED8\u8BA4\u4F20\u5165\u7684\u662Ftarget')\\n  return function (traget: any) {\\n    console.dir(name, traget.age)\\n  }\\n}\\n\\n@Path('zhangsan')\\nclass Hello {\\n  public static age: number = 12\\n}\\n\\n# \u51FD\u6570\u53C2\u6570\\n(\\n  target:any,  Hello.prototype\\n  methodName:  string, \u51FD\u6570\u540D\\n  descriptor:  PropertyDecorator \u63CF\u8FF0\\n)",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "9-utility-types"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#9-utility-types",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "9. Utility Types"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u53EF\\u4EE5\\u5305\\u542B promise \\u4E5F\\u53EF\\u4EE5\\u4E0D\\u5305\\u542B")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "awaitedtype"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#awaitedtype",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "Awaited<Type>")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "type C = Awaited<boolean | Promise<number>>;",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "partialtype"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#partialtype",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "Partial<Type>")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u4F20\\u5165\\u7684\\u5C5E\\u6027\\u53D8\\u6210\\u53EF\\u9009"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "type Partial<T> = ", "{", " [P in keyof T]?: T[P] ", "}", ";"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "requiredtype"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#requiredtype",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "Required<Type>")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u5C06\\u4F20\\u5165\\u7684\\u5C5E\\u6027\\u53D8\\u4E3A\\u5FC5\\u9009\\u9879"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "type Required<T> = ", "{", " [P in keyof T]-?: T[P] ", "}", ";"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "readonlytype"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#readonlytype",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "Readonly<Type>")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u5C06\\u4F20\\u5165\\u7684\\u5C5E\\u6027\\u53D8\\u4E3A\\u53EA\\u8BFB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "type Readonly<T> = ", "{", " readonly [P in keyof T]: T[P] ", "}", ";"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "recordkeys-type"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#recordkeys-type",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "Record<Keys, Type>")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u5C06 K \\u4E2D\\u6240\\u6709\\u7684\\u5C5E\\u6027\\u7684\\u503C\\u8F6C\\u5316\\u4E3A T \\u7C7B\\u578B(\\u5B9A\\u4E49\\u4E00\\u4E2A\\u63A5\\u53E3\\u7684 key \\u548C value)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "type Record<K extends keyof any, T> = ", "{", " [P in K]: T ", "}", ";"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "type keys = 'A' | 'B' | 'C';\\nconst result: Record<keys, number> = {\\n  A: 1,\\n  B: 2,\\n  C: 3,\\n};",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "picktype-keys"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#picktype-keys",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "Pick<Type, Keys>")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u4ECE T \\u4E2D\\u53D6\\u51FA \\u4E00\\u7CFB\\u5217 K \\u7684\\u5C5E\\u6027"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "type Pick<T, K extends keyof T> = ", "{", " [P in K]: T[P] ", "}", ";"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// Pick<\u63A5\u53E3,'key1','key2',...>\\ninterface Props {\\n  name: string;\\n  label: number;\\n  value: boolean;\\n}\\ntype ChildrenProps = Pick<Props, 'name' | 'label'>;",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "omittype-keys"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#omittype-keys",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "Omit<Type, Keys>")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// \u5FFD\u89C6\u91CD\u5199\u67D0\u4E2A\u5C5E\u6027\\ninterface A {\\n  a: number;\\n  b: number;\\n}\\ninterface B extends Omit<A, 'a'> {\\n  a: boolean;\\n}",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "excludeuniontype-excludedmembers"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#excludeuniontype-excludedmembers",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "Exclude<UnionType, ExcludedMembers>")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u4ECE T \\u4E2D\\u5254\\u9664\\u53EF\\u4EE5\\u8D4B\\u503C\\u7ED9 U \\u7684\\u7C7B\\u578B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "type Exclude<T, U> = T extends U ? never : T;"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "extracttype-union"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#extracttype-union",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "Extract<Type, Union>")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u63D0\\u53D6 T \\u4E2D\\u53EF\\u4EE5\\u8D4B\\u503C\\u7ED9 U \\u7684\\u7C7B\\u578B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "type Extract<T, U> = T extends U ? T : never;"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "nonnullabletype"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#nonnullabletype",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "NonNullable<Type>")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u4ECE T \\u4E2D\\u5254\\u9664 null \\u548C undefined"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "type NonNullable<T> = T extends null | undefined ? never : T;"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "parameterstype"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#parameterstype",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "Parameters<Type>")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "/**\\n * Obtain the parameters of a function type in a tuple\\n */\\ntype Parameters<T extends (...args: any[]) => any> = T extends (\\n  ...args: infer P\\n) => any\\n  ? P\\n  : never;\\n\\ntype A = Parameters<() => void>; // []\\ntype T1 = Parameters<(s: string) => void>; // [s:string]\\ntype B = Parameters<typeof Array.isArray>; // [any]\\ntype C = Parameters<typeof parseInt>; // [string, (number | undefined)?]\\ntype D = Parameters<typeof Math.max>; // number[]",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "constructorparameterstype"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#constructorparameterstype",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "ConstructorParameters<Type>")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "/**\\n * Obtain the parameters of a constructor function type in a tuple\\n */\\ntype ConstructorParameters<\\n  T extends new (...args: any[]) => any\\n> = T extends new (...args: infer P) => any ? P : never;\\ntype A = ConstructorParameters<ErrorConstructor>;\\n// [(string | undefined)?]\\n\\ntype B = ConstructorParameters<FunctionConstructor>;\\n// string[]\\n\\ntype C = ConstructorParameters<RegExpConstructor>;\\n// [string, (string | undefined)?]",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "returntypetype"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#returntypetype",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "ReturnType<Type>")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u83B7\\u53D6\\u51FD\\u6570\\u8FD4\\u56DE\\u503C\\u7C7B\\u578B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "type T0 = ReturnType<() => string>;",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "instancetypetype"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#instancetypetype",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "InstanceType<Type>")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u83B7\\u53D6\\u6784\\u9020\\u51FD\\u6570\\u7C7B\\u578B\\u7684\\u5B9E\\u4F8B\\u7C7B\\u578B")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "/**\\n * Obtain the return type of a constructor function type\\n */\\ntype InstanceType<T extends new (...args: any[]) => any> = T extends new (\\n  ...args: any[]\\n) => infer R\\n  ? R\\n  : any;\\ntype A = InstanceType<ErrorConstructor>; // Error\\ntype B = InstanceType<FunctionConstructor>; // Function\\ntype C = InstanceType<RegExpConstructor>; // RegExp",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "10-\\u5DE5\\u5177\\u51FD\\u6570"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#10-\\u5DE5\\u5177\\u51FD\\u6570",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "10. \\u5DE5\\u5177\\u51FD\\u6570"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "overrideproperty"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#overrideproperty",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "OverrideProperty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u8986\\u76D6\\u63A5\\u53E3\\u5C5E\\u6027")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "/**\\n * Returns object T, but with T[K] overridden to type U.\\n * @example\\n * type MyObject = { a: number, b: string }\\n * OverrideProperty<MyObject, \\"a\\", string> // returns { a: string, b: string }\\n */\\nexport type OverrideProperty<T, K extends keyof T, U> = Omit<T, K> &\\n  { [P in keyof Pick<T, K>]: U };\\n\\n// type Modify<T, R> = Omit<T, keyof R> & R;",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "deeppartial"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#deeppartial",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "DeepPartial"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "type DeepPartial<T> = {\\n  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];\\n};",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "deeprequired"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#deeprequired",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "DeepRequired"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "type DeepRequired<T> = {\\n  [K in keyof T]-?: T[K] extends object ? DeepRequired<T[K]> : T[K];\\n};",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "getcommonkeys"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#getcommonkeys",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "GetCommonKeys"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// \u63D0\u53D6\u516C\u4F17\u5C5E\u6027\\ntype CommonKeys = Extract<keyof Worker, keyof Student>;",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "deletepartial"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#deletepartial",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "DeletePartial"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u5220\\u9664\\u5C5E\\u6027\\u4E2D\\u7684\\u53EF\\u9009\\u5C5E\\u6027")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "type Concrete<Type> = {\\n  [Property in keyof Type]-?: Type[Property];\\n};",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "\\u5DEE\\u96C6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u5DEE\\u96C6",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u5DEE\\u96C6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "worKer \\u5728 student \\u4E2D\\u4E0D\\u5B58\\u5728\\u7684 key")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "type ExcludeKeys = Exclude<keyof Worker, keyof Student>;",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "tuple--union"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#tuple--union",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "tuple => union"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "[string, number] -> string | number")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "type TTuple = [string, number];\\ntype Res = TTuple[number]; // string | number",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "union--intersection"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#union--intersection",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "union => intersection"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "T1 | T2 -> T1 & T2")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "type UnionToIntersection<U> = (U extends any\\n? (k: U) => void\\n: never) extends (k: infer I) => void\\n  ? I\\n  : never;\\n\\ntype Result = UnionToIntersection<T1 | T2>; // T1 & T2",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "11-react-\\u63A5\\u53E3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#11-react-\\u63A5\\u53E3",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "11. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "https://github.com/DefinitelyTyped/DefinitelyTyped/blob/1349b640d4d07f40aa7c1c6931f18e3fbf667f3a/types/react/index.d.ts#L835"
  }, "react \\u63A5\\u53E3")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "https://github.com/typescript-cheatsheets/react"
  }, "https://github.com/typescript-cheatsheets/react"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "base"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#base",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "base"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u7EC4\u4EF6\\nclass xxx extends React.Component<PropType,StateType>{ }\\nxxx: React.FunctionComponent | FC\\n# \u51FD\u6570props\\nReact.ComponentProps<'button'>\\n# jsx\\nReact.ReactNode JSX.Element\\nJSX.Element-> \u8FD4\u56DE\u503CReact.createElement\\nReact.ReactNode-> \u7EC4\u4EF6\u7684\u8FD4\u56DE\u503C\\n# css\\nReact.CSSProperties\\n# children\\nReact.FunctionComponentElement\\n# html\u5143\u7D20\u63A5\u53E3\\nButtonHTMLAttributes, AnchorHTMLAttributes\\n# promise\\nPromise<string[]>\\n# \u952E\u76D8\u4E8B\u4EF6\\ne:React.KeyboardEvent\\n# props\\nReact.ButtonHTMLAttributes<HTMLButtonElement>\\n\\n# \u4E8B\u4EF6\\nonChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;\\nReact.FormEvent<HTMLInputElement>\\n\\nonSubmit: e: React.SyntheticEvent\\ne.target as typeof e.target & {\\n  email: {value: string }\\n}\\ne.target.email.value\\n\\n# \u5BFC\u51FAprops\\n  type ComponentProps<T> = T extends\\n  | React.ComponentType<infer P>\\n  | React.Component<infer P>\\n  ? JSX.LibraryManagedAttributes<T, P>\\n  : never;\\n\\nconst TestComponent = (props: ComponentProps<typeof GreetComponent>) => {\\n  return <h1 />;\\n};\\nconst el = <TestComponent name=\\"foo\\" />;\\n\\n# \u7EC4\u4EF6\u5B9E\u4F8B \u89C1\u4E0B\u65B9",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "getderivedstatefromprops"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#getderivedstatefromprops",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "getDerivedStateFromProps"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "static getDerivedStateFromProps(\\n    props: Props,\\n    state: State\\n  ): Partial<State> | null {\\n    //\\n  }\\n#\\nclass Comp extends React.Component<\\n  Props,\\n  ReturnType<typeof Comp[\\"getDerivedStateFromProps\\"]>\\n> {\\n  static getDerivedStateFromProps(props: Props) {}\\n}",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "defaultprops"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#defaultprops",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "defaultProps"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// internal contract, should not be exported out\\ntype GreetProps = {\\n  age: number;\\n};\\n\\nclass Greet extends Component<GreetProps> {\\n  static defaultProps = { age: 21 };\\n}\\n\\n// external contract\\nexport type ApparentGreetProps = JSX.LibraryManagedAttributes<\\n  typeof Greet,\\n  GreetProps\\n>;\\n\\n\\n##\\ntype ComponentProps<T> = T extends\\n  | React.ComponentType<infer P>\\n  | React.Component<infer P>\\n  ? JSX.LibraryManagedAttributes<T, P>\\n  : never;\\n\\nconst TestComponent = (props: ComponentProps<typeof GreetComponent>) => {\\n  return <h1 />;\\n};\\n\\n// No error\\nconst el = <TestComponent name=\\"foo\\" />;",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "\\u7EC4\\u4EF6\\u5B9E\\u4F8B"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u7EC4\\u4EF6\\u5B9E\\u4F8B",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u7EC4\\u4EF6\\u5B9E\\u4F8B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "class"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#class",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "class"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "import React from 'react';\\nexport default class Child extends React.Component {\\n  b = () => {};\\n  render() {\\n    return <>Child</>;\\n  }\\n}\\nclass AAA extends React.Component {\\n  myRef = React.createRef<InstanceType<typeof Child>>(null!);\\n  state = {};\\n\\n  backgroundOrigin = () => {\\n    this.myRef.current?.b();\\n  };\\n\\n  render() {\\n    return (\\n      <>\\n        <Child ref={this.myRef} />\\n      </>\\n    );\\n  }\\n}",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "hook"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#hook",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "hook"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u7B2C\\u4E00\\u79CD\\u65B9\\u5F0F")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "import React from 'react';\\nimport Countdown, { CountdownHandle } from './Countdown';\\n\\nfunction App() {\\n  const countdownEl = React.useRef<CountdownHandle>(null!);\\n\\n  React.useEffect(() => {\\n    if (countdownEl.current) {\\n      countdownEl.current.a = 10;\\n    }\\n  }, []);\\n\\n  return <Countdown ref={countdownEl} />;\\n}",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "import React from 'react';\\nexport type CountdownHandle = {\\n  start: () => void;\\n  a: number;\\n};\\n\\ntype Props = {};\\n\\nconst Countdown = React.forwardRef<CountdownHandle, Props>((props, ref) => {\\n  React.useImperativeHandle(ref, () => ({\\n    // start() has type inferrence here\\n    start() {\\n      alert('Start');\\n    },\\n    a: 1,\\n  }));\\n\\n  return <div>Countdown</div>;\\n});\\n\\nexport default Countdown;",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u7B2C\\u4E8C\\u79CD\\u65B9\\u5F0F")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "import React from 'react';\\ntype CountdownHandle = {\\n  start: () => void,\\n};\\ntype CountdownProps = {};\\nconst Countdown: React.ForwardRefRenderFunction<\\n  CountdownHandle,\\n  CountdownProps,\\n> = (props, forwardedRef) => {\\n  React.useImperativeHandle(forwardedRef, () => ({\\n    start() {\\n      alert('Start');\\n    },\\n  }));\\n  return <div>Countdown</div>;\\n};\\n\\nexport default React.forwardRef(Countdown);",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "import React from 'react';\\nimport Countdown from './Countdown';\\n\\nconst App: React.FC = () => {\\n  const ref = React.useRef<React.ElementRef<typeof Countdown>>(null!); // assign null makes it compatible with elements.\\n  ref.current?.start();\\n  return <Countdown ref={ref} />;\\n};",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "vue3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#vue3",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "vue3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<script setup lang=\\"ts\\">\\nimport xxx from './xxx'\\nconst Child = ref<InstanceType<typeof xxx>>(null!)\\n</script>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "bug"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#bug",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Bug"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "numbe-index-sign"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#numbe-index-sign",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "numbe Index sign"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "interface Animal {\\n  name: string;\\n}\\ninterface Dog extends Animal {\\n  breed: string;\\n}\\ninterface NotOkay {\\n  // \u6570\u5B57\u7D22\u5F15\u7684\u8FD4\u56DE\u7C7B\u578B\u5FC5\u987B\u662F \u5B57\u7B26\u7D22\u5F15\u8FD4\u56DE\u7C7B\u578B\u7684\u5B50\u7C7B\u578B\\n  // \u56E0\u4E3Ajs\u4F1A\u9ED8\u8BA4\u8F6C\u4E3A\u5B57\u7B26\u4E32\\n  [x: number]: Dog;\\n  [x: string]: Animal;\\n}",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "tuple-assignment-parameters-error"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#tuple-assignment-parameters-error",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "tuple assignment parameters error"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "const args = [8, 5] as const;\\nconst angle = Math.atan2(...args);",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "double-assign"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#double-assign",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "double assign"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "as any as JSX.Element",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "thissetstate"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#thissetstate",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "this.setState"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// \u5982\u679C\u62A5\u9519 \u9700\u8981\u58F0\u660E\u63A5\u53E3\\nReact.Component<IPorps,IStates>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "objectindex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#objectindex",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "ObjectIndex"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "const props = {\\n  foo: \\"bar\\"\\n};\\nprops[\\"foo\\"] = \\"baz\\";\\n#\\ninterface Props {\\n  foo: string;\\n  [key: string]: Props[keyof Props];\\n}\\n\\nconst props: Props = {\\n  foo: \\"bar\\"\\n};\\n\\nprops[\\"foo\\"] = \\"baz\\"; // ok\\nprops[\\"bar\\"] = \\"baz\\"; // error",
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

//# sourceURL=webpack:///./src/Article2/12.typescript/typescript.md?`)}}]);
