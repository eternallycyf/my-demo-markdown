---
order: 9
nav:
  title: Article
  path: /article
---

# NextJS

## 准备阶段

```js
# 问题
首屏速度慢
seo优化
初始化数据都要前端请求
# Oauth 授权体系
# Redis 数据库

# 构建
npx create-next-app blog --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"
http://localhost:3000
yarn dev
# packjson
  "scripts": {
    "dev": "node server.js",
  }
```

### 页面结构

```js
# pages/index.js
必须 export default 一个 组件
# server.js node服务的主页面

# styles/global.css 全局的样式

# .babelrc

# next.config.js
```

### 命令

```js
next export
next build
```

## SSR

### nextJS

#### base

```js
# server.js
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()  // res.send
# app.prepare().then(()=>xxxxxx)
当pages页面下页面渲染完后执行
# handle(ctx.req,ctx.res)
得到后端返回的东西

# 其他
const Koa = require('koa')
const router = new Router()
app.prepare().then(() => {
  const server = new Koa()
  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })
  server.listen(3000, () => {
    console.log('打开' + 'http://localhost:3000')
  })
})
```

#### css

```js
# nextjs< 9.0 next.config.js
yarn add @zeit/next-css
const withCSS = require('@zeit/next-css')
if (typeof require !== "undefined") {
  require.extensions['.css'] = file => {
  }
}
module.exports = withCSS({})
// module.exports = withLess(withCss({}))
# 全局css
styles/global.css
pages/_app.js
import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
export default MyApp
# 组件css
pages/Header/index.module.css
.header {
  color: red;
}
pages/Header/index.js
import classes from './index.module.css'
<div className={classes.header}>Header</div>
# sass
yarn add @zeit/next-sass node-sass@4.14.1
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
module.exports = withSass(withCSS({}))

```

#### antd

```js
#.babelrc
yarn add antd babel-plugin-import --save
npm install --save-dev babel-plugin-styled-components
{
  "presets": ["next/babel"],
  "plugins": [
    [
      "import",
      {
        "libraryName": "antd",
       // "style":'css' 用了这个就不用导入 antdcss了
       // 但是有Bug
      }
    ],
    ["styled-components", { "ssr": true }]
  ]
}
# pages/_app.js
import 'antd/dist/antd.css'
```

#### redux

```js
# yarn run dev 解决热更新问题
npm install next-redux-wrapper react-redux redux redux-thunk --save
npm install redux-devtools-extension --save-dev

# ./pages/_app.js
import '../styles/global.css'
import 'antd/dist/antd.css'
import { Provider } from "react-redux"
import store from "./model/store/index"
import withRedux, { createWrapper } from "next-redux-wrapper";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        < Component {...pageProps} />
      </Provider>
    </>
  )
}
const makestore = () => store
const wrapper = createWrapper(makestore)
export default wrapper.withRedux(MyApp)
# store
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension'
const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk)
));
export default store;
```

## 其他库

### koa

#### base

```js
const Koa = require('koa');
const Router = require('koa-router');
const server = new Koa();
const router = new Router();

router.get('/test', ctx => {});

server.use(async (ctx, next) => {
  ctx.body = `<span>hello</span>`;
});

server.use(router.routes());
server.listen(3000, () => {
  console.log('打开' + 'http://localhost:3000');
});
```

#### 返回数据

```js
# 返回数据
ctx.body = {success:true}
ctx.set('Content-Type','application/json')
```

#### context | ctx

```js
# node原生的req res
ctx.req
ctx.res
# request
ctx.header
ctx.headers
ctx.method
ctx.method=
ctx.url
ctx.url=
ctx.originalUrl
ctx.origin
ctx.href
ctx.path
ctx.path=
ctx.query
ctx.query=
ctx.querystring
ctx.querystring=
ctx.host
ctx.hostname
ctx.fresh
ctx.stale
ctx.socket
ctx.protocol
ctx.secure
ctx.ip
ctx.ips
ctx.subdomains
ctx.is()
ctx.accepts()
ctx.acceptsEncodings()
ctx.acceptsCharsets()
ctx.acceptsLanguages()
ctx.get()
# Response
ctx.body
ctx.body=
ctx.status
ctx.status=
ctx.message
ctx.message=
ctx.length=
ctx.length
ctx.type=
ctx.type
ctx.headerSent
ctx.redirect()
ctx.attachment()
ctx.set()
ctx.append()
ctx.remove()
ctx.lastModified=
ctx.etag=
```

#### use

```js
const Koa = require('koa')
const server = new Koa()
# use中间件
 serve.use(async(ctx,next)=>{
   await next()
 })
```

#### koa-router

```js
yarn add koa-router
const Router = require("koa-router");
const router = new Router()
router.get('/test',()=>{

})
server.use(router.routes())
# 路由传参
router.get('/test/:id',()=>{
  ctx.params.id
})
```

### Redis

#### 配置

```js
一般用于内存存储
/usr/local/etc/redis.conf
#
redis-server
redis-cli -p 6379
#
密码
auth 666222
# node 连接 redis
ioredis
```

#### 操作命令

```js
KEYS *
set a 111
get a
del key
setex key time value     //  过期时间 10s
set session:sessionId 123//  设置session
get session:sessionId    // 获取session
```

#### ioredis

```js
yarn add ioredis
const Redis = require('ioredis')
const redis = new Redis({
  port: 6378,
  password: "666222",
})
await redis.set('c', 123)
await redis.get('c')
await redis.del('c',)
await redis.setex('c', 10, 123)
const keys = await redis.keys('*')
```

### antd

```
yarn create next-app --example with-ant-design with-ant-design-app
```

## 项目打包

````dockerfile

## 本地运行
yarn dev

## 本地打包
yarn build

## 服务器部署
```js
# 1.使用sftp将除了node_modules的文件放在服务器 ./home/blog
# 2.在 ./home/blog 根目录运行
docker-compose up -d
# 3.停止命令
docker-compose down
```
````
