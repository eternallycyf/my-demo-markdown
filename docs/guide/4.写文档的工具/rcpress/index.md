---
order: 4
nav:
  title: 前端之路
  path: /guide
---

# reactPress

## 准备阶段

```js
npm install @rcpress/cli
"start": "rcpress dev docs",
"build": "rcpress build docs"
"generate": "rcpress generate docs"
# 目录结构
├── docs # 存放文档目录
    ├── .rcpress
        ├── globalComponent.js # 全局组件
        ├── config.js
        ├── style.less # 全局样式
        ├── public # 静态文件，文件可以直接访问
        ├── theme
    ├── guide
        ├── README.MD
    ├── README.MD
├── package.json
#
build的生产模式路径有问题
使用 "rcpress generate docs" 的形式
```

## config.js

```js
#
module.exports = {
  logo: '/favicon.png',
  themeConfig:{
    nav:[
      {
        text:"guide",
        link:'/xxx',
        important:true // 有红色标记显示
      }
    ]
  }
}
```

### markdown

```
::: tip |
:::
```
