---
order: 3
nav:
  title: Article2
  path: /article2
---

## 命令模式

- 主要目的是让请求者和响应者解耦，并集中管理

## 代码实现

```typescript
// 命令接口
interface Command {
  execute(): void;
  undo(): void;
}

// 开启命令
class ConcreteCommandOn implements Command {
  private receiver: Receiver;
  constructor(receiver: Receiver) {
    this.receiver = receiver;
  }

  // 执行命令的方法
  public execute(): void {
    this.receiver.actionOn();
  }

  // 撤销命令的方法
  public undo(): void {
    this.receiver.actionOff();
  }
}

// 关闭命令
class ConcreteCommandOff implements Command {
  private receiver: Receiver;
  constructor(receiver: Receiver) {
    this.receiver = receiver;
  }

  // 执行命令的方法
  public execute(): void {
    this.receiver.actionOff();
  }

  // 撤销命令的方法
  public undo(): void {
    this.receiver.actionOn();
  }
}

// 空命令（省去判空操作）
class NoCommand implements Command {
  public execute(): void {}
  public undo(): void {}
}

class Receiver {
  public actionOn(): void {
    console.log('我是命令接收者，开启了某动作');
  }

  public actionOff(): void {
    console.log('我是命令接收者，关闭了某动作');
  }
}

class Invoker {
  private onCommands: Array<Command>;
  private offCommands: Array<Command>;
  private undoCommand: Command;
  private slotNum: number = 7;
  constructor() {
    this.undoCommand = new NoCommand();
    this.onCommands = [];
    this.offCommands = [];

    for (let i = 0; i < this.slotNum; i++) {
      this.onCommands[i] = new NoCommand();
      this.offCommands[i] = new NoCommand();
    }
  }

  public setCommand(
    index: number,
    onCommand: Command,
    offCommand: Command,
  ): void {
    this.onCommands[index] = onCommand;
    this.offCommands[index] = offCommand;
  }

  // 开启
  public on(index: number): void {
    this.onCommands[index].execute(); // 调用相应方法
    //记录这次操作，用于撤销
    this.undoCommand = this.onCommands[index];
  }

  // 关闭
  public off(index: number): void {
    this.offCommands[index].execute();
    this.undoCommand = this.offCommands[index];
  }

  // 撤销
  public undo(): void {
    this.undoCommand.undo();
  }
}

function main() {
  // 创建接收者
  const receiver: Receiver = new Receiver();

  // 创建命令
  const commandOn: Command = new ConcreteCommandOn(receiver);
  const commandOff: Command = new ConcreteCommandOff(receiver);

  // 创建调用者
  const invoker: Invoker = new Invoker();
  invoker.setCommand(0, commandOn, commandOff);

  invoker.on(0);
  invoker.off(0);
  invoker.undo();
}

main();
```

## 参考链接

- https://www.runoob.com/design-pattern/command-pattern.html
- https://github.com/sohamkamani/javascript-design-patterns-for-humans#-command
- https://design-patterns.readthedocs.io/zh_CN/latest/behavioral_patterns/command.html
