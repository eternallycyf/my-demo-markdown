(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{pqU3:function(E,u,t){"use strict";t.r(u);var l=t("cDcd"),e=t.n(l),n=t("dEAq"),m=t.n(n),s=t("6T1g");const c=e.a.memo(({demos:a})=>e.a.createElement(e.a.Fragment,null,e.a.createElement("div",{className:"markdown"},e.a.createElement("h2",{id:"\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F"},e.a.createElement(n.AnchorLink,{to:"#\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u5B9A\u4E49\u4E00\u4E2A\u521B\u5EFA\u5BF9\u8C61\u7684\u7C7B\uFF0C\u7531\u8FD9\u4E2A\u7C7B\u6765\u5C01\u88C5\u5B9E\u4F8B\u5316\u5BF9\u8C61\u7684\u884C\u4E3A")),e.a.createElement("h2",{id:"\u5B9E\u73B0"},e.a.createElement(n.AnchorLink,{to:"#\u5B9E\u73B0","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5B9E\u73B0"),e.a.createElement(s.a,{code:`class Database {
  getDetails() {
    console.log(this.name);
  }
}

class Sql extends Database {
  constructor() {
    super();
    this.name = 'Sql';
  }
}

class Mysql extends Database {
  constructor() {
    super();
    this.name = 'Mysql';
  }
}

class MongoDB extends Database {
  constructor() {
    super();
    this.name = 'MongoDB';
  }
}

class ConnectDatabase {
  getType(type) {
    switch (type) {
      case 'Sql':
        return new Sql();
      case 'Mysql':
        return new Mysql();
      case 'MongoDB':
        return new MongoDB();
      default:
        throw new Error('\u53C2\u6570\u9519\u8BEF');
    }
  }
}

var ConnectFn = new ConnectDatabase();

var ConnectSql = ConnectFn.getType('Sql');
ConnectSql.getDetails();

var ConnectMysql = ConnectFn.getType('Mysql');
ConnectMysql.getDetails();

var ConnectMongoDB = ConnectFn.getType('MongoDB');
ConnectMongoDB.getDetails();`,lang:"js"}),e.a.createElement("h2",{id:"\u53C2\u8003\u94FE\u63A5"},e.a.createElement(n.AnchorLink,{to:"#\u53C2\u8003\u94FE\u63A5","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u53C2\u8003\u94FE\u63A5"),e.a.createElement("ul",null,e.a.createElement("li",null,e.a.createElement(n.Link,{to:"https://juejin.im/post/6844903653774458888"},"https://juejin.im/post/6844903653774458888")),e.a.createElement("li",null,e.a.createElement(n.Link,{to:"https://www.runoob.com/design-pattern/factory-pattern.html"},"https://www.runoob.com/design-pattern/factory-pattern.html")),e.a.createElement("li",null,e.a.createElement(n.Link,{to:"https://design-patterns.readthedocs.io/zh_CN/latest/creational_patterns/simple_factory.html"},"https://design-patterns.readthedocs.io/zh_CN/latest/creational_patterns/simple_factory.html"))))));u.default=a=>{const r=e.a.useContext(n.context),i=r.demos;return e.a.useEffect(()=>{var o;a!=null&&(o=a.location)!==null&&o!==void 0&&o.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(a.location.hash.slice(1)))},[]),e.a.createElement(c,{demos:i})}}}]);
