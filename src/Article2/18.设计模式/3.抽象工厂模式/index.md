---
order: 3
nav:
  title: Article2
  path: /article2
---

## 抽象工厂模式

- 抽象工厂模式提供一个创建一系列相关或相互依赖对象的接口 而无须指定它们具体的类

## 实现

```typescript
abstract class Database {
  constructor(
    public username: string = 'admin',
    public password: string = '123456',
  ) {
    this.username = username;
    this.password = password;
  }
  public abstract getDetails(): void;
  public setDetails(username: string, password: string) {
    console.log(username, password);
    // 然后根据不同数据库执行不同的初始用户逻辑
  }
}

class Sql extends Database {
  constructor(username: string, password: string) {
    super(username, password);
  }
  public getDetails() {
    const sqlUserName = this.username + 'Sql';
    const sqlPassWord = this.password + 'Sql';
    this.setDetails(sqlUserName, sqlPassWord);
  }
}

class Mysql extends Database {
  constructor(username: string, password: string) {
    super(username, password);
  }
  public getDetails() {
    const mysqlUserName = this.username + 'Mysql';
    const mysqlPassWord = this.password + 'Mysql';
    this.setDetails(mysqlUserName, mysqlPassWord);
  }
}

const ConnectSql = new Sql('aaa', 'bbb');
ConnectSql.getDetails();

const ConnectMysql = new Mysql('cccc', 'ddd');
ConnectMysql.getDetails();
```

## 参考链接

- https://juejin.im/post/6844903653774458888
- https://www.runoob.com/design-pattern/factory-pattern.html
- https://design-patterns.readthedocs.io/zh_CN/latest/creational_patterns/simple_factory.html
