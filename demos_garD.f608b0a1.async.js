(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{rlxp:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("tJVT");

// EXTERNAL MODULE: ./node_modules/antd/es/tag/style/index.js
var style = __webpack_require__("+BJd");

// EXTERNAL MODULE: ./node_modules/antd/es/tag/index.js + 1 modules
var tag = __webpack_require__("mr32");

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("0Owb");

// EXTERNAL MODULE: external "window.React"
var external_window_React_ = __webpack_require__("cDcd");
var external_window_React_default = /*#__PURE__*/__webpack_require__.n(external_window_React_);

// CONCATENATED MODULE: ./src/Components/BusinessComponent/Drag/constant.tsx
const DATA_LIST_DICT = [{
  color: 'magenta',
  draggable: true,
  key: 0
}, {
  color: 'red',
  draggable: true,
  key: 1
}, {
  color: 'volcano',
  draggable: true,
  key: 2
}, {
  color: 'gold',
  draggable: true,
  key: 3
}, {
  color: 'lime',
  draggable: true,
  key: 4
}, {
  color: 'green',
  draggable: true,
  key: 5
}, {
  color: 'cyan',
  draggable: true,
  key: 6
}, {
  color: 'blue',
  draggable: true,
  key: 7
}, {
  color: 'geekblue',
  draggable: true,
  key: 8
}, {
  color: 'purple',
  draggable: true,
  closable: true,
  key: 9
}];
// CONCATENATED MODULE: ./src/Components/BusinessComponent/Drag/interface.tsx
const _checkIsTargetEqual = (currentTarget, target) => currentTarget === target;
// CONCATENATED MODULE: ./src/Components/BusinessComponent/Drag/index.tsx








const renderTag = data => {
  const TagsNode = data.map(item => /*#__PURE__*/external_window_React_default.a.createElement(tag["a" /* default */], Object(esm_extends["a" /* default */])({}, item, {
    key: item.key,
    "data-key": item.key,
    className: "tag_item",
    color: item.color
  }), item.color));
  return TagsNode;
};

const test = () => {
  const tagBox = Object(external_window_React_["useRef"])(null);

  const _useState = Object(external_window_React_["useState"])(null),
        _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
        startTag = _useState2[0],
        setStartTag = _useState2[1];

  const _useState3 = Object(external_window_React_["useState"])(null),
        _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 2),
        endTag = _useState4[0],
        setEndTag = _useState4[1];

  const _useState5 = Object(external_window_React_["useState"])(DATA_LIST_DICT),
        _useState6 = Object(slicedToArray["a" /* default */])(_useState5, 2),
        dataList = _useState6[0],
        setDataList = _useState6[1];

  const handleDragstart = e => e.target && setStartTag(e.target);

  const handleDragover = e => {
    e.preventDefault();
    const target = e.target;
    if (_checkIsTargetEqual(tagBox.current, target)) return setEndTag(null);
    if (!_checkIsTargetEqual(endTag, target)) return setEndTag(target);
  };

  const handleDragend = e => {
    e.preventDefault();
    if (!endTag) return false;
    let list = [...dataList];
    const endKey = endTag === null || endTag === void 0 ? void 0 : endTag.getAttribute('data-key');
    const startKey = startTag === null || startTag === void 0 ? void 0 : startTag.getAttribute('data-key'); // \u4EA4\u6362\u4F4D\u7F6E

    var _ref = [list[endKey], list[startKey]];
    list[startKey] = _ref[0];
    list[endKey] = _ref[1];
    setDataList([...list]);
  };

  const EventsPool = {
    onDragStart: handleDragstart,
    onDragOver: handleDragover,
    onDragEnd: handleDragend
  };
  return /*#__PURE__*/external_window_React_default.a.createElement("div", Object(esm_extends["a" /* default */])({
    ref: tagBox
  }, EventsPool), renderTag(dataList));
};

/* harmony default export */ var Drag = __webpack_exports__["default"] = (test);

//# sourceURL=webpack:///./src/Components/BusinessComponent/Drag/index.tsx_+_2_modules?`)}}]);
