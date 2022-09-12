---
order: 18s
nav:
  title: 前端之路
  path: /guide
---

## 解释器模式

- 解释器模式`Interpreter Pattern`提供了评估语言的语法或表达式的方式，它属于行为型模式，这种模式实现了一个表达式接口，该接口解释一个特定的上下文，解释器模式通常被用在 SQL 解析、符号处理引擎等。

## 代码实现

```js
function Context() {
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
  //运行加法三次
  context.add(new PlusExpression());
  context.add(new PlusExpression());
  context.add(new PlusExpression());
  //运行减法两次
  context.add(new MinusExpression());
  context.add(new MinusExpression());
  var list = context.getList();
  for (var i = 0; i < list.length; i++) {
    let expression = list[i];
    expression.interpret(context);
  }
  console.log(context.getSum()); // 21
})();
```

## 参考链接

- http://c.biancheng.net/view/1402.html
- https://blog.csdn.net/itpinpai/article/details/51657199
- https://www.runoob.com/design-pattern/interpreter-pattern.html
