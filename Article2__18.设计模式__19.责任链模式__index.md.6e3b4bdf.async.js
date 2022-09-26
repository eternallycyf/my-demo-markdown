(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{hOpv:function(E,a,u){"use strict";u.r(a);var l=u("cDcd"),e=u.n(l),n=u("dEAq"),d=u.n(n),r=u("H1Ra");const c=e.a.memo(({demos:t})=>e.a.createElement(e.a.Fragment,null,e.a.createElement("div",{className:"markdown"},e.a.createElement("h2",{id:"\u8D23\u4EFB\u94FE\u6A21\u5F0F"},e.a.createElement(n.AnchorLink,{to:"#\u8D23\u4EFB\u94FE\u6A21\u5F0F","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u8D23\u4EFB\u94FE\u6A21\u5F0F"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u4F7F\u591A\u4E2A\u5BF9\u8C61\u90FD\u8981\u673A\u4F1A\u5904\u7406\u8BF7\u6C42\uFF0C\u4ECE\u800C\u907F\u514D\u4E86\u8BF7\u6C42\u53D1\u9001\u8005\u548C\u63A5\u6536\u8005\u4E4B\u95F4\u7684\u8026\u5408\u5173\u7CFB\u3002\u5C06\u8FD9\u4E9B\u5BF9\u8C61\u8FDE\u6210\u4E00\u6761\u94FE\uFF0C\u5E76\u6CBF\u7740\u8FD9\u6761\u94FE\u4F20\u9012\u8BE5\u8BF7\u6C42\uFF0C\u76F4\u5230\u6709\u5BF9\u8C61\u5904\u7406\u5B83\u4E3A\u6B62"),e.a.createElement("li",null,"\u573A\u666F: \u4F20\u7EDF\u7684",e.a.createElement("code",null,"ifelse"),"\u6216",e.a.createElement("code",null,"switch")," \u5904\u7406\u52A8\u6001\u6570\u636E\u7684\u65F6\u5019\u5904\u4E8E\u5F3A\u8026\u5408"),e.a.createElement("li",null,"\u8D23\u4EFB\u94FE\u6A21\u5F0F\u662F\u4E00\u5BF9\u4E00\u7684\u3002\u4E00\u4E2A\u5BF9\u8C61\u5904\u7406\u4E0D\u4E86\u5C31\u4F1A\u4F20\u9012\u7ED9\u4E0B\u4E00\u4E2A\u63A5\u53D7\u8005")),e.a.createElement("h2",{id:"\u4EE3\u7801\u5B9E\u73B0"},e.a.createElement(n.AnchorLink,{to:"#\u4EE3\u7801\u5B9E\u73B0","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u4EE3\u7801\u5B9E\u73B0"),e.a.createElement(r.a,{code:`abstract class Handler {
  // \u4E0B\u4E00\u4E2A\u5904\u7406\u8005
  public successor?: Handler;
  public name: string;
  constructor(name: string) {
    this.name = name;
  }

  public abstract handleRequest(request: MyRequest): void;

  public setNext(successor: Handler): void {
    this.successor = successor;
  }
}

class ConcreteHandler1 extends Handler {
  constructor(name: string) {
    super(name);
  }

  public handleRequest(request: MyRequest): void {
    // \u9996\u5148\u5224\u65AD\u5F53\u524D\u7EA7\u522B\u662F\u5426\u80FD\u591F\u5904\u7406\uFF0C\u4E0D\u80FD\u591F\u5904\u7406\u5219\u4EA4\u7ED9\u4E0B\u4E00\u4E2A\u7EA7\u522B\u5904\u7406
    if (request.level <= 1) {
      console.log('\u88AB\u4E00\u7EA7\u5904\u7406');
    } else {
      // \u4EA4\u7ED9\u4E0B\u4E00\u7EA7\u5904\u7406
      this.successor && this.successor.handleRequest(request);
    }
  }
}

class ConcreteHandler2 extends Handler {
  constructor(name: string) {
    super(name);
  }

  public handleRequest(request: MyRequest): void {
    // \u9996\u5148\u5224\u65AD\u5F53\u524D\u7EA7\u522B\u662F\u5426\u80FD\u591F\u5904\u7406\uFF0C\u4E0D\u80FD\u591F\u5904\u7406\u5219\u4EA4\u7ED9\u4E0B\u4E00\u4E2A\u7EA7\u522B\u5904\u7406
    if (request.level > 1 && request.level <= 2) {
      console.log('\u88AB\u4E8C\u7EA7\u5904\u7406');
    } else {
      // \u4EA4\u7ED9\u4E0B\u4E00\u7EA7\u5904\u7406
      this.successor && this.successor.handleRequest(request);
    }
  }
}

class ConcreteHandler3 extends Handler {
  constructor(name: string) {
    super(name);
  }

  public handleRequest(request: MyRequest): void {
    // \u9996\u5148\u5224\u65AD\u5F53\u524D\u7EA7\u522B\u662F\u5426\u80FD\u591F\u5904\u7406\uFF0C\u4E0D\u80FD\u591F\u5904\u7406\u5219\u4EA4\u7ED9\u4E0B\u4E00\u4E2A\u7EA7\u522B\u5904\u7406
    if (request.level > 2) {
      console.log('\u88AB\u4E09\u7EA7\u5904\u7406');
    } else {
      // \u4EA4\u7ED9\u4E0B\u4E00\u7EA7\u5904\u7406
      this.successor && this.successor.handleRequest(request);
    }
  }
}

class MyRequest {
  private _level: number;
  constructor(level: number) {
    this._level = level;
  }

  get level(): number {
    return this._level;
  }

  set level(value: number) {
    this._level = this.level;
  }
}

function main() {
  // \u521B\u5EFA\u4E00\u4E2A\u8BF7\u6C42
  const request: MyRequest = new MyRequest(5);

  // \u521B\u5EFA\u76F8\u5173\u5904\u7406\u4EBA
  const handler1: Handler = new ConcreteHandler1('lili');
  const handler2: Handler = new ConcreteHandler2('linlin');
  const handler3: Handler = new ConcreteHandler3('shunshun');

  // \u8BBE\u7F6E\u4E0B\u7EA7\u522B\u5BA1\u6279\uFF0C\u6784\u6210\u73AF\u5F62\u7ED3\u6784
  handler1.setNext(handler2);
  handler2.setNext(handler3);
  handler3.setNext(handler1);

  handler1.handleRequest(request);
}

main();`,lang:"typescript"}),e.a.createElement("h2",{id:"\u53C2\u8003\u94FE\u63A5"},e.a.createElement(n.AnchorLink,{to:"#\u53C2\u8003\u94FE\u63A5","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u53C2\u8003\u94FE\u63A5"),e.a.createElement("ul",null,e.a.createElement("li",null,e.a.createElement(n.Link,{to:"https://juejin.im/post/6844903855348514829"},"https://juejin.im/post/6844903855348514829")),e.a.createElement("li",null,e.a.createElement(n.Link,{to:"https://www.runoob.com/design-pattern/chain-of-responsibility-pattern.html"},"https://www.runoob.com/design-pattern/chain-of-responsibility-pattern.html")),e.a.createElement("li",null,e.a.createElement(n.Link,{to:"https://github.com/sohamkamani/javascript-design-patterns-for-humans#-chain-of-responsibility"},"https://github.com/sohamkamani/javascript-design-patterns-for-humans#-chain-of-responsibility"))))));a.default=t=>{const o=e.a.useContext(n.context),i=o.demos;return e.a.useEffect(()=>{var s;t!=null&&(s=t.location)!==null&&s!==void 0&&s.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(t.location.hash.slice(1)))},[]),e.a.createElement(c,{demos:i})}}}]);
