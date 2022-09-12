---
order: 18s
nav:
  title: 前端之路
  path: /guide
---

## 模板方法模式

- 定义一个操作中的算法框架，将一些步骤延迟到子类中，使得子类可以不改变一个算法的结构即可重定义该算法的某些特定步骤

## 代码实现

```typescript
abstract class AbstractClass {
  constructor() {}

  // 模板方法
  public template(): void {
    this.operation1();
    this.hookMethod() && this.operation2();
    this.operation3();
  }

  // 基本方法
  protected operation1(): void {
    console.log('使用了方法operation1');
  }

  protected operation2(): void {
    console.log('使用了方法operation2');
  }

  protected operation3(): void {
    console.log('使用了方法operation3');
  }

  // 钩子方法
  protected hookMethod(): boolean {
    return true;
  }
}

class ConcreteClassA extends AbstractClass {
  protected operation2(): void {
    console.log('对该方法operation2进行了修改再使用');
  }

  protected operation3(): void {
    console.log('对该方法operation3进行了修改再使用');
  }
}

class ConcreteClassB extends AbstractClass {
  // 覆盖钩子方法
  protected hookMethod(): boolean {
    return false;
  }
}

function main() {
  const class1: AbstractClass = new ConcreteClassA();
  const class2: AbstractClass = new ConcreteClassB();

  class1.template();
  class2.template();
}

main();
```

## 参考链接

- https://juejin.im/post/6844903615476269064
- https://www.runoob.com/design-pattern/template-pattern.html
- https://github.com/sohamkamani/javascript-design-patterns-for-humans#-template-method
