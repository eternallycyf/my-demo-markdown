---
order: 18s
nav:
  title: 前端之路
  path: /guide
---

## 单例模式

- 单例模式就是保证一个类仅有一个实例，并提供一个访问它的全局访问点（静态方法）。

## 代码实现

### 饿汉式

```typescript
class Singleton1 {
  // 1. 构造器私有化，外部不能new
  private constructor() {}
  // 2. 本类内部创建对象实例化
  private static instance: Singleton1 = new Singleton1();
  // 3. 提供一个公有的静态方法，返回实例对象
  public static getInstance(): Singleton1 {
    return this.instance;
  }
}
```

### 懒汉式（线程不安全）

- `js`是基于单线程运行代码，所以不存在线程不安全问题，推荐该种方法。

```typescript
class Singleton2 {
  private constructor() {}
  private static instance: Singleton2 = null;
  public static getInstance(): Singleton2 {
    if (this.instance === null) {
      this.instance = new Singleton2();
    }
    return this.instance;
  }
}
```

## 参考链接

- https://blog.csdn.net/qq_34106891/article/details/105654640?spm=1001.2014.3001.5502
