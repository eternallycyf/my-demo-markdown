(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{nN7D:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dumi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rlch");
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("dEAq");
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dumi_theme__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("H1Ra");










 // memo for page content, to avoid useless re-render since other context fields changed

const PageContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(({
  demos: DUMI_ALL_DEMOS
}) => {
  const DumiDemo1 = Object(dumi__WEBPACK_IMPORTED_MODULE_1__[/* dynamic */ "c"])({
    loader: async function () {
      var _interopRequireDefault = __webpack_require__("K+nK")["default"];

      var _react = _interopRequireDefault(await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "cDcd", 7)));

      var _Alert = _interopRequireDefault(await Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, "DGhM")));

      var _default = function _default() {
        return /*#__PURE__*/_react["default"].createElement(_Alert["default"], {
          type: "warning",
          message: "\\u5F85\\u6574\\u7406",
          description: "\\u6574\\u7406\\u540E\\u5C06\\u79FB\\u52A8\\u5230\\u5176\\u4ED6\\u5730\\u65B9"
        });
      };

      return _default;
    },
    loading: () => null
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DumiDemo1, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "markdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    id: "\\u6211\\u7684-typescript-\\u76F8\\u5173\\u4EE3\\u7801"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#\\u6211\\u7684-typescript-\\u76F8\\u5173\\u4EE3\\u7801",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u6211\\u7684 TypeScript \\u76F8\\u5173\\u4EE3\\u7801"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "enum"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#enum",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "enum"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "https://www.typescriptlang.org/docs/handbook/enums.html#const-enums"
  }, "const enum \\u548C enum \\u7684\\u533A\\u522B")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "const enum \\u5728\\u8BA1\\u7B97\\u65F6\\u4F1A\\u81EA\\u52A8\\u6E05\\u9664\\u5197\\u4F59\\u7684\\u8F6C\\u6362\\u4EE3\\u7801")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    code: "enum Methods {\\n  'GET',\\n  'POST',\\n}\\ntype ReqShape = {\\n  url: string;\\n  method: keyof typeof Methods; // \\"GET\\" | \\"POST\\"\\n};",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "infer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#infer",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "infer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    code: "// 1.\u83B7\u53D6\u7D22\u5F15\u7C7B\u578B\\n// type Flatten<T> = T extends any[] ? T[number] : T;\\ntype Flatten<T> = T extends Array<infer Item> ? Item : T;\\n\\n// 2.\u83B7\u53D6\u4E00\u4E2A\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u7C7B\u578B\\ntype GetReturnType<Type> = Type extends (...args: never[]) => infer Return\\n  ? Return\\n  : never;\\ntype Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>;\\n// type Bools = boolean[]\\n\\n// 3.\u5206\u53D1\u6761\u4EF6\u7C7B\u578B\u7684\u5904\u7406\\n// \u4F20\u5165\u8054\u5408\u7C7B\u578B\u5C31\u4F1A\u53D8\u6210\u5206\u53D1\\ntype ToArray<Type> = Type extends any ? Type[] : never;\\ntype StrArrOrNumArr = ToArray<string | number>;\\n// type StrArrOrNumArr = string[] | number[]\\n\\ntype ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;\\n// 'StrArrOrNumArr' is no longer a union.\\ntype StrArrOrNumArr = ToArrayNonDist<string | number>;\\n// type StrArrOrNumArr = (string | number)[]",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u7D22\\u5F15\\u8BBF\\u95EE\\u7C7B\\u578B"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#\\u7D22\\u5F15\\u8BBF\\u95EE\\u7C7B\\u578B",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u7D22\\u5F15\\u8BBF\\u95EE\\u7C7B\\u578B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u4F5C\\u4E3A\\u7D22\\u5F15\\u7684\\u53EA\\u80FD\\u662F\\u7C7B\\u578B")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    code: "type Person = { age: number; name: string; alive: boolean };\\ntype I1 = Person['age' | 'name'];\\n// type I1 = string | number\\n\\ntype I2 = Person[keyof Person];\\n// type I2 = string | number | boolean\\n\\ntype AliveOrName = 'alive' | 'name';\\ntype I3 = Person[AliveOrName];\\n// type I3 = string | boolean\\n\\nconst MyArray = [\\n  { name: 'Alice', age: 15 },\\n  { name: 'Bob', age: 23 },\\n  { name: 'Eve', age: 38 },\\n];\\n\\ntype Person = typeof MyArray[number];\\n// type Person = {\\n// name: string;\\n// age: number;\\n// }\\n\\ntype Age = typeof MyArray[number][\u201Cage\u201D];\\n// type Age = number\\n// Or\\n\\ntype Age2 = Person[\u201Cage\u201D];\\n// type Age2 = number\\n\\nconst APP = ['TaoBao', 'Tmall', 'Alipay'] as const;\\ntype app = typeof APP[number];\\n// type app = \u201CTaoBao\u201D | \u201CTmall\u201D | \u201CAlipay\u201D",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u6620\\u5C04\\u7C7B\\u578B"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#\\u6620\\u5C04\\u7C7B\\u578B",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u6620\\u5C04\\u7C7B\\u578B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    code: "// \u904D\u5386\u6240\u6709\u5C5E\u6027 \u90FD\u53D8\u6210\u5E03\u5C14\u7C7B\u578B\\ntype OptionsFlags<Type> = {\\n  [Property in keyof Type]: boolean;\\n};\\n// \u6620\u5C04\u4FEE\u9970\u7B26: readonly ? - +\\n// 1.\u5220\u9664\u5C5E\u6027\u4E2D\u7684\u53EA\u8BFB\u5C5E\u6027\\ntype CreateMutable<Type> = {\\n  -readonly [Property in keyof Type]: Type[Property];\\n};\\n// 2.\u5220\u9664\u5C5E\u6027\u4E2D\u7684\u53EF\u9009\u5C5E\u6027\\ntype Concrete<Type> = {\\n  [Property in keyof Type]-?: Type[Property];\\n};",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "as")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    code: "// \u901A\u8FC7\u6A21\u677F\u5B57\u9762\u91CF\u521B\u5EFA\u4E00\u4E2A\u65B0\u5C5E\u6027\u540D\\ntype Getters<Type> = {\\n  [Property in keyof Type as \`get\${Capitalize<string & Property>}\`]: () => Type[Property]\\n};\\ninterface Person {\\n  name: string;\\n  age: number;\\n  location: string;\\n}\\ntype LazyPerson = Getters<Person>;\\n// type LazyPerson = {\\n//    getName: () => string;\\n//    getAge: () => number;\\n//    getLocation: () => string;\\n// }",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u6A21\\u677F\\u5B57\\u9762\\u91CF\\u7C7B\\u578B"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#\\u6A21\\u677F\\u5B57\\u9762\\u91CF\\u7C7B\\u578B",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u6A21\\u677F\\u5B57\\u9762\\u91CF\\u7C7B\\u578B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u53EA\\u80FD\\u7528\\u4E8E\\u7C7B\\u578B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u5982\\u679C\\u662F\\u8054\\u5408\\u7C7B\\u578B \\u5C31\\u4F1A\\u663E\\u793A\\u6240\\u6709\\u7684\\u5B57\\u9762\\u91CF\\u4EA4\\u53C9\\u540E\\u7684\\u53EF\\u80FD\\u6027")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    code: "const person = makeWatchedObject({\\nfirstName: \\"Saoirse\\",\\nlastName: \\"Ronan\\",\\nage: 26\\n});\\n// \u7ED9\u4E8B\u4EF6\u52A0\u4E00\u4E2AChanged\u540E\u7F00\\n// \u5FC5\u987Bstring & keyof Type \u56E0\u4E3Akeyof\u53EA\u80FD\u662Fstring number symbol \u6A21\u677F\u5B57\u7B26\u4E32\u7684\u662F string | number | bigint | boolean | null | undefined\\ntype PropEventSource<Type> = {\\n  on(eventName: \`\${string & keyof Type}Changed\`, callback: (newValue: any) => void): void;\\n};\\ndeclare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>;\\n\\n// \u6216\u8005\u8FD9\u6837\\ntype PropEventSource<Type> = {\\non(eventName: \${Exclude<keyof Type, symbol>}Changed, callback: (newValue: any) => void): void;\\n};\\n\\n// \u6216\u8005\u8FD9\u6837\\ntype PropEventSource<Type> = {\\non(eventName: \${Extract<keyof Type, string>}Changed, callback: (newValue: any) => void): void;\\n};\\n\\nperson.on(\\"firstNameChanged\\", () => {});",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u6A21\\u677F\\u5B57\\u7B26\\u4E32\\u7684\\u63A8\\u65AD")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    code: "// \u5C06 on \u53D8\u6210\u4E86\u4E00\u4E2A\u6CDB\u578B\\ntype PropEventSource<Type> = {\\n    on<Key extends string & keyof Type>\\n        (eventName: \`\${Key}Changed\`, callback: (newValue: Type[Key]) => void ): void;\\n};\\n\\ndeclare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>;\\n\\nconst person = makeWatchedObject({\\n  firstName: \\"Saoirse\\",\\n  lastName: \\"Ronan\\",\\n  age: 26\\n});\\n\\nperson.on(\\"firstNameChanged\\", newName => {\\n                                                          // (parameter) newName: string\\n    console.log(\`new name is \${newName.toUpperCase()}\`);\\n});\\n\\nperson.on(\\"ageChanged\\", newAge => {\\n    // (parameter) newAge: number\\n    if (newAge < 0) {\\n        console.warn(\\"warning! negative age\\");\\n    }\\n})",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u5185\\u7F6E\\u5B57\\u7B26\\u64CD\\u4F5C\\u7C7B\\u578B"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#\\u5185\\u7F6E\\u5B57\\u7B26\\u64CD\\u4F5C\\u7C7B\\u578B",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u5185\\u7F6E\\u5B57\\u7B26\\u64CD\\u4F5C\\u7C7B\\u578B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    code: "// 1.Uppercase\\ntype Greeting = \\"Hello, world\\"\\ntype ShoutyGreeting = Uppercase<Greeting>\\n// type ShoutyGreeting = \\"HELLO, WORLD\\"\\ntype ASCIICacheKey<Str extends string> = \`ID-\${Uppercase<Str>}\`\\ntype MainID = ASCIICacheKey<\\"my_app\\">\\n// type MainID = \\"ID-MY_APP\\"\\n\\n\\n// 2.Lowercase\\ntype Greeting = \\"Hello, world\\"\\ntype QuietGreeting = Lowercase<Greeting>\\n// type QuietGreeting = \\"hello, world\\"\\n\\ntype ASCIICacheKey<Str extends string> = \`id-\${Lowercase<Str>}\`\\ntype MainID = ASCIICacheKey<\\"MY_APP\\">\\n// type MainID = \\"id-my_app\\"\\n\\n// 3.Capitalize \u628A\u5B57\u7B26\u4E32\u7684\u7B2C\u4E00\u4E2A\u5B57\u7B26\u8F6C\u4E3A\u5927\u5199\u5F62\u5F0F\\ntype LowercaseGreeting = \\"hello, world\\";\\ntype Greeting = Capitalize<LowercaseGreeting>;\\n// type Greeting = \\"Hello, world\\"\\n\\n// 4.Uncapitalize \u628A\u5B57\u7B26\u4E32\u7684\u7B2C\u4E00\u4E2A\u5B57\u7B26\u8F6C\u6362\u4E3A\u5C0F\u5199\u5F62\u5F0F\uFF1A\\ntype UppercaseGreeting = \\"HELLO WORLD\\";\\ntype UncomfortableGreeting = Uncapitalize<UppercaseGreeting>;\\n// type UncomfortableGreeting = \\"hELLO WORLD\\"",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "utility-types"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#utility-types",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "https://www.typescriptlang.org/docs/handbook/utility-types.html#awaitedtype"
  }, "Utility Types")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "awaitedtype"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#awaitedtype",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "Awaited<Type>")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    code: "",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "partialtype"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#partialtype",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "Partial<Type>")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u4F20\\u5165\\u7684\\u5C5E\\u6027\\u53D8\\u6210\\u53EF\\u9009"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "type Partial<T> = ", "{", " [P in keyof T]?: T[P] ", "}", ";"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "requiredtype"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#requiredtype",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "Required<Type>")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u5C06\\u4F20\\u5165\\u7684\\u5C5E\\u6027\\u53D8\\u4E3A\\u5FC5\\u9009\\u9879"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "type Required<T> = ", "{", " [P in keyof T]-?: T[P] ", "}", ";"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "readonlytype"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#readonlytype",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "Readonly<Type>")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u5C06\\u4F20\\u5165\\u7684\\u5C5E\\u6027\\u53D8\\u4E3A\\u53EA\\u8BFB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "type Readonly<T> = ", "{", " readonly [P in keyof T]: T[P] ", "}", ";"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "recordkeys-type"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#recordkeys-type",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "Record<Keys, Type>")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u5C06 K \\u4E2D\\u6240\\u6709\\u7684\\u5C5E\\u6027\\u7684\\u503C\\u8F6C\\u5316\\u4E3A T \\u7C7B\\u578B(\\u5B9A\\u4E49\\u4E00\\u4E2A\\u63A5\\u53E3\\u7684 key \\u548C value)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "type Record<K extends keyof any, T> = ", "{", " [P in K]: T ", "}", ";"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    code: "type keys = 'A' | 'B' | 'C';\\nconst result: Record<keys, number> = {\\n  A: 1,\\n  B: 2,\\n  C: 3,\\n};",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "picktype-keys"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#picktype-keys",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "Pick<Type, Keys>")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u4ECE T \\u4E2D\\u53D6\\u51FA \\u4E00\\u7CFB\\u5217 K \\u7684\\u5C5E\\u6027"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "type Pick<T, K extends keyof T> = ", "{", " [P in K]: T[P] ", "}", ";"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    code: "// Pick<\u63A5\u53E3,'key1','key2',...>\\ninterface Props {\\n  name: string;\\n  label: number;\\n  value: boolean;\\n}\\ntype ChildrenProps = Pick<Props, 'name' | 'label'>;",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "omittype-keys"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#omittype-keys",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "Omit<Type, Keys>")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    code: "// \u5FFD\u89C6\u91CD\u5199\u67D0\u4E2A\u5C5E\u6027\\ninterface A {\\n  a: number;\\n  b: number;\\n}\\ninterface B extends Omit<A, 'a'> {\\n  a: boolean;\\n}",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "excludeuniontype-excludedmembers"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#excludeuniontype-excludedmembers",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "Exclude<UnionType, ExcludedMembers>")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u4ECE T \\u4E2D\\u5254\\u9664\\u53EF\\u4EE5\\u8D4B\\u503C\\u7ED9 U \\u7684\\u7C7B\\u578B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "type Exclude<T, U> = T extends U ? never : T;"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "extracttype-union"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#extracttype-union",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "Extract<Type, Union>")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u63D0\\u53D6 T \\u4E2D\\u53EF\\u4EE5\\u8D4B\\u503C\\u7ED9 U \\u7684\\u7C7B\\u578B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "type Extract<T, U> = T extends U ? T : never;"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "nonnullabletype"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#nonnullabletype",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "NonNullable<Type>")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u4ECE T \\u4E2D\\u5254\\u9664 null \\u548C undefined"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "type NonNullable<T> = T extends null | undefined ? never : T;"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "parameterstype"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#parameterstype",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "Parameters<Type>")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    code: "/**\\n * Obtain the parameters of a function type in a tuple\\n */\\ntype Parameters<T extends (...args: any[]) => any> = T extends (\\n  ...args: infer P\\n) => any\\n  ? P\\n  : never;\\n\\ntype A = Parameters<() => void>; // []\\ntype B = Parameters<typeof Array.isArray>; // [any]\\ntype C = Parameters<typeof parseInt>; // [string, (number | undefined)?]\\ntype D = Parameters<typeof Math.max>; // number[]",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "constructorparameterstype"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#constructorparameterstype",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "ConstructorParameters<Type>")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    code: "/**\\n * Obtain the parameters of a constructor function type in a tuple\\n */\\ntype ConstructorParameters<\\n  T extends new (...args: any[]) => any\\n> = T extends new (...args: infer P) => any ? P : never;\\ntype A = ConstructorParameters<ErrorConstructor>;\\n// [(string | undefined)?]\\n\\ntype B = ConstructorParameters<FunctionConstructor>;\\n// string[]\\n\\ntype C = ConstructorParameters<RegExpConstructor>;\\n// [string, (string | undefined)?]",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "returntypetype"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#returntypetype",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "ReturnType<Type>")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u83B7\\u53D6\\u51FD\\u6570\\u8FD4\\u56DE\\u503C\\u7C7B\\u578B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    code: "type T0 = ReturnType<() => string>;",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "instancetypetype"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#instancetypetype",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "InstanceType<Type>")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u83B7\\u53D6\\u6784\\u9020\\u51FD\\u6570\\u7C7B\\u578B\\u7684\\u5B9E\\u4F8B\\u7C7B\\u578B")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    code: "/**\\n * Obtain the return type of a constructor function type\\n */\\ntype InstanceType<T extends new (...args: any[]) => any> = T extends new (\\n  ...args: any[]\\n) => infer R\\n  ? R\\n  : any;\\ntype A = InstanceType<ErrorConstructor>; // Error\\ntype B = InstanceType<FunctionConstructor>; // Function\\ntype C = InstanceType<RegExpConstructor>; // RegExp",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "thisparametertypetype"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#thisparametertypetype",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "ThisParameterType<Type>")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    code: "",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "omitthisparametertype"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#omitthisparametertype",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "OmitThisParameter<Type>")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    code: "",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "thistypetype"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#thistypetype",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "ThisType<Type>")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    code: "",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u6211\\u7684\\u5DE5\\u5177\\u51FD\\u6570"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#\\u6211\\u7684\\u5DE5\\u5177\\u51FD\\u6570",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u6211\\u7684\\u5DE5\\u5177\\u51FD\\u6570"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "overrideproperty"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#overrideproperty",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "OverrideProperty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u8986\\u76D6\\u63A5\\u53E3\\u5C5E\\u6027")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    code: "/**\\n * Returns object T, but with T[K] overridden to type U.\\n * @example\\n * type MyObject = { a: number, b: string }\\n * OverrideProperty<MyObject, \\"a\\", string> // returns { a: string, b: string }\\n */\\nexport type OverrideProperty<T, K extends keyof T, U> = Omit<T, K> &\\n  { [P in keyof Pick<T, K>]: U };\\n\\n// type Modify<T, R> = Omit<T, keyof R> & R;",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "deeppartial"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#deeppartial",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "DeepPartial"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    code: "type DeepPartial<T> = {\\n  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];\\n};",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "deeprequired"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#deeprequired",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "DeepRequired"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    code: "type DeepRequired<T> = {\\n  [K in keyof T]-?: T[K] extends object ? DeepRequired<T[K]> : T[K];\\n};",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "getcommonkeys"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#getcommonkeys",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "GetCommonKeys"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    code: "// \u63D0\u53D6\u516C\u4F17\u5C5E\u6027\\ntype CommonKeys = Extract<keyof Worker, keyof Student>;",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "deletepartial"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#deletepartial",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "DeletePartial"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u5220\\u9664\\u5C5E\\u6027\\u4E2D\\u7684\\u53EF\\u9009\\u5C5E\\u6027")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    code: "type Concrete<Type> = {\\n  [Property in keyof Type]-?: Type[Property];\\n};",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u5DEE\\u96C6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#\\u5DEE\\u96C6",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u5DEE\\u96C6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "worKer \\u5728 student \\u4E2D\\u4E0D\\u5B58\\u5728\\u7684 key")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    code: "type ExcludeKeys = Exclude<keyof Worker, keyof Student>;",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "tuple--union"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#tuple--union",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "tuple => union"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "[string, number] -> string | number")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    code: "type TTuple = [string, number];\\ntype Res = TTuple[number]; // string | number",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "union--intersection"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#union--intersection",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "union => intersection"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "T1 | T2 -> T1 & T2")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    code: "type UnionToIntersection<U> = (U extends any\\n? (k: U) => void\\n: never) extends (k: infer I) => void\\n  ? I\\n  : never;\\n\\ntype Result = UnionToIntersection<T1 | T2>; // T1 & T2",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u64CD\\u4F5C\\u7B26"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#\\u64CD\\u4F5C\\u7B26",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u64CD\\u4F5C\\u7B26"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: ""
  }, "\\u6620\\u5C04\\u4FEE\\u9970\\u7B26"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "in")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "is"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "this is Networked & this"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "this is ", "{", " value: T ", "}"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u7528\\u4E8E\\u7C7B\\u578B\\u6536\\u7A84 arr is number[]"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "[]")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "!.xxx")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "!:string")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "as")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "readonly")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "?"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "type-\\u4E0E-interface-\\u7684\\u533A\\u522B"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#type-\\u4E0E-interface-\\u7684\\u533A\\u522B",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "type \\u4E0E interface \\u7684\\u533A\\u522B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "https://www.typescriptlang.org/docs/handbook/advanced-types.html#interfaces-vs-type-aliases"
  }, "https://www.typescriptlang.org/docs/handbook/advanced-types.html#interfaces-vs-type-aliases")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u540C\\u540D\\u7684 type \\u4E0D\\u4F1A\\u81EA\\u52A8\\u5408\\u5E76"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "type \\u53EF\\u4EE5\\u4F7F\\u7528\\u6A21\\u677F\\u5B57\\u9762\\u91CF \\u7D22\\u5F15\\u8BBF\\u95EE\\u7C7B\\u578B\\u7B49\\u7279\\u6027"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "...")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u63D0\\u53D6\\u51FD\\u6570\\u7C7B\\u578B"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#\\u63D0\\u53D6\\u51FD\\u6570\\u7C7B\\u578B",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u63D0\\u53D6\\u51FD\\u6570\\u7C7B\\u578B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    code: "interface Action<T> {\\n  payload?: T;\\n  type: string;\\n}\\n\\ninterface Module {\\n  count: number;\\n  message: string;\\n  asyncMethod<T, U>(input: Promise<T>): Promise<Action<U>>;\\n  syncMethod<T, U>(action: Action<T>): Action<U>;\\n}\\n\\ntype FuncName<T> = {\\n  [P in keyof T]: T[P] extends Function ? P : never;\\n}[keyof T];\\n\\ntype Connect = (module: Module) => { [T in FuncName<Module>]: Module[T] };\\n/*\\n * type Connect = (module: Module) => {\\n *   asyncMethod: <T, U>(input: Promise<T>) => Promise<Action<U>>;\\n *   syncMethod: <T, U>(action: Action<T>) => Action<U>;\\n * }\\n */",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "dispath-\\u8F6C\\u6362"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#dispath-\\u8F6C\\u6362",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "dispath \\u8F6C\\u6362"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    code: "type Action =\\n  | {\\n      type: 'INIT';\\n    }\\n  | {\\n      type: 'SYNC';\\n    }\\n  | {\\n      type: 'LOG_IN';\\n      emailAddress: string;\\n    }\\n  | {\\n      type: 'LOG_IN_SUCCESS';\\n      accessToken: string;\\n    };\\n\\n// \u7528\u7C7B\u578B\u67E5\u8BE2\u67E5\u51FAAction\u4E2D\u6240\u6709type\u7684\u8054\u5408\u7C7B\u578B\\ntype ActionType = Action['type'];\\n\\n// \u628A\u7C7B\u578B\u4E2Dkey\u4E3A\\"type\\"\u53BB\u6389\\ntype ExcludeTypeField<A> = { [K in Exclude<keyof A, 'type'>]: A[K] };\\n\\ntype ExtractActionParameters<A, T> = A extends { type: T } ? A : never;\\n// \u628A\u53C2\u6570\u5BF9\u8C61\u4E2D\u7684type\u53BB\u6389\\n// Extract<A, { type: T }\u4F1A\u6311\u9009\u51FA\u80FDextend { type: T }\u8FD9\u4E2A\u7ED3\u6784\u7684Action\u4E2D\u7684\u7C7B\u578B\\ntype ExtractActionParametersWithoutType<A, T> = ExcludeTypeField<\\n  ExtractActionParameters<A, T>\\n>;\\n\\ntype ExtractSimpleAction<A> = A extends any\\n  ? {} extends ExcludeTypeField<A>\\n    ? A\\n    : never\\n  : never;\\n\\ntype SimpleActionType = ExtractSimpleAction<Action>['type'];\\ntype ComplexActionType = Exclude<ActionType, SimpleActionType>;\\n\\n// \u7B80\u5355\u53C2\u6570\u7C7B\u578B\\nfunction dispatch<T extends SimpleActionType>(type: T): void;\\n// \u590D\u6742\u53C2\u6570\u7C7B\u578B\\nfunction dispatch<T extends ComplexActionType>(\\n  type: T,\\n  args: ExtractActionParametersWithoutType<Action, T>,\\n): void;\\n// \u5B9E\u73B0\\nfunction dispatch(arg: any, payload?: any) {}\\n\\ndispatch('SYNC');\\n\\ndispatch('LOG_IN', {\\n  emailAddress: 'ssh@qq.com',\\n});",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u6DF7\\u5408\\u7EE7\\u627F"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#\\u6DF7\\u5408\\u7EE7\\u627F",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u6DF7\\u5408\\u7EE7\\u627F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    code: "// \u6DF7\u5408\u63A5\u53D7\u4E00\u4E2A\u7C7B\uFF0C\u5E76\u4E14\u4F7F\u7528\u65B0\u529F\u80FD\u6269\u5C55\u5B83\\ntype Constructor<T = {}> = new (...args: any[]) => T;\\n\\n/////////////\\n// mixins \u4F8B\u5B50\\n////////////\\n\\n// \u6DFB\u52A0\u5C5E\u6027\u7684\u6DF7\u5408\u4F8B\u5B50 \u6269\u5C55\u4E00\u4E2A\u7C7B\u5E76\u4E14\u8FD4\u56DE\u5B83\\nfunction Timestamped<TBase extends Constructor>(Base: TBase) {\\n  return class extends Base {\\n    timestamp = Date.now();\\n  };\\n}\\n\\n// \u6DFB\u52A0\u5C5E\u6027\u548C\u65B9\u6CD5\u7684\u6DF7\u5408\u4F8B\u5B50\\nfunction Activatable<TBase extends Constructor>(Base: TBase) {\\n  return class extends Base {\\n    isActivated = false;\\n\\n    activate() {\\n      this.isActivated = true;\\n    }\\n\\n    deactivate() {\\n      this.isActivated = false;\\n    }\\n  };\\n}\\n\\n///////////\\n// \u7EC4\u5408\u7C7B\\n///////////\\n\\n// \u7B80\u5355\u7684\u7C7B\\nclass User {\\n  name = '';\\n}\\n\\n// \u6DFB\u52A0 Timestamped \u7684 User\\nconst TimestampedUser = Timestamped(User);\\n\\n// Tina Timestamped \u548C Activatable \u7684\u7C7B\\nconst TimestampedActivatableUser = Timestamped(Activatable(User));\\n\\n//////////\\n// \u4F7F\u7528\u7EC4\u5408\u7C7B\\n//////////\\n\\nconst timestampedUserExample = new TimestampedUser();\\nconsole.log(timestampedUserExample.timestamp);\\n\\nconst timestampedActivatableUserExample = new TimestampedActivatableUser();\\nconsole.log(timestampedActivatableUserExample.timestamp);\\nconsole.log(timestampedActivatableUserExample.isActivated);",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "react-\\u4E0E-typescript"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#react-\\u4E0E-typescript",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "React \\u4E0E TypeScript"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    code: "// props\\nReact.ComponentProps<'button'>\\nReact.ButtonHTMLAttributes<HTMLButtonElement>\\n// node\\nReact.ReactNode\\n// css\\nReact.CSSProperties\\n// children\\nReact.FunctionComponentElement\\n// \u4E8B\u4EF6\\nonChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;\\nReact.FormEvent<HTMLInputElement>\\nonSubmit: e: React.SyntheticEvent\\ne.target as typeof e.target & {\\n  email: {value: string }\\n}\\ne.target.email.value\\n// \u952E\u76D8\u4E8B\u4EF6\\ne:React.KeyboardEvent\\n\\n// \u8FD4\u56DE\u7A7A\u7684\u7C7B\u578B\\nas any as JSX.Element\\n// forwardRef\\nforwardRef<useImperativeHandle\u91CC\u9762\u65B9\u6CD5\u7684type, props\u7684type>\\n// this.setState\u62A5\u9519\\nReact.Component<P,S>\u5B9A\u4E49state\u7684type\\n\\n// getDerivedStateFromProps\\nstatic getDerivedStateFromProps(\\n    props: Props,\\n    state: State\\n  ): Partial<State> | null {\\n    //\\n  }\\nclass Comp extends React.Component<\\n  Props,\\n  ReturnType<typeof Comp[\\"getDerivedStateFromProps\\"]>\\n> {\\n  static getDerivedStateFromProps(props: Props) {}\\n}\\n// defaultProps\\n  // internal contract, should not be exported out\\ntype GreetProps = {\\n  age: number;\\n};\\n\\nclass Greet extends Component<GreetProps> {\\n  static defaultProps = { age: 21 };\\n}\\n\\n  // external contract\\nexport type ApparentGreetProps = JSX.LibraryManagedAttributes<\\n  typeof Greet,\\n  GreetProps\\n>;\\ntype ComponentProps<T> = T extends\\n  | React.ComponentType<infer P>\\n  | React.Component<infer P>\\n  ? JSX.LibraryManagedAttributes<T, P>\\n  : never;\\n\\nconst TestComponent = (props: ComponentProps<typeof GreetComponent>) => {\\n  return <h1 />;\\n};\\n\\n  // No error\\nconst el = <TestComponent name=\\"foo\\" />;",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    code: "children?: React.ReactNode;\\n  childrenElement: JSX.Element;\\n  style?: React.CSSProperties;\\n  onChange?: React.FormEventHandler<HTMLInputElement>;\\n  props: Props & React.ComponentPropsWithoutRef<\\"button\\">;   // \u4E0D\u8F6C\u53D1\u7684props\\n  props2: Props & React.ComponentPropsWithRef<MyButtonWithForwardRef>;  // \u8F6C\u53D1\u7684props\\n\\n onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;\\n onClick(event: React.MouseEvent<HTMLButtonElement>): void;\\n  onChange = (e: React.FormEvent<HTMLInputElement>): void => {\\n    this.setState({ text: e.currentTarget.value });\\n  };\\n  onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {\\n    this.setState({text: e.currentTarget.value})\\n  }\\n  // \u4E0D\u5173\u5FC3\u4E8B\u4EF6\u7684\u7C7B\u578B\\n  e: React.SyntheticEvent\\n  const target = e.target as typeof e.target & {\\n      email: { value: string };\\n      password: { value: string };\\n  };",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "typescript-\\u83B7\\u53D6-react-\\u53CA-vue-\\u7EC4\\u4EF6\\u5B9E\\u4F8B"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#typescript-\\u83B7\\u53D6-react-\\u53CA-vue-\\u7EC4\\u4EF6\\u5B9E\\u4F8B",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "TypeScript \\u83B7\\u53D6 react \\u53CA vue \\u7EC4\\u4EF6\\u5B9E\\u4F8B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "class-\\u83B7\\u53D6\\u7EC4\\u4EF6\\u5B9E\\u4F8B"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#class-\\u83B7\\u53D6\\u7EC4\\u4EF6\\u5B9E\\u4F8B",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "class \\u83B7\\u53D6\\u7EC4\\u4EF6\\u5B9E\\u4F8B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    code: "import React from 'react';\\nexport default class Child extends React.Component {\\n  b = () => {};\\n  render() {\\n    return <>Child</>;\\n  }\\n}\\nclass AAA extends React.Component {\\n  myRef = React.createRef<InstanceType<typeof Child>>(null!);\\n  state = {};\\n\\n  backgroundOrigin = () => {\\n    this.myRef.current?.b();\\n  };\\n\\n  render() {\\n    return (\\n      <>\\n        <Child ref={this.myRef} />\\n      </>\\n    );\\n  }\\n}",
    lang: "tsx"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "hook-\\u83B7\\u53D6-ref---1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#hook-\\u83B7\\u53D6-ref---1",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "hook \\u83B7\\u53D6 ref - 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    code: "import React from 'react';\\nimport Countdown, { CountdownHandle } from './Countdown';\\n\\nfunction App() {\\n  const countdownEl = React.useRef<CountdownHandle>(null!);\\n\\n  React.useEffect(() => {\\n    if (countdownEl.current) {\\n      countdownEl.current.a = 10;\\n    }\\n  }, []);\\n\\n  return <Countdown ref={countdownEl} />;\\n}",
    lang: "tsx"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    code: "import React from 'react';\\nexport type CountdownHandle = {\\n  start: () => void;\\n  a: number;\\n};\\n\\ntype Props = {};\\n\\nconst Countdown = React.forwardRef<CountdownHandle, Props>((props, ref) => {\\n  React.useImperativeHandle(ref, () => ({\\n    // start() has type inferrence here\\n    start() {\\n      alert('Start');\\n    },\\n    a: 1,\\n  }));\\n\\n  return <div>Countdown</div>;\\n});\\n\\nexport default Countdown;",
    lang: "tsx"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "hook-\\u83B7\\u53D6-ref---2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#hook-\\u83B7\\u53D6-ref---2",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "hook \\u83B7\\u53D6 ref - 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    code: "import React from 'react';\\ntype CountdownHandle = {\\n  start: () => void;\\n};\\ntype CountdownProps = {};\\nconst Countdown: React.ForwardRefRenderFunction<\\n  CountdownHandle,\\n  CountdownProps\\n> = (props, forwardedRef) => {\\n  React.useImperativeHandle(forwardedRef, () => ({\\n    start() {\\n      alert('Start');\\n    },\\n  }));\\n  return <div>Countdown</div>;\\n};\\n\\nexport default React.forwardRef(Countdown);",
    lang: "tsx"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    code: "import React from 'react';\\nimport Countdown from './Countdown';\\n\\nconst App: React.FC = () => {\\n  const ref = React.useRef<React.ElementRef<typeof Countdown>>(null!); // assign null makes it compatible with elements.\\n  ref.current?.start();\\n  return <Countdown ref={ref} />;\\n};",
    lang: "tsx"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "vue3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#vue3",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "vue3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    code: "<script setup lang=\\"ts\\">\\nimport xxx from './xxx'\\nconst Child = ref<InstanceType<typeof xxx>>(null!)\\n</script>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u62A5\\u9519\\u7684\\u89E3\\u51B3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#\\u62A5\\u9519\\u7684\\u89E3\\u51B3",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u62A5\\u9519\\u7684\\u89E3\\u51B3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u5143\\u7EC4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#\\u5143\\u7EC4",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u5143\\u7EC4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    code: "const args = [8, 5] as const;\\nconst angle = Math.atan2(...args);",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u5BF9\\u8C61\\u7D22\\u5F15\\u5F62\\u5F0F"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#\\u5BF9\\u8C61\\u7D22\\u5F15\\u5F62\\u5F0F",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u5BF9\\u8C61\\u7D22\\u5F15\\u5F62\\u5F0F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    code: "const props = {\\n  foo: 'bar',\\n};\\nprops['foo'] = 'baz'; // Element implicitly has an 'any' type because expression of type 'string' can't be used to index type",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    code: "interface Props {\\n  foo: string;\\n  [key: string]: Props[keyof Props];\\n}\\n\\nconst props: Props = {\\n  foo: 'bar',\\n};\\n\\nprops['foo'] = 'baz'; // ok\\nprops['bar'] = 'baz'; // error",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u5BF9\\u8C61\\u5C1A\\u672A\\u5B9A\\u4E49"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"], {
    to: "#\\u5BF9\\u8C61\\u5C1A\\u672A\\u5B9A\\u4E49",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u5BF9\\u8C61\\u5C1A\\u672A\\u5B9A\\u4E49"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    code: "class Component extends React.Component<{}, {}> {\\n    // \u8FD9\u4E2A\u5C5E\u6027\u53EF\u80FD\u662Fundefined\\n    graph: Graph?;\\n\\n    componentDidMount() {\\n      this.graph = new Graph()\\n      this.init(this.graph)\\n    }\\n\\n    init() {\\n      this.graph.on(\\"click\\", () => {})  // Object is possibly 'undefined'\\n    }\\n\\n    render() {\\n        return <div>foo</div>\\n    }\\n}",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    code: "// \u9700\u8981\u4F7F\u7528 type guards\\ninit() {\\n    if (this.graph) this.graph.on(\\"click\\", () => {})  // ok\\n}\\n// !.xxx\\ninit() {\\n    this.graph!.on(\\"click\\", () => {})  // ok\\n}\\n// ?.\\ninit() {\\n   this.graph?.on(\\"click\\", () => {})  // ok\\n}",
    lang: "ts"
  }))));
});
/* harmony default export */ __webpack_exports__["default"] = (props => {
  const _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(dumi_theme__WEBPACK_IMPORTED_MODULE_2__["context"]),
        demos = _React$useContext.demos; // scroll to anchor after page component loaded


  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    var _props$location;

    if (props !== null && props !== void 0 && (_props$location = props.location) !== null && _props$location !== void 0 && _props$location.hash) {
      dumi_theme__WEBPACK_IMPORTED_MODULE_2__["AnchorLink"].scrollToAnchor(decodeURIComponent(props.location.hash.slice(1)));
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageContent, {
    demos: demos
  });
});

//# sourceURL=webpack:///./docs/guide/%E6%88%91%E7%9A%84TypeScript%E7%9B%B8%E5%85%B3%E4%BB%A3%E7%A0%81/index.md?`)}}]);
