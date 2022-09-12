---
order: 18s
nav:
  title: 前端之路
  path: /guide
---

## 策略模式

- 定义一组算法、将每个算法都封装，并且使它们之间可以互换
- 用于替换 多个`ifelse` 或 `switch`

## 代码实现

```typescript
class Location {
  position: string;
  constructor(position: string) {
    this.position = position;
  }
}

class Stratege {
  locations: Location[] = [];
  constructor(...locations) {
    this.locations = locations;
    console.log('路线经过了');
    this.location.forEach(el => {
      console.log(el.position + ',');
    });
  }
}

class Move {
  start: Location;
  end: Location;
  stratege: Stratege;

  constructor() {
    this.start = new Location('1 1');
    this.end = new Location('0 0');
    const sea = new Location('1 0');
    const land = new Location('1 0');
    this.stratege = new Stratege(this.start, sea, this.end);
  }
}
```

## 参考链接

- https://www.runoob.com/w3cnote/state-vs-strategy.html
- https://www.runoob.com/design-pattern/strategy-pattern.html
- https://design-patterns.readthedocs.io/zh_CN/latest/behavioral_patterns/strategy.html
