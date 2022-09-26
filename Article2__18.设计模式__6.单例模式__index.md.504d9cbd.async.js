(self.webpackChunkmy_demo_markdown=self.webpackChunkmy_demo_markdown||[]).push([[1871],{62655:function(s,l,n){"use strict";n.r(l);var E=n(12924),e=n.n(E),u=n(16924),c=n(53401);const i=e().memo(({demos:t})=>e().createElement(e().Fragment,null,e().createElement("div",{className:"markdown"},e().createElement("h2",{id:"\u5355\u4F8B\u6A21\u5F0F"},e().createElement(u.AnchorLink,{to:"#\u5355\u4F8B\u6A21\u5F0F","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u5355\u4F8B\u6A21\u5F0F"),e().createElement("ul",null,e().createElement("li",null,"\u5355\u4F8B\u6A21\u5F0F\u5C31\u662F\u4FDD\u8BC1\u4E00\u4E2A\u7C7B\u4EC5\u6709\u4E00\u4E2A\u5B9E\u4F8B\uFF0C\u5E76\u63D0\u4F9B\u4E00\u4E2A\u8BBF\u95EE\u5B83\u7684\u5168\u5C40\u8BBF\u95EE\u70B9\uFF08\u9759\u6001\u65B9\u6CD5\uFF09\u3002")),e().createElement("h2",{id:"\u4EE3\u7801\u5B9E\u73B0"},e().createElement(u.AnchorLink,{to:"#\u4EE3\u7801\u5B9E\u73B0","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u4EE3\u7801\u5B9E\u73B0"),e().createElement("h3",{id:"\u997F\u6C49\u5F0F"},e().createElement(u.AnchorLink,{to:"#\u997F\u6C49\u5F0F","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u997F\u6C49\u5F0F"),e().createElement(c.Z,{code:`class Singleton1 {
  // 1. \u6784\u9020\u5668\u79C1\u6709\u5316\uFF0C\u5916\u90E8\u4E0D\u80FDnew
  private constructor() {}
  // 2. \u672C\u7C7B\u5185\u90E8\u521B\u5EFA\u5BF9\u8C61\u5B9E\u4F8B\u5316
  private static instance: Singleton1 = new Singleton1();
  // 3. \u63D0\u4F9B\u4E00\u4E2A\u516C\u6709\u7684\u9759\u6001\u65B9\u6CD5\uFF0C\u8FD4\u56DE\u5B9E\u4F8B\u5BF9\u8C61
  public static getInstance(): Singleton1 {
    return this.instance;
  }
}`,lang:"typescript"}),e().createElement("h3",{id:"\u61D2\u6C49\u5F0F\u7EBF\u7A0B\u4E0D\u5B89\u5168"},e().createElement(u.AnchorLink,{to:"#\u61D2\u6C49\u5F0F\u7EBF\u7A0B\u4E0D\u5B89\u5168","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u61D2\u6C49\u5F0F\uFF08\u7EBF\u7A0B\u4E0D\u5B89\u5168\uFF09"),e().createElement("ul",null,e().createElement("li",null,e().createElement("code",null,"js"),"\u662F\u57FA\u4E8E\u5355\u7EBF\u7A0B\u8FD0\u884C\u4EE3\u7801\uFF0C\u6240\u4EE5\u4E0D\u5B58\u5728\u7EBF\u7A0B\u4E0D\u5B89\u5168\u95EE\u9898\uFF0C\u63A8\u8350\u8BE5\u79CD\u65B9\u6CD5\u3002")),e().createElement(c.Z,{code:`class Singleton2 {
  private constructor() {}
  private static instance: Singleton2 = null;
  public static getInstance(): Singleton2 {
    if (this.instance === null) {
      this.instance = new Singleton2();
    }
    return this.instance;
  }
}`,lang:"typescript"}),e().createElement("h2",{id:"\u53C2\u8003\u94FE\u63A5"},e().createElement(u.AnchorLink,{to:"#\u53C2\u8003\u94FE\u63A5","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u53C2\u8003\u94FE\u63A5"),e().createElement("ul",null,e().createElement("li",null,e().createElement(u.Link,{to:"https://blog.csdn.net/qq_34106891/article/details/105654640?spm=1001.2014.3001.5502"},"https://blog.csdn.net/qq_34106891/article/details/105654640?spm=1001.2014.3001.5502"))))));l.default=t=>{const o=e().useContext(u.context),r=o.demos;return e().useEffect(()=>{var a;t!=null&&(a=t.location)!==null&&a!==void 0&&a.hash&&u.AnchorLink.scrollToAnchor(decodeURIComponent(t.location.hash.slice(1)))},[]),e().createElement(i,{demos:r})}}}]);
