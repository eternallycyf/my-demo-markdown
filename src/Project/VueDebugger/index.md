---
order: 6
group:
  path: /VueDebugger
  title: VueDebugger
---

# VueDebugger

## ./vscode/launch.json

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

## vue.config.js

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
