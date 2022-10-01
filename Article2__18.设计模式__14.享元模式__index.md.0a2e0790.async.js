(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{Gesk:function(E,r,a){"use strict";a.r(r);var l=a("cDcd"),e=a.n(l),t=a("dEAq"),m=a.n(t),c=a("6T1g");const o=e.a.memo(({demos:n})=>e.a.createElement(e.a.Fragment,null,e.a.createElement("div",{className:"markdown"},e.a.createElement("h2",{id:"\u4EAB\u5143\u6A21\u5F0F"},e.a.createElement(t.AnchorLink,{to:"#\u4EAB\u5143\u6A21\u5F0F","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u4EAB\u5143\u6A21\u5F0F"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u907F\u514D\u91CD\u65B0\u521B\u5EFA\u5BF9\u8C61\uFF0C\u5176\u5B9E\u53EA\u8981\u6709\u7F13\u5B58\u5BF9\u8C61\u7684\u610F\u601D\uFF0C\u5E76\u4E14\u5171\u7528\u4E00\u4E2A\u5BF9\u8C61\u5B9E\u4F8B\uFF0C\u5C31\u662F\u4EAB\u5143\u6A21\u5F0F")),e.a.createElement("h2",{id:"\u4EE3\u7801\u5B9E\u73B0"},e.a.createElement(t.AnchorLink,{to:"#\u4EE3\u7801\u5B9E\u73B0","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u4EE3\u7801\u5B9E\u73B0"),e.a.createElement(c.a,{code:`class Car {
  name!: string;
  color!: string;
  changeColor(color: string) {
    this.color = color;
  }
  changeName(name: string) {
    this.name = name;
  }
}
class CarFactory {
  static car: Car;
  static getCar(): Car {
    if (CarFactory.car === null) {
      CarFactory.car = new Car();
    }
    return CarFactory.car;
  }
}
CarFactory.getCar().changeColor('red');`,lang:"typescript"}),e.a.createElement("h2",{id:"\u53C2\u8003\u94FE\u63A5"},e.a.createElement(t.AnchorLink,{to:"#\u53C2\u8003\u94FE\u63A5","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u53C2\u8003\u94FE\u63A5"),e.a.createElement("ul",null,e.a.createElement("li",null,e.a.createElement(t.Link,{to:"https://www.runoob.com/design-pattern/flyweight-pattern.html"},"https://www.runoob.com/design-pattern/flyweight-pattern.html")),e.a.createElement("li",null,e.a.createElement(t.Link,{to:"https://github.com/sohamkamani/javascript-design-patterns-for-humans#-flyweight"},"https://github.com/sohamkamani/javascript-design-patterns-for-humans#-flyweight")),e.a.createElement("li",null,e.a.createElement(t.Link,{to:"https://design-patterns.readthedocs.io/zh_CN/latest/structural_patterns/flyweight.html"},"https://design-patterns.readthedocs.io/zh_CN/latest/structural_patterns/flyweight.html"))))));r.default=n=>{const s=e.a.useContext(t.context),i=s.demos;return e.a.useEffect(()=>{var u;n!=null&&(u=n.location)!==null&&u!==void 0&&u.hash&&t.AnchorLink.scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))},[]),e.a.createElement(o,{demos:i})}}}]);
