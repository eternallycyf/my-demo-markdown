---
toc: menu
nav:
  title: 文章
  order: 2
---

## Article

### [前端学习路线](http://h5.dooring.cn/blog/guides/afrontend)

### [写给初中级前端的高级进阶指南](https://juejin.cn/post/6844904103504527374#heading-43)

### [vue 源码解密](https://ustbhuangyi.github.io/vue-analysis/)

### [react 源码解密](https://react.jokcy.me/)

### [reactDOM 原生节点](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/1349b640d4d07f40aa7c1c6931f18e3fbf667f3a/types/react/index.d.ts#L223)

### [前端实现 word、excel、pdf、ppt、mp4、图片、文本等文件的预览](https://juejin.cn/post/7071598747519549454#heading-2)

### [前端复杂表格导出 excel，一键导出 Antd Table 看这篇就够了（附源码）](https://juejin.cn/post/7071882317953761316?share_token=188c01b6-5d42-4421-8465-7499eda0c73b)

### [eslint 使用总结](https://github.com/Hibop/Hibop.github.io/issues/34)

### [自定义截取任意区域地图数据](https://geojson.io/#map=8/67.200/39.894)

### [获取中国下钻地图数据](http://datav.aliyun.com/portal/school/atlas/area_selector)

### [react 自定义 HOOK](https://usehooks-ts.com/react-hook/use-intersection-observer)

### [react 常用的库](https://github.com/MrXujiang/frontend-developer-roadmap/blob/main/React.md)

### [JSON Schema 规范（中文版）](https://json-schema.apifox.cn/)

### [JavaScript 前端和 Java 后端的 AES 加密和解密(转) ](https://www.cnblogs.com/loong-hon/p/11225407.html)

## **React**

### react hooks 中 typescript 的写法

https://github.com/typescript-cheatsheets/react

### 实现 React requestIdleCallback 调度能力

https://juejin.cn/post/7021506472232583199#heading-8

### 关于何时应该将数据存入 redux 或者 vuex 中的决策方法论

```
第一步，看这个状态是否会被多个组件共享。
所谓共享，就是多个组件需要读取或者修改这个状态，如果是，那不用多想，应该放在 Store 上，因为 Store 上状态方便被多个组件共用，避免组件之间传递数据；如果不是，继续看第二步。
第二步，看这个组件被 unmount 之后重新被 mount，之前的状态是否需要保留。
举个简单例子，一个对话框组件。用户在对话框打开的时候输入了一些内容，不做提交直接关闭这个对话框，这时候对话框就被 unmount 了，然后重新打开这个对话框（也就是重新 mount），需求是否要求刚才输入的内容依然显示？如果是，那么应该把状态放在 Store 上，因为组件在 unmount 之后其中的状态也随之消失了，要想在重新 mount 时重获之前的状态，只能把状态放在组件之外，Store 当然是一个好的选择；如果需求不要求重新 mount 时保持 unmount 之前的状态，继续看第三步。
第三步，到这一步，基本上可以确定，这个状态可以放在组件中了。
不过，如果你觉得这个状态很复杂，需要跟踪修改过程，那看你个人喜好，可以选择放在 Store 上；如果你想简单处理，可以心安理得地让这个状态由组件自己管理。
```

## Vue

### vue 项目（方便使用第三方 UI 组件）

用 vue 写项目的时候, 遇到需要封装第三方 UI 组件的情况使用这两个属性封装会更方便**（vm.$attrs/vm.$listeners）**

https://cn.vuejs.org/v2/api/#vm-attrs

### vue 异步请求态管理库(支持 vue3 Composition API)

https://github.com/posva/vue-promised#readme

### 组织架构树组件编写思路

https://juejin.cn/post/6872213286729973774

### HTML5 中手势原理分析与数学知识的实践

https://juejin.cn/post/6844903752168636423

### vue 性能优化技巧

https://mp.weixin.qq.com/s?__biz=MzIxNDc4MjEzNw==&mid=2247484346&idx=1&sn=ca9c3c752c96ce99f5370919ac3354bb&chksm=97a31a6ca0d4937abb4c446498c29ab380d486c141cf0a937124c2d5aa2eb54030e9305b5ef9&token=866091504&lang=zh_CN#rd

### vue 封装的埋点指令思路

https://juejin.cn/post/7040649951923142687

### vue 版本的点击跳转到代码的插件（只支持 vite）

https://github.com/webfansplz/vite-plugin-vue-inspector

### Vue3 组件库

看网上评价挺不错的, 支持组件级别定制主题色

https://www.naiveui.com/zh-CN/os-theme

### vue3 实现仿苹果系统侧边消息提示

https://juejin.cn/post/7042114791791394824

## 地图相关的学习资料

### 地图遇到数据不显示时

```
属性查询一般使用EPSG:4326
获取wms源(栅格raster)使用EPSG: 3857 (为了在web端地图上展示, mapboxgl就是只遵循3857, 不支持4326)
EPSG:3857（投影）：数据的可读性差和数值大存储比较占用内存。
EPSG:4326（地理）：使用此坐标系会导致页面变形。
通常：数据存储在EPSG:4326中，显示在EPSG:3857中
```

### gis 相关概念

http://marsgis.cn/doc/study-gis.pdf

### 坐标转换

[坐标转换]：http://epsg.io/transform#s_srs=4326&t_srs=3857

### GeoJSON 格式规范说明

[GeoJSON 格式规范说明]：https://www.oschina.net/translate/geojson-spec?cmp

### GeoServer

https://docs.geoserver.org/latest/en/user/tutorials/cql/cql_tutorial.html

### WMS 参考

https://docs.geoserver.org/latest/en/user/services/wms/reference.html#benefits-of-wms

### echarts 示例网站

1. http://analysis.datains.cn/finance-admin/index.html#/chartLib/all
2. http://ppchart.com/#/
3. http://www.isqqw.com/
4. https://madeapie.com/#/
5. http://chart.majh.top/

## TypeScript

### TypeScript 高级类型

https://juejin.cn/post/6865860467307315207

### 深入理解 TypeScript

https://jkchao.github.io/typescript-book-chinese/

## 技术资料

### 前端监控 SDK 的一些技术要点原理分析

https://juejin.cn/post/7017974567943536671

### 文件上传攻略

https://juejin.cn/post/6844903968338870285

### 从零开发一个 npm 插件(了解下开发 npm 插件的步骤):

https://juejin.cn/post/7007615666609979400

### 树状数据操作(对递归不熟悉的可以看看)

https://juejin.cn/post/7008340119681761288

### 复杂 web 动画（选择 web Animations API）

https://juejin.cn/post/7023903552946995214?share_token=071e3952-4c04-4d06-969d-188253825358

### 纯 js 实现图片裁剪工具

https://juejin.cn/post/7026896668817621028

### 用户登录设计之双 token 设计

https://juejin.cn/post/7035280102636126244

### CSS 自适应内容宽度的输入框

https://segmentfault.com/a/1190000041032322

### reduce 实现 filter,map 数组扁平化

https://juejin.cn/post/6844903833844482056

### 构建大型前端业务项目的一点经验

https://juejin.cn/post/7016948081321050148?share_token=6a9496ec-d3f2-478e-aa19-991cff6c2276

### antd 表格性能差的解决方案

https://juejin.cn/post/7063332320339099678

### 页面性能优化问题复盘

https://juejin.cn/post/7064405926035324964

### 前端复杂表格导出 excel

https://juejin.cn/post/7071882317953761316?share_token=188c01b6-5d42-4421-8465-7499eda0c73b

### 如何让 Vue、React 代码的调试变得更爽

https://juejin.cn/post/7071219293249077256

### 前端复杂带交互动画的 lottie-web 方案实现

现在很多设计稿中的交互动画都异常复杂，但设计师可以导出一种名叫 lottie 的 json 文件供前端使用，前端使用 lottie.js 加载则可以完美还原设计稿中炫酷的动画

https://zhuanlan.zhihu.com/p/234703627

### 设计稿转代码的思路和方案（公开课）

https://live.juejin.cn/4354/256219?utm_source=bannner&utm_medium=bannner&utm_campaign=sheji419

## 可视化入门

### canvas 教程

- https://juejin.cn/post/7008064185972031524
- https://juejin.cn/post/7008811592733655077

- https://github.com/827652549/CanvasStudy

### svg 教程

- https://juejin.cn/post/7012099738380009502
- https://juejin.cn/post/6844903593212903431#heading-7

### d3 教程

- [各个模块](https://github.com/d3)
- [官方文档](https://github.com/d3/d3/blob/main/API.md)
- [中文版文档](https://iowiki.com/d3js/d3js_index.html)
- https://d3js.org.cn/
- [入门教程](https://juejin.cn/post/6982089492991574047#heading-0)
- [入门教程](https://observablehq.com/@d3/learn-d3?collection=@d3/learn-d3)
- [使用 D3.js 实现数据可视化](https://zhuanlan.zhihu.com/p/21897086)
- [d3-demo](https://github.com/1522017075/d3Study)

### webGL

- [webGL1 中文版](https://webglfundamentals.org/webgl/lessons/zh_cn/)
- [webGL2 中文版](https://webgl2fundamentals.org/webgl/lessons/zh_cn/)
- [webGL 电子书](http://www.webgl3d.cn/WebGL/)

### threejs

- [官方文档](https://threejs.org/docs/index.html#manual/zh/introduction/Creating-a-scene)
- [入门教程](https://github.com/puxiao/threejs-tutorial)
- [threejs 电子书](http://www.webgl3d.cn/Three.js/)
- [中文教程](https://techbrood.com/threejs/docs/)

### 工具

- [在线将 svg 转 png](https://10015.io/tools/svg-blob-generator)

### 其他链接

- [28 个 canvas 知名的库](https://juejin.cn/post/7038267477121302542#heading-4)
- [canvas 资源大全(200+)](https://github.com/chinaBerg/awesome-canvas)
