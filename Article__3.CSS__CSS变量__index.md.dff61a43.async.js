(self.webpackChunkmy_demo_markdown=self.webpackChunkmy_demo_markdown||[]).push([[5727],{48455:function(i,a,l){"use strict";l.r(a);var o=l(12924),e=l.n(o),n=l(16924),t=l(53401);const r=e().memo(({demos:u})=>e().createElement(e().Fragment,null,e().createElement("div",{className:"markdown"},e().createElement("h2",{id:"css-\u539F\u751F\u53D8\u91CF-var--color"},e().createElement(n.AnchorLink,{to:"#css-\u539F\u751F\u53D8\u91CF-var--color","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"CSS \u539F\u751F\u53D8\u91CF var(--color)"),e().createElement("h3",{id:"\u5BFC\u8BFB"},e().createElement(n.AnchorLink,{to:"#\u5BFC\u8BFB","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u5BFC\u8BFB"),e().createElement("ul",null,e().createElement("li",null,"\u8FD9\u7BC7\u6587\u7AE0\u6240\u6307\u7684",e().createElement("code",null,"css"),"\u53D8\u91CF, \u5E76\u4E0D\u662F\u6307 ",e().createElement("code",null,"less")," \u7B49\u9884\u7F16\u8BD1\u8BED\u8A00\u7684\u53D8\u91CF",e().createElement("code",null,"(@)")),e().createElement("li",null,"\u800C\u662F\u76F4\u63A5\u5728 ",e().createElement("code",null,".css")," \u9875\u9762\u4E2D\u4F7F\u7528 ",e().createElement("code",null,".js|.html")," \u4E2D\u6240\u5B9A\u4E49\u7684\u53D8\u91CF (",e().createElement(n.Link,{to:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/var()"},"var()-mdn"),")"),e().createElement("li",null,"\u4E00\u822C\u60C5\u51B5\u4E0B \u524D\u7AEF\u6837\u5F0F\u53EA\u8981\u901A\u8FC7 js \u52A8\u6001\u5207\u6362\u4E0D\u540C\u7C7B\u540D \u884C\u5185\u6837\u5F0F"),e().createElement("li",null,"\u5C31\u53EF\u4EE5\u5728",e().createElement("code",null,"React Vue")," \u4E2D\u5B8C\u6210\u7EDD\u5927\u591A\u6570\u7684\u9700\u6C42\u4E86"),e().createElement("li",null,"\u4F46\u662F\u6709\u4E9B\u4F7F\u7528\u573A\u666F\u5C31\u9700\u8981\u539F\u751F ",e().createElement("code",null,"css")," \u7684 ",e().createElement("code",null,"var()")," \u53D8\u91CF\u3002 \u6216\u8005\u8BF4\u4F7F\u7528\u4ED6\u53EF\u4EE5\u8FBE\u5230\u66F4\u52A0\u65B9\u4FBF\u7684\u6548\u679C")),e().createElement(t.Z,{code:`// \u5047\u8BBE\u4F7F\u7528\u4E86\u4E00\u4E2A\u7EC4\u4EF6\u5E93\u7684\u4E00\u4E2A\u5C0F\u5706\u70B9, \u800C\u4ED6\u5185\u90E8\u662F\u901A\u8FC7\u4F2A\u5143\u7D20\u505A\u7684
// \u6B64\u65F6\u7684\u9700\u6C42\u662F \u5C0F\u5706\u70B9\u7684\u989C\u8272\u7531\u7528\u6237\u51B3\u5B9A,\u4E0D\u662F\u4E00\u4E2A\u56FA\u5B9A\u7684\u503C,\u4F60\u8BE5\u5982\u4F55\u63A7\u5236\u5462?
// \u6211\u4EEC\u901A\u5E38\u7684\u505A\u6CD5\u662F
//    1.\u5B9A\u4E49\u4E0D\u540C\u7684\u7C7B\u540D\u5207\u6362:  x => \u989C\u8272\u4E0D\u662F\u4E00\u4E2A\u56FA\u5B9A\u7684\u503C
//    2.\u884C\u5185\u6837\u5F0F\u76F4\u63A5\u4F20\u9012:   x => \u884C\u5185\u6837\u5F0F\u4E0D\u80FD\u4FEE\u6539\u4F2A\u5143\u7D20
//    3.\u81EA\u5DF1\u91CD\u5199:         x => \u9EBB\u70E6,\u8FD9\u91CC\u53EA\u662F\u4E00\u4E2A\u7528\u4F8B,\u67D0\u4E9B\u573A\u666F\u4F1A\u6781\u5176\u7E41\u7410
//    4.css in js       x => \u516C\u53F8\u9879\u76EE\u4E00\u822C\u4E0D\u7528\u8FD9\u4E2A
//    5.dom\u64CD\u4F5C          x => \u4E0D\u63A8\u8350
\u8FD9\u65F6\u5019var()\u5C31\u5E94\u8FD0\u800C\u751F\u4E86`,lang:"js"}),e().createElement("h3",{id:"\u539F\u751F-html"},e().createElement(n.AnchorLink,{to:"#\u539F\u751F-html","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u539F\u751F html"),e().createElement(t.Z,{code:`# index.html
<style>
  #dv {
    color: var(--color);
  }
</style>
<body>
  <div id="dv"></div>
  <script>
    let clickColor = 'cornflowerblue';
    const dv = document.getElementById('dv');
    dv.innerHTML = \`<div id='dv' style="--color:\${myColor}">css</div>\`;
  </script>
</body>`,lang:"html"}),e().createElement("h3",{id:"jsx"},e().createElement(n.AnchorLink,{to:"#jsx","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"jsx"),e().createElement(t.Z,{code:`import styles from './app.module.css'
const App = () => {
  let clickColor = 'red'
  const style = { "--color": clickColor};
  return (
    <div className={styles.header} style={style}>
      hello
    </div>
  );
};
export default App;
#
.header {
  color: var(--color)
}`,lang:"jsx"}),e().createElement("h3",{id:"tsx"},e().createElement(n.AnchorLink,{to:"#tsx","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"tsx"),e().createElement(t.Z,{code:`import styles from './app.module.css'
import React from 'react'
const App = () => {
  let clickColor = 'red'
  const style = { "--color": clickColor} as React.CSSProperties;
  return (
    <div className={styles.header} style={style}>
      hello
    </div>
  );
};
export default App;
#
.header {
  color: var(--color)
}`,lang:"tsx"}),e().createElement("h3",{id:"vue2"},e().createElement(n.AnchorLink,{to:"#vue2","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"vue2"),e().createElement(t.Z,{code:`<template>
  <div class="test">
    <span :style="spanStyle" class="span1">hello world</span>
    <span style="--color:red" class="span1">hello world</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      spanStyle: { '--color': 'green' },
    };
  },
};
</script>
<style scoped>
.span1 {
  color: var(--color);
}
</style>`,lang:"vue"}),e().createElement("h3",{id:"vue3"},e().createElement(n.AnchorLink,{to:"#vue3","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"vue3"),e().createElement(t.Z,{code:`# vue3\u63D0\u4F9B\u4E86API \u76F4\u63A5v-bind\u5C31\u53EF\u4EE5\u4F7F\u7528\u4E86
<style scoped>
.span1 {
  color: v-bind(\u53D8\u91CF);
}
</style>`,lang:"vue"}))));a.default=u=>{const s=e().useContext(n.context),d=s.demos;return e().useEffect(()=>{var c;u!=null&&(c=u.location)!==null&&c!==void 0&&c.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(u.location.hash.slice(1)))},[]),e().createElement(r,{demos:d})}}}]);
