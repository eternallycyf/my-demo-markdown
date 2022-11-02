---
order: 6
group:
  path: /Debugger
  title: Debugger
---

# Debugger

## 1.chrome 断点排除 node_modules 直接跳转项目代码 不经过(react webapck 等源码)

- 点击谷歌右上角的设置按钮
- 然后在 ignore List 添加正则
  - ._\/node_modules\/._
  - ._\/.umi\/._
  - ^webpack://.\\\\\\\\\\\*/react refresh\$
  - /umi\.js\$
  - /react_devtools_backend.js\.js\$
  - ^chrome-extension://fmkadmapgofadopljbjfkapdkoienihi\b.\\\\\\\\*/react_devtools_backend\.js\$
  - ![setting](https://img-blog.csdnimg.cn/1ccd12c90d4f4f10a53ddd20f9960b86.png)
- 或者在这里手动右击 ignore
  - ![ignore](https://img-blog.csdnimg.cn/1c6ff7fa4a1044238cecfe641a5f489d.png)

## 2.vscode 断点排除 node_modules 直接跳转项目代码 不经过(react webapck 等源码)

- lanuch.json

```json
{
  // 使用 IntelliSense 了解相关属性。
  // 悬停以查看现有属性的描述。
  // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Launch Chrome against localhost",
      "url": "http://localhost:8000",
      "webRoot": "${workspaceFolder}",
      "skipFiles": [
        "${workspaceFolder}/<node_internals>/**",
        "${workspaceFolder}/node_modules/**",
        "${workspaceFolder}/webpack/**",
        "${workspaceFolder}/.umi/**",
        "${workspaceFolder}/umi\\.js$",
        "${workspaceFolder}/@@/devScripts.js$",
        "${workspaceFolder}/^webpack://.*/react refresh$",
        "${workspaceFolder}/react_devtools_backend.js\\.js$"
      ],
      "smartStep": true,
      "sourceMaps": true
    }
  ]
}
```

## 3.vue vscode 调试时 调用栈显示的文件路径是 webpack 合成的

- 需要将其转换为 项目对应的文件路径

- 默认为 webpack://xxx/xxx/xxx/xxx/src/index.vue
- =>
- src/index.vue

### ./vscode/launch.json

```js
{
  // 使用 IntelliSense 了解相关属性。
  // 悬停以查看现有属性的描述。
  // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "pwa-chrome",
      "request": "launch",
      "name": "Launch Chrome against localhost",
      "url": "http://localhost:8080",
      "webRoot": "${workspaceFolder}",
      "sourceMapPathOverrides": {
        "文件地址://*": "*"
      }
    }
  ]
}
```

### vue.config.js

```js
const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  configureWebpack: {
    output: {
      devtoolModuleFilenameTemplate: '文件地址://[resource-path]',
    },
  },
});
```
