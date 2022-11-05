(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{UqjL:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
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
    id: "eltableprint-\\u6253\\u5370-table-\\u8868\\u5934"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#eltableprint-\\u6253\\u5370-table-\\u8868\\u5934",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "ElTablePrint \\u6253\\u5370 table \\u8868\\u5934"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "elementUI-table-\\u6253\\u5370 pdf-\\u6BCF\\u9875\\u90FD\\u6DFB\\u52A0\\u4E00\\u4E2A\\u8868\\u5934"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u539F\\u751F table \\u53EA\\u6709\\u6709 thead \\u5305\\u88F9\\u7684\\u8868\\u5934\\u5185\\u5BB9 \\u6253\\u5370\\u65F6\\u4F1A\\u81EA\\u52A8\\u6BCF\\u4E00\\u4E2A\\u90FD\\u62E5\\u6709\\u4E00\\u4E2A\\u8868\\u5934"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "PrintTable.vue")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "import PrintTable from './PrintTable.vue'")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "<PrintTable>"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<script>\\n    import { Table } from 'element-ui';\\n    export default {\\n        extends: Table,\\n        mounted() {\\n            this.$nextTick(function () {\\n                let thead = this.$el.querySelector('.el-table__header-wrapper thead');\\n                let theadNew = thead.cloneNode(true);\\n                this.$el.querySelector('.el-table__body-wrapper table').appendChild(theadNew);\\n            })\\n        },\\n    }\\n</script>\\n<style scoped>\\n    .el-table >>> .el-table__body-wrapper thead {\\n        display: none;\\n    }\\n    @media print {\\n        .el-table >>> .el-table__header-wrapper {\\n            display: none;\\n        }\\n        .el-table >>> .el-table__body-wrapper thead {\\n            display: table-header-group;\\n        }\\n    }\\n</style>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "elementui-table-max-height-\\u4E0D\\u80FD\\u8BBE\\u7F6E\\u767E\\u5206\\u6BD4\\u548C-vh"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#elementui-table-max-height-\\u4E0D\\u80FD\\u8BBE\\u7F6E\\u767E\\u5206\\u6BD4\\u548C-vh",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "ElementUI-table max-height \\u4E0D\\u80FD\\u8BBE\\u7F6E\\u767E\\u5206\\u6BD4\\u548C vh"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<script>\\n    import { Table } from 'element-ui';\\n    import { parseHeight } from 'element-ui/packages/table/src/util.js';\\n    export default {\\n        extends: Table,\\n        computed: {\\n            fixedBodyHeight() {\\n                if (this.height) {\\n                    return {\\n                        height: this.layout.fixedBodyHeight ? this.layout.fixedBodyHeight + 'px' : ''\\n                    };\\n                } else if (this.maxHeight) {\\n                    let maxHeight = parseHeight(this.maxHeight);\\n                    if (typeof maxHeight === 'number') {\\n                        maxHeight = this.layout.scrollX ? maxHeight - this.layout.gutterWidth : maxHeight;\\n                        if (this.showHeader) {\\n                            maxHeight -= this.layout.headerHeight;\\n                        }\\n                        maxHeight -= this.layout.footerHeight;\\n                        return {\\n                            'max-height': maxHeight + 'px'\\n                        };\\n                    } else if (maxHeight.match(/\\\\d+(vh|%)/g)) {\\n                        let resHeight = this.layout.scrollX ? \`100% - \${this.layout.gutterWidth}px\` : \\"100%\\";\\n                        if (this.showHeader) {\\n                            resHeight = \`\${resHeight} - \${this.layout.headerHeight}px\` ;\\n                        }\\n                        resHeight = \`\${resHeight} - \${this.layout.footerHeight}px\`;\\n                        return {\\n                            'max-height': \`calc(\${resHeight})\`\\n                        };\\n                    }\\n                }\\n                return {};\\n            },\\n        }\\n    }\\n</script>\\n<style scoped>\\n  .el-table {\\n    display: flex;\\n    flex-direction: column;\\n  }\\n  .el-table >>> .el-table__header-wrapper {\\n    flex-shrink: 0;\\n  }\\n  .el-table >>> .el-table__body-wrapper {\\n    flex-grow: 1;\\n  }\\n</style>",
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

//# sourceURL=webpack:///./src/Components/BusinessComponent/ElTablePrint/index.md?`)}}]);
