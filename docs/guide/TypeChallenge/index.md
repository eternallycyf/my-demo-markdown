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

## 概念

### [why-does-typescript-use-like-types](https://stackoverflow.com/questions/43712705/why-does-typescript-use-like-types)

- promiseLike 等等

### [unknown 和 any 区别](https://stackoverflow.com/questions/51439843/unknown-vs-any)

- unknown 初始化后的值 不能分配给任何东西 不允许进行操作

## API

### 泛型新增的功能

```ts
- type Length<T extends { length: number }> = T['length'];
// 第一个
- T[0]
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#variadic-tuple-types
type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];
```

### infer

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

### class 中的 !:

- class 表示不用初始化赋值 从外界接受 !:
- Note that the field needs to be initialized in the constructor itself.
- TypeScript does not analyze methods you invoke from the constructor to detect initializations,
- because a derived class might override those methods and fail to initialize the members.
- If you intend to definitely initialize a field through means other than the constructor
- (for example, maybe an external library is filling in part of your class for you)
- you can use the definite assignment assertion operator, !:

```ts
class OKGreeter {
  // Not initialized, but no error
  name!: string;
}
```

## 其他

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
