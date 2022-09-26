(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{VcpZ:function(E,l,u){"use strict";u.r(l);var r=u("cDcd"),e=u.n(r),t=u("dEAq"),m=u.n(t),o=u("6T1g");const c=e.a.memo(({demos:n})=>e.a.createElement(e.a.Fragment,null,e.a.createElement("div",{className:"markdown"},e.a.createElement("h2",{id:"\u539F\u578B\u6A21\u5F0F"},e.a.createElement(t.AnchorLink,{to:"#\u539F\u578B\u6A21\u5F0F","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u539F\u578B\u6A21\u5F0F"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u539F\u578B\u6A21\u5F0F",e.a.createElement("code",null,"Prototype")," ",e.a.createElement("code",null,"Pattern"),"\u7528\u539F\u578B\u5B9E\u4F8B\u6307\u5411\u521B\u5EFA\u5BF9\u8C61\u7684\u7C7B\uFF0C\u4F7F\u7528\u4E8E\u521B\u5EFA\u65B0\u7684\u5BF9\u8C61\u7684\u7C7B\u7684\u5171\u4EAB\u539F\u578B\u7684\u5C5E\u6027\u4E0E\u65B9\u6CD5"),e.a.createElement("li",null,"\u7B80\u8A00\u4E4B\u5C31\u662F\u901A\u8FC7\u514B\u9686\u6765\u521B\u5EFA\u4E00\u4E2A\u4E00\u6A21\u4E00\u6837\u7684\u5BF9\u8C61\u3002"),e.a.createElement("li",null,"\u5E94\u7528\u573A\u666F",e.a.createElement("ul",null,e.a.createElement("li",null,"\u521B\u5EFA\u6210\u672C\u6BD4\u8F83\u5927\u7684\u573A\u666F"),e.a.createElement("li",null,"\u9700\u8981\u52A8\u6001\u7684\u83B7\u53D6\u5F53\u524D\u7684\u5BF9\u8C61\u8FD0\u884C\u65F6\u72B6\u6001\u7684\u573A\u666F")))),e.a.createElement("h2",{id:"js-\u5B9E\u73B0"},e.a.createElement(t.AnchorLink,{to:"#js-\u5B9E\u73B0","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"js \u5B9E\u73B0"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u5BF9\u4E8E",e.a.createElement("code",null,"ES5"),"\uFF0C\u63D0\u4F9B",e.a.createElement("code",null,"Object.create()"),"\u65B9\u6CD5\u521B\u5EFA\u4E00\u4E2A\u65B0\u5BF9\u8C61\uFF0C\u4F7F\u7528\u73B0\u6709\u7684\u5BF9\u8C61\u6765\u63D0\u4F9B\u65B0\u521B\u5EFA\u7684\u5BF9\u8C61\u7684",e.a.createElement("code",null,"__proto__")),e.a.createElement("li",null,"\u5BF9\u4E8E",e.a.createElement("code",null,"ES6"),"\uFF0C\u63D0\u4F9B",e.a.createElement("code",null,"Object.setPrototypeOf()"),"\u65B9\u6CD5\u8BBE\u7F6E\u4E00\u4E2A\u6307\u5B9A\u7684\u5BF9\u8C61\u7684\u539F\u578B(\u5373,\u5185\u90E8",e.a.createElement("code",null,"[[Prototype]]"),"\u5C5E\u6027)\u5230\u53E6\u4E00\u4E2A\u5BF9\u8C61\u6216 ",e.a.createElement("code",null,"null"))),e.a.createElement(o.a,{code:`function Dog() {
  this.name = 'lili';
  this.birthYear = 2015;
  this.sex = '\u7537';
  this.presentYear = 2018;

  this.getDiscription = () => {
    return \`\u72D7\u72D7\u53EB\${this.name},\u6027\u522B\${this.sex},\${this.presentYear}\u5E74\${this
      .presentYear - this.birthYear}\u5C81\u4E86\`;
  };
}

const dog = new Dog();
console.log(dog.getDiscription()); // \u72D7\u72D7\u53EBlili,\u6027\u522B\u7537,2018\u5E743\u5C81\u4E86
dog.presentYear = 2020; // \u4FEE\u6539\u4E86\u5F53\u524D\u5E74\u4EFD
const dog1 = Object.create(dog); // \u901A\u8FC7ES5\u8BED\u6CD5\u8FDB\u884C\u521B\u5EFA
//const dog1 = {}
//Object.setPrototypeOf(dog1, dog);//\u901A\u8FC7ES6\u8BED\u6CD5\u8FDB\u884C\u521B\u5EFA
console.log(dog.getDiscription()); // \u72D7\u72D7\u53EBlili,\u6027\u522B\u7537,2020\u5E745\u5C81\u4E86`,lang:"js"}),e.a.createElement("h2",{id:"ts-\u5B9E\u73B0"},e.a.createElement(t.AnchorLink,{to:"#ts-\u5B9E\u73B0","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"ts \u5B9E\u73B0"),e.a.createElement(o.a,{code:`interface Prototype {
  clone(): Prototype;
}

class Dog implements Prototype {
  public name: string;
  public birthYear: number;
  public sex: string;
  public presentYear: number;
  constructor() {
    this.name = 'lili';
    this.birthYear = 2015;
    this.sex = '\u7537';
    this.presentYear = 2018;
  }

  public getDiscription(): string {
    return \`\u72D7\u72D7\u53EB\${this.name},\u6027\u522B\${this.sex},\${this.presentYear}\u5E74\${this
      .presentYear - this.birthYear}\u5C81\u4E86\`;
  }

  // \u5B9E\u73B0\u590D\u5236
  public clone(): Prototype {
    return Object.create(this);
  }
}

// \u4F7F\u7528
const dog = new Dog();
console.log(dog.getDiscription());
dog.presentYear = 2020;
const dog1 = Object.create(dog);
console.log(dog1.getDiscription());`,lang:"typescript"}),e.a.createElement("h2",{id:"\u53C2\u8003\u94FE\u63A5"},e.a.createElement(t.AnchorLink,{to:"#\u53C2\u8003\u94FE\u63A5","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u53C2\u8003\u94FE\u63A5"),e.a.createElement("ul",null,e.a.createElement("li",null,e.a.createElement(t.Link,{to:"https://segmentfault.com/a/1190000012427846"},"https://segmentfault.com/a/1190000012427846")),e.a.createElement("li",null,e.a.createElement(t.Link,{to:"https://www.runoob.com/design-pattern/prototype-pattern.html"},"https://www.runoob.com/design-pattern/prototype-pattern.html")),e.a.createElement("li",null,e.a.createElement(t.Link,{to:"https://wiki.jikexueyuan.com/project/java-design-pattern/prototype-pattern.html"},"https://wiki.jikexueyuan.com/project/java-design-pattern/prototype-pattern.html")),e.a.createElement("li",null,e.a.createElement(t.Link,{to:"https://www.freesion.com/article/3892642227/"},"https://www.freesion.com/article/3892642227/"))))));l.default=n=>{const i=e.a.useContext(t.context),s=i.demos;return e.a.useEffect(()=>{var a;n!=null&&(a=n.location)!==null&&a!==void 0&&a.hash&&t.AnchorLink.scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))},[]),e.a.createElement(c,{demos:s})}}}]);
