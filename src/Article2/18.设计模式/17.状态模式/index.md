---
order: 3
nav:
  title: Article2
  path: /article2
---

## 状态模式

- 它主要用来解决对象在多种状态转换时，需要对外输出不同的行为的问题。状态和行为是一一对应的，状态之间可以相互转换
- 例如 抽奖活动有很多的状态和对应的行为
- 在 `getter setter` 直接进行转发到合适的行为

## 代码实现

```typescript
class State {
  tmp: string;
  set store(state: string) {
    if (this.tmp !== state) {
      this.tmp = state;
    }
  }
  get store(): string {
    return this.tmp;
  }
}

class People {
  state: State;
  constructor(state: State) {
    this.state = state;
  }
}

const state = new State();
const people = new People(state);

state.store = 1;
console.log(people.state.store);
class State {
  tmp: string;
  set store(state: string) {
    if (this.tmp !== state) {
      this.tmp = state;
    }
  }
  get store(): string {
    return this.tmp;
  }
}

class People {
  state: State;
  constructor(state: State) {
    this.state = state;
  }
}

const state = new State();
const people = new People(state);

state.store = 1;
console.log(people.state.store);
```

## 参考链接

- https://www.runoob.com/design-pattern/state-pattern.html
- https://github.com/sohamkamani/javascript-design-patterns-for-humans#-state
- https://design-patterns.readthedocs.io/zh_CN/latest/behavioral_patterns/state.html
