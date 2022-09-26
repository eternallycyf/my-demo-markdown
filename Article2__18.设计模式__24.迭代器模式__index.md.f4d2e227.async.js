(self.webpackChunkmy_demo_markdown=self.webpackChunkmy_demo_markdown||[]).push([[3328],{16380:function(c,o,e){"use strict";e.r(o);var i=e(12924),t=e.n(i),n=e(16924),s=e(53401);const E=t().memo(({demos:u})=>t().createElement(t().Fragment,null,t().createElement("div",{className:"markdown"},t().createElement("h2",{id:"\u8FED\u4EE3\u5668\u6A21\u5F0F"},t().createElement(n.AnchorLink,{to:"#\u8FED\u4EE3\u5668\u6A21\u5F0F","aria-hidden":"true",tabIndex:-1},t().createElement("span",{className:"icon icon-link"})),"\u8FED\u4EE3\u5668\u6A21\u5F0F"),t().createElement("ul",null,t().createElement("li",null,"\u8FED\u4EE3\u5668\u6A21\u5F0F",t().createElement("code",null,"Iterator Pattern"),"\u63D0\u4F9B\u4E86\u4E00\u79CD\u65B9\u6CD5\u987A\u5E8F\u8BBF\u95EE\u4E00\u4E2A\u805A\u5408\u5BF9\u8C61\u4E2D\u7684\u5404\u4E2A\u5143\u7D20\uFF0C\u800C\u53C8\u65E0\u9700\u66B4\u9732\u8BE5\u5BF9\u8C61\u7684\u5185\u90E8\u5B9E\u73B0"),t().createElement("li",null,"\u8FD9\u6837\u65E2\u53EF\u4EE5\u505A\u5230\u4E0D\u66B4\u9732\u96C6\u5408\u7684\u5185\u90E8\u7ED3\u6784\uFF0C\u53C8\u53EF\u8BA9\u5916\u90E8\u4EE3\u7801\u900F\u660E\u5730\u8BBF\u95EE\u96C6\u5408\u5185\u90E8\u7684\u6570\u636E\uFF0C\u8FED\u4EE3\u5668\u6A21\u5F0F\u5C5E\u4E8E\u884C\u4E3A\u578B\u6A21\u5F0F\u3002")),t().createElement("h2",{id:"\u4EE3\u7801\u5B9E\u73B0"},t().createElement(n.AnchorLink,{to:"#\u4EE3\u7801\u5B9E\u73B0","aria-hidden":"true",tabIndex:-1},t().createElement("span",{className:"icon icon-link"})),"\u4EE3\u7801\u5B9E\u73B0"),t().createElement(s.Z,{code:`// \u5E7F\u64AD\u7535\u53F0\u793A\u4F8B

class RadioStation {
  // \u7535\u53F0
  constructor(frequency) {
    this.frequency = frequency;
  }

  getFrequency() {
    return this.frequency;
  }
}

class StationList {
  // \u8FED\u4EE3\u5668
  constructor() {
    this.index = -1;
    this.stations = [];
  }

  get(i) {
    return this.stations[this.index];
  }

  hasNext() {
    let index = this.index + 1;
    return this.stations[index] !== void 0;
  }

  next() {
    return this.stations[++this.index];
  }

  addStation(station) {
    this.stations.push(station);
  }

  removeStation(toRemove) {
    const toRemoveFrequency = toRemove.getFrequency();
    this.stations = this.stations.filter(
      station => station.getFrequency() !== toRemoveFrequency,
    );
  }
}

(function() {
  const stationList = new StationList();
  stationList.addStation(new RadioStation(89));
  stationList.addStation(new RadioStation(101));
  stationList.addStation(new RadioStation(102));
  stationList.addStation(new RadioStation(103.2));
  stationList.stations.forEach(station => console.log(station.getFrequency())); // 89 101 102 103.2
  stationList.removeStation(new RadioStation(89));
  while (stationList.hasNext()) console.log(stationList.next().getFrequency()); // 101 102 103.2
})();`,lang:"js"}),t().createElement("h2",{id:"\u53C2\u8003\u94FE\u63A5"},t().createElement(n.AnchorLink,{to:"#\u53C2\u8003\u94FE\u63A5","aria-hidden":"true",tabIndex:-1},t().createElement("span",{className:"icon icon-link"})),"\u53C2\u8003\u94FE\u63A5"),t().createElement("ul",null,t().createElement("li",null,t().createElement(n.Link,{to:"https://www.cnblogs.com/xuwendong/p/9898030.html"},"https://www.cnblogs.com/xuwendong/p/9898030.html")),t().createElement("li",null,t().createElement(n.Link,{to:"https://www.runoob.com/design-pattern/iterator-pattern.html"},"https://www.runoob.com/design-pattern/iterator-pattern.html")),t().createElement("li",null,t().createElement(n.Link,{to:"https://github.com/sohamkamani/javascript-design-patterns-for-humans#-iterator"},"https://github.com/sohamkamani/javascript-design-patterns-for-humans#-iterator"))))));o.default=u=>{const r=t().useContext(n.context),l=r.demos;return t().useEffect(()=>{var a;u!=null&&(a=u.location)!==null&&a!==void 0&&a.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(u.location.hash.slice(1)))},[]),t().createElement(E,{demos:l})}}}]);
