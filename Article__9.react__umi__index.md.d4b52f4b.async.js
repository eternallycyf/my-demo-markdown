(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{Cyvo:function(m,r,t){"use strict";t.r(r);var o=t("cDcd"),e=t.n(o),n=t("dEAq"),d=t.n(n),a=t("H1Ra");const s=e.a.memo(({demos:i})=>e.a.createElement(e.a.Fragment,null,e.a.createElement("div",{className:"markdown"},e.a.createElement("h1",{id:"umijs"},e.a.createElement(n.AnchorLink,{to:"#umijs","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"UmiJS"),e.a.createElement(a.a,{code:`yarn create @umijs/umi-app
mfsu: {}, // \u6539\u53D8base\u8DEF\u5F84\u52A0\u901F`,lang:"js"}),e.a.createElement("h2",{id:"\u57FA\u7840\u914D\u7F6E"},e.a.createElement(n.AnchorLink,{to:"#\u57FA\u7840\u914D\u7F6E","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u57FA\u7840\u914D\u7F6E"),e.a.createElement("h3",{id:"hash"},e.a.createElement(n.AnchorLink,{to:"#hash","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"hash"),e.a.createElement(a.a,{code:`hash: true;
\u907F\u514D\u6D4F\u89C8\u5668\u52A0\u8F7D\u7F13\u5B58;`,lang:"js"}),e.a.createElement("h3",{id:"mock"},e.a.createElement(n.AnchorLink,{to:"#mock","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"mock"),e.a.createElement("h3",{id:"alias"},e.a.createElement(n.AnchorLink,{to:"#alias","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"alias"),e.a.createElement(a.a,{code:`import { resolve } from "path";
  alias: {
    "@": resolve(__dirname, "./src"),
    "@/components": resolve(__dirname, "./src/components"),
  },`,lang:"js"}),e.a.createElement("h3",{id:"cssmodules"},e.a.createElement(n.AnchorLink,{to:"#cssmodules","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"cssModules"),e.a.createElement("h3",{id:"css"},e.a.createElement(n.AnchorLink,{to:"#css","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"css"),e.a.createElement(a.a,{code:`import styles from './foo.css';
import './foo.css';
styles.xxx;`,lang:"js"}),e.a.createElement("h3",{id:"\u56FE\u7247"},e.a.createElement(n.AnchorLink,{to:"#\u56FE\u7247","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u56FE\u7247"),e.a.createElement(a.a,{code:`export default () => <img src={require('./foo.png')} />
<img src='/' />
// \u659C\u6760\u5C31\u662Fpublic\u76EE\u5F55`,lang:"js"}),e.a.createElement("h3",{id:"svg"},e.a.createElement(n.AnchorLink,{to:"#svg","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"svg"),e.a.createElement(a.a,{code:`import { ReactComponent as Logo } from './logo.svg';
function Analysis() {
  return <Logo width={90} height={120} />;
}
// url
import logoSrc from './logo.svg';
function Analysis() {
  return <img src={logoSrc} alt="logo" />;
}`,lang:"js"}),e.a.createElement("h3",{id:"\u61D2\u52A0\u8F7D"},e.a.createElement(n.AnchorLink,{to:"#\u61D2\u52A0\u8F7D","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u61D2\u52A0\u8F7D"),e.a.createElement(a.a,{code:`export default {
  dynamicImport: {},
}

import { dynamic } from 'umi';
export default dynamic({
  loader: async function() {
    // \u8FD9\u91CC\u7684\u6CE8\u91CA webpackChunkName \u53EF\u4EE5\u6307\u5BFC webpack \u5C06\u8BE5\u7EC4\u4EF6 HugeA \u4EE5\u8FD9\u4E2A\u540D\u5B57\u5355\u72EC\u62C6\u51FA\u53BB
    const { default: HugeA } = await import(/* webpackChunkName: "external_A" */ './HugeA');
    return HugeA;
  },
});
# \u5F02\u6B65\u7EC4\u4EF6
AsyncHugeA`,lang:"js"}),e.a.createElement("h3",{id:"layout"},e.a.createElement(n.AnchorLink,{to:"#layout","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"layout"),e.a.createElement("h2",{id:"umircts"},e.a.createElement(n.AnchorLink,{to:"#umircts","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),".umirc.ts"),e.a.createElement(a.a,{code:"mfsu: {},",lang:"js"}),e.a.createElement("h3",{id:"route"},e.a.createElement(n.AnchorLink,{to:"#route","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"route"),e.a.createElement(a.a,{code:`hideChildrenInMenu:true
# \u7EC4\u4EF6
link to='./'

# routes \u8DEF\u7531
exact
redirect
title
wrappers:["\u7EC4\u4EF6\u8DEF\u5F84"]   \u914D\u7F6E\u9274\u6743\u8DEF\u7531
# \u5D4C\u5957\u8DEF\u7531
\u5B50\u7EC4\u4EF6\u6DFB\u52A0 toutes:[]

# \u7F16\u7A0B\u5F0F\u5BFC\u822A
history.push()
history.goBack();

# history\u6A21\u5F0F
{type: 'browser'}


# \u8DEF\u7531\u5143\u4FE1\u606F \u901A\u8FC7props\u5C5E\u6027\u83B7\u5F97
match     params\u3001path\u3001url isExact
loaction  pathname\u3001search\u3001query
history
route    path\u3001exact\u3001component\u3001routes
routes
\u4F20\u9012\u7ED9\u5B50\u8DEF\u7531 React.cloneElement(child, { foo: 'bar' });

# \u52A8\u6001\u8DEF\u7531
\u7528[]   \u5305\u88F9\u7684\u6587\u4EF6\u540D \u4F8B\u5982 [index].tsx
\u7528[ $] \u5305\u88F9\u7684\u6587\u4EF6\u540D \u52A8\u6001\u53EF\u9009\u7684\u8DEF\u7531
\u7528_xxx.tsx \u4F1A\u751F\u6210\u5D4C\u5957\u8DEF\u7531

export function patchRoutes({ routes }){
  routes.unshift({
    path:"login",
    exact:true,
    component:require('@/extraRoutes/foo')
  })
}`,lang:"js"}),e.a.createElement("h4",{id:"\u4E8C\u7EA7\u5B50\u8DEF\u7531"},e.a.createElement(n.AnchorLink,{to:"#\u4E8C\u7EA7\u5B50\u8DEF\u7531","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u4E8C\u7EA7\u5B50\u8DEF\u7531"),e.a.createElement(a.a,{code:`# https://github.com/umijs/umi/issues/5221
{
      path: '/Marketing',
      name: '\u8425\u9500\u4E2D\u5FC3',
      component: '@/pages/Marketing/preferential',
      routes: [
        {
          redirect: '/Marketing/preferential',
        },
        {
          name: '\u4F18\u60E0\u7BA1\u7406',
          exact: true,
          path: '/Marketing/preferential',
          component: '@/pages/Marketing/preferential',
        },
        {
          name: '\u7D20\u6750\u7BA1\u7406',
          exact: true,
          path: '/Marketing/matter',
          component: '@/pages/Marketing/matter',
        },
      ],
    },`,lang:"js"}),e.a.createElement("h4",{id:"\u52A8\u6001\u8DEF\u7531"},e.a.createElement(n.AnchorLink,{to:"#\u52A8\u6001\u8DEF\u7531","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u52A8\u6001\u8DEF\u7531"),e.a.createElement(a.a,{code:`{
  name: '\u65B0\u589E\u7F16\u8F91Banner',
  path: '/marketing/matter/bannerAddAndEdit:id?',
  component:
   '@/pages/marketing/matter/bannerAddAndEdit/[id$]',
 },
#
  [id$].jsx
#
history.push('/marketing/matter/bannerAddAndEdit:1')`,lang:"js"}),e.a.createElement("h2",{id:"\u6027\u80FD\u4F18\u5316"},e.a.createElement(n.AnchorLink,{to:"#\u6027\u80FD\u4F18\u5316","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u6027\u80FD\u4F18\u5316"),e.a.createElement("h3",{id:"\u68C0\u67E5\u5927\u5C0F"},e.a.createElement(n.AnchorLink,{to:"#\u68C0\u67E5\u5927\u5C0F","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u68C0\u67E5\u5927\u5C0F"),e.a.createElement(a.a,{code:`ANALYZE_SSR=1 umi build
#
ANALYZE=1 umi build
http://127.0.0.1:8888/`,lang:"js"}),e.a.createElement("h3",{id:"\u61D2\u52A0\u8F7D-1"},e.a.createElement(n.AnchorLink,{to:"#\u61D2\u52A0\u8F7D-1","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u61D2\u52A0\u8F7D"),e.a.createElement(a.a,{code:`dynamicImport: {
    loading: '@/PageLoadingComponent',
}`,lang:"js"}),e.a.createElement("h3",{id:"\u5173\u95ED-moment-\u56FD\u9645\u5316"},e.a.createElement(n.AnchorLink,{to:"#\u5173\u95ED-moment-\u56FD\u9645\u5316","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5173\u95ED moment \u56FD\u9645\u5316"),e.a.createElement(a.a,{code:"ignoreMomentLocale: true;",lang:"js"}),e.a.createElement("h3",{id:"antdicon"},e.a.createElement(n.AnchorLink,{to:"#antdicon","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"antdIcon"),e.a.createElement(a.a,{code:`import Star from 'antd/icons/star';
<Star />
#
https://github.com/HeskeyBaozi/reduce-antd-icons-bundle-demo
// .umirc.js
alias: {
 '@ant-design/icons/lib/dist$': path.resolve(__dirname, './src/icons.js')
  }
export {default as SmileOutline} from
'@ant-design/icons/lib/outline/SmileOutline';`,lang:"js"}),e.a.createElement("h3",{id:"externals"},e.a.createElement(n.AnchorLink,{to:"#externals","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"externals"),e.a.createElement(a.a,{code:`externals: {
    react: 'window.React',
},
scripts: ['...url'],`,lang:"js"}),e.a.createElement("h4",{id:"\u5185\u7F51"},e.a.createElement(n.AnchorLink,{to:"#\u5185\u7F51","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5185\u7F51"),e.a.createElement(a.a,{code:`# \u5C06 \u5305 \u4E0B\u8F7D\u4E0B\u6765\u653E\u5728 public \u6587\u4EF6\u5939
# .eslintignore
/public
#
externals: {
    react: 'window.React',
},
scripts: ['public/..'],`,lang:"js"}),e.a.createElement("h3",{id:"nginx"},e.a.createElement(n.AnchorLink,{to:"#nginx","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"nginx"),e.a.createElement(a.a,{code:`//nginx.conf
location / {
      root /app;
      try_files $uri $uri/ /index.html;
//\u5C1D\u8BD5\u8BBF\u95EE\u6587\u4EF6\uFF0C\u5982\u679C\u547D\u4E2D\u5373\u8FD4\u56DE\u6587\u4EF6\uFF0C\u5982js\u7B49\u8D44\u6E90\u6587\u4EF6\u3002\u5982\u8BBF\u95EE\u4E0D\u5230\uFF0C\u5982\u524D\u7AEF\u8DEF\u5F84\uFF0C\u5373\u8BBF\u95EEindex.html
      index index.html index.htm;
}

// \u53CD\u5411\u4EE3\u7406\u8BA9\u524D\u540E\u7AEF\u540C\u57DF
location /dpm/ {
    proxy_pass http://10.20.0.47:8080;
}`,lang:"js"}),e.a.createElement("h3",{id:"dockerfile"},e.a.createElement(n.AnchorLink,{to:"#dockerfile","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"dockerFile"),e.a.createElement(a.a,{code:`//Dockerfile
FROM node:12.16.1-alpine AS installer
COPY package.json ./
RUN npm i tyarn -g
RUN tyarn

FROM node:12.16.1-alpine AS builder
COPY --from=installer /node_modules ./node_modules
COPY . .
RUN npm run build

FROM  vixlet/nginx:alpine
COPY --from=builder /dist /app
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80`,lang:"js"}),e.a.createElement("h2",{id:"\u9875\u9762\u521D\u59CB\u5316"},e.a.createElement(n.AnchorLink,{to:"#\u9875\u9762\u521D\u59CB\u5316","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u9875\u9762\u521D\u59CB\u5316"),e.a.createElement("h3",{id:"\u5168\u5C40-model"},e.a.createElement(n.AnchorLink,{to:"#\u5168\u5C40-model","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5168\u5C40 model"),e.a.createElement(a.a,{code:"src / models / xxx.js;",lang:"js"}),e.a.createElement("h3",{id:"\u521D\u59CB\u5316\u6570\u636E"},e.a.createElement(n.AnchorLink,{to:"#\u521D\u59CB\u5316\u6570\u636E","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u521D\u59CB\u5316\u6570\u636E"),e.a.createElement(a.a,{code:`src/app.ts
export const getInitialState = ()=>{
  return \u767B\u5F55\u8D26\u53F7\u7528\u6237\u4FE1\u606F
}
# \u4F7F\u7528
import { useModel } from 'umi'
const { initialState, loading, refresh, setInitialState } = useModel('@@initialState');`,lang:"js"}),e.a.createElement("h3",{id:"\u6743\u9650"},e.a.createElement(n.AnchorLink,{to:"#\u6743\u9650","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u6743\u9650"),e.a.createElement(a.a,{code:`src/access.ts
export default function(initialState){
  return {
    // \u81EA\u5B9A\u4E49\u51FD\u6570 \u903B\u8F91\u5224\u65AD\u662F\u5426\u6709\u6743\u9650
   // \u83DC\u5355\u6743\u9650
    routeAccess: (route) => {
      return authList.includes(route.role);
    },
    // \u6309\u94AE\u6743\u9650
    moduleAccess: (foo) => {
      return authList.includes(foo);
    },
  }
}
# \u4F7F\u7528
// \u5982\u679C\u662Ffalse\u5C31\u4F1A\u8DF3\u8F6C\u5230403
1.umirc.ts routes>access
 access: 'routeAccess',
2.
import { useAccess, Access } from 'umi';
const access = useAccess();
<Access
  accessible={access.moduleAccess}
	fallback={}>
  	...
</Access>`,lang:"js"}),e.a.createElement("h2",{id:"ssr"},e.a.createElement(n.AnchorLink,{to:"#ssr","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"ssr"),e.a.createElement(a.a,{code:`ssr: {},
  exportStatic: {},`,lang:"js"}),e.a.createElement(a.a,{code:`"enquire-js": "^0.2.1",
    "rc-banner-anim": "^2.1.0",
    "rc-queue-anim": "^1.6.7",
    "rc-scroll-anim": "^2.5.6",
    "rc-texty": "^0.2.0",
    "rc-tween-one": "^2.2.14",
    "react-sublime-video": "^0.2.5"`,lang:"js"}),e.a.createElement(a.a,{code:`# umi ssr demo

## 1. \u4F7F\u7528[Ant-Design-Landing-Page](https://landing.ant.design/index-cn)\u53EF\u89C6\u5316\u521B\u5EFA\u9875\u9762

## 1.1 \u5728\u5DE6\u4E0A\u65B9\u7B2C\u4E09\u4E2A\u6309\u94AE\u70B9\u51FB\u4E0B\u8F7D
- \u5C06\u4F1A\u4E0B\u8F7D\u4E00\u4E2A\u6587\u4EF6\u540D\u4E3A\`Home\`\u7684\u6587\u4EF6\u5939

## 2. \u4F7F\u7528 \`umi\` \u642D\u5EFA\u9879\u76EE
\`\`\`js
#
cd desktop
#
mkdir umi-ssr-demo && cd umi-ssr-demo
#
yarn create @umijs/umi-app
# \u5728package.json \u52A0\u5165\u4F9D\u8D56
  "dependencies": {
    "enquire-js": "^0.2.1",
    "rc-banner-anim": "^2.1.0",
    "rc-queue-anim": "^1.6.7",
    "rc-scroll-anim": "^2.5.6",
    "rc-texty": "^0.2.0",
    "rc-tween-one": "^2.2.14",
    "react-sublime-video": "^0.2.5"
  },
#  yarn
#  \u5728.umirc.ts \u5F00\u542Fssr
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  ssr: {},
  exportStatic: {},
});
# umi dev
\u968F\u540E\u5BA1\u67E5\u7F51\u9875\u6E90\u4EE3\u7801\u5C31\u53EF\u4EE5\u770B\u5230
\u5982\u679C <div id="root"> DOM \u91CC\u7684\u5143\u7D20\u4E0D\u4E3A\u7A7A\uFF0C\u5219\u662F SSR\uFF0C\u5426\u5219\u4E3A CSR
\`\`\`

## 3. \u914D\u7F6Edockerfile nginx
\`\`\`js
\u53C2\u8003\u4ED3\u5E93\u4E2D\u7684\u914D\u7F6E
docker-compose.yml
Dockerfile
nginx.conf
\`\`\`

## 4. \u670D\u52A1\u5668\u90E8\u7F72
\`\`\`js
# 1.\u4F7F\u7528sftp\u5C06\u9664\u4E86node_modules\u7684\u6587\u4EF6\u653E\u5728\u670D\u52A1\u5668 \u4F8B\u5982 ./home/blog
scp -r nextjs-docker-nginx-demo root@\u670D\u52A1\u5668\u5730\u5740:/home/blog/

# 2
# 2.1 \u5728 ./home/blog \u6839\u76EE\u5F55\u8FD0\u884C
ssh 'root@\u670D\u52A1\u5668\u5730\u5740'
cd /home/blog/nextjs-docker-nginx-demo
docker-compose up -d
# 2.2 \u505C\u6B62\u547D\u4EE4
docker-compose down
\`\`\`

##`,lang:"js"}),e.a.createElement("h2",{id:"\u90E8\u7F72"},e.a.createElement(n.AnchorLink,{to:"#\u90E8\u7F72","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u90E8\u7F72"),e.a.createElement(a.a,{code:`define: {
    "process.env": process.env,
  },
  history: { type: 'hash' },
  publicPath: process.env.APP_ENV === "development" ? "/" : "http://wangxince.site/node-script-router-inject-demo/",
  hash: true,
  dynamicImport: {},`,lang:"js"}),e.a.createElement(a.a,{code:`#!/usr/bin/env sh

# \u786E\u4FDD\u811A\u672C\u629B\u51FA\u9047\u5230\u7684\u9519\u8BEF
set -e

# \u5220\u9664\u65E7\u7684\u6587\u4EF6
rm -rf dist

rm -rf ./src/pages/.DS_Store

# \u751F\u6210\u65B0\u7684\u538B\u7F29\u6587\u4EF6
yarn build:pro

# \u8FDB\u5165\u751F\u6210\u7684\u6587\u4EF6\u5939
cd dist

# \u590D\u5236\u4E00\u4E2A index.html\u5E76\u547D\u540D\u4E3A 404.html \u89E3\u51B3 historyAPI 404\u95EE\u9898
cp index.html 404.html

# \u5982\u679C\u662F\u53D1\u5E03\u5230\u81EA\u5B9A\u4E49\u57DF\u540D
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# \u5982\u679C\u53D1\u5E03\u5230 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# \u5982\u679C\u53D1\u5E03\u5230 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:eternallycyf/node-script-router-inject-demo.git master:gh-pages

cd -`,lang:"js"}))));r.default=i=>{const l=e.a.useContext(n.context),u=l.demos;return e.a.useEffect(()=>{var c;i!=null&&(c=i.location)!==null&&c!==void 0&&c.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(i.location.hash.slice(1)))},[]),e.a.createElement(s,{demos:u})}}}]);
