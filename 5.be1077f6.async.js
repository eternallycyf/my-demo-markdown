(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+QRC":function(module,exports,__webpack_require__){"use strict";eval(`

var deselectCurrent = __webpack_require__("E9nw");

var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
}

var defaultMessage = "Copy to clipboard: #{key}, Enter";

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") + "+C";
  return message.replace(/#{\\s*key\\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
    message,
    reselectPrevious,
    range,
    selection,
    mark,
    success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement("span");
    mark.textContent = text;
    // avoid screen readers from reading out loud the text
    mark.ariaHidden = "true"
    // reset user styles for span element
    mark.style.all = "unset";
    // prevents scrolling to the end of the page
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = "pre";
    // do not inherit user-select (it may be \`none\`)
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") { // IE 11
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"]
          window.clipboardData.setData(format, text);
        } else { // all other browsers
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });

    document.body.appendChild(mark);

    range.selectNodeContents(mark);
    selection.addRange(range);

    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using clipboardData: ", err);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

module.exports = copy;


//# sourceURL=webpack:///./node_modules/copy-to-clipboard/index.js?`)},"/qDX":function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin

//# sourceURL=webpack:///./node_modules/antd/es/typography/style/index.less?`)},E9nw:function(module,exports){eval(`
module.exports = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};


//# sourceURL=webpack:///./node_modules/toggle-selection/index.js?`)},NxX7:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IProps", function() { return IProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IRowProps", function() { return IRowProps; });
/* harmony import */ var antd_es_col_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jCWc");
/* harmony import */ var antd_es_col__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("kPKH");
/* harmony import */ var antd_es_tooltip_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("5Dmo");
/* harmony import */ var antd_es_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("3S7+");
/* harmony import */ var _Users_eternallycyf_Documents_GitHub_case_my_demo_markdown_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("0Owb");
/* harmony import */ var _Users_eternallycyf_Documents_GitHub_case_my_demo_markdown_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("tJVT");
/* harmony import */ var antd_es_input_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("5NDa");
/* harmony import */ var antd_es_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("5rEg");
/* harmony import */ var antd_es_typography_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("tU7J");
/* harmony import */ var antd_es_typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("wFql");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("y3Kf");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("8Skl");
/* harmony import */ var _index_less_modules__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("oIUC");
/* harmony import */ var _index_less_modules__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_index_less_modules__WEBPACK_IMPORTED_MODULE_13__);













const Paragraph = antd_es_typography__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].Paragraph;
const TextArea = antd_es_input__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].TextArea;
const IProps = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null);
const IRowProps = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null);

const CustomTooltip = props => {
  var _ref;

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(false),
        _useState2 = Object(_Users_eternallycyf_Documents_GitHub_case_my_demo_markdown_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_useState, 2),
        isExpand = _useState2[0],
        setIsExpand = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])('hidden'),
        _useState4 = Object(_Users_eternallycyf_Documents_GitHub_case_my_demo_markdown_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_useState3, 2),
        overflowStatus = _useState4[0],
        setOverflowStatus = _useState4[1]; // \u5982\u679C\u6CA1\u6709\u5C55\u5F00\u7684\u8BDD height\u53EA\u4F1A\u6709\u4E00\u4E2A\u503C \u5982\u679C\u53EF\u4EE5\u5C55\u5F00 \u4F1A\u5148\u8F93\u51FA\u4E24\u4E2A\u503C (\u5C55\u5F00\u524D\u7684\u9AD8\u5EA6 \u6536\u8D77\u540E\u7684\u9AD8\u5EA6)


  const heightList = Object(react__WEBPACK_IMPORTED_MODULE_10__["useRef"])([]);

  const _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(false),
        _useState6 = Object(_Users_eternallycyf_Documents_GitHub_case_my_demo_markdown_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_useState5, 2),
        hasExpend = _useState6[0],
        setHasExpend = _useState6[1];

  const contentRef = Object(react__WEBPACK_IMPORTED_MODULE_10__["useCallback"])(node => {
    if (node !== null) {
      const newHeight = node.getBoundingClientRect().height;
      const list = [...new Set([...heightList.current, newHeight])];
      heightList.current = [...list];

      if (heightList.current.length <= 1) {
        setHasExpend(false);
      } else {
        setHasExpend(true);
      }
    }

    return node;
  }, []);
  const _props$text = props.text,
        text = _props$text === void 0 ? '' : _props$text,
        _props$maxLength = props.maxLength,
        maxLength = _props$maxLength === void 0 ? 35 : _props$maxLength,
        _props$style = props.style,
        style = _props$style === void 0 ? {} : _props$style,
        _props$row = props.row,
        row = _props$row === void 0 ? {
    rows: 1,
    EllipsisSymbol: true,
    expend: true,
    lineMaxHeight: 50,
    isRight: false
  } : _props$row,
        _props$col = props.col,
        col = _props$col === void 0 ? 8 : _props$col,
        _props$copyable = props.copyable,
        copyable = _props$copyable === void 0 ? false : _props$copyable;
  const isTextToObject = typeof text === 'object';
  const isShowEllipsisSymbol = row.EllipsisSymbol ? '...' : '';
  const copyableProps = copyable ? {
    copyable: {
      text,
      tooltips: ['\u70B9\u51FB\u590D\u5236', '\u590D\u5236\u6210\u529F']
    }
  } : {};
  const ellipsisClassName = row.EllipsisSymbol ? _index_less_modules__WEBPACK_IMPORTED_MODULE_13___default.a.ellipsis : '';
  const styles = {
    // maxWidth: 370,
    // wordWrap: 'break-word',
    // wordBreak: 'break-all',
    color: 'rgba(0,0,0,0.45)',
    fontSize: 14,
    ...style
  };
  const buttonStyle = row.isRight ? {
    position: 'absolute',
    right: 0,
    top: 0
  } : {};

  const getToggleButton = isExpandStatus => {
    if (isExpandStatus) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        style: buttonStyle,
        className: "ant-typography-expand",
        onClick: () => {
          setOverflowStatus('unset');
          setIsExpand(isExpandStatus);
        }
      }, "\\u5C55\\u5F00 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
        className: _index_less_modules__WEBPACK_IMPORTED_MODULE_13___default.a['apply-shake']
      }));
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        style: buttonStyle,
        className: "ant-typography-expand",
        onClick: () => setIsExpand(isExpandStatus)
      }, "\\u6536\\u8D77 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
        className: _index_less_modules__WEBPACK_IMPORTED_MODULE_13___default.a['apply-shake']
      }));
    }
  };

  const customRowBaseProps = {
    style: styles,
    ...copyableProps
  }; // \u5982\u679C\u662F\u5143\u7D20 Paragraph \u7EC4\u4EF6\u8BBE\u7F6Erow\u4E3A1\u65F6\u5019 \u53EA\u663E\u793A... \u9700\u8981\u624B\u52A8\u8BBE\u7F6E\u4E3A rows >= 2

  const customRows = isTextToObject ? typeof row.rows == 'number' ? row.rows + 1 : 2 : row.rows; // \u5904\u7406 \u521D\u59CB\u5316\u7684\u95EA\u70C1\u95EE\u9898 \u8BBE\u7F6E\u6700\u5927\u9AD8\u5EA6 \u4E3A\u4E00\u884C\u7684\u9AD8\u5EA6, \u6EA2\u51FA\u9690\u85CF \u5F53\u70B9\u51FB\u65F6\u6062\u590D

  const customRowsColStyles = {
    maxHeight: overflowStatus == 'hidden' ? row.lineMaxHeight : '100%',
    overflow: overflowStatus,
    paddingRight: row.isRight ? 46 : 0
  };
  const customRowEllipsisParagraphProps = isExpand ? { ...customRowBaseProps
  } : { ...customRowBaseProps,
    ellipsis: {
      rows: customRows,
      expandable: hasExpend ? isExpand : false,
      suffix: hasExpend ? isExpand ? '' : getToggleButton(true) : '',
      tooltip: isTextToObject ? '' : text,
      onExpand: () => setIsExpand(true)
    }
  };
  const customRowEllipsisNotExpandParagraphProps = { ...customRowBaseProps,
    ellipsis: {
      rows: customRows,
      expandable: false,
      tooltip: isTextToObject ? '' : text
    }
  }; // row.rows = 1 \u4E14 text.length > maxLength

  const SingleOverflowParagraph = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_es_tooltip__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    title: text,
    style: styles,
    className: ellipsisClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Paragraph, Object(_Users_eternallycyf_Documents_GitHub_case_my_demo_markdown_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])({}, copyableProps, {
    style: styles
  }), isTextToObject ? '' : (_ref = text.slice(0, maxLength) + isShowEllipsisSymbol) !== null && _ref !== void 0 ? _ref : '--')); // row.rows = 1 \u4E14 text.length <= maxLength

  const SingleParagraph = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Paragraph, Object(_Users_eternallycyf_Documents_GitHub_case_my_demo_markdown_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])({}, copyableProps, {
    style: styles,
    className: ellipsisClassName
  }), text !== null && text !== void 0 ? text : '--'); // \u8BBE\u7F6E\u4E86 row.autoSize

  const AutoSizeParagraph = isTextToObject ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_es_col__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    span: col
  }, text !== null && text !== void 0 ? text : '--')) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_es_col__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    span: col
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Paragraph, Object(_Users_eternallycyf_Documents_GitHub_case_my_demo_markdown_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])({}, copyableProps, {
    className: ellipsisClassName
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(TextArea, {
    style: {
      resize: 'none',
      ...styles
    },
    autoSize: true,
    bordered: false,
    readOnly: true,
    value: text !== null && text !== void 0 ? text : '--'
  }))));
  const CustomRowExpendParagraph = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_es_col__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    span: col,
    className: ellipsisClassName,
    style: { ...customRowsColStyles,
      position: 'relative'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Paragraph, Object(_Users_eternallycyf_Documents_GitHub_case_my_demo_markdown_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])({}, customRowEllipsisParagraphProps, {
    ref: contentRef
  }), text !== null && text !== void 0 ? text : '--', isExpand && getToggleButton(false)));
  const CustomRowNotExpendParagraph = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_es_col__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    span: col,
    className: ellipsisClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Paragraph, customRowEllipsisNotExpandParagraphProps, text !== null && text !== void 0 ? text : '--'));

  if (row.rows == 'autoSize' && isTextToObject) {
    console.log('\u5F53\u4F20\u5165\u7684text\u4E0D\u662Fstring\u7C7B\u578B\u65F6, \u5EFA\u8BAE\u4F7F\u7528row={{ rows:1, expend: true }}');
  }

  if (row.rows == 'autoSize') return AutoSizeParagraph;
  if (row.rows > 1 && row.expend == true) return CustomRowExpendParagraph;
  if (row.rows > 1 && !row.expend) return CustomRowNotExpendParagraph;

  if (isTextToObject) {
    console.log('\u53EA\u6709\u5F53 row.rows >= 2 \u7684\u65F6\u5019\u624D\u53EF\u4EE5\u914D\u7F6E row.expend');
    return CustomRowExpendParagraph;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_es_col__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    span: col
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Paragraph, {
    style: styles,
    className: ellipsisClassName
  }, text && text.length > maxLength ? SingleOverflowParagraph : SingleParagraph));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.memo(CustomTooltip));

//# sourceURL=webpack:///./src/Components/BusinessComponent/CustomTooltip/CustomTooltip.tsx?`)},oIUC:function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin
module.exports = {"ellipsis":"ellipsis___1JWyh","apply-shake":"apply-shake___1P-o9","shake":"shake___1j9R6"};

//# sourceURL=webpack:///./src/Components/BusinessComponent/CustomTooltip/index.less?`)},tU7J:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony import */ var _style_default_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("EFp3");
/* harmony import */ var _style_default_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_default_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/qDX");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _input_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("5NDa");
/* harmony import */ var _tooltip_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("5Dmo");


// style dependencies



//# sourceURL=webpack:///./node_modules/antd/es/typography/style/index.js?`)},wFql:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__("U8pU");

// EXTERNAL MODULE: external "window.React"
var external_window_React_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("rePB");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__("ODXe");

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CheckOutlined.js + 1 modules
var CheckOutlined = __webpack_require__("bRQS");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__("VTBJ");

// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/CopyOutlined.js
// This icon file is generated automatically.
var CopyOutlined_CopyOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z" } }] }, "name": "copy", "theme": "outlined" };
/* harmony default export */ var asn_CopyOutlined = (CopyOutlined_CopyOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 3 modules
var AntdIcon = __webpack_require__("6VBw");

// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/CopyOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var icons_CopyOutlined_CopyOutlined = function CopyOutlined(props, ref) {
  return /*#__PURE__*/external_window_React_["createElement"](AntdIcon["a" /* default */], Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, props), {}, {
    ref: ref,
    icon: asn_CopyOutlined
  }));
};

icons_CopyOutlined_CopyOutlined.displayName = 'CopyOutlined';
/* harmony default export */ var icons_CopyOutlined = (/*#__PURE__*/external_window_React_["forwardRef"](icons_CopyOutlined_CopyOutlined));
// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/EditOutlined.js
// This icon file is generated automatically.
var EditOutlined_EditOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z" } }] }, "name": "edit", "theme": "outlined" };
/* harmony default export */ var asn_EditOutlined = (EditOutlined_EditOutlined);

// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/EditOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var icons_EditOutlined_EditOutlined = function EditOutlined(props, ref) {
  return /*#__PURE__*/external_window_React_["createElement"](AntdIcon["a" /* default */], Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, props), {}, {
    ref: ref,
    icon: asn_EditOutlined
  }));
};

icons_EditOutlined_EditOutlined.displayName = 'EditOutlined';
/* harmony default export */ var icons_EditOutlined = (/*#__PURE__*/external_window_React_["forwardRef"](icons_EditOutlined_EditOutlined));
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/copy-to-clipboard/index.js
var copy_to_clipboard = __webpack_require__("+QRC");
var copy_to_clipboard_default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard);

// EXTERNAL MODULE: ./node_modules/rc-resize-observer/es/index.js + 4 modules
var es = __webpack_require__("t23M");

// EXTERNAL MODULE: ./node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__("Zm9Q");

// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useLayoutEffect.js
var useLayoutEffect = __webpack_require__("TNol");

// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useMergedState.js
var useMergedState = __webpack_require__("6cGi");

// EXTERNAL MODULE: ./node_modules/rc-util/es/omit.js
var omit = __webpack_require__("bT9E");

// EXTERNAL MODULE: ./node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__("c+Xe");

// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__("H84U");

// EXTERNAL MODULE: ./node_modules/antd/es/locale-provider/LocaleReceiver.js + 1 modules
var LocaleReceiver = __webpack_require__("YMnH");

// EXTERNAL MODULE: ./node_modules/antd/es/_util/transButton.js
var transButton = __webpack_require__("gDlH");

// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/styleChecker.js
var styleChecker = __webpack_require__("tl68");

// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/index.js + 3 modules
var es_tooltip = __webpack_require__("3S7+");

// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/EnterOutlined.js
// This icon file is generated automatically.
var EnterOutlined_EnterOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z" } }] }, "name": "enter", "theme": "outlined" };
/* harmony default export */ var asn_EnterOutlined = (EnterOutlined_EnterOutlined);

// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/EnterOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var icons_EnterOutlined_EnterOutlined = function EnterOutlined(props, ref) {
  return /*#__PURE__*/external_window_React_["createElement"](AntdIcon["a" /* default */], Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, props), {}, {
    ref: ref,
    icon: asn_EnterOutlined
  }));
};

icons_EnterOutlined_EnterOutlined.displayName = 'EnterOutlined';
/* harmony default export */ var icons_EnterOutlined = (/*#__PURE__*/external_window_React_["forwardRef"](icons_EnterOutlined_EnterOutlined));
// EXTERNAL MODULE: ./node_modules/rc-util/es/KeyCode.js
var KeyCode = __webpack_require__("4IlW");

// EXTERNAL MODULE: ./node_modules/antd/es/input/TextArea.js + 4 modules
var TextArea = __webpack_require__("whJP");

// EXTERNAL MODULE: ./node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__("0n0R");

// CONCATENATED MODULE: ./node_modules/antd/es/typography/Editable.js








var Editable_Editable = function Editable(_ref) {
  var prefixCls = _ref.prefixCls,
    ariaLabel = _ref['aria-label'],
    className = _ref.className,
    style = _ref.style,
    direction = _ref.direction,
    maxLength = _ref.maxLength,
    _ref$autoSize = _ref.autoSize,
    autoSize = _ref$autoSize === void 0 ? true : _ref$autoSize,
    value = _ref.value,
    onSave = _ref.onSave,
    onCancel = _ref.onCancel,
    onEnd = _ref.onEnd,
    component = _ref.component,
    _ref$enterIcon = _ref.enterIcon,
    enterIcon = _ref$enterIcon === void 0 ? /*#__PURE__*/external_window_React_["createElement"](icons_EnterOutlined, null) : _ref$enterIcon;
  var ref = external_window_React_["useRef"]();
  var inComposition = external_window_React_["useRef"](false);
  var lastKeyCode = external_window_React_["useRef"]();
  var _React$useState = external_window_React_["useState"](value),
    _React$useState2 = Object(slicedToArray["a" /* default */])(_React$useState, 2),
    current = _React$useState2[0],
    setCurrent = _React$useState2[1];
  external_window_React_["useEffect"](function () {
    setCurrent(value);
  }, [value]);
  external_window_React_["useEffect"](function () {
    if (ref.current && ref.current.resizableTextArea) {
      var textArea = ref.current.resizableTextArea.textArea;
      textArea.focus();
      var length = textArea.value.length;
      textArea.setSelectionRange(length, length);
    }
  }, []);
  var onChange = function onChange(_ref2) {
    var target = _ref2.target;
    setCurrent(target.value.replace(/[\\n\\r]/g, ''));
  };
  var onCompositionStart = function onCompositionStart() {
    inComposition.current = true;
  };
  var onCompositionEnd = function onCompositionEnd() {
    inComposition.current = false;
  };
  var onKeyDown = function onKeyDown(_ref3) {
    var keyCode = _ref3.keyCode;
    // We don't record keyCode when IME is using
    if (inComposition.current) return;
    lastKeyCode.current = keyCode;
  };
  var confirmChange = function confirmChange() {
    onSave(current.trim());
  };
  var onKeyUp = function onKeyUp(_ref4) {
    var keyCode = _ref4.keyCode,
      ctrlKey = _ref4.ctrlKey,
      altKey = _ref4.altKey,
      metaKey = _ref4.metaKey,
      shiftKey = _ref4.shiftKey;
    // Check if it's a real key
    if (lastKeyCode.current === keyCode && !inComposition.current && !ctrlKey && !altKey && !metaKey && !shiftKey) {
      if (keyCode === KeyCode["a" /* default */].ENTER) {
        confirmChange();
        onEnd === null || onEnd === void 0 ? void 0 : onEnd();
      } else if (keyCode === KeyCode["a" /* default */].ESC) {
        onCancel();
      }
    }
  };
  var onBlur = function onBlur() {
    confirmChange();
  };
  var textClassName = component ? "".concat(prefixCls, "-").concat(component) : '';
  var textAreaClassName = classnames_default()(prefixCls, "".concat(prefixCls, "-edit-content"), Object(defineProperty["a" /* default */])({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'), className, textClassName);
  return /*#__PURE__*/external_window_React_["createElement"]("div", {
    className: textAreaClassName,
    style: style
  }, /*#__PURE__*/external_window_React_["createElement"](TextArea["a" /* default */], {
    ref: ref,
    maxLength: maxLength,
    value: current,
    onChange: onChange,
    onKeyDown: onKeyDown,
    onKeyUp: onKeyUp,
    onCompositionStart: onCompositionStart,
    onCompositionEnd: onCompositionEnd,
    onBlur: onBlur,
    "aria-label": ariaLabel,
    rows: 1,
    autoSize: autoSize
  }), enterIcon !== null ? Object(reactNode["a" /* cloneElement */])(enterIcon, {
    className: "".concat(prefixCls, "-edit-content-confirm")
  }) : null);
};
/* harmony default export */ var typography_Editable = (Editable_Editable);
// CONCATENATED MODULE: ./node_modules/antd/es/typography/hooks/useMergedConfig.js



function useMergedConfig(propConfig, templateConfig) {
  return external_window_React_["useMemo"](function () {
    var support = !!propConfig;
    return [support, Object(esm_extends["a" /* default */])(Object(esm_extends["a" /* default */])({}, templateConfig), support && Object(esm_typeof["a" /* default */])(propConfig) === 'object' ? propConfig : null)];
  }, [propConfig]);
}
// CONCATENATED MODULE: ./node_modules/antd/es/typography/hooks/useUpdatedEffect.js

/** Similar with \`useEffect\` but only trigger after mounted */
/* harmony default export */ var useUpdatedEffect = (function (callback, conditions) {
  var mountRef = external_window_React_["useRef"](false);
  external_window_React_["useEffect"](function () {
    if (mountRef.current) {
      callback();
    } else {
      mountRef.current = true;
    }
  }, conditions);
});
// CONCATENATED MODULE: ./node_modules/antd/es/typography/Typography.js


var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





var Typography_Typography = function Typography(_a, ref) {
  var customizePrefixCls = _a.prefixCls,
    _a$component = _a.component,
    component = _a$component === void 0 ? 'article' : _a$component,
    className = _a.className,
    ariaLabel = _a['aria-label'],
    setContentRef = _a.setContentRef,
    children = _a.children,
    restProps = __rest(_a, ["prefixCls", "component", "className", 'aria-label', "setContentRef", "children"]);
  var _React$useContext = external_window_React_["useContext"](context["b" /* ConfigContext */]),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var mergedRef = ref;
  if (setContentRef) {
     false ? undefined : void 0;
    mergedRef = Object(es_ref["a" /* composeRef */])(ref, setContentRef);
  }
  var Component = component;
  var prefixCls = getPrefixCls('typography', customizePrefixCls);
  var componentClassName = classnames_default()(prefixCls, Object(defineProperty["a" /* default */])({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'), className);
  return /*#__PURE__*/external_window_React_["createElement"](Component, Object(esm_extends["a" /* default */])({
    className: componentClassName,
    "aria-label": ariaLabel,
    ref: mergedRef
  }, restProps), children);
};
var RefTypography = /*#__PURE__*/external_window_React_["forwardRef"](Typography_Typography);
if (false) {}
// es default export should use const instead of let
var ExportTypography = RefTypography;
/* harmony default export */ var typography_Typography = (ExportTypography);
// CONCATENATED MODULE: ./node_modules/antd/es/typography/Base/Ellipsis.js






function cuttable(node) {
  var type = Object(esm_typeof["a" /* default */])(node);
  return type === 'string' || type === 'number';
}
function getNodesLen(nodeList) {
  var totalLen = 0;
  nodeList.forEach(function (node) {
    if (cuttable(node)) {
      totalLen += String(node).length;
    } else {
      totalLen += 1;
    }
  });
  return totalLen;
}
function sliceNodes(nodeList, len) {
  var currLen = 0;
  var currentNodeList = [];
  for (var i = 0; i < nodeList.length; i += 1) {
    // Match to return
    if (currLen === len) {
      return currentNodeList;
    }
    var node = nodeList[i];
    var canCut = cuttable(node);
    var nodeLen = canCut ? String(node).length : 1;
    var nextLen = currLen + nodeLen;
    // Exceed but current not which means we need cut this
    // This will not happen on validate ReactElement
    if (nextLen > len) {
      var restLen = len - currLen;
      currentNodeList.push(String(node).slice(0, restLen));
      return currentNodeList;
    }
    currentNodeList.push(node);
    currLen = nextLen;
  }
  return nodeList;
}
var NONE = 0;
var PREPARE = 1;
var WALKING = 2;
var DONE_WITH_ELLIPSIS = 3;
var DONE_WITHOUT_ELLIPSIS = 4;
var Ellipsis_Ellipsis = function Ellipsis(_ref) {
  var enabledMeasure = _ref.enabledMeasure,
    children = _ref.children,
    text = _ref.text,
    width = _ref.width,
    fontSize = _ref.fontSize,
    rows = _ref.rows,
    onEllipsis = _ref.onEllipsis;
  var _React$useState = external_window_React_["useState"]([0, 0, 0]),
    _React$useState2 = Object(slicedToArray["a" /* default */])(_React$useState, 2),
    cutLength = _React$useState2[0],
    setCutLength = _React$useState2[1];
  var _React$useState3 = external_window_React_["useState"](NONE),
    _React$useState4 = Object(slicedToArray["a" /* default */])(_React$useState3, 2),
    walkingState = _React$useState4[0],
    setWalkingState = _React$useState4[1];
  var _cutLength = Object(slicedToArray["a" /* default */])(cutLength, 3),
    startLen = _cutLength[0],
    midLen = _cutLength[1],
    endLen = _cutLength[2];
  var _React$useState5 = external_window_React_["useState"](0),
    _React$useState6 = Object(slicedToArray["a" /* default */])(_React$useState5, 2),
    singleRowHeight = _React$useState6[0],
    setSingleRowHeight = _React$useState6[1];
  var singleRowRef = external_window_React_["useRef"](null);
  var midRowRef = external_window_React_["useRef"](null);
  var nodeList = external_window_React_["useMemo"](function () {
    return Object(toArray["a" /* default */])(text);
  }, [text]);
  var totalLen = external_window_React_["useMemo"](function () {
    return getNodesLen(nodeList);
  }, [nodeList]);
  var mergedChildren = external_window_React_["useMemo"](function () {
    if (!enabledMeasure || walkingState !== DONE_WITH_ELLIPSIS) {
      return children(nodeList, false);
    }
    return children(sliceNodes(nodeList, midLen), midLen < totalLen);
  }, [enabledMeasure, walkingState, children, nodeList, midLen, totalLen]);
  // ======================== Walk ========================
  Object(useLayoutEffect["a" /* default */])(function () {
    if (enabledMeasure && width && fontSize && totalLen) {
      setWalkingState(PREPARE);
      setCutLength([0, Math.ceil(totalLen / 2), totalLen]);
    }
  }, [enabledMeasure, width, fontSize, text, totalLen, rows]);
  Object(useLayoutEffect["a" /* default */])(function () {
    var _a;
    if (walkingState === PREPARE) {
      setSingleRowHeight(((_a = singleRowRef.current) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0);
    }
  }, [walkingState]);
  Object(useLayoutEffect["a" /* default */])(function () {
    var _a, _b;
    if (singleRowHeight) {
      if (walkingState === PREPARE) {
        // Ignore if position is enough
        var midHeight = ((_a = midRowRef.current) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0;
        var maxHeight = rows * singleRowHeight;
        if (midHeight <= maxHeight) {
          setWalkingState(DONE_WITHOUT_ELLIPSIS);
          onEllipsis(false);
        } else {
          setWalkingState(WALKING);
        }
      } else if (walkingState === WALKING) {
        if (startLen !== endLen) {
          var _midHeight = ((_b = midRowRef.current) === null || _b === void 0 ? void 0 : _b.offsetHeight) || 0;
          var _maxHeight = rows * singleRowHeight;
          var nextStartLen = startLen;
          var nextEndLen = endLen;
          // We reach the last round
          if (startLen === endLen - 1) {
            nextEndLen = startLen;
          } else if (_midHeight <= _maxHeight) {
            nextStartLen = midLen;
          } else {
            nextEndLen = midLen;
          }
          var nextMidLen = Math.ceil((nextStartLen + nextEndLen) / 2);
          setCutLength([nextStartLen, nextMidLen, nextEndLen]);
        } else {
          setWalkingState(DONE_WITH_ELLIPSIS);
          onEllipsis(true);
        }
      }
    }
  }, [walkingState, startLen, endLen, rows, singleRowHeight]);
  // ======================= Render =======================
  var measureStyle = {
    width: width,
    whiteSpace: 'normal',
    margin: 0,
    padding: 0
  };
  var renderMeasure = function renderMeasure(content, ref, style) {
    return /*#__PURE__*/external_window_React_["createElement"]("span", {
      "aria-hidden": true,
      ref: ref,
      style: Object(esm_extends["a" /* default */])({
        position: 'fixed',
        display: 'block',
        left: 0,
        top: 0,
        zIndex: -9999,
        visibility: 'hidden',
        pointerEvents: 'none',
        fontSize: Math.floor(fontSize / 2) * 2
      }, style)
    }, content);
  };
  var renderMeasureSlice = function renderMeasureSlice(len, ref) {
    var sliceNodeList = sliceNodes(nodeList, len);
    return renderMeasure(children(sliceNodeList, true), ref, measureStyle);
  };
  return /*#__PURE__*/external_window_React_["createElement"](external_window_React_["Fragment"], null, mergedChildren, enabledMeasure && walkingState !== DONE_WITH_ELLIPSIS && walkingState !== DONE_WITHOUT_ELLIPSIS && /*#__PURE__*/external_window_React_["createElement"](external_window_React_["Fragment"], null, renderMeasure('lg', singleRowRef, {
    wordBreak: 'keep-all',
    whiteSpace: 'nowrap'
  }), walkingState === PREPARE ? renderMeasure(children(nodeList, false), midRowRef, measureStyle) : renderMeasureSlice(midLen, midRowRef)));
};
if (false) {}
/* harmony default export */ var Base_Ellipsis = (Ellipsis_Ellipsis);
// CONCATENATED MODULE: ./node_modules/antd/es/typography/Base/EllipsisTooltip.js



var EllipsisTooltip_EllipsisTooltip = function EllipsisTooltip(_ref) {
  var enabledEllipsis = _ref.enabledEllipsis,
    isEllipsis = _ref.isEllipsis,
    children = _ref.children,
    tooltipProps = _ref.tooltipProps;
  if (!(tooltipProps === null || tooltipProps === void 0 ? void 0 : tooltipProps.title) || !enabledEllipsis) {
    return children;
  }
  return /*#__PURE__*/external_window_React_["createElement"](es_tooltip["a" /* default */], Object(esm_extends["a" /* default */])({
    open: isEllipsis ? undefined : false
  }, tooltipProps), children);
};
if (false) {}
/* harmony default export */ var Base_EllipsisTooltip = (EllipsisTooltip_EllipsisTooltip);
// CONCATENATED MODULE: ./node_modules/antd/es/typography/Base/index.js




var Base_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};























function wrapperDecorations(_ref, content) {
  var mark = _ref.mark,
    code = _ref.code,
    underline = _ref.underline,
    del = _ref["delete"],
    strong = _ref.strong,
    keyboard = _ref.keyboard,
    italic = _ref.italic;
  var currentContent = content;
  function wrap(needed, tag) {
    if (!needed) return;
    currentContent = /*#__PURE__*/external_window_React_["createElement"](tag, {}, currentContent);
  }
  wrap(strong, 'strong');
  wrap(underline, 'u');
  wrap(del, 'del');
  wrap(code, 'code');
  wrap(mark, 'mark');
  wrap(keyboard, 'kbd');
  wrap(italic, 'i');
  return currentContent;
}
function getNode(dom, defaultNode, needDom) {
  if (dom === true || dom === undefined) {
    return defaultNode;
  }
  return dom || needDom && defaultNode;
}
function toList(val) {
  if (val === false) {
    return [false, false];
  }
  return Array.isArray(val) ? val : [val];
}
var ELLIPSIS_STR = '...';
var Base = /*#__PURE__*/external_window_React_["forwardRef"](function (props, ref) {
  var customizePrefixCls = props.prefixCls,
    className = props.className,
    style = props.style,
    type = props.type,
    disabled = props.disabled,
    children = props.children,
    ellipsis = props.ellipsis,
    editable = props.editable,
    copyable = props.copyable,
    component = props.component,
    title = props.title,
    restProps = Base_rest(props, ["prefixCls", "className", "style", "type", "disabled", "children", "ellipsis", "editable", "copyable", "component", "title"]);
  var _React$useContext = external_window_React_["useContext"](context["b" /* ConfigContext */]),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var textLocale = Object(LocaleReceiver["b" /* useLocaleReceiver */])('Text')[0]; // Force TS get this
  var typographyRef = external_window_React_["useRef"](null);
  var editIconRef = external_window_React_["useRef"](null);
  // ============================ MISC ============================
  var prefixCls = getPrefixCls('typography', customizePrefixCls);
  var textProps = Object(omit["a" /* default */])(restProps, ['mark', 'code', 'delete', 'underline', 'strong', 'keyboard', 'italic']);
  // ========================== Editable ==========================
  var _useMergedConfig = useMergedConfig(editable),
    _useMergedConfig2 = Object(slicedToArray["a" /* default */])(_useMergedConfig, 2),
    enableEdit = _useMergedConfig2[0],
    editConfig = _useMergedConfig2[1];
  var _useMergedState = Object(useMergedState["a" /* default */])(false, {
      value: editConfig.editing
    }),
    _useMergedState2 = Object(slicedToArray["a" /* default */])(_useMergedState, 2),
    editing = _useMergedState2[0],
    setEditing = _useMergedState2[1];
  var _editConfig$triggerTy = editConfig.triggerType,
    triggerType = _editConfig$triggerTy === void 0 ? ['icon'] : _editConfig$triggerTy;
  var triggerEdit = function triggerEdit(edit) {
    var _a;
    if (edit) {
      (_a = editConfig.onStart) === null || _a === void 0 ? void 0 : _a.call(editConfig);
    }
    setEditing(edit);
  };
  // Focus edit icon when back
  useUpdatedEffect(function () {
    var _a;
    if (!editing) {
      (_a = editIconRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }
  }, [editing]);
  var onEditClick = function onEditClick(e) {
    e === null || e === void 0 ? void 0 : e.preventDefault();
    triggerEdit(true);
  };
  var onEditChange = function onEditChange(value) {
    var _a;
    (_a = editConfig.onChange) === null || _a === void 0 ? void 0 : _a.call(editConfig, value);
    triggerEdit(false);
  };
  var onEditCancel = function onEditCancel() {
    var _a;
    (_a = editConfig.onCancel) === null || _a === void 0 ? void 0 : _a.call(editConfig);
    triggerEdit(false);
  };
  // ========================== Copyable ==========================
  var _useMergedConfig3 = useMergedConfig(copyable),
    _useMergedConfig4 = Object(slicedToArray["a" /* default */])(_useMergedConfig3, 2),
    enableCopy = _useMergedConfig4[0],
    copyConfig = _useMergedConfig4[1];
  var _React$useState = external_window_React_["useState"](false),
    _React$useState2 = Object(slicedToArray["a" /* default */])(_React$useState, 2),
    copied = _React$useState2[0],
    setCopied = _React$useState2[1];
  var copyIdRef = external_window_React_["useRef"]();
  var copyOptions = {};
  if (copyConfig.format) {
    copyOptions.format = copyConfig.format;
  }
  var cleanCopyId = function cleanCopyId() {
    clearTimeout(copyIdRef.current);
  };
  var onCopyClick = function onCopyClick(e) {
    var _a;
    e === null || e === void 0 ? void 0 : e.preventDefault();
    e === null || e === void 0 ? void 0 : e.stopPropagation();
    copy_to_clipboard_default()(copyConfig.text || String(children) || '', copyOptions);
    setCopied(true);
    // Trigger tips update
    cleanCopyId();
    copyIdRef.current = setTimeout(function () {
      setCopied(false);
    }, 3000);
    (_a = copyConfig.onCopy) === null || _a === void 0 ? void 0 : _a.call(copyConfig, e);
  };
  external_window_React_["useEffect"](function () {
    return cleanCopyId;
  }, []);
  // ========================== Ellipsis ==========================
  var _React$useState3 = external_window_React_["useState"](false),
    _React$useState4 = Object(slicedToArray["a" /* default */])(_React$useState3, 2),
    isLineClampSupport = _React$useState4[0],
    setIsLineClampSupport = _React$useState4[1];
  var _React$useState5 = external_window_React_["useState"](false),
    _React$useState6 = Object(slicedToArray["a" /* default */])(_React$useState5, 2),
    isTextOverflowSupport = _React$useState6[0],
    setIsTextOverflowSupport = _React$useState6[1];
  var _React$useState7 = external_window_React_["useState"](false),
    _React$useState8 = Object(slicedToArray["a" /* default */])(_React$useState7, 2),
    expanded = _React$useState8[0],
    setExpanded = _React$useState8[1];
  var _React$useState9 = external_window_React_["useState"](false),
    _React$useState10 = Object(slicedToArray["a" /* default */])(_React$useState9, 2),
    isJsEllipsis = _React$useState10[0],
    setIsJsEllipsis = _React$useState10[1];
  var _React$useState11 = external_window_React_["useState"](false),
    _React$useState12 = Object(slicedToArray["a" /* default */])(_React$useState11, 2),
    isNativeEllipsis = _React$useState12[0],
    setIsNativeEllipsis = _React$useState12[1];
  var _React$useState13 = external_window_React_["useState"](true),
    _React$useState14 = Object(slicedToArray["a" /* default */])(_React$useState13, 2),
    isNativeVisible = _React$useState14[0],
    setIsNativeVisible = _React$useState14[1];
  var _useMergedConfig5 = useMergedConfig(ellipsis, {
      expandable: false
    }),
    _useMergedConfig6 = Object(slicedToArray["a" /* default */])(_useMergedConfig5, 2),
    enableEllipsis = _useMergedConfig6[0],
    ellipsisConfig = _useMergedConfig6[1];
  var mergedEnableEllipsis = enableEllipsis && !expanded;
  // Shared prop to reduce bundle size
  var _ellipsisConfig$rows = ellipsisConfig.rows,
    rows = _ellipsisConfig$rows === void 0 ? 1 : _ellipsisConfig$rows;
  var needMeasureEllipsis = external_window_React_["useMemo"](function () {
    return (
      // Disable ellipsis
      !mergedEnableEllipsis ||
      // Provide suffix
      ellipsisConfig.suffix !== undefined || ellipsisConfig.onEllipsis ||
      // Can't use css ellipsis since we need to provide the place for button
      ellipsisConfig.expandable || enableEdit || enableCopy
    );
  }, [mergedEnableEllipsis, ellipsisConfig, enableEdit, enableCopy]);
  Object(useLayoutEffect["a" /* default */])(function () {
    if (enableEllipsis && !needMeasureEllipsis) {
      setIsLineClampSupport(Object(styleChecker["a" /* isStyleSupport */])('webkitLineClamp'));
      setIsTextOverflowSupport(Object(styleChecker["a" /* isStyleSupport */])('textOverflow'));
    }
  }, [needMeasureEllipsis, enableEllipsis]);
  var cssEllipsis = external_window_React_["useMemo"](function () {
    if (needMeasureEllipsis) {
      return false;
    }
    if (rows === 1) {
      return isTextOverflowSupport;
    }
    return isLineClampSupport;
  }, [needMeasureEllipsis, isTextOverflowSupport, isLineClampSupport]);
  var isMergedEllipsis = mergedEnableEllipsis && (cssEllipsis ? isNativeEllipsis : isJsEllipsis);
  var cssTextOverflow = mergedEnableEllipsis && rows === 1 && cssEllipsis;
  var cssLineClamp = mergedEnableEllipsis && rows > 1 && cssEllipsis;
  // >>>>> Expand
  var onExpandClick = function onExpandClick(e) {
    var _a;
    setExpanded(true);
    (_a = ellipsisConfig.onExpand) === null || _a === void 0 ? void 0 : _a.call(ellipsisConfig, e);
  };
  var _React$useState15 = external_window_React_["useState"](0),
    _React$useState16 = Object(slicedToArray["a" /* default */])(_React$useState15, 2),
    ellipsisWidth = _React$useState16[0],
    setEllipsisWidth = _React$useState16[1];
  var _React$useState17 = external_window_React_["useState"](0),
    _React$useState18 = Object(slicedToArray["a" /* default */])(_React$useState17, 2),
    ellipsisFontSize = _React$useState18[0],
    setEllipsisFontSize = _React$useState18[1];
  var onResize = function onResize(_ref2, element) {
    var offsetWidth = _ref2.offsetWidth;
    var _a;
    setEllipsisWidth(offsetWidth);
    setEllipsisFontSize(parseInt((_a = window.getComputedStyle) === null || _a === void 0 ? void 0 : _a.call(window, element).fontSize, 10) || 0);
  };
  // >>>>> JS Ellipsis
  var onJsEllipsis = function onJsEllipsis(jsEllipsis) {
    var _a;
    setIsJsEllipsis(jsEllipsis);
    // Trigger if changed
    if (isJsEllipsis !== jsEllipsis) {
      (_a = ellipsisConfig.onEllipsis) === null || _a === void 0 ? void 0 : _a.call(ellipsisConfig, jsEllipsis);
    }
  };
  // >>>>> Native ellipsis
  external_window_React_["useEffect"](function () {
    var textEle = typographyRef.current;
    if (enableEllipsis && cssEllipsis && textEle) {
      var currentEllipsis = cssLineClamp ? textEle.offsetHeight < textEle.scrollHeight : textEle.offsetWidth < textEle.scrollWidth;
      if (isNativeEllipsis !== currentEllipsis) {
        setIsNativeEllipsis(currentEllipsis);
      }
    }
  }, [enableEllipsis, cssEllipsis, children, cssLineClamp, isNativeVisible]);
  // https://github.com/ant-design/ant-design/issues/36786
  // Use IntersectionObserver to check if element is invisible
  external_window_React_["useEffect"](function () {
    var textEle = typographyRef.current;
    if (typeof IntersectionObserver === 'undefined' || !textEle || !cssEllipsis || !mergedEnableEllipsis) {
      return;
    }
    /* eslint-disable-next-line compat/compat */
    var observer = new IntersectionObserver(function () {
      setIsNativeVisible(!!textEle.offsetParent);
    });
    observer.observe(textEle);
    return function () {
      observer.disconnect();
    };
  }, [cssEllipsis, mergedEnableEllipsis]);
  // ========================== Tooltip ===========================
  var tooltipProps = {};
  if (ellipsisConfig.tooltip === true) {
    tooltipProps = {
      title: children
    };
  } else if ( /*#__PURE__*/external_window_React_["isValidElement"](ellipsisConfig.tooltip)) {
    tooltipProps = {
      title: ellipsisConfig.tooltip
    };
  } else if (Object(esm_typeof["a" /* default */])(ellipsisConfig.tooltip) === 'object') {
    tooltipProps = Object(esm_extends["a" /* default */])({
      title: children
    }, ellipsisConfig.tooltip);
  } else {
    tooltipProps = {
      title: ellipsisConfig.tooltip
    };
  }
  var topAriaLabel = external_window_React_["useMemo"](function () {
    var isValid = function isValid(val) {
      return ['string', 'number'].includes(Object(esm_typeof["a" /* default */])(val));
    };
    if (!enableEllipsis || cssEllipsis) {
      return undefined;
    }
    if (isValid(children)) {
      return children;
    }
    if (isValid(title)) {
      return title;
    }
    if (isValid(tooltipProps.title)) {
      return tooltipProps.title;
    }
    return undefined;
  }, [enableEllipsis, cssEllipsis, title, tooltipProps.title, isMergedEllipsis]);
  // =========================== Render ===========================
  // >>>>>>>>>>> Editing input
  if (editing) {
    return /*#__PURE__*/external_window_React_["createElement"](typography_Editable, {
      value: typeof children === 'string' ? children : '',
      onSave: onEditChange,
      onCancel: onEditCancel,
      onEnd: editConfig.onEnd,
      prefixCls: prefixCls,
      className: className,
      style: style,
      direction: direction,
      component: component,
      maxLength: editConfig.maxLength,
      autoSize: editConfig.autoSize,
      enterIcon: editConfig.enterIcon
    });
  }
  // >>>>>>>>>>> Typography
  // Expand
  var renderExpand = function renderExpand() {
    var expandable = ellipsisConfig.expandable,
      symbol = ellipsisConfig.symbol;
    if (!expandable) return null;
    var expandContent;
    if (symbol) {
      expandContent = symbol;
    } else {
      expandContent = textLocale.expand;
    }
    return /*#__PURE__*/external_window_React_["createElement"]("a", {
      key: "expand",
      className: "".concat(prefixCls, "-expand"),
      onClick: onExpandClick,
      "aria-label": textLocale.expand
    }, expandContent);
  };
  // Edit
  var renderEdit = function renderEdit() {
    if (!enableEdit) return;
    var icon = editConfig.icon,
      tooltip = editConfig.tooltip;
    var editTitle = Object(toArray["a" /* default */])(tooltip)[0] || textLocale.edit;
    var ariaLabel = typeof editTitle === 'string' ? editTitle : '';
    return triggerType.includes('icon') ? /*#__PURE__*/external_window_React_["createElement"](es_tooltip["a" /* default */], {
      key: "edit",
      title: tooltip === false ? '' : editTitle
    }, /*#__PURE__*/external_window_React_["createElement"](transButton["a" /* default */], {
      ref: editIconRef,
      className: "".concat(prefixCls, "-edit"),
      onClick: onEditClick,
      "aria-label": ariaLabel
    }, icon || /*#__PURE__*/external_window_React_["createElement"](icons_EditOutlined, {
      role: "button"
    }))) : null;
  };
  // Copy
  var renderCopy = function renderCopy() {
    if (!enableCopy) return;
    var tooltips = copyConfig.tooltips,
      icon = copyConfig.icon;
    var tooltipNodes = toList(tooltips);
    var iconNodes = toList(icon);
    var copyTitle = copied ? getNode(tooltipNodes[1], textLocale.copied) : getNode(tooltipNodes[0], textLocale.copy);
    var systemStr = copied ? textLocale.copied : textLocale.copy;
    var ariaLabel = typeof copyTitle === 'string' ? copyTitle : systemStr;
    return /*#__PURE__*/external_window_React_["createElement"](es_tooltip["a" /* default */], {
      key: "copy",
      title: copyTitle
    }, /*#__PURE__*/external_window_React_["createElement"](transButton["a" /* default */], {
      className: classnames_default()("".concat(prefixCls, "-copy"), copied && "".concat(prefixCls, "-copy-success")),
      onClick: onCopyClick,
      "aria-label": ariaLabel
    }, copied ? getNode(iconNodes[1], /*#__PURE__*/external_window_React_["createElement"](CheckOutlined["a" /* default */], null), true) : getNode(iconNodes[0], /*#__PURE__*/external_window_React_["createElement"](icons_CopyOutlined, null), true)));
  };
  var renderOperations = function renderOperations(renderExpanded) {
    return [renderExpanded && renderExpand(), renderEdit(), renderCopy()];
  };
  var renderEllipsis = function renderEllipsis(needEllipsis) {
    return [needEllipsis && /*#__PURE__*/external_window_React_["createElement"]("span", {
      "aria-hidden": true,
      key: "ellipsis"
    }, ELLIPSIS_STR), ellipsisConfig.suffix, renderOperations(needEllipsis)];
  };
  return /*#__PURE__*/external_window_React_["createElement"](es["a" /* default */], {
    onResize: onResize,
    disabled: !mergedEnableEllipsis || cssEllipsis
  }, function (resizeRef) {
    var _classNames;
    return /*#__PURE__*/external_window_React_["createElement"](Base_EllipsisTooltip, {
      tooltipProps: tooltipProps,
      enabledEllipsis: mergedEnableEllipsis,
      isEllipsis: isMergedEllipsis
    }, /*#__PURE__*/external_window_React_["createElement"](typography_Typography, Object(esm_extends["a" /* default */])({
      className: classnames_default()((_classNames = {}, Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-").concat(type), type), Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-disabled"), disabled), Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-ellipsis"), enableEllipsis), Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-single-line"), mergedEnableEllipsis && rows === 1), Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-ellipsis-single-line"), cssTextOverflow), Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-ellipsis-multiple-line"), cssLineClamp), _classNames), className),
      style: Object(esm_extends["a" /* default */])(Object(esm_extends["a" /* default */])({}, style), {
        WebkitLineClamp: cssLineClamp ? rows : undefined
      }),
      component: component,
      ref: Object(es_ref["a" /* composeRef */])(resizeRef, typographyRef, ref),
      direction: direction,
      onClick: triggerType.includes('text') ? onEditClick : null,
      "aria-label": topAriaLabel,
      title: title
    }, textProps), /*#__PURE__*/external_window_React_["createElement"](Base_Ellipsis, {
      enabledMeasure: mergedEnableEllipsis && !cssEllipsis,
      text: children,
      rows: rows,
      width: ellipsisWidth,
      fontSize: ellipsisFontSize,
      onEllipsis: onJsEllipsis
    }, function (node, needEllipsis) {
      var renderNode = node;
      if (node.length && needEllipsis && topAriaLabel) {
        renderNode = /*#__PURE__*/external_window_React_["createElement"]("span", {
          key: "show-content",
          "aria-hidden": true
        }, renderNode);
      }
      var wrappedContext = wrapperDecorations(props, /*#__PURE__*/external_window_React_["createElement"](external_window_React_["Fragment"], null, renderNode, renderEllipsis(needEllipsis)));
      return wrappedContext;
    })));
  });
});
/* harmony default export */ var typography_Base = (Base);
// CONCATENATED MODULE: ./node_modules/antd/es/typography/Link.js


var Link_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};



var Link_Link = function Link(_a, ref) {
  var ellipsis = _a.ellipsis,
    rel = _a.rel,
    restProps = Link_rest(_a, ["ellipsis", "rel"]);
   false ? undefined : void 0;
  var baseRef = external_window_React_["useRef"](null);
  external_window_React_["useImperativeHandle"](ref, function () {
    return baseRef.current;
  });
  var mergedProps = Object(esm_extends["a" /* default */])(Object(esm_extends["a" /* default */])({}, restProps), {
    rel: rel === undefined && restProps.target === '_blank' ? 'noopener noreferrer' : rel
  });
  // https://github.com/ant-design/ant-design/issues/26622
  // @ts-ignore
  delete mergedProps.navigate;
  return /*#__PURE__*/external_window_React_["createElement"](typography_Base, Object(esm_extends["a" /* default */])({}, mergedProps, {
    ref: baseRef,
    ellipsis: !!ellipsis,
    component: "a"
  }));
};
/* harmony default export */ var typography_Link = (/*#__PURE__*/external_window_React_["forwardRef"](Link_Link));
// CONCATENATED MODULE: ./node_modules/antd/es/typography/Paragraph.js



var Paragraph_Paragraph = function Paragraph(props, ref) {
  return /*#__PURE__*/external_window_React_["createElement"](typography_Base, Object(esm_extends["a" /* default */])({
    ref: ref
  }, props, {
    component: "div"
  }));
};
/* harmony default export */ var typography_Paragraph = (/*#__PURE__*/external_window_React_["forwardRef"](Paragraph_Paragraph));
// CONCATENATED MODULE: ./node_modules/antd/es/typography/Text.js


var Text_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




var Text_Text = function Text(_a, ref) {
  var ellipsis = _a.ellipsis,
    restProps = Text_rest(_a, ["ellipsis"]);
  var mergedEllipsis = external_window_React_["useMemo"](function () {
    if (ellipsis && Object(esm_typeof["a" /* default */])(ellipsis) === 'object') {
      return Object(omit["a" /* default */])(ellipsis, ['expandable', 'rows']);
    }
    return ellipsis;
  }, [ellipsis]);
   false ? undefined : void 0;
  return /*#__PURE__*/external_window_React_["createElement"](typography_Base, Object(esm_extends["a" /* default */])({
    ref: ref
  }, restProps, {
    ellipsis: mergedEllipsis,
    component: "span"
  }));
};
/* harmony default export */ var typography_Text = (/*#__PURE__*/external_window_React_["forwardRef"](Text_Text));
// EXTERNAL MODULE: ./node_modules/antd/es/_util/type.js
var _util_type = __webpack_require__("CWQg");

// CONCATENATED MODULE: ./node_modules/antd/es/typography/Title.js

var Title_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




var TITLE_ELE_LIST = Object(_util_type["b" /* tupleNum */])(1, 2, 3, 4, 5);
var Title_Title = function Title(props, ref) {
  var _props$level = props.level,
    level = _props$level === void 0 ? 1 : _props$level,
    restProps = Title_rest(props, ["level"]);
  var component;
  if (TITLE_ELE_LIST.indexOf(level) !== -1) {
    component = "h".concat(level);
  } else {
     false ? undefined : void 0;
    component = 'h1';
  }
  return /*#__PURE__*/external_window_React_["createElement"](typography_Base, Object(esm_extends["a" /* default */])({
    ref: ref
  }, restProps, {
    component: component
  }));
};
/* harmony default export */ var typography_Title = (/*#__PURE__*/external_window_React_["forwardRef"](Title_Title));
// CONCATENATED MODULE: ./node_modules/antd/es/typography/index.js





var es_typography_Typography = typography_Typography;
es_typography_Typography.Text = typography_Text;
es_typography_Typography.Link = typography_Link;
es_typography_Typography.Title = typography_Title;
es_typography_Typography.Paragraph = typography_Paragraph;
/* harmony default export */ var typography = __webpack_exports__["a"] = (es_typography_Typography);

//# sourceURL=webpack:///./node_modules/antd/es/typography/index.js_+_17_modules?`)}}]);
