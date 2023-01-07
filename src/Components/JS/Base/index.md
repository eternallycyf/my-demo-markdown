---
order: 1
group:
  path: /JS
  title: JS
  order: 1
---

# JS

## 无缝滚动

```js
scrollIntoView;

// css
// scroll-behavior: smooth;
```

## 事件默认就阻止默认行为

```js
window.addEventListener('touchmove', function(e) {}, { passive: true });
```

## 获取元素的宽高

```js
// 获取元素的宽高
const { width, height } = el.getBoundingClientRect();
```

## 手风琴

```tsx
import React from 'react';
export default () => (
  <details>
    <summary>Copyright 1999-2011.</summary>
    <p> - by Refsnes Data. All Rights Reserved.</p>
    <p>
      All content and graphics on this web site are the property of the company
      Refsnes Data.
    </p>
  </details>
);
```

## 时间切片

<code src="./time.tsx"></code>
