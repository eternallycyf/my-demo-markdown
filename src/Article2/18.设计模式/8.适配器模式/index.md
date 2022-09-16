---
order: 3
nav:
  title: Article2
  path: /article2
---

## 适配器模式

- 适配器模式（变压器模式、包装模式）是将一个类的接口变换为客户端所期待的另一种接口，从而使原本因接口不匹配而无法在一起工作的两个类能够在一起工作。
- 适配器模式主要分为三类：类适配器模式、对象适配器模式、接口适配器模式。这三种明明方式是根据被适配者`（src）`是以怎样的形式给到`Adapter`来命名的。
  - 类适配器：以类给到，在`Adapter`里，就是将`src`当做类，继承。（通过继承来实现适配器功能）
  - 对象适配器：以对象给到，在`Adapter`里，将`src`作为一个对象，持有。（通过组合来实现适配器功能）
  - 接口适配器：以接口给到，在`Adapter`里，将`src`作为一个接口，实现。

## 代码实现

### 类适配器

```typescript
// 目标对象
interface Target {
  request(): void;
}
// 被适配者
class Adaptee {
  constructor() {}
  // 这是源角色，有自己的的业务逻辑
  public specificRequest(): void {}
}
// 适配器
class Adapter extends Adaptee implements Target {
  constructor() {
    super();
  }
  public request(): void {
    super.specificRequest();
  }
}
const target: Target = new Adapter();
target.request();
```

### 对象适配器

```typescript
// 目标对象
interface Target {
  request(): void;
}
// 被适配者
class Adaptee {
  constructor() {}
  // 这是源角色，有自己的的业务逻辑
  public specificRequest(): void {}
}
// 适配器
class Adapter implements Target {
  private adaptee: Adaptee;
  constructor(adaptee: Adaptee) {
    this.adaptee = adaptee;
  }
  public request(): void {
    this.adaptee.specificRequest();
  }
}
// 使用
const target: Target = new Adapter(new Adaptee());
target.request();
```

### 接口适配器

```typescript
interface Adaptee {
  operation1(): void;
  operation2(): void;
}
abstract class AbsAdapter implements Adaptee {
  public operation1(): void {}
  public operation2(): void {}
}
class UseClass extends AbsAdapter {
  public operation1(): void {} // 重写该类
}
```

## 参考链接

- https://segmentfault.com/a/1190000012436538
- https://www.runoob.com/design-pattern/adapter-pattern.html
- https://design-patterns.readthedocs.io/zh_CN/latest/structural_patterns/adapter.html
