(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{mZg7:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
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
    id: "theme"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#theme",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "theme"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u4EE5-umi3-\\u4E3A\\u4F8B"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u4EE5-umi3-\\u4E3A\\u4F8B",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u4EE5 umi3 \\u4E3A\\u4F8B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u4E3A-css-\\u8BBE\\u7F6E\\u4E13\\u5C5E\\u7C7B\\u540D\\u524D\\u7F00"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u4E3A-css-\\u8BBE\\u7F6E\\u4E13\\u5C5E\\u7C7B\\u540D\\u524D\\u7F00",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u4E3A css \\u8BBE\\u7F6E\\u4E13\\u5C5E\\u7C7B\\u540D\\u524D\\u7F00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// .umirc.ts\\nimport { winPath } from '@umijs/utils';\\n// or import slash from 'slash2';\\nconst getLocalIdent = (context, localIdentName, localName) => {\\n  if (\\n    context.resourcePath.includes('node_modules') ||\\n    context.resourcePath.includes('mixin.less') ||\\n    context.resourcePath.includes('global.less')\\n  ) {\\n    return localName;\\n  }\\n  const match = context.resourcePath.match(/src(.*)/);\\n  if (match && match[1]) {\\n    const antdPath = match[1].replace('.less', '');\\n    const arr = winPath(antdPath)\\n      .split('/')\\n      .map((a: string) => a.replace(/([A-Z])/g, '-$1'))\\n      .map((a: string) => a.toLowerCase());\\n\\n    return \`MyClassName\${arr.join('-')}-\${localName}\`.replace(/--/g, '-');\\n  }\\n  return localName;\\n};\\n\\nexport default defineConfig({\\n  cssLoader: {\\n    modules: {\\n      getLocalIdent,\\n    },\\n  },\\n});",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u4E3A\\u6A21\\u5757\\u8BBE\\u7F6E\\u4E13\\u5C5E\\u7C7B\\u540D"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u4E3A\\u6A21\\u5757\\u8BBE\\u7F6E\\u4E13\\u5C5E\\u7C7B\\u540D",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u4E3A\\u6A21\\u5757\\u8BBE\\u7F6E\\u4E13\\u5C5E\\u7C7B\\u540D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// .umirc.ts\\nconst getModulePackageName = module => {\\n  if (!module.context) {\\n    return null;\\n  }\\n  const nodeModulesPath = path.join(__dirname, '/node_modules/');\\n  if (module.context.substring(0, nodeModulesPath.length) != nodeModulesPath) {\\n    return null;\\n  }\\n  const moduleRelativePath = module.context.substring(nodeModulesPath.length);\\n  const [moduleDirName] = moduleRelativePath.split(path.sep);\\n  let packageName = moduleDirName;\\n  // handle tree shaking\\n  if (packageName.match('^_')) {\\n    // eslint-disable-next-line prefer-destructuring\\n    packageName = packageName.match(/^_(@?[^@]+)/)[1];\\n  }\\n  return packageName;\\n};\\n\\nexport default defineConfig({\\n  chainWebpack: config => {\\n    // optimize chunks\\n    config.optimization.runtimeChunk(false).splitChunks({\\n      chunks: 'async',\\n      name: 'vendors',\\n      maxSize: 0,\\n      cacheGroups: {\\n        vendors: {\\n          test: modules => {\\n            const packageName = getModulePackageName(module);\\n            if (packageName) {\\n              return (\\n                ['bizcharts', '@antv_data-set', '@ant-design_icons'].indexOf(\\n                  packageName,\\n                ) >= 0\\n              );\\n            }\\n            return false;\\n          },\\n          name(module) {\\n            const packageName = getModulePackageName(module);\\n            if (['bizcharts', '@antv_data-set'].indexOf(packageName) >= 0) {\\n              return 'viz';\\n            }\\n            if (['@ant-design_icons'].indexOf(packageName) >= 0) {\\n              return 'icons';\\n            }\\n            return 'misc';\\n          },\\n        },\\n      },\\n    });\\n  },\\n});",
    lang: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u4E3B\\u9898\\u8272"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u4E3B\\u9898\\u8272",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u4E3B\\u9898\\u8272"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u4E3A\\u6A21\\u5757\\u8BBE\\u7F6E\\u4E13\\u5C5E\\u7C7B\\u540D-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u4E3A\\u6A21\\u5757\\u8BBE\\u7F6E\\u4E13\\u5C5E\\u7C7B\\u540D-1",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u4E3A\\u6A21\\u5757\\u8BBE\\u7F6E\\u4E13\\u5C5E\\u7C7B\\u540D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// .umirc.ts\\n// \u66F4\u591A\u914D\u7F6E\u53EF\u67E5\u770Bantd\u5B98\u7F51\u63CF\u8FF0\\n// https://ant-design.antgroup.com/docs/react/customize-theme-cn\\nexport default defineConfig({\\n  theme: {\\n    'primary-color': '#00CA88',\\n  },\\n});",
    lang: "ts"
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

//# sourceURL=webpack:///./src/Project/Theme/index.md?`)}}]);
