---
order: 18s
nav:
  title: 前端之路
  path: /guide
---

## 简单工厂模式

- 定义一个创建对象的类，由这个类来封装实例化对象的行为

## 实现

```js
class Database {
  getDetails() {
    console.log(this.name);
  }
}

class Sql extends Database {
  constructor() {
    super();
    this.name = 'Sql';
  }
}

class Mysql extends Database {
  constructor() {
    super();
    this.name = 'Mysql';
  }
}

class MongoDB extends Database {
  constructor() {
    super();
    this.name = 'MongoDB';
  }
}

class ConnectDatabase {
  getType(type) {
    switch (type) {
      case 'Sql':
        return new Sql();
      case 'Mysql':
        return new Mysql();
      case 'MongoDB':
        return new MongoDB();
      default:
        throw new Error('参数错误');
    }
  }
}

var ConnectFn = new ConnectDatabase();

var ConnectSql = ConnectFn.getType('Sql');
ConnectSql.getDetails();

var ConnectMysql = ConnectFn.getType('Mysql');
ConnectMysql.getDetails();

var ConnectMongoDB = ConnectFn.getType('MongoDB');
ConnectMongoDB.getDetails();
```

## 参考链接

- https://juejin.im/post/6844903653774458888
- https://www.runoob.com/design-pattern/factory-pattern.html
- https://design-patterns.readthedocs.io/zh_CN/latest/creational_patterns/simple_factory.html
