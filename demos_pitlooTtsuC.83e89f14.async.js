(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{FTBg:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/antd/es/row/style/index.js
var row_style = __webpack_require__("14J3");

// EXTERNAL MODULE: ./node_modules/antd/es/row/index.js
var row = __webpack_require__("BMrR");

// EXTERNAL MODULE: external "window.React"
var external_window_React_ = __webpack_require__("cDcd");
var external_window_React_default = /*#__PURE__*/__webpack_require__.n(external_window_React_);

// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/style/index.js
var tooltip_style = __webpack_require__("5Dmo");

// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/index.js + 3 modules
var tooltip = __webpack_require__("3S7+");

// EXTERNAL MODULE: ./node_modules/antd/es/col/style/index.js
var col_style = __webpack_require__("jCWc");

// EXTERNAL MODULE: ./node_modules/antd/es/col/index.js
var es_col = __webpack_require__("kPKH");

// EXTERNAL MODULE: ./node_modules/antd/es/input/style/index.js
var input_style = __webpack_require__("5NDa");

// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 5 modules
var input = __webpack_require__("5rEg");

// CONCATENATED MODULE: ./src/Components/BusinessComponent/CustTooltip/CustTooltip.tsx







const TextArea = input["a" /* default */].TextArea;

const CustTooltip = props => {
  var _ref;

  const _props$text = props.text,
        text = _props$text === void 0 ? '' : _props$text,
        _props$maxLength = props.maxLength,
        maxLength = _props$maxLength === void 0 ? 35 : _props$maxLength,
        _props$style = props.style,
        style = _props$style === void 0 ? {} : _props$style,
        _props$autoSize = props.autoSize,
        autoSize = _props$autoSize === void 0 ? false : _props$autoSize,
        _props$col = props.col,
        col = _props$col === void 0 ? 8 : _props$col;
  const styles = {
    maxWidth: 370,
    wordWrap: 'break-word',
    wordBreak: 'break-all',
    color: 'rgba(0,0,0,0.45)',
    fontSize: 14,
    ...style
  };

  if (autoSize) {
    return /*#__PURE__*/external_window_React_default.a.createElement(es_col["a" /* default */], {
      span: col
    }, /*#__PURE__*/external_window_React_default.a.createElement(TextArea, {
      style: {
        resize: 'none',
        ...style
      },
      autoSize: true,
      bordered: false,
      readOnly: true,
      value: text !== null && text !== void 0 ? text : '--'
    }));
  }

  const MAXCustTooltip = /*#__PURE__*/external_window_React_default.a.createElement(tooltip["a" /* default */], {
    title: text,
    style: styles
  }, /*#__PURE__*/external_window_React_default.a.createElement("span", {
    style: styles
  }, (_ref = text.slice(0, maxLength) + '...') !== null && _ref !== void 0 ? _ref : '--'));
  const OriginText = /*#__PURE__*/external_window_React_default.a.createElement("span", {
    style: styles
  }, text !== null && text !== void 0 ? text : '--');
  return /*#__PURE__*/external_window_React_default.a.createElement("span", {
    style: styles
  }, text && text.length > maxLength ? MAXCustTooltip : OriginText);
};

/* harmony default export */ var CustTooltip_CustTooltip = (CustTooltip);
// CONCATENATED MODULE: ./src/Components/BusinessComponent/CustTooltip/index.tsx




const TEXT = 'sadasdasdasdasdsdsdsadasdasdasdasdsdsdsadasdasdasdasdsdsd';

const IndexPage = () => {
  return /*#__PURE__*/external_window_React_default.a.createElement(external_window_React_default.a.Fragment, null, /*#__PURE__*/external_window_React_default.a.createElement(row["a" /* default */], {
    gutter: 10
  }, /*#__PURE__*/external_window_React_default.a.createElement(CustTooltip_CustTooltip, {
    text: TEXT,
    autoSize: true,
    col: 3
  }), /*#__PURE__*/external_window_React_default.a.createElement(CustTooltip_CustTooltip, {
    text: TEXT,
    col: 8
  }), /*#__PURE__*/external_window_React_default.a.createElement(CustTooltip_CustTooltip, {
    text: TEXT,
    maxLength: 10
  })));
};

/* harmony default export */ var BusinessComponent_CustTooltip = __webpack_exports__["default"] = (IndexPage);

//# sourceURL=webpack:///./src/Components/BusinessComponent/CustTooltip/index.tsx_+_1_modules?`)}}]);
