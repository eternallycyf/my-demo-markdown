(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{a7k2:function(E,s,n){"use strict";n.r(s);var l=n("cDcd"),t=n.n(l),e=n("dEAq"),m=n.n(e),o=n("6T1g");const r=t.a.memo(({demos:a})=>t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"markdown"},t.a.createElement("h2",{id:"\u72B6\u6001\u6A21\u5F0F"},t.a.createElement(e.AnchorLink,{to:"#\u72B6\u6001\u6A21\u5F0F","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u72B6\u6001\u6A21\u5F0F"),t.a.createElement("ul",null,t.a.createElement("li",null,"\u5B83\u4E3B\u8981\u7528\u6765\u89E3\u51B3\u5BF9\u8C61\u5728\u591A\u79CD\u72B6\u6001\u8F6C\u6362\u65F6\uFF0C\u9700\u8981\u5BF9\u5916\u8F93\u51FA\u4E0D\u540C\u7684\u884C\u4E3A\u7684\u95EE\u9898\u3002\u72B6\u6001\u548C\u884C\u4E3A\u662F\u4E00\u4E00\u5BF9\u5E94\u7684\uFF0C\u72B6\u6001\u4E4B\u95F4\u53EF\u4EE5\u76F8\u4E92\u8F6C\u6362"),t.a.createElement("li",null,"\u4F8B\u5982 \u62BD\u5956\u6D3B\u52A8\u6709\u5F88\u591A\u7684\u72B6\u6001\u548C\u5BF9\u5E94\u7684\u884C\u4E3A"),t.a.createElement("li",null,"\u5728 ",t.a.createElement("code",null,"getter setter")," \u76F4\u63A5\u8FDB\u884C\u8F6C\u53D1\u5230\u5408\u9002\u7684\u884C\u4E3A")),t.a.createElement("h2",{id:"\u4EE3\u7801\u5B9E\u73B0"},t.a.createElement(e.AnchorLink,{to:"#\u4EE3\u7801\u5B9E\u73B0","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u4EE3\u7801\u5B9E\u73B0"),t.a.createElement(o.a,{code:`class State {
  tmp: string;
  set store(state: string) {
    if (this.tmp !== state) {
      this.tmp = state;
    }
  }
  get store(): string {
    return this.tmp;
  }
}

class People {
  state: State;
  constructor(state: State) {
    this.state = state;
  }
}

const state = new State();
const people = new People(state);

state.store = 1;
console.log(people.state.store);
class State {
  tmp: string;
  set store(state: string) {
    if (this.tmp !== state) {
      this.tmp = state;
    }
  }
  get store(): string {
    return this.tmp;
  }
}

class People {
  state: State;
  constructor(state: State) {
    this.state = state;
  }
}

const state = new State();
const people = new People(state);

state.store = 1;
console.log(people.state.store);`,lang:"typescript"}),t.a.createElement("h2",{id:"\u53C2\u8003\u94FE\u63A5"},t.a.createElement(e.AnchorLink,{to:"#\u53C2\u8003\u94FE\u63A5","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u53C2\u8003\u94FE\u63A5"),t.a.createElement("ul",null,t.a.createElement("li",null,t.a.createElement(e.Link,{to:"https://www.runoob.com/design-pattern/state-pattern.html"},"https://www.runoob.com/design-pattern/state-pattern.html")),t.a.createElement("li",null,t.a.createElement(e.Link,{to:"https://github.com/sohamkamani/javascript-design-patterns-for-humans#-state"},"https://github.com/sohamkamani/javascript-design-patterns-for-humans#-state")),t.a.createElement("li",null,t.a.createElement(e.Link,{to:"https://design-patterns.readthedocs.io/zh_CN/latest/behavioral_patterns/state.html"},"https://design-patterns.readthedocs.io/zh_CN/latest/behavioral_patterns/state.html"))))));s.default=a=>{const c=t.a.useContext(e.context),i=c.demos;return t.a.useEffect(()=>{var u;a!=null&&(u=a.location)!==null&&u!==void 0&&u.hash&&e.AnchorLink.scrollToAnchor(decodeURIComponent(a.location.hash.slice(1)))},[]),t.a.createElement(r,{demos:i})}}}]);
