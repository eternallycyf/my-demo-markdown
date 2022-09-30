(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{G1Mb:function(r,i,t){"use strict";t.r(i);var o=t("cDcd"),n=t.n(o),e=t("dEAq"),m=t.n(e),s=t("H1Ra");const l=n.a.memo(({demos:u})=>n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"\u89E3\u91CA\u5668\u6A21\u5F0F"},n.a.createElement(e.AnchorLink,{to:"#\u89E3\u91CA\u5668\u6A21\u5F0F","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u89E3\u91CA\u5668\u6A21\u5F0F"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u89E3\u91CA\u5668\u6A21\u5F0F",n.a.createElement("code",null,"Interpreter Pattern"),"\u63D0\u4F9B\u4E86\u8BC4\u4F30\u8BED\u8A00\u7684\u8BED\u6CD5\u6216\u8868\u8FBE\u5F0F\u7684\u65B9\u5F0F\uFF0C\u5B83\u5C5E\u4E8E\u884C\u4E3A\u578B\u6A21\u5F0F\uFF0C\u8FD9\u79CD\u6A21\u5F0F\u5B9E\u73B0\u4E86\u4E00\u4E2A\u8868\u8FBE\u5F0F\u63A5\u53E3\uFF0C\u8BE5\u63A5\u53E3\u89E3\u91CA\u4E00\u4E2A\u7279\u5B9A\u7684\u4E0A\u4E0B\u6587\uFF0C\u89E3\u91CA\u5668\u6A21\u5F0F\u901A\u5E38\u88AB\u7528\u5728 SQL \u89E3\u6790\u3001\u7B26\u53F7\u5904\u7406\u5F15\u64CE\u7B49\u3002")),n.a.createElement("h2",{id:"\u4EE3\u7801\u5B9E\u73B0"},n.a.createElement(e.AnchorLink,{to:"#\u4EE3\u7801\u5B9E\u73B0","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4EE3\u7801\u5B9E\u73B0"),n.a.createElement(s.a,{code:`function Context() {
  var sum = 0;
  var list = [];
  this.getSum = function() {
    return sum;
  };
  this.setSum = function(_sum) {
    sum = _sum;
  };
  this.add = function(eps) {
    list.push(eps);
  };
  this.getList = function() {
    return list;
  };
}

function PlusExpression() {
  this.interpret = function(context) {
    var sum = context.getSum();
    sum++;
    context.setSum(sum);
  };
}

function MinusExpression() {
  this.interpret = function(context) {
    var sum = context.getSum();
    sum--;
    context.setSum(sum);
  };
}

(function() {
  var context = new Context();
  context.setSum(20);
  //\u8FD0\u884C\u52A0\u6CD5\u4E09\u6B21
  context.add(new PlusExpression());
  context.add(new PlusExpression());
  context.add(new PlusExpression());
  //\u8FD0\u884C\u51CF\u6CD5\u4E24\u6B21
  context.add(new MinusExpression());
  context.add(new MinusExpression());
  var list = context.getList();
  for (var i = 0; i < list.length; i++) {
    let expression = list[i];
    expression.interpret(context);
  }
  console.log(context.getSum()); // 21
})();`,lang:"js"}),n.a.createElement("h2",{id:"\u53C2\u8003\u94FE\u63A5"},n.a.createElement(e.AnchorLink,{to:"#\u53C2\u8003\u94FE\u63A5","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u53C2\u8003\u94FE\u63A5"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(e.Link,{to:"http://c.biancheng.net/view/1402.html"},"http://c.biancheng.net/view/1402.html")),n.a.createElement("li",null,n.a.createElement(e.Link,{to:"https://blog.csdn.net/itpinpai/article/details/51657199"},"https://blog.csdn.net/itpinpai/article/details/51657199")),n.a.createElement("li",null,n.a.createElement(e.Link,{to:"https://www.runoob.com/design-pattern/interpreter-pattern.html"},"https://www.runoob.com/design-pattern/interpreter-pattern.html"))))));i.default=u=>{const c=n.a.useContext(e.context),E=c.demos;return n.a.useEffect(()=>{var a;u!=null&&(a=u.location)!==null&&a!==void 0&&a.hash&&e.AnchorLink.scrollToAnchor(decodeURIComponent(u.location.hash.slice(1)))},[]),n.a.createElement(l,{demos:E})}}}]);
