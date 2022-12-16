(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{vl6t:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dEAq");
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dumi_theme__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("H1Ra");










 // memo for page content, to avoid useless re-render since other context fields changed

const PageContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(({
  demos: DUMI_ALL_DEMOS
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "markdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "indexdb"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#indexdb",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "IndexDB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "indexhtml"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#indexhtml",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "index.html"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<script type=\\"module\\">\\n  import OpenIndexDB from './indexDb.js';\\n  const DB2 = new OpenIndexDB(\\n    'db2',\\n    {\\n      name: 'db_b2',\\n      option: {\\n        // keyPath: 'id',\\n        autoIncrement: true,\\n      },\\n    },\\n    [\\n      { keyPath: 'name', name: 'name' },\\n      { keyPath: 'value', name: 'value' },\\n    ],\\n  );\\n  async function text() {\\n    await DB2.openDB();\\n    let arr = Array.from(Array(20)).map((item, i) => ({\\n      id: i,\\n      name: \`cs_\${i}\`,\\n      value: \`zh\${i}\`,\\n    }));\\n    DB2.addData(arr);\\n    DB2.updateDataByKey({ key: 4, id: 3, name: \`cs_1\`, value: \`zh6\` });\\n    const data = await DB2.getDataByKey(4);\\n    console.log(data);\\n  }\\n  text();\\n  // console.log(DB.openDB());\\n</script>",
    lang: "html"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "indexdbjs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#indexdbjs",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "indexDb.js"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "/**\\n * \u65B0\u5EFA\u6216\u6253\u5F00\u6570\u636E\u5E93\\n * @DbName  \u6570\u636E\u5E93\u540D\u79F0\\n * @version  \u7248\u672C\\n */\\n\\nexport function openDB(DbName, version = 2) {\\n  return new Promise((res, rej) => {\\n    if (\\n      window.indexedDB ||\\n      window.mozIndexedDB ||\\n      window.webkitIndexedDB ||\\n      window.msIndexedDB\\n    ) {\\n      var request = window.indexedDB.open(DbName, version);\\n      request.onerror = function(event) {\\n        //\u5931\u8D25\u5904\u7406\\n        rej(new Error('\u65B0\u5EFA\u6570\u636E\u5E93\u5931\u8D25\uFF01'));\\n      };\\n      request.onsuccess = function(event) {\\n        // Do something with request.result!\\n        res(event.target.result);\\n      };\\n\\n      // \u65B0\u5EFA\u6216\u66F4\u65B0\u65F6\u89E6\u53D1\\n      request.onupgradeneeded = function(event) {\\n        // \u4FDD\u5B58 IDBDataBase \u63A5\u53E3\\n        var db = event.target.result;\\n\\n        // \u4E3A\u8BE5\u6570\u636E\u5E93\u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61\u4ED3\u5E93\\n        var objectStore = db.createObjectStore('hyMapJson', {\\n          keyPath: 'uuid', // \u6DFB\u52A0\u4E3B\u952E\u5FC5\u987B\u4FDD\u6301\u552F\u4E00\\n        });\\n\\n        // \u6DFB\u52A0\u5176\u4ED6\u5B57\u6BB5 \u53EF\u9009\\n        objectStore.createIndex('name', 'name', { unique: false });\\n        objectStore.createIndex('data', 'data', { unique: false });\\n      };\\n    } else {\\n      rej(new Error('\u5F53\u524D\u7248\u672C\u4E0D\u652F\u6301IndexDB'));\\n    }\\n  });\\n}\\n\\nexport function addData(db, name, data) {\\n  var res = db\\n    .transaction([name], 'readwrite')\\n    .objectStore(name)\\n    .add(data);\\n  res.onsuccess = function(event) {\\n    // event.target.result === customer.ssn;\\n    console.log(event, '\u2018\u6DFB\u52A0\u6210\u529F\uFF01');\\n  };\\n}\\n\\nexport function getDataByKey(db, name, key) {\\n  return new Promise((res, rej) => {\\n    try {\\n      var request = db\\n        .transaction([name], 'readwrite')\\n        .objectStore(name)\\n        .get(key);\\n      request.onsuccess = function(event) {\\n        // event.target.result === customer.ssn;\\n        console.log(event, '\u83B7\u53D6\u6210\u529F\uFF01');\\n        res(request.result);\\n      };\\n      request.onerror = function(event) {\\n        rej(new Error('\u83B7\u53D6\u5931\u8D25'));\\n      };\\n    } catch (error) {\\n      rej(error);\\n    }\\n  });\\n}\\n/*\\n * \u5220\u9664indexDB\u6570\u636E\u5E93\\n */\\nexport function deleteDB(dbName) {\\n  window.indexedDB.deleteDatabase(dbName);\\n}\\n\\nclass OpenIndexDB {\\n  constructor(name, storeOption, surfaceOption, version = 2) {\\n    this.name = name; // \u6570\u636E\u5E93\u540D\u79F0\\n    this.version = version; // \u4ED3\u5E93\u7248\u672C\\n    this.surfaceOption = surfaceOption; // \u914D\u7F6E\u8868\u7684\u5176\u4ED6\u53EF\u67E5\u5B57\u6BB5 \u8BBE\u7F6E\u540E\u624D\u53EF\u901A\u8FC7key\u67E5\u8BE2\\n    this.storeOption = storeOption; // \u8BBE\u7F6E\u5BF9\u8C61\u4ED3\u5E93\u540D\u79F0\u548C\u4E3B\u952Ekey\u7B49\u914D\u7F6E\\n    //   storeOption.option: {\\n    //      keyPath: 'mykey' , // \u624B\u52A8\u8BBE\u7F6E\u4E3B\u952E\\n    //     autoIncrement: true // \u81EA\u52A8\u8BBE\u7F6E\u4E3B\u952E \u81EA\u589E \u4E24\u8005\u9009\u4E00\\n    // }\\n  }\\n  // \u4E8B\u52A1\u63D0\u4F9B\u4E86\u4E09\u79CD\u6A21\u5F0F\uFF1Areadonly\u3001readwrite \u548C versionchange\u3002\\n  /**\\n   * \u6253\u5F00\u6570\u636E\u5E93\u521D\u59CB\u6570\u636E\u5E93\\n   *\\n   * @return {Promise}\\n   * @memberof OpenIndexDB\\n   */\\n  async openDB() {\\n    const _this = this;\\n    const DB = await new Promise((res, rej) => {\\n      if (\\n        window.indexedDB ||\\n        window.mozIndexedDB ||\\n        window.webkitIndexedDB ||\\n        window.msIndexedDB\\n      ) {\\n        var request = window.indexedDB.open(_this.name, _this.version);\\n\\n        request.onerror = function(event) {\\n          //\u5931\u8D25\u5904\u7406\\n          rej(new Error('\u65B0\u5EFA\u6570\u636E\u5E93\u5931\u8D25\uFF01'));\\n        };\\n        request.onsuccess = function(event) {\\n          // Do something with request.result!\\n          res(event.target.result);\\n        };\\n\\n        // \u65B0\u5EFA\u6216\u66F4\u65B0\u65F6\u89E6\u53D1\\n        request.onupgradeneeded = function(event) {\\n          // \u4FDD\u5B58 IDBDataBase \u63A5\u53E3\\n          var db = event.target.result;\\n          // \u521B\u5EFA\u50A8\u5B58\u7684\u8868\\n          const objectStore = db.createObjectStore(\\n            _this.storeOption.name,\\n            _this.storeOption.option ?? {},\\n          );\\n          // \u521B\u5EFA\u8868\u7684\u5176\u4ED6\u5B57\u6BB5\u5217\\n          _this.surfaceOption.forEach(surface => {\\n            const { name, keyPath, option } = surface;\\n            objectStore.createIndex(name, keyPath, option ?? { unique: false });\\n          });\\n        };\\n      } else {\\n        rej(new Error('\u5F53\u524D\u7248\u672C\u4E0D\u652F\u6301IndexDB'));\\n      }\\n    });\\n    if (DB instanceof Error) {\\n      throw DB;\\n    }\\n    this.DB = DB;\\n    return DB;\\n  }\\n  /**\\n   * \u65B0\u589E\u6570\u636E\\n   *\\n   * @param {*} data\\n   * @return {*}\\n   * @memberof OpenIndexDB\\n   */\\n  addData(data) {\\n    var customerObjectStore = this.DB.transaction(\\n      [this.storeOption.name],\\n      'readwrite',\\n    ).objectStore(this.storeOption.name);\\n\\n    if (data instanceof Array) {\\n      data.forEach(item => {\\n        var res = customerObjectStore.add(item);\\n        res.onsuccess = function(event) {\\n          // event.target.result === customer.ssn;\\n          console.log(event, '\u6DFB\u52A0\u6210\u529F\uFF01');\\n        };\\n        res.onerror = function(event) {\\n          //\u5931\u8D25\u5904\u7406\\n          throw event;\\n        };\\n      });\\n    } else {\\n      var res = customerObjectStore.add(data);\\n      res.onsuccess = function(event) {\\n        // event.target.result === customer.ssn;\\n        console.log(event, '\u6DFB\u52A0\u6210\u529F\uFF01');\\n      };\\n      res.onerror = function(event) {\\n        //\u5931\u8D25\u5904\u7406\\n        throw event;\\n      };\\n    }\\n\\n    return this;\\n  }\\n\\n  /**\\n   * \u6839\u636Ekey\u83B7\u53D6\u6570\u636E\u5E93\u6570\u636E\\n   *\\n   * @param {*} key\\n   * @return {Promise}\\n   * @memberof OpenIndexDB\\n   */\\n  async getDataByKey(key) {\\n    const _this = this;\\n    const result = await new Promise((res, rej) => {\\n      try {\\n        var request = _this.DB.transaction(_this.storeOption.name)\\n          .objectStore(_this.storeOption.name)\\n          .get(key);\\n        request.onsuccess = function(event) {\\n          res(request.result);\\n        };\\n        request.onerror = function(event) {\\n          rej(new Error('\u83B7\u53D6\u5931\u8D25'));\\n        };\\n      } catch (error) {\\n        rej(error);\\n      }\\n    });\\n    if (result instanceof Error) {\\n      throw result;\\n    }\\n\\n    return result;\\n  }\\n\\n  /**\\n   * \u6839\u636Ekey\u5220\u9664\u6570\u636E\u5E93\u6570\u636E\\n   *\\n   * @param {*} key\\n   * @return {Promise}\\n   * @memberof OpenIndexDB\\n   */\\n  async deleteDataByKey(key) {\\n    const _this = this;\\n    const result = await new Promise((res, rej) => {\\n      try {\\n        var request = _this.DB.transaction(\\n          [_this.storeOption.name],\\n          'readwrite',\\n        )\\n          .objectStore(_this.storeOption.name)\\n          .delete(key);\\n        request.onsuccess = function(event) {\\n          // \u5220\u9664\u6210\u529F\uFF01\\n          res(request.result);\\n        };\\n        request.onerror = function(event) {\\n          rej(new Error('\u5220\u9664\u5931\u8D25'));\\n        };\\n      } catch (error) {\\n        rej(error);\\n      }\\n    });\\n\\n    if (result instanceof Error) {\\n      throw result;\\n    }\\n\\n    return result;\\n  }\\n  /**\\n   *  \u6839\u636Ekey\u66F4\u65B0\u6570\u636E\u5E93\u6570\u636E\\n   *  \u5F53autoIncrement = true \u65F6\u65E0\u6CD5\u66F4\u65B0\uFF0C\u4F1A\u5411\u540E\u6DFB\u52A0\u4E00\u6761\u76F8\u5E94\u6570\u636E\\n   * @param {*} data\\n   * @return {Promise}\\n   * @memberof OpenIndexDB\\n   */\\n  async updateDataByKey(data) {\\n    const _this = this;\\n    const result = await new Promise((res, rej) => {\\n      try {\\n        var request = _this.DB.transaction(\\n          [_this.storeOption.name],\\n          'readwrite',\\n        )\\n          .objectStore(_this.storeOption.name)\\n          .put(data);\\n        request.onsuccess = function(event) {\\n          // \u66F4\u65B0\u6210\u529F\uFF01\\n          res(request.result);\\n        };\\n        request.onerror = function(event) {\\n          rej(new Error(event));\\n        };\\n      } catch (error) {\\n        rej(error);\\n      }\\n    });\\n\\n    if (result instanceof Error) {\\n      throw result;\\n    }\\n\\n    return result;\\n  }\\n}\\nexport default OpenIndexDB;",
    lang: "js"
  })));
});
/* harmony default export */ __webpack_exports__["default"] = (props => {
  const _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["context"]),
        demos = _React$useContext.demos; // scroll to anchor after page component loaded


  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    var _props$location;

    if (props !== null && props !== void 0 && (_props$location = props.location) !== null && _props$location !== void 0 && _props$location.hash) {
      dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"].scrollToAnchor(decodeURIComponent(props.location.hash.slice(1)));
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageContent, {
    demos: demos
  });
});

//# sourceURL=webpack:///./src/Project/IndexDB/index.md?`)}}]);
