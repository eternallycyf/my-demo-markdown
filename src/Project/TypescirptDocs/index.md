---
order: 3
group:
  path: /TypescirptDocs
  title: TypescirptDocs
---

## TypescirptDocs

# ts | pure 注释文档

```md
https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html

https://jsdoc.app/

https://google.github.io/styleguide/jsguide.html
```

## 基本类型

### @type

```ts | pure
# @type 描述类型 变量的注释
  @type {string|boolean} {Window} {HTMLElement}
  {(s: string, b: boolean) => number}
  {Function}
  {const}
  {接口}
  {typeof import('./xxx').xxx}
  {*}  =>   any
  {?}  =>   unknown
  var xxx;
```

### @typedef

```ts | pure
# @typedef 添加注释接口 别的地方可以直接用@typedef定义的
  @typedef {string} A
  @type {A}
```

### @filename

```ts | pure
# @filename 导入文件
  ts: @filename: types.d.ts
  js: @param { import("./types").Pet } p
```

### @param

```ts | pure
# @param 描述参数 和type方式一样 但是加了参数名
  @param {string} 参数名
         {string} [p]         可选
         {string} [p1='test'] 可选+默认值
         {string} options.prop1
```

### @returns

```ts | pure
# 返回值 @returns
  @returns {Promise<string[]>}
```

### @property

```ts | pure
# 对象的属性 @property
  @property {string} [prop1='1']
  @prop {string} [prop1='1']
```

### @callback

```ts | pure
# 指定回调函数类型 @callback
  @callback requestCallback
```

### @template

```ts | pure
# 泛型 @template
  @template T
  @template [T=object] 默认值
  @template U,V
  @param {T} x
  @template {string} T
```

### @emum

```ts | pure
# emum
  @emum {number}
  @enum {function(number): number}
```

## class

```ts | pure
#
class Demo {
  /**
   * @param {number} data
   */
  constructor(data){
    this.name = 'foo';
    /** @type {string | null} */
    this.title = null
  }

  /**
   * @param
   */
  init(s){

  }
}
#
/** @public */
/** @private */
/** @protected */
/** @readonly */
/** @override */  覆盖基类方法上使用
/** @implements {重构的方法名} */
# 继承
/**
 * @template T
 * @extends {Set<T>}
 */
class SortableSet extends Set {
  // ...
}
# constructor
添加后检查更严格  this
@constructor
```

## 其他

```ts | pure
# this
@this {HTMLElement}

# 当一个函数被弃用时 会加入一个删除线
/** @deprecated */

# @see 链接到程序中的其他名称 点击会跳转
type Box<T> = { t: T }
/** @see Box for implementation details */
type Boxify<T> = { [K in keyof T]: Box<T> };

# @link 可以在任何标签里面使用 和@see一样
  @link xxx 文字

# @author 作者
  @author Jun <xxx@qq.com>

# 可以为空的类型
  @type {!number}
```
