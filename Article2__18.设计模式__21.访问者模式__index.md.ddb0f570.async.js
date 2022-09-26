(self.webpackChunkmy_demo_markdown=self.webpackChunkmy_demo_markdown||[]).push([[1233],{1724:function(E,a,t){"use strict";t.r(a);var i=t(12924),n=t.n(i),e=t(16924),l=t(53401);const s=n().memo(({demos:u})=>n().createElement(n().Fragment,null,n().createElement("div",{className:"markdown"},n().createElement("h2",{id:"\u8BBF\u95EE\u8005\u6A21\u5F0F"},n().createElement(e.AnchorLink,{to:"#\u8BBF\u95EE\u8005\u6A21\u5F0F","aria-hidden":"true",tabIndex:-1},n().createElement("span",{className:"icon icon-link"})),"\u8BBF\u95EE\u8005\u6A21\u5F0F"),n().createElement("ul",null,n().createElement("li",null,"\u5B9A\u4E49\u5728\u4E0D\u6539\u53D8\u8BE5\u5BF9\u8C61\u7684\u524D\u63D0\u4E0B\u8BBF\u95EE\u7ED3\u6784\u4E2D\u5143\u7D20\u7684\u65B0\u65B9\u6CD5\uFF0C\u5143\u7D20\u7684\u6267\u884C\u7B97\u6CD5\u53EF\u4EE5\u968F\u7740\u8BBF\u95EE\u8005\u6539\u53D8\u800C\u6539\u53D8"),n().createElement("li",null,"\u5982\u679C\u4E00\u4E2A\u7CFB\u7EDF\u6709\u6BD4\u8F83\u7A33\u5B9A\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u53C8\u6709\u7ECF\u5E38\u53D8\u5316\u7684\u529F\u80FD\u9700\u6C42\uFF0C\u90A3\u4E48\u8BBF\u95EE\u8005\u6A21\u5F0F\u5C31\u662F\u6BD4\u8F83\u5408\u9002\u7684")),n().createElement("h2",{id:"\u4EE3\u7801\u5B9E\u73B0"},n().createElement(e.AnchorLink,{to:"#\u4EE3\u7801\u5B9E\u73B0","aria-hidden":"true",tabIndex:-1},n().createElement("span",{className:"icon icon-link"})),"\u4EE3\u7801\u5B9E\u73B0"),n().createElement(l.Z,{code:`// \u4EE5\u52A8\u7269\u56ED\u6A21\u62DF\u4E3A\u4F8B\uFF0C\u6211\u4EEC\u6709\u51E0\u79CD\u4E0D\u540C\u79CD\u7C7B\u7684\u52A8\u7269\uFF0C\u5B83\u4EEC\u80FD\u591F\u53D1\u51FA\u4E0D\u540C\u7684\u58F0\u97F3\u3002

class Monkey {
  shout() {
    console.log('Ooh oo aa aa!');
  }

  accept(operation: any) {
    operation.visitMonkey(this);
  }
}

class Lion {
  roar() {
    console.log('Roaaar!');
  }

  accept(operation: any) {
    operation.visitLion(this);
  }
}

const speak = {
  visitMonkey(monkey: any) {
    monkey.shout();
  },
  visitLion(lion: any) {
    lion.roar();
  },
};

const jump = {
  visitMonkey(monkey: any) {
    console.log('Jumped 20 feet high! on to the tree!');
  },
  visitLion(lion: any) {
    console.log('Jumped 7 feet! Back on the ground!');
  },
  visitDolphin(dolphin: any) {
    console.log('Walked on water a little and disappeared');
  },
};
const monkey = new Monkey();
const lion = new Lion();

monkey.accept(speak);
monkey.accept(jump);
lion.accept(speak);
lion.accept(jump);`,lang:"typescript"}),n().createElement("h2",{id:"\u53C2\u8003\u94FE\u63A5"},n().createElement(e.AnchorLink,{to:"#\u53C2\u8003\u94FE\u63A5","aria-hidden":"true",tabIndex:-1},n().createElement("span",{className:"icon icon-link"})),"\u53C2\u8003\u94FE\u63A5"),n().createElement("ul",null,n().createElement("li",null,n().createElement(e.Link,{to:"https://www.runoob.com/design-pattern/visitor-pattern.html"},"https://www.runoob.com/design-pattern/visitor-pattern.html")),n().createElement("li",null,n().createElement(e.Link,{to:"https://github.com/sohamkamani/javascript-design-patterns-for-humans#-visitor"},"https://github.com/sohamkamani/javascript-design-patterns-for-humans#-visitor")),n().createElement("li",null,n().createElement(e.Link,{to:"https://www.bookstack.cn/read/design-pattern-in-javascript/design-pattern-visitor-pattern-README.md"},"https://www.bookstack.cn/read/design-pattern-in-javascript/design-pattern-visitor-pattern-README.md"))))));a.default=u=>{const c=n().useContext(e.context),r=c.demos;return n().useEffect(()=>{var o;u!=null&&(o=u.location)!==null&&o!==void 0&&o.hash&&e.AnchorLink.scrollToAnchor(decodeURIComponent(u.location.hash.slice(1)))},[]),n().createElement(s,{demos:r})}}}]);
