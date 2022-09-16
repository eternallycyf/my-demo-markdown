---
order: 3
nav:
  title: Article
  path: /article
---

## grid

### 父元素属性

```js
display:grid
grid-template-columns: 第一列 第二列 ...
grid-template-rows: 第一行 第二行 ...
#
repeat(3, 100px)
// auto-fill 自动填充
repeat(auto-fill, 100px)
// 1fr 类似flex里比例
repeat(3, 1fr)
// minmax 最大值最小值
1fr minmax(150px, 1fr) 1fr
// auto 自适应
100px auto 100px
// 网格线 定位用
[c1] 100px [c2] auto [c3] 100px [c4];
# 间距
gap: 20px;
gap: 20px 20px;
row-gap: 20px;
column-gap: 20px;
# 区域 不需要的用 . 代替
grid-template-areas:
    'a b c'
    'd e f'
    'g h i';
# 主轴方向 dense:自动填充
 grid-auto-flow: row|column dense;
# 对齐方式 place-items: 主轴方向 侧轴方向
  justify-items: start | end | center| stretch;
  align-items: start | end | center| stretch;
  place-items: stretch stretch;
# 每一列的对齐方式
justify-content: start end enter stretch space-around
                 space-between space-evenly
align-content: ...
place-content: ... ...
# 控制多余拉伸的item
grid-auto-columns: 50px;
grid-auto-rows:
grid-auto-flow
```

### 子元素属性

```css
# 每一个子项的 开始 结束位置, 依据 grid-template-areas 网格线
  grid-column-start: 1;
  grid-column-end: 3;
  grid-column: 1 / 3;
  grid-row-start: 1;
  grid-row-end: 3;
  grid-row: 1 / 3;

  grid-area: 1 / 1 / 3 / 3;
# 跨越的网格
  grid-column-start: span 3;
  grid-column-end: span 3;
#
  grid-area: b;
# 和父元素的 justify-item 一样
  justify-self
  align-self
  place-self
```
