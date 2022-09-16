---
order: 3
nav:
  title: Article2
  path: /article2
---

## 迭代器模式

- 迭代器模式`Iterator Pattern`提供了一种方法顺序访问一个聚合对象中的各个元素，而又无需暴露该对象的内部实现
- 这样既可以做到不暴露集合的内部结构，又可让外部代码透明地访问集合内部的数据，迭代器模式属于行为型模式。

## 代码实现

```js
// 广播电台示例

class RadioStation {
  // 电台
  constructor(frequency) {
    this.frequency = frequency;
  }

  getFrequency() {
    return this.frequency;
  }
}

class StationList {
  // 迭代器
  constructor() {
    this.index = -1;
    this.stations = [];
  }

  get(i) {
    return this.stations[this.index];
  }

  hasNext() {
    let index = this.index + 1;
    return this.stations[index] !== void 0;
  }

  next() {
    return this.stations[++this.index];
  }

  addStation(station) {
    this.stations.push(station);
  }

  removeStation(toRemove) {
    const toRemoveFrequency = toRemove.getFrequency();
    this.stations = this.stations.filter(
      station => station.getFrequency() !== toRemoveFrequency,
    );
  }
}

(function() {
  const stationList = new StationList();
  stationList.addStation(new RadioStation(89));
  stationList.addStation(new RadioStation(101));
  stationList.addStation(new RadioStation(102));
  stationList.addStation(new RadioStation(103.2));
  stationList.stations.forEach(station => console.log(station.getFrequency())); // 89 101 102 103.2
  stationList.removeStation(new RadioStation(89));
  while (stationList.hasNext()) console.log(stationList.next().getFrequency()); // 101 102 103.2
})();
```

## 参考链接

- https://www.cnblogs.com/xuwendong/p/9898030.html
- https://www.runoob.com/design-pattern/iterator-pattern.html
- https://github.com/sohamkamani/javascript-design-patterns-for-humans#-iterator
