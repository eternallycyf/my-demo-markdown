(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{BC2l:function(u,c,n){"use strict";n.r(c);var i=n("cDcd"),e=n.n(i),a=n("dEAq"),m=n.n(a),l=n("6T1g");const s=e.a.memo(({demos:t})=>e.a.createElement(e.a.Fragment,null,e.a.createElement("div",{className:"markdown"},e.a.createElement("h1",{id:"vuedebugger"},e.a.createElement(a.AnchorLink,{to:"#vuedebugger","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"VueDebugger"),e.a.createElement("h2",{id:"vscodelaunchjson"},e.a.createElement(a.AnchorLink,{to:"#vscodelaunchjson","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"./vscode/launch.json"),e.a.createElement(l.a,{code:`{
  // \u4F7F\u7528 IntelliSense \u4E86\u89E3\u76F8\u5173\u5C5E\u6027\u3002
  // \u60AC\u505C\u4EE5\u67E5\u770B\u73B0\u6709\u5C5E\u6027\u7684\u63CF\u8FF0\u3002
  // \u6B32\u4E86\u89E3\u66F4\u591A\u4FE1\u606F\uFF0C\u8BF7\u8BBF\u95EE: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "pwa-chrome",
      "request": "launch",
      "name": "Launch Chrome against localhost",
      "url": "http://localhost:8080",
      "webRoot": "\${workspaceFolder}",
      "sourceMapPathOverrides": {
        "\u6587\u4EF6\u5730\u5740://*": "*"
      }
    }
  ]
}`,lang:"js"}),e.a.createElement("h2",{id:"vueconfigjs"},e.a.createElement(a.AnchorLink,{to:"#vueconfigjs","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"vue.config.js"),e.a.createElement(l.a,{code:`const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  configureWebpack: {
    output: {
      devtoolModuleFilenameTemplate: '\u6587\u4EF6\u5730\u5740://[resource-path]',
    },
  },
});`,lang:"js"}))));c.default=t=>{const r=e.a.useContext(a.context),d=r.demos;return e.a.useEffect(()=>{var o;t!=null&&(o=t.location)!==null&&o!==void 0&&o.hash&&a.AnchorLink.scrollToAnchor(decodeURIComponent(t.location.hash.slice(1)))},[]),e.a.createElement(s,{demos:d})}}}]);
