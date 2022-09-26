(self.webpackChunkmy_demo_markdown=self.webpackChunkmy_demo_markdown||[]).push([[9416],{56135:function(m,s,t){"use strict";t.r(s);var r=t(12924),e=t.n(r),n=t(16924),c=t(53401);const l=e().memo(({demos:a})=>e().createElement(e().Fragment,null,e().createElement("div",{className:"markdown"},e().createElement("h1",{id:"reactpress"},e().createElement(n.AnchorLink,{to:"#reactpress","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"reactPress"),e().createElement("h2",{id:"\u51C6\u5907\u9636\u6BB5"},e().createElement(n.AnchorLink,{to:"#\u51C6\u5907\u9636\u6BB5","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u51C6\u5907\u9636\u6BB5"),e().createElement(c.Z,{code:`npm install @rcpress/cli
"start": "rcpress dev docs",
"build": "rcpress build docs"
"generate": "rcpress generate docs"
# \u76EE\u5F55\u7ED3\u6784
\u251C\u2500\u2500 docs # \u5B58\u653E\u6587\u6863\u76EE\u5F55
    \u251C\u2500\u2500 .rcpress
        \u251C\u2500\u2500 globalComponent.js # \u5168\u5C40\u7EC4\u4EF6
        \u251C\u2500\u2500 config.js
        \u251C\u2500\u2500 style.less # \u5168\u5C40\u6837\u5F0F
        \u251C\u2500\u2500 public # \u9759\u6001\u6587\u4EF6\uFF0C\u6587\u4EF6\u53EF\u4EE5\u76F4\u63A5\u8BBF\u95EE
        \u251C\u2500\u2500 theme
    \u251C\u2500\u2500 guide
        \u251C\u2500\u2500 README.MD
    \u251C\u2500\u2500 README.MD
\u251C\u2500\u2500 package.json
#
build\u7684\u751F\u4EA7\u6A21\u5F0F\u8DEF\u5F84\u6709\u95EE\u9898
\u4F7F\u7528 "rcpress generate docs" \u7684\u5F62\u5F0F`,lang:"js"}),e().createElement("h2",{id:"configjs"},e().createElement(n.AnchorLink,{to:"#configjs","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"config.js"),e().createElement(c.Z,{code:`#
module.exports = {
  logo: '/favicon.png',
  themeConfig:{
    nav:[
      {
        text:"guide",
        link:'/xxx',
        important:true // \u6709\u7EA2\u8272\u6807\u8BB0\u663E\u793A
      }
    ]
  }
}`,lang:"js"}),e().createElement("h3",{id:"markdown"},e().createElement(n.AnchorLink,{to:"#markdown","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"markdown"),e().createElement(c.Z,{code:`::: tip |
:::`,lang:"unknown"}))));s.default=a=>{const d=e().useContext(n.context),i=d.demos;return e().useEffect(()=>{var o;a!=null&&(o=a.location)!==null&&o!==void 0&&o.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(a.location.hash.slice(1)))},[]),e().createElement(l,{demos:i})}}}]);
