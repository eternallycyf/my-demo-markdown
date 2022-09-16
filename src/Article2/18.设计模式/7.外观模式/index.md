---
order: 3
nav:
  title: Article2
  path: /article2
---

## 外观模式

- 外观模式通过定义一个一致的接口，用以屏蔽内部子系统的细节
- 使得调用端只需跟这个接口发生调用，而无需关心这个子系统的内部细节

## 代码实现

```typescript
class Family {
  static main(): void {
    const father = new Father();
    const child = new Father();
    father.work();
    child.study();
  }
}
class Father {
  work() {}
}
class Child {
  study() {}
}
```

## 参考链接

- https://segmentfault.com/a/1190000014132789
- https://www.runoob.com/design-pattern/facade-pattern.html
- https://design-patterns.readthedocs.io/zh_CN/latest/structural_patterns/facade.html
