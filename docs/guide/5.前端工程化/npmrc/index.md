---
order: 5
nav:
  title: 前端之路
  path: /guide
---

## npmrc

```js
# 提升一些依赖包至 node_modules
# 解决部分包模块not found的问题
# 用于配合 pnpm
shamefully-hoist = true

# node-sass 下载问题
# sass_binary_site="https://npm.taobao.org/mirrors/node-sass/"

home=https://npm.taobao.org
registry=https://registry.npm.taobao.org/
sass_binary_site="https://npm.taobao.org/mirrors/node-sass/"
phantomjs_cdnurl="http://cnpmjs.org/downloads"
electron_mirror="https://npm.taobao.org/mirrors/electron/"
sqlite3_binary_host_mirror="https://foxgis.oss-cn-shanghai.aliyuncs.com/"
profiler_binary_host_mirror="https://npm.taobao.org/mirrors/node-inspector/"
chromedriver_cdnurl="https://cdn.npm.taobao.org/dist/chromedriver"
```
