(window.webpackJsonp=window.webpackJsonp||[]).push([[130,149],{"3aFa":function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_card_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("IzEo");
/* harmony import */ var antd_es_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("bx4M");
/* harmony import */ var antd_es_button_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("+L6B");
/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("2/Rp");
/* harmony import */ var _Users_eternallycyf_Documents_GitHub_case_my_demo_markdown_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("tJVT");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("0i/h");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_6__);








const D3 = () => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([250, 210, 170, 130, 90]),
        _useState2 = Object(_Users_eternallycyf_Documents_GitHub_case_my_demo_markdown_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
        dataset = _useState2[0],
        setDataset = _useState2[1];

  const handleInitChart = () => {
    let marge = {
      top: 30,
      bottom: 30,
      left: 30,
      right: 30
    };
    let body = d3__WEBPACK_IMPORTED_MODULE_6__["select"]('body');
    let svg = body.select('#mainsvg');
    svg.selectAll('g').remove();
    let g = svg.append('g').attr('transform', 'translate(' + marge.top + ',' + marge.left + ')');
    let rectHeight = 30;
    g.selectAll('rect').data(dataset).enter().append('rect').attr('x', 20).attr('y', function (d, i) {
      return i * rectHeight;
    }).attr('width', function (d) {
      return d;
    }).attr('height', rectHeight - 5).attr('fill', 'blue');
    g.selectAll('text').data(dataset).enter().append('text').attr('x', function (d) {
      return 30 + d;
    }).attr('y', function (d, i) {
      return i * rectHeight + 15;
    }).text(function (d) {
      return d;
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    handleInitChart();
  }, []);

  const setNewChartData = () => {
    let arr = Array.from({
      length: 4
    }, () => ~~(Math.random(0, 1000) * 100));
    setDataset(arr);
    handleInitChart();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_es_card__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    style: {
      margin: 24
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    onClick: setNewChartData
  }, "\\u8BBE\\u7F6E\\u65B0\\u7684\\u6570\\u636E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("svg", {
    width: "1200",
    height: "180",
    id: "mainsvg",
    className: "svgs"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (D3);

//# sourceURL=webpack:///./src/Visualization/D3/barChart.tsx?`)},"8R5B":function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony import */ var _style_default_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("EFp3");
/* harmony import */ var _style_default_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_default_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("yfLh");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("+L6B");
/* harmony import */ var _checkbox_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("sRBo");
/* harmony import */ var _dropdown_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("qVdP");
/* harmony import */ var _empty_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("R9oj");
/* harmony import */ var _input_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("5NDa");
/* harmony import */ var _menu_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("lUTK");
/* harmony import */ var _pagination_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("DjyN");

 // style dependencies







 // deps-lint-skip: form

//# sourceURL=webpack:///./node_modules/antd/es/transfer/style/index.js?`)},CMvL:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony import */ var antd_es_select_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("OaEy");
/* harmony import */ var antd_es_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2fM7");
/* harmony import */ var antd_es_form_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("y8nQ");
/* harmony import */ var antd_es_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Vl3Y");
/* harmony import */ var antd_es_modal_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("2qtc");
/* harmony import */ var antd_es_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("kLXV");
/* harmony import */ var antd_es_transfer_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("8R5B");
/* harmony import */ var antd_es_transfer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("aJyg");
/* harmony import */ var _Users_eternallycyf_Documents_GitHub_case_my_demo_markdown_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("0Owb");
/* harmony import */ var antd_es_checkbox_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("sRBo");
/* harmony import */ var antd_es_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("kaz8");
/* harmony import */ var _Users_eternallycyf_Documents_GitHub_case_my_demo_markdown_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("tJVT");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _index_less_modules__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("Y+O9");
/* harmony import */ var _index_less_modules__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_index_less_modules__WEBPACK_IMPORTED_MODULE_13__);















// \u6253\u5E73\u6570\u7EC4
const flattenDeep = arr => Array.isArray(arr) ? arr.reduce((a, b) => [...a, ...flattenDeep(b)], []) : [arr];

const filterRepeatList = arr => [...new Set([...arr])]; // \u627E\u5230\u6539\u53D8\u9879\u7684\u5168\u90E8\u4FE1\u606F


const findAllMessage = (originArr, keyArr) => {
  const arr = [];
  keyArr.forEach(item => {
    arr.push(originArr.filter(ele => ele.key == item));
  });
  return flattenDeep(arr);
};

const TransferForm = (props, TransferRef) => {
  var _targetKeys$length, _originData$length;

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_12__["useState"])([]),
        _useState2 = Object(_Users_eternallycyf_Documents_GitHub_case_my_demo_markdown_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_useState, 2),
        targetKeys = _useState2[0],
        setTargetKeys = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_12__["useState"])([]),
        _useState4 = Object(_Users_eternallycyf_Documents_GitHub_case_my_demo_markdown_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_useState3, 2),
        selectedKeys = _useState4[0],
        setSelectedKeys = _useState4[1];

  const _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_12__["useState"])(false),
        _useState6 = Object(_Users_eternallycyf_Documents_GitHub_case_my_demo_markdown_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_useState5, 2),
        visible = _useState6[0],
        setVisible = _useState6[1];

  const transferBox = Object(react__WEBPACK_IMPORTED_MODULE_12__["useRef"])(null);
  const transferOkCallBack = props.transferOkCallBack,
        _props$originData = props.originData,
        originData = _props$originData === void 0 ? [] : _props$originData,
        formRef = props.formRef,
        modalProps = props.modalProps,
        transferProps = props.transferProps,
        _props$falseSelectItm = props.falseSelectItmeName,
        falseSelectItmeName = _props$falseSelectItm === void 0 ? "test" : _props$falseSelectItm;
  Object(react__WEBPACK_IMPORTED_MODULE_12__["useEffect"])(() => {
    document.getElementsByClassName("ant-input")[0].placeholder = "\u8BF7\u8F93\u5165\u81EA\u5B9A\u4E49\u5185\u5BB9";
  }, []); // \u5F53\u91CD\u65B0\u8BBE\u7F6E\u6570\u636E\u6E90 \u60C5\u51B5\u6240\u6709\u6570\u636E

  Object(react__WEBPACK_IMPORTED_MODULE_12__["useEffect"])(() => {
    setTargetKeys([]);
    setSelectedKeys([]);
    formRef.setFieldsValue({
      [falseSelectItmeName]: []
    });
  }, [falseSelectItmeName, formRef, originData.length]); // \u66B4\u9732\u7ED9ref\u7684\u63A5\u53E3

  Object(react__WEBPACK_IMPORTED_MODULE_12__["useImperativeHandle"])(TransferRef, () => ({
    getData: () => {
      return [targetKeys, originData];
    },
    setData: arr => {
      setTargetKeys(arr);
    },
    useVisible: bool => {
      setVisible(bool);
    }
  }));

  const handleChange = (newTargetKeys, direction, moveKeys) => {
    // \u5220\u9664\u6570\u636E
    const newKeys = direction === "right" ? [...targetKeys, moveKeys] : targetKeys.filter(key => !moveKeys.includes(key));
    setTargetKeys([...newKeys]);
    setSelectedKeys([]);
  };

  const handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    // \u8BBE\u7F6E\u65B0\u7684\u6570\u636E
    const selectedKeysArr = filterRepeatList([...sourceSelectedKeys, ...targetSelectedKeys]);
    const targetKeysArr = filterRepeatList([...targetKeys, ...sourceSelectedKeys, ...selectedKeys]);
    const formItemArr = filterRepeatList([...targetKeys, ...sourceSelectedKeys, ...selectedKeys]);
    setSelectedKeys([...selectedKeysArr]);
    setTargetKeys([...targetKeysArr]); // \u540C\u6B65\u4E3A\u4E00\u4E2Aselect\u8BBE\u7F6E\u76F8\u540C\u7684\u72B6\u6001 select\u9009\u4E2D

    formRef.setFieldsValue({
      [falseSelectItmeName]: findAllMessage(originData, formItemArr)
    });
  };

  const handleModalOk = () => {
    formRef.setFieldsValue({
      [falseSelectItmeName]: findAllMessage(originData, targetKeys)
    });
    setVisible(false); // eslint-disable-next-line @typescript-eslint/no-unused-expressions

    transferOkCallBack && transferOkCallBack();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_12___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_es_form__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: _index_less_modules__WEBPACK_IMPORTED_MODULE_13___default.a.transferBox,
    ref: transferBox
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_es_modal__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], Object(_Users_eternallycyf_Documents_GitHub_case_my_demo_markdown_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])({
    width: 1000,
    title: "\\u7A7F\\u68AD\\u6846",
    getContainer: transferBox === null || transferBox === void 0 ? void 0 : transferBox.current,
    visible: visible,
    okText: "\\u786E\\u5B9A",
    cancelText: "\\u53D6\\u6D88",
    onCancel: () => setVisible(false),
    onOk: () => handleModalOk(),
    forceRender: true,
    centered: true,
    maskClosable: false,
    bodyStyle: {
      paddingBottom: 0
    }
  }, modalProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_es_transfer__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], Object(_Users_eternallycyf_Documents_GitHub_case_my_demo_markdown_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])({
    listStyle: {
      height: 500
    },
    style: {
      position: "relative"
    },
    operationStyle: {
      position: "absolute",
      top: 200,
      visibility: "hidden"
    },
    showSearch: true,
    titles: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_es_checkbox__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
      checked: false,
      onClick: () => setTargetKeys(originData.map(item => item.key))
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("a", {
      href: "#",
      onClick: () => {
        setTargetKeys([]);
        setSelectedKeys([]);
      }
    }, "\\u6E05\\u7A7A")],
    selectAllLabels: ["\u5168\u90E8", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", null, " ", "\\u5DF2\\u9009", (_targetKeys$length = targetKeys.length) !== null && _targetKeys$length !== void 0 ? _targetKeys$length : "--", "/", (_originData$length = originData.length) !== null && _originData$length !== void 0 ? _originData$length : "--")],
    showSelectAll: false,
    targetKeys: targetKeys,
    selectedKeys: selectedKeys,
    onChange: (a, b, c) => handleChange(a, b, c),
    onSelectChange: (a, b) => handleSelectChange(a, b),
    render: item => item.title,
    oneWay: true
  }, transferProps, {
    dataSource: originData
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_es_form__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].Item, {
    name: falseSelectItmeName,
    labelCol: {
      span: 0
    },
    wrapperCol: {
      span: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_es_select__WEBPACK_IMPORTED_MODULE_1__["default"], {
    mode: "multiple",
    style: {
      width: "0%",
      display: "none"
    },
    labelInValue: true,
    options: [{
      label: "t",
      value: 1
    }, {
      label: "a",
      value: 2
    }]
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_12__["forwardRef"])(TransferForm));

//# sourceURL=webpack:///./src/Components/BusinessComponent/TransferForm/components/hook/index.tsx?`)},CxlS:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_card_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("IzEo");
/* harmony import */ var antd_es_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("bx4M");
/* harmony import */ var antd_es_button_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("+L6B");
/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("2/Rp");
/* harmony import */ var _Users_eternallycyf_Documents_GitHub_case_my_demo_markdown_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("tJVT");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("0i/h");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_6__);







const data = {
  name: '\u4E2D\u56FD',
  children: [{
    name: '\u6D59\u6C5F',
    children: [{
      name: '\u676D\u5DDE',
      value: 100
    }, {
      name: '\u5B81\u6CE2',
      value: 100
    }, {
      name: '\u6E29\u5DDE',
      value: 100
    }, {
      name: '\u7ECD\u5174',
      value: 100
    }]
  }, {
    name: '\u5E7F\u897F',
    children: [{
      name: '\u6842\u6797',
      children: [{
        name: '\u79C0\u5CF0\u533A',
        value: 100
      }, {
        name: '\u53E0\u5F69\u533A',
        value: 100
      }, {
        name: '\u8C61\u5C71\u533A',
        value: 100
      }, {
        name: '\u4E03\u661F\u533A',
        value: 100
      }]
    }, {
      name: '\u5357\u5B81',
      value: 100
    }, {
      name: '\u67F3\u5DDE',
      value: 100
    }, {
      name: '\u9632\u57CE\u6E2F',
      value: 100
    }]
  }, {
    name: '\u9ED1\u9F99\u6C5F',
    children: [{
      name: '\u54C8\u5C14\u6EE8',
      value: 100
    }, {
      name: '\u9F50\u9F50\u54C8\u5C14',
      value: 100
    }, {
      name: '\u7261\u4E39\u6C5F',
      value: 100
    }, {
      name: '\u5927\u5E86',
      value: 100
    }]
  }, {
    name: '\u65B0\u7586',
    children: [{
      name: '\u4E4C\u9C81\u6728\u9F50'
    }, {
      name: '\u514B\u62C9\u739B\u4F9D'
    }, {
      name: '\u5410\u9C81\u756A'
    }, {
      name: '\u54C8\u5BC6'
    }]
  }]
};

const D3 = () => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(data),
        _useState2 = Object(_Users_eternallycyf_Documents_GitHub_case_my_demo_markdown_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
        dataset = _useState2[0],
        setDataset = _useState2[1];

  const handleInitChart = () => {
    let body = d3__WEBPACK_IMPORTED_MODULE_6__["select"]('body');
    let marge = {
      top: 30,
      bottom: 30,
      left: 30,
      right: 30
    };
    let svg = body.select('#mainsvg3');
    var width = svg.attr('width'); //\u5F97\u5230\u753B\u5E03\u7684\u5BBD

    var height = svg.attr('height'); //\u5F97\u5230\u753B\u5E03\u7684\u957F

    var g = svg.append('g').attr('transform', 'translate(' + marge.top + ',' + marge.left + ')');
    var scale = svg.append('g').attr('transform', 'translate(' + marge.top + ',' + marge.left + ')');
    var hierarchyData = d3__WEBPACK_IMPORTED_MODULE_6__["hierarchy"](dataset).sum(function (d) {
      return d.value;
    }); //\u521B\u5EFA\u4E00\u4E2A\u6811\u72B6\u56FE

    var tree = d3__WEBPACK_IMPORTED_MODULE_6__["tree"]().size([width - 400, height - 200]).separation(function (a, b) {
      return (a.parent == b.parent ? 1 : 2) / a.depth;
    });
    var treeData = tree(hierarchyData);
    var nodes = treeData.descendants();
    var links = treeData.links(); //\u8F93\u51FA\u8282\u70B9\u548C\u8FB9

    console.log(nodes);
    console.log(links);
    var B\xE9zier_curve_generator = d3__WEBPACK_IMPORTED_MODULE_6__["linkHorizontal"]().x(function (d) {
      return d.y;
    }).y(function (d) {
      return d.x;
    }); //\u7ED8\u5236\u8FB9

    g.append('g').selectAll('path').data(links).enter().append('path').attr('d', function (d) {
      var start = {
        x: d.source.x,
        y: d.source.y
      };
      var end = {
        x: d.target.x,
        y: d.target.y
      };
      return B\xE9zier_curve_generator({
        source: start,
        target: end
      });
    }).attr('fill', 'none').attr('stroke', 'yellow').attr('stroke-width', 1);
    var gs = g.append('g').selectAll('g').data(nodes).enter().append('g').attr('transform', function (d) {
      var cx = d.x;
      var cy = d.y;
      return 'translate(' + cy + ',' + cx + ')';
    }); //\u7ED8\u5236\u8282\u70B9

    gs.append('circle').attr('r', 6).attr('fill', 'white').attr('stroke', 'blue').attr('stroke-width', 1); //\u6587\u5B57

    gs.append('text').attr('x', function (d) {
      return d.children ? -40 : 8;
    }).attr('y', -5).attr('dy', 10).text(function (d) {
      return d.data.name;
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    handleInitChart();
  }, []);

  const setNewChartData = () => {
    let arr = Array.from({
      length: 4
    }, () => ~~(Math.random(0, 1000) * 100));
    setDataset(arr);
    handleInitChart();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_es_card__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    style: {
      margin: 24
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    onClick: setNewChartData
  }, "\\u8BBE\\u7F6E\\u65B0\\u7684\\u6570\\u636E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("svg", {
    width: "1200",
    height: "180",
    id: "mainsvg3",
    className: "svgs"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (D3);

//# sourceURL=webpack:///./src/Visualization/D3/tree.tsx?`)},NP7x:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_card_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("IzEo");
/* harmony import */ var antd_es_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("bx4M");
/* harmony import */ var antd_es_button_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("+L6B");
/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("2/Rp");
/* harmony import */ var _Users_eternallycyf_Documents_GitHub_case_my_demo_markdown_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("tJVT");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("0i/h");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_6__);








const D3 = () => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([250, 210, 170, 130, 90]),
        _useState2 = Object(_Users_eternallycyf_Documents_GitHub_case_my_demo_markdown_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
        dataset = _useState2[0],
        setDataset = _useState2[1];

  var scaleLinear = d3__WEBPACK_IMPORTED_MODULE_6__["scaleLinear"]().domain([0, d3__WEBPACK_IMPORTED_MODULE_6__["max"](dataset)]).range([0, 250]); //\u4E3A\u5750\u6807\u8F74\u5B9A\u4E49\u4E00\u4E2A\u7EBF\u6027\u6BD4\u4F8B\u5C3A

  var xScale = d3__WEBPACK_IMPORTED_MODULE_6__["scaleLinear"]().domain([0, d3__WEBPACK_IMPORTED_MODULE_6__["max"](dataset)]).range([0, 250]);
  var xAxis = d3__WEBPACK_IMPORTED_MODULE_6__["axisBottom"](xScale) //\u5B9A\u4E49\u4E00\u4E2Aaxis\uFF0C\u7531bottom\u53EF\u77E5\uFF0C\u662F\u671D\u4E0B\u7684
  .ticks(10); //\u8BBE\u7F6E\u523B\u5EA6\u6570\u76EE

  const handleInitChart = () => {
    let marge = {
      top: 30,
      bottom: 30,
      left: 30,
      right: 30
    };
    let body = d3__WEBPACK_IMPORTED_MODULE_6__["select"]('body');
    let svg = body.select('#mainsvg2');
    svg.selectAll('g').remove();
    let g = svg.append('g').attr('transform', 'translate(' + marge.top + ',' + marge.left + ')');
    let rectHeight = 30;
    g.selectAll('rect').data(dataset).enter().append('rect').attr('x', 20).attr('y', function (d, i) {
      return i * rectHeight;
    }).attr('width', function (d) {
      return scaleLinear(d);
    }).attr('height', rectHeight - 5).attr('fill', 'blue');
    g.selectAll('text').data(dataset).enter().append('text').attr('x', function (d) {
      return 30 + scaleLinear(d);
    }).attr('y', function (d, i) {
      return i * rectHeight + 15;
    }).text(function (d) {
      return d;
    });
    g.append('g').attr('transform', 'translate(' + 20 + ',' + dataset.length * rectHeight + ')').call(xAxis);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    handleInitChart();
  }, []);

  const setNewChartData = () => {
    let arr = Array.from({
      length: 4
    }, () => ~~(Math.random(0, 1000) * 100));
    setDataset(arr);
    handleInitChart();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_es_card__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    style: {
      margin: 24
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    onClick: setNewChartData
  }, "\\u8BBE\\u7F6E\\u65B0\\u7684\\u6570\\u636E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("svg", {
    width: "1200",
    height: "180",
    id: "mainsvg2",
    className: "svgs"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (D3);

//# sourceURL=webpack:///./src/Visualization/D3/barChart2.tsx?`)},UaRi:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_card_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("IzEo");
/* harmony import */ var antd_es_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("bx4M");
/* harmony import */ var antd_es_button_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("+L6B");
/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("2/Rp");
/* harmony import */ var antd_es_form_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("y8nQ");
/* harmony import */ var antd_es_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Vl3Y");
/* harmony import */ var _Users_eternallycyf_Documents_GitHub_case_my_demo_markdown_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("tJVT");
/* harmony import */ var _components_hook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("CMvL");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);










const TransferDemo = () => {
  // const TransferRef = useRef(null)
  const _Form$useForm = antd_es_form__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].useForm(),
        _Form$useForm2 = Object(_Users_eternallycyf_Documents_GitHub_case_my_demo_markdown_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_Form$useForm, 1),
        form = _Form$useForm2[0];

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])([]),
        _useState2 = Object(_Users_eternallycyf_Documents_GitHub_case_my_demo_markdown_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState, 2),
        mockData = _useState2[0],
        setMockData = _useState2[1];

  const TransferRef = Object(react__WEBPACK_IMPORTED_MODULE_8__["useRef"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(() => {
    const initData = Array.from({
      length: 20
    }).map((_, i) => ({
      key: i.toString(),
      title: \`content\${i + 1}\`,
      description: \`description of content\${i + 1}\`
    }));
    setMockData(initData);
  }, []);

  const testData = () => {
    const initData = Array.from({
      length: 10
    }).map((_, i) => ({
      key: i.toString(),
      title: \`content\${i + 1}\`,
      description: \`description of content\${i + 1}\`
    }));
    setMockData(initData);
  };

  const transferOkCallBack = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const getData = TransferRef.current[0].getData;
    console.log(form === null || form === void 0 ? void 0 : form.getFieldValue("test"));
  };

  const onFinish = values => {
    console.log(values);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_card__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    style: {
      margin: 24
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
    onClick: () => {
      TransferRef.current[0].useVisible(true);
    }
  }, "\\u6253\\u5F00\\u7A7F\\u68AD\\u68461")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
    onClick: () => {
      TransferRef.current[1].useVisible(true);
    }
  }, "\\u6253\\u5F00\\u7A7F\\u68AD\\u68462")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
    onClick: () => testData()
  }, "\\u4E24\\u4E2A\\u90FD\\u8BBE\\u7F6E\\u65B0\\u7684\\u6D4B\\u8BD5\\u6570\\u636E")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", null, "\\u53EF\\u904D\\u5386\\u751F\\u6210\\u65E0\\u9650\\u4E2A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_form__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    form: form,
    onFinish: onFinish
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_form__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].Item, {
    style: {
      display: "inline-block"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_hook__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    formRef: form,
    originData: mockData,
    ref: el => TransferRef.current[0] = el,
    transferOkCallBack: () => transferOkCallBack()
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_form__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].Item, {
    style: {
      display: "inline-block"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_hook__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    formRef: form,
    originData: mockData,
    ref: el => TransferRef.current[1] = el,
    transferOkCallBack: () => transferOkCallBack(),
    falseSelectItmeName: "asasd"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    type: "primary",
    htmlType: "submit"
  }, "Submit"))));
};

/* harmony default export */ __webpack_exports__["default"] = (TransferDemo);

//# sourceURL=webpack:///./src/Components/BusinessComponent/TransferForm/Hook_multiple.tsx?`)},Umss:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_card_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("IzEo");
/* harmony import */ var antd_es_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("bx4M");
/* harmony import */ var antd_es_button_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("+L6B");
/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("2/Rp");
/* harmony import */ var _Users_eternallycyf_Documents_GitHub_case_my_demo_markdown_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("tJVT");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("0i/h");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_6__);








const D3 = () => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([250, 210, 170, 130, 90]),
        _useState2 = Object(_Users_eternallycyf_Documents_GitHub_case_my_demo_markdown_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
        dataset = _useState2[0],
        setDataset = _useState2[1];

  var scaleLinear = d3__WEBPACK_IMPORTED_MODULE_6__["scaleLinear"]().domain([0, d3__WEBPACK_IMPORTED_MODULE_6__["max"](dataset)]).range([0, 300]);

  const handleInitChart = () => {
    let marge = {
      top: 30,
      bottom: 30,
      left: 30,
      right: 30
    };
    let body = d3__WEBPACK_IMPORTED_MODULE_6__["select"]('body');
    let svg = body.select('#mainsvg1');
    svg.selectAll('g').remove();
    let g = svg.append('g').attr('transform', 'translate(' + marge.top + ',' + marge.left + ')');
    let rectHeight = 30;
    g.selectAll('rect').data(dataset).enter().append('rect').attr('x', 20).attr('y', function (d, i) {
      return i * rectHeight;
    }).attr('width', function (d) {
      return scaleLinear(d);
    }).attr('height', rectHeight - 5).attr('fill', 'blue');
    g.selectAll('text').data(dataset).enter().append('text').attr('x', function (d) {
      return 30 + scaleLinear(d);
    }).attr('y', function (d, i) {
      return i * rectHeight + 15;
    }).text(function (d) {
      return d;
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    handleInitChart();
  }, []);

  const setNewChartData = () => {
    let arr = Array.from({
      length: 4
    }, () => ~~(Math.random(0, 1000) * 100));
    setDataset(arr);
    handleInitChart();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_es_card__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    style: {
      margin: 24
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    onClick: setNewChartData
  }, "\\u8BBE\\u7F6E\\u65B0\\u7684\\u6570\\u636E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("svg", {
    width: "1200",
    height: "180",
    id: "mainsvg1",
    className: "svgs"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (D3);

//# sourceURL=webpack:///./src/Visualization/D3/barChart1.tsx?`)},"Y+O9":function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin
module.exports = {"transferBox":"transferBox___20Y8v"};

//# sourceURL=webpack:///./src/Components/BusinessComponent/TransferForm/components/index.less?`)},YMaR:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_card_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("IzEo");
/* harmony import */ var antd_es_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("bx4M");
/* harmony import */ var antd_es_button_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("+L6B");
/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("2/Rp");
/* harmony import */ var antd_es_form_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("y8nQ");
/* harmony import */ var antd_es_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Vl3Y");
/* harmony import */ var _Users_eternallycyf_Documents_GitHub_case_my_demo_markdown_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("tJVT");
/* harmony import */ var _components_hook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("CMvL");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);










const TransferDemo = () => {
  // const TransferRef = useRef(null)
  const _Form$useForm = antd_es_form__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].useForm(),
        _Form$useForm2 = Object(_Users_eternallycyf_Documents_GitHub_case_my_demo_markdown_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_Form$useForm, 1),
        form = _Form$useForm2[0];

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])([]),
        _useState2 = Object(_Users_eternallycyf_Documents_GitHub_case_my_demo_markdown_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState, 2),
        mockData = _useState2[0],
        setMockData = _useState2[1];

  const TransferRef = Object(react__WEBPACK_IMPORTED_MODULE_8__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(() => {
    const initData = Array.from({
      length: 20
    }).map((_, i) => ({
      key: i.toString(),
      title: \`content\${i + 1}\`,
      description: \`description of content\${i + 1}\`
    }));
    setMockData(initData); // init data need asynchronous for waiting formRef init

    setTimeout(function () {
      form.setFieldsValue({
        test: [{
          lable: "sxx",
          value: 1,
          key: 1
        }]
      });
      TransferRef.current.setData(["1", "2"]);
    }, 0);
  }, [form]);

  const testData = () => {
    const initData = Array.from({
      length: 10
    }).map((_, i) => ({
      key: i.toString(),
      title: \`content\${i + 1}\`,
      description: \`description of content\${i + 1}\`
    }));
    setMockData(initData);
  };

  const transferOkCallBack = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const getData = TransferRef.current.getData;
    console.log(form === null || form === void 0 ? void 0 : form.getFieldValue("test"));
  };

  const onFinish = values => {
    console.log(values);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_card__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    style: {
      margin: 24
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
    onClick: () => {
      TransferRef.current.useVisible(true);
    }
  }, "\\u6253\\u5F00\\u7A7F\\u68AD\\u6846")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
    onClick: () => testData()
  }, "\\u8BBE\\u7F6E\\u65B0\\u7684\\u6D4B\\u8BD5\\u6570\\u636E")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_form__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    form: form,
    onFinish: onFinish
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_form__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].Item, {
    style: {
      display: "inline-block"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_hook__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    formRef: form,
    originData: mockData,
    ref: TransferRef,
    transferOkCallBack: () => transferOkCallBack()
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    type: "primary",
    htmlType: "submit"
  }, "Submit"))));
};

/* harmony default export */ __webpack_exports__["default"] = (TransferDemo);

//# sourceURL=webpack:///./src/Components/BusinessComponent/TransferForm/Hook.tsx?`)},aJyg:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("rePB");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__("KQm4");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("1OyB");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__("vuIU");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__("Ji7U");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 3 modules
var createSuper = __webpack_require__("LK+K");

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: external "window.React"
var external_window_React_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__("H84U");

// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/defaultRenderEmpty.js
var defaultRenderEmpty = __webpack_require__("XI05");

// EXTERNAL MODULE: ./node_modules/antd/es/form/context.js
var form_context = __webpack_require__("ihLV");

// EXTERNAL MODULE: ./node_modules/antd/es/locale-provider/LocaleReceiver.js + 1 modules
var LocaleReceiver = __webpack_require__("YMnH");

// EXTERNAL MODULE: ./node_modules/antd/es/locale/default.js + 1 modules
var locale_default = __webpack_require__("ZvpZ");

// EXTERNAL MODULE: ./node_modules/antd/es/_util/statusUtils.js
var statusUtils = __webpack_require__("ATYA");

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/DownOutlined.js + 1 modules
var DownOutlined = __webpack_require__("8Skl");

// EXTERNAL MODULE: ./node_modules/rc-util/es/omit.js
var omit = __webpack_require__("bT9E");

// EXTERNAL MODULE: ./node_modules/antd/es/checkbox/index.js + 2 modules
var es_checkbox = __webpack_require__("kaz8");

// EXTERNAL MODULE: ./node_modules/antd/es/dropdown/index.js + 2 modules
var es_dropdown = __webpack_require__("jsC+");

// EXTERNAL MODULE: ./node_modules/antd/es/menu/index.js + 10 modules
var es_menu = __webpack_require__("BvKs");

// EXTERNAL MODULE: ./node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__("0n0R");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__("U8pU");

// EXTERNAL MODULE: ./node_modules/antd/es/pagination/index.js + 12 modules
var es_pagination = __webpack_require__("NUBc");

// EXTERNAL MODULE: ./node_modules/antd/es/_util/type.js
var type = __webpack_require__("CWQg");

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/DeleteOutlined.js + 1 modules
var DeleteOutlined = __webpack_require__("/MfK");

// EXTERNAL MODULE: ./node_modules/rc-util/es/KeyCode.js
var KeyCode = __webpack_require__("4IlW");

// CONCATENATED MODULE: ./node_modules/antd/es/_util/transButton.js


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
/**
 * Wrap of sub component which need use as Button capacity (like Icon component).
 *
 * This helps accessibility reader to tread as a interactive button to operation.
 */




var inlineStyle = {
  border: 0,
  background: 'transparent',
  padding: 0,
  lineHeight: 'inherit',
  display: 'inline-block'
};
var TransButton = /*#__PURE__*/external_window_React_["forwardRef"](function (props, ref) {
  var onKeyDown = function onKeyDown(event) {
    var keyCode = event.keyCode;

    if (keyCode === KeyCode["a" /* default */].ENTER) {
      event.preventDefault();
    }
  };

  var onKeyUp = function onKeyUp(event) {
    var keyCode = event.keyCode;
    var onClick = props.onClick;

    if (keyCode === KeyCode["a" /* default */].ENTER && onClick) {
      onClick();
    }
  };

  var style = props.style,
      noStyle = props.noStyle,
      disabled = props.disabled,
      restProps = __rest(props, ["style", "noStyle", "disabled"]);

  var mergedStyle = {};

  if (!noStyle) {
    mergedStyle = Object(esm_extends["a" /* default */])({}, inlineStyle);
  }

  if (disabled) {
    mergedStyle.pointerEvents = 'none';
  }

  mergedStyle = Object(esm_extends["a" /* default */])(Object(esm_extends["a" /* default */])({}, mergedStyle), style);
  return /*#__PURE__*/external_window_React_["createElement"]("div", Object(esm_extends["a" /* default */])({
    role: "button",
    tabIndex: 0,
    ref: ref
  }, restProps, {
    onKeyDown: onKeyDown,
    onKeyUp: onKeyUp,
    style: mergedStyle
  }));
});
/* harmony default export */ var transButton = (TransButton);
// CONCATENATED MODULE: ./node_modules/antd/es/transfer/ListItem.js










var ListItem_ListItem = function ListItem(props) {
  var _classNames;

  var renderedText = props.renderedText,
      renderedEl = props.renderedEl,
      item = props.item,
      checked = props.checked,
      disabled = props.disabled,
      prefixCls = props.prefixCls,
      onClick = props.onClick,
      onRemove = props.onRemove,
      showRemove = props.showRemove;
  var className = classnames_default()((_classNames = {}, Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-content-item"), true), Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-content-item-disabled"), disabled || item.disabled), Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-content-item-checked"), checked), _classNames));
  var title;

  if (typeof renderedText === 'string' || typeof renderedText === 'number') {
    title = String(renderedText);
  }

  return /*#__PURE__*/external_window_React_["createElement"](LocaleReceiver["a" /* default */], {
    componentName: "Transfer",
    defaultLocale: locale_default["a" /* default */].Transfer
  }, function (transferLocale) {
    var liProps = {
      className: className,
      title: title
    };
    var labelNode = /*#__PURE__*/external_window_React_["createElement"]("span", {
      className: "".concat(prefixCls, "-content-item-text")
    }, renderedEl); // Show remove

    if (showRemove) {
      return /*#__PURE__*/external_window_React_["createElement"]("li", Object(esm_extends["a" /* default */])({}, liProps), labelNode, /*#__PURE__*/external_window_React_["createElement"](transButton, {
        disabled: disabled || item.disabled,
        className: "".concat(prefixCls, "-content-item-remove"),
        "aria-label": transferLocale.remove,
        onClick: function onClick() {
          onRemove === null || onRemove === void 0 ? void 0 : onRemove(item);
        }
      }, /*#__PURE__*/external_window_React_["createElement"](DeleteOutlined["a" /* default */], null)));
    } // Default click to select


    liProps.onClick = disabled || item.disabled ? undefined : function () {
      return onClick(item);
    };
    return /*#__PURE__*/external_window_React_["createElement"]("li", Object(esm_extends["a" /* default */])({}, liProps), /*#__PURE__*/external_window_React_["createElement"](es_checkbox["a" /* default */], {
      className: "".concat(prefixCls, "-checkbox"),
      checked: checked,
      disabled: disabled || item.disabled
    }), labelNode);
  });
};

/* harmony default export */ var transfer_ListItem = (/*#__PURE__*/external_window_React_["memo"](ListItem_ListItem));
// CONCATENATED MODULE: ./node_modules/antd/es/transfer/ListBody.js












var OmitProps = Object(type["a" /* tuple */])('handleFilter', 'handleClear', 'checkedKeys');

function parsePagination(pagination) {
  if (!pagination) {
    return null;
  }

  var defaultPagination = {
    pageSize: 10,
    simple: true,
    showSizeChanger: false,
    showLessItems: false
  };

  if (Object(esm_typeof["a" /* default */])(pagination) === 'object') {
    return Object(esm_extends["a" /* default */])(Object(esm_extends["a" /* default */])({}, defaultPagination), pagination);
  }

  return defaultPagination;
}

var ListBody_ListBody = /*#__PURE__*/function (_React$Component) {
  Object(inherits["a" /* default */])(ListBody, _React$Component);

  var _super = Object(createSuper["a" /* default */])(ListBody);

  function ListBody() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, ListBody);

    _this = _super.apply(this, arguments);
    _this.state = {
      current: 1
    };

    _this.onItemSelect = function (item) {
      var _this$props = _this.props,
          onItemSelect = _this$props.onItemSelect,
          selectedKeys = _this$props.selectedKeys;
      var checked = selectedKeys.indexOf(item.key) >= 0;
      onItemSelect(item.key, !checked);
    };

    _this.onItemRemove = function (item) {
      var onItemRemove = _this.props.onItemRemove;
      onItemRemove === null || onItemRemove === void 0 ? void 0 : onItemRemove([item.key]);
    };

    _this.onPageChange = function (current) {
      _this.setState({
        current: current
      });
    };

    _this.getItems = function () {
      var current = _this.state.current;
      var _this$props2 = _this.props,
          pagination = _this$props2.pagination,
          filteredRenderItems = _this$props2.filteredRenderItems;
      var mergedPagination = parsePagination(pagination);
      var displayItems = filteredRenderItems;

      if (mergedPagination) {
        displayItems = filteredRenderItems.slice((current - 1) * mergedPagination.pageSize, current * mergedPagination.pageSize);
      }

      return displayItems;
    };

    return _this;
  }

  Object(createClass["a" /* default */])(ListBody, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var current = this.state.current;
      var _this$props3 = this.props,
          prefixCls = _this$props3.prefixCls,
          onScroll = _this$props3.onScroll,
          filteredRenderItems = _this$props3.filteredRenderItems,
          selectedKeys = _this$props3.selectedKeys,
          globalDisabled = _this$props3.disabled,
          showRemove = _this$props3.showRemove,
          pagination = _this$props3.pagination;
      var mergedPagination = parsePagination(pagination);
      var paginationNode = null;

      if (mergedPagination) {
        paginationNode = /*#__PURE__*/external_window_React_["createElement"](es_pagination["a" /* default */], {
          simple: mergedPagination.simple,
          showSizeChanger: mergedPagination.showSizeChanger,
          showLessItems: mergedPagination.showLessItems,
          size: "small",
          disabled: globalDisabled,
          className: "".concat(prefixCls, "-pagination"),
          total: filteredRenderItems.length,
          pageSize: mergedPagination.pageSize,
          current: current,
          onChange: this.onPageChange
        });
      }

      return /*#__PURE__*/external_window_React_["createElement"](external_window_React_["Fragment"], null, /*#__PURE__*/external_window_React_["createElement"]("ul", {
        className: classnames_default()("".concat(prefixCls, "-content"), Object(defineProperty["a" /* default */])({}, "".concat(prefixCls, "-content-show-remove"), showRemove)),
        onScroll: onScroll
      }, this.getItems().map(function (_ref) {
        var renderedEl = _ref.renderedEl,
            renderedText = _ref.renderedText,
            item = _ref.item;
        var disabled = item.disabled;
        var checked = selectedKeys.indexOf(item.key) >= 0;
        return /*#__PURE__*/external_window_React_["createElement"](transfer_ListItem, {
          disabled: globalDisabled || disabled,
          key: item.key,
          item: item,
          renderedText: renderedText,
          renderedEl: renderedEl,
          checked: checked,
          prefixCls: prefixCls,
          onClick: _this2.onItemSelect,
          onRemove: _this2.onItemRemove,
          showRemove: showRemove
        });
      })), paginationNode);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref2, _ref3) {
      var filteredRenderItems = _ref2.filteredRenderItems,
          pagination = _ref2.pagination;
      var current = _ref3.current;
      var mergedPagination = parsePagination(pagination);

      if (mergedPagination) {
        // Calculate the page number
        var maxPageCount = Math.ceil(filteredRenderItems.length / mergedPagination.pageSize);

        if (current > maxPageCount) {
          return {
            current: maxPageCount
          };
        }
      }

      return null;
    }
  }]);

  return ListBody;
}(external_window_React_["Component"]);

/* harmony default export */ var transfer_ListBody = (ListBody_ListBody);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/SearchOutlined.js + 1 modules
var SearchOutlined = __webpack_require__("l+S1");

// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 16 modules
var input = __webpack_require__("5rEg");

// CONCATENATED MODULE: ./node_modules/antd/es/transfer/search.js



function Search(props) {
  var _props$placeholder = props.placeholder,
      placeholder = _props$placeholder === void 0 ? '' : _props$placeholder,
      value = props.value,
      prefixCls = props.prefixCls,
      disabled = props.disabled,
      onChange = props.onChange,
      handleClear = props.handleClear;
  var handleChange = external_window_React_["useCallback"](function (e) {
    onChange === null || onChange === void 0 ? void 0 : onChange(e);

    if (e.target.value === '') {
      handleClear === null || handleClear === void 0 ? void 0 : handleClear();
    }
  }, [onChange]);
  return /*#__PURE__*/external_window_React_["createElement"](input["a" /* default */], {
    placeholder: placeholder,
    className: prefixCls,
    value: value,
    onChange: handleChange,
    disabled: disabled,
    allowClear: true,
    prefix: /*#__PURE__*/external_window_React_["createElement"](SearchOutlined["a" /* default */], null)
  });
}
// CONCATENATED MODULE: ./node_modules/antd/es/transfer/list.js

















var defaultRender = function defaultRender() {
  return null;
};

function isRenderResultPlainObject(result) {
  return !!(result && !Object(reactNode["c" /* isValidElement */])(result) && Object.prototype.toString.call(result) === '[object Object]');
}

function getEnabledItemKeys(items) {
  return items.filter(function (data) {
    return !data.disabled;
  }).map(function (data) {
    return data.key;
  });
}

var list_TransferList = /*#__PURE__*/function (_React$PureComponent) {
  Object(inherits["a" /* default */])(TransferList, _React$PureComponent);

  var _super = Object(createSuper["a" /* default */])(TransferList);

  function TransferList(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, TransferList);

    _this = _super.call(this, props);
    _this.defaultListBodyRef = /*#__PURE__*/external_window_React_["createRef"](); // =============================== Filter ===============================

    _this.handleFilter = function (e) {
      var handleFilter = _this.props.handleFilter;
      var filterValue = e.target.value;

      _this.setState({
        filterValue: filterValue
      });

      handleFilter(e);
    };

    _this.handleClear = function () {
      var handleClear = _this.props.handleClear;

      _this.setState({
        filterValue: ''
      });

      handleClear();
    };

    _this.matchFilter = function (text, item) {
      var filterValue = _this.state.filterValue;
      var filterOption = _this.props.filterOption;

      if (filterOption) {
        return filterOption(filterValue, item);
      }

      return text.indexOf(filterValue) >= 0;
    }; // =============================== Render ===============================


    _this.renderListBody = function (renderList, props) {
      var bodyContent = renderList ? renderList(props) : null;
      var customize = !!bodyContent;

      if (!customize) {
        bodyContent = /*#__PURE__*/external_window_React_["createElement"](transfer_ListBody, Object(esm_extends["a" /* default */])({
          ref: _this.defaultListBodyRef
        }, props));
      }

      return {
        customize: customize,
        bodyContent: bodyContent
      };
    };

    _this.renderItem = function (item) {
      var _this$props$render = _this.props.render,
          render = _this$props$render === void 0 ? defaultRender : _this$props$render;
      var renderResult = render(item);
      var isRenderResultPlain = isRenderResultPlainObject(renderResult);
      return {
        renderedText: isRenderResultPlain ? renderResult.value : renderResult,
        renderedEl: isRenderResultPlain ? renderResult.label : renderResult,
        item: item
      };
    };

    _this.getSelectAllLabel = function (selectedCount, totalCount) {
      var _this$props = _this.props,
          itemsUnit = _this$props.itemsUnit,
          itemUnit = _this$props.itemUnit,
          selectAllLabel = _this$props.selectAllLabel;

      if (selectAllLabel) {
        return typeof selectAllLabel === 'function' ? selectAllLabel({
          selectedCount: selectedCount,
          totalCount: totalCount
        }) : selectAllLabel;
      }

      var unit = totalCount > 1 ? itemsUnit : itemUnit;
      return /*#__PURE__*/external_window_React_["createElement"](external_window_React_["Fragment"], null, (selectedCount > 0 ? "".concat(selectedCount, "/") : '') + totalCount, " ", unit);
    };

    _this.state = {
      filterValue: ''
    };
    return _this;
  }

  Object(createClass["a" /* default */])(TransferList, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.triggerScrollTimer);
    }
  }, {
    key: "getCheckStatus",
    value: function getCheckStatus(filteredItems) {
      var checkedKeys = this.props.checkedKeys;

      if (checkedKeys.length === 0) {
        return 'none';
      }

      if (filteredItems.every(function (item) {
        return checkedKeys.indexOf(item.key) >= 0 || !!item.disabled;
      })) {
        return 'all';
      }

      return 'part';
    } // ================================ Item ================================

  }, {
    key: "getFilteredItems",
    value: function getFilteredItems(dataSource, filterValue) {
      var _this2 = this;

      var filteredItems = [];
      var filteredRenderItems = [];
      dataSource.forEach(function (item) {
        var renderedItem = _this2.renderItem(item);

        var renderedText = renderedItem.renderedText; // Filter skip

        if (filterValue && !_this2.matchFilter(renderedText, item)) {
          return null;
        }

        filteredItems.push(item);
        filteredRenderItems.push(renderedItem);
      });
      return {
        filteredItems: filteredItems,
        filteredRenderItems: filteredRenderItems
      };
    }
  }, {
    key: "getListBody",
    value: function getListBody(prefixCls, searchPlaceholder, filterValue, filteredItems, notFoundContent, filteredRenderItems, checkedKeys, renderList, showSearch, disabled) {
      var _this3 = this;

      var search = showSearch ? /*#__PURE__*/external_window_React_["createElement"]("div", {
        className: "".concat(prefixCls, "-body-search-wrapper")
      }, /*#__PURE__*/external_window_React_["createElement"](Search, {
        prefixCls: "".concat(prefixCls, "-search"),
        onChange: this.handleFilter,
        handleClear: this.handleClear,
        placeholder: searchPlaceholder,
        value: filterValue,
        disabled: disabled
      })) : null;

      var _this$renderListBody = this.renderListBody(renderList, Object(esm_extends["a" /* default */])(Object(esm_extends["a" /* default */])({}, Object(omit["a" /* default */])(this.props, OmitProps)), {
        filteredItems: filteredItems,
        filteredRenderItems: filteredRenderItems,
        selectedKeys: checkedKeys
      })),
          bodyContent = _this$renderListBody.bodyContent,
          customize = _this$renderListBody.customize;

      var getNotFoundContent = function getNotFoundContent() {
        var contentIndex = _this3.props.direction === 'left' ? 0 : 1;
        return Array.isArray(notFoundContent) ? notFoundContent[contentIndex] : notFoundContent;
      };

      var bodyNode; // We should wrap customize list body in a classNamed div to use flex layout.

      if (customize) {
        bodyNode = /*#__PURE__*/external_window_React_["createElement"]("div", {
          className: "".concat(prefixCls, "-body-customize-wrapper")
        }, bodyContent);
      } else {
        bodyNode = filteredItems.length ? bodyContent : /*#__PURE__*/external_window_React_["createElement"]("div", {
          className: "".concat(prefixCls, "-body-not-found")
        }, getNotFoundContent());
      }

      return /*#__PURE__*/external_window_React_["createElement"]("div", {
        className: classnames_default()(showSearch ? "".concat(prefixCls, "-body ").concat(prefixCls, "-body-with-search") : "".concat(prefixCls, "-body"))
      }, search, bodyNode);
    }
  }, {
    key: "getCheckBox",
    value: function getCheckBox(_ref) {
      var filteredItems = _ref.filteredItems,
          onItemSelectAll = _ref.onItemSelectAll,
          disabled = _ref.disabled,
          prefixCls = _ref.prefixCls;
      var checkStatus = this.getCheckStatus(filteredItems);
      var checkedAll = checkStatus === 'all';
      var checkAllCheckbox = /*#__PURE__*/external_window_React_["createElement"](es_checkbox["a" /* default */], {
        disabled: disabled,
        checked: checkedAll,
        indeterminate: checkStatus === 'part',
        className: "".concat(prefixCls, "-checkbox"),
        onChange: function onChange() {
          // Only select enabled items
          onItemSelectAll(filteredItems.filter(function (item) {
            return !item.disabled;
          }).map(function (_ref2) {
            var key = _ref2.key;
            return key;
          }), !checkedAll);
        }
      });
      return checkAllCheckbox;
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames,
          _this4 = this;

      var filterValue = this.state.filterValue;
      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          dataSource = _this$props2.dataSource,
          titleText = _this$props2.titleText,
          checkedKeys = _this$props2.checkedKeys,
          disabled = _this$props2.disabled,
          footer = _this$props2.footer,
          showSearch = _this$props2.showSearch,
          style = _this$props2.style,
          searchPlaceholder = _this$props2.searchPlaceholder,
          notFoundContent = _this$props2.notFoundContent,
          selectAll = _this$props2.selectAll,
          selectCurrent = _this$props2.selectCurrent,
          selectInvert = _this$props2.selectInvert,
          removeAll = _this$props2.removeAll,
          removeCurrent = _this$props2.removeCurrent,
          renderList = _this$props2.renderList,
          onItemSelectAll = _this$props2.onItemSelectAll,
          onItemRemove = _this$props2.onItemRemove,
          _this$props2$showSele = _this$props2.showSelectAll,
          showSelectAll = _this$props2$showSele === void 0 ? true : _this$props2$showSele,
          showRemove = _this$props2.showRemove,
          pagination = _this$props2.pagination,
          direction = _this$props2.direction; // Custom Layout

      var footerDom = footer && (footer.length < 2 ? footer(this.props) : footer(this.props, {
        direction: direction
      }));
      var listCls = classnames_default()(prefixCls, (_classNames = {}, Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-with-pagination"), !!pagination), Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-with-footer"), !!footerDom), _classNames)); // ====================== Get filtered, checked item list ======================

      var _this$getFilteredItem = this.getFilteredItems(dataSource, filterValue),
          filteredItems = _this$getFilteredItem.filteredItems,
          filteredRenderItems = _this$getFilteredItem.filteredRenderItems; // ================================= List Body =================================


      var listBody = this.getListBody(prefixCls, searchPlaceholder, filterValue, filteredItems, notFoundContent, filteredRenderItems, checkedKeys, renderList, showSearch, disabled); // ================================ List Footer ================================

      var listFooter = footerDom ? /*#__PURE__*/external_window_React_["createElement"]("div", {
        className: "".concat(prefixCls, "-footer")
      }, footerDom) : null;
      var checkAllCheckbox = !showRemove && !pagination && this.getCheckBox({
        filteredItems: filteredItems,
        onItemSelectAll: onItemSelectAll,
        disabled: disabled,
        prefixCls: prefixCls
      });
      var menu = null;

      if (showRemove) {
        var items = [
        /* Remove Current Page */
        pagination ? {
          key: 'removeCurrent',
          onClick: function onClick() {
            var _a;

            var pageKeys = getEnabledItemKeys((((_a = _this4.defaultListBodyRef.current) === null || _a === void 0 ? void 0 : _a.getItems()) || []).map(function (entity) {
              return entity.item;
            }));
            onItemRemove === null || onItemRemove === void 0 ? void 0 : onItemRemove(pageKeys);
          },
          label: removeCurrent
        } : null,
        /* Remove All */
        {
          key: 'removeAll',
          onClick: function onClick() {
            onItemRemove === null || onItemRemove === void 0 ? void 0 : onItemRemove(getEnabledItemKeys(filteredItems));
          },
          label: removeAll
        }].filter(function (item) {
          return item;
        });
        menu = /*#__PURE__*/external_window_React_["createElement"](es_menu["a" /* default */], {
          items: items
        });
      } else {
        var _items = [{
          key: 'selectAll',
          onClick: function onClick() {
            var keys = getEnabledItemKeys(filteredItems);
            onItemSelectAll(keys, keys.length !== checkedKeys.length);
          },
          label: selectAll
        }, pagination ? {
          key: 'selectCurrent',
          onClick: function onClick() {
            var _a;

            var pageItems = ((_a = _this4.defaultListBodyRef.current) === null || _a === void 0 ? void 0 : _a.getItems()) || [];
            onItemSelectAll(getEnabledItemKeys(pageItems.map(function (entity) {
              return entity.item;
            })), true);
          },
          label: selectCurrent
        } : null, {
          key: 'selectInvert',
          onClick: function onClick() {
            var _a;

            var availableKeys;

            if (pagination) {
              availableKeys = getEnabledItemKeys((((_a = _this4.defaultListBodyRef.current) === null || _a === void 0 ? void 0 : _a.getItems()) || []).map(function (entity) {
                return entity.item;
              }));
            } else {
              availableKeys = getEnabledItemKeys(filteredItems);
            }

            var checkedKeySet = new Set(checkedKeys);
            var newCheckedKeys = [];
            var newUnCheckedKeys = [];
            availableKeys.forEach(function (key) {
              if (checkedKeySet.has(key)) {
                newUnCheckedKeys.push(key);
              } else {
                newCheckedKeys.push(key);
              }
            });
            onItemSelectAll(newCheckedKeys, true);
            onItemSelectAll(newUnCheckedKeys, false);
          },
          label: selectInvert
        }];
        menu = /*#__PURE__*/external_window_React_["createElement"](es_menu["a" /* default */], {
          items: _items
        });
      }

      var dropdown = /*#__PURE__*/external_window_React_["createElement"](es_dropdown["a" /* default */], {
        className: "".concat(prefixCls, "-header-dropdown"),
        overlay: menu,
        disabled: disabled
      }, /*#__PURE__*/external_window_React_["createElement"](DownOutlined["a" /* default */], null)); // ================================== Render ===================================

      return /*#__PURE__*/external_window_React_["createElement"]("div", {
        className: listCls,
        style: style
      }, /*#__PURE__*/external_window_React_["createElement"]("div", {
        className: "".concat(prefixCls, "-header")
      }, showSelectAll ? /*#__PURE__*/external_window_React_["createElement"](external_window_React_["Fragment"], null, checkAllCheckbox, dropdown) : null, /*#__PURE__*/external_window_React_["createElement"]("span", {
        className: "".concat(prefixCls, "-header-selected")
      }, this.getSelectAllLabel(checkedKeys.length, filteredItems.length)), /*#__PURE__*/external_window_React_["createElement"]("span", {
        className: "".concat(prefixCls, "-header-title")
      }, titleText)), listBody, listFooter);
    }
  }]);

  return TransferList;
}(external_window_React_["PureComponent"]);


list_TransferList.defaultProps = {
  dataSource: [],
  titleText: '',
  showSearch: false
};
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/LeftOutlined.js + 1 modules
var LeftOutlined = __webpack_require__("5bA4");

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/RightOutlined.js + 1 modules
var RightOutlined = __webpack_require__("UESt");

// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__("2/Rp");

// CONCATENATED MODULE: ./node_modules/antd/es/transfer/operation.js





var operation_Operation = function Operation(_ref) {
  var disabled = _ref.disabled,
      moveToLeft = _ref.moveToLeft,
      moveToRight = _ref.moveToRight,
      _ref$leftArrowText = _ref.leftArrowText,
      leftArrowText = _ref$leftArrowText === void 0 ? '' : _ref$leftArrowText,
      _ref$rightArrowText = _ref.rightArrowText,
      rightArrowText = _ref$rightArrowText === void 0 ? '' : _ref$rightArrowText,
      leftActive = _ref.leftActive,
      rightActive = _ref.rightActive,
      className = _ref.className,
      style = _ref.style,
      direction = _ref.direction,
      oneWay = _ref.oneWay;
  return /*#__PURE__*/external_window_React_["createElement"]("div", {
    className: className,
    style: style
  }, /*#__PURE__*/external_window_React_["createElement"](es_button["a" /* default */], {
    type: "primary",
    size: "small",
    disabled: disabled || !rightActive,
    onClick: moveToRight,
    icon: direction !== 'rtl' ? /*#__PURE__*/external_window_React_["createElement"](RightOutlined["a" /* default */], null) : /*#__PURE__*/external_window_React_["createElement"](LeftOutlined["a" /* default */], null)
  }, rightArrowText), !oneWay && /*#__PURE__*/external_window_React_["createElement"](es_button["a" /* default */], {
    type: "primary",
    size: "small",
    disabled: disabled || !leftActive,
    onClick: moveToLeft,
    icon: direction !== 'rtl' ? /*#__PURE__*/external_window_React_["createElement"](LeftOutlined["a" /* default */], null) : /*#__PURE__*/external_window_React_["createElement"](RightOutlined["a" /* default */], null)
  }, leftArrowText));
};

/* harmony default export */ var operation = (operation_Operation);
// CONCATENATED MODULE: ./node_modules/antd/es/transfer/index.js




















var transfer_Transfer = /*#__PURE__*/function (_React$Component) {
  Object(inherits["a" /* default */])(Transfer, _React$Component);

  var _super = Object(createSuper["a" /* default */])(Transfer);

  function Transfer(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Transfer);

    _this = _super.call(this, props);
    _this.separatedDataSource = null;

    _this.setStateKeys = function (direction, keys) {
      if (direction === 'left') {
        _this.setState(function (_ref) {
          var sourceSelectedKeys = _ref.sourceSelectedKeys;
          return {
            sourceSelectedKeys: typeof keys === 'function' ? keys(sourceSelectedKeys || []) : keys
          };
        });
      } else {
        _this.setState(function (_ref2) {
          var targetSelectedKeys = _ref2.targetSelectedKeys;
          return {
            targetSelectedKeys: typeof keys === 'function' ? keys(targetSelectedKeys || []) : keys
          };
        });
      }
    };

    _this.getLocale = function (transferLocale, renderEmpty) {
      return Object(esm_extends["a" /* default */])(Object(esm_extends["a" /* default */])(Object(esm_extends["a" /* default */])({}, transferLocale), {
        notFoundContent: renderEmpty('Transfer')
      }), _this.props.locale);
    };

    _this.moveTo = function (direction) {
      var _this$props = _this.props,
          _this$props$targetKey = _this$props.targetKeys,
          targetKeys = _this$props$targetKey === void 0 ? [] : _this$props$targetKey,
          _this$props$dataSourc = _this$props.dataSource,
          dataSource = _this$props$dataSourc === void 0 ? [] : _this$props$dataSourc,
          onChange = _this$props.onChange;
      var _this$state = _this.state,
          sourceSelectedKeys = _this$state.sourceSelectedKeys,
          targetSelectedKeys = _this$state.targetSelectedKeys;
      var moveKeys = direction === 'right' ? sourceSelectedKeys : targetSelectedKeys; // filter the disabled options

      var newMoveKeys = moveKeys.filter(function (key) {
        return !dataSource.some(function (data) {
          return !!(key === data.key && data.disabled);
        });
      }); // move items to target box

      var newTargetKeys = direction === 'right' ? newMoveKeys.concat(targetKeys) : targetKeys.filter(function (targetKey) {
        return newMoveKeys.indexOf(targetKey) === -1;
      }); // empty checked keys

      var oppositeDirection = direction === 'right' ? 'left' : 'right';

      _this.setStateKeys(oppositeDirection, []);

      _this.handleSelectChange(oppositeDirection, []);

      onChange === null || onChange === void 0 ? void 0 : onChange(newTargetKeys, direction, newMoveKeys);
    };

    _this.moveToLeft = function () {
      return _this.moveTo('left');
    };

    _this.moveToRight = function () {
      return _this.moveTo('right');
    };

    _this.onItemSelectAll = function (direction, selectedKeys, checkAll) {
      _this.setStateKeys(direction, function (prevKeys) {
        var mergedCheckedKeys = [];

        if (checkAll) {
          // Merge current keys with origin key
          mergedCheckedKeys = Array.from(new Set([].concat(Object(toConsumableArray["a" /* default */])(prevKeys), Object(toConsumableArray["a" /* default */])(selectedKeys))));
        } else {
          // Remove current keys from origin keys
          mergedCheckedKeys = prevKeys.filter(function (key) {
            return selectedKeys.indexOf(key) === -1;
          });
        }

        _this.handleSelectChange(direction, mergedCheckedKeys);

        return mergedCheckedKeys;
      });
    };

    _this.onLeftItemSelectAll = function (selectedKeys, checkAll) {
      return _this.onItemSelectAll('left', selectedKeys, checkAll);
    };

    _this.onRightItemSelectAll = function (selectedKeys, checkAll) {
      return _this.onItemSelectAll('right', selectedKeys, checkAll);
    };

    _this.handleFilter = function (direction, e) {
      var onSearch = _this.props.onSearch;
      var value = e.target.value;
      onSearch === null || onSearch === void 0 ? void 0 : onSearch(direction, value);
    };

    _this.handleLeftFilter = function (e) {
      return _this.handleFilter('left', e);
    };

    _this.handleRightFilter = function (e) {
      return _this.handleFilter('right', e);
    };

    _this.handleClear = function (direction) {
      var onSearch = _this.props.onSearch;
      onSearch === null || onSearch === void 0 ? void 0 : onSearch(direction, '');
    };

    _this.handleLeftClear = function () {
      return _this.handleClear('left');
    };

    _this.handleRightClear = function () {
      return _this.handleClear('right');
    };

    _this.onItemSelect = function (direction, selectedKey, checked) {
      var _this$state2 = _this.state,
          sourceSelectedKeys = _this$state2.sourceSelectedKeys,
          targetSelectedKeys = _this$state2.targetSelectedKeys;
      var holder = direction === 'left' ? Object(toConsumableArray["a" /* default */])(sourceSelectedKeys) : Object(toConsumableArray["a" /* default */])(targetSelectedKeys);
      var index = holder.indexOf(selectedKey);

      if (index > -1) {
        holder.splice(index, 1);
      }

      if (checked) {
        holder.push(selectedKey);
      }

      _this.handleSelectChange(direction, holder);

      if (!_this.props.selectedKeys) {
        _this.setStateKeys(direction, holder);
      }
    };

    _this.onLeftItemSelect = function (selectedKey, checked) {
      return _this.onItemSelect('left', selectedKey, checked);
    };

    _this.onRightItemSelect = function (selectedKey, checked) {
      return _this.onItemSelect('right', selectedKey, checked);
    };

    _this.onRightItemRemove = function (selectedKeys) {
      var _this$props2 = _this.props,
          _this$props2$targetKe = _this$props2.targetKeys,
          targetKeys = _this$props2$targetKe === void 0 ? [] : _this$props2$targetKe,
          onChange = _this$props2.onChange;

      _this.setStateKeys('right', []);

      onChange === null || onChange === void 0 ? void 0 : onChange(targetKeys.filter(function (key) {
        return !selectedKeys.includes(key);
      }), 'left', Object(toConsumableArray["a" /* default */])(selectedKeys));
    };

    _this.handleScroll = function (direction, e) {
      var onScroll = _this.props.onScroll;
      onScroll === null || onScroll === void 0 ? void 0 : onScroll(direction, e);
    };

    _this.handleLeftScroll = function (e) {
      return _this.handleScroll('left', e);
    };

    _this.handleRightScroll = function (e) {
      return _this.handleScroll('right', e);
    }; // eslint-disable-next-line class-methods-use-this


    _this.handleListStyle = function (listStyle, direction) {
      if (typeof listStyle === 'function') {
        return listStyle({
          direction: direction
        });
      }

      return listStyle;
    };

    _this.renderTransfer = function (transferLocale) {
      return /*#__PURE__*/external_window_React_["createElement"](context["a" /* ConfigConsumer */], null, function (_ref3) {
        var getPrefixCls = _ref3.getPrefixCls,
            renderEmpty = _ref3.renderEmpty,
            direction = _ref3.direction;
        return /*#__PURE__*/external_window_React_["createElement"](form_context["b" /* FormItemInputContext */].Consumer, null, function (_ref4) {
          var _classNames;

          var hasFeedback = _ref4.hasFeedback,
              contextStatus = _ref4.status;
          var _this$props3 = _this.props,
              customizePrefixCls = _this$props3.prefixCls,
              className = _this$props3.className,
              disabled = _this$props3.disabled,
              _this$props3$operatio = _this$props3.operations,
              operations = _this$props3$operatio === void 0 ? [] : _this$props3$operatio,
              showSearch = _this$props3.showSearch,
              footer = _this$props3.footer,
              style = _this$props3.style,
              listStyle = _this$props3.listStyle,
              operationStyle = _this$props3.operationStyle,
              filterOption = _this$props3.filterOption,
              render = _this$props3.render,
              children = _this$props3.children,
              showSelectAll = _this$props3.showSelectAll,
              oneWay = _this$props3.oneWay,
              pagination = _this$props3.pagination,
              customStatus = _this$props3.status;
          var prefixCls = getPrefixCls('transfer', customizePrefixCls);

          var locale = _this.getLocale(transferLocale, renderEmpty || defaultRenderEmpty["a" /* default */]);

          var _this$state3 = _this.state,
              sourceSelectedKeys = _this$state3.sourceSelectedKeys,
              targetSelectedKeys = _this$state3.targetSelectedKeys;
          var mergedStatus = Object(statusUtils["a" /* getMergedStatus */])(contextStatus, customStatus);
          var mergedPagination = !children && pagination;

          var _this$separateDataSou = _this.separateDataSource(),
              leftDataSource = _this$separateDataSou.leftDataSource,
              rightDataSource = _this$separateDataSou.rightDataSource;

          var leftActive = targetSelectedKeys.length > 0;
          var rightActive = sourceSelectedKeys.length > 0;
          var cls = classnames_default()(prefixCls, (_classNames = {}, Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-disabled"), disabled), Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-customize-list"), !!children), Object(defineProperty["a" /* default */])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), Object(statusUtils["b" /* getStatusClassNames */])(prefixCls, mergedStatus, hasFeedback), className);

          var titles = _this.getTitles(locale);

          var selectAllLabels = _this.props.selectAllLabels || [];
          return /*#__PURE__*/external_window_React_["createElement"]("div", {
            className: cls,
            style: style
          }, /*#__PURE__*/external_window_React_["createElement"](list_TransferList, Object(esm_extends["a" /* default */])({
            prefixCls: "".concat(prefixCls, "-list"),
            titleText: titles[0],
            dataSource: leftDataSource,
            filterOption: filterOption,
            style: _this.handleListStyle(listStyle, 'left'),
            checkedKeys: sourceSelectedKeys,
            handleFilter: _this.handleLeftFilter,
            handleClear: _this.handleLeftClear,
            onItemSelect: _this.onLeftItemSelect,
            onItemSelectAll: _this.onLeftItemSelectAll,
            render: render,
            showSearch: showSearch,
            renderList: children,
            footer: footer,
            onScroll: _this.handleLeftScroll,
            disabled: disabled,
            direction: direction === 'rtl' ? 'right' : 'left',
            showSelectAll: showSelectAll,
            selectAllLabel: selectAllLabels[0],
            pagination: mergedPagination
          }, locale)), /*#__PURE__*/external_window_React_["createElement"](operation, {
            className: "".concat(prefixCls, "-operation"),
            rightActive: rightActive,
            rightArrowText: operations[0],
            moveToRight: _this.moveToRight,
            leftActive: leftActive,
            leftArrowText: operations[1],
            moveToLeft: _this.moveToLeft,
            style: operationStyle,
            disabled: disabled,
            direction: direction,
            oneWay: oneWay
          }), /*#__PURE__*/external_window_React_["createElement"](list_TransferList, Object(esm_extends["a" /* default */])({
            prefixCls: "".concat(prefixCls, "-list"),
            titleText: titles[1],
            dataSource: rightDataSource,
            filterOption: filterOption,
            style: _this.handleListStyle(listStyle, 'right'),
            checkedKeys: targetSelectedKeys,
            handleFilter: _this.handleRightFilter,
            handleClear: _this.handleRightClear,
            onItemSelect: _this.onRightItemSelect,
            onItemSelectAll: _this.onRightItemSelectAll,
            onItemRemove: _this.onRightItemRemove,
            render: render,
            showSearch: showSearch,
            renderList: children,
            footer: footer,
            onScroll: _this.handleRightScroll,
            disabled: disabled,
            direction: direction === 'rtl' ? 'left' : 'right',
            showSelectAll: showSelectAll,
            selectAllLabel: selectAllLabels[1],
            showRemove: oneWay,
            pagination: mergedPagination
          }, locale)));
        });
      });
    };

    var _props$selectedKeys = props.selectedKeys,
        selectedKeys = _props$selectedKeys === void 0 ? [] : _props$selectedKeys,
        _props$targetKeys = props.targetKeys,
        targetKeys = _props$targetKeys === void 0 ? [] : _props$targetKeys;
    _this.state = {
      sourceSelectedKeys: selectedKeys.filter(function (key) {
        return targetKeys.indexOf(key) === -1;
      }),
      targetSelectedKeys: selectedKeys.filter(function (key) {
        return targetKeys.indexOf(key) > -1;
      })
    };
    return _this;
  }

  Object(createClass["a" /* default */])(Transfer, [{
    key: "getTitles",
    value: function getTitles(transferLocale) {
      var _a;

      return (_a = this.props.titles) !== null && _a !== void 0 ? _a : transferLocale.titles;
    }
  }, {
    key: "handleSelectChange",
    value: function handleSelectChange(direction, holder) {
      var _this$state4 = this.state,
          sourceSelectedKeys = _this$state4.sourceSelectedKeys,
          targetSelectedKeys = _this$state4.targetSelectedKeys;
      var onSelectChange = this.props.onSelectChange;

      if (!onSelectChange) {
        return;
      }

      if (direction === 'left') {
        onSelectChange(holder, targetSelectedKeys);
      } else {
        onSelectChange(sourceSelectedKeys, holder);
      }
    }
  }, {
    key: "separateDataSource",
    value: function separateDataSource() {
      var _this$props4 = this.props,
          dataSource = _this$props4.dataSource,
          rowKey = _this$props4.rowKey,
          _this$props4$targetKe = _this$props4.targetKeys,
          targetKeys = _this$props4$targetKe === void 0 ? [] : _this$props4$targetKe;
      var leftDataSource = [];
      var rightDataSource = new Array(targetKeys.length);
      dataSource.forEach(function (record) {
        if (rowKey) {
          record = Object(esm_extends["a" /* default */])(Object(esm_extends["a" /* default */])({}, record), {
            key: rowKey(record)
          });
        } // rightDataSource should be ordered by targetKeys
        // leftDataSource should be ordered by dataSource


        var indexOfKey = targetKeys.indexOf(record.key);

        if (indexOfKey !== -1) {
          rightDataSource[indexOfKey] = record;
        } else {
          leftDataSource.push(record);
        }
      });
      return {
        leftDataSource: leftDataSource,
        rightDataSource: rightDataSource
      };
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_window_React_["createElement"](LocaleReceiver["a" /* default */], {
        componentName: "Transfer",
        defaultLocale: locale_default["a" /* default */].Transfer
      }, this.renderTransfer);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref5) {
      var selectedKeys = _ref5.selectedKeys,
          targetKeys = _ref5.targetKeys,
          pagination = _ref5.pagination,
          children = _ref5.children;

      if (selectedKeys) {
        var mergedTargetKeys = targetKeys || [];
        return {
          sourceSelectedKeys: selectedKeys.filter(function (key) {
            return !mergedTargetKeys.includes(key);
          }),
          targetSelectedKeys: selectedKeys.filter(function (key) {
            return mergedTargetKeys.includes(key);
          })
        };
      }

       false ? undefined : void 0;
      return null;
    }
  }]);

  return Transfer;
}(external_window_React_["Component"]); // For high-level customized Transfer @dqaria


transfer_Transfer.List = list_TransferList;
transfer_Transfer.Operation = operation;
transfer_Transfer.Search = Search;
transfer_Transfer.defaultProps = {
  dataSource: [],
  locale: {},
  showSearch: false,
  listStyle: function listStyle() {}
};
/* harmony default export */ var transfer = __webpack_exports__["a"] = (transfer_Transfer);

//# sourceURL=webpack:///./node_modules/antd/es/transfer/index.js_+_6_modules?`)},mDOk:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_card_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("IzEo");
/* harmony import */ var antd_es_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("bx4M");
/* harmony import */ var antd_es_button_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("+L6B");
/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("2/Rp");
/* harmony import */ var _Users_eternallycyf_Documents_GitHub_case_my_demo_markdown_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("tJVT");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("0i/h");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_6__);








const D3 = () => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([//\u8282\u70B9\u96C6
  {
    name: '\u6E56\u5357\u90B5\u9633'
  }, {
    name: '\u5C71\u4E1C\u83B1\u5DDE'
  }, {
    name: '\u5E7F\u4E1C\u9633\u6C5F'
  }, {
    name: '\u5C71\u4E1C\u67A3\u5E84'
  }, {
    name: '\u6CFD'
  }, {
    name: '\u6052'
  }, {
    name: '\u946B'
  }, {
    name: '\u660E\u5C71'
  }, {
    name: '\u73ED\u957F'
  }]),
        _useState2 = Object(_Users_eternallycyf_Documents_GitHub_case_my_demo_markdown_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
        dataset = _useState2[0],
        setDataset = _useState2[1];

  var nodes = [//\u8282\u70B9\u96C6
  {
    name: '\u6E56\u5357\u90B5\u9633'
  }, {
    name: '\u5C71\u4E1C\u83B1\u5DDE'
  }, {
    name: '\u5E7F\u4E1C\u9633\u6C5F'
  }, {
    name: '\u5C71\u4E1C\u67A3\u5E84'
  }, {
    name: '\u6CFD'
  }, {
    name: '\u6052'
  }, {
    name: '\u946B'
  }, {
    name: '\u660E\u5C71'
  }, {
    name: '\u73ED\u957F'
  }];
  var edges = [//\u8FB9\u96C6
  {
    source: 0,
    target: 4,
    relation: '\u7C4D\u8D2F',
    value: 1.3
  }, {
    source: 4,
    target: 5,
    relation: '\u820D\u53CB',
    value: 1
  }, {
    source: 4,
    target: 6,
    relation: '\u820D\u53CB',
    value: 1
  }, {
    source: 4,
    target: 7,
    relation: '\u820D\u53CB',
    value: 1
  }, {
    source: 1,
    target: 6,
    relation: '\u7C4D\u8D2F',
    value: 2
  }, {
    source: 2,
    target: 5,
    relation: '\u7C4D\u8D2F',
    value: 0.9
  }, {
    source: 3,
    target: 7,
    relation: '\u7C4D\u8D2F',
    value: 1
  }, {
    source: 5,
    target: 6,
    relation: '\u540C\u5B66',
    value: 1.6
  }, {
    source: 6,
    target: 7,
    relation: '\u670B\u53CB',
    value: 0.7
  }, {
    source: 6,
    target: 8,
    relation: '\u804C\u8D23',
    value: 2
  }];

  const handleInitChart = () => {
    let body = d3__WEBPACK_IMPORTED_MODULE_6__["select"]('body');
    let marge = {
      top: 30,
      bottom: 30,
      left: 30,
      right: 30
    };
    let svg = body.select('#mainsvg3');
    var width = svg.attr('width'); //\u5F97\u5230\u753B\u5E03\u7684\u5BBD

    var height = svg.attr('height'); //\u5F97\u5230\u753B\u5E03\u7684\u957F

    var g = svg.append('g').attr('transform', 'translate(' + marge.top + ',' + marge.left + ')'); //\u8BBE\u7F6E\u4E00\u4E2Acolor\u7684\u989C\u8272\u6BD4\u4F8B\u5C3A\uFF0C\u4E3A\u4E86\u8BA9\u4E0D\u540C\u7684\u6247\u5F62\u5448\u73B0\u4E0D\u540C\u7684\u989C\u8272

    var colorScale = d3__WEBPACK_IMPORTED_MODULE_6__["scaleOrdinal"]().domain(d3__WEBPACK_IMPORTED_MODULE_6__["range"](nodes.length)).range(d3__WEBPACK_IMPORTED_MODULE_6__["schemeCategory10"]);
    var forceSimulation = d3__WEBPACK_IMPORTED_MODULE_6__["forceSimulation"]().force('link', d3__WEBPACK_IMPORTED_MODULE_6__["forceLink"]()).force('charge', d3__WEBPACK_IMPORTED_MODULE_6__["forceManyBody"]()).force('center', d3__WEBPACK_IMPORTED_MODULE_6__["forceCenter"]()); //\u751F\u6210\u8282\u70B9\u6570\u636E

    forceSimulation.nodes(nodes).on('tick', ticked); //\u8FD9\u4E2A\u51FD\u6570\u5F88\u91CD\u8981\uFF0C\u540E\u9762\u7ED9\u51FA\u5177\u4F53\u5B9E\u73B0\u548C\u8BF4\u660E
    //\u751F\u6210\u8FB9\u6570\u636E

    forceSimulation.force('link').links(edges).distance(function (d) {
      //\u6BCF\u4E00\u8FB9\u7684\u957F\u5EA6
      return d.value * 100;
    }); //\u8BBE\u7F6E\u56FE\u5F62\u7684\u4E2D\u5FC3\u4F4D\u7F6E

    forceSimulation.force('center').x(width / 2).y(height / 2); //\u5728\u6D4F\u89C8\u5668\u7684\u63A7\u5236\u53F0\u8F93\u51FA

    console.log(nodes);
    console.log(edges); //\u7ED8\u5236\u8FB9

    var links = g.append('g').selectAll('line').data(edges).enter().append('line').attr('stroke', function (d, i) {
      return colorScale(i);
    }).attr('stroke-width', 1);
    var linksText = g.append('g').selectAll('text').data(edges).enter().append('text').text(function (d) {
      return d.relation;
    });
    var gs = g.selectAll('.circleText').data(nodes).enter().append('g').attr('transform', function (d, i) {
      var cirX = d.x;
      var cirY = d.y;
      return 'translate(' + cirX + ',' + cirY + ')';
    }).call(d3__WEBPACK_IMPORTED_MODULE_6__["drag"]().on('start', started).on('drag', dragged).on('end', ended)); //\u7ED8\u5236\u8282\u70B9

    gs.append('circle').attr('r', 10).attr('fill', function (d, i) {
      return colorScale(i);
    }); //\u6587\u5B57

    gs.append('text').attr('x', -10).attr('y', -20).attr('dy', 10).text(function (d) {
      return d.name;
    });

    function ticked() {
      links.attr('x1', function (d) {
        return d.source.x;
      }).attr('y1', function (d) {
        return d.source.y;
      }).attr('x2', function (d) {
        return d.target.x;
      }).attr('y2', function (d) {
        return d.target.y;
      });
      linksText.attr('x', function (d) {
        return (d.source.x + d.target.x) / 2;
      }).attr('y', function (d) {
        return (d.source.y + d.target.y) / 2;
      });
      gs.attr('transform', function (d) {
        return 'translate(' + d.x + ',' + d.y + ')';
      });
    }

    function started(d) {
      if (!d3__WEBPACK_IMPORTED_MODULE_6__["active"]) {
        forceSimulation.alphaTarget(0.8).restart();
      }

      d.subject.fx = d.x;
      d.subject.fy = d.y;
    }

    function dragged(d) {
      d.subject.fx = d.x;
      d.subject.fy = d.y;
    }

    function ended(d) {
      if (!d3__WEBPACK_IMPORTED_MODULE_6__["active"]) {
        forceSimulation.alphaTarget(0);
      }

      d.subject.fx = null;
      d.subject.fy = null;
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    handleInitChart();
  }, []);

  const setNewChartData = () => {
    let arr = Array.from({
      length: 4
    }, () => ~~(Math.random(0, 1000) * 100));
    setDataset(arr);
    handleInitChart();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_es_card__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    style: {
      margin: 24
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    onClick: setNewChartData
  }, "\\u8BBE\\u7F6E\\u65B0\\u7684\\u6570\\u636E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("svg", {
    width: "1200",
    height: "180",
    id: "mainsvg3",
    className: "svgs"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (D3);

//# sourceURL=webpack:///./src/Visualization/D3/force.tsx?`)},"tc+L":function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_card_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("IzEo");
/* harmony import */ var antd_es_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("bx4M");
/* harmony import */ var antd_es_button_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("+L6B");
/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("2/Rp");
/* harmony import */ var _Users_eternallycyf_Documents_GitHub_case_my_demo_markdown_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("tJVT");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("0i/h");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_6__);








const D3 = () => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([30, 10, 43, 55, 13]),
        _useState2 = Object(_Users_eternallycyf_Documents_GitHub_case_my_demo_markdown_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
        dataset = _useState2[0],
        setDataset = _useState2[1];

  const handleInitChart = () => {
    let body = d3__WEBPACK_IMPORTED_MODULE_6__["select"]('body');
    let marge = {
      top: 30,
      bottom: 30,
      left: 30,
      right: 30
    };
    let svg = body.select('#mainsvg3');
    var width = svg.attr('width'); //\u5F97\u5230\u753B\u5E03\u7684\u5BBD

    var height = svg.attr('height'); //\u5F97\u5230\u753B\u5E03\u7684\u957F

    var g = svg.append('g').attr('transform', 'translate(' + marge.top + ',' + marge.left + ')'); //\u8BBE\u7F6E\u4E00\u4E2Acolor\u7684\u989C\u8272\u6BD4\u4F8B\u5C3A\uFF0C\u4E3A\u4E86\u8BA9\u4E0D\u540C\u7684\u6247\u5F62\u5448\u73B0\u4E0D\u540C\u7684\u989C\u8272

    var colorScale = d3__WEBPACK_IMPORTED_MODULE_6__["scaleOrdinal"]().domain(d3__WEBPACK_IMPORTED_MODULE_6__["range"](dataset.length)).range(d3__WEBPACK_IMPORTED_MODULE_6__["schemeCategory10"]); //\u65B0\u5EFA\u4E00\u4E2A\u997C\u72B6\u56FE

    var pie = d3__WEBPACK_IMPORTED_MODULE_6__["pie"](); //\u65B0\u5EFA\u4E00\u4E2A\u5F27\u5F62\u751F\u6210\u5668

    var innerRadius = 0; //\u5185\u534A\u5F84

    var outerRadius = 100; //\u5916\u534A\u5F84

    var arc_generator = d3__WEBPACK_IMPORTED_MODULE_6__["arc"]().innerRadius(0).outerRadius(100);
    var pieData = pie(dataset);
    console.log(pieData);
    var gs = g.selectAll('.g').data(pieData).enter().append('g').attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')'); //\u4F4D\u7F6E\u4FE1\u606F
    //\u7ED8\u5236\u997C\u72B6\u56FE\u7684\u5404\u4E2A\u6247\u5F62

    gs.append('path').attr('d', function (d) {
      return arc_generator(d); //\u5F80\u5F27\u5F62\u751F\u6210\u5668\u4E2D\u51FA\u5165\u6570\u636E
    }).attr('fill', function (d, i) {
      return colorScale(i); //\u8BBE\u7F6E\u989C\u8272
    }); //\u7ED8\u5236\u997C\u72B6\u56FE\u4E0A\u9762\u7684\u6587\u5B57\u4FE1\u606F

    gs.append('text').attr('transform', function (d) {
      //\u4F4D\u7F6E\u8BBE\u5728\u4E2D\u5FC3\u5904
      return 'translate(' + arc_generator.centroid(d) + ')';
    }).attr('text-anchor', 'middle').text(function (d) {
      return d.data;
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    handleInitChart();
  }, []);

  const setNewChartData = () => {
    let arr = Array.from({
      length: 4
    }, () => ~~(Math.random(0, 1000) * 100));
    setDataset(arr);
    handleInitChart();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_es_card__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    style: {
      margin: 24
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    onClick: setNewChartData
  }, "\\u8BBE\\u7F6E\\u65B0\\u7684\\u6570\\u636E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("svg", {
    width: "1200",
    height: "180",
    id: "mainsvg3",
    className: "svgs"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (D3);

//# sourceURL=webpack:///./src/Visualization/D3/pie.tsx?`)},wJRY:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_card_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("IzEo");
/* harmony import */ var antd_es_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("bx4M");
/* harmony import */ var antd_es_button_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("+L6B");
/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("2/Rp");
/* harmony import */ var _Users_eternallycyf_Documents_GitHub_case_my_demo_markdown_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("tJVT");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("0i/h");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_6__);








const D3 = () => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([250, 210, 170, 130, 90]),
        _useState2 = Object(_Users_eternallycyf_Documents_GitHub_case_my_demo_markdown_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
        dataset = _useState2[0],
        setDataset = _useState2[1];

  const handleInitChart = () => {
    let body = d3__WEBPACK_IMPORTED_MODULE_6__["select"]('body');
    let marge = {
      top: 30,
      bottom: 30,
      left: 30,
      right: 30
    };
    let svg = body.select('#mainsvg3');
    var width = svg.attr('width'); //\u5F97\u5230\u753B\u5E03\u7684\u5BBD

    var height = svg.attr('height'); //\u5F97\u5230\u753B\u5E03\u7684\u957F

    var xScale = d3__WEBPACK_IMPORTED_MODULE_6__["scaleBand"]().domain(d3__WEBPACK_IMPORTED_MODULE_6__["range"](dataset.length)).rangeRound([0, width - marge.left - marge.right]);
    var xAxis = d3__WEBPACK_IMPORTED_MODULE_6__["axisBottom"](xScale);
    var yScale = d3__WEBPACK_IMPORTED_MODULE_6__["scaleLinear"]().domain([0, d3__WEBPACK_IMPORTED_MODULE_6__["max"](dataset)]).range([height - marge.top - marge.bottom, 0]);
    var yAxis = d3__WEBPACK_IMPORTED_MODULE_6__["axisLeft"](yScale);
    svg.selectAll('g').remove();
    let g = svg.append('g').attr('transform', 'translate(' + marge.top + ',' + marge.left + ')');
    var gs = g.selectAll('.rect').data(dataset).enter().append('g');
    var rectPadding = 10; //\u77E9\u5F62\u4E4B\u95F4\u7684\u95F4\u9699

    gs.append('rect').attr('x', function (d, i) {
      return xScale(i) + rectPadding / 2;
    }).attr('y', function (d) {
      return yScale(d);
    }).attr('width', function () {
      return xScale.step() - rectPadding;
    }).attr('height', function (d) {
      return height - marge.top - marge.bottom - yScale(d);
    }).attr('fill', 'blue').on('mouseover', function () {
      var rect = d3__WEBPACK_IMPORTED_MODULE_6__["select"](this).transition().duration(1500) //\u5F53\u9F20\u6807\u653E\u5728\u77E9\u5F62\u4E0A\u65F6\uFF0C\u77E9\u5F62\u53D8\u6210\u9EC4\u8272
      .attr('fill', 'yellow');
    }).on('mouseout', function () {
      var rect = d3__WEBPACK_IMPORTED_MODULE_6__["select"](this).transition().delay(1500).duration(1500) //\u5F53\u9F20\u6807\u79FB\u51FA\u65F6\uFF0C\u77E9\u5F62\u53D8\u6210\u84DD\u8272
      .attr('fill', 'blue');
    });
    gs.append('text').attr('x', function (d, i) {
      return xScale(i) + rectPadding / 2;
    }).attr('y', function (d) {
      return yScale(d);
    }).attr('dx', function () {
      (xScale.step() - rectPadding) / 2;
    }).attr('dy', 20).text(function (d) {
      return d;
    });
    gs.append('rect').attr('x', function (d, i) {
      return xScale(i) + rectPadding / 2;
    }).attr('y', function (d) {
      //\u8FD9\u91CC\u662F\u8981\u6539\u53D8\u7684\uFF0C\u5373\u521D\u59CB\u72B6\u6001
      var min = yScale.domain()[0];
      return yScale(min); //\u53EF\u4EE5\u5F97\u77E5\uFF0C\u8FD9\u91CC\u8FD4\u56DE\u7684\u662F\u6700\u5927\u503C
    }).attr('width', function () {
      return xScale.step() - rectPadding;
    }).attr('height', function (d) {
      //\u8FD9\u91CC\u8981\u6539\u53D8\uFF0C\u5373\u521D\u59CB\u72B6\u6001
      return 0;
    }).attr('fill', 'blue').transition() //\u6DFB\u52A0\u8FC7\u6E21
    .duration(2000) //\u6301\u7EED\u65F6\u95F4
    .delay(function (d, i) {
      //\u5EF6\u8FDF
      return i * 400;
    }) //.ease(d3.easeElasticInOut)//\u8FD9\u91CC\u8BFB\u8005\u53EF\u4EE5\u81EA\u5DF1\u5C06\u6CE8\u91CA\u53BB\u6389\uFF0C\u770B\u770B\u6548\u679C\uFF08chrome\u6D4F\u89C8\u5668\u4F1A\u62A5\u9519\uFF0C\u4F46\u662F\u4E0D\u5F71\u54CD\u6548\u679C\uFF09
    .attr('y', function (d) {
      //\u56DE\u5230\u6700\u7EC8\u72B6\u6001
      return yScale(d);
    }).attr('height', function (d) {
      //\u56DE\u5230\u6700\u7EC8\u72B6\u6001
      return height - marge.top - marge.bottom - yScale(d);
    });
    gs.append('text').attr('x', function (d, i) {
      return xScale(i) + rectPadding / 2;
    }).attr('y', function (d) {
      var min = yScale.domain()[0];
      return yScale(min);
    }).attr('dx', function () {
      (xScale.step() - rectPadding) / 2;
    }).attr('dy', 20).text(function (d) {
      return d;
    }).transition().duration(2000).delay(function (d, i) {
      return i * 400;
    }) //.ease(d3.easeElasticInOut)
    .attr('y', function (d) {
      return yScale(d);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    handleInitChart();
  }, []);

  const setNewChartData = () => {
    let arr = Array.from({
      length: 4
    }, () => ~~(Math.random(0, 1000) * 100));
    setDataset(arr);
    handleInitChart();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_es_card__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    style: {
      margin: 24
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    onClick: setNewChartData
  }, "\\u8BBE\\u7F6E\\u65B0\\u7684\\u6570\\u636E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("svg", {
    width: "1200",
    height: "180",
    id: "mainsvg3",
    className: "svgs"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (D3);

//# sourceURL=webpack:///./src/Visualization/D3/barChart3.tsx?`)},yNen:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Class_TransferDemo; });

// EXTERNAL MODULE: ./node_modules/antd/es/card/style/index.js + 1 modules
var style = __webpack_require__("IzEo");

// EXTERNAL MODULE: ./node_modules/antd/es/card/index.js + 26 modules
var card = __webpack_require__("bx4M");

// EXTERNAL MODULE: ./node_modules/antd/es/button/style/index.js
var button_style = __webpack_require__("+L6B");

// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__("2/Rp");

// EXTERNAL MODULE: ./node_modules/antd/es/form/style/index.js
var form_style = __webpack_require__("y8nQ");

// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 18 modules
var es_form = __webpack_require__("Vl3Y");

// EXTERNAL MODULE: ./node_modules/antd/es/select/style/index.js
var select_style = __webpack_require__("OaEy");

// EXTERNAL MODULE: ./node_modules/antd/es/select/index.js
var es_select = __webpack_require__("2fM7");

// EXTERNAL MODULE: ./node_modules/antd/es/modal/style/index.js
var modal_style = __webpack_require__("2qtc");

// EXTERNAL MODULE: ./node_modules/antd/es/modal/index.js + 8 modules
var modal = __webpack_require__("kLXV");

// EXTERNAL MODULE: ./node_modules/antd/es/transfer/style/index.js
var transfer_style = __webpack_require__("8R5B");

// EXTERNAL MODULE: ./node_modules/antd/es/transfer/index.js + 6 modules
var transfer = __webpack_require__("aJyg");

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("0Owb");

// EXTERNAL MODULE: ./node_modules/antd/es/checkbox/style/index.js
var checkbox_style = __webpack_require__("sRBo");

// EXTERNAL MODULE: ./node_modules/antd/es/checkbox/index.js + 2 modules
var es_checkbox = __webpack_require__("kaz8");

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("tJVT");

// EXTERNAL MODULE: external "window.React"
var external_window_React_ = __webpack_require__("cDcd");
var external_window_React_default = /*#__PURE__*/__webpack_require__.n(external_window_React_);

// EXTERNAL MODULE: ./src/Components/BusinessComponent/TransferForm/components/index.less?modules
var componentsmodules = __webpack_require__("Y+O9");
var componentsmodules_default = /*#__PURE__*/__webpack_require__.n(componentsmodules);

// CONCATENATED MODULE: ./src/Components/BusinessComponent/TransferForm/components/class/index.tsx















// \u6253\u5E73\u6570\u7EC4
const flattenDeep = arr => Array.isArray(arr) ? arr.reduce((a, b) => [...a, ...flattenDeep(b)], []) : [arr];

const filterRepeatList = arr => [...new Set([...arr])]; // \u627E\u5230\u6539\u53D8\u9879\u7684\u5168\u90E8\u4FE1\u606F


const findAllMessage = (originArr, keyArr) => {
  const arr = [];
  keyArr.forEach(item => {
    arr.push(originArr.filter(ele => ele.key == item));
  });
  return flattenDeep(arr);
};

const TransferForm = props => {
  var _targetKeys$length, _originData$length;

  const _useState = Object(external_window_React_["useState"])([]),
        _useState2 = Object(slicedToArray["default"])(_useState, 2),
        targetKeys = _useState2[0],
        setTargetKeys = _useState2[1];

  const _useState3 = Object(external_window_React_["useState"])([]),
        _useState4 = Object(slicedToArray["default"])(_useState3, 2),
        selectedKeys = _useState4[0],
        setSelectedKeys = _useState4[1];

  const _useState5 = Object(external_window_React_["useState"])(false),
        _useState6 = Object(slicedToArray["default"])(_useState5, 2),
        visible = _useState6[0],
        setVisible = _useState6[1];

  const transferBox = Object(external_window_React_["useRef"])(null);
  const transferOkCallBack = props.transferOkCallBack,
        _props$originData = props.originData,
        originData = _props$originData === void 0 ? [] : _props$originData,
        formRef = props.formRef,
        TransferRef = props.TransferRef,
        modalProps = props.modalProps,
        transferProps = props.transferProps,
        _props$falseSelectItm = props.falseSelectItmeName,
        falseSelectItmeName = _props$falseSelectItm === void 0 ? "test" : _props$falseSelectItm;
  Object(external_window_React_["useEffect"])(() => {
    document.getElementsByClassName("ant-input")[0].placeholder = "\u8BF7\u8F93\u5165\u81EA\u5B9A\u4E49\u5185\u5BB9";
  }, []);
  Object(external_window_React_["useEffect"])(() => {
    setTargetKeys([]);
    setSelectedKeys([]);
    formRef.current.setFieldsValue({
      [falseSelectItmeName]: []
    });
  }, [falseSelectItmeName, formRef, originData.length]);
  Object(external_window_React_["useImperativeHandle"])(TransferRef, () => ({
    getData: () => {
      return [targetKeys, originData];
    },
    setData: arr => {
      setSelectedKeys(arr);
    },
    useVisible: bool => {
      setVisible(bool);
    }
  }));

  const handleChange = (newTargetKeys, direction, moveKeys) => {
    // \u5220\u9664\u6570\u636E
    const newKeys = direction === "right" ? [...targetKeys, moveKeys] : targetKeys.filter(key => !moveKeys.includes(key));
    setTargetKeys([...newKeys]);
    setTargetKeys([]);
  };

  const handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    // \u8BBE\u7F6E\u65B0\u7684\u6570\u636E
    const selectedKeysArr = filterRepeatList([...sourceSelectedKeys, ...targetSelectedKeys]);
    const targetKeysArr = filterRepeatList([...targetKeys, ...sourceSelectedKeys, ...selectedKeys]);
    const formItemArr = filterRepeatList([...targetKeys, ...sourceSelectedKeys, ...selectedKeys]);
    setSelectedKeys([...selectedKeysArr]);
    setTargetKeys([...targetKeysArr]); // \u540C\u6B65\u4E3A\u4E00\u4E2Aselect\u8BBE\u7F6E\u76F8\u540C\u7684\u72B6\u6001 select\u9009\u4E2D

    formRef.current.setFieldsValue({
      [falseSelectItmeName]: findAllMessage(originData, formItemArr)
    });
  };

  const handleModalOk = () => {
    formRef.current.setFieldsValue({
      [falseSelectItmeName]: findAllMessage(originData, targetKeys)
    });
    setVisible(false); // eslint-disable-next-line @typescript-eslint/no-unused-expressions

    transferOkCallBack && transferOkCallBack();
  };

  return /*#__PURE__*/external_window_React_default.a.createElement(external_window_React_default.a.Fragment, null, /*#__PURE__*/external_window_React_default.a.createElement(es_form["a" /* default */].Item, null, /*#__PURE__*/external_window_React_default.a.createElement("div", {
    className: componentsmodules_default.a.transferBox,
    ref: transferBox
  }, /*#__PURE__*/external_window_React_default.a.createElement(modal["a" /* default */], Object(esm_extends["a" /* default */])({
    width: 1000,
    title: "\\u7A7F\\u68AD\\u6846",
    getContainer: transferBox === null || transferBox === void 0 ? void 0 : transferBox.current,
    visible: visible,
    okText: "\\u786E\\u5B9A",
    cancelText: "\\u53D6\\u6D88",
    onCancel: () => setVisible(false),
    onOk: () => handleModalOk(),
    forceRender: true,
    centered: true,
    maskClosable: false,
    bodyStyle: {
      paddingBottom: 0
    }
  }, modalProps), /*#__PURE__*/external_window_React_default.a.createElement(transfer["a" /* default */], Object(esm_extends["a" /* default */])({
    listStyle: {
      height: 500
    },
    style: {
      position: "relative"
    },
    operationStyle: {
      position: "absolute",
      top: 200,
      visibility: "hidden"
    },
    showSearch: true,
    titles: [/*#__PURE__*/external_window_React_default.a.createElement(es_checkbox["a" /* default */], {
      checked: false,
      onClick: () => setTargetKeys(originData.map(item => item.key))
    }), /*#__PURE__*/external_window_React_default.a.createElement("a", {
      href: "#",
      onClick: () => {
        setTargetKeys([]);
        setSelectedKeys([]);
      }
    }, "\\u6E05\\u7A7A")],
    selectAllLabels: ["\u5168\u90E8", /*#__PURE__*/external_window_React_default.a.createElement("span", null, " ", "\\u5DF2\\u9009", (_targetKeys$length = targetKeys.length) !== null && _targetKeys$length !== void 0 ? _targetKeys$length : "--", "/", (_originData$length = originData.length) !== null && _originData$length !== void 0 ? _originData$length : "--")],
    showSelectAll: false,
    targetKeys: targetKeys,
    selectedKeys: selectedKeys,
    onChange: (a, b, c) => handleChange(a, b, c),
    onSelectChange: (a, b) => handleSelectChange(a, b),
    render: item => item.title,
    oneWay: true
  }, transferProps, {
    dataSource: originData
  }))))), /*#__PURE__*/external_window_React_default.a.createElement(es_form["a" /* default */].Item, {
    name: falseSelectItmeName,
    labelCol: {
      span: 0
    },
    wrapperCol: {
      span: 0
    }
  }, /*#__PURE__*/external_window_React_default.a.createElement(es_select["default"], {
    mode: "multiple",
    style: {
      width: "0%",
      display: "none"
    },
    labelInValue: true,
    options: [// { label: "t", value: 1 },
      // { label: "a", value: 2 }
    ]
  })));
};

/* harmony default export */ var components_class = (TransferForm);
// CONCATENATED MODULE: ./src/Components/BusinessComponent/TransferForm/Class.tsx








class Class_TransferDemo extends external_window_React_default.a.Component {
  constructor(...args) {
    super(...args);
    this.TransferRef = /*#__PURE__*/external_window_React_default.a.createRef();
    this.formRef = /*#__PURE__*/external_window_React_default.a.createRef();
    this.state = {
      mockData: []
    };

    this.testData = () => {
      this.setState({
        mockData: Array.from({
          length: 10
        }).map((_, i) => ({
          key: i.toString(),
          title: \`content\${i + 1}\`,
          description: \`description of content\${i + 1}\`
        }))
      });
    };

    this.transferOkCallBack = () => {
      const _ref = this.TransferRef.current,
            getData = _ref.getData;
      const ref = this.formRef.current;
      console.log(ref.getFieldValue("test"));
    };

    this.onFinish = values => {
      console.log(values);
    };
  }

  componentDidMount() {
    this.setState({
      mockData: Array.from({
        length: 20
      }).map((_, i) => ({
        key: i.toString(),
        title: \`content\${i + 1}\`,
        description: \`description of content\${i + 1}\`
      }))
    });
  }

  render() {
    return /*#__PURE__*/external_window_React_default.a.createElement(external_window_React_default.a.Fragment, null, /*#__PURE__*/external_window_React_default.a.createElement(card["a" /* default */], {
      style: {
        margin: 24
      }
    }, /*#__PURE__*/external_window_React_default.a.createElement("h1", null, /*#__PURE__*/external_window_React_default.a.createElement("button", {
      onClick: () => {
        this.TransferRef.current.useVisible(true);
      }
    }, "\\u6253\\u5F00\\u7A7F\\u68AD\\u6846")), /*#__PURE__*/external_window_React_default.a.createElement("h1", null, /*#__PURE__*/external_window_React_default.a.createElement("button", {
      onClick: () => this.testData()
    }, "\\u8BBE\\u7F6E\\u65B0\\u7684\\u6570\\u636E\\u6E90")), /*#__PURE__*/external_window_React_default.a.createElement(es_form["a" /* default */], {
      ref: this.formRef,
      onFinish: this.onFinish
    }, /*#__PURE__*/external_window_React_default.a.createElement(es_form["a" /* default */].Item, {
      style: {
        display: "inline-block"
      }
    }, /*#__PURE__*/external_window_React_default.a.createElement(components_class, {
      formRef: this.formRef,
      originData: this.state.mockData,
      TransferRef: this.TransferRef,
      transferOkCallBack: () => this.transferOkCallBack()
    })), /*#__PURE__*/external_window_React_default.a.createElement(es_button["a" /* default */], {
      type: "primary",
      htmlType: "submit"
    }, "Submit"))));
  }

}

//# sourceURL=webpack:///./src/Components/BusinessComponent/TransferForm/Class.tsx_+_1_modules?`)},yfLh:function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin

//# sourceURL=webpack:///./node_modules/antd/es/transfer/style/index.less?`)}}]);
