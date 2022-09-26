(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{I17L:function(u,c,a){"use strict";a.r(c);var o=a("cDcd"),e=a.n(o),n=a("dEAq"),m=a.n(n),t=a("H1Ra");const i=e.a.memo(({demos:r})=>e.a.createElement(e.a.Fragment,null,e.a.createElement("div",{className:"markdown"},e.a.createElement("h1",{id:"nextjs"},e.a.createElement(n.AnchorLink,{to:"#nextjs","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"NextJS"),e.a.createElement("h2",{id:"\u51C6\u5907\u9636\u6BB5"},e.a.createElement(n.AnchorLink,{to:"#\u51C6\u5907\u9636\u6BB5","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u51C6\u5907\u9636\u6BB5"),e.a.createElement(t.a,{code:`# \u95EE\u9898
\u9996\u5C4F\u901F\u5EA6\u6162
seo\u4F18\u5316
\u521D\u59CB\u5316\u6570\u636E\u90FD\u8981\u524D\u7AEF\u8BF7\u6C42
# Oauth \u6388\u6743\u4F53\u7CFB
# Redis \u6570\u636E\u5E93

# \u6784\u5EFA
npx create-next-app blog --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"
http://localhost:3000
yarn dev
# packjson
  "scripts": {
    "dev": "node server.js",
  }`,lang:"js"}),e.a.createElement("h3",{id:"\u9875\u9762\u7ED3\u6784"},e.a.createElement(n.AnchorLink,{to:"#\u9875\u9762\u7ED3\u6784","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u9875\u9762\u7ED3\u6784"),e.a.createElement(t.a,{code:`# pages/index.js
\u5FC5\u987B export default \u4E00\u4E2A \u7EC4\u4EF6
# server.js node\u670D\u52A1\u7684\u4E3B\u9875\u9762

# styles/global.css \u5168\u5C40\u7684\u6837\u5F0F

# .babelrc

# next.config.js`,lang:"js"}),e.a.createElement("h3",{id:"\u547D\u4EE4"},e.a.createElement(n.AnchorLink,{to:"#\u547D\u4EE4","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u547D\u4EE4"),e.a.createElement(t.a,{code:`next export
next build`,lang:"js"}),e.a.createElement("h2",{id:"ssr"},e.a.createElement(n.AnchorLink,{to:"#ssr","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"SSR"),e.a.createElement("h3",{id:"nextjs-1"},e.a.createElement(n.AnchorLink,{to:"#nextjs-1","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"nextJS"),e.a.createElement("h4",{id:"base"},e.a.createElement(n.AnchorLink,{to:"#base","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"base"),e.a.createElement(t.a,{code:`# server.js
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()  // res.send
# app.prepare().then(()=>xxxxxx)
\u5F53pages\u9875\u9762\u4E0B\u9875\u9762\u6E32\u67D3\u5B8C\u540E\u6267\u884C
# handle(ctx.req,ctx.res)
\u5F97\u5230\u540E\u7AEF\u8FD4\u56DE\u7684\u4E1C\u897F

# \u5176\u4ED6
const Koa = require('koa')
const router = new Router()
app.prepare().then(() => {
  const server = new Koa()
  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })
  server.listen(3000, () => {
    console.log('\u6253\u5F00' + 'http://localhost:3000')
  })
})`,lang:"js"}),e.a.createElement("h4",{id:"css"},e.a.createElement(n.AnchorLink,{to:"#css","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"css"),e.a.createElement(t.a,{code:`# nextjs< 9.0 next.config.js
yarn add @zeit/next-css
const withCSS = require('@zeit/next-css')
if (typeof require !== "undefined") {
  require.extensions['.css'] = file => {
  }
}
module.exports = withCSS({})
// module.exports = withLess(withCss({}))
# \u5168\u5C40css
styles/global.css
pages/_app.js
import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
export default MyApp
# \u7EC4\u4EF6css
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
module.exports = withSass(withCSS({}))`,lang:"js"}),e.a.createElement("h4",{id:"antd"},e.a.createElement(n.AnchorLink,{to:"#antd","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"antd"),e.a.createElement(t.a,{code:`#.babelrc
yarn add antd babel-plugin-import --save
npm install --save-dev babel-plugin-styled-components
{
  "presets": ["next/babel"],
  "plugins": [
    [
      "import",
      {
        "libraryName": "antd",
       // "style":'css' \u7528\u4E86\u8FD9\u4E2A\u5C31\u4E0D\u7528\u5BFC\u5165 antdcss\u4E86
       // \u4F46\u662F\u6709Bug
      }
    ],
    ["styled-components", { "ssr": true }]
  ]
}
# pages/_app.js
import 'antd/dist/antd.css'`,lang:"js"}),e.a.createElement("h4",{id:"redux"},e.a.createElement(n.AnchorLink,{to:"#redux","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"redux"),e.a.createElement(t.a,{code:`# yarn run dev \u89E3\u51B3\u70ED\u66F4\u65B0\u95EE\u9898
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
export default store;`,lang:"js"}),e.a.createElement("h2",{id:"\u5176\u4ED6\u5E93"},e.a.createElement(n.AnchorLink,{to:"#\u5176\u4ED6\u5E93","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5176\u4ED6\u5E93"),e.a.createElement("h3",{id:"koa"},e.a.createElement(n.AnchorLink,{to:"#koa","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"koa"),e.a.createElement("h4",{id:"base-1"},e.a.createElement(n.AnchorLink,{to:"#base-1","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"base"),e.a.createElement(t.a,{code:`const Koa = require('koa');
const Router = require('koa-router');
const server = new Koa();
const router = new Router();

router.get('/test', ctx => {});

server.use(async (ctx, next) => {
  ctx.body = \`<span>hello</span>\`;
});

server.use(router.routes());
server.listen(3000, () => {
  console.log('\u6253\u5F00' + 'http://localhost:3000');
});`,lang:"js"}),e.a.createElement("h4",{id:"\u8FD4\u56DE\u6570\u636E"},e.a.createElement(n.AnchorLink,{to:"#\u8FD4\u56DE\u6570\u636E","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u8FD4\u56DE\u6570\u636E"),e.a.createElement(t.a,{code:`# \u8FD4\u56DE\u6570\u636E
ctx.body = {success:true}
ctx.set('Content-Type','application/json')`,lang:"js"}),e.a.createElement("h4",{id:"context--ctx"},e.a.createElement(n.AnchorLink,{to:"#context--ctx","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"context | ctx"),e.a.createElement(t.a,{code:`# node\u539F\u751F\u7684req res
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
ctx.etag=`,lang:"js"}),e.a.createElement("h4",{id:"use"},e.a.createElement(n.AnchorLink,{to:"#use","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"use"),e.a.createElement(t.a,{code:`const Koa = require('koa')
const server = new Koa()
# use\u4E2D\u95F4\u4EF6
 serve.use(async(ctx,next)=>{
   await next()
 })`,lang:"js"}),e.a.createElement("h4",{id:"koa-router"},e.a.createElement(n.AnchorLink,{to:"#koa-router","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"koa-router"),e.a.createElement(t.a,{code:`yarn add koa-router
const Router = require("koa-router");
const router = new Router()
router.get('/test',()=>{

})
server.use(router.routes())
# \u8DEF\u7531\u4F20\u53C2
router.get('/test/:id',()=>{
  ctx.params.id
})`,lang:"js"}),e.a.createElement("h3",{id:"redis"},e.a.createElement(n.AnchorLink,{to:"#redis","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Redis"),e.a.createElement("h4",{id:"\u914D\u7F6E"},e.a.createElement(n.AnchorLink,{to:"#\u914D\u7F6E","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u914D\u7F6E"),e.a.createElement(t.a,{code:`\u4E00\u822C\u7528\u4E8E\u5185\u5B58\u5B58\u50A8
/usr/local/etc/redis.conf
#
redis-server
redis-cli -p 6379
#
\u5BC6\u7801
auth 666222
# node \u8FDE\u63A5 redis
ioredis`,lang:"js"}),e.a.createElement("h4",{id:"\u64CD\u4F5C\u547D\u4EE4"},e.a.createElement(n.AnchorLink,{to:"#\u64CD\u4F5C\u547D\u4EE4","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u64CD\u4F5C\u547D\u4EE4"),e.a.createElement(t.a,{code:`KEYS *
set a 111
get a
del key
setex key time value     //  \u8FC7\u671F\u65F6\u95F4 10s
set session:sessionId 123//  \u8BBE\u7F6Esession
get session:sessionId    // \u83B7\u53D6session`,lang:"js"}),e.a.createElement("h4",{id:"ioredis"},e.a.createElement(n.AnchorLink,{to:"#ioredis","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"ioredis"),e.a.createElement(t.a,{code:`yarn add ioredis
const Redis = require('ioredis')
const redis = new Redis({
  port: 6378,
  password: "666222",
})
await redis.set('c', 123)
await redis.get('c')
await redis.del('c',)
await redis.setex('c', 10, 123)
const keys = await redis.keys('*')`,lang:"js"}),e.a.createElement("h3",{id:"antd-1"},e.a.createElement(n.AnchorLink,{to:"#antd-1","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"antd"),e.a.createElement(t.a,{code:"yarn create next-app --example with-ant-design with-ant-design-app",lang:"unknown"}),e.a.createElement("h2",{id:"\u9879\u76EE\u6253\u5305"},e.a.createElement(n.AnchorLink,{to:"#\u9879\u76EE\u6253\u5305","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u9879\u76EE\u6253\u5305"),e.a.createElement(t.a,{code:`## \u672C\u5730\u8FD0\u884C
yarn dev

## \u672C\u5730\u6253\u5305
yarn build

## \u670D\u52A1\u5668\u90E8\u7F72
\`\`\`js
# 1.\u4F7F\u7528sftp\u5C06\u9664\u4E86node_modules\u7684\u6587\u4EF6\u653E\u5728\u670D\u52A1\u5668 ./home/blog
# 2.\u5728 ./home/blog \u6839\u76EE\u5F55\u8FD0\u884C
docker-compose up -d
# 3.\u505C\u6B62\u547D\u4EE4
docker-compose down
\`\`\``,lang:"dockerfile"}))));c.default=r=>{const d=e.a.useContext(n.context),l=d.demos;return e.a.useEffect(()=>{var s;r!=null&&(s=r.location)!==null&&s!==void 0&&s.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(r.location.hash.slice(1)))},[]),e.a.createElement(i,{demos:l})}}}]);
