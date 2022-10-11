(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{BzsE:function(u,o,n){"use strict";n.r(o);var s=n("cDcd"),e=n.n(s),t=n("dEAq"),d=n.n(t),c=n("6T1g");const i=e.a.memo(({demos:l})=>e.a.createElement(e.a.Fragment,null,e.a.createElement("div",{className:"markdown"},e.a.createElement("h2",{id:"stylelintrc"},e.a.createElement(t.AnchorLink,{to:"#stylelintrc","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"stylelintrc"),e.a.createElement("ul",null,e.a.createElement("li",null,".stylelintrc.js"),e.a.createElement("li",null,e.a.createElement(t.Link,{to:"https://zhuanlan.zhihu.com/p/493920283"},"https://zhuanlan.zhihu.com/p/493920283"))),e.a.createElement(c.a,{code:`module.exports = {
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
};`,lang:"js"}))));o.default=l=>{const r=e.a.useContext(t.context),m=r.demos;return e.a.useEffect(()=>{var a;l!=null&&(a=l.location)!==null&&a!==void 0&&a.hash&&t.AnchorLink.scrollToAnchor(decodeURIComponent(l.location.hash.slice(1)))},[]),e.a.createElement(i,{demos:m})}}}]);
