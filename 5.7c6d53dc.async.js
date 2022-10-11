(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0Owb":function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

//# sourceURL=webpack:///./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/extends.js?`)},DGhM:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/antd/es/style/default.less
var style_default = __webpack_require__("EFp3");

// EXTERNAL MODULE: ./node_modules/antd/es/alert/style/index.less
var alert_style = __webpack_require__("YkAm");

// CONCATENATED MODULE: ./node_modules/antd/es/alert/style/index.js


// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__("ODXe");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("rePB");

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js + 1 modules
var CheckCircleFilled = __webpack_require__("jO45");

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CheckCircleOutlined.js + 1 modules
var CheckCircleOutlined = __webpack_require__("Ue1A");

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js + 1 modules
var CloseCircleFilled = __webpack_require__("jN4g");

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloseCircleOutlined.js + 1 modules
var CloseCircleOutlined = __webpack_require__("2BaD");

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloseOutlined.js + 1 modules
var CloseOutlined = __webpack_require__("4i/N");

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/ExclamationCircleFilled.js + 1 modules
var ExclamationCircleFilled = __webpack_require__("IMoZ");

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/ExclamationCircleOutlined.js + 1 modules
var ExclamationCircleOutlined = __webpack_require__("RCxd");

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/InfoCircleFilled.js + 1 modules
var InfoCircleFilled = __webpack_require__("zueq");

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/InfoCircleOutlined.js + 1 modules
var InfoCircleOutlined = __webpack_require__("+YFz");

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/rc-motion/es/index.js + 11 modules
var es = __webpack_require__("8XRh");

// EXTERNAL MODULE: external "window.React"
var external_window_React_ = __webpack_require__("cDcd");
var external_window_React_default = /*#__PURE__*/__webpack_require__.n(external_window_React_);

// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__("H84U");

// EXTERNAL MODULE: ./node_modules/antd/es/_util/getDataOrAriaProps.js
var getDataOrAriaProps = __webpack_require__("RqAY");

// EXTERNAL MODULE: ./node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__("0n0R");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("1OyB");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__("vuIU");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__("Ji7U");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 3 modules
var createSuper = __webpack_require__("LK+K");

// CONCATENATED MODULE: ./node_modules/antd/es/alert/ErrorBoundary.js







var ErrorBoundary_ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  Object(inherits["a" /* default */])(ErrorBoundary, _React$Component);

  var _super = Object(createSuper["a" /* default */])(ErrorBoundary);

  function ErrorBoundary() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, ErrorBoundary);

    _this = _super.apply(this, arguments);
    _this.state = {
      error: undefined,
      info: {
        componentStack: ''
      }
    };
    return _this;
  }

  Object(createClass["a" /* default */])(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      this.setState({
        error: error,
        info: info
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          message = _this$props.message,
          description = _this$props.description,
          children = _this$props.children;
      var _this$state = this.state,
          error = _this$state.error,
          info = _this$state.info;
      var componentStack = info && info.componentStack ? info.componentStack : null;
      var errorMessage = typeof message === 'undefined' ? (error || '').toString() : message;
      var errorDescription = typeof description === 'undefined' ? componentStack : description;

      if (error) {
        return /*#__PURE__*/external_window_React_["createElement"](es_alert, {
          type: "error",
          message: errorMessage,
          description: /*#__PURE__*/external_window_React_["createElement"]("pre", null, errorDescription)
        });
      }

      return children;
    }
  }]);

  return ErrorBoundary;
}(external_window_React_["Component"]);


// CONCATENATED MODULE: ./node_modules/antd/es/alert/index.js




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

















var iconMapFilled = {
  success: CheckCircleFilled["a" /* default */],
  info: InfoCircleFilled["a" /* default */],
  error: CloseCircleFilled["a" /* default */],
  warning: ExclamationCircleFilled["a" /* default */]
};
var iconMapOutlined = {
  success: CheckCircleOutlined["a" /* default */],
  info: InfoCircleOutlined["a" /* default */],
  error: CloseCircleOutlined["a" /* default */],
  warning: ExclamationCircleOutlined["a" /* default */]
};

var alert_IconNode = function IconNode(props) {
  var description = props.description,
      icon = props.icon,
      prefixCls = props.prefixCls,
      type = props.type;
  var iconType = (description ? iconMapOutlined : iconMapFilled)[type] || null;

  if (icon) {
    return Object(reactNode["d" /* replaceElement */])(icon, /*#__PURE__*/external_window_React_["createElement"]("span", {
      className: "".concat(prefixCls, "-icon")
    }, icon), function () {
      return {
        className: classnames_default()("".concat(prefixCls, "-icon"), Object(defineProperty["a" /* default */])({}, icon.props.className, icon.props.className))
      };
    });
  }

  return /*#__PURE__*/external_window_React_["createElement"](iconType, {
    className: "".concat(prefixCls, "-icon")
  });
};

var alert_CloseIcon = function CloseIcon(props) {
  var isClosable = props.isClosable,
      closeText = props.closeText,
      prefixCls = props.prefixCls,
      closeIcon = props.closeIcon,
      handleClose = props.handleClose;
  return isClosable ? /*#__PURE__*/external_window_React_["createElement"]("button", {
    type: "button",
    onClick: handleClose,
    className: "".concat(prefixCls, "-close-icon"),
    tabIndex: 0
  }, closeText ? /*#__PURE__*/external_window_React_["createElement"]("span", {
    className: "".concat(prefixCls, "-close-text")
  }, closeText) : closeIcon) : null;
};

var alert_Alert = function Alert(_a) {
  var _classNames2;

  var description = _a.description,
      customizePrefixCls = _a.prefixCls,
      message = _a.message,
      banner = _a.banner,
      _a$className = _a.className,
      className = _a$className === void 0 ? '' : _a$className,
      style = _a.style,
      onMouseEnter = _a.onMouseEnter,
      onMouseLeave = _a.onMouseLeave,
      onClick = _a.onClick,
      afterClose = _a.afterClose,
      showIcon = _a.showIcon,
      closable = _a.closable,
      closeText = _a.closeText,
      _a$closeIcon = _a.closeIcon,
      closeIcon = _a$closeIcon === void 0 ? /*#__PURE__*/external_window_React_["createElement"](CloseOutlined["a" /* default */], null) : _a$closeIcon,
      action = _a.action,
      props = __rest(_a, ["description", "prefixCls", "message", "banner", "className", "style", "onMouseEnter", "onMouseLeave", "onClick", "afterClose", "showIcon", "closable", "closeText", "closeIcon", "action"]);

  var _React$useState = external_window_React_["useState"](false),
      _React$useState2 = Object(slicedToArray["a" /* default */])(_React$useState, 2),
      closed = _React$useState2[0],
      setClosed = _React$useState2[1];

  var ref = external_window_React_["useRef"]();

  var _React$useContext = external_window_React_["useContext"](context["b" /* ConfigContext */]),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var prefixCls = getPrefixCls('alert', customizePrefixCls);

  var handleClose = function handleClose(e) {
    var _a;

    setClosed(true);
    (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props, e);
  };

  var getType = function getType() {
    var type = props.type;

    if (type !== undefined) {
      return type;
    } // banner \u6A21\u5F0F\u9ED8\u8BA4\u4E3A\u8B66\u544A


    return banner ? 'warning' : 'info';
  }; // closeable when closeText is assigned


  var isClosable = closeText ? true : closable;
  var type = getType(); // banner \u6A21\u5F0F\u9ED8\u8BA4\u6709 Icon

  var isShowIcon = banner && showIcon === undefined ? true : showIcon;
  var alertCls = classnames_default()(prefixCls, "".concat(prefixCls, "-").concat(type), (_classNames2 = {}, Object(defineProperty["a" /* default */])(_classNames2, "".concat(prefixCls, "-with-description"), !!description), Object(defineProperty["a" /* default */])(_classNames2, "".concat(prefixCls, "-no-icon"), !isShowIcon), Object(defineProperty["a" /* default */])(_classNames2, "".concat(prefixCls, "-banner"), !!banner), Object(defineProperty["a" /* default */])(_classNames2, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames2), className);
  var dataOrAriaProps = Object(getDataOrAriaProps["a" /* default */])(props);
  return /*#__PURE__*/external_window_React_["createElement"](es["b" /* default */], {
    visible: !closed,
    motionName: "".concat(prefixCls, "-motion"),
    motionAppear: false,
    motionEnter: false,
    onLeaveStart: function onLeaveStart(node) {
      return {
        maxHeight: node.offsetHeight
      };
    },
    onLeaveEnd: afterClose
  }, function (_ref) {
    var motionClassName = _ref.className,
        motionStyle = _ref.style;
    return /*#__PURE__*/external_window_React_["createElement"]("div", Object(esm_extends["a" /* default */])({
      ref: ref,
      "data-show": !closed,
      className: classnames_default()(alertCls, motionClassName),
      style: Object(esm_extends["a" /* default */])(Object(esm_extends["a" /* default */])({}, style), motionStyle),
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      onClick: onClick,
      role: "alert"
    }, dataOrAriaProps), isShowIcon ? /*#__PURE__*/external_window_React_["createElement"](alert_IconNode, {
      description: description,
      icon: props.icon,
      prefixCls: prefixCls,
      type: type
    }) : null, /*#__PURE__*/external_window_React_["createElement"]("div", {
      className: "".concat(prefixCls, "-content")
    }, message ? /*#__PURE__*/external_window_React_["createElement"]("div", {
      className: "".concat(prefixCls, "-message")
    }, message) : null, description ? /*#__PURE__*/external_window_React_["createElement"]("div", {
      className: "".concat(prefixCls, "-description")
    }, description) : null), action ? /*#__PURE__*/external_window_React_["createElement"]("div", {
      className: "".concat(prefixCls, "-action")
    }, action) : null, /*#__PURE__*/external_window_React_["createElement"](alert_CloseIcon, {
      isClosable: !!isClosable,
      closeText: closeText,
      prefixCls: prefixCls,
      closeIcon: closeIcon,
      handleClose: handleClose
    }));
  });
};

alert_Alert.ErrorBoundary = ErrorBoundary_ErrorBoundary;
/* harmony default export */ var es_alert = (alert_Alert);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/extends.js
var helpers_esm_extends = __webpack_require__("0Owb");

// CONCATENATED MODULE: ./src/MyComponents/Alert/index.tsx





const AlertComponent = props => {
  return /*#__PURE__*/external_window_React_default.a.createElement(es_alert, Object(helpers_esm_extends["a" /* default */])({
    showIcon: true
  }, props));
};

/* harmony default export */ var MyComponents_Alert = __webpack_exports__["default"] = (AlertComponent);

//# sourceURL=webpack:///./src/MyComponents/Alert/index.tsx_+_3_modules?`)},YkAm:function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin

//# sourceURL=webpack:///./node_modules/antd/es/alert/style/index.less?`)}}]);
