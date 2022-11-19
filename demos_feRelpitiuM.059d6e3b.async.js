(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{zL9H:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_card_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("IzEo");
/* harmony import */ var antd_es_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("bx4M");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



/* eslint-disable react/jsx-key */



const MuitipleRef = () => {
  const list = [...Array(8).keys()];
  const inputRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])([]);

  const handler = idx => {
    const next = inputRef.current[idx + 1];

    if (next) {
      next.focus();
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_es_card__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    style: {
      margin: 24
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "App"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "input_boxes"
  }, list.map(x => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    key: x,
    ref: el => inputRef.current[x] = el,
    onChange: handler(x),
    type: "number",
    className: "otp_box"
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (MuitipleRef);

//# sourceURL=webpack:///./src/Components/React/MuitipleRef/index.tsx?`)}}]);
