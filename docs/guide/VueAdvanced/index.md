---
title: VueAdvanced
order: 1
nav:
  title: 前端之路
  order: 1
---

```tsx
/**
 * inline: true
 */
import React from 'react';
import Alert from '@/MyComponents/Alert';
export default () => (
  <Alert type="warning" message="待整理" description="整理后将移动到其他地方" />
);
```

# VueAdvanced

## 重绘性能消耗

- innerHTML: render html string O(template size))+ 重新创建所有 DOM 元素 O(DOM size)
- vue: Virtual DOM: render Virtual DOM + diff O(template size) + 必要的 DOM 更新 O(DOM change)
- Virtual DOM render + diff 时间 > innerHTML

## MVVM vs Virtual DOM

- MVVM

```markdown
比如 Angular, Knockout 以及 Vue、Avalon 采用的都是数据绑定
数据绑定：通过 Directive/Binding 对象，观察数据变化并保留对实际 DOM 元素的引用，当有数据变化时进行对应的操作。
MVVM 的变化检查是数据层面的，而 React 的检查是 DOM 结构层面的。
MVVM 的性能也根据变动检测的实现原理有所不同：Angular 的脏检查使得任何变动都有固定的 O(watcher count) 的代价；
Knockout/Vue/Avalon 都采用了依赖收集，在 js 和 DOM 层面都是 O(change)：
```

- 脏检查：scope digest O(watcher count) + 必要 DOM 更新 O(DOM change)
- 依赖收集：重新收集依赖 O(data change) + 必要 DOM 更新 O(DOM change)

## 结论

- MVVM 列表渲染的初始化几乎一定比 React 慢,因为 创建 ViewModel / scope 实例比起 Virtual DOM 来说要昂贵很多
- React 的变动检查由于是 DOM 结构层面的，即使是全新的数据，只要最后渲染结果没变，那么就不需要做无用功。

- 不同场景
- 初始渲染：Virtual DOM > 脏检查 >= 依赖收集
- 小量数据更新：依赖收集 >> Virtual DOM + 优化 > 脏检查（无法优化） > Virtual DOM 无优化
- 大量数据更新：脏检查 + 优化 >= 依赖收集 + 优化 > Virtual DOM（无法/无需优化）>> MVVM 无优化

* form 尤雨溪
* 在我看来 Virtual DOM 真正的价值从来都不是性能，而是它

  - 1. 为函数式的 UI 编程方式打开了大门；
  - 2. 可以渲染到 DOM 以外的 backend，比如 ReactNative” 让我对虚拟 dom 有了新层次的认识，

* form 知乎

```markdown
一般去饭店、旅馆前，都会打电话问一下还有没有位子，避免白跑一趟。
在这个意义上，我们说打电话比跑一趟快。可是打完电话后，你不还是得真的去一趟吗，对于住店而言，这个是省不了的。
打电话的意义在于，五家店，你不用排着白跑，确定需要真的跑一趟了，才出门。
换言之，跑一趟，只是对于确认有没有位子值得真的出门而言，才是可省的。
vue、react 等的虚拟 dom 操作，就相当于打电话确认哪些更新真的发生了，值得进行真实 dom 操作。
因此，如果业务场景是全都需要更新，那打电话反倒成了额外的工作了。之所以通常不必考虑这种可能性，
原因有三：

- 1.几乎不可能全都需要更新
- 2.打电话就算浪费，开销也极为低廉，你有兴趣可以具体定量测试一下，我简单定性地打个比方，大概类似一百个店只要节省了一个白跑，九十九个电话就回本了
- 3.除了内容显示，前端现实业务往往还需要绑定 onclick 等交互事件，再加上双向绑定，直观、智能的模板语法是非常重要的，虚拟 dom 只是 vue、react 等的一部分，剩下的这些部分都是我们选择这些框架的重要原因，甚至才是根本原因
```
