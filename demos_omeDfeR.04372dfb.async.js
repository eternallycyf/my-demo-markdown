(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{dCsF:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Father; });
/* harmony import */ var antd_es_card_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("IzEo");
/* harmony import */ var antd_es_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("bx4M");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);





const Children = props => {
  const ModalRef = props.ModalRef;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"])(ModalRef, () => ({
    getData: () => {
      return [1, 2, 3];
    }
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, "Children");
};

class Father extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(...args) {
    super(...args);
    this.ModalRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createRef();
    this.state = {};
  }

  componentDidMount() {
    console.log(this.ModalRef.current.getData());
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_es_card__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      style: {
        margin: 24
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Children, {
      ModalRef: this.ModalRef
    })));
  }

}

//# sourceURL=webpack:///./src/Components/React/RefDemo/ClassUseHookRef/index.tsx?`)},jdOd:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_card_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("IzEo");
/* harmony import */ var antd_es_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("bx4M");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);





const Child = (props, ModalRef) => {
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"])(ModalRef, () => ({
    getData: () => {
      return [1, 2, 3];
    }
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    ref: ModalRef
  }, "sss"));
};

const Children = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(Child);

const Father = () => {
  const ModalRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    console.log(ModalRef.current.getData());
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_es_card__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    style: {
      margin: 24
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Children, {
    ref: ModalRef
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Father);

//# sourceURL=webpack:///./src/Components/React/RefDemo/HookUseHookRef/index.tsx?`)}}]);
