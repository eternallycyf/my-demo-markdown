---
order: 2
group:
  path: /my-components
  title: 封装的业务组件
  order: 2
---

## CSS

- 抖动动画

```css
@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }
  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }
  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
.apply-shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}
```

- [scrollIntoView 滚动元素 使元素出现在视口 有动画效果](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView)

## loading

<code src='./index.tsx' inline={true} transform={true} iframe={true}>
