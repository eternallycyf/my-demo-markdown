(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{LcI2:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
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
    id: "linux"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#linux",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Linux"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u51C6\\u5907\\u9636\\u6BB5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u51C6\\u5907\\u9636\\u6BB5",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u51C6\\u5907\\u9636\\u6BB5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "\u5B89\u88C5\\nmake\\nmake install",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u5F00\\u673A\\u5173\\u673A"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u5F00\\u673A\\u5173\\u673A",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u5F00\\u673A\\u5173\\u673A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// \u540C\u6B65\u6570\u636E\u5230\u786C\u76D8\\nsync\\n// \u5173\u673A\\nshutdown\\n// \u91CD\u542F\\nreboot  | shutdown -r now\\n// 10\u5206\u949F\u540E \u91CD\u542F\\nshutdown -r +10\\n// \u5173\u95ED\u7CFB\u7EDF\\nhalt\\n\\nifconfig en0  // ipconfig/all     ip addr\\ncurl localhost:3344",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u76EE\\u5F55"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u76EE\\u5F55",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u76EE\\u5F55"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "/\\nbin  \u5B58\u653E\u4F7F\u7528\u7684\u547D\u4EE4\\nboot linux\u6838\u5FC3\u6587\u4EF6\\ndev  \u5B58\u653E\u5916\u90E8\u8BBE\u5907\\nmnt  \u4E34\u65F6\u6302\u8F7D\u6587\u4EF6\u7CFB\u7EDF \u5149\u9A71\\nmedia  u\u76D8 \u5149\u9A71\\nlib  \u52A8\u6001\u94FE\u63A5\u5171\u4EAB\u5E93\\nlost+fount \u7CFB\u7EDF\u975E\u6CD5\u5173\u673A\u524D\u6CA1\u4FDD\u5B58\u7684\u6587\u4EF6\\nproc \u7CFB\u7EDF\u5185\u5B58\u6620\u5C04 \u7CFB\u7EDF\u4FE1\u606F\\nsbin \u7CFB\u7EDF\u7BA1\u7406\u5458\u7684\u7CFB\u7EDF\u7BA1\u7406\u7A0B\u5E8F\\nsrv  \u670D\u52A1\u542F\u52A8\u540E\u9700\u8981\u63D0\u53D6\u7684\u6570\u636E\\nsys  \u5B58\u653E\u6587\u4EF6\u7CFB\u7EDF\\nrun  \u4E34\u65F6\u6587\u4EF6\u7CFB\u7EDF\\n\\n\\netc  \u7CFB\u7EDF\u7BA1\u7406\u914D\u7F6E\u6587\u4EF6\\nhome \u7528\u6237\u6587\u4EF6\u5939\\nroot \u7BA1\u7406\u5458\u6587\u4EF6\u5939\\nopt  \u653E\u6570\u636E\u5E93\u7B49\u5B88\u62A4\u8FDB\u7A0B\\nuser \u7528\u6237\u7684\u7A0B\u5E8F\u653E\u5728\u8FD9\u91CC qq \u5FAE\u4FE1\\n     user/bin  \u7CFB\u7EDF\u7528\u6237\\n     user/sbin \u8D85\u7EA7\u7528\u6237\\n     user/src  \u5185\u6838\u6E90\u4EE3\u7801\\nvar  \u65E5\u5FD7\\ntmp  \u4E34\u65F6\u6587\u4EF6\\nwww  \u5B58\u653E\u7F51\u7AD9",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u6587\\u4EF6\\u540D\\u5B57\\u542B\\u4E49"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u6587\\u4EF6\\u540D\\u5B57\\u542B\\u4E49",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u6587\\u4EF6\\u540D\\u5B57\\u542B\\u4E49"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "drwx-wx-wx-x@ root root\\n# \u7B2C\u4E00\u4E2A\u5B57\u7B26\\nd \u8868\u793A\u76EE\u5F55\\nr \u4FBF\u662F\u53EF\u4EE5\u6253\u5F00\u7684\u6587\u4EF6\\n- \u6587\u4EF6\\nl \u94FE\u63A5\u6587\u6863\\n# \u4E09\u7EC4\\nr\u53EF\u8BFB w\u53EF\u5199 x\u53EF\u6267\u884C -\u6CA1\u6743\u9650\\n\u4E3B\u6743\u9650 \u7EC4\u6743\u9650 \u5176\u4ED6\u7528\u6237\u6743\u9650\\n# \u5C5E\u7EC4 \u5C5E\u4E3B\\n# \u6587\u4EF6\u5927\u5C0F \u65F6\u95F4",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u8D26\\u53F7\\u7BA1\\u7406"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u8D26\\u53F7\\u7BA1\\u7406",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u8D26\\u53F7\\u7BA1\\u7406"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u6DFB\u52A0\u7528\u6237\\nuseradd - \u9009\u9879 \u7528\u6237\u540D\\n        -m \u7528\u6237\u540D \u81EA\u52A8\u521B\u5EFA\u8FD9\u4E2A\u7528\u6237\u7684\u4E3B\u76EE\u5F55\\n  /etc/passwd\\n# \u5220\u9664\u7528\u6237\\nuserdel -r \u7528\u6237\u540D\\n# \u5207\u6362\u7528\u6237\\nsu \u7528\u6237\u540D\\nsudo su\\n# hostname \u4E3B\u673A\u540D\\nhostname \u4FEE\u6539\u4E3B\u673A\u540D\\n# \u8BBE\u7F6E\u5BC6\u7801\\npasswd \u7528\u6237\u540D",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u57FA\\u672C\\u547D\\u4EE4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u57FA\\u672C\\u547D\\u4EE4",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u57FA\\u672C\\u547D\\u4EE4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "ls -\\na - // \u6240\u6709\u7684\u6587\u4EF6\\nl - // \u5305\u542B\u6587\u4EF6\u7684\u5C5E\u6027\u548C\u6743\u9650 \u6CA1\u6709\u9690\u85CF\u6587\u4EF6\\n  al;\\n\\npwd; // \u663E\u793A\u5F53\u524D\u76EE\u5F55",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u6587\\u4EF6\\u64CD\\u4F5C"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u6587\\u4EF6\\u64CD\\u4F5C",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u6587\\u4EF6\\u64CD\\u4F5C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "mkdir -p \u8DEF\u5F84     // \u9012\u5F52\u521B\u5EFA \u4E0D\u52A0\u5C31\u53EA\u80FD\u5728\u6587\u4EF6\u5B58\u5728\u7684\u57FA\u7840\u4E0A\u521B\u5EFA\\n\\nrm \u6587\u4EF6\u540D             // \u5220\u9664\u6587\u4EF6\\nrmdir \u6587\u4EF6\u5939\u540D\u5B57       // \u5220\u9664\u6587\u4EF6\u5939\\nrm -rf \u6587\u4EF6\u6216\u6587\u4EF6\u5939\u540D\u5B57 // \u5220\u9664\u6240\u6709  /*\\n\\ncp \u539F\u8DEF\u5F84 \u65B0\u8DEF\u5F84      // \u590D\u5236\u6587\u4EF6\\ncp -a \u539F\u8DEF\u5F84 \u65B0\u8DEF\u5F84   // \u590D\u5236\u6587\u4EF6\u5939\\n\\nmv \u539F\u8DEF\u5F84 \u65B0\u8DEF\u5F84     // \u79FB\u52A8\u6587\u4EF6\u6216\u6587\u4EF6\u5939 \u91CD\u547D\u540D\u6587\u4EF6\\nmv -f \u539F\u8DEF\u5F84 \u65B0\u8DEF\u5F84  // \u5F3A\u5236",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u6587\\u4EF6\\u6743\\u9650"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u6587\\u4EF6\\u6743\\u9650",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u6587\\u4EF6\\u6743\\u9650"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u66F4\u6539\u5C5E\u7EC4\\nchgrp [-R] \u5C5E\u6027\u540D \u6587\u4EF6\u540D  // -R \u9012\u5F52\\n# \u66F4\u6539\u5C5E\u4E3B\\nchown [-R] \u5C5E\u4E3B\u540D \u6587\u4EF6\u540D\\n           \u5C5E\u4E3B\u540D: \u5C5E\u7EC4\u540D \u6587\u4EF6\u540D\\n\\n# \u66F4\u6539\u6587\u4EF69\u4E2A\u5C5E\u6027\\nchmod [-R] 777 \u6587\u4EF6\u540D/\u6587\u4EF6\u540D\\nr:4 w:2 x:1",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u8BFB\\u6587\\u4EF6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u8BFB\\u6587\\u4EF6",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u8BFB\\u6587\\u4EF6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "cat  \u6587\u4EF6\u540D   // \u663E\u793A\u6587\u4EF6\u5185\u5BB9\\nnl   \u6587\u4EF6\u540D   // \u663E\u793A\u884C\u53F7\\nless \u6587\u4EF6\u540D   // \u548Cmore\u4E00\u6837 \u4F46\u53EF\u4EE5\u7FFB\u9875 \u7A7A\u683C\u4E0B\u4E00\u9875 b \u4E0A\u4E00\u9875\\n:q \u9000\u51FA\\n/\u641C\u7D22\u6587\u672C    // \u5411\u4E0B\u641C\u7D22\\n?\u641C\u7D22\u6587\u672C    // \u5411\u4E0A\u641C\u7D22\\nn           // \u81EA\u52A8\u8DF3\u8F6C\u4E0B\u4E00\u4E2A\\nN           // \u81EA\u52A8\u8DF3\u8F6C\u4E0A\u4E00\u4E2A\\n\\nmore \u6587\u4EF6\u540D   // \u4E00\u9875\u4E00\u9875\u7684\u663E\u793A\\nhead -n 20 \u6587\u4EF6\u540D   // \u53EA\u770B\u5934\u51E0\u884C\\ntail \u6587\u4EF6\u540D   // \u53EA\u770B\u7ED3\u5C3E\u51E0\u884C\\nman ap \u5E2E\u52A9\u547D\u4EE4",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u5199\\u6587\\u4EF6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u5199\\u6587\\u4EF6",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u5199\\u6587\\u4EF6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "touch\\necho xxx >> \u6587\u4EF6\u540D",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u94FE\\u63A5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u94FE\\u63A5",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u94FE\\u63A5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u786C\u94FE\u63A5\\n\u5141\u8BB8\u4E00\u4E2A\u6587\u4EF6\u6709\u591A\u4E2A\u8DEF\u5F84 \u9632\u6B62\u8BEF\u5220\\nA--B \u5C31\u7B97A\u5220\u9664\u4E86 B\u8FD8\u80FD\u8BBF\u95EE\\nln A B\\n# \u8F6F\u8FDE\u63A5\\n\u5FEB\u6377\u65B9\u5F0F\\nln -s A B",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "vim"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#vim",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "VIM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "esc :wq \u9000\u51FA\\n:i \u8F93\u5165\\n:p \u590D\u5236\\n:d \u5220\u9664\\n:u \u64A4\u9500",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u5176\\u4ED6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u5176\\u4ED6",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u5176\\u4ED6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "## \u538B\u7F29\\n  tar cvf \u538B\u7F29\u540E\u540D\u5B57.tar \u8DEF\u5F84\\n  zip \u538B\u7F29\u540E\u540D\u5B57.zip \u539F\u540D\\n  ## \u89E3\u538B\\n  tar xvf \u540D\u5B57.tar\\n  unzip \u540D\u5B57.zip",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "ssh"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#ssh",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "ssh"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "#!/usr/bin/env sh\\n\\n# \u5148\u5728\u672C\u5730\u751F\u6210\u516C\u5319\u5B58\u50A8\u5BC6\u7801: \u76F4\u63A5\u4F7F\u7528ssh \u4E0D\u7528\u518D\u6B21\u8F93\u5165\u5BC6\u7801\\n# ssh-keygen -t rsa\\n# ssh-copy-id root@118.31.34.158",
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

//# sourceURL=webpack:///./src/Article/6.%E8%BF%90%E7%BB%B4%E7%9B%B8%E5%85%B3/linux%E5%91%BD%E4%BB%A4/index.md?`)}}]);
