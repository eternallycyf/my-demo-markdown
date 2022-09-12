---
order: 18s
nav:
  title: 前端之路
  path: /guide
---

## 工厂方法模式

- 定义一个创建对象的接口，让其子类自己决定实例化哪一个工厂类，工厂模式使其创建过程延迟到子类进行。
- 由于`js`没有`abstract`抽象类的概念
- 因此后续关于抽象类的直接使用`ts` 模拟,便于理解

```typescript
// ts中class前面加abstract: 禁止被实例化。是用来被继承的
// 父类指定结构 子类来实现 避免忘记重写方法导致使用默认的方法
// 没有重写直接报错
abstract class Parent {}
// 抽象方法只能以abstract开头 没有方法体
// 只能定义在抽象类里面 子类必须重写
abstract class Parent {
  abstract sayHi(): void;
}
```

## 实现

```typescript
abstract class Database {
  static username: string = 'admin';
  static password: string = '123456';
  abstract getDetails(): void;
}

class Sql extends Database {
  getDetails() {
    console.log(Sql.username + 'Sql', Sql.password + 'Sql');
  }
}

class Mysql extends Database {
  getDetails() {
    console.log(Mysql.username + 'Mysql', Mysql.password + 'Mysql');
  }
}

class MongoDB extends Database {
  getDetails() {
    console.log(MongoDB.username + 'MongoDB', MongoDB.password + 'MongoDB');
  }
}

const ConnectSql = new Sql();
ConnectSql.getDetails();

const ConnectMysql = new Mysql();
ConnectMysql.getDetails();

const ConnectMongoDB = new MongoDB();
ConnectMongoDB.getDetails();
```

## 参考链接

- https://juejin.im/post/6844903653774458888
- https://www.runoob.com/design-pattern/factory-pattern.html
- https://design-patterns.readthedocs.io/zh_CN/latest/creational_patterns/simple_factory.html
