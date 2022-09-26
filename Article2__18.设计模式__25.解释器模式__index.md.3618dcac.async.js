(self.webpackChunkmy_demo_markdown=self.webpackChunkmy_demo_markdown||[]).push([[8866],{46394:function(E,s,t){"use strict";t.r(s);var o=t(12924),n=t.n(o),e=t(16924),l=t(53401);const c=n().memo(({demos:u})=>n().createElement(n().Fragment,null,n().createElement("div",{className:"markdown"},n().createElement("h2",{id:"\u89E3\u91CA\u5668\u6A21\u5F0F"},n().createElement(e.AnchorLink,{to:"#\u89E3\u91CA\u5668\u6A21\u5F0F","aria-hidden":"true",tabIndex:-1},n().createElement("span",{className:"icon icon-link"})),"\u89E3\u91CA\u5668\u6A21\u5F0F"),n().createElement("ul",null,n().createElement("li",null,"\u89E3\u91CA\u5668\u6A21\u5F0F",n().createElement("code",null,"Interpreter Pattern"),"\u63D0\u4F9B\u4E86\u8BC4\u4F30\u8BED\u8A00\u7684\u8BED\u6CD5\u6216\u8868\u8FBE\u5F0F\u7684\u65B9\u5F0F\uFF0C\u5B83\u5C5E\u4E8E\u884C\u4E3A\u578B\u6A21\u5F0F\uFF0C\u8FD9\u79CD\u6A21\u5F0F\u5B9E\u73B0\u4E86\u4E00\u4E2A\u8868\u8FBE\u5F0F\u63A5\u53E3\uFF0C\u8BE5\u63A5\u53E3\u89E3\u91CA\u4E00\u4E2A\u7279\u5B9A\u7684\u4E0A\u4E0B\u6587\uFF0C\u89E3\u91CA\u5668\u6A21\u5F0F\u901A\u5E38\u88AB\u7528\u5728 SQL \u89E3\u6790\u3001\u7B26\u53F7\u5904\u7406\u5F15\u64CE\u7B49\u3002")),n().createElement("h2",{id:"\u4EE3\u7801\u5B9E\u73B0"},n().createElement(e.AnchorLink,{to:"#\u4EE3\u7801\u5B9E\u73B0","aria-hidden":"true",tabIndex:-1},n().createElement("span",{className:"icon icon-link"})),"\u4EE3\u7801\u5B9E\u73B0"),n().createElement(l.Z,{code:`function Context() {
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
})();`,lang:"js"}),n().createElement("h2",{id:"\u53C2\u8003\u94FE\u63A5"},n().createElement(e.AnchorLink,{to:"#\u53C2\u8003\u94FE\u63A5","aria-hidden":"true",tabIndex:-1},n().createElement("span",{className:"icon icon-link"})),"\u53C2\u8003\u94FE\u63A5"),n().createElement("ul",null,n().createElement("li",null,n().createElement(e.Link,{to:"http://c.biancheng.net/view/1402.html"},"http://c.biancheng.net/view/1402.html")),n().createElement("li",null,n().createElement(e.Link,{to:"https://blog.csdn.net/itpinpai/article/details/51657199"},"https://blog.csdn.net/itpinpai/article/details/51657199")),n().createElement("li",null,n().createElement(e.Link,{to:"https://www.runoob.com/design-pattern/interpreter-pattern.html"},"https://www.runoob.com/design-pattern/interpreter-pattern.html"))))));s.default=u=>{const a=n().useContext(e.context),r=a.demos;return n().useEffect(()=>{var i;u!=null&&(i=u.location)!==null&&i!==void 0&&i.hash&&e.AnchorLink.scrollToAnchor(decodeURIComponent(u.location.hash.slice(1)))},[]),n().createElement(c,{demos:r})}}}]);
