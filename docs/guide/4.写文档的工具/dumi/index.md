---
order: 4
nav:
  title: 前端之路
  path: /guide
---

# dumi

## nav

```js
# ./docs/xxx/index.md  index.zh-CN.md
```

## 路由

```js
// 一级路由
---
nav:
  title: Components
  path: /components
---
// 同一类型写一样的就行
---
order: 1
group:
  path: /layout
  title: 布局组件
  order: 1
---
 #
 ---
title: Basic
order: 2
toc: menu
---
```

## mdx

````js
```tsx
/**
 * inline: true
 */
import React from 'react';
import Alert from '@/MyComponents/Alert';
export default () => (
  <Alert
    type="info"
    message="立即开始"
    description="所有晦暗都留给过往，从遇见你开始，凛冬散尽，星河长明！🎉 🎉 🎉"
  />
);
```;
````

## markdown

### 源代码

````js
```jsx | pure
// 我不会被渲染为 React 组件
```;
````

### code

```js
<code src="/path/to/complex-demo.tsx" 配置项="值"></code>;

// 直接在md使用 tsx
inline: true;
```

### API

```js
<!-- 不传递 src 将自动探测当前组件，比如 src/Hello/index.md 将会识别 src/Hello/index.tsx -->

<API></API>

<!-- 传递 src 将显式指明渲染哪个组件的 API -->

<API src="/path/to/your/component.tsx"></API>

<!-- src 可使用 alias -->

<API src="@/your/component.tsx"></API>

<!-- 传递 exports 将显式指明渲染哪些导出，请确保值为合法的 JSON 字符串 -->

<API exports='["default", "Other"]'></API>

<!-- 如果不需要 API 相关标题 ，可以使用hideTitle -->

<API hideTitle></API>
```

### Alert

```js
# warning、info、success、error
<Alert type="info">
  注意，内部暂时只能编写 HTML
</Alert>
```

### Badge

```js
<Badge>Hello</Badge>
```

### embed

```js
<!-- 引入全量的 Markdown 文件内容 -->
<embed src="/path/to/some.md"></embed>

<!-- 根据行号引入指定行的 Markdown 文件内容 -->
<embed src="/path/to/some.md#L1"></embed>

<!-- 根据行号引入部分 Markdown 文件内容 -->
<embed src="/path/to/some.md#L1-L10"></embed>

<!-- 根据正则引入部分 Markdown 文件内容 -->
<embed src="/path/to/some.md#RE-/^[^\r\n]+/"></embed>
```

### 表情

- 直接输入法输入即可

### 功能 api

```js
# 元素相对于 Demo 包裹器定位
/**
 * transform: true
 */
#
/**
 * background: '#f6f7f9'
 */
# 移除内边距
/**
 * compact: true
 */
#
/**
 * title: 我是标题
 * desc: 我是简介，我可以用 `Markdown` 来编写
 */
# 直接嵌入markdown
/**
 * inline: true
 */
# iframe
/**
 * iframe: true // 设置为数值可控制 iframe 高度
 */
```

## 自动生成类型注解

```js
import React from 'react';

export interface IHelloProps {
  /**
   * 可以这样写属性描述
   * @description       也可以显式加上描述名
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述，使用 description 兜底
   * @default           支持定义默认值
   */
  className?: string; // 支持识别 TypeScript 可选类型为非必选属性
}

const Hello: React.FC<IHelloProps> = () => <>Hello World!</>;

export default Hello;
```

## vue

### v-typical

````js
```vue | pure
<template>
  <v-typical
    class="blink"
    :steps="['Hello', 1000, 'Hello World !', 500, 'Hello World ! 👋', 1000]"
    :loop="Infinity"
    :wrapper="'h2'"
  ></v-typical>
</template>

<script lang="ts">
import VTypical from 'vue-typical';

export default {
  components: {
    VTypical,
  },
};
</script>
```;
````

### table

```js
| Prop      | Required | Type                                | Eg.                                    |
| --------- | -------- | ----------------------------------- | -------------------------------------- |
| `steps`   | True     | Array<String \| Number \| Function> | `['Hello', 1000, () => alert('Word')]` |
| `loop`    | False    | Number                              | `1` or `'Infinity'`                    |
| `wrapper` | False    | String                              | `'div'`                                |
```
