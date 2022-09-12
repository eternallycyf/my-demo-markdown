---
order: 18s
nav:
  title: 前端之路
  path: /guide
---

## 代理模式

- 代理模式是为一个对象提供一个代用品，或占位符，以便控制对它的访问。
- 对接口进行一定程度的隐藏，用于封装复杂类
- 缓存代理比较常见。如果传递进来的参数跟以前一致，则可以直接返回前面存储的运算结果。

## 代码实现

```typescript
class Car {
  a: number = 1;
  b: number = 2;
  c: number = 3;
  d: number = 4;
  name: string = 'name';
  test() {
    console.log('this is test');
  }
}
class CarProxy {
  private car: Car;
  name: number;
  constructor() {
    if (this.car === null) {
      this.car = new Car();
    }
    this.name = this.car.name;
  }
  test() {
    this.car.test();
  }
}
```

## 参考链接

- https://juejin.im/post/6844903555036364814
- https://www.runoob.com/design-pattern/proxy-pattern.html
- https://design-patterns.readthedocs.io/zh_CN/latest/creational_patterns/singleton.html
