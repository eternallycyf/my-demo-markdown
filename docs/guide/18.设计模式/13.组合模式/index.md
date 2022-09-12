---
order: 18s
nav:
  title: 前端之路
  path: /guide
---

## 组合模式

- 将对象组合成树形结构以表示“部分-整体”的层次结构。组合使得用户对单个对象和组合对象的使用具有一致性。
- 常见场景: 文件目录

## 代码实现

- 组合对象和叶子对象并不是父子关系，而是组合关系
- 实现时，我们会将组合对象类 `Composite` 或者叶子对象类 `Leaf` 继承于同一个抽象类 `Component`

```typescript
abstract class Component {
  operation() {}
}
class Composite extends Component {
  operation() {
    console.log('组合对象的实现');
  }
}
class Leaf extends Component {
  operation() {
    console.log('叶子对象的实现');
  }
}
```

```typescript
abstract class TreeBase {
  name: string;
  nodes: TreeBase[] = [];
  constructor(name: string) {
    this.name = name;
  }
  add(n: TreeBase) {}
  remove(n: TreeBase) {}
  show() {}
}

class TreeComposite extends TreeBase {
  constructor(name: string) {
    super(name);
  }

  add(n: TreeBase) {
    this.nodes.push(n);
  }

  remove(n: TreeBase) {
    this.nodes.splice(
      this.nodes.findIndex(e => e.name === n.name),
      1,
    );
  }

  show() {
    console.log(`${this.name}, I am a composite node`);
    this.nodes.forEach(e => {
      e.show();
    });
  }
}
class Leaf extends TreeBase {
  constructor(name: string) {
    super(name);
  }

  show() {
    console.log(`${this.name}, I am a leaf`);
  }
}
const root = new TreeComposite('root');
const node1 = new TreeComposite('node1');
const leaf1 = new Leaf('leaf1');
const leaf2 = new Leaf('leaf2');
const leaf3 = new Leaf('leaf3');

root.add(node1);
root.add(leaf3);
node1.add(leaf1);
node1.add(leaf2);
root.show();
/**
 *
 * root, I am a composite node
 * tree.component.ts:51 node1, I am a composite node
 * tree.component.ts:64 leaf1, I am a leaf
 * tree.component.ts:64 leaf2, I am a leaf
 * tree.component.ts:64 leaf3, I am a leaf
 *
 **/
```

## 参考链接

- https://www.jianshu.com/p/a6e236040505
- https://segmentfault.com/a/1190000019773556
- https://github.com/tcorral/Design-Patterns-in-Javascript
- https://www.runoob.com/design-pattern/composite-pattern.html
- https://www.cnblogs.com/TomXu/archive/2012/04/12/2435530.html
- https://github.com/sohamkamani/javascript-design-patterns-for-humans#-composite
- https://xhui.top/2018/12/20/JS%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-8-%E7%BB%84%E5%90%88%E6%A8%A1%E5%BC%8F/
