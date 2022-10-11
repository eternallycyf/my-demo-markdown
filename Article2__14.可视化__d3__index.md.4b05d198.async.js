(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{pFN5:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
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
    id: "d3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#d3",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "d3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "import as d3 from \\"d3\\";\\n#\\nBundle \u2014- \u6346\u56FE\\nChord \u2014- \u5F26\u56FE\\nCluster \u2014- \u96C6\u7FA4\u56FE\\nForce \u2014- \u529B\u5B66\u56FE\u3001\u529B\u5BFC\u5411\u56FE\\nHistogram \u2014- \u76F4\u65B9\u56FE\uFF08\u6570\u636E\u5206\u5E03\u56FE\uFF09\\nPack \u2014- \u6253\u5305\u56FE\\nPartition \u2014- \u5206\u533A\u56FE\\nPie \u2014- \u997C\u72B6\u56FE\\nStack \u2014- \u5806\u6808\u56FE\\nTree \u2014- \u6811\u72B6\u56FE\\nTreemap \u2014- \u77E9\u9635\u6811\u56FE",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "dom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#dom",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "dom"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "let p = d3.select(\\"body\\").selectAll(\\"p\\");")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "select"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#select",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "select"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "var body = d3.select(\\"body\\"); //\u9009\u62E9\u6587\u6863\u4E2D\u7684body\u5143\u7D20\\nvar p1 = body.select(\\"p\\");      //\u9009\u62E9body\u4E2D\u7684\u7B2C\u4E00\u4E2Ap\u5143\u7D20\\nvar svg = body.select(\\"svg\\");   //\u9009\u62E9body\u4E2D\u7684svg\u5143\u7D20\\n#\\nclassName =>  .xxx\\nid        =>  #xxx\\n# \u6CE8\u610Ftext()\u4E2D\u7684\u56DE\u8C03\u51FD\u6570\u4E0D\u8981\u7528\u7BAD\u5934\u51FD\u6570\\nselect(this)",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "selectall"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#selectall",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "selectAll"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "var p = body.selectAll('p'); //\u9009\u62E9body\u4E2D\u7684\u6240\u6709p\u5143\u7D20\\nvar rects = svg.selectAll('rect'); //\u9009\u62E9svg\u4E2D\u6240\u6709\u7684svg\u5143\u7D20",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "append"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#append",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "append"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u5728\\u9009\\u62E9\\u96C6\\u5C3E\\u90E8\\u63D2\\u5165\\u5143\\u7D20")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: ".append(\\"p\\")",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "insert"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#insert",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "insert"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u5728\\u9009\\u62E9\\u96C6\\u524D\\u9762\\u63D2\\u5165\\u5143\\u7D20")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: ".insert(\\"p\\",\\"#myP3\\")",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "remove"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#remove",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "remove"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "remove();",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "update"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#update",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "update"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "update() \\u5F53\\u5BF9\\u5E94\\u7684\\u5143\\u7D20\\u6B63\\u597D\\u6EE1\\u8DB3\\u65F6 \\u7ED1\\u5B9A\\u6570\\u636E\\u6570\\u91CF = \\u5BF9\\u5E94\\u5143\\u7D20")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "enter"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#enter",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "enter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "enter() \\u5F53\\u5BF9\\u5E94\\u7684\\u5143\\u7D20\\u4E0D\\u8DB3\\u65F6 \\uFF08 \\u7ED1\\u5B9A\\u6570\\u636E\\u6570\\u91CF > \\u5BF9\\u5E94\\u5143\\u7D20 \\uFF09")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u5F53\u4E0D\u8DB3\u7684\u65F6\u5019\u81EA\u52A8\u6DFB\u52A0\u5269\u4F59\u7684\\nenter().append('li').text()",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "exit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#exit",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "exit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u5F53\\u5BF9\\u5E94\\u7684\\u5143\\u7D20\\u8FC7\\u591A\\u65F6 \\uFF08 \\u7ED1\\u5B9A\\u6570\\u636E\\u6570\\u91CF < \\u5BF9\\u5E94\\u5143\\u7D20 \\uFF09")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u5F53\u8FC7\u591A\u7684\u65F6\u5019\u5220\u9664\u591A\u4F59\u7684\\nexit().remove()",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u6570\\u636E"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u6570\\u636E",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u6570\\u636E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "datum"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#datum",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "datum"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u7ED1\\u5B9A\\u4E00\\u4E2A\\u6570\\u636E\\u5230\\u9009\\u62E9\\u96C6\\u4E0A")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "p.datum(str);\\n# data \u5C31\u662F datum\u7ED1\u5B9A\u7684\u6570\u636E index\u662F\u7D22\u5F15\\np.text((data, index) => data)",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "data"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#data",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "data"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u7ED1\\u5B9A\\u4E00\\u4E2A\\u6570\\u7EC4\\u5230\\u9009\\u62E9\\u96C6\\u4E0A\\uFF0C\\u6570\\u7EC4\\u7684\\u5404\\u9879\\u503C\\u5206\\u522B\\u4E0E\\u9009\\u62E9\\u96C6\\u7684\\u5404\\u5143\\u7D20\\u7ED1\\u5B9A")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "p.data([1,2,3])\\n# data\u76F4\u63A5\u5C31\u662F\u5BF9\u5E94\u7684\u6570\u636E \u4E0D\u7528data[index]\\n .text((data,index)=>data)",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "css"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#css",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "css"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "style"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#style",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "style"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "p.style('color', 'red').style('font-size', '72px');",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "attrs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#attrs",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "attrs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: ".attr(\\"fill\\",\\"blue\\")",
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
    code: ".transition()//\u6DFB\u52A0\u8FC7\u6E21\\n.duration(2000)//\u6301\u7EED\u65F6\u95F4\\n.delay(function(d,i){//\u5EF6\u8FDF\\n    return i*400;\\n})\\n//.ease(d3.easeElasticInOut)//\u8FD9\u91CC\u8BFB\u8005\u53EF\u4EE5\u81EA\u5DF1\u5C06\u6CE8\u91CA\u53BB\u6389\uFF0C\u770B\u770B\u6548\u679C\uFF08chrome\u6D4F\u89C8\u5668\u4F1A\u62A5\u9519\uFF0C\u4F46\u662F\u4E0D\u5F71\u54CD\u6548\u679C\uFF09",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u6BD4\\u4F8B\\u5C3A"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u6BD4\\u4F8B\\u5C3A",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u6BD4\\u4F8B\\u5C3A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u7EBF\\u6027\\u6BD4\\u4F8B\\u5C3A"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u7EBF\\u6027\\u6BD4\\u4F8B\\u5C3A",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u7EBF\\u6027\\u6BD4\\u4F8B\\u5C3A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "var dataset = [1.2, 2.3, 0.9, 1.5, 3.3];\\nvar min = d3.min(dataset); //\u5F97\u5230\u6700\u5C0F\u503C\\nvar max = d3.max(dataset); //\u5F97\u5230\u6700\u5927\u503C\\nvar scaleLinear = d3\\n  .scaleLinear()\\n  .domain([min, max])\\n  .range([0, 300]);\\ndocument.write('scaleLinear(1)\u8F93\u51FA\uFF1A' + scaleLinear(1));\\nd3.select('body').append('br'); //\u6362\u884C\\ndocument.write('scaleLinear(2)\u8F93\u51FA\uFF1A' + scaleLinear(2));\\nd3.select('body').append('br');\\ndocument.write('scaleLinear(3.3)\u8F93\u51FA\uFF1A' + scaleLinear(3.3));",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u5E8F\\u6570\\u6BD4\\u4F8B\\u5C3A"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u5E8F\\u6570\\u6BD4\\u4F8B\\u5C3A",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u5E8F\\u6570\\u6BD4\\u4F8B\\u5C3A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u79BB\\u6563\\u6570\\u7EC4")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "var index = [0, 1, 2, 3, 4] as unknown as string;\\n    var color = [\\"red\\", \\"blue\\", \\"yellow\\", \\"black\\", \\"green\\"];\\n    var scaleOrdinal = d3.scaleOrdinal()\\n      .domain(index)\\n      .range(color);\\n    document.write(\\"scaleOrdinal(1)\u8F93\u51FA\uFF1A\\" + scaleOrdinal('1')); // blue\\n    d3.select(\\"body\\").append(\\"br\\");\\n    document.write(\\"scaleOrdinal(2)\u8F93\u51FA\uFF1A\\" + scaleOrdinal('2')); // yellow\\n    d3.select(\\"body\\").append(\\"br\\");\\n    document.write(\\"scaleOrdinal(4)\u8F93\u51FA\uFF1A\\" + scaleOrdinal('4')); // green",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u5750\\u6807\\u8F74"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u5750\\u6807\\u8F74",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u5750\\u6807\\u8F74"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "//\u4E3A\u5750\u6807\u8F74\u5B9A\u4E49\u4E00\u4E2A\u7EBF\u6027\u6BD4\u4F8B\u5C3A\\nvar xScale = d3\\n  .scaleLinear()\\n  .domain([0, d3.max(dataset)])\\n  .range([0, 250]);\\n//\u5B9A\u4E49\u4E00\u4E2A\u5750\u6807\u8F74\\nvar xAxis = d3\\n  .axisBottom(xScale) //\u5B9A\u4E49\u4E00\u4E2Aaxis\uFF0C\u7531bottom\u53EF\u77E5\uFF0C\u662F\u671D\u4E0B\u7684\\n  .ticks(7); //\u8BBE\u7F6E\u523B\u5EA6\u6570\u76EE\\ng.append('g')\\n  .attr(\\n    'transform',\\n    'translate(' + 20 + ',' + dataset.length * rectHeight + ')',\\n  )\\n  .call(xAxis);",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "var xScale = d3\\n  .scaleBand()\\n  .domain(d3.range(dataset.length))\\n  .rangeRound([0, width - marge.left - marge.right]);\\nvar xAxis = d3.axisBottom(xScale);\\n\\nvar yScale = d3\\n  .scaleLinear()\\n  .domain([0, d3.max(dataset)])\\n  .range([height - marge.top - marge.bottom, 0]);\\nvar yAxis = d3.axisLeft(yScale);",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u4E8B\\u4EF6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u4E8B\\u4EF6",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u4E8B\\u4EF6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: ".on(\\"click\\",function(){\\n    console.log(d3.event);\\n})\\nd3.select(this)\\n#\\nclick\uFF1A\u9F20\u6807\u5355\u51FB\u67D0\u5143\u7D20\u65F6\u89E6\u53D1\uFF0C\u76F8\u5F53\u4E8Emousedown\u548Cmouseup\u7684\u7EC4\u5408\\nmouseover\uFF1A\u9F20\u6807\u653E\u5728\u67D0\u5143\u7D20\u4E0A\u89E6\u53D1\\nmouseout\uFF1A\u9F20\u6807\u79FB\u51FA\u67D0\u5143\u7D20\u65F6\u89E6\u53D1\\nmousemove\uFF1A\u9F20\u6807\u79FB\u52A8\u65F6\u89E6\u53D1\\nmousedown\uFF1A\u9F20\u6807\u6309\u94AE\u88AB\u6309\u4E0B\u65F6\u89E6\u53D1\\nmouseup\uFF1A\u9F20\u6807\u6309\u94AE\u88AB\u677E\u5F00\u65F6\u89E6\u53D1\\ndblclick\uFF1A\u9F20\u6807\u53CC\u51FB\u65F6\u89E6\u53D1\\n#\\n.on(\\"mouseover\\",function(){\\n    var rect = d3.select(this)\\n    .transition()\\n    .duration(1500)//\u5F53\u9F20\u6807\u653E\u5728\u77E9\u5F62\u4E0A\u65F6\uFF0C\u77E9\u5F62\u53D8\u6210\u9EC4\u8272\\n    .attr(\\"fill\\",\\"yellow\\");\\n})\\n.on(\\"mouseout\\",function(){\\n    var rect = d3.select(this)\\n    .transition()\\n    .delay(1500)\\n    .duration(1500)//\u5F53\u9F20\u6807\u79FB\u51FA\u65F6\uFF0C\u77E9\u5F62\u53D8\u6210\u84DD\u8272\\n    .attr(\\"fill\\",\\"blue\\");\\n})",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "demo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#demo",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "demo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u67F1\\u5F62\\u56FE"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u67F1\\u5F62\\u56FE",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u67F1\\u5F62\\u56FE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "import React, { useEffect, useState } from 'react';\\nimport { Card, Button } from 'antd';\\nimport * as d3 from 'd3';\\n\\nconst D3 = props => {\\n  const [dataset, setDataset] = useState([250, 210, 170, 130, 90]);\\n\\n  const handleInitChart = () => {\\n    let marge = { top: 30, bottom: 30, left: 30, right: 30 };\\n    let body = d3.select('body');\\n    let svg = body.select('#mainsvg');\\n    svg.selectAll('g').remove();\\n    let g = svg\\n      .append('g')\\n      .attr('transform', 'translate(' + marge.top + ',' + marge.left + ')');\\n\\n    let rectHeight = 30;\\n    g.selectAll('rect')\\n      .data(dataset)\\n      .enter()\\n      .append('rect')\\n      .attr('x', 20)\\n      .attr('y', function(d, i) {\\n        return i * rectHeight;\\n      })\\n      .attr('width', function(d) {\\n        return d;\\n      })\\n      .attr('height', rectHeight - 5)\\n      .attr('fill', 'blue');\\n\\n    g.selectAll('text')\\n      .data(dataset)\\n      .enter()\\n      .append('text')\\n      .attr('x', function(d) {\\n        return 30 + d;\\n      })\\n      .attr('y', function(d, i) {\\n        return i * rectHeight + 15;\\n      })\\n      .text(function(d) {\\n        return d;\\n      });\\n  };\\n\\n  useEffect(() => {\\n    handleInitChart();\\n  }, []);\\n\\n  const setNewChartData = () => {\\n    let arr = Array.from({ length: 4 }, () => ~~(Math.random(0, 1000) * 100));\\n    setDataset(arr);\\n    handleInitChart();\\n  };\\n\\n  return (\\n    <>\\n      <Card style={{ margin: 24 }}>\\n        <Button onClick={setNewChartData}>\u8BBE\u7F6E\u65B0\u7684\u6570\u636E</Button>\\n        <svg width=\\"1200\\" height=\\"180\\" id=\\"mainsvg\\" className=\\"svgs\\" />\\n      </Card>\\n    </>\\n  );\\n};\\nexport default D3;",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u5B8C\\u6574\\u7684"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u5B8C\\u6574\\u7684",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u5B8C\\u6574\\u7684"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "import React, { useEffect, useState } from \\"react\\";\\nimport { Card, Button } from \\"antd\\";\\nimport * as d3 from \\"d3\\";\\n\\nconst D3 = () => {\\n  const [dataset, setDataset] = useState<number[]>([250, 210, 170, 130, 90])\\n\\n  const handleInitChart = () => {\\n    let body = d3.select(\\"body\\");\\n    let marge = { top: 30, bottom: 30, left: 30, right: 30 }\\n    let svg = body.select(\\"#mainsvg3\\")\\n    var width = svg.attr(\\"width\\") as unknown as number;//\u5F97\u5230\u753B\u5E03\u7684\u5BBD\\n    var height = svg.attr(\\"height\\") as unknown as number;//\u5F97\u5230\u753B\u5E03\u7684\u957F\\n\\n    var xScale = d3.scaleBand()\\n      .domain(d3.range(dataset.length) as unknown as string[])\\n      .rangeRound([0, width - marge.left - marge.right]);\\n    var xAxis = d3.axisBottom(xScale);\\n\\n    var yScale = d3.scaleLinear()\\n      .domain([0, d3.max(dataset)] as number[])\\n      .range([height - marge.top - marge.bottom, 0]);\\n    var yAxis = d3.axisLeft(yScale);\\n\\n    svg.selectAll('g').remove()\\n    let g = svg.append(\\"g\\")\\n      .attr(\\"transform\\", \\"translate(\\" + marge.top + \\",\\" + marge.left + \\")\\");\\n\\n    var gs = g.selectAll(\\".rect\\")\\n      .data(dataset)\\n      .enter()\\n      .append(\\"g\\");\\n\\n    var rectPadding = 10;//\u77E9\u5F62\u4E4B\u95F4\u7684\u95F4\u9699\\n    gs.append(\\"rect\\")\\n      .attr(\\"x\\", function (d, i) {\\n        return xScale(i) + rectPadding / 2;\\n      })\\n      .attr(\\"y\\", function (d) {\\n        return yScale(d);\\n      })\\n      .attr(\\"width\\", function () {\\n        return xScale.step() - rectPadding;\\n      })\\n      .attr(\\"height\\", function (d) {\\n        return height - marge.top - marge.bottom - yScale(d);\\n      })\\n      .attr(\\"fill\\", \\"blue\\")\\n      .on(\\"mouseover\\", function () {\\n        var rect = d3.select(this)\\n          .transition()\\n          .duration(1500)//\u5F53\u9F20\u6807\u653E\u5728\u77E9\u5F62\u4E0A\u65F6\uFF0C\u77E9\u5F62\u53D8\u6210\u9EC4\u8272\\n          .attr(\\"fill\\", \\"yellow\\");\\n      })\\n      .on(\\"mouseout\\", function () {\\n        var rect = d3.select(this)\\n          .transition()\\n          .delay(1500)\\n          .duration(1500)//\u5F53\u9F20\u6807\u79FB\u51FA\u65F6\uFF0C\u77E9\u5F62\u53D8\u6210\u84DD\u8272\\n          .attr(\\"fill\\", \\"blue\\");\\n      })\\n\\n\\n    gs.append(\\"text\\")\\n      .attr(\\"x\\", function (d, i) {\\n        return xScale(i) + rectPadding / 2;\\n      })\\n      .attr(\\"y\\", function (d) {\\n        return yScale(d);\\n      })\\n      .attr(\\"dx\\", function () {\\n        (xScale.step() - rectPadding) / 2;\\n      })\\n      .attr(\\"dy\\", 20)\\n      .text(function (d) {\\n        return d;\\n      })\\n\\n    gs.append(\\"rect\\")\\n      .attr(\\"x\\", function (d, i) {\\n        return xScale(i) + rectPadding / 2;\\n      })\\n      .attr(\\"y\\", function (d) {//\u8FD9\u91CC\u662F\u8981\u6539\u53D8\u7684\uFF0C\u5373\u521D\u59CB\u72B6\u6001\\n        var min = yScale.domain()[0];\\n        return yScale(min);//\u53EF\u4EE5\u5F97\u77E5\uFF0C\u8FD9\u91CC\u8FD4\u56DE\u7684\u662F\u6700\u5927\u503C\\n      })\\n      .attr(\\"width\\", function () {\\n        return xScale.step() - rectPadding;\\n      })\\n      .attr(\\"height\\", function (d) {//\u8FD9\u91CC\u8981\u6539\u53D8\uFF0C\u5373\u521D\u59CB\u72B6\u6001\\n        return 0;\\n      })\\n      .attr(\\"fill\\", \\"blue\\")\\n      .transition()//\u6DFB\u52A0\u8FC7\u6E21\\n      .duration(2000)//\u6301\u7EED\u65F6\u95F4\\n      .delay(function (d, i) {//\u5EF6\u8FDF\\n        return i * 400;\\n      })\\n      //.ease(d3.easeElasticInOut)//\u8FD9\u91CC\u8BFB\u8005\u53EF\u4EE5\u81EA\u5DF1\u5C06\u6CE8\u91CA\u53BB\u6389\uFF0C\u770B\u770B\u6548\u679C\uFF08chrome\u6D4F\u89C8\u5668\u4F1A\u62A5\u9519\uFF0C\u4F46\u662F\u4E0D\u5F71\u54CD\u6548\u679C\uFF09\\n      .attr(\\"y\\", function (d) {//\u56DE\u5230\u6700\u7EC8\u72B6\u6001\\n        return yScale(d);\\n      })\\n      .attr(\\"height\\", function (d) {//\u56DE\u5230\u6700\u7EC8\u72B6\u6001\\n        return height - marge.top - marge.bottom - yScale(d);\\n      })\\n\\n    gs.append(\\"text\\")\\n      .attr(\\"x\\", function (d, i) {\\n        return xScale(i) + rectPadding / 2;\\n      })\\n      .attr(\\"y\\", function (d) {\\n        var min = yScale.domain()[0];\\n        return yScale(min);\\n      })\\n      .attr(\\"dx\\", function () {\\n        (xScale.step() - rectPadding) / 2;\\n      })\\n      .attr(\\"dy\\", 20)\\n      .text(function (d) {\\n        return d;\\n      })\\n      .transition()\\n      .duration(2000)\\n      .delay(function (d, i) {\\n        return i * 400;\\n      })\\n      //.ease(d3.easeElasticInOut)\\n      .attr(\\"y\\", function (d) {\\n        return yScale(d);\\n      })\\n  }\\n\\n  useEffect(() => {\\n    handleInitChart()\\n  }, [])\\n\\n  const setNewChartData = () => {\\n    let arr = Array.from({ length: 4 }, () => ~~(Math.random(0, 1000) * 100))\\n    setDataset(arr)\\n    handleInitChart()\\n  }\\n\\n  return (\\n    <>\\n      <Card style={{ margin: 24 }}>\\n        <Button onClick={setNewChartData}>\u8BBE\u7F6E\u65B0\u7684\u6570\u636E</Button>\\n        <svg width=\\"1200\\" height=\\"180\\" id=\\"mainsvg3\\" className=\\"svgs\\" />\\n      </Card>\\n    </>\\n  );\\n};\\nexport default D3;",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u997C\\u72B6\\u56FE"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u997C\\u72B6\\u56FE",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u997C\\u72B6\\u56FE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "",
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

//# sourceURL=webpack:///./src/Article2/14.%E5%8F%AF%E8%A7%86%E5%8C%96/d3/index.md?`)}}]);
