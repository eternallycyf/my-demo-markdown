(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{FTBg:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "window.React"
var external_window_React_ = __webpack_require__("cDcd");
var external_window_React_default = /*#__PURE__*/__webpack_require__.n(external_window_React_);

// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/style/index.js
var tooltip_style = __webpack_require__("5Dmo");

// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/index.js + 3 modules
var tooltip = __webpack_require__("3S7+");

// CONCATENATED MODULE: ./src/Components/BusinessComponent/CustTooltip/CustTooltip.tsx




const CustTooltip = props => {
  var _ref;

  const _props$text = props.text,
        text = _props$text === void 0 ? '' : _props$text,
        _props$maxLength = props.maxLength,
        maxLength = _props$maxLength === void 0 ? 35 : _props$maxLength,
        style = props.style,
        _props$isARow = props.isARow,
        isARow = _props$isARow === void 0 ? false : _props$isARow;
  if (isARow) return /*#__PURE__*/external_window_React_default.a.createElement("span", {
    style: {
      maxWidth: 370,
      wordWrap: 'break-word',
      wordBreak: 'break-all',
      color: 'rgba(0,0,0,0.45)',
      ...style
    }
  }, text !== null && text !== void 0 ? text : '--');
  return /*#__PURE__*/external_window_React_default.a.createElement("span", {
    style: style
  }, text && text.length > maxLength ? /*#__PURE__*/external_window_React_default.a.createElement(tooltip["a" /* default */], {
    title: text,
    style: style
  }, /*#__PURE__*/external_window_React_default.a.createElement("span", null, (_ref = text.slice(0, maxLength) + '...') !== null && _ref !== void 0 ? _ref : '--')) : text !== null && text !== void 0 ? text : '--');
};

/* harmony default export */ var CustTooltip_CustTooltip = (CustTooltip);
// CONCATENATED MODULE: ./src/Components/BusinessComponent/CustTooltip/index.tsx



const IndexPage = () => {
  return /*#__PURE__*/external_window_React_default.a.createElement(external_window_React_default.a.Fragment, null, /*#__PURE__*/external_window_React_default.a.createElement(CustTooltip_CustTooltip, {
    text: "1213124124",
    maxLength: 5
  }));
};

/* harmony default export */ var BusinessComponent_CustTooltip = __webpack_exports__["default"] = (IndexPage);

//# sourceURL=webpack:///./src/Components/BusinessComponent/CustTooltip/index.tsx_+_1_modules?`)}}]);
