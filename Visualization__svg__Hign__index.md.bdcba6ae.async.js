(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{Iufn:function(E,i,t){"use strict";t.r(i);var c=t("cDcd"),e=t.n(c),n=t("dEAq"),u=t.n(n),a=t("H1Ra");const o=e.a.memo(({demos:l})=>e.a.createElement(e.a.Fragment,null,e.a.createElement("div",{className:"markdown"},e.a.createElement("h2",{id:"hign"},e.a.createElement(n.AnchorLink,{to:"#hign","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Hign"),e.a.createElement("h2",{id:"\u5176\u4ED6\u5B9E\u4F8B"},e.a.createElement(n.AnchorLink,{to:"#\u5176\u4ED6\u5B9E\u4F8B","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5176\u4ED6\u5B9E\u4F8B"),e.a.createElement("h3",{id:"text"},e.a.createElement(n.AnchorLink,{to:"#text","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"text"),e.a.createElement(a.a,{code:`<text x="10" y="15">I love SVG</text>
#
transform="rotate(30 20,40)"
// dx\uFF0Cdy\u8868\u793A\u5E73\u79FB\u7684\u8DDD\u79BB`,lang:"js"}),e.a.createElement("h4",{id:"textpath"},e.a.createElement(n.AnchorLink,{to:"#textpath","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"textPath"),e.a.createElement(a.a,{code:`// \u6CBFpath\u65B9\u5411\u6392\u5217\u6587\u672CtextPath
<path
  id="wavyPath"
  d="M75,100 a50,25 0 1,0 50,25"
  fill="none" />
<text x="50" y="50" font-size="14">
        <textPath xlink:href="#wavyPath">
        Text travels along any path that you define for it.
        </textPath>
</text>`,lang:"js"}),e.a.createElement("h3",{id:"a"},e.a.createElement(n.AnchorLink,{to:"#a","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"A"),e.a.createElement(a.a,{code:`<a xlink:href="http://www.w3schools.com/svg/" target="_blank">
  {' '}
  ...{' '}
</a>`,lang:"js"}),e.a.createElement("h3",{id:"span"},e.a.createElement(n.AnchorLink,{to:"#span","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"span"),e.a.createElement(a.a,{code:'<tspan fill="red">D3</tspan>',lang:"js"}),e.a.createElement("h3",{id:"lineargradient"},e.a.createElement(n.AnchorLink,{to:"#lineargradient","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"linearGradient"),e.a.createElement(a.a,{code:`// \u7EBF\u6027\u6E10\u53D8 \u5F84\u5411\u6E10\u53D8
<defs>
    <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <!--x1,y1 x2,y2\u7528\u6765\u5B9A\u4E49\u5F84\u5411\u6E10\u53D8\u7684\u65B9\u5411\uFF0C\u6B64\u5904\u4E3A\u5411\u53F3-->
        <stop offset="0%" stop-color="blue">
        <stop offset="100%" stop-color="red">
    </linearGradient>
    <radialGradient id="irisGradient">
        <stop offset="25%" stop-color="green" />
        <stop offset="100%" stop-color="dodgerblue" />
    </radialGradient>
</defs>
<rect fill="url(#myGradient)" x1="10" y1="10" width="300" height="100"/>`,lang:"js"}),e.a.createElement("h3",{id:"defs"},e.a.createElement(n.AnchorLink,{to:"#defs","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"defs"),e.a.createElement(a.a,{code:`// \u5B9A\u4E49\u53EF\u91CD\u7528\u7EC4\u4EF6
<defs />`,lang:"jd"}),e.a.createElement("h3",{id:"g"},e.a.createElement(n.AnchorLink,{to:"#g","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"g"),e.a.createElement(a.a,{code:`// \u5206\u7EC4 \u5B9A\u4E49\u7EDF\u4E00\u7684\u6837\u5F0F
<g />`,lang:"js"}),e.a.createElement("h3",{id:"use"},e.a.createElement(n.AnchorLink,{to:"#use","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"use"),e.a.createElement(a.a,{code:`// \u5F15\u7528defs\u4E2D\u5B9A\u4E49\u7684\u5143\u7D20
<g id="eye"> ... </g>
<use xlink:href="#eye" x="250" fill="dodgerblue" />`,lang:"js"}),e.a.createElement("h2",{id:"path"},e.a.createElement(n.AnchorLink,{to:"#path","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"path"),e.a.createElement("h3",{id:"base"},e.a.createElement(n.AnchorLink,{to:"#base","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"base"),e.a.createElement(a.a,{code:`#
 \u5B57\u6BCD\u5927\u5199:\u7EDD\u5BF9\u4F4D\u7F6E \u5C0F\u5199:\u76F8\u5BF9\u4F4D\u7F6E
#
\u547D\u4EE4            \u540D\u79F0                        \u53C2\u6570
 M           moveto \u2003\u79FB\u52A8\u5230                (x y)+
 L           lineto \u2003\u753B\u7EBF\u5230                (x y)+
 Z          closepath \u2003\u5173\u95ED\u8DEF\u5F84            (none)
 H          horizontal lineto \u2003\u6C34\u5E73\u7EBF\u5230      x+
 V          vertical lineto \u2003\u5782\u76F4\u7EBF\u5230        y+
 A        elliptical arc\u692D\u5706\u5F27
   (rx ry x-axis-rotation large-arc-flag sweep-flag x y)+
 C        curveto \u4E09\u6B21\u8D1D\u585E\u5C14\u66F2\u7EBF\u5230          (x1 y1 x2 y2 x y)+
 S     smooth curveto\u5149\u6ED1\u4E09\u6B21\u8D1D\u585E\u5C14\u66F2\u7EBF\u5230   (x2 y2 x y)+
 Q        B\xE9zier curveto\u4E8C\u6B21\u8D1D\u585E\u5C14\u66F2\u7EBF\u5230    (x1 y1 x y)+
 T     smooth B\xE9zier curveto\u5149\u6ED1\u4E8C\u6B21\u8D1D\u585E\u5C14\u66F2\u7EBF\u5230  (x y)+
 #
    <path d="M150 0 L75 200 L225 200 Z" />`,lang:"js"}),e.a.createElement("h3",{id:"\u8D1D\u585E\u5C14\u66F2\u7EBF"},e.a.createElement(n.AnchorLink,{to:"#\u8D1D\u585E\u5C14\u66F2\u7EBF","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u8D1D\u585E\u5C14\u66F2\u7EBF"),e.a.createElement("h4",{id:"\u4E09\u6B21"},e.a.createElement(n.AnchorLink,{to:"#\u4E09\u6B21","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u4E09\u6B21"),e.a.createElement(a.a,{code:`# \u8D1D\u8D5B\u5C14\u66F2\u7EBF
// x1 y1 x2 y2 \u4E3A\u63A7\u5236\u70B9 x y \u4E3A\u5173\u952E\u70B9
 Cx1 y1, x2 y2, x y
 <path
	d="M20 20 C140 30 60 160 200 200"
	stroke="#000000"
	fill="none"
	style="stroke-width: 2px;"
/>`,lang:"js"}),e.a.createElement("h4",{id:"\u5149\u6ED1\u4E09\u6B21"},e.a.createElement(n.AnchorLink,{to:"#\u5149\u6ED1\u4E09\u6B21","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5149\u6ED1\u4E09\u6B21"),e.a.createElement(a.a,{code:`// S\u7528\u6765\u8865\u5200 \u81EA\u52A8\u751F\u6210\u4E00\u4E2A\u5BF9\u79F0\u70B9
// Sx2 y2, x y
<path
  d="M20 20 C140 30 60 160 200 200 S140 30 200 200"
  stroke="#000000"
  fill="none"
  style="stroke-width: 2px;"
/>`,lang:"js"}),e.a.createElement("h4",{id:"\u4E8C\u6B21"},e.a.createElement(n.AnchorLink,{to:"#\u4E8C\u6B21","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u4E8C\u6B21"),e.a.createElement(a.a,{code:`// X1,y1,x,y
<path
  d="M20 20 Q140 30 200 200"
  stroke="#000000"
  fill="none"
  style="stroke-width: 2px;"
/>`,lang:"js"}),e.a.createElement("h4",{id:"\u5149\u6ED1\u4E8C\u6B21"},e.a.createElement(n.AnchorLink,{to:"#\u5149\u6ED1\u4E8C\u6B21","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5149\u6ED1\u4E8C\u6B21"),e.a.createElement(a.a,{code:`// T\u7528\u6765\u8865\u5200 \u81EA\u52A8\u751F\u6210\u4E00\u4E2A\u5BF9\u79F0\u70B9
// Tx y
<path
  d="M20 20 Q140 30 200 200 T"
  stroke="#000000"
  fill="none"
  style="stroke-width: 2px;"
/>`,lang:"js"}),e.a.createElement("h3",{id:"\u5706\u5F27"},e.a.createElement(n.AnchorLink,{to:"#\u5706\u5F27","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5706\u5F27"),e.a.createElement(a.a,{code:`// A rx ry x-deg large-arc sweep-flag x y
// rx    x\u8F74\u534A\u5F84
// x-deg x\u8F74\u65CB\u8F6C\u89D2\u5EA6
// large-arc \u8868\u793A\u5927\u4E8E180\u5EA6\u8FD8\u662F\u5C0F\u4E8E180 0\u4E3A\u5C0F 1\u4F4D\u5927
// sweep-flag \u5F27\u7EBF\u65B9\u5411 0\u4E3A\u6CBF\u9006\u65F6\u9488\uFF0C1\u4E3A\u6CBF\u987A\u65F6\u9488
// x y\u4E3A\u6700\u7EC8\u5750\u6807\u3002
<path d="M80 80 A45 45, 0, 0, 0, 125 125" fill="green" />`,lang:"js"}),e.a.createElement("h2",{id:"\u4E8B\u4EF6"},e.a.createElement(n.AnchorLink,{to:"#\u4E8B\u4EF6","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u4E8B\u4EF6"),e.a.createElement(a.a,{code:`document.getElementById('...')
  .addEventListener("click",function(){
     ...
  })`,lang:"js"}))));i.default=l=>{const d=e.a.useContext(n.context),s=d.demos;return e.a.useEffect(()=>{var r;l!=null&&(r=l.location)!==null&&r!==void 0&&r.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(l.location.hash.slice(1)))},[]),e.a.createElement(o,{demos:s})}}}]);
