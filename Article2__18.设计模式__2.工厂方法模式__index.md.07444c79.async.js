(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{ztOi:function(i,l,n){"use strict";n.r(l);var o=n("cDcd"),e=n.n(o),t=n("dEAq"),m=n.n(t),s=n("H1Ra");const c=e.a.memo(({demos:a})=>e.a.createElement(e.a.Fragment,null,e.a.createElement("div",{className:"markdown"},e.a.createElement("h2",{id:"\u5DE5\u5382\u65B9\u6CD5\u6A21\u5F0F"},e.a.createElement(t.AnchorLink,{to:"#\u5DE5\u5382\u65B9\u6CD5\u6A21\u5F0F","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5DE5\u5382\u65B9\u6CD5\u6A21\u5F0F"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u5B9A\u4E49\u4E00\u4E2A\u521B\u5EFA\u5BF9\u8C61\u7684\u63A5\u53E3\uFF0C\u8BA9\u5176\u5B50\u7C7B\u81EA\u5DF1\u51B3\u5B9A\u5B9E\u4F8B\u5316\u54EA\u4E00\u4E2A\u5DE5\u5382\u7C7B\uFF0C\u5DE5\u5382\u6A21\u5F0F\u4F7F\u5176\u521B\u5EFA\u8FC7\u7A0B\u5EF6\u8FDF\u5230\u5B50\u7C7B\u8FDB\u884C\u3002"),e.a.createElement("li",null,"\u7531\u4E8E",e.a.createElement("code",null,"js"),"\u6CA1\u6709",e.a.createElement("code",null,"abstract"),"\u62BD\u8C61\u7C7B\u7684\u6982\u5FF5"),e.a.createElement("li",null,"\u56E0\u6B64\u540E\u7EED\u5173\u4E8E\u62BD\u8C61\u7C7B\u7684\u76F4\u63A5\u4F7F\u7528",e.a.createElement("code",null,"ts")," \u6A21\u62DF,\u4FBF\u4E8E\u7406\u89E3")),e.a.createElement(s.a,{code:`// ts\u4E2Dclass\u524D\u9762\u52A0abstract: \u7981\u6B62\u88AB\u5B9E\u4F8B\u5316\u3002\u662F\u7528\u6765\u88AB\u7EE7\u627F\u7684
// \u7236\u7C7B\u6307\u5B9A\u7ED3\u6784 \u5B50\u7C7B\u6765\u5B9E\u73B0 \u907F\u514D\u5FD8\u8BB0\u91CD\u5199\u65B9\u6CD5\u5BFC\u81F4\u4F7F\u7528\u9ED8\u8BA4\u7684\u65B9\u6CD5
// \u6CA1\u6709\u91CD\u5199\u76F4\u63A5\u62A5\u9519
abstract class Parent {}
// \u62BD\u8C61\u65B9\u6CD5\u53EA\u80FD\u4EE5abstract\u5F00\u5934 \u6CA1\u6709\u65B9\u6CD5\u4F53
// \u53EA\u80FD\u5B9A\u4E49\u5728\u62BD\u8C61\u7C7B\u91CC\u9762 \u5B50\u7C7B\u5FC5\u987B\u91CD\u5199
abstract class Parent {
  abstract sayHi(): void;
}`,lang:"typescript"}),e.a.createElement("h2",{id:"\u5B9E\u73B0"},e.a.createElement(t.AnchorLink,{to:"#\u5B9E\u73B0","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5B9E\u73B0"),e.a.createElement(s.a,{code:`abstract class Database {
  static username: string = 'admin';
  static password: string = '123456';
  abstract getDetails(): void;
}

class Sql extends Database {
  getDetails() {
    console.log(Sql.username + 'Sql', Sql.password + 'Sql');
  }
}

class Mysql extends Database {
  getDetails() {
    console.log(Mysql.username + 'Mysql', Mysql.password + 'Mysql');
  }
}

class MongoDB extends Database {
  getDetails() {
    console.log(MongoDB.username + 'MongoDB', MongoDB.password + 'MongoDB');
  }
}

const ConnectSql = new Sql();
ConnectSql.getDetails();

const ConnectMysql = new Mysql();
ConnectMysql.getDetails();

const ConnectMongoDB = new MongoDB();
ConnectMongoDB.getDetails();`,lang:"typescript"}),e.a.createElement("h2",{id:"\u53C2\u8003\u94FE\u63A5"},e.a.createElement(t.AnchorLink,{to:"#\u53C2\u8003\u94FE\u63A5","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u53C2\u8003\u94FE\u63A5"),e.a.createElement("ul",null,e.a.createElement("li",null,e.a.createElement(t.Link,{to:"https://juejin.im/post/6844903653774458888"},"https://juejin.im/post/6844903653774458888")),e.a.createElement("li",null,e.a.createElement(t.Link,{to:"https://www.runoob.com/design-pattern/factory-pattern.html"},"https://www.runoob.com/design-pattern/factory-pattern.html")),e.a.createElement("li",null,e.a.createElement(t.Link,{to:"https://design-patterns.readthedocs.io/zh_CN/latest/creational_patterns/simple_factory.html"},"https://design-patterns.readthedocs.io/zh_CN/latest/creational_patterns/simple_factory.html"))))));l.default=a=>{const r=e.a.useContext(t.context),E=r.demos;return e.a.useEffect(()=>{var u;a!=null&&(u=a.location)!==null&&u!==void 0&&u.hash&&t.AnchorLink.scrollToAnchor(decodeURIComponent(a.location.hash.slice(1)))},[]),e.a.createElement(c,{demos:E})}}}]);
