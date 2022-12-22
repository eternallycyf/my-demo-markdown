(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{GYJ1:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "window.React"
var external_window_React_ = __webpack_require__("cDcd");
var external_window_React_default = /*#__PURE__*/__webpack_require__.n(external_window_React_);

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("tJVT");

// CONCATENATED MODULE: ./src/Components/BusinessComponent/WaterMark/WaterMark.tsx



const WaterMark = props => {
  const _props$width = props.width,
        width = _props$width === void 0 ? 300 : _props$width,
        _props$height = props.height,
        height = _props$height === void 0 ? 200 : _props$height,
        _props$textAlign = props.textAlign,
        textAlign = _props$textAlign === void 0 ? 'center' : _props$textAlign,
        _props$textBaseline = props.textBaseline,
        textBaseline = _props$textBaseline === void 0 ? 'middle' : _props$textBaseline,
        _props$font = props.font,
        font = _props$font === void 0 ? '20px Microsoft Yahei' : _props$font,
        _props$fillStyle = props.fillStyle,
        fillStyle = _props$fillStyle === void 0 ? 'rgba(184, 184, 184, 0.6)' : _props$fillStyle,
        _props$content = props.content,
        content = _props$content === void 0 ? 'WaterMark' : _props$content,
        _props$rotate = props.rotate,
        rotate = _props$rotate === void 0 ? -20 : _props$rotate,
        _props$zIndex = props.zIndex,
        zIndex = _props$zIndex === void 0 ? 1000 : _props$zIndex;

  const _useState = Object(external_window_React_["useState"])(''),
        _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
        waterMarkUrl = _useState2[0],
        setWaterMarkUrl = _useState2[1];

  Object(external_window_React_["useEffect"])(() => {
    const canvas = document.createElement('canvas');
    canvas.setAttribute('width', \`\${width}px\`);
    canvas.setAttribute('height', \`\${height}px\`);
    const translateX = width / 2;
    const translateY = height / 2;
    const ctx = canvas.getContext('2d');
    ctx.textAlign = textAlign;
    ctx.textBaseline = textBaseline;
    ctx.font = font;
    ctx.fillStyle = fillStyle;
    ctx.translate(translateX, translateY);
    ctx.rotate(Math.PI / 180 * rotate);
    ctx.translate(-translateX, -translateY);
    ctx.fillText(content, translateX, translateY);
    setWaterMarkUrl(canvas.toDataURL());
  }, [width, height, textAlign, textBaseline, font, fillStyle, content]);
  return /*#__PURE__*/external_window_React_default.a.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/external_window_React_default.a.createElement("div", null, props.children), /*#__PURE__*/external_window_React_default.a.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex,
      pointerEvents: 'none',
      background: \`url(\${waterMarkUrl}) repeat\`
    }
  }));
};

/* harmony default export */ var WaterMark_WaterMark = (/*#__PURE__*/external_window_React_default.a.memo(WaterMark));
// CONCATENATED MODULE: ./src/Components/BusinessComponent/WaterMark/index.tsx



const IndexPage = () => {
  return /*#__PURE__*/external_window_React_default.a.createElement("div", {
    style: {
      height: 500
    }
  }, /*#__PURE__*/external_window_React_default.a.createElement(WaterMark_WaterMark, null));
};

/* harmony default export */ var BusinessComponent_WaterMark = __webpack_exports__["default"] = (IndexPage);

//# sourceURL=webpack:///./src/Components/BusinessComponent/WaterMark/index.tsx_+_1_modules?`)}}]);
