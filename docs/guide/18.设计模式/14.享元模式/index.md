---
order: 18s
nav:
  title: 前端之路
  path: /guide
---

## 享元模式

- 避免重新创建对象，其实只要有缓存对象的意思，并且共用一个对象实例，就是享元模式

## 代码实现

```typescript
class Car {
  name!: string;
  color!: string;
  changeColor(color: string) {
    this.color = color;
  }
  changeName(name: string) {
    this.name = name;
  }
}
class CarFactory {
  static car: Car;
  static getCar(): Car {
    if (CarFactory.car === null) {
      CarFactory.car = new Car();
    }
    return CarFactory.car;
  }
}
CarFactory.getCar().changeColor('red');
```

## 参考链接

- https://www.runoob.com/design-pattern/flyweight-pattern.html
- https://github.com/sohamkamani/javascript-design-patterns-for-humans#-flyweight
- https://design-patterns.readthedocs.io/zh_CN/latest/structural_patterns/flyweight.html
