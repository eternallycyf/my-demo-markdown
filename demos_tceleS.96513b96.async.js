(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{o9EG:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_select_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("OaEy");
/* harmony import */ var antd_es_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2fM7");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_less_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vBWN");
/* harmony import */ var _index_less_modules__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_less_modules__WEBPACK_IMPORTED_MODULE_3__);




const Option = antd_es_select__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].Option;

const App = () => {
  const options = [{
    label: 'jack',
    value: '1'
  }, {
    label: 'lucy',
    value: '2'
  }, {
    label: 'Yiminghe',
    value: '3'
  }, {
    label: '4',
    value: '4'
  }, {
    label: '5',
    value: '5'
  }, {
    label: '6',
    value: '6'
  }, {
    label: '7',
    value: '7'
  }, {
    label: '8',
    value: '8'
  }, {
    label: '9',
    value: '9'
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_3___default.a.contentBox
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_es_select__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    defaultValue: [{
      label: 'jack',
      value: '1'
    }, {
      label: 'lucy',
      value: '2'
    }, {
      label: 'Yiminghe',
      value: '3'
    }, {
      label: '4',
      value: '4'
    }],
    mode: "multiple",
    maxTagCount: 3,
    style: {
      width: 300
    },
    open: true,
    showSearch: true,
    filterOption: false,
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_3___default.a.selectbox,
    dropdownMatchSelectWidth: true,
    popupClassName: _index_less_modules__WEBPACK_IMPORTED_MODULE_3___default.a.selects,
    dropdownStyle: {
      height: 300,
      width: 600,
      overflow: 'scroll'
    }
  }, options.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Option, {
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_3___default.a.options,
    value: item.value,
    key: index
  }, item.label))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

//# sourceURL=webpack:///./src/Components/BusinessComponent/Select/index.tsx?`)},vBWN:function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin
module.exports = {"contentBox":"contentBox___39YGo","options":"options___2vWg9","selects":"selects___2_LOF","rc-virtual-list-holder-inner":"rc-virtual-list-holder-inner___10jNZ","selectbox":"selectbox____EO4v"};

//# sourceURL=webpack:///./src/Components/BusinessComponent/Select/index.less?`)}}]);
