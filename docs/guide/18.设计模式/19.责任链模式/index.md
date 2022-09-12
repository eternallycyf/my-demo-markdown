---
order: 18s
nav:
  title: 前端之路
  path: /guide
---

## 责任链模式

- 使多个对象都要机会处理请求，从而避免了请求发送者和接收者之间的耦合关系。将这些对象连成一条链，并沿着这条链传递该请求，直到有对象处理它为止
- 场景: 传统的`ifelse`或`switch` 处理动态数据的时候处于强耦合
- 责任链模式是一对一的。一个对象处理不了就会传递给下一个接受者

## 代码实现

```typescript
abstract class Handler {
  // 下一个处理者
  public successor?: Handler;
  public name: string;
  constructor(name: string) {
    this.name = name;
  }

  public abstract handleRequest(request: MyRequest): void;

  public setNext(successor: Handler): void {
    this.successor = successor;
  }
}

class ConcreteHandler1 extends Handler {
  constructor(name: string) {
    super(name);
  }

  public handleRequest(request: MyRequest): void {
    // 首先判断当前级别是否能够处理，不能够处理则交给下一个级别处理
    if (request.level <= 1) {
      console.log('被一级处理');
    } else {
      // 交给下一级处理
      this.successor && this.successor.handleRequest(request);
    }
  }
}

class ConcreteHandler2 extends Handler {
  constructor(name: string) {
    super(name);
  }

  public handleRequest(request: MyRequest): void {
    // 首先判断当前级别是否能够处理，不能够处理则交给下一个级别处理
    if (request.level > 1 && request.level <= 2) {
      console.log('被二级处理');
    } else {
      // 交给下一级处理
      this.successor && this.successor.handleRequest(request);
    }
  }
}

class ConcreteHandler3 extends Handler {
  constructor(name: string) {
    super(name);
  }

  public handleRequest(request: MyRequest): void {
    // 首先判断当前级别是否能够处理，不能够处理则交给下一个级别处理
    if (request.level > 2) {
      console.log('被三级处理');
    } else {
      // 交给下一级处理
      this.successor && this.successor.handleRequest(request);
    }
  }
}

class MyRequest {
  private _level: number;
  constructor(level: number) {
    this._level = level;
  }

  get level(): number {
    return this._level;
  }

  set level(value: number) {
    this._level = this.level;
  }
}

function main() {
  // 创建一个请求
  const request: MyRequest = new MyRequest(5);

  // 创建相关处理人
  const handler1: Handler = new ConcreteHandler1('lili');
  const handler2: Handler = new ConcreteHandler2('linlin');
  const handler3: Handler = new ConcreteHandler3('shunshun');

  // 设置下级别审批，构成环形结构
  handler1.setNext(handler2);
  handler2.setNext(handler3);
  handler3.setNext(handler1);

  handler1.handleRequest(request);
}

main();
```

## 参考链接

- https://juejin.im/post/6844903855348514829
- https://www.runoob.com/design-pattern/chain-of-responsibility-pattern.html
- https://github.com/sohamkamani/javascript-design-patterns-for-humans#-chain-of-responsibility
