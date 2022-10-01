(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"4BnJ":function(s,m,o){"use strict";o.r(m);var i=o("cDcd"),n=o.n(i),e=o("dEAq"),l=o.n(e),c=o("H1Ra");const d=n.a.memo(({demos:t})=>n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"\u547D\u4EE4\u6A21\u5F0F"},n.a.createElement(e.AnchorLink,{to:"#\u547D\u4EE4\u6A21\u5F0F","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u547D\u4EE4\u6A21\u5F0F"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u4E3B\u8981\u76EE\u7684\u662F\u8BA9\u8BF7\u6C42\u8005\u548C\u54CD\u5E94\u8005\u89E3\u8026\uFF0C\u5E76\u96C6\u4E2D\u7BA1\u7406")),n.a.createElement("h2",{id:"\u4EE3\u7801\u5B9E\u73B0"},n.a.createElement(e.AnchorLink,{to:"#\u4EE3\u7801\u5B9E\u73B0","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4EE3\u7801\u5B9E\u73B0"),n.a.createElement(c.a,{code:`// \u547D\u4EE4\u63A5\u53E3
interface Command {
  execute(): void;
  undo(): void;
}

// \u5F00\u542F\u547D\u4EE4
class ConcreteCommandOn implements Command {
  private receiver: Receiver;
  constructor(receiver: Receiver) {
    this.receiver = receiver;
  }

  // \u6267\u884C\u547D\u4EE4\u7684\u65B9\u6CD5
  public execute(): void {
    this.receiver.actionOn();
  }

  // \u64A4\u9500\u547D\u4EE4\u7684\u65B9\u6CD5
  public undo(): void {
    this.receiver.actionOff();
  }
}

// \u5173\u95ED\u547D\u4EE4
class ConcreteCommandOff implements Command {
  private receiver: Receiver;
  constructor(receiver: Receiver) {
    this.receiver = receiver;
  }

  // \u6267\u884C\u547D\u4EE4\u7684\u65B9\u6CD5
  public execute(): void {
    this.receiver.actionOff();
  }

  // \u64A4\u9500\u547D\u4EE4\u7684\u65B9\u6CD5
  public undo(): void {
    this.receiver.actionOn();
  }
}

// \u7A7A\u547D\u4EE4\uFF08\u7701\u53BB\u5224\u7A7A\u64CD\u4F5C\uFF09
class NoCommand implements Command {
  public execute(): void {}
  public undo(): void {}
}

class Receiver {
  public actionOn(): void {
    console.log('\u6211\u662F\u547D\u4EE4\u63A5\u6536\u8005\uFF0C\u5F00\u542F\u4E86\u67D0\u52A8\u4F5C');
  }

  public actionOff(): void {
    console.log('\u6211\u662F\u547D\u4EE4\u63A5\u6536\u8005\uFF0C\u5173\u95ED\u4E86\u67D0\u52A8\u4F5C');
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

  // \u5F00\u542F
  public on(index: number): void {
    this.onCommands[index].execute(); // \u8C03\u7528\u76F8\u5E94\u65B9\u6CD5
    //\u8BB0\u5F55\u8FD9\u6B21\u64CD\u4F5C\uFF0C\u7528\u4E8E\u64A4\u9500
    this.undoCommand = this.onCommands[index];
  }

  // \u5173\u95ED
  public off(index: number): void {
    this.offCommands[index].execute();
    this.undoCommand = this.offCommands[index];
  }

  // \u64A4\u9500
  public undo(): void {
    this.undoCommand.undo();
  }
}

function main() {
  // \u521B\u5EFA\u63A5\u6536\u8005
  const receiver: Receiver = new Receiver();

  // \u521B\u5EFA\u547D\u4EE4
  const commandOn: Command = new ConcreteCommandOn(receiver);
  const commandOff: Command = new ConcreteCommandOff(receiver);

  // \u521B\u5EFA\u8C03\u7528\u8005
  const invoker: Invoker = new Invoker();
  invoker.setCommand(0, commandOn, commandOff);

  invoker.on(0);
  invoker.off(0);
  invoker.undo();
}

main();`,lang:"typescript"}),n.a.createElement("h2",{id:"\u53C2\u8003\u94FE\u63A5"},n.a.createElement(e.AnchorLink,{to:"#\u53C2\u8003\u94FE\u63A5","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u53C2\u8003\u94FE\u63A5"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(e.Link,{to:"https://www.runoob.com/design-pattern/command-pattern.html"},"https://www.runoob.com/design-pattern/command-pattern.html")),n.a.createElement("li",null,n.a.createElement(e.Link,{to:"https://github.com/sohamkamani/javascript-design-patterns-for-humans#-command"},"https://github.com/sohamkamani/javascript-design-patterns-for-humans#-command")),n.a.createElement("li",null,n.a.createElement(e.Link,{to:"https://design-patterns.readthedocs.io/zh_CN/latest/behavioral_patterns/command.html"},"https://design-patterns.readthedocs.io/zh_CN/latest/behavioral_patterns/command.html"))))));m.default=t=>{const r=n.a.useContext(e.context),u=r.demos;return n.a.useEffect(()=>{var a;t!=null&&(a=t.location)!==null&&a!==void 0&&a.hash&&e.AnchorLink.scrollToAnchor(decodeURIComponent(t.location.hash.slice(1)))},[]),n.a.createElement(d,{demos:u})}}}]);
