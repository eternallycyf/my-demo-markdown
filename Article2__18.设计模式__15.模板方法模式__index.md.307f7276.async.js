(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{sQUR:function(E,u,n){"use strict";n.r(u);var l=n("cDcd"),e=n.n(l),t=n("dEAq"),m=n.n(t),s=n("H1Ra");const c=e.a.memo(({demos:a})=>e.a.createElement(e.a.Fragment,null,e.a.createElement("div",{className:"markdown"},e.a.createElement("h2",{id:"\u6A21\u677F\u65B9\u6CD5\u6A21\u5F0F"},e.a.createElement(t.AnchorLink,{to:"#\u6A21\u677F\u65B9\u6CD5\u6A21\u5F0F","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u6A21\u677F\u65B9\u6CD5\u6A21\u5F0F"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u5B9A\u4E49\u4E00\u4E2A\u64CD\u4F5C\u4E2D\u7684\u7B97\u6CD5\u6846\u67B6\uFF0C\u5C06\u4E00\u4E9B\u6B65\u9AA4\u5EF6\u8FDF\u5230\u5B50\u7C7B\u4E2D\uFF0C\u4F7F\u5F97\u5B50\u7C7B\u53EF\u4EE5\u4E0D\u6539\u53D8\u4E00\u4E2A\u7B97\u6CD5\u7684\u7ED3\u6784\u5373\u53EF\u91CD\u5B9A\u4E49\u8BE5\u7B97\u6CD5\u7684\u67D0\u4E9B\u7279\u5B9A\u6B65\u9AA4")),e.a.createElement("h2",{id:"\u4EE3\u7801\u5B9E\u73B0"},e.a.createElement(t.AnchorLink,{to:"#\u4EE3\u7801\u5B9E\u73B0","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u4EE3\u7801\u5B9E\u73B0"),e.a.createElement(s.a,{code:`abstract class AbstractClass {
  constructor() {}

  // \u6A21\u677F\u65B9\u6CD5
  public template(): void {
    this.operation1();
    this.hookMethod() && this.operation2();
    this.operation3();
  }

  // \u57FA\u672C\u65B9\u6CD5
  protected operation1(): void {
    console.log('\u4F7F\u7528\u4E86\u65B9\u6CD5operation1');
  }

  protected operation2(): void {
    console.log('\u4F7F\u7528\u4E86\u65B9\u6CD5operation2');
  }

  protected operation3(): void {
    console.log('\u4F7F\u7528\u4E86\u65B9\u6CD5operation3');
  }

  // \u94A9\u5B50\u65B9\u6CD5
  protected hookMethod(): boolean {
    return true;
  }
}

class ConcreteClassA extends AbstractClass {
  protected operation2(): void {
    console.log('\u5BF9\u8BE5\u65B9\u6CD5operation2\u8FDB\u884C\u4E86\u4FEE\u6539\u518D\u4F7F\u7528');
  }

  protected operation3(): void {
    console.log('\u5BF9\u8BE5\u65B9\u6CD5operation3\u8FDB\u884C\u4E86\u4FEE\u6539\u518D\u4F7F\u7528');
  }
}

class ConcreteClassB extends AbstractClass {
  // \u8986\u76D6\u94A9\u5B50\u65B9\u6CD5
  protected hookMethod(): boolean {
    return false;
  }
}

function main() {
  const class1: AbstractClass = new ConcreteClassA();
  const class2: AbstractClass = new ConcreteClassB();

  class1.template();
  class2.template();
}

main();`,lang:"typescript"}),e.a.createElement("h2",{id:"\u53C2\u8003\u94FE\u63A5"},e.a.createElement(t.AnchorLink,{to:"#\u53C2\u8003\u94FE\u63A5","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u53C2\u8003\u94FE\u63A5"),e.a.createElement("ul",null,e.a.createElement("li",null,e.a.createElement(t.Link,{to:"https://juejin.im/post/6844903615476269064"},"https://juejin.im/post/6844903615476269064")),e.a.createElement("li",null,e.a.createElement(t.Link,{to:"https://www.runoob.com/design-pattern/template-pattern.html"},"https://www.runoob.com/design-pattern/template-pattern.html")),e.a.createElement("li",null,e.a.createElement(t.Link,{to:"https://github.com/sohamkamani/javascript-design-patterns-for-humans#-template-method"},"https://github.com/sohamkamani/javascript-design-patterns-for-humans#-template-method"))))));u.default=a=>{const r=e.a.useContext(t.context),i=r.demos;return e.a.useEffect(()=>{var o;a!=null&&(o=a.location)!==null&&o!==void 0&&o.hash&&t.AnchorLink.scrollToAnchor(decodeURIComponent(a.location.hash.slice(1)))},[]),e.a.createElement(c,{demos:i})}}}]);
