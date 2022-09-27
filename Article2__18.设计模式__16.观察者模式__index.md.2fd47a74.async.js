(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{vnpT:function(E,s,n){"use strict";n.r(s);var r=n("cDcd"),e=n.n(r),t=n("dEAq"),m=n.n(t),o=n("6T1g");const l=e.a.memo(({demos:a})=>e.a.createElement(e.a.Fragment,null,e.a.createElement("div",{className:"markdown"},e.a.createElement("h2",{id:"\u89C2\u5BDF\u8005\u6A21\u5F0F"},e.a.createElement(t.AnchorLink,{to:"#\u89C2\u5BDF\u8005\u6A21\u5F0F","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u89C2\u5BDF\u8005\u6A21\u5F0F"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u5B9A\u4E49\u5BF9\u8C61\u95F4\u4E00\u79CD\u4E00\u5BF9\u591A\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u5F53\u4E00\u4E2A\u5BF9\u8C61\u6539\u53D8\u72B6\u6001\uFF0C\u5219\u6240\u6709\u4F9D\u8D56\u4E8E\u5B83\u7684\u5BF9\u8C61\u90FD\u4F1A\u5F97\u5230\u901A\u77E5\u5E76\u81EA\u52A8\u66F4\u65B0"),e.a.createElement("li",null,"\u573A\u666F: ",e.a.createElement("code",null,"vue"),"\u7684\u54CD\u5E94\u5F0F")),e.a.createElement("h2",{id:"\u4EE3\u7801\u5B9E\u73B0"},e.a.createElement(t.AnchorLink,{to:"#\u4EE3\u7801\u5B9E\u73B0","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u4EE3\u7801\u5B9E\u73B0"),e.a.createElement(o.a,{code:`class Observer {
    states: string[] = []
    update(state: string) {
        this.states.push(state)
    }
}

class People {
   state: string = ''
   observer\uFF1AObserver
   setState(newState:string){
       if(this.state !== newState){
           this.state = newState
           this.notify(this.state)
       }
   }
   notify(state: string){
       if(this.observer !== null){
           this.observer.update(state)
       }
   }
   setObserver(observer: Observer) {
       this.observer = observer
   }
}

const observer = new Observer()
const people = new People().setObserver(observer)
people.setState('shit')
console.log(observer.state)`,lang:"typescript"}),e.a.createElement("h2",{id:"\u53C2\u8003\u94FE\u63A5"},e.a.createElement(t.AnchorLink,{to:"#\u53C2\u8003\u94FE\u63A5","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u53C2\u8003\u94FE\u63A5"),e.a.createElement("ul",null,e.a.createElement("li",null,e.a.createElement(t.Link,{to:"https://www.runoob.com/design-pattern/observer-pattern.html"},"https://www.runoob.com/design-pattern/observer-pattern.html")),e.a.createElement("li",null,e.a.createElement(t.Link,{to:"https://github.com/sohamkamani/javascript-design-patterns-for-humans#-observer"},"https://github.com/sohamkamani/javascript-design-patterns-for-humans#-observer")),e.a.createElement("li",null,e.a.createElement(t.Link,{to:"https://design-patterns.readthedocs.io/zh_CN/latest/behavioral_patterns/observer.html"},"https://design-patterns.readthedocs.io/zh_CN/latest/behavioral_patterns/observer.html"))))));s.default=a=>{const i=e.a.useContext(t.context),c=i.demos;return e.a.useEffect(()=>{var u;a!=null&&(u=a.location)!==null&&u!==void 0&&u.hash&&t.AnchorLink.scrollToAnchor(decodeURIComponent(a.location.hash.slice(1)))},[]),e.a.createElement(l,{demos:c})}}}]);
