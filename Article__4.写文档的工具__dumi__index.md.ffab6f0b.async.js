(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{K8Pr:function(s,l,t){"use strict";t.r(l);var o=t("cDcd"),e=t.n(o),n=t("dEAq"),u=t.n(n),a=t("H1Ra");const i=e.a.memo(({demos:r})=>e.a.createElement(e.a.Fragment,null,e.a.createElement("div",{className:"markdown"},e.a.createElement("h1",{id:"dumi"},e.a.createElement(n.AnchorLink,{to:"#dumi","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"dumi"),e.a.createElement("h2",{id:"nav"},e.a.createElement(n.AnchorLink,{to:"#nav","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"nav"),e.a.createElement(a.a,{code:"# ./docs/xxx/index.md  index.zh-CN.md",lang:"js"}),e.a.createElement("h2",{id:"\u8DEF\u7531"},e.a.createElement(n.AnchorLink,{to:"#\u8DEF\u7531","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u8DEF\u7531"),e.a.createElement(a.a,{code:`// \u4E00\u7EA7\u8DEF\u7531
---
nav:
  title: Components
  path: /components
---
// \u540C\u4E00\u7C7B\u578B\u5199\u4E00\u6837\u7684\u5C31\u884C
---
order: 1
group:
  path: /layout
  title: \u5E03\u5C40\u7EC4\u4EF6
  order: 1
---
 #
 ---
title: Basic
order: 2
toc: menu
---`,lang:"js"}),e.a.createElement("h2",{id:"mdx"},e.a.createElement(n.AnchorLink,{to:"#mdx","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"mdx"),e.a.createElement(a.a,{code:`\`\`\`tsx
/**
 * inline: true
 */
import React from 'react';
import Alert from '@/MyComponents/Alert';
export default () => (
  <Alert
    type="info"
    message="\u7ACB\u5373\u5F00\u59CB"
    description="\u6240\u6709\u6666\u6697\u90FD\u7559\u7ED9\u8FC7\u5F80\uFF0C\u4ECE\u9047\u89C1\u4F60\u5F00\u59CB\uFF0C\u51DB\u51AC\u6563\u5C3D\uFF0C\u661F\u6CB3\u957F\u660E\uFF01\u{1F389} \u{1F389} \u{1F389}"
  />
);
\`\`\`;`,lang:"js"}),e.a.createElement("h2",{id:"markdown"},e.a.createElement(n.AnchorLink,{to:"#markdown","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"markdown"),e.a.createElement("h3",{id:"\u6E90\u4EE3\u7801"},e.a.createElement(n.AnchorLink,{to:"#\u6E90\u4EE3\u7801","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u6E90\u4EE3\u7801"),e.a.createElement(a.a,{code:"```jsx | pure\n// \u6211\u4E0D\u4F1A\u88AB\u6E32\u67D3\u4E3A React \u7EC4\u4EF6\n```;",lang:"js"}),e.a.createElement("h3",{id:"code"},e.a.createElement(n.AnchorLink,{to:"#code","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"code"),e.a.createElement(a.a,{code:`<code src="/path/to/complex-demo.tsx" \u914D\u7F6E\u9879="\u503C"></code>;

// \u76F4\u63A5\u5728md\u4F7F\u7528 tsx
inline: true;`,lang:"js"}),e.a.createElement("h3",{id:"api"},e.a.createElement(n.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"API"),e.a.createElement(a.a,{code:`<!-- \u4E0D\u4F20\u9012 src \u5C06\u81EA\u52A8\u63A2\u6D4B\u5F53\u524D\u7EC4\u4EF6\uFF0C\u6BD4\u5982 src/Hello/index.md \u5C06\u4F1A\u8BC6\u522B src/Hello/index.tsx -->

<API></API>

<!-- \u4F20\u9012 src \u5C06\u663E\u5F0F\u6307\u660E\u6E32\u67D3\u54EA\u4E2A\u7EC4\u4EF6\u7684 API -->

<API src="/path/to/your/component.tsx"></API>

<!-- src \u53EF\u4F7F\u7528 alias -->

<API src="@/your/component.tsx"></API>

<!-- \u4F20\u9012 exports \u5C06\u663E\u5F0F\u6307\u660E\u6E32\u67D3\u54EA\u4E9B\u5BFC\u51FA\uFF0C\u8BF7\u786E\u4FDD\u503C\u4E3A\u5408\u6CD5\u7684 JSON \u5B57\u7B26\u4E32 -->

<API exports='["default", "Other"]'></API>

<!-- \u5982\u679C\u4E0D\u9700\u8981 API \u76F8\u5173\u6807\u9898 \uFF0C\u53EF\u4EE5\u4F7F\u7528hideTitle -->

<API hideTitle></API>`,lang:"js"}),e.a.createElement("h3",{id:"alert"},e.a.createElement(n.AnchorLink,{to:"#alert","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Alert"),e.a.createElement(a.a,{code:`# warning\u3001info\u3001success\u3001error
<Alert type="info">
  \u6CE8\u610F\uFF0C\u5185\u90E8\u6682\u65F6\u53EA\u80FD\u7F16\u5199 HTML
</Alert>`,lang:"js"}),e.a.createElement("h3",{id:"badge"},e.a.createElement(n.AnchorLink,{to:"#badge","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Badge"),e.a.createElement(a.a,{code:"<Badge>Hello</Badge>",lang:"js"}),e.a.createElement("h3",{id:"embed"},e.a.createElement(n.AnchorLink,{to:"#embed","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"embed"),e.a.createElement(a.a,{code:`<!-- \u5F15\u5165\u5168\u91CF\u7684 Markdown \u6587\u4EF6\u5185\u5BB9 -->
<embed src="/path/to/some.md"></embed>

<!-- \u6839\u636E\u884C\u53F7\u5F15\u5165\u6307\u5B9A\u884C\u7684 Markdown \u6587\u4EF6\u5185\u5BB9 -->
<embed src="/path/to/some.md#L1"></embed>

<!-- \u6839\u636E\u884C\u53F7\u5F15\u5165\u90E8\u5206 Markdown \u6587\u4EF6\u5185\u5BB9 -->
<embed src="/path/to/some.md#L1-L10"></embed>

<!-- \u6839\u636E\u6B63\u5219\u5F15\u5165\u90E8\u5206 Markdown \u6587\u4EF6\u5185\u5BB9 -->
<embed src="/path/to/some.md#RE-/^[^\\r\\n]+/"></embed>`,lang:"js"}),e.a.createElement("h3",{id:"\u8868\u60C5"},e.a.createElement(n.AnchorLink,{to:"#\u8868\u60C5","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u8868\u60C5"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u76F4\u63A5\u8F93\u5165\u6CD5\u8F93\u5165\u5373\u53EF")),e.a.createElement("h3",{id:"\u529F\u80FD-api"},e.a.createElement(n.AnchorLink,{to:"#\u529F\u80FD-api","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u529F\u80FD api"),e.a.createElement(a.a,{code:`# \u5143\u7D20\u76F8\u5BF9\u4E8E Demo \u5305\u88F9\u5668\u5B9A\u4F4D
/**
 * transform: true
 */
#
/**
 * background: '#f6f7f9'
 */
# \u79FB\u9664\u5185\u8FB9\u8DDD
/**
 * compact: true
 */
#
/**
 * title: \u6211\u662F\u6807\u9898
 * desc: \u6211\u662F\u7B80\u4ECB\uFF0C\u6211\u53EF\u4EE5\u7528 \`Markdown\` \u6765\u7F16\u5199
 */
# \u76F4\u63A5\u5D4C\u5165markdown
/**
 * inline: true
 */
# iframe
/**
 * iframe: true // \u8BBE\u7F6E\u4E3A\u6570\u503C\u53EF\u63A7\u5236 iframe \u9AD8\u5EA6
 */`,lang:"js"}),e.a.createElement("h2",{id:"\u81EA\u52A8\u751F\u6210\u7C7B\u578B\u6CE8\u89E3"},e.a.createElement(n.AnchorLink,{to:"#\u81EA\u52A8\u751F\u6210\u7C7B\u578B\u6CE8\u89E3","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u81EA\u52A8\u751F\u6210\u7C7B\u578B\u6CE8\u89E3"),e.a.createElement(a.a,{code:`import React from 'react';

export interface IHelloProps {
  /**
   * \u53EF\u4EE5\u8FD9\u6837\u5199\u5C5E\u6027\u63CF\u8FF0
   * @description       \u4E5F\u53EF\u4EE5\u663E\u5F0F\u52A0\u4E0A\u63CF\u8FF0\u540D
   * @description.zh-CN \u8FD8\u652F\u6301\u4E0D\u540C\u7684 locale \u540E\u7F00\u6765\u5B9E\u73B0\u591A\u8BED\u8A00\u63CF\u8FF0\uFF0C\u4F7F\u7528 description \u515C\u5E95
   * @default           \u652F\u6301\u5B9A\u4E49\u9ED8\u8BA4\u503C
   */
  className?: string; // \u652F\u6301\u8BC6\u522B TypeScript \u53EF\u9009\u7C7B\u578B\u4E3A\u975E\u5FC5\u9009\u5C5E\u6027
}

const Hello: React.FC<IHelloProps> = () => <>Hello World!</>;

export default Hello;`,lang:"js"}),e.a.createElement("h2",{id:"vue"},e.a.createElement(n.AnchorLink,{to:"#vue","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"vue"),e.a.createElement("h3",{id:"v-typical"},e.a.createElement(n.AnchorLink,{to:"#v-typical","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"v-typical"),e.a.createElement(a.a,{code:`\`\`\`vue | pure
<template>
  <v-typical
    class="blink"
    :steps="['Hello', 1000, 'Hello World !', 500, 'Hello World ! \u{1F44B}', 1000]"
    :loop="Infinity"
    :wrapper="'h2'"
  ></v-typical>
</template>

<script lang="ts">
import VTypical from 'vue-typical';

export default {
  components: {
    VTypical,
  },
};
</script>
\`\`\`;`,lang:"js"}),e.a.createElement("h3",{id:"table"},e.a.createElement(n.AnchorLink,{to:"#table","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"table"),e.a.createElement(a.a,{code:"| Prop      | Required | Type                                | Eg.                                    |\n| --------- | -------- | ----------------------------------- | -------------------------------------- |\n| `steps`   | True     | Array<String \\| Number \\| Function> | `['Hello', 1000, () => alert('Word')]` |\n| `loop`    | False    | Number                              | `1` or `'Infinity'`                    |\n| `wrapper` | False    | String                              | `'div'`                                |",lang:"js"}))));l.default=r=>{const d=e.a.useContext(n.context),m=d.demos;return e.a.useEffect(()=>{var c;r!=null&&(c=r.location)!==null&&c!==void 0&&c.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(r.location.hash.slice(1)))},[]),e.a.createElement(i,{demos:m})}}}]);
