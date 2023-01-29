---
title: TypeChallenge
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

# TypeChallenge

## infer

- 可以理解为设置一个未知的变量 (一元一次方程)
- 可以有多个 infer
- 也可以出现在左侧
  - type unpack<T> = string extends T ? string : null;

```ts
// 条件语句 推断传入的类型 如果是 promise里面是stirng 就返回string 否则返回T
type unpack<T> = T extends Promise<string> ? string : T;
type unpack<T> = T extends Promise<R> ? R : T;
```

```ts
// infer 设置推断Promise中的类型
// 相当于将promise中的类型 变成一个变量 它是R
// 如果 传入的 T 是 Promise 就直接返回Promise中的类型 即R
// 否则为传入的类型
type unpack<T> = T extends Promise<infer R> ? R : T;
type a = unpack<Promise<string>>; // string
type b = unpack<() => void>; // () => void
type c = unpack<string>; // string
```

### 绕过 TS 的限制

- 分布条件类型仅在 extends 关键字的前面是类型变量时发生
- T extends {} 和 T 的区别
  - T extends {} 禁止 null 和 undefined
  - T extends any === T

```ts
type b<T> = T extends any ? ({} extends unpack<T> ? T : never) : never;

type NotEmpty<T> = T extends {}
  ? {} extends { [P in keyof T]: T[P] }
    ? never
    : T
  : never;
```

## [why-does-typescript-use-like-types](https://stackoverflow.com/questions/43712705/why-does-typescript-use-like-types)
