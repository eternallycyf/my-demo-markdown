(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{"+QRC":function(module,exports,__webpack_require__){"use strict";eval(`

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

//# sourceURL=webpack:///./node_modules/antd/es/typography/style/index.less?`)},AOa7:function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin

//# sourceURL=webpack:///./node_modules/antd/es/breadcrumb/style/index.less?`)},E9nw:function(module,exports){eval(`
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


//# sourceURL=webpack:///./node_modules/toggle-selection/index.js?`)},Oeo2:function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin
module.exports = {"page":"page___1q0EU"};

//# sourceURL=webpack:///./src/Components/BusinessComponent/Tree/index.less?`)},gWnU:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/antd/es/button/style/index.js
var button_style = __webpack_require__("+L6B");

// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__("2/Rp");

// EXTERNAL MODULE: ./node_modules/antd/es/row/style/index.js
var row_style = __webpack_require__("14J3");

// EXTERNAL MODULE: ./node_modules/antd/es/row/index.js
var row = __webpack_require__("BMrR");

// EXTERNAL MODULE: ./node_modules/antd/es/col/style/index.js
var col_style = __webpack_require__("jCWc");

// EXTERNAL MODULE: ./node_modules/antd/es/col/index.js
var col = __webpack_require__("kPKH");

// EXTERNAL MODULE: ./node_modules/antd/es/select/style/index.js
var select_style = __webpack_require__("OaEy");

// EXTERNAL MODULE: ./node_modules/antd/es/select/index.js
var es_select = __webpack_require__("2fM7");

// EXTERNAL MODULE: ./node_modules/antd/es/form/style/index.js
var form_style = __webpack_require__("y8nQ");

// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 18 modules
var es_form = __webpack_require__("Vl3Y");

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("tJVT");

// EXTERNAL MODULE: external "window.React"
var external_window_React_ = __webpack_require__("cDcd");
var external_window_React_default = /*#__PURE__*/__webpack_require__.n(external_window_React_);

// EXTERNAL MODULE: ./node_modules/antd/es/modal/style/index.js
var modal_style = __webpack_require__("2qtc");

// EXTERNAL MODULE: ./node_modules/antd/es/modal/index.js + 7 modules
var modal = __webpack_require__("kLXV");

// EXTERNAL MODULE: ./node_modules/antd/es/tabs/style/index.js
var tabs_style = __webpack_require__("Znn+");

// EXTERNAL MODULE: ./node_modules/antd/es/tabs/index.js + 24 modules
var tabs = __webpack_require__("ZTPi");

// CONCATENATED MODULE: ./src/Components/BusinessComponent/Tree/components/constant.tsx
const LIST = 'list';
const PID = 'pid';
const ID = 'id';
const NAME = 'name';
const CHILDREN = 'children';
const TITLE_MAX_LENGTH = 10;
const BREADCRUMB_MAX_LENGTH = 4;
const columns = [{
  title: 'name',
  dataIndex: NAME
}];
const constant_dataSource = [{
  id: -1,
  pid: 0,
  name: '\u6DF1\u5733\u603B\u90E8',
  children: [{
    id: 1,
    pid: -1,
    name: '\u79D1\u6280\u90E8',
    children: [{
      id: 11,
      pid: 1,
      name: '\u79D1\u6280A\u90E8',
      children: []
    }, {
      id: 12,
      pid: 1,
      name: '\u79D1\u6280B\u90E8',
      children: [],
      list: [{
        id: 121,
        pid: 12,
        name: '\u5F20\u632F\u5B87',
        children: []
      }, {
        id: 122,
        pid: 12,
        name: '\u674E\u5CF0'
      }]
    }, {
      id: 13,
      pid: 1,
      name: '\u4EBA\u4E8B\u90E8',
      children: [],
      list: [{
        id: 131,
        pid: 13,
        name: '\u5F20'
      }, {
        id: 132,
        pid: 13,
        name: '\u674E'
      }]
    }]
  }, {
    id: 2,
    pid: -1,
    name: '\u5F00\u53D1\u90E8',
    children: [{
      id: 21,
      pid: 2,
      name: '\u5F00\u53D1A\u90E8',
      children: []
    }, {
      id: 22,
      pid: 2,
      name: '\u5F00\u53D1B\u90E8',
      children: [],
      list: [{
        id: 221,
        pid: 22,
        name: '\u9EC4\u7480\u74A8',
        children: []
      }, {
        id: 222,
        pid: 22,
        name: '\u5434\u4F69\u5B5A'
      }]
    }]
  }]
}];
// EXTERNAL MODULE: ./node_modules/antd/es/typography/style/index.js
var typography_style = __webpack_require__("tU7J");

// EXTERNAL MODULE: ./node_modules/antd/es/typography/index.js + 17 modules
var typography = __webpack_require__("wFql");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__("VTBJ");

// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/MinusCircleTwoTone.js
// This icon file is generated automatically.
var MinusCircleTwoTone_MinusCircleTwoTone = { "icon": function render(primaryColor, secondaryColor) { return { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z", "fill": primaryColor } }, { "tag": "path", "attrs": { "d": "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm192 396c0 4.4-3.6 8-8 8H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8v48z", "fill": secondaryColor } }, { "tag": "path", "attrs": { "d": "M696 480H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z", "fill": primaryColor } }] }; }, "name": "minus-circle", "theme": "twotone" };
/* harmony default export */ var asn_MinusCircleTwoTone = (MinusCircleTwoTone_MinusCircleTwoTone);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 3 modules
var AntdIcon = __webpack_require__("6VBw");

// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/MinusCircleTwoTone.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var icons_MinusCircleTwoTone_MinusCircleTwoTone = function MinusCircleTwoTone(props, ref) {
  return /*#__PURE__*/external_window_React_["createElement"](AntdIcon["a" /* default */], Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, props), {}, {
    ref: ref,
    icon: asn_MinusCircleTwoTone
  }));
};
icons_MinusCircleTwoTone_MinusCircleTwoTone.displayName = 'MinusCircleTwoTone';
/* harmony default export */ var icons_MinusCircleTwoTone = (/*#__PURE__*/external_window_React_["forwardRef"](icons_MinusCircleTwoTone_MinusCircleTwoTone));
// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/style/index.js
var tooltip_style = __webpack_require__("5Dmo");

// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/index.js + 3 modules
var tooltip = __webpack_require__("3S7+");

// EXTERNAL MODULE: ./node_modules/antd/es/style/default.less
var style_default = __webpack_require__("EFp3");

// EXTERNAL MODULE: ./node_modules/antd/es/breadcrumb/style/index.less
var breadcrumb_style = __webpack_require__("AOa7");

// EXTERNAL MODULE: ./node_modules/antd/es/dropdown/style/index.js
var dropdown_style = __webpack_require__("qVdP");

// EXTERNAL MODULE: ./node_modules/antd/es/menu/style/index.js
var menu_style = __webpack_require__("lUTK");

// CONCATENATED MODULE: ./node_modules/antd/es/breadcrumb/style/index.js


// style dependencies


// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("rePB");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__("KQm4");

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__("Zm9Q");

// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__("H84U");

// EXTERNAL MODULE: ./node_modules/antd/es/menu/index.js + 10 modules
var es_menu = __webpack_require__("BvKs");

// EXTERNAL MODULE: ./node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__("0n0R");

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/DownOutlined.js + 1 modules
var DownOutlined = __webpack_require__("8Skl");

// EXTERNAL MODULE: ./node_modules/antd/es/dropdown/dropdown.js + 1 modules
var dropdown = __webpack_require__("XBQK");

// CONCATENATED MODULE: ./node_modules/antd/es/breadcrumb/BreadcrumbItem.js

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





var BreadcrumbItem_BreadcrumbItem = function BreadcrumbItem(props) {
  var customizePrefixCls = props.prefixCls,
    _props$separator = props.separator,
    separator = _props$separator === void 0 ? '/' : _props$separator,
    children = props.children,
    menu = props.menu,
    overlay = props.overlay,
    dropdownProps = props.dropdownProps,
    restProps = __rest(props, ["prefixCls", "separator", "children", "menu", "overlay", "dropdownProps"]);
  var _React$useContext = external_window_React_["useContext"](context["b" /* ConfigContext */]),
    getPrefixCls = _React$useContext.getPrefixCls;
  var prefixCls = getPrefixCls('breadcrumb', customizePrefixCls);
  // Warning for deprecated usage
  if (false) {}
  /** If overlay is have Wrap a Dropdown */
  var renderBreadcrumbNode = function renderBreadcrumbNode(breadcrumbItem) {
    if (menu || overlay) {
      return /*#__PURE__*/external_window_React_["createElement"](dropdown["a" /* default */], Object(esm_extends["a" /* default */])({
        menu: menu,
        overlay: overlay,
        placement: "bottom"
      }, dropdownProps), /*#__PURE__*/external_window_React_["createElement"]("span", {
        className: "".concat(prefixCls, "-overlay-link")
      }, breadcrumbItem, /*#__PURE__*/external_window_React_["createElement"](DownOutlined["a" /* default */], null)));
    }
    return breadcrumbItem;
  };
  var link;
  if ('href' in restProps) {
    link = /*#__PURE__*/external_window_React_["createElement"]("a", Object(esm_extends["a" /* default */])({
      className: "".concat(prefixCls, "-link")
    }, restProps), children);
  } else {
    link = /*#__PURE__*/external_window_React_["createElement"]("span", Object(esm_extends["a" /* default */])({
      className: "".concat(prefixCls, "-link")
    }, restProps), children);
  }
  // wrap to dropDown
  link = renderBreadcrumbNode(link);
  if (children !== undefined && children !== null) {
    return /*#__PURE__*/external_window_React_["createElement"]("li", null, link, separator && /*#__PURE__*/external_window_React_["createElement"]("span", {
      className: "".concat(prefixCls, "-separator")
    }, separator));
  }
  return null;
};
BreadcrumbItem_BreadcrumbItem.__ANT_BREADCRUMB_ITEM = true;
/* harmony default export */ var breadcrumb_BreadcrumbItem = (BreadcrumbItem_BreadcrumbItem);
// CONCATENATED MODULE: ./node_modules/antd/es/breadcrumb/BreadcrumbSeparator.js


var BreadcrumbSeparator_BreadcrumbSeparator = function BreadcrumbSeparator(_ref) {
  var children = _ref.children;
  var _React$useContext = external_window_React_["useContext"](context["b" /* ConfigContext */]),
    getPrefixCls = _React$useContext.getPrefixCls;
  var prefixCls = getPrefixCls('breadcrumb');
  return /*#__PURE__*/external_window_React_["createElement"]("span", {
    className: "".concat(prefixCls, "-separator")
  }, children || '/');
};
BreadcrumbSeparator_BreadcrumbSeparator.__ANT_BREADCRUMB_SEPARATOR = true;
/* harmony default export */ var breadcrumb_BreadcrumbSeparator = (BreadcrumbSeparator_BreadcrumbSeparator);
// CONCATENATED MODULE: ./node_modules/antd/es/breadcrumb/Breadcrumb.js



var Breadcrumb_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};









function getBreadcrumbName(route, params) {
  if (!route.breadcrumbName) {
    return null;
  }
  var paramsKeys = Object.keys(params).join('|');
  var name = route.breadcrumbName.replace(new RegExp(":(".concat(paramsKeys, ")"), 'g'), function (replacement, key) {
    return params[key] || replacement;
  });
  return name;
}
function defaultItemRender(route, params, routes, paths) {
  var isLastItem = routes.indexOf(route) === routes.length - 1;
  var name = getBreadcrumbName(route, params);
  return isLastItem ? /*#__PURE__*/external_window_React_["createElement"]("span", null, name) : /*#__PURE__*/external_window_React_["createElement"]("a", {
    href: "#/".concat(paths.join('/'))
  }, name);
}
var getPath = function getPath(path, params) {
  path = (path || '').replace(/^\\//, '');
  Object.keys(params).forEach(function (key) {
    path = path.replace(":".concat(key), params[key]);
  });
  return path;
};
var Breadcrumb_addChildPath = function addChildPath(paths, childPath, params) {
  var originalPaths = Object(toConsumableArray["a" /* default */])(paths);
  var path = getPath(childPath || '', params);
  if (path) {
    originalPaths.push(path);
  }
  return originalPaths;
};
var Breadcrumb_Breadcrumb = function Breadcrumb(_a) {
  var customizePrefixCls = _a.prefixCls,
    _a$separator = _a.separator,
    separator = _a$separator === void 0 ? '/' : _a$separator,
    style = _a.style,
    className = _a.className,
    routes = _a.routes,
    children = _a.children,
    _a$itemRender = _a.itemRender,
    itemRender = _a$itemRender === void 0 ? defaultItemRender : _a$itemRender,
    _a$params = _a.params,
    params = _a$params === void 0 ? {} : _a$params,
    restProps = Breadcrumb_rest(_a, ["prefixCls", "separator", "style", "className", "routes", "children", "itemRender", "params"]);
  var _React$useContext = external_window_React_["useContext"](context["b" /* ConfigContext */]),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var crumbs;
  var prefixCls = getPrefixCls('breadcrumb', customizePrefixCls);
  if (routes && routes.length > 0) {
    // generated by route
    var paths = [];
    crumbs = routes.map(function (route) {
      var path = getPath(route.path, params);
      if (path) {
        paths.push(path);
      }
      // generated overlay by route.children
      var overlay;
      if (route.children && route.children.length) {
        overlay = /*#__PURE__*/external_window_React_["createElement"](es_menu["a" /* default */], {
          items: route.children.map(function (child) {
            return {
              key: child.path || child.breadcrumbName,
              label: itemRender(child, params, routes, Breadcrumb_addChildPath(paths, child.path, params))
            };
          })
        });
      }
      var itemProps = {
        separator: separator
      };
      if (overlay) {
        itemProps.overlay = overlay;
      }
      return /*#__PURE__*/external_window_React_["createElement"](breadcrumb_BreadcrumbItem, Object(esm_extends["a" /* default */])({}, itemProps, {
        key: path || route.breadcrumbName
      }), itemRender(route, params, routes, paths));
    });
  } else if (children) {
    crumbs = Object(toArray["a" /* default */])(children).map(function (element, index) {
      if (!element) {
        return element;
      }
       false ? undefined : void 0;
      return Object(reactNode["a" /* cloneElement */])(element, {
        separator: separator,
        key: index
      });
    });
  }
  var breadcrumbClassName = classnames_default()(prefixCls, Object(defineProperty["a" /* default */])({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'), className);
  return /*#__PURE__*/external_window_React_["createElement"]("nav", Object(esm_extends["a" /* default */])({
    className: breadcrumbClassName,
    style: style
  }, restProps), /*#__PURE__*/external_window_React_["createElement"]("ol", null, crumbs));
};
Breadcrumb_Breadcrumb.Item = breadcrumb_BreadcrumbItem;
Breadcrumb_Breadcrumb.Separator = breadcrumb_BreadcrumbSeparator;
/* harmony default export */ var breadcrumb_Breadcrumb = (Breadcrumb_Breadcrumb);
// CONCATENATED MODULE: ./node_modules/antd/es/breadcrumb/index.js

/* harmony default export */ var breadcrumb = (breadcrumb_Breadcrumb);
// CONCATENATED MODULE: ./src/Components/BusinessComponent/Tree/components/CustTooltip.tsx




const CustTooltip = props => {
  var _ref;

  const _props$text = props.text,
        text = _props$text === void 0 ? '' : _props$text,
        _props$maxLength = props.maxLength,
        maxLength = _props$maxLength === void 0 ? 35 : _props$maxLength,
        style = props.style,
        _props$isRow = props.isRow,
        isRow = _props$isRow === void 0 ? false : _props$isRow;
  if (isRow) return /*#__PURE__*/external_window_React_default.a.createElement("span", {
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

/* harmony default export */ var components_CustTooltip = (CustTooltip);
// CONCATENATED MODULE: ./src/Components/BusinessComponent/Tree/components/useVirtualList.tsx



/**
 * const entry = useVirtualList(ref, {})
 * const isVisible = !!entry?.isIntersecting
 * @param {ReactRef} elementRef \u4F20\u5165\u865A\u62DF\u5217\u8868\u7236\u76D2\u5B50\u7684 ref  \u5FC5\u586B\u9879
 * @param {object}
 * threshold         \u9600\u503C 0-1 1\u8868\u793A\u5B8C\u5168\u51FA\u73B0\u5728\u5C4F\u5E55\u53EF\u89C6\u533A\u57DF\u624D\u89E6\u53D1
 * root              \u8868\u793A\u6307\u5B9A\u6839\u5143\u7D20 \u9ED8\u8BA4\u4E3A\u6D4F\u89C8\u5668\u89C6\u53E3  \u7528\u4E8E\u68C0\u67E5\u76EE\u6807\u53EF\u89C1\u6027
 * rootMargin        root\u7684\u5916\u8FB9\u8DDD '0 0 0 0'
 * freezeOnceVisible \u662F\u5426\u7F13\u5B58 \u518D\u6B21\u6ED1\u52A8\u4E0D\u91CD\u65B0\u6E32\u67D3
 * @returns {Object} entry \u8FD9\u4E2A\u5BF9\u8C61\u5177\u6709\u5F53\u524D\u53EF\u89C6\u533A\u7684\u4FE1\u606F
 * \u4F8B\u5982 entry.isIntersecting \u662F\u5426\u5728\u53EF\u89C6\u533A\u8303\u56F4
 */
function useVirtualList(elementRef, {
  threshold = 0,
  root = null,
  rootMargin = '0%',
  freezeOnceVisible = true
}) {
  const _useState = Object(external_window_React_["useState"])(),
        _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
        entry = _useState2[0],
        setEntry = _useState2[1];

  const frozen = (entry === null || entry === void 0 ? void 0 : entry.isIntersecting) && freezeOnceVisible;

  const updateEntry = ([entry]) => {
    setEntry(entry);
  };

  Object(external_window_React_["useEffect"])(() => {
    const node = elementRef === null || elementRef === void 0 ? void 0 : elementRef.current;
    const hasIOSupport = !!window.IntersectionObserver;
    if (!hasIOSupport || frozen || !node) return;
    const observerParams = {
      threshold,
      root,
      rootMargin
    };
    const observer = new IntersectionObserver(updateEntry, observerParams);
    observer.observe(node);
    return () => observer.disconnect();
  }, [elementRef, JSON.stringify(threshold), root, rootMargin, frozen]);
  return entry;
}

/* harmony default export */ var components_useVirtualList = (useVirtualList);
// CONCATENATED MODULE: ./src/Components/BusinessComponent/Tree/components/utils.tsx








const utils_useVirtualList = components_useVirtualList;
const utils_CustTooltip = components_CustTooltip;
/**
 *
 * @param arr \u53BB\u91CD\u5E76\u4E14\u8FC7\u6EE4 undefined | null
 * @returns
 */

const removeDuplicate = arr => {
  let newArr = [...new Set([...arr])];
  return newArr.filter(item => item != undefined);
};
/**
 * \u83B7\u53D6\u6811\u5F62\u7ED3\u6784\u7684\u6240\u6709\u53F6\u5B50\u8282\u70B9
 * @param dataSource
 * @returns
 */

const getDataSourceAllLeaf = dataSource => {
  const transformFn = new utils_TreeHelpUtils({});
  let newDataSource = [];
  newDataSource = transformFn.removeEmptyChildren(dataSource);
  newDataSource = transformFn.filterTreeByFunc(dataSource, item => item[LIST]);
  newDataSource = transformFn.getAllLeaf(newDataSource);
  return newDataSource;
};
/**
 * \u751F\u6210\u9762\u5305\u5C51\u5BFC\u822A \u79FB\u9664\u9690\u85CF
 * @param arr
 * @param separator
 * @param maxLength
 * @param isReverse
 * @returns
 */

const handleRenderPath = (arr, separator = '|', maxLength = BREADCRUMB_MAX_LENGTH, isReverse = true) => {
  const INLINE_BLOCK = {
    display: 'inline'
  };
  let list = [];

  if (isReverse) {
    arr.reverse().pop();
  }

  list = arr;
  if (arr.length == 0) return null;

  const getBreadcrumb = arr => {
    return arr.map(item => {
      var _item$NAME;

      return /*#__PURE__*/external_window_React_default.a.createElement(breadcrumb.Item, {
        key: item[ID]
      }, (_item$NAME = item[NAME]) !== null && _item$NAME !== void 0 ? _item$NAME : '--');
    });
  };

  if (list.length < maxLength) {
    return /*#__PURE__*/external_window_React_default.a.createElement(breadcrumb, {
      separator: separator,
      style: INLINE_BLOCK
    }, getBreadcrumb(list));
  }

  const newPathList = list.slice(0, maxLength - 1);
  return /*#__PURE__*/external_window_React_default.a.createElement(tooltip["a" /* default */], {
    color: "#fff",
    title: /*#__PURE__*/external_window_React_default.a.createElement(breadcrumb, {
      style: INLINE_BLOCK,
      separator: separator
    }, getBreadcrumb(list), ' ')
  }, /*#__PURE__*/external_window_React_default.a.createElement(breadcrumb, {
    separator: separator,
    style: INLINE_BLOCK
  }, getBreadcrumb(newPathList)), "\\xA0", separator, "\\xA0...");
};
class utils_TreeHelpUtils {
  constructor({
    id: _id,
    pid: _pid,
    children: _children,
    name,
    list: _list
  }) {
    this.id = void 0;
    this.pid = void 0;
    this.children = void 0;
    this.name = void 0;
    this.list = void 0;

    this.flatten = arr => {
      return arr.reduce((result, item) => {
        return result.concat(Array.isArray(item) ? this.flatten(item) : item);
      }, []);
    };

    this.arrayToTree = (arr, pid) => {
      let res = [];
      arr.forEach(item => {
        if (item[this.pid] === pid) {
          let itemChildren = this.arrayToTree(arr, item[this.id]);

          if (itemChildren.length) {
            item[this.children] = itemChildren;
          }

          res.push(item);
        }
      });
      return res;
    };

    this.treeToDeepArray = tree => {
      let stack = tree,
          result = [];

      while (stack.length !== 0) {
        let pop = stack.pop();
        result.push({
          [this.id]: pop[this.id],
          [this.name]: pop[this.name],
          [this.pid]: pop[this.pid]
        });
        let children = pop[this.children];

        if (children) {
          for (let i = children.length - 1; i >= 0; i--) {
            stack.push(children[i]);
          }
        }
      }

      return result;
    };

    this.treeToWideArray = tree => {
      let queue = tree,
          result = [];

      while (queue.length !== 0) {
        let shift = queue.shift();
        result.push({
          [this.id]: shift[this.id],
          [this.name]: shift[this.name],
          [this.pid]: shift[this.pid]
        });
        let children = shift[this.children];

        if (children) {
          for (let i = 0; i < children.length; i++) {
            queue.push(children[i]);
          }
        }
      }

      return result;
    };

    this.treeToExcludeChildrenArray = source => {
      let res = [];
      source.forEach(item => {
        res.push(item);
        item[this.children] && res.push(...this.treeToExcludeChildrenArray(item[this.children]));
      });
      return res.map(item => {
        if (item[this.children]) {
          delete item[this.children];
        }

        return item;
      });
    };

    this.filterTreeByFunc = (tree, func) => {
      if (!Array.isArray(tree) || tree.length === 0) {
        return [];
      }

      return tree.filter(item => {
        item[this.children] = item[this.children] && this.filterTreeByFunc(item[this.children], func);
        return func(item) || (item === null || item === void 0 ? void 0 : item[this.children]) || [];
      });
    };

    this.getNodePath = (tree, id, nameKey = this.name, idKey = this.id) => {
      if (!Array.isArray(tree) || tree.length === 0) {
        return [];
      }

      const path = [];

      const treeFindPath = (tree, id, path) => {
        for (const item of tree) {
          path.push({
            [this.name]: item[nameKey],
            [this.id]: item[idKey]
          });

          if (item[this.id] === id) {
            return path;
          }

          if (item[this.children]) {
            const findChildren = treeFindPath(item[this.children], id, path);

            if (findChildren.length) {
              return findChildren;
            }
          }

          if (item[this.list]) {
            const findChildren = treeFindPath(item[this.list], id, path);

            if (findChildren.length) {
              return findChildren;
            }
          }

          path.pop();
        }

        return [];
      };

      return treeFindPath(tree, id, path);
    };

    this.fuzzyQueryTree = (arr, value, type = 'all') => {
      if (!Array.isArray(arr) || arr.length === 0) {
        return [];
      }

      let result = [];
      arr.forEach(item => {
        if (item[this.name].indexOf(value) > -1) {
          // const children = this.fuzzyQueryTree(item[this.children as string], value);
          // const obj = { ...item, [this.children as string]: children }
          // result.push(obj);
          result.push(item);
        } else {
          if (item[this.children] && item[this.children].length > 0) {
            const children = this.fuzzyQueryTree(item[this.children], value, type);
            const obj = { ...item,
              [this.children]: children
            };

            if (children && children.length > 0) {
              result.push(obj);
            }
          }

          if (type === 'all') {
            if (item[this.list] && item[this.list].length > 0) {
              const list = this.fuzzyQueryTree(item[this.list], value, type);
              const obj = { ...item,
                [this.list]: list
              };

              if (list && list.length > 0) {
                result.push(obj);
              }
            }
          }
        }
      });
      return result;
    };

    this.addAttrToNodes = (tree, key, value) => {
      tree.forEach(item => {
        item.key = value;

        if (item[this.children] && item[this.children].length > 0) {
          this.addAttrToNodes(item[this.children]);
        }
      });
      return tree;
    };

    this.removeAttrFromNode = (tree, deleteKey) => {
      tree.forEach(item => {
        delete item[deleteKey];

        if (item[this.children] && item[this.children].length > 0) {
          this.removeAttrFromNode(item[this.children], deleteKey);
        }
      });
      return tree;
    };

    this.removeEmptyChildren = tree => {
      tree.forEach(item => {
        if (item !== null && item !== void 0 && item[this.list]) {
          if (item[this.list][this.children] && item[this.list][this.children].length === 0 || item[this.list][this.children] == undefined) {
            item[this.list].forEach(item => delete item[this.children]);
          } else if (item[this.list][this.children] && item[this.list][this.children].length > 0) {
            this.removeEmptyChildren(item[this.list][this.children]);
          }
        }

        if (item[this.children] && item[this.children].length === 0 || item[this.children] == undefined) {
          delete item[this.children];
        } else if (item[this.children] && item[this.children].length > 0) {
          this.removeEmptyChildren(item[this.children]);
        }
      });
      return tree;
    };

    this.getAllLeaf = tree => {
      const that = this;
      const result = [];

      const getLeaf = tree => {
        tree.forEach(item => {
          if (!item[that.children]) {
            if (item[that.list]) {
              result.push(...item[that.list]);
            }
          } else {
            getLeaf(item[that.children]);
          }
        });
      };

      getLeaf(tree);
      return result;
    };

    this.id = _id || ID;
    this.pid = _pid || PID;
    this.children = _children || CHILDREN;
    this.name = name || NAME;
    this.list = _list || LIST;
  }
  /**
   * \u6253\u5E73
   * @param arr
   * @returns
   */


}
// CONCATENATED MODULE: ./src/Components/BusinessComponent/Tree/components/VirtualList.tsx





const VirtualList = props => {
  const ref = Object(external_window_React_["useRef"])(null);
  const entry = utils_useVirtualList(ref, {
    freezeOnceVisible: false
  });
  const isVisible = !!(entry !== null && entry !== void 0 && entry.isIntersecting);
  const rows = props.rows,
        children = props.children;
  return /*#__PURE__*/external_window_React_default.a.createElement(col["a" /* default */], {
    span: 24 / rows,
    ref: ref,
    style: {
      margin: '10px 0'
    }
  }, isVisible ? children : null);
};

/* harmony default export */ var components_VirtualList = (VirtualList);
// CONCATENATED MODULE: ./src/Components/BusinessComponent/Tree/components/CurrentList.tsx













const Link = typography["a" /* default */].Link,
      Text = typography["a" /* default */].Text;

const CurrentList = props => {
  var _data$length;

  const useDataSource = props.useDataSource,
        useSelectList = props.useSelectList,
        handleDeleteSelectList = props.handleDeleteSelectList,
        handleClearAll = props.handleClearAll,
        handleGetAllPathNode = props.handleGetAllPathNode;

  const _useDataSource = Object(slicedToArray["a" /* default */])(useDataSource, 2),
        dataSource = _useDataSource[0],
        setDataSource = _useDataSource[1];

  const _useSelectList = Object(slicedToArray["a" /* default */])(useSelectList, 2),
        selectList = _useSelectList[0],
        setSelectList = _useSelectList[1];

  const data = Object(external_window_React_["useMemo"])(() => {
    const leafData = getDataSourceAllLeaf(dataSource);
    return removeDuplicate(selectList.map(item => leafData.find(ele => ele[ID] === item)));
  }, [dataSource, selectList]);
  const pathList = handleGetAllPathNode(data);
  const newData = data === null || data === void 0 ? void 0 : data.map((item, index) => ({ ...item,
    path: pathList[index]
  }));
  return /*#__PURE__*/external_window_React_default.a.createElement(external_window_React_["Fragment"], null, /*#__PURE__*/external_window_React_default.a.createElement(row["default"], {
    style: {
      margin: '10px 0'
    }
  }, /*#__PURE__*/external_window_React_default.a.createElement(col["a" /* default */], {
    span: 2
  }, /*#__PURE__*/external_window_React_default.a.createElement(Text, null, "\\u5DF2\\u9009\\u4E2D", (_data$length = data === null || data === void 0 ? void 0 : data.length) !== null && _data$length !== void 0 ? _data$length : 0, "\\u6761")), /*#__PURE__*/external_window_React_default.a.createElement(col["a" /* default */], {
    span: 22,
    style: {
      textAlign: 'right'
    }
  }, ' ', /*#__PURE__*/external_window_React_default.a.createElement(Link, {
    onClick: () => handleClearAll()
  }, "\\u6E05\\u7A7A"))), /*#__PURE__*/external_window_React_default.a.createElement(row["default"], null, newData === null || newData === void 0 ? void 0 : newData.map(item => {
    return /*#__PURE__*/external_window_React_default.a.createElement(components_VirtualList, {
      key: item === null || item === void 0 ? void 0 : item[ID],
      rows: 3
    }, /*#__PURE__*/external_window_React_default.a.createElement(row["default"], {
      gutter: [12, 24]
    }, /*#__PURE__*/external_window_React_default.a.createElement(col["a" /* default */], {
      span: 1
    }, /*#__PURE__*/external_window_React_default.a.createElement(icons_MinusCircleTwoTone, {
      onClick: () => handleDeleteSelectList(item === null || item === void 0 ? void 0 : item[ID])
    })), /*#__PURE__*/external_window_React_default.a.createElement(col["a" /* default */], {
      span: 23
    }, handleRenderPath(item.path, '|', BREADCRUMB_MAX_LENGTH))));
  })));
};

/* harmony default export */ var components_CurrentList = (CurrentList);
// EXTERNAL MODULE: ./node_modules/antd/es/table/style/index.js + 2 modules
var table_style = __webpack_require__("g9YV");

// EXTERNAL MODULE: ./node_modules/antd/es/table/index.js + 75 modules
var table = __webpack_require__("wCAj");

// EXTERNAL MODULE: ./node_modules/antd/es/input/style/index.js
var input_style = __webpack_require__("5NDa");

// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 5 modules
var input = __webpack_require__("5rEg");

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CaretDownOutlined.js + 1 modules
var CaretDownOutlined = __webpack_require__("0NbB");

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CaretUpOutlined.js + 1 modules
var CaretUpOutlined = __webpack_require__("ek7X");

// EXTERNAL MODULE: ./node_modules/antd/es/checkbox/style/index.js
var checkbox_style = __webpack_require__("sRBo");

// EXTERNAL MODULE: ./node_modules/antd/es/checkbox/index.js + 2 modules
var es_checkbox = __webpack_require__("kaz8");

// CONCATENATED MODULE: ./src/Components/BusinessComponent/Tree/components/CustomCheckBox.tsx









const CustomCheckBox = props => {
  const data = props.data,
        rows = props.rows,
        selectList = props.selectList,
        handleCheckboxOnchange = props.handleCheckboxOnchange,
        handleGetAllPathNode = props.handleGetAllPathNode;
  const pathList = handleGetAllPathNode(data);
  const newData = data === null || data === void 0 ? void 0 : data.map((item, index) => ({ ...item,
    path: pathList[index]
  }));
  return /*#__PURE__*/external_window_React_default.a.createElement(es_checkbox["a" /* default */].Group, {
    style: {
      width: '100%'
    },
    value: selectList
  }, /*#__PURE__*/external_window_React_default.a.createElement(row["default"], {
    justify: "space-between",
    style: {
      width: '100%'
    }
  }, newData === null || newData === void 0 ? void 0 : newData.map(item => {
    return /*#__PURE__*/external_window_React_default.a.createElement(components_VirtualList, {
      key: item === null || item === void 0 ? void 0 : item[ID],
      rows: rows
    }, /*#__PURE__*/external_window_React_default.a.createElement(es_checkbox["a" /* default */], {
      value: item === null || item === void 0 ? void 0 : item[ID],
      onChange: () => handleCheckboxOnchange(item === null || item === void 0 ? void 0 : item[ID])
    }, handleRenderPath(item.path, '|', BREADCRUMB_MAX_LENGTH)));
  })));
};

/* harmony default export */ var components_CustomCheckBox = (CustomCheckBox);
// CONCATENATED MODULE: ./src/Components/BusinessComponent/Tree/components/Department.tsx


















const Search = input["a" /* default */].Search;

const Department = props => {
  var _dataSource$0$NAME, _dataSource$;

  const useDataSource = props.useDataSource,
        useSelectList = props.useSelectList,
        dataSourceAllLeaf = props.dataSourceAllLeaf,
        handleCheckboxOnchange = props.handleCheckboxOnchange,
        handleGetAllPathNode = props.handleGetAllPathNode;

  const _useState = Object(external_window_React_["useState"])(''),
        _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
        searchDepartmentValue = _useState2[0],
        setDepartmentSearchValue = _useState2[1];

  const _useState3 = Object(external_window_React_["useState"])(''),
        _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 2),
        searchPersonnelValue = _useState4[0],
        setSearchPersonnelValue = _useState4[1];

  const _useState5 = Object(external_window_React_["useState"])([]),
        _useState6 = Object(slicedToArray["a" /* default */])(_useState5, 2),
        searchAllLeafData = _useState6[0],
        setSearchAllLeafData = _useState6[1];

  const _useDataSource = Object(slicedToArray["a" /* default */])(useDataSource, 2),
        dataSource = _useDataSource[0],
        setDataSource = _useDataSource[1];

  const _useSelectList = Object(slicedToArray["a" /* default */])(useSelectList, 2),
        selectList = _useSelectList[0],
        setSelectList = _useSelectList[1];

  const _useState7 = Object(external_window_React_["useState"])([]),
        _useState8 = Object(slicedToArray["a" /* default */])(_useState7, 2),
        pathList = _useState8[0],
        setPathList = _useState8[1]; // \u641C\u7D22\u90E8\u95E8\u540E\u7B5B\u9009\u7684\u53F6\u5B50\u8282\u70B9\u7684\u6570\u636E


  const searchTreeData = Object(external_window_React_["useMemo"])(() => {
    if (!searchDepartmentValue.trim()) {
      setSearchAllLeafData([]);
      return dataSource;
    }

    const searchData = ChooseTree_transformFn.removeEmptyChildren(ChooseTree_transformFn.fuzzyQueryTree(dataSource, searchDepartmentValue, 'department'));
    return searchData;
  }, [searchDepartmentValue]); // \u6839\u636E\u641C\u7D22\u6761\u4EF6\u751F\u6210\u7684\u6700\u7EC8\u663E\u793A\u7684\u6811\u5F62\u6570\u636E

  const searchCurrentLeafData = Object(external_window_React_["useMemo"])(() => {
    if (searchAllLeafData.length == 0) return [];
    if (!searchPersonnelValue.trim()) return searchAllLeafData;
    const searchData = searchAllLeafData.filter(item => item[NAME].includes(searchPersonnelValue));
    return searchData;
  }, [searchPersonnelValue, searchAllLeafData]); // \u70B9\u51FB\u90E8\u95E8\u540E\u8BBE\u7F6E\u7B5B\u9009\u7684\u53F6\u5B50\u8282\u70B9\u7684\u6570\u636E

  const handleClickDepartment = record => {
    setSearchPersonnelValue('');
    if (record[PID] == 0) return setSearchAllLeafData(dataSourceAllLeaf);
    const searchData = ChooseTree_transformFn.removeEmptyChildren(ChooseTree_transformFn.fuzzyQueryTree(dataSource, record[NAME]));
    setSearchAllLeafData(getDataSourceAllLeaf(searchData));
    setPathList(ChooseTree_transformFn.getNodePath(dataSource, record[ID]));
  };

  return /*#__PURE__*/external_window_React_default.a.createElement(row["default"], null, /*#__PURE__*/external_window_React_default.a.createElement(col["a" /* default */], {
    span: 8,
    style: {
      height: '50vh',
      overflow: 'scroll'
    }
  }, /*#__PURE__*/external_window_React_default.a.createElement(Search, {
    placeholder: "\\u641C\\u7D22\\u90E8\\u95E8",
    value: searchDepartmentValue,
    onChange: e => setDepartmentSearchValue(e.target.value),
    onSearch: value => setDepartmentSearchValue(value),
    allowClear: true
  }), /*#__PURE__*/external_window_React_default.a.createElement(table["a" /* default */], {
    columns: columns,
    dataSource: [...searchTreeData],
    showHeader: false,
    pagination: false,
    rowKey: ID,
    expandable: {
      rowExpandable: record => record[CHILDREN] ? true : false,
      expandIcon: ({
        expanded,
        onExpand,
        record
      }) => {
        if (!record[CHILDREN] || record[CHILDREN].length === 0) return null;
        return expanded ? /*#__PURE__*/external_window_React_default.a.createElement(CaretDownOutlined["a" /* default */], {
          style: {
            marginRight: 10
          },
          onClick: e => {
            onExpand(record, e), e.stopPropagation();
          }
        }) : /*#__PURE__*/external_window_React_default.a.createElement(CaretUpOutlined["a" /* default */], {
          style: {
            marginRight: 10
          },
          onClick: e => {
            onExpand(record, e), e.stopPropagation();
          }
        });
      },
      defaultExpandedRowKeys: [-1]
    },
    onRow: record => {
      return {
        onClick: () => handleClickDepartment(record)
      };
    }
  })), /*#__PURE__*/external_window_React_default.a.createElement(col["a" /* default */], {
    span: 15,
    offset: 1
  }, /*#__PURE__*/external_window_React_default.a.createElement(row["default"], {
    style: {
      margin: '10px 10px'
    }
  }, /*#__PURE__*/external_window_React_default.a.createElement(col["a" /* default */], {
    span: 12
  }, /*#__PURE__*/external_window_React_default.a.createElement(breadcrumb, {
    separator: '>'
  }, pathList.length == 0 && /*#__PURE__*/external_window_React_default.a.createElement(breadcrumb.Item, null, ' ', (_dataSource$0$NAME = dataSource === null || dataSource === void 0 ? void 0 : (_dataSource$ = dataSource[0]) === null || _dataSource$ === void 0 ? void 0 : _dataSource$[NAME]) !== null && _dataSource$0$NAME !== void 0 ? _dataSource$0$NAME : '--')), handleRenderPath(pathList, '>', BREADCRUMB_MAX_LENGTH, false)), /*#__PURE__*/external_window_React_default.a.createElement(col["a" /* default */], {
    span: 12
  }, /*#__PURE__*/external_window_React_default.a.createElement(Search, {
    placeholder: "\\u641C\\u7D22\\u4EBA\\u5458",
    value: searchPersonnelValue,
    onChange: e => setSearchPersonnelValue(e.target.value),
    allowClear: true
  }))), /*#__PURE__*/external_window_React_default.a.createElement(components_CustomCheckBox, {
    rows: 2,
    data: searchCurrentLeafData,
    selectList: selectList,
    handleCheckboxOnchange: handleCheckboxOnchange,
    handleGetAllPathNode: handleGetAllPathNode
  })));
};

/* harmony default export */ var components_Department = (Department);
// CONCATENATED MODULE: ./src/Components/BusinessComponent/Tree/components/Personnel.tsx










const Personnel_Search = input["a" /* default */].Search;

const Personnel = props => {
  const useDataSource = props.useDataSource,
        useSelectList = props.useSelectList,
        dataSourceAllLeaf = props.dataSourceAllLeaf,
        handleCheckboxOnchange = props.handleCheckboxOnchange,
        handleGetAllPathNode = props.handleGetAllPathNode;

  const _useState = Object(external_window_React_["useState"])(''),
        _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
        searchValue = _useState2[0],
        setSearchValue = _useState2[1];

  const _useDataSource = Object(slicedToArray["a" /* default */])(useDataSource, 2),
        dataSource = _useDataSource[0],
        setDataSource = _useDataSource[1];

  const _useSelectList = Object(slicedToArray["a" /* default */])(useSelectList, 2),
        selectList = _useSelectList[0],
        setSelectList = _useSelectList[1]; // \u641C\u7D22\u540E\u7B5B\u9009\u7684\u6570\u636E


  const searchAllLeafData = Object(external_window_React_["useMemo"])(() => {
    const searchData = ChooseTree_transformFn.removeEmptyChildren(ChooseTree_transformFn.fuzzyQueryTree(dataSource, searchValue));
    return getDataSourceAllLeaf(searchData);
  }, [dataSourceAllLeaf, searchValue]);
  return /*#__PURE__*/external_window_React_default.a.createElement(row["default"], {
    gutter: 12,
    style: {
      margin: '5px 10px'
    }
  }, /*#__PURE__*/external_window_React_default.a.createElement(Personnel_Search, {
    placeholder: "\\u641C\\u7D22\\u4EBA\\u5458\\u3001\\u90E8\\u95E8",
    onSearch: searchValue => setSearchValue(searchValue),
    allowClear: true,
    style: {
      margin: '10px 0'
    }
  }), /*#__PURE__*/external_window_React_default.a.createElement(components_CustomCheckBox, {
    rows: 3,
    data: searchAllLeafData,
    handleCheckboxOnchange: handleCheckboxOnchange,
    selectList: selectList,
    handleGetAllPathNode: handleGetAllPathNode
  }));
};

/* harmony default export */ var components_Personnel = (Personnel);
// EXTERNAL MODULE: ./src/Components/BusinessComponent/Tree/index.less?modules
var Treemodules = __webpack_require__("Oeo2");
var Treemodules_default = /*#__PURE__*/__webpack_require__.n(Treemodules);

// CONCATENATED MODULE: ./src/Components/BusinessComponent/Tree/ChooseTree.tsx













const ChooseTree_transformFn = new utils_TreeHelpUtils({});
const IChooseTreeHandleAPI = props => /*#__PURE__*/external_window_React_default.a.createElement(external_window_React_default.a.Fragment, null);
const IChooseTreePropsAPI = props => /*#__PURE__*/external_window_React_default.a.createElement(external_window_React_default.a.Fragment, null);

const ChooseTree = (props, ref) => {
  const ModalRef = props.ModalRef,
        handleModalOk = props.handleModalOk;
  const container = Object(external_window_React_["useRef"])(null);

  const _useState = Object(external_window_React_["useState"])(false),
        _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
        visible = _useState2[0],
        setVisible = _useState2[1];

  const _useState3 = Object(external_window_React_["useState"])([]),
        _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 2),
        dataSource = _useState4[0],
        setDataSource = _useState4[1];

  const _useState5 = Object(external_window_React_["useState"])([]),
        _useState6 = Object(slicedToArray["a" /* default */])(_useState5, 2),
        selectList = _useState6[0],
        setSelectList = _useState6[1];

  const _useState7 = Object(external_window_React_["useState"])([]),
        _useState8 = Object(slicedToArray["a" /* default */])(_useState7, 2),
        cacheList = _useState8[0],
        setCacheList = _useState8[1]; // \u83B7\u53D6\u6240\u6709\u53F6\u5B50\u8282\u70B9


  const dataSourceAllLeaf = Object(external_window_React_["useMemo"])(() => {
    return getDataSourceAllLeaf(dataSource);
  }, [dataSource]);
  Object(external_window_React_["useImperativeHandle"])(ModalRef, () => ({
    useVisible: () => [visible, setVisible],
    useDataSource: () => [dataSource, setDataSource],
    useSelectData: () => [selectList, setSelectList],
    handleClearAll: () => handleClearAll(),
    handleGetAllPathNode: (arr, data) => arr.map(item => ChooseTree_transformFn.getNodePath(data, item[ID])),
    handleSetCacheList: list => setCacheList(list)
  })); // \u83B7\u53D6\u6240\u6709\u53F6\u5B50\u8282\u70B9\u7684\u8DEF\u5F84\u76F8\u5173\u5C5E\u6027

  const handleGetAllPathNode = arr => {
    return arr.map(item => ChooseTree_transformFn.getNodePath(dataSource, item[ID]));
  }; // \u8BBE\u7F6E\u9009\u4E2D\u7684\u6570\u636E


  const handleCheckboxOnchange = seleteKey => {
    if (selectList.find(item => item === seleteKey)) {
      return setSelectList(selectList.filter(item => item !== seleteKey));
    }

    const newArr = removeDuplicate([...selectList, seleteKey]);
    setSelectList([...newArr]);
  }; // \u5220\u9664\u9009\u4E2D\u7684\u6570\u636E


  const handleDeleteSelectList = deleteKey => {
    const arr = selectList.filter(item => item != deleteKey);
    setSelectList(arr);
  };

  const handleClearAll = () => setSelectList([]);

  const handleOk = () => {
    const data = handleGetAllPathNode(selectList.map(item => ({
      [ID]: item
    })));
    const selectFormLabelInValueList = selectList.map((item, index) => data[index].pop());
    setCacheList(selectList);
    handleModalOk && handleModalOk(selectFormLabelInValueList);
  };

  const items = [{
    label: '\u4EBA\u5458',
    key: 'item-1',
    children: /*#__PURE__*/external_window_React_default.a.createElement(components_Personnel, {
      useDataSource: [dataSource, setDataSource],
      useSelectList: [selectList, setSelectList],
      dataSourceAllLeaf: dataSourceAllLeaf,
      handleCheckboxOnchange: handleCheckboxOnchange,
      handleGetAllPathNode: handleGetAllPathNode
    })
  }, {
    label: '\u90E8\u95E8',
    key: 'item-2',
    children: /*#__PURE__*/external_window_React_default.a.createElement(components_Department, {
      useDataSource: [dataSource, setDataSource],
      useSelectList: [selectList, setSelectList],
      dataSourceAllLeaf: dataSourceAllLeaf,
      handleCheckboxOnchange: handleCheckboxOnchange,
      handleGetAllPathNode: handleGetAllPathNode
    })
  }];
  return /*#__PURE__*/external_window_React_default.a.createElement("div", {
    ref: ModalRef
  }, /*#__PURE__*/external_window_React_default.a.createElement("div", {
    className: Treemodules_default.a.page,
    ref: container
  }, /*#__PURE__*/external_window_React_default.a.createElement(modal["a" /* default */], {
    title: /*#__PURE__*/external_window_React_default.a.createElement(tabs["a" /* default */], {
      items: items,
      destroyInactiveTabPane: true
    }),
    open: visible,
    onOk: handleOk,
    onCancel: () => {
      setVisible(false), setSelectList(cacheList);
    },
    maskClosable: false,
    width: 1100,
    getContainer: () => container.current,
    destroyOnClose: true,
    forceRender: true
  }, /*#__PURE__*/external_window_React_default.a.createElement(components_CurrentList, {
    useDataSource: [dataSource, setDataSource],
    useSelectList: [selectList, setSelectList],
    handleDeleteSelectList: handleDeleteSelectList,
    handleClearAll: handleClearAll,
    handleGetAllPathNode: handleGetAllPathNode
  }))));
};

/* harmony default export */ var Tree_ChooseTree = (/*#__PURE__*/Object(external_window_React_["forwardRef"])(ChooseTree));
// CONCATENATED MODULE: ./src/Components/BusinessComponent/Tree/index.tsx















const EDIT_DATA = [{
  label: '\u5F20\u632F\u5B87',
  value: 121
}, {
  label: '\u674E\u5CF0',
  value: 122
}];

const App = () => {
  const _Form$useForm = es_form["a" /* default */].useForm(),
        _Form$useForm2 = Object(slicedToArray["a" /* default */])(_Form$useForm, 1),
        form = _Form$useForm2[0];

  const ModalRef = Object(external_window_React_["useRef"])(null);

  const selectvalue = es_form["a" /* default */].useWatch('selectForm', form);

  Object(external_window_React_["useEffect"])(() => {
    handlePageInit();
  }, []); // \u5904\u7406\u5F02\u6B65\u95EE\u9898

  Object(external_window_React_["useEffect"])(() => {
    const useSelectData = ModalRef.current.useSelectData;

    const _useSelectData = useSelectData(),
          _useSelectData2 = Object(slicedToArray["a" /* default */])(_useSelectData, 2),
          selectList = _useSelectData2[0],
          setSelectList = _useSelectData2[1];

    if (!selectvalue) return setSelectList([]);
    if (selectvalue.length == 0) return setSelectList([]);
    setSelectList(selectvalue.map(item => item.value));
  }, [selectvalue]);

  const handlePageInit = async () => {
    const _ModalRef$current = ModalRef.current,
          useSelectData = _ModalRef$current.useSelectData,
          useDataSource = _ModalRef$current.useDataSource,
          handleSetCacheList = _ModalRef$current.handleSetCacheList;

    const _useDataSource = useDataSource(),
          _useDataSource2 = Object(slicedToArray["a" /* default */])(_useDataSource, 2),
          dataSource = _useDataSource2[0],
          setDataSource = _useDataSource2[1];

    const _useSelectData3 = useSelectData(),
          _useSelectData4 = Object(slicedToArray["a" /* default */])(_useSelectData3, 2),
          selectList = _useSelectData4[0],
          setSelectList = _useSelectData4[1];

    form.setFieldsValue({
      selectForm: EDIT_DATA
    }); // todo \u6362\u6210\u7F51\u7EDC\u8BF7\u6C42

    setDataSource(constant_dataSource);
    setSelectList(EDIT_DATA.map(item => item.value));
    handleSetCacheList(EDIT_DATA.map(item => item.value));
  };

  const handleClearSelectForm = () => {
    const handleClearAll = ModalRef.current.handleClearAll;
    handleClearAll();
    form.setFieldsValue({
      selectForm: []
    });
  };

  const handleClearSingleSelectedForm = ({
    value
  }) => {
    const useSelectData = ModalRef.current.useSelectData;

    const _useSelectData5 = useSelectData(),
          _useSelectData6 = Object(slicedToArray["a" /* default */])(_useSelectData5, 2),
          selectList = _useSelectData6[0],
          setSelectList = _useSelectData6[1];

    setSelectList(selectList.filter(item => item !== value));
  };

  const handleOpenChoosePersonModal = () => {
    const useVisible = ModalRef.current.useVisible;

    const _useVisible = useVisible(),
          _useVisible2 = Object(slicedToArray["a" /* default */])(_useVisible, 2),
          visible = _useVisible2[0],
          setVisible = _useVisible2[1];

    setVisible(true);
  };

  const handleModalComfirm = arr => {
    const useVisible = ModalRef.current.useVisible;

    const _useVisible3 = useVisible(),
          _useVisible4 = Object(slicedToArray["a" /* default */])(_useVisible3, 2),
          visible = _useVisible4[0],
          setVisible = _useVisible4[1];

    const newArr = arr.map(item => ({
      label: item.name,
      value: item.id
    }));
    form.setFieldsValue({
      selectForm: newArr
    });
    console.log(newArr);
    setVisible(false);
  };

  const onFinish = values => {
    console.log(values);
  };

  return /*#__PURE__*/external_window_React_default.a.createElement(es_form["a" /* default */], {
    form: form,
    onFinish: onFinish
  }, /*#__PURE__*/external_window_React_default.a.createElement(row["default"], null, /*#__PURE__*/external_window_React_default.a.createElement(col["a" /* default */], {
    span: 10
  }, /*#__PURE__*/external_window_React_default.a.createElement(es_form["a" /* default */].Item, {
    name: "selectForm",
    label: "\\u9009\\u62E9\\u4EBA\\u5458"
  }, /*#__PURE__*/external_window_React_default.a.createElement(es_select["a" /* default */], {
    mode: "multiple",
    placeholder: "\\u8BF7\\u9009\\u62E9\\u4EBA\\u5458",
    labelInValue: true,
    maxTagCount: 'responsive',
    options: [],
    open: false,
    showSearch: false,
    allowClear: true,
    onClick: () => handleOpenChoosePersonModal(),
    onClear: () => handleClearSelectForm(),
    onDeselect: val => handleClearSingleSelectedForm(val)
  }))), /*#__PURE__*/external_window_React_default.a.createElement(col["a" /* default */], {
    span: 21
  })), /*#__PURE__*/external_window_React_default.a.createElement(es_button["a" /* default */], {
    type: "primary",
    htmlType: "submit"
  }, "Submit"), /*#__PURE__*/external_window_React_default.a.createElement(Tree_ChooseTree, {
    ModalRef: ModalRef,
    handleModalOk: handleModalComfirm
  }));
};

/* harmony default export */ var Tree = __webpack_exports__["default"] = (App);

//# sourceURL=webpack:///./src/Components/BusinessComponent/Tree/index.tsx_+_17_modules?`)},tU7J:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony import */ var _style_default_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("EFp3");
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
  var ref = external_window_React_["useRef"](null);
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
var useUpdatedEffect_useUpdatedEffect = function useUpdatedEffect(callback, conditions) {
  var mountRef = external_window_React_["useRef"](false);
  external_window_React_["useEffect"](function () {
    if (mountRef.current) {
      callback();
    } else {
      mountRef.current = true;
    }
  }, conditions);
};
/* harmony default export */ var hooks_useUpdatedEffect = (useUpdatedEffect_useUpdatedEffect);
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





var Typography = /*#__PURE__*/external_window_React_["forwardRef"](function (_a, ref) {
  var customizePrefixCls = _a.prefixCls,
    _a$component = _a.component,
    Component = _a$component === void 0 ? 'article' : _a$component,
    className = _a.className,
    setContentRef = _a.setContentRef,
    children = _a.children,
    typographyDirection = _a.direction,
    restProps = __rest(_a, ["prefixCls", "component", "className", "setContentRef", "children", "direction"]);
  var _React$useContext = external_window_React_["useContext"](context["b" /* ConfigContext */]),
    getPrefixCls = _React$useContext.getPrefixCls,
    contextDirection = _React$useContext.direction;
  var direction = typographyDirection !== null && typographyDirection !== void 0 ? typographyDirection : contextDirection;
  var mergedRef = ref;
  if (setContentRef) {
     false ? undefined : void 0;
    mergedRef = Object(es_ref["a" /* composeRef */])(ref, setContentRef);
  }
  var prefixCls = getPrefixCls('typography', customizePrefixCls);
  var componentClassName = classnames_default()(prefixCls, Object(defineProperty["a" /* default */])({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'), className);
  return (
    /*#__PURE__*/
    // @ts-expect-error: Expression produces a union type that is too complex to represent.
    external_window_React_["createElement"](Component, Object(esm_extends["a" /* default */])({
      className: componentClassName,
      ref: mergedRef
    }, restProps), children)
  );
});
if (false) {}
// es default export should use const instead of let
/* harmony default export */ var typography_Typography = (Typography);
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
    _React$useState2$ = Object(slicedToArray["a" /* default */])(_React$useState2[0], 3),
    startLen = _React$useState2$[0],
    midLen = _React$useState2$[1],
    endLen = _React$useState2$[2],
    setCutLength = _React$useState2[1];
  var _React$useState3 = external_window_React_["useState"](NONE),
    _React$useState4 = Object(slicedToArray["a" /* default */])(_React$useState3, 2),
    walkingState = _React$useState4[0],
    setWalkingState = _React$useState4[1];
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
  var _a, _b, _c;
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
  hooks_useUpdatedEffect(function () {
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
    window.clearTimeout(copyIdRef.current);
  };
  var onCopyClick = function onCopyClick(e) {
    var _a;
    e === null || e === void 0 ? void 0 : e.preventDefault();
    e === null || e === void 0 ? void 0 : e.stopPropagation();
    copy_to_clipboard_default()(copyConfig.text || String(children) || '', copyOptions);
    setCopied(true);
    // Trigger tips update
    cleanCopyId();
    copyIdRef.current = window.setTimeout(function () {
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
      title: (_a = editConfig.text) !== null && _a !== void 0 ? _a : children
    };
  } else if ( /*#__PURE__*/external_window_React_["isValidElement"](ellipsisConfig.tooltip)) {
    tooltipProps = {
      title: ellipsisConfig.tooltip
    };
  } else if (Object(esm_typeof["a" /* default */])(ellipsisConfig.tooltip) === 'object') {
    tooltipProps = Object(esm_extends["a" /* default */])({
      title: (_b = editConfig.text) !== null && _b !== void 0 ? _b : children
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
    if (isValid(editConfig.text)) {
      return editConfig.text;
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
      value: (_c = editConfig.text) !== null && _c !== void 0 ? _c : typeof children === 'string' ? children : '',
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
      prefixCls: customizePrefixCls,
      style: Object(esm_extends["a" /* default */])(Object(esm_extends["a" /* default */])({}, style), {
        WebkitLineClamp: cssLineClamp ? rows : undefined
      }),
      component: component,
      ref: Object(es_ref["a" /* composeRef */])(resizeRef, typographyRef, ref),
      direction: direction,
      onClick: triggerType.includes('text') ? onEditClick : undefined,
      "aria-label": topAriaLabel === null || topAriaLabel === void 0 ? void 0 : topAriaLabel.toString(),
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



var Link = /*#__PURE__*/external_window_React_["forwardRef"](function (_a, ref) {
  var ellipsis = _a.ellipsis,
    rel = _a.rel,
    restProps = Link_rest(_a, ["ellipsis", "rel"]);
   false ? undefined : void 0;
  var mergedProps = Object(esm_extends["a" /* default */])(Object(esm_extends["a" /* default */])({}, restProps), {
    rel: rel === undefined && restProps.target === '_blank' ? 'noopener noreferrer' : rel
  });
  // @ts-expect-error: https://github.com/ant-design/ant-design/issues/26622
  delete mergedProps.navigate;
  return /*#__PURE__*/external_window_React_["createElement"](typography_Base, Object(esm_extends["a" /* default */])({}, mergedProps, {
    ref: ref,
    ellipsis: !!ellipsis,
    component: "a"
  }));
});
/* harmony default export */ var typography_Link = (Link);
// CONCATENATED MODULE: ./node_modules/antd/es/typography/Paragraph.js



var Paragraph = /*#__PURE__*/external_window_React_["forwardRef"](function (props, ref) {
  return /*#__PURE__*/external_window_React_["createElement"](typography_Base, Object(esm_extends["a" /* default */])({
    ref: ref
  }, props, {
    component: "div"
  }));
});
/* harmony default export */ var typography_Paragraph = (Paragraph);
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
var Title = /*#__PURE__*/external_window_React_["forwardRef"](function (props, ref) {
  var _props$level = props.level,
    level = _props$level === void 0 ? 1 : _props$level,
    restProps = Title_rest(props, ["level"]);
  var component;
  if (TITLE_ELE_LIST.includes(level)) {
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
});
/* harmony default export */ var typography_Title = (Title);
// CONCATENATED MODULE: ./node_modules/antd/es/typography/index.js





var es_typography_Typography = typography_Typography;
es_typography_Typography.Text = typography_Text;
es_typography_Typography.Link = typography_Link;
es_typography_Typography.Title = typography_Title;
es_typography_Typography.Paragraph = typography_Paragraph;
/* harmony default export */ var typography = __webpack_exports__["a"] = (es_typography_Typography);

//# sourceURL=webpack:///./node_modules/antd/es/typography/index.js_+_17_modules?`)}}]);
