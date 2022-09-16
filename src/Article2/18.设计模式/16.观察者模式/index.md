---
order: 3
nav:
  title: Article2
  path: /article2
---

## 观察者模式

- 定义对象间一种一对多的依赖关系，当一个对象改变状态，则所有依赖于它的对象都会得到通知并自动更新
- 场景: `vue`的响应式

## 代码实现

```typescript
class Observer {
    states: string[] = []
    update(state: string) {
        this.states.push(state)
    }
}

class People {
   state: string = ''
   observer：Observer
   setState(newState:string){
       if(this.state !== newState){
           this.state = newState
           this.notify(this.state)
       }
   }
   notify(state: string){
       if(this.observer !== null){
           this.observer.update(state)
       }
   }
   setObserver(observer: Observer) {
       this.observer = observer
   }
}

const observer = new Observer()
const people = new People().setObserver(observer)
people.setState('shit')
console.log(observer.state)
```

## 参考链接

- https://www.runoob.com/design-pattern/observer-pattern.html
- https://github.com/sohamkamani/javascript-design-patterns-for-humans#-observer
- https://design-patterns.readthedocs.io/zh_CN/latest/behavioral_patterns/observer.html
