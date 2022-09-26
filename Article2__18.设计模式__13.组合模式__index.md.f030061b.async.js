(self.webpackChunkmy_demo_markdown=self.webpackChunkmy_demo_markdown||[]).push([[3877],{75479:function(E,o,t){"use strict";t.r(o);var s=t(12924),e=t.n(s),n=t(16924),l=t(53401);const c=e().memo(({demos:u})=>e().createElement(e().Fragment,null,e().createElement("div",{className:"markdown"},e().createElement("h2",{id:"\u7EC4\u5408\u6A21\u5F0F"},e().createElement(n.AnchorLink,{to:"#\u7EC4\u5408\u6A21\u5F0F","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u7EC4\u5408\u6A21\u5F0F"),e().createElement("ul",null,e().createElement("li",null,"\u5C06\u5BF9\u8C61\u7EC4\u5408\u6210\u6811\u5F62\u7ED3\u6784\u4EE5\u8868\u793A\u201C\u90E8\u5206-\u6574\u4F53\u201D\u7684\u5C42\u6B21\u7ED3\u6784\u3002\u7EC4\u5408\u4F7F\u5F97\u7528\u6237\u5BF9\u5355\u4E2A\u5BF9\u8C61\u548C\u7EC4\u5408\u5BF9\u8C61\u7684\u4F7F\u7528\u5177\u6709\u4E00\u81F4\u6027\u3002"),e().createElement("li",null,"\u5E38\u89C1\u573A\u666F: \u6587\u4EF6\u76EE\u5F55")),e().createElement("h2",{id:"\u4EE3\u7801\u5B9E\u73B0"},e().createElement(n.AnchorLink,{to:"#\u4EE3\u7801\u5B9E\u73B0","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u4EE3\u7801\u5B9E\u73B0"),e().createElement("ul",null,e().createElement("li",null,"\u7EC4\u5408\u5BF9\u8C61\u548C\u53F6\u5B50\u5BF9\u8C61\u5E76\u4E0D\u662F\u7236\u5B50\u5173\u7CFB\uFF0C\u800C\u662F\u7EC4\u5408\u5173\u7CFB"),e().createElement("li",null,"\u5B9E\u73B0\u65F6\uFF0C\u6211\u4EEC\u4F1A\u5C06\u7EC4\u5408\u5BF9\u8C61\u7C7B ",e().createElement("code",null,"Composite")," \u6216\u8005\u53F6\u5B50\u5BF9\u8C61\u7C7B ",e().createElement("code",null,"Leaf")," \u7EE7\u627F\u4E8E\u540C\u4E00\u4E2A\u62BD\u8C61\u7C7B ",e().createElement("code",null,"Component"))),e().createElement(l.Z,{code:`abstract class Component {
  operation() {}
}
class Composite extends Component {
  operation() {
    console.log('\u7EC4\u5408\u5BF9\u8C61\u7684\u5B9E\u73B0');
  }
}
class Leaf extends Component {
  operation() {
    console.log('\u53F6\u5B50\u5BF9\u8C61\u7684\u5B9E\u73B0');
  }
}`,lang:"typescript"}),e().createElement(l.Z,{code:`abstract class TreeBase {
  name: string;
  nodes: TreeBase[] = [];
  constructor(name: string) {
    this.name = name;
  }
  add(n: TreeBase) {}
  remove(n: TreeBase) {}
  show() {}
}

class TreeComposite extends TreeBase {
  constructor(name: string) {
    super(name);
  }

  add(n: TreeBase) {
    this.nodes.push(n);
  }

  remove(n: TreeBase) {
    this.nodes.splice(
      this.nodes.findIndex(e => e.name === n.name),
      1,
    );
  }

  show() {
    console.log(\`\${this.name}, I am a composite node\`);
    this.nodes.forEach(e => {
      e.show();
    });
  }
}
class Leaf extends TreeBase {
  constructor(name: string) {
    super(name);
  }

  show() {
    console.log(\`\${this.name}, I am a leaf\`);
  }
}
const root = new TreeComposite('root');
const node1 = new TreeComposite('node1');
const leaf1 = new Leaf('leaf1');
const leaf2 = new Leaf('leaf2');
const leaf3 = new Leaf('leaf3');

root.add(node1);
root.add(leaf3);
node1.add(leaf1);
node1.add(leaf2);
root.show();
/**
 *
 * root, I am a composite node
 * tree.component.ts:51 node1, I am a composite node
 * tree.component.ts:64 leaf1, I am a leaf
 * tree.component.ts:64 leaf2, I am a leaf
 * tree.component.ts:64 leaf3, I am a leaf
 *
 **/`,lang:"typescript"}),e().createElement("h2",{id:"\u53C2\u8003\u94FE\u63A5"},e().createElement(n.AnchorLink,{to:"#\u53C2\u8003\u94FE\u63A5","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u53C2\u8003\u94FE\u63A5"),e().createElement("ul",null,e().createElement("li",null,e().createElement(n.Link,{to:"https://www.jianshu.com/p/a6e236040505"},"https://www.jianshu.com/p/a6e236040505")),e().createElement("li",null,e().createElement(n.Link,{to:"https://segmentfault.com/a/1190000019773556"},"https://segmentfault.com/a/1190000019773556")),e().createElement("li",null,e().createElement(n.Link,{to:"https://github.com/tcorral/Design-Patterns-in-Javascript"},"https://github.com/tcorral/Design-Patterns-in-Javascript")),e().createElement("li",null,e().createElement(n.Link,{to:"https://www.runoob.com/design-pattern/composite-pattern.html"},"https://www.runoob.com/design-pattern/composite-pattern.html")),e().createElement("li",null,e().createElement(n.Link,{to:"https://www.cnblogs.com/TomXu/archive/2012/04/12/2435530.html"},"https://www.cnblogs.com/TomXu/archive/2012/04/12/2435530.html")),e().createElement("li",null,e().createElement(n.Link,{to:"https://github.com/sohamkamani/javascript-design-patterns-for-humans#-composite"},"https://github.com/sohamkamani/javascript-design-patterns-for-humans#-composite")),e().createElement("li",null,e().createElement(n.Link,{to:"https://xhui.top/2018/12/20/JS%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-8-%E7%BB%84%E5%90%88%E6%A8%A1%E5%BC%8F/"},"https://xhui.top/2018/12/20/JS%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-8-%E7%BB%84%E5%90%88%E6%A8%A1%E5%BC%8F/"))))));o.default=u=>{const m=e().useContext(n.context),r=m.demos;return e().useEffect(()=>{var a;u!=null&&(a=u.location)!==null&&a!==void 0&&a.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(u.location.hash.slice(1)))},[]),e().createElement(c,{demos:r})}}}]);
