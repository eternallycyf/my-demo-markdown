(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{oOzH:function(E,u,n){"use strict";n.r(u);var l=n("cDcd"),t=n.n(l),e=n("dEAq"),m=n.n(e),s=n("6T1g");const c=t.a.memo(({demos:a})=>t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"markdown"},t.a.createElement("h2",{id:"\u7B56\u7565\u6A21\u5F0F"},t.a.createElement(e.AnchorLink,{to:"#\u7B56\u7565\u6A21\u5F0F","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u7B56\u7565\u6A21\u5F0F"),t.a.createElement("ul",null,t.a.createElement("li",null,"\u5B9A\u4E49\u4E00\u7EC4\u7B97\u6CD5\u3001\u5C06\u6BCF\u4E2A\u7B97\u6CD5\u90FD\u5C01\u88C5\uFF0C\u5E76\u4E14\u4F7F\u5B83\u4EEC\u4E4B\u95F4\u53EF\u4EE5\u4E92\u6362"),t.a.createElement("li",null,"\u7528\u4E8E\u66FF\u6362 \u591A\u4E2A",t.a.createElement("code",null,"ifelse")," \u6216 ",t.a.createElement("code",null,"switch"))),t.a.createElement("h2",{id:"\u4EE3\u7801\u5B9E\u73B0"},t.a.createElement(e.AnchorLink,{to:"#\u4EE3\u7801\u5B9E\u73B0","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u4EE3\u7801\u5B9E\u73B0"),t.a.createElement(s.a,{code:`class Location {
  position: string;
  constructor(position: string) {
    this.position = position;
  }
}

class Stratege {
  locations: Location[] = [];
  constructor(...locations) {
    this.locations = locations;
    console.log('\u8DEF\u7EBF\u7ECF\u8FC7\u4E86');
    this.location.forEach(el => {
      console.log(el.position + ',');
    });
  }
}

class Move {
  start: Location;
  end: Location;
  stratege: Stratege;

  constructor() {
    this.start = new Location('1 1');
    this.end = new Location('0 0');
    const sea = new Location('1 0');
    const land = new Location('1 0');
    this.stratege = new Stratege(this.start, sea, this.end);
  }
}`,lang:"typescript"}),t.a.createElement("h2",{id:"\u53C2\u8003\u94FE\u63A5"},t.a.createElement(e.AnchorLink,{to:"#\u53C2\u8003\u94FE\u63A5","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u53C2\u8003\u94FE\u63A5"),t.a.createElement("ul",null,t.a.createElement("li",null,t.a.createElement(e.Link,{to:"https://www.runoob.com/w3cnote/state-vs-strategy.html"},"https://www.runoob.com/w3cnote/state-vs-strategy.html")),t.a.createElement("li",null,t.a.createElement(e.Link,{to:"https://www.runoob.com/design-pattern/strategy-pattern.html"},"https://www.runoob.com/design-pattern/strategy-pattern.html")),t.a.createElement("li",null,t.a.createElement(e.Link,{to:"https://design-patterns.readthedocs.io/zh_CN/latest/behavioral_patterns/strategy.html"},"https://design-patterns.readthedocs.io/zh_CN/latest/behavioral_patterns/strategy.html"))))));u.default=a=>{const i=t.a.useContext(e.context),r=i.demos;return t.a.useEffect(()=>{var o;a!=null&&(o=a.location)!==null&&o!==void 0&&o.hash&&e.AnchorLink.scrollToAnchor(decodeURIComponent(a.location.hash.slice(1)))},[]),t.a.createElement(c,{demos:r})}}}]);
