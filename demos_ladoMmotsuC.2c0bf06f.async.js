(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{ZVT4:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/antd/es/button/style/index.js
var style = __webpack_require__("+L6B");

// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__("2/Rp");

// EXTERNAL MODULE: external "window.React"
var external_window_React_ = __webpack_require__("cDcd");
var external_window_React_default = /*#__PURE__*/__webpack_require__.n(external_window_React_);

// EXTERNAL MODULE: ./node_modules/antd/es/modal/style/index.js
var modal_style = __webpack_require__("2qtc");

// EXTERNAL MODULE: ./node_modules/antd/es/modal/index.js + 7 modules
var modal = __webpack_require__("kLXV");

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("0Owb");

// EXTERNAL MODULE: ./src/Components/BusinessComponent/CustomModal/index.less?modules
var CustomModalmodules = __webpack_require__("mrYl");
var CustomModalmodules_default = /*#__PURE__*/__webpack_require__.n(CustomModalmodules);

// CONCATENATED MODULE: ./src/Components/BusinessComponent/CustomModal/CustomModal.tsx







const asyncConfirm = props => {
  const footerBtns = props.footerBtns,
        modalProps = props.modalProps,
        _props$type = props.type,
        type = _props$type === void 0 ? 'info' : _props$type;
  return new Promise(resolve => {
    const content = modalProps.content;
    const originContent = /*#__PURE__*/external_window_React_default.a.createElement("div", {
      className: CustomModalmodules_default.a.confirm_btns
    }, footerBtns.map(b => /*#__PURE__*/external_window_React_default.a.createElement(es_button["a" /* default */], Object(esm_extends["a" /* default */])({}, b.btnProps, {
      key: b.code,
      onClick: () => {
        modalRef.destroy();
        resolve(b.code);
      }
    }), b.btnChild)));
    const modalContent = !content ? originContent : /*#__PURE__*/external_window_React_default.a.createElement(external_window_React_default.a.Fragment, null, content, originContent);

    const modalRef = modal["a" /* default */][type]({ ...modalProps,
      className: CustomModalmodules_default.a.async_confirm,
      content: modalContent
    });
  });
};
const createModal = async ({
  onOk = (status, destoryFn) => destoryFn(),
  type = 'info',
  title = '\u786E\u5B9A\u5220\u9664\u561B',
  content = '',
  modalProps = {}
}) => {
  const confirmCode = await asyncConfirm({
    footerBtns: [{
      code: false,
      btnChild: '\u53D6\u6D88'
    }, {
      btnProps: {
        type: 'primary'
      },
      code: true,
      btnChild: '\u786E\u5B9A',
      onClick: onOk
    }],
    type,
    modalProps: {
      title,
      content,
      ...modalProps
    }
  });
};
// CONCATENATED MODULE: ./src/Components/BusinessComponent/CustomModal/index.tsx





const Base = () => {
  const handleClick = () => {
    createModal({
      onOk: (status, destoryFn) => {
        console.log(status, destoryFn);
      }
    });
  };

  return /*#__PURE__*/external_window_React_default.a.createElement(es_button["a" /* default */], {
    onClick: handleClick
  }, "\\u6A21\\u6001\\u6846");
};

/* harmony default export */ var CustomModal = __webpack_exports__["default"] = (Base);

//# sourceURL=webpack:///./src/Components/BusinessComponent/CustomModal/index.tsx_+_1_modules?`)},mrYl:function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin
module.exports = {"async_confirm":"async_confirm___33CH4","confirm_btns":"confirm_btns___3T-3w"};

//# sourceURL=webpack:///./src/Components/BusinessComponent/CustomModal/index.less?`)}}]);
