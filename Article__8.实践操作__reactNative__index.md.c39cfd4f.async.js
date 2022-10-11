(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{"72oD":function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
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
    id: "reactnative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#reactnative",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "reactNative"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u5728\\u642D\\u5EFA ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "React Native"), " \\u7684\\u9014\\u4E2D\\u771F\\u7684\\u662F\\u9047\\u5230\\u592A\\u591A\\u95EE\\u9898\\u4E86"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u3002\\u3002\\u3002\\u8FD9\\u91CC\\u8BB0\\u5F55\\u4E00\\u4E0B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u4F7F\\u7528\\u7684\\u64CD\\u4F5C\\u7CFB\\u7EDF\\u662F ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "Macos Monterey")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u53EF\\u4EE5\\u76F4\\u63A5\\u514B\\u9686\\u6211\\u7684\\u4ED3\\u5E93 \\u4FEE\\u6539\\u6210\\u81EA\\u5DF1\\u7684\\u67B6\\u6784", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "https://github.com/eternallycyf/react-native-dva-template"
  }, "\\u4ED3\\u5E93\\u5730\\u5740")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u5DF2\\u7ECF\\u96C6\\u6210\\u4E86", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "antd/react-native"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "dva"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "axios"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "react-native-config (\\u533A\\u5206\\u5F00\\u53D1\\u73AF\\u5883)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "eslint"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "typescript"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "reactnavigation (\\u8DEF\\u7531\\u5BFC\\u822A)")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "2bug-\\u6C47\\u603B"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#2bug-\\u6C47\\u603B",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "2.bug \\u6C47\\u603B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u5148\\u8FDB\\u884C\\u4E0B\\u4E00\\u6B65,\\u9047\\u5230\\u95EE\\u9898\\u518D\\u56DE\\u6765\\u770B\\u770B")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u642D\u5EFA\u73AF\u5883\u4E0B\u8F7D\u4F9D\u8D56\u4E00\u76F4\u5931\u8D25\\nhttps://www.react-native.cn/docs/environment-setup\\n# yarn ios \u8FD0\u884C\u6A21\u62DF\u5668\u65F6\u5019\u6CA1\u6709 app\\n// \u9700\u8981\u7ED9\u6743\u9650\\nsudo chown -R eternallycyf ~/react_native_project\\nchmod 777 RN\\n# \u8FD0\u884C\u62A5\u9519\\n// \u7AEF\u53E3\u5728\u8FD0\u884C\u4E86 \u6740\u4E0B\u7AEF\u53E3\\n\\n# react native debugger \u663E\u793A\u4E00\u7247\u7A7A\u767D\\n// react-devtools \u7248\u672C\u51B2\u7A81 \u8BF7\u5378\u8F7D\u5168\u5C40 react-devtools\\n// \u5E76\u6309\u7167react native debugger \u9875\u9762\u63D0\u793A\u7684\u7248\u672C \u5B89\u88C5\\n// npm i -g react-devtools@^4.13.0\\n// github \u6709 issue\\n# react native debugger \u7F51\u7EDC\u8BF7\u6C42\u4E0D\u663E\u793A\\n// \u4ED6\u8FD9\u4E2A\u9700\u8981\u5148\u624B\u52A8 \u5728 element\u9875\u9762 \u53F3\u952E\u70B9\u51FB enable network \u5F00\u542F\\n\\n# npm\u52A0\u5165\u5176\u4ED6\u5305\u7684\u65F6\u5019\u8BF7\u91CD\u65B0 pod install \u6216\u8005\u76F4\u63A5\u91CD\u65B0\u8FD0\u884C\u6253\u5305\\n\\n# react-native-config ios\u914D\u7F6E\u6210\u529F \u5B89\u5353config\u662F\u4E00\u4E2A\u7A7A\u5BF9\u8C61\u6216\u8005\u4E00\u4E2A\u6742\u4E71\u7684\u5BF9\u8C61\\n// \u8BF7\u786E\u5B9A\\n// 1. android/app/build.gradle \u8BBE\u7F6E\u4E86 resValue \\"string\\", \\"build_config_package\\", \\"com.rn\\"\\n//                                   (\u4ED6\u7684\u503C\u4E0D\u662F\u56FA\u5B9A\u7684 \u662F\u53E6\u4E00\u4E2A\u6587\u4EF6\u91CC\u7684\u5B57\u6BB5)\\n// 2. android/app/src/main/AndroidManifest.xml <manifest package=\\"com.rn\\">\\n// \u5176\u5B9E\u8FD9\u4E2A\u5C31\u5728npm\u9996\u9875\u6709\u5199 \u5F53\u65F6\u6211\u4E5F\u6CA1\u6709\u770B\u5230 \u627E\u4E86\u5F88\u4E45 \u3002\u3002\u3002",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "3\\u51C6\\u5907\\u9636\\u6BB5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#3\\u51C6\\u5907\\u9636\\u6BB5",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "3.\\u51C6\\u5907\\u9636\\u6BB5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u57FA\\u672C\\u73AF\\u5883\\u7684\\u5B89\\u88C5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u57FA\\u672C\\u73AF\\u5883\\u7684\\u5B89\\u88C5",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u57FA\\u672C\\u73AF\\u5883\\u7684\\u5B89\\u88C5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "npx react-native init AwesomeProject\\nnpx react-native init RN --template react-native-template-typescript\\nyarn android\\nyarn ios\\n# \u5177\u4F53\u6D41\u7A0B: \u53C2\u8003\u5B98\u7F51\\n// \u6309\u7740\u5B98\u7F51\u7684\u5148\u4E00\u90E8\u4E00\u90E8\u6765 \u628A\u57FA\u7840\u5FC5\u5907\u7684\u4E1C\u897F\u5148\u88C5\u4E86\\n// \u4F8B\u5982: Xcode Watchman Node CocoaPods\\nhttps://www.react-native.cn/docs/environment-setup\\n# \u5B89\u88C5\u8FC7\u7A0B\u4E2D\u9047\u5230\u7684\u95EE\u9898: \u6307\u5B9A\u955C\u50CF(\u5FC5\u987B \u6216\u8005\u81EA\u5DF1\u4EE3\u7406)\\n// \u53C2\u8003\u8FD9\u7BC7\u6587\u7AE0 \u57FA\u672C\u89E3\u51B3\u7684\u642D\u5EFA\u73AF\u5883\u7684\u6240\u6709\u95EE\u9898\\nhttps://www.jianshu.com/p/412d760bcacd",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "android-\\u6A21\\u62DF\\u5668"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#android-\\u6A21\\u62DF\\u5668",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Android \\u6A21\\u62DF\\u5668"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u8FD9\\u91CC\\u5C31\\u4E0D\\u63D0\\u8FD9\\u4E2A\\u4E86"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u6309\\u7167\\u5B98\\u7F51\\u4E00\\u6B65\\u4E00\\u6B65\\u64CD\\u4F5C && \\u6709\\u4E00\\u4E2A\\u68AF\\u5B50 \\u4E0D\\u7136\\u4E0B\\u8F7D\\u5E94\\u7528\\u7F51\\u7AD9\\u6253\\u4E0D\\u5F00 \\u6216\\u8005\\u627E\\u7B2C\\u4E09\\u65B9\\u7684\\u5730\\u65B9\\u4E0B\\u8F7D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u5176\\u6B21 \\u914D\\u7F6E\\u73AF\\u5883\\u53D8\\u91CF\\u65F6 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "open ~/.bash_profile"), " \\u6216 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "open ~/.zshrc"), " \\u6253\\u4E0D\\u5F00", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u53EF\\u80FD\\u662F\\u81EA\\u5DF1\\u7535\\u8111\\u4E4B\\u524D\\u914D\\u7F6E\\u6709\\u95EE\\u9898"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u7528\\u8FD9\\u4E2A\\u547D\\u4EE4\\u6253\\u5F00 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "open -e ~/.bash_profile"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u8C03\\u8BD5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u8C03\\u8BD5",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u8C03\\u8BD5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "\\u6211\\u7684\\u65B9\\u6848"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u6211\\u7684\\u65B9\\u6848",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u6211\\u7684\\u65B9\\u6848"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u6211\\u8FD9\\u91CC\\u6700\\u7EC8\\u642D\\u5EFA\\u7684\\u4F53\\u7CFB\\u662F\\u91C7\\u7528 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "react-native-debugger"), " \\u548C ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "ios"), "\\u6A21\\u62DF\\u5668\\u7ED3\\u5408", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "react-native-debugger \\u96C6\\u6210\\u4E86 console.log network redux"), " \\u8C03\\u8BD5\\u5DE5\\u5177\\u7B49\\u529F\\u80FD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "ios"), " \\u6A21\\u62DF\\u5668 \\u652F\\u6301\\u63D0\\u793A\\u9519\\u8BEF \\u5143\\u7D20\\u5BA1\\u67E5 \\u7B49\\u529F\\u80FD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u57FA\\u672C\\u6EE1\\u8DB3\\u8C03\\u8BD5\\u7684\\u6240\\u6709\\u9700\\u8981\\u4E86"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "{", "% inlineImg ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "https://user-images.githubusercontent.com/3001525/29451479-6621bf1a-83c8-11e7-8ebb-b4e98b1af91c.png"
  }, "https://user-images.githubusercontent.com/3001525/29451479-6621bf1a-83c8-11e7-8ebb-b4e98b1af91c.png"), " 300px %", "}")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# brew install --cask react-native-debugger\\n\u7136\u540E\u76F4\u63A5\u6253\u5F00\u5E94\u7528\u5C31\u884C // \u6CE8\u610F\u4ED6\u76F4\u63A5\u662F\u4E00\u4E2A\u5E94\u7528 \u4E0D\u662F\u76F4\u63A5\u8FD0\u884C\u5728\u6D4F\u89C8\u5668\u7684",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "\\u8C03\\u8BD5\\u5982\\u4F55\\u4F7F\\u7528"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u8C03\\u8BD5\\u5982\\u4F55\\u4F7F\\u7528",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u8C03\\u8BD5\\u5982\\u4F55\\u4F7F\\u7528"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("blockquote", null, "\\u5728\\u8C03\\u8BD5\\u4E2D\\u9047\\u5230\\u7684bug\\u6211\\u7EDF\\u4E00\\u653E\\u5728\\u7B2C\\u4E8C\\u7AE0\\u8BF4\\u660E\\u4E86,\\u6709\\u95EE\\u9898\\u8BDD\\u5F80\\u524D\\u7FFB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u5237\\u65B0\\u6A21\\u62DF\\u5668:\\u4E24\\u79CD\\u65B9\\u6CD5", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "1.\\u6309\\u4E24\\u4E0B ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "R || r"), " \\u5FEB\\u901F\\u5237\\u65B0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "2.\\u624B\\u52A8\\u5728\\u6A21\\u62DF\\u5668\\u64CD\\u4F5C", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "ios: command+R || command+D => reload")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "android: command + m reload"), " (\\u6A21\\u62DF\\u5668\\u5728 \\u5E94\\u7528 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "=> avd => manager"), "\\u91CC\\u9762)"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u5BA1\\u67E5\\u5143\\u7D20", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "commend+d")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "show Inspector")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u70B9\\u51FB\\u5143\\u7D20"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "console.log"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "1.\\u76F4\\u63A5\\u4F7F\\u7528 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "react-native-debugger"), " \\u8C03\\u8BD5\\u5DE5\\u5177", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "console.log"), " \\u754C\\u9762\\u5C31\\u80FD\\u770B\\u5230\\u4E86"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "2.\\u8FD0\\u884C\\u6A21\\u62DF\\u5668\\u7684\\u7EC8\\u7AEF"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "3.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "command+D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "Debug with Chrome")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u5207\\u6362\\u5230", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "console"), "\\u754C\\u9762"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u5C06", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "top"), "\\u5207\\u6362\\u4E3A ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "debug...")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u7F51\\u7EDC\\u8BF7\\u6C42", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "react native debugger")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u5728 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "Element"), " \\u9875\\u9762 \\u53F3\\u952E\\u5F00\\u542F ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "enable network")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u7136\\u540E\\u5728 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "network"), " \\u9875\\u9762\\u5237\\u65B0\\u5C31\\u80FD\\u770B\\u5230\\u7F51\\u7EDC\\u8BF7\\u6C42\\u4E86"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "redux|dva"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u5728", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "react native debugger"), " \\u9875\\u9762\\u5C31\\u80FD\\u770B\\u5230\\u4E86")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "\\u5176\\u4ED6\\u8C03\\u8BD5\\u65B9\\u6848\\u5355\\u72EC\\u6B65\\u9AA4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u5176\\u4ED6\\u8C03\\u8BD5\\u65B9\\u6848\\u5355\\u72EC\\u6B65\\u9AA4",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u5176\\u4ED6\\u8C03\\u8BD5\\u65B9\\u6848\\u5355\\u72EC\\u6B65\\u9AA4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("blockquote", null, "\\u5982\\u679C\\u6309\\u7167react-native-debugger\\u65B9\\u6848,\\u4E0D\\u9700\\u8981\\u770B\\u8FD9\\u91CC\\u7684\\u5185\\u5BB9,\\u76F4\\u63A5\\u8DF3\\u8FC7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    id: "ts-\\u8BED\\u6CD5\\u63D0\\u793A"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#ts-\\u8BED\\u6CD5\\u63D0\\u793A",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "ts \\u8BED\\u6CD5\\u63D0\\u793A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "npm install --save @types/react-native\\n// \u6839\u76EE\u5F55\u6784\u5EFAtsconfig.json\u6587\u4EF6\\n{\\n  \\"compilerOptions\\": {\\n    \\"allowJs\\": true,\\n    \\"allowSyntheticDefaultImports\\": true,\\n    \\"esModuleInterop\\": true,\\n    \\"isolatedModules\\": true,\\n    \\"jsx\\": \\"react\\",\\n    \\"lib\\": [\\n      \\"es6\\"\\n    ],\\n    \\"moduleResolution\\": \\"node\\",\\n    \\"noEmit\\": true,\\n    \\"strict\\": true,\\n    \\"target\\": \\"esnext\\"\\n  },\\n  \\"exclude\\": [\\n    \\"node_modules\\",\\n    \\"babel.config.js\\",\\n    \\"metro.config.js\\",\\n    \\"jest.config.js\\"\\n  ]\\n}",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    id: "\\u7F51\\u7EDC\\u8BF7\\u6C42"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u7F51\\u7EDC\\u8BF7\\u6C42",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u7F51\\u7EDC\\u8BF7\\u6C42"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// vscode \u5B89\u88C5 react native tools \u63D2\u4EF6\\n// \u6253\u5F00vscode\u5F00\u53D1\u8005\u5DE5\u5177 \u5C31\u53EF\u4EE5\u770B\u5230\u7F51\u7EDC\u8BF7\u6C42\u4E86",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    id: "react-\\u8C03\\u8BD5\\u5DE5\\u5177"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#react-\\u8C03\\u8BD5\\u5DE5\\u5177",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "react \\u8C03\\u8BD5\\u5DE5\\u5177"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// npm i -g react-devtools@^4.13.0\\n// \u7EC8\u7AEF\u8F93\u5165\u547D\u4EE4 react-devtools\\n// \u5728\u6A21\u62DF\u5668\u5237\u65B0\u540E react-devtools \u5C31\u6709\u5185\u5BB9\u4E86",
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
    id: "4-\\u63D2\\u4EF6\\u96C6\\u6210"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#4-\\u63D2\\u4EF6\\u96C6\\u6210",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "4. \\u63D2\\u4EF6\\u96C6\\u6210"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "dva"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#dva",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "dva"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "yarn add dva-core-ts react-redux @types/react-redux\\n// \u968F\u540E\u5F15\u5165dva\u5C31\u53EF\u4EE5\u4E86\\nimport {create, Model} from 'dva-core-ts';\\nimport createLoading from 'dva-loading-ts';\\nimport models from '@/models/index';\\nimport '@/config/http';\\nimport home, {HomeModelType} from '@/models/home';\\nimport {Animated} from 'react-native';\\n\\nconst modelExtend = require('dva-model-extend').default;\\n\\n// 1.\u521B\u5EFA\u5B9E\u4F8B\\nconst app = create({\\n  onError: function(e) {\\n    console.log('e', e);\\n  },\\n});\\n// 2.\u52A0\u8F7Dmodel\u5BF9\u8C61\\nmodels.forEach(model => {\\n  app.model(model);\\n});\\n\\napp.use(createLoading());\\n\\n// 3.\u542F\u52A8dva\\napp.start();\\n// 4.\u5BFC\u51FAdva\u7684\u6570\u636E\\nexport default app._store;\\n\\ninterface Cached {\\n  [key: string]: number;\\n}\\n\\nconst cached: Cached = {\\n  home: 1,\\n};\\nfunction registerModel(model: Model) {\\n  if (!cached[model.namespace]) {\\n    app.model(model);\\n    cached[model.namespace] = 1;\\n  }\\n}\\n\\nexport function createModel(namespace: string) {\\n  const model: HomeModelType = modelExtend(home, {\\n    namespace,\\n    state: {\\n      scrollValue: new Animated.Value(0),\\n    },\\n  });\\n  registerModel(model);\\n}",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "react-native-config"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#react-native-config",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "react-native-config"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// \u533A\u5206\u591A\u73AF\u5883 \u9700\u8981\u91CD\u65B0\u6253\u5305\\nyarn add react-native-config\\n# \u914D\u7F6E \u53C2\u8003Npm\u5B98\u7F51\u5C31\u53EF\u4EE5\u4E86\\n// \u5982\u679C ios \u53EF\u4EE5\u663E\u793A , android \u6253\u5370\u7ED3\u679C\u4E3A\u7A7A\u5BF9\u8C61\u6216\u8005\u4E00\u4E2A\u5BF9\u8C61\u91CC\u6709\u4E00\u5806\u65E0\u5173\u7684\u6570\u636E\\n// \u8BF7\u786E\u5B9A\u81EA\u5DF1\u6B63\u786E\u914D\u7F6E\u4E86 resValue  \u8FD9\u4E2A\u503C\u662F\u53E6\u4E00\u4E2A\u6587\u4EF6\u4E2D\u7684\u53D8\u91CF\\n// \u8FD9\u91CC\u7684 bug \u89E3\u51B3\u65B9\u5F0F\u653E\u5728\u6700\u524D\u9762\u4E86\\n...\\nnpx react-native link react-native-config\\n# \u6839\u76EE\u5F55\u65B0\u5EFA .env\\nAPI_URL=https://myapi.com\\n# App.tsx\\nimport Config from 'react-native-config'",
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
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "antdreactnative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#antdreactnative",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "antd/reactNative"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "import { View, Text, Button } from 'react-native';\\nimport { Icon } from '@ant-design/react-native';",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "react-navigation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#react-navigation",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "React Navigation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "\u8FD9\u4E2A\u76F4\u63A5\u53C2\u8003\u5B98\u65B9\u6587\u6863\u5C31\u53EF\u4EE5\u4E86 \u6211\u6CA1\u6709\u9047\u5230\u4EC0\u4E48\u95EE\u9898\\n\u53EA\u662F\u6709\u4E9BAPI\u6709\u7248\u672C\u95EE\u9898",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "5-\\u53C2\\u8003\\u94FE\\u63A5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#5-\\u53C2\\u8003\\u94FE\\u63A5",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "5. \\u53C2\\u8003\\u94FE\\u63A5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "https://www.react-native.cn/docs/environment-setup"
  }, "ReactNative#\\u5B98\\u7F51\\u642D\\u5EFA\\u5F00\\u53D1\\u73AF\\u5883\\u6587\\u6863")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "https://www.jianshu.com/p/412d760bcacd"
  }, "\\u642D\\u5EFA\\u73AF\\u5883\\u95EE\\u9898\\u7684\\u89E3\\u51B3")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "https://github.com/eternallycyf/react-native-dva-template"
  }, "\\u6211\\u7684 reactNative \\u9879\\u76EE\\u6A21\\u677F\\u4ED3\\u5E93")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "https://dvajs.com/guide/#%E7%89%B9%E6%80%A7"
  }, "dva")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "https://www.npmjs.com/package/react-native-config"
  }, "react-native-config")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "https://www.npmjs.com/package/babel-plugin-module-resolve"
  }, "babel-plugin-module-resolve")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "https://rn.mobile.ant.design/index-cn"
  }, "antd-RN")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "https://reactnavigation.org/"
  }, "React Navigation")))));
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

//# sourceURL=webpack:///./src/Article/8.%E5%AE%9E%E8%B7%B5%E6%93%8D%E4%BD%9C/reactNative/index.md?`)}}]);
