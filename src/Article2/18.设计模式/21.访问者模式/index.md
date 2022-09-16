---
order: 3
nav:
  title: Article2
  path: /article2
---

## 访问者模式

- 定义在不改变该对象的前提下访问结构中元素的新方法，元素的执行算法可以随着访问者改变而改变
- 如果一个系统有比较稳定的数据结构，又有经常变化的功能需求，那么访问者模式就是比较合适的

## 代码实现

```typescript
// 以动物园模拟为例，我们有几种不同种类的动物，它们能够发出不同的声音。

class Monkey {
  shout() {
    console.log('Ooh oo aa aa!');
  }

  accept(operation: any) {
    operation.visitMonkey(this);
  }
}

class Lion {
  roar() {
    console.log('Roaaar!');
  }

  accept(operation: any) {
    operation.visitLion(this);
  }
}

const speak = {
  visitMonkey(monkey: any) {
    monkey.shout();
  },
  visitLion(lion: any) {
    lion.roar();
  },
};

const jump = {
  visitMonkey(monkey: any) {
    console.log('Jumped 20 feet high! on to the tree!');
  },
  visitLion(lion: any) {
    console.log('Jumped 7 feet! Back on the ground!');
  },
  visitDolphin(dolphin: any) {
    console.log('Walked on water a little and disappeared');
  },
};
const monkey = new Monkey();
const lion = new Lion();

monkey.accept(speak);
monkey.accept(jump);
lion.accept(speak);
lion.accept(jump);
```

## 参考链接

- https://www.runoob.com/design-pattern/visitor-pattern.html
- https://github.com/sohamkamani/javascript-design-patterns-for-humans#-visitor
- https://www.bookstack.cn/read/design-pattern-in-javascript/design-pattern-visitor-pattern-README.md
