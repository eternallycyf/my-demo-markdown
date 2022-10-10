(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{"x+fW":function(d,c,t){"use strict";t.r(c);var o=t("cDcd"),e=t.n(o),n=t("dEAq"),m=t.n(n),a=t("H1Ra");const r=e.a.memo(({demos:s})=>e.a.createElement(e.a.Fragment,null,e.a.createElement("div",{className:"markdown"},e.a.createElement("h1",{id:"vuepress"},e.a.createElement(n.AnchorLink,{to:"#vuepress","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"VuePress"),e.a.createElement("h2",{id:"\u51C6\u5907\u9636\u6BB5"},e.a.createElement(n.AnchorLink,{to:"#\u51C6\u5907\u9636\u6BB5","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u51C6\u5907\u9636\u6BB5"),e.a.createElement("h3",{id:"start"},e.a.createElement(n.AnchorLink,{to:"#start","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"start"),e.a.createElement(a.a,{code:`# \u672C\u5730
npm install -g vuepress
mkdir docs && echo '# Hello VuePress' > docs/README.md
  "scripts": {
    "start": "vuepress dev docs",
    "build": "vuepress build docs"
  },
./docs/.vuepress/config.js
// \u5305\u542B\u4E00\u4E2A\u641C\u7D22\u6846\u548C \u6700\u5DE6\u8FB9\u7684\u6587\u5B57
module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  base: "/blog/"
}
yarn start
http://localhost:8081/
# \u914D\u7F6E\u66F4\u6539\u6709\u65F6\u9700\u8981\u91CD\u65B0\u542F\u52A8`,lang:"js"}),e.a.createElement("ul",null,e.a.createElement("li",null,e.a.createElement("p",null,"github"),e.a.createElement("ul",null,e.a.createElement("li",null,".gitlab-ci.yml")),e.a.createElement(a.a,{code:`image: node:9.11.1

pages:
 cache:
   paths:
   - node_modules/

 script:
 - yarn install # npm install
 - yarn docs:build # npm run docs:build
 artifacts:
   paths:
   - public
 only:
 - master`,lang:"js"}),e.a.createElement("ul",null,e.a.createElement("li",null,".travis.yml")),e.a.createElement(a.a,{code:`language: node_js
node_js:
  - lts/*
install:
  - yarn install # npm ci
script:
  - yarn docs:build # npm run docs:build
deploy:
  provider: pages
  skip_cleanup: true
  local_dir: docs/.vuepress/dist
  github_token: $GITHUB_TOKEN
  keep_history: true
  on:
    branch: master`,lang:"js"}),e.a.createElement("ul",null,e.a.createElement("li",null,"deploy.sh",e.a.createElement("ul",null,e.a.createElement("li",null,"bash deploy.sh")))),e.a.createElement(a.a,{code:`#!/usr/bin/env sh

# \u786E\u4FDD\u811A\u672C\u629B\u51FA\u9047\u5230\u7684\u9519\u8BEF
set -e

# \u751F\u6210\u9759\u6001\u6587\u4EF6
npm run docs:build

# \u8FDB\u5165\u751F\u6210\u7684\u6587\u4EF6\u5939
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:eternallycyf/blog.git master:gh-pages

cd -`,lang:"js"})),e.a.createElement("li",null,e.a.createElement("p",null,"Github"))),e.a.createElement(a.a,{code:"gh-pages /root",lang:"unknown"}),e.a.createElement("h3",{id:"\u76EE\u5F55\u7ED3\u6784"},e.a.createElement(n.AnchorLink,{to:"#\u76EE\u5F55\u7ED3\u6784","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u76EE\u5F55\u7ED3\u6784"),e.a.createElement(a.a,{code:`#  \u9ED8\u8BA4\u9875\u9762\u8DEF\u7531\u7ED3\u6784
 ./docs/README.md	           \u8DEF\u7531:   /
 ./docs/guide/README.md      \u8DEF\u7531:   guide

\u251C\u2500\u2500 docs
\u2502   \u251C\u2500\u2500 .vuepress (\u53EF\u9009\u7684)
\u2502   \u2502   \u251C\u2500\u2500 components (\u53EF\u9009\u7684)
\u2502   \u2502   \u251C\u2500\u2500 theme (\u53EF\u9009\u7684)
\u2502   \u2502   \u2502   \u2514\u2500\u2500 Layout.vue
\u2502   \u2502   \u251C\u2500\u2500 public (\u53EF\u9009\u7684) \u56FE\u7247\u653E\u5728\u8FD9\u91CC
\u2502   \u2502   \u251C\u2500\u2500 styles (\u53EF\u9009\u7684)
\u2502   \u2502   \u2502   \u251C\u2500\u2500 index.styl
\u2502   \u2502   \u2502   \u2514\u2500\u2500 palette.styl
\u2502   \u2502   \u251C\u2500\u2500 templates (\u53EF\u9009\u7684, \u8C28\u614E\u914D\u7F6E)
\u2502   \u2502   \u2502   \u251C\u2500\u2500 dev.html
\u2502   \u2502   \u2502   \u2514\u2500\u2500 ssr.html
\u2502   \u2502   \u251C\u2500\u2500 config.js (\u53EF\u9009\u7684)
\u2502   \u2502   \u2514\u2500\u2500 enhanceApp.js (\u53EF\u9009\u7684)
\u2502   \u2502
\u2502   \u251C\u2500\u2500 README.md
\u2502   \u251C\u2500\u2500 guide
\u2502   \u2502   \u2514\u2500\u2500 README.md
\u2502   \u2514\u2500\u2500 config.md
\u2502
\u2514\u2500\u2500 package.json

docs/.vuepress: \u7528\u4E8E\u5B58\u653E\u5168\u5C40\u7684\u914D\u7F6E\u3001\u7EC4\u4EF6\u3001\u9759\u6001\u8D44\u6E90\u7B49\u3002
docs/.vuepress/components: \u8BE5\u76EE\u5F55\u4E2D\u7684 Vue \u7EC4\u4EF6\u5C06\u4F1A\u88AB\u81EA\u52A8\u6CE8\u518C\u4E3A\u5168\u5C40\u7EC4\u4EF6\u3002
docs/.vuepress/theme: \u7528\u4E8E\u5B58\u653E\u672C\u5730\u4E3B\u9898\u3002
docs/.vuepress/styles: \u7528\u4E8E\u5B58\u653E\u6837\u5F0F\u76F8\u5173\u7684\u6587\u4EF6\u3002
docs/.vuepress/styles/index.styl: \u5C06\u4F1A\u88AB\u81EA\u52A8\u5E94\u7528\u7684\u5168\u5C40\u6837\u5F0F\u6587\u4EF6\uFF0C\u4F1A\u751F\u6210\u5728\u6700\u7EC8\u7684 CSS \u6587\u4EF6\u7ED3\u5C3E\uFF0C\u5177\u6709\u6BD4\u9ED8\u8BA4\u6837\u5F0F\u66F4\u9AD8\u7684\u4F18\u5148\u7EA7\u3002
docs/.vuepress/styles/palette.styl: \u7528\u4E8E\u91CD\u5199\u9ED8\u8BA4\u989C\u8272\u5E38\u91CF\uFF0C\u6216\u8005\u8BBE\u7F6E\u65B0\u7684 stylus \u989C\u8272\u5E38\u91CF\u3002
docs/.vuepress/public: \u9759\u6001\u8D44\u6E90\u76EE\u5F55\u3002
docs/.vuepress/templates: \u5B58\u50A8 HTML \u6A21\u677F\u6587\u4EF6\u3002
docs/.vuepress/templates/dev.html: \u7528\u4E8E\u5F00\u53D1\u73AF\u5883\u7684 HTML \u6A21\u677F\u6587\u4EF6\u3002
docs/.vuepress/templates/ssr.html: \u6784\u5EFA\u65F6\u57FA\u4E8E Vue SSR \u7684 HTML \u6A21\u677F\u6587\u4EF6\u3002
docs/.vuepress/config.js: \u914D\u7F6E\u6587\u4EF6\u7684\u5165\u53E3\u6587\u4EF6\uFF0C\u4E5F\u53EF\u4EE5\u662F YML \u6216 toml\u3002
docs/.vuepress/enhanceApp.js: \u5BA2\u6237\u7AEF\u5E94\u7528\u7684\u589E\u5F3A\u3002`,lang:"js"}),e.a.createElement("h2",{id:"vuepress-1"},e.a.createElement(n.AnchorLink,{to:"#vuepress-1","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"VuePress"),e.a.createElement("h3",{id:"\u57FA\u7840\u914D\u7F6E"},e.a.createElement(n.AnchorLink,{to:"#\u57FA\u7840\u914D\u7F6E","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u57FA\u7840\u914D\u7F6E"),e.a.createElement(a.a,{code:`# \u4E3B\u9875\u7684\u56FE\u7247
/docs/README.md
heroImage: ./assets/logom.png
// \u56FE\u7247\u4F4D\u7F6E /docs/.vuepress/pubilc/assets/xxx.png
# \u4E3B\u9875nav \u5DE6\u4E0A\u89D2 \u56FE\u7247
./vuepress/config.js
themeConfig:{
  logo: '/assets/favicon.ico',
}
# favicon.ico
config.js
head:[['link', { rel: 'icon', href: 'favicon.ico' }]],
# nav
// \u4E00\u7EA7link \u5BF9\u5E94\u7684\u7EC4\u4EF6\u8DEF\u5F84\u662F  ./docs/document/README.md
// \u53EF\u4EE5\u7EE7\u7EED\u5D4C\u5957
  themeConfig: {
    nav: [
      { text: 'Home', link: '/document/' },
    ]
  }
//\u4E8C\u7EA7 link \u5BF9\u5E94\u7684\u7EC4\u4EF6\u8DEF\u5F84\u662F ./docs/more/React/README.md
  {
            text: 'more',
            items: [
   { text: 'react', link: '/more/React/' },
   { text: 'react Hook', link: '/more/ReactHook/' },
            ]
          },
# SideBar
    sidebar: {
          '/': [{title: 'sda',},{title: 'stydy',}],
          '/zh': [{title: '\u4E60',}, { title: '\u5B66\u4E60',}],
        }

 sidebar: [
          {title: '\u524D\u7AEF',},
          {title: '\u5B66\u4E60',}
        ]
  // \u4FA7\u8FB9\u680F\u81EA\u52A8\u751F\u6210
  '/more/React/': [
    {
      title: '\u7B2C\u4E00\u4E2A\u4FA7\u8FB9\u680F', // \u8FD9\u662F\u5FC5\u586B\u7684
      collapsable: true,
      path: "/more/React/",
      children: [
        ['/more/React/1/', '\u7B2C\u4E00\u4E2A\u4FA7\u8FB9\u680F\u7684\u5B50\u4FA7\u8FB9\u680F'],
      ]
    },
  ],
// children \u662F\u4E00\u4E2A\u6570\u7EC4 \u5B50\u4FA7\u8FB9\u680F\u4E5F\u662F\u6570\u7EC4
//  ./docs/more/React/README.md
//  ./docs/more/React/1/README.md

// \u4F46\u662F\u6CE8\u610F \u53EA\u80FD ## \u4EE5\u4E0B\u7684 \u6700\u5927\u7684\u4E0D\u884C`,lang:"js"}),e.a.createElement("h3",{id:"locales"},e.a.createElement(n.AnchorLink,{to:"#locales","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"locales"),e.a.createElement(a.a,{code:`# \u76EE\u5F55\u7ED3\u6784
./docs
 .vuepress
    dist
    public
    style
    config.js
 guide
 zh // \u5728zh\u76EE\u5F55\u4E0B \u590D\u5236 docs\u6587\u4EF6\u4E0B\u9664\u4E86.vue press\u4E4B\u5916\u6240\u6709\u6587\u4EF6
   guide
   README.md // \u5C31\u662Fdocs\u6587\u4EF6\u4E0B\u7684md
 README.md
# config.js
  locales: {
    '/': { lang: 'en-US', title: 'Pluviophobe', description: 'Pluviophobe' },
    '/zh/': { lang: 'zh-CN', title: 'Pluviophobe', description: '\u6015\u96E8\u7684\u4EBA' }
  },

 themeConfig:{
   locales:{
        // \u591A\u8BED\u8A00\u4E0B\u62C9\u83DC\u5355\u7684\u6807\u9898
        selectText: '\u9009\u62E9\u8BED\u8A00',
        // \u8BE5\u8BED\u8A00\u5728\u4E0B\u62C9\u83DC\u5355\u4E2D\u7684\u6807\u7B7E
        label: '\u7B80\u4F53\u4E2D\u6587',
        // \u7F16\u8F91\u94FE\u63A5\u6587\u5B57
        editLinkText: '\u5728 GitHub \u4E0A\u7F16\u8F91\u6B64\u9875',
        // Service Worker \u7684\u914D\u7F6E
        serviceWorker: {
          updatePopup: {
            message: "\u53D1\u73B0\u65B0\u5185\u5BB9\u53EF\u7528.",
            buttonText: "\u5237\u65B0"
          }
        },
        // \u5F53\u524D locale \u7684 algolia docsearch \u9009\u9879
        algolia: {},
     '/':[
       xxx
     ],
     '/zh':[
       xxx
       // \u8FD9\u91CC\u7684\u6240\u6709\u8DEF\u5F84 \u9700\u8981\u52A0\u4E0A /zh/ \u524D\u7F00
     ]
   }
 }`,lang:"js"}),e.a.createElement("h3",{id:"markdown-\u6269\u5C55"},e.a.createElement(n.AnchorLink,{to:"#markdown-\u6269\u5C55","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"markdown \u6269\u5C55"),e.a.createElement(a.a,{code:`# \u94FE\u63A5
[Home](/)
[foo](/foo/)
[foo header](./#heading)   \u8DF3\u8F6C\u5E76\u951A\u70B9\u5B9A\u4F4D
# \u76EE\u5F55
[[toc]]
# \u8868\u683C
| Tables        | Are           | Cool  |
| ------------- | ------------- | ----- |
| col 3 is      | right-aligned | $1600 |
# \u8868\u60C5
https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json
:cn:
# \u63D0\u793A\u6846
::: tip \u81EA\u5B9A\u4E49\u6807\u9898
//  warning || danger || details
\u8FD9\u662F\u4E00\u4E2A\u63D0\u793A
\`\`\`js
import
\`\`\`
:::
# \u4EE3\u7801\u6BB5\u9AD8\u4EAE
\`\`\`js {1,2,6-7}
\`\`\`
# \u6587\u4EF6
---
title: Blogging Like a Hacker
lang: en-US
---`,lang:"js"}),e.a.createElement("h3",{id:"sass"},e.a.createElement(n.AnchorLink,{to:"#sass","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"sass"),e.a.createElement(a.a,{code:"yarn add -D sass-loader@7.3.1 node-sass",lang:"unknown"}),e.a.createElement("h2",{id:"\u8981\u5199\u4EC0\u4E48"},e.a.createElement(n.AnchorLink,{to:"#\u8981\u5199\u4EC0\u4E48","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u8981\u5199\u4EC0\u4E48"),e.a.createElement(a.a,{code:`#
\u9996\u9875
\u6307\u5357
\u5F00\u53D1\u89C4\u8303

jsAPI
    canvas
    ajax
css
    css
    less
    sass
node
    express
    koa
typescript
vue
   vue
   vue3.0
   vue-router
   vuex
   elementUI
   vant
react
   react
   react-hook
   react-router
   redux
   antdesign
   \u6211\u7684\u7EC4\u4EF6\u5E93
umi
   dva
\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F
   \u539F\u751F\u5C0F\u7A0B\u5E8F
   uniapp
   taro
\u8DE8\u7AEF\u6846\u67B6
   reactnative
   uniapp
   flutter
Electron
SSR
   nextJS
   nuxt.js
\u6E90\u7801\u89E3\u6790
      axiox
      redux
\u6784\u5EFA\u5DE5\u5177
      webpack
      npm
      git
      jestjs
      docker
\u5E38\u7528\u5DE5\u5177\u5E93
      lodash
      jquery
      echarts
      ant-react-charts
      ant-react-map
      axios
      vue-press
\u9009\u62E9\u8BED\u8A00
github`,lang:"js"}),e.a.createElement("h2",{id:"bug"},e.a.createElement(n.AnchorLink,{to:"#bug","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"bug"),e.a.createElement("ul",null,e.a.createElement("li",null,"Vuepress \u65E0\u6CD5\u8BBE\u7F6E\u4E0A\u6B21\u66F4\u65B0\u65F6\u95F4")),e.a.createElement(a.a,{code:`/Users/eternallycyf/Documents/GitHub/case/pluviophobe-vue-document/node_modules/@vuepress/plugin-last-updated/index.js
      const lastUpdated = dateFormat(timestamp, 'yyyy-MM-dd hh:mm:ss')`,lang:"js"}))));c.default=s=>{const i=e.a.useContext(n.context),u=i.demos;return e.a.useEffect(()=>{var l;s!=null&&(l=s.location)!==null&&l!==void 0&&l.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(s.location.hash.slice(1)))},[]),e.a.createElement(r,{demos:u})}}}]);
