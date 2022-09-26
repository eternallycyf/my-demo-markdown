(self.webpackChunkmy_demo_markdown=self.webpackChunkmy_demo_markdown||[]).push([[758],{98899:function(m,a,n){"use strict";n.r(a);var r=n(12924),e=n.n(r),t=n(16924),o=n(53401);const l=e().memo(({demos:u})=>e().createElement(e().Fragment,null,e().createElement("div",{className:"markdown"},e().createElement("h2",{id:"\u89C2\u5BDF\u8005\u6A21\u5F0F"},e().createElement(t.AnchorLink,{to:"#\u89C2\u5BDF\u8005\u6A21\u5F0F","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u89C2\u5BDF\u8005\u6A21\u5F0F"),e().createElement("ul",null,e().createElement("li",null,"\u5B9A\u4E49\u5BF9\u8C61\u95F4\u4E00\u79CD\u4E00\u5BF9\u591A\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u5F53\u4E00\u4E2A\u5BF9\u8C61\u6539\u53D8\u72B6\u6001\uFF0C\u5219\u6240\u6709\u4F9D\u8D56\u4E8E\u5B83\u7684\u5BF9\u8C61\u90FD\u4F1A\u5F97\u5230\u901A\u77E5\u5E76\u81EA\u52A8\u66F4\u65B0"),e().createElement("li",null,"\u573A\u666F: ",e().createElement("code",null,"vue"),"\u7684\u54CD\u5E94\u5F0F")),e().createElement("h2",{id:"\u4EE3\u7801\u5B9E\u73B0"},e().createElement(t.AnchorLink,{to:"#\u4EE3\u7801\u5B9E\u73B0","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u4EE3\u7801\u5B9E\u73B0"),e().createElement(o.Z,{code:`class Observer {
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
console.log(observer.state)`,lang:"typescript"}),e().createElement("h2",{id:"\u53C2\u8003\u94FE\u63A5"},e().createElement(t.AnchorLink,{to:"#\u53C2\u8003\u94FE\u63A5","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u53C2\u8003\u94FE\u63A5"),e().createElement("ul",null,e().createElement("li",null,e().createElement(t.Link,{to:"https://www.runoob.com/design-pattern/observer-pattern.html"},"https://www.runoob.com/design-pattern/observer-pattern.html")),e().createElement("li",null,e().createElement(t.Link,{to:"https://github.com/sohamkamani/javascript-design-patterns-for-humans#-observer"},"https://github.com/sohamkamani/javascript-design-patterns-for-humans#-observer")),e().createElement("li",null,e().createElement(t.Link,{to:"https://design-patterns.readthedocs.io/zh_CN/latest/behavioral_patterns/observer.html"},"https://design-patterns.readthedocs.io/zh_CN/latest/behavioral_patterns/observer.html"))))));a.default=u=>{const i=e().useContext(t.context),c=i.demos;return e().useEffect(()=>{var s;u!=null&&(s=u.location)!==null&&s!==void 0&&s.hash&&t.AnchorLink.scrollToAnchor(decodeURIComponent(u.location.hash.slice(1)))},[]),e().createElement(l,{demos:c})}}}]);
