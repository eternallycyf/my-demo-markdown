(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{nrpm:function(d,s,o){"use strict";o.r(s);var r=o("cDcd"),e=o.n(r),n=o("dEAq"),u=o.n(n),t=o("6T1g");const i=e.a.memo(({demos:a})=>e.a.createElement(e.a.Fragment,null,e.a.createElement("div",{className:"markdown"},e.a.createElement("h2",{id:"websocket"},e.a.createElement(n.AnchorLink,{to:"#websocket","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Websocket"),e.a.createElement("h4",{id:"\u524D\u7AEF\u53D1\u9001\u8BF7\u6C42"},e.a.createElement(n.AnchorLink,{to:"#\u524D\u7AEF\u53D1\u9001\u8BF7\u6C42","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u524D\u7AEF\u53D1\u9001\u8BF7\u6C42"),e.a.createElement("ul",null,e.a.createElement("li",null,e.a.createElement(n.Link,{to:"https://zhuanlan.zhihu.com/p/355765098"},"https://zhuanlan.zhihu.com/p/355765098")),e.a.createElement("li",null,e.a.createElement(n.Link,{to:"https://www.itdaan.com/blog/2016/08/25/efe52eeec16c.html"},"https://www.itdaan.com/blog/2016/08/25/efe52eeec16c.html"))),e.a.createElement(t.a,{code:`// ws:\u501F\u7528http  wss:\u501F\u7528https
new WebSocket('ws://127.0.0.1:8080')
# \u76D1\u542C\u4E8B\u4EF6
webSocket.onopen = function(){
// 0\u94FE\u63A5\u8FD8\u6CA1\u6709\u5EFA\u7ACB/\u6B63\u5728\u5EFA\u7ACB 1\u94FE\u63A5\u5EFA\u7ACB\u6210\u529F 2\u94FE\u63A5\u6B63\u5728\u5173\u95ED 3\u94FE\u63A5\u5DF2\u7ECF\u5173\u95ED
  console.log(webSocket.readyState)
}
# \u53D1\u9001\u6570\u636E
// \u5F53\u70B9\u51FB\u6309\u94AE\u65F6\u5019 \u53D1\u6570\u636E
  websocket.send('\u6570\u636E')
# \u63A5\u53D7\u6570\u636E
websocket.onmessage = function({data}){
  console.log(data)
}`,lang:"js"}),e.a.createElement("h4",{id:"websocket-node"},e.a.createElement(n.AnchorLink,{to:"#websocket-node","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"webSocket-node"),e.a.createElement(t.a,{code:`import webSocketServer from 'websocket'
import http form 'http'
const server = http.createServer((req,res)=>{
})

server.listen(3000,()=>'localhost://3000')
const webSocketServer = new webSocketServer({
   httpServer:server,
   autoAcceptConnections:false  // http \u8DE8\u57DF\u63A7\u5236
})

// \u5F00\u542F\u94FE\u63A5
webSocketServer.on('request',(req)=>{

  if(!orginIsAllowed(req.origin)){//\u5141\u8BB8\u7684\u8BF7\u6C42
    request.reject()
    return;
  }

  let connection = request.accept('echo-protocol');
  // \u6709\u6D88\u606F\u8FC7\u6765\u4E86
  connection.on('message',(message)=>{
     connection.sendBytes()
     // \u7ED9\u524D\u7AEF\u53D1\u9001\u6570\u636E
     connection.send('\u53D1\u9001\u6570\u636E')
  })

  connection.on('close',(reasonCode,description)=>{
    // \u65AD\u5F00\u94FE\u63A5
  })
})
# \u8BC6\u522B\u4E0D\u540C\u7684\u5BA2\u6237\u7AEF
let conArr = []
webSocketServer.on('request',(req)=>{
  let connection = req.accept()
  conArr.push(connection)

  connection.on('message',(msg)=>{
     for(let i =0;i<conArr.length;i++){
       conArr[i].send('xxx')
      // \u4E3A\u4E0D\u540C\u7684\u5BA2\u6237\u7AEF\u8FD4\u56DE\u4E0D\u540C\u7684\u6570\u636E
     }
  })
})`,lang:"js"}),e.a.createElement("h4",{id:"ws"},e.a.createElement(n.AnchorLink,{to:"#ws","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"ws"),e.a.createElement(t.a,{code:`# open close error message connection
yarn add ws
#
import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.send('something');
});`,lang:"js"}),e.a.createElement("h4",{id:"\u9879\u76EE"},e.a.createElement(n.AnchorLink,{to:"#\u9879\u76EE","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u9879\u76EE"),e.a.createElement("ul",null,e.a.createElement("li",null,e.a.createElement(n.Link,{to:"https://www.itdaan.com/blog/2016/08/25/efe52eeec16c.html"},"https://www.itdaan.com/blog/2016/08/25/efe52eeec16c.html"))),e.a.createElement(t.a,{code:`# model
*fetch({ payload: { listData } }, { call, put, select }) {
      let { dd, dindex } = yield select((state) => state.MoltenIronLadle);
      dd.push({
        year: listData.monitorCPU[0][0],
        value: listData.monitorCPU[0][1],
      });
      if (dd.lenth > 300) {
        dd.splice(0, dd.lenth - 300);
      }
      yield put({
        type: 'save',
        payload: {
          dd: dd,
          dindex: ++dindex,
        },
      });
    },

openSocket({ dispatch }) {
      return webServer.websocketPromise((data) => {
        dispatch({ type: 'fetch', payload: { listData: data } });
      });
    },`,lang:"js"}),e.a.createElement(t.a,{code:`# websockt
/*
 * url \u5B9A\u4E49\u8DEF\u7531\u53C2\u6570
 *
 */
export function websocketPromise(action) {
  let ws;
  ws = new WebSocket('ws://47.96.224.206:8080/ws/monitor');
  ws.onopen = (wtr) => {
    ws.send('12321');
  };
  ws.onmessage = function ({ data }) {
    if (data.indexOf('monitorCPU') > -1) {
      let list = eval('(' + data + ')');
      action(list);
    }
  };
  ws.onclose = function (evt) {
    console.log('Connection closed.');
  };
  return ws;
}`,lang:"js"}),e.a.createElement("h4",{id:"\u5FC3\u8DF3"},e.a.createElement(n.AnchorLink,{to:"#\u5FC3\u8DF3","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5FC3\u8DF3"),e.a.createElement(t.a,{code:`\u670D\u52A1\u7AEF\u5FC3\u8DF3\u68C0\u6D4B
\u5BA2\u6237\u7AEF\u65AD\u5F00\u91CD\u8FDE

# \u4E00\u822C\u9519\u8BEF \u901A\u8FC7 onMessage onError\u4E8B\u4EF6\u5904\u7406
# \u5F53\u65AD\u7F51\u7684\u65F6\u5019 \u6D4F\u89C8\u5668\u4E0D\u4F1A\u6267\u884Cwebsocket\u7684onclose\u65B9\u6CD5 \u65E0\u6CD5\u77E5\u9053\u662F\u5426\u65AD\u5F00\u8FDE\u63A5
\u5982\u679C\u5F53\u524D\u53D1\u9001websocket\u6570\u636E\u5230\u540E\u7AEF\uFF0C\u4E00\u65E6\u8BF7\u6C42\u8D85\u65F6\uFF0Conclose\u4FBF\u4F1A\u6267\u884C\uFF0C\u8FD9\u65F6\u5019\u4FBF\u53EF\u8FDB\u884C\u7ED1\u5B9A\u597D\u7684\u91CD\u8FDE\u64CD\u4F5C\u3002
\u56E0\u6B64websocket\u5FC3\u8DF3\u91CD\u8FDE\u5C31\u5E94\u8FD0\u800C\u751F\u3002

# \u5728 onclose \u4E8B\u4EF6\u6267\u884C\u91CD\u65B0\u8FDE\u63A5\u7684\u64CD\u4F5C
# \u8BBE\u7F6E\u6B62\u56DE\u9600 \u907F\u514D\u53CD\u590D\u91CD\u8FDE
# \u5FC3\u8DF3\u68C0\u6D4B

\`\`\`js
//\u5FC3\u8DF3\u68C0\u6D4B
var heartCheck = {
timeout: 3000, //\u6BCF\u9694\u4E09\u79D2\u53D1\u9001\u5FC3\u8DF3
severTimeout: 5000, //\u670D\u52A1\u7AEF\u8D85\u65F6\u65F6\u95F4
timeoutObj: null,
serverTimeoutObj: null,
start: function(){
var _this = this;
this.timeoutObj && clearTimeout(this.timeoutObj);
this.serverTimeoutObj && clearTimeout(this.serverTimeoutObj);
this.timeoutObj = setTimeout(function(){
//\u8FD9\u91CC\u53D1\u9001\u4E00\u4E2A\u5FC3\u8DF3\uFF0C\u540E\u7AEF\u6536\u5230\u540E\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u5FC3\u8DF3\u6D88\u606F\uFF0C
//onmessage\u62FF\u5230\u8FD4\u56DE\u7684\u5FC3\u8DF3\u5C31\u8BF4\u660E\u8FDE\u63A5\u6B63\u5E38
ws.send("123456789"); // \u5FC3\u8DF3\u5305
//\u8BA1\u7B97\u7B54\u590D\u7684\u8D85\u65F6\u65F6\u95F4
_this.serverTimeoutObj = setTimeout(function() {
ws.close();
}, _this.severTimeout);
}, this.timeout)
}
}
\`\`\`


#
\u5FC3\u8DF3\u5305\u4E0D\u9700\u8981\u524D\u7AEF\u53D1\u3002\u53EA\u8981\u540E\u7AEF\u6BCF t \u65F6\u95F4\u5185\u53D1\u4E00\u4E2A\u6D88\u606F\u7ED9\u524D\u7AEF\u5C31\u884C\uFF0C\u524D\u7AEF\u9700\u8981\u505A\u7684\u5C31\u662F\u6709 2t \u65F6\u95F4\u5185\u6CA1\u6536\u5230\u6D88\u606F\uFF0C\u5C31\u4E3B\u52A8\u65AD\u5F00 ws \u5BF9\u8C61\uFF0C\u91CD\u5EFA\u4E00\u4E2A\u65B0\u7684 ws \u5BF9\u8C61\uFF0C\u5E76\u663E\u793A\u5230\u754C\u9762\u4E0A\u201D\u4F60\u7684\u8FDE\u63A5\u5DF2\u65AD\u5F00\uFF0C\u6B63\u5728\u91CD\u8FDE\u201C\uFF0C\u800C\u4E0A\u4E00\u4E2A ws \u5BF9\u8C61\u76F4\u63A5\u4E22\u5F03\u3002\u81F3\u4E8E\u670D\u52A1\u7AEF\u7684\u90A3\u4E2A ws \u5BF9\u8C61\uFF0C\u81EA\u7136\u4F1A\u5728\u4E00\u6BB5\u65F6\u95F4\u8FC7\u540E\u81EA\u5DF1\u65AD\u5F00\u3002\u524D\u7AEF\u5F80\u540E\u7AEF\u53D1\u5FC3\u8DF3\u662F\u6CA1\u5FC5\u8981\u7684\uFF0C\u56E0\u4E3A\u540E\u7AEF\u4E0D\u9700\u8981\u7528 UI \u5C55\u793A\u5B9E\u65F6\u7F51\u7EDC\u72B6\u51B5\u3002



WebSocket \u672C\u8EAB\u5C31\u6709\u5FC3\u8DF3\uFF0C\u4F46\u5B83\u7684\u5FC3\u8DF3\u4E0E\u6211\u4EEC\u5E94\u7528\u5C42\u7684\u5FC3\u8DF3\u4E0D\u662F\u4E00\u56DE\u4E8B\uFF0C\u7136\u540E\u54EA\u6015\u53D1\u6D88\u606F\u53D1\u4E0D\u8FC7\u53BB\uFF0C\u5B83\u4E5F\u4E0D\u4F1A\u89E6\u53D1 close \u4E8B\u4EF6\uFF0C\u662F\u56E0\u4E3A\u5B83\u8FD8\u7EF4\u62A4\u8FD9\u4E00\u4E2A\u6D88\u606F buffer\uFF0C\u4F1A\u628A\u6CA1\u53D1\u8FC7\u53BB\u7684\u6D88\u606F\u653E\u8FDB buffer \u91CC\uFF0C\u7B49\u5F85\u7F51\u7EDC\u72B6\u51B5\u597D\u8F6C\u4E4B\u540E\u63A5\u7740\u53D1\u9001\u3002\u4E5F\u5C31\u662F\u8BF4 WebSocket \u672C\u8EAB\u5E76\u4E0D\u4FDD\u8BC1\u4F60\u7684\u5B9E\u65F6\uFF0C\u53EA\u662F\u5B83\u6709\u80FD\u529B\u8FBE\u5230\u5B9E\u65F6\u3002\u5176\u5B9E\u8BF4\u5230\u5E95\uFF0C\u6211\u4EEC\u9700\u8981\u7684\u53EA\u662F WebSocket \u80FD\u591A\u52A0\u4E00\u4E2A api\uFF0ConNetworkBad \u6765\u4FEE\u6539 UI \u544A\u77E5\u7528\u6237\u5F53\u524D\u7F51\u7EDC\u72B6\u51B5\u4E0D\u597D\uFF0C\u53D1\u7684\u6D88\u606F\u5BF9\u65B9\u53EF\u80FD\u4E0D\u80FD\u53CA\u65F6\u6536\u5230`,lang:"js"}),e.a.createElement("h2",{id:"7-sse"},e.a.createElement(n.AnchorLink,{to:"#7-sse","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"7. SSE"),e.a.createElement("ul",null,e.a.createElement("li",null,"Server-sent Events \u670D\u52A1\u7AEF\u4E3B\u52A8\u63A8\u9001")),e.a.createElement("h4",{id:"socketio412"},e.a.createElement(n.AnchorLink,{to:"#socketio412","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),e.a.createElement(n.Link,{to:"mailto:socket.io@4.1.2"},"socket.io@4.1.2")),e.a.createElement(t.a,{code:`# \u5BF9websocket\u7684\u5C01\u88C5
import {createServer} form 'http'
import {Server} form 'socket.io'
const httpServer = createServer()
const io = new Server(httpServer,{
  // \u5141\u8BB8\u8DE8\u57DF
  cors:{
    origin:"*",
    methods:['GET','POST']
  }
})
io.on("connection",(socket)=>{
  socket.on("\u81EA\u5B9A\u4E49\u4E8B\u4EF61",(data)=>{
    socket.emit()
    io.emit('\u81EA\u5B9A\u4E49\u4E8B\u4EF62',\u6570\u636E)
  })
})
httpServer.listen(3000)`,lang:"js"}),e.a.createElement("h4",{id:"\u524D\u7AEF"},e.a.createElement(n.AnchorLink,{to:"#\u524D\u7AEF","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u524D\u7AEF"),e.a.createElement(t.a,{code:`# \u5F15\u5165 socket.io.min.js
const socket = io.connect('http://127.0.0.1:8000')
// \u70B9\u51FB\u6309\u94AE\u65F6
socket.emit('\u81EA\u5B9A\u4E49\u4E8B\u4EF61',\u53D1\u9001\u6570\u636E)
// \u63A5\u53D7\u6570\u636E
socket.on('\u81EA\u5B9A\u4E49\u4E8B\u4EF62',(data)=>{ })`,lang:"js"}))));s.default=a=>{const l=e.a.useContext(n.context),m=l.demos;return e.a.useEffect(()=>{var c;a!=null&&(c=a.location)!==null&&c!==void 0&&c.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(a.location.hash.slice(1)))},[]),e.a.createElement(i,{demos:m})}}}]);
