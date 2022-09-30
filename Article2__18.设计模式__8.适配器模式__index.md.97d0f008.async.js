(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{xY8H:function(o,c,t){"use strict";t.r(c);var r=t("cDcd"),u=t.n(r),e=t("dEAq"),d=t.n(e),n=t("H1Ra");const E=u.a.memo(({demos:a})=>u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"markdown"},u.a.createElement("h2",{id:"\u9002\u914D\u5668\u6A21\u5F0F"},u.a.createElement(e.AnchorLink,{to:"#\u9002\u914D\u5668\u6A21\u5F0F","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"\u9002\u914D\u5668\u6A21\u5F0F"),u.a.createElement("ul",null,u.a.createElement("li",null,"\u9002\u914D\u5668\u6A21\u5F0F\uFF08\u53D8\u538B\u5668\u6A21\u5F0F\u3001\u5305\u88C5\u6A21\u5F0F\uFF09\u662F\u5C06\u4E00\u4E2A\u7C7B\u7684\u63A5\u53E3\u53D8\u6362\u4E3A\u5BA2\u6237\u7AEF\u6240\u671F\u5F85\u7684\u53E6\u4E00\u79CD\u63A5\u53E3\uFF0C\u4ECE\u800C\u4F7F\u539F\u672C\u56E0\u63A5\u53E3\u4E0D\u5339\u914D\u800C\u65E0\u6CD5\u5728\u4E00\u8D77\u5DE5\u4F5C\u7684\u4E24\u4E2A\u7C7B\u80FD\u591F\u5728\u4E00\u8D77\u5DE5\u4F5C\u3002"),u.a.createElement("li",null,"\u9002\u914D\u5668\u6A21\u5F0F\u4E3B\u8981\u5206\u4E3A\u4E09\u7C7B\uFF1A\u7C7B\u9002\u914D\u5668\u6A21\u5F0F\u3001\u5BF9\u8C61\u9002\u914D\u5668\u6A21\u5F0F\u3001\u63A5\u53E3\u9002\u914D\u5668\u6A21\u5F0F\u3002\u8FD9\u4E09\u79CD\u660E\u660E\u65B9\u5F0F\u662F\u6839\u636E\u88AB\u9002\u914D\u8005",u.a.createElement("code",null,"\uFF08src\uFF09"),"\u662F\u4EE5\u600E\u6837\u7684\u5F62\u5F0F\u7ED9\u5230",u.a.createElement("code",null,"Adapter"),"\u6765\u547D\u540D\u7684\u3002",u.a.createElement("ul",null,u.a.createElement("li",null,"\u7C7B\u9002\u914D\u5668\uFF1A\u4EE5\u7C7B\u7ED9\u5230\uFF0C\u5728",u.a.createElement("code",null,"Adapter"),"\u91CC\uFF0C\u5C31\u662F\u5C06",u.a.createElement("code",null,"src"),"\u5F53\u505A\u7C7B\uFF0C\u7EE7\u627F\u3002\uFF08\u901A\u8FC7\u7EE7\u627F\u6765\u5B9E\u73B0\u9002\u914D\u5668\u529F\u80FD\uFF09"),u.a.createElement("li",null,"\u5BF9\u8C61\u9002\u914D\u5668\uFF1A\u4EE5\u5BF9\u8C61\u7ED9\u5230\uFF0C\u5728",u.a.createElement("code",null,"Adapter"),"\u91CC\uFF0C\u5C06",u.a.createElement("code",null,"src"),"\u4F5C\u4E3A\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u6301\u6709\u3002\uFF08\u901A\u8FC7\u7EC4\u5408\u6765\u5B9E\u73B0\u9002\u914D\u5668\u529F\u80FD\uFF09"),u.a.createElement("li",null,"\u63A5\u53E3\u9002\u914D\u5668\uFF1A\u4EE5\u63A5\u53E3\u7ED9\u5230\uFF0C\u5728",u.a.createElement("code",null,"Adapter"),"\u91CC\uFF0C\u5C06",u.a.createElement("code",null,"src"),"\u4F5C\u4E3A\u4E00\u4E2A\u63A5\u53E3\uFF0C\u5B9E\u73B0\u3002")))),u.a.createElement("h2",{id:"\u4EE3\u7801\u5B9E\u73B0"},u.a.createElement(e.AnchorLink,{to:"#\u4EE3\u7801\u5B9E\u73B0","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"\u4EE3\u7801\u5B9E\u73B0"),u.a.createElement("h3",{id:"\u7C7B\u9002\u914D\u5668"},u.a.createElement(e.AnchorLink,{to:"#\u7C7B\u9002\u914D\u5668","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"\u7C7B\u9002\u914D\u5668"),u.a.createElement(n.a,{code:`// \u76EE\u6807\u5BF9\u8C61
interface Target {
  request(): void;
}
// \u88AB\u9002\u914D\u8005
class Adaptee {
  constructor() {}
  // \u8FD9\u662F\u6E90\u89D2\u8272\uFF0C\u6709\u81EA\u5DF1\u7684\u7684\u4E1A\u52A1\u903B\u8F91
  public specificRequest(): void {}
}
// \u9002\u914D\u5668
class Adapter extends Adaptee implements Target {
  constructor() {
    super();
  }
  public request(): void {
    super.specificRequest();
  }
}
const target: Target = new Adapter();
target.request();`,lang:"typescript"}),u.a.createElement("h3",{id:"\u5BF9\u8C61\u9002\u914D\u5668"},u.a.createElement(e.AnchorLink,{to:"#\u5BF9\u8C61\u9002\u914D\u5668","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"\u5BF9\u8C61\u9002\u914D\u5668"),u.a.createElement(n.a,{code:`// \u76EE\u6807\u5BF9\u8C61
interface Target {
  request(): void;
}
// \u88AB\u9002\u914D\u8005
class Adaptee {
  constructor() {}
  // \u8FD9\u662F\u6E90\u89D2\u8272\uFF0C\u6709\u81EA\u5DF1\u7684\u7684\u4E1A\u52A1\u903B\u8F91
  public specificRequest(): void {}
}
// \u9002\u914D\u5668
class Adapter implements Target {
  private adaptee: Adaptee;
  constructor(adaptee: Adaptee) {
    this.adaptee = adaptee;
  }
  public request(): void {
    this.adaptee.specificRequest();
  }
}
// \u4F7F\u7528
const target: Target = new Adapter(new Adaptee());
target.request();`,lang:"typescript"}),u.a.createElement("h3",{id:"\u63A5\u53E3\u9002\u914D\u5668"},u.a.createElement(e.AnchorLink,{to:"#\u63A5\u53E3\u9002\u914D\u5668","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"\u63A5\u53E3\u9002\u914D\u5668"),u.a.createElement(n.a,{code:`interface Adaptee {
  operation1(): void;
  operation2(): void;
}
abstract class AbsAdapter implements Adaptee {
  public operation1(): void {}
  public operation2(): void {}
}
class UseClass extends AbsAdapter {
  public operation1(): void {} // \u91CD\u5199\u8BE5\u7C7B
}`,lang:"typescript"}),u.a.createElement("h2",{id:"\u53C2\u8003\u94FE\u63A5"},u.a.createElement(e.AnchorLink,{to:"#\u53C2\u8003\u94FE\u63A5","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"\u53C2\u8003\u94FE\u63A5"),u.a.createElement("ul",null,u.a.createElement("li",null,u.a.createElement(e.Link,{to:"https://segmentfault.com/a/1190000012436538"},"https://segmentfault.com/a/1190000012436538")),u.a.createElement("li",null,u.a.createElement(e.Link,{to:"https://www.runoob.com/design-pattern/adapter-pattern.html"},"https://www.runoob.com/design-pattern/adapter-pattern.html")),u.a.createElement("li",null,u.a.createElement(e.Link,{to:"https://design-patterns.readthedocs.io/zh_CN/latest/structural_patterns/adapter.html"},"https://design-patterns.readthedocs.io/zh_CN/latest/structural_patterns/adapter.html"))))));c.default=a=>{const i=u.a.useContext(e.context),s=i.demos;return u.a.useEffect(()=>{var l;a!=null&&(l=a.location)!==null&&l!==void 0&&l.hash&&e.AnchorLink.scrollToAnchor(decodeURIComponent(a.location.hash.slice(1)))},[]),u.a.createElement(E,{demos:s})}}}]);
