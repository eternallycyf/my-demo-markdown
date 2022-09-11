---
order: 3
nav:
  title: 前端之路
  path: /guide
---

## flex 布局

- flex 布局 IE11 以下支持较差 一般移动端使用
- 当使用 flex 时候 float clear vertical-align 就失效了
- 父元素加 diplay:flex;
- 隐藏 seo 优化的文字
  - font-size:0

### 父元素属性

```
# flex-grow属性：
定义项目的放大比例，即使存在空间，也不会放大
# flex-shrink属性
定义了项目的缩小比例，当空间不足的情况下会等比例的缩小，如果定义个item的flow-shrink为0，则为不缩小
# flex-basis属性
定义了在分配多余的空间，项目占据的空间。
# flex
是flex-grow和flex-shrink、flex-basis的简写，默认值为0 1 auto。
#
align-self：允许单个项目与其他项目不一样的对齐方式，可以覆盖align-items，默认属性为auto，表示继承父元素的align-items

 flex: unset;
```

- flex-direction
- justify-content
- align-items
- flex-wrap
- align-content
- flex-flow

* flex-direction 设置主轴方向 默认水平方向

| 属性                          | 描述            | 其他   |
| ----------------------------- | --------------- | ------ |
| \*flex-direction:column       | 垂直排列        | 考乐木 |
| \*flex-direction:row          | 水平排列        | 默认   |
| flex-direction:row-reverse    | 水平排列 且翻转 |        |
| flex-direction:column-reverse | 垂直排列 且翻转 |        |

- justify-content 设置主轴子元素排列

| 属性                       | 描述                                     |
| -------------------------- | ---------------------------------------- |
| justify-content:flex-start |                                          |
| flex-start                 | 默认 主轴头部开始显示 如果 x 轴 从左到右 |
| flex-end                   | 从尾部开始排列                           |
| \*center                   | 在主轴居中对齐 如果 x 轴则 水平居中      |
| \*space-around             | 平分剩余空间                             |
| \*space-between            | 先两边贴边 再平分剩余空间                |

- align-items 设置侧轴上的子元素排列方式(单行)

| 属性       | 描述                       |
| ---------- | -------------------------- |
| flex-start | 默认值 从上到下            |
| flex-end   | 从下到上                   |
| center     | 挤在一起居中(垂直居中)     |
| stretch    | 拉伸 子盒子不给高度 死拽迟 |

- flex-wrap 设置子元素是否换行
  - 默认不换行,装不开会缩小宽度,放到父元素里面

| flex             | 描述        |
| ---------------- | ----------- |
| flex-wrap:nowarp | 默认,不换行 |
| flex-wrap: wrap; | 强制换行    |

- align-content 设置主轴上的元素排列方式(多行&&换行)

| 属性                     | 描述                                      |
| ------------------------ | ----------------------------------------- |
| align-content:flex-start |                                           |
| flex-start               | 默认值在侧轴头部开始排列                  |
| flex-end                 | 从尾部开始排列                            |
| center                   | 在侧轴中间显示                            |
| space-around             | 子项在侧轴平分剩余空间                    |
| space-between            | 子项在侧轴先分布在两头,在平分剩余空间     |
| stretch                  | 设置子项元素高度平分父元素高度 盒子不给高 |

- flex-flow 复合属性,相当于同时设置了 flex-direction 和 flex-wrap

| 属性                    | 描述               |
| ----------------------- | ------------------ |
| flex-flow: column wrap; | 主轴设为侧轴且换行 |

### 子项属性

- flex 子项份数
  - flex:<number> 写数字就行
  - 也可以写百分比
- align-self: 控制子  项自己在侧轴的排列方式】
  - != 块级 && maigin != auto
  - stretch
  - center
  - start
  - end
- order 定义子项的排列顺序(前后顺序)
  - 数值越小 越靠前 默认是 0 正负值
