(window.webpackJsonp=window.webpackJsonp||[]).push([[151,4],{"0fbx":function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin

//# sourceURL=webpack:///./node_modules/antd/es/tree-select/style/index.less?`)},"3Mug":function(module,exports,__webpack_require__){"use strict";eval(`

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = canUseDom;

function canUseDom() {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}

//# sourceURL=webpack:///./node_modules/rc-util/lib/Dom/canUseDom.js?`)},"6Ilp":function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/antd/es/card/style/index.js
var style = __webpack_require__("IzEo");

// EXTERNAL MODULE: ./node_modules/antd/es/card/index.js + 3 modules
var card = __webpack_require__("bx4M");

// EXTERNAL MODULE: ./node_modules/antd/es/row/style/index.js
var row_style = __webpack_require__("14J3");

// EXTERNAL MODULE: ./node_modules/antd/es/row/index.js
var row = __webpack_require__("BMrR");

// EXTERNAL MODULE: ./node_modules/antd/es/button/style/index.js
var button_style = __webpack_require__("+L6B");

// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__("2/Rp");

// EXTERNAL MODULE: ./node_modules/antd/es/col/style/index.js
var col_style = __webpack_require__("jCWc");

// EXTERNAL MODULE: ./node_modules/antd/es/col/index.js
var es_col = __webpack_require__("kPKH");

// EXTERNAL MODULE: ./node_modules/antd/es/style/default.less
var style_default = __webpack_require__("EFp3");

// EXTERNAL MODULE: ./node_modules/antd/es/cascader/style/index.less
var cascader_style = __webpack_require__("v56E");

// EXTERNAL MODULE: ./node_modules/antd/es/empty/style/index.js
var empty_style = __webpack_require__("R9oj");

// EXTERNAL MODULE: ./node_modules/antd/es/select/style/index.js
var select_style = __webpack_require__("OaEy");

// CONCATENATED MODULE: ./node_modules/antd/es/cascader/style/index.js


// style dependencies


// deps-lint-skip: form
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("rePB");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__("U8pU");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__("KQm4");

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/LeftOutlined.js + 1 modules
var LeftOutlined = __webpack_require__("5bA4");

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/LoadingOutlined.js + 1 modules
var LoadingOutlined = __webpack_require__("ye1Q");

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/RightOutlined.js + 1 modules
var RightOutlined = __webpack_require__("UESt");

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__("ODXe");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__("Ff2n");

// EXTERNAL MODULE: ./node_modules/rc-select/es/index.js + 27 modules
var es = __webpack_require__("LdHM");

// EXTERNAL MODULE: ./node_modules/rc-select/es/hooks/useId.js
var useId = __webpack_require__("18yb");

// EXTERNAL MODULE: ./node_modules/rc-tree/es/utils/conductUtil.js
var conductUtil = __webpack_require__("NvD2");

// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useMergedState.js
var useMergedState = __webpack_require__("6cGi");

// EXTERNAL MODULE: external "window.React"
var external_window_React_ = __webpack_require__("cDcd");
var external_window_React_default = /*#__PURE__*/__webpack_require__.n(external_window_React_);

// CONCATENATED MODULE: ./node_modules/rc-cascader/es/context.js

var CascaderContext = /*#__PURE__*/external_window_React_["createContext"](null);
/* harmony default export */ var context = (CascaderContext);
// CONCATENATED MODULE: ./node_modules/rc-cascader/es/utils/commonUtil.js
var VALUE_SPLIT = '__RC_CASCADER_SPLIT__';
var SHOW_PARENT = 'SHOW_PARENT';
var SHOW_CHILD = 'SHOW_CHILD';
function toPathKey(value) {
  return value.join(VALUE_SPLIT);
}
function toPathKeys(value) {
  return value.map(toPathKey);
}
function toPathValueStr(pathKey) {
  return pathKey.split(VALUE_SPLIT);
}
function fillFieldNames(fieldNames) {
  var _ref = fieldNames || {},
      label = _ref.label,
      value = _ref.value,
      children = _ref.children;

  var val = value || 'value';
  return {
    label: label || 'label',
    value: val,
    key: val,
    children: children || 'children'
  };
}
function isLeaf(option, fieldNames) {
  var _option$isLeaf, _option$fieldNames$ch;

  return (_option$isLeaf = option.isLeaf) !== null && _option$isLeaf !== void 0 ? _option$isLeaf : !((_option$fieldNames$ch = option[fieldNames.children]) === null || _option$fieldNames$ch === void 0 ? void 0 : _option$fieldNames$ch.length);
}
function scrollIntoParentView(element) {
  var parent = element.parentElement;

  if (!parent) {
    return;
  }

  var elementToParent = element.offsetTop - parent.offsetTop; // offsetParent may not be parent.

  if (elementToParent - parent.scrollTop < 0) {
    parent.scrollTo({
      top: elementToParent
    });
  } else if (elementToParent + element.offsetHeight - parent.scrollTop > parent.offsetHeight) {
    parent.scrollTo({
      top: elementToParent + element.offsetHeight - parent.offsetHeight
    });
  }
}
// CONCATENATED MODULE: ./node_modules/rc-cascader/es/utils/treeUtil.js

function formatStrategyValues(pathKeys, getKeyPathEntities, showCheckedStrategy) {
  var valueSet = new Set(pathKeys);
  var keyPathEntities = getKeyPathEntities();
  return pathKeys.filter(function (key) {
    var entity = keyPathEntities[key];
    var parent = entity ? entity.parent : null;
    var children = entity ? entity.children : null;
    return showCheckedStrategy === SHOW_CHILD ? !(children && children.some(function (child) {
      return child.key && valueSet.has(child.key);
    })) : !(parent && !parent.node.disabled && valueSet.has(parent.key));
  });
}
function toPathOptions(valueCells, options, fieldNames) {
  var stringMode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var currentList = options;
  var valueOptions = [];

  var _loop = function _loop(i) {
    var _currentList, _currentList2, _foundOption$fieldNam;

    var valueCell = valueCells[i];
    var foundIndex = (_currentList = currentList) === null || _currentList === void 0 ? void 0 : _currentList.findIndex(function (option) {
      var val = option[fieldNames.value];
      return stringMode ? String(val) === String(valueCell) : val === valueCell;
    });
    var foundOption = foundIndex !== -1 ? (_currentList2 = currentList) === null || _currentList2 === void 0 ? void 0 : _currentList2[foundIndex] : null;
    valueOptions.push({
      value: (_foundOption$fieldNam = foundOption === null || foundOption === void 0 ? void 0 : foundOption[fieldNames.value]) !== null && _foundOption$fieldNam !== void 0 ? _foundOption$fieldNam : valueCell,
      index: foundIndex,
      option: foundOption
    });
    currentList = foundOption === null || foundOption === void 0 ? void 0 : foundOption[fieldNames.children];
  };

  for (var i = 0; i < valueCells.length; i += 1) {
    _loop(i);
  }

  return valueOptions;
}
// CONCATENATED MODULE: ./node_modules/rc-cascader/es/hooks/useDisplayValues.js





/* harmony default export */ var useDisplayValues = (function (rawValues, options, fieldNames, multiple, displayRender) {
  return external_window_React_["useMemo"](function () {
    var mergedDisplayRender = displayRender || // Default displayRender
    function (labels) {
      var mergedLabels = multiple ? labels.slice(-1) : labels;
      var SPLIT = ' / ';

      if (mergedLabels.every(function (label) {
        return ['string', 'number'].includes(Object(esm_typeof["a" /* default */])(label));
      })) {
        return mergedLabels.join(SPLIT);
      } // If exist non-string value, use ReactNode instead


      return mergedLabels.reduce(function (list, label, index) {
        var keyedLabel = /*#__PURE__*/external_window_React_["isValidElement"](label) ? /*#__PURE__*/external_window_React_["cloneElement"](label, {
          key: index
        }) : label;

        if (index === 0) {
          return [keyedLabel];
        }

        return [].concat(Object(toConsumableArray["a" /* default */])(list), [SPLIT, keyedLabel]);
      }, []);
    };

    return rawValues.map(function (valueCells) {
      var _valueOptions, _valueOptions$option;

      var valueOptions = toPathOptions(valueCells, options, fieldNames);
      var label = mergedDisplayRender(valueOptions.map(function (_ref) {
        var _option$fieldNames$la;

        var option = _ref.option,
            value = _ref.value;
        return (_option$fieldNames$la = option === null || option === void 0 ? void 0 : option[fieldNames.label]) !== null && _option$fieldNames$la !== void 0 ? _option$fieldNames$la : value;
      }), valueOptions.map(function (_ref2) {
        var option = _ref2.option;
        return option;
      }));
      var value = toPathKey(valueCells);
      return {
        label: label,
        value: value,
        key: value,
        valueCells: valueCells,
        disabled: (_valueOptions = valueOptions[valueOptions.length - 1]) === null || _valueOptions === void 0 ? void 0 : (_valueOptions$option = _valueOptions.option) === null || _valueOptions$option === void 0 ? void 0 : _valueOptions$option.disabled
      };
    });
  }, [rawValues, options, fieldNames, displayRender, multiple]);
});
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__("VTBJ");

// EXTERNAL MODULE: ./node_modules/rc-tree/es/utils/treeUtil.js
var treeUtil = __webpack_require__("815F");

// CONCATENATED MODULE: ./node_modules/rc-cascader/es/hooks/useEntities.js




/** Lazy parse options data into conduct-able info to avoid perf issue in single mode */

/* harmony default export */ var useEntities = (function (options, fieldNames) {
  var cacheRef = external_window_React_["useRef"]({
    options: null,
    info: null
  });
  var getEntities = external_window_React_["useCallback"](function () {
    if (cacheRef.current.options !== options) {
      cacheRef.current.options = options;
      cacheRef.current.info = Object(treeUtil["a" /* convertDataToEntities */])(options, {
        fieldNames: fieldNames,
        initWrapper: function initWrapper(wrapper) {
          return Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, wrapper), {}, {
            pathKeyEntities: {}
          });
        },
        processEntity: function processEntity(entity, wrapper) {
          var pathKey = entity.nodes.map(function (node) {
            return node[fieldNames.value];
          }).join(VALUE_SPLIT);
          wrapper.pathKeyEntities[pathKey] = entity; // Overwrite origin key.
          // this is very hack but we need let conduct logic work with connect path

          entity.key = pathKey;
        }
      });
    }

    return cacheRef.current.info.pathKeyEntities;
  }, [fieldNames, options]);
  return getEntities;
});
// CONCATENATED MODULE: ./node_modules/rc-cascader/es/hooks/useMissingValues.js


/* harmony default export */ var useMissingValues = (function (options, fieldNames) {
  return external_window_React_["useCallback"](function (rawValues) {
    var missingValues = [];
    var existsValues = [];
    rawValues.forEach(function (valueCell) {
      var pathOptions = toPathOptions(valueCell, options, fieldNames);

      if (pathOptions.every(function (opt) {
        return opt.option;
      })) {
        existsValues.push(valueCell);
      } else {
        missingValues.push(valueCell);
      }
    });
    return [existsValues, missingValues];
  }, [options, fieldNames]);
});
// CONCATENATED MODULE: ./node_modules/rc-cascader/es/hooks/useRefFunc.js

/**
 * Same as \`React.useCallback\` but always return a memoized function
 * but redirect to real function.
 */

function useRefFunc(callback) {
  var funcRef = external_window_React_["useRef"]();
  funcRef.current = callback;
  var cacheFn = external_window_React_["useCallback"](function () {
    return funcRef.current.apply(funcRef, arguments);
  }, []);
  return cacheFn;
}
// EXTERNAL MODULE: ./node_modules/rc-util/es/warning.js
var warning = __webpack_require__("Kwbf");

// CONCATENATED MODULE: ./node_modules/rc-cascader/es/hooks/useSearchConfig.js



 // Convert \`showSearch\` to unique config

function useSearchConfig(showSearch) {
  return external_window_React_["useMemo"](function () {
    if (!showSearch) {
      return [false, {}];
    }

    var searchConfig = {
      matchInputWidth: true,
      limit: 50
    };

    if (showSearch && Object(esm_typeof["a" /* default */])(showSearch) === 'object') {
      searchConfig = Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, searchConfig), showSearch);
    }

    if (searchConfig.limit <= 0) {
      delete searchConfig.limit;

      if (false) {}
    }

    return [true, searchConfig];
  }, [showSearch]);
}
// CONCATENATED MODULE: ./node_modules/rc-cascader/es/hooks/useSearchOptions.js




var SEARCH_MARK = '__rc_cascader_search_mark__';

var defaultFilter = function defaultFilter(search, options, _ref) {
  var label = _ref.label;
  return options.some(function (opt) {
    return String(opt[label]).toLowerCase().includes(search.toLowerCase());
  });
};

var defaultRender = function defaultRender(inputValue, path, prefixCls, fieldNames) {
  return path.map(function (opt) {
    return opt[fieldNames.label];
  }).join(' / ');
};

/* harmony default export */ var useSearchOptions = (function (search, options, fieldNames, prefixCls, config, changeOnSelect) {
  var _config$filter = config.filter,
      filter = _config$filter === void 0 ? defaultFilter : _config$filter,
      _config$render = config.render,
      render = _config$render === void 0 ? defaultRender : _config$render,
      _config$limit = config.limit,
      limit = _config$limit === void 0 ? 50 : _config$limit,
      sort = config.sort;
  return external_window_React_["useMemo"](function () {
    var filteredOptions = [];

    if (!search) {
      return [];
    }

    function dig(list, pathOptions) {
      list.forEach(function (option) {
        // Perf saving when \`sort\` is disabled and \`limit\` is provided
        if (!sort && limit > 0 && filteredOptions.length >= limit) {
          return;
        }

        var connectedPathOptions = [].concat(Object(toConsumableArray["a" /* default */])(pathOptions), [option]);
        var children = option[fieldNames.children]; // If current option is filterable

        if ( // If is leaf option
        !children || children.length === 0 || // If is changeOnSelect
        changeOnSelect) {
          if (filter(search, connectedPathOptions, {
            label: fieldNames.label
          })) {
            var _objectSpread2;

            filteredOptions.push(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, option), {}, (_objectSpread2 = {}, Object(defineProperty["a" /* default */])(_objectSpread2, fieldNames.label, render(search, connectedPathOptions, prefixCls, fieldNames)), Object(defineProperty["a" /* default */])(_objectSpread2, SEARCH_MARK, connectedPathOptions), _objectSpread2)));
          }
        }

        if (children) {
          dig(option[fieldNames.children], connectedPathOptions);
        }
      });
    }

    dig(options, []); // Do sort

    if (sort) {
      filteredOptions.sort(function (a, b) {
        return sort(a[SEARCH_MARK], b[SEARCH_MARK], search, fieldNames);
      });
    }

    return limit > 0 ? filteredOptions.slice(0, limit) : filteredOptions;
  }, [search, options, fieldNames, prefixCls, render, changeOnSelect, filter, sort, limit]);
});
// CONCATENATED MODULE: ./node_modules/rc-cascader/es/OptionList/Checkbox.js




function Checkbox(_ref) {
  var _classNames;

  var prefixCls = _ref.prefixCls,
      checked = _ref.checked,
      halfChecked = _ref.halfChecked,
      disabled = _ref.disabled,
      onClick = _ref.onClick;

  var _React$useContext = external_window_React_["useContext"](context),
      checkable = _React$useContext.checkable;

  var customCheckbox = typeof checkable !== 'boolean' ? checkable : null;
  return /*#__PURE__*/external_window_React_["createElement"]("span", {
    className: classnames_default()("".concat(prefixCls), (_classNames = {}, Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-checked"), checked), Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-indeterminate"), !checked && halfChecked), Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-disabled"), disabled), _classNames)),
    onClick: onClick
  }, customCheckbox);
}
// CONCATENATED MODULE: ./node_modules/rc-cascader/es/OptionList/Column.js








var FIX_LABEL = '__cascader_fix_label__';
function Column(_ref) {
  var prefixCls = _ref.prefixCls,
      multiple = _ref.multiple,
      options = _ref.options,
      activeValue = _ref.activeValue,
      prevValuePath = _ref.prevValuePath,
      onToggleOpen = _ref.onToggleOpen,
      onSelect = _ref.onSelect,
      onActive = _ref.onActive,
      checkedSet = _ref.checkedSet,
      halfCheckedSet = _ref.halfCheckedSet,
      loadingKeys = _ref.loadingKeys,
      isSelectable = _ref.isSelectable;
  var menuPrefixCls = "".concat(prefixCls, "-menu");
  var menuItemPrefixCls = "".concat(prefixCls, "-menu-item");

  var _React$useContext = external_window_React_["useContext"](context),
      fieldNames = _React$useContext.fieldNames,
      changeOnSelect = _React$useContext.changeOnSelect,
      expandTrigger = _React$useContext.expandTrigger,
      expandIcon = _React$useContext.expandIcon,
      loadingIcon = _React$useContext.loadingIcon,
      dropdownMenuColumnStyle = _React$useContext.dropdownMenuColumnStyle;

  var hoverOpen = expandTrigger === 'hover'; // ============================ Option ============================

  var optionInfoList = external_window_React_["useMemo"](function () {
    return options.map(function (option) {
      var _option$FIX_LABEL;

      var disabled = option.disabled;
      var searchOptions = option[SEARCH_MARK];
      var label = (_option$FIX_LABEL = option[FIX_LABEL]) !== null && _option$FIX_LABEL !== void 0 ? _option$FIX_LABEL : option[fieldNames.label];
      var value = option[fieldNames.value];
      var isMergedLeaf = isLeaf(option, fieldNames); // Get real value of option. Search option is different way.

      var fullPath = searchOptions ? searchOptions.map(function (opt) {
        return opt[fieldNames.value];
      }) : [].concat(Object(toConsumableArray["a" /* default */])(prevValuePath), [value]);
      var fullPathKey = toPathKey(fullPath);
      var isLoading = loadingKeys.includes(fullPathKey); // >>>>> checked

      var checked = checkedSet.has(fullPathKey); // >>>>> halfChecked

      var halfChecked = halfCheckedSet.has(fullPathKey);
      return {
        disabled: disabled,
        label: label,
        value: value,
        isLeaf: isMergedLeaf,
        isLoading: isLoading,
        checked: checked,
        halfChecked: halfChecked,
        option: option,
        fullPath: fullPath,
        fullPathKey: fullPathKey
      };
    });
  }, [options, checkedSet, fieldNames, halfCheckedSet, loadingKeys, prevValuePath]); // ============================ Render ============================

  return /*#__PURE__*/external_window_React_["createElement"]("ul", {
    className: menuPrefixCls,
    role: "menu"
  }, optionInfoList.map(function (_ref2) {
    var _classNames;

    var disabled = _ref2.disabled,
        label = _ref2.label,
        value = _ref2.value,
        isMergedLeaf = _ref2.isLeaf,
        isLoading = _ref2.isLoading,
        checked = _ref2.checked,
        halfChecked = _ref2.halfChecked,
        option = _ref2.option,
        fullPath = _ref2.fullPath,
        fullPathKey = _ref2.fullPathKey;

    // >>>>> Open
    var triggerOpenPath = function triggerOpenPath() {
      if (!disabled && (!hoverOpen || !isMergedLeaf)) {
        onActive(fullPath);
      }
    }; // >>>>> Selection


    var triggerSelect = function triggerSelect() {
      if (isSelectable(option)) {
        onSelect(fullPath, isMergedLeaf);
      }
    }; // >>>>> Title


    var title;

    if (typeof option.title === 'string') {
      title = option.title;
    } else if (typeof label === 'string') {
      title = label;
    } // >>>>> Render


    return /*#__PURE__*/external_window_React_["createElement"]("li", {
      key: fullPathKey,
      className: classnames_default()(menuItemPrefixCls, (_classNames = {}, Object(defineProperty["a" /* default */])(_classNames, "".concat(menuItemPrefixCls, "-expand"), !isMergedLeaf), Object(defineProperty["a" /* default */])(_classNames, "".concat(menuItemPrefixCls, "-active"), activeValue === value), Object(defineProperty["a" /* default */])(_classNames, "".concat(menuItemPrefixCls, "-disabled"), disabled), Object(defineProperty["a" /* default */])(_classNames, "".concat(menuItemPrefixCls, "-loading"), isLoading), _classNames)),
      style: dropdownMenuColumnStyle,
      role: "menuitemcheckbox",
      title: title,
      "aria-checked": checked,
      "data-path-key": fullPathKey,
      onClick: function onClick() {
        triggerOpenPath();

        if (!multiple || isMergedLeaf) {
          triggerSelect();
        }
      },
      onDoubleClick: function onDoubleClick() {
        if (changeOnSelect) {
          onToggleOpen(false);
        }
      },
      onMouseEnter: function onMouseEnter() {
        if (hoverOpen) {
          triggerOpenPath();
        }
      },
      onMouseDown: function onMouseDown(e) {
        // Prevent selector from blurring
        e.preventDefault();
      }
    }, multiple && /*#__PURE__*/external_window_React_["createElement"](Checkbox, {
      prefixCls: "".concat(prefixCls, "-checkbox"),
      checked: checked,
      halfChecked: halfChecked,
      disabled: disabled,
      onClick: function onClick(e) {
        e.stopPropagation();
        triggerSelect();
      }
    }), /*#__PURE__*/external_window_React_["createElement"]("div", {
      className: "".concat(menuItemPrefixCls, "-content")
    }, label), !isLoading && expandIcon && !isMergedLeaf && /*#__PURE__*/external_window_React_["createElement"]("div", {
      className: "".concat(menuItemPrefixCls, "-expand-icon")
    }, expandIcon), isLoading && loadingIcon && /*#__PURE__*/external_window_React_["createElement"]("div", {
      className: "".concat(menuItemPrefixCls, "-loading-icon")
    }, loadingIcon));
  }));
}
// CONCATENATED MODULE: ./node_modules/rc-cascader/es/OptionList/useActive.js




/**
 * Control the active open options path.
 */

/* harmony default export */ var useActive = (function () {
  var _useBaseProps = Object(es["e" /* useBaseProps */])(),
      multiple = _useBaseProps.multiple,
      open = _useBaseProps.open;

  var _React$useContext = external_window_React_["useContext"](context),
      values = _React$useContext.values; // Record current dropdown active options
  // This also control the open status


  var _React$useState = external_window_React_["useState"]([]),
      _React$useState2 = Object(slicedToArray["a" /* default */])(_React$useState, 2),
      activeValueCells = _React$useState2[0],
      setActiveValueCells = _React$useState2[1];

  external_window_React_["useEffect"](function () {
    if (open && !multiple) {
      var firstValueCells = values[0];
      setActiveValueCells(firstValueCells || []);
    }
  },
  /* eslint-disable react-hooks/exhaustive-deps */
  [open]);
  return [activeValueCells, setActiveValueCells];
});
// EXTERNAL MODULE: ./node_modules/rc-util/es/KeyCode.js
var KeyCode = __webpack_require__("4IlW");

// CONCATENATED MODULE: ./node_modules/rc-cascader/es/OptionList/useKeyboard.js






/* harmony default export */ var useKeyboard = (function (ref, options, fieldNames, activeValueCells, setActiveValueCells, onKeyBoardSelect) {
  var _useBaseProps = Object(es["e" /* useBaseProps */])(),
      direction = _useBaseProps.direction,
      searchValue = _useBaseProps.searchValue,
      toggleOpen = _useBaseProps.toggleOpen,
      open = _useBaseProps.open;

  var rtl = direction === 'rtl';

  var _React$useMemo = external_window_React_["useMemo"](function () {
    var activeIndex = -1;
    var currentOptions = options;
    var mergedActiveIndexes = [];
    var mergedActiveValueCells = [];
    var len = activeValueCells.length; // Fill validate active value cells and index

    var _loop = function _loop(i) {
      // Mark the active index for current options
      var nextActiveIndex = currentOptions.findIndex(function (option) {
        return option[fieldNames.value] === activeValueCells[i];
      });

      if (nextActiveIndex === -1) {
        return "break";
      }

      activeIndex = nextActiveIndex;
      mergedActiveIndexes.push(activeIndex);
      mergedActiveValueCells.push(activeValueCells[i]);
      currentOptions = currentOptions[activeIndex][fieldNames.children];
    };

    for (var i = 0; i < len && currentOptions; i += 1) {
      var _ret = _loop(i);

      if (_ret === "break") break;
    } // Fill last active options


    var activeOptions = options;

    for (var _i = 0; _i < mergedActiveIndexes.length - 1; _i += 1) {
      activeOptions = activeOptions[mergedActiveIndexes[_i]][fieldNames.children];
    }

    return [mergedActiveValueCells, activeIndex, activeOptions];
  }, [activeValueCells, fieldNames, options]),
      _React$useMemo2 = Object(slicedToArray["a" /* default */])(_React$useMemo, 3),
      validActiveValueCells = _React$useMemo2[0],
      lastActiveIndex = _React$useMemo2[1],
      lastActiveOptions = _React$useMemo2[2]; // Update active value cells and scroll to target element


  var internalSetActiveValueCells = function internalSetActiveValueCells(next) {
    setActiveValueCells(next);
  }; // Same options offset


  var offsetActiveOption = function offsetActiveOption(offset) {
    var len = lastActiveOptions.length;
    var currentIndex = lastActiveIndex;

    if (currentIndex === -1 && offset < 0) {
      currentIndex = len;
    }

    for (var i = 0; i < len; i += 1) {
      currentIndex = (currentIndex + offset + len) % len;
      var option = lastActiveOptions[currentIndex];

      if (option && !option.disabled) {
        var value = option[fieldNames.value];
        var nextActiveCells = validActiveValueCells.slice(0, -1).concat(value);
        internalSetActiveValueCells(nextActiveCells);
        return;
      }
    }
  }; // Different options offset


  var prevColumn = function prevColumn() {
    if (validActiveValueCells.length > 1) {
      var nextActiveCells = validActiveValueCells.slice(0, -1);
      internalSetActiveValueCells(nextActiveCells);
    } else {
      toggleOpen(false);
    }
  };

  var nextColumn = function nextColumn() {
    var _lastActiveOptions$la;

    var nextOptions = ((_lastActiveOptions$la = lastActiveOptions[lastActiveIndex]) === null || _lastActiveOptions$la === void 0 ? void 0 : _lastActiveOptions$la[fieldNames.children]) || [];
    var nextOption = nextOptions.find(function (option) {
      return !option.disabled;
    });

    if (nextOption) {
      var nextActiveCells = [].concat(Object(toConsumableArray["a" /* default */])(validActiveValueCells), [nextOption[fieldNames.value]]);
      internalSetActiveValueCells(nextActiveCells);
    }
  };

  external_window_React_["useImperativeHandle"](ref, function () {
    return {
      // scrollTo: treeRef.current?.scrollTo,
      onKeyDown: function onKeyDown(event) {
        var which = event.which;

        switch (which) {
          // >>> Arrow keys
          case KeyCode["a" /* default */].UP:
          case KeyCode["a" /* default */].DOWN:
            {
              var offset = 0;

              if (which === KeyCode["a" /* default */].UP) {
                offset = -1;
              } else if (which === KeyCode["a" /* default */].DOWN) {
                offset = 1;
              }

              if (offset !== 0) {
                offsetActiveOption(offset);
              }

              break;
            }

          case KeyCode["a" /* default */].LEFT:
            {
              if (rtl) {
                nextColumn();
              } else {
                prevColumn();
              }

              break;
            }

          case KeyCode["a" /* default */].RIGHT:
            {
              if (rtl) {
                prevColumn();
              } else {
                nextColumn();
              }

              break;
            }

          case KeyCode["a" /* default */].BACKSPACE:
            {
              if (!searchValue) {
                prevColumn();
              }

              break;
            }
          // >>> Select

          case KeyCode["a" /* default */].ENTER:
            {
              if (validActiveValueCells.length) {
                var option = lastActiveOptions[lastActiveIndex]; // Search option should revert back of origin options

                var originOptions = (option === null || option === void 0 ? void 0 : option[SEARCH_MARK]) || [];

                if (originOptions.length) {
                  onKeyBoardSelect(originOptions.map(function (opt) {
                    return opt[fieldNames.value];
                  }), originOptions[originOptions.length - 1]);
                } else {
                  onKeyBoardSelect(validActiveValueCells, lastActiveOptions[lastActiveIndex]);
                }
              }

              break;
            }
          // >>> Close

          case KeyCode["a" /* default */].ESC:
            {
              toggleOpen(false);

              if (open) {
                event.stopPropagation();
              }
            }
        }
      },
      onKeyUp: function onKeyUp() {}
    };
  });
});
// CONCATENATED MODULE: ./node_modules/rc-cascader/es/OptionList/index.js






/* eslint-disable default-case */









var RefOptionList = /*#__PURE__*/external_window_React_["forwardRef"](function (props, ref) {
  var _optionColumns$, _optionColumns$$optio, _ref3, _classNames;

  var _useBaseProps = Object(es["e" /* useBaseProps */])(),
      prefixCls = _useBaseProps.prefixCls,
      multiple = _useBaseProps.multiple,
      searchValue = _useBaseProps.searchValue,
      toggleOpen = _useBaseProps.toggleOpen,
      notFoundContent = _useBaseProps.notFoundContent,
      direction = _useBaseProps.direction;

  var containerRef = external_window_React_["useRef"]();
  var rtl = direction === 'rtl';

  var _React$useContext = external_window_React_["useContext"](context),
      options = _React$useContext.options,
      values = _React$useContext.values,
      halfValues = _React$useContext.halfValues,
      fieldNames = _React$useContext.fieldNames,
      changeOnSelect = _React$useContext.changeOnSelect,
      onSelect = _React$useContext.onSelect,
      searchOptions = _React$useContext.searchOptions,
      dropdownPrefixCls = _React$useContext.dropdownPrefixCls,
      loadData = _React$useContext.loadData,
      expandTrigger = _React$useContext.expandTrigger;

  var mergedPrefixCls = dropdownPrefixCls || prefixCls; // ========================= loadData =========================

  var _React$useState = external_window_React_["useState"]([]),
      _React$useState2 = Object(slicedToArray["a" /* default */])(_React$useState, 2),
      loadingKeys = _React$useState2[0],
      setLoadingKeys = _React$useState2[1];

  var internalLoadData = function internalLoadData(valueCells) {
    // Do not load when search
    if (!loadData || searchValue) {
      return;
    }

    var optionList = toPathOptions(valueCells, options, fieldNames);
    var rawOptions = optionList.map(function (_ref) {
      var option = _ref.option;
      return option;
    });
    var lastOption = rawOptions[rawOptions.length - 1];

    if (lastOption && !isLeaf(lastOption, fieldNames)) {
      var pathKey = toPathKey(valueCells);
      setLoadingKeys(function (keys) {
        return [].concat(Object(toConsumableArray["a" /* default */])(keys), [pathKey]);
      });
      loadData(rawOptions);
    }
  }; // zombieJ: This is bad. We should make this same as \`rc-tree\` to use Promise instead.


  external_window_React_["useEffect"](function () {
    if (loadingKeys.length) {
      loadingKeys.forEach(function (loadingKey) {
        var valueStrCells = toPathValueStr(loadingKey);
        var optionList = toPathOptions(valueStrCells, options, fieldNames, true).map(function (_ref2) {
          var option = _ref2.option;
          return option;
        });
        var lastOption = optionList[optionList.length - 1];

        if (!lastOption || lastOption[fieldNames.children] || isLeaf(lastOption, fieldNames)) {
          setLoadingKeys(function (keys) {
            return keys.filter(function (key) {
              return key !== loadingKey;
            });
          });
        }
      });
    }
  }, [options, loadingKeys, fieldNames]); // ========================== Values ==========================

  var checkedSet = external_window_React_["useMemo"](function () {
    return new Set(toPathKeys(values));
  }, [values]);
  var halfCheckedSet = external_window_React_["useMemo"](function () {
    return new Set(toPathKeys(halfValues));
  }, [halfValues]); // ====================== Accessibility =======================

  var _useActive = useActive(),
      _useActive2 = Object(slicedToArray["a" /* default */])(_useActive, 2),
      activeValueCells = _useActive2[0],
      setActiveValueCells = _useActive2[1]; // =========================== Path ===========================


  var onPathOpen = function onPathOpen(nextValueCells) {
    setActiveValueCells(nextValueCells); // Trigger loadData

    internalLoadData(nextValueCells);
  };

  var isSelectable = function isSelectable(option) {
    var disabled = option.disabled;
    var isMergedLeaf = isLeaf(option, fieldNames);
    return !disabled && (isMergedLeaf || changeOnSelect || multiple);
  };

  var onPathSelect = function onPathSelect(valuePath, leaf) {
    var fromKeyboard = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    onSelect(valuePath);

    if (!multiple && (leaf || changeOnSelect && (expandTrigger === 'hover' || fromKeyboard))) {
      toggleOpen(false);
    }
  }; // ========================== Option ==========================


  var mergedOptions = external_window_React_["useMemo"](function () {
    if (searchValue) {
      return searchOptions;
    }

    return options;
  }, [searchValue, searchOptions, options]); // ========================== Column ==========================

  var optionColumns = external_window_React_["useMemo"](function () {
    var optionList = [{
      options: mergedOptions
    }];
    var currentList = mergedOptions;

    var _loop = function _loop(i) {
      var activeValueCell = activeValueCells[i];
      var currentOption = currentList.find(function (option) {
        return option[fieldNames.value] === activeValueCell;
      });
      var subOptions = currentOption === null || currentOption === void 0 ? void 0 : currentOption[fieldNames.children];

      if (!(subOptions === null || subOptions === void 0 ? void 0 : subOptions.length)) {
        return "break";
      }

      currentList = subOptions;
      optionList.push({
        options: subOptions
      });
    };

    for (var i = 0; i < activeValueCells.length; i += 1) {
      var _ret = _loop(i);

      if (_ret === "break") break;
    }

    return optionList;
  }, [mergedOptions, activeValueCells, fieldNames]); // ========================= Keyboard =========================

  var onKeyboardSelect = function onKeyboardSelect(selectValueCells, option) {
    if (isSelectable(option)) {
      onPathSelect(selectValueCells, isLeaf(option, fieldNames), true);
    }
  };

  useKeyboard(ref, mergedOptions, fieldNames, activeValueCells, onPathOpen, onKeyboardSelect); // >>>>> Active Scroll

  external_window_React_["useEffect"](function () {
    for (var i = 0; i < activeValueCells.length; i += 1) {
      var _containerRef$current;

      var cellPath = activeValueCells.slice(0, i + 1);
      var cellKeyPath = toPathKey(cellPath);
      var ele = (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.querySelector("li[data-path-key=\\"".concat(cellKeyPath.replace(/\\\\{0,2}"/g, '\\\\"'), "\\"]"));

      if (ele) {
        scrollIntoParentView(ele);
      }
    }
  }, [activeValueCells]); // ========================== Render ==========================
  // >>>>> Empty

  var isEmpty = !((_optionColumns$ = optionColumns[0]) === null || _optionColumns$ === void 0 ? void 0 : (_optionColumns$$optio = _optionColumns$.options) === null || _optionColumns$$optio === void 0 ? void 0 : _optionColumns$$optio.length);
  var emptyList = [(_ref3 = {}, Object(defineProperty["a" /* default */])(_ref3, fieldNames.value, '__EMPTY__'), Object(defineProperty["a" /* default */])(_ref3, FIX_LABEL, notFoundContent), Object(defineProperty["a" /* default */])(_ref3, "disabled", true), _ref3)];

  var columnProps = Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, props), {}, {
    multiple: !isEmpty && multiple,
    onSelect: onPathSelect,
    onActive: onPathOpen,
    onToggleOpen: toggleOpen,
    checkedSet: checkedSet,
    halfCheckedSet: halfCheckedSet,
    loadingKeys: loadingKeys,
    isSelectable: isSelectable
  }); // >>>>> Columns


  var mergedOptionColumns = isEmpty ? [{
    options: emptyList
  }] : optionColumns;
  var columnNodes = mergedOptionColumns.map(function (col, index) {
    var prevValuePath = activeValueCells.slice(0, index);
    var activeValue = activeValueCells[index];
    return /*#__PURE__*/external_window_React_["createElement"](Column, Object(esm_extends["a" /* default */])({
      key: index
    }, columnProps, {
      prefixCls: mergedPrefixCls,
      options: col.options,
      prevValuePath: prevValuePath,
      activeValue: activeValue
    }));
  }); // >>>>> Render

  return /*#__PURE__*/external_window_React_["createElement"]("div", {
    className: classnames_default()("".concat(mergedPrefixCls, "-menus"), (_classNames = {}, Object(defineProperty["a" /* default */])(_classNames, "".concat(mergedPrefixCls, "-menu-empty"), isEmpty), Object(defineProperty["a" /* default */])(_classNames, "".concat(mergedPrefixCls, "-rtl"), rtl), _classNames)),
    ref: containerRef
  }, columnNodes);
});
/* harmony default export */ var es_OptionList = (RefOptionList);
// CONCATENATED MODULE: ./node_modules/rc-cascader/es/utils/warningPropsUtil.js


function warningProps(props) {
  var onPopupVisibleChange = props.onPopupVisibleChange,
      popupVisible = props.popupVisible,
      popupClassName = props.popupClassName,
      popupPlacement = props.popupPlacement;
  Object(warning["a" /* default */])(!onPopupVisibleChange, '\`onPopupVisibleChange\` is deprecated. Please use \`onDropdownVisibleChange\` instead.');
  Object(warning["a" /* default */])(popupVisible === undefined, '\`popupVisible\` is deprecated. Please use \`open\` instead.');
  Object(warning["a" /* default */])(popupClassName === undefined, '\`popupClassName\` is deprecated. Please use \`dropdownClassName\` instead.');
  Object(warning["a" /* default */])(popupPlacement === undefined, '\`popupPlacement\` is deprecated. Please use \`placement\` instead.');
} // value in Cascader options should not be null


function warningNullOptions(options, fieldNames) {
  if (options) {
    var recursiveOptions = function recursiveOptions(optionsList) {
      for (var i = 0; i < optionsList.length; i++) {
        var option = optionsList[i];

        if (option[fieldNames === null || fieldNames === void 0 ? void 0 : fieldNames.value] === null) {
          Object(warning["a" /* default */])(false, '\`value\` in Cascader options should not be \`null\`.');
          return true;
        }

        if (Array.isArray(option[fieldNames === null || fieldNames === void 0 ? void 0 : fieldNames.children]) && recursiveOptions(option[fieldNames === null || fieldNames === void 0 ? void 0 : fieldNames.children])) {
          return true;
        }
      }
    };

    recursiveOptions(options);
  }
}
/* harmony default export */ var warningPropsUtil = (warningProps);
// CONCATENATED MODULE: ./node_modules/rc-cascader/es/Cascader.js




var _excluded = ["id", "prefixCls", "fieldNames", "defaultValue", "value", "changeOnSelect", "onChange", "displayRender", "checkable", "searchValue", "onSearch", "showSearch", "expandTrigger", "options", "dropdownPrefixCls", "loadData", "popupVisible", "open", "popupClassName", "dropdownClassName", "dropdownMenuColumnStyle", "popupPlacement", "placement", "onDropdownVisibleChange", "onPopupVisibleChange", "expandIcon", "loadingIcon", "children", "dropdownMatchSelectWidth", "showCheckedStrategy"];

















function isMultipleValue(value) {
  return Array.isArray(value) && Array.isArray(value[0]);
}

function toRawValues(value) {
  if (!value) {
    return [];
  }

  if (isMultipleValue(value)) {
    return value;
  }

  return (value.length === 0 ? [] : [value]).map(function (val) {
    return Array.isArray(val) ? val : [val];
  });
}

var Cascader = /*#__PURE__*/external_window_React_["forwardRef"](function (props, ref) {
  var id = props.id,
      _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'rc-cascader' : _props$prefixCls,
      fieldNames = props.fieldNames,
      defaultValue = props.defaultValue,
      value = props.value,
      changeOnSelect = props.changeOnSelect,
      onChange = props.onChange,
      displayRender = props.displayRender,
      checkable = props.checkable,
      searchValue = props.searchValue,
      onSearch = props.onSearch,
      showSearch = props.showSearch,
      expandTrigger = props.expandTrigger,
      options = props.options,
      dropdownPrefixCls = props.dropdownPrefixCls,
      loadData = props.loadData,
      popupVisible = props.popupVisible,
      open = props.open,
      popupClassName = props.popupClassName,
      dropdownClassName = props.dropdownClassName,
      dropdownMenuColumnStyle = props.dropdownMenuColumnStyle,
      popupPlacement = props.popupPlacement,
      placement = props.placement,
      onDropdownVisibleChange = props.onDropdownVisibleChange,
      onPopupVisibleChange = props.onPopupVisibleChange,
      _props$expandIcon = props.expandIcon,
      expandIcon = _props$expandIcon === void 0 ? '>' : _props$expandIcon,
      loadingIcon = props.loadingIcon,
      children = props.children,
      _props$dropdownMatchS = props.dropdownMatchSelectWidth,
      dropdownMatchSelectWidth = _props$dropdownMatchS === void 0 ? false : _props$dropdownMatchS,
      _props$showCheckedStr = props.showCheckedStrategy,
      showCheckedStrategy = _props$showCheckedStr === void 0 ? SHOW_PARENT : _props$showCheckedStr,
      restProps = Object(objectWithoutProperties["a" /* default */])(props, _excluded);

  var mergedId = Object(useId["a" /* default */])(id);
  var multiple = !!checkable; // =========================== Values ===========================

  var _useMergedState = Object(useMergedState["a" /* default */])(defaultValue, {
    value: value,
    postState: toRawValues
  }),
      _useMergedState2 = Object(slicedToArray["a" /* default */])(_useMergedState, 2),
      rawValues = _useMergedState2[0],
      setRawValues = _useMergedState2[1]; // ========================= FieldNames =========================


  var mergedFieldNames = external_window_React_["useMemo"](function () {
    return fillFieldNames(fieldNames);
  },
  /* eslint-disable react-hooks/exhaustive-deps */
  [JSON.stringify(fieldNames)]); // =========================== Option ===========================

  var mergedOptions = external_window_React_["useMemo"](function () {
    return options || [];
  }, [options]); // Only used in multiple mode, this fn will not call in single mode

  var getPathKeyEntities = useEntities(mergedOptions, mergedFieldNames);
  /** Convert path key back to value format */

  var getValueByKeyPath = external_window_React_["useCallback"](function (pathKeys) {
    var keyPathEntities = getPathKeyEntities();
    return pathKeys.map(function (pathKey) {
      var nodes = keyPathEntities[pathKey].nodes;
      return nodes.map(function (node) {
        return node[mergedFieldNames.value];
      });
    });
  }, [getPathKeyEntities, mergedFieldNames]); // =========================== Search ===========================

  var _useMergedState3 = Object(useMergedState["a" /* default */])('', {
    value: searchValue,
    postState: function postState(search) {
      return search || '';
    }
  }),
      _useMergedState4 = Object(slicedToArray["a" /* default */])(_useMergedState3, 2),
      mergedSearchValue = _useMergedState4[0],
      setSearchValue = _useMergedState4[1];

  var onInternalSearch = function onInternalSearch(searchText, info) {
    setSearchValue(searchText);

    if (info.source !== 'blur' && onSearch) {
      onSearch(searchText);
    }
  };

  var _useSearchConfig = useSearchConfig(showSearch),
      _useSearchConfig2 = Object(slicedToArray["a" /* default */])(_useSearchConfig, 2),
      mergedShowSearch = _useSearchConfig2[0],
      searchConfig = _useSearchConfig2[1];

  var searchOptions = useSearchOptions(mergedSearchValue, mergedOptions, mergedFieldNames, dropdownPrefixCls || prefixCls, searchConfig, changeOnSelect); // =========================== Values ===========================

  var getMissingValues = useMissingValues(mergedOptions, mergedFieldNames); // Fill \`rawValues\` with checked conduction values

  var _React$useMemo = external_window_React_["useMemo"](function () {
    var _getMissingValues = getMissingValues(rawValues),
        _getMissingValues2 = Object(slicedToArray["a" /* default */])(_getMissingValues, 2),
        existValues = _getMissingValues2[0],
        missingValues = _getMissingValues2[1];

    if (!multiple || !rawValues.length) {
      return [existValues, [], missingValues];
    }

    var keyPathValues = toPathKeys(existValues);
    var keyPathEntities = getPathKeyEntities();

    var _conductCheck = Object(conductUtil["a" /* conductCheck */])(keyPathValues, true, keyPathEntities),
        checkedKeys = _conductCheck.checkedKeys,
        halfCheckedKeys = _conductCheck.halfCheckedKeys; // Convert key back to value cells


    return [getValueByKeyPath(checkedKeys), getValueByKeyPath(halfCheckedKeys), missingValues];
  }, [multiple, rawValues, getPathKeyEntities, getValueByKeyPath, getMissingValues]),
      _React$useMemo2 = Object(slicedToArray["a" /* default */])(_React$useMemo, 3),
      checkedValues = _React$useMemo2[0],
      halfCheckedValues = _React$useMemo2[1],
      missingCheckedValues = _React$useMemo2[2];

  var deDuplicatedValues = external_window_React_["useMemo"](function () {
    var checkedKeys = toPathKeys(checkedValues);
    var deduplicateKeys = formatStrategyValues(checkedKeys, getPathKeyEntities, showCheckedStrategy);
    return [].concat(Object(toConsumableArray["a" /* default */])(missingCheckedValues), Object(toConsumableArray["a" /* default */])(getValueByKeyPath(deduplicateKeys)));
  }, [checkedValues, getPathKeyEntities, getValueByKeyPath, missingCheckedValues, showCheckedStrategy]);
  var displayValues = useDisplayValues(deDuplicatedValues, mergedOptions, mergedFieldNames, multiple, displayRender); // =========================== Change ===========================

  var triggerChange = useRefFunc(function (nextValues) {
    setRawValues(nextValues); // Save perf if no need trigger event

    if (onChange) {
      var nextRawValues = toRawValues(nextValues);
      var valueOptions = nextRawValues.map(function (valueCells) {
        return toPathOptions(valueCells, mergedOptions, mergedFieldNames).map(function (valueOpt) {
          return valueOpt.option;
        });
      });
      var triggerValues = multiple ? nextRawValues : nextRawValues[0];
      var triggerOptions = multiple ? valueOptions : valueOptions[0];
      onChange(triggerValues, triggerOptions);
    }
  }); // =========================== Select ===========================

  var onInternalSelect = useRefFunc(function (valuePath) {
    setSearchValue('');

    if (!multiple) {
      triggerChange(valuePath);
    } else {
      // Prepare conduct required info
      var pathKey = toPathKey(valuePath);
      var checkedPathKeys = toPathKeys(checkedValues);
      var halfCheckedPathKeys = toPathKeys(halfCheckedValues);
      var existInChecked = checkedPathKeys.includes(pathKey);
      var existInMissing = missingCheckedValues.some(function (valueCells) {
        return toPathKey(valueCells) === pathKey;
      }); // Do update

      var nextCheckedValues = checkedValues;
      var nextMissingValues = missingCheckedValues;

      if (existInMissing && !existInChecked) {
        // Missing value only do filter
        nextMissingValues = missingCheckedValues.filter(function (valueCells) {
          return toPathKey(valueCells) !== pathKey;
        });
      } else {
        // Update checked key first
        var nextRawCheckedKeys = existInChecked ? checkedPathKeys.filter(function (key) {
          return key !== pathKey;
        }) : [].concat(Object(toConsumableArray["a" /* default */])(checkedPathKeys), [pathKey]);
        var pathKeyEntities = getPathKeyEntities(); // Conduction by selected or not

        var checkedKeys;

        if (existInChecked) {
          var _conductCheck2 = Object(conductUtil["a" /* conductCheck */])(nextRawCheckedKeys, {
            checked: false,
            halfCheckedKeys: halfCheckedPathKeys
          }, pathKeyEntities);

          checkedKeys = _conductCheck2.checkedKeys;
        } else {
          var _conductCheck3 = Object(conductUtil["a" /* conductCheck */])(nextRawCheckedKeys, true, pathKeyEntities);

          checkedKeys = _conductCheck3.checkedKeys;
        } // Roll up to parent level keys


        var deDuplicatedKeys = formatStrategyValues(checkedKeys, getPathKeyEntities, showCheckedStrategy);
        nextCheckedValues = getValueByKeyPath(deDuplicatedKeys);
      }

      triggerChange([].concat(Object(toConsumableArray["a" /* default */])(nextMissingValues), Object(toConsumableArray["a" /* default */])(nextCheckedValues)));
    }
  }); // Display Value change logic

  var onDisplayValuesChange = function onDisplayValuesChange(_, info) {
    if (info.type === 'clear') {
      triggerChange([]);
      return;
    } // Cascader do not support \`add\` type. Only support \`remove\`


    var valueCells = info.values[0].valueCells;
    onInternalSelect(valueCells);
  }; // ============================ Open ============================


  var mergedOpen = open !== undefined ? open : popupVisible;
  var mergedDropdownClassName = dropdownClassName || popupClassName;
  var mergedPlacement = placement || popupPlacement;

  var onInternalDropdownVisibleChange = function onInternalDropdownVisibleChange(nextVisible) {
    onDropdownVisibleChange === null || onDropdownVisibleChange === void 0 ? void 0 : onDropdownVisibleChange(nextVisible);
    onPopupVisibleChange === null || onPopupVisibleChange === void 0 ? void 0 : onPopupVisibleChange(nextVisible);
  }; // ========================== Warning ===========================


  if (false) {} // ========================== Context ===========================


  var cascaderContext = external_window_React_["useMemo"](function () {
    return {
      options: mergedOptions,
      fieldNames: mergedFieldNames,
      values: checkedValues,
      halfValues: halfCheckedValues,
      changeOnSelect: changeOnSelect,
      onSelect: onInternalSelect,
      checkable: checkable,
      searchOptions: searchOptions,
      dropdownPrefixCls: dropdownPrefixCls,
      loadData: loadData,
      expandTrigger: expandTrigger,
      expandIcon: expandIcon,
      loadingIcon: loadingIcon,
      dropdownMenuColumnStyle: dropdownMenuColumnStyle
    };
  }, [mergedOptions, mergedFieldNames, checkedValues, halfCheckedValues, changeOnSelect, onInternalSelect, checkable, searchOptions, dropdownPrefixCls, loadData, expandTrigger, expandIcon, loadingIcon, dropdownMenuColumnStyle]); // ==============================================================
  // ==                          Render                          ==
  // ==============================================================

  var emptyOptions = !(mergedSearchValue ? searchOptions : mergedOptions).length;
  var dropdownStyle = // Search to match width
  mergedSearchValue && searchConfig.matchInputWidth || // Empty keep the width
  emptyOptions ? {} : {
    minWidth: 'auto'
  };
  return /*#__PURE__*/external_window_React_["createElement"](context.Provider, {
    value: cascaderContext
  }, /*#__PURE__*/external_window_React_["createElement"](es["a" /* BaseSelect */], Object(esm_extends["a" /* default */])({}, restProps, {
    // MISC
    ref: ref,
    id: mergedId,
    prefixCls: prefixCls,
    dropdownMatchSelectWidth: dropdownMatchSelectWidth,
    dropdownStyle: dropdownStyle // Value
    ,
    displayValues: displayValues,
    onDisplayValuesChange: onDisplayValuesChange,
    mode: multiple ? 'multiple' : undefined // Search
    ,
    searchValue: mergedSearchValue,
    onSearch: onInternalSearch,
    showSearch: mergedShowSearch // Options
    ,
    OptionList: es_OptionList,
    emptyOptions: emptyOptions // Open
    ,
    open: mergedOpen,
    dropdownClassName: mergedDropdownClassName,
    placement: mergedPlacement,
    onDropdownVisibleChange: onInternalDropdownVisibleChange // Children
    ,
    getRawInputElement: function getRawInputElement() {
      return children;
    }
  })));
});

if (false) {}

Cascader.SHOW_PARENT = SHOW_PARENT;
Cascader.SHOW_CHILD = SHOW_CHILD;
/* harmony default export */ var es_Cascader = (Cascader);
// CONCATENATED MODULE: ./node_modules/rc-cascader/es/index.js

/* harmony default export */ var rc_cascader_es = (es_Cascader);
// EXTERNAL MODULE: ./node_modules/rc-util/es/omit.js
var omit = __webpack_require__("bT9E");

// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var config_provider_context = __webpack_require__("H84U");

// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/defaultRenderEmpty.js
var defaultRenderEmpty = __webpack_require__("XI05");

// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/DisabledContext.js
var DisabledContext = __webpack_require__("caoh");

// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/SizeContext.js
var SizeContext = __webpack_require__("3Nzz");

// EXTERNAL MODULE: ./node_modules/antd/es/form/context.js
var form_context = __webpack_require__("ihLV");

// EXTERNAL MODULE: ./node_modules/antd/es/select/utils/iconUtil.js
var iconUtil = __webpack_require__("1vzs");

// EXTERNAL MODULE: ./node_modules/antd/es/_util/motion.js
var motion = __webpack_require__("EXcs");

// EXTERNAL MODULE: ./node_modules/antd/es/_util/statusUtils.js
var statusUtils = __webpack_require__("ATYA");

// CONCATENATED MODULE: ./node_modules/antd/es/cascader/index.js




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

















var cascader_SHOW_CHILD = rc_cascader_es.SHOW_CHILD,
  cascader_SHOW_PARENT = rc_cascader_es.SHOW_PARENT;
function highlightKeyword(str, lowerKeyword, prefixCls) {
  var cells = str.toLowerCase().split(lowerKeyword).reduce(function (list, cur, index) {
    return index === 0 ? [cur] : [].concat(Object(toConsumableArray["a" /* default */])(list), [lowerKeyword, cur]);
  }, []);
  var fillCells = [];
  var start = 0;
  cells.forEach(function (cell, index) {
    var end = start + cell.length;
    var originWorld = str.slice(start, end);
    start = end;
    if (index % 2 === 1) {
      originWorld =
      /*#__PURE__*/
      // eslint-disable-next-line react/no-array-index-key
      external_window_React_["createElement"]("span", {
        className: "".concat(prefixCls, "-menu-item-keyword"),
        key: "seperator-".concat(index)
      }, originWorld);
    }
    fillCells.push(originWorld);
  });
  return fillCells;
}
var cascader_defaultSearchRender = function defaultSearchRender(inputValue, path, prefixCls, fieldNames) {
  var optionList = [];
  // We do lower here to save perf
  var lower = inputValue.toLowerCase();
  path.forEach(function (node, index) {
    if (index !== 0) {
      optionList.push(' / ');
    }
    var label = node[fieldNames.label];
    var type = Object(esm_typeof["a" /* default */])(label);
    if (type === 'string' || type === 'number') {
      label = highlightKeyword(String(label), lower, prefixCls);
    }
    optionList.push(label);
  });
  return optionList;
};
var cascader_Cascader = /*#__PURE__*/external_window_React_["forwardRef"](function (props, ref) {
  var _classNames2;
  var customizePrefixCls = props.prefixCls,
    customizeSize = props.size,
    customDisabled = props.disabled,
    className = props.className,
    multiple = props.multiple,
    _props$bordered = props.bordered,
    bordered = _props$bordered === void 0 ? true : _props$bordered,
    transitionName = props.transitionName,
    _props$choiceTransiti = props.choiceTransitionName,
    choiceTransitionName = _props$choiceTransiti === void 0 ? '' : _props$choiceTransiti,
    popupClassName = props.popupClassName,
    dropdownClassName = props.dropdownClassName,
    expandIcon = props.expandIcon,
    placement = props.placement,
    showSearch = props.showSearch,
    _props$allowClear = props.allowClear,
    allowClear = _props$allowClear === void 0 ? true : _props$allowClear,
    notFoundContent = props.notFoundContent,
    direction = props.direction,
    getPopupContainer = props.getPopupContainer,
    customStatus = props.status,
    showArrow = props.showArrow,
    rest = __rest(props, ["prefixCls", "size", "disabled", "className", "multiple", "bordered", "transitionName", "choiceTransitionName", "popupClassName", "dropdownClassName", "expandIcon", "placement", "showSearch", "allowClear", "notFoundContent", "direction", "getPopupContainer", "status", "showArrow"]);
  var restProps = Object(omit["a" /* default */])(rest, ['suffixIcon']);
  var _useContext = Object(external_window_React_["useContext"])(config_provider_context["b" /* ConfigContext */]),
    getContextPopupContainer = _useContext.getPopupContainer,
    getPrefixCls = _useContext.getPrefixCls,
    renderEmpty = _useContext.renderEmpty,
    rootDirection = _useContext.direction;
  var mergedDirection = direction || rootDirection;
  var isRtl = mergedDirection === 'rtl';
  // =================== Form =====================
  var _useContext2 = Object(external_window_React_["useContext"])(form_context["b" /* FormItemInputContext */]),
    contextStatus = _useContext2.status,
    hasFeedback = _useContext2.hasFeedback,
    isFormItemInput = _useContext2.isFormItemInput,
    feedbackIcon = _useContext2.feedbackIcon;
  var mergedStatus = Object(statusUtils["a" /* getMergedStatus */])(contextStatus, customStatus);
  // =================== Warning =====================
   false ? undefined : void 0;
   false ? undefined : void 0;
  // =================== No Found ====================
  var mergedNotFoundContent = notFoundContent || (renderEmpty || defaultRenderEmpty["a" /* default */])('Cascader');
  // ==================== Prefix =====================
  var rootPrefixCls = getPrefixCls();
  var prefixCls = getPrefixCls('select', customizePrefixCls);
  var cascaderPrefixCls = getPrefixCls('cascader', customizePrefixCls);
  // =================== Dropdown ====================
  var mergedDropdownClassName = classnames_default()(popupClassName || dropdownClassName, "".concat(cascaderPrefixCls, "-dropdown"), Object(defineProperty["a" /* default */])({}, "".concat(cascaderPrefixCls, "-dropdown-rtl"), mergedDirection === 'rtl'));
  // ==================== Search =====================
  var mergedShowSearch = external_window_React_["useMemo"](function () {
    if (!showSearch) {
      return showSearch;
    }
    var searchConfig = {
      render: cascader_defaultSearchRender
    };
    if (Object(esm_typeof["a" /* default */])(showSearch) === 'object') {
      searchConfig = Object(esm_extends["a" /* default */])(Object(esm_extends["a" /* default */])({}, searchConfig), showSearch);
    }
    return searchConfig;
  }, [showSearch]);
  // ===================== Size ======================
  var size = external_window_React_["useContext"](SizeContext["b" /* default */]);
  var mergedSize = customizeSize || size;
  // ===================== Disabled =====================
  var disabled = external_window_React_["useContext"](DisabledContext["b" /* default */]);
  var mergedDisabled = customDisabled || disabled;
  // ===================== Icon ======================
  var mergedExpandIcon = expandIcon;
  if (!expandIcon) {
    mergedExpandIcon = isRtl ? /*#__PURE__*/external_window_React_["createElement"](LeftOutlined["a" /* default */], null) : /*#__PURE__*/external_window_React_["createElement"](RightOutlined["a" /* default */], null);
  }
  var loadingIcon = /*#__PURE__*/external_window_React_["createElement"]("span", {
    className: "".concat(prefixCls, "-menu-item-loading-icon")
  }, /*#__PURE__*/external_window_React_["createElement"](LoadingOutlined["a" /* default */], {
    spin: true
  }));
  // =================== Multiple ====================
  var checkable = external_window_React_["useMemo"](function () {
    return multiple ? /*#__PURE__*/external_window_React_["createElement"]("span", {
      className: "".concat(cascaderPrefixCls, "-checkbox-inner")
    }) : false;
  }, [multiple]);
  // ===================== Icons =====================
  var mergedShowArrow = showArrow !== undefined ? showArrow : props.loading || !multiple;
  var _getIcons = Object(iconUtil["a" /* default */])(Object(esm_extends["a" /* default */])(Object(esm_extends["a" /* default */])({}, props), {
      hasFeedback: hasFeedback,
      feedbackIcon: feedbackIcon,
      showArrow: mergedShowArrow,
      multiple: multiple,
      prefixCls: prefixCls
    })),
    suffixIcon = _getIcons.suffixIcon,
    removeIcon = _getIcons.removeIcon,
    clearIcon = _getIcons.clearIcon;
  // ===================== Placement =====================
  var getPlacement = function getPlacement() {
    if (placement !== undefined) {
      return placement;
    }
    return direction === 'rtl' ? 'bottomRight' : 'bottomLeft';
  };
  // ==================== Render =====================
  return /*#__PURE__*/external_window_React_["createElement"](rc_cascader_es, Object(esm_extends["a" /* default */])({
    prefixCls: prefixCls,
    className: classnames_default()(!customizePrefixCls && cascaderPrefixCls, (_classNames2 = {}, Object(defineProperty["a" /* default */])(_classNames2, "".concat(prefixCls, "-lg"), mergedSize === 'large'), Object(defineProperty["a" /* default */])(_classNames2, "".concat(prefixCls, "-sm"), mergedSize === 'small'), Object(defineProperty["a" /* default */])(_classNames2, "".concat(prefixCls, "-rtl"), isRtl), Object(defineProperty["a" /* default */])(_classNames2, "".concat(prefixCls, "-borderless"), !bordered), Object(defineProperty["a" /* default */])(_classNames2, "".concat(prefixCls, "-in-form-item"), isFormItemInput), _classNames2), Object(statusUtils["b" /* getStatusClassNames */])(prefixCls, mergedStatus, hasFeedback), className),
    disabled: mergedDisabled
  }, restProps, {
    direction: mergedDirection,
    placement: getPlacement(),
    notFoundContent: mergedNotFoundContent,
    allowClear: allowClear,
    showSearch: mergedShowSearch,
    expandIcon: mergedExpandIcon,
    inputIcon: suffixIcon,
    removeIcon: removeIcon,
    clearIcon: clearIcon,
    loadingIcon: loadingIcon,
    checkable: checkable,
    dropdownClassName: mergedDropdownClassName,
    dropdownPrefixCls: customizePrefixCls || cascaderPrefixCls,
    choiceTransitionName: Object(motion["c" /* getTransitionName */])(rootPrefixCls, '', choiceTransitionName),
    transitionName: Object(motion["c" /* getTransitionName */])(rootPrefixCls, Object(motion["b" /* getTransitionDirection */])(placement), transitionName),
    getPopupContainer: getPopupContainer || getContextPopupContainer,
    ref: ref,
    showArrow: hasFeedback || showArrow
  }));
});
if (false) {}
cascader_Cascader.SHOW_PARENT = cascader_SHOW_PARENT;
cascader_Cascader.SHOW_CHILD = cascader_SHOW_CHILD;
/* harmony default export */ var cascader = (cascader_Cascader);
// EXTERNAL MODULE: ./node_modules/antd/es/time-picker/style/index.less
var time_picker_style = __webpack_require__("pL63");

// EXTERNAL MODULE: ./node_modules/antd/es/date-picker/style/index.js
var date_picker_style = __webpack_require__("iQDF");

// CONCATENATED MODULE: ./node_modules/antd/es/time-picker/style/index.js


// style dependencies

// EXTERNAL MODULE: ./node_modules/antd/es/date-picker/index.js + 57 modules
var date_picker = __webpack_require__("+eQT");

// CONCATENATED MODULE: ./node_modules/antd/es/time-picker/index.js

var time_picker_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};



var InternalTimePicker = date_picker["a" /* default */].TimePicker,
  InternalRangePicker = date_picker["a" /* default */].RangePicker;
var RangePicker = /*#__PURE__*/external_window_React_["forwardRef"](function (props, ref) {
  var dropdownClassName = props.dropdownClassName,
    popupClassName = props.popupClassName;
   false ? undefined : void 0;
  return /*#__PURE__*/external_window_React_["createElement"](InternalRangePicker, Object(esm_extends["a" /* default */])({}, props, {
    dropdownClassName: popupClassName || dropdownClassName,
    picker: "time",
    mode: undefined,
    ref: ref
  }));
});
var TimePicker = /*#__PURE__*/external_window_React_["forwardRef"](function (_a, ref) {
  var addon = _a.addon,
    renderExtraFooter = _a.renderExtraFooter,
    popupClassName = _a.popupClassName,
    dropdownClassName = _a.dropdownClassName,
    restProps = time_picker_rest(_a, ["addon", "renderExtraFooter", "popupClassName", "dropdownClassName"]);
  var internalRenderExtraFooter = external_window_React_["useMemo"](function () {
    if (renderExtraFooter) {
      return renderExtraFooter;
    }
    if (addon) {
       false ? undefined : void 0;
      return addon;
    }
    return undefined;
  }, [addon, renderExtraFooter]);
   false ? undefined : void 0;
  return /*#__PURE__*/external_window_React_["createElement"](InternalTimePicker, Object(esm_extends["a" /* default */])({
    dropdownClassName: popupClassName || dropdownClassName
  }, restProps, {
    mode: undefined,
    ref: ref,
    renderExtraFooter: internalRenderExtraFooter
  }));
});
if (false) {}
TimePicker.RangePicker = RangePicker;
/* harmony default export */ var time_picker = (TimePicker);
// EXTERNAL MODULE: ./node_modules/antd/es/tree-select/style/index.less
var tree_select_style = __webpack_require__("0fbx");

// CONCATENATED MODULE: ./node_modules/antd/es/tree-select/style/index.js


// style dependencies
// deps-lint-skip: tree, form


// EXTERNAL MODULE: ./node_modules/rc-select/lib/hooks/useId.js
var hooks_useId = __webpack_require__("vHRA");
var useId_default = /*#__PURE__*/__webpack_require__.n(hooks_useId);

// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useMemo.js
var useMemo = __webpack_require__("YrtM");

// EXTERNAL MODULE: ./node_modules/rc-tree/es/index.js + 5 modules
var rc_tree_es = __webpack_require__("fAei");

// CONCATENATED MODULE: ./node_modules/rc-tree-select/es/LegacyContext.js

var LegacySelectContext = /*#__PURE__*/external_window_React_["createContext"](null);
/* harmony default export */ var LegacyContext = (LegacySelectContext);
// CONCATENATED MODULE: ./node_modules/rc-tree-select/es/TreeSelectContext.js

var TreeSelectContext = /*#__PURE__*/external_window_React_["createContext"](null);
/* harmony default export */ var es_TreeSelectContext = (TreeSelectContext);
// CONCATENATED MODULE: ./node_modules/rc-tree-select/es/utils/valueUtil.js
function toArray(value) {
  if (Array.isArray(value)) {
    return value;
  }

  return value !== undefined ? [value] : [];
}
function valueUtil_fillFieldNames(fieldNames) {
  var _ref = fieldNames || {},
      label = _ref.label,
      value = _ref.value,
      children = _ref.children;

  var mergedValue = value || 'value';
  return {
    _title: label ? [label] : ['title', 'label'],
    value: mergedValue,
    key: mergedValue,
    children: children || 'children'
  };
}
function isCheckDisabled(node) {
  return !node || node.disabled || node.disableCheckbox || node.checkable === false;
}
/** Loop fetch all the keys exist in the tree */

function getAllKeys(treeData, fieldNames) {
  var keys = [];

  function dig(list) {
    list.forEach(function (item) {
      keys.push(item[fieldNames.value]);
      var children = item[fieldNames.children];

      if (children) {
        dig(children);
      }
    });
  }

  dig(treeData);
  return keys;
}
function isNil(val) {
  return val === null || val === undefined;
}
// CONCATENATED MODULE: ./node_modules/rc-tree-select/es/OptionList.js











var HIDDEN_STYLE = {
  width: 0,
  height: 0,
  display: 'flex',
  overflow: 'hidden',
  opacity: 0,
  border: 0,
  padding: 0,
  margin: 0
};

var OptionList_OptionList = function OptionList(_, ref) {
  var _useBaseProps = Object(es["e" /* useBaseProps */])(),
      prefixCls = _useBaseProps.prefixCls,
      multiple = _useBaseProps.multiple,
      searchValue = _useBaseProps.searchValue,
      toggleOpen = _useBaseProps.toggleOpen,
      open = _useBaseProps.open,
      notFoundContent = _useBaseProps.notFoundContent;

  var _React$useContext = external_window_React_["useContext"](es_TreeSelectContext),
      virtual = _React$useContext.virtual,
      listHeight = _React$useContext.listHeight,
      listItemHeight = _React$useContext.listItemHeight,
      treeData = _React$useContext.treeData,
      fieldNames = _React$useContext.fieldNames,
      onSelect = _React$useContext.onSelect,
      dropdownMatchSelectWidth = _React$useContext.dropdownMatchSelectWidth,
      treeExpandAction = _React$useContext.treeExpandAction;

  var _React$useContext2 = external_window_React_["useContext"](LegacyContext),
      checkable = _React$useContext2.checkable,
      checkedKeys = _React$useContext2.checkedKeys,
      halfCheckedKeys = _React$useContext2.halfCheckedKeys,
      treeExpandedKeys = _React$useContext2.treeExpandedKeys,
      treeDefaultExpandAll = _React$useContext2.treeDefaultExpandAll,
      treeDefaultExpandedKeys = _React$useContext2.treeDefaultExpandedKeys,
      onTreeExpand = _React$useContext2.onTreeExpand,
      treeIcon = _React$useContext2.treeIcon,
      showTreeIcon = _React$useContext2.showTreeIcon,
      switcherIcon = _React$useContext2.switcherIcon,
      treeLine = _React$useContext2.treeLine,
      treeNodeFilterProp = _React$useContext2.treeNodeFilterProp,
      loadData = _React$useContext2.loadData,
      treeLoadedKeys = _React$useContext2.treeLoadedKeys,
      treeMotion = _React$useContext2.treeMotion,
      onTreeLoad = _React$useContext2.onTreeLoad,
      keyEntities = _React$useContext2.keyEntities;

  var treeRef = external_window_React_["useRef"]();
  var memoTreeData = Object(useMemo["a" /* default */])(function () {
    return treeData;
  }, [open, treeData], function (prev, next) {
    return next[0] && prev[1] !== next[1];
  }); // ========================== Values ==========================

  var mergedCheckedKeys = external_window_React_["useMemo"](function () {
    if (!checkable) {
      return null;
    }

    return {
      checked: checkedKeys,
      halfChecked: halfCheckedKeys
    };
  }, [checkable, checkedKeys, halfCheckedKeys]); // ========================== Scroll ==========================

  external_window_React_["useEffect"](function () {
    // Single mode should scroll to current key
    if (open && !multiple && checkedKeys.length) {
      var _treeRef$current;

      (_treeRef$current = treeRef.current) === null || _treeRef$current === void 0 ? void 0 : _treeRef$current.scrollTo({
        key: checkedKeys[0]
      });
    }
  }, [open]); // ========================== Search ==========================

  var lowerSearchValue = String(searchValue).toLowerCase();

  var filterTreeNode = function filterTreeNode(treeNode) {
    if (!lowerSearchValue) {
      return false;
    }

    return String(treeNode[treeNodeFilterProp]).toLowerCase().includes(lowerSearchValue);
  }; // =========================== Keys ===========================


  var _React$useState = external_window_React_["useState"](treeDefaultExpandedKeys),
      _React$useState2 = Object(slicedToArray["a" /* default */])(_React$useState, 2),
      expandedKeys = _React$useState2[0],
      setExpandedKeys = _React$useState2[1];

  var _React$useState3 = external_window_React_["useState"](null),
      _React$useState4 = Object(slicedToArray["a" /* default */])(_React$useState3, 2),
      searchExpandedKeys = _React$useState4[0],
      setSearchExpandedKeys = _React$useState4[1];

  var mergedExpandedKeys = external_window_React_["useMemo"](function () {
    if (treeExpandedKeys) {
      return Object(toConsumableArray["a" /* default */])(treeExpandedKeys);
    }

    return searchValue ? searchExpandedKeys : expandedKeys;
  }, [expandedKeys, searchExpandedKeys, treeExpandedKeys, searchValue]);
  external_window_React_["useEffect"](function () {
    if (searchValue) {
      setSearchExpandedKeys(getAllKeys(treeData, fieldNames));
    }
  }, [searchValue]);

  var onInternalExpand = function onInternalExpand(keys) {
    setExpandedKeys(keys);
    setSearchExpandedKeys(keys);

    if (onTreeExpand) {
      onTreeExpand(keys);
    }
  }; // ========================== Events ==========================


  var onListMouseDown = function onListMouseDown(event) {
    event.preventDefault();
  };

  var onInternalSelect = function onInternalSelect(__, info) {
    var node = info.node;

    if (checkable && isCheckDisabled(node)) {
      return;
    }

    onSelect(node.key, {
      selected: !checkedKeys.includes(node.key)
    });

    if (!multiple) {
      toggleOpen(false);
    }
  }; // ========================= Keyboard =========================


  var _React$useState5 = external_window_React_["useState"](null),
      _React$useState6 = Object(slicedToArray["a" /* default */])(_React$useState5, 2),
      activeKey = _React$useState6[0],
      setActiveKey = _React$useState6[1];

  var activeEntity = keyEntities[activeKey];
  external_window_React_["useImperativeHandle"](ref, function () {
    var _treeRef$current2;

    return {
      scrollTo: (_treeRef$current2 = treeRef.current) === null || _treeRef$current2 === void 0 ? void 0 : _treeRef$current2.scrollTo,
      onKeyDown: function onKeyDown(event) {
        var _treeRef$current3;

        var which = event.which;

        switch (which) {
          // >>> Arrow keys
          case KeyCode["a" /* default */].UP:
          case KeyCode["a" /* default */].DOWN:
          case KeyCode["a" /* default */].LEFT:
          case KeyCode["a" /* default */].RIGHT:
            (_treeRef$current3 = treeRef.current) === null || _treeRef$current3 === void 0 ? void 0 : _treeRef$current3.onKeyDown(event);
            break;
          // >>> Select item

          case KeyCode["a" /* default */].ENTER:
            {
              if (activeEntity) {
                var _ref = (activeEntity === null || activeEntity === void 0 ? void 0 : activeEntity.node) || {},
                    selectable = _ref.selectable,
                    value = _ref.value;

                if (selectable !== false) {
                  onInternalSelect(null, {
                    node: {
                      key: activeKey
                    },
                    selected: !checkedKeys.includes(value)
                  });
                }
              }

              break;
            }
          // >>> Close

          case KeyCode["a" /* default */].ESC:
            {
              toggleOpen(false);
            }
        }
      },
      onKeyUp: function onKeyUp() {}
    };
  }); // ========================== Render ==========================

  if (memoTreeData.length === 0) {
    return /*#__PURE__*/external_window_React_["createElement"]("div", {
      role: "listbox",
      className: "".concat(prefixCls, "-empty"),
      onMouseDown: onListMouseDown
    }, notFoundContent);
  }

  var treeProps = {
    fieldNames: fieldNames
  };

  if (treeLoadedKeys) {
    treeProps.loadedKeys = treeLoadedKeys;
  }

  if (mergedExpandedKeys) {
    treeProps.expandedKeys = mergedExpandedKeys;
  }

  return /*#__PURE__*/external_window_React_["createElement"]("div", {
    onMouseDown: onListMouseDown
  }, activeEntity && open && /*#__PURE__*/external_window_React_["createElement"]("span", {
    style: HIDDEN_STYLE,
    "aria-live": "assertive"
  }, activeEntity.node.value), /*#__PURE__*/external_window_React_["createElement"](rc_tree_es["b" /* default */], Object(esm_extends["a" /* default */])({
    ref: treeRef,
    focusable: false,
    prefixCls: "".concat(prefixCls, "-tree"),
    treeData: memoTreeData,
    height: listHeight,
    itemHeight: listItemHeight,
    virtual: virtual !== false && dropdownMatchSelectWidth !== false,
    multiple: multiple,
    icon: treeIcon,
    showIcon: showTreeIcon,
    switcherIcon: switcherIcon,
    showLine: treeLine,
    loadData: searchValue ? null : loadData,
    motion: treeMotion,
    activeKey: activeKey // We handle keys by out instead tree self
    ,
    checkable: checkable,
    checkStrictly: true,
    checkedKeys: mergedCheckedKeys,
    selectedKeys: !checkable ? checkedKeys : [],
    defaultExpandAll: treeDefaultExpandAll
  }, treeProps, {
    // Proxy event out
    onActiveChange: setActiveKey,
    onSelect: onInternalSelect,
    onCheck: onInternalSelect,
    onExpand: onInternalExpand,
    onLoad: onTreeLoad,
    filterTreeNode: filterTreeNode,
    expandAction: treeExpandAction
  })));
};

var OptionList_RefOptionList = /*#__PURE__*/external_window_React_["forwardRef"](OptionList_OptionList);
OptionList_RefOptionList.displayName = 'OptionList';
/* harmony default export */ var rc_tree_select_es_OptionList = (OptionList_RefOptionList);
// CONCATENATED MODULE: ./node_modules/rc-tree-select/es/TreeNode.js
/* istanbul ignore file */

/** This is a placeholder, not real render in dom */
var TreeNode = function TreeNode() {
  return null;
};

/* harmony default export */ var es_TreeNode = (TreeNode);
// CONCATENATED MODULE: ./node_modules/rc-tree-select/es/utils/strategyUtil.js

var SHOW_ALL = 'SHOW_ALL';
var strategyUtil_SHOW_PARENT = 'SHOW_PARENT';
var strategyUtil_SHOW_CHILD = 'SHOW_CHILD';
function strategyUtil_formatStrategyValues(values, strategy, keyEntities, fieldNames) {
  var valueSet = new Set(values);

  if (strategy === strategyUtil_SHOW_CHILD) {
    return values.filter(function (key) {
      var entity = keyEntities[key];

      if (entity && entity.children && entity.children.some(function (_ref) {
        var node = _ref.node;
        return valueSet.has(node[fieldNames.value]);
      }) && entity.children.every(function (_ref2) {
        var node = _ref2.node;
        return isCheckDisabled(node) || valueSet.has(node[fieldNames.value]);
      })) {
        return false;
      }

      return true;
    });
  }

  if (strategy === strategyUtil_SHOW_PARENT) {
    return values.filter(function (key) {
      var entity = keyEntities[key];
      var parent = entity ? entity.parent : null;

      if (parent && !isCheckDisabled(parent.node) && valueSet.has(parent.key)) {
        return false;
      }

      return true;
    });
  }

  return values;
}
// EXTERNAL MODULE: ./node_modules/rc-util/es/Children/toArray.js
var Children_toArray = __webpack_require__("Zm9Q");

// CONCATENATED MODULE: ./node_modules/rc-tree-select/es/utils/legacyUtil.js


var legacyUtil_excluded = ["children", "value"];




function convertChildrenToData(nodes) {
  return Object(Children_toArray["a" /* default */])(nodes).map(function (node) {
    if (! /*#__PURE__*/external_window_React_["isValidElement"](node) || !node.type) {
      return null;
    }

    var _ref = node,
        key = _ref.key,
        _ref$props = _ref.props,
        children = _ref$props.children,
        value = _ref$props.value,
        restProps = Object(objectWithoutProperties["a" /* default */])(_ref$props, legacyUtil_excluded);

    var data = Object(objectSpread2["a" /* default */])({
      key: key,
      value: value
    }, restProps);

    var childData = convertChildrenToData(children);

    if (childData.length) {
      data.children = childData;
    }

    return data;
  }).filter(function (data) {
    return data;
  });
}
function fillLegacyProps(dataNode) {
  if (!dataNode) {
    return dataNode;
  }

  var cloneNode = Object(objectSpread2["a" /* default */])({}, dataNode);

  if (!('props' in cloneNode)) {
    Object.defineProperty(cloneNode, 'props', {
      get: function get() {
        Object(warning["a" /* default */])(false, 'New \`rc-tree-select\` not support return node instance as argument anymore. Please consider to remove \`props\` access.');
        return cloneNode;
      }
    });
  }

  return cloneNode;
}
function fillAdditionalInfo(extra, triggerValue, checkedValues, treeData, showPosition, fieldNames) {
  var triggerNode = null;
  var nodeList = null;

  function generateMap() {
    function dig(list) {
      var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0';
      var parentIncluded = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      return list.map(function (option, index) {
        var pos = "".concat(level, "-").concat(index);
        var value = option[fieldNames.value];
        var included = checkedValues.includes(value);
        var children = dig(option[fieldNames.children] || [], pos, included);
        var node = /*#__PURE__*/external_window_React_["createElement"](es_TreeNode, option, children.map(function (child) {
          return child.node;
        })); // Link with trigger node

        if (triggerValue === value) {
          triggerNode = node;
        }

        if (included) {
          var checkedNode = {
            pos: pos,
            node: node,
            children: children
          };

          if (!parentIncluded) {
            nodeList.push(checkedNode);
          }

          return checkedNode;
        }

        return null;
      }).filter(function (node) {
        return node;
      });
    }

    if (!nodeList) {
      nodeList = [];
      dig(treeData); // Sort to keep the checked node length

      nodeList.sort(function (_ref2, _ref3) {
        var val1 = _ref2.node.props.value;
        var val2 = _ref3.node.props.value;
        var index1 = checkedValues.indexOf(val1);
        var index2 = checkedValues.indexOf(val2);
        return index1 - index2;
      });
    }
  }

  Object.defineProperty(extra, 'triggerNode', {
    get: function get() {
      Object(warning["a" /* default */])(false, '\`triggerNode\` is deprecated. Please consider decoupling data with node.');
      generateMap();
      return triggerNode;
    }
  });
  Object.defineProperty(extra, 'allCheckedNodes', {
    get: function get() {
      Object(warning["a" /* default */])(false, '\`allCheckedNodes\` is deprecated. Please consider decoupling data with node.');
      generateMap();

      if (showPosition) {
        return nodeList;
      }

      return nodeList.map(function (_ref4) {
        var node = _ref4.node;
        return node;
      });
    }
  });
}
// CONCATENATED MODULE: ./node_modules/rc-tree-select/es/hooks/useTreeData.js




function parseSimpleTreeData(treeData, _ref) {
  var id = _ref.id,
      pId = _ref.pId,
      rootPId = _ref.rootPId;
  var keyNodes = {};
  var rootNodeList = []; // Fill in the map

  var nodeList = treeData.map(function (node) {
    var clone = Object(objectSpread2["a" /* default */])({}, node);

    var key = clone[id];
    keyNodes[key] = clone;
    clone.key = clone.key || key;
    return clone;
  }); // Connect tree

  nodeList.forEach(function (node) {
    var parentKey = node[pId];
    var parent = keyNodes[parentKey]; // Fill parent

    if (parent) {
      parent.children = parent.children || [];
      parent.children.push(node);
    } // Fill root tree node


    if (parentKey === rootPId || !parent && rootPId === null) {
      rootNodeList.push(node);
    }
  });
  return rootNodeList;
}
/**
 * Convert \`treeData\` or \`children\` into formatted \`treeData\`.
 * Will not re-calculate if \`treeData\` or \`children\` not change.
 */


function useTreeData(treeData, children, simpleMode) {
  return external_window_React_["useMemo"](function () {
    if (treeData) {
      return simpleMode ? parseSimpleTreeData(treeData, Object(objectSpread2["a" /* default */])({
        id: 'id',
        pId: 'pId',
        rootPId: null
      }, simpleMode !== true ? simpleMode : {})) : treeData;
    }

    return convertChildrenToData(children);
  }, [children, simpleMode, treeData]);
}
// CONCATENATED MODULE: ./node_modules/rc-tree-select/es/hooks/useCache.js



/**
 * This function will try to call requestIdleCallback if available to save performance.
 * No need \`getLabel\` here since already fetch on \`rawLabeledValue\`.
 */
/* harmony default export */ var useCache = (function (values) {
  var cacheRef = external_window_React_["useRef"]({
    valueLabels: new Map()
  });
  return external_window_React_["useMemo"](function () {
    var valueLabels = cacheRef.current.valueLabels;
    var valueLabelsCache = new Map();
    var filledValues = values.map(function (item) {
      var _item$label;

      var value = item.value;
      var mergedLabel = (_item$label = item.label) !== null && _item$label !== void 0 ? _item$label : valueLabels.get(value); // Save in cache

      valueLabelsCache.set(value, mergedLabel);
      return Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, item), {}, {
        label: mergedLabel
      });
    });
    cacheRef.current.valueLabels = valueLabelsCache;
    return [filledValues];
  }, [values]);
});
// CONCATENATED MODULE: ./node_modules/rc-tree-select/es/hooks/useRefFunc.js

/**
 * Same as \`React.useCallback\` but always return a memoized function
 * but redirect to real function.
 */

function useRefFunc_useRefFunc(callback) {
  var funcRef = external_window_React_["useRef"]();
  funcRef.current = callback;
  var cacheFn = external_window_React_["useCallback"](function () {
    return funcRef.current.apply(funcRef, arguments);
  }, []);
  return cacheFn;
}
// CONCATENATED MODULE: ./node_modules/rc-tree-select/es/hooks/useDataEntities.js





/* harmony default export */ var useDataEntities = (function (treeData, fieldNames) {
  return external_window_React_["useMemo"](function () {
    var collection = Object(treeUtil["a" /* convertDataToEntities */])(treeData, {
      fieldNames: fieldNames,
      initWrapper: function initWrapper(wrapper) {
        return Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, wrapper), {}, {
          valueEntities: new Map()
        });
      },
      processEntity: function processEntity(entity, wrapper) {
        var val = entity.node[fieldNames.value]; // Check if exist same value

        if (false) { var key; }

        wrapper.valueEntities.set(val, entity);
      }
    });
    return collection;
  }, [treeData, fieldNames]);
});
// CONCATENATED MODULE: ./node_modules/rc-tree-select/es/hooks/useCheckedKeys.js



/* harmony default export */ var useCheckedKeys = (function (rawLabeledValues, rawHalfCheckedValues, treeConduction, keyEntities) {
  return external_window_React_["useMemo"](function () {
    var checkedKeys = rawLabeledValues.map(function (_ref) {
      var value = _ref.value;
      return value;
    });
    var halfCheckedKeys = rawHalfCheckedValues.map(function (_ref2) {
      var value = _ref2.value;
      return value;
    });
    var missingValues = checkedKeys.filter(function (key) {
      return !keyEntities[key];
    });

    if (treeConduction) {
      var _conductCheck = Object(conductUtil["a" /* conductCheck */])(checkedKeys, true, keyEntities);

      checkedKeys = _conductCheck.checkedKeys;
      halfCheckedKeys = _conductCheck.halfCheckedKeys;
    }

    return [// Checked keys should fill with missing keys which should de-duplicated
    Array.from(new Set([].concat(Object(toConsumableArray["a" /* default */])(missingValues), Object(toConsumableArray["a" /* default */])(checkedKeys)))), // Half checked keys
    halfCheckedKeys];
  }, [rawLabeledValues, rawHalfCheckedValues, treeConduction, keyEntities]);
});
// CONCATENATED MODULE: ./node_modules/rc-tree-select/es/hooks/useFilterTreeData.js




/* harmony default export */ var useFilterTreeData = (function (treeData, searchValue, _ref) {
  var treeNodeFilterProp = _ref.treeNodeFilterProp,
      filterTreeNode = _ref.filterTreeNode,
      fieldNames = _ref.fieldNames;
  var fieldChildren = fieldNames.children;
  return external_window_React_["useMemo"](function () {
    if (!searchValue || filterTreeNode === false) {
      return treeData;
    }

    var filterOptionFunc;

    if (typeof filterTreeNode === 'function') {
      filterOptionFunc = filterTreeNode;
    } else {
      var upperStr = searchValue.toUpperCase();

      filterOptionFunc = function filterOptionFunc(_, dataNode) {
        var value = dataNode[treeNodeFilterProp];
        return String(value).toUpperCase().includes(upperStr);
      };
    }

    function dig(list) {
      var keepAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return list.map(function (dataNode) {
        var children = dataNode[fieldChildren];
        var match = keepAll || filterOptionFunc(searchValue, fillLegacyProps(dataNode));
        var childList = dig(children || [], match);

        if (match || childList.length) {
          return Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, dataNode), {}, Object(defineProperty["a" /* default */])({
            isLeaf: undefined
          }, fieldChildren, childList));
        }

        return null;
      }).filter(function (node) {
        return node;
      });
    }

    return dig(treeData);
  }, [treeData, searchValue, fieldChildren, treeNodeFilterProp, filterTreeNode]);
});
// CONCATENATED MODULE: ./node_modules/rc-tree-select/es/utils/warningPropsUtil.js




function warningPropsUtil_warningProps(props) {
  var searchPlaceholder = props.searchPlaceholder,
      treeCheckStrictly = props.treeCheckStrictly,
      treeCheckable = props.treeCheckable,
      labelInValue = props.labelInValue,
      value = props.value,
      multiple = props.multiple;
  Object(warning["a" /* default */])(!searchPlaceholder, '\`searchPlaceholder\` has been removed.');

  if (treeCheckStrictly && labelInValue === false) {
    Object(warning["a" /* default */])(false, '\`treeCheckStrictly\` will force set \`labelInValue\` to \`true\`.');
  }

  if (labelInValue || treeCheckStrictly) {
    Object(warning["a" /* default */])(toArray(value).every(function (val) {
      return val && Object(esm_typeof["a" /* default */])(val) === 'object' && 'value' in val;
    }), 'Invalid prop \`value\` supplied to \`TreeSelect\`. You should use { label: string, value: string | number } or [{ label: string, value: string | number }] instead.');
  }

  if (treeCheckStrictly || multiple || treeCheckable) {
    Object(warning["a" /* default */])(!value || Array.isArray(value), '\`value\` should be an array when \`TreeSelect\` is checkable or multiple.');
  } else {
    Object(warning["a" /* default */])(!Array.isArray(value), '\`value\` should not be array when \`TreeSelect\` is single mode.');
  }
}

/* harmony default export */ var utils_warningPropsUtil = (warningPropsUtil_warningProps);
// CONCATENATED MODULE: ./node_modules/rc-tree-select/es/TreeSelect.js






var TreeSelect_excluded = ["id", "prefixCls", "value", "defaultValue", "onChange", "onSelect", "onDeselect", "searchValue", "inputValue", "onSearch", "autoClearSearchValue", "filterTreeNode", "treeNodeFilterProp", "showCheckedStrategy", "treeNodeLabelProp", "multiple", "treeCheckable", "treeCheckStrictly", "labelInValue", "fieldNames", "treeDataSimpleMode", "treeData", "children", "loadData", "treeLoadedKeys", "onTreeLoad", "treeDefaultExpandAll", "treeExpandedKeys", "treeDefaultExpandedKeys", "onTreeExpand", "treeExpandAction", "virtual", "listHeight", "listItemHeight", "onDropdownVisibleChange", "dropdownMatchSelectWidth", "treeLine", "treeIcon", "showTreeIcon", "switcherIcon", "treeMotion"];





















function isRawValue(value) {
  return !value || Object(esm_typeof["a" /* default */])(value) !== 'object';
}

var TreeSelect = /*#__PURE__*/external_window_React_["forwardRef"](function (props, ref) {
  var id = props.id,
      _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'rc-tree-select' : _props$prefixCls,
      value = props.value,
      defaultValue = props.defaultValue,
      onChange = props.onChange,
      onSelect = props.onSelect,
      onDeselect = props.onDeselect,
      searchValue = props.searchValue,
      inputValue = props.inputValue,
      onSearch = props.onSearch,
      _props$autoClearSearc = props.autoClearSearchValue,
      autoClearSearchValue = _props$autoClearSearc === void 0 ? true : _props$autoClearSearc,
      filterTreeNode = props.filterTreeNode,
      _props$treeNodeFilter = props.treeNodeFilterProp,
      treeNodeFilterProp = _props$treeNodeFilter === void 0 ? 'value' : _props$treeNodeFilter,
      _props$showCheckedStr = props.showCheckedStrategy,
      showCheckedStrategy = _props$showCheckedStr === void 0 ? strategyUtil_SHOW_CHILD : _props$showCheckedStr,
      treeNodeLabelProp = props.treeNodeLabelProp,
      multiple = props.multiple,
      treeCheckable = props.treeCheckable,
      treeCheckStrictly = props.treeCheckStrictly,
      labelInValue = props.labelInValue,
      fieldNames = props.fieldNames,
      treeDataSimpleMode = props.treeDataSimpleMode,
      treeData = props.treeData,
      children = props.children,
      loadData = props.loadData,
      treeLoadedKeys = props.treeLoadedKeys,
      onTreeLoad = props.onTreeLoad,
      treeDefaultExpandAll = props.treeDefaultExpandAll,
      treeExpandedKeys = props.treeExpandedKeys,
      treeDefaultExpandedKeys = props.treeDefaultExpandedKeys,
      onTreeExpand = props.onTreeExpand,
      treeExpandAction = props.treeExpandAction,
      virtual = props.virtual,
      _props$listHeight = props.listHeight,
      listHeight = _props$listHeight === void 0 ? 200 : _props$listHeight,
      _props$listItemHeight = props.listItemHeight,
      listItemHeight = _props$listItemHeight === void 0 ? 20 : _props$listItemHeight,
      onDropdownVisibleChange = props.onDropdownVisibleChange,
      _props$dropdownMatchS = props.dropdownMatchSelectWidth,
      dropdownMatchSelectWidth = _props$dropdownMatchS === void 0 ? true : _props$dropdownMatchS,
      treeLine = props.treeLine,
      treeIcon = props.treeIcon,
      showTreeIcon = props.showTreeIcon,
      switcherIcon = props.switcherIcon,
      treeMotion = props.treeMotion,
      restProps = Object(objectWithoutProperties["a" /* default */])(props, TreeSelect_excluded);

  var mergedId = useId_default()(id);
  var treeConduction = treeCheckable && !treeCheckStrictly;
  var mergedCheckable = treeCheckable || treeCheckStrictly;
  var mergedLabelInValue = treeCheckStrictly || labelInValue;
  var mergedMultiple = mergedCheckable || multiple;

  var _useMergedState = Object(useMergedState["a" /* default */])(defaultValue, {
    value: value
  }),
      _useMergedState2 = Object(slicedToArray["a" /* default */])(_useMergedState, 2),
      internalValue = _useMergedState2[0],
      setInternalValue = _useMergedState2[1]; // ========================== Warning ===========================


  if (false) {} // ========================= FieldNames =========================


  var mergedFieldNames = external_window_React_["useMemo"](function () {
    return valueUtil_fillFieldNames(fieldNames);
  },
  /* eslint-disable react-hooks/exhaustive-deps */
  [JSON.stringify(fieldNames)]
  /* eslint-enable react-hooks/exhaustive-deps */
  ); // =========================== Search ===========================

  var _useMergedState3 = Object(useMergedState["a" /* default */])('', {
    value: searchValue !== undefined ? searchValue : inputValue,
    postState: function postState(search) {
      return search || '';
    }
  }),
      _useMergedState4 = Object(slicedToArray["a" /* default */])(_useMergedState3, 2),
      mergedSearchValue = _useMergedState4[0],
      setSearchValue = _useMergedState4[1];

  var onInternalSearch = function onInternalSearch(searchText) {
    setSearchValue(searchText);
    onSearch === null || onSearch === void 0 ? void 0 : onSearch(searchText);
  }; // ============================ Data ============================
  // \`useTreeData\` only do convert of \`children\` or \`simpleMode\`.
  // Else will return origin \`treeData\` for perf consideration.
  // Do not do anything to loop the data.


  var mergedTreeData = useTreeData(treeData, children, treeDataSimpleMode);

  var _useDataEntities = useDataEntities(mergedTreeData, mergedFieldNames),
      keyEntities = _useDataEntities.keyEntities,
      valueEntities = _useDataEntities.valueEntities;
  /** Get \`missingRawValues\` which not exist in the tree yet */


  var splitRawValues = external_window_React_["useCallback"](function (newRawValues) {
    var missingRawValues = [];
    var existRawValues = []; // Keep missing value in the cache

    newRawValues.forEach(function (val) {
      if (valueEntities.has(val)) {
        existRawValues.push(val);
      } else {
        missingRawValues.push(val);
      }
    });
    return {
      missingRawValues: missingRawValues,
      existRawValues: existRawValues
    };
  }, [valueEntities]); // Filtered Tree

  var filteredTreeData = useFilterTreeData(mergedTreeData, mergedSearchValue, {
    fieldNames: mergedFieldNames,
    treeNodeFilterProp: treeNodeFilterProp,
    filterTreeNode: filterTreeNode
  }); // =========================== Label ============================

  var getLabel = external_window_React_["useCallback"](function (item) {
    if (item) {
      if (treeNodeLabelProp) {
        return item[treeNodeLabelProp];
      } // Loop from fieldNames


      var titleList = mergedFieldNames._title;

      for (var i = 0; i < titleList.length; i += 1) {
        var title = item[titleList[i]];

        if (title !== undefined) {
          return title;
        }
      }
    }
  }, [mergedFieldNames, treeNodeLabelProp]); // ========================= Wrap Value =========================

  var toLabeledValues = external_window_React_["useCallback"](function (draftValues) {
    var values = toArray(draftValues);
    return values.map(function (val) {
      if (isRawValue(val)) {
        return {
          value: val
        };
      }

      return val;
    });
  }, []);
  var convert2LabelValues = external_window_React_["useCallback"](function (draftValues) {
    var values = toLabeledValues(draftValues);
    return values.map(function (item) {
      var rawLabel = item.label;
      var rawValue = item.value,
          rawHalfChecked = item.halfChecked;
      var rawDisabled;
      var entity = valueEntities.get(rawValue); // Fill missing label & status

      if (entity) {
        var _rawLabel;

        rawLabel = (_rawLabel = rawLabel) !== null && _rawLabel !== void 0 ? _rawLabel : getLabel(entity.node);
        rawDisabled = entity.node.disabled;
      } else if (rawLabel === undefined) {
        // We try to find in current \`labelInValue\` value
        var labelInValueItem = toLabeledValues(internalValue).find(function (labeledItem) {
          return labeledItem.value === rawValue;
        });
        rawLabel = labelInValueItem.label;
      }

      return {
        label: rawLabel,
        value: rawValue,
        halfChecked: rawHalfChecked,
        disabled: rawDisabled
      };
    });
  }, [valueEntities, getLabel, toLabeledValues, internalValue]); // =========================== Values ===========================

  var rawMixedLabeledValues = external_window_React_["useMemo"](function () {
    return toLabeledValues(internalValue);
  }, [toLabeledValues, internalValue]); // Split value into full check and half check

  var _React$useMemo = external_window_React_["useMemo"](function () {
    var fullCheckValues = [];
    var halfCheckValues = [];
    rawMixedLabeledValues.forEach(function (item) {
      if (item.halfChecked) {
        halfCheckValues.push(item);
      } else {
        fullCheckValues.push(item);
      }
    });
    return [fullCheckValues, halfCheckValues];
  }, [rawMixedLabeledValues]),
      _React$useMemo2 = Object(slicedToArray["a" /* default */])(_React$useMemo, 2),
      rawLabeledValues = _React$useMemo2[0],
      rawHalfLabeledValues = _React$useMemo2[1]; // const [mergedValues] = useCache(rawLabeledValues);


  var rawValues = external_window_React_["useMemo"](function () {
    return rawLabeledValues.map(function (item) {
      return item.value;
    });
  }, [rawLabeledValues]); // Convert value to key. Will fill missed keys for conduct check.

  var _useCheckedKeys = useCheckedKeys(rawLabeledValues, rawHalfLabeledValues, treeConduction, keyEntities),
      _useCheckedKeys2 = Object(slicedToArray["a" /* default */])(_useCheckedKeys, 2),
      rawCheckedValues = _useCheckedKeys2[0],
      rawHalfCheckedValues = _useCheckedKeys2[1]; // Convert rawCheckedKeys to check strategy related values


  var displayValues = external_window_React_["useMemo"](function () {
    // Collect keys which need to show
    var displayKeys = strategyUtil_formatStrategyValues(rawCheckedValues, showCheckedStrategy, keyEntities, mergedFieldNames); // Convert to value and filled with label

    var values = displayKeys.map(function (key) {
      var _keyEntities$key$node, _keyEntities$key, _keyEntities$key$node2;

      return (_keyEntities$key$node = (_keyEntities$key = keyEntities[key]) === null || _keyEntities$key === void 0 ? void 0 : (_keyEntities$key$node2 = _keyEntities$key.node) === null || _keyEntities$key$node2 === void 0 ? void 0 : _keyEntities$key$node2[mergedFieldNames.value]) !== null && _keyEntities$key$node !== void 0 ? _keyEntities$key$node : key;
    }); // Back fill with origin label

    var labeledValues = values.map(function (val) {
      var targetItem = rawLabeledValues.find(function (item) {
        return item.value === val;
      });
      return {
        value: val,
        label: targetItem === null || targetItem === void 0 ? void 0 : targetItem.label
      };
    });
    var rawDisplayValues = convert2LabelValues(labeledValues);
    var firstVal = rawDisplayValues[0];

    if (!mergedMultiple && firstVal && isNil(firstVal.value) && isNil(firstVal.label)) {
      return [];
    }

    return rawDisplayValues.map(function (item) {
      var _item$label;

      return Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, item), {}, {
        label: (_item$label = item.label) !== null && _item$label !== void 0 ? _item$label : item.value
      });
    });
  }, [mergedFieldNames, mergedMultiple, rawCheckedValues, rawLabeledValues, convert2LabelValues, showCheckedStrategy, keyEntities]);

  var _useCache = useCache(displayValues),
      _useCache2 = Object(slicedToArray["a" /* default */])(_useCache, 1),
      cachedDisplayValues = _useCache2[0]; // =========================== Change ===========================


  var triggerChange = useRefFunc_useRefFunc(function (newRawValues, extra, source) {
    var labeledValues = convert2LabelValues(newRawValues);
    setInternalValue(labeledValues); // Clean up if needed

    if (autoClearSearchValue) {
      setSearchValue('');
    } // Generate rest parameters is costly, so only do it when necessary


    if (onChange) {
      var eventValues = newRawValues;

      if (treeConduction) {
        var formattedKeyList = strategyUtil_formatStrategyValues(newRawValues, showCheckedStrategy, keyEntities, mergedFieldNames);
        eventValues = formattedKeyList.map(function (key) {
          var entity = valueEntities.get(key);
          return entity ? entity.node[mergedFieldNames.value] : key;
        });
      }

      var _ref = extra || {
        triggerValue: undefined,
        selected: undefined
      },
          triggerValue = _ref.triggerValue,
          selected = _ref.selected;

      var returnRawValues = eventValues; // We need fill half check back

      if (treeCheckStrictly) {
        var halfValues = rawHalfLabeledValues.filter(function (item) {
          return !eventValues.includes(item.value);
        });
        returnRawValues = [].concat(Object(toConsumableArray["a" /* default */])(returnRawValues), Object(toConsumableArray["a" /* default */])(halfValues));
      }

      var returnLabeledValues = convert2LabelValues(returnRawValues);
      var additionalInfo = {
        // [Legacy] Always return as array contains label & value
        preValue: rawLabeledValues,
        triggerValue: triggerValue
      }; // [Legacy] Fill legacy data if user query.
      // This is expansive that we only fill when user query
      // https://github.com/react-component/tree-select/blob/fe33eb7c27830c9ac70cd1fdb1ebbe7bc679c16a/src/Select.jsx

      var showPosition = true;

      if (treeCheckStrictly || source === 'selection' && !selected) {
        showPosition = false;
      }

      fillAdditionalInfo(additionalInfo, triggerValue, newRawValues, mergedTreeData, showPosition, mergedFieldNames);

      if (mergedCheckable) {
        additionalInfo.checked = selected;
      } else {
        additionalInfo.selected = selected;
      }

      var returnValues = mergedLabelInValue ? returnLabeledValues : returnLabeledValues.map(function (item) {
        return item.value;
      });
      onChange(mergedMultiple ? returnValues : returnValues[0], mergedLabelInValue ? null : returnLabeledValues.map(function (item) {
        return item.label;
      }), additionalInfo);
    }
  }); // ========================== Options ===========================

  /** Trigger by option list */

  var onOptionSelect = external_window_React_["useCallback"](function (selectedKey, _ref2) {
    var _node$mergedFieldName;

    var selected = _ref2.selected,
        source = _ref2.source;
    var entity = keyEntities[selectedKey];
    var node = entity === null || entity === void 0 ? void 0 : entity.node;
    var selectedValue = (_node$mergedFieldName = node === null || node === void 0 ? void 0 : node[mergedFieldNames.value]) !== null && _node$mergedFieldName !== void 0 ? _node$mergedFieldName : selectedKey; // Never be falsy but keep it safe

    if (!mergedMultiple) {
      // Single mode always set value
      triggerChange([selectedValue], {
        selected: true,
        triggerValue: selectedValue
      }, 'option');
    } else {
      var newRawValues = selected ? [].concat(Object(toConsumableArray["a" /* default */])(rawValues), [selectedValue]) : rawCheckedValues.filter(function (v) {
        return v !== selectedValue;
      }); // Add keys if tree conduction

      if (treeConduction) {
        // Should keep missing values
        var _splitRawValues = splitRawValues(newRawValues),
            missingRawValues = _splitRawValues.missingRawValues,
            existRawValues = _splitRawValues.existRawValues;

        var keyList = existRawValues.map(function (val) {
          return valueEntities.get(val).key;
        }); // Conduction by selected or not

        var checkedKeys;

        if (selected) {
          var _conductCheck = Object(conductUtil["a" /* conductCheck */])(keyList, true, keyEntities);

          checkedKeys = _conductCheck.checkedKeys;
        } else {
          var _conductCheck2 = Object(conductUtil["a" /* conductCheck */])(keyList, {
            checked: false,
            halfCheckedKeys: rawHalfCheckedValues
          }, keyEntities);

          checkedKeys = _conductCheck2.checkedKeys;
        } // Fill back of keys


        newRawValues = [].concat(Object(toConsumableArray["a" /* default */])(missingRawValues), Object(toConsumableArray["a" /* default */])(checkedKeys.map(function (key) {
          return keyEntities[key].node[mergedFieldNames.value];
        })));
      }

      triggerChange(newRawValues, {
        selected: selected,
        triggerValue: selectedValue
      }, source || 'option');
    } // Trigger select event


    if (selected || !mergedMultiple) {
      onSelect === null || onSelect === void 0 ? void 0 : onSelect(selectedValue, fillLegacyProps(node));
    } else {
      onDeselect === null || onDeselect === void 0 ? void 0 : onDeselect(selectedValue, fillLegacyProps(node));
    }
  }, [splitRawValues, valueEntities, keyEntities, mergedFieldNames, mergedMultiple, rawValues, triggerChange, treeConduction, onSelect, onDeselect, rawCheckedValues, rawHalfCheckedValues]); // ========================== Dropdown ==========================

  var onInternalDropdownVisibleChange = external_window_React_["useCallback"](function (open) {
    if (onDropdownVisibleChange) {
      var legacyParam = {};
      Object.defineProperty(legacyParam, 'documentClickClose', {
        get: function get() {
          Object(warning["a" /* default */])(false, 'Second param of \`onDropdownVisibleChange\` has been removed.');
          return false;
        }
      });
      onDropdownVisibleChange(open, legacyParam);
    }
  }, [onDropdownVisibleChange]); // ====================== Display Change ========================

  var onDisplayValuesChange = useRefFunc_useRefFunc(function (newValues, info) {
    var newRawValues = newValues.map(function (item) {
      return item.value;
    });

    if (info.type === 'clear') {
      triggerChange(newRawValues, {}, 'selection');
      return;
    } // TreeSelect only have multiple mode which means display change only has remove


    if (info.values.length) {
      onOptionSelect(info.values[0].value, {
        selected: false,
        source: 'selection'
      });
    }
  }); // ========================== Context ===========================

  var treeSelectContext = external_window_React_["useMemo"](function () {
    return {
      virtual: virtual,
      dropdownMatchSelectWidth: dropdownMatchSelectWidth,
      listHeight: listHeight,
      listItemHeight: listItemHeight,
      treeData: filteredTreeData,
      fieldNames: mergedFieldNames,
      onSelect: onOptionSelect,
      treeExpandAction: treeExpandAction
    };
  }, [virtual, dropdownMatchSelectWidth, listHeight, listItemHeight, filteredTreeData, mergedFieldNames, onOptionSelect, treeExpandAction]); // ======================= Legacy Context =======================

  var legacyContext = external_window_React_["useMemo"](function () {
    return {
      checkable: mergedCheckable,
      loadData: loadData,
      treeLoadedKeys: treeLoadedKeys,
      onTreeLoad: onTreeLoad,
      checkedKeys: rawCheckedValues,
      halfCheckedKeys: rawHalfCheckedValues,
      treeDefaultExpandAll: treeDefaultExpandAll,
      treeExpandedKeys: treeExpandedKeys,
      treeDefaultExpandedKeys: treeDefaultExpandedKeys,
      onTreeExpand: onTreeExpand,
      treeIcon: treeIcon,
      treeMotion: treeMotion,
      showTreeIcon: showTreeIcon,
      switcherIcon: switcherIcon,
      treeLine: treeLine,
      treeNodeFilterProp: treeNodeFilterProp,
      keyEntities: keyEntities
    };
  }, [mergedCheckable, loadData, treeLoadedKeys, onTreeLoad, rawCheckedValues, rawHalfCheckedValues, treeDefaultExpandAll, treeExpandedKeys, treeDefaultExpandedKeys, onTreeExpand, treeIcon, treeMotion, showTreeIcon, switcherIcon, treeLine, treeNodeFilterProp, keyEntities]); // =========================== Render ===========================

  return /*#__PURE__*/external_window_React_["createElement"](es_TreeSelectContext.Provider, {
    value: treeSelectContext
  }, /*#__PURE__*/external_window_React_["createElement"](LegacyContext.Provider, {
    value: legacyContext
  }, /*#__PURE__*/external_window_React_["createElement"](es["a" /* BaseSelect */], Object(esm_extends["a" /* default */])({
    ref: ref
  }, restProps, {
    // >>> MISC
    id: mergedId,
    prefixCls: prefixCls,
    mode: mergedMultiple ? 'multiple' : undefined // >>> Display Value
    ,
    displayValues: cachedDisplayValues,
    onDisplayValuesChange: onDisplayValuesChange // >>> Search
    ,
    searchValue: mergedSearchValue,
    onSearch: onInternalSearch // >>> Options
    ,
    OptionList: rc_tree_select_es_OptionList,
    emptyOptions: !mergedTreeData.length,
    onDropdownVisibleChange: onInternalDropdownVisibleChange,
    dropdownMatchSelectWidth: dropdownMatchSelectWidth
  }))));
}); // Assign name for Debug

if (false) {}

var GenericTreeSelect = TreeSelect;
GenericTreeSelect.TreeNode = es_TreeNode;
GenericTreeSelect.SHOW_ALL = SHOW_ALL;
GenericTreeSelect.SHOW_PARENT = strategyUtil_SHOW_PARENT;
GenericTreeSelect.SHOW_CHILD = strategyUtil_SHOW_CHILD;
/* harmony default export */ var es_TreeSelect = (GenericTreeSelect);
// CONCATENATED MODULE: ./node_modules/rc-tree-select/es/index.js




/* harmony default export */ var rc_tree_select_es = (es_TreeSelect);
// EXTERNAL MODULE: ./node_modules/antd/es/tree/utils/iconUtil.js + 6 modules
var utils_iconUtil = __webpack_require__("2jpz");

// CONCATENATED MODULE: ./node_modules/antd/es/tree-select/index.js


var tree_select_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};















var tree_select_InternalTreeSelect = function InternalTreeSelect(_a, ref) {
  var _classNames2;
  var customizePrefixCls = _a.prefixCls,
    customizeSize = _a.size,
    customDisabled = _a.disabled,
    _a$bordered = _a.bordered,
    bordered = _a$bordered === void 0 ? true : _a$bordered,
    className = _a.className,
    treeCheckable = _a.treeCheckable,
    multiple = _a.multiple,
    _a$listHeight = _a.listHeight,
    listHeight = _a$listHeight === void 0 ? 256 : _a$listHeight,
    _a$listItemHeight = _a.listItemHeight,
    listItemHeight = _a$listItemHeight === void 0 ? 26 : _a$listItemHeight,
    placement = _a.placement,
    notFoundContent = _a.notFoundContent,
    _switcherIcon = _a.switcherIcon,
    treeLine = _a.treeLine,
    getPopupContainer = _a.getPopupContainer,
    dropdownClassName = _a.dropdownClassName,
    popupClassName = _a.popupClassName,
    _a$treeIcon = _a.treeIcon,
    treeIcon = _a$treeIcon === void 0 ? false : _a$treeIcon,
    transitionName = _a.transitionName,
    _a$choiceTransitionNa = _a.choiceTransitionName,
    choiceTransitionName = _a$choiceTransitionNa === void 0 ? '' : _a$choiceTransitionNa,
    customStatus = _a.status,
    showArrow = _a.showArrow,
    treeExpandAction = _a.treeExpandAction,
    props = tree_select_rest(_a, ["prefixCls", "size", "disabled", "bordered", "className", "treeCheckable", "multiple", "listHeight", "listItemHeight", "placement", "notFoundContent", "switcherIcon", "treeLine", "getPopupContainer", "dropdownClassName", "popupClassName", "treeIcon", "transitionName", "choiceTransitionName", "status", "showArrow", "treeExpandAction"]);
  var _React$useContext = external_window_React_["useContext"](config_provider_context["b" /* ConfigContext */]),
    getContextPopupContainer = _React$useContext.getPopupContainer,
    getPrefixCls = _React$useContext.getPrefixCls,
    renderEmpty = _React$useContext.renderEmpty,
    direction = _React$useContext.direction,
    virtual = _React$useContext.virtual,
    dropdownMatchSelectWidth = _React$useContext.dropdownMatchSelectWidth;
  var size = external_window_React_["useContext"](SizeContext["b" /* default */]);
   false ? undefined : void 0;
   false ? undefined : void 0;
  var prefixCls = getPrefixCls('select', customizePrefixCls);
  var treePrefixCls = getPrefixCls('select-tree', customizePrefixCls);
  var treeSelectPrefixCls = getPrefixCls('tree-select', customizePrefixCls);
  var mergedDropdownClassName = classnames_default()(popupClassName || dropdownClassName, "".concat(treeSelectPrefixCls, "-dropdown"), Object(defineProperty["a" /* default */])({}, "".concat(treeSelectPrefixCls, "-dropdown-rtl"), direction === 'rtl'));
  var isMultiple = !!(treeCheckable || multiple);
  var mergedShowArrow = showArrow !== undefined ? showArrow : props.loading || !isMultiple;
  // ===================== Form =====================
  var _useContext = Object(external_window_React_["useContext"])(form_context["b" /* FormItemInputContext */]),
    contextStatus = _useContext.status,
    hasFeedback = _useContext.hasFeedback,
    isFormItemInput = _useContext.isFormItemInput,
    feedbackIcon = _useContext.feedbackIcon;
  var mergedStatus = Object(statusUtils["a" /* getMergedStatus */])(contextStatus, customStatus);
  // ===================== Icons =====================
  var _getIcons = Object(iconUtil["a" /* default */])(Object(esm_extends["a" /* default */])(Object(esm_extends["a" /* default */])({}, props), {
      multiple: isMultiple,
      showArrow: mergedShowArrow,
      hasFeedback: hasFeedback,
      feedbackIcon: feedbackIcon,
      prefixCls: prefixCls
    })),
    suffixIcon = _getIcons.suffixIcon,
    removeIcon = _getIcons.removeIcon,
    clearIcon = _getIcons.clearIcon;
  // ===================== Empty =====================
  var mergedNotFound;
  if (notFoundContent !== undefined) {
    mergedNotFound = notFoundContent;
  } else {
    mergedNotFound = (renderEmpty || defaultRenderEmpty["a" /* default */])('Select');
  }
  // ==================== Render =====================
  var selectProps = Object(omit["a" /* default */])(props, ['suffixIcon', 'itemIcon', 'removeIcon', 'clearIcon', 'switcherIcon']);
  // ===================== Placement =====================
  var getPlacement = function getPlacement() {
    if (placement !== undefined) {
      return placement;
    }
    return direction === 'rtl' ? 'bottomRight' : 'bottomLeft';
  };
  var mergedSize = customizeSize || size;
  // ===================== Disabled =====================
  var disabled = external_window_React_["useContext"](DisabledContext["b" /* default */]);
  var mergedDisabled = customDisabled || disabled;
  var mergedClassName = classnames_default()(!customizePrefixCls && treeSelectPrefixCls, (_classNames2 = {}, Object(defineProperty["a" /* default */])(_classNames2, "".concat(prefixCls, "-lg"), mergedSize === 'large'), Object(defineProperty["a" /* default */])(_classNames2, "".concat(prefixCls, "-sm"), mergedSize === 'small'), Object(defineProperty["a" /* default */])(_classNames2, "".concat(prefixCls, "-rtl"), direction === 'rtl'), Object(defineProperty["a" /* default */])(_classNames2, "".concat(prefixCls, "-borderless"), !bordered), Object(defineProperty["a" /* default */])(_classNames2, "".concat(prefixCls, "-in-form-item"), isFormItemInput), _classNames2), Object(statusUtils["b" /* getStatusClassNames */])(prefixCls, mergedStatus, hasFeedback), className);
  var rootPrefixCls = getPrefixCls();
  return /*#__PURE__*/external_window_React_["createElement"](rc_tree_select_es, Object(esm_extends["a" /* default */])({
    virtual: virtual,
    dropdownMatchSelectWidth: dropdownMatchSelectWidth,
    disabled: mergedDisabled
  }, selectProps, {
    ref: ref,
    prefixCls: prefixCls,
    className: mergedClassName,
    listHeight: listHeight,
    listItemHeight: listItemHeight,
    treeCheckable: treeCheckable ? /*#__PURE__*/external_window_React_["createElement"]("span", {
      className: "".concat(prefixCls, "-tree-checkbox-inner")
    }) : treeCheckable,
    treeLine: !!treeLine,
    inputIcon: suffixIcon,
    multiple: multiple,
    placement: getPlacement(),
    removeIcon: removeIcon,
    clearIcon: clearIcon,
    switcherIcon: function switcherIcon(nodeProps) {
      return Object(utils_iconUtil["a" /* default */])(treePrefixCls, _switcherIcon, treeLine, nodeProps);
    },
    showTreeIcon: treeIcon,
    notFoundContent: mergedNotFound,
    getPopupContainer: getPopupContainer || getContextPopupContainer,
    treeMotion: null,
    dropdownClassName: mergedDropdownClassName,
    choiceTransitionName: Object(motion["c" /* getTransitionName */])(rootPrefixCls, '', choiceTransitionName),
    transitionName: Object(motion["c" /* getTransitionName */])(rootPrefixCls, Object(motion["b" /* getTransitionDirection */])(placement), transitionName),
    showArrow: hasFeedback || showArrow,
    treeExpandAction: treeExpandAction
  }));
};
var TreeSelectRef = /*#__PURE__*/external_window_React_["forwardRef"](tree_select_InternalTreeSelect);
var tree_select_TreeSelect = TreeSelectRef;
tree_select_TreeSelect.TreeNode = es_TreeNode;
tree_select_TreeSelect.SHOW_ALL = SHOW_ALL;
tree_select_TreeSelect.SHOW_PARENT = strategyUtil_SHOW_PARENT;
tree_select_TreeSelect.SHOW_CHILD = strategyUtil_SHOW_CHILD;

/* harmony default export */ var tree_select = (tree_select_TreeSelect);
// EXTERNAL MODULE: ./node_modules/antd/es/switch/style/index.less
var switch_style = __webpack_require__("czTT");

// CONCATENATED MODULE: ./node_modules/antd/es/switch/style/index.js


// CONCATENATED MODULE: ./node_modules/rc-switch/es/index.js







var Switch = external_window_React_["forwardRef"](function (_ref, ref) {
  var _classNames;

  var _ref$prefixCls = _ref.prefixCls,
      prefixCls = _ref$prefixCls === void 0 ? 'rc-switch' : _ref$prefixCls,
      className = _ref.className,
      checked = _ref.checked,
      defaultChecked = _ref.defaultChecked,
      disabled = _ref.disabled,
      loadingIcon = _ref.loadingIcon,
      checkedChildren = _ref.checkedChildren,
      unCheckedChildren = _ref.unCheckedChildren,
      onClick = _ref.onClick,
      onChange = _ref.onChange,
      onKeyDown = _ref.onKeyDown,
      restProps = Object(objectWithoutProperties["a" /* default */])(_ref, ["prefixCls", "className", "checked", "defaultChecked", "disabled", "loadingIcon", "checkedChildren", "unCheckedChildren", "onClick", "onChange", "onKeyDown"]);

  var _useMergedState = Object(useMergedState["a" /* default */])(false, {
    value: checked,
    defaultValue: defaultChecked
  }),
      _useMergedState2 = Object(slicedToArray["a" /* default */])(_useMergedState, 2),
      innerChecked = _useMergedState2[0],
      setInnerChecked = _useMergedState2[1];

  function triggerChange(newChecked, event) {
    var mergedChecked = innerChecked;

    if (!disabled) {
      mergedChecked = newChecked;
      setInnerChecked(mergedChecked);
      onChange === null || onChange === void 0 ? void 0 : onChange(mergedChecked, event);
    }

    return mergedChecked;
  }

  function onInternalKeyDown(e) {
    if (e.which === KeyCode["a" /* default */].LEFT) {
      triggerChange(false, e);
    } else if (e.which === KeyCode["a" /* default */].RIGHT) {
      triggerChange(true, e);
    }

    onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(e);
  }

  function onInternalClick(e) {
    var ret = triggerChange(!innerChecked, e); // [Legacy] trigger onClick with value

    onClick === null || onClick === void 0 ? void 0 : onClick(ret, e);
  }

  var switchClassName = classnames_default()(prefixCls, className, (_classNames = {}, Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-checked"), innerChecked), Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-disabled"), disabled), _classNames));
  return external_window_React_["createElement"]("button", Object.assign({}, restProps, {
    type: "button",
    role: "switch",
    "aria-checked": innerChecked,
    disabled: disabled,
    className: switchClassName,
    ref: ref,
    onKeyDown: onInternalKeyDown,
    onClick: onInternalClick
  }), loadingIcon, external_window_React_["createElement"]("span", {
    className: "".concat(prefixCls, "-inner")
  }, innerChecked ? checkedChildren : unCheckedChildren));
});
Switch.displayName = 'Switch';
/* harmony default export */ var rc_switch_es = (Switch);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/wave.js + 1 modules
var wave = __webpack_require__("g0mS");

// CONCATENATED MODULE: ./node_modules/antd/es/switch/index.js


var switch_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};









var switch_Switch = /*#__PURE__*/external_window_React_["forwardRef"](function (_a, ref) {
  var _classNames;
  var customizePrefixCls = _a.prefixCls,
    customizeSize = _a.size,
    customDisabled = _a.disabled,
    loading = _a.loading,
    _a$className = _a.className,
    className = _a$className === void 0 ? '' : _a$className,
    props = switch_rest(_a, ["prefixCls", "size", "disabled", "loading", "className"]);
   false ? undefined : void 0;
  var _React$useContext = external_window_React_["useContext"](config_provider_context["b" /* ConfigContext */]),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var size = external_window_React_["useContext"](SizeContext["b" /* default */]);
  // ===================== Disabled =====================
  var disabled = external_window_React_["useContext"](DisabledContext["b" /* default */]);
  var mergedDisabled = customDisabled || disabled || loading;
  var prefixCls = getPrefixCls('switch', customizePrefixCls);
  var loadingIcon = /*#__PURE__*/external_window_React_["createElement"]("div", {
    className: "".concat(prefixCls, "-handle")
  }, loading && /*#__PURE__*/external_window_React_["createElement"](LoadingOutlined["a" /* default */], {
    className: "".concat(prefixCls, "-loading-icon")
  }));
  var classes = classnames_default()((_classNames = {}, Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-small"), (customizeSize || size) === 'small'), Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-loading"), loading), Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
  return /*#__PURE__*/external_window_React_["createElement"](wave["a" /* default */], {
    insertExtraNode: true
  }, /*#__PURE__*/external_window_React_["createElement"](rc_switch_es, Object(esm_extends["a" /* default */])({}, props, {
    prefixCls: prefixCls,
    className: classes,
    disabled: mergedDisabled,
    ref: ref,
    loadingIcon: loadingIcon
  })));
});
switch_Switch.__ANT_SWITCH = true;
if (false) {}
/* harmony default export */ var es_switch = (switch_Switch);
// EXTERNAL MODULE: ./node_modules/antd/es/auto-complete/style/index.less
var auto_complete_style = __webpack_require__("O/iA");

// CONCATENATED MODULE: ./node_modules/antd/es/auto-complete/style/index.js


// style dependencies

// EXTERNAL MODULE: ./node_modules/antd/es/select/index.js
var es_select = __webpack_require__("2fM7");

// EXTERNAL MODULE: ./node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__("0n0R");

// CONCATENATED MODULE: ./node_modules/antd/es/auto-complete/index.js



/**
 * TODO: 4.0
 *
 * - Remove \`dataSource\`
 * - \`size\` not work with customizeInput
 * - CustomizeInput not feedback \`ENTER\` key since accessibility enhancement
 */








var Option = es_select["a" /* default */].Option;
function isSelectOptionOrSelectOptGroup(child) {
  return child && child.type && (child.type.isSelectOption || child.type.isSelectOptGroup);
}
var auto_complete_AutoComplete = function AutoComplete(props, ref) {
  var customizePrefixCls = props.prefixCls,
    className = props.className,
    popupClassName = props.popupClassName,
    dropdownClassName = props.dropdownClassName,
    children = props.children,
    dataSource = props.dataSource;
  var childNodes = Object(Children_toArray["a" /* default */])(children);
  // ============================= Input =============================
  var customizeInput;
  if (childNodes.length === 1 && Object(reactNode["c" /* isValidElement */])(childNodes[0]) && !isSelectOptionOrSelectOptGroup(childNodes[0])) {
    var _childNodes = Object(slicedToArray["a" /* default */])(childNodes, 1);
    customizeInput = _childNodes[0];
  }
  var getInputElement = customizeInput ? function () {
    return customizeInput;
  } : undefined;
  // ============================ Options ============================
  var optionChildren;
  // [Legacy] convert \`children\` or \`dataSource\` into option children
  if (childNodes.length && isSelectOptionOrSelectOptGroup(childNodes[0])) {
    optionChildren = children;
  } else {
    optionChildren = dataSource ? dataSource.map(function (item) {
      if (Object(reactNode["c" /* isValidElement */])(item)) {
        return item;
      }
      switch (Object(esm_typeof["a" /* default */])(item)) {
        case 'string':
          return /*#__PURE__*/external_window_React_["createElement"](Option, {
            key: item,
            value: item
          }, item);
        case 'object':
          {
            var optionValue = item.value;
            return /*#__PURE__*/external_window_React_["createElement"](Option, {
              key: optionValue,
              value: optionValue
            }, item.text);
          }
        default:
           false ? undefined : void 0;
          return undefined;
      }
    }) : [];
  }
   false ? undefined : void 0;
   false ? undefined : void 0;
   false ? undefined : void 0;
  return /*#__PURE__*/external_window_React_["createElement"](config_provider_context["a" /* ConfigConsumer */], null, function (_ref) {
    var getPrefixCls = _ref.getPrefixCls;
    var prefixCls = getPrefixCls('select', customizePrefixCls);
    return /*#__PURE__*/external_window_React_["createElement"](es_select["a" /* default */], Object(esm_extends["a" /* default */])({
      ref: ref
    }, Object(omit["a" /* default */])(props, ['dataSource']), {
      prefixCls: prefixCls,
      popupClassName: popupClassName || dropdownClassName,
      className: classnames_default()("".concat(prefixCls, "-auto-complete"), className),
      mode: es_select["a" /* default */].SECRET_COMBOBOX_MODE_DO_NOT_USE
    }, {
      // Internal api
      getInputElement: getInputElement
    }), optionChildren);
  });
};
var RefAutoComplete = /*#__PURE__*/external_window_React_["forwardRef"](auto_complete_AutoComplete);
RefAutoComplete.Option = Option;
/* harmony default export */ var auto_complete = (RefAutoComplete);
// EXTERNAL MODULE: ./node_modules/antd/es/input-number/style/index.js
var input_number_style = __webpack_require__("giR+");

// EXTERNAL MODULE: ./node_modules/antd/es/input-number/index.js + 8 modules
var input_number = __webpack_require__("fyUT");

// EXTERNAL MODULE: ./node_modules/antd/es/input/style/index.js
var input_style = __webpack_require__("5NDa");

// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 5 modules
var input = __webpack_require__("5rEg");

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/extends.js
var helpers_esm_extends = __webpack_require__("0Owb");

// EXTERNAL MODULE: ./node_modules/antd/es/form/style/index.js
var form_style = __webpack_require__("y8nQ");

// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 18 modules
var es_form = __webpack_require__("Vl3Y");

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var esm_slicedToArray = __webpack_require__("tJVT");

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/UpOutlined.js + 1 modules
var UpOutlined = __webpack_require__("y3Kf");

// EXTERNAL MODULE: ./src/Components/BusinessComponent/QueryForm/components/index.less?modules
var componentsmodules = __webpack_require__("K+M7");
var componentsmodules_default = /*#__PURE__*/__webpack_require__.n(componentsmodules);

// CONCATENATED MODULE: ./src/Components/BusinessComponent/QueryForm/components/index.tsx
































const components_RangePicker = date_picker["a" /* default */].RangePicker;
const components_Option = es_select["a" /* default */].Option;

// \u907F\u514D\u5F15\u8D77\u547D\u540D\u51B2\u7A81\uFF0C\u628Aoject\u7684key\u90FD\u8F6C\u5316\u4E3A\u5C0F\u5199
function setKeystoLocaleLowerCase(obj) {
  return obj.map(item => {
    return Object.fromEntries(Object.entries(item).map(([k, v]) => [k.toLowerCase(), v]));
  });
}

const Filter = ({
  filterList,
  autoSearch = false,
  onSearch,
  onReset,
  ...props
}) => {
  const _Form$useForm = es_form["a" /* default */].useForm(),
        _Form$useForm2 = Object(esm_slicedToArray["a" /* default */])(_Form$useForm, 1),
        form = _Form$useForm2[0];

  const _useState = Object(external_window_React_["useState"])(setKeystoLocaleLowerCase(filterList)),
        _useState2 = Object(esm_slicedToArray["a" /* default */])(_useState, 2),
        list = _useState2[0],
        setList = _useState2[1];

  const _useState3 = Object(external_window_React_["useState"])(true),
        _useState4 = Object(esm_slicedToArray["a" /* default */])(_useState3, 2),
        isMore = _useState4[0],
        setIsMore = _useState4[1];

  const _useState5 = Object(external_window_React_["useState"])(0),
        _useState6 = Object(esm_slicedToArray["a" /* default */])(_useState5, 2),
        offsetSpan = _useState6[0],
        setOffsetSpan = _useState6[1];

  Object(external_window_React_["useEffect"])(() => {
    setList(isMore ? list.slice(0, 2) : setKeystoLocaleLowerCase(filterList));
    setOffsetSpan(isMore ? 0 : 2 - list.length % 3);
  }, [filterList, isMore, list]);
  const lisLen = Object(external_window_React_["useMemo"])(() => {
    return list.length;
  }, [list.length]);
  const span = Object(external_window_React_["useMemo"])(() => {
    return lisLen >= 5 ? 4 : (24 - 2.5) / lisLen;
  }, [lisLen]);

  const onFinish = values => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    onSearch && onSearch(values);
  };

  const getFormElement = (formtype, oItem) => {
    /** onPressEnter\u4F1A\u81EA\u52A8\u6267\u884C */
    let item = {};

    for (const key in oItem) {
      if (oItem.hasOwnProperty(key)) {
        if (key !== "defaultvalue") {
          item[key] = oItem[key];
        }
      }
    }

    item = { ...item,
      onChange: () => autoSearch && onFinish(form.getFieldsValue()),
      onSelect: () => autoSearch && onFinish(form.getFieldsValue())
    };

    switch (formtype) {
      case "input":
        return /*#__PURE__*/external_window_React_default.a.createElement(input["a" /* default */], Object(helpers_esm_extends["a" /* default */])({
          allowClear: true
        }, item));

      case "inputnumber":
        return /*#__PURE__*/external_window_React_default.a.createElement(input_number["a" /* default */], Object(helpers_esm_extends["a" /* default */])({
          min: 0
        }, item));

      case "autocomplete":
        return /*#__PURE__*/external_window_React_default.a.createElement(auto_complete, Object(helpers_esm_extends["a" /* default */])({
          allowClear: true,
          options: item.options,
          filterOption: (inputValue, option) => {
            return option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1;
          }
        }, item));

      case "switch":
        return /*#__PURE__*/external_window_React_default.a.createElement(es_switch, Object(helpers_esm_extends["a" /* default */])({
          checkedChildren: "\\u5F00",
          unCheckedChildren: "\\u5173"
        }, item));

      case "select":
        const selectlist = item.list || item.selectlist || [];
        return /*#__PURE__*/external_window_React_default.a.createElement(es_select["a" /* default */], Object(helpers_esm_extends["a" /* default */])({
          allowClear: true
        }, item), item.render && item.render(), !item.render && selectlist.map(cl => {
          const oName = cl.key || cl.text || cl.name;
          return /*#__PURE__*/external_window_React_default.a.createElement(components_Option, {
            key: cl.id,
            value: cl.id
          }, oName);
        }));

      case "treeselect":
        const treeSelectList = item.list || item.selectlist || [];
        return /*#__PURE__*/external_window_React_default.a.createElement(tree_select, Object(helpers_esm_extends["a" /* default */])({
          allowClear: true,
          multiple: true,
          treeData: treeSelectList
        }, item));

      case "datepicker":
        return /*#__PURE__*/external_window_React_default.a.createElement(date_picker["a" /* default */], item);

      case "rangepicker":
        return /*#__PURE__*/external_window_React_default.a.createElement(components_RangePicker, item);

      case "timepicker":
        return /*#__PURE__*/external_window_React_default.a.createElement(time_picker, item);

      case "rangetimepicker":
        return /*#__PURE__*/external_window_React_default.a.createElement(time_picker.RangePicker, item);

      case "cascader":
        return /*#__PURE__*/external_window_React_default.a.createElement(cascader, item);

      default:
        return "";
    }
  };

  return /*#__PURE__*/external_window_React_default.a.createElement(es_form["a" /* default */], Object(helpers_esm_extends["a" /* default */])({
    form: form,
    name: "advanced_search",
    className: "ant-advanced-search-form",
    onFinish: onFinish,
    style: {
      textAlign: "center"
    }
  }, props), /*#__PURE__*/external_window_React_default.a.createElement(row["default"], {
    gutter: 24
  }, list.map((item, i) => {
    const formtype = (item.formtype || "").toLowerCase();

    if (formtype !== "input" && item.rules) {
      // delete item.rules;
      item.rules = null;
    }

    const itemName = item.name;
    const itemprops = item.itemprops;
    return /*#__PURE__*/external_window_React_default.a.createElement(es_col["a" /* default */], {
      span: formtype === "switch" ? 2.5 : span // eslint-disable-next-line react/no-array-index-key
      ,
      key: item.name + i,
      style: {
        minWidth: formtype === "switch" ? "auto" : "200px"
      }
    }, /*#__PURE__*/external_window_React_default.a.createElement(es_form["a" /* default */].Item, Object(helpers_esm_extends["a" /* default */])({
      name: itemName,
      label: item.label,
      rules: item.rules ? item.rules : []
    }, itemprops), getFormElement(formtype, item)));
  }), /*#__PURE__*/external_window_React_default.a.createElement(es_col["a" /* default */], {
    md: 6,
    style: {
      minWidth: "100px",
      marginBottom: 30
    },
    className: componentsmodules_default.a.marginL15,
    offset: offsetSpan * 10
  }, /*#__PURE__*/external_window_React_default.a.createElement("span", {
    onClick: () => setIsMore(!isMore)
  }, isMore ? /*#__PURE__*/external_window_React_default.a.createElement(external_window_React_default.a.Fragment, null, /*#__PURE__*/external_window_React_default.a.createElement("span", null, "\\u5C55\\u5F00 "), /*#__PURE__*/external_window_React_default.a.createElement(UpOutlined["a" /* default */], {
    className: componentsmodules_default.a.SearchUp
  })) : /*#__PURE__*/external_window_React_default.a.createElement(external_window_React_default.a.Fragment, null, /*#__PURE__*/external_window_React_default.a.createElement("span", null, "\\u6536\\u8D77 "), /*#__PURE__*/external_window_React_default.a.createElement(UpOutlined["a" /* default */], {
    className: componentsmodules_default.a.SearchDown
  }))), /*#__PURE__*/external_window_React_default.a.createElement(es_button["a" /* default */], {
    style: {
      margin: "0 8px"
    },
    onClick: () => {
      form.resetFields(); // eslint-disable-next-line @typescript-eslint/no-unused-expressions

      onReset && onReset();
    }
  }, "\\u91CD\\u7F6E"), /*#__PURE__*/external_window_React_default.a.createElement(es_button["a" /* default */], {
    type: "primary",
    htmlType: "submit"
  }, "\\u7B5B\\u9009"))));
};
// CONCATENATED MODULE: ./src/Components/BusinessComponent/QueryForm/constant.ts
/* harmony default export */ var constant = ([{
  formType: "input",
  name: "name",
  label: "\u6A21\u7CCA\u641C\u7D22",
  placeholder: "\u8BF7\u8F93\u5165\u59D3\u540D/ID/\u624B\u673A\u540E4\u4F4D/\u7AD9\u70B9\u5730\u5740",
  // rules: [
  //   {
  //     required: true,
  //   },
  // ],
  itemProps: {
    rules: [{
      required: true
    }],
    initialValue: "22"
  }
}, {
  formType: "datepicker",
  name: "datepickerItem",
  label: "\u521B\u5EFA\u65E5\u671F",
  allowClear: true
}, {
  formType: "select",
  name: "site",
  label: "\u7AD9\u70B9",
  defaultValue: null,
  placeholder: "\u8BF7\u9009\u62E9\u7AD9\u70B9",
  selectList: [{
    id: 0,
    name: "\u7AD9\u70B91"
  }, {
    id: 1,
    name: "\u7AD9\u70B92"
  }],
  initialValue: 0
}, {
  formType: "treeselect",
  name: "state",
  label: "\u72B6\u6001",
  defaultValue: null,
  placeholder: "\u8BF7\u9009\u62E9\u72B6\u6001",
  fieldNames: {
    label: "name",
    value: "id",
    children: "children"
  },
  selectlist: [{
    title: "Node1",
    value: "0-0",
    children: [{
      title: "Child Node1",
      value: "0-0-1"
    }, {
      title: "Child Node2",
      value: "0-0-2"
    }]
  }, {
    title: "Node2",
    value: "0-1"
  }]
}]);
// CONCATENATED MODULE: ./src/Components/BusinessComponent/QueryForm/index.tsx






const Queryform = () => {
  const onSearch = values => {
    console.log(values);
  };

  return /*#__PURE__*/external_window_React_default.a.createElement(card["a" /* default */], {
    title: "\\u6211\\u7684",
    style: {
      margin: 24
    }
  }, /*#__PURE__*/external_window_React_default.a.createElement(Filter, {
    filterList: constant,
    onSearch: values => onSearch(values)
  }));
};

/* harmony default export */ var QueryForm = __webpack_exports__["default"] = (Queryform);

//# sourceURL=webpack:///./src/Components/BusinessComponent/QueryForm/index.tsx_+_46_modules?`)},J4zp:function(module,exports,__webpack_require__){eval(`var arrayWithHoles = __webpack_require__("wTVA");
var iterableToArrayLimit = __webpack_require__("m0LI");
var unsupportedIterableToArray = __webpack_require__("ZhPi");
var nonIterableRest = __webpack_require__("wkBT");
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/slicedToArray.js?`)},"K+M7":function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin
module.exports = {"marginL15":"marginL15___1kTxC","SearchDown":"SearchDown___23Ani","SearchUp":"SearchUp___2gNqK"};

//# sourceURL=webpack:///./src/Components/BusinessComponent/QueryForm/components/index.less?`)},"O/iA":function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin

//# sourceURL=webpack:///./node_modules/antd/es/auto-complete/style/index.less?`)},TqRt:function(module,exports){eval(`function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/interopRequireDefault.js?`)},WkPL:function(module,exports){eval(`function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/arrayLikeToArray.js?`)},ZhPi:function(module,exports,__webpack_require__){eval(`var arrayLikeToArray = __webpack_require__("WkPL");
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js?`)},cDf5:function(module,exports){eval(`function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/typeof.js?`)},czTT:function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin

//# sourceURL=webpack:///./node_modules/antd/es/switch/style/index.less?`)},m0LI:function(module,exports){eval(`function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js?`)},pL63:function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin

//# sourceURL=webpack:///./node_modules/antd/es/time-picker/style/index.less?`)},v56E:function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin

//# sourceURL=webpack:///./node_modules/antd/es/cascader/style/index.less?`)},vHRA:function(module,exports,__webpack_require__){"use strict";eval(`

var _interopRequireDefault = __webpack_require__("TqRt");

var _typeof = __webpack_require__("cDf5");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useId;
exports.getUUID = getUUID;
exports.isBrowserClient = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("J4zp"));

var React = _interopRequireWildcard(__webpack_require__("cDcd"));

var _canUseDom = _interopRequireDefault(__webpack_require__("3Mug"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var uuid = 0;
/** Is client side and not jsdom */

var isBrowserClient =  true && (0, _canUseDom.default)();
/** Get unique id for accessibility usage */

exports.isBrowserClient = isBrowserClient;

function getUUID() {
  var retId; // Test never reach

  /* istanbul ignore if */

  if (isBrowserClient) {
    retId = uuid;
    uuid += 1;
  } else {
    retId = 'TEST_OR_SSR';
  }

  return retId;
}

function useId(id) {
  // Inner id for accessibility usage. Only work in client side
  var _React$useState = React.useState(),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      innerId = _React$useState2[0],
      setInnerId = _React$useState2[1];

  React.useEffect(function () {
    setInnerId("rc_select_".concat(getUUID()));
  }, []);
  return id || innerId;
}

//# sourceURL=webpack:///./node_modules/rc-select/lib/hooks/useId.js?`)},wTVA:function(module,exports){eval(`function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/arrayWithHoles.js?`)},wkBT:function(module,exports){eval(`function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/nonIterableRest.js?`)}}]);
