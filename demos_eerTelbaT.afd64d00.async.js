(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{TpwP:function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin

//# sourceURL=webpack:///./node_modules/antd/dist/antd.css?`)},orQz:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_table_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("g9YV");
/* harmony import */ var antd_es_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wCAj");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("y3Kf");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("8Skl");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("TpwP");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_5__);





const dataSource = [{
  key: 1,
  name: 'John Brown sr.',
  age: 60,
  address: 'New York No. 1 Lake Park',
  children: [{
    key: 11,
    name: 'John Brown',
    age: 42,
    address: 'New York No. 2 Lake Park'
  }, {
    key: 12,
    name: 'John Brown jr.',
    age: 30,
    address: 'New York No. 3 Lake Park',
    children: [{
      key: 121,
      name: 'Jimmy Brown',
      age: 16,
      address: 'New York No. 3 Lake Park'
    }]
  }, {
    key: 13,
    name: 'Jim Green sr.',
    age: 72,
    address: 'London No. 1 Lake Park',
    children: [{
      key: 131,
      name: 'Jim Green',
      age: 42,
      address: 'London No. 2 Lake Park',
      children: [{
        key: 1311,
        name: 'Jim Green jr.',
        age: 25,
        address: 'London No. 3 Lake Park'
      }, {
        key: 1312,
        name: 'Jimmy Green sr.',
        age: 18,
        address: 'London No. 4 Lake Park'
      }]
    }]
  }]
}, {
  key: 2,
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park'
}];
const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name'
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age'
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address'
}];

const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "App"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_es_table__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    columns: columns,
    dataSource: dataSource,
    expandable: {
      rowExpandable: record => {
        return record.children ? true : false;
      },
      expandIcon: ({
        expanded,
        onExpand,
        record
      }) => {
        if (!record.children || record.children.length === 0) return null;
        return expanded ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
          onClick: e => onExpand(record, e)
        }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
          onClick: e => onExpand(record, e)
        });
      }
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

//# sourceURL=webpack:///./src/Components/Antd/TableTree/index.tsx?`)}}]);
