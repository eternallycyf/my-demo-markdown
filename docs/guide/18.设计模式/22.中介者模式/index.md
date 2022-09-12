---
order: 18s
nav:
  title: 前端之路
  path: /guide
---

## 中介者模式

- 全权负责两个模块之间的通讯，MVC，MVVM 就是典型的中介模式
- 中介模式，桥接模式，代理模式的区别：
  - 代理模式一对一，只能代理特定类和对像，是对其的扩展或约束
  - 桥接模式一对多，是对类或对象成员或属性的扩展
  - 中介模式多对多，全权承包所有两个概念间的关系

## 代码实现

```typescript
class Car {
  name: string = 'Benz';
}
class Buyer {
  name: string = 'Sam';
  buy(car: Car) {
    console.log(`${this.name}购买了${car.name}`);
  }
}
class FourSShop {
  constructor() {
    const benz = new Car();
    const sam = new Buyer();
    sam.buy(benz);
  }
}
```

## 参考链接

- https://www.runoob.com/design-pattern/mediator-pattern.html
- https://github.com/sohamkamani/javascript-design-patterns-for-humans#-mediator
- https://design-patterns.readthedocs.io/zh_CN/latest/behavioral_patterns/mediator.html
