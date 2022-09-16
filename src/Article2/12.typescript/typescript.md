---
order: 3
nav:
  title: Article2
  path: /article2
---

# Typescript

## 1 准备阶段

```typescript
tsc hello.ts     =>  .ts
tsc --init
终端 ctrl+shift+b 监视tsc
或者在最上方 菜单 终端 运行任务 监视tsconfig.json
```

## 2. 概念

### 类型推断

```
如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查：
如果定义的时候赋值了  就推断成这个格式
```

### tsconfig

```js
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
```

### export

```js
# 兼容require
export = xxx;
import xxx = require('./xxx')
#
import fs = require("fs");
const code = fs.readFileSync("hello.ts", "utf8");
```

### namespace

```js
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

```js
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

```js
type ThisPointer = { name: '19Qingfeng' };
function xxx(this: ThisPointer) {
  this.name;
}
```

### 版本问题

```js
@types/react 要和ts版本对应 不然会报错
```

### 模板字符串

```js
type World = "world";
type Greeting = `hello ${World}`;
// type Greeting = "hello world"
# 如果是联合类型 就会有多种可能
```

## 3 数据类型

### 基本类型

| 数据类型         | 描述                                                         |
| ---------------- | ------------------------------------------------------------ |
| boolean          |                                                              |
| number           |                                                              |
| string           | 推荐单引号                                                   |
| Array            | Array<number> \|\| number [ ] \|\| string [ ] \|\| Array<T>  |
| tuple            | 元组 固定长度的数组 [string,string?]                         |
| Object           | 任意的 JS 对象 但是不能调用其他方法 即便它真的有             |
| any              | 任意类型                                                     |
| unknown          | 类型安全的 any 区别是 any 会把别的也推断成 any 他只推断自己  |
| null             | 可以赋给其他类型变量 但如果--strictNullChecks 就只能给自己   |
| undefined        | 可以赋给其他类型变量 但如果--strictNullChecks 就只能给自己   |
| void             | 函数没有返回值他的类型就是 void 只能 undefined null          |
| never            | 没有值 不能是任何值: 用于函数没有返回值 例如只用于报错的函数 |
| ReadonlyArray<T> | 让数组创建后不能修改 可以类型断言重写                        |

### 其他类型

| 数据类型          | 描述                                   |
| ----------------- | -------------------------------------- |
| ?:                | 可选属性                               |
| !:                | 非空断言 => ?.                         |
| !.                | 类型断言 去除 null undefined           |
| readonly          | 只读                                   |
| [xxx:string ]:any | 不规定后续内容类型                     |
| enum              | 枚举 只能赋值为 undefined 和 null      |
| 元组              | let x: [number, string] = [10, "jack"] |
| \|                | 联合类型 只能同时为一种                |
| &                 | 交叉类型 合并                          |
| Partial           | 可选类型合并 Partial <xxx & xxx>       |

## 4. 基本 API

### 定义变量

```typescript
# 变量: 数据类型
var hello: string =  'helloworld'
# 对象: {对象属性: 数据类型 , ...} = { xxx}
var user: {name: string, age: number}={ name:'jack',age: 15 }
let obj= {name:string} & {age:number}
// 任意类型 => 泛型
var c:{name:string,[xxx: string]:any};
# 数组
var arr: number[] = [1,2,3]
var arr: Array<number> = [1,2,3]
interface arr {
	[index: number]: number
}
// 指定某一个数组下的 每一个对象的属性
dataSource?: [{ [key: number]: Interface }]
// 或者这样
interface TestArr {
  username: string,
  password: number
}
interface arr {
  [xx: number]: TestArr
}
var arr: arr = [{ username: 'ss', password: 555 }]
```

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

- 起别名不会新建一个类型 - 它创建了一个新 名字来引用那个类型
  - 错误信息不会使用别名
  - 类型别名不能被 `extends`和 `implements`
- 如果无法通过接口来描述一个类型并且需要使用联合类型或元组类型，这时通常会使用类型别名

```typescript
# base
type str = string | number;
// 接口也可以用
// type str = 接口1 | 接口2
var str: str = "10"
str = 10
# 限制固定常量
type sex = '男' | '女'
# 函数别名
type newType = (x: number, y: number) => number
function sum(s: number, y: number): number {
  return x + y
}
const sum2: newType = sum
```

### 函数

```typescript
#
// 可选
name?:number
// 默认值
name: string = 20
# 箭头函数
const fn: <T>(arg: T) => T
# 函数的重载
function getInfo(name:string):string;
function getInfo(age:number):string;
function getInfo(s:any):any{
    if(typeof s==='string'){
        return '我叫:'+s;
    }else{
        return '我的年龄是'+s;
    }
}
 console.log(getInfo('张三'));   //正确
 console.log(getInfo(20));   //正确
// console.log(getInfo(true));    //错误写法 ts编译报错
# 可以直接传一个变量进去 会跳过ts检查
let prop = { colour: "red", width: 100 };
let aaa = fn(prop);
# 有属性的函数
// let myIdentity: { <Type>(arg: Type): Type } = identity;
type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}
# new
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

```typescript
 // 用于取值 并限定在一定范围  =>  会被编译成一个双向映射的对象
 // 默认从0开始递增 直到枚举进行反向映射
enum Days {
  Sun = 3,  // 一个设置值 其他也要设置
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat
}
let xxx = Days.Sun
# 常量枚举
const dnum xxx {

}
# 相同名称的枚举自动合并


#
enum Methods {
  'GET',
  'POST',
}
type ReqShape = {
  url: string;
  method: keyof typeof Methods;  // "GET" | "POST"
};
```

## 5.inerface

```js
# base
interface IPerson {
  readonly name: string | number,  // 只读
   age?: number,                   // 可选
   [propsName: string]: any        // 任意属性个数
}
let user: Person = {
   name:"zhuangsan",
   age: 18,
   ...
}
# 接口嵌套
interface TestArr {
  username: string,
  password: number
}
interface arr {
  [xx: number]: TestArr
}
var arr: arr = [{ username: 'ss', password: 555 }]
# 函数接口
interface aa {
  (name: string, age: number): number
}
const fm:aa = function(name:string,age:number){
  return 1
}
# 接口继承
interface 新的接口名 entends 接口名, 接口名{ }
# 接口重写
class xxx implements xxx {}
# 接口实现
class Car implements 接口名{ }
# 泛型结函数
interface Icreate<T>{
  (a:T,b:T):T
}
const a: Icreate<number> = 函数
# 传入的参数必须有length属性
function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}
// longerArray is of type 'number[]'
const longerArray = longest([1, 2], [1, 2, 3]);
// longerString is of type 'alice' | 'bob'
const longerString = longest('alice', 'bob');
// Error! Numbers don't have a 'length' property
const notOK = longest(10, 100);
// Argument of type 'number' is not assignable to parameter of type '{ length: number; }'.

```

## 6. 泛型

```js
#
指不预先指定具体类型 而使用时候再指定 的一种特性
function echo<T>(arg: T): T { return arg }
echo('4')  echo<string>('4')
function swap<T, U>(data: [T, U]): [U, T] { }
T[]
# 约束泛型
interface Inter {
  length: number
}
function fn<T extends Inter>(a: T): number {
  return a.length
}
fn(1)  // 报错 数字没有.length 必须要有.length


# 与接口结合
interface Icreate <T,U> {
  name:T;
  age:U;
}
let test:Icreate<number,string> = {name:5，age="ss"}
# 与函数的结合
interface Icreate {
  <T>(name: string, value: T): Array<T>
}
let aaaaaa: Icreate;
aaaaaa = function <T>(name: string, value: T): Array<T> {
  return []
}
var aaa: number[] = aaaaaa("zzhang", 5)
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

```js
#私有属性
```

### API

```js
# 遍历属性
Object.kes(实例名).forEach(key=>实例名[key])
# 遍历方法
className.prototype 不能通过 forEach遍历 // 构造函数 可以
Object.getOwnPropertyNames([className].prototype)
  .forEach(item=>[className].prototype[item])
```

### 类表达式

```js
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

```js
实例和父类能都访问;
```

#### static

```js
// 只能父类点出来
// 类似于直接在 Person.prototype.aaaa = '孙悟空'
//  constructor() { this.bbb = 12; }
class Person {
  static aaaa: string = ' 孙悟空';
  bbb: number = 12;
  bbb!: number = 12;
  [s: string]: boolean | ((s: string) => boolean);
}
const per = new Person()
console.log(Person.aaaa)
```

#### private

```js
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

```js
// protected  受保护的       外界无法访问 可以被继承
```

### readonly

```js
readonly ccc: string = 'ss'
static readonly ccc: string = 'ss'
只能在构造器里面修改
```

### get set

```js
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

### constructor

#### constructor

```js
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

```js
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

```js
子类重写方法 在子类中 会覆盖父类的方法
// 如果要加属性 必须写super 重写属性
```

### implements

```js
# implements  需要重写属性和方法
class A implements 接口{
   /**
    * @override
    */
}
// 不用定义 super() 可以重写 属性和方法
```

### abstract

```js
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

```js
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
 methodName:string, 函数名
 descriptor: PropertyDecorator 描述
)
```

## 9. 高级 API

### Partial

```js
// 可选类型
Partial <xxx & xxx>
```

### omit

```js
// 忽视重写某个属性
interface A {
  a: number;
  b: number;
}
interface B extends Omit<A, 'a'> {
  a: boolean;
}
```

### Record

```js
// 定义一个对象的 key 和 value
type keys = 'A' | 'B' | 'C'
const result: Record<keys, number> = {
  A: 1,
  B: 2,
  C: 3
}
#
type Record<K extends string, T> = {
    [P in K]: T;
}
```

### typeof

```js
// 自动推断后续的属性
```

### keyof

```js
# 只会返回 number string symbol类型 其他需要自己 & || Exclude
# keyof 可以用来取得一个对象接口的所有 key 值.
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
#
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

### in

```js
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

```js
function isNumber(x: any): x is number { //默认传入的是number类型
  return typeof x === "number";
}

console.log(isNumber(7)) // true
console.log(isNumber('7')) //false
console.log(isNumber(true)) //false
```

### Pick

```js
# 从复合类型中 取出几个想要的类型组合
type Pick<T, K extends keyof T> = {
	[key in K]: T[key]
}
# Pick<接口,'key1','key2'>
interface Props {
  name: string;
  label: number;
  value: boolean;
}

type ChildrenProps = Pick<Props, 'name' | 'label'>;
```

### infer

```js
表示在 extends 条件语句中待推断的类型变量
    type Info<T> = T extends { a: infer U; b: infer U } ? U : never;

    type Props = Info<{ a: string; b: number }>; // Props类： string | number

    type Props1 = Info<number> // Props类型： never
```

## 10. 其他

### 工具函数

```js
# 覆盖接口属性
/**
 * Returns object T, but with T[K] overridden to type U.
 * @example
 * type MyObject = { a: number, b: string }
 * OverrideProperty<MyObject, "a", string> // returns { a: string, b: string }
 */
export type OverrideProperty<T, K extends keyof T, U> = Omit<T, K> & { [P in keyof Pick<T, K>]: U };
# 第二种方法
type Modify<T, R> = Omit<T, keyof R> & R;

# 深的Partial

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};
# 深的Required
type DeepRequired<T> = {
  [K in keyof T]-?: T[K] extends object ? DeepRequired<T[K]> : T[K];
};


# 提取公众属性
type CommonKeys = Extract<keyof Worker, keyof Student>
# 差集 worKer在student中不存在的key
type ExcludeKeys = Exclude<keyof Worker, keyof Student>

  # 元组转联合类型
type TTuple = [string, number];
type Res = TTuple[number];  // string | number

# 元组转 &
 type UnionToIntersection<U> =
  (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;

type Result = UnionToIntersection<string | number>; // string & number
```

### 高级泛型

```js
Readonly<T>
ReadonlyArray<T>
Partial<T>
Required<T>
```

### 操作符

```js
# Uppercase 把每个字符转为大写形式：
type Greeting = "Hello, world"
type ShoutyGreeting = Uppercase<Greeting>
// type ShoutyGreeting = "HELLO, WORLD"

type ASCIICacheKey<Str extends string> = `ID-${Uppercase<Str>}`
type MainID = ASCIICacheKey<"my_app">
// type MainID = "ID-MY_APP"

# Lowercase
type Greeting = "Hello, world"
type QuietGreeting = Lowercase<Greeting>
// type QuietGreeting = "hello, world"

type ASCIICacheKey<Str extends string> = `id-${Lowercase<Str>}`
type MainID = ASCIICacheKey<"MY_APP">
// type MainID = "id-my_app"


# Capitalize 字符串的第一个字符转为大写形式
type LowercaseGreeting = "hello, world";
type Greeting = Capitalize<LowercaseGreeting>;
// type Greeting = "Hello, world"


# Uncapitalize
type UppercaseGreeting = "HELLO WORLD";
type UncomfortableGreeting = Uncapitalize<UppercaseGreeting>;
// type UncomfortableGreeting = "hELLO WORLD"
```

### 映射修饰符

```js
readonly ? - + 没写等于使用了+
#
// 删除属性中的只读属性
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

#
// 删除属性中的可选属性
type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

# as
type MappedTypeWithNewProperties<Type> = {
    [Properties in keyof Type as NewKeyType]: Type[Properties]
}
```

### 条件类型

```js
# Exclude
// Exclude 针对联合类型 omit针对 key和value
let a: string | number;
type CustomType = Exclude<typeof a, string>; // number类型
Exclude<T, U> -- 从T中剔除可以赋值给U的类型。
Extract<T, U> -- 提取T中可以赋值给U的类型。
NonNullable<T> -- 从T中剔除null和undefined。
#  ReturnType<T> -- 获取函数返回值类型。
// type T0 = string
type T0 = ReturnType<() => string>;
#
InstanceType<T> -- 获取构造函数类型的实例类型。
```

### 索引访问类型

```js
```

### 拆包

```js
function unproxify<T>(t: Proxify<T>): T {
    let result = {} as T;
    for (const k in t) {
        result[k] = t[k].get();
    }
    return result;
}

let originalProps = unproxify(proxyProps);

```

## 11. react 接口

```js
# class 基类
 class xxx extends React.Component<PropType, StateType>{

 }
# 函数组件
xxx: React.FunctionComponent | FC
```

```js
# react组件接口
import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
# react组件props接口
React.ComponentProps<'button'>
# jsx
React.ReactNode
# css
React.CSSProperties
# children
React.FunctionComponentElement
# 事件
onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
React.FormEvent<HTMLInputElement>

onSubmit: e: React.SyntheticEvent
e.target as typeof e.target & {
  email: {value: string }
}
e.target.email.value
#
# promise
Promise<string[]>
# 键盘事件
e:React.KeyboardEvent
# props
React.ButtonHTMLAttributes<HTMLButtonElement>
# 组件实例

// class直接写
const test = React.useRef<InstanceType<typeof Test>>(null!);

// hook需要
  const ref = useRef<RefObject>(null);

const Child = forwardRef((props, ref: Ref<RefObject>) => {
}
```

```js
# useRef
const divRef = useRef<HTMLDivElement>(null);
if (!divRef.current) throw Error("divRef is not assigned");
divRef.current

const divRef = useRef<HTMLDivElement>(null!);
# forwardRefs
ref: React.Ref<HTMLButtonElement> | null

# 导出props
  type ComponentProps<T> = T extends
  | React.ComponentType<infer P>
  | React.Component<infer P>
  ? JSX.LibraryManagedAttributes<T, P>
  : never;

const TestComponent = (props: ComponentProps<typeof GreetComponent>) => {
  return <h1 />;
};

// No error
const el = <TestComponent name="foo" />;

#
JSX.Element-> 返回值React.createElement
React.ReactNode-> 组件的返回值
```

- hook-ref1

```js
#
import React from 'react'
import Countdown, { CountdownHandle } from "./Countdown";

function App() {
  const countdownEl = React.useRef<CountdownHandle>(null);

  React.useEffect(() => {
    if (countdownEl.current) {

      countdownEl.current.a = 10
    }
  }, []);

  return <Countdown ref={countdownEl} />;
}
#
import React from 'react'
export type CountdownHandle = {
  start: () => void;
  a: number
};

type Props = {};

const Countdown = React.forwardRef<CountdownHandle, Props>((props, ref) => {
  React.useImperativeHandle(ref, () => ({
    // start() has type inferrence here
    start() {
      alert('Start');
    },
    a: 1
  }));

  return <div>Countdown</div>;
});

export default Countdown
```

- hook ref2

```js
#
import React from "react";
type CountdownHandle = {
  start: () => void,
}
type CountdownProps = {}
const Countdown: React.ForwardRefRenderFunction<CountdownHandle, CountdownProps> = (
  props,
  forwardedRef,
) => {
  React.useImperativeHandle(forwardedRef, () => ({
    start() {
      alert('Start');
    }
  }));
  return <div>Countdown</div>;
}

export default React.forwardRef(Countdown);
#
import React from "react";
import Countdown from './Countdown'

const App: React.FC = () => {
  const ref = React.useRef<React.ElementRef<typeof Countdown>>(null); // assign null makes it compatible with elements.
  ref.current?.start()
  return (
    <Countdown ref={ref} />
  );
};
```

- class

```js
import React from 'react'
export default class HookUseHookRef extends React.Component {
  b = () => {
  }
  render() {
    return (
      <>
        HookUseHookRef
      </>
    )
  }
}

class AAA extends React.Component {
  myRef = React.createRef<InstanceType<typeof HookUseHookRef>>()
  state = {
  }

  backgroundOrigin = () => {
    this.myRef.current?.b()
  }

  render() {
    return (
      <>
        <HookUseHookRef ref={this.myRef} />
      </>
    )
  }
}
```

## 12 问题

### bind

```js
bind会丢失类型
1.使用箭头函数
2.手动指定
const add: typeof adder.add = adder.add.bind(adder);
3.柯里化
```
