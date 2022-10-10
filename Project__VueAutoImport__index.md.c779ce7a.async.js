(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{"14Zj":function(r,l,t){"use strict";t.r(l);var c=t("cDcd"),e=t.n(c),n=t("dEAq"),E=t.n(n),u=t("H1Ra");const i=e.a.memo(({demos:a})=>e.a.createElement(e.a.Fragment,null,e.a.createElement("div",{className:"markdown"},e.a.createElement("h1",{id:"vueautoimport"},e.a.createElement(n.AnchorLink,{to:"#vueautoimport","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"VueAutoImport"),e.a.createElement("h2",{id:"npm-install--d-unplugin-vue-components-unplugin-auto-import"},e.a.createElement(n.AnchorLink,{to:"#npm-install--d-unplugin-vue-components-unplugin-auto-import","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"npm install -D unplugin-vue-components unplugin-auto-import"),e.a.createElement("h2",{id:"vue-config-js"},e.a.createElement(n.AnchorLink,{to:"#vue-config-js","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"vue-config-js"),e.a.createElement(u.a,{code:`const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');

module.exports = {
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
};`,lang:"tsx"}),e.a.createElement("h2",{id:"tsconfigjson"},e.a.createElement(n.AnchorLink,{to:"#tsconfigjson","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"tsconfig.json"),e.a.createElement(u.a,{code:`"typeRoots": [
      "./node_modules/@types/",
      "./types"
    ],`,lang:"json"}),e.a.createElement("h2",{id:"example"},e.a.createElement(n.AnchorLink,{to:"#example","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"example"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u6B64\u65F6\u6839\u76EE\u5F55\u4F1A\u81EA\u52A8\u751F\u6210 ",e.a.createElement("code",null,"auto-imports.d.ts")," ",e.a.createElement("code",null,"components.d.ts")),e.a.createElement("li",null,"\u968F\u4FBF\u4E00\u4E2A ",e.a.createElement("code",null,"vue")," \u6587\u4EF6 \u8F93\u5165 ",e.a.createElement("code",null,"a-table")," \u5373\u53EF\u952E\u5165\u63D0\u793A \u4E14\u81EA\u52A8\u5F15\u5165\u61D2\u52A0\u8F7D"),e.a.createElement("li",null,e.a.createElement("code",null,"data")," => ",e.a.createElement("code",null,"dataSource"))))));l.default=a=>{const m=e.a.useContext(n.context),s=m.demos;return e.a.useEffect(()=>{var o;a!=null&&(o=a.location)!==null&&o!==void 0&&o.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(a.location.hash.slice(1)))},[]),e.a.createElement(i,{demos:s})}}}]);
