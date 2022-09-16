---
order: 3
nav:
  title: Article2
  path: /article2
---

## 建造者模式

- 建造者模式`Builder Pattern`又可以称为生成器模式
- 是将一个复杂对象的构建与它的表示分离，使得同样的构建过程可以创建不同的表示，建造者模式属于对象创建型模式。

## 实现

- 例如我们想要创建一个消息组件`Message`, 包括标题、正文、 提示 `logo` 以及颜色四部分
- 而消息组件包括弹出消息组件 `AlertMessage` 和提示消息组件 `TooltipMessage` 两种
- 在抽象工厂模式的基础上。指定了指挥者`(Director)`来构建对象

```typescript
abstract class Message {
  public title: string;
  public text: string;
  public logo: string;
  public color: string;
  constructor(title: string, text: string, logo: string, color: string) {
    this.title = title;
    this.text = text;
    this.logo = logo;
    this.color = color;
  }
  abstract setTitle(): void;
  abstract setText(): void;
  abstract setLogo(): void;
  abstract setColor(): void;
  abstract getMessage(): void;
}

class AlertMessage extends Message {
  setTitle() {
    this.title = 'alert title';
  }
  setText() {
    this.text = 'alert info';
  }
  setLogo() {
    this.logo = 'image_1.png';
  }
  setColor() {
    this.color = 'blue';
  }
  getMessage(): string {
    return `Alert Message: ${this.title} ${this.text} ${this.logo} ${this.color}`;
  }
}

class TooltipMessage extends Message {
  setTitle() {
    this.title = 'tooltip title';
  }
  setText() {
    this.text = 'tooltip info';
  }
  setLogo() {
    this.logo = 'image_2.png';
  }
  setColor() {
    this.color = 'red';
  }
  getMessage(): string {
    return `Tooltip Message: ${this.title} ${this.text} ${this.logo} ${this.color}`;
  }
}

class Director {
  buildMessage(message: Message) {
    message.setTitle();
    message.setText();
    message.setLogo();
    message.setColor();
  }
}

const alertMessage = new AlertMessage(
  'alert title',
  'alert info',
  'image_1.png',
  'blue',
);
const tooltipMessage = new TooltipMessage(
  'tool title',
  'tool info',
  'image_2.png',
  'red',
);

const director = new Director();
director.buildMessage(alertMessage);
director.buildMessage(tooltipMessage);

alertMessage.getMessage();
tooltipMessage.getMessage();
```

## 参考链接

- https://www.runoob.com/design-pattern/builder-pattern.html
- https://wiki.jikexueyuan.com/project/java-design-pattern/builder-pattern.html
- https://design-patterns.readthedocs.io/zh_CN/latest/creational_patterns/builder.html
