(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{"F+kV":function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dumi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("LtsZ");
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("dEAq");
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dumi_theme__WEBPACK_IMPORTED_MODULE_2__);










 // memo for page content, to avoid useless re-render since other context fields changed

const PageContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(({
  demos: DUMI_ALL_DEMOS
}) => {
  const DumiDemo1 = Object(dumi__WEBPACK_IMPORTED_MODULE_1__["dynamic"])({
    loader: async function () {
      var _interopRequireDefault = __webpack_require__("K+nK")["default"];

      var _react = _interopRequireDefault(await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "cDcd", 7)));

      var _Alert = _interopRequireDefault(await Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, "DGhM")));

      var _default = function _default() {
        return /*#__PURE__*/_react["default"].createElement(_Alert["default"], {
          type: "warning",
          message: "Getting Started",
          description: "All the gloom is left to the past, from the beginning of meeting you, the winter is gone, the Star River is bright!\\uD83C\\uDF89 \\uD83C\\uDF89 \\uD83C\\uDF89"
        });
      };

      return _default;
    },
    loading: () => null
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DumiDemo1, null));
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

//# sourceURL=webpack:///./docs/index.md?`)}}]);
