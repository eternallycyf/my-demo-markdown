(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{"6ByU":function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dEAq");
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dumi_theme__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("H1Ra");
/* harmony import */ var dumi_theme_default_es_builtins_Table_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("dMo/");










 // memo for page content, to avoid useless re-render since other context fields changed

const PageContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(({
  demos: DUMI_ALL_DEMOS
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "markdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    id: "reative-native"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#reative-native",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Reative Native"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "1-\\u51C6\\u5907\\u9636\\u6BB5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#1-\\u51C6\\u5907\\u9636\\u6BB5",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "1. \\u51C6\\u5907\\u9636\\u6BB5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u57FA\\u672C\\u73AF\\u5883\\u7684\\u5B89\\u88C5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u57FA\\u672C\\u73AF\\u5883\\u7684\\u5B89\\u88C5",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u57FA\\u672C\\u73AF\\u5883\\u7684\\u5B89\\u88C5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "npx react-native init AwesomeProject\\nnpx react-native init RN --template react-native-template-typescript\\nyarn android\\nyarn ios\\n# \u5177\u4F53\u6D41\u7A0B: \u53C2\u8003\u5B98\u7F51\\nhttps://www.react-native.cn/docs/environment-setup\\n# \u5B89\u88C5\u8FC7\u7A0B\u4E2D\u9047\u5230\u7684\u95EE\u9898: \u6307\u5B9A\u955C\u50CF(\u5FC5\u987B \u6216\u8005\u81EA\u5DF1\u4EE3\u7406)\\nhttps://www.jianshu.com/p/412d760bcacd\\n# \u5176\u4ED6bug\\n- yarn ios \u540E\u6CA1\u6709app\\nsudo chown -R eternallycyf ~/react_native_project\\nchmod 777 RN\\n- \u8FD0\u884C\u62A5\u9519\\n\u7AEF\u53E3\u5728\u8FD0\u884C\u4E86 \u6740\u4E0B\u7AEF\u53E3",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u8C03\\u8BD5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u8C03\\u8BD5",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u8C03\\u8BD5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# vscode \u5B89\u88C5 react native tools \u63D2\u4EF6\\n# brew \u5B89\u88C5\u96C6\u6210\u7684\u8C03\u8BD5\u63D2\u4EF6 brew install --cask react-native-debugger\\nopen \\"rndebugger://set-debugger-loc?host=localhost&port=8081\\"\\n# \u8BED\u6CD5\u63D0\u793A\\nnpm install --save @types/react-native\\n\u6839\u76EE\u5F55\u6784\u5EFAtsconfig.json\u6587\u4EF6\\n{\\n  \\"compilerOptions\\": {\\n    \\"allowJs\\": true,\\n    \\"allowSyntheticDefaultImports\\": true,\\n    \\"esModuleInterop\\": true,\\n    \\"isolatedModules\\": true,\\n    \\"jsx\\": \\"react\\",\\n    \\"lib\\": [\\n      \\"es6\\"\\n    ],\\n    \\"moduleResolution\\": \\"node\\",\\n    \\"noEmit\\": true,\\n    \\"strict\\": true,\\n    \\"target\\": \\"esnext\\"\\n  },\\n  \\"exclude\\": [\\n    \\"node_modules\\",\\n    \\"babel.config.js\\",\\n    \\"metro.config.js\\",\\n    \\"jest.config.js\\"\\n  ]\\n}\\n# \u5237\u65B0\u6A21\u62DF\u5668\\n1.\u6309\u4E24\u4E0B R || r \u5FEB\u901F\u5237\u65B0\\n2.command+R || command+D  => reload\\n3.\u5B89\u5353\\n  avd manager\\n  command + m reload\\n# commend+d => show Inspector => \u70B9\u51FB\u5143\u7D20\\n# console.log\\n1.yarn ios \u8FD0\u884C\u7684\u7EC8\u7AEF\u90A3\u91CC\u53EF\u4EE5\u770B\u5230 console.log()\u7684\u8F93\u51FA\\n2.command+D => Debug with Chrome => \u5207\u6362\u5230console\u754C\u9762 => \u5C06top\u5207\u6362\u4E3A debug...\\n3.react native debugger \u5E94\u7528\\n# react \u8C03\u8BD5\u5DE5\u5177\\nnpm i -g react-devtools@^4.13.0\\n\u7EC8\u7AEF\u8F93\u5165 react-devtools\\n\u5728\u6A21\u62DF\u5668\u5237\u65B0\u540E react-devtools \u5C31\u6709\u5185\u5BB9\u4E86\\n# \u7F51\u7EDC\u8BF7\u6C42\\nbrew install --cask react-native-debugger\\n\u5982\u679C\u6CA1\u5F00\u542F \u9F20\u6807\u5728react\u8C03\u8BD5\u5DE5\u5177Hover \u53F3\u952E\u5F00\u542Fnetwork\\n# \u771F\u673A\u8C03\u8BD5",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u76EE\\u5F55\\u7ED3\\u6784"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u76EE\\u5F55\\u7ED3\\u6784",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u76EE\\u5F55\\u7ED3\\u6784"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "__tests__.bundle;\\nandroid;\\nios;\\nnode_modules.buckconfig.flowconfig.ruby - version.watchmanconfig;\\nApp.js;\\napp.json;\\nbabel.config.js;\\nGemfile;\\nGemfile.lock;\\nindex.js;\\nmetro.config.js;\\npackage.json;",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "2-css"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#2-css",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "2. CSS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "style"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#style",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "style"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// \u6240\u6709\u5C3A\u5BF8\u90FD\u6CA1\u6709\u5355\u4F4D \u53EF\u4EE5\u7528\u767E\u5206\u6BD4\u8868\u793A \u9700\u8981\u53CC\u5F15\u53F7\\n// view \u7684css\u4E0D\u80FD\u88AB\u7EE7\u627F\\n# StyleSheet\\nimport { StyleSheet } from 'react-native';\\nconst App = () => {\\n  const styles = StyleSheet.create({\\n    active: {\\n      color: '#fff',\\n      width: '50%',\\n      marginTop: 100,\\n      backgroundColor: 'red',\\n    },\\n  });\\n  return <Text style={styles.active}> hello World </Text>;\\n};\\nexport default App;\\n# flex",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u56FE\\u7247"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u56FE\\u7247",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u56FE\\u7247"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u5F15\u7528\u672C\u5730\u56FE\u7247\\n<Image source={require('./my-icon.png')} /> // \u56FE\u7247\u540D \u4E0D\u80FD\u662F\u53D8\u91CF\\nmy-icon@2x.png //\u547D\u540D\u6210\u8FD9\u6837 \u53EF\u4EE5\u81EA\u52A8\u6839\u636E\u5C4F\u5E55\u5927\u5C0F\u9002\u914D\\n# \u5F15\u7528\u7F51\u7EDC\u56FE\u7247 \u9700\u8981\u624B\u52A8\u6307\u5B9A\u5C3A\u5BF8\u5927\u5C0F \u53EF\u6307\u5B9A\u8BF7\u6C42\u53C2\u6570\\n<Image source={\\n               {uri: 'https://...},\\n               headers:{\u53C2\u6570\u540D:\\"\u53C2\u6570\\"}\\n              }\\n       style={{width: 400, height: 400}}\\n />\\n# base64 \u9700\u8981\u624B\u52A8\u6307\u5B9A\u56FE\u7247\u5C3A\u5BF8\\n<Image\\n  style={{width: 51,height: 51,resizeMode: 'contain',}}\\n  source={{uri:'data: xxxxxx',}}\\n/>\\n# \u80CC\u666F\u56FE\u7247\\n <ImageBackground source={...} style={{width: '100%', height: '100%'}} />",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u52A8\\u753B"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u52A8\\u753B",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u52A8\\u753B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "3-\\u7EC4\\u4EF6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#3-\\u7EC4\\u4EF6",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "3. \\u7EC4\\u4EF6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "import", "{", " View, Text ", "}", " from \\"react-native\\";")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u57FA\\u672C\\u7EC4\\u4EF6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u57FA\\u672C\\u7EC4\\u4EF6",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u57FA\\u672C\\u7EC4\\u4EF6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "view"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#view",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "View"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# div  \u4ED6\u7684style\u4E0D\u4F1A\u88AB\u7EE7\u627F\\n<View\\n/>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#text",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Text"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# p \u6587\u672C\u53EA\u80FD\u653E\u5728\u8FD9\u4E2A\u91CC\\n<Text\\n\\n/>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "textinput"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#textinput",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "TextInput"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# <input type=\\"text\\">\\n<TextInput\\n\\tonChangeText\\n/>",
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
    code: "<Image source=\\"url\\" />",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#button",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Button"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_Table_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "\\u539F\\u6807\\u7B7E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Native \\u4E8B\\u4EF6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "\\u5C5E\\u6027\\u53CA\\u4F5C\\u7528"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "\\u5176\\u4ED6"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "button"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "TouchableHighlight"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "\\u9ED8\\u8BA4\\u5728\\u6309\\u4E0B\\u540E\\u80CC\\u666F\\u53D8\\u6697"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "\\u6309\\u94AE/\\u94FE\\u63A5")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "TouchableNativeFeedback"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "\\u5B89\\u5353\\u6309\\u4E0B\\u4EA7\\u751F\\u6C34\\u82B1\\u6D9F\\u6F2A\\u6548\\u679C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "TouchableOpacity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "\\u6309\\u4E0B\\u540E\\u964D\\u4F4E\\u6309\\u94AE\\u900F\\u660E\\u5EA6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "TouchableWithoutFeedback"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "\\u6309\\u4E0B\\u540E\\u6CA1\\u6709\\u4EFB\\u4F55\\u53CD\\u9988"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<Button title=\\"\\" onPress={} />",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u590D\\u6742\\u7EC4\\u4EF6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u590D\\u6742\\u7EC4\\u4EF6",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u590D\\u6742\\u7EC4\\u4EF6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "scrollview"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#scrollview",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "ScrollView"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// \u9ED8\u8BA4\u5782\u76F4\u6EDA\u52A8\\n<ScrollView\\n  // \u5141\u8BB8\u4F7F\u7528\u6ED1\u52A8\u624B\u52BF\u5BF9\u89C6\u56FE\u5206\u9875 Android \u4E5F\u53EF\u4EE5\u4F7F\u7528 ViewPager\\n  pagingEnabled={}\\n  // \u6C34\u5E73\u6EDA\u52A8\\n  horizontal={boolean}\\n# ios \u53EF\u4EE5\u8BBE\u7F6E\u7F29\u653E\\n  maximumZoomScale\\n  minimumZoomScale\\n/>\\n#\\n\u60F3\u8981\u4E00\u90E8\u5206\u4E0D\u6EDA\u52A8 \u5C31\u5728\u6700\u5916\u5C42\u589E\u52A0\u4E00\u4E2Aview\u5143\u7D20 \u548C \u4E0D\u6EDA\u52A8\u7684\u5185\u5BB9",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "flatlist"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#flatlist",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "FlatList"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# FlatList\\n// \u5782\u76F4\u7684\u6EDA\u52A8\u5217\u8868 \u61D2\u52A0\u8F7D \u5143\u7D20\u53EF\u589E\u5220\\n// \u5FC5\u987B\u6307\u5B9Adata\u548CrenderItem\\n<FlatList\\n   data={[{name:Andy}]}\\n   renderItem={\\n     ({item,index}) => <Text>{item.name}</Text>\\n   }\\n/>",
    lang: "jsx"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "sectionlist"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#sectionlist",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "SectionList"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// \u5206\u7EC4\u7684\u957F\u5217\u8868\\n <SectionList\\n    sections={[\\n      {\\n        title: '\u6D59\u6C5F\u7701',\\n        data: ['\u5B81\u6CE2', '\u676D\u5DDE', '\u7ECD\u5174'],\\n      },\\n      {\\n        title: '\u6CB3\u5317\u7701',\\n        data: ['\u77F3\u5BB6\u5E84', '\u5510\u5C71'],\\n      },\\n    ]}\\n    // item => data\\n    renderItem={({ item }) => <Text>{item}</Text>}\\n    // section => sections\\n    renderSectionHeader={({ section }) => (\\n      <Text{section.title}</Text>\\n    )}\\n    // item => data\\n    keyExtractor={(item, index) => index}\\n/>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "4-api"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#4-api",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "4. API"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u517C\\u5BB9-api"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u517C\\u5BB9-api",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u517C\\u5BB9 API"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "platform"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#platform",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Platform"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// \u68C0\u6D4B\u5E73\u53F0\\n# Platform.OS\\nconst styles = StyleSheet.create({\\n  height: Platform.OS === 'ios' ? 200 : 100\\n  // Platform.OS \u5728 ios \u4E0A\u8FD4\u56DEios \u5728 Android \u8FD4\u56DE android\\n});\\n# Platform.select() \u81EA\u52A8\u4F20\u5165\u76F8\u5E94\u7684\u503C   \u53EF\u4EE5\u8FD4\u56DE\u7EC4\u4EF6\\nconst styles = StyleSheet.create({\\n  container: {\\n    flex: 1,\\n    ...Platform.select({\\n      ios: {\\n        backgroundColor: 'red'\\n      },\\n      android: {\\n        backgroundColor: 'blue'\\n      }\\n    })\\n  }\\n});\\n# Platform.Version   \u68C0\u6D4B\u5B89\u5353API\u7248\u672C\\n# ios\u7248\u672C\\nconst IOSApiVersion = parseInt(Platform.Version, 10);",
    lang: "jsx"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "\\u7279\\u5B9A\\u5E73\\u53F0\\u62D3\\u5C55\\u540D"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u7279\\u5B9A\\u5E73\\u53F0\\u62D3\\u5C55\\u540D",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u7279\\u5B9A\\u5E73\\u53F0\\u62D3\\u5C55\\u540D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u521B\u5EFA\u4E0D\u540C\u540E\u7F00\u6587\u4EF6 \u4F1A\u81EA\u52A8\u5207\u6362\\nBigButton.ios.js\\nBigButton.android.js\\nimport BigButton from './BigButton';",
    lang: "jsx"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u4E8B\\u4EF6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u4E8B\\u4EF6",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u4E8B\\u4EF6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "\\u5E38\\u7528\\u4E8B\\u4EF6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u5E38\\u7528\\u4E8B\\u4EF6",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u5E38\\u7528\\u4E8B\\u4EF6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_Table_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "\\u4E8B\\u4EF6\\u540D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "\\u539F\\u751F\\u4E8B\\u4EF6\\u540D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "\\u63CF\\u8FF0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "\\u5176\\u4ED6"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "onPress"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "onClick"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "\\u70B9\\u51FB\\u4E8B\\u4EF6/\\u89E6\\u6478\\u4E8B\\u4EF6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "onLongPress"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "\\u957F\\u6309"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "onLayout"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "\\u5F53\\u52A0\\u8F7D\\u6216\\u5E03\\u5C40\\u6539\\u53D8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "onPressIn"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "\\u6309\\u4E0B\\u5E76\\u8C03\\u7528 touchable \\u5143\\u7D20 \\u5728 onPress \\u4E4B\\u524D\\u8C03\\u7528"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "onPressOut"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "\\u89E6\\u6478\\u91CA\\u653E\\u540E\\u7ACB\\u5373\\u8C03\\u7528 \\u5728 onPress \\u4E4B\\u524D\\u8C03\\u7528"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "\\u4E8B\\u4EF6\\u5BF9\\u8C61"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u4E8B\\u4EF6\\u5BF9\\u8C61",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u4E8B\\u4EF6\\u5BF9\\u8C61"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "5-react-navigation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#5-react-navigation",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "5 React Navigation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "demo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#demo",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "demo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "#\\nimport React, { useEffect, useRef, useState } from 'react'\\nimport Home from '@/pages/Home'\\nimport Detail from \\"@/pages/Detail\\";\\nimport { NavigationContainer } from '@react-navigation/native';\\nimport { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';\\ntype RootSatackParamList = {\\n  Home: undefined,\\n  Detail: undefined\\n}\\nexport type RootSatackNavigation = NativeStackNavigationProp<RootSatackParamList>\\nconst Stack = createNativeStackNavigator<RootSatackParamList>();\\nconst Navigator = () => {\\n  return (\\n    <>\\n      <NavigationContainer >\\n        <Stack.Navigator initialRouteName=\\"Home\\" screenOptions={{ headerTitleAlign: 'center' }}>\\n          <Stack.Screen\\n            name=\\"Home\\"\\n            component={Home}\\n            options={{\\n              headerTitle: '\u9996\u9875'\\n            }}\\n          />\\n          <Stack.Screen\\n            name=\\"Detail\\"\\n            component={Detail}\\n            options={{\\n              title: '\u8BE6\u60C5\u9875'\\n            }}\\n          />\\n        </Stack.Navigator>\\n      </NavigationContainer>\\n    </>\\n  )\\n}\\nexport default Navigator\\n#\\nimport { RootSatackNavigation } from \\"@/navigator/index\\"\\nimport React, { FC, useEffect, useRef, useState } from 'react'\\nimport { View, Text, Button } from \\"react-native\\"\\ninterface Iprops {\\n  navigation: RootSatackNavigation\\n}\\nconst Home: FC<Iprops> = (props) => {\\n  return (\\n    <>\\n      <Button title=\\"\u8DF3\u8F6C\u5230\u8BE6\u60C5\u9875\\" onPress={() => props.navigation.navigate('Detail')} />\\n    </>\\n  )\\n}\\nexport default Home",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "navigationcontainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#navigationcontainer",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "NavigationContainer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// \u5BB9\u5668 src/navigator/index.tsx\\nimport { NavigationContainer } from '@react-navigation/native';\\nimport * as React from 'react';\\n<NavigationContainer>...</NavigationContainer>;",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "native-stack"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#native-stack",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "native-stack"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "navbar")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    id: "\\u5BB9\\u5668"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u5BB9\\u5668",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u5BB9\\u5668"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "yarn add @react-navigation/native-stack\\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\\nimport Home from '@/pages/Home'\\n// Stack.Navigator Stack.Screen:\u5B9A\u4E49\u8DEF\u7531\\nconst Stack = createNativeStackNavigator();\\nconst Navigator = () => {\\n  return (\\n    <>\\n      <NavigationContainer>\\n        <Stack.Navigator>\\n          <Stack.Screen name=\\"Home\\" component={Home} />\\n        </Stack.Navigator>\\n      </NavigationContainer>\\n    </>\\n  )\\n}\\nexport default Navigator",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    id: "stacknavigator"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#stacknavigator",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Stack.Navigator"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<Stack.Navigator\\n  // \u521D\u59CB\u8DEF\u7531\u540D\\n  initialRouteName=\\"Home\\"\\n  // \u6240\u6709\u8DEF\u7531\u7EDF\u4E00\u914D\u7F6E\\n  screenOptions={screenOptions}\\n/>\\n# screenOptions =>\\n// \u53EF\u4EE5\u662F obj || ({route,navigation})=>({ ... })\\n const screenOptions = {\\n   // navbar \u5C45\u4E2D\u663E\u793A\\n   headerTitleAlign: 'center'\\n   // navbar \u7684\u6587\u5B57\\n   title: string\\n   headerTitle: string\\n   headerStyle: {color:'red'}\\n   // \u9690\u85CF\\n   headerShown: false\\n }",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    id: "stackscreen"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#stackscreen",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Stack.Screen"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<Stack.Screen\\n  name=\\"Home\\"\\n  component={}\\n#\\n  // \u81EA\u5DF1\u7684\u914D\u7F6E\u4FE1\u606F\\n  options={{ title: 'Overview' }}\\n/>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    id: "api"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#api",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "API"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    id: "\\u8DEF\\u7531\\u8DF3\\u8F6C"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u8DEF\\u7531\\u8DF3\\u8F6C",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u8DEF\\u7531\\u8DF3\\u8F6C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// \u53EA\u8981\u88AB\u5BB9\u6613\u5305\u88F9\u4E86\u5C31\u53EF\u4EE5\u7528\\n// \u4F1A\u5173\u95ED\u591A\u4F59\u7684\u9875\u9762 \u7136\u540E\u8DF3\u8F6C\\nprops.navigation.navigate('RouteName');\\nprops.navigation.push('RouteName');\\nprops.navigation.goBack();\\n// \u8FD4\u56DE\u9996\u9875\\nprops.navigation.popToTop();",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    id: "\\u8DEF\\u7531\\u4F20\\u53C2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u8DEF\\u7531\\u4F20\\u53C2",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u8DEF\\u7531\\u4F20\\u53C2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "#\\nprops.navigation.navigate(\\n  'RouteName',\\n  { paramName: 'value'}\\n)\\nprops.navigation.getParam",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "\\u5176\\u4ED6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u5176\\u4ED6",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u5176\\u4ED6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    id: "\\u9690\\u85CF-bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u9690\\u85CF-bar",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u9690\\u85CF bar"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "static navigationOptions = ({ navigation,screenProps,navigationOptions }) => {\\n    return {\\n      title: navigation.getParam('otherParam', 'A Nested Details Screen'),\\n      headerStyle: {\\n        backgroundColor: '#000',\\n      },\\n      headerTintColor: '#fff',\\n      headerTitleStyle: {\\n        fontWeight: 'bold',\\n      }\\n    };\\n  };",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    id: "\\u9876\\u90E8\\u6309\\u94AE"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u9876\\u90E8\\u6309\\u94AE",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u9876\\u90E8\\u6309\\u94AE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "## \u9876\u90E8\u6309\u94AE\\nclass HomeScreen extends React.Component {\\n  static navigationOptions = {\\n    headerTitle: <LogoTitle />,\\n    headerRight: (\\n      <Button\\n        onPress={() => alert('This is a button!')}\\n        title=\\"Info\\"\\n        color=\\"#fff\\"\\n      />\\n    ),\\n  };\\n}",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    id: "createbottomtabnavigator"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#createbottomtabnavigator",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "createBottomTabNavigator"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "6-dva"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#6-dva",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "6 dva"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "yarn add dva-core-ts react-redux @types/react-redux",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "import { create, Model } from 'dva-core-ts';\\nimport createLoading from 'dva-loading-ts';\\nimport models from '@/models/index';\\nimport '@/config/http';\\nimport home, { HomeModelType } from '@/models/home';\\nimport { Animated } from 'react-native';\\n\\nconst modelExtend = require('dva-model-extend').default;\\n\\n// 1.\u521B\u5EFA\u5B9E\u4F8B\\nconst app = create({\\n  onError: function(e) {\\n    console.log('e', e);\\n  },\\n});\\n// 2.\u52A0\u8F7Dmodel\u5BF9\u8C61\\nmodels.forEach(model => {\\n  app.model(model);\\n});\\n\\napp.use(createLoading());\\n\\n// 3.\u542F\u52A8dva\\napp.start();\\n// 4.\u5BFC\u51FAdva\u7684\u6570\u636E\\nexport default app._store;\\n\\ninterface Cached {\\n  [key: string]: number;\\n}\\n\\nconst cached: Cached = {\\n  home: 1,\\n};\\nfunction registerModel(model: Model) {\\n  if (!cached[model.namespace]) {\\n    app.model(model);\\n    cached[model.namespace] = 1;\\n  }\\n}\\n\\nexport function createModel(namespace: string) {\\n  const model: HomeModelType = modelExtend(home, {\\n    namespace,\\n    state: {\\n      scrollValue: new Animated.Value(0),\\n    },\\n  });\\n\\n  registerModel(model);\\n}",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "8-\\u5E93"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#8-\\u5E93",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "8 \\u5E93"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "react-native-config"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#react-native-config",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "react-native-config"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// \u533A\u5206\u591A\u73AF\u5883 \u9700\u8981\u91CD\u65B0\u6253\u5305\\nyarn add react-native-config\\n# \u914D\u7F6E \u53C2\u8003Npm\u5B98\u7F51\\n...\\nnpx react-native link react-native-config\\n// \u6CE8\u610F\u5B89\u5353\u9700\u8981\u989D\u5916\u914D\u7F6E  resValue\\n# \u6839\u76EE\u5F55\u65B0\u5EFA .env\\nAPI_URL=https://myapi.com\\n# App.tsx\\nimport Config from 'react-native-config'",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "babel-plugin-module-resolve"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#babel-plugin-module-resolve",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "babel-plugin-module-resolve"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "yarn add babel-plugin-module-resolver\\n# babel.config.js\\nmodule.exports = {\\n  presets: ['module:metro-react-native-babel-preset'],\\n  plugins: [\\n    [\\n      'module-resolver',\\n      {\\n        root: ['./src'],\\n        alias: {\\n          '@/utils': './src/utils',\\n          '@/pages': './src/pages',\\n          '@/navigator': './src/navigator',\\n          '@/models': './src/models',\\n          '@/config': './src/config',\\n          '@/components': './src/components',\\n          '@/assets': './src/assets',\\n        },\\n      },\\n    ],\\n  ],\\n};\\n# tsconfig.json\\n \\"baseUrl\\": \\"./src\\",\\n \\"paths\\": {\\n      \\"@/assets/*\\": [\\"assets/*\\"],\\n      \\"@/components/*\\": [\\"components/*\\"],\\n      \\"@/config/*\\": [\\"config/*\\"],\\n      \\"@/models/*\\": [\\"models/*\\"],\\n      \\"@/navigator/*\\": [\\"navigator/*\\"],\\n      \\"@/pages/*\\": [\\"pages/*\\"],\\n      \\"@/utils/*\\": [\\"utils/*\\"]\\n },",
    lang: "jsx"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "yapi"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#yapi",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Yapi"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "yapi server\\nnode vendors/server/app.js\\n3301\\nnode\u7248\u672C\u4E0D\u8981\u592A\u9AD8 11.0.0\u5C31\u884C\\n\u9ED8\u8BA4\u5BC6\u7801 ymfe.org\\n#\\n\u53F3\u4E0A\u89D2 \u65B0\u5EFA\u9879\u76EE \u968F\u4FBF\u5199\\n\u5DE6\u8FB9 \u516C\u5171\u5206\u7C7B \u6DFB\u52A0\u63A5\u53E3\\n/test\\n\u4E2D\u95F4 \u7F16\u8F91 \u8BBE\u7F6E\u63A5\u53E3\u76F8\u5173\u53C2\u6570\\n    \u8FD4\u56DE\u6570\u636E\u8BBE\u7F6E JSON \u5BFC\u5165json\\n     id  string @id\\n# \u5728 mock.js \u6587\u6863\u67E5\u770B\u81EA\u5B9A\u4E49\u8BBE\u7F6E\u6570\u636E\u7C7B\u578B\\n@integer(60, 100)\\nhttp://39.105.213.120/mock/11",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "9-antd"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#9-antd",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "9. antd"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "import { View, Text, Button } from 'react-native';\\nimport { Icon } from '@ant-design/react-native';",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "10-\\u6253\\u5305"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#10-\\u6253\\u5305",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "10. \\u6253\\u5305"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "android"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#android",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "android"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u7B7E\u540D\u5BC6\u5319\\nkeytool -genkey -v -keystore \${\u540D\u7A31}.keystore -alias \${\u5225\u540D} -keyalg RSA -keysize 2048 -validity 10000\\n\\nkeytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -KEYSIZE 2048 -VALIDITY 10000\\nwangxince1999\\n\u662F\\n#\\nbrew install gradle\\nexport JAVA_HOME=$(/usr/libexec/java_home)\\n./gradlew assembleRelease\\n./gradlew assembleRelease  // apk",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "ios"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#ios",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "ios"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u5BFC\u51FA\u6587\u4EF6\u548C\u8D44\u6E90\\nreact-native bundle --platform ios --entry-file index.js --bundle-output ./bundles/main.jsbundle --assets-dest  ./bundles --dev false",
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

//# sourceURL=webpack:///./src/Article/9.react/reactNative/index.md?`)}}]);
