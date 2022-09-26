(self.webpackChunkmy_demo_markdown=self.webpackChunkmy_demo_markdown||[]).push([[1171],{69591:function(E,u,n){"use strict";n.r(u);var l=n(12924),e=n.n(l),t=n(16924),s=n(53401);const c=e().memo(({demos:o})=>e().createElement(e().Fragment,null,e().createElement("div",{className:"markdown"},e().createElement("h2",{id:"\u7B56\u7565\u6A21\u5F0F"},e().createElement(t.AnchorLink,{to:"#\u7B56\u7565\u6A21\u5F0F","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u7B56\u7565\u6A21\u5F0F"),e().createElement("ul",null,e().createElement("li",null,"\u5B9A\u4E49\u4E00\u7EC4\u7B97\u6CD5\u3001\u5C06\u6BCF\u4E2A\u7B97\u6CD5\u90FD\u5C01\u88C5\uFF0C\u5E76\u4E14\u4F7F\u5B83\u4EEC\u4E4B\u95F4\u53EF\u4EE5\u4E92\u6362"),e().createElement("li",null,"\u7528\u4E8E\u66FF\u6362 \u591A\u4E2A",e().createElement("code",null,"ifelse")," \u6216 ",e().createElement("code",null,"switch"))),e().createElement("h2",{id:"\u4EE3\u7801\u5B9E\u73B0"},e().createElement(t.AnchorLink,{to:"#\u4EE3\u7801\u5B9E\u73B0","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u4EE3\u7801\u5B9E\u73B0"),e().createElement(s.Z,{code:`class Location {
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
}`,lang:"typescript"}),e().createElement("h2",{id:"\u53C2\u8003\u94FE\u63A5"},e().createElement(t.AnchorLink,{to:"#\u53C2\u8003\u94FE\u63A5","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u53C2\u8003\u94FE\u63A5"),e().createElement("ul",null,e().createElement("li",null,e().createElement(t.Link,{to:"https://www.runoob.com/w3cnote/state-vs-strategy.html"},"https://www.runoob.com/w3cnote/state-vs-strategy.html")),e().createElement("li",null,e().createElement(t.Link,{to:"https://www.runoob.com/design-pattern/strategy-pattern.html"},"https://www.runoob.com/design-pattern/strategy-pattern.html")),e().createElement("li",null,e().createElement(t.Link,{to:"https://design-patterns.readthedocs.io/zh_CN/latest/behavioral_patterns/strategy.html"},"https://design-patterns.readthedocs.io/zh_CN/latest/behavioral_patterns/strategy.html"))))));u.default=o=>{const i=e().useContext(t.context),r=i.demos;return e().useEffect(()=>{var a;o!=null&&(a=o.location)!==null&&a!==void 0&&a.hash&&t.AnchorLink.scrollToAnchor(decodeURIComponent(o.location.hash.slice(1)))},[]),e().createElement(c,{demos:r})}}}]);
