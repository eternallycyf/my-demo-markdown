(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{nrpm:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
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
    id: "websocket"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#websocket",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Websocket"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "\\u524D\\u7AEF\\u53D1\\u9001\\u8BF7\\u6C42"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u524D\\u7AEF\\u53D1\\u9001\\u8BF7\\u6C42",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u524D\\u7AEF\\u53D1\\u9001\\u8BF7\\u6C42"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "https://zhuanlan.zhihu.com/p/355765098"
  }, "https://zhuanlan.zhihu.com/p/355765098")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "https://www.itdaan.com/blog/2016/08/25/efe52eeec16c.html"
  }, "https://www.itdaan.com/blog/2016/08/25/efe52eeec16c.html"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// ws:\u501F\u7528http  wss:\u501F\u7528https\\nnew WebSocket('ws://127.0.0.1:8080')\\n# \u76D1\u542C\u4E8B\u4EF6\\nwebSocket.onopen = function(){\\n// 0\u94FE\u63A5\u8FD8\u6CA1\u6709\u5EFA\u7ACB/\u6B63\u5728\u5EFA\u7ACB 1\u94FE\u63A5\u5EFA\u7ACB\u6210\u529F 2\u94FE\u63A5\u6B63\u5728\u5173\u95ED 3\u94FE\u63A5\u5DF2\u7ECF\u5173\u95ED\\n  console.log(webSocket.readyState)\\n}\\n# \u53D1\u9001\u6570\u636E\\n// \u5F53\u70B9\u51FB\u6309\u94AE\u65F6\u5019 \u53D1\u6570\u636E\\n  websocket.send('\u6570\u636E')\\n# \u63A5\u53D7\u6570\u636E\\nwebsocket.onmessage = function({data}){\\n  console.log(data)\\n}",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "websocket-node"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#websocket-node",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "webSocket-node"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "import webSocketServer from 'websocket'\\nimport http form 'http'\\nconst server = http.createServer((req,res)=>{\\n})\\n\\nserver.listen(3000,()=>'localhost://3000')\\nconst webSocketServer = new webSocketServer({\\n   httpServer:server,\\n   autoAcceptConnections:false  // http \u8DE8\u57DF\u63A7\u5236\\n})\\n\\n// \u5F00\u542F\u94FE\u63A5\\nwebSocketServer.on('request',(req)=>{\\n\\n  if(!orginIsAllowed(req.origin)){//\u5141\u8BB8\u7684\u8BF7\u6C42\\n    request.reject()\\n    return;\\n  }\\n\\n  let connection = request.accept('echo-protocol');\\n  // \u6709\u6D88\u606F\u8FC7\u6765\u4E86\\n  connection.on('message',(message)=>{\\n     connection.sendBytes()\\n     // \u7ED9\u524D\u7AEF\u53D1\u9001\u6570\u636E\\n     connection.send('\u53D1\u9001\u6570\u636E')\\n  })\\n\\n  connection.on('close',(reasonCode,description)=>{\\n    // \u65AD\u5F00\u94FE\u63A5\\n  })\\n})\\n# \u8BC6\u522B\u4E0D\u540C\u7684\u5BA2\u6237\u7AEF\\nlet conArr = []\\nwebSocketServer.on('request',(req)=>{\\n  let connection = req.accept()\\n  conArr.push(connection)\\n\\n  connection.on('message',(msg)=>{\\n     for(let i =0;i<conArr.length;i++){\\n       conArr[i].send('xxx')\\n      // \u4E3A\u4E0D\u540C\u7684\u5BA2\u6237\u7AEF\u8FD4\u56DE\u4E0D\u540C\u7684\u6570\u636E\\n     }\\n  })\\n})",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "ws"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#ws",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "ws"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# open close error message connection\\nyarn add ws\\n#\\nimport { WebSocketServer } from 'ws';\\n\\nconst wss = new WebSocketServer({ port: 8080 });\\n\\nwss.on('connection', function connection(ws) {\\n  ws.on('message', function message(data) {\\n    console.log('received: %s', data);\\n  });\\n\\n  ws.send('something');\\n});",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "\\u9879\\u76EE"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u9879\\u76EE",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u9879\\u76EE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "https://www.itdaan.com/blog/2016/08/25/efe52eeec16c.html"
  }, "https://www.itdaan.com/blog/2016/08/25/efe52eeec16c.html"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# model\\n*fetch({ payload: { listData } }, { call, put, select }) {\\n      let { dd, dindex } = yield select((state) => state.MoltenIronLadle);\\n      dd.push({\\n        year: listData.monitorCPU[0][0],\\n        value: listData.monitorCPU[0][1],\\n      });\\n      if (dd.lenth > 300) {\\n        dd.splice(0, dd.lenth - 300);\\n      }\\n      yield put({\\n        type: 'save',\\n        payload: {\\n          dd: dd,\\n          dindex: ++dindex,\\n        },\\n      });\\n    },\\n\\nopenSocket({ dispatch }) {\\n      return webServer.websocketPromise((data) => {\\n        dispatch({ type: 'fetch', payload: { listData: data } });\\n      });\\n    },",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# websockt\\n/*\\n * url \u5B9A\u4E49\u8DEF\u7531\u53C2\u6570\\n *\\n */\\nexport function websocketPromise(action) {\\n  let ws;\\n  ws = new WebSocket('ws://47.96.224.206:8080/ws/monitor');\\n  ws.onopen = (wtr) => {\\n    ws.send('12321');\\n  };\\n  ws.onmessage = function ({ data }) {\\n    if (data.indexOf('monitorCPU') > -1) {\\n      let list = eval('(' + data + ')');\\n      action(list);\\n    }\\n  };\\n  ws.onclose = function (evt) {\\n    console.log('Connection closed.');\\n  };\\n  return ws;\\n}",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "\\u5FC3\\u8DF3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u5FC3\\u8DF3",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u5FC3\\u8DF3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "\u670D\u52A1\u7AEF\u5FC3\u8DF3\u68C0\u6D4B\\n\u5BA2\u6237\u7AEF\u65AD\u5F00\u91CD\u8FDE\\n\\n# \u4E00\u822C\u9519\u8BEF \u901A\u8FC7 onMessage onError\u4E8B\u4EF6\u5904\u7406\\n# \u5F53\u65AD\u7F51\u7684\u65F6\u5019 \u6D4F\u89C8\u5668\u4E0D\u4F1A\u6267\u884Cwebsocket\u7684onclose\u65B9\u6CD5 \u65E0\u6CD5\u77E5\u9053\u662F\u5426\u65AD\u5F00\u8FDE\u63A5\\n\u5982\u679C\u5F53\u524D\u53D1\u9001websocket\u6570\u636E\u5230\u540E\u7AEF\uFF0C\u4E00\u65E6\u8BF7\u6C42\u8D85\u65F6\uFF0Conclose\u4FBF\u4F1A\u6267\u884C\uFF0C\u8FD9\u65F6\u5019\u4FBF\u53EF\u8FDB\u884C\u7ED1\u5B9A\u597D\u7684\u91CD\u8FDE\u64CD\u4F5C\u3002\\n\u56E0\u6B64websocket\u5FC3\u8DF3\u91CD\u8FDE\u5C31\u5E94\u8FD0\u800C\u751F\u3002\\n\\n# \u5728 onclose \u4E8B\u4EF6\u6267\u884C\u91CD\u65B0\u8FDE\u63A5\u7684\u64CD\u4F5C\\n# \u8BBE\u7F6E\u6B62\u56DE\u9600 \u907F\u514D\u53CD\u590D\u91CD\u8FDE\\n# \u5FC3\u8DF3\u68C0\u6D4B\\n\\n\`\`\`js\\n//\u5FC3\u8DF3\u68C0\u6D4B\\nvar heartCheck = {\\ntimeout: 3000, //\u6BCF\u9694\u4E09\u79D2\u53D1\u9001\u5FC3\u8DF3\\nseverTimeout: 5000, //\u670D\u52A1\u7AEF\u8D85\u65F6\u65F6\u95F4\\ntimeoutObj: null,\\nserverTimeoutObj: null,\\nstart: function(){\\nvar _this = this;\\nthis.timeoutObj && clearTimeout(this.timeoutObj);\\nthis.serverTimeoutObj && clearTimeout(this.serverTimeoutObj);\\nthis.timeoutObj = setTimeout(function(){\\n//\u8FD9\u91CC\u53D1\u9001\u4E00\u4E2A\u5FC3\u8DF3\uFF0C\u540E\u7AEF\u6536\u5230\u540E\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u5FC3\u8DF3\u6D88\u606F\uFF0C\\n//onmessage\u62FF\u5230\u8FD4\u56DE\u7684\u5FC3\u8DF3\u5C31\u8BF4\u660E\u8FDE\u63A5\u6B63\u5E38\\nws.send(\\"123456789\\"); // \u5FC3\u8DF3\u5305\\n//\u8BA1\u7B97\u7B54\u590D\u7684\u8D85\u65F6\u65F6\u95F4\\n_this.serverTimeoutObj = setTimeout(function() {\\nws.close();\\n}, _this.severTimeout);\\n}, this.timeout)\\n}\\n}\\n\`\`\`\\n\\n\\n#\\n\u5FC3\u8DF3\u5305\u4E0D\u9700\u8981\u524D\u7AEF\u53D1\u3002\u53EA\u8981\u540E\u7AEF\u6BCF t \u65F6\u95F4\u5185\u53D1\u4E00\u4E2A\u6D88\u606F\u7ED9\u524D\u7AEF\u5C31\u884C\uFF0C\u524D\u7AEF\u9700\u8981\u505A\u7684\u5C31\u662F\u6709 2t \u65F6\u95F4\u5185\u6CA1\u6536\u5230\u6D88\u606F\uFF0C\u5C31\u4E3B\u52A8\u65AD\u5F00 ws \u5BF9\u8C61\uFF0C\u91CD\u5EFA\u4E00\u4E2A\u65B0\u7684 ws \u5BF9\u8C61\uFF0C\u5E76\u663E\u793A\u5230\u754C\u9762\u4E0A\u201D\u4F60\u7684\u8FDE\u63A5\u5DF2\u65AD\u5F00\uFF0C\u6B63\u5728\u91CD\u8FDE\u201C\uFF0C\u800C\u4E0A\u4E00\u4E2A ws \u5BF9\u8C61\u76F4\u63A5\u4E22\u5F03\u3002\u81F3\u4E8E\u670D\u52A1\u7AEF\u7684\u90A3\u4E2A ws \u5BF9\u8C61\uFF0C\u81EA\u7136\u4F1A\u5728\u4E00\u6BB5\u65F6\u95F4\u8FC7\u540E\u81EA\u5DF1\u65AD\u5F00\u3002\u524D\u7AEF\u5F80\u540E\u7AEF\u53D1\u5FC3\u8DF3\u662F\u6CA1\u5FC5\u8981\u7684\uFF0C\u56E0\u4E3A\u540E\u7AEF\u4E0D\u9700\u8981\u7528 UI \u5C55\u793A\u5B9E\u65F6\u7F51\u7EDC\u72B6\u51B5\u3002\\n\\n\\n\\nWebSocket \u672C\u8EAB\u5C31\u6709\u5FC3\u8DF3\uFF0C\u4F46\u5B83\u7684\u5FC3\u8DF3\u4E0E\u6211\u4EEC\u5E94\u7528\u5C42\u7684\u5FC3\u8DF3\u4E0D\u662F\u4E00\u56DE\u4E8B\uFF0C\u7136\u540E\u54EA\u6015\u53D1\u6D88\u606F\u53D1\u4E0D\u8FC7\u53BB\uFF0C\u5B83\u4E5F\u4E0D\u4F1A\u89E6\u53D1 close \u4E8B\u4EF6\uFF0C\u662F\u56E0\u4E3A\u5B83\u8FD8\u7EF4\u62A4\u8FD9\u4E00\u4E2A\u6D88\u606F buffer\uFF0C\u4F1A\u628A\u6CA1\u53D1\u8FC7\u53BB\u7684\u6D88\u606F\u653E\u8FDB buffer \u91CC\uFF0C\u7B49\u5F85\u7F51\u7EDC\u72B6\u51B5\u597D\u8F6C\u4E4B\u540E\u63A5\u7740\u53D1\u9001\u3002\u4E5F\u5C31\u662F\u8BF4 WebSocket \u672C\u8EAB\u5E76\u4E0D\u4FDD\u8BC1\u4F60\u7684\u5B9E\u65F6\uFF0C\u53EA\u662F\u5B83\u6709\u80FD\u529B\u8FBE\u5230\u5B9E\u65F6\u3002\u5176\u5B9E\u8BF4\u5230\u5E95\uFF0C\u6211\u4EEC\u9700\u8981\u7684\u53EA\u662F WebSocket \u80FD\u591A\u52A0\u4E00\u4E2A api\uFF0ConNetworkBad \u6765\u4FEE\u6539 UI \u544A\u77E5\u7528\u6237\u5F53\u524D\u7F51\u7EDC\u72B6\u51B5\u4E0D\u597D\uFF0C\u53D1\u7684\u6D88\u606F\u5BF9\u65B9\u53EF\u80FD\u4E0D\u80FD\u53CA\u65F6\u6536\u5230",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "7-sse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#7-sse",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "7. SSE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Server-sent Events \\u670D\\u52A1\\u7AEF\\u4E3B\\u52A8\\u63A8\\u9001")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "socketio412"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#socketio412",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "mailto:socket.io@4.1.2"
  }, "socket.io@4.1.2")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u5BF9websocket\u7684\u5C01\u88C5\\nimport {createServer} form 'http'\\nimport {Server} form 'socket.io'\\nconst httpServer = createServer()\\nconst io = new Server(httpServer,{\\n  // \u5141\u8BB8\u8DE8\u57DF\\n  cors:{\\n    origin:\\"*\\",\\n    methods:['GET','POST']\\n  }\\n})\\nio.on(\\"connection\\",(socket)=>{\\n  socket.on(\\"\u81EA\u5B9A\u4E49\u4E8B\u4EF61\\",(data)=>{\\n    socket.emit()\\n    io.emit('\u81EA\u5B9A\u4E49\u4E8B\u4EF62',\u6570\u636E)\\n  })\\n})\\nhttpServer.listen(3000)",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "\\u524D\\u7AEF"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u524D\\u7AEF",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u524D\\u7AEF"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u5F15\u5165 socket.io.min.js\\nconst socket = io.connect('http://127.0.0.1:8000')\\n// \u70B9\u51FB\u6309\u94AE\u65F6\\nsocket.emit('\u81EA\u5B9A\u4E49\u4E8B\u4EF61',\u53D1\u9001\u6570\u636E)\\n// \u63A5\u53D7\u6570\u636E\\nsocket.on('\u81EA\u5B9A\u4E49\u4E8B\u4EF62',(data)=>{ })",
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

//# sourceURL=webpack:///./src/Project/Websocket/index.md?`)}}]);
