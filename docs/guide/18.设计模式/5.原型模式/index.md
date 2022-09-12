---
order: 18s
nav:
  title: 前端之路
  path: /guide
---

## 原型模式

- 原型模式`Prototype` `Pattern`用原型实例指向创建对象的类，使用于创建新的对象的类的共享原型的属性与方法
- 简言之就是通过克隆来创建一个一模一样的对象。
- 应用场景
  - 创建成本比较大的场景
  - 需要动态的获取当前的对象运行时状态的场景

## js 实现

- 对于`ES5`，提供`Object.create()`方法创建一个新对象，使用现有的对象来提供新创建的对象的`__proto__`
- 对于`ES6`，提供`Object.setPrototypeOf()`方法设置一个指定的对象的原型(即,内部`[[Prototype]]`属性)到另一个对象或 `null`

```js
function Dog() {
  this.name = 'lili';
  this.birthYear = 2015;
  this.sex = '男';
  this.presentYear = 2018;

  this.getDiscription = () => {
    return `狗狗叫${this.name},性别${this.sex},${this.presentYear}年${this
      .presentYear - this.birthYear}岁了`;
  };
}

const dog = new Dog();
console.log(dog.getDiscription()); // 狗狗叫lili,性别男,2018年3岁了
dog.presentYear = 2020; // 修改了当前年份
const dog1 = Object.create(dog); // 通过ES5语法进行创建
//const dog1 = {}
//Object.setPrototypeOf(dog1, dog);//通过ES6语法进行创建
console.log(dog.getDiscription()); // 狗狗叫lili,性别男,2020年5岁了
```

## ts 实现

```typescript
interface Prototype {
  clone(): Prototype;
}

class Dog implements Prototype {
  public name: string;
  public birthYear: number;
  public sex: string;
  public presentYear: number;
  constructor() {
    this.name = 'lili';
    this.birthYear = 2015;
    this.sex = '男';
    this.presentYear = 2018;
  }

  public getDiscription(): string {
    return `狗狗叫${this.name},性别${this.sex},${this.presentYear}年${this
      .presentYear - this.birthYear}岁了`;
  }

  // 实现复制
  public clone(): Prototype {
    return Object.create(this);
  }
}

// 使用
const dog = new Dog();
console.log(dog.getDiscription());
dog.presentYear = 2020;
const dog1 = Object.create(dog);
console.log(dog1.getDiscription());
```

## 参考链接

- https://segmentfault.com/a/1190000012427846
- https://www.runoob.com/design-pattern/prototype-pattern.html
- https://wiki.jikexueyuan.com/project/java-design-pattern/prototype-pattern.html
- https://www.freesion.com/article/3892642227/
