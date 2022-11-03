(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{UCGG:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoneyFilterProps", function() { return MoneyFilterProps; });
/* harmony import */ var antd_es_input_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5NDa");
/* harmony import */ var antd_es_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("5rEg");
/* harmony import */ var _Users_eternallycyf_Documents_GitHub_case_my_demo_markdown_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tJVT");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




const MoneyFilterProps = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null);

const App = () => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(11231231111.2312312),
        _useState2 = Object(_Users_eternallycyf_Documents_GitHub_case_my_demo_markdown_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState, 2),
        num = _useState2[0],
        setNum = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(','),
        _useState4 = Object(_Users_eternallycyf_Documents_GitHub_case_my_demo_markdown_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState3, 2),
        SEPARATOR = _useState4[0],
        setSeparator = _useState4[1];
  /**
   * \u6570\u5B57\u5343\u5206\u4F4D\u5C55\u793A\u5E76\u663E\u793An\u4F4D\u5C0F\u6570
   * @param {(number | string)} \u9700\u8981\u683C\u5F0F\u5316\u7684\u503C
   * @param {number} [precision] \u4FDD\u7559\u51E0\u4F4D\u5C0F\u6570\uFF0C\u4E0D\u4F20\u5C0F\u6570\u4E0D\u5904\u7406\uFF0C\u4E0D\u591F\u4F1A\u586B\u51450
   * @param {string} [separator=','] \u5206\u9694\u7B26
   * @return {(number | string)} \u8FD4\u56DE0\u6216\u8005\u683C\u5F0F\u5316\u7684\u503C
   */


  const formatNumber = (num, precision = 2, separator = SEPARATOR) => {
    if (num == 0) return 0;
    if (!num) return '--';
    let parts;
    const textStr = num.toString();
    const decStr = textStr.split('.')[1]; // \u5224\u65AD\u662F\u5426\u4E3A\u6570\u5B57

    if (!isNaN(parseFloat(num)) && isFinite(num)) {
      num = Number(num); // \u5904\u7406\u5C0F\u6570\u70B9\u4F4D\u6570

      num = (typeof precision !== 'undefined' ? num.toFixed(precision) : num).toString(); // \u5206\u79BB\u6570\u5B57\u7684\u5C0F\u6570\u90E8\u5206\u548C\u6574\u6570\u90E8\u5206

      parts = num.split('.');
      parts[0] = parts[0].toString().replace(/(\\d)(?=(\\d{3})+(?!\\d))/g, \`$1\${separator}\`);

      if (!decStr) {
        parts.pop();
        return parts;
      }

      return parts.join('.');
    }

    return 0;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", null, formatNumber(num)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", null, "1.\\u8F93\\u5165\\u91D1\\u989D\\u6D4B\\u8BD5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_es_input__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    value: num,
    onChange: e => setNum(e.target.value)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", null, "2.\\u5206\\u9694\\u7B26\\u53F7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_es_input__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    value: SEPARATOR,
    onChange: e => setSeparator(e.target.value)
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

//# sourceURL=webpack:///./src/Components/BusinessComponent/MoneyFilter/index.tsx?`)}}]);
