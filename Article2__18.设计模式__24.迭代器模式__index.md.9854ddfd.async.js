(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{rbp7:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u8FED\\u4EE3\\u5668\\u6A21\\u5F0F"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u8FED\\u4EE3\\u5668\\u6A21\\u5F0F",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u8FED\\u4EE3\\u5668\\u6A21\\u5F0F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u8FED\\u4EE3\\u5668\\u6A21\\u5F0F", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "Iterator Pattern"), "\\u63D0\\u4F9B\\u4E86\\u4E00\\u79CD\\u65B9\\u6CD5\\u987A\\u5E8F\\u8BBF\\u95EE\\u4E00\\u4E2A\\u805A\\u5408\\u5BF9\\u8C61\\u4E2D\\u7684\\u5404\\u4E2A\\u5143\\u7D20\\uFF0C\\u800C\\u53C8\\u65E0\\u9700\\u66B4\\u9732\\u8BE5\\u5BF9\\u8C61\\u7684\\u5185\\u90E8\\u5B9E\\u73B0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u8FD9\\u6837\\u65E2\\u53EF\\u4EE5\\u505A\\u5230\\u4E0D\\u66B4\\u9732\\u96C6\\u5408\\u7684\\u5185\\u90E8\\u7ED3\\u6784\\uFF0C\\u53C8\\u53EF\\u8BA9\\u5916\\u90E8\\u4EE3\\u7801\\u900F\\u660E\\u5730\\u8BBF\\u95EE\\u96C6\\u5408\\u5185\\u90E8\\u7684\\u6570\\u636E\\uFF0C\\u8FED\\u4EE3\\u5668\\u6A21\\u5F0F\\u5C5E\\u4E8E\\u884C\\u4E3A\\u578B\\u6A21\\u5F0F\\u3002")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u4EE3\\u7801\\u5B9E\\u73B0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u4EE3\\u7801\\u5B9E\\u73B0",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u4EE3\\u7801\\u5B9E\\u73B0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// \u5E7F\u64AD\u7535\u53F0\u793A\u4F8B\\n\\nclass RadioStation {\\n  // \u7535\u53F0\\n  constructor(frequency) {\\n    this.frequency = frequency;\\n  }\\n\\n  getFrequency() {\\n    return this.frequency;\\n  }\\n}\\n\\nclass StationList {\\n  // \u8FED\u4EE3\u5668\\n  constructor() {\\n    this.index = -1;\\n    this.stations = [];\\n  }\\n\\n  get(i) {\\n    return this.stations[this.index];\\n  }\\n\\n  hasNext() {\\n    let index = this.index + 1;\\n    return this.stations[index] !== void 0;\\n  }\\n\\n  next() {\\n    return this.stations[++this.index];\\n  }\\n\\n  addStation(station) {\\n    this.stations.push(station);\\n  }\\n\\n  removeStation(toRemove) {\\n    const toRemoveFrequency = toRemove.getFrequency();\\n    this.stations = this.stations.filter(\\n      station => station.getFrequency() !== toRemoveFrequency,\\n    );\\n  }\\n}\\n\\n(function() {\\n  const stationList = new StationList();\\n  stationList.addStation(new RadioStation(89));\\n  stationList.addStation(new RadioStation(101));\\n  stationList.addStation(new RadioStation(102));\\n  stationList.addStation(new RadioStation(103.2));\\n  stationList.stations.forEach(station => console.log(station.getFrequency())); // 89 101 102 103.2\\n  stationList.removeStation(new RadioStation(89));\\n  while (stationList.hasNext()) console.log(stationList.next().getFrequency()); // 101 102 103.2\\n})();",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u53C2\\u8003\\u94FE\\u63A5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u53C2\\u8003\\u94FE\\u63A5",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u53C2\\u8003\\u94FE\\u63A5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "https://www.cnblogs.com/xuwendong/p/9898030.html"
  }, "https://www.cnblogs.com/xuwendong/p/9898030.html")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "https://www.runoob.com/design-pattern/iterator-pattern.html"
  }, "https://www.runoob.com/design-pattern/iterator-pattern.html")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "https://github.com/sohamkamani/javascript-design-patterns-for-humans#-iterator"
  }, "https://github.com/sohamkamani/javascript-design-patterns-for-humans#-iterator")))));
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

//# sourceURL=webpack:///./src/Article2/18.%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/24.%E8%BF%AD%E4%BB%A3%E5%99%A8%E6%A8%A1%E5%BC%8F/index.md?`)}}]);
