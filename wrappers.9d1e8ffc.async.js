(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{"0Owb":function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
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

//# sourceURL=webpack:///./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/extends.js?`)},"3Bus":function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin

//# sourceURL=webpack:///./node_modules/@umijs/preset-dumi/node_modules/dumi-theme-default/es/components/SideMenu.less?`)},"3PQu":function(module,exports,__webpack_require__){eval(`var _typeof = __webpack_require__("z01/")["default"];

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache(nodeInterop);

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard, module.exports.__esModule = true, module.exports["default"] = module.exports;

//# sourceURL=webpack:///./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireWildcard.js?`)},"5zXw":function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "window.React"
var external_window_React_ = __webpack_require__("cDcd");
var external_window_React_default = /*#__PURE__*/__webpack_require__.n(external_window_React_);

// EXTERNAL MODULE: ./node_modules/@umijs/preset-dumi/lib/theme/index.js
var theme = __webpack_require__("dEAq");

// EXTERNAL MODULE: ./src/.umi-production/core/umiExports.ts
var umiExports = __webpack_require__("9kvl");

// EXTERNAL MODULE: ./node_modules/@umijs/preset-dumi/node_modules/dumi-theme-default/es/components/LocaleSelect.less
var components_LocaleSelect = __webpack_require__("ptyZ");

// CONCATENATED MODULE: ./node_modules/@umijs/preset-dumi/node_modules/dumi-theme-default/es/components/LocaleSelect.js
 // @ts-ignore





var LocaleSelect_LocaleSelect = function LocaleSelect(_ref) {
  var location = _ref.location;

  var _useContext = Object(external_window_React_["useContext"])(theme["context"]),
      base = _useContext.base,
      locale = _useContext.locale,
      locales = _useContext.config.locales;

  var firstDiffLocale = locales.find(function (_ref2) {
    var name = _ref2.name;
    return name !== locale;
  });

  function getLocaleTogglePath(target) {
    var baseWithoutLocale = base.replace("/".concat(locale), '');
    var pathnameWithoutLocale = location.pathname.replace(new RegExp("^".concat(base, "(/|$)")), "".concat(baseWithoutLocale, "$1")) || '/'; // append locale prefix to path if it is not the default locale

    if (target !== locales[0].name) {
      // compatiable with integrate route prefix /~docs
      var routePrefix = "".concat(baseWithoutLocale, "/").concat(target).replace(/\\/\\//, '/');
      var pathnameWithoutBase = location.pathname.replace( // to avoid stripped the first /
      base.replace(/^\\/$/, '//'), '');
      return "".concat(routePrefix).concat(pathnameWithoutBase).replace(/\\/$/, '');
    }

    return pathnameWithoutLocale;
  }

  return firstDiffLocale ? /*#__PURE__*/external_window_React_default.a.createElement("div", {
    className: "__dumi-default-locale-select",
    "data-locale-count": locales.length
  }, locales.length > 2 ? /*#__PURE__*/external_window_React_default.a.createElement("select", {
    value: locale,
    onChange: function onChange(ev) {
      return umiExports["a" /* history */].push(getLocaleTogglePath(ev.target.value));
    }
  }, locales.map(function (localeItem) {
    return /*#__PURE__*/external_window_React_default.a.createElement("option", {
      value: localeItem.name,
      key: localeItem.name
    }, localeItem.label);
  })) : /*#__PURE__*/external_window_React_default.a.createElement(theme["Link"], {
    to: getLocaleTogglePath(firstDiffLocale.name)
  }, firstDiffLocale.label)) : null;
};

/* harmony default export */ var es_components_LocaleSelect = (LocaleSelect_LocaleSelect);
// EXTERNAL MODULE: ./node_modules/@umijs/preset-dumi/node_modules/dumi-theme-default/es/components/Navbar.less
var components_Navbar = __webpack_require__("7wuY");

// CONCATENATED MODULE: ./node_modules/@umijs/preset-dumi/node_modules/dumi-theme-default/es/components/Navbar.js





var Navbar_Navbar = function Navbar(_ref) {
  var onMobileMenuClick = _ref.onMobileMenuClick,
      navPrefix = _ref.navPrefix,
      location = _ref.location,
      darkPrefix = _ref.darkPrefix;

  var _useContext = Object(external_window_React_["useContext"])(theme["context"]),
      base = _useContext.base,
      _useContext$config = _useContext.config,
      mode = _useContext$config.mode,
      title = _useContext$config.title,
      logo = _useContext$config.logo,
      navItems = _useContext.nav;

  return /*#__PURE__*/external_window_React_default.a.createElement("div", {
    className: "__dumi-default-navbar",
    "data-mode": mode
  }, /*#__PURE__*/external_window_React_default.a.createElement("button", {
    className: "__dumi-default-navbar-toggle",
    onClick: onMobileMenuClick
  }), /*#__PURE__*/external_window_React_default.a.createElement(theme["Link"], {
    className: "__dumi-default-navbar-logo",
    style: {
      backgroundImage: logo && "url('".concat(logo, "')")
    },
    to: base,
    "data-plaintext": logo === false || undefined
  }, title), /*#__PURE__*/external_window_React_default.a.createElement("nav", null, navPrefix, navItems.map(function (nav) {
    var _nav$children;

    var child = Boolean((_nav$children = nav.children) === null || _nav$children === void 0 ? void 0 : _nav$children.length) && /*#__PURE__*/external_window_React_default.a.createElement("ul", null, nav.children.map(function (item) {
      return /*#__PURE__*/external_window_React_default.a.createElement("li", {
        key: item.path
      }, /*#__PURE__*/external_window_React_default.a.createElement(theme["NavLink"], {
        to: item.path
      }, item.title));
    }));
    return /*#__PURE__*/external_window_React_default.a.createElement("span", {
      key: nav.title || nav.path
    }, nav.path ? /*#__PURE__*/external_window_React_default.a.createElement(theme["NavLink"], {
      to: nav.path,
      key: nav.path
    }, nav.title) : nav.title, child);
  }), /*#__PURE__*/external_window_React_default.a.createElement("div", {
    className: "__dumi-default-navbar-tool"
  }, /*#__PURE__*/external_window_React_default.a.createElement(es_components_LocaleSelect, {
    location: location
  }), darkPrefix)));
};

/* harmony default export */ var es_components_Navbar = (Navbar_Navbar);
// EXTERNAL MODULE: ./node_modules/@umijs/preset-dumi/node_modules/dumi-theme-default/es/components/SlugList.less
var SlugList = __webpack_require__("JYF0");

// CONCATENATED MODULE: ./node_modules/@umijs/preset-dumi/node_modules/dumi-theme-default/es/components/SlugList.js
var _excluded = ["slugs"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var SlugList_SlugsList = function SlugsList(_ref) {
  var slugs = _ref.slugs,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/external_window_React_default.a.createElement("ul", _extends({
    role: "slug-list"
  }, props), slugs.filter(function (_ref2) {
    var depth = _ref2.depth;
    return depth > 1 && depth < 4;
  }).map(function (slug) {
    return /*#__PURE__*/external_window_React_default.a.createElement("li", {
      key: slug.heading,
      title: slug.value,
      "data-depth": slug.depth
    }, /*#__PURE__*/external_window_React_default.a.createElement(theme["AnchorLink"], {
      to: "#".concat(slug.heading)
    }, /*#__PURE__*/external_window_React_default.a.createElement("span", null, slug.value)));
  }));
};

/* harmony default export */ var components_SlugList = (SlugList_SlugsList);
// EXTERNAL MODULE: ./node_modules/@umijs/preset-dumi/node_modules/dumi-theme-default/es/components/SideMenu.less
var components_SideMenu = __webpack_require__("3Bus");

// CONCATENATED MODULE: ./node_modules/@umijs/preset-dumi/node_modules/dumi-theme-default/es/components/SideMenu.js






var SideMenu_SideMenu = function SideMenu(_ref) {
  var mobileMenuCollapsed = _ref.mobileMenuCollapsed,
      location = _ref.location,
      darkPrefix = _ref.darkPrefix;

  var _useContext = Object(external_window_React_["useContext"])(theme["context"]),
      _useContext$config = _useContext.config,
      logo = _useContext$config.logo,
      title = _useContext$config.title,
      description = _useContext$config.description,
      mode = _useContext$config.mode,
      repoUrl = _useContext$config.repository.url,
      menu = _useContext.menu,
      navItems = _useContext.nav,
      base = _useContext.base,
      meta = _useContext.meta;

  var isHiddenMenus = Boolean((meta.hero || meta.features || meta.gapless) && mode === 'site') || meta.sidemenu === false || undefined;
  return /*#__PURE__*/external_window_React_default.a.createElement("div", {
    className: "__dumi-default-menu",
    "data-mode": mode,
    "data-hidden": isHiddenMenus,
    "data-mobile-show": !mobileMenuCollapsed || undefined
  }, /*#__PURE__*/external_window_React_default.a.createElement("div", {
    className: "__dumi-default-menu-inner"
  }, /*#__PURE__*/external_window_React_default.a.createElement("div", {
    className: "__dumi-default-menu-header"
  }, /*#__PURE__*/external_window_React_default.a.createElement(theme["Link"], {
    to: base,
    className: "__dumi-default-menu-logo",
    style: {
      backgroundImage: logo && "url('".concat(logo, "')")
    }
  }), /*#__PURE__*/external_window_React_default.a.createElement("h1", null, title), /*#__PURE__*/external_window_React_default.a.createElement("p", null, description), /github\\.com/.test(repoUrl) && mode === 'doc' && /*#__PURE__*/external_window_React_default.a.createElement("p", null, /*#__PURE__*/external_window_React_default.a.createElement("object", {
    type: "image/svg+xml",
    data: "https://img.shields.io/github/stars".concat(repoUrl.match(/((\\/[^\\/]+){2})$/)[1], "?style=social")
  }))), /*#__PURE__*/external_window_React_default.a.createElement("div", {
    className: "__dumi-default-menu-mobile-area"
  }, !!navItems.length && /*#__PURE__*/external_window_React_default.a.createElement("ul", {
    className: "__dumi-default-menu-nav-list"
  }, navItems.map(function (nav) {
    var _nav$children;

    var child = Boolean((_nav$children = nav.children) === null || _nav$children === void 0 ? void 0 : _nav$children.length) && /*#__PURE__*/external_window_React_default.a.createElement("ul", null, nav.children.map(function (item) {
      return /*#__PURE__*/external_window_React_default.a.createElement("li", {
        key: item.path || item.title
      }, /*#__PURE__*/external_window_React_default.a.createElement(theme["NavLink"], {
        to: item.path
      }, item.title));
    }));
    return /*#__PURE__*/external_window_React_default.a.createElement("li", {
      key: nav.path || nav.title
    }, nav.path ? /*#__PURE__*/external_window_React_default.a.createElement(theme["NavLink"], {
      to: nav.path
    }, nav.title) : nav.title, child);
  })), /*#__PURE__*/external_window_React_default.a.createElement(es_components_LocaleSelect, {
    location: location
  }), darkPrefix), /*#__PURE__*/external_window_React_default.a.createElement("ul", {
    className: "__dumi-default-menu-list"
  }, !isHiddenMenus && menu.map(function (item) {
    var _meta$slugs;

    // always use meta from routes to reduce menu data size
    var hasSlugs = Boolean((_meta$slugs = meta.slugs) === null || _meta$slugs === void 0 ? void 0 : _meta$slugs.length);
    var hasChildren = item.children && Boolean(item.children.length);
    var show1LevelSlugs = meta.toc === 'menu' && !hasChildren && hasSlugs && item.path === location.pathname.replace(/([^^])\\/$/, '$1');
    var menuPaths = hasChildren ? item.children.map(function (i) {
      return i.path;
    }) : [item.path, // handle menu group which has no index route and no valid children
    location.pathname.startsWith("".concat(item.path, "/")) && meta.title === item.title ? location.pathname : null];
    return /*#__PURE__*/external_window_React_default.a.createElement("li", {
      key: item.path || item.title
    }, /*#__PURE__*/external_window_React_default.a.createElement(theme["NavLink"], {
      to: item.path,
      isActive: function isActive() {
        return menuPaths.includes(location.pathname);
      }
    }, item.title), Boolean(item.children && item.children.length) && /*#__PURE__*/external_window_React_default.a.createElement("ul", null, item.children.map(function (child) {
      return /*#__PURE__*/external_window_React_default.a.createElement("li", {
        key: child.path
      }, /*#__PURE__*/external_window_React_default.a.createElement(theme["NavLink"], {
        to: child.path,
        exact: true
      }, /*#__PURE__*/external_window_React_default.a.createElement("span", null, child.title)), Boolean(meta.toc === 'menu' && typeof window !== 'undefined' && child.path === location.pathname && hasSlugs) && /*#__PURE__*/external_window_React_default.a.createElement(components_SlugList, {
        slugs: meta.slugs
      }));
    })), show1LevelSlugs && /*#__PURE__*/external_window_React_default.a.createElement(components_SlugList, {
      slugs: meta.slugs
    }));
  }))));
};

/* harmony default export */ var es_components_SideMenu = (SideMenu_SideMenu);
// EXTERNAL MODULE: ./node_modules/@umijs/preset-dumi/node_modules/dumi-theme-default/es/components/SearchBar.less
var SearchBar = __webpack_require__("9IxB");

// CONCATENATED MODULE: ./node_modules/@umijs/preset-dumi/node_modules/dumi-theme-default/es/components/SearchBar.js
function SearchBar_extends() { SearchBar_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return SearchBar_extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var SearchBar_highlight = function highlight(key, title) {
  var index = title.toLowerCase().indexOf(key.toLowerCase());
  var l = key.length;
  return /*#__PURE__*/external_window_React_default.a.createElement(external_window_React_default.a.Fragment, null, title.substring(0, index), /*#__PURE__*/external_window_React_default.a.createElement("span", {
    className: "__dumi-default-search-highlight"
  }, title.substring(index, index + l)), title.substring(index + l, title.length));
};
/* harmony default export */ var components_SearchBar = (function () {
  var _useState = Object(external_window_React_["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      keywords = _useState2[0],
      setKeywords = _useState2[1];

  var _useState3 = Object(external_window_React_["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      items = _useState4[0],
      setItems = _useState4[1];

  var input = Object(external_window_React_["useRef"])();
  var result = Object(theme["useSearch"])(keywords);
  var emptySvg = /*#__PURE__*/external_window_React_default.a.createElement("svg", {
    className: "__dumi-default-search-empty",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "2347",
    width: "32",
    height: "32"
  }, /*#__PURE__*/external_window_React_default.a.createElement("path", {
    d: "M855.6 427.2H168.5c-12.7 0-24.4 6.9-30.6 18L4.4 684.7C1.5 689.9 0 695.8 0 701.8v287.1c0 19.4 15.7 35.1 35.1 35.1H989c19.4 0 35.1-15.7 35.1-35.1V701.8c0-6-1.5-11.8-4.4-17.1L886.2 445.2c-6.2-11.1-17.9-18-30.6-18zM673.4 695.6c-16.5 0-30.8 11.5-34.3 27.7-12.7 58.5-64.8 102.3-127.2 102.3s-114.5-43.8-127.2-102.3c-3.5-16.1-17.8-27.7-34.3-27.7H119c-26.4 0-43.3-28-31.1-51.4l81.7-155.8c6.1-11.6 18-18.8 31.1-18.8h622.4c13 0 25 7.2 31.1 18.8l81.7 155.8c12.2 23.4-4.7 51.4-31.1 51.4H673.4zM819.9 209.5c-1-1.8-2.1-3.7-3.2-5.5-9.8-16.6-31.1-22.2-47.8-12.6L648.5 261c-17 9.8-22.7 31.6-12.6 48.4 0.9 1.4 1.7 2.9 2.5 4.4 9.5 17 31.2 22.8 48 13L807 257.3c16.7-9.7 22.4-31 12.9-47.8zM375.4 261.1L255 191.6c-16.7-9.6-38-4-47.8 12.6-1.1 1.8-2.1 3.6-3.2 5.5-9.5 16.8-3.8 38.1 12.9 47.8L337.3 327c16.9 9.7 38.6 4 48-13.1 0.8-1.5 1.7-2.9 2.5-4.4 10.2-16.8 4.5-38.6-12.4-48.4zM512 239.3h2.5c19.5 0.3 35.5-15.5 35.5-35.1v-139c0-19.3-15.6-34.9-34.8-35.1h-6.4C489.6 30.3 474 46 474 65.2v139c0 19.5 15.9 35.4 35.5 35.1h2.5z"
  }));
  Object(external_window_React_["useEffect"])(function () {
    if (Array.isArray(result)) {
      setItems(result);
    } else if (typeof result === 'function') {
      result(".".concat(input.current.className));
    }
  }, [result]);
  return /*#__PURE__*/external_window_React_default.a.createElement("div", {
    className: "__dumi-default-search"
  }, /*#__PURE__*/external_window_React_default.a.createElement("input", SearchBar_extends({
    className: "__dumi-default-search-input",
    type: "search",
    ref: input
  }, Array.isArray(result) ? {
    value: keywords,
    onChange: function onChange(ev) {
      return setKeywords(ev.target.value);
    }
  } : {})), /*#__PURE__*/external_window_React_default.a.createElement("ul", null, items.length > 0 && items.map(function (meta) {
    var _meta$parent;

    return /*#__PURE__*/external_window_React_default.a.createElement("li", {
      key: meta.path,
      onClick: function onClick() {
        return setKeywords('');
      }
    }, /*#__PURE__*/external_window_React_default.a.createElement(theme["AnchorLink"], {
      to: meta.path
    }, ((_meta$parent = meta.parent) === null || _meta$parent === void 0 ? void 0 : _meta$parent.title) && /*#__PURE__*/external_window_React_default.a.createElement("span", null, meta.parent.title), SearchBar_highlight(keywords, meta.title)));
  }), items.length === 0 && keywords && /*#__PURE__*/external_window_React_default.a.createElement("li", {
    style: {
      textAlign: 'center'
    }
  }, emptySvg)));
});
// EXTERNAL MODULE: ./node_modules/@umijs/preset-dumi/node_modules/dumi-theme-default/es/components/Dark.less
var components_Dark = __webpack_require__("kUT7");

// CONCATENATED MODULE: ./node_modules/@umijs/preset-dumi/node_modules/dumi-theme-default/es/components/Dark.js
function Dark_slicedToArray(arr, i) { return Dark_arrayWithHoles(arr) || Dark_iterableToArrayLimit(arr, i) || Dark_unsupportedIterableToArray(arr, i) || Dark_nonIterableRest(); }

function Dark_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Dark_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Dark_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Dark_arrayLikeToArray(o, minLen); }

function Dark_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Dark_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Dark_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




;

var Dark_Dark = function Dark(_ref) {
  var darkSwitch = _ref.darkSwitch,
      onDarkSwitchClick = _ref.onDarkSwitchClick,
      isSideMenu = _ref.isSideMenu;
  var allState = ['dark', 'light', 'auto'];

  var _usePrefersColor = Object(theme["usePrefersColor"])(),
      _usePrefersColor2 = Dark_slicedToArray(_usePrefersColor, 2),
      color = _usePrefersColor2[0],
      setColor = _usePrefersColor2[1];

  var prefersColor = color;
  var sunSvg = /*#__PURE__*/external_window_React_default.a.createElement("svg", {
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "4026",
    width: "22",
    height: "22"
  }, /*#__PURE__*/external_window_React_default.a.createElement("path", {
    d: "M915.2 476.16h-43.968c-24.704 0-44.736 16-44.736 35.84s20.032 35.904 44.736 35.904H915.2c24.768 0 44.8-16.064 44.8-35.904s-20.032-35.84-44.8-35.84zM512 265.6c-136.704 0-246.464 109.824-246.464 246.4 0 136.704 109.76 246.464 246.464 246.464S758.4 648.704 758.4 512c0-136.576-109.696-246.4-246.4-246.4z m0 425.6c-99.008 0-179.2-80.128-179.2-179.2 0-98.944 80.192-179.2 179.2-179.2S691.2 413.056 691.2 512c0 99.072-80.192 179.2-179.2 179.2zM197.44 512c0-19.84-19.136-35.84-43.904-35.84H108.8c-24.768 0-44.8 16-44.8 35.84s20.032 35.904 44.8 35.904h44.736c24.768 0 43.904-16.064 43.904-35.904zM512 198.464c19.776 0 35.84-20.032 35.84-44.8v-44.8C547.84 84.032 531.84 64 512 64s-35.904 20.032-35.904 44.8v44.8c0 24.768 16.128 44.864 35.904 44.864z m0 627.136c-19.776 0-35.904 20.032-35.904 44.8v44.736C476.096 940.032 492.16 960 512 960s35.84-20.032 35.84-44.8v-44.736c0-24.768-16.064-44.864-35.84-44.864z m329.92-592.832c17.472-17.536 20.288-43.072 6.4-57.024-14.016-14.016-39.488-11.2-57.024 6.336-4.736 4.864-26.496 26.496-31.36 31.36-17.472 17.472-20.288 43.008-6.336 57.024 13.952 14.016 39.488 11.2 57.024-6.336 4.8-4.864 26.496-26.56 31.296-31.36zM213.376 759.936c-4.864 4.8-26.56 26.624-31.36 31.36-17.472 17.472-20.288 42.944-6.4 56.96 14.016 13.952 39.552 11.2 57.024-6.336 4.8-4.736 26.56-26.496 31.36-31.36 17.472-17.472 20.288-43.008 6.336-56.96-14.016-13.952-39.552-11.072-56.96 6.336z m19.328-577.92c-17.536-17.536-43.008-20.352-57.024-6.336-14.08 14.016-11.136 39.488 6.336 57.024 4.864 4.864 26.496 26.56 31.36 31.424 17.536 17.408 43.008 20.288 56.96 6.336 14.016-14.016 11.264-39.488-6.336-57.024-4.736-4.864-26.496-26.56-31.296-31.424z m527.168 628.608c4.864 4.864 26.624 26.624 31.36 31.424 17.536 17.408 43.072 20.224 57.088 6.336 13.952-14.016 11.072-39.552-6.4-57.024-4.864-4.8-26.56-26.496-31.36-31.36-17.472-17.408-43.072-20.288-57.024-6.336-13.952 14.016-11.008 39.488 6.336 56.96z",
    "p-id": "4027"
  }));
  var moonSvg = /*#__PURE__*/external_window_React_default.a.createElement("svg", {
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "3854",
    width: "22",
    height: "22"
  }, /*#__PURE__*/external_window_React_default.a.createElement("path", {
    d: "M991.816611 674.909091a69.166545 69.166545 0 0 0-51.665455-23.272727 70.795636 70.795636 0 0 0-27.438545 5.585454A415.674182 415.674182 0 0 1 754.993338 698.181818c-209.594182 0-393.472-184.785455-393.472-395.636363 0-52.363636 38.539636-119.621818 69.515637-173.614546 4.887273-8.610909 9.634909-16.756364 14.103272-24.901818A69.818182 69.818182 0 0 0 384.631156 0a70.842182 70.842182 0 0 0-27.438545 5.585455C161.678429 90.298182 14.362065 307.898182 14.362065 512c0 282.298182 238.824727 512 532.38691 512a522.286545 522.286545 0 0 0 453.957818-268.334545A69.818182 69.818182 0 0 0 991.816611 674.909091zM546.679156 954.181818c-248.785455 0-462.941091-192-462.941091-442.181818 0-186.647273 140.637091-372.829091 300.939637-442.181818-36.817455 65.629091-92.578909 151.970909-92.578909 232.727273 0 250.181818 214.109091 465.454545 462.917818 465.454545a488.331636 488.331636 0 0 0 185.181091-46.545455 453.003636 453.003636 0 0 1-393.565091 232.727273z m103.656728-669.323636l-14.266182 83.781818a34.909091 34.909091 0 0 0 50.362182 36.770909l74.775272-39.563636 74.752 39.563636a36.142545 36.142545 0 0 0 16.174546 3.956364 34.909091 34.909091 0 0 0 34.210909-40.727273l-14.289455-83.781818 60.509091-59.345455a35.025455 35.025455 0 0 0-19.223272-59.578182l-83.61891-12.101818-37.376-76.101818a34.56 34.56 0 0 0-62.254545 0l-37.376 76.101818-83.618909 12.101818a34.909091 34.909091 0 0 0-19.246546 59.578182z m70.423272-64.698182a34.280727 34.280727 0 0 0 26.135273-19.083636l14.312727-29.090909 14.336 29.090909a34.257455 34.257455 0 0 0 26.135273 19.083636l32.046546 4.887273-23.272728 22.574545a35.234909 35.234909 0 0 0-10.007272 30.952727l5.46909 32.116364-28.625454-15.127273a34.490182 34.490182 0 0 0-32.302546 0l-28.695272 15.127273 5.469091-32.116364a35.141818 35.141818 0 0 0-9.984-30.952727l-23.272728-22.574545z",
    "p-id": "3855"
  }));
  var autoSvg = /*#__PURE__*/external_window_React_default.a.createElement("svg", {
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "11002",
    width: "22",
    height: "22"
  }, /*#__PURE__*/external_window_React_default.a.createElement("path", {
    d: "M127.658667 492.885333c0-51.882667 10.24-101.717333 30.378666-149.162666s47.786667-88.064 81.92-122.538667 75.093333-61.781333 122.538667-81.92 96.938667-30.378667 149.162667-30.378667 101.717333 10.24 149.162666 30.378667 88.405333 47.786667 122.88 81.92 61.781333 75.093333 81.92 122.538667 30.378667 96.938667 30.378667 149.162666-10.24 101.717333-30.378667 149.162667-47.786667 88.405333-81.92 122.88-75.093333 61.781333-122.88 81.92-97.28 30.378667-149.162666 30.378667-101.717333-10.24-149.162667-30.378667-88.064-47.786667-122.538667-81.92-61.781333-75.093333-81.92-122.88-30.378667-96.938667-30.378666-149.162667z m329.045333 0c0 130.048 13.994667 244.394667 41.984 343.381334h12.970667c46.762667 0 91.136-9.216 133.461333-27.306667s78.848-42.666667 109.568-73.386667 54.954667-67.242667 73.386667-109.568 27.306667-86.698667 27.306666-133.461333c0-46.421333-9.216-90.794667-27.306666-133.12s-42.666667-78.848-73.386667-109.568-67.242667-54.954667-109.568-73.386667-86.698667-27.306667-133.461333-27.306666h-11.605334c-28.672 123.562667-43.349333 237.909333-43.349333 343.722666z",
    "p-id": "11003"
  }));
  var list = allState.filter(function (state) {
    return state !== prefersColor;
  });

  var changeColor = function changeColor(ev, toColor) {
    if (!isSideMenu && onDarkSwitchClick) {
      onDarkSwitchClick(ev);
    }

    if (toColor === prefersColor) return;
    setColor(toColor);
  };

  var getSvg = function getSvg(baseColor) {
    switch (baseColor) {
      case 'dark':
        return /*#__PURE__*/external_window_React_default.a.createElement("button", {
          key: "dumi-dark-btn-moon",
          title: "Dark theme",
          onClick: function onClick(ev) {
            return changeColor(ev, baseColor);
          },
          className: "__dumi-default-dark-moon ".concat(baseColor === prefersColor ? '__dumi-default-dark-switch-active' : '')
        }, moonSvg);

      case 'light':
        return /*#__PURE__*/external_window_React_default.a.createElement("button", {
          key: "dumi-dark-btn-sun",
          title: "Light theme",
          onClick: function onClick(ev) {
            return changeColor(ev, baseColor);
          },
          className: "__dumi-default-dark-sun ".concat(baseColor === prefersColor ? '__dumi-default-dark-switch-active' : '')
        }, sunSvg);

      case 'auto':
        return /*#__PURE__*/external_window_React_default.a.createElement("button", {
          key: "dumi-dark-btn-auto",
          title: "Default to system",
          onClick: function onClick(ev) {
            return changeColor(ev, baseColor);
          },
          className: "__dumi-default-dark-auto ".concat(baseColor === prefersColor ? '__dumi-default-dark-switch-active' : '')
        }, autoSvg);

      default:
    }
  };

  return /*#__PURE__*/external_window_React_default.a.createElement("div", {
    className: "__dumi-default-dark"
  }, /*#__PURE__*/external_window_React_default.a.createElement("div", {
    className: "__dumi-default-dark-switch ".concat(!isSideMenu && darkSwitch ? "__dumi-default-dark-switch-open" : "")
  }, isSideMenu ? allState.map(function (item) {
    return getSvg(item);
  }) : getSvg(prefersColor)), !isSideMenu && darkSwitch && /*#__PURE__*/external_window_React_default.a.createElement("div", {
    className: "__dumi-default-dark-switch-list"
  }, list.map(function (item) {
    return getSvg(item);
  })));
};

/* harmony default export */ var es_components_Dark = (Dark_Dark);
// EXTERNAL MODULE: ./node_modules/@umijs/preset-dumi/node_modules/dumi-theme-default/es/style/layout.less
var layout = __webpack_require__("NR2k");

// CONCATENATED MODULE: ./node_modules/@umijs/preset-dumi/node_modules/dumi-theme-default/es/layout.js
function layout_slicedToArray(arr, i) { return layout_arrayWithHoles(arr) || layout_iterableToArrayLimit(arr, i) || layout_unsupportedIterableToArray(arr, i) || layout_nonIterableRest(); }

function layout_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function layout_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return layout_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return layout_arrayLikeToArray(o, minLen); }

function layout_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function layout_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function layout_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var layout_Hero = function Hero(hero) {
  return /*#__PURE__*/external_window_React_default.a.createElement(external_window_React_default.a.Fragment, null, /*#__PURE__*/external_window_React_default.a.createElement("div", {
    className: "__dumi-default-layout-hero"
  }, hero.image && /*#__PURE__*/external_window_React_default.a.createElement("img", {
    src: hero.image
  }), /*#__PURE__*/external_window_React_default.a.createElement("h1", null, hero.title), /*#__PURE__*/external_window_React_default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: hero.desc
    }
  }), hero.actions && hero.actions.map(function (action) {
    return /*#__PURE__*/external_window_React_default.a.createElement(theme["Link"], {
      to: action.link,
      key: action.text
    }, /*#__PURE__*/external_window_React_default.a.createElement("button", {
      type: "button"
    }, action.text));
  })));
};

var layout_Features = function Features(features) {
  return /*#__PURE__*/external_window_React_default.a.createElement("div", {
    className: "__dumi-default-layout-features"
  }, features.map(function (feat) {
    return /*#__PURE__*/external_window_React_default.a.createElement("dl", {
      key: feat.title,
      style: {
        backgroundImage: feat.icon ? "url(".concat(feat.icon, ")") : undefined
      }
    }, feat.link ? /*#__PURE__*/external_window_React_default.a.createElement(theme["Link"], {
      to: feat.link
    }, /*#__PURE__*/external_window_React_default.a.createElement("dt", null, feat.title)) : /*#__PURE__*/external_window_React_default.a.createElement("dt", null, feat.title), /*#__PURE__*/external_window_React_default.a.createElement("dd", {
      dangerouslySetInnerHTML: {
        __html: feat.desc
      }
    }));
  }));
};

var layout_Layout = function Layout(_ref) {
  var _meta$slugs, _match;

  var children = _ref.children,
      location = _ref.location;

  var _useContext = Object(external_window_React_["useContext"])(theme["context"]),
      _useContext$config = _useContext.config,
      mode = _useContext$config.mode,
      repository = _useContext$config.repository,
      navItems = _useContext.nav,
      meta = _useContext.meta,
      locale = _useContext.locale;

  var repoUrl = repository.url,
      branch = repository.branch,
      platform = repository.platform;

  var _useState = Object(external_window_React_["useState"])(true),
      _useState2 = layout_slicedToArray(_useState, 2),
      menuCollapsed = _useState2[0],
      setMenuCollapsed = _useState2[1];

  var _useState3 = Object(external_window_React_["useState"])(false),
      _useState4 = layout_slicedToArray(_useState3, 2),
      darkSwitch = _useState4[0],
      setDarkSwitch = _useState4[1];

  var isSiteMode = mode === 'site';
  var showHero = isSiteMode && meta.hero;
  var showFeatures = isSiteMode && meta.features;
  var showSideMenu = meta.sidemenu !== false && !showHero && !showFeatures && !meta.gapless;
  var showSlugs = !showHero && !showFeatures && Boolean((_meta$slugs = meta.slugs) === null || _meta$slugs === void 0 ? void 0 : _meta$slugs.length) && (meta.toc === 'content' || meta.toc === undefined) && !meta.gapless;
  var isCN = /^zh|cn$/i.test(locale);
  var updatedTimeIns = new Date(meta.updatedTime);
  var updatedTime = "".concat(updatedTimeIns.toLocaleDateString([], {
    hour12: false
  }), " ").concat(updatedTimeIns.toLocaleTimeString([], {
    hour12: false
  }));
  var repoPlatform = {
    github: 'GitHub',
    gitlab: 'GitLab'
  }[((_match = (repoUrl || '').match(/(github|gitlab)/)) === null || _match === void 0 ? void 0 : _match[1]) || 'nothing'] || platform;
  return /*#__PURE__*/external_window_React_default.a.createElement("div", {
    className: "__dumi-default-layout",
    "data-route": location.pathname,
    "data-show-sidemenu": String(showSideMenu),
    "data-show-slugs": String(showSlugs),
    "data-site-mode": isSiteMode,
    "data-gapless": String(!!meta.gapless),
    onClick: function onClick() {
      setDarkSwitch(false);
      if (menuCollapsed) return;
      setMenuCollapsed(true);
    }
  }, /*#__PURE__*/external_window_React_default.a.createElement(es_components_Navbar, {
    location: location,
    navPrefix: /*#__PURE__*/external_window_React_default.a.createElement(components_SearchBar, null),
    darkPrefix: /*#__PURE__*/external_window_React_default.a.createElement(es_components_Dark, {
      darkSwitch: darkSwitch,
      onDarkSwitchClick: function onDarkSwitchClick(ev) {
        setDarkSwitch(function (val) {
          return !val;
        });
        ev.stopPropagation();
      },
      isSideMenu: false
    }),
    onMobileMenuClick: function onMobileMenuClick(ev) {
      setMenuCollapsed(function (val) {
        return !val;
      });
      ev.stopPropagation();
    }
  }), /*#__PURE__*/external_window_React_default.a.createElement(es_components_SideMenu, {
    darkPrefix: /*#__PURE__*/external_window_React_default.a.createElement(es_components_Dark, {
      darkSwitch: darkSwitch,
      isSideMenu: true
    }),
    mobileMenuCollapsed: menuCollapsed,
    location: location
  }), showSlugs && /*#__PURE__*/external_window_React_default.a.createElement(components_SlugList, {
    slugs: meta.slugs,
    className: "__dumi-default-layout-toc"
  }), showHero && layout_Hero(meta.hero), showFeatures && layout_Features(meta.features), /*#__PURE__*/external_window_React_default.a.createElement("div", {
    className: "__dumi-default-layout-content"
  }, children, !showHero && !showFeatures && meta.filePath && !meta.gapless && /*#__PURE__*/external_window_React_default.a.createElement("div", {
    className: "__dumi-default-layout-footer-meta"
  }, repoPlatform && /*#__PURE__*/external_window_React_default.a.createElement(theme["Link"], {
    to: "".concat(repoUrl, "/edit/").concat(branch, "/").concat(meta.filePath)
  }, isCN ? "\\u5728 ".concat(repoPlatform, " \\u4E0A\\u7F16\\u8F91\\u6B64\\u9875") : "Edit this doc on ".concat(repoPlatform)), /*#__PURE__*/external_window_React_default.a.createElement("span", {
    "data-updated-text": isCN ? '\u6700\u540E\u66F4\u65B0\u65F6\u95F4\uFF1A' : 'Last update: '
  }, updatedTime)), (showHero || showFeatures) && meta.footer && /*#__PURE__*/external_window_React_default.a.createElement("div", {
    className: "__dumi-default-layout-footer",
    dangerouslySetInnerHTML: {
      __html: meta.footer
    }
  })));
};

/* harmony default export */ var es_layout = __webpack_exports__["default"] = (layout_Layout);

//# sourceURL=webpack:///./node_modules/@umijs/preset-dumi/node_modules/dumi-theme-default/es/layout.js_+_6_modules?`)},"7wuY":function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin

//# sourceURL=webpack:///./node_modules/@umijs/preset-dumi/node_modules/dumi-theme-default/es/components/Navbar.less?`)},"9IxB":function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin

//# sourceURL=webpack:///./node_modules/@umijs/preset-dumi/node_modules/dumi-theme-default/es/components/SearchBar.less?`)},"9kvl":function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("FfOG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _history__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("bCY9");
// @ts-nocheck



//# sourceURL=webpack:///./src/.umi-production/core/umiExports.ts?`)},JYF0:function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin

//# sourceURL=webpack:///./node_modules/@umijs/preset-dumi/node_modules/dumi-theme-default/es/components/SlugList.less?`)},KcUY:function(module,exports,__webpack_require__){"use strict";eval(`

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _context = _interopRequireDefault(__webpack_require__("nLCz"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * hooks for get meta data of current route
 * @param routes    project route configurations
 * @param pathname  pathname of location
 */
var useCurrentRouteMeta = function useCurrentRouteMeta(routes, pathname) {
  var handler = function handler() {
    var _args$0$find;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var pathWithoutSuffix = args[1].replace(/([^^])\\/$/, '$1');
    return _objectSpread(_objectSpread({}, ((_args$0$find = args[0].find(function (_ref) {
      var path = _ref.path;
      return path === pathWithoutSuffix;
    })) === null || _args$0$find === void 0 ? void 0 : _args$0$find.meta) || {}), {}, {
      __pathname: pathname
    });
  };

  var _useState = (0, _react.useState)(handler(routes, pathname)),
      _useState2 = _slicedToArray(_useState, 2),
      meta = _useState2[0],
      setMeta = _useState2[1];

  (0, _react.useLayoutEffect)(function () {
    setMeta(handler(routes, pathname));
  }, [pathname]);
  return meta;
};
/**
 * hooks for get locale from current route
 * @param locales   project locale configurations
 * @param pathname  pathname of location
 */


var useCurrentLocale = function useCurrentLocale(locales, pathname) {
  var handler = function handler() {
    var _args$0$find2;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    // get locale by route prefix
    return ((_args$0$find2 = args[0].find(function (locale) {
      return new RegExp("/".concat(locale.name, "(/|$)")).test(args[1]);
    })) === null || _args$0$find2 === void 0 ? void 0 : _args$0$find2.name) || locales[0].name;
  };

  var _useState3 = (0, _react.useState)(handler(locales, pathname)),
      _useState4 = _slicedToArray(_useState3, 2),
      locale = _useState4[0],
      setLocale = _useState4[1];

  (0, _react.useLayoutEffect)(function () {
    setLocale(handler(locales, pathname));
  }, [pathname]);
  return locale;
};
/**
 * hooks for get menu data of current route
 * @param ctxConfig context config
 * @param locale    locale from current route
 * @param pathname  pathname of location
 */


var useCurrentMenu = function useCurrentMenu(ctxConfig, locale, pathname) {
  var handler = function handler() {
    var _args$0$menus$args$;

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    var navs = args[0].navs[args[1]] || [];
    var navPath = '*'; // find nav in reverse way to fallback to the first nav

    for (var i = navs.length - 1; i >= 0; i -= 1) {
      var nav = navs[i];
      var items = [nav].concat(nav.children).filter(Boolean);
      var matched = items.find(function (item) {
        return item.path && new RegExp("^".concat(item.path.replace(/\\.html$/, ''), "(/|.|$)")).test(args[2]);
      });

      if (matched) {
        navPath = matched.path;
        break;
      }
    }

    return ((_args$0$menus$args$ = args[0].menus[args[1]]) === null || _args$0$menus$args$ === void 0 ? void 0 : _args$0$menus$args$[navPath]) || [];
  };

  var _useState5 = (0, _react.useState)(handler(ctxConfig, locale, pathname)),
      _useState6 = _slicedToArray(_useState5, 2),
      menu = _useState6[0],
      setMenu = _useState6[1];

  (0, _react.useLayoutEffect)(function () {
    setMenu(handler(ctxConfig, locale, pathname));
  }, [ctxConfig.navs, ctxConfig.menus, locale, pathname]);
  return menu;
};
/**
 * hooks for doc base route path
 * @param locale    current locale
 * @param locales   project locale configurations
 * @param route     layout route configurations
 * @note  handle these points:
 *          1. locale prefix, such as empty or /zh-CN
 *          2. integrate mode route prefix, such as /~docs or /~docs/zh-CN
 */


var useCurrentBase = function useCurrentBase(locale, locales, route) {
  var handler = function handler() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    if (args[0] === args[1][0].name) {
      // use layout route path as base in default locale
      return args[2].path;
    } // join layout route path & locale prefix in other locale


    return "".concat(route.path, "/").concat(locale).replace(/\\/\\//, '/');
  };

  var _useState7 = (0, _react.useState)(handler(locale, locales, route)),
      _useState8 = _slicedToArray(_useState7, 2),
      base = _useState8[0],
      setBase = _useState8[1];

  (0, _react.useLayoutEffect)(function () {
    setBase(handler(locale, locales, route));
  }, [locale]);
  return base;
};

var findDumiRoot = function findDumiRoot(routes) {
  var rootRoutes;

  var _iterator = _createForOfIteratorHelper(routes),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;

      if (item.__dumiRoot) {
        rootRoutes = item.routes;
        break;
      } else if (item.routes && (rootRoutes = findDumiRoot(item.routes))) {
        break;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return rootRoutes;
};
/**
 * outer theme layout
 */


var OuterLayout = function OuterLayout(props) {
  var location = props.location,
      route = props.route,
      children = props.children,
      config = props.config,
      apis = props.apis,
      demos = props.demos;
  var pathWithoutPrefix = location.pathname.replace( // to avoid stripped the first /
  route.path.replace(/^\\/$/, '//'), '');
  var routes = findDumiRoot(props.routes) || [];
  var meta = useCurrentRouteMeta(routes, location.pathname); // use non-prefix for detect current locale, such as /~docs/en-US -> /en-US

  var locale = useCurrentLocale(config.locales, pathWithoutPrefix);
  var menu = useCurrentMenu(config, locale, location.pathname);
  var base = useCurrentBase(locale, config.locales, route);
  return /*#__PURE__*/_react.default.createElement(_context.default.Provider, {
    value: {
      config: config,
      meta: meta.__pathname === location.pathname ? meta : {},
      locale: locale,
      nav: config.navs[locale] || [],
      menu: menu,
      base: base,
      routes: routes,
      apis: apis,
      demos: demos
    }
  }, children);
};

var _default = OuterLayout;
exports.default = _default;

//# sourceURL=webpack:///./node_modules/@umijs/preset-dumi/lib/theme/layout.js?`)},NR2k:function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin

//# sourceURL=webpack:///./node_modules/@umijs/preset-dumi/node_modules/dumi-theme-default/es/style/layout.less?`)},afA6:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("0Owb");

// EXTERNAL MODULE: external "window.React"
var external_window_React_ = __webpack_require__("cDcd");
var external_window_React_default = /*#__PURE__*/__webpack_require__.n(external_window_React_);

// EXTERNAL MODULE: ./src/.umi-production/dumi/config.json
var config = __webpack_require__("q3YX");

// EXTERNAL MODULE: ./node_modules/umi/node_modules/@umijs/runtime/dist/index.esm.js
var index_esm = __webpack_require__("rlch");

// CONCATENATED MODULE: ./node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./src/Components/Antd/DatePicker/index.tsx?dumi-raw-code
/* harmony default export */ var DatePickerdumi_raw_code = ("import React from \\"react\\";\\nimport Picker1 from \\"./Picker1\\";\\nimport Picker2 from \\"./Picker2\\";\\nimport { Card } from \\"antd\\";\\nexport default function IndexPage() {\\n  return (\\n    <>\\n      <Card style={{ margin: 24 }}>\\n        <Picker1 />\\n        <Picker2 />\\n      </Card>\\n    </>\\n  );\\n}");
// CONCATENATED MODULE: ./node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./src/Components/Antd/DatePicker/Picker1/index.tsx?dumi-raw-code
/* harmony default export */ var Picker1dumi_raw_code = ("import type moment from \\"moment\\";\\nimport { Form, DatePicker } from \\"antd\\";\\nimport ToolClass from \\"../toolClass\\";\\nimport React from \\"react\\";\\nconst Picker1 = () => {\\n  const [form] = Form.useForm();\\n  const transformFn = new ToolClass();\\n  const disabledTime = (CurrentFormMoment: moment.MomentInput) => {\\n    const StartTime = form.getFieldValue(\\"startTime\\");\\n    return transformFn.disabledTime(StartTime, CurrentFormMoment);\\n  };\\n  const disabledDate = (CurrentFormMoment: moment.MomentInput) => {\\n    const StartTime = form.getFieldValue(\\"startTime\\");\\n    return transformFn.disabledDate(StartTime, CurrentFormMoment);\\n  };\\n  return (\\n    <>\\n      <h2>Picker1</h2>\\n      <Form form={form}>\\n        <Form.Item name=\\"startTime\\">\\n          <DatePicker\\n            style={{ minWidth: \\"100%\\" }}\\n            showToday={false}\\n            showTime\\n            showNow={false}\\n            onChange={() => form.setFieldsValue({ endTime: null })}\\n          />\\n        </Form.Item>\\n        <Form.Item name=\\"endTime\\">\\n          <DatePicker\\n            style={{ minWidth: \\"100%\\" }}\\n            showToday={false}\\n            showTime={{\\n              hideDisabledOptions: true,\\n            }}\\n            showNow={false}\\n            disabledDate={disabledDate}\\n            disabledTime={disabledTime}\\n          />\\n        </Form.Item>\\n      </Form>\\n    </>\\n  );\\n};\\nexport default Picker1;");
// CONCATENATED MODULE: ./node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./src/Components/Antd/DatePicker/toolClass.tsx?dumi-raw-code
/* harmony default export */ var toolClassdumi_raw_code = ("import moment from \\"moment\\";\\nexport default class ToolClass {\\n  protected _range = (start: number, end: number) => {\\n    const result = [];\\n    for (let i = start; i < end; i++) {\\n      result.push(i);\\n    }\\n    return result;\\n  };\\n\\n  // @@Demo1 \u573A\u666F: \u4E24\u4E2ADatePicker \u7ED3\u675F\u65F6\u95F4\u8868\u5355 \u6821\u9A8C \u9700\u8981\u665A\u4E8E \u5F00\u59CB\u65F6\u95F4\u8868\u5355\\n  // const [form] = Form.useForm();\\n  // const transformFn = new ToolClass()\\n  // const disabledTime = (CurrentFormMoment: moment.MomentInput) => {\\n  //   const StartTime = form.getFieldValue('startTime')\\n  //   return transformFn.disabledTime(StartTime, CurrentFormMoment)\\n  // }\\n  // const disabledDate = (CurrentFormMoment: moment.MomentInput) => {\\n  //   const StartTime = form.getFieldValue('startTime')\\n  //   return transformFn.disabledDate(StartTime, CurrentFormMoment)\\n  // }\\n  //  <Form form={form}>\\n  //       <Form.Item name='startTime'>\\n  //         <DatePicker\\n  //           showToday={false}\\n  //           showTime\\n  //           showNow={false}\\n  //           onChange={() => form.setFieldsValue({ endTime: null })}\\n  //         />\\n  //       </Form.Item>\\n  //       <Form.Item name='endTime'>\\n  //         <DatePicker\\n  //           showToday={false}\\n  //           showTime={{\\n  //             hideDisabledOptions: true\\n  //           }}\\n  //           showNow={false}\\n  //           disabledDate={disabledStartTime}\\n  //           disabledTime={disabledTime}\\n  //         />\\n  //       </Form.Item>\\n  //     </Form>\\n  /**\\n   * \u4E24\u4E2ADatePicker: \u5F00\u59CB\u65F6\u95F4\u548C\u7ED3\u675F\u65F6\u95F4\u8868\u5355\\n   * function: \u5F53\u7ED3\u675F\u65F6\u95F4\u8868\u5355\u65F6 \u5C0F\u4E8E\u5F00\u59CB\u65F6\u95F4\u7684 \u5E74\u6708\u65E5 disabled\\n   * @param startTime \u5F00\u59CB\u65F6\u95F4\u8868\u5355\u7684\u503C form.getFieldsValue('startTime\u2019)\\n   * @param current \u7EC4\u4EF6disabledDate\u65B9\u6CD5\u7684 current\\n   * @returns {boolean}\\n   */\\n  disabledDate = (\\n    startTime: moment.MomentInput,\\n    current: moment.MomentInput,\\n  ) => {\\n    if (startTime == undefined) {\\n      return false;\\n    }\\n    if (current) {\\n      return current < moment(startTime).startOf(\\"days\\");\\n    }\\n    return false;\\n  };\\n  /**\\n   * \u4E24\u4E2ADatePicker: \u5F00\u59CB\u65F6\u95F4\u548C\u7ED3\u675F\u65F6\u95F4\u8868\u5355\\n   * function: \u5F53\u7ED3\u675F\u65F6\u95F4\u8868\u5355\u65F6 \u5C0F\u4E8E\u5F00\u59CB\u65F6\u95F4\u7684 \u65F6\u5206\u79D2 disabled\\n   * @param StartFormMoment \u5F00\u59CB\u65F6\u95F4\u8868\u5355\u7684\u503C form.getFieldsValue('startTime\u2019)\\n   * @param CurrentFormMoment \u5F53\u524D\u8868\u5355\u7684\u503C:\u7ED3\u675F\u65F6\u95F4\u8868\u5355\\n   * @returns {}\\n   */\\n  disabledTime = (\\n    StartFormMoment: moment.MomentInput,\\n    CurrentFormMoment: moment.MomentInput,\\n  ) => {\\n    // startTimes\\n    const startHours = moment(StartFormMoment).hour();\\n    const startMinutes = moment(StartFormMoment).minute();\\n    const startSeconds = moment(StartFormMoment).second();\\n    const startDate = moment(StartFormMoment).date();\\n    // currentTimes\\n    const currentHours = moment(CurrentFormMoment).hour();\\n    const currentMinutes = moment(CurrentFormMoment).minute();\\n    const currentDate = moment(CurrentFormMoment).date();\\n    if (CurrentFormMoment == undefined) {\\n      return {};\\n    }\\n    if (CurrentFormMoment && currentDate === startDate) {\\n      if (currentHours === startHours) {\\n        if (currentMinutes === startMinutes) {\\n          return {\\n            disabledHours: () => this._range(0, startHours),\\n            disabledMinutes: (selectedHour: number) =>\\n              selectedHour >= startHours ? this._range(0, startMinutes) : [],\\n            disabledSeconds: (selectedHour: number, selectedMinute: number) =>\\n              selectedHour >= startHours && selectedMinute >= startMinutes\\n                ? this._range(0, startSeconds)\\n                : [],\\n          };\\n        }\\n        return {\\n          disabledHours: () => this._range(0, startHours),\\n          disabledMinutes: (selectedHour: any) =>\\n            selectedHour >= startHours ? this._range(0, startMinutes) : [],\\n          disabledSeconds: () => [],\\n        };\\n      } else {\\n        return {\\n          disabledHours: () => this._range(0, startHours),\\n          disabledMinutes: () => [],\\n          disabledSeconds: () => [],\\n        };\\n      }\\n    }\\n    return {};\\n  };\\n\\n  // @@Demo2 \u573A\u666F: \u4E24\u4E2ARangePicker\\n  //                1.\u7B2C\u4E00\u4E2A\u8868\u5355\u7684\u7ED3\u675F\u65F6\u95F4\u9700\u8981\u665A\u4E8E\u7B2C\u4E00\u4E2A\u8868\u5355\u7684\u5F00\u59CB\u65F6\u95F4\\n  //                2.\u7B2C\u4E8C\u4E2A\u8868\u5355\u7684\u5F00\u59CB\u65F6\u95F4\u9700\u8981\u665A\u4E8E\u7B2C\u4E00\u4E2A\u8868\u5355\u7684\u5F00\u59CB\u65F6\u95F4\\n  //                3.\u7B2C\u4E8C\u4E2A\u8868\u5355\u7684\u7ED3\u675F\u65F6\u95F4\u9700\u8981\u665A\u4E8E\u7B2C\u4E8C\u4E2A\u8868\u5355\u7684\u5F00\u59CB\u65F6\u95F4\\n  /**\\n   * \u4E24\u4E2ARangePicker\\n   * \u7EE7\u7EED\u590D\u7528 ToolClass.disabledDate \u548C ToolClass.disabledTime\\n   */\\n  // import { useState } from 'react'\\n  // import moment from 'moment'\\n  // import { Form, DatePicker } from 'antd'\\n  // const { RangePicker } = DatePicker;\\n  // import ToolClass from '../toolClass'\\n  // const Picker2 = () => {\\n  //   const [form] = Form.useForm();\\n  //   const transformFn = new ToolClass()\\n  //   const [disabledTimeDates1, setDisabledTimeDates1] = useState([]);\\n  //   const [disabledTimeDates2, setDisabledTimeDates2] = useState([]);\\n  //   // \u5C06\u8868\u5355\u5206\u4E3A startTime1 startTime2  endTime1 endTime2\\n  //   const disabledRangeTime1 = (CurrentFormMoment: moment.MomentInput, type: string) => {\\n  //     let StartTime1 = disabledTimeDates1?.[0];\\n  //     if (type === 'end') {\\n  //       return transformFn.disabledTime(StartTime1, CurrentFormMoment)\\n  //     }\\n  //     return {}\\n  //   };\\n  //   const disabledRangeTime2 = (CurrentFormMoment: moment.MomentInput, type: string) => {\\n  //     // startTime1\\n  //     let StartTime1 = form.getFieldValue('startTime')?.[0];\\n  //     // endTime1\\n  //     let endTime1 = disabledTimeDates2?.[0];\\n  //     if (type === 'start') {\\n  //       return transformFn.disabledTime(StartTime1, CurrentFormMoment)\\n  //     }\\n  //     if (type === 'end') {\\n  //       return transformFn.disabledTime(endTime1, CurrentFormMoment)\\n  //     }\\n  //     return {}\\n  //   };\\n  //   const disabledRangeDate = (CurrentFormMoment: moment.MomentInput) => {\\n  //     let StartTime = form.getFieldValue('startTime')?.[0];\\n  //     return transformFn.disabledDate(StartTime, CurrentFormMoment);\\n  //   }\\n  //   return (\\n  //     <>\\n  //       <h2>Picker2</h2>\\n  //       <Form form={form}>\\n  //         <Form.Item name='startTime'>\\n  //           <RangePicker\\n  //             onChange={() => form.setFieldsValue({ endTime: null })}\\n  //             onCalendarChange={(val: any) => setDisabledTimeDates1(val)}\\n  //             disabledTime={disabledRangeTime1}\\n  //             showTime={{\\n  //               hideDisabledOptions: true\\n  //             }}\\n  //           />\\n  //         </Form.Item>\\n  //         <Form.Item name='endTime'>\\n  //           <RangePicker\\n  //             onCalendarChange={(val: any) => setDisabledTimeDates2(val)}\\n  //             disabledDate={disabledRangeDate}\\n  //             disabledTime={disabledRangeTime2}\\n  //             showTime={{\\n  //               hideDisabledOptions: true\\n  //             }}\\n  //           />\\n  //         </Form.Item>\\n  //       </Form>\\n  //     </>\\n  //   )\\n  // }\\n  // export default Picker2\\n}");
// CONCATENATED MODULE: ./node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./src/Components/Antd/DatePicker/Picker2/index.tsx?dumi-raw-code
/* harmony default export */ var Picker2dumi_raw_code = ("import { useState } from \\"react\\";\\nimport type moment from \\"moment\\";\\nimport React from \\"react\\";\\nimport { Form, DatePicker } from \\"antd\\";\\nconst { RangePicker } = DatePicker;\\nimport ToolClass from \\"../toolClass\\";\\nconst Picker2 = () => {\\n  const [form] = Form.useForm();\\n  const transformFn = new ToolClass();\\n  const [disabledTimeDates1, setDisabledTimeDates1] = useState([]);\\n  const [disabledTimeDates2, setDisabledTimeDates2] = useState([]);\\n  // \u5C06\u8868\u5355\u5206\u4E3A startTime1 startTime2  endTime1 endTime2\\n  const disabledRangeTime1 = (\\n    CurrentFormMoment: moment.MomentInput,\\n    type: string,\\n  ) => {\\n    const StartTime1 = disabledTimeDates1?.[0];\\n    if (type === \\"end\\") {\\n      return transformFn.disabledTime(StartTime1, CurrentFormMoment);\\n    }\\n    return {};\\n  };\\n  const disabledRangeTime2 = (\\n    CurrentFormMoment: moment.MomentInput,\\n    type: string,\\n  ) => {\\n    // startTime1\\n    const StartTime1 = form.getFieldValue(\\"startTime\\")?.[0];\\n    // endTime1\\n    const endTime1 = disabledTimeDates2?.[0];\\n    if (type === \\"start\\") {\\n      return transformFn.disabledTime(StartTime1, CurrentFormMoment);\\n    }\\n    if (type === \\"end\\") {\\n      return transformFn.disabledTime(endTime1, CurrentFormMoment);\\n    }\\n    return {};\\n  };\\n  const disabledRangeDate = (CurrentFormMoment: moment.MomentInput) => {\\n    const StartTime = form.getFieldValue(\\"startTime\\")?.[0];\\n    return transformFn.disabledDate(StartTime, CurrentFormMoment);\\n  };\\n  return (\\n    <>\\n      <h2>Picker2</h2>\\n      <Form form={form}>\\n        <Form.Item name=\\"startTime\\">\\n          <RangePicker\\n            onChange={() => form.setFieldsValue({ endTime: null })}\\n            onCalendarChange={(val: any) => setDisabledTimeDates1(val)}\\n            disabledTime={disabledRangeTime1}\\n            showTime={{\\n              hideDisabledOptions: true,\\n            }}\\n          />\\n        </Form.Item>\\n        <Form.Item name=\\"endTime\\">\\n          <RangePicker\\n            onCalendarChange={(val: any) => setDisabledTimeDates2(val)}\\n            disabledDate={disabledRangeDate}\\n            disabledTime={disabledRangeTime2}\\n            showTime={{\\n              hideDisabledOptions: true,\\n            }}\\n          />\\n        </Form.Item>\\n      </Form>\\n    </>\\n  );\\n};\\nexport default Picker2;");
// CONCATENATED MODULE: ./node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./src/Components/Antd/FormLayout/index.tsx?dumi-raw-code
/* harmony default export */ var FormLayoutdumi_raw_code = ("import { Form, Card, Space, InputNumber, Input, Row, Col } from \\"antd\\";\\nimport React from \\"react\\";\\nconst FormLayout = () => {\\n  return (\\n    <>\\n\\n      <Card style={{ margin: 24 }}>\\n        <h1>1. {\\"<space />\\"} </h1>\\n        <Form.Item>\\n          <Space align=\\"baseline\\" size=\\"large\\">\\n            <Space align=\\"baseline\\">\\n              <Form.Item name=\\"1\\">\\n                <InputNumber min={0} max={100} />\\n              </Form.Item>\\n              <span>%</span>\\n            </Space>\\n          </Space>\\n        </Form.Item>\\n\\n        <h1>2. inline-flex</h1>\\n        <Form.Item label=\\"\u540D\u79F0\u4E00\\" style={{ marginBottom: 0 }}>\\n          <Form.Item\\n            style={{ display: \\"inline-flex\\", width: \\"calc(45% - 4px)\\" }}\\n          >\\n            <Input />\\n          </Form.Item>\\n          <Form.Item\\n            style={{\\n              display: \\"inline-flex\\",\\n              width: \\"calc(55% - 4px)\\",\\n              marginLeft: \\"8px\\",\\n            }}\\n            name=\\"name2\\"\\n          >\\n            <Input />\\n          </Form.Item>\\n\\n          <Form.Item label=\\"InputNumber\u8868\u5355\\" style={{ height: 32 }}>\\n            <Space align=\\"baseline\\" size=\\"large\\">\\n              <Space align=\\"baseline\\">\\n                <Form.Item name=\\"inputNumber1\\">\\n                  <InputNumber min={0} max={100} />\\n                </Form.Item>\\n                <span>%</span>\\n              </Space>\\n            </Space>\\n          </Form.Item>\\n        </Form.Item>\\n\\n        <h1>3. row and col</h1>\\n        <Row>\\n          <Col span={12}>\\n            <Form.Item label=\\"col1\\">\\n              <Input />\\n            </Form.Item>\\n          </Col>\\n          <Col span={12}>\\n            <Form.Item label=\\"col2\\">\\n              <Input />\\n            </Form.Item>\\n          </Col>\\n        </Row>\\n\\n        <h1>4. \u6307\u5B9A\u5177\u4F53\u7684\u5BBD\u5EA6</h1>\\n        {\`\\n          labelCol={{ flex: '0 0 100px' }} \\n          wrapperCol={{ flex: '0 0 100px' }} \\n          style={{ display: 'inline-flex', width: 'calc(45% - 4px)' }} \\n        \`}\\n      </Card>\\n\\n    </>\\n  );\\n};\\n\\nexport default FormLayout;");
// CONCATENATED MODULE: ./node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./src/Components/BusinessComponent/Calendar/index.tsx?dumi-raw-code
/* harmony default export */ var Calendardumi_raw_code = ("import Calendar from './components/Calendar';\\nexport default Calendar;");
// CONCATENATED MODULE: ./node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./src/Components/BusinessComponent/Calendar/components/Calendar/index.tsx?dumi-raw-code
/* harmony default export */ var components_Calendardumi_raw_code = ("/* eslint-disable react/jsx-key */\\nimport moment, { MomentInput } from 'moment';\\nimport React, {\\n  useState,\\n  useImperativeHandle,\\n  useRef,\\n  useEffect,\\n  Fragment,\\n} from 'react';\\nimport { WEEK_DAY, MONTH } from './constant';\\nimport styles from './index.less';\\nimport * as transformFn from './utils';\\nimport { Tag, Button, Row, Col } from 'antd';\\n\\ninterface Iprops {\\n  /**\u4F20\u5165\u521D\u59CB\u5316\u7684\u65F6\u95F4 */\\n  time: moment.MomentInput | string;\\n  /**\u5F85\u6574\u7406 */\\n  otherProps: any;\\n  [props: string]: any;\\n}\\n\\ntype IPickerType = 'year' | 'month' | 'date';\\ntype ClickEvent = React.MouseEvent<HTMLTableRowElement>;\\n\\nconst Calendar = (props: Iprops) => {\\n  const { time: newTime = moment().format('YYYY-MM-DD') } = props;\\n  const [time, setTime] = useState(newTime);\\n  const [pickerType, setPickerType] = useState<IPickerType>('date');\\n  const [selectDays, setSelectDays] = useState<moment.MomentInput[]>([\\n    moment().format('YYYY-MM-DD'),\\n  ]);\\n\\n  const createRestDaysTD = (restDays: number[], type = 'first') => {\\n    const subMonth = (e: ClickEvent) => {\\n      const currentDate =\\n        (e.target as HTMLElement).innerText.length >= 2\\n          ? (e.target as HTMLElement).innerText\\n          : 0 + (e.target as HTMLElement).innerText;\\n      let classNameNames: string[] = (e.target as Element).className.split(' ');\\n      if (\\n        classNameNames.includes(styles['current-day']) &&\\n        !classNameNames.includes(styles['selected']) &&\\n        pickerType == 'date'\\n      ) {\\n        (e.target as Element).className += \` \${styles.selected}\`;\\n      } else {\\n        (e.target as Element).className = (e.target as Element).className.replace(\\n          styles['selected'],\\n          '',\\n        );\\n      }\\n      if (pickerType == 'date') {\\n        (e.target as Element).setAttribute(\\n          'data-date',\\n          moment(time).format(\`YYYY-MM-[\${currentDate}]\`),\\n        );\\n      }\\n\\n      if (type == 'first') {\\n        let newTime =\\n          moment(time)\\n            .subtract(1, 'month')\\n            .format('YYYY-MM') +\\n          '-' +\\n          currentDate;\\n        setTime(moment(newTime));\\n      } else {\\n        let newTime =\\n          moment(time)\\n            .add(1, 'month')\\n            .format('YYYY-MM') +\\n          '-' +\\n          currentDate;\\n        setTime(moment(newTime));\\n      }\\n    };\\n    return (\\n      <Fragment>\\n        {restDays?.map((item, index) => (\\n          <td\\n            onClick={(e: ClickEvent) => subMonth(e)}\\n            key={Math.random()}\\n            className={\`\${styles.day} \${styles['rest-day']}\`}\\n          >\\n            {item}\\n          </td>\\n        ))}\\n      </Fragment>\\n    );\\n  };\\n\\n  const createCurrentYearsTD = (\\n    currentYears: number[],\\n    time: moment.MomentInput,\\n  ) => {\\n    const currentDay = moment(time).get('year');\\n    return (\\n      <Fragment>\\n        {currentYears.map((item, index) => (\\n          <td\\n            key={Math.random()}\\n            className={\`\${styles.day} \${styles['current-day']} \${currentDay ==\\n              index + 1 && styles.current}\`}\\n          >\\n            {item + 1}\\n          </td>\\n        ))}\\n      </Fragment>\\n    );\\n  };\\n\\n  const createCurrentMonthTD = (\\n    currentMonths: number[],\\n    time: moment.MomentInput,\\n  ) => {\\n    const currentDay = moment(time).get('month');\\n    return (\\n      <Fragment>\\n        {currentMonths.map((item, index) => (\\n          <td\\n            key={Math.random()}\\n            className={\`\${styles.day} \${styles['current-day']} \${currentDay ==\\n              index + 1 && styles.current}\`}\\n          >\\n            {item}\\n          </td>\\n        ))}\\n      </Fragment>\\n    );\\n  };\\n\\n  const createCurrentDaysTD = (\\n    currentDays: number,\\n    time: moment.MomentInput,\\n  ) => {\\n    const currentTimeArr = Array.from(\\n      { length: currentDays },\\n      (item, index) => index,\\n    );\\n    const currentDay = moment(time).date();\\n    console.log(selectDays);\\n    return (\\n      <Fragment>\\n        {currentTimeArr?.map((item, index) => (\\n          <td\\n            key={Math.random()}\\n            className={\`\${styles.day} \${selectDays.includes(\\n              moment(time)\\n                .date(index + 1)\\n                .format('YYYY-MM-DD'),\\n            ) && styles.selected} \${styles['current-day']} \${currentDay ==\\n              index + 1 && styles.current}\`}\\n            data-date={moment(time)\\n              .date(index + 1)\\n              .format('YYYY-MM-DD')}\\n          >\\n            {item + 1}\\n          </td>\\n        ))}\\n      </Fragment>\\n    );\\n  };\\n\\n  const createDateTrs = (\\n    element: JSX.Element[],\\n    count: number,\\n    time: moment.MomentInput,\\n    pickerType = 'date',\\n  ) => {\\n    const trCount = ~~(element.length / count);\\n\\n    const clickTime = (e: ClickEvent) => {\\n      const currentDate =\\n        (e.target as HTMLElement).innerText.length >= 2\\n          ? (e.target as HTMLElement).innerText\\n          : 0 + (e.target as HTMLElement).innerText;\\n      let classNameNames: string[] = (e.target as Element).className.split(' ');\\n\\n      if (\\n        classNameNames.includes(styles['current-day']) &&\\n        !classNameNames.includes(styles['selected']) &&\\n        pickerType == 'date'\\n      ) {\\n        (e.target as Element).className += \` \${styles.selected}\`;\\n        const currentDateString = moment(time).format(\\n          \`YYYY-MM-[\${currentDate}]\`,\\n        );\\n        const newCurrentDateString = [\\n          ...new Set([...selectDays, currentDateString]),\\n        ];\\n        setSelectDays(newCurrentDateString);\\n      } else {\\n        (e.target as Element).className = (e.target as Element).className.replace(\\n          styles['selected'],\\n          '',\\n        );\\n        const currentDateString = moment(time).format(\\n          \`YYYY-MM-[\${currentDate}]\`,\\n        );\\n        const newCurrentDateString = selectDays.filter(\\n          item => item != currentDateString,\\n        );\\n        setSelectDays(newCurrentDateString);\\n      }\\n\\n      if (pickerType == 'date') {\\n        (e.target as Element).setAttribute(\\n          'data-date',\\n          moment(time).format(\`YYYY-MM-[\${currentDate}]\`),\\n        );\\n      }\\n\\n      if (pickerType == 'year') {\\n        (e.target as Element).setAttribute(\\n          'data-date',\\n          moment(time).format(\`YYYY\`),\\n        );\\n        const currentYear = moment((e.target as HTMLElement).innerText, 'YYYY');\\n        setTime(currentYear);\\n        setPickerType('date');\\n      }\\n\\n      if (pickerType == 'month') {\\n        (e.target as Element).setAttribute(\\n          'data-date',\\n          moment(time).format(\`MM\`),\\n        );\\n        const currentMonth = moment((e.target as HTMLElement).innerText, 'MM');\\n        setTime(currentMonth);\\n        setPickerType('date');\\n      }\\n    };\\n\\n    return (\\n      <>\\n        {Array.from({ length: trCount }, (item, index) => (\\n          <Fragment key={Math.random()}>\\n            <tr onClick={(e: ClickEvent) => clickTime(e)}>\\n              {element.slice(index * count, (index + 1) * count)}\\n            </tr>\\n          </Fragment>\\n        ))}\\n      </>\\n    );\\n  };\\n\\n  const lastMonthRestDays = transformFn.getLastMonthRestDays(time);\\n  const currentMonthDayCount = transformFn.getMonthDayCount(time);\\n  const nextMonthRestDays = transformFn.getNextMonthRestDays(time);\\n  const lastMonthRestDaysTD = createRestDaysTD(lastMonthRestDays, 'first');\\n  const currentMonthDaysTD = createCurrentDaysTD(currentMonthDayCount, time);\\n  const nextMonthRestDaysTD = createRestDaysTD(nextMonthRestDays, 'end');\\n\\n  const lastRestYears = [\\n    moment(transformFn.getFirstAndEndYear(time, '0'))\\n      .subtract(1, 'year')\\n      .get('year'),\\n  ];\\n  const currentYearCount = transformFn.getCurrentYearArea(\\n    moment(transformFn.getFirstAndEndYear(time, '0')),\\n    moment(transformFn.getFirstAndEndYear(time, '9')),\\n  );\\n  const nextRestYear = [\\n    moment(transformFn.getFirstAndEndYear(time, '9'))\\n      .add(1, 'year')\\n      .get('year'),\\n  ];\\n  const lastRestYearsTD = createRestDaysTD(lastRestYears);\\n  const currentYearCountTD = createCurrentYearsTD(currentYearCount, time);\\n  const nextRestYearTD = createRestDaysTD(nextRestYear);\\n\\n  const currentMonthCountTD = createCurrentMonthTD(MONTH, time);\\n  return (\\n    <>\\n      <div>\\n        <h3>\u5F53\u524D\u9009\u4E2D\u7684\u65E5\u671F</h3>\\n        <Row>\\n          {selectDays.map((item, index) => (\\n            <Fragment key={index}>\\n              <Tag color={'purple'}> {item}</Tag>\\n            </Fragment>\\n          ))}\\n        </Row>\\n        <Row>\\n          <Button\\n            style={{ margin: '20px 0' }}\\n            onClick={() => setSelectDays([])}\\n            type=\\"primary\\"\\n          >\\n            clear\\n          </Button>\\n        </Row>\\n        <div className=\\"ant-picker-panel-container\\">\\n          <div tabIndex={-1} className=\\"ant-picker-panel\\">\\n            <div className=\\"ant-picker-date-panel\\">\\n              {pickerType == 'date' && (\\n                <Fragment>\\n                  <div className=\\"ant-picker-header\\">\\n                    <button\\n                      type=\\"button\\"\\n                      tabIndex={-1}\\n                      className=\\"ant-picker-header-super-prev-btn\\"\\n                      onClick={() => setTime(moment(time).subtract(1, 'year'))}\\n                    >\\n                      <span className=\\"ant-picker-super-prev-icon\\"></span>\\n                    </button>\\n                    <button\\n                      type=\\"button\\"\\n                      tabIndex={-1}\\n                      className=\\"ant-picker-header-prev-btn\\"\\n                      onClick={() => setTime(moment(time).subtract(1, 'month'))}\\n                    >\\n                      <span className=\\"ant-picker-prev-icon\\"></span>\\n                    </button>\\n                    <div className=\\"ant-picker-header-view\\">\\n                      <button\\n                        type=\\"button\\"\\n                        tabIndex={-1}\\n                        className=\\"ant-picker-year-btn\\"\\n                        onClick={() => setPickerType('year')}\\n                      >\\n                        {moment(time).format('YYYY')}\u5E74\\n                      </button>\\n                      <button\\n                        type=\\"button\\"\\n                        tabIndex={-1}\\n                        className=\\"ant-picker-month-btn\\"\\n                        onClick={() => setPickerType('month')}\\n                      >\\n                        {moment(time).format('MM')}\u6708\\n                      </button>\\n                    </div>\\n                    <button\\n                      type=\\"button\\"\\n                      tabIndex={-1}\\n                      className=\\"ant-picker-header-next-btn\\"\\n                      onClick={() => setTime(moment(time).add(1, 'month'))}\\n                    >\\n                      <span className=\\"ant-picker-next-icon\\"></span>\\n                    </button>\\n                    <button\\n                      type=\\"button\\"\\n                      tabIndex={-1}\\n                      className=\\"ant-picker-header-super-next-btn\\"\\n                      onClick={() => setTime(moment(time).add(1, 'year'))}\\n                    >\\n                      <span className=\\"ant-picker-super-next-icon\\"></span>\\n                    </button>\\n                  </div>\\n                  <div className=\\"ant-picker-body\\">\\n                    <table\\n                      className={\`\${styles['my-calendar']} ant-picker-content\`}\\n                    >\\n                      <thead>\\n                        <tr className={styles['week-day']}>\\n                          {WEEK_DAY.map((item, index) => (\\n                            <td key={index}>{item}</td>\\n                          ))}\\n                        </tr>\\n                      </thead>\\n                      <tbody>\\n                        {createDateTrs(\\n                          [\\n                            ...lastMonthRestDaysTD.props.children,\\n                            ...currentMonthDaysTD.props.children,\\n                            ...nextMonthRestDaysTD.props.children,\\n                          ],\\n                          7,\\n                          time,\\n                          'date',\\n                        )}\\n                      </tbody>\\n                    </table>\\n                  </div>\\n                </Fragment>\\n              )}\\n              {pickerType == 'year' && (\\n                <Fragment>\\n                  <div className=\\"ant-picker-header\\">\\n                    <button\\n                      type=\\"button\\"\\n                      tabIndex={-1}\\n                      className=\\"ant-picker-header-super-prev-btn\\"\\n                      onClick={() => setTime(moment(time).subtract(10, 'year'))}\\n                    >\\n                      <span className=\\"ant-picker-super-prev-icon\\"></span>\\n                    </button>\\n                    <div className=\\"ant-picker-header-view\\">\\n                      <button type=\\"button\\" className=\\"ant-picker-decade-btn\\">\\n                        <>\\n                          {moment(\\n                            transformFn.getFirstAndEndYear(time, '0'),\\n                          ).format('YYYY')}\\n                          -\\n                          {moment(\\n                            transformFn.getFirstAndEndYear(time, '9'),\\n                          ).format('YYYY')}\\n                        </>\\n                      </button>\\n                    </div>\\n                    <button\\n                      type=\\"button\\"\\n                      tabIndex={-1}\\n                      className=\\"ant-picker-header-super-next-btn\\"\\n                      onClick={() => setTime(moment(time).add(10, 'year'))}\\n                    >\\n                      <span className=\\"ant-picker-super-next-icon\\"></span>\\n                    </button>\\n                  </div>\\n                  <div className=\\"ant-picker-body\\">\\n                    <table\\n                      className={\`\${styles['my-calendar']} ant-picker-content\`}\\n                    >\\n                      <thead></thead>\\n                      <tbody>\\n                        {createDateTrs(\\n                          [\\n                            ...lastRestYearsTD.props.children,\\n                            ...currentYearCountTD.props.children,\\n                            ...nextRestYearTD.props.children,\\n                          ],\\n                          3,\\n                          time,\\n                          'year',\\n                        )}\\n                      </tbody>\\n                    </table>\\n                  </div>\\n                </Fragment>\\n              )}\\n              {pickerType == 'month' && (\\n                <Fragment>\\n                  <div className=\\"ant-picker-header\\">\\n                    <button\\n                      type=\\"button\\"\\n                      tabIndex={-1}\\n                      className=\\"ant-picker-header-super-prev-btn\\"\\n                      onClick={() => setTime(moment(time).subtract(1, 'year'))}\\n                    >\\n                      <span className=\\"ant-picker-super-prev-icon\\"></span>\\n                    </button>\\n                    <div className=\\"ant-picker-header-view\\">\\n                      <button\\n                        type=\\"button\\"\\n                        className=\\"ant-picker-decade-btn\\"\\n                        onClick={() => setPickerType('year')}\\n                      >\\n                        {moment(time).format('YYYY')}\u5E74\\n                      </button>\\n                    </div>\\n                    <button\\n                      type=\\"button\\"\\n                      tabIndex={-1}\\n                      className=\\"ant-picker-header-super-next-btn\\"\\n                      onClick={() => setTime(moment(time).add(1, 'year'))}\\n                    >\\n                      <span className=\\"ant-picker-super-next-icon\\"></span>\\n                    </button>\\n                  </div>\\n                  <div className=\\"ant-picker-body\\">\\n                    <table\\n                      className={\`\${styles['my-calendar']} ant-picker-content\`}\\n                    >\\n                      <thead></thead>\\n                      <tbody>\\n                        {createDateTrs(\\n                          [...currentMonthCountTD.props.children],\\n                          3,\\n                          time,\\n                          'month',\\n                        )}\\n                      </tbody>\\n                    </table>\\n                  </div>\\n                </Fragment>\\n              )}\\n            </div>\\n          </div>\\n        </div>\\n      </div>\\n    </>\\n  );\\n};\\n\\nexport default Calendar;");
// CONCATENATED MODULE: ./node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./src/Components/BusinessComponent/Calendar/components/Calendar/constant.tsx?dumi-raw-code
/* harmony default export */ var constantdumi_raw_code = ("export const WEEK_DAY = ['\u65E5', '\u4E00', '\u4E8C', '\u4E09', '\u56DB', '\u4E94', '\u516D'];\\n\\nexport const MONTH = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];");
// CONCATENATED MODULE: ./node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./src/Components/BusinessComponent/Calendar/components/Calendar/index.less?dumi-raw-code
/* harmony default export */ var Calendar_components_Calendardumi_raw_code = (".my-calendar {\\n  width: 324px;\\n  border: 1px solid #ddd;\\n  border-collapse: collapse;\\n  color: #666;\\n  font-size: 12px;\\n\\n  thead {\\n    border-bottom: 1px solid #ddd;\\n  }\\n\\n  tr {\\n    height: 38px;\\n  }\\n\\n  td {\\n    text-align: center;\\n  }\\n\\n  th {\\n    font-weight: normal;\\n  }\\n\\n  .week-day {\\n  }\\n\\n  .day {\\n    &.rest-day {\\n      color: #ccc;\\n    }\\n\\n    &.current-day {\\n      cursor: pointer;\\n    }\\n\\n    &.current {\\n      color: hotpink;\\n      font-weight: bold;\\n    }\\n\\n    &.selected {\\n      border-radius: 100%;\\n      background: #1890ff;\\n      color: #fff;\\n    }\\n\\n    &:hover {\\n      color: hotpink;\\n    }\\n  }\\n\\n  .current {\\n  }\\n\\n  .rest-day {\\n  }\\n\\n  .current-day {\\n  }\\n}");
// CONCATENATED MODULE: ./node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./src/Components/BusinessComponent/Calendar/components/Calendar/utils.ts?dumi-raw-code
/* harmony default export */ var utilsdumi_raw_code = ("import moment from 'moment';\\n\\ntype MomentTime = string | moment.MomentInput;\\n\\n/**\\n * \u83B7\u53D6\u67D0\u4E2A\u6708\u4EFD\u7B2C\u4E00\u5929\u662F\u661F\u671F\u51E0\\n * @see MomentTime\\n * @param {string | moment.MomentInput} [time = moment()] \u4F20\u5165\u5F53\u524D\u65F6\u95F4\\n * @returns {number} days \u5929\u6570\\n */\\nexport function getFirstWeekDay(time: MomentTime = moment()) {\\n  return moment(time)\\n    .startOf('month')\\n    .format('E');\\n}\\n\\n/**\\n * \u83B7\u53D6\u67D0\u4E2A\u6708\u4EFD\u4E00\u5171\u6709\u591A\u5C11\u5929\\n * @see MomentTime\\n * @param {string | moment.MomentInput} [time = moment()] \u4F20\u5165\u5F53\u524D\u65F6\u95F4\\n * @returns {number} days \u5929\u6570\\n */\\nexport function getMonthDayCount(time: MomentTime = moment()) {\\n  return moment(time)\\n    .endOf('month')\\n    .date();\\n}\\n\\n/**\\n * \u83B7\u53D6\u4E0A\u4E2A\u6708\u5269\u4F59\u7684\u5929\u6570\\n * @see MomentTime\\n * @param {string | moment.MomentInput} [time = moment()] \u4F20\u5165\u5F53\u524D\u65F6\u95F4\\n * @returns {number} restDays\\n */\\nexport function getLastMonthRestDays(time: MomentTime = moment()) {\\n  const days = ~~getFirstWeekDay(time);\\n  let lastDate = ~~getMonthDayCount(moment(time).subtract(1, 'month'));\\n  let restDays = [];\\n  while (restDays.length < days) {\\n    restDays.push(lastDate--);\\n  }\\n  restDays.reverse().shift();\\n  return restDays;\\n}\\n\\n/**\\n * \u83B7\u53D6\u4E0B\u4E2A\u6708\u5269\u4F59\u5929\u6570\\n * @see MomentTime\\n * @param {string | moment.MomentInput} [time = moment()] \u4F20\u5165\u5F53\u524D\u65F6\u95F4\\n * @returns {number} restDays\\n */\\nexport function getNextMonthRestDays(time: string | MomentTime = moment()) {\\n  const lastMonthRestDayCount = ~~getFirstWeekDay(time);\\n  const currentMonthDayCount = ~~getMonthDayCount(time);\\n  const nextMonthRestDayCount =\\n    42 - (lastMonthRestDayCount + currentMonthDayCount);\\n  let restDays = [];\\n  for (let i = 1; i <= nextMonthRestDayCount + 1; i++) {\\n    restDays.push(i);\\n  }\\n  return restDays;\\n}\\n\\n/**\\n * \u683C\u5F0F\u5316\u65F6\u95F4\\n * @see MomentTime\\n * @param {string | moment.MomentInput} [time = moment()] \u4F20\u5165\u5F53\u524D\u65F6\u95F4\\n * @param {string}  [format = 'YYYY-MM-DD']\\n * @returns {string} \u683C\u5F0F\u5316\u540E\u7684\u65F6\u95F4\\n */\\nfunction getFormatDate(\\n  time: MomentTime = moment(),\\n  format: string = 'YYYY-MM-DD',\\n) {\\n  return moment(time).format(format);\\n}\\n\\n/**\\n * \u83B7\u53D6\u65F6\u95F4\u6233\\n * @see MomentTime\\n * @param {string | moment.MomentInput} [time = moment()] \u4F20\u5165\u5F53\u524D\u65F6\u95F4\\n * @returns {number} timestamp \u65F6\u95F4\u6233\\n */\\nfunction getTimestamp(time: MomentTime = moment()) {\\n  return moment(time).valueOf();\\n}\\n\\n/**\\n *\\n * @param year \u4F20\u51652022 \u8F6C\u6362\u4E3A202x\\n * @param replaceNumber\\n * @returns\\n */\\nexport function getFirstAndEndYear(year: MomentTime, replaceNumber = '0') {\\n  let num: number = moment(year).get('year');\\n  let theUnit = parseInt(((num % 10) as unknown) as string);\\n  let tens = parseInt((((num % 100) / 10) as unknown) as string);\\n  let hundred = parseInt((((num % 1000) / 100) as unknown) as string);\\n  let thousand = parseInt((((num % 10000) / 1000) as unknown) as string);\\n  let resNum = '';\\n  if (theUnit !== 5) {\\n    if (thousand === 0) {\\n      resNum = hundred.toString() + tens.toString() + replaceNumber;\\n    } else {\\n      resNum =\\n        thousand.toString() +\\n        hundred.toString() +\\n        tens.toString() +\\n        replaceNumber;\\n    }\\n  }\\n  return moment(parseInt(resNum), 'YYYY');\\n}\\n\\n/**\\n * \u83B7\u53D6\u5F53\u524D\u5E74\u4EFD\u7684\u533A\u95F4\\n * @param startTime\\n * @param endTime\\n * @returns\\n */\\nexport function getCurrentYearArea(startTime: MomentTime, endTime: MomentTime) {\\n  let start = moment(startTime).get('year');\\n  let end = moment(endTime).get('year');\\n  let res = [];\\n  for (let i = start; i <= end; i++) {\\n    res.push(i);\\n  }\\n  // return res.map(item => moment(item, 'YYYY'))\\n  return res;\\n}");
// CONCATENATED MODULE: ./node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./src/Components/BusinessComponent/QueryForm/index.tsx?dumi-raw-code
/* harmony default export */ var QueryFormdumi_raw_code = ("import type { FC } from \\"react\\";\\nimport { Card } from \\"antd\\";\\nimport { Filter } from \\"./components\\";\\nimport searchList from \\"./constant\\";\\nimport React from \\"react\\";\\n\\nconst Queryform: FC<any> = () => {\\n  const onSearch = (values: any) => {\\n    console.log(values);\\n  };\\n\\n  return (\\n    <Card title=\\"\u6211\u7684\\" style={{ margin: 24 }}>\\n      <Filter\\n        filterList={searchList}\\n        onSearch={(values: any) => onSearch(values)}\\n      />\\n    </Card>\\n  );\\n};\\n\\nexport default Queryform;");
// CONCATENATED MODULE: ./node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./src/Components/BusinessComponent/QueryForm/components/index.tsx?dumi-raw-code
/* harmony default export */ var componentsdumi_raw_code = ("import { useState, useEffect, useMemo } from \\"react\\";\\nimport React from \\"react\\";\\nimport {\\n  Form,\\n  Row,\\n  Col,\\n  Input,\\n  Button,\\n  InputNumber,\\n  AutoComplete,\\n  Select,\\n  DatePicker,\\n  TreeSelect,\\n  Switch,\\n  Cascader,\\n  TimePicker,\\n} from \\"antd\\";\\nimport { UpOutlined } from \\"@ant-design/icons\\";\\nimport styles from \\"./index.less\\";\\nconst { RangePicker } = DatePicker;\\n\\nconst { Option } = Select;\\n\\ninterface FilterProps {\\n  /**\u67E5\u8BE2\u8868\u5355JSON\u5F62\u5F0F */\\n  filterList: any[];\\n  /**\u662F\u5426\u5141\u8BB8\u641C\u7D22 */\\n  autoSearch?: boolean;\\n  /**\u641C\u7D22\u4E8B\u4EF6\u56DE\u8C03 */\\n  onSearch?: (values: any) => void;\\n  /**\u91CD\u7F6E\u4E8B\u4EF6\u56DE\u8C03 */\\n  onReset?: () => void;\\n  [key: string]: any;\\n}\\n\\n// \u907F\u514D\u5F15\u8D77\u547D\u540D\u51B2\u7A81\uFF0C\u628Aoject\u7684key\u90FD\u8F6C\u5316\u4E3A\u5C0F\u5199\\nfunction setKeystoLocaleLowerCase(obj: any) {\\n  return obj.map((item: any) => {\\n    return Object.fromEntries(\\n      Object.entries(item).map(([k, v]) => [k.toLowerCase(), v]),\\n    );\\n  });\\n}\\n\\nexport const Filter = ({\\n  filterList,\\n  autoSearch = false,\\n  onSearch,\\n  onReset,\\n  ...props\\n}: FilterProps) => {\\n  const [form] = Form.useForm();\\n  const [list, setList] = useState(setKeystoLocaleLowerCase(filterList));\\n  const [isMore, setIsMore] = useState(true);\\n  const [offsetSpan, setOffsetSpan] = useState(0);\\n\\n  useEffect(() => {\\n    setList(isMore ? list.slice(0, 2) : setKeystoLocaleLowerCase(filterList));\\n    setOffsetSpan(isMore ? 0 : 2 - (list.length % 3));\\n  }, [filterList, isMore, list]);\\n\\n  const lisLen = useMemo(() => {\\n    return list.length;\\n  }, [list.length]);\\n\\n  const span = useMemo(() => {\\n    return lisLen >= 5 ? 4 : (24 - 2.5) / lisLen;\\n  }, [lisLen]);\\n\\n  const onFinish = (values: Record<string, string | number | undefined>) => {\\n    // eslint-disable-next-line @typescript-eslint/no-unused-expressions\\n    onSearch && onSearch(values);\\n  };\\n\\n  const getFormElement = (formtype: string, oItem: any) => {\\n    /** onPressEnter\u4F1A\u81EA\u52A8\u6267\u884C */\\n    let item: any = {};\\n    for (const key in oItem) {\\n      if (oItem.hasOwnProperty(key)) {\\n        if (key !== \\"defaultvalue\\") {\\n          item[key] = oItem[key];\\n        }\\n      }\\n    }\\n    item = {\\n      ...item,\\n      onChange: () => autoSearch && onFinish(form.getFieldsValue()),\\n      onSelect: () => autoSearch && onFinish(form.getFieldsValue()),\\n    };\\n    switch (formtype) {\\n      case \\"input\\":\\n        return <Input allowClear {...item} />;\\n      case \\"inputnumber\\":\\n        return <InputNumber min={0} {...item} />;\\n      case \\"autocomplete\\":\\n        return (\\n          <AutoComplete\\n            allowClear\\n            options={item.options}\\n            filterOption={(inputValue: any, option: any) => {\\n              return (\\n                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==\\n                -1\\n              );\\n            }}\\n            {...item}\\n          />\\n        );\\n      case \\"switch\\":\\n        return <Switch checkedChildren=\\"\u5F00\\" unCheckedChildren=\\"\u5173\\" {...item} />;\\n      case \\"select\\":\\n        const selectlist = item.list || item.selectlist || [];\\n        return (\\n          <Select allowClear {...item}>\\n            {item.render && item.render()}\\n            {!item.render &&\\n              selectlist.map((cl: any) => {\\n                const oName = cl.key || cl.text || cl.name;\\n                return (\\n                  <Option key={cl.id} value={cl.id}>\\n                    {oName}\\n                  </Option>\\n                );\\n              })}\\n          </Select>\\n        );\\n      case \\"treeselect\\":\\n        const treeSelectList = item.list || item.selectlist || [];\\n        return (\\n          <TreeSelect allowClear multiple treeData={treeSelectList} {...item} />\\n        );\\n      case \\"datepicker\\":\\n        return <DatePicker {...item} />;\\n      case \\"rangepicker\\":\\n        return <RangePicker {...item} />;\\n      case \\"timepicker\\":\\n        return <TimePicker {...item} />;\\n      case \\"rangetimepicker\\":\\n        return <TimePicker.RangePicker {...item} />;\\n      case \\"cascader\\":\\n        return <Cascader {...item} />;\\n      default:\\n        return \\"\\";\\n    }\\n  };\\n\\n  return (\\n    <Form\\n      form={form}\\n      name=\\"advanced_search\\"\\n      className=\\"ant-advanced-search-form\\"\\n      onFinish={onFinish}\\n      style={{ textAlign: \\"center\\" }}\\n      {...props}\\n    >\\n      <Row gutter={24}>\\n        {list.map((item: any, i: number) => {\\n          const formtype = (item.formtype || \\"\\").toLowerCase();\\n\\n          if (formtype !== \\"input\\" && item.rules) {\\n            // delete item.rules;\\n            item.rules = null;\\n          }\\n\\n          const itemName = item.name;\\n          const { itemprops } = item;\\n\\n          return (\\n            <Col\\n              span={formtype === \\"switch\\" ? 2.5 : span}\\n              // eslint-disable-next-line react/no-array-index-key\\n              key={item.name + i}\\n              style={{\\n                minWidth: formtype === \\"switch\\" ? \\"auto\\" : \\"200px\\",\\n              }}\\n            >\\n              <Form.Item\\n                name={itemName}\\n                label={item.label}\\n                rules={item.rules ? item.rules : []}\\n                {...itemprops}\\n              >\\n                {getFormElement(formtype, item)}\\n              </Form.Item>\\n            </Col>\\n          );\\n        })}\\n\\n        <Col\\n          md={6}\\n          style={{ minWidth: \\"100px\\", marginBottom: 30 }}\\n          className={styles.marginL15}\\n          offset={offsetSpan * 10}\\n        >\\n          <span onClick={() => setIsMore(!isMore)}>\\n            {isMore ? (\\n              <>\\n                <span>\u5C55\u5F00 </span>\\n                <UpOutlined className={styles.SearchUp} />\\n              </>\\n            ) : (\\n              <>\\n                <span>\u6536\u8D77 </span>\\n                <UpOutlined className={styles.SearchDown} />\\n              </>\\n            )}\\n          </span>\\n          <Button\\n            style={{ margin: \\"0 8px\\" }}\\n            onClick={() => {\\n              form.resetFields();\\n              // eslint-disable-next-line @typescript-eslint/no-unused-expressions\\n              onReset && onReset();\\n            }}\\n          >\\n            \u91CD\u7F6E\\n          </Button>\\n          <Button type=\\"primary\\" htmlType=\\"submit\\">\\n            \u7B5B\u9009\\n          </Button>\\n        </Col>\\n      </Row>\\n    </Form>\\n  );\\n};");
// CONCATENATED MODULE: ./node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./src/Components/BusinessComponent/QueryForm/components/index.less?dumi-raw-code
/* harmony default export */ var QueryForm_componentsdumi_raw_code = (".marginL15 {\\n  align-self: center;\\n  margin-left: 15px;\\n  cursor: pointer;\\n\\n  > span {\\n    color: rgba(24, 144, 255, 1);\\n  }\\n}\\n\\n.SearchDown {\\n  transition: 0.3s;\\n  transform: rotateZ(0deg);\\n  transform-origin: center;\\n}\\n\\n.SearchUp {\\n  transition: 0.3s;\\n  transform: rotateZ(180deg);\\n  transform-origin: center;\\n}");
// CONCATENATED MODULE: ./node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./src/Components/BusinessComponent/QueryForm/constant.ts?dumi-raw-code
/* harmony default export */ var QueryForm_constantdumi_raw_code = ("export default [\\n  {\\n    formType: \\"input\\",\\n    name: \\"name\\",\\n    label: \\"\u6A21\u7CCA\u641C\u7D22\\",\\n    placeholder: \\"\u8BF7\u8F93\u5165\u59D3\u540D/ID/\u624B\u673A\u540E4\u4F4D/\u7AD9\u70B9\u5730\u5740\\",\\n    // rules: [\\n    //   {\\n    //     required: true,\\n    //   },\\n    // ],\\n    itemProps: {\\n      rules: [\\n        {\\n          required: true,\\n        },\\n      ],\\n      initialValue: \\"22\\",\\n    },\\n  },\\n  {\\n    formType: \\"datepicker\\",\\n    name: \\"datepickerItem\\",\\n    label: \\"\u521B\u5EFA\u65E5\u671F\\",\\n    allowClear: true,\\n  },\\n  {\\n    formType: \\"select\\",\\n    name: \\"site\\",\\n    label: \\"\u7AD9\u70B9\\",\\n    defaultValue: null,\\n    placeholder: \\"\u8BF7\u9009\u62E9\u7AD9\u70B9\\",\\n    selectList: [\\n      {\\n        id: 0,\\n        name: \\"\u7AD9\u70B91\\",\\n      },\\n      {\\n        id: 1,\\n        name: \\"\u7AD9\u70B92\\",\\n      },\\n    ],\\n    initialValue: 0,\\n  },\\n  {\\n    formType: \\"treeselect\\",\\n    name: \\"state\\",\\n    label: \\"\u72B6\u6001\\",\\n    defaultValue: null,\\n    placeholder: \\"\u8BF7\u9009\u62E9\u72B6\u6001\\",\\n    fieldNames: {\\n      label: \\"name\\",\\n      value: \\"id\\",\\n      children: \\"children\\",\\n    },\\n    selectlist: [\\n      {\\n        title: \\"Node1\\",\\n        value: \\"0-0\\",\\n        children: [\\n          {\\n            title: \\"Child Node1\\",\\n            value: \\"0-0-1\\",\\n          },\\n          {\\n            title: \\"Child Node2\\",\\n            value: \\"0-0-2\\",\\n          },\\n        ],\\n      },\\n      {\\n        title: \\"Node2\\",\\n        value: \\"0-1\\",\\n      },\\n    ],\\n  },\\n];");
// CONCATENATED MODULE: ./node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./src/Components/BusinessComponent/TransferForm/Class.tsx?dumi-raw-code
/* harmony default export */ var Classdumi_raw_code = ("import TransferClassForm from \\"./components/class\\";\\nimport React, { RefObject } from \\"react\\";\\nimport { Form, Button } from \\"antd\\";\\nimport type { FormInstance } from \\"antd/es/form\\";\\nimport { Card } from \\"antd\\";\\nimport { IHandle } from './components/class/index'\\n\\nexport default class TransferDemo extends React.Component {\\n  TransferRef = React.createRef<IHandle>();\\n  formRef = React.createRef<FormInstance>();\\n  state = {\\n    mockData: [],\\n  };\\n  componentDidMount() {\\n    this.setState({\\n      mockData: Array.from({\\n        length: 20,\\n      }).map((_, i) => ({\\n        key: i.toString(),\\n        title: \`content\${i + 1}\`,\\n        description: \`description of content\${i + 1}\`,\\n      })),\\n    });\\n  }\\n  testData = () => {\\n    this.setState({\\n      mockData: Array.from({\\n        length: 10,\\n      }).map((_, i) => ({\\n        key: i.toString(),\\n        title: \`content\${i + 1}\`,\\n        description: \`description of content\${i + 1}\`,\\n      })),\\n    });\\n  };\\n\\n  transferOkCallBack = () => {\\n    const { getData } = this.TransferRef!.current!;\\n    const ref = this.formRef.current;\\n    console.log(ref!.getFieldValue(\\"test\\"));\\n  };\\n\\n  onFinish = (values: any) => {\\n    console.log(values);\\n  };\\n\\n  render() {\\n    return (\\n      <>\\n        <Card style={{ margin: 24 }}>\\n          <h1>\\n            <button\\n              onClick={() => {\\n                this.TransferRef!.current!.useVisible(true);\\n              }}\\n            >\\n              \u6253\u5F00\u7A7F\u68AD\u6846\\n            </button>\\n          </h1>\\n          <h1>\\n            <button onClick={() => this.testData()}>\u8BBE\u7F6E\u65B0\u7684\u6570\u636E\u6E90</button>\\n          </h1>\\n          <Form ref={this.formRef} onFinish={this.onFinish}>\\n            <Form.Item style={{ display: \\"inline-block\\" }}>\\n              <TransferClassForm\\n                formRef={this.formRef}\\n                originData={this.state.mockData}\\n                TransferRef={this.TransferRef}\\n                transferOkCallBack={() => this.transferOkCallBack()}\\n              />\\n            </Form.Item>\\n            <Button type=\\"primary\\" htmlType=\\"submit\\">\\n              Submit\\n            </Button>\\n          </Form>\\n        </Card>\\n      </>\\n    );\\n  }\\n}");
// CONCATENATED MODULE: ./node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./src/Components/BusinessComponent/TransferForm/components/class/index.tsx?dumi-raw-code
/* harmony default export */ var classdumi_raw_code = ("/* eslint-disable react/jsx-key */\\nimport { Transfer, Checkbox, Modal } from \\"antd\\";\\nimport React, { useState, useImperativeHandle, useRef, useEffect } from \\"react\\";\\nimport styles from \\"../index.less\\";\\nimport { Form, Select } from \\"antd\\";\\nimport type { ModalProps } from \\"antd/es/modal\\";\\nimport type { TransferProps } from \\"antd/es/transfer\\";\\nimport type { FormInstance } from \\"antd/es/form\\";\\nimport { RefObject } from 'React'\\n\\nexport interface Iprops {\\n  /**\u786E\u5B9A\u6309\u94AE\u7684\u56DE\u8C03\u51FD\u6570 */\\n  transferOkCallBack: () => void;\\n  /**\u521D\u59CB\u5316\u6240\u6709\u7684\u6570\u636E\u6E90 */\\n  originData: any[];\\n  /**\u5916\u754C\u4F20\u5165\u7684Antd-form-ref */\\n  formRef: RefObject<FormInstance>;\\n  /**\u540C\u6B65\u53D8\u52A8\u7684select formItem name */\\n  falseSelectItmeName?: string;\\n  /**\u6A21\u6001\u6846\u7684\u5176\u4ED6props */\\n  modalProps?: ModalProps;\\n  /**\u7A7F\u68AD\u6846\u7684\u5176\u4ED6props */\\n  transferProps?: TransferProps<any>;\\n  [props: string]: any;\\n}\\n\\nexport interface IHandle {\\n  getData: () => [number[], number[]]\\n  setData: (arr: any) => void\\n  useVisible: (bool: boolean | ((prevState: boolean) => boolean)) => void\\n}\\n\\n// \u6253\u5E73\u6570\u7EC4\\nconst flattenDeep: any = (arr: any) =>\\n  Array.isArray(arr)\\n    ? arr.reduce((a, b) => [...a, ...flattenDeep(b)], [])\\n    : [arr];\\nconst filterRepeatList = (arr: any) => [...new Set([...arr])];\\n\\n// \u627E\u5230\u6539\u53D8\u9879\u7684\u5168\u90E8\u4FE1\u606F\\nconst findAllMessage = (originArr: any, keyArr: any) => {\\n  const arr: any[] = [];\\n  keyArr.forEach((item: any) => {\\n    arr.push(originArr.filter((ele: any) => ele.key == item));\\n  });\\n  return flattenDeep(arr);\\n};\\n\\nconst TransferForm: React.ForwardRefRenderFunction<IHandle, Iprops> = (props) => {\\n  const [targetKeys, setTargetKeys] = useState<any>([]);\\n  const [selectedKeys, setSelectedKeys] = useState<any>([]);\\n  const [visible, setVisible] = useState<boolean>(false);\\n  const transferBox = useRef<any>(null!);\\n\\n  const {\\n    transferOkCallBack,\\n    originData = [],\\n    formRef,\\n    TransferRef,\\n    modalProps,\\n    transferProps,\\n    falseSelectItmeName = \\"test\\",\\n  } = props;\\n\\n  useEffect(() => {\\n    (document.getElementsByClassName(\\"ant-input\\")[0] as any).placeholder =\\n      \\"\u8BF7\u8F93\u5165\u81EA\u5B9A\u4E49\u5185\u5BB9\\";\\n  }, []);\\n\\n  useEffect(() => {\\n    setTargetKeys([]);\\n    setSelectedKeys([]);\\n    formRef.current!.setFieldsValue({\\n      [falseSelectItmeName]: [],\\n    });\\n  }, [falseSelectItmeName, formRef, originData.length]);\\n\\n  useImperativeHandle(TransferRef, () => ({\\n    getData: () => {\\n      return [targetKeys, originData];\\n    },\\n    setData: (arr: any) => {\\n      setSelectedKeys(arr);\\n    },\\n    useVisible: (bool: boolean | ((prevState: boolean) => boolean)) => {\\n      setVisible(bool);\\n    },\\n  }));\\n\\n  const handleChange = (\\n    newTargetKeys: any[],\\n    direction: string,\\n    moveKeys: any,\\n  ) => {\\n    // \u5220\u9664\u6570\u636E\\n    const newKeys =\\n      direction === \\"right\\"\\n        ? [...targetKeys, moveKeys]\\n        : targetKeys.filter((key: any) => !moveKeys.includes(key));\\n    setTargetKeys([...newKeys]);\\n    setTargetKeys([]);\\n  };\\n\\n  const handleSelectChange = (\\n    sourceSelectedKeys: any[],\\n    targetSelectedKeys: any[],\\n  ) => {\\n    // \u8BBE\u7F6E\u65B0\u7684\u6570\u636E\\n    const selectedKeysArr = filterRepeatList([\\n      ...sourceSelectedKeys,\\n      ...targetSelectedKeys,\\n    ]);\\n    const targetKeysArr = filterRepeatList([\\n      ...targetKeys,\\n      ...sourceSelectedKeys,\\n      ...selectedKeys,\\n    ]);\\n    const formItemArr = filterRepeatList([\\n      ...targetKeys,\\n      ...sourceSelectedKeys,\\n      ...selectedKeys,\\n    ]);\\n    setSelectedKeys([...selectedKeysArr]);\\n    setTargetKeys([...targetKeysArr]);\\n    // \u540C\u6B65\u4E3A\u4E00\u4E2Aselect\u8BBE\u7F6E\u76F8\u540C\u7684\u72B6\u6001 select\u9009\u4E2D\\n    formRef.current!.setFieldsValue({\\n      [falseSelectItmeName]: findAllMessage(originData, formItemArr),\\n    });\\n  };\\n\\n  const handleModalOk = () => {\\n    formRef.current!.setFieldsValue({\\n      [falseSelectItmeName]: findAllMessage(originData, targetKeys),\\n    });\\n    setVisible(false);\\n    // eslint-disable-next-line @typescript-eslint/no-unused-expressions\\n    transferOkCallBack && transferOkCallBack();\\n  };\\n\\n  return (\\n    <>\\n      <Form.Item>\\n        <div className={styles.transferBox} ref={transferBox}>\\n          <Modal\\n            width={1000}\\n            title=\\"\u7A7F\u68AD\u6846\\"\\n            getContainer={transferBox?.current}\\n            visible={visible}\\n            okText=\\"\u786E\u5B9A\\"\\n            cancelText=\\"\u53D6\u6D88\\"\\n            onCancel={() => setVisible(false)}\\n            onOk={() => handleModalOk()}\\n            forceRender={true}\\n            centered={true}\\n            maskClosable={false}\\n            bodyStyle={{ paddingBottom: 0 }}\\n            {...modalProps}\\n          >\\n            <Transfer\\n              listStyle={{ height: 500 }}\\n              style={{ position: \\"relative\\" }}\\n              operationStyle={{\\n                position: \\"absolute\\",\\n                top: 200,\\n                visibility: \\"hidden\\",\\n              }}\\n              showSearch\\n              titles={[\\n                <Checkbox\\n                  checked={false}\\n                  onClick={() =>\\n                    setTargetKeys(originData.map((item: any) => item.key))\\n                  }\\n                />,\\n                <a\\n                  href=\\"#\\"\\n                  onClick={() => {\\n                    setTargetKeys([]);\\n                    setSelectedKeys([]);\\n                  }}\\n                >\\n                  \u6E05\u7A7A\\n                </a>,\\n              ]}\\n              selectAllLabels={[\\n                \\"\u5168\u90E8\\",\\n                <span>\\n                  {\\" \\"}\\n                  \u5DF2\u9009{targetKeys.length ?? \\"--\\"}/{originData.length ?? \\"--\\"}\\n                </span>,\\n              ]}\\n              showSelectAll={false}\\n              targetKeys={targetKeys}\\n              selectedKeys={selectedKeys}\\n              onChange={(a, b, c) => handleChange(a, b, c)}\\n              onSelectChange={(a, b) => handleSelectChange(a, b)}\\n              render={(item) => item.title as string}\\n              oneWay\\n              {...transferProps}\\n              dataSource={originData}\\n            />\\n          </Modal>\\n        </div>\\n      </Form.Item>\\n      <Form.Item\\n        name={falseSelectItmeName}\\n        labelCol={{ span: 0 }}\\n        wrapperCol={{ span: 0 }}\\n      >\\n        <Select\\n          mode=\\"multiple\\"\\n          style={{ width: \\"0%\\", display: \\"none\\" }}\\n          labelInValue\\n          options={\\n            [\\n              // { label: \\"t\\", value: 1 },\\n              // { label: \\"a\\", value: 2 }\\n            ]\\n          }\\n        />\\n      </Form.Item>\\n    </>\\n  );\\n};\\n\\nexport default TransferForm;");
// CONCATENATED MODULE: ./node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./src/Components/BusinessComponent/TransferForm/components/index.less?dumi-raw-code
/* harmony default export */ var TransferForm_componentsdumi_raw_code = (".transferBox {\\n  :global {\\n    .ant-transfer {\\n      .ant-transfer-list:first-child {\\n        width: 640px;\\n        box-shadow: inset 0px 0px 0px 10px #f0f2f5;\\n\\n        .ant-transfer-list-header {\\n          position: absolute;\\n          top: 58px;\\n          margin: 0px 20px;\\n          width: 480px;\\n          height: 60px;\\n          border-bottom-color: transparent;\\n\\n          .ant-transfer-list-header-title {\\n            padding-right: 8px;\\n          }\\n\\n          .ant-transfer-list-header-selected {\\n            flex: 0 0 128px;\\n          }\\n\\n          .ant-transfer-list-header-dropdown {\\n            display: none;\\n          }\\n\\n          .ant-transfer-list-checkbox {\\n            flex: 0 0 20px;\\n          }\\n        }\\n\\n        .ant-transfer-list-body {\\n          background: #f0f2f5;\\n\\n          .ant-transfer-list-content {\\n            margin-top: 50px;\\n            padding: 20px;\\n            padding-top: 0;\\n            width: 520px;\\n            height: 200px;\\n            border-top: 1px solid #ccc;\\n            border-top-color: transparent;\\n\\n            .ant-transfer-list-content-item {\\n              flex-direction: row-reverse;\\n            }\\n          }\\n        }\\n\\n        .ant-transfer-list-body-search-wrapper {\\n          padding: 12px 21px;\\n          background: #f0f2f5;\\n          text-align: center;\\n\\n          .ant-input-affix-wrapper {\\n            width: 480px;\\n            border-color: transparent;\\n          }\\n        }\\n      }\\n\\n      .ant-transfer-list:last-child {\\n        width: 540px;\\n\\n        .ant-transfer-list-body {\\n          .ant-transfer-list-body-search-wrapper {\\n            display: none;\\n          }\\n        }\\n\\n        .ant-transfer-list-content-item-remove {\\n          color: #1348a2;\\n        }\\n      }\\n\\n      .ant-transfer-list-content-item {\\n        background-color: #fff !important;\\n      }\\n    }\\n  }\\n}");
// CONCATENATED MODULE: ./node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./src/Components/BusinessComponent/TransferForm/Hook.tsx?dumi-raw-code
/* harmony default export */ var Hookdumi_raw_code = ("import TransferHookForm from \\"./components/hook\\";\\nimport React, { useRef, useState, useEffect } from \\"react\\";\\nimport { Form, Button } from \\"antd\\";\\nimport { Card } from \\"antd\\";\\n\\nconst TransferDemo = () => {\\n  // const TransferRef = useRef(null)\\n  const [form] = Form.useForm();\\n  const [mockData, setMockData] = useState<any>([]);\\n\\n  const TransferRef = useRef<React.ElementRef<typeof TransferHookForm>>(null!);\\n\\n  useEffect(() => {\\n    const initData = Array.from({\\n      length: 20,\\n    }).map((_, i) => ({\\n      key: i.toString(),\\n      title: \`content\${i + 1}\`,\\n      description: \`description of content\${i + 1}\`,\\n    }));\\n    setMockData(initData);\\n\\n    // init data need asynchronous for waiting formRef init\\n    setTimeout(function () {\\n      form.setFieldsValue({\\n        test: [{ lable: \\"sxx\\", value: 1, key: 1 }],\\n      });\\n      TransferRef.current.setData([\\"1\\", \\"2\\"]);\\n    }, 0);\\n  }, [form]);\\n\\n  const testData = () => {\\n    const initData = Array.from({\\n      length: 10,\\n    }).map((_, i) => ({\\n      key: i.toString(),\\n      title: \`content\${i + 1}\`,\\n      description: \`description of content\${i + 1}\`,\\n    }));\\n    setMockData(initData);\\n  };\\n\\n  const transferOkCallBack = () => {\\n    // eslint-disable-next-line @typescript-eslint/no-unused-vars\\n    const { getData } = TransferRef.current;\\n    console.log(form?.getFieldValue(\\"test\\"));\\n  };\\n\\n  const onFinish = (values: any) => {\\n    console.log(values);\\n  };\\n\\n  return (\\n    <>\\n      <Card style={{ margin: 24 }}>\\n        <h1>\\n          <button\\n            onClick={() => {\\n              TransferRef.current.useVisible(true);\\n            }}\\n          >\\n            \u6253\u5F00\u7A7F\u68AD\u6846\\n          </button>\\n        </h1>\\n        <h1>\\n          <button onClick={() => testData()}>\u8BBE\u7F6E\u65B0\u7684\u6D4B\u8BD5\u6570\u636E</button>\\n        </h1>\\n        <Form form={form} onFinish={onFinish}>\\n          <Form.Item style={{ display: \\"inline-block\\" }}>\\n            <TransferHookForm\\n              formRef={form}\\n              originData={mockData}\\n              ref={TransferRef}\\n              transferOkCallBack={() => transferOkCallBack()}\\n            />\\n          </Form.Item>\\n          <Button type=\\"primary\\" htmlType=\\"submit\\">\\n            Submit\\n          </Button>\\n        </Form>\\n      </Card>\\n    </>\\n  );\\n};\\n\\nexport default TransferDemo;");
// CONCATENATED MODULE: ./node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./src/Components/BusinessComponent/TransferForm/components/hook/index.tsx?dumi-raw-code
/* harmony default export */ var hookdumi_raw_code = ("/* eslint-disable react/jsx-key */\\nimport { Transfer, Checkbox, Modal } from \\"antd\\";\\nimport React, {\\n  useState,\\n  useImperativeHandle,\\n  useRef,\\n  useEffect,\\n  forwardRef,\\n  Ref,\\n} from \\"react\\";\\nimport styles from \\"../index.less\\";\\nimport { Form, Select } from \\"antd\\";\\nimport type { FormInstance } from \\"antd/es/form\\";\\nimport type { ModalProps } from \\"antd/es/modal\\";\\nimport type { TransferProps } from \\"antd/es/transfer\\";\\n\\nexport interface Iprops {\\n  /**\u786E\u5B9A\u6309\u94AE\u7684\u56DE\u8C03\u51FD\u6570 */\\n  transferOkCallBack: () => void;\\n  /**\u521D\u59CB\u5316\u6240\u6709\u7684\u6570\u636E\u6E90 */\\n  originData: any[];\\n  /**\u5916\u754C\u4F20\u5165\u7684Antd-form-ref */\\n  formRef: FormInstance;\\n  /**\u540C\u6B65\u53D8\u52A8\u7684select formItem name */\\n  falseSelectItmeName?: string;\\n  /**\u6A21\u6001\u6846\u7684\u5176\u4ED6props */\\n  modalProps?: ModalProps;\\n  /**\u7A7F\u68AD\u6846\u7684\u5176\u4ED6props */\\n  transferProps?: TransferProps<any>;\\n  [props: string]: any;\\n}\\n\\nexport interface IHandle {\\n  getData: () => [number[], number[]]\\n  setData: (arr: any) => void\\n  useVisible: (bool: boolean | ((prevState: boolean) => boolean)) => void\\n}\\n\\n// \u6253\u5E73\u6570\u7EC4\\nconst flattenDeep: any = (arr: any) =>\\n  Array.isArray(arr)\\n    ? arr.reduce((a, b) => [...a, ...flattenDeep(b)], [])\\n    : [arr];\\nconst filterRepeatList = (arr: any) => [...new Set([...arr])];\\n// \u627E\u5230\u6539\u53D8\u9879\u7684\u5168\u90E8\u4FE1\u606F\\nconst findAllMessage = (originArr: any, keyArr: any) => {\\n  const arr: any[] = [];\\n  keyArr.forEach((item: any) => {\\n    arr.push(originArr.filter((ele: any) => ele.key == item));\\n  });\\n  return flattenDeep(arr);\\n};\\n\\n\\nconst TransferForm: React.ForwardRefRenderFunction<IHandle, Iprops> = (props, TransferRef: any) => {\\n  const [targetKeys, setTargetKeys] = useState<any>([]);\\n  const [selectedKeys, setSelectedKeys] = useState<any>([]);\\n  const [visible, setVisible] = useState<boolean>(false);\\n  const transferBox = useRef<any>(null!);\\n\\n  const {\\n    transferOkCallBack,\\n    originData = [],\\n    formRef,\\n    modalProps,\\n    transferProps,\\n    falseSelectItmeName = \\"test\\",\\n  } = props;\\n\\n  useEffect(() => {\\n    (document.getElementsByClassName(\\"ant-input\\")[0] as any).placeholder =\\n      \\"\u8BF7\u8F93\u5165\u81EA\u5B9A\u4E49\u5185\u5BB9\\";\\n  }, []);\\n\\n  // \u5F53\u91CD\u65B0\u8BBE\u7F6E\u6570\u636E\u6E90 \u60C5\u51B5\u6240\u6709\u6570\u636E\\n  useEffect(() => {\\n    setTargetKeys([]);\\n    setSelectedKeys([]);\\n    formRef.setFieldsValue({\\n      [falseSelectItmeName]: [],\\n    });\\n  }, [falseSelectItmeName, formRef, originData.length]);\\n\\n  // \u66B4\u9732\u7ED9ref\u7684\u63A5\u53E3\\n  useImperativeHandle(TransferRef, () => ({\\n    getData: () => {\\n      return [targetKeys, originData];\\n    },\\n    setData: (arr: any) => {\\n      setTargetKeys(arr);\\n    },\\n    useVisible: (bool: boolean) => {\\n      setVisible(bool);\\n    },\\n  }));\\n\\n  const handleChange = (\\n    newTargetKeys: any[],\\n    direction: string,\\n    moveKeys: any,\\n  ) => {\\n    // \u5220\u9664\u6570\u636E\\n    const newKeys =\\n      direction === \\"right\\"\\n        ? [...targetKeys, moveKeys]\\n        : targetKeys.filter((key: any) => !moveKeys.includes(key));\\n    setTargetKeys([...newKeys]);\\n    setSelectedKeys([]);\\n  };\\n\\n  const handleSelectChange = (\\n    sourceSelectedKeys: any[],\\n    targetSelectedKeys: any[],\\n  ) => {\\n    // \u8BBE\u7F6E\u65B0\u7684\u6570\u636E\\n    const selectedKeysArr = filterRepeatList([\\n      ...sourceSelectedKeys,\\n      ...targetSelectedKeys,\\n    ]);\\n    const targetKeysArr = filterRepeatList([\\n      ...targetKeys,\\n      ...sourceSelectedKeys,\\n      ...selectedKeys,\\n    ]);\\n    const formItemArr = filterRepeatList([\\n      ...targetKeys,\\n      ...sourceSelectedKeys,\\n      ...selectedKeys,\\n    ]);\\n    setSelectedKeys([...selectedKeysArr]);\\n    setTargetKeys([...targetKeysArr]);\\n    // \u540C\u6B65\u4E3A\u4E00\u4E2Aselect\u8BBE\u7F6E\u76F8\u540C\u7684\u72B6\u6001 select\u9009\u4E2D\\n    formRef.setFieldsValue({\\n      [falseSelectItmeName]: findAllMessage(originData, formItemArr),\\n    });\\n  };\\n\\n  const handleModalOk = () => {\\n    formRef.setFieldsValue({\\n      [falseSelectItmeName]: findAllMessage(originData, targetKeys),\\n    });\\n    setVisible(false);\\n    // eslint-disable-next-line @typescript-eslint/no-unused-expressions\\n    transferOkCallBack && transferOkCallBack();\\n  };\\n\\n  return (\\n    <>\\n      <Form.Item>\\n        <div className={styles.transferBox} ref={transferBox}>\\n          <Modal\\n            width={1000}\\n            title=\\"\u7A7F\u68AD\u6846\\"\\n            getContainer={transferBox?.current}\\n            visible={visible}\\n            okText=\\"\u786E\u5B9A\\"\\n            cancelText=\\"\u53D6\u6D88\\"\\n            onCancel={() => setVisible(false)}\\n            onOk={() => handleModalOk()}\\n            forceRender={true}\\n            centered={true}\\n            maskClosable={false}\\n            bodyStyle={{ paddingBottom: 0 }}\\n            {...modalProps}\\n          >\\n            <Transfer\\n              listStyle={{ height: 500 }}\\n              style={{ position: \\"relative\\" }}\\n              operationStyle={{\\n                position: \\"absolute\\",\\n                top: 200,\\n                visibility: \\"hidden\\",\\n              }}\\n              showSearch\\n              titles={[\\n                <Checkbox\\n                  checked={false}\\n                  onClick={() =>\\n                    setTargetKeys(originData.map((item: any) => item.key))\\n                  }\\n                />,\\n                <a\\n                  href=\\"#\\"\\n                  onClick={() => {\\n                    setTargetKeys([]);\\n                    setSelectedKeys([]);\\n                  }}\\n                >\\n                  \u6E05\u7A7A\\n                </a>,\\n              ]}\\n              selectAllLabels={[\\n                \\"\u5168\u90E8\\",\\n                <span>\\n                  {\\" \\"}\\n                  \u5DF2\u9009{targetKeys.length ?? \\"--\\"}/{originData.length ?? \\"--\\"}\\n                </span>,\\n              ]}\\n              showSelectAll={false}\\n              targetKeys={targetKeys}\\n              selectedKeys={selectedKeys}\\n              onChange={(a, b, c) => handleChange(a, b, c)}\\n              onSelectChange={(a, b) => handleSelectChange(a, b)}\\n              render={(item) => item.title as string}\\n              oneWay\\n              {...transferProps}\\n              dataSource={originData}\\n            />\\n          </Modal>\\n        </div>\\n      </Form.Item>\\n      <Form.Item\\n        name={falseSelectItmeName}\\n        labelCol={{ span: 0 }}\\n        wrapperCol={{ span: 0 }}\\n      >\\n        <Select\\n          mode=\\"multiple\\"\\n          style={{ width: \\"0%\\", display: \\"none\\" }}\\n          labelInValue\\n          options={[\\n            { label: \\"t\\", value: 1 },\\n            { label: \\"a\\", value: 2 },\\n          ]}\\n        />\\n      </Form.Item>\\n    </>\\n  );\\n};\\n\\nexport default forwardRef(TransferForm);");
// CONCATENATED MODULE: ./node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./src/Components/BusinessComponent/TransferForm/Hook_multiple.tsx?dumi-raw-code
/* harmony default export */ var Hook_multipledumi_raw_code = ("import TransferHookForm from \\"./components/hook\\";\\nimport React, { useRef, useState, useEffect } from \\"react\\";\\nimport { Form, Button } from \\"antd\\";\\nimport { Card } from \\"antd\\";\\n\\nconst TransferDemo = () => {\\n  // const TransferRef = useRef(null)\\n  const [form] = Form.useForm();\\n  const [mockData, setMockData] = useState<any>([]);\\n  const TransferRef = useRef<React.ElementRef<typeof TransferHookForm>[]>([]);\\n\\n  useEffect(() => {\\n    const initData = Array.from({\\n      length: 20,\\n    }).map((_, i) => ({\\n      key: i.toString(),\\n      title: \`content\${i + 1}\`,\\n      description: \`description of content\${i + 1}\`,\\n    }));\\n    setMockData(initData);\\n  }, []);\\n\\n  const testData = () => {\\n    const initData = Array.from({\\n      length: 10,\\n    }).map((_, i) => ({\\n      key: i.toString(),\\n      title: \`content\${i + 1}\`,\\n      description: \`description of content\${i + 1}\`,\\n    }));\\n    setMockData(initData);\\n  };\\n\\n  const transferOkCallBack = () => {\\n    // eslint-disable-next-line @typescript-eslint/no-unused-vars\\n    const { getData } = TransferRef.current[0];\\n    console.log(form?.getFieldValue(\\"test\\"));\\n  };\\n\\n  const onFinish = (values: any) => {\\n    console.log(values);\\n  };\\n\\n  return (\\n    <>\\n      <Card style={{ margin: 24 }}>\\n        <h1>\\n          <button\\n            onClick={() => {\\n              TransferRef.current[0].useVisible(true);\\n            }}\\n          >\\n            \u6253\u5F00\u7A7F\u68AD\u68461\\n          </button>\\n        </h1>\\n        <h1>\\n          <button\\n            onClick={() => {\\n              TransferRef.current[1].useVisible(true);\\n            }}\\n          >\\n            \u6253\u5F00\u7A7F\u68AD\u68462\\n          </button>\\n        </h1>\\n        <h1>\\n          <button onClick={() => testData()}>\u4E24\u4E2A\u90FD\u8BBE\u7F6E\u65B0\u7684\u6D4B\u8BD5\u6570\u636E</button>\\n        </h1>\\n        <h1>\u53EF\u904D\u5386\u751F\u6210\u65E0\u9650\u4E2A</h1>\\n        <Form form={form} onFinish={onFinish}>\\n          <Form.Item style={{ display: \\"inline-block\\" }}>\\n            <TransferHookForm\\n              formRef={form}\\n              originData={mockData}\\n              ref={(el) => (TransferRef.current[0] = el!)}\\n              transferOkCallBack={() => transferOkCallBack()}\\n            />\\n          </Form.Item>\\n          <Form.Item style={{ display: \\"inline-block\\" }}>\\n            <TransferHookForm\\n              formRef={form}\\n              originData={mockData}\\n              ref={(el) => (TransferRef.current[1] = el!)}\\n              transferOkCallBack={() => transferOkCallBack()}\\n              falseSelectItmeName=\\"asasd\\"\\n            />\\n          </Form.Item>\\n          <Button type=\\"primary\\" htmlType=\\"submit\\">\\n            Submit\\n          </Button>\\n        </Form>\\n      </Card>\\n    </>\\n  );\\n};\\n\\nexport default TransferDemo;");
// CONCATENATED MODULE: ./node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./src/Components/File/FileExportExcel/index.tsx?dumi-raw-code
/* harmony default export */ var FileExportExceldumi_raw_code = ("import { Button, Space, Card, Table } from \\"antd\\";\\nimport React, { useEffect, useState } from \\"react\\";\\nimport type { ColumnsType } from \\"antd/lib/table/interface\\";\\nimport ExcelJs from 'exceljs/dist/exceljs';\\n\\nimport {\\n  generateHeaders,\\n  saveWorkbook,\\n  downloadExcel,\\n  downloadFiles2ZipWithFolder,\\n  downloadFiles2Zip,\\n} from \\"./utils\\";\\n\\ninterface SimpleDemoProps { }\\n\\ninterface StudentInfo {\\n  id: number;\\n  name: string;\\n  age: number;\\n  gender: string;\\n}\\n\\nconst columns: ColumnsType<any> = [\\n  {\\n    width: 50,\\n    dataIndex: \\"id\\",\\n    key: \\"id\\",\\n    title: \\"ID\\",\\n  },\\n  {\\n    width: 100,\\n    dataIndex: \\"name\\",\\n    key: \\"name\\",\\n    title: \\"\u59D3\u540D\\",\\n  },\\n  {\\n    width: 50,\\n    dataIndex: \\"age\\",\\n    key: \\"age\\",\\n    title: \\"\u5E74\u9F84\\",\\n  },\\n  {\\n    width: 80,\\n    dataIndex: \\"gender\\",\\n    key: \\"gender\\",\\n    title: \\"\u6027\u522B\\",\\n  },\\n];\\n\\nexport default () => {\\n  const [list, setList] = useState<StudentInfo[]>([]);\\n\\n  useEffect(() => {\\n    generateData();\\n  }, []);\\n\\n  function generateData() {\\n    const arr: StudentInfo[] = [];\\n    for (let i = 0; i < 10; i++) {\\n      arr.push({\\n        id: i,\\n        name: \`\u5C0F\u660E\${i}\u53F7\`,\\n        age: i,\\n        gender: i % 2 === 0 ? \\"\u7537\\" : \\"\u5973\\",\\n      });\\n    }\\n    setList(arr);\\n  }\\n\\n  function onExportBasicExcel() {\\n    // \u521B\u5EFA\u5DE5\u4F5C\u7C3F\\n    const workbook = new ExcelJs.Workbook();\\n    // \u6DFB\u52A0sheet\\n    const worksheet = workbook.addWorksheet(\\"demo sheet\\");\\n    // \u8BBE\u7F6E sheet \u7684\u9ED8\u8BA4\u884C\u9AD8\\n    worksheet.properties.defaultRowHeight = 20;\\n    // \u8BBE\u7F6E\u5217\\n    worksheet.columns = generateHeaders(columns);\\n    // \u6DFB\u52A0\u884C\\n    worksheet.addRows(list);\\n    // \u5BFC\u51FAexcel\\n    saveWorkbook(workbook, \\"simple-demo.xlsx\\");\\n  }\\n\\n  function onExportBasicExcelWithStyle() {\\n    // \u521B\u5EFA\u5DE5\u4F5C\u7C3F\\n    const workbook = new ExcelJs.Workbook();\\n    // \u6DFB\u52A0sheet\\n    const worksheet = workbook.addWorksheet(\\"demo sheet\\");\\n    // \u8BBE\u7F6E sheet \u7684\u9ED8\u8BA4\u884C\u9AD8\\n    worksheet.properties.defaultRowHeight = 20;\\n    // \u8BBE\u7F6E\u5217\\n    worksheet.columns = generateHeaders(columns);\\n    // \u7ED9\u8868\u5934\u6DFB\u52A0\u80CC\u666F\u8272\u3002\u56E0\u4E3A\u8868\u5934\u662F\u7B2C\u4E00\u884C\uFF0C\u53EF\u4EE5\u901A\u8FC7 getRow(1) \u6765\u83B7\u53D6\u8868\u5934\u8FD9\u4E00\u884C\\n    const headerRow = worksheet.getRow(1);\\n    // \u76F4\u63A5\u7ED9\u8FD9\u4E00\u884C\u8BBE\u7F6E\u80CC\u666F\u8272\\n    // headerRow.fill = {\\n    //   type: 'pattern',\\n    //   pattern: 'solid',\\n    //   fgColor: {argb: 'dff8ff'},\\n    // }\\n    // \u901A\u8FC7 cell \u8BBE\u7F6E\u6837\u5F0F\uFF0C\u66F4\u7CBE\u51C6\\n    headerRow.eachCell((cell, colNum) => {\\n      // \u8BBE\u7F6E\u80CC\u666F\u8272\\n      cell.fill = {\\n        type: \\"pattern\\",\\n        pattern: \\"solid\\",\\n        fgColor: { argb: \\"dff8ff\\" },\\n      };\\n      // \u8BBE\u7F6E\u5B57\u4F53\\n      cell.font = {\\n        bold: true,\\n        italic: true,\\n        size: 12,\\n        name: \\"\u5FAE\u8F6F\u96C5\u9ED1\\",\\n        color: { argb: \\"ff0000\\" },\\n      };\\n      // \u8BBE\u7F6E\u5BF9\u9F50\u65B9\u5F0F\\n      cell.alignment = {\\n        vertical: \\"middle\\",\\n        horizontal: \\"left\\",\\n        wrapText: false,\\n      };\\n    });\\n    // \u6DFB\u52A0\u884C\\n    const rows = worksheet.addRows(list);\\n    // \u8BBE\u7F6E\u6BCF\u884C\u7684\u6837\u5F0F\\n    rows?.forEach((row) => {\\n      // \u8BBE\u7F6E\u5B57\u4F53\\n      row.font = {\\n        size: 11,\\n        name: \\"\u5FAE\u8F6F\u96C5\u9ED1\\",\\n      };\\n      // \u8BBE\u7F6E\u5BF9\u9F50\u65B9\u5F0F\\n      row.alignment = {\\n        vertical: \\"middle\\",\\n        horizontal: \\"left\\",\\n        wrapText: false,\\n      };\\n    });\\n    // \u5BFC\u51FAexcel\\n    saveWorkbook(workbook, \\"simple-demo.xlsx\\");\\n  }\\n\\n  function onExportExcel() {\\n    downloadExcel({\\n      filename: \\"test\\",\\n      sheets: [\\n        {\\n          sheetName: \\"test\\",\\n          columns: columns,\\n          dataSource: list,\\n        },\\n      ],\\n    });\\n  }\\n\\n  function onExportZip() {\\n    downloadFiles2Zip({\\n      zipName: \\"\u538B\u7F29\u5305\\",\\n      files: [\\n        {\\n          filename: \\"test\\",\\n          sheets: [\\n            {\\n              sheetName: \\"test\\",\\n              columns: columns,\\n              dataSource: list,\\n            },\\n            {\\n              sheetName: \\"test2\\",\\n              columns: columns,\\n              dataSource: list,\\n            },\\n          ],\\n        },\\n        {\\n          filename: \\"test2\\",\\n          sheets: [\\n            {\\n              sheetName: \\"test\\",\\n              columns: columns,\\n              dataSource: list,\\n            },\\n          ],\\n        },\\n        {\\n          filename: \\"test3\\",\\n          sheets: [\\n            {\\n              sheetName: \\"test\\",\\n              columns: columns,\\n              dataSource: list,\\n            },\\n          ],\\n        },\\n      ],\\n    });\\n  }\\n\\n  function onExportFolderZip() {\\n    downloadFiles2ZipWithFolder({\\n      zipName: \\"\u538B\u7F29\u5305\\",\\n      folders: [\\n        {\\n          folderName: \\"\u6587\u4EF6\u59391\\",\\n          files: [\\n            {\\n              filename: \\"test\\",\\n              sheets: [\\n                {\\n                  sheetName: \\"test\\",\\n                  columns: columns,\\n                  dataSource: list,\\n                },\\n              ],\\n            },\\n            {\\n              filename: \\"test2\\",\\n              sheets: [\\n                {\\n                  sheetName: \\"test\\",\\n                  columns: columns,\\n                  dataSource: list,\\n                },\\n              ],\\n            },\\n          ],\\n        },\\n        {\\n          folderName: \\"\u6587\u4EF6\u59392\\",\\n          files: [\\n            {\\n              filename: \\"test\\",\\n              sheets: [\\n                {\\n                  sheetName: \\"test\\",\\n                  columns: columns,\\n                  dataSource: list,\\n                },\\n              ],\\n            },\\n            {\\n              filename: \\"test2\\",\\n              sheets: [\\n                {\\n                  sheetName: \\"test\\",\\n                  columns: columns,\\n                  dataSource: list,\\n                },\\n              ],\\n            },\\n          ],\\n        },\\n        {\\n          folderName: \\"\u6587\u4EF6\u59392/\u6587\u4EF6\u59392-1\\",\\n          files: [\\n            {\\n              filename: \\"test\\",\\n              sheets: [\\n                {\\n                  sheetName: \\"test\\",\\n                  columns: columns,\\n                  dataSource: list,\\n                },\\n              ],\\n            },\\n            {\\n              filename: \\"test2\\",\\n              sheets: [\\n                {\\n                  sheetName: \\"test\\",\\n                  columns: columns,\\n                  dataSource: list,\\n                },\\n              ],\\n            },\\n          ],\\n        },\\n        {\\n          folderName: \\"\u6587\u4EF6\u59392/\u6587\u4EF6\u59392-1/\u6587\u4EF6\u59392-1-1\\",\\n          files: [\\n            {\\n              filename: \\"test\\",\\n              sheets: [\\n                {\\n                  sheetName: \\"test\\",\\n                  columns: columns,\\n                  dataSource: list,\\n                },\\n              ],\\n            },\\n            {\\n              filename: \\"test2\\",\\n              sheets: [\\n                {\\n                  sheetName: \\"test\\",\\n                  columns: columns,\\n                  dataSource: list,\\n                },\\n              ],\\n            },\\n          ],\\n        },\\n        {\\n          folderName: \\"\\",\\n          files: [\\n            {\\n              filename: \\"test\\",\\n              sheets: [\\n                {\\n                  sheetName: \\"test\\",\\n                  columns: columns,\\n                  dataSource: list,\\n                },\\n                {\\n                  sheetName: \\"test2\\",\\n                  columns: columns,\\n                  dataSource: list,\\n                },\\n              ],\\n            },\\n            {\\n              filename: \\"test2\\",\\n              sheets: [\\n                {\\n                  sheetName: \\"test\\",\\n                  columns: columns,\\n                  dataSource: list,\\n                },\\n              ],\\n            },\\n          ],\\n        },\\n      ],\\n    });\\n  }\\n\\n  return (\\n    <>\\n      <Card style={{ margin: 24 }}>\\n        <Space align=\\"center\\" direction=\\"horizontal\\">\\n          <Button type={\\"primary\\"} onClick={onExportBasicExcel}>\\n            \u5BFC\u51FAexcel\\n          </Button>\\n          <Button\\n            type={\\"primary\\"}\\n            onClick={onExportBasicExcelWithStyle}\\n          >\\n            \u5BFC\u51FA\u5E26\u6837\u5F0Fexcel\\n          </Button>\\n          <Button type={\\"primary\\"} onClick={onExportExcel}>\\n            \u5C01\u88C5\u65B9\u6CD5\u5BFC\u51FAexcel\\n          </Button>\\n          <Button type={\\"primary\\"} onClick={onExportZip}>\\n            \u5BFC\u51FAzip\\n          </Button>\\n          <Button type={\\"primary\\"} onClick={onExportFolderZip}>\\n            \u5BFC\u51FA\u5206\u6587\u4EF6\u5939zip\\n          </Button>\\n        </Space>\\n        <Table columns={columns} dataSource={list} />\\n      </Card>\\n    </>\\n  );\\n};");
// CONCATENATED MODULE: ./node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./src/Components/File/FileExportExcel/utils.ts?dumi-raw-code
/* harmony default export */ var FileExportExcel_utilsdumi_raw_code = ("import type { ColumnType } from \\"antd/es/table/interface\\";\\nimport { saveAs } from \\"file-saver\\";\\nimport ExcelJs from 'exceljs/dist/exceljs';\\nimport type { Workbook, Worksheet, Row, Cell } from \\"exceljs\\";\\nimport JsZip from \\"jszip\\";\\n\\nexport interface IDownloadFiles2Zip {\\n  // \u538B\u7F29\u5305\u7684\u6587\u4EF6\u540D\\n  zipName: string;\\n  files: IDownloadExcel[];\\n}\\n\\nexport interface IDownloadFiles2ZipWithFolder {\\n  zipName: string;\\n  folders: IFolder[];\\n}\\n\\nexport interface IFolder {\\n  folderName: string;\\n  files: IDownloadExcel[];\\n}\\n\\nexport interface IDownloadExcel {\\n  filename: string;\\n  sheets: ISheet[];\\n}\\n\\nexport interface ISheet {\\n  // sheet \u7684\u540D\u5B57\\n  sheetName: string;\\n  // \u8FD9\u4E2A sheet \u4E2D\u8868\u683C\u7684 column\uFF0C\u7C7B\u578B\u540C antd \u7684 column\\n  columns: ColumnType<any>[];\\n  // \u8868\u683C\u7684\u6570\u636E\\n  dataSource: any[];\\n}\\n\\nexport interface ITableHeader {\\n  header: string;\\n  // \u7528\u4E8E\u6570\u636E\u5339\u914D\u7684 key\\n  key: string;\\n  // \u5217\u5BBD\\n  width: number;\\n  // \u7236\u7EA7\u7684 key\\n  parentKey?: string;\\n  children?: ITableHeader[];\\n}\\n\\nexport interface IStyleAttr {\\n  color?: string;\\n  fontSize?: number;\\n  horizontal?:\\n  | \\"fill\\"\\n  | \\"distributed\\"\\n  | \\"justify\\"\\n  | \\"center\\"\\n  | \\"left\\"\\n  | \\"right\\"\\n  | \\"centerContinuous\\"\\n  | undefined;\\n  bold?: boolean;\\n}\\n\\n// \u9ED8\u8BA4\u7684\u5217\u5BBD\\nexport const DEFAULT_COLUMN_WIDTH = 20;\\n// \u9ED8\u8BA4\u884C\u9AD8\\nexport const DEFAULT_ROW_HEIGHT = 20;\\n\\n/**\\n * \u4E0B\u8F7D\u5BFC\u51FA\u7B80\u5355\u7684\u8868\u683C\\n * @param params\\n */\\nexport function downloadExcel(params: IDownloadExcel) {\\n  console.log({ params });\\n  // \u521B\u5EFA\u5DE5\u4F5C\u7C3F\\n  const workbook = new ExcelJs.Workbook();\\n  params?.sheets?.forEach((sheet) => handleEachSheet(workbook, sheet));\\n  saveWorkbook(workbook, \`\${params.filename}.xlsx\`);\\n}\\n\\n/**\\n * \u5BFC\u51FA\u591A\u4E2A\u6587\u4EF6\u4E3Azip\u538B\u7F29\u5305\\n */\\nexport async function downloadFiles2Zip(params: IDownloadFiles2Zip) {\\n  const zip = new JsZip();\\n  // \u5F85\u6BCF\u4E2A\u6587\u4EF6\u90FD\u5199\u5165\u5B8C\u4E4B\u540E\u518D\u751F\u6210 zip \u6587\u4EF6\\n  const promises = params?.files?.map(\\n    async (param) => await handleEachFile(param, zip, \\"\\"),\\n  );\\n  await Promise.all(promises);\\n  zip.generateAsync({ type: \\"blob\\" }).then((blob) => {\\n    saveAs(blob, \`\${params.zipName}.zip\`);\\n  });\\n}\\n\\n/**\\n * \u5BFC\u51FA\u652F\u6301\u591A\u7EA7\u6587\u4EF6\u5939\u7684\u538B\u7F29\u5305\\n * @param params\\n */\\nexport async function downloadFiles2ZipWithFolder(\\n  params: IDownloadFiles2ZipWithFolder,\\n) {\\n  const zip = new JsZip();\\n  const outPromises = params?.folders?.map(\\n    async (folder) => await handleFolder(zip, folder),\\n  );\\n  await Promise.all(outPromises);\\n  zip.generateAsync({ type: \\"blob\\" }).then((blob) => {\\n    saveAs(blob, \`\${params.zipName}.zip\`);\\n  });\\n}\\n\\nasync function handleFolder(zip: JsZip, folder: IFolder) {\\n  console.log({ folder });\\n  const folderPromises: Promise<any>[] = [];\\n  const promises = folder?.files?.map(\\n    async (param) => await handleEachFile(param, zip, folder.folderName),\\n  );\\n  await Promise.all([...promises, ...folderPromises]);\\n}\\n\\nasync function handleEachFile(\\n  param: IDownloadExcel,\\n  zip: JsZip,\\n  folderName: string,\\n) {\\n  // \u521B\u5EFA\u5DE5\u4F5C\u7C3F\\n  const workbook = new ExcelJs.Workbook();\\n  param?.sheets?.forEach((sheet) => handleEachSheet(workbook, sheet));\\n  // \u751F\u6210 blob\\n  const data = await workbook.xlsx.writeBuffer();\\n  const blob = new Blob([data], { type: \\"\\" });\\n  if (folderName) {\\n    zip.folder(folderName)?.file(\`\${param.filename}.xlsx\`, blob);\\n  } else {\\n    // \u5199\u5165 zip \u4E2D\u4E00\u4E2A\u6587\u4EF6\\n    zip.file(\`\${param.filename}.xlsx\`, blob);\\n  }\\n}\\n\\nfunction handleEachSheet(workbook: Workbook, sheet: ISheet) {\\n  // \u6DFB\u52A0sheet\\n  const worksheet = workbook.addWorksheet(sheet.sheetName);\\n  // \u8BBE\u7F6E sheet \u7684\u9ED8\u8BA4\u884C\u9AD8\u3002\u8BBE\u7F6E\u9ED8\u8BA4\u884C\u9AD8\u8DDF\u81EA\u52A8\u6491\u5F00\u5355\u5143\u683C\u51B2\u7A81\\n  // worksheet.properties.defaultRowHeight = 20;\\n  // \u8BBE\u7F6E\u5217\\n  worksheet.columns = generateHeaders(sheet.columns);\\n  handleHeader(worksheet);\\n  // handleData(worksheet, sheet);\\n  handleDataWithRender(worksheet, sheet);\\n}\\n\\nexport function handleHeader(worksheet: Worksheet) {\\n  // \u7ED9\u8868\u5934\u6DFB\u52A0\u80CC\u666F\u8272\u3002\u56E0\u4E3A\u8868\u5934\u662F\u7B2C\u4E00\u884C\uFF0C\u53EF\u4EE5\u901A\u8FC7 getRow(1) \u6765\u83B7\u53D6\u8868\u5934\u8FD9\u4E00\u884C\\n  const headerRow = worksheet.getRow(1);\\n  headerRow.height = 22;\\n  // \u901A\u8FC7 cell \u8BBE\u7F6E\u6837\u5F0F\uFF0C\u66F4\u7CBE\u51C6\\n  headerRow.eachCell((cell) =>\\n    addCellStyle(cell, { color: \\"dff8ff\\", fontSize: 12, horizontal: \\"left\\" }),\\n  );\\n}\\n\\nexport function handleData(worksheet: Worksheet, sheet: ISheet) {\\n  // \u6DFB\u52A0\u884C\\n  const rows = worksheet.addRows(sheet?.dataSource);\\n  // \u8BBE\u7F6E\u6BCF\u884C\u7684\u6837\u5F0F\\n  addStyleToData(rows);\\n}\\n\\n/**\\n * \u5982\u679C column \u6709 render \u51FD\u6570\uFF0C\u5219\u4EE5 render \u6E32\u67D3\u7684\u7ED3\u679C\u663E\u793A\\n * @param worksheet\\n * @param sheet\\n */\\nfunction handleDataWithRender(worksheet: Worksheet, sheet: ISheet) {\\n  const { dataSource, columns } = sheet;\\n  const rowsData = dataSource?.map((data) => {\\n    return columns?.map((column) => {\\n      // @ts-ignore\\n      const renderResult = column?.render?.(data[column.dataIndex], data);\\n      if (renderResult) {\\n        // \u5982\u679C\u4E0D\u662F object \u8BF4\u660E\u6CA1\u5305\u88F9\u6807\u7B7E\uFF0C\u662F\u57FA\u672C\u7C7B\u578B\u76F4\u63A5\u8FD4\u56DE\\n        if (typeof renderResult !== \\"object\\") {\\n          return renderResult;\\n        }\\n        // \u5982\u679C\u662F object \u8BF4\u660E\u5305\u88F9\u4E86\u6807\u7B7E\uFF0C\u9010\u7EA7\u53D6\u51FA\u503C\\n        return getValueFromRender(renderResult);\\n      }\\n      // @ts-ignore\\n      return data[column.dataIndex];\\n    });\\n  });\\n  console.log({ rowsData });\\n  // \u6DFB\u52A0\u884C\\n  const rows = worksheet.addRows(rowsData);\\n  // \u8BBE\u7F6E\u6BCF\u884C\u7684\u6837\u5F0F\\n  addStyleToData(rows);\\n}\\n\\n// \u9012\u5F52\u53D6\u51FA render \u91CC\u7684\u503C\\n// @ts-ignore\\nfunction getValueFromRender(renderResult: any) {\\n  if (renderResult?.type) {\\n    const children = renderResult?.props?.children;\\n    if (children?.type) {\\n      return getValueFromRender(children);\\n    } else {\\n      return children;\\n    }\\n  }\\n  return \\"\\";\\n}\\n\\nfunction addStyleToData(rows: Row[]) {\\n  // \u8BBE\u7F6E\u6BCF\u884C\u7684\u6837\u5F0F\\n  rows?.forEach((row) => {\\n    // \u8BBE\u7F6E\u5B57\u4F53\\n    // eslint-disable-next-line no-param-reassign\\n    row.font = {\\n      size: 11,\\n      name: \\"\u5FAE\u8F6F\u96C5\u9ED1\\",\\n    };\\n    // \u8BBE\u7F6E\u5BF9\u9F50\u65B9\u5F0F\\n    // eslint-disable-next-line no-param-reassign\\n    row.alignment = {\\n      vertical: \\"middle\\",\\n      horizontal: \\"left\\",\\n      wrapText: true,\\n    };\\n  });\\n}\\n\\nexport function saveWorkbook(workbook: Workbook, fileName: string) {\\n  // \u5BFC\u51FA\u6587\u4EF6\\n  workbook.xlsx.writeBuffer().then((data: any) => {\\n    const blob = new Blob([data], { type: \\"\\" });\\n    saveAs(blob, fileName);\\n  });\\n}\\n\\n// \u6839\u636E antd \u7684 column \u751F\u6210 exceljs \u7684 column\\nexport function generateHeaders(columns: any[]) {\\n  return columns?.map((col) => {\\n    const obj: ITableHeader = {\\n      // \u663E\u793A\u7684 name\\n      header: col.title,\\n      // \u7528\u4E8E\u6570\u636E\u5339\u914D\u7684 key\\n      key: col.dataIndex,\\n      // \u5217\u5BBD\\n      width:\\n        col.width / 5 > DEFAULT_COLUMN_WIDTH\\n          ? col.width / 5\\n          : DEFAULT_COLUMN_WIDTH,\\n    };\\n    if (col.children) {\\n      obj.children = col.children?.map((item: any) => ({\\n        key: item.dataIndex,\\n        header: item.title,\\n        width: item.width,\\n        parentKey: col.dataIndex,\\n      }));\\n    }\\n    return obj;\\n  });\\n}\\n\\nexport function getColumnNumber(width: number) {\\n  // \u9700\u8981\u7684\u5217\u6570\uFF0C\u5411\u4E0A\u53D6\u6574\\n  return Math.ceil(width / DEFAULT_COLUMN_WIDTH);\\n}\\n\\nexport function addCellStyle(cell: Cell, attr?: IStyleAttr) {\\n  const { color, fontSize, horizontal, bold } = attr || {};\\n  // eslint-disable-next-line no-param-reassign\\n  cell.fill = {\\n    type: \\"pattern\\",\\n    pattern: \\"solid\\",\\n    fgColor: { argb: color },\\n  };\\n  // eslint-disable-next-line no-param-reassign\\n  cell.font = {\\n    bold: bold ?? true,\\n    size: fontSize ?? 11,\\n    name: \\"\u5FAE\u8F6F\u96C5\u9ED1\\",\\n  };\\n  // eslint-disable-next-line no-param-reassign\\n  cell.alignment = {\\n    vertical: \\"middle\\",\\n    wrapText: true,\\n    horizontal: horizontal ?? \\"left\\",\\n  };\\n}\\n\\nexport function addHeaderStyle(row: Row, attr?: IStyleAttr) {\\n  // eslint-disable-next-line no-param-reassign\\n  row.height = DEFAULT_ROW_HEIGHT;\\n  row.eachCell((cell) => addCellStyle(cell, attr));\\n}\\n\\n// \u5408\u5E76\u884C\u548C\u5217\uFF0C\u7528\u4E8E\u5904\u7406\u8868\u5934\u5408\u5E76\\nexport function mergeColumnCell(\\n  headers: ITableHeader[],\\n  rowHeader1: Row,\\n  rowHeader2: Row,\\n  nameRow1: string[],\\n  nameRow2: string[],\\n  worksheet: Worksheet,\\n) {\\n  // \u5F53\u524D index \u7684\u6307\u9488\\n  let pointer = -1;\\n  nameRow1.forEach((name, index) => {\\n    // \u5F53 index \u5C0F\u4E8E\u6307\u9488\u65F6\uFF0C\u8BF4\u660E\u8FD9\u4E00\u5217\u5DF2\u7ECF\u88AB\u5408\u5E76\u8FC7\u4E86\uFF0C\u4E0D\u80FD\u518D\u5408\u5E76\\n    if (index <= pointer) return;\\n    // \u662F\u5426\u5E94\u8BE5\u5217\u5408\u5E76\\n    const shouldVerticalMerge = name === nameRow2[index];\\n    // \u662F\u5426\u5E94\u8BE5\u884C\u5408\u5E76\\n    const shouldHorizontalMerge = index !== nameRow1.lastIndexOf(name);\\n    pointer = nameRow1.lastIndexOf(name);\\n    if (shouldVerticalMerge && shouldHorizontalMerge) {\\n      // \u4E24\u4E2A\u65B9\u5411\u90FD\u5408\u5E76\\n      worksheet.mergeCells(\\n        Number(rowHeader1.number),\\n        index + 1,\\n        Number(rowHeader2.number),\\n        nameRow1.lastIndexOf(name) + 1,\\n      );\\n    } else if (shouldVerticalMerge && !shouldHorizontalMerge) {\\n      // \u53EA\u5728\u5782\u76F4\u65B9\u5411\u4E0A\u540C\u4E00\u5217\u7684\u4E24\u884C\u5408\u5E76\\n      worksheet.mergeCells(\\n        Number(rowHeader1.number),\\n        index + 1,\\n        Number(rowHeader2.number),\\n        index + 1,\\n      );\\n    } else if (!shouldVerticalMerge && shouldHorizontalMerge) {\\n      // \u53EA\u6709\u6C34\u5E73\u65B9\u5411\u540C\u4E00\u884C\u7684\u591A\u5217\u5408\u5E76\\n      worksheet.mergeCells(\\n        Number(rowHeader1.number),\\n        index + 1,\\n        Number(rowHeader1.number),\\n        nameRow1.lastIndexOf(name) + 1,\\n      );\\n      // eslint-disable-next-line no-param-reassign\\n      const cell = rowHeader1.getCell(index + 1);\\n      cell.alignment = { vertical: \\"middle\\", horizontal: \\"center\\" };\\n    }\\n  });\\n}\\n\\n// \u884C\u5408\u5E76\u5355\u5143\u683C\\nexport function mergeRowCell(\\n  headers: ITableHeader[],\\n  row: Row,\\n  worksheet: Worksheet,\\n) {\\n  // \u5F53\u524D\u5217\u7684\u7D22\u5F15\\n  let colIndex = 1;\\n  headers.forEach((header) => {\\n    const { width, children } = header;\\n    if (children) {\\n      children.forEach(() => {\\n        colIndex += 1;\\n      });\\n    } else {\\n      // \u9700\u8981\u7684\u5217\u6570\uFF0C\u5411\u4E0A\u53D6\u6574\\n      const colNum = getColumnNumber(width);\\n      // \u5982\u679C colNum > 1 \u8BF4\u660E\u9700\u8981\u5408\u5E76\\n      if (colNum > 1) {\\n        worksheet.mergeCells(\\n          Number(row.number),\\n          colIndex,\\n          Number(row.number),\\n          colIndex + colNum - 1,\\n        );\\n      }\\n      colIndex += colNum;\\n    }\\n  });\\n}");
// CONCATENATED MODULE: ./node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./src/Components/File/FileExportWord/index.tsx?dumi-raw-code
/* harmony default export */ var FileExportWorddumi_raw_code = ("import React, { useRef, useEffect, useState } from \\"react\\";\\nimport { Card, Button } from \\"antd\\";\\nimport styles from \\"./index.less\\";\\nimport { exportWord } from \\"./utils\\";\\nimport Chart from \\"./components/chart\\";\\nimport Table from \\"./components/table\\";\\n\\n\\nconst data = {\\n  p0: \\"8\u67083\u65E5\uFF0C\u4E2D\u56FD\u4EBA\u6C11\u89E3\u653E\u519B\u4E1C\u90E8\u6218\u533A\u5728\u53F0\u5C9B\u5468\u8FB9\u6D77\u7A7A\u57DF\u7EC4\u7EC7\u5B9E\u6218\u5316\u8054\u5408\u6F14\u8BAD\u3002\\",\\n  p1: \\"\u4ECA\u5929\u4E0A\u5348\uFF0C\u4E1C\u90E8\u6218\u533A\u7A7A\u519B\u51FA\u52A8\u9884\u8B66\u673A\u3001\u6B7C\u51FB\u673A\u3001\u8F70\u70B8\u673A\u7B49\u591A\u578B\u5148\u8FDB\u6218\u673A\uFF0C\u4ECE\u591A\u673A\u573A\u6218\u6597\u8D77\u98DE\u3001\u5230\u591A\u7A7A\u57DF\u6267\u884C\u4EFB\u52A1\uFF0C\u5F00\u5C55\u9884\u8B66\u6307\u6325\u3001\u5E72\u6270\u538B\u5236\u3001\u5175\u529B\u8FDB\u538B\u7B49\u3002\u4E1C\u90E8\u6218\u533A\u6D77\u519B\u5728\u53F0\u5C9B\u5468\u8FB9\u6D77\u57DF\u5F00\u5C55\u8054\u5408\u5C01\u63A7\u548C\u8054\u5408\u5BF9\u9646\u5BF9\u6D77\u6253\u51FB\u7B49\u591A\u8BFE\u76EE\u9488\u5BF9\u6027\u6F14\u7EC3\\",\\n  p2: \\"\u636E\u4E2D\u56FD\u53F0\u6E7E\u7F518\u67084\u65E5\u8BAF \u89E3\u653E\u519B\u4ECA\uFF084\u65E5\uFF09\u8D77\u5728\u53F0\u6E7E\u5468\u8FB9\u7A7A\u6D77\u57DF\u8FDB\u884C\u91CD\u8981\u519B\u4E8B\u6F14\u8BAD\u884C\u52A8\uFF0C\u5E76\u7EC4\u7EC7\u5B9E\u5F39\u5C04\u51FB\u3002\u636E\u53F0\u6E7E\u300A\u8054\u5408\u62A5\u300B\u62A5\u9053\uFF0C\u53F0\u519B\u56E0\u5E94\u60C5\u52BF\uFF0C\u6E05\u6668\u4E0B\u4EE4\u53F0\u519B\u201C\u4E09\u519B\u201D\u5730\u533A\u8F6E\u503C\u7684\u6218\u5907\u90E8\u961F\uFF0C\u5C06\u539F\u5175\u529B\u4E3A\u8FDE\u7EA7\u7684\u201C\u6218\u6597\u961F\u201D\uFF0C\u7ACB\u5373\u63D0\u5347\u4E3A\u8425\u7EA7\u7684\u201C\u7279\u9063\u961F\u201D\uFF0C\u5B9E\u65BD\u5907\u6218\u8B66\u6212\u3002\\",\\n  p3: \\"\u62A5\u9053\u79F0\uFF0C\u89E3\u653E\u519B\u5728\u53F0\u6D77\u5468\u8FB9\u90E8\u7F72\u516D\u4E2A\u64CD\u6F14\u533A\uFF0C\u5C9B\u5185\u7814\u5224\u53EF\u80FD\u6709\u4E1C\u98CE15\u7B49\u5BFC\u5F39\u81EA\u5927\u9646\u5185\u9646\u5347\u7A7A\u98DE\u8D8A\u53F0\u6E7E\u672C\u5C9B\u4E0A\u7A7A\uFF0C\u65B0\u7AF9\u4E50\u5C71\u57FA\u5730\u7684\u957F\u7A0B\u9884\u8B66\u96F7\u8FBE\u4E25\u5BC6\u76D1\u63A7\u5F53\u9762\u9AD8\u4E2D\u4F4E\u7A7A\u72B6\u51B5\uFF0C\u5E76\u4E0E\u4E24\u5EA7\u5C9B\u5185\u9884\u8B66\u4E2D\u5FC3\u8FDE\u7EBF\u3002\\",\\n  img: \\"data:image/png;base64,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\\",\\n  dataTble: [\\n    {\\n      name: \\"\u80E1\u5F66\u658C\\",\\n      age: 32,\\n      address: \\"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\\",\\n    },\\n    {\\n      name: \\"\u80E1\u5F66\\",\\n      age: 42,\\n      address: \\"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\\",\\n    },\\n    {\\n      name: \\"\u80E1\\",\\n      age: 42,\\n      address: \\"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\\",\\n    },\\n    {\\n      name: \\"sss\\",\\n      age: 42,\\n      address: \\"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\\",\\n    },\\n    {\\n      name: \\"===\\",\\n      age: 42,\\n      address: \\"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\\",\\n    },\\n    {\\n      name: \\"vvv\\",\\n      age: 42,\\n      address: \\"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\\",\\n    },\\n    {\\n      name: \\"cc\\",\\n      age: 42,\\n      address: \\"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\\",\\n    },\\n    {\\n      name: \\"ddd\\",\\n      age: 42,\\n      address: \\"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\\",\\n    },\\n    {\\n      name: \\"fff\\",\\n      age: 42,\\n      address: \\"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\\",\\n    },\\n    {\\n      name: \\"eee\\",\\n      age: 42,\\n      address: \\"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\\",\\n    },\\n    {\\n      name: \\"ggg\\",\\n      age: 42,\\n      address: \\"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\\",\\n    },\\n    {\\n      name: \\"aaa\\",\\n      age: 42,\\n      address: \\"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\\",\\n    },\\n    {\\n      name: \\"kkk\\",\\n      age: 42,\\n      address: \\"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\\",\\n    },\\n    {\\n      name: \\"lll\\",\\n      age: 42,\\n      address: \\"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\\",\\n    },\\n  ],\\n};\\n\\nconst FileExport = () => {\\n  const [paragraph, setParagraph] = useState<any>([]);\\n  const charts = useRef<any>(null!);\\n  const table = useRef<any>(null!);\\n\\n  useEffect(() => {\\n    const list = [...document.querySelectorAll(\\".content\\")].map((item: any) => {\\n      return item.innerText;\\n    });\\n    setParagraph(list);\\n  }, []);\\n\\n  const wordBtn = () => {\\n    const img = charts.current.getDataURL();\\n    console.log(paragraph);\\n    const contentWord = {\\n      p0: paragraph[0],\\n      p1: paragraph[1],\\n      p2: paragraph[2],\\n      p3: paragraph[3],\\n      img,\\n      dataTble: table.current.dataTable(),\\n    };\\n    exportWord(\\"word\u5BFC\u51FA\\", contentWord);\\n  };\\n\\n  return (\\n    <>\\n      <Card style={{ margin: 24 }}>\\n        <div className={styles.container}>\\n          <Button\\n            className={styles.btn}\\n            type=\\"primary\\"\\n            onClick={() => wordBtn()}\\n          >\\n            \u5BFC\u51FAword\\n          </Button>\\n          <div className={styles.word}>\\n            <h1 className={styles.title}>word\u6587\u6863</h1>\\n            <p className=\\"content\\">\\n              8\u67083\u65E5\uFF0C\u4E2D\u56FD\u4EBA\u6C11\u89E3\u653E\u519B\u4E1C\u90E8\u6218\u533A\u5728\u53F0\u5C9B\u5468\u8FB9\u6D77\u7A7A\u57DF\u7EC4\u7EC7\u5B9E\u6218\u5316\u8054\u5408\u6F14\u8BAD\u3002\\n            </p>\\n            <p className=\\"content\\">\\n              \u4ECA\u5929\u4E0A\u5348\uFF0C\u4E1C\u90E8\u6218\u533A\u7A7A\u519B\u51FA\u52A8\u9884\u8B66\u673A\u3001\u6B7C\u51FB\u673A\u3001\u8F70\u70B8\u673A\u7B49\u591A\u578B\u5148\u8FDB\u6218\u673A\uFF0C\u4ECE\u591A\u673A\u573A\u6218\u6597\u8D77\u98DE\u3001\u5230\u591A\u7A7A\u57DF\u6267\u884C\u4EFB\u52A1\uFF0C\u5F00\u5C55\u9884\u8B66\u6307\u6325\u3001\u5E72\u6270\u538B\u5236\u3001\u5175\u529B\u8FDB\u538B\u7B49\u3002\u4E1C\u90E8\u6218\u533A\u6D77\u519B\u5728\u53F0\u5C9B\u5468\u8FB9\u6D77\u57DF\u5F00\u5C55\u8054\u5408\u5C01\u63A7\u548C\u8054\u5408\u5BF9\u9646\u5BF9\u6D77\u6253\u51FB\u7B49\u591A\u8BFE\u76EE\u9488\u5BF9\u6027\u6F14\u7EC3\\n            </p>\\n            <p className=\\"content\\">\\n              \u636E\u4E2D\u56FD\u53F0\u6E7E\u7F518\u67084\u65E5\u8BAF\\n              \u89E3\u653E\u519B\u4ECA\uFF084\u65E5\uFF09\u8D77\u5728\u53F0\u6E7E\u5468\u8FB9\u7A7A\u6D77\u57DF\u8FDB\u884C\u91CD\u8981\u519B\u4E8B\u6F14\u8BAD\u884C\u52A8\uFF0C\u5E76\u7EC4\u7EC7\u5B9E\u5F39\u5C04\u51FB\u3002\u636E\u53F0\u6E7E\u300A\u8054\u5408\u62A5\u300B\u62A5\u9053\uFF0C\u53F0\u519B\u56E0\u5E94\u60C5\u52BF\uFF0C\u6E05\u6668\u4E0B\u4EE4\u53F0\u519B\u201C\u4E09\u519B\u201D\u5730\u533A\u8F6E\u503C\u7684\u6218\u5907\u90E8\u961F\uFF0C\u5C06\u539F\u5175\u529B\u4E3A\u8FDE\u7EA7\u7684\u201C\u6218\u6597\u961F\u201D\uFF0C\u7ACB\u5373\u63D0\u5347\u4E3A\u8425\u7EA7\u7684\u201C\u7279\u9063\u961F\u201D\uFF0C\u5B9E\u65BD\u5907\u6218\u8B66\u6212\u3002\\n            </p>\\n            <p className=\\"content\\">\\n              \u62A5\u9053\u79F0\uFF0C\u89E3\u653E\u519B\u5728\u53F0\u6D77\u5468\u8FB9\u90E8\u7F72\u516D\u4E2A\u64CD\u6F14\u533A\uFF0C\u5C9B\u5185\u7814\u5224\u53EF\u80FD\u6709\u4E1C\u98CE15\u7B49\u5BFC\u5F39\u81EA\u5927\u9646\u5185\u9646\u5347\u7A7A\u98DE\u8D8A\u53F0\u6E7E\u672C\u5C9B\u4E0A\u7A7A\uFF0C\u65B0\u7AF9\u4E50\u5C71\u57FA\u5730\u7684\u957F\u7A0B\u9884\u8B66\u96F7\u8FBE\u4E25\u5BC6\u76D1\u63A7\u5F53\u9762\u9AD8\u4E2D\u4F4E\u7A7A\u72B6\u51B5\uFF0C\u5E76\u4E0E\u4E24\u5EA7\u5C9B\u5185\u9884\u8B66\u4E2D\u5FC3\u8FDE\u7EBF\u3002\\n            </p>\\n            <Chart ref={charts} />\\n            <Table ref={table} />\\n          </div>\\n        </div>\\n      </Card>\\n    </>\\n  );\\n};\\n\\nexport default FileExport;");
// CONCATENATED MODULE: ./node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./src/Components/File/FileExportWord/index.less?dumi-raw-code
/* harmony default export */ var File_FileExportWorddumi_raw_code = (".container {\\n  margin: 0 15%;\\n  .btn {\\n    margin-bottom: 10px;\\n  }\\n  .word {\\n    padding: 20px;\\n    border: 1px solid rgb(221, 11, 11);\\n    .title {\\n      font-weight: 600;\\n      font-size: 25px;\\n    }\\n    .content {\\n      font-size: 15px;\\n      text-align: left;\\n      text-indent: 2em;\\n      word-break: break-all;\\n    }\\n  }\\n}");
// CONCATENATED MODULE: ./node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./src/Components/File/FileExportWord/utils.ts?dumi-raw-code
/* harmony default export */ var FileExportWord_utilsdumi_raw_code = ("import Docxtemplater from 'docxtemplater';\\nimport PizZip from 'pizzip';\\nimport JSZipUtils from 'jszip-utils';\\nimport { saveAs } from 'file-saver';\\n\\nconst path =\\n  process.env.APP_ENV === 'development'\\n    ? \`/word.docx\`\\n    : \`/my-demo-markdown/word.docx\`;\\n/**\\n * description\uFF1A \u5BFC\u51FAecharts\u56FE\u7247\uFF0C\u683C\u5F0F\u8F6C\u6362\\n */\\nexport function base64DataURLToArrayBuffer(dataURL: string) {\\n  const base64Regex = /^data:image\\\\/(png|jpg|svg|svg\\\\+xml);base64,/;\\n  if (!base64Regex.test(dataURL)) {\\n    return false;\\n  }\\n  const stringBase64 = dataURL.replace(base64Regex, '');\\n  const binaryString = window.atob(stringBase64);\\n  const len = binaryString.length;\\n  const bytes = new Uint8Array(len);\\n  for (let i = 0; i < len; i++) {\\n    const ascii = binaryString.charCodeAt(i);\\n    bytes[i] = ascii;\\n  }\\n  return bytes.buffer;\\n}\\n\\nexport function exportWord(title: string, contentWord: object) {\\n  const ImageModule = require('open-docxtemplater-image-module');\\n  JSZipUtils.getBinaryContent(path, function(error: any, content: any) {\\n    // input.docx\u662F\u6A21\u677F\u3002\u6211\u4EEC\u5728\u5BFC\u51FA\u7684\u65F6\u5019\uFF0C\u4F1A\u6839\u636E\u6B64\u6A21\u677F\u6765\u5BFC\u51FA\u5BF9\u5E94\u7684\u6570\u636E\\n    // \u629B\u51FA\u5F02\u5E38\\n    if (error) {\\n      throw error;\\n    }\\n    // \u56FE\u7247\u5904\u7406\\n    const opts: any = {};\\n    opts.centered = false;\\n    opts.getImage = (chartId: string) => {\\n      return base64DataURLToArrayBuffer(chartId);\\n    };\\n    opts.getSize = function() {\\n      //\u81EA\u5B9A\u4E49\u6307\u5B9A\u56FE\u50CF\u5927\u5C0F\uFF0C\u6B64\u5904\u53EF\u52A8\u6001\u8C03\u8BD5\u5404\u522B\u56FE\u7247\u7684\u5927\u5C0F\\n      return [600, 290];\\n    };\\n\\n    const imageModule = new ImageModule(opts);\\n    // \u521B\u5EFA\u4E00\u4E2APizZip\u5B9E\u4F8B\uFF0C\u5185\u5BB9\u4E3A\u6A21\u677F\u7684\u5185\u5BB9\\n    const zip = new PizZip(content);\\n    // \u521B\u5EFA\u5E76\u52A0\u8F7Ddocxtemplater\u5B9E\u4F8B\u5BF9\u8C61\\n    const doc = new Docxtemplater();\\n    opts.centered = true; // \u56FE\u7247\u5C45\u4E2D\uFF0C\u5728word\u6A21\u677F\u4E2D\u5B9A\u4E49\u65B9\u5F0F\u4E3A{%image}\\n    opts.fileType = 'docx';\\n    doc.attachModule(imageModule);\\n    doc.loadZip(zip);\\n    // \u8BBE\u7F6E\u6A21\u677F\u53D8\u91CF\u7684\u503C\\n    doc.setData(contentWord);\\n    try {\\n      // \u7528\u6A21\u677F\u53D8\u91CF\u7684\u503C\u66FF\u6362\u6240\u6709\u6A21\u677F\u53D8\u91CF\\n      doc.render();\\n    } catch (error) {\\n      // \u629B\u51FA\u5F02\u5E38\\n      const e = {\\n        message: error.message,\\n        name: error.name,\\n        stack: error.stack,\\n        properties: error.properties,\\n      };\\n      console.log(\\n        JSON.stringify({\\n          error: e,\\n        }),\\n      );\\n      throw error;\\n    }\\n    // \u751F\u6210\u4E00\u4E2A\u4EE3\u8868docxtemplater\u5BF9\u8C61\u7684zip\u6587\u4EF6\uFF08\u4E0D\u662F\u4E00\u4E2A\u771F\u5B9E\u7684\u6587\u4EF6\uFF0C\u800C\u662F\u5728\u5185\u5B58\u4E2D\u7684\u8868\u793A\uFF09\\n    const out = doc.getZip().generate({\\n      type: 'blob',\\n      mimeType:\\n        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',\\n    });\\n    // \u5C06\u76EE\u6807\u6587\u4EF6\u5BF9\u8C61\u4FDD\u5B58\u4E3A\u76EE\u6807\u7C7B\u578B\u7684\u6587\u4EF6\uFF0C\u5E76\u547D\u540D\\n    saveAs(out, title + '.docx');\\n  });\\n}");
// CONCATENATED MODULE: ./node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./src/Components/File/FileExportWord/components/chart.tsx?dumi-raw-code
/* harmony default export */ var chartdumi_raw_code = ("import React, {\\n  useState,\\n  useEffect,\\n  useRef,\\n  forwardRef,\\n  useImperativeHandle,\\n} from \\"react\\";\\nimport { Line } from \\"@ant-design/plots\\";\\n\\nconst DemoLine = (props: any, charts: any) => {\\n  const [data, setData] = useState([]);\\n  const ref = useRef<any>(null!);\\n\\n  const asyncFetch = () => {\\n    fetch(\\n      \\"https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json\\",\\n    )\\n      .then((response) => response.json())\\n      .then((json) => setData(json))\\n      .catch((error) => {\\n        console.log(\\"fetch data failed\\", error);\\n      });\\n  };\\n\\n  useEffect(() => {\\n    asyncFetch();\\n  }, []);\\n\\n  useImperativeHandle(charts, () => ({\\n    downloadImage: () => {\\n      return ref.current?.downloadImage();\\n    },\\n    getDataURL: () => {\\n      return ref.current?.toDataURL();\\n    },\\n  }));\\n\\n  const config = {\\n    data,\\n    padding: \\"auto\\",\\n    xField: \\"Date\\",\\n    yField: \\"scales\\",\\n    xAxis: {\\n      // type: 'timeCat',\\n      tickCount: 5,\\n    },\\n    smooth: true,\\n  };\\n\\n  return (\\n    <div ref={charts}>\\n      <Line\\n        {...config}\\n        onReady={(plot) => {\\n          ref.current = plot;\\n        }}\\n      />\\n    </div>\\n  );\\n};\\nexport default forwardRef(DemoLine);");
// CONCATENATED MODULE: ./node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./src/Components/File/FileExportWord/components/table.tsx?dumi-raw-code
/* harmony default export */ var tabledumi_raw_code = ("import { Table } from \\"antd\\";\\nimport React, { useImperativeHandle, forwardRef } from \\"react\\";\\nconst columns = [\\n  {\\n    title: \\"\u59D3\u540D\\",\\n    dataIndex: \\"name\\",\\n    key: \\"name\\",\\n  },\\n  {\\n    title: \\"\u5E74\u9F84\\",\\n    dataIndex: \\"age\\",\\n    key: \\"age\\",\\n  },\\n  {\\n    title: \\"\u4F4F\u5740\\",\\n    dataIndex: \\"address\\",\\n    key: \\"address\\",\\n  },\\n];\\nconst dataTable = [\\n  {\\n    name: \\"\u80E1\u5F66\u658C\\",\\n    age: 32,\\n    address: \\"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\\",\\n  },\\n  {\\n    name: \\"\u80E1\u5F66\\",\\n    age: 42,\\n    address: \\"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\\",\\n  },\\n  {\\n    name: \\"\u80E1\\",\\n    age: 42,\\n    address: \\"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\\",\\n  },\\n  {\\n    name: \\"sss\\",\\n    age: 42,\\n    address: \\"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\\",\\n  },\\n  {\\n    name: \\"===\\",\\n    age: 42,\\n    address: \\"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\\",\\n  },\\n  {\\n    name: \\"vvv\\",\\n    age: 42,\\n    address: \\"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\\",\\n  },\\n  {\\n    name: \\"cc\\",\\n    age: 42,\\n    address: \\"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\\",\\n  },\\n  {\\n    name: \\"ddd\\",\\n    age: 42,\\n    address: \\"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\\",\\n  },\\n  {\\n    name: \\"fff\\",\\n    age: 42,\\n    address: \\"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\\",\\n  },\\n  {\\n    name: \\"eee\\",\\n    age: 42,\\n    address: \\"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\\",\\n  },\\n  {\\n    name: \\"ggg\\",\\n    age: 42,\\n    address: \\"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\\",\\n  },\\n  {\\n    name: \\"aaa\\",\\n    age: 42,\\n    address: \\"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\\",\\n  },\\n  {\\n    name: \\"kkk\\",\\n    age: 42,\\n    address: \\"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\\",\\n  },\\n  {\\n    name: \\"lll\\",\\n    age: 42,\\n    address: \\"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7\\",\\n  },\\n];\\n\\nconst TableComponent = (props: any, table: any) => {\\n  useImperativeHandle(table, () => ({\\n    dataTable: () => {\\n      return dataTable;\\n    },\\n  }));\\n\\n  return (\\n    <Table\\n      ref={table}\\n      pagination={false}\\n      columns={columns}\\n      dataSource={dataTable}\\n      scroll={{ y: 500 }}\\n      bordered\\n      rowKey={(record) => record.name}\\n    />\\n  );\\n};\\n\\nexport default forwardRef(TableComponent);");
// CONCATENATED MODULE: ./node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./src/Components/File/FilePreViewPage/index.tsx?dumi-raw-code
/* harmony default export */ var FilePreViewPagedumi_raw_code = ("import FilePreView from \\"./components/FilePreView\\";\\nimport { useRef } from \\"react\\";\\nimport { Upload, Form, Button, Card, Table } from \\"antd\\";\\nimport { columns, dataSource } from \\"./constant\\";\\nimport React from \\"react\\";\\n\\nconst normFile = (e: any) => {\\n  if (Array.isArray(e)) return e;\\n  return e?.fileList;\\n};\\n\\nconst getBase64 = (\\n  file: Blob,\\n  cb: (result: string | ArrayBuffer | null) => void,\\n) => {\\n  const reader = new FileReader();\\n  reader.addEventListener(\\"load\\", () => cb(reader.result));\\n  reader.readAsDataURL(file);\\n};\\n\\nconst PdfPage = () => {\\n  const pdfRef = useRef<any>(null!);\\n  const [form] = Form.useForm();\\n\\n  const handlePreviewPdf = ({ originFileObj }: any) => {\\n    // 1.base64\u65B9\u5F0F\u9884\u89C8\\n    getBase64(originFileObj, (fileURL: string | ArrayBuffer | null) => {\\n      pdfRef.current.controlIsShow({\\n        base64: fileURL,\\n        originFileObj,\\n      });\\n    });\\n    // 2.src\u65B9\u5F0F\u9884\u89C8 \u901A\u8FC7\u540E\u7AEF\u63A5\u53E3\u83B7\u53D6src\u8DEF\u5F84\\n    // pdfRef.current.controlIsShow({\\n    //   src: \\"http://marsgis.cn/doc/study-gis.pdf\\",\\n    // });\\n  };\\n\\n  return (\\n    <>\\n      <Card style={{ margin: 24 }}>\\n        <Form form={form}>\\n          <h2>\u70B9\u51FB\u6587\u4EF6\u540D\u5373\u53EF\u9884\u89C8</h2>\\n          <Form.Item valuePropName=\\"fileList\\" getValueFromEvent={normFile}>\\n            <Upload\\n              onPreview={(file) => handlePreviewPdf(file)}\\n              beforeUpload={() => {\\n                return false;\\n              }}\\n              name=\\"file\\"\\n              maxCount={10}\\n            >\\n              <Button>\u4E0A\u4F20word excel pdf \u56FE\u7247\u7B49\u683C\u5F0F</Button>\\n            </Upload>\\n          </Form.Item>\\n        </Form>\\n        <FilePreView ref={pdfRef} />\\n        <Table pagination={false} dataSource={dataSource} columns={columns} />\\n        ;\\n      </Card>\\n    </>\\n  );\\n};\\n\\nexport default PdfPage;");
// CONCATENATED MODULE: ./node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./src/Components/File/FilePreViewPage/components/FilePreView.tsx?dumi-raw-code
/* harmony default export */ var FilePreViewdumi_raw_code = ("import React, { PureComponent } from \\"react\\";\\nimport { Modal, message } from \\"antd\\";\\nimport FileView from \\"./FileView\\";\\nimport { ExcelRenderer } from \\"react-excel-renderer\\";\\nconst txtFileTypes = [\\n  \\"txt\\",\\n  \\"json\\",\\n  \\"js\\",\\n  \\"css\\",\\n  \\"java\\",\\n  \\"py\\",\\n  \\"html\\",\\n  \\"jsx\\",\\n  \\"ts\\",\\n  \\"tsx\\",\\n  \\"xml\\",\\n  \\"md\\",\\n  \\"log\\",\\n];\\nconst fileAllTypes = [\\"docx\\", \\"xlsx\\", \\"png\\", \\"jpg\\", \\"pdf\\", ...txtFileTypes];\\nclass FilePreView extends PureComponent<any, any> {\\n  protected pdfViewRef: React.RefObject<any> = React.createRef();\\n  constructor(props: any) {\\n    super(props);\\n    this.state = {\\n      modalVisible: false,\\n      fileType: \\"\\",\\n      excelData: {\\n        cols: [],\\n        rows: [],\\n      },\\n    };\\n  }\\n  //\u663E\u9690\u72B6\u6001\u7684\u6539\u53D8\\n  controlIsShow = (params: {\\n    src?: string;\\n    base64?: string;\\n    originFileObj?: any;\\n  }) => {\\n    const { modalVisible } = this.state;\\n    const { src, base64, originFileObj } = params;\\n    const { name } = originFileObj;\\n    const fileType = name.slice(name.lastIndexOf(\\".\\") + 1).toLowerCase();\\n\\n    if (!fileAllTypes.includes(fileType)) {\\n      return message.error(\\"\u8BE5\u6587\u4EF6\u4E0D\u652F\u6301\u9884\u89C8\\");\\n    }\\n    if (fileType == \\"xlsx\\") {\\n      ExcelRenderer(originFileObj, (err: Error, resp: any) => {\\n        this.setState({\\n          excelData: {\\n            cols: resp.cols,\\n            rows: resp.rows,\\n          },\\n        });\\n      });\\n    }\\n    this.setState({\\n      modalVisible: !modalVisible,\\n      src,\\n      base64,\\n      fileType,\\n    });\\n  };\\n\\n  render() {\\n    const { modalVisible, src, base64, fileType, excelData } = this.state;\\n    return (\\n      <Modal\\n        visible={modalVisible}\\n        title={fileType + \\" \u9884\u89C8\\"}\\n        onCancel={() => {\\n          this.setState({\\n            modalVisible: false,\\n          });\\n        }}\\n        width={1200}\\n        bodyStyle={{ overflow: \\"scroll\\", height: \\"70vh\\" }}\\n        footer={null}\\n        destroyOnClose={true}\\n      >\\n        <div id=\\"file-preview-modal\\">\\n          <FileView\\n            ref={this.pdfViewRef}\\n            src={src}\\n            base64={base64}\\n            fileType={fileType}\\n            excelData={excelData}\\n            txtFileTypes={txtFileTypes}\\n            styles={{\\n              height: \\"600px\\",\\n            }}\\n          />\\n        </div>\\n      </Modal>\\n    );\\n  }\\n}\\nexport default FilePreView;");
// CONCATENATED MODULE: ./node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./src/Components/File/FilePreViewPage/components/FileView.tsx?dumi-raw-code
/* harmony default export */ var FileViewdumi_raw_code = ("import type { CSSProperties } from \\"react\\";\\nimport { PureComponent } from \\"react\\";\\nimport style from \\"./fileView.less\\";\\nimport cx from \\"classnames\\";\\nimport { Skeleton, Image } from \\"antd\\";\\nimport { OutTable } from \\"react-excel-renderer\\";\\nimport { defaultOptions, renderAsync } from \\"docx-preview\\";\\nimport MarkDown from \\"./MarkDown\\";\\nimport React from \\"react\\";\\n\\ninterface IProps {\\n  styles?: CSSProperties;\\n  src?: string;\\n  base64?: string;\\n  [onherProps: string]: any;\\n}\\n\\nconst txtFileTypes = [\\n  \\"txt\\",\\n  \\"json\\",\\n  \\"js\\",\\n  \\"css\\",\\n  \\"java\\",\\n  \\"py\\",\\n  \\"html\\",\\n  \\"jsx\\",\\n  \\"ts\\",\\n  \\"tsx\\",\\n  \\"xml\\",\\n  \\"md\\",\\n  \\"log\\",\\n];\\n\\nclass FileView extends PureComponent<IProps, any> {\\n  constructor(props: IProps | Readonly<IProps>) {\\n    super(props);\\n    this.state = {\\n      pdfSrc: \\"\\",\\n      loading: true,\\n      text: \\"\\",\\n    };\\n  }\\n  componentDidMount() {\\n    const { src, base64 } = this.props;\\n    if (src) {\\n      this.showPDFBySrc(src);\\n    } else if (base64) {\\n      this.showPDFByBase64(base64);\\n    }\\n  }\\n  componentwillUnmount() {\\n    URL.revokeObjectURL(this.state.pdfSrc);\\n  }\\n  //\u901A\u8FC7src\u5C55\u793A\\n  showPDFBySrc = async (src: string) => {\\n    try {\\n      this.setState({\\n        loading: true,\\n      });\\n      this.setState({\\n        pdfSrc: src,\\n        loading: false,\\n      });\\n    } catch (err) { }\\n  };\\n\\n  //base64\u8F6Cblob\\n  dataURItoBlob = (dataURI: string) => {\\n    const mimeString = dataURI.split(\\",\\")[0].split(\\":\\")[1].split(\\";\\")[0]; // mime\u7C7B\u578B\\n    const byteString = atob(dataURI.split(\\",\\")[1]); //base64 \u89E3\u7801\\n    const arrayBuffer = new ArrayBuffer(byteString.length); //\u521B\u5EFA\u7F13\u51B2\u6570\u7EC4\\n    const intArray = new Uint8Array(arrayBuffer); //\u521B\u5EFA\u89C6\u56FE\\n    for (let i = 0; i < byteString.length; i++) {\\n      intArray[i] = byteString.charCodeAt(i);\\n    }\\n    return new Blob([intArray], { type: mimeString });\\n  };\\n\\n  // \u8F6Cbaffer\\n  readBuffer = async (file: any): Promise<Buffer> => {\\n    return new Promise((resolve, reject) => {\\n      const reader = new FileReader();\\n      reader.onload = (loadEvent: any) => resolve(loadEvent.target.result);\\n      reader.onerror = (e) => reject(e);\\n      reader.readAsArrayBuffer(file);\\n    });\\n  };\\n\\n  // \u8F6C\u6587\u672Cstring\\n  readText = async (buffer: Buffer): Promise<string> => {\\n    return new Promise((resolve, reject) => {\\n      const reader = new FileReader();\\n      reader.onload = (loadEvent: any) => resolve(loadEvent.target.result);\\n      reader.onerror = (e) => reject(e);\\n      reader.readAsText(new Blob([buffer]), \\"utf-8\\");\\n    });\\n  };\\n\\n  //\u901A\u8FC7base64\u5C55\u793A\\n  showPDFByBase64 = async (content: string) => {\\n    const { fileType } = this.props;\\n    const blob = this.dataURItoBlob(content);\\n    const fileUrl = URL.createObjectURL(blob);\\n    this.setState({\\n      pdfSrc: fileUrl,\\n      loading: false,\\n    });\\n\\n    if (txtFileTypes.includes(fileType)) {\\n      const Buffer = await this.readBuffer(blob);\\n      const text = await this.readText(Buffer);\\n      this.setState({\\n        text,\\n      });\\n    }\\n\\n    if (fileType == \\"docx\\") {\\n      renderAsync(\\n        blob,\\n        document.getElementById(\\"file-preview-modal\\") as HTMLDivElement,\\n        null as unknown as HTMLDivElement,\\n        {\\n          className: \\"docx\\", // \u9ED8\u8BA4\u548C\u6587\u6863\u6837\u5F0F\u7C7B\u7684\u7C7B\u540D/\u524D\u7F00\\n          inWrapper: true, // \u542F\u7528\u56F4\u7ED5\u6587\u6863\u5185\u5BB9\u6E32\u67D3\u5305\u88C5\u5668\\n          ignoreWidth: false, // \u7981\u6B62\u9875\u9762\u6E32\u67D3\u5BBD\u5EA6\\n          ignoreHeight: false, // \u7981\u6B62\u9875\u9762\u6E32\u67D3\u9AD8\u5EA6\\n          ignoreFonts: false, // \u7981\u6B62\u5B57\u4F53\u6E32\u67D3\\n          breakPages: true, // \u5728\u5206\u9875\u7B26\u4E0A\u542F\u7528\u5206\u9875\\n          ignoreLastRenderedPageBreak: true, //\u7981\u7528lastRenderedPageBreak\u5143\u7D20\u7684\u5206\u9875\\n          experimental: false, //\u542F\u7528\u5B9E\u9A8C\u6027\u529F\u80FD\uFF08\u5236\u8868\u7B26\u505C\u6B62\u8BA1\u7B97\uFF09\\n          trimXmlDeclaration: true, //\u5982\u679C\u4E3A\u771F\uFF0Cxml\u58F0\u660E\u5C06\u5728\u89E3\u6790\u4E4B\u524D\u4ECExml\u6587\u6863\u4E2D\u5220\u9664\\n          debug: false, // \u542F\u7528\u989D\u5916\u7684\u65E5\u5FD7\u8BB0\u5F55\\n        },\\n      );\\n    }\\n  };\\n\\n  render() {\\n    const { styles, className, fileType, txtFileTypes, excelData } = this.props;\\n    const { loading, pdfSrc, text } = this.state;\\n    const src = \`\${pdfSrc}\`;\\n\\n    if (loading) {\\n      return <Skeleton loading paragraph={{ rows: 10 }} active />;\\n    }\\n\\n    if (fileType == \\"docx\\") {\\n      return null;\\n    }\\n\\n    if (fileType == \\"xlsx\\") {\\n      return (\\n        <OutTable\\n          data={excelData.rows}\\n          columns={excelData.cols}\\n          tableClassName={style.ExcelTable2007}\\n          tableHeaderRowClass={style.heading}\\n        />\\n      );\\n    }\\n\\n    if (fileType == \\"png\\" || fileType == \\"jpg\\") {\\n      return <Image src={src} />;\\n    }\\n\\n    if (txtFileTypes.includes(fileType)) {\\n      const newText = \`\\n~~~\${fileType}\\n\${text}\\n~~~\\n\`;\\n      return <MarkDown markdown={newText} />;\\n    }\\n\\n    if (fileType == \\"pdf\\") {\\n      return (\\n        <iframe\\n          className={cx(style.iframeStyle, className)}\\n          style={styles}\\n          src={src}\\n          title=\\"pdf\u9884\u89C8\\"\\n        />\\n      );\\n    }\\n\\n    return (\\n      <span>\u4E0D\u652F\u6301</span>\\n    );\\n  }\\n}\\nexport default FileView;");
// CONCATENATED MODULE: ./node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./src/Components/File/FilePreViewPage/components/fileView.less?dumi-raw-code
/* harmony default export */ var fileViewdumi_raw_code = (".iframeStyle {\\n  width: 100%;\\n  height: 99%;\\n  border: none;\\n}\\n\\n.ExcelTable2007 {\\n  padding: 10px;\\n  font-weight: 100;\\n  font-size: 11pt;\\n  font-family: Calibri;\\n  border: 1px solid #b0cbef;\\n  border-width: 1px 0px 0px 1px;\\n  border-collapse: collapse;\\n  border-spacing: 0px;\\n}\\n\\n.ExcelTable2007 TH {\\n  height: 17px;\\n  font-weight: bold;\\n  font-size: 14px;\\n  line-height: 17px;\\n  background-repeat: repeat-x;\\n  border: 1px solid #9eb6ce;\\n  border-width: 0px 1px 1px 0px;\\n}\\n\\n.ExcelTable2007 TD {\\n  padding: 0px 4px 0px 2px;\\n  background-color: white;\\n  border: 0px;\\n  border: 1px solid #d0d7e5;\\n  border-width: 0px 1px 1px 0px;\\n}\\n\\n.ExcelTable2007 TD B {\\n  font-weight: bold;\\n  background-color: white;\\n  border: 0px;\\n}\\n\\n.ExcelTable2007 TD.heading {\\n  font-weight: bold;\\n  text-align: center;\\n  background-color: #e4ecf7;\\n  border: 1px solid #9eb6ce;\\n  border-width: 0px 1px 1px 0px;\\n}\\n\\n.ExcelTable2007 TH.heading {\\n  background-repeat: none;\\n}\\n\\nTH {\\n  text-align: center;\\n}");
// CONCATENATED MODULE: ./node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./src/Components/File/FilePreViewPage/components/MarkDown.tsx?dumi-raw-code
/* harmony default export */ var MarkDowndumi_raw_code = ("import React from \\"react\\";\\nimport ReactMarkdown from \\"react-markdown\\";\\nimport { Prism as SyntaxHighlighter } from \\"react-syntax-highlighter\\";\\nimport { dracula } from \\"react-syntax-highlighter/dist/esm/styles/prism\\";\\nimport remarkGfm from \\"remark-gfm\\";\\n\\nexport default (props: any) => {\\n  return (\\n    <ReactMarkdown\\n      // eslint-disable-next-line react/no-children-prop\\n      children={props.markdown}\\n      remarkPlugins={[remarkGfm]}\\n      components={{\\n        code({ inline, className, children }) {\\n          const match = /language-(\\\\w+)/.exec(className || \\"\\");\\n          return !inline && match ? (\\n            <SyntaxHighlighter\\n              // eslint-disable-next-line react/no-children-prop\\n              children={String(children).replace(/\\\\n$/, \\"\\")}\\n              style={dracula}\\n              language={match[1]}\\n              showLineNumbers\\n              PreTag=\\"div\\"\\n              {...props}\\n            />\\n          ) : (\\n            <code className={className} {...props}>\\n              {children}\\n            </code>\\n          );\\n        },\\n      }}\\n    />\\n  );\\n};");
// CONCATENATED MODULE: ./node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./src/Components/File/FilePreViewPage/constant.ts?dumi-raw-code
/* harmony default export */ var FilePreViewPage_constantdumi_raw_code = ("export const dataSource = [\\n  {\\n    key: \\"1\\",\\n    type: \\"docx\\",\\n  },\\n  {\\n    key: \\"2\\",\\n    type: \\"xlsx\\",\\n  },\\n  {\\n    key: \\"3\\",\\n    type: \\"png\\",\\n  },\\n  {\\n    key: \\"4\\",\\n    type: \\"jpg\\",\\n  },\\n  {\\n    key: \\"5\\",\\n    type: \\"pdf\\",\\n  },\\n  {\\n    key: \\"6\\",\\n    type: \\"txt\\",\\n  },\\n  {\\n    key: \\"7\\",\\n    type: \\"json\\",\\n  },\\n  {\\n    key: \\"8\\",\\n    type: \\"js\\",\\n  },\\n  {\\n    key: \\"9\\",\\n    type: \\"css\\",\\n  },\\n  {\\n    key: \\"10\\",\\n    type: \\"java\\",\\n  },\\n  {\\n    key: \\"11\\",\\n    type: \\"py\\",\\n  },\\n  {\\n    key: \\"12\\",\\n    type: \\"html\\",\\n  },\\n  {\\n    key: \\"13\\",\\n    type: \\"jsx\\",\\n  },\\n  {\\n    key: \\"14\\",\\n    type: \\"ts\\",\\n  },\\n  {\\n    key: \\"15\\",\\n    type: \\"tsx\\",\\n  },\\n  {\\n    key: \\"16\\",\\n    type: \\"xml\\",\\n  },\\n  {\\n    key: \\"17\\",\\n    type: \\"md\\",\\n  },\\n  {\\n    key: \\"18\\",\\n    type: \\"log\\",\\n  },\\n];\\n\\nexport const columns = [\\n  {\\n    title: \\"\u7C7B\u578B\\",\\n    dataIndex: \\"\u7C7B\u578B\\",\\n    key: \\"key\\",\\n    render: () => \\"\u652F\u6301\u7C7B\u578B\\",\\n  },\\n  {\\n    title: \\"\u63CF\u8FF0\\",\\n    dataIndex: \\"type\\",\\n    key: \\"type\\",\\n  },\\n];");
// CONCATENATED MODULE: ./node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./src/Components/Npm/EchartsReact/index.tsx?dumi-raw-code
/* harmony default export */ var EchartsReactdumi_raw_code = ("import React from \\"react\\";\\nimport { useRef, useEffect } from \\"react\\";\\n\\nimport ReactEChart from \\"./REcharts\\";\\n\\nconst option = {\\n  tooltip: {\\n    trigger: \\"axis\\",\\n    axisPointer: {\\n      type: \\"shadow\\",\\n    },\\n  },\\n  toolbox: {\\n    show: true,\\n    top: 20,\\n    right: 20,\\n    feature: {\\n      saveAsImage: {\\n        name: \\"\u5C97\u4F4D\u8BA4\u8BC1\\",\\n        title: \\"\u4E0B\u8F7D\u56FE\u7247\\",\\n      },\\n    },\\n  },\\n  legend: {},\\n  grid: {\\n    left: \\"3%\\",\\n    right: \\"4%\\",\\n    bottom: \\"3%\\",\\n    containLabel: true,\\n  },\\n  xAxis: [\\n    {\\n      type: \\"category\\",\\n      data: [\\"Mon\\", \\"Tue\\", \\"Wed\\", \\"Thu\\", \\"Fri\\", \\"Sat\\", \\"Sun\\"],\\n    },\\n  ],\\n  yAxis: [\\n    {\\n      type: \\"value\\",\\n    },\\n  ],\\n  series: [\\n    {\\n      name: \\"Direct\\",\\n      type: \\"bar\\",\\n      emphasis: {\\n        focus: \\"series\\",\\n      },\\n      data: [320, 332, 301, 334, 390, 330, 320],\\n    },\\n    {\\n      name: \\"Email\\",\\n      type: \\"bar\\",\\n      stack: \\"Ad\\",\\n      emphasis: {\\n        focus: \\"series\\",\\n      },\\n      data: [120, 132, 101, 134, 90, 230, 210],\\n    },\\n    {\\n      name: \\"Union Ads\\",\\n      type: \\"bar\\",\\n      stack: \\"Ad\\",\\n      emphasis: {\\n        focus: \\"series\\",\\n      },\\n      data: [220, 182, 191, 234, 290, 330, 310],\\n    },\\n    {\\n      name: \\"Video Ads\\",\\n      type: \\"bar\\",\\n      stack: \\"Ad\\",\\n      emphasis: {\\n        focus: \\"series\\",\\n      },\\n      data: [150, 232, 201, 154, 190, 330, 410],\\n    },\\n    {\\n      name: \\"Search Engine\\",\\n      type: \\"bar\\",\\n      data: [862, 1018, 964, 1026, 1679, 1600, 1570],\\n      emphasis: {\\n        focus: \\"series\\",\\n      },\\n      markLine: {\\n        lineStyle: {\\n          type: \\"dashed\\",\\n        },\\n        data: [[{ type: \\"min\\" }, { type: \\"max\\" }]],\\n      },\\n    },\\n    {\\n      name: \\"Baidu\\",\\n      type: \\"bar\\",\\n      barWidth: 5,\\n      stack: \\"Search Engine\\",\\n      emphasis: {\\n        focus: \\"series\\",\\n      },\\n      data: [620, 732, 701, 734, 1090, 1130, 1120],\\n    },\\n    {\\n      name: \\"Google\\",\\n      type: \\"bar\\",\\n      stack: \\"Search Engine\\",\\n      emphasis: {\\n        focus: \\"series\\",\\n      },\\n      data: [120, 132, 101, 134, 290, 230, 220],\\n    },\\n    {\\n      name: \\"Bing\\",\\n      type: \\"bar\\",\\n      stack: \\"Search Engine\\",\\n      emphasis: {\\n        focus: \\"series\\",\\n      },\\n      data: [60, 72, 71, 74, 190, 130, 110],\\n    },\\n    {\\n      name: \\"Others\\",\\n      type: \\"bar\\",\\n      stack: \\"Search Engine\\",\\n      emphasis: {\\n        focus: \\"series\\",\\n      },\\n      data: [62, 82, 91, 84, 109, 110, 120],\\n    },\\n  ],\\n};\\n\\nconst EchartsReact = () => {\\n  const echartsRef = useRef<any>(null!);\\n\\n  useEffect(() => {\\n    const base64 = echartsRef.current.ref.getDataURL();\\n    console.log(base64);\\n  }, []);\\n\\n  const onChartClick = (params: any) => {\\n    console.log(params);\\n  };\\n\\n  const onChartLegendselectchanged = (params: any) => {\\n    console.log(params);\\n  };\\n\\n  const onEvents = {\\n    click: onChartClick,\\n    legendselectchanged: onChartLegendselectchanged,\\n  };\\n\\n  return (\\n    <>\\n      <ReactEChart\\n        ref={echartsRef}\\n        option={option}\\n        onEvents={onEvents}\\n      />\\n    </>\\n  );\\n};\\n\\nexport default EchartsReact;");
// CONCATENATED MODULE: ./node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./src/Components/Npm/EchartsReact/REcharts/index.tsx?dumi-raw-code
/* harmony default export */ var REchartsdumi_raw_code = ("import { useRef, useImperativeHandle, forwardRef } from \\"react\\";\\nimport type { EChartsReactProps } from \\"echarts-for-react/lib/types\\";\\nimport ReactECharts from \\"echarts-for-react\\";\\n\\nconst ReactEChart = (props: EChartsReactProps, echartsRef: any) => {\\n  const ref = useRef<any>(null!);\\n  useImperativeHandle(echartsRef, () => ({\\n    ref: ref.current.getEchartsInstance(),\\n  }));\\n\\n  return (\\n    <div ref={echartsRef}>\\n      <ReactECharts ref={ref} {...props} />\\n    </div>\\n  );\\n};\\n\\nexport default forwardRef(ReactEChart);");
// CONCATENATED MODULE: ./node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./src/Components/React/MuitipleRef/index.tsx?dumi-raw-code
/* harmony default export */ var MuitipleRefdumi_raw_code = ("/* eslint-disable react/jsx-key */\\nimport { useRef } from \\"react\\";\\nimport { Card } from \\"antd\\";\\nimport React from \\"react\\";\\n\\nconst MuitipleRef = () => {\\n  const list = [...Array(8).keys()];\\n  const inputRef = useRef([]);\\n  const handler = (idx: number): any => {\\n    const next = inputRef.current[idx + 1];\\n    if (next) {\\n      (next as any).focus();\\n    }\\n  };\\n\\n  return (\\n    <Card style={{ margin: 24 }}>\\n      <div className=\\"App\\">\\n        <div className=\\"input_boxes\\">\\n          {list.map((x) => (\\n            <div>\\n              <input\\n                key={x}\\n                ref={(el) => ((inputRef as any).current[x] = el)}\\n                onChange={handler(x)}\\n                type=\\"number\\"\\n                className=\\"otp_box\\"\\n              />\\n            </div>\\n          ))}\\n        </div>\\n      </div>\\n    </Card>\\n  );\\n};\\n\\nexport default MuitipleRef;");
// CONCATENATED MODULE: ./node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./src/Components/React/RefDemo/ClassUseHookRef/index.tsx?dumi-raw-code
/* harmony default export */ var ClassUseHookRefdumi_raw_code = ("import { useImperativeHandle } from \\"react\\";\\nimport { Card } from \\"antd\\";\\nimport React from \\"react\\";\\n\\nconst Children = (props: { ModalRef: any }) => {\\n  const { ModalRef } = props;\\n\\n  useImperativeHandle(ModalRef, () => ({\\n    getData: () => {\\n      return [1, 2, 3];\\n    },\\n  }));\\n\\n  return <>Children</>;\\n};\\n\\nexport default class Father extends React.Component {\\n  ModalRef: any = React.createRef();\\n  state = {};\\n  componentDidMount() {\\n    console.log(this.ModalRef.current.getData());\\n  }\\n\\n  render() {\\n    return (\\n      <>\\n        <Card style={{ margin: 24 }}>\\n          <Children ModalRef={this.ModalRef} />\\n        </Card>\\n      </>\\n    );\\n  }\\n}");
// CONCATENATED MODULE: ./node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./src/Components/React/RefDemo/HookUseHookRef/index.tsx?dumi-raw-code
/* harmony default export */ var HookUseHookRefdumi_raw_code = ("import {\\n  useImperativeHandle,\\n  useRef,\\n  useEffect,\\n  forwardRef,\\n} from \\"react\\";\\nimport { Card } from \\"antd\\";\\nimport React from \\"react\\";\\n\\nconst Child = (props: any, ModalRef: any) => {\\n  useImperativeHandle(ModalRef, () => ({\\n    getData: () => {\\n      return [1, 2, 3];\\n    },\\n  }));\\n\\n  return (\\n    <>\\n      <div ref={ModalRef}>sss</div>\\n    </>\\n  );\\n};\\n\\nconst Children = forwardRef(Child);\\n\\nconst Father = () => {\\n  const ModalRef = useRef<any>(null);\\n\\n  useEffect(() => {\\n    console.log(ModalRef.current.getData());\\n  }, []);\\n\\n  return (\\n    <>\\n      <Card style={{ margin: 24 }}>\\n        <Children ref={ModalRef} />\\n      </Card>\\n    </>\\n  );\\n};\\n\\nexport default Father;");
// CONCATENATED MODULE: ./node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./src/Visualization/D3/barChart.tsx?dumi-raw-code
/* harmony default export */ var barChartdumi_raw_code = ("import React, { useEffect, useState } from 'react';\\nimport { Card, Button } from 'antd';\\nimport * as d3 from 'd3';\\n\\nconst D3 = () => {\\n  const [dataset, setDataset] = useState([250, 210, 170, 130, 90]);\\n\\n  const handleInitChart = () => {\\n    let marge = { top: 30, bottom: 30, left: 30, right: 30 };\\n    let body = d3.select('body');\\n    let svg = body.select('#mainsvg');\\n    svg.selectAll('g').remove();\\n    let g = svg\\n      .append('g')\\n      .attr('transform', 'translate(' + marge.top + ',' + marge.left + ')');\\n\\n    let rectHeight = 30;\\n    g.selectAll('rect')\\n      .data(dataset)\\n      .enter()\\n      .append('rect')\\n      .attr('x', 20)\\n      .attr('y', function(d, i) {\\n        return i * rectHeight;\\n      })\\n      .attr('width', function(d) {\\n        return d;\\n      })\\n      .attr('height', rectHeight - 5)\\n      .attr('fill', 'blue');\\n\\n    g.selectAll('text')\\n      .data(dataset)\\n      .enter()\\n      .append('text')\\n      .attr('x', function(d) {\\n        return 30 + d;\\n      })\\n      .attr('y', function(d, i) {\\n        return i * rectHeight + 15;\\n      })\\n      .text(function(d) {\\n        return d;\\n      });\\n  };\\n\\n  useEffect(() => {\\n    handleInitChart();\\n  }, []);\\n\\n  const setNewChartData = () => {\\n    let arr = Array.from({ length: 4 }, () => ~~(Math.random(0, 1000) * 100));\\n    setDataset(arr);\\n    handleInitChart();\\n  };\\n\\n  return (\\n    <>\\n      <Card style={{ margin: 24 }}>\\n        <Button onClick={setNewChartData}>\u8BBE\u7F6E\u65B0\u7684\u6570\u636E</Button>\\n        <svg width=\\"1200\\" height=\\"180\\" id=\\"mainsvg\\" className=\\"svgs\\" />\\n      </Card>\\n    </>\\n  );\\n};\\nexport default D3;");
// CONCATENATED MODULE: ./node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./src/Visualization/D3/barChart1.tsx?dumi-raw-code
/* harmony default export */ var barChart1dumi_raw_code = ("import React, { useEffect, useState } from 'react';\\nimport { Card, Button } from 'antd';\\nimport * as d3 from 'd3';\\n\\nconst D3 = () => {\\n  const [dataset, setDataset] = useState<number[]>([250, 210, 170, 130, 90]);\\n\\n  var scaleLinear = d3\\n    .scaleLinear()\\n    .domain([0, d3.max(dataset)] as number[])\\n    .range([0, 300]);\\n\\n  const handleInitChart = () => {\\n    let marge = { top: 30, bottom: 30, left: 30, right: 30 };\\n    let body = d3.select('body');\\n    let svg = body.select('#mainsvg1');\\n    svg.selectAll('g').remove();\\n    let g = svg\\n      .append('g')\\n      .attr('transform', 'translate(' + marge.top + ',' + marge.left + ')');\\n\\n    let rectHeight = 30;\\n    g.selectAll('rect')\\n      .data(dataset)\\n      .enter()\\n      .append('rect')\\n      .attr('x', 20)\\n      .attr('y', function(d, i) {\\n        return i * rectHeight;\\n      })\\n      .attr('width', function(d) {\\n        return scaleLinear(d);\\n      })\\n      .attr('height', rectHeight - 5)\\n      .attr('fill', 'blue');\\n\\n    g.selectAll('text')\\n      .data(dataset)\\n      .enter()\\n      .append('text')\\n      .attr('x', function(d) {\\n        return 30 + scaleLinear(d);\\n      })\\n      .attr('y', function(d, i) {\\n        return i * rectHeight + 15;\\n      })\\n      .text(function(d) {\\n        return d;\\n      });\\n  };\\n\\n  useEffect(() => {\\n    handleInitChart();\\n  }, []);\\n\\n  const setNewChartData = () => {\\n    let arr = Array.from({ length: 4 }, () => ~~(Math.random(0, 1000) * 100));\\n    setDataset(arr);\\n    handleInitChart();\\n  };\\n\\n  return (\\n    <>\\n      <Card style={{ margin: 24 }}>\\n        <Button onClick={setNewChartData}>\u8BBE\u7F6E\u65B0\u7684\u6570\u636E</Button>\\n        <svg width=\\"1200\\" height=\\"180\\" id=\\"mainsvg1\\" className=\\"svgs\\" />\\n      </Card>\\n    </>\\n  );\\n};\\nexport default D3;");
// CONCATENATED MODULE: ./node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./src/Visualization/D3/barChart2.tsx?dumi-raw-code
/* harmony default export */ var barChart2dumi_raw_code = ("import React, { useEffect, useState } from 'react';\\nimport { Card, Button } from 'antd';\\nimport * as d3 from 'd3';\\n\\nconst D3 = () => {\\n  const [dataset, setDataset] = useState<number[]>([250, 210, 170, 130, 90]);\\n\\n  var scaleLinear = d3\\n    .scaleLinear()\\n    .domain([0, d3.max(dataset)] as number[])\\n    .range([0, 250]);\\n\\n  //\u4E3A\u5750\u6807\u8F74\u5B9A\u4E49\u4E00\u4E2A\u7EBF\u6027\u6BD4\u4F8B\u5C3A\\n  var xScale = d3\\n    .scaleLinear()\\n    .domain([0, d3.max(dataset)] as number[])\\n    .range([0, 250]);\\n  var xAxis = d3\\n    .axisBottom(xScale) //\u5B9A\u4E49\u4E00\u4E2Aaxis\uFF0C\u7531bottom\u53EF\u77E5\uFF0C\u662F\u671D\u4E0B\u7684\\n    .ticks(10); //\u8BBE\u7F6E\u523B\u5EA6\u6570\u76EE\\n\\n  const handleInitChart = () => {\\n    let marge = { top: 30, bottom: 30, left: 30, right: 30 };\\n    let body = d3.select('body');\\n    let svg = body.select('#mainsvg2');\\n    svg.selectAll('g').remove();\\n    let g = svg\\n      .append('g')\\n      .attr('transform', 'translate(' + marge.top + ',' + marge.left + ')');\\n\\n    let rectHeight = 30;\\n    g.selectAll('rect')\\n      .data(dataset)\\n      .enter()\\n      .append('rect')\\n      .attr('x', 20)\\n      .attr('y', function(d, i) {\\n        return i * rectHeight;\\n      })\\n      .attr('width', function(d) {\\n        return scaleLinear(d);\\n      })\\n      .attr('height', rectHeight - 5)\\n      .attr('fill', 'blue');\\n\\n    g.selectAll('text')\\n      .data(dataset)\\n      .enter()\\n      .append('text')\\n      .attr('x', function(d) {\\n        return 30 + scaleLinear(d);\\n      })\\n      .attr('y', function(d, i) {\\n        return i * rectHeight + 15;\\n      })\\n      .text(function(d) {\\n        return d;\\n      });\\n\\n    g.append('g')\\n      .attr(\\n        'transform',\\n        'translate(' + 20 + ',' + dataset.length * rectHeight + ')',\\n      )\\n      .call(xAxis);\\n  };\\n\\n  useEffect(() => {\\n    handleInitChart();\\n  }, []);\\n\\n  const setNewChartData = () => {\\n    let arr = Array.from({ length: 4 }, () => ~~(Math.random(0, 1000) * 100));\\n    setDataset(arr);\\n    handleInitChart();\\n  };\\n\\n  return (\\n    <>\\n      <Card style={{ margin: 24 }}>\\n        <Button onClick={setNewChartData}>\u8BBE\u7F6E\u65B0\u7684\u6570\u636E</Button>\\n        <svg width=\\"1200\\" height=\\"180\\" id=\\"mainsvg2\\" className=\\"svgs\\" />\\n      </Card>\\n    </>\\n  );\\n};\\nexport default D3;");
// CONCATENATED MODULE: ./node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./src/Visualization/D3/barChart3.tsx?dumi-raw-code
/* harmony default export */ var barChart3dumi_raw_code = ("import React, { useEffect, useState } from 'react';\\nimport { Card, Button } from 'antd';\\nimport * as d3 from 'd3';\\n\\nconst D3 = () => {\\n  const [dataset, setDataset] = useState<number[]>([250, 210, 170, 130, 90]);\\n\\n  const handleInitChart = () => {\\n    let body = d3.select('body');\\n    let marge = { top: 30, bottom: 30, left: 30, right: 30 };\\n    let svg = body.select('#mainsvg3');\\n    var width = (svg.attr('width') as unknown) as number; //\u5F97\u5230\u753B\u5E03\u7684\u5BBD\\n    var height = (svg.attr('height') as unknown) as number; //\u5F97\u5230\u753B\u5E03\u7684\u957F\\n\\n    var xScale = d3\\n      .scaleBand()\\n      .domain((d3.range(dataset.length) as unknown) as string[])\\n      .rangeRound([0, width - marge.left - marge.right]);\\n    var xAxis = d3.axisBottom(xScale);\\n\\n    var yScale = d3\\n      .scaleLinear()\\n      .domain([0, d3.max(dataset)] as number[])\\n      .range([height - marge.top - marge.bottom, 0]);\\n    var yAxis = d3.axisLeft(yScale);\\n\\n    svg.selectAll('g').remove();\\n    let g = svg\\n      .append('g')\\n      .attr('transform', 'translate(' + marge.top + ',' + marge.left + ')');\\n\\n    var gs = g\\n      .selectAll('.rect')\\n      .data(dataset)\\n      .enter()\\n      .append('g');\\n\\n    var rectPadding = 10; //\u77E9\u5F62\u4E4B\u95F4\u7684\u95F4\u9699\\n    gs.append('rect')\\n      .attr('x', function(d, i) {\\n        return xScale(i) + rectPadding / 2;\\n      })\\n      .attr('y', function(d) {\\n        return yScale(d);\\n      })\\n      .attr('width', function() {\\n        return xScale.step() - rectPadding;\\n      })\\n      .attr('height', function(d) {\\n        return height - marge.top - marge.bottom - yScale(d);\\n      })\\n      .attr('fill', 'blue')\\n      .on('mouseover', function() {\\n        var rect = d3\\n          .select(this)\\n          .transition()\\n          .duration(1500) //\u5F53\u9F20\u6807\u653E\u5728\u77E9\u5F62\u4E0A\u65F6\uFF0C\u77E9\u5F62\u53D8\u6210\u9EC4\u8272\\n          .attr('fill', 'yellow');\\n      })\\n      .on('mouseout', function() {\\n        var rect = d3\\n          .select(this)\\n          .transition()\\n          .delay(1500)\\n          .duration(1500) //\u5F53\u9F20\u6807\u79FB\u51FA\u65F6\uFF0C\u77E9\u5F62\u53D8\u6210\u84DD\u8272\\n          .attr('fill', 'blue');\\n      });\\n\\n    gs.append('text')\\n      .attr('x', function(d, i) {\\n        return xScale(i) + rectPadding / 2;\\n      })\\n      .attr('y', function(d) {\\n        return yScale(d);\\n      })\\n      .attr('dx', function() {\\n        (xScale.step() - rectPadding) / 2;\\n      })\\n      .attr('dy', 20)\\n      .text(function(d) {\\n        return d;\\n      });\\n\\n    gs.append('rect')\\n      .attr('x', function(d, i) {\\n        return xScale(i) + rectPadding / 2;\\n      })\\n      .attr('y', function(d) {\\n        //\u8FD9\u91CC\u662F\u8981\u6539\u53D8\u7684\uFF0C\u5373\u521D\u59CB\u72B6\u6001\\n        var min = yScale.domain()[0];\\n        return yScale(min); //\u53EF\u4EE5\u5F97\u77E5\uFF0C\u8FD9\u91CC\u8FD4\u56DE\u7684\u662F\u6700\u5927\u503C\\n      })\\n      .attr('width', function() {\\n        return xScale.step() - rectPadding;\\n      })\\n      .attr('height', function(d) {\\n        //\u8FD9\u91CC\u8981\u6539\u53D8\uFF0C\u5373\u521D\u59CB\u72B6\u6001\\n        return 0;\\n      })\\n      .attr('fill', 'blue')\\n      .transition() //\u6DFB\u52A0\u8FC7\u6E21\\n      .duration(2000) //\u6301\u7EED\u65F6\u95F4\\n      .delay(function(d, i) {\\n        //\u5EF6\u8FDF\\n        return i * 400;\\n      })\\n      //.ease(d3.easeElasticInOut)//\u8FD9\u91CC\u8BFB\u8005\u53EF\u4EE5\u81EA\u5DF1\u5C06\u6CE8\u91CA\u53BB\u6389\uFF0C\u770B\u770B\u6548\u679C\uFF08chrome\u6D4F\u89C8\u5668\u4F1A\u62A5\u9519\uFF0C\u4F46\u662F\u4E0D\u5F71\u54CD\u6548\u679C\uFF09\\n      .attr('y', function(d) {\\n        //\u56DE\u5230\u6700\u7EC8\u72B6\u6001\\n        return yScale(d);\\n      })\\n      .attr('height', function(d) {\\n        //\u56DE\u5230\u6700\u7EC8\u72B6\u6001\\n        return height - marge.top - marge.bottom - yScale(d);\\n      });\\n\\n    gs.append('text')\\n      .attr('x', function(d, i) {\\n        return xScale(i) + rectPadding / 2;\\n      })\\n      .attr('y', function(d) {\\n        var min = yScale.domain()[0];\\n        return yScale(min);\\n      })\\n      .attr('dx', function() {\\n        (xScale.step() - rectPadding) / 2;\\n      })\\n      .attr('dy', 20)\\n      .text(function(d) {\\n        return d;\\n      })\\n      .transition()\\n      .duration(2000)\\n      .delay(function(d, i) {\\n        return i * 400;\\n      })\\n      //.ease(d3.easeElasticInOut)\\n      .attr('y', function(d) {\\n        return yScale(d);\\n      });\\n  };\\n\\n  useEffect(() => {\\n    handleInitChart();\\n  }, []);\\n\\n  const setNewChartData = () => {\\n    let arr = Array.from({ length: 4 }, () => ~~(Math.random(0, 1000) * 100));\\n    setDataset(arr);\\n    handleInitChart();\\n  };\\n\\n  return (\\n    <>\\n      <Card style={{ margin: 24 }}>\\n        <Button onClick={setNewChartData}>\u8BBE\u7F6E\u65B0\u7684\u6570\u636E</Button>\\n        <svg width=\\"1200\\" height=\\"180\\" id=\\"mainsvg3\\" className=\\"svgs\\" />\\n      </Card>\\n    </>\\n  );\\n};\\nexport default D3;");
// CONCATENATED MODULE: ./node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./src/Visualization/D3/pie.tsx?dumi-raw-code
/* harmony default export */ var piedumi_raw_code = ("import React, { useEffect, useState } from 'react';\\nimport { Card, Button } from 'antd';\\nimport * as d3 from 'd3';\\n\\nconst D3 = () => {\\n  const [dataset, setDataset] = useState<number[]>([30, 10, 43, 55, 13]);\\n\\n  const handleInitChart = () => {\\n    let body = d3.select('body');\\n    let marge = { top: 30, bottom: 30, left: 30, right: 30 };\\n    let svg = body.select('#mainsvg3');\\n    var width = (svg.attr('width') as unknown) as number; //\u5F97\u5230\u753B\u5E03\u7684\u5BBD\\n    var height = (svg.attr('height') as unknown) as number; //\u5F97\u5230\u753B\u5E03\u7684\u957F\\n    var g = svg\\n      .append('g')\\n      .attr('transform', 'translate(' + marge.top + ',' + marge.left + ')');\\n    //\u8BBE\u7F6E\u4E00\u4E2Acolor\u7684\u989C\u8272\u6BD4\u4F8B\u5C3A\uFF0C\u4E3A\u4E86\u8BA9\u4E0D\u540C\u7684\u6247\u5F62\u5448\u73B0\u4E0D\u540C\u7684\u989C\u8272\\n    var colorScale = d3\\n      .scaleOrdinal()\\n      .domain(d3.range(dataset.length))\\n      .range(d3.schemeCategory10);\\n\\n    //\u65B0\u5EFA\u4E00\u4E2A\u997C\u72B6\u56FE\\n    var pie = d3.pie();\\n    //\u65B0\u5EFA\u4E00\u4E2A\u5F27\u5F62\u751F\u6210\u5668\\n    var innerRadius = 0; //\u5185\u534A\u5F84\\n    var outerRadius = 100; //\u5916\u534A\u5F84\\n    var arc_generator = d3\\n      .arc()\\n      .innerRadius(0)\\n      .outerRadius(100);\\n\\n    var pieData = pie(dataset);\\n    console.log(pieData);\\n\\n    var gs = g\\n      .selectAll('.g')\\n      .data(pieData)\\n      .enter()\\n      .append('g')\\n      .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')'); //\u4F4D\u7F6E\u4FE1\u606F\\n\\n    //\u7ED8\u5236\u997C\u72B6\u56FE\u7684\u5404\u4E2A\u6247\u5F62\\n    gs.append('path')\\n      .attr('d', function(d) {\\n        return arc_generator(d); //\u5F80\u5F27\u5F62\u751F\u6210\u5668\u4E2D\u51FA\u5165\u6570\u636E\\n      })\\n      .attr('fill', function(d, i) {\\n        return colorScale(i); //\u8BBE\u7F6E\u989C\u8272\\n      });\\n\\n    //\u7ED8\u5236\u997C\u72B6\u56FE\u4E0A\u9762\u7684\u6587\u5B57\u4FE1\u606F\\n    gs.append('text')\\n      .attr('transform', function(d) {\\n        //\u4F4D\u7F6E\u8BBE\u5728\u4E2D\u5FC3\u5904\\n        return 'translate(' + arc_generator.centroid(d) + ')';\\n      })\\n      .attr('text-anchor', 'middle')\\n      .text(function(d) {\\n        return d.data;\\n      });\\n  };\\n\\n  useEffect(() => {\\n    handleInitChart();\\n  }, []);\\n\\n  const setNewChartData = () => {\\n    let arr = Array.from({ length: 4 }, () => ~~(Math.random(0, 1000) * 100));\\n    setDataset(arr);\\n    handleInitChart();\\n  };\\n\\n  return (\\n    <>\\n      <Card style={{ margin: 24 }}>\\n        <Button onClick={setNewChartData}>\u8BBE\u7F6E\u65B0\u7684\u6570\u636E</Button>\\n        <svg width=\\"1200\\" height=\\"180\\" id=\\"mainsvg3\\" className=\\"svgs\\" />\\n      </Card>\\n    </>\\n  );\\n};\\nexport default D3;");
// CONCATENATED MODULE: ./node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./src/Visualization/D3/force.tsx?dumi-raw-code
/* harmony default export */ var forcedumi_raw_code = ("import React, { useEffect, useState } from 'react';\\nimport { Card, Button } from 'antd';\\nimport * as d3 from 'd3';\\n\\nconst D3 = () => {\\n  const [dataset, setDataset] = useState<any[]>([\\n    //\u8282\u70B9\u96C6\\n    { name: '\u6E56\u5357\u90B5\u9633' },\\n    { name: '\u5C71\u4E1C\u83B1\u5DDE' },\\n    { name: '\u5E7F\u4E1C\u9633\u6C5F' },\\n    { name: '\u5C71\u4E1C\u67A3\u5E84' },\\n    { name: '\u6CFD' },\\n    { name: '\u6052' },\\n    { name: '\u946B' },\\n    { name: '\u660E\u5C71' },\\n    { name: '\u73ED\u957F' },\\n  ]);\\n\\n  var nodes = [\\n    //\u8282\u70B9\u96C6\\n    { name: '\u6E56\u5357\u90B5\u9633' },\\n    { name: '\u5C71\u4E1C\u83B1\u5DDE' },\\n    { name: '\u5E7F\u4E1C\u9633\u6C5F' },\\n    { name: '\u5C71\u4E1C\u67A3\u5E84' },\\n    { name: '\u6CFD' },\\n    { name: '\u6052' },\\n    { name: '\u946B' },\\n    { name: '\u660E\u5C71' },\\n    { name: '\u73ED\u957F' },\\n  ];\\n\\n  var edges = [\\n    //\u8FB9\u96C6\\n    { source: 0, target: 4, relation: '\u7C4D\u8D2F', value: 1.3 },\\n    { source: 4, target: 5, relation: '\u820D\u53CB', value: 1 },\\n    { source: 4, target: 6, relation: '\u820D\u53CB', value: 1 },\\n    { source: 4, target: 7, relation: '\u820D\u53CB', value: 1 },\\n    { source: 1, target: 6, relation: '\u7C4D\u8D2F', value: 2 },\\n    { source: 2, target: 5, relation: '\u7C4D\u8D2F', value: 0.9 },\\n    { source: 3, target: 7, relation: '\u7C4D\u8D2F', value: 1 },\\n    { source: 5, target: 6, relation: '\u540C\u5B66', value: 1.6 },\\n    { source: 6, target: 7, relation: '\u670B\u53CB', value: 0.7 },\\n    { source: 6, target: 8, relation: '\u804C\u8D23', value: 2 },\\n  ];\\n\\n  const handleInitChart = () => {\\n    let body = d3.select('body');\\n    let marge = { top: 30, bottom: 30, left: 30, right: 30 };\\n    let svg = body.select('#mainsvg3');\\n    var width = (svg.attr('width') as unknown) as number; //\u5F97\u5230\u753B\u5E03\u7684\u5BBD\\n    var height = (svg.attr('height') as unknown) as number; //\u5F97\u5230\u753B\u5E03\u7684\u957F\\n    var g = svg\\n      .append('g')\\n      .attr('transform', 'translate(' + marge.top + ',' + marge.left + ')');\\n\\n    //\u8BBE\u7F6E\u4E00\u4E2Acolor\u7684\u989C\u8272\u6BD4\u4F8B\u5C3A\uFF0C\u4E3A\u4E86\u8BA9\u4E0D\u540C\u7684\u6247\u5F62\u5448\u73B0\u4E0D\u540C\u7684\u989C\u8272\\n    var colorScale = d3\\n      .scaleOrdinal()\\n      .domain(d3.range(nodes.length))\\n      .range(d3.schemeCategory10);\\n\\n    var forceSimulation = d3\\n      .forceSimulation()\\n      .force('link', d3.forceLink())\\n      .force('charge', d3.forceManyBody())\\n      .force('center', d3.forceCenter());\\n\\n    //\u751F\u6210\u8282\u70B9\u6570\u636E\\n    forceSimulation.nodes(nodes).on('tick', ticked); //\u8FD9\u4E2A\u51FD\u6570\u5F88\u91CD\u8981\uFF0C\u540E\u9762\u7ED9\u51FA\u5177\u4F53\u5B9E\u73B0\u548C\u8BF4\u660E\\n\\n    //\u751F\u6210\u8FB9\u6570\u636E\\n    forceSimulation\\n      .force('link')\\n      .links(edges)\\n      .distance(function(d) {\\n        //\u6BCF\u4E00\u8FB9\u7684\u957F\u5EA6\\n        return d.value * 100;\\n      });\\n\\n    //\u8BBE\u7F6E\u56FE\u5F62\u7684\u4E2D\u5FC3\u4F4D\u7F6E\\n    forceSimulation\\n      .force('center')\\n      .x(width / 2)\\n      .y(height / 2);\\n\\n    //\u5728\u6D4F\u89C8\u5668\u7684\u63A7\u5236\u53F0\u8F93\u51FA\\n    console.log(nodes);\\n    console.log(edges);\\n\\n    //\u7ED8\u5236\u8FB9\\n    var links = g\\n      .append('g')\\n      .selectAll('line')\\n      .data(edges)\\n      .enter()\\n      .append('line')\\n      .attr('stroke', function(d, i) {\\n        return colorScale(i);\\n      })\\n      .attr('stroke-width', 1);\\n\\n    var linksText = g\\n      .append('g')\\n      .selectAll('text')\\n      .data(edges)\\n      .enter()\\n      .append('text')\\n      .text(function(d) {\\n        return d.relation;\\n      });\\n\\n    var gs = g\\n      .selectAll('.circleText')\\n      .data(nodes)\\n      .enter()\\n      .append('g')\\n      .attr('transform', function(d, i) {\\n        var cirX = d.x;\\n        var cirY = d.y;\\n        return 'translate(' + cirX + ',' + cirY + ')';\\n      })\\n      .call(\\n        d3\\n          .drag()\\n          .on('start', started)\\n          .on('drag', dragged)\\n          .on('end', ended),\\n      );\\n\\n    //\u7ED8\u5236\u8282\u70B9\\n    gs.append('circle')\\n      .attr('r', 10)\\n      .attr('fill', function(d, i) {\\n        return colorScale(i);\\n      });\\n    //\u6587\u5B57\\n    gs.append('text')\\n      .attr('x', -10)\\n      .attr('y', -20)\\n      .attr('dy', 10)\\n      .text(function(d) {\\n        return d.name;\\n      });\\n\\n    function ticked() {\\n      links\\n        .attr('x1', function(d) {\\n          return d.source.x;\\n        })\\n        .attr('y1', function(d) {\\n          return d.source.y;\\n        })\\n        .attr('x2', function(d) {\\n          return d.target.x;\\n        })\\n        .attr('y2', function(d) {\\n          return d.target.y;\\n        });\\n\\n      linksText\\n        .attr('x', function(d) {\\n          return (d.source.x + d.target.x) / 2;\\n        })\\n        .attr('y', function(d) {\\n          return (d.source.y + d.target.y) / 2;\\n        });\\n\\n      gs.attr('transform', function(d) {\\n        return 'translate(' + d.x + ',' + d.y + ')';\\n      });\\n    }\\n\\n    function started(d) {\\n      if (!d3.active) {\\n        forceSimulation.alphaTarget(0.8).restart();\\n      }\\n      d.subject.fx = d.x;\\n      d.subject.fy = d.y;\\n    }\\n    function dragged(d) {\\n      d.subject.fx = d.x;\\n      d.subject.fy = d.y;\\n    }\\n    function ended(d) {\\n      if (!d3.active) {\\n        forceSimulation.alphaTarget(0);\\n      }\\n      d.subject.fx = null;\\n      d.subject.fy = null;\\n    }\\n  };\\n\\n  useEffect(() => {\\n    handleInitChart();\\n  }, []);\\n\\n  const setNewChartData = () => {\\n    let arr = Array.from({ length: 4 }, () => ~~(Math.random(0, 1000) * 100));\\n    setDataset(arr);\\n    handleInitChart();\\n  };\\n\\n  return (\\n    <>\\n      <Card style={{ margin: 24 }}>\\n        <Button onClick={setNewChartData}>\u8BBE\u7F6E\u65B0\u7684\u6570\u636E</Button>\\n        <svg width=\\"1200\\" height=\\"180\\" id=\\"mainsvg3\\" className=\\"svgs\\" />\\n      </Card>\\n    </>\\n  );\\n};\\nexport default D3;");
// CONCATENATED MODULE: ./node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./src/Visualization/D3/tree.tsx?dumi-raw-code
/* harmony default export */ var treedumi_raw_code = ("import React, { useEffect, useState } from 'react';\\nimport { Card, Button } from 'antd';\\nimport * as d3 from 'd3';\\nconst data = {\\n  name: '\u4E2D\u56FD',\\n  children: [\\n    {\\n      name: '\u6D59\u6C5F',\\n      children: [\\n        { name: '\u676D\u5DDE', value: 100 },\\n        { name: '\u5B81\u6CE2', value: 100 },\\n        { name: '\u6E29\u5DDE', value: 100 },\\n        { name: '\u7ECD\u5174', value: 100 },\\n      ],\\n    },\\n    {\\n      name: '\u5E7F\u897F',\\n      children: [\\n        {\\n          name: '\u6842\u6797',\\n          children: [\\n            { name: '\u79C0\u5CF0\u533A', value: 100 },\\n            { name: '\u53E0\u5F69\u533A', value: 100 },\\n            { name: '\u8C61\u5C71\u533A', value: 100 },\\n            { name: '\u4E03\u661F\u533A', value: 100 },\\n          ],\\n        },\\n        { name: '\u5357\u5B81', value: 100 },\\n        { name: '\u67F3\u5DDE', value: 100 },\\n        { name: '\u9632\u57CE\u6E2F', value: 100 },\\n      ],\\n    },\\n    {\\n      name: '\u9ED1\u9F99\u6C5F',\\n      children: [\\n        { name: '\u54C8\u5C14\u6EE8', value: 100 },\\n        { name: '\u9F50\u9F50\u54C8\u5C14', value: 100 },\\n        { name: '\u7261\u4E39\u6C5F', value: 100 },\\n        { name: '\u5927\u5E86', value: 100 },\\n      ],\\n    },\\n    {\\n      name: '\u65B0\u7586',\\n      children: [\\n        { name: '\u4E4C\u9C81\u6728\u9F50' },\\n        { name: '\u514B\u62C9\u739B\u4F9D' },\\n        { name: '\u5410\u9C81\u756A' },\\n        { name: '\u54C8\u5BC6' },\\n      ],\\n    },\\n  ],\\n};\\n\\nconst D3 = () => {\\n  const [dataset, setDataset] = useState<any>(data);\\n\\n  const handleInitChart = () => {\\n    let body = d3.select('body');\\n    let marge = { top: 30, bottom: 30, left: 30, right: 30 };\\n    let svg = body.select('#mainsvg3');\\n    var width = (svg.attr('width') as unknown) as number; //\u5F97\u5230\u753B\u5E03\u7684\u5BBD\\n    var height = (svg.attr('height') as unknown) as number; //\u5F97\u5230\u753B\u5E03\u7684\u957F\\n    var g = svg\\n      .append('g')\\n      .attr('transform', 'translate(' + marge.top + ',' + marge.left + ')');\\n    var scale = svg\\n      .append('g')\\n      .attr('transform', 'translate(' + marge.top + ',' + marge.left + ')');\\n\\n    var hierarchyData = d3.hierarchy(dataset).sum(function(d) {\\n      return d.value;\\n    });\\n\\n    //\u521B\u5EFA\u4E00\u4E2A\u6811\u72B6\u56FE\\n    var tree = d3\\n      .tree()\\n      .size([width - 400, height - 200])\\n      .separation(function(a, b) {\\n        return (a.parent == b.parent ? 1 : 2) / a.depth;\\n      });\\n\\n    var treeData = tree(hierarchyData);\\n    var nodes = treeData.descendants();\\n    var links = treeData.links();\\n    //\u8F93\u51FA\u8282\u70B9\u548C\u8FB9\\n    console.log(nodes);\\n    console.log(links);\\n    var B\xE9zier_curve_generator = d3\\n      .linkHorizontal()\\n      .x(function(d) {\\n        return d.y;\\n      })\\n      .y(function(d) {\\n        return d.x;\\n      });\\n    //\u7ED8\u5236\u8FB9\\n    g.append('g')\\n      .selectAll('path')\\n      .data(links)\\n      .enter()\\n      .append('path')\\n      .attr('d', function(d) {\\n        var start = { x: d.source.x, y: d.source.y };\\n        var end = { x: d.target.x, y: d.target.y };\\n        return B\xE9zier_curve_generator({ source: start, target: end });\\n      })\\n      .attr('fill', 'none')\\n      .attr('stroke', 'yellow')\\n      .attr('stroke-width', 1);\\n\\n    var gs = g\\n      .append('g')\\n      .selectAll('g')\\n      .data(nodes)\\n      .enter()\\n      .append('g')\\n      .attr('transform', function(d) {\\n        var cx = d.x;\\n        var cy = d.y;\\n        return 'translate(' + cy + ',' + cx + ')';\\n      });\\n\\n    //\u7ED8\u5236\u8282\u70B9\\n    gs.append('circle')\\n      .attr('r', 6)\\n      .attr('fill', 'white')\\n      .attr('stroke', 'blue')\\n      .attr('stroke-width', 1);\\n\\n    //\u6587\u5B57\\n    gs.append('text')\\n      .attr('x', function(d) {\\n        return d.children ? -40 : 8;\\n      })\\n      .attr('y', -5)\\n      .attr('dy', 10)\\n      .text(function(d) {\\n        return d.data.name;\\n      });\\n  };\\n\\n  useEffect(() => {\\n    handleInitChart();\\n  }, []);\\n\\n  const setNewChartData = () => {\\n    let arr = Array.from({ length: 4 }, () => ~~(Math.random(0, 1000) * 100));\\n    setDataset(arr);\\n    handleInitChart();\\n  };\\n\\n  return (\\n    <>\\n      <Card style={{ margin: 24 }}>\\n        <Button onClick={setNewChartData}>\u8BBE\u7F6E\u65B0\u7684\u6570\u636E</Button>\\n        <svg width=\\"1200\\" height=\\"180\\" id=\\"mainsvg3\\" className=\\"svgs\\" />\\n      </Card>\\n    </>\\n  );\\n};\\nexport default D3;");
// CONCATENATED MODULE: ./node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./src/Visualization/svg/Base/index.tsx?dumi-raw-code
/* harmony default export */ var Basedumi_raw_code = ("\\nconst Base: React.FC = () => {\\n  return (\\n    <>\\n\\n      <h2>1. svg\u5BB9\u5668</h2>\\n      <svg\\n        width=\\"20px\\"\\n        height=\\"20px\\"\\n        // min-x min-y width height\\n        viewBox=\\"0 0 100% 100%\\"\\n        xmlns=\\"http://www.w3.org/2000/svg\\"\\n      />\\n      <h2>2. \u5171\u6709\u7684API</h2>\\n      <svg\\n        width=\\"100px\\"\\n        height=\\"100px\\"\\n        // min-x min-y width height\\n        viewBox=\\"0 0 100% 100%\\"\\n        xmlns=\\"http://www.w3.org/2000/svg\\"\\n      >\\n        <rect\\n          x=\\"0\\"\\n          y=\\"0\\"\\n          width=\\"100\\"\\n          height=\\"100\\"\\n          fill=\\"red\\"\\n          stroke=\\"blue\\"\\n          strokeDasharray=\\"10\\"\\n        />\\n      </svg>\\n      <h2>4. demo</h2>\\n      <svg\\n        width=\\"1000px\\"\\n        height=\\"250px\\"\\n        // min-x min-y width height\\n        viewBox=\\"0 0 100% 100%\\"\\n        xmlns=\\"http://www.w3.org/2000/svg\\"\\n      >\\n        <rect\\n          x=\\"0\\"\\n          y=\\"0\\"\\n          width=\\"100\\"\\n          height=\\"200\\"\\n          // \u5706\u89D2\\n          rx=\\"15\\"\\n          ry=\\"15\\"\\n          fill=\\"lavender\\"\\n        />\\n        <circle\\n          // \u5706\u5FC3\u6A2A\u5750\u6807\\n          cx=\\"220\\"\\n          // \u5706\u5FC3\u7EB5\u5750\u6807\\n          cy=\\"100\\"\\n          // \u534A\u5F84\\n          r=\\"100\\"\\n          fill=\\"red\\"\\n        />\\n        <ellipse\\n          //\u5706\u5FC3\u6A2A\u5750\u6807\\n          cx=\\"500\\"\\n          //\u5706\u5FC3\u7EB5\u5750\u6807\\n          cy=\\"100\\"\\n          //\u6A2A\u5411\u534A\u5F84\\n          rx=\\"150\\"\\n          //\u7EB5\u5411\u534A\u5F84\\n          ry=\\"100\\"\\n          fill=\\"#f06\\"\\n        />\\n        <line\\n          // \u8D77\u70B9\u6A2A\u5750\u6807\\n          x1=\\"400\\"\\n          // \u8D77\u70B9\u7EB5\u5750\u6807\\n          y1=\\"100\\"\\n          // \u7EC8\u70B9\u6A2A\u5750\u6807\\n          x2=\\"100\\"\\n          // \u7EC8\u70B9\u7EB5\u5750\u6807\\n          y2=\\"0\\"\\n          stroke=\\"black\\"\\n        />\\n        <polygon\\n          // x1,y1,x2,y2,x3,y3 ...\\n          points=\\"200,10,250,190,160,210\\"\\n          stroke=\\"blue\\"\\n        />\\n        <polyline\\n          // x1,y1,x2,y2,x3,y3 ...\\n          points=\\"200,10,250,190,160,210\\"\\n          stroke=\\"green\\"\\n        />\\n      </svg>\\n    </>\\n  );\\n};\\n\\nexport default Base;");
// CONCATENATED MODULE: ./src/.umi-production/dumi/demos/index.ts
// @ts-nocheck















































/* harmony default export */ var demos = ({
  'antd-datepicker': {
    component: Object(index_esm["dynamic"])({
      loader: async () => (await Promise.all(/* import() | demos_rekciPetaD */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(131)]).then(__webpack_require__.bind(null, "TGs9"))).default,
      loading: () => null
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": DatePickerdumi_raw_code
        },
        "Picker1/index.tsx": {
          "import": "./Picker1",
          "content": Picker1dumi_raw_code
        },
        "toolClass.tsx": {
          "import": "../toolClass",
          "content": toolClassdumi_raw_code
        },
        "Picker2/index.tsx": {
          "import": "./Picker2",
          "content": Picker2dumi_raw_code
        }
      },
      "dependencies": {
        "antd": {
          "version": "4.23.5",
          "css": "antd/dist/antd.css"
        },
        "react": {
          "version": ">=16.9.0"
        },
        "react-dom": {
          "version": ">=16.9.0"
        },
        "moment": {
          "version": "2.29.4"
        }
      },
      "componentName": "DatePicker",
      "identifier": "antd-datepicker"
    }
  },
  'antd-formlayout': {
    component: Object(index_esm["dynamic"])({
      loader: async () => (await Promise.all(/* import() | demos_tuoyaLmroF */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(133)]).then(__webpack_require__.bind(null, "KuHX"))).default,
      loading: () => null
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": FormLayoutdumi_raw_code
        }
      },
      "dependencies": {
        "antd": {
          "version": "4.23.5",
          "css": "antd/dist/antd.css"
        },
        "react": {
          "version": ">=16.9.0"
        },
        "react-dom": {
          "version": ">=16.9.0"
        }
      },
      "componentName": "FormLayout",
      "identifier": "antd-formlayout"
    }
  },
  'businesscomponent-calendar': {
    component: Object(index_esm["dynamic"])({
      loader: async () => (await Promise.all(/* import() | demos_radnelaC */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(130)]).then(__webpack_require__.bind(null, "Dp2K"))).default,
      loading: () => null
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": Calendardumi_raw_code
        },
        "components/Calendar/index.tsx": {
          "import": "./components/Calendar",
          "content": components_Calendardumi_raw_code
        },
        "components/Calendar/constant.tsx": {
          "import": "./constant",
          "content": constantdumi_raw_code
        },
        "components/Calendar/index.less": {
          "import": "./index.less",
          "content": Calendar_components_Calendardumi_raw_code
        },
        "components/Calendar/utils.ts": {
          "import": "./utils",
          "content": utilsdumi_raw_code
        }
      },
      "dependencies": {
        "antd": {
          "version": "4.23.5",
          "css": "antd/dist/antd.css"
        },
        "moment": {
          "version": "2.29.4"
        },
        "react": {
          "version": ">=16.9.0"
        },
        "react-dom": {
          "version": ">=16.9.0"
        }
      },
      "componentName": "Calendar",
      "title": "\u591A\u9009\u7684\u65E5\u671F\u63A7\u4EF6",
      "identifier": "businesscomponent-calendar"
    }
  },
  'businesscomponent-queryform': {
    component: Object(index_esm["dynamic"])({
      loader: async () => (await Promise.all(/* import() | demos_mroFyreuQ */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(127)]).then(__webpack_require__.bind(null, "6Ilp"))).default,
      loading: () => null
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": QueryFormdumi_raw_code
        },
        "components/index.tsx": {
          "import": "./components",
          "content": componentsdumi_raw_code
        },
        "components/index.less": {
          "import": "./index.less",
          "content": QueryForm_componentsdumi_raw_code
        },
        "constant.ts": {
          "import": "./constant",
          "content": QueryForm_constantdumi_raw_code
        }
      },
      "dependencies": {
        "antd": {
          "version": "4.23.5",
          "css": "antd/dist/antd.css"
        },
        "react": {
          "version": ">=16.0.0"
        },
        "react-dom": {
          "version": ">=16.0.0"
        },
        "@ant-design/icons": {
          "version": "4.7.0"
        }
      },
      "componentName": "QueryForm",
      "title": "QueryForm",
      "description": "<div class=\\"markdown\\"><p>\u67E5\u8BE2\u8868\u5355</p></div>",
      "identifier": "businesscomponent-queryform"
    }
  },
  'Select-demo': {
    component: Object(index_esm["dynamic"])({
      loader: async function () {
        var _interopRequireWildcard = __webpack_require__("3PQu")["default"];

        var _interopRequireDefault = __webpack_require__("K+nK")["default"];

        await Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(145)]).then(__webpack_require__.bind(null, "+BJd"));

        var _tag = _interopRequireDefault(await __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "mr32")));

        var _slicedToArray2 = _interopRequireDefault(await Promise.resolve(/* import() */).then(__webpack_require__.bind(null, "tJVT")));

        await Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(144)]).then(__webpack_require__.bind(null, "OaEy"));

        var _select = _interopRequireDefault(await __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "2fM7")));

        var _react = _interopRequireWildcard(await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "cDcd", 7)));

        var Option = _select["default"].Option;

        var App = function App() {
          var _useState = (0, _react.useState)(false),
              _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
              open = _useState2[0],
              setOpen = _useState2[1];

          var options = [{
            lable: 'jack',
            value: '1'
          }, {
            lable: 'lucy',
            value: '2'
          }, {
            lable: 'Yiminghe',
            value: '3'
          }];
          return /*#__PURE__*/_react["default"].createElement(_select["default"], {
            style: {
              width: 300
            },
            open: open,
            onDropdownVisibleChange: function onDropdownVisibleChange(visible) {
              return setOpen(visible);
            },
            dropdownRender: function dropdownRender(menu) {
              return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, options.map(function (item) {
                return /*#__PURE__*/_react["default"].createElement(_tag["default"], {
                  onClick: function onClick() {
                    setOpen(false);
                  },
                  key: item.value
                }, item.lable);
              }));
            },
            options: options
          });
        };

        var _default = App;
        return _default;
      },
      loading: () => null
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": "import React, { useState } from 'react';\\nimport { Select, Input, Button, Tag, Form } from 'antd';\\n\\nconst { Option } = Select;\\n\\nconst App = () => {\\n  const [open, setOpen] = useState(false);\\n  const options = [\\n    { lable: 'jack', value: '1' },\\n    { lable: 'lucy', value: '2' },\\n    { lable: 'Yiminghe', value: '3' },\\n  ];\\n  return (\\n    <Select\\n      style={{ width: 300 }}\\n      open={open}\\n      onDropdownVisibleChange={visible => setOpen(visible)}\\n      dropdownRender={menu => {\\n        return (\\n          <>\\n            {options.map(item => (\\n              <Tag\\n                onClick={() => {\\n                  setOpen(false);\\n                }}\\n                key={item.value}\\n              >\\n                {item.lable}\\n              </Tag>\\n            ))}\\n          </>\\n        );\\n      }}\\n      options={options}\\n    />\\n  );\\n};\\n\\nexport default App;"
        }
      },
      "dependencies": {
        "antd": {
          "version": "4.23.5",
          "css": "antd/dist/antd.css"
        },
        "react": {
          "version": ">=16.9.0"
        },
        "react-dom": {
          "version": ">=16.9.0"
        }
      },
      "componentName": "Select",
      "identifier": "Select-demo"
    }
  },
  'transferform-class': {
    component: Object(index_esm["dynamic"])({
      loader: async () => (await Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(128)]).then(__webpack_require__.bind(null, "yNen"))).default,
      loading: () => null
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": Classdumi_raw_code
        },
        "components/class/index.tsx": {
          "import": "./components/class",
          "content": classdumi_raw_code
        },
        "components/index.less": {
          "import": "../index.less",
          "content": TransferForm_componentsdumi_raw_code
        }
      },
      "dependencies": {
        "antd": {
          "version": "4.23.5",
          "css": "antd/dist/antd.css"
        },
        "react": {
          "version": ">=16.9.0"
        },
        "react-dom": {
          "version": ">=16.9.0"
        }
      },
      "title": "Class",
      "description": "<div class=\\"markdown\\"><p>\u4F7F\u7528\u7A7F\u68AD\u6846</p></div>",
      "identifier": "transferform-class"
    }
  },
  'transferform-hook': {
    component: Object(index_esm["dynamic"])({
      loader: async () => (await Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(128)]).then(__webpack_require__.bind(null, "YMaR"))).default,
      loading: () => null
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": Hookdumi_raw_code
        },
        "components/hook/index.tsx": {
          "import": "./components/hook",
          "content": hookdumi_raw_code
        },
        "components/index.less": {
          "import": "../index.less",
          "content": TransferForm_componentsdumi_raw_code
        }
      },
      "dependencies": {
        "antd": {
          "version": "4.23.5",
          "css": "antd/dist/antd.css"
        },
        "react": {
          "version": ">=16.9.0"
        },
        "react-dom": {
          "version": ">=16.9.0"
        }
      },
      "title": "Hook",
      "description": "<div class=\\"markdown\\"><p>\u5355\u6B21\u4F7F\u7528\u7A7F\u68AD\u6846</p></div>",
      "identifier": "transferform-hook"
    }
  },
  'transferform-hook_multiple': {
    component: Object(index_esm["dynamic"])({
      loader: async () => (await Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(128)]).then(__webpack_require__.bind(null, "UaRi"))).default,
      loading: () => null
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": Hook_multipledumi_raw_code
        },
        "components/hook/index.tsx": {
          "import": "./components/hook",
          "content": hookdumi_raw_code
        },
        "components/index.less": {
          "import": "../index.less",
          "content": TransferForm_componentsdumi_raw_code
        }
      },
      "dependencies": {
        "antd": {
          "version": "4.23.5",
          "css": "antd/dist/antd.css"
        },
        "react": {
          "version": ">=16.9.0"
        },
        "react-dom": {
          "version": ">=16.9.0"
        }
      },
      "title": "Hook_multiple",
      "description": "<div class=\\"markdown\\"><p>\u4F7F\u7528\u591A\u4E2A\u7A7F\u68AD\u6846</p></div>",
      "identifier": "transferform-hook_multiple"
    }
  },
  'file-fileexportexcel': {
    component: Object(index_esm["dynamic"])({
      loader: async () => (await Promise.all(/* import() | demos_lecxEtropxEeliF */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(4), __webpack_require__.e(126)]).then(__webpack_require__.bind(null, "PZHo"))).default,
      loading: () => null
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": FileExportExceldumi_raw_code
        },
        "utils.ts": {
          "import": "./utils",
          "content": FileExportExcel_utilsdumi_raw_code
        }
      },
      "dependencies": {
        "antd": {
          "version": "4.23.5",
          "css": "antd/dist/antd.css"
        },
        "react": {
          "version": ">=16.9.0"
        },
        "exceljs": {
          "version": "4.3.0"
        },
        "react-dom": {
          "version": ">=16.9.0"
        },
        "file-saver": {
          "version": "2.0.5"
        },
        "jszip": {
          "version": "3.10.1"
        }
      },
      "componentName": "FileExportExcel",
      "identifier": "file-fileexportexcel"
    }
  },
  'file-fileexportword': {
    component: Object(index_esm["dynamic"])({
      loader: async () => (await Promise.all(/* import() | demos_droWtropxEeliF */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(4), __webpack_require__.e(122)]).then(__webpack_require__.bind(null, "q4Sd"))).default,
      loading: () => null
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": FileExportWorddumi_raw_code
        },
        "index.less": {
          "import": "./index.less",
          "content": File_FileExportWorddumi_raw_code
        },
        "utils.ts": {
          "import": "./utils",
          "content": FileExportWord_utilsdumi_raw_code
        },
        "components/chart.tsx": {
          "import": "./components/chart",
          "content": chartdumi_raw_code
        },
        "components/table.tsx": {
          "import": "./components/table",
          "content": tabledumi_raw_code
        }
      },
      "dependencies": {
        "antd": {
          "version": "4.23.5",
          "css": "antd/dist/antd.css"
        },
        "react": {
          "version": ">=16.9.0"
        },
        "react-dom": {
          "version": ">=16.9.0"
        },
        "docxtemplater": {
          "version": "3.5.2"
        },
        "pizzip": {
          "version": "3.1.3"
        },
        "jszip-utils": {
          "version": "0.1.0"
        },
        "file-saver": {
          "version": "2.0.5"
        },
        "open-docxtemplater-image-module": {
          "version": "1.0.3"
        },
        "@ant-design/plots": {
          "version": "1.2.2"
        }
      },
      "componentName": "FileExportWord",
      "identifier": "file-fileexportword"
    }
  },
  'file-filepreviewpage': {
    component: Object(index_esm["dynamic"])({
      loader: async () => (await Promise.all(/* import() | demos_egaPweiVerPeliF */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(123)]).then(__webpack_require__.bind(null, "E9IB"))).default,
      loading: () => null
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": FilePreViewPagedumi_raw_code
        },
        "components/FilePreView.tsx": {
          "import": "./components/FilePreView",
          "content": FilePreViewdumi_raw_code
        },
        "components/FileView.tsx": {
          "import": "./FileView",
          "content": FileViewdumi_raw_code
        },
        "components/fileView.less": {
          "import": "./fileView.less",
          "content": fileViewdumi_raw_code
        },
        "components/MarkDown.tsx": {
          "import": "./MarkDown",
          "content": MarkDowndumi_raw_code
        },
        "constant.ts": {
          "import": "./constant",
          "content": FilePreViewPage_constantdumi_raw_code
        }
      },
      "dependencies": {
        "antd": {
          "version": "4.23.5",
          "css": "antd/dist/antd.css"
        },
        "react": {
          "version": ">= 0.14.0"
        },
        "react-dom": {
          "version": ">=16.9.0"
        },
        "react-excel-renderer": {
          "version": "1.1.0"
        },
        "classnames": {
          "version": "2.3.2"
        },
        "docx-preview": {
          "version": "0.1.13"
        },
        "react-markdown": {
          "version": "8.0.3"
        },
        "react-syntax-highlighter": {
          "version": "15.5.0"
        },
        "remark-gfm": {
          "version": "3.0.1"
        },
        "@types/react": {
          "version": ">=16"
        }
      },
      "componentName": "FilePreViewPage",
      "identifier": "file-filepreviewpage"
    }
  },
  'npm-echartsreact': {
    component: Object(index_esm["dynamic"])({
      loader: async () => (await __webpack_require__.e(/* import() | demos_tcaeRstrahcE */ 132).then(__webpack_require__.bind(null, "ZpqZ"))).default,
      loading: () => null
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": EchartsReactdumi_raw_code
        },
        "REcharts/index.tsx": {
          "import": "./REcharts",
          "content": REchartsdumi_raw_code
        }
      },
      "dependencies": {
        "react": {
          "version": "^15.0.0 || >=16.0.0"
        },
        "echarts-for-react": {
          "version": "3.0.2"
        },
        "echarts": {
          "version": "^3.0.0 || ^4.0.0 || ^5.0.0"
        }
      },
      "componentName": "EchartsReact",
      "transform": "{true}",
      "iframe": "{true}",
      "identifier": "npm-echartsreact"
    }
  },
  'react-muitipleref': {
    component: Object(index_esm["dynamic"])({
      loader: async () => (await Promise.all(/* import() | demos_feRelpitiuM */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(125)]).then(__webpack_require__.bind(null, "zL9H"))).default,
      loading: () => null
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": MuitipleRefdumi_raw_code
        }
      },
      "dependencies": {
        "antd": {
          "version": "4.23.5",
          "css": "antd/dist/antd.css"
        },
        "react": {
          "version": ">=16.9.0"
        },
        "react-dom": {
          "version": ">=16.9.0"
        }
      },
      "componentName": "MuitipleRef",
      "identifier": "react-muitipleref"
    }
  },
  'refdemo-classusehookref': {
    component: Object(index_esm["dynamic"])({
      loader: async () => (await Promise.all(/* import() | demos_omeDfeR */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(129)]).then(__webpack_require__.bind(null, "dCsF"))).default,
      loading: () => null
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": ClassUseHookRefdumi_raw_code
        }
      },
      "dependencies": {
        "antd": {
          "version": "4.23.5",
          "css": "antd/dist/antd.css"
        },
        "react": {
          "version": ">=16.9.0"
        },
        "react-dom": {
          "version": ">=16.9.0"
        }
      },
      "componentName": "RefDemo",
      "identifier": "refdemo-classusehookref"
    }
  },
  'refdemo-hookusehookref': {
    component: Object(index_esm["dynamic"])({
      loader: async () => (await Promise.all(/* import() | demos_omeDfeR */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(129)]).then(__webpack_require__.bind(null, "jdOd"))).default,
      loading: () => null
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": HookUseHookRefdumi_raw_code
        }
      },
      "dependencies": {
        "antd": {
          "version": "4.23.5",
          "css": "antd/dist/antd.css"
        },
        "react": {
          "version": ">=16.9.0"
        },
        "react-dom": {
          "version": ">=16.9.0"
        }
      },
      "componentName": "RefDemo",
      "identifier": "refdemo-hookusehookref"
    }
  },
  'd3-barchart': {
    component: Object(index_esm["dynamic"])({
      loader: async () => (await Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(128)]).then(__webpack_require__.bind(null, "3aFa"))).default,
      loading: () => null
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": barChartdumi_raw_code
        }
      },
      "dependencies": {
        "antd": {
          "version": "4.23.5",
          "css": "antd/dist/antd.css"
        },
        "react": {
          "version": ">=16.9.0"
        },
        "d3": {
          "version": "7.6.1"
        },
        "react-dom": {
          "version": ">=16.9.0"
        }
      },
      "identifier": "d3-barchart"
    }
  },
  'd3-barchart1': {
    component: Object(index_esm["dynamic"])({
      loader: async () => (await Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(128)]).then(__webpack_require__.bind(null, "Umss"))).default,
      loading: () => null
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": barChart1dumi_raw_code
        }
      },
      "dependencies": {
        "antd": {
          "version": "4.23.5",
          "css": "antd/dist/antd.css"
        },
        "react": {
          "version": ">=16.9.0"
        },
        "d3": {
          "version": "7.6.1"
        },
        "react-dom": {
          "version": ">=16.9.0"
        }
      },
      "identifier": "d3-barchart1"
    }
  },
  'd3-barchart2': {
    component: Object(index_esm["dynamic"])({
      loader: async () => (await Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(128)]).then(__webpack_require__.bind(null, "NP7x"))).default,
      loading: () => null
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": barChart2dumi_raw_code
        }
      },
      "dependencies": {
        "antd": {
          "version": "4.23.5",
          "css": "antd/dist/antd.css"
        },
        "react": {
          "version": ">=16.9.0"
        },
        "d3": {
          "version": "7.6.1"
        },
        "react-dom": {
          "version": ">=16.9.0"
        }
      },
      "identifier": "d3-barchart2"
    }
  },
  'd3-barchart3': {
    component: Object(index_esm["dynamic"])({
      loader: async () => (await Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(128)]).then(__webpack_require__.bind(null, "wJRY"))).default,
      loading: () => null
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": barChart3dumi_raw_code
        }
      },
      "dependencies": {
        "antd": {
          "version": "4.23.5",
          "css": "antd/dist/antd.css"
        },
        "react": {
          "version": ">=16.9.0"
        },
        "d3": {
          "version": "7.6.1"
        },
        "react-dom": {
          "version": ">=16.9.0"
        }
      },
      "transform": "{true}",
      "iframe": "{true}",
      "identifier": "d3-barchart3"
    }
  },
  'd3-pie': {
    component: Object(index_esm["dynamic"])({
      loader: async () => (await Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(128)]).then(__webpack_require__.bind(null, "tc+L"))).default,
      loading: () => null
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": piedumi_raw_code
        }
      },
      "dependencies": {
        "antd": {
          "version": "4.23.5",
          "css": "antd/dist/antd.css"
        },
        "react": {
          "version": ">=16.9.0"
        },
        "d3": {
          "version": "7.6.1"
        },
        "react-dom": {
          "version": ">=16.9.0"
        }
      },
      "transform": "{true}",
      "iframe": "{true}",
      "identifier": "d3-pie"
    }
  },
  'd3-force': {
    component: Object(index_esm["dynamic"])({
      loader: async () => (await Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(128)]).then(__webpack_require__.bind(null, "mDOk"))).default,
      loading: () => null
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": forcedumi_raw_code
        }
      },
      "dependencies": {
        "antd": {
          "version": "4.23.5",
          "css": "antd/dist/antd.css"
        },
        "react": {
          "version": ">=16.9.0"
        },
        "d3": {
          "version": "7.6.1"
        },
        "react-dom": {
          "version": ">=16.9.0"
        }
      },
      "transform": "{true}",
      "iframe": "{true}",
      "identifier": "d3-force"
    }
  },
  'd3-tree': {
    component: Object(index_esm["dynamic"])({
      loader: async () => (await Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(128)]).then(__webpack_require__.bind(null, "CxlS"))).default,
      loading: () => null
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": treedumi_raw_code
        }
      },
      "dependencies": {
        "antd": {
          "version": "4.23.5",
          "css": "antd/dist/antd.css"
        },
        "react": {
          "version": ">=16.9.0"
        },
        "d3": {
          "version": "7.6.1"
        },
        "react-dom": {
          "version": ">=16.9.0"
        }
      },
      "transform": "{true}",
      "iframe": "{true}",
      "identifier": "d3-tree"
    }
  },
  'svg-base': {
    component: Object(index_esm["dynamic"])({
      loader: async () => (await __webpack_require__.e(/* import() | demos_esaB */ 124).then(__webpack_require__.bind(null, "ri1g"))).default,
      loading: () => null
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": Basedumi_raw_code
        }
      },
      "dependencies": {},
      "componentName": "Base",
      "transform": "{true}",
      "identifier": "svg-base"
    }
  }
});
// EXTERNAL MODULE: ./src/.umi-production/dumi/apis.json
var apis = __webpack_require__("x2v5");

// EXTERNAL MODULE: ./node_modules/@umijs/preset-dumi/lib/theme/layout.js
var layout = __webpack_require__("KcUY");
var layout_default = /*#__PURE__*/__webpack_require__.n(layout);

// CONCATENATED MODULE: ./src/.umi-production/dumi/layout.tsx

// @ts-nocheck





/* harmony default export */ var dumi_layout = __webpack_exports__["default"] = (props => /*#__PURE__*/external_window_React_default.a.createElement(layout_default.a, Object(esm_extends["a" /* default */])({}, props, {
  config: config,
  demos: demos,
  apis: apis
})));

//# sourceURL=webpack:///./src/.umi-production/dumi/layout.tsx_+_47_modules?`)},kUT7:function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin

//# sourceURL=webpack:///./node_modules/@umijs/preset-dumi/node_modules/dumi-theme-default/es/components/Dark.less?`)},ptyZ:function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin

//# sourceURL=webpack:///./node_modules/@umijs/preset-dumi/node_modules/dumi-theme-default/es/components/LocaleSelect.less?`)},q3YX:function(module){eval(`module.exports = JSON.parse("{\\"menus\\":{\\"en-US\\":{\\"/article\\":[{\\"title\\":\\"2.\u57FA\u672C\u9700\u8981\u638C\u63E1\u7684\u89C4\u8303\\",\\"path\\":\\"/article/2.\u57FA\u672C\u9700\u8981\u638C\u63E1\u7684\u89C4\u8303\\",\\"meta\\":{},\\"children\\":[{\\"path\\":\\"/article/2.\u57FA\u672C\u9700\u8981\u638C\u63E1\u7684\u89C4\u8303/1.git \u547D\u4EE4\u53CA git-commit \u89C4\u8303\\",\\"title\\":\\"git \u547D\u4EE4\u53CA git-commit \u89C4\u8303\\",\\"meta\\":{\\"order\\":2}},{\\"path\\":\\"/article/2.\u57FA\u672C\u9700\u8981\u638C\u63E1\u7684\u89C4\u8303/2.typescript \u6CE8\u91CA\u89C4\u8303\\",\\"title\\":\\"typescript \u6CE8\u91CA\u6587\u6863\\",\\"meta\\":{\\"order\\":2}},{\\"path\\":\\"/article/2.\u57FA\u672C\u9700\u8981\u638C\u63E1\u7684\u89C4\u8303/3.json-schema\\",\\"title\\":\\"json-schema\\",\\"meta\\":{\\"order\\":2}}]},{\\"title\\":\\"3.CSS\\",\\"path\\":\\"/article/3.css\\",\\"meta\\":{},\\"children\\":[{\\"path\\":\\"/article/3.css/css\u53D8\u91CF\\",\\"title\\":\\"CSS \u539F\u751F\u53D8\u91CF var(--color)\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/article/3.css/flex \u5E03\u5C40\\",\\"title\\":\\"flex \u5E03\u5C40\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/article/3.css/grid \u5E03\u5C40\\",\\"title\\":\\"grid\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/article/3.css/tailwind-css\\",\\"title\\":\\"tailwindCSS\\",\\"meta\\":{\\"order\\":3}}]},{\\"title\\":\\"4.\u5199\u6587\u6863\u7684\u5DE5\u5177\\",\\"path\\":\\"/article/4.\u5199\u6587\u6863\u7684\u5DE5\u5177\\",\\"meta\\":{},\\"children\\":[{\\"path\\":\\"/article/4.\u5199\u6587\u6863\u7684\u5DE5\u5177/dumi\\",\\"title\\":\\"dumi\\",\\"meta\\":{\\"order\\":4}},{\\"path\\":\\"/article/4.\u5199\u6587\u6863\u7684\u5DE5\u5177/hexo\\",\\"title\\":\\"Hexo\\",\\"meta\\":{\\"order\\":4}},{\\"path\\":\\"/article/4.\u5199\u6587\u6863\u7684\u5DE5\u5177/rcpress\\",\\"title\\":\\"reactPress\\",\\"meta\\":{\\"order\\":4}},{\\"path\\":\\"/article/4.\u5199\u6587\u6863\u7684\u5DE5\u5177/storybook\\",\\"title\\":\\"storyBook\\",\\"meta\\":{\\"order\\":4}},{\\"path\\":\\"/article/4.\u5199\u6587\u6863\u7684\u5DE5\u5177/vuepress\\",\\"title\\":\\"VuePress\\",\\"meta\\":{\\"order\\":4}}]},{\\"title\\":\\"5.\u524D\u7AEF\u5DE5\u7A0B\u5316\\",\\"path\\":\\"/article/5.\u524D\u7AEF\u5DE5\u7A0B\u5316\\",\\"meta\\":{},\\"children\\":[{\\"path\\":\\"/article/5.\u524D\u7AEF\u5DE5\u7A0B\u5316/browserslistrc\\",\\"title\\":\\"browserslistrc\\",\\"meta\\":{\\"order\\":5}},{\\"path\\":\\"/article/5.\u524D\u7AEF\u5DE5\u7A0B\u5316/commitlintconfigjs\\",\\"title\\":\\"commitlint.config.js\\",\\"meta\\":{\\"order\\":5}},{\\"path\\":\\"/article/5.\u524D\u7AEF\u5DE5\u7A0B\u5316/gitattributes\\",\\"title\\":\\"gitattributes\\",\\"meta\\":{\\"order\\":5}},{\\"path\\":\\"/article/5.\u524D\u7AEF\u5DE5\u7A0B\u5316/license\\",\\"title\\":\\"License\\",\\"meta\\":{\\"order\\":5}},{\\"path\\":\\"/article/5.\u524D\u7AEF\u5DE5\u7A0B\u5316/node-\u811A\u672C\u81EA\u52A8\u6CE8\u5165\u8DEF\u7531\\",\\"title\\":\\"node \u811A\u672C\u81EA\u52A8\u6CE8\u5165\u8DEF\u7531\\",\\"meta\\":{\\"order\\":5}},{\\"path\\":\\"/article/5.\u524D\u7AEF\u5DE5\u7A0B\u5316/npmrc\\",\\"title\\":\\"npmrc\\",\\"meta\\":{\\"order\\":5}},{\\"path\\":\\"/article/5.\u524D\u7AEF\u5DE5\u7A0B\u5316/stylelintrc\\",\\"title\\":\\"stylelintrc\\",\\"meta\\":{\\"order\\":5}},{\\"path\\":\\"/article/5.\u524D\u7AEF\u5DE5\u7A0B\u5316/tsconfig\\",\\"title\\":\\"tsconfig\\",\\"meta\\":{\\"order\\":5}},{\\"path\\":\\"/article/5.\u524D\u7AEF\u5DE5\u7A0B\u5316/webpack\\",\\"title\\":\\"webpack\\",\\"meta\\":{\\"order\\":5}},{\\"path\\":\\"/article/5.\u524D\u7AEF\u5DE5\u7A0B\u5316/\u9879\u76EE-eslint-prettierrc-\u53CA-vscode-\u63D2\u4EF6-\u914D\u7F6E\\",\\"title\\":\\"Eslint\\",\\"meta\\":{\\"order\\":5}}]},{\\"title\\":\\"6.\u8FD0\u7EF4\u76F8\u5173\\",\\"path\\":\\"/article/6.\u8FD0\u7EF4\u76F8\u5173\\",\\"meta\\":{},\\"children\\":[{\\"path\\":\\"/article/6.\u8FD0\u7EF4\u76F8\u5173/cicd\\",\\"title\\":\\"CICD\\",\\"meta\\":{\\"order\\":6}},{\\"path\\":\\"/article/6.\u8FD0\u7EF4\u76F8\u5173/docker\\",\\"title\\":\\"Docker\\",\\"meta\\":{\\"order\\":6}},{\\"path\\":\\"/article/6.\u8FD0\u7EF4\u76F8\u5173/k8s\\",\\"title\\":\\"kubernetes\\",\\"meta\\":{\\"order\\":6}},{\\"path\\":\\"/article/6.\u8FD0\u7EF4\u76F8\u5173/linux\u547D\u4EE4\\",\\"title\\":\\"Linux\\",\\"meta\\":{\\"order\\":6}},{\\"path\\":\\"/article/6.\u8FD0\u7EF4\u76F8\u5173/nginx\\",\\"title\\":\\"Nginx\\",\\"meta\\":{\\"order\\":6}},{\\"path\\":\\"/article/6.\u8FD0\u7EF4\u76F8\u5173/\u963F\u91CC\u4E91\\",\\"title\\":\\"\u963F\u91CC\u4E91\\",\\"meta\\":{\\"order\\":6}}]},{\\"title\\":\\"8.\u5B9E\u8DF5\u64CD\u4F5C\\",\\"path\\":\\"/article/8.\u5B9E\u8DF5\u64CD\u4F5C\\",\\"meta\\":{},\\"children\\":[{\\"path\\":\\"/article/8.\u5B9E\u8DF5\u64CD\u4F5C/react-native\\",\\"title\\":\\"reactNative\\",\\"meta\\":{\\"order\\":8}},{\\"path\\":\\"/article/8.\u5B9E\u8DF5\u64CD\u4F5C/\u642D\u5EFA\u4E00\u4E2Agitlab\\",\\"title\\":\\"\u81EA\u5DF1\u642D\u5EFA\u4E00\u4E2A gitlab\\",\\"meta\\":{\\"order\\":8}},{\\"path\\":\\"/article/8.\u5B9E\u8DF5\u64CD\u4F5C/\u811A\u624B\u67B6\\",\\"title\\":\\"\u81EA\u5DF1\u642D\u5EFA\u4E00\u4E2A\u811A\u624B\u67B6\\",\\"meta\\":{\\"order\\":8}}]},{\\"title\\":\\"9.react\\",\\"path\\":\\"/article/9.react\\",\\"meta\\":{},\\"children\\":[{\\"path\\":\\"/article/9.react/ahooks\\",\\"title\\":\\"Ahooks\\",\\"meta\\":{\\"order\\":9}},{\\"path\\":\\"/article/9.react/antd-design\\",\\"title\\":\\"Ant Design\\",\\"meta\\":{\\"order\\":9}},{\\"path\\":\\"/article/9.react/antd-pro\\",\\"title\\":\\"Ant-Pro\\",\\"meta\\":{\\"order\\":9}},{\\"path\\":\\"/article/9.react/dva\\",\\"title\\":\\"Dva\\",\\"meta\\":{\\"order\\":9}},{\\"path\\":\\"/article/9.react/nextjs\\",\\"title\\":\\"NextJS\\",\\"meta\\":{\\"order\\":9}},{\\"path\\":\\"/article/9.react/react\\",\\"title\\":\\"React\\",\\"meta\\":{\\"order\\":9}},{\\"path\\":\\"/article/9.react/react-charts\\",\\"title\\":\\"reactCharts\\",\\"meta\\":{\\"order\\":9}},{\\"path\\":\\"/article/9.react/react-map\\",\\"title\\":\\"React-map\\",\\"meta\\":{\\"order\\":9}},{\\"path\\":\\"/article/9.react/react-native\\",\\"title\\":\\"Reative Native\\",\\"meta\\":{\\"order\\":9}},{\\"path\\":\\"/article/9.react/umi\\",\\"title\\":\\"UmiJS\\",\\"meta\\":{\\"order\\":9}},{\\"path\\":\\"/article/9.react/umi4\\",\\"title\\":\\"umi4\\",\\"meta\\":{\\"order\\":9}},{\\"path\\":\\"/article/9.react/zustand\\",\\"title\\":\\"zustand\\",\\"meta\\":{\\"order\\":9}}]}],\\"/article2\\":[{\\"title\\":\\"10.vue\\",\\"path\\":\\"/article2/10.vue\\",\\"meta\\":{},\\"children\\":[{\\"path\\":\\"/article2/10.vue/vite\\",\\"title\\":\\"Vite\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/article2/10.vue/vue\\",\\"title\\":\\"vue\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/article2/10.vue/vue3\\",\\"title\\":\\"Vue 3.0\\",\\"meta\\":{\\"order\\":3}}]},{\\"title\\":\\"12.typescript\\",\\"path\\":\\"/article2/12.typescript\\",\\"meta\\":{},\\"children\\":[{\\"path\\":\\"/article2/12.typescript/typescript\\",\\"title\\":\\"Typescript\\",\\"meta\\":{\\"order\\":3}}]},{\\"title\\":\\"14.\u53EF\u89C6\u5316\\",\\"path\\":\\"/article2/14.\u53EF\u89C6\u5316\\",\\"meta\\":{},\\"children\\":[{\\"path\\":\\"/article2/14.\u53EF\u89C6\u5316/canvas\\",\\"title\\":\\"canvas\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/article2/14.\u53EF\u89C6\u5316/d3\\",\\"title\\":\\"d3\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/article2/14.\u53EF\u89C6\u5316/svg\\",\\"title\\":\\"SVG\\",\\"meta\\":{\\"order\\":3}}]},{\\"title\\":\\"18.\u8BBE\u8BA1\u6A21\u5F0F\\",\\"path\\":\\"/article2/18.\u8BBE\u8BA1\u6A21\u5F0F\\",\\"meta\\":{},\\"children\\":[{\\"path\\":\\"/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/1.\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F\\",\\"title\\":\\"\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/10.\u88C5\u9970\u5668\u6A21\u5F0F\\",\\"title\\":\\"\u88C5\u9970\u5668\u6A21\u5F0F\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/12.\u6865\u63A5\u6A21\u5F0F\\",\\"title\\":\\"\u6865\u63A5\u6A21\u5F0F\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/13.\u7EC4\u5408\u6A21\u5F0F\\",\\"title\\":\\"\u7EC4\u5408\u6A21\u5F0F\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/14.\u4EAB\u5143\u6A21\u5F0F\\",\\"title\\":\\"\u4EAB\u5143\u6A21\u5F0F\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/15.\u6A21\u677F\u65B9\u6CD5\u6A21\u5F0F\\",\\"title\\":\\"\u6A21\u677F\u65B9\u6CD5\u6A21\u5F0F\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/16.\u89C2\u5BDF\u8005\u6A21\u5F0F\\",\\"title\\":\\"\u89C2\u5BDF\u8005\u6A21\u5F0F\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/17.\u72B6\u6001\u6A21\u5F0F\\",\\"title\\":\\"\u72B6\u6001\u6A21\u5F0F\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/18.\u7B56\u7565\u6A21\u5F0F\\",\\"title\\":\\"\u7B56\u7565\u6A21\u5F0F\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/19.\u8D23\u4EFB\u94FE\u6A21\u5F0F\\",\\"title\\":\\"\u8D23\u4EFB\u94FE\u6A21\u5F0F\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/2.\u5DE5\u5382\u65B9\u6CD5\u6A21\u5F0F\\",\\"title\\":\\"\u5DE5\u5382\u65B9\u6CD5\u6A21\u5F0F\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/20.\u547D\u4EE4\u6A21\u5F0F\\",\\"title\\":\\"\u547D\u4EE4\u6A21\u5F0F\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/21.\u8BBF\u95EE\u8005\u6A21\u5F0F\\",\\"title\\":\\"\u8BBF\u95EE\u8005\u6A21\u5F0F\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/22.\u4E2D\u4ECB\u8005\u6A21\u5F0F\\",\\"title\\":\\"\u4E2D\u4ECB\u8005\u6A21\u5F0F\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/23.\u5907\u5FD8\u5F55\u6A21\u5F0F\\",\\"title\\":\\"\u5907\u5FD8\u5F55\u6A21\u5F0F\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/24.\u8FED\u4EE3\u5668\u6A21\u5F0F\\",\\"title\\":\\"\u8FED\u4EE3\u5668\u6A21\u5F0F\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/25.\u89E3\u91CA\u5668\u6A21\u5F0F\\",\\"title\\":\\"\u89E3\u91CA\u5668\u6A21\u5F0F\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/3.\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\\",\\"title\\":\\"\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/4.\u5EFA\u9020\u8005\u6A21\u5F0F\\",\\"title\\":\\"\u5EFA\u9020\u8005\u6A21\u5F0F\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/5.\u539F\u578B\u6A21\u5F0F\\",\\"title\\":\\"\u539F\u578B\u6A21\u5F0F\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/6.\u5355\u4F8B\u6A21\u5F0F\\",\\"title\\":\\"\u5355\u4F8B\u6A21\u5F0F\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/7.\u5916\u89C2\u6A21\u5F0F\\",\\"title\\":\\"\u5916\u89C2\u6A21\u5F0F\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/8.\u9002\u914D\u5668\u6A21\u5F0F\\",\\"title\\":\\"\u9002\u914D\u5668\u6A21\u5F0F\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/9.\u4EE3\u7406\u6A21\u5F0F\\",\\"title\\":\\"\u4EE3\u7406\u6A21\u5F0F\\",\\"meta\\":{\\"order\\":3}}]},{\\"title\\":\\"20.\u6709\u610F\u601D\u7684\u5E93\\",\\"path\\":\\"/article2/20.\u6709\u610F\u601D\u7684\u5E93\\",\\"meta\\":{},\\"children\\":[{\\"path\\":\\"/article2/20.\u6709\u610F\u601D\u7684\u5E93/lottie\\",\\"title\\":\\"Lottie\\",\\"meta\\":{\\"order\\":3}}]},{\\"title\\":\\"21.macos\u76F8\u5173\\",\\"path\\":\\"/article2/21.macos\u76F8\u5173\\",\\"meta\\":{},\\"children\\":[{\\"path\\":\\"/article2/21.macos\u76F8\u5173/copilot\\",\\"title\\":\\"copilot\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/article2/21.macos\u76F8\u5173/github-badge\\",\\"title\\":\\"githubBadge\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/article2/21.macos\u76F8\u5173/github\u5361\u987F\u539F\u56E0\\",\\"title\\":\\"github \u5361\u987F\u539F\u56E0\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/article2/21.macos\u76F8\u5173/\u4F7F\u7528\u5728\u7EBFvscode\u6253\u5F00github\\",\\"title\\":\\"\u4F7F\u7528\u5728\u7EBF vscode \u6253\u5F00 github\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/article2/21.macos\u76F8\u5173/\u6CB9\u7334\u811A\u672C\\",\\"title\\":\\"\u6CB9\u7334\u811A\u672C\\",\\"meta\\":{\\"order\\":3}}]}],\\"/components\\":[{\\"title\\":\\"antd\\",\\"path\\":\\"/components/antd\\",\\"meta\\":{\\"order\\":1},\\"children\\":[{\\"path\\":\\"/components/antd/date-picker\\",\\"title\\":\\"DatePicker\\",\\"meta\\":{\\"order\\":1}},{\\"path\\":\\"/components/antd/form-layout\\",\\"title\\":\\"FormLayout\\",\\"meta\\":{\\"order\\":1}}]},{\\"title\\":\\"npm package\\",\\"path\\":\\"/components/npm\\",\\"meta\\":{\\"order\\":1},\\"children\\":[{\\"path\\":\\"/components/npm/echarts-react\\",\\"title\\":\\"echarts-for-react\\",\\"meta\\":{\\"order\\":1}}]},{\\"title\\":\\"react\u6280\u5DE7\\",\\"path\\":\\"/components/react\\",\\"meta\\":{\\"order\\":1},\\"children\\":[{\\"path\\":\\"/components/react/muitiple-ref\\",\\"title\\":\\"MyitipleRef\\",\\"meta\\":{\\"order\\":1}},{\\"path\\":\\"/components/react/ref-demo\\",\\"title\\":\\"RefDemo\\",\\"meta\\":{\\"order\\":1}},{\\"path\\":\\"/components/react/ts-ref-instance\\",\\"title\\":\\"TsRefInstance\\",\\"meta\\":{\\"order\\":1}}]},{\\"title\\":\\"\u6587\u4EF6\u7684\u5BFC\u51FA\u4E0E\u9884\u89C8\\",\\"path\\":\\"/components/file\\",\\"meta\\":{\\"order\\":2},\\"children\\":[{\\"path\\":\\"/components/file/file-export-excel\\",\\"title\\":\\"\u524D\u7AEF\u5BFC\u51FA excel\\",\\"meta\\":{\\"order\\":2}},{\\"path\\":\\"/components/file/file-export-word\\",\\"title\\":\\"\u524D\u7AEF\u5BFC\u51FA word\\",\\"meta\\":{\\"order\\":2}},{\\"path\\":\\"/components/file/file-pre-view-page\\",\\"title\\":\\"\u524D\u7AEF\u9884\u89C8 PDF excel word \u7B49\u5404\u7C7B\u6587\u4EF6\\",\\"meta\\":{\\"order\\":2}}]},{\\"title\\":\\"\u5C01\u88C5\u7684\u4E1A\u52A1\u7EC4\u4EF6\\",\\"path\\":\\"/components/my-components\\",\\"meta\\":{\\"order\\":2},\\"children\\":[{\\"path\\":\\"/components/my-components/calendar\\",\\"title\\":\\"\u591A\u9009\u7684\u65E5\u671F\u63A7\u4EF6\\",\\"meta\\":{\\"order\\":2}},{\\"path\\":\\"/components/my-components/query-form\\",\\"title\\":\\"QueryForm\\",\\"meta\\":{\\"order\\":2}},{\\"path\\":\\"/components/my-components/select\\",\\"title\\":\\"Select\\",\\"meta\\":{\\"order\\":2}},{\\"path\\":\\"/components/my-components/transfer-form\\",\\"title\\":\\"\u7A7F\u68AD\u6846\\",\\"meta\\":{\\"order\\":2}}]}],\\"/debug\\":[{\\"path\\":\\"/debug\\",\\"title\\":\\"Debug\\",\\"meta\\":{\\"order\\":4}}],\\"/npm\\":[{\\"path\\":\\"/npm\\",\\"title\\":\\"Npm\\",\\"meta\\":{}}],\\"/project\\":[{\\"title\\":\\"theme\\",\\"path\\":\\"/project/theme\\",\\"meta\\":{\\"order\\":5},\\"children\\":[]},{\\"title\\":\\"VueAutoImport\\",\\"path\\":\\"/project/VueAutoImport\\",\\"meta\\":{\\"order\\":6},\\"children\\":[]},{\\"title\\":\\"VueDebugger\\",\\"path\\":\\"/project/VueDebugger\\",\\"meta\\":{\\"order\\":6},\\"children\\":[]},{\\"title\\":\\"docker\\",\\"path\\":\\"/project/docker\\",\\"meta\\":{\\"order\\":6},\\"children\\":[]},{\\"title\\":\\"UmiPermission\\",\\"path\\":\\"/project/umi_permission\\",\\"meta\\":{\\"order\\":6},\\"children\\":[]},{\\"title\\":\\"BuriedPoint\\",\\"path\\":\\"/project/BuriedPoint\\",\\"meta\\":{},\\"children\\":[]},{\\"title\\":\\"CustomTableAndFom\\",\\"path\\":\\"/project/CustomTableAndFom\\",\\"meta\\":{},\\"children\\":[]},{\\"title\\":\\"\u5927\u6587\u4EF6\u65AD\u70B9\u7EED\u4F20\\",\\"path\\":\\"/project/LargeFileUpload\\",\\"meta\\":{},\\"children\\":[]},{\\"title\\":\\"MultipleTag\\",\\"path\\":\\"/project/MultipleTag\\",\\"meta\\":{},\\"children\\":[]},{\\"title\\":\\"Persistence\\",\\"path\\":\\"/project/Persistence\\",\\"meta\\":{},\\"children\\":[]},{\\"title\\":\\"VueHOC\\",\\"path\\":\\"/project/VueHOC\\",\\"meta\\":{},\\"children\\":[]},{\\"title\\":\\"node \u811A\u672C\u6CE8\u5165\u6587\u4EF6\\",\\"path\\":\\"/project/node\\",\\"meta\\":{},\\"children\\":[]},{\\"title\\":\\"React \u6027\u80FD\u4F18\u5316\\",\\"path\\":\\"/project/react_optimization\\",\\"meta\\":{},\\"children\\":[]},{\\"title\\":\\"sso\u5355\u70B9\u767B\u5F55\\",\\"path\\":\\"/project/sso\\",\\"meta\\":{},\\"children\\":[]},{\\"title\\":\\"Websocket\\",\\"path\\":\\"/project/websocket\\",\\"meta\\":{},\\"children\\":[]}],\\"/visualization\\":[{\\"title\\":\\"canvas\\",\\"meta\\":{\\"__fallback\\":true},\\"children\\":[],\\"path\\":\\"/visualization/canvas\\"},{\\"title\\":\\"D3\\",\\"path\\":\\"/visualization/d3\\",\\"meta\\":{},\\"children\\":[{\\"path\\":\\"/visualization/d3\\",\\"title\\":\\"D3\\",\\"meta\\":{}},{\\"path\\":\\"/visualization/d3/proportion1\\",\\"title\\":\\"Proportion1\\",\\"meta\\":{}},{\\"path\\":\\"/visualization/d3/proportion2\\",\\"title\\":\\"Proportion2\\",\\"meta\\":{}}]},{\\"title\\":\\"Svg\\",\\"path\\":\\"/visualization/svg\\",\\"meta\\":{},\\"children\\":[{\\"path\\":\\"/visualization/svg/base\\",\\"title\\":\\"Base\\",\\"meta\\":{}},{\\"path\\":\\"/visualization/svg/hign\\",\\"title\\":\\"Hign\\",\\"meta\\":{}}]}],\\"*\\":[{\\"path\\":\\"/\\",\\"title\\":\\"my-demo - My various demo and bug summary\\",\\"meta\\":{\\"order\\":10}}],\\"/guide\\":[{\\"path\\":\\"/guide\\",\\"title\\":\\"\u603B\u89C8\\",\\"meta\\":{\\"order\\":1}},{\\"title\\":\\"TypeScript\u8FDB\u9636\u6587\u7AE0\\",\\"path\\":\\"/guide/type-script\u8FDB\u9636\u6587\u7AE0\\",\\"meta\\":{\\"order\\":1},\\"children\\":[]},{\\"title\\":\\"\u6211\u7684TypeScript\u76F8\u5173\u4EE3\u7801\\",\\"path\\":\\"/guide/\u6211\u7684type-script\u76F8\u5173\u4EE3\u7801\\",\\"meta\\":{\\"order\\":1},\\"children\\":[]},{\\"title\\":\\"\u9AD8\u7EA7\u524D\u7AEF\u5FC5\u8BFB\\",\\"path\\":\\"/guide/\u9AD8\u7EA7\u524D\u7AEF\u5FC5\u8BFB\\",\\"meta\\":{\\"order\\":1},\\"children\\":[]}]},\\"zh-CN\\":{\\"*\\":[{\\"path\\":\\"/zh-CN\\",\\"title\\":\\"my-demo - \u6211\u7684\u5404\u79CDdemo\u53CAbug\u603B\u7ED3\\",\\"meta\\":{\\"order\\":10}}],\\"/zh-CN/article\\":[{\\"title\\":\\"2.\u57FA\u672C\u9700\u8981\u638C\u63E1\u7684\u89C4\u8303\\",\\"path\\":\\"/zh-CN/article/2.\u57FA\u672C\u9700\u8981\u638C\u63E1\u7684\u89C4\u8303\\",\\"meta\\":{},\\"children\\":[{\\"path\\":\\"/zh-CN/article/2.\u57FA\u672C\u9700\u8981\u638C\u63E1\u7684\u89C4\u8303/1.git \u547D\u4EE4\u53CA git-commit \u89C4\u8303\\",\\"title\\":\\"git \u547D\u4EE4\u53CA git-commit \u89C4\u8303\\",\\"meta\\":{\\"order\\":2}},{\\"path\\":\\"/zh-CN/article/2.\u57FA\u672C\u9700\u8981\u638C\u63E1\u7684\u89C4\u8303/2.typescript \u6CE8\u91CA\u89C4\u8303\\",\\"title\\":\\"typescript \u6CE8\u91CA\u6587\u6863\\",\\"meta\\":{\\"order\\":2}},{\\"path\\":\\"/zh-CN/article/2.\u57FA\u672C\u9700\u8981\u638C\u63E1\u7684\u89C4\u8303/3.json-schema\\",\\"title\\":\\"json-schema\\",\\"meta\\":{\\"order\\":2}}]},{\\"title\\":\\"3.CSS\\",\\"path\\":\\"/zh-CN/article/3.css\\",\\"meta\\":{},\\"children\\":[{\\"path\\":\\"/zh-CN/article/3.css/css\u53D8\u91CF\\",\\"title\\":\\"CSS \u539F\u751F\u53D8\u91CF var(--color)\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/zh-CN/article/3.css/flex \u5E03\u5C40\\",\\"title\\":\\"flex \u5E03\u5C40\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/zh-CN/article/3.css/grid \u5E03\u5C40\\",\\"title\\":\\"grid\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/zh-CN/article/3.css/tailwind-css\\",\\"title\\":\\"tailwindCSS\\",\\"meta\\":{\\"order\\":3}}]},{\\"title\\":\\"4.\u5199\u6587\u6863\u7684\u5DE5\u5177\\",\\"path\\":\\"/zh-CN/article/4.\u5199\u6587\u6863\u7684\u5DE5\u5177\\",\\"meta\\":{},\\"children\\":[{\\"path\\":\\"/zh-CN/article/4.\u5199\u6587\u6863\u7684\u5DE5\u5177/dumi\\",\\"title\\":\\"dumi\\",\\"meta\\":{\\"order\\":4}},{\\"path\\":\\"/zh-CN/article/4.\u5199\u6587\u6863\u7684\u5DE5\u5177/hexo\\",\\"title\\":\\"Hexo\\",\\"meta\\":{\\"order\\":4}},{\\"path\\":\\"/zh-CN/article/4.\u5199\u6587\u6863\u7684\u5DE5\u5177/rcpress\\",\\"title\\":\\"reactPress\\",\\"meta\\":{\\"order\\":4}},{\\"path\\":\\"/zh-CN/article/4.\u5199\u6587\u6863\u7684\u5DE5\u5177/storybook\\",\\"title\\":\\"storyBook\\",\\"meta\\":{\\"order\\":4}},{\\"path\\":\\"/zh-CN/article/4.\u5199\u6587\u6863\u7684\u5DE5\u5177/vuepress\\",\\"title\\":\\"VuePress\\",\\"meta\\":{\\"order\\":4}}]},{\\"title\\":\\"5.\u524D\u7AEF\u5DE5\u7A0B\u5316\\",\\"path\\":\\"/zh-CN/article/5.\u524D\u7AEF\u5DE5\u7A0B\u5316\\",\\"meta\\":{},\\"children\\":[{\\"path\\":\\"/zh-CN/article/5.\u524D\u7AEF\u5DE5\u7A0B\u5316/browserslistrc\\",\\"title\\":\\"browserslistrc\\",\\"meta\\":{\\"order\\":5}},{\\"path\\":\\"/zh-CN/article/5.\u524D\u7AEF\u5DE5\u7A0B\u5316/commitlintconfigjs\\",\\"title\\":\\"commitlint.config.js\\",\\"meta\\":{\\"order\\":5}},{\\"path\\":\\"/zh-CN/article/5.\u524D\u7AEF\u5DE5\u7A0B\u5316/gitattributes\\",\\"title\\":\\"gitattributes\\",\\"meta\\":{\\"order\\":5}},{\\"path\\":\\"/zh-CN/article/5.\u524D\u7AEF\u5DE5\u7A0B\u5316/license\\",\\"title\\":\\"License\\",\\"meta\\":{\\"order\\":5}},{\\"path\\":\\"/zh-CN/article/5.\u524D\u7AEF\u5DE5\u7A0B\u5316/node-\u811A\u672C\u81EA\u52A8\u6CE8\u5165\u8DEF\u7531\\",\\"title\\":\\"node \u811A\u672C\u81EA\u52A8\u6CE8\u5165\u8DEF\u7531\\",\\"meta\\":{\\"order\\":5}},{\\"path\\":\\"/zh-CN/article/5.\u524D\u7AEF\u5DE5\u7A0B\u5316/npmrc\\",\\"title\\":\\"npmrc\\",\\"meta\\":{\\"order\\":5}},{\\"path\\":\\"/zh-CN/article/5.\u524D\u7AEF\u5DE5\u7A0B\u5316/stylelintrc\\",\\"title\\":\\"stylelintrc\\",\\"meta\\":{\\"order\\":5}},{\\"path\\":\\"/zh-CN/article/5.\u524D\u7AEF\u5DE5\u7A0B\u5316/tsconfig\\",\\"title\\":\\"tsconfig\\",\\"meta\\":{\\"order\\":5}},{\\"path\\":\\"/zh-CN/article/5.\u524D\u7AEF\u5DE5\u7A0B\u5316/webpack\\",\\"title\\":\\"webpack\\",\\"meta\\":{\\"order\\":5}},{\\"path\\":\\"/zh-CN/article/5.\u524D\u7AEF\u5DE5\u7A0B\u5316/\u9879\u76EE-eslint-prettierrc-\u53CA-vscode-\u63D2\u4EF6-\u914D\u7F6E\\",\\"title\\":\\"Eslint\\",\\"meta\\":{\\"order\\":5}}]},{\\"title\\":\\"6.\u8FD0\u7EF4\u76F8\u5173\\",\\"path\\":\\"/zh-CN/article/6.\u8FD0\u7EF4\u76F8\u5173\\",\\"meta\\":{},\\"children\\":[{\\"path\\":\\"/zh-CN/article/6.\u8FD0\u7EF4\u76F8\u5173/cicd\\",\\"title\\":\\"CICD\\",\\"meta\\":{\\"order\\":6}},{\\"path\\":\\"/zh-CN/article/6.\u8FD0\u7EF4\u76F8\u5173/docker\\",\\"title\\":\\"Docker\\",\\"meta\\":{\\"order\\":6}},{\\"path\\":\\"/zh-CN/article/6.\u8FD0\u7EF4\u76F8\u5173/k8s\\",\\"title\\":\\"kubernetes\\",\\"meta\\":{\\"order\\":6}},{\\"path\\":\\"/zh-CN/article/6.\u8FD0\u7EF4\u76F8\u5173/linux\u547D\u4EE4\\",\\"title\\":\\"Linux\\",\\"meta\\":{\\"order\\":6}},{\\"path\\":\\"/zh-CN/article/6.\u8FD0\u7EF4\u76F8\u5173/nginx\\",\\"title\\":\\"Nginx\\",\\"meta\\":{\\"order\\":6}},{\\"path\\":\\"/zh-CN/article/6.\u8FD0\u7EF4\u76F8\u5173/\u963F\u91CC\u4E91\\",\\"title\\":\\"\u963F\u91CC\u4E91\\",\\"meta\\":{\\"order\\":6}}]},{\\"title\\":\\"8.\u5B9E\u8DF5\u64CD\u4F5C\\",\\"path\\":\\"/zh-CN/article/8.\u5B9E\u8DF5\u64CD\u4F5C\\",\\"meta\\":{},\\"children\\":[{\\"path\\":\\"/zh-CN/article/8.\u5B9E\u8DF5\u64CD\u4F5C/react-native\\",\\"title\\":\\"reactNative\\",\\"meta\\":{\\"order\\":8}},{\\"path\\":\\"/zh-CN/article/8.\u5B9E\u8DF5\u64CD\u4F5C/\u642D\u5EFA\u4E00\u4E2Agitlab\\",\\"title\\":\\"\u81EA\u5DF1\u642D\u5EFA\u4E00\u4E2A gitlab\\",\\"meta\\":{\\"order\\":8}},{\\"path\\":\\"/zh-CN/article/8.\u5B9E\u8DF5\u64CD\u4F5C/\u811A\u624B\u67B6\\",\\"title\\":\\"\u81EA\u5DF1\u642D\u5EFA\u4E00\u4E2A\u811A\u624B\u67B6\\",\\"meta\\":{\\"order\\":8}}]},{\\"title\\":\\"9.react\\",\\"path\\":\\"/zh-CN/article/9.react\\",\\"meta\\":{},\\"children\\":[{\\"path\\":\\"/zh-CN/article/9.react/ahooks\\",\\"title\\":\\"Ahooks\\",\\"meta\\":{\\"order\\":9}},{\\"path\\":\\"/zh-CN/article/9.react/antd-design\\",\\"title\\":\\"Ant Design\\",\\"meta\\":{\\"order\\":9}},{\\"path\\":\\"/zh-CN/article/9.react/antd-pro\\",\\"title\\":\\"Ant-Pro\\",\\"meta\\":{\\"order\\":9}},{\\"path\\":\\"/zh-CN/article/9.react/dva\\",\\"title\\":\\"Dva\\",\\"meta\\":{\\"order\\":9}},{\\"path\\":\\"/zh-CN/article/9.react/nextjs\\",\\"title\\":\\"NextJS\\",\\"meta\\":{\\"order\\":9}},{\\"path\\":\\"/zh-CN/article/9.react/react\\",\\"title\\":\\"React\\",\\"meta\\":{\\"order\\":9}},{\\"path\\":\\"/zh-CN/article/9.react/react-charts\\",\\"title\\":\\"reactCharts\\",\\"meta\\":{\\"order\\":9}},{\\"path\\":\\"/zh-CN/article/9.react/react-map\\",\\"title\\":\\"React-map\\",\\"meta\\":{\\"order\\":9}},{\\"path\\":\\"/zh-CN/article/9.react/react-native\\",\\"title\\":\\"Reative Native\\",\\"meta\\":{\\"order\\":9}},{\\"path\\":\\"/zh-CN/article/9.react/umi\\",\\"title\\":\\"UmiJS\\",\\"meta\\":{\\"order\\":9}},{\\"path\\":\\"/zh-CN/article/9.react/umi4\\",\\"title\\":\\"umi4\\",\\"meta\\":{\\"order\\":9}},{\\"path\\":\\"/zh-CN/article/9.react/zustand\\",\\"title\\":\\"zustand\\",\\"meta\\":{\\"order\\":9}}]}],\\"/zh-CN/article2\\":[{\\"title\\":\\"10.vue\\",\\"path\\":\\"/zh-CN/article2/10.vue\\",\\"meta\\":{},\\"children\\":[{\\"path\\":\\"/zh-CN/article2/10.vue/vite\\",\\"title\\":\\"Vite\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/zh-CN/article2/10.vue/vue\\",\\"title\\":\\"vue\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/zh-CN/article2/10.vue/vue3\\",\\"title\\":\\"Vue 3.0\\",\\"meta\\":{\\"order\\":3}}]},{\\"title\\":\\"12.typescript\\",\\"path\\":\\"/zh-CN/article2/12.typescript\\",\\"meta\\":{},\\"children\\":[{\\"path\\":\\"/zh-CN/article2/12.typescript/typescript\\",\\"title\\":\\"Typescript\\",\\"meta\\":{\\"order\\":3}}]},{\\"title\\":\\"14.\u53EF\u89C6\u5316\\",\\"path\\":\\"/zh-CN/article2/14.\u53EF\u89C6\u5316\\",\\"meta\\":{},\\"children\\":[{\\"path\\":\\"/zh-CN/article2/14.\u53EF\u89C6\u5316/canvas\\",\\"title\\":\\"canvas\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/zh-CN/article2/14.\u53EF\u89C6\u5316/d3\\",\\"title\\":\\"d3\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/zh-CN/article2/14.\u53EF\u89C6\u5316/svg\\",\\"title\\":\\"SVG\\",\\"meta\\":{\\"order\\":3}}]},{\\"title\\":\\"18.\u8BBE\u8BA1\u6A21\u5F0F\\",\\"path\\":\\"/zh-CN/article2/18.\u8BBE\u8BA1\u6A21\u5F0F\\",\\"meta\\":{},\\"children\\":[{\\"path\\":\\"/zh-CN/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/1.\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F\\",\\"title\\":\\"\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/zh-CN/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/10.\u88C5\u9970\u5668\u6A21\u5F0F\\",\\"title\\":\\"\u88C5\u9970\u5668\u6A21\u5F0F\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/zh-CN/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/12.\u6865\u63A5\u6A21\u5F0F\\",\\"title\\":\\"\u6865\u63A5\u6A21\u5F0F\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/zh-CN/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/13.\u7EC4\u5408\u6A21\u5F0F\\",\\"title\\":\\"\u7EC4\u5408\u6A21\u5F0F\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/zh-CN/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/14.\u4EAB\u5143\u6A21\u5F0F\\",\\"title\\":\\"\u4EAB\u5143\u6A21\u5F0F\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/zh-CN/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/15.\u6A21\u677F\u65B9\u6CD5\u6A21\u5F0F\\",\\"title\\":\\"\u6A21\u677F\u65B9\u6CD5\u6A21\u5F0F\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/zh-CN/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/16.\u89C2\u5BDF\u8005\u6A21\u5F0F\\",\\"title\\":\\"\u89C2\u5BDF\u8005\u6A21\u5F0F\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/zh-CN/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/17.\u72B6\u6001\u6A21\u5F0F\\",\\"title\\":\\"\u72B6\u6001\u6A21\u5F0F\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/zh-CN/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/18.\u7B56\u7565\u6A21\u5F0F\\",\\"title\\":\\"\u7B56\u7565\u6A21\u5F0F\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/zh-CN/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/19.\u8D23\u4EFB\u94FE\u6A21\u5F0F\\",\\"title\\":\\"\u8D23\u4EFB\u94FE\u6A21\u5F0F\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/zh-CN/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/2.\u5DE5\u5382\u65B9\u6CD5\u6A21\u5F0F\\",\\"title\\":\\"\u5DE5\u5382\u65B9\u6CD5\u6A21\u5F0F\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/zh-CN/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/20.\u547D\u4EE4\u6A21\u5F0F\\",\\"title\\":\\"\u547D\u4EE4\u6A21\u5F0F\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/zh-CN/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/21.\u8BBF\u95EE\u8005\u6A21\u5F0F\\",\\"title\\":\\"\u8BBF\u95EE\u8005\u6A21\u5F0F\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/zh-CN/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/22.\u4E2D\u4ECB\u8005\u6A21\u5F0F\\",\\"title\\":\\"\u4E2D\u4ECB\u8005\u6A21\u5F0F\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/zh-CN/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/23.\u5907\u5FD8\u5F55\u6A21\u5F0F\\",\\"title\\":\\"\u5907\u5FD8\u5F55\u6A21\u5F0F\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/zh-CN/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/24.\u8FED\u4EE3\u5668\u6A21\u5F0F\\",\\"title\\":\\"\u8FED\u4EE3\u5668\u6A21\u5F0F\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/zh-CN/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/25.\u89E3\u91CA\u5668\u6A21\u5F0F\\",\\"title\\":\\"\u89E3\u91CA\u5668\u6A21\u5F0F\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/zh-CN/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/3.\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\\",\\"title\\":\\"\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/zh-CN/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/4.\u5EFA\u9020\u8005\u6A21\u5F0F\\",\\"title\\":\\"\u5EFA\u9020\u8005\u6A21\u5F0F\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/zh-CN/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/5.\u539F\u578B\u6A21\u5F0F\\",\\"title\\":\\"\u539F\u578B\u6A21\u5F0F\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/zh-CN/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/6.\u5355\u4F8B\u6A21\u5F0F\\",\\"title\\":\\"\u5355\u4F8B\u6A21\u5F0F\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/zh-CN/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/7.\u5916\u89C2\u6A21\u5F0F\\",\\"title\\":\\"\u5916\u89C2\u6A21\u5F0F\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/zh-CN/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/8.\u9002\u914D\u5668\u6A21\u5F0F\\",\\"title\\":\\"\u9002\u914D\u5668\u6A21\u5F0F\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/zh-CN/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/9.\u4EE3\u7406\u6A21\u5F0F\\",\\"title\\":\\"\u4EE3\u7406\u6A21\u5F0F\\",\\"meta\\":{\\"order\\":3}}]},{\\"title\\":\\"20.\u6709\u610F\u601D\u7684\u5E93\\",\\"path\\":\\"/zh-CN/article2/20.\u6709\u610F\u601D\u7684\u5E93\\",\\"meta\\":{},\\"children\\":[{\\"path\\":\\"/zh-CN/article2/20.\u6709\u610F\u601D\u7684\u5E93/lottie\\",\\"title\\":\\"Lottie\\",\\"meta\\":{\\"order\\":3}}]},{\\"title\\":\\"21.macos\u76F8\u5173\\",\\"path\\":\\"/zh-CN/article2/21.macos\u76F8\u5173\\",\\"meta\\":{},\\"children\\":[{\\"path\\":\\"/zh-CN/article2/21.macos\u76F8\u5173/copilot\\",\\"title\\":\\"copilot\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/zh-CN/article2/21.macos\u76F8\u5173/github-badge\\",\\"title\\":\\"githubBadge\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/zh-CN/article2/21.macos\u76F8\u5173/github\u5361\u987F\u539F\u56E0\\",\\"title\\":\\"github \u5361\u987F\u539F\u56E0\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/zh-CN/article2/21.macos\u76F8\u5173/\u4F7F\u7528\u5728\u7EBFvscode\u6253\u5F00github\\",\\"title\\":\\"\u4F7F\u7528\u5728\u7EBF vscode \u6253\u5F00 github\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/zh-CN/article2/21.macos\u76F8\u5173/\u6CB9\u7334\u811A\u672C\\",\\"title\\":\\"\u6CB9\u7334\u811A\u672C\\",\\"meta\\":{\\"order\\":3}}]}],\\"/zh-CN/components\\":[{\\"title\\":\\"antd\\",\\"path\\":\\"/zh-CN/components/antd\\",\\"meta\\":{\\"order\\":1},\\"children\\":[{\\"path\\":\\"/zh-CN/components/antd/date-picker\\",\\"title\\":\\"DatePicker\\",\\"meta\\":{\\"order\\":1}},{\\"path\\":\\"/zh-CN/components/antd/form-layout\\",\\"title\\":\\"FormLayout\\",\\"meta\\":{\\"order\\":1}}]},{\\"title\\":\\"npm package\\",\\"path\\":\\"/zh-CN/components/npm\\",\\"meta\\":{\\"order\\":1},\\"children\\":[{\\"path\\":\\"/zh-CN/components/npm/echarts-react\\",\\"title\\":\\"echarts-for-react\\",\\"meta\\":{\\"order\\":1}}]},{\\"title\\":\\"react\u6280\u5DE7\\",\\"path\\":\\"/zh-CN/components/react\\",\\"meta\\":{\\"order\\":1},\\"children\\":[{\\"path\\":\\"/zh-CN/components/react/muitiple-ref\\",\\"title\\":\\"MyitipleRef\\",\\"meta\\":{\\"order\\":1}},{\\"path\\":\\"/zh-CN/components/react/ref-demo\\",\\"title\\":\\"RefDemo\\",\\"meta\\":{\\"order\\":1}},{\\"path\\":\\"/zh-CN/components/react/ts-ref-instance\\",\\"title\\":\\"TsRefInstance\\",\\"meta\\":{\\"order\\":1}}]},{\\"title\\":\\"\u6587\u4EF6\u7684\u5BFC\u51FA\u4E0E\u9884\u89C8\\",\\"path\\":\\"/zh-CN/components/file\\",\\"meta\\":{\\"order\\":2},\\"children\\":[{\\"path\\":\\"/zh-CN/components/file/file-export-excel\\",\\"title\\":\\"\u524D\u7AEF\u5BFC\u51FA excel\\",\\"meta\\":{\\"order\\":2}},{\\"path\\":\\"/zh-CN/components/file/file-export-word\\",\\"title\\":\\"\u524D\u7AEF\u5BFC\u51FA word\\",\\"meta\\":{\\"order\\":2}},{\\"path\\":\\"/zh-CN/components/file/file-pre-view-page\\",\\"title\\":\\"\u524D\u7AEF\u9884\u89C8 PDF excel word \u7B49\u5404\u7C7B\u6587\u4EF6\\",\\"meta\\":{\\"order\\":2}}]},{\\"title\\":\\"\u5C01\u88C5\u7684\u4E1A\u52A1\u7EC4\u4EF6\\",\\"path\\":\\"/zh-CN/components/my-components\\",\\"meta\\":{\\"order\\":2},\\"children\\":[{\\"path\\":\\"/zh-CN/components/my-components/calendar\\",\\"title\\":\\"\u591A\u9009\u7684\u65E5\u671F\u63A7\u4EF6\\",\\"meta\\":{\\"order\\":2}},{\\"path\\":\\"/zh-CN/components/my-components/query-form\\",\\"title\\":\\"QueryForm\\",\\"meta\\":{\\"order\\":2}},{\\"path\\":\\"/zh-CN/components/my-components/select\\",\\"title\\":\\"Select\\",\\"meta\\":{\\"order\\":2}},{\\"path\\":\\"/zh-CN/components/my-components/transfer-form\\",\\"title\\":\\"\u7A7F\u68AD\u6846\\",\\"meta\\":{\\"order\\":2}}]}],\\"/zh-CN/debug\\":[{\\"path\\":\\"/zh-CN/debug\\",\\"title\\":\\"Debug\\",\\"meta\\":{\\"order\\":4}}],\\"/zh-CN/npm\\":[{\\"path\\":\\"/zh-CN/npm\\",\\"title\\":\\"Npm\\",\\"meta\\":{}}],\\"/zh-CN/project\\":[{\\"title\\":\\"theme\\",\\"path\\":\\"/zh-CN/project/theme\\",\\"meta\\":{\\"order\\":5},\\"children\\":[]},{\\"title\\":\\"VueAutoImport\\",\\"path\\":\\"/zh-CN/project/VueAutoImport\\",\\"meta\\":{\\"order\\":6},\\"children\\":[]},{\\"title\\":\\"VueDebugger\\",\\"path\\":\\"/zh-CN/project/VueDebugger\\",\\"meta\\":{\\"order\\":6},\\"children\\":[]},{\\"title\\":\\"docker\\",\\"path\\":\\"/zh-CN/project/docker\\",\\"meta\\":{\\"order\\":6},\\"children\\":[]},{\\"title\\":\\"UmiPermission\\",\\"path\\":\\"/zh-CN/project/umi_permission\\",\\"meta\\":{\\"order\\":6},\\"children\\":[]},{\\"title\\":\\"BuriedPoint\\",\\"path\\":\\"/zh-CN/project/BuriedPoint\\",\\"meta\\":{},\\"children\\":[]},{\\"title\\":\\"CustomTableAndFom\\",\\"path\\":\\"/zh-CN/project/CustomTableAndFom\\",\\"meta\\":{},\\"children\\":[]},{\\"title\\":\\"\u5927\u6587\u4EF6\u65AD\u70B9\u7EED\u4F20\\",\\"path\\":\\"/zh-CN/project/LargeFileUpload\\",\\"meta\\":{},\\"children\\":[]},{\\"title\\":\\"MultipleTag\\",\\"path\\":\\"/zh-CN/project/MultipleTag\\",\\"meta\\":{},\\"children\\":[]},{\\"title\\":\\"Persistence\\",\\"path\\":\\"/zh-CN/project/Persistence\\",\\"meta\\":{},\\"children\\":[]},{\\"title\\":\\"VueHOC\\",\\"path\\":\\"/zh-CN/project/VueHOC\\",\\"meta\\":{},\\"children\\":[]},{\\"title\\":\\"node \u811A\u672C\u6CE8\u5165\u6587\u4EF6\\",\\"path\\":\\"/zh-CN/project/node\\",\\"meta\\":{},\\"children\\":[]},{\\"title\\":\\"React \u6027\u80FD\u4F18\u5316\\",\\"path\\":\\"/zh-CN/project/react_optimization\\",\\"meta\\":{},\\"children\\":[]},{\\"title\\":\\"sso\u5355\u70B9\u767B\u5F55\\",\\"path\\":\\"/zh-CN/project/sso\\",\\"meta\\":{},\\"children\\":[]},{\\"title\\":\\"Websocket\\",\\"path\\":\\"/zh-CN/project/websocket\\",\\"meta\\":{},\\"children\\":[]}],\\"/zh-CN/visualization\\":[{\\"title\\":\\"canvas\\",\\"meta\\":{\\"__fallback\\":true},\\"children\\":[],\\"path\\":\\"/zh-CN/visualization/canvas\\"},{\\"title\\":\\"D3\\",\\"path\\":\\"/zh-CN/visualization/d3\\",\\"meta\\":{},\\"children\\":[{\\"path\\":\\"/zh-CN/visualization/d3\\",\\"title\\":\\"D3\\",\\"meta\\":{}},{\\"path\\":\\"/zh-CN/visualization/d3/proportion1\\",\\"title\\":\\"Proportion1\\",\\"meta\\":{}},{\\"path\\":\\"/zh-CN/visualization/d3/proportion2\\",\\"title\\":\\"Proportion2\\",\\"meta\\":{}}]},{\\"title\\":\\"Svg\\",\\"path\\":\\"/zh-CN/visualization/svg\\",\\"meta\\":{},\\"children\\":[{\\"path\\":\\"/zh-CN/visualization/svg/base\\",\\"title\\":\\"Base\\",\\"meta\\":{}},{\\"path\\":\\"/zh-CN/visualization/svg/hign\\",\\"title\\":\\"Hign\\",\\"meta\\":{}}]}],\\"/zh-CN/guide\\":[{\\"path\\":\\"/zh-CN/guide\\",\\"title\\":\\"\u603B\u89C8\\",\\"meta\\":{\\"order\\":1}},{\\"title\\":\\"TypeScript\u8FDB\u9636\u6587\u7AE0\\",\\"path\\":\\"/zh-CN/guide/type-script\u8FDB\u9636\u6587\u7AE0\\",\\"meta\\":{\\"order\\":1},\\"children\\":[]},{\\"title\\":\\"\u6211\u7684TypeScript\u76F8\u5173\u4EE3\u7801\\",\\"path\\":\\"/zh-CN/guide/\u6211\u7684type-script\u76F8\u5173\u4EE3\u7801\\",\\"meta\\":{\\"order\\":1},\\"children\\":[]},{\\"title\\":\\"\u9AD8\u7EA7\u524D\u7AEF\u5FC5\u8BFB\\",\\"path\\":\\"/zh-CN/guide/\u9AD8\u7EA7\u524D\u7AEF\u5FC5\u8BFB\\",\\"meta\\":{\\"order\\":1},\\"children\\":[]}]}},\\"locales\\":[{\\"name\\":\\"en-US\\",\\"label\\":\\"English\\"},{\\"name\\":\\"zh-CN\\",\\"label\\":\\"\u4E2D\u6587\\"}],\\"navs\\":{\\"en-US\\":[{\\"title\\":\\"\u524D\u7AEF\u4E4B\u8DEF\\",\\"order\\":1,\\"path\\":\\"/guide\\"},{\\"title\\":\\"Article\\",\\"path\\":\\"/article\\",\\"order\\":1},{\\"title\\":\\"\u6211\u9047\u5230\u7684\u5343\u5947\u767E\u602A\u7684 bug\\",\\"order\\":4,\\"path\\":\\"/debug\\"},{\\"path\\":\\"/npm\\",\\"title\\":\\"Npm\\"},{\\"path\\":\\"/project\\",\\"title\\":\\"Project\\"},{\\"title\\":\\"Article2\\",\\"path\\":\\"/article2\\"},{\\"path\\":\\"/components\\",\\"title\\":\\"Components\\"},{\\"title\\":\\"Visualization\\",\\"path\\":\\"/visualization\\"},{\\"title\\":\\"GitHub\\",\\"path\\":\\"https://github.com/eternallycyf/my-demo-markdown\\"}],\\"zh-CN\\":[{\\"title\\":\\"\u524D\u7AEF\u4E4B\u8DEF\\",\\"order\\":1,\\"path\\":\\"/zh-CN/guide\\"},{\\"title\\":\\"Article\\",\\"path\\":\\"/zh-CN/article\\",\\"order\\":1},{\\"title\\":\\"\u6211\u9047\u5230\u7684\u5343\u5947\u767E\u602A\u7684 bug\\",\\"order\\":4,\\"path\\":\\"/zh-CN/debug\\"},{\\"path\\":\\"/zh-CN/npm\\",\\"title\\":\\"Npm\\"},{\\"path\\":\\"/zh-CN/project\\",\\"title\\":\\"Project\\"},{\\"title\\":\\"Article2\\",\\"path\\":\\"/zh-CN/article2\\"},{\\"path\\":\\"/zh-CN/components\\",\\"title\\":\\"Components\\"},{\\"title\\":\\"Visualization\\",\\"path\\":\\"/zh-CN/visualization\\"},{\\"title\\":\\"GitHub\\",\\"path\\":\\"https://github.com/eternallycyf/my-demo-markdown\\"}]},\\"title\\":\\"my-demo-markdown\\",\\"logo\\":\\"/my-demo-markdown/images/logo.png\\",\\"mode\\":\\"site\\",\\"repository\\":{\\"url\\":\\"https://github.com/eternallycyf/my-demo-markdown\\",\\"branch\\":\\"main\\"},\\"theme\\":{}}");

//# sourceURL=webpack:///./src/.umi-production/dumi/config.json?`)},x2v5:function(module){eval(`module.exports = JSON.parse("{\\"Calendar\\":{\\"default\\":[{\\"identifier\\":\\"time\\",\\"description\\":\\"\u4F20\u5165\u521D\u59CB\u5316\u7684\u65F6\u95F4\\",\\"type\\":\\"MomentInput\\",\\"required\\":true},{\\"identifier\\":\\"otherProps\\",\\"description\\":\\"\u5F85\u6574\u7406\\",\\"type\\":\\"any\\",\\"required\\":true}]},\\"components\\":{\\"Filter\\":[{\\"identifier\\":\\"filterList\\",\\"description\\":\\"\u67E5\u8BE2\u8868\u5355JSON\u5F62\u5F0F\\",\\"type\\":\\"any[]\\",\\"required\\":true},{\\"identifier\\":\\"autoSearch\\",\\"description\\":\\"\u662F\u5426\u5141\u8BB8\u641C\u7D22\\",\\"type\\":\\"boolean\\",\\"default\\":\\"false\\"},{\\"identifier\\":\\"onSearch\\",\\"description\\":\\"\u641C\u7D22\u4E8B\u4EF6\u56DE\u8C03\\",\\"type\\":\\"(values: any) => void\\"},{\\"identifier\\":\\"onReset\\",\\"description\\":\\"\u91CD\u7F6E\u4E8B\u4EF6\u56DE\u8C03\\",\\"type\\":\\"() => void\\"}]},\\"Select\\":{\\"default\\":[{\\"identifier\\":\\"className\\",\\"description\\":\\"\u4E5F\u53EF\u4EE5\u663E\u5F0F\u52A0\u4E0A\u63CF\u8FF0\u540D\\",\\"type\\":\\"number\\",\\"default\\":\\"\u652F\u6301\u5B9A\u4E49\u9ED8\u8BA4\u503C\\"}]},\\"class\\":{},\\"hook\\":{\\"TransferForm\\":[{\\"identifier\\":\\"transferOkCallBack\\",\\"description\\":\\"\u786E\u5B9A\u6309\u94AE\u7684\u56DE\u8C03\u51FD\u6570\\",\\"type\\":\\"() => void\\",\\"required\\":true},{\\"identifier\\":\\"originData\\",\\"description\\":\\"\u521D\u59CB\u5316\u6240\u6709\u7684\u6570\u636E\u6E90\\",\\"type\\":\\"any[]\\",\\"required\\":true},{\\"identifier\\":\\"formRef\\",\\"description\\":\\"\u5916\u754C\u4F20\u5165\u7684Antd-form-ref\\",\\"type\\":\\"FormInstance<any>\\",\\"required\\":true},{\\"identifier\\":\\"falseSelectItmeName\\",\\"description\\":\\"\u540C\u6B65\u53D8\u52A8\u7684select formItem name\\",\\"type\\":\\"string\\"},{\\"identifier\\":\\"modalProps\\",\\"description\\":\\"\u6A21\u6001\u6846\u7684\u5176\u4ED6props\\",\\"type\\":\\"ModalProps\\"},{\\"identifier\\":\\"transferProps\\",\\"description\\":\\"\u7A7F\u68AD\u6846\u7684\u5176\u4ED6props\\",\\"type\\":\\"TransferProps<any>\\"}]}}");

//# sourceURL=webpack:///./src/.umi-production/dumi/apis.json?`)},"z01/":function(module,exports){eval(`function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}

module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

//# sourceURL=webpack:///./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/typeof.js?`)}}]);
