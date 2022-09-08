---
group:
  path: /websocket
  title: Websocket
---

## Websocket

#### 前端发送请求

- https://zhuanlan.zhihu.com/p/355765098
- https://www.itdaan.com/blog/2016/08/25/efe52eeec16c.html

```js
// ws:借用http  wss:借用https
new WebSocket('ws://127.0.0.1:8080')
# 监听事件
webSocket.onopen = function(){
// 0链接还没有建立/正在建立 1链接建立成功 2链接正在关闭 3链接已经关闭
  console.log(webSocket.readyState)
}
# 发送数据
// 当点击按钮时候 发数据
  websocket.send('数据')
# 接受数据
websocket.onmessage = function({data}){
  console.log(data)
}
```

#### webSocket-node

```js
import webSocketServer from 'websocket'
import http form 'http'
const server = http.createServer((req,res)=>{
})

server.listen(3000,()=>'localhost://3000')
const webSocketServer = new webSocketServer({
   httpServer:server,
   autoAcceptConnections:false  // http 跨域控制
})

// 开启链接
webSocketServer.on('request',(req)=>{

  if(!orginIsAllowed(req.origin)){//允许的请求
    request.reject()
    return;
  }

  let connection = request.accept('echo-protocol');
  // 有消息过来了
  connection.on('message',(message)=>{
     connection.sendBytes()
     // 给前端发送数据
     connection.send('发送数据')
  })

  connection.on('close',(reasonCode,description)=>{
    // 断开链接
  })
})
# 识别不同的客户端
let conArr = []
webSocketServer.on('request',(req)=>{
  let connection = req.accept()
  conArr.push(connection)

  connection.on('message',(msg)=>{
     for(let i =0;i<conArr.length;i++){
       conArr[i].send('xxx')
      // 为不同的客户端返回不同的数据
     }
  })
})
```

#### ws

```js
# open close error message connection
yarn add ws
#
import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.send('something');
});
```

#### 项目

- https://www.itdaan.com/blog/2016/08/25/efe52eeec16c.html

```js
# model
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
    },
```

```js
# websockt
/*
 * url 定义路由参数
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
}

```

#### 心跳

````js

服务端心跳检测
客户端断开重连

# 一般错误 通过 onMessage onError事件处理
# 当断网的时候 浏览器不会执行websocket的onclose方法 无法知道是否断开连接
如果当前发送websocket数据到后端，一旦请求超时，onclose便会执行，这时候便可进行绑定好的重连操作。
因此websocket心跳重连就应运而生。

# 在 onclose 事件执行重新连接的操作
# 设置止回阀 避免反复重连
# 心跳检测

```js
//心跳检测
var heartCheck = {
timeout: 3000, //每隔三秒发送心跳
severTimeout: 5000, //服务端超时时间
timeoutObj: null,
serverTimeoutObj: null,
start: function(){
var _this = this;
this.timeoutObj && clearTimeout(this.timeoutObj);
this.serverTimeoutObj && clearTimeout(this.serverTimeoutObj);
this.timeoutObj = setTimeout(function(){
//这里发送一个心跳，后端收到后，返回一个心跳消息，
//onmessage拿到返回的心跳就说明连接正常
ws.send("123456789"); // 心跳包
//计算答复的超时时间
_this.serverTimeoutObj = setTimeout(function() {
ws.close();
}, _this.severTimeout);
}, this.timeout)
}
}
```


#
心跳包不需要前端发。只要后端每 t 时间内发一个消息给前端就行，前端需要做的就是有 2t 时间内没收到消息，就主动断开 ws 对象，重建一个新的 ws 对象，并显示到界面上”你的连接已断开，正在重连“，而上一个 ws 对象直接丢弃。至于服务端的那个 ws 对象，自然会在一段时间过后自己断开。前端往后端发心跳是没必要的，因为后端不需要用 UI 展示实时网络状况。



WebSocket 本身就有心跳，但它的心跳与我们应用层的心跳不是一回事，然后哪怕发消息发不过去，它也不会触发 close 事件，是因为它还维护这一个消息 buffer，会把没发过去的消息放进 buffer 里，等待网络状况好转之后接着发送。也就是说 WebSocket 本身并不保证你的实时，只是它有能力达到实时。其实说到底，我们需要的只是 WebSocket 能多加一个 api，onNetworkBad 来修改 UI 告知用户当前网络状况不好，发的消息对方可能不能及时收到
````

## 7. SSE

- Server-sent Events 服务端主动推送

#### socket.io@4.1.2

```js
# 对websocket的封装
import {createServer} form 'http'
import {Server} form 'socket.io'
const httpServer = createServer()
const io = new Server(httpServer,{
  // 允许跨域
  cors:{
    origin:"*",
    methods:['GET','POST']
  }
})
io.on("connection",(socket)=>{
  socket.on("自定义事件1",(data)=>{
    socket.emit()
    io.emit('自定义事件2',数据)
  })
})
httpServer.listen(3000)
```

#### 前端

```js
# 引入 socket.io.min.js
const socket = io.connect('http://127.0.0.1:8000')
// 点击按钮时
socket.emit('自定义事件1',发送数据)
// 接受数据
socket.on('自定义事件2',(data)=>{ })
```
