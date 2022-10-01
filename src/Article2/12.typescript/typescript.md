---
order: 3
nav:
  title: Article2
  path: /article2
---

# Typescript

## 1 准备阶段

```tsx | pure | pure
tsc hello.ts     =>  .ts
tsc --init
终端 ctrl+shift+b 监视tsc
或者在最上方 菜单 终端 运行任务 监视tsconfig.json
```

## 2. 概念

### tsconfig

```json
{
   "compilerOptions": {
       // 开启js提示
       "allowJs": true,
       // 指定压缩代码生成的目录 随便一个不存在的路径就行
       "outDir": "./random",
       "declaration": true, //自动生成.d.ts文件类型校验
        "module": "esnext", // 保留import.then
          // 只允许使用@types的包
         "types" : [ "jquery"],
        "noImplicitAny":true // 默认any不提示
        "--noImplicitThis":true // 自动键入this
        "jsx": "react" // preserve表示自定义转换

   }
}
```

### declare

```typescript
// 全局类型标注
// 声明不存在的sdk 避免报错
declare module '*.css';
declare module '*.less';
declare module '*.png';
interface jQuery {}
declare module 'jquery' {
    export = jQuery;
}
interface Igradient {
  parse?: string;
  stringify?: string
}
declare module 'gradient-parser' {
  export const gradient: Igradient
}
# 需要在tsconfig.json 引入文件
  "include": [
    "typings.d.ts"
  ],
# react有些包的module需要在这里定义
react-app-env.d.ts => declare
```

### namespace

```tsx | pure
# 相当于自执行函数
namespace xxx {
  export function log(){}
}
xxx.log('xx')
# 复制一个类
namespace importing {
  export class Foo {}
}
import Bar = importing.Foo;
let bar: Bar; // ok
```

### mixin

- https://mariusschulz.com/blog/mixin-classes-in-typescript

```tsx | pure
class SmartObject implements Disposable, Activatable { }
#
applyMixins(SmartObject, [Disposable, Activatable]);
#
function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        })
    });
}
```

### this 指向

```tsx | pure
type ThisPointer = { name: '19Qingfeng' };
function xxx(this: ThisPointer) {
  this.name;
}
```

### 版本问题

```tsx | pure
@types/react 要和ts版本对应 不然会报错
```

## 3 数据类型

### 基本类型

| 数据类型  | 描述                                                        |
| --------- | ----------------------------------------------------------- |
| boolean   |                                                             |
| number    |                                                             |
| string    | 推荐单引号                                                  |
| Array     | Array<T>                                                    |
| tuple     | 元组 固定长度的数组 [string,string?] => 可选                |
| Object    | 任意的 JS 对象 但是不能调用其他方法 即便它真的有            |
| any       | 任意类型                                                    |
| unknown   | 类型安全的 any 区别是 any 会把别的也推断成 any 他只推断自己 |
| null      | 可以赋给其他类型变量 但如果--strictNullChecks 就只能给自己  |
| undefined | 可以赋给其他类型变量 但如果--strictNullChecks 就只能给自己  |
| void      | 函数没有返回值他的类型就是 void 只能 undefined null         |
| never     | 用于函数没有返回值 例如只用于报错的函数 switch:defualt      |
| bigint    |                                                             |
| symbol    |                                                             |

### 其他类型

| 数据类型    | 描述                                   |
| ----------- | -------------------------------------- |
| enum        | 枚举 只能赋值为 undefined 和 null      |
| turple      | let x: [number, string] = [10, "jack"] |
| Union Types | \| 联合类型 只能同时为一种             |
| &           | & 交叉类型 合并                        |

### 基本修饰符

| 修饰符   | 描述           | 其他                |
| -------- | -------------- | ------------------- |
| ?:       | 可选属性       |                     |
| !.       | 非空断言       | 去除 Null undefined |
| !:       | 外部引入的变量 |                     |
| readonly | 只读           | 浅的只读            |
| is       |                |                     |
| as       |                |                     |
|          |                |                     |

### 映射修饰符

- readonly ? - + 没写等于使用了+

| 映射修饰符 | 描述      | 其他 |
| ---------- | --------- | ---- |
| -          | -?:       |      |
| +          | 默认      |      |
| readonly   | -readonly |      |
| ?          | -?:       |      |
|            |           |      |

```tsx | pure
# 删除属性中的只读属性
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};
type LockedAccount = {
  readonly id: string;
  readonly name: string;
};
type UnlockedAccount = CreateMutable<LockedAccount>;
// type UnlockedAccount = {
//    id: string;
//    name: string;
// }

# 删除属性中的可选属性
type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

# as
type MappedTypeWithNewProperties<Type> = {
    [Properties in keyof Type as NewKeyType]: Type[Properties]
}
```

### 操作符

#### Uppercase

```tsx | pure
# Uppercase 把每个字符转为大写形式：
type Greeting = "Hello, world"
type ShoutyGreeting = Uppercase<Greeting>
// type ShoutyGreeting = "HELLO, WORLD"

type ASCIICacheKey<Str extends string> = `ID-${Uppercase<Str>}`
type MainID = ASCIICacheKey<"my_app">
// type MainID = "ID-MY_APP"
```

#### Lowercase

```tsx | pure
type Greeting = "Hello, world"
type QuietGreeting = Lowercase<Greeting>
// type QuietGreeting = "hello, world"

type ASCIICacheKey<Str extends string> = `id-${Lowercase<Str>}`
type MainID = ASCIICacheKey<"MY_APP">
// type MainID = "id-my_app"
```

#### Capitalize

```tsx | pure
# Capitalize 字符串的第一个字符转为大写形式
type LowercaseGreeting = "hello, world";
type Greeting = Capitalize<LowercaseGreeting>;
// type Greeting = "Hello, world"
```

#### Uncapitalize

```tsx | pure
# Uncapitalize
type UppercaseGreeting = "HELLO WORLD";
type UncomfortableGreeting = Uncapitalize<UppercaseGreeting>;
// type UncomfortableGreeting = "hELLO WORLD"
```

### 模板字面量

```tsx | pure
type World = "world";
type Greeting = `hello ${World}`;
// type Greeting = "hello world"
# 如果是联合类型 就会有多种可能
```

## 4. 基本 API

### 类型断言

```typescript
// 手动指定某一个值的类型
1.值 as 类型
(someValue as string)  React-jsx必须用这个
2.<类型>值
(<string>someValue)

# 双重断言
 const element = (event as any) as HTMLElement; // ok
 as any as JSX.Element;
```

### type

- [type 和 interface 的区别](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)
  - interface 可以同名会自动合并
  - type 可使用模板字面量 索引修饰符等

```typescript
# 泛型
type Box<T> = {contents: T; };
```

### 函数

```typescript
type Fn = (...arg: number[]) => void
let IdFn: { <Type>(arg: Type): Type } = IdFn;
# 函数的重载
...
# 有属性的函数
type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}
# new实例化
type SomeConstructor = {
  new (str: string): {
    num: number;
  };
};
function fn(ctor: SomeConstructor) {
  return new ctor('1').num;
}
```

### 枚举

- [常量枚举和直接枚举的区别](https://www.typescriptlang.org/docs/handbook/enums.html#const-enums): 会生成额外的代码
- 相同名称的枚举自动合并

```ts | pure
// 默认从0开始递增 直到枚举进行反向映射
enum Days {
  Sun = 3,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat
}
let xxx = Days.Sun
# 常量枚举
const enum xxx { }
# 获取枚举的类型
enum Methods {
  'GET',
  'POST',
}
keyof typeof Methods;  // "GET" | "POST"
```

### typeof

- string | number | boolean | bigint | symbol | undefined | object |function
- 没有 null
- 遵守 falsy 值约定
- 通常结合 keyof 使用
- 可以获取实例的类型 => InstanceType<typeof 实例>

### keyof

- 只能返回 number string symbol 类型 需要自己收窄类型

```tsx | pure
# 获取一个接口的所有key
interface Foo {
  name: string;
  age: number
}
type T = keyof Foo // -> "name" | "age"
# 当参数传入对象 和 对象的某个键时 有关系
function prop<T extends object, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
# 生成字符串的联合类型
type xxx = keyof 接口
type xxx = keyof typeof 变量(enum)
```

- 索引访问类型

```tsx | pure
# 生成value
type Person = { age: number; name: string; alive: boolean };

type Age = Person['age'];
// type Age = number

type I1 = Person['age' | 'name'];
// type I1 = string | number

type I2 = Person[keyof Person];
// type I2 = string | number | boolean

type AliveOrName = 'alive' | 'name';
type I3 = Person[AliveOrName];
// type I3 = string | boolean

# 数组索引 => number
 const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];
type Person = typeof MyArray[number];
// type Person = {
//    name: string;
//    age: number;
// }

type Age = typeof MyArray[number]["age"];
// type Age = number

// Or
type Age2 = Person["age"];
// type Age2 = number
```

### infer

```tsx | pure
// 表示在 extends 条件语句中待推断的类型变量
type Info<T> = T extends { a: infer U; b: infer U } ? U : never;
// Props类： string | number
type Props = Info<{ a: string; b: number }>;
// Props类型： never
type Props1 = Info<number>;
```

### in

```tsx | pure
in 则可以遍历枚举类型
type Keys = "a" | "b"
type Obj =  {
  [p in Keys]: any
} // -> { a: any, b: any }
# 将所有的类型转为可选的
type Partial<T> = {
    [P in keyof T]?: T[P];
}
type PersonPartial = Partial<Person>;
#
type Keys = 'option1' | 'option2';
type Flags = { [K in Keys]: boolean };
type Flags = {
    option1: boolean;
    option2: boolean;
}
```

### is

```tsx | pure
function isNumber(x: any): x is number {
  //默认传入的是number类型
  return typeof x === 'number';
}

console.log(isNumber(7)); // true
console.log(isNumber('7')); //false
console.log(isNumber(true)); //false
```

## 5.inerface

```tsx | pure
# base
interface IPerson {
   readonly name: string | number,  // 只读
   age?: number,                    // 可选
   [propsName: string]: any         // 任意属性个数
}
# 接口继承
interface 新的接口名 entends 接口名, 接口名{ }
# 泛型接口
interface Icreate<T>{ (a:T,b:T):T }
# extends 类型收窄 必须有length属性
function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) { return a; }
  else { return b;}
}
```

## 6. 泛型

```tsx | pure
#
function swap<T, U>(data: [T, U]): [U, T] { } T[]
# 约束泛型
function fn<T extends{length: number}>(a: T): number {
  return a.length
}
fn(1)  // 报错 数字没有.length 必须要有.length
# 与函数的结合
interface Icreate {
  <T>(name: string, value: T): Array<T>
}
# 与类的结合
class Person <T>{
  name: T;
  constructor(name:T){
    this.name = name
  }
}
const xxx = new Person<string>('张三')
```

## 7. class

### js

```tsx | pure
#私有属性
```

### API

```tsx | pure
# 遍历属性
Object.kes(实例名).forEach(key=>实例名[key])
# 遍历方法
className.prototype 不能通过 forEach遍历 // 构造函数 可以
Object.getOwnPropertyNames([className].prototype)
  .forEach(item=>[className].prototype[item])
```

### 类表达式

```tsx | pure
const aaa = class {
  // 匿名
}
const bbb = class ccc {
  ccc.name
  // 只有内部可以访问ccc
}
```

### 4 个状态

#### public

```tsx | pure
实例和父类能都访问;
```

#### static

```tsx | pure
// 只能父类点出来
// 类似于直接在 Person.prototype.aaaa = '孙悟空'
//  constructor() { this.bbb = 12; }
class Person {
  static aaaa: string = ' xxx';
  bbb: number = 12;
  bbb!: number = 12;
  [s: string]: boolean | ((s: string) => boolean);
}
const per = new Person();
console.log(Person.aaaa);
```

#### private

```tsx | pure
// private    私有的         外界无法访问 不能被继承
为了避免直接修改 class中的属性 产生数据混乱
用private 定义属性 拒绝外界访问
同时在class内部 定义 getter setter 向外界开放 获取和修改的方法
内部可以设计 方法的权限
class Person {
  _name: string;
  private _age: number;
  constructor(_name: string, _age: number = 10) {
    this._name = _name;
    this._age = _age;
  }
  get age() {
    return this._age
  }
  set age(value: number) {
    if (value < 10) {
      this._age = value
    }
  }
}
const per = new Person('张三', 10)
per.age = 200
console.log(per) //10
```

#### protected

```tsx | pure
// protected  受保护的       外界无法访问 可以被继承
```

### readonly

```tsx | pure
readonly ccc: string = 'ss'
static readonly ccc: string = 'ss'
只能在构造器里面修改
```

### get set

```tsx | pure
// 手动定义 获取和更改方法 的computed
// get 定义的 可以直接点出来 不用调方法
// 如果不是关键字 get 就得使用定义的方法修改
class Person {
  _name: string;
  private _age: number;
  constructor(_name: string, _age: number = 10) {
    this._name = _name;
    this._age = _age;
  }
  get age() {
    return this._age;
  }
  set age(value: number) {
    if (value < 10) {
      this._age = value;
    }
  }
}
const per = new Person('张三', 10);
per.age = 200;
console.log(per); //10
```

### constructor

#### constructor

```tsx | pure
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  sayHi() {
    console.log('hello')
  }
}
const per: Person = new Person('2', 2)
# 或者
class Person {
  constructor(public name: string,public age: number) {
  }
  sayHi() {
    console.log('hello')
  }
}
const per: Person = new Person('2', 2)
```

#### super

```tsx | pure
class Animal {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  sayHi() {
    console.log('sss');
  }
}

class Cat extends Animal {
  type: string;
  constructor(name: string, age: number, type: string) {
    super(name, age);
    this.type = type;
  }
  sayHi() {
    super.sayHi();
  }
}
new Cat('as', 1, 'asd').sayHi();
```

### extends

```tsx | pure
子类重写方法 在子类中 会覆盖父类的方法
// 如果要加属性 必须写super 重写属性
```

### implements

```tsx | pure
# implements  需要重写属性和方法
class A implements 接口{
   /**
    * @override
    */
}
// 不用定义 super() 可以重写 属性和方法
```

### abstract

```tsx | pure
# 抽象类 禁止被实例化 用来被继承的
abstract class Parent{

}
# 父类指定结构 子类来实现 避免忘记重写方法导致使用默认的方法
// 抽象方法只能以abstract开头 没有方法体
// 只能定义在抽象类里面 子类必须重写
abstract class Parent{
 abstract sayHi():void;
}
```

## 8. 装饰器

- 在运行时立即调用 被装饰的声明信息做为参数传入

```tsx | pure
function Path(name: string) {
  console.log('需要通过柯里化形式拿到参数,默认传入的是target')
  return function (traget: any) {
    console.dir(name, traget.age)
  }
}

@Path('zhangsan')
class Hello {
  public static age: number = 12
}

# 函数参数
(
  target:any,  Hello.prototype
  methodName:  string, 函数名
  descriptor:  PropertyDecorator 描述
)
```

## 9. Utility Types

### `Awaited<Type>`

### `Partial<Type>`

- 传入的属性变成可选
- `type Partial<T> = { [P in keyof T]?: T[P] };`

### `Required<Type>`

- 将传入的属性变为必选项
- `type Required<T> = { [P in keyof T]-?: T[P] };`

### `Readonly<Type>`

- 将传入的属性变为只读
- `type Readonly<T> = { readonly [P in keyof T]: T[P] };`

### `Record<Keys, Type>`

- 将 K 中所有的属性的值转化为 T 类型(定义一个接口的 key 和 value)
- `type Record<K extends keyof any, T> = { [P in K]: T };`

```tsx | pure
type keys = 'A' | 'B' | 'C';
const result: Record<keys, number> = {
  A: 1,
  B: 2,
  C: 3,
};
```

### `Pick<Type, Keys>`

- 从 T 中取出 一系列 K 的属性
- `type Pick<T, K extends keyof T> = { [P in K]: T[P] };`

```tsx | pure
// Pick<接口,'key1','key2',...>
interface Props {
  name: string;
  label: number;
  value: boolean;
}
type ChildrenProps = Pick<Props, 'name' | 'label'>;
```

### `Omit<Type, Keys>`

```tsx | pure
// 忽视重写某个属性
interface A {
  a: number;
  b: number;
}
interface B extends Omit<A, 'a'> {
  a: boolean;
}
```

### `Exclude<UnionType, ExcludedMembers>`

- 从 T 中剔除可以赋值给 U 的类型
- `type Exclude<T, U> = T extends U ? never : T;`

### `Extract<Type, Union>`

- 提取 T 中可以赋值给 U 的类型
- `type Extract<T, U> = T extends U ? T : never;`

### `NonNullable<Type>`

- 从 T 中剔除 null 和 undefined
- `type NonNullable<T> = T extends null | undefined ? never : T;`

### `Parameters<Type>`

```tsx | pure
/**
 * Obtain the parameters of a function type in a tuple
 */
type Parameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;

type A = Parameters<() => void>; // []
type B = Parameters<typeof Array.isArray>; // [any]
type C = Parameters<typeof parseInt>; // [string, (number | undefined)?]
type D = Parameters<typeof Math.max>; // number[]
```

### `ConstructorParameters<Type>`

```tsx | pure
/**
 * Obtain the parameters of a constructor function type in a tuple
 */
type ConstructorParameters<
  T extends new (...args: any[]) => any
> = T extends new (...args: infer P) => any ? P : never;
type A = ConstructorParameters<ErrorConstructor>;
// [(string | undefined)?]

type B = ConstructorParameters<FunctionConstructor>;
// string[]

type C = ConstructorParameters<RegExpConstructor>;
// [string, (string | undefined)?]
```

### `ReturnType<Type>`

- 获取函数返回值类型
- `type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;`

```tsx | pure
type T0 = ReturnType<() => string>;
```

### `InstanceType<Type>`

- 获取构造函数类型的实例类型

```tsx | pure
/**
 * Obtain the return type of a constructor function type
 */
type InstanceType<T extends new (...args: any[]) => any> = T extends new (
  ...args: any[]
) => infer R
  ? R
  : any;
type A = InstanceType<ErrorConstructor>; // Error
type B = InstanceType<FunctionConstructor>; // Function
type C = InstanceType<RegExpConstructor>; // RegExp
```

## 10. 工具函数

#### OverrideProperty

- 覆盖接口属性

```tsx | pure
/**
 * Returns object T, but with T[K] overridden to type U.
 * @example
 * type MyObject = { a: number, b: string }
 * OverrideProperty<MyObject, "a", string> // returns { a: string, b: string }
 */
export type OverrideProperty<T, K extends keyof T, U> = Omit<T, K> &
  { [P in keyof Pick<T, K>]: U };

// type Modify<T, R> = Omit<T, keyof R> & R;
```

#### DeepPartial

```tsx | pure
type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};
```

#### DeepRequired

```tsx | pure
type DeepRequired<T> = {
  [K in keyof T]-?: T[K] extends object ? DeepRequired<T[K]> : T[K];
};
```

#### GetCommonKeys

```tsx | pure
// 提取公众属性
type CommonKeys = Extract<keyof Worker, keyof Student>;
```

#### DeletePartial

- 删除属性中的可选属性

```tsx | pure
type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};
```

#### 差集

- worKer 在 student 中不存在的 key

```tsx | pure
type ExcludeKeys = Exclude<keyof Worker, keyof Student>;
```

#### tuple => union

- [string, number] -> string | number

```tsx | pure
type TTuple = [string, number];
type Res = TTuple[number]; // string | number
```

#### union => intersection

- T1 | T2 -> T1 & T2

```tsx | pure
type UnionToIntersection<U> = (U extends any
? (k: U) => void
: never) extends (k: infer I) => void
  ? I
  : never;

type Result = UnionToIntersection<T1 | T2>; // T1 & T2
```

## 11. [react 接口](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/1349b640d4d07f40aa7c1c6931f18e3fbf667f3a/types/react/index.d.ts#L835)

#### base

```tsx | pure
# 组件
class xxx extends React.Component<PropType,StateType>{ }
xxx: React.FunctionComponent | FC
# 函数props
React.ComponentProps<'button'>
# jsx
React.ReactNode JSX.Element
JSX.Element-> 返回值React.createElement
React.ReactNode-> 组件的返回值
# css
React.CSSProperties
# children
React.FunctionComponentElement
# html元素接口
ButtonHTMLAttributes, AnchorHTMLAttributes
# promise
Promise<string[]>
# 键盘事件
e:React.KeyboardEvent
# props
React.ButtonHTMLAttributes<HTMLButtonElement>

# 事件
onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
React.FormEvent<HTMLInputElement>

onSubmit: e: React.SyntheticEvent
e.target as typeof e.target & {
  email: {value: string }
}
e.target.email.value

# 导出props
  type ComponentProps<T> = T extends
  | React.ComponentType<infer P>
  | React.Component<infer P>
  ? JSX.LibraryManagedAttributes<T, P>
  : never;

const TestComponent = (props: ComponentProps<typeof GreetComponent>) => {
  return <h1 />;
};
const el = <TestComponent name="foo" />;

# 组件实例 见下方
```

#### 组件实例

#### class

```tsx | pure
import React from 'react';
export default class Child extends React.Component {
  b = () => {};
  render() {
    return <>Child</>;
  }
}
class AAA extends React.Component {
  myRef = React.createRef<InstanceType<typeof Child>>(null!);
  state = {};

  backgroundOrigin = () => {
    this.myRef.current?.b();
  };

  render() {
    return (
      <>
        <Child ref={this.myRef} />
      </>
    );
  }
}
```

#### hook

- 第一种方式

```tsx | pure
import React from 'react';
import Countdown, { CountdownHandle } from './Countdown';

function App() {
  const countdownEl = React.useRef<CountdownHandle>(null!);

  React.useEffect(() => {
    if (countdownEl.current) {
      countdownEl.current.a = 10;
    }
  }, []);

  return <Countdown ref={countdownEl} />;
}
```

```tsx | pure
import React from 'react';
export type CountdownHandle = {
  start: () => void;
  a: number;
};

type Props = {};

const Countdown = React.forwardRef<CountdownHandle, Props>((props, ref) => {
  React.useImperativeHandle(ref, () => ({
    // start() has type inferrence here
    start() {
      alert('Start');
    },
    a: 1,
  }));

  return <div>Countdown</div>;
});

export default Countdown;
```

- 第二种方式

```tsx | pure
import React from 'react';
type CountdownHandle = {
  start: () => void;
};
type CountdownProps = {};
const Countdown: React.ForwardRefRenderFunction<
  CountdownHandle,
  CountdownProps
> = (props, forwardedRef) => {
  React.useImperativeHandle(forwardedRef, () => ({
    start() {
      alert('Start');
    },
  }));
  return <div>Countdown</div>;
};

export default React.forwardRef(Countdown);
```

```tsx | pure
import React from 'react';
import Countdown from './Countdown';

const App: React.FC = () => {
  const ref = React.useRef<React.ElementRef<typeof Countdown>>(null!); // assign null makes it compatible with elements.
  ref.current?.start();
  return <Countdown ref={ref} />;
};
```

#### vue3

```tsx | pure
<script setup lang="ts">
import xxx from './xxx'
const Child = ref<InstanceType<typeof xxx>>(null!)
</script>
```
