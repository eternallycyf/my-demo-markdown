(self.webpackChunkmy_demo_markdown=self.webpackChunkmy_demo_markdown||[]).push([[6447],{37960:function(u,a,n){"use strict";n.r(a);var s=n(12924),e=n.n(s),l=n(16924),c=n(53401);const r=e().memo(({demos:t})=>e().createElement(e().Fragment,null,e().createElement("div",{className:"markdown"},e().createElement("h2",{id:"stylelintrc"},e().createElement(l.AnchorLink,{to:"#stylelintrc","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"stylelintrc"),e().createElement("ul",null,e().createElement("li",null,".stylelintrc.js"),e().createElement("li",null,e().createElement(l.Link,{to:"https://zhuanlan.zhihu.com/p/493920283"},"https://zhuanlan.zhihu.com/p/493920283"))),e().createElement(c.Z,{code:`module.exports = {
  ignoreFiles: [],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-prettier/recommended',
  ],
  plugins: ['stylelint-scss', 'stylelint-color-format'],
  rules: {
    indentation: 'tab',
    'rule-empty-line-before': 'never',
    'selector-type-no-unknown': null,
    'selector-type-case': null,
    'no-descending-specificity': null, //[true, { ignore: ['selectors-within-list'] }],
    'selector-list-comma-newline-after': 'always-multi-line',
    'value-keyword-case': null,
    'function-name-case': null,
    'at-rule-no-unknown': null,
    'color-format/format': {
      format: 'rgba',
    },
  },
};`,lang:"js"}))));a.default=t=>{const i=e().useContext(l.context),m=i.demos;return e().useEffect(()=>{var o;t!=null&&(o=t.location)!==null&&o!==void 0&&o.hash&&l.AnchorLink.scrollToAnchor(decodeURIComponent(t.location.hash.slice(1)))},[]),e().createElement(r,{demos:m})}}}]);
