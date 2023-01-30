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

- https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#new-unknown-top-type
- unknown 初始化后的值 不能分配给任何东西 不允许进行操作

```ts
function f(x: unknown, y: {} | null | undefined) {
  x = y; // always worked
  y = x; // used to error, now works
}
```

## API

### 泛型新增的功能

```ts
- type Length<T extends { length: number }> = T['length'];
// 第一个
- T[0]
// 数组转联合类型
T[number]
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#variadic-tuple-types
type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];
// 参数默认值
declare function create<T extends HTMLElement = HTMLDivElement, U = T[]>(
  element?: T,
  children?: U
): Container<T, U>;
// 动态参数
const Foo = "Foo";
const Bar = "Bar";
let x = {
  [Foo]: 100,
  [Bar]: "hello"
};
let a = x[Foo]; // has type 'number'
let b = x[Bar]; // has type 'string'
```

### indexed access types

```ts
type P4 = string[]['push']; // (...items: string[]) => number
```

### 元组

- 剩余参数

```ts
declare function foo(...args: [number, string, boolean]): void;
declare function foo(args_0: number, args_1: string, args_2: boolean): void;
// 剩余参数 可以放在任何位置 只要后边没有可选元素
let StringsAndMaybeBoolean: [...string[], boolean?]; // error
```

- 可选
- let t: [number, string?, boolean?];

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

```ts
// 可继承
type FirstIfString<T> =
    T extends [infer S extends string, ...unknown[]]
        ? S
        : never;
```

### [模板文字类型](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html)

### [satisfies](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html#the-satisfies-operator)

- 类似于 不严格的 as

```ts
// Ensure that we have exactly the keys from 'Colors'.
const favoriteColors = {
    "red": "yes",
    "green": false,
    "blue": "kinda",
} satisfies Record<Colors, unknown>;
favoriteColors.blue.toUpperCase() //ok it's a string
favoriteColors.green.toUpperCase() // error, it's a boolean

// Ensure that we have exactly the keys from 'Colors'.
const favoriteColors: Record<Colors, unknown> = {
    "red": "yes",
    "green": false,
    "blue": "kinda",
};
favoriteColors.blue.toUpperCase() // error, favoriteColors.blue is unknown
favoriteColors.green.toUpperCase() // error, favoriteColors.green is unknown
```

## 修饰符

### 协变与逆变

- 需要开启 strictFunctionTypes 默认双变
- 协变： 允许子类型转换为父类型
- 逆变： 允许父类型转换为子类型

```ts
type Getter<out T> = () => T;

type Setter<in T> = (value: T) => void;

interface State<in out T> {
    get: () => T;
    set: (value: T) => void;
}
```

### class 中的 !:

- class 表示不用初始化赋值 从外界接受 !:
- Note that the field needs to be initialized in the constructor itself.
- TypeScript does not analyze methods you invoke from the constructor to detect initializations,
- because a derived class might override those methods and fail to initialize the members.
- If you intend to definitely initialize a field through means other than the constructor
- (for example, maybe an external library is filling in part of your class for you)
- you can use the definite assignment assertion operator, !:

### class static

```tsx | pure
class Foo {
  static hello = 'hello';
  static world = 1234;
  static #count = 0;
  get count() {
    return Foo.#count;
  }
  static {
    if (someCondition()) {
      Foo.count++;
    }
  }
  static [propName: string]: string | number | undefined;
}
```

### !

- 非空判断 类似于 x as T

```ts
class OKGreeter {
  // Not initialized, but no error
  name!: string;
}
```

### const 断言

```tsx | pure
let x = 'hello' as const;
let x = <const>'hello';
```

## 其他

### 其他类型

- 迭代器类型 Iterable<T> AsyncIterator<T>

```ts
interface Iterator<T, TReturn = any, TNext = undefined> {
  // Takes either 0 or 1 arguments - doesn't accept 'undefined'
  next(...args: [] | [TNext]): IteratorResult<T, TReturn>;
  return?(value?: TReturn): IteratorResult<T, TReturn>;
  throw?(e?: any): IteratorResult<T, TReturn>;
}
interface Generator<T = unknown, TReturn = any, TNext = unknown>
  extends Iterator<T, TReturn, TNext> {
  next(...args: [] | [TNext]): IteratorResult<T, TReturn>;
  return(value: TReturn): IteratorResult<T, TReturn>;
  throw(e: any): IteratorResult<T, TReturn>;
  [Symbol.iterator](): Generator<T, TReturn, TNext>;
}
```

- unique symbol
  - let Bar: unique symbol = Symbol();
- Observable
- global window globalThis
- bigint

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

### new.target.prototype

### [jsx 通用类型参数](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-9.html#generic-type-arguments-in-jsx-elements)

```tsx | pure
class GenericComponent<P> extends React.Component<P> {
  internalProp: P;
}
type Props = { a: number; b: string };
const x = <GenericComponent<Props> a={10} b="hi" />; // OK
const y = <GenericComponent<Props> a={10} b={20} />; // Error
```

### defaultProps

```tsx | pure
static defaultProps: Partial<Props>; // false
static defaultProps: Pick<Props, "name">; // true
```

### [import.meta](https://github.com/tc39/proposal-import-meta)

### [类型的导出](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-export)

```tsx | pure
import type { SomeThing } from "./some-module.js";
export type { SomeThing };
import { someFunc, type BaseType } from "./some-module.js";
export * as utilities from "./utilities.js";
```

### 递归的处理

```tsx | pure
type ElementType<T> = T extends ReadonlyArray<infer U> ? ElementType<U> : T;
function deepFlatten<T extends readonly unknown[]>(x: T): ElementType<T>[] {
  throw 'not implemented';
}
```

### 动态导入

```tsx | pure
const obj = await import('./something.json', {
  assert: { type: 'json' },
});
```

### accessor

```js
// 自动访问器
class Person {
    accessor name: string;
    constructor(name: string) {
        this.name = name;
    }
}

// 相当于
class Person {
    #__name: string;
    get name() {
        return this.#__name;
    }
    set name(value: string) {
        this.#__name = name;
    }
    constructor(name: string) {
        this.name = name;
    }
}
```

### esmodal

- package.json
- type: module
- 如果从 cjs 模块导入 ESM 文件 唯一方法是使用 动态 import()

```tsx | pure
import/export语句可以使用
await可以使用顶级
相对导入路径需要完整的扩展名 import './xxx.js'
某些类似全局的值，如require和module不能直接使用
CommonJS 模块在某些特殊规则下被导入
```

```tsx | pure
// 支持 CommonJS 和 ESM 的单独入口点
 "name": "my-package",
    "type": "module",
    "exports": {
      ".": {
            // Entry-point for `import "my-package"` in ESM
            "import": {
                // Where TypeScript will look.
                "types": "./types/esm/index.d.ts",
                // Where Node.js will look.
                "default": "./esm/index.js"
            },
            // Entry-point for `require("my-package") in CJS
            "require": {
                // Where TypeScript will look.
                "types": "./types/commonjs/index.d.cts",
                // Where Node.js will look.
                "default": "./commonjs/index.cjs"
            },
        }
    },
    // Fall-back for older versions of TypeScript
    "types": "./types/index.d.ts",
    // CJS fall-back for older versions of Node.js
    "main": "./commonjs/index.cjs"
```
