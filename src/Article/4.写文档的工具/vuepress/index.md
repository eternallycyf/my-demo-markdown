---
order: 4
nav:
  title: Article
  path: /article
---

# VuePress

## 准备阶段

### start

```js
# 本地
npm install -g vuepress
mkdir docs && echo '# Hello VuePress' > docs/README.md
  "scripts": {
    "start": "vuepress dev docs",
    "build": "vuepress build docs"
  },
./docs/.vuepress/config.js
// 包含一个搜索框和 最左边的文字
module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  base: "/blog/"
}
yarn start
http://localhost:8081/
# 配置更改有时需要重新启动
```

- github

  - .gitlab-ci.yml

  ```js
  image: node:9.11.1

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
   - master
  ```

  - .travis.yml

  ```js
  language: node_js
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
      branch: master
  ```

  - deploy.sh
    - bash deploy.sh

  ```js
  #!/usr/bin/env sh

  # 确保脚本抛出遇到的错误
  set -e

  # 生成静态文件
  npm run docs:build

  # 进入生成的文件夹
  cd docs/.vuepress/dist

  git init
  git add -A
  git commit -m 'deploy'

  git push -f git@github.com:eternallycyf/blog.git master:gh-pages

  cd -

  ```

- Github

```
gh-pages /root
```

### 目录结构

```js
#  默认页面路由结构
 ./docs/README.md	           路由:   /
 ./docs/guide/README.md      路由:   guide

├── docs
│   ├── .vuepress (可选的)
│   │   ├── components (可选的)
│   │   ├── theme (可选的)
│   │   │   └── Layout.vue
│   │   ├── public (可选的) 图片放在这里
│   │   ├── styles (可选的)
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── templates (可选的, 谨慎配置)
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── config.js (可选的)
│   │   └── enhanceApp.js (可选的)
│   │
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│
└── package.json

docs/.vuepress: 用于存放全局的配置、组件、静态资源等。
docs/.vuepress/components: 该目录中的 Vue 组件将会被自动注册为全局组件。
docs/.vuepress/theme: 用于存放本地主题。
docs/.vuepress/styles: 用于存放样式相关的文件。
docs/.vuepress/styles/index.styl: 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。
docs/.vuepress/styles/palette.styl: 用于重写默认颜色常量，或者设置新的 stylus 颜色常量。
docs/.vuepress/public: 静态资源目录。
docs/.vuepress/templates: 存储 HTML 模板文件。
docs/.vuepress/templates/dev.html: 用于开发环境的 HTML 模板文件。
docs/.vuepress/templates/ssr.html: 构建时基于 Vue SSR 的 HTML 模板文件。
docs/.vuepress/config.js: 配置文件的入口文件，也可以是 YML 或 toml。
docs/.vuepress/enhanceApp.js: 客户端应用的增强。
```

## VuePress

### 基础配置

```js
# 主页的图片
/docs/README.md
heroImage: ./assets/logom.png
// 图片位置 /docs/.vuepress/pubilc/assets/xxx.png
# 主页nav 左上角 图片
./vuepress/config.js
themeConfig:{
  logo: '/assets/favicon.ico',
}
# favicon.ico
config.js
head:[['link', { rel: 'icon', href: 'favicon.ico' }]],
# nav
// 一级link 对应的组件路径是  ./docs/document/README.md
// 可以继续嵌套
  themeConfig: {
    nav: [
      { text: 'Home', link: '/document/' },
    ]
  }
//二级 link 对应的组件路径是 ./docs/more/React/README.md
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
          '/zh': [{title: '习',}, { title: '学习',}],
        }

 sidebar: [
          {title: '前端',},
          {title: '学习',}
        ]
  // 侧边栏自动生成
  '/more/React/': [
    {
      title: '第一个侧边栏', // 这是必填的
      collapsable: true,
      path: "/more/React/",
      children: [
        ['/more/React/1/', '第一个侧边栏的子侧边栏'],
      ]
    },
  ],
// children 是一个数组 子侧边栏也是数组
//  ./docs/more/React/README.md
//  ./docs/more/React/1/README.md

// 但是注意 只能 ## 以下的 最大的不行

```

### locales

```js
# 目录结构
./docs
 .vuepress
    dist
    public
    style
    config.js
 guide
 zh // 在zh目录下 复制 docs文件下除了.vue press之外所有文件
   guide
   README.md // 就是docs文件下的md
 README.md
# config.js
  locales: {
    '/': { lang: 'en-US', title: 'Pluviophobe', description: 'Pluviophobe' },
    '/zh/': { lang: 'zh-CN', title: 'Pluviophobe', description: '怕雨的人' }
  },

 themeConfig:{
   locales:{
        // 多语言下拉菜单的标题
        selectText: '选择语言',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        // 编辑链接文字
        editLinkText: '在 GitHub 上编辑此页',
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        // 当前 locale 的 algolia docsearch 选项
        algolia: {},
     '/':[
       xxx
     ],
     '/zh':[
       xxx
       // 这里的所有路径 需要加上 /zh/ 前缀
     ]
   }
 }
```

### markdown 扩展

````js
# 链接
[Home](/)
[foo](/foo/)
[foo header](./#heading)   跳转并锚点定位
# 目录
[[toc]]
# 表格
| Tables        | Are           | Cool  |
| ------------- | ------------- | ----- |
| col 3 is      | right-aligned | $1600 |
# 表情
https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json
:cn:
# 提示框
::: tip 自定义标题
//  warning || danger || details
这是一个提示
```js
import
```
:::
# 代码段高亮
```js {1,2,6-7}
```
# 文件
---
title: Blogging Like a Hacker
lang: en-US
---
````

### sass

```
yarn add -D sass-loader@7.3.1 node-sass
```

## 要写什么

```js
#
首页
指南
开发规范

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
   我的组件库
umi
   dva
微信小程序
   原生小程序
   uniapp
   taro
跨端框架
   reactnative
   uniapp
   flutter
Electron
SSR
   nextJS
   nuxt.js
源码解析
      axiox
      redux
构建工具
      webpack
      npm
      git
      jestjs
      docker
常用工具库
      lodash
      jquery
      echarts
      ant-react-charts
      ant-react-map
      axios
      vue-press
选择语言
github
```

## bug

- Vuepress 无法设置上次更新时间

```js
/Users/eternallycyf/Documents/GitHub/case/pluviophobe-vue-document/node_modules/@vuepress/plugin-last-updated/index.js
      const lastUpdated = dateFormat(timestamp, 'yyyy-MM-dd hh:mm:ss')
```
