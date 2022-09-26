(self.webpackChunkmy_demo_markdown=self.webpackChunkmy_demo_markdown||[]).push([[9713],{3017:function(s,o,n){"use strict";n.r(o);var a=n(12924),e=n.n(a),u=n(16924),i=n(53401);const m=e().memo(({demos:t})=>e().createElement(e().Fragment,null,e().createElement("div",{className:"markdown"},e().createElement("h2",{id:"\u6865\u63A5\u6A21\u5F0F"},e().createElement(u.AnchorLink,{to:"#\u6865\u63A5\u6A21\u5F0F","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u6865\u63A5\u6A21\u5F0F"),e().createElement("ul",null,e().createElement("li",null,"\u6865\u63A5\u6A21\u5F0F\u4E5F\u53EB\u6865\u6881\u6A21\u5F0F\uFF0C\u5C06\u5B9E\u73B0\u4E0E\u62BD\u8C61\u653E\u5728\u4E24\u4E2A\u4E0D\u540C\u7684\u5C42\u6B21\u4E2D\uFF0C\u4F7F\u5F97\u4E24\u8005\u53EF\u4EE5\u72EC\u7ACB\u5730\u53D8\u5316\u3002(\u6700\u4E3B\u8981\u7684\u5C06\u5B9E\u73B0\u548C\u62BD\u8C61\u4E24\u4E2A\u5C42\u6B21\u5212\u5206\u5F00\u6765)"),e().createElement("li",null,"\u5E38\u89C1\u573A\u666F\uFF1AJDBC \u9A71\u52A8\u7A0B\u5E8F\u3001\u94F6\u884C\u8F6C\u8D26\u7CFB\u7EDF\uFF08\u8F6C\u8D26\u5206\u7C7B\u548C\u8F6C\u8D26\u7528\u6237\u7C7B\u578B\uFF09\u3001\u6D88\u606F\u7BA1\u7406\uFF08\u6D88\u606F\u7C7B\u578B\u3001\u6D88\u606F\u5206\u7C7B\uFF09")),e().createElement("h2",{id:"\u4EE3\u7801\u5B9E\u73B0"},e().createElement(u.AnchorLink,{to:"#\u4EE3\u7801\u5B9E\u73B0","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u4EE3\u7801\u5B9E\u73B0"),e().createElement(i.Z,{code:`// \u5B9E\u73B0\u63A5\u53E3\u89D2\u8272
interface Implementor {
  doSomething(): void;
  doAnything(): void;
}

// \u5177\u4F53\u5B9E\u73B0\u89D2\u8272
class ConcreteImplementor1 implements Implementor {
  public doSomething(): void {}
  public doAnything(): void {}
}
class ConcreteImplementor2 implements Implementor {
  public doSomething(): void {}
  public doAnything(): void {}
}

// \u62BD\u8C61\u7C7B
abstract class Abstraction {
  private imp: Implementor;
  constructor(imp: Implementor) {
    this.imp = imp;
  }

  // \u81EA\u8EAB\u7684\u884C\u4E3A\u548C\u5C5E\u6027
  public request(): void {
    this.imp.doSomething();
  }
}
// \u5177\u4F53\u62BD\u8C61\u5316\u89D2\u8272
class RefinedAbstraction extends Abstraction {
  constructor(imp: Implementor) {
    super(imp);
  }

  public request(): void {
    // \u81EA\u5DF1\u5199\u4E00\u4E9B\u5904\u7406\u4E1A\u52A1
    super.request();
  }
}

// \u8C03\u7528
// \u5B9A\u4E49\u4E00\u4E2A\u5B9E\u73B0\u5316\u89D2\u8272
const imp: Implementor = new ConcreteImplementor1();
// \u5B9A\u4E49\u4E00\u4E2A\u62BD\u8C61\u5316\u89D2\u8272
const abs: Abstraction = new RefinedAbstraction(imp);
// \u6267\u884C\u4E0A\u4E0B\u6587
abs.request();`,lang:"typescript"}),e().createElement("h2",{id:"\u53C2\u8003\u94FE\u63A5"},e().createElement(u.AnchorLink,{to:"#\u53C2\u8003\u94FE\u63A5","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u53C2\u8003\u94FE\u63A5"),e().createElement("ul",null,e().createElement("li",null,e().createElement(u.Link,{to:"https://segmentfault.com/a/1190000012547750"},"https://segmentfault.com/a/1190000012547750")),e().createElement("li",null,e().createElement(u.Link,{to:"https://www.runoob.com/design-pattern/bridge-pattern.html"},"https://www.runoob.com/design-pattern/bridge-pattern.html")),e().createElement("li",null,e().createElement(u.Link,{to:"https://design-patterns.readthedocs.io/zh_CN/latest/structural_patterns/bridge.html"},"https://design-patterns.readthedocs.io/zh_CN/latest/structural_patterns/bridge.html"))))));o.default=t=>{const r=e().useContext(u.context),c=r.demos;return e().useEffect(()=>{var l;t!=null&&(l=t.location)!==null&&l!==void 0&&l.hash&&u.AnchorLink.scrollToAnchor(decodeURIComponent(t.location.hash.slice(1)))},[]),e().createElement(m,{demos:c})}}}]);
