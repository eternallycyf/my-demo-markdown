(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{BHGk:function(m,u,n){"use strict";n.r(u);var l=n("cDcd"),e=n.n(l),t=n("dEAq"),d=n.n(t),r=n("H1Ra");const o=e.a.memo(({demos:a})=>e.a.createElement(e.a.Fragment,null,e.a.createElement("div",{className:"markdown"},e.a.createElement("h2",{id:"\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F"},e.a.createElement(t.AnchorLink,{to:"#\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\u63D0\u4F9B\u4E00\u4E2A\u521B\u5EFA\u4E00\u7CFB\u5217\u76F8\u5173\u6216\u76F8\u4E92\u4F9D\u8D56\u5BF9\u8C61\u7684\u63A5\u53E3 \u800C\u65E0\u987B\u6307\u5B9A\u5B83\u4EEC\u5177\u4F53\u7684\u7C7B")),e.a.createElement("h2",{id:"\u5B9E\u73B0"},e.a.createElement(t.AnchorLink,{to:"#\u5B9E\u73B0","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5B9E\u73B0"),e.a.createElement(r.a,{code:`abstract class Database {
  constructor(
    public username: string = 'admin',
    public password: string = '123456',
  ) {
    this.username = username;
    this.password = password;
  }
  public abstract getDetails(): void;
  public setDetails(username: string, password: string) {
    console.log(username, password);
    // \u7136\u540E\u6839\u636E\u4E0D\u540C\u6570\u636E\u5E93\u6267\u884C\u4E0D\u540C\u7684\u521D\u59CB\u7528\u6237\u903B\u8F91
  }
}

class Sql extends Database {
  constructor(username: string, password: string) {
    super(username, password);
  }
  public getDetails() {
    const sqlUserName = this.username + 'Sql';
    const sqlPassWord = this.password + 'Sql';
    this.setDetails(sqlUserName, sqlPassWord);
  }
}

class Mysql extends Database {
  constructor(username: string, password: string) {
    super(username, password);
  }
  public getDetails() {
    const mysqlUserName = this.username + 'Mysql';
    const mysqlPassWord = this.password + 'Mysql';
    this.setDetails(mysqlUserName, mysqlPassWord);
  }
}

const ConnectSql = new Sql('aaa', 'bbb');
ConnectSql.getDetails();

const ConnectMysql = new Mysql('cccc', 'ddd');
ConnectMysql.getDetails();`,lang:"typescript"}),e.a.createElement("h2",{id:"\u53C2\u8003\u94FE\u63A5"},e.a.createElement(t.AnchorLink,{to:"#\u53C2\u8003\u94FE\u63A5","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u53C2\u8003\u94FE\u63A5"),e.a.createElement("ul",null,e.a.createElement("li",null,e.a.createElement(t.Link,{to:"https://juejin.im/post/6844903653774458888"},"https://juejin.im/post/6844903653774458888")),e.a.createElement("li",null,e.a.createElement(t.Link,{to:"https://www.runoob.com/design-pattern/factory-pattern.html"},"https://www.runoob.com/design-pattern/factory-pattern.html")),e.a.createElement("li",null,e.a.createElement(t.Link,{to:"https://design-patterns.readthedocs.io/zh_CN/latest/creational_patterns/simple_factory.html"},"https://design-patterns.readthedocs.io/zh_CN/latest/creational_patterns/simple_factory.html"))))));u.default=a=>{const c=e.a.useContext(t.context),i=c.demos;return e.a.useEffect(()=>{var s;a!=null&&(s=a.location)!==null&&s!==void 0&&s.hash&&t.AnchorLink.scrollToAnchor(decodeURIComponent(a.location.hash.slice(1)))},[]),e.a.createElement(o,{demos:i})}}}]);
