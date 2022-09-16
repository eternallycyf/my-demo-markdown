---
order: 3
nav:
  title: Article2
  path: /article2
---

## 桥接模式

- 桥接模式也叫桥梁模式，将实现与抽象放在两个不同的层次中，使得两者可以独立地变化。(最主要的将实现和抽象两个层次划分开来)
- 常见场景：JDBC 驱动程序、银行转账系统（转账分类和转账用户类型）、消息管理（消息类型、消息分类）

## 代码实现

```typescript
// 实现接口角色
interface Implementor {
  doSomething(): void;
  doAnything(): void;
}

// 具体实现角色
class ConcreteImplementor1 implements Implementor {
  public doSomething(): void {}
  public doAnything(): void {}
}
class ConcreteImplementor2 implements Implementor {
  public doSomething(): void {}
  public doAnything(): void {}
}

// 抽象类
abstract class Abstraction {
  private imp: Implementor;
  constructor(imp: Implementor) {
    this.imp = imp;
  }

  // 自身的行为和属性
  public request(): void {
    this.imp.doSomething();
  }
}
// 具体抽象化角色
class RefinedAbstraction extends Abstraction {
  constructor(imp: Implementor) {
    super(imp);
  }

  public request(): void {
    // 自己写一些处理业务
    super.request();
  }
}

// 调用
// 定义一个实现化角色
const imp: Implementor = new ConcreteImplementor1();
// 定义一个抽象化角色
const abs: Abstraction = new RefinedAbstraction(imp);
// 执行上下文
abs.request();
```

## 参考链接

- https://segmentfault.com/a/1190000012547750
- https://www.runoob.com/design-pattern/bridge-pattern.html
- https://design-patterns.readthedocs.io/zh_CN/latest/structural_patterns/bridge.html
