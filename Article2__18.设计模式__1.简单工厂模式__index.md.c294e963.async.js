(self.webpackChunkmy_demo_markdown=self.webpackChunkmy_demo_markdown||[]).push([[1284],{86406:function(m,l,t){"use strict";t.r(l);var o=t(12924),e=t.n(o),n=t(16924),s=t(53401);const c=e().memo(({demos:a})=>e().createElement(e().Fragment,null,e().createElement("div",{className:"markdown"},e().createElement("h2",{id:"\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F"},e().createElement(n.AnchorLink,{to:"#\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F"),e().createElement("ul",null,e().createElement("li",null,"\u5B9A\u4E49\u4E00\u4E2A\u521B\u5EFA\u5BF9\u8C61\u7684\u7C7B\uFF0C\u7531\u8FD9\u4E2A\u7C7B\u6765\u5C01\u88C5\u5B9E\u4F8B\u5316\u5BF9\u8C61\u7684\u884C\u4E3A")),e().createElement("h2",{id:"\u5B9E\u73B0"},e().createElement(n.AnchorLink,{to:"#\u5B9E\u73B0","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u5B9E\u73B0"),e().createElement(s.Z,{code:`class Database {
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
ConnectMongoDB.getDetails();`,lang:"js"}),e().createElement("h2",{id:"\u53C2\u8003\u94FE\u63A5"},e().createElement(n.AnchorLink,{to:"#\u53C2\u8003\u94FE\u63A5","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u53C2\u8003\u94FE\u63A5"),e().createElement("ul",null,e().createElement("li",null,e().createElement(n.Link,{to:"https://juejin.im/post/6844903653774458888"},"https://juejin.im/post/6844903653774458888")),e().createElement("li",null,e().createElement(n.Link,{to:"https://www.runoob.com/design-pattern/factory-pattern.html"},"https://www.runoob.com/design-pattern/factory-pattern.html")),e().createElement("li",null,e().createElement(n.Link,{to:"https://design-patterns.readthedocs.io/zh_CN/latest/creational_patterns/simple_factory.html"},"https://design-patterns.readthedocs.io/zh_CN/latest/creational_patterns/simple_factory.html"))))));l.default=a=>{const r=e().useContext(n.context),i=r.demos;return e().useEffect(()=>{var u;a!=null&&(u=a.location)!==null&&u!==void 0&&u.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(a.location.hash.slice(1)))},[]),e().createElement(c,{demos:i})}}}]);
