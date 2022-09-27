(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"8WiV":function(E,o,t){"use strict";t.r(o);var i=t("cDcd"),e=t.n(i),n=t("dEAq"),m=t.n(n),s=t("6T1g");const c=e.a.memo(({demos:u})=>e.a.createElement(e.a.Fragment,null,e.a.createElement("div",{className:"markdown"},e.a.createElement("h2",{id:"\u5907\u5FD8\u5F55\u6A21\u5F0F"},e.a.createElement(n.AnchorLink,{to:"#\u5907\u5FD8\u5F55\u6A21\u5F0F","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5907\u5FD8\u5F55\u6A21\u5F0F"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u662F\u5728\u4E0D\u7834\u574F\u5C01\u88C5\u6027\u7684\u524D\u63D0\u4E0B\uFF0C\u5C06\u5BF9\u8C61\u5F53\u524D\u7684\u5185\u90E8\u72B6\u6001\u4FDD\u5B58\u5728\u5BF9\u8C61\u4E4B\u5916\uFF0C\u4EE5\u4FBF\u4EE5\u540E\u5F53\u9700\u8981\u65F6\u80FD\u5C06\u8BE5\u5BF9\u8C61\u6062\u590D\u5230\u539F\u5148\u4FDD\u5B58\u7684\u72B6\u6001\u3002\u5907\u5FD8\u5F55\u6A21\u5F0F\u53C8\u53EB\u5FEB\u7167\u6A21\u5F0F\uFF0C\u662F\u4E00\u79CD\u5BF9\u8C61\u884C\u4E3A\u578B\u6A21\u5F0F"),e.a.createElement("li",null,"\u573A\u666F",e.a.createElement("ul",null,e.a.createElement("li",null,"\u9700\u8981\u4FDD\u5B58/\u6062\u590D\u6570\u636E\u7684\u76F8\u5173\u72B6\u6001\u573A\u666F\u3002"),e.a.createElement("li",null,"\u63D0\u4F9B\u4E00\u4E2A\u53EF\u56DE\u6EDA\u7684\u64CD\u4F5C\u3002")))),e.a.createElement("h2",{id:"\u4EE3\u7801\u5B9E\u73B0"},e.a.createElement(n.AnchorLink,{to:"#\u4EE3\u7801\u5B9E\u73B0","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u4EE3\u7801\u5B9E\u73B0"),e.a.createElement(s.a,{code:`// \u4EE5\u6587\u672C\u7F16\u8F91\u5668\u4E3A\u4F8B\uFF0C\u8BE5\u7F16\u8F91\u5668\u4F1A\u4E0D\u65F6\u5730\u4FDD\u5B58\u72B6\u6001\uFF0C\u5E76\u4E14\u53EF\u4EE5\u6839\u636E\u9700\u8981\u8FDB\u884C\u6062\u590D\u3002
class EditorMemento {
  // memento\u5BF9\u8C61\u5C06\u80FD\u591F\u4FDD\u6301\u7F16\u8F91\u5668\u72B6\u6001
  public _content: string;
  constructor(public content: string) {
    this._content = content;
  }

  getContent() {
    return this._content;
  }
}

class Editor {
  public _content: string;
  constructor() {
    this._content = '';
  }

  type(words: string) {
    this._content = \`\${this._content} \${words}\`;
  }

  getContent() {
    return this._content;
  }

  save() {
    return new EditorMemento(this._content);
  }

  restore(memento: any) {
    this._content = memento.getContent();
  }
}

const editor = new Editor();

editor.type('This is the first sentence.');
editor.type('This is second.');

const saved = editor.save();

editor.type('And this is third.');

console.log(editor.getContent()); // This is the first sentence. This is second. And this is third.

editor.restore(saved);

console.log(editor.getContent()); // This is the first sentence. This is second.`,lang:"typescript"}),e.a.createElement("h2",{id:"\u53C2\u8003\u94FE\u63A5"},e.a.createElement(n.AnchorLink,{to:"#\u53C2\u8003\u94FE\u63A5","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u53C2\u8003\u94FE\u63A5"),e.a.createElement("ul",null,e.a.createElement("li",null,e.a.createElement(n.Link,{to:"https://github.com/Byronlee/Design-patterns"},"https://github.com/Byronlee/Design-patterns")),e.a.createElement("li",null,e.a.createElement(n.Link,{to:"https://www.runoob.com/design-pattern/memento-pattern.html"},"https://www.runoob.com/design-pattern/memento-pattern.html")),e.a.createElement("li",null,e.a.createElement(n.Link,{to:"https://github.com/sohamkamani/javascript-design-patterns-for-humans#-memento"},"https://github.com/sohamkamani/javascript-design-patterns-for-humans#-memento"))))));o.default=u=>{const r=e.a.useContext(n.context),l=r.demos;return e.a.useEffect(()=>{var a;u!=null&&(a=u.location)!==null&&a!==void 0&&a.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(u.location.hash.slice(1)))},[]),e.a.createElement(c,{demos:l})}}}]);
