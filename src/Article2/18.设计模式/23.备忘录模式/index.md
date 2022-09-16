---
order: 3
nav:
  title: Article2
  path: /article2
---

## 备忘录模式

- 是在不破坏封装性的前提下，将对象当前的内部状态保存在对象之外，以便以后当需要时能将该对象恢复到原先保存的状态。备忘录模式又叫快照模式，是一种对象行为型模式
- 场景
  - 需要保存/恢复数据的相关状态场景。
  - 提供一个可回滚的操作。

## 代码实现

```typescript
// 以文本编辑器为例，该编辑器会不时地保存状态，并且可以根据需要进行恢复。
class EditorMemento {
  // memento对象将能够保持编辑器状态
  public _content: string;
  constructor(public content: string) {
    this._content = content;
  }

  getContent() {
    return this._content;
  }
}

class Editor {
  public _content: string;
  constructor() {
    this._content = '';
  }

  type(words: string) {
    this._content = `${this._content} ${words}`;
  }

  getContent() {
    return this._content;
  }

  save() {
    return new EditorMemento(this._content);
  }

  restore(memento: any) {
    this._content = memento.getContent();
  }
}

const editor = new Editor();

editor.type('This is the first sentence.');
editor.type('This is second.');

const saved = editor.save();

editor.type('And this is third.');

console.log(editor.getContent()); // This is the first sentence. This is second. And this is third.

editor.restore(saved);

console.log(editor.getContent()); // This is the first sentence. This is second.
```

## 参考链接

- https://github.com/Byronlee/Design-patterns
- https://www.runoob.com/design-pattern/memento-pattern.html
- https://github.com/sohamkamani/javascript-design-patterns-for-humans#-memento
