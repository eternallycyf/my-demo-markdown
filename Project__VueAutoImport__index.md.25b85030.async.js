(self.webpackChunkmy_demo_markdown=self.webpackChunkmy_demo_markdown||[]).push([[7689],{81899:function(i,u,t){"use strict";t.r(u);var c=t(12924),e=t.n(c),n=t(16924),a=t(53401);const m=e().memo(({demos:o})=>e().createElement(e().Fragment,null,e().createElement("div",{className:"markdown"},e().createElement("h1",{id:"vueautoimport"},e().createElement(n.AnchorLink,{to:"#vueautoimport","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"VueAutoImport"),e().createElement("h2",{id:"npm-install--d-unplugin-vue-components-unplugin-auto-import"},e().createElement(n.AnchorLink,{to:"#npm-install--d-unplugin-vue-components-unplugin-auto-import","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"npm install -D unplugin-vue-components unplugin-auto-import"),e().createElement("h2",{id:"vue-config-js"},e().createElement(n.AnchorLink,{to:"#vue-config-js","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"vue-config-js"),e().createElement(a.Z,{code:`const AutoImport = require('unplugin-auto-import/webpack');
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
};`,lang:"tsx"}),e().createElement("h2",{id:"tsconfigjson"},e().createElement(n.AnchorLink,{to:"#tsconfigjson","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"tsconfig.json"),e().createElement(a.Z,{code:`"typeRoots": [
      "./node_modules/@types/",
      "./types"
    ],`,lang:"json"}),e().createElement("h2",{id:"example"},e().createElement(n.AnchorLink,{to:"#example","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"example"),e().createElement("ul",null,e().createElement("li",null,"\u6B64\u65F6\u6839\u76EE\u5F55\u4F1A\u81EA\u52A8\u751F\u6210 ",e().createElement("code",null,"auto-imports.d.ts")," ",e().createElement("code",null,"components.d.ts")),e().createElement("li",null,"\u968F\u4FBF\u4E00\u4E2A ",e().createElement("code",null,"vue")," \u6587\u4EF6 \u8F93\u5165 ",e().createElement("code",null,"a-table")," \u5373\u53EF\u952E\u5165\u63D0\u793A \u4E14\u81EA\u52A8\u5F15\u5165\u61D2\u52A0\u8F7D"),e().createElement("li",null,e().createElement("code",null,"data")," => ",e().createElement("code",null,"dataSource"))))));u.default=o=>{const r=e().useContext(n.context),s=r.demos;return e().useEffect(()=>{var l;o!=null&&(l=o.location)!==null&&l!==void 0&&l.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(o.location.hash.slice(1)))},[]),e().createElement(m,{demos:s})}}}]);
