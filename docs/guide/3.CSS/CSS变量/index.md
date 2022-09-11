---
order: 3
nav:
  title: 前端之路
  path: /guide
---

## CSS 原生变量 var(--color)

### 导读

- 这篇文章所指的`css`变量, 并不是指 `less` 等预编译语言的变量`(@)`
- 而是直接在 `.css` 页面中使用 `.js|.html` 中所定义的变量 ([var()-mdn](<https://developer.mozilla.org/zh-CN/docs/Web/CSS/var()>))
- 一般情况下 前端样式只要通过 js 动态切换不同类名 行内样式
- 就可以在`React Vue` 中完成绝大多数的需求了
- 但是有些使用场景就需要原生 `css` 的 `var()` 变量。 或者说使用他可以达到更加方便的效果

```js
// 假设使用了一个组件库的一个小圆点, 而他内部是通过伪元素做的
// 此时的需求是 小圆点的颜色由用户决定,不是一个固定的值,你该如何控制呢?
// 我们通常的做法是
//    1.定义不同的类名切换:  x => 颜色不是一个固定的值
//    2.行内样式直接传递:   x => 行内样式不能修改伪元素
//    3.自己重写:         x => 麻烦,这里只是一个用例,某些场景会极其繁琐
//    4.css in js       x => 公司项目一般不用这个
//    5.dom操作          x => 不推荐
这时候var()就应运而生了
```

### 原生 html

```html | pure
# index.html
<style>
  #dv {
    color: var(--color);
  }
</style>
<body>
  <div id="dv"></div>
  <script>
    let clickColor = 'cornflowerblue';
    const dv = document.getElementById('dv');
    dv.innerHTML = `<div id='dv' style="--color:${myColor}">css</div>`;
  </script>
</body>
```

### jsx

```jsx | pure
import styles from './app.module.css'
const App = () => {
  let clickColor = 'red'
  const style = { "--color": clickColor};
  return (
    <div className={styles.header} style={style}>
      hello
    </div>
  );
};
export default App;
#
.header {
  color: var(--color)
}
```

### tsx

```tsx | pure
import styles from './app.module.css'
import React from 'react'
const App = () => {
  let clickColor = 'red'
  const style = { "--color": clickColor} as React.CSSProperties;
  return (
    <div className={styles.header} style={style}>
      hello
    </div>
  );
};
export default App;
#
.header {
  color: var(--color)
}
```

### vue2

```vue | pure
<template>
  <div class="test">
    <span :style="spanStyle" class="span1">hello world</span>
    <span style="--color:red" class="span1">hello world</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      spanStyle: { '--color': 'green' },
    };
  },
};
</script>
<style scoped>
.span1 {
  color: var(--color);
}
</style>
```

### vue3

```vue | pure
# vue3提供了API 直接v-bind就可以使用了
<style scoped>
.span1 {
  color: v-bind(变量);
}
</style>
```
