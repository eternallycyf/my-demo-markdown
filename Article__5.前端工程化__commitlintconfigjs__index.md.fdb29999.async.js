(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{Q4kT:function(d,o,t){"use strict";t.r(o);var l=t("cDcd"),n=t.n(l),e=t("dEAq"),u=t.n(e),c=t("H1Ra");const m=n.a.memo(({demos:a})=>n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"commitlintconfigjs"},n.a.createElement(e.AnchorLink,{to:"#commitlintconfigjs","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"commitlint.config.js"),n.a.createElement("h3",{id:"commit-\u89C4\u5219"},n.a.createElement(e.AnchorLink,{to:"#commit-\u89C4\u5219","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"commit \u89C4\u5219"),n.a.createElement("p",null,n.a.createElement(e.Link,{to:"https://www.jianshu.com/p/c7e40dab5b05"},"https://www.jianshu.com/p/c7e40dab5b05")),n.a.createElement("h3",{id:"\u914D\u7F6E"},n.a.createElement(e.AnchorLink,{to:"#\u914D\u7F6E","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u914D\u7F6E"),n.a.createElement(c.a,{code:`yarn add commitizen --dev
npx commitizen init cz-conventional-changelog --yarn --dev
# scripts
"scripts": {
  "commit": "git-cz"
}
#
yarn commit`,lang:"js"}),n.a.createElement("h3",{id:"\u5F3A\u5236\u91C7\u7528"},n.a.createElement(e.AnchorLink,{to:"#\u5F3A\u5236\u91C7\u7528","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5F3A\u5236\u91C7\u7528"),n.a.createElement(c.a,{code:`yarn add @commitlint/config-conventional @commitlint/cli --dev
# commitlint.config.js
// feat\uFF1A\u65B0\u589E\u529F\u80FD
// fix\uFF1Abug \u4FEE\u590D
// docs\uFF1A\u6587\u6863\u66F4\u65B0
// style\uFF1A\u4E0D\u5F71\u54CD\u7A0B\u5E8F\u903B\u8F91\u7684\u4EE3\u7801\u4FEE\u6539(\u4FEE\u6539\u7A7A\u767D\u5B57\u7B26\uFF0C\u683C\u5F0F\u7F29\u8FDB\uFF0C\u8865\u5168\u7F3A\u5931\u7684\u5206\u53F7\u7B49\uFF0C\u6CA1\u6709\u6539\u53D8\u4EE3\u7801\u903B\u8F91)
// refactor\uFF1A\u91CD\u6784\u4EE3\u7801(\u65E2\u6CA1\u6709\u65B0\u589E\u529F\u80FD\uFF0C\u4E5F\u6CA1\u6709\u4FEE\u590D bug)
// perf\uFF1A\u6027\u80FD, \u4F53\u9A8C\u4F18\u5316
// test\uFF1A\u65B0\u589E\u6D4B\u8BD5\u7528\u4F8B\u6216\u662F\u66F4\u65B0\u73B0\u6709\u6D4B\u8BD5
// build\uFF1A\u4E3B\u8981\u76EE\u7684\u662F\u4FEE\u6539\u9879\u76EE\u6784\u5EFA\u7CFB\u7EDF(\u4F8B\u5982 glup\uFF0Cwebpack\uFF0Crollup \u7684\u914D\u7F6E\u7B49)\u7684\u63D0\u4EA4
// ci\uFF1A\u4E3B\u8981\u76EE\u7684\u662F\u4FEE\u6539\u9879\u76EE\u7EE7\u7EED\u96C6\u6210\u6D41\u7A0B(\u4F8B\u5982 Travis\uFF0CJenkins\uFF0CGitLab CI\uFF0CCircle\u7B49)\u7684\u63D0\u4EA4
// chore\uFF1A\u4E0D\u5C5E\u4E8E\u4EE5\u4E0A\u7C7B\u578B\u7684\u5176\u4ED6\u7C7B\uFF0C\u6BD4\u5982\u6784\u5EFA\u6D41\u7A0B, \u4F9D\u8D56\u7BA1\u7406
// revert\uFF1A\u56DE\u6EDA\u67D0\u4E2A\u66F4\u65E9\u4E4B\u524D\u7684\u63D0\u4EA4

module.exports = {
  ignores: [(commit) => commit.includes('init')],
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 108],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'subject-case': [0],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'perf',
        'style',
        'docs',
        'test',
        'refactor',
        'build',
        'ci',
        'chore',
        'revert',
        'wip',
        'workflow',
        'types',
        'release',
      ],
    ],
  },
};`,lang:"js"}),n.a.createElement("h3",{id:"husky"},n.a.createElement(e.AnchorLink,{to:"#husky","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"husky"),n.a.createElement(c.a,{code:`yarn add husky --dev
# package.json
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  }`,lang:"js"}),n.a.createElement("h3",{id:"demo"},n.a.createElement(e.AnchorLink,{to:"#demo","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"demo"),n.a.createElement(c.a,{code:`// feat\uFF1A\u65B0\u589E\u529F\u80FD
// fix\uFF1Abug \u4FEE\u590D
// docs\uFF1A\u6587\u6863\u66F4\u65B0
// style\uFF1A\u4E0D\u5F71\u54CD\u7A0B\u5E8F\u903B\u8F91\u7684\u4EE3\u7801\u4FEE\u6539(\u4FEE\u6539\u7A7A\u767D\u5B57\u7B26\uFF0C\u683C\u5F0F\u7F29\u8FDB\uFF0C\u8865\u5168\u7F3A\u5931\u7684\u5206\u53F7\u7B49\uFF0C\u6CA1\u6709\u6539\u53D8\u4EE3\u7801\u903B\u8F91)
// refactor\uFF1A\u91CD\u6784\u4EE3\u7801(\u65E2\u6CA1\u6709\u65B0\u589E\u529F\u80FD\uFF0C\u4E5F\u6CA1\u6709\u4FEE\u590D bug)
// perf\uFF1A\u6027\u80FD, \u4F53\u9A8C\u4F18\u5316
// test\uFF1A\u65B0\u589E\u6D4B\u8BD5\u7528\u4F8B\u6216\u662F\u66F4\u65B0\u73B0\u6709\u6D4B\u8BD5
// build\uFF1A\u4E3B\u8981\u76EE\u7684\u662F\u4FEE\u6539\u9879\u76EE\u6784\u5EFA\u7CFB\u7EDF(\u4F8B\u5982 glup\uFF0Cwebpack\uFF0Crollup \u7684\u914D\u7F6E\u7B49)\u7684\u63D0\u4EA4
// ci\uFF1A\u4E3B\u8981\u76EE\u7684\u662F\u4FEE\u6539\u9879\u76EE\u7EE7\u7EED\u96C6\u6210\u6D41\u7A0B(\u4F8B\u5982 Travis\uFF0CJenkins\uFF0CGitLab CI\uFF0CCircle\u7B49)\u7684\u63D0\u4EA4
// chore\uFF1A\u4E0D\u5C5E\u4E8E\u4EE5\u4E0A\u7C7B\u578B\u7684\u5176\u4ED6\u7C7B\uFF0C\u6BD4\u5982\u6784\u5EFA\u6D41\u7A0B, \u4F9D\u8D56\u7BA1\u7406
// revert\uFF1A\u56DE\u6EDA\u67D0\u4E2A\u66F4\u65E9\u4E4B\u524D\u7684\u63D0\u4EA4

module.exports = {
  ignores: [commit => commit.includes('init')],
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 108],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'subject-case': [0],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'perf',
        'style',
        'docs',
        'test',
        'refactor',
        'build',
        'ci',
        'chore',
        'revert',
        'wip',
        'workflow',
        'types',
        'release',
      ],
    ],
  },
};`,lang:"js"}))));o.default=a=>{const r=n.a.useContext(e.context),s=r.demos;return n.a.useEffect(()=>{var i;a!=null&&(i=a.location)!==null&&i!==void 0&&i.hash&&e.AnchorLink.scrollToAnchor(decodeURIComponent(a.location.hash.slice(1)))},[]),n.a.createElement(m,{demos:s})}}}]);
