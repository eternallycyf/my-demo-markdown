(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{n0nL:function(s,c,e){"use strict";e.r(c);var i=e("cDcd"),n=e.n(i),t=e("dEAq"),m=e.n(t),o=e("H1Ra");const l=n.a.memo(({demos:a})=>n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"grid"},n.a.createElement(t.AnchorLink,{to:"#grid","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"grid"),n.a.createElement("h3",{id:"\u7236\u5143\u7D20\u5C5E\u6027"},n.a.createElement(t.AnchorLink,{to:"#\u7236\u5143\u7D20\u5C5E\u6027","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u7236\u5143\u7D20\u5C5E\u6027"),n.a.createElement(o.a,{code:`display:grid
grid-template-columns: \u7B2C\u4E00\u5217 \u7B2C\u4E8C\u5217 ...
grid-template-rows: \u7B2C\u4E00\u884C \u7B2C\u4E8C\u884C ...
#
repeat(3, 100px)
// auto-fill \u81EA\u52A8\u586B\u5145
repeat(auto-fill, 100px)
// 1fr \u7C7B\u4F3Cflex\u91CC\u6BD4\u4F8B
repeat(3, 1fr)
// minmax \u6700\u5927\u503C\u6700\u5C0F\u503C
1fr minmax(150px, 1fr) 1fr
// auto \u81EA\u9002\u5E94
100px auto 100px
// \u7F51\u683C\u7EBF \u5B9A\u4F4D\u7528
[c1] 100px [c2] auto [c3] 100px [c4];
# \u95F4\u8DDD
gap: 20px;
gap: 20px 20px;
row-gap: 20px;
column-gap: 20px;
# \u533A\u57DF \u4E0D\u9700\u8981\u7684\u7528 . \u4EE3\u66FF
grid-template-areas:
    'a b c'
    'd e f'
    'g h i';
# \u4E3B\u8F74\u65B9\u5411 dense:\u81EA\u52A8\u586B\u5145
 grid-auto-flow: row|column dense;
# \u5BF9\u9F50\u65B9\u5F0F place-items: \u4E3B\u8F74\u65B9\u5411 \u4FA7\u8F74\u65B9\u5411
  justify-items: start | end | center| stretch;
  align-items: start | end | center| stretch;
  place-items: stretch stretch;
# \u6BCF\u4E00\u5217\u7684\u5BF9\u9F50\u65B9\u5F0F
justify-content: start end enter stretch space-around
                 space-between space-evenly
align-content: ...
place-content: ... ...
# \u63A7\u5236\u591A\u4F59\u62C9\u4F38\u7684item
grid-auto-columns: 50px;
grid-auto-rows:
grid-auto-flow`,lang:"js"}),n.a.createElement("h3",{id:"\u5B50\u5143\u7D20\u5C5E\u6027"},n.a.createElement(t.AnchorLink,{to:"#\u5B50\u5143\u7D20\u5C5E\u6027","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5B50\u5143\u7D20\u5C5E\u6027"),n.a.createElement(o.a,{code:`# \u6BCF\u4E00\u4E2A\u5B50\u9879\u7684 \u5F00\u59CB \u7ED3\u675F\u4F4D\u7F6E, \u4F9D\u636E grid-template-areas \u7F51\u683C\u7EBF
  grid-column-start: 1;
  grid-column-end: 3;
  grid-column: 1 / 3;
  grid-row-start: 1;
  grid-row-end: 3;
  grid-row: 1 / 3;

  grid-area: 1 / 1 / 3 / 3;
# \u8DE8\u8D8A\u7684\u7F51\u683C
  grid-column-start: span 3;
  grid-column-end: span 3;
#
  grid-area: b;
# \u548C\u7236\u5143\u7D20\u7684 justify-item \u4E00\u6837
  justify-self
  align-self
  place-self`,lang:"css"}))));c.default=a=>{const u=n.a.useContext(t.context),d=u.demos;return n.a.useEffect(()=>{var r;a!=null&&(r=a.location)!==null&&r!==void 0&&r.hash&&t.AnchorLink.scrollToAnchor(decodeURIComponent(a.location.hash.slice(1)))},[]),n.a.createElement(l,{demos:d})}}}]);
