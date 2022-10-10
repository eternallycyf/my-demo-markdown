(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{nN7D:function(m,u,a){"use strict";a.r(u);var o=a("cDcd"),e=a.n(o),n=a("dEAq"),d=a.n(n),c=a("M/Q6"),t=a("H1Ra");const i=e.a.memo(({demos:r})=>e.a.createElement(e.a.Fragment,null,e.a.createElement("div",{className:"markdown"},e.a.createElement("p",null,e.a.createElement(c.a,null,"\u5F85\u6574\u7406 \u6574\u7406\u540E\u5C06\u79FB\u52A8\u5230\u5176\u4ED6\u5730\u65B9")),e.a.createElement("h1",{id:"\u6211\u7684-typescript-\u76F8\u5173\u4EE3\u7801"},e.a.createElement(n.AnchorLink,{to:"#\u6211\u7684-typescript-\u76F8\u5173\u4EE3\u7801","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u6211\u7684 TypeScript \u76F8\u5173\u4EE3\u7801"),e.a.createElement("h2",{id:"enum"},e.a.createElement(n.AnchorLink,{to:"#enum","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"enum"),e.a.createElement("ul",null,e.a.createElement("li",null,e.a.createElement(n.Link,{to:"https://www.typescriptlang.org/docs/handbook/enums.html#const-enums"},"const enum \u548C enum \u7684\u533A\u522B")),e.a.createElement("li",null,"const enum \u5728\u8BA1\u7B97\u65F6\u4F1A\u81EA\u52A8\u6E05\u9664\u5197\u4F59\u7684\u8F6C\u6362\u4EE3\u7801")),e.a.createElement(t.a,{code:`enum Methods {
  'GET',
  'POST',
}
type ReqShape = {
  url: string;
  method: keyof typeof Methods; // "GET" | "POST"
};`,lang:"ts"}),e.a.createElement("h2",{id:"infer"},e.a.createElement(n.AnchorLink,{to:"#infer","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"infer"),e.a.createElement(t.a,{code:`// 1.\u83B7\u53D6\u7D22\u5F15\u7C7B\u578B
// type Flatten<T> = T extends any[] ? T[number] : T;
type Flatten<T> = T extends Array<infer Item> ? Item : T;

// 2.\u83B7\u53D6\u4E00\u4E2A\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u7C7B\u578B
type GetReturnType<Type> = Type extends (...args: never[]) => infer Return
  ? Return
  : never;
type Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>;
// type Bools = boolean[]

// 3.\u5206\u53D1\u6761\u4EF6\u7C7B\u578B\u7684\u5904\u7406
// \u4F20\u5165\u8054\u5408\u7C7B\u578B\u5C31\u4F1A\u53D8\u6210\u5206\u53D1
type ToArray<Type> = Type extends any ? Type[] : never;
type StrArrOrNumArr = ToArray<string | number>;
// type StrArrOrNumArr = string[] | number[]

type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;
// 'StrArrOrNumArr' is no longer a union.
type StrArrOrNumArr = ToArrayNonDist<string | number>;
// type StrArrOrNumArr = (string | number)[]`,lang:"ts"}),e.a.createElement("h2",{id:"\u7D22\u5F15\u8BBF\u95EE\u7C7B\u578B"},e.a.createElement(n.AnchorLink,{to:"#\u7D22\u5F15\u8BBF\u95EE\u7C7B\u578B","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u7D22\u5F15\u8BBF\u95EE\u7C7B\u578B"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u4F5C\u4E3A\u7D22\u5F15\u7684\u53EA\u80FD\u662F\u7C7B\u578B")),e.a.createElement(t.a,{code:`type Person = { age: number; name: string; alive: boolean };
type I1 = Person['age' | 'name'];
// type I1 = string | number

type I2 = Person[keyof Person];
// type I2 = string | number | boolean

type AliveOrName = 'alive' | 'name';
type I3 = Person[AliveOrName];
// type I3 = string | boolean

const MyArray = [
  { name: 'Alice', age: 15 },
  { name: 'Bob', age: 23 },
  { name: 'Eve', age: 38 },
];

type Person = typeof MyArray[number];
// type Person = {
// name: string;
// age: number;
// }

type Age = typeof MyArray[number][\u201Cage\u201D];
// type Age = number
// Or

type Age2 = Person[\u201Cage\u201D];
// type Age2 = number

const APP = ['TaoBao', 'Tmall', 'Alipay'] as const;
type app = typeof APP[number];
// type app = \u201CTaoBao\u201D | \u201CTmall\u201D | \u201CAlipay\u201D`,lang:"ts"}),e.a.createElement("h2",{id:"\u6620\u5C04\u7C7B\u578B"},e.a.createElement(n.AnchorLink,{to:"#\u6620\u5C04\u7C7B\u578B","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u6620\u5C04\u7C7B\u578B"),e.a.createElement(t.a,{code:`// \u904D\u5386\u6240\u6709\u5C5E\u6027 \u90FD\u53D8\u6210\u5E03\u5C14\u7C7B\u578B
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};
// \u6620\u5C04\u4FEE\u9970\u7B26: readonly ? - +
// 1.\u5220\u9664\u5C5E\u6027\u4E2D\u7684\u53EA\u8BFB\u5C5E\u6027
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};
// 2.\u5220\u9664\u5C5E\u6027\u4E2D\u7684\u53EF\u9009\u5C5E\u6027
type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};`,lang:"ts"}),e.a.createElement("ul",null,e.a.createElement("li",null,"as")),e.a.createElement(t.a,{code:`// \u901A\u8FC7\u6A21\u677F\u5B57\u9762\u91CF\u521B\u5EFA\u4E00\u4E2A\u65B0\u5C5E\u6027\u540D
type Getters<Type> = {
  [Property in keyof Type as \`get\${Capitalize<string & Property>}\`]: () => Type[Property]
};
interface Person {
  name: string;
  age: number;
  location: string;
}
type LazyPerson = Getters<Person>;
// type LazyPerson = {
//    getName: () => string;
//    getAge: () => number;
//    getLocation: () => string;
// }`,lang:"ts"}),e.a.createElement("h2",{id:"\u6A21\u677F\u5B57\u9762\u91CF\u7C7B\u578B"},e.a.createElement(n.AnchorLink,{to:"#\u6A21\u677F\u5B57\u9762\u91CF\u7C7B\u578B","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u6A21\u677F\u5B57\u9762\u91CF\u7C7B\u578B"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u53EA\u80FD\u7528\u4E8E\u7C7B\u578B"),e.a.createElement("li",null,"\u5982\u679C\u662F\u8054\u5408\u7C7B\u578B \u5C31\u4F1A\u663E\u793A\u6240\u6709\u7684\u5B57\u9762\u91CF\u4EA4\u53C9\u540E\u7684\u53EF\u80FD\u6027")),e.a.createElement(t.a,{code:`const person = makeWatchedObject({
firstName: "Saoirse",
lastName: "Ronan",
age: 26
});
// \u7ED9\u4E8B\u4EF6\u52A0\u4E00\u4E2AChanged\u540E\u7F00
// \u5FC5\u987Bstring & keyof Type \u56E0\u4E3Akeyof\u53EA\u80FD\u662Fstring number symbol \u6A21\u677F\u5B57\u7B26\u4E32\u7684\u662F string | number | bigint | boolean | null | undefined
type PropEventSource<Type> = {
  on(eventName: \`\${string & keyof Type}Changed\`, callback: (newValue: any) => void): void;
};
declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>;

// \u6216\u8005\u8FD9\u6837
type PropEventSource<Type> = {
on(eventName: \${Exclude<keyof Type, symbol>}Changed, callback: (newValue: any) => void): void;
};

// \u6216\u8005\u8FD9\u6837
type PropEventSource<Type> = {
on(eventName: \${Extract<keyof Type, string>}Changed, callback: (newValue: any) => void): void;
};

person.on("firstNameChanged", () => {});`,lang:"ts"}),e.a.createElement("ul",null,e.a.createElement("li",null,"\u6A21\u677F\u5B57\u7B26\u4E32\u7684\u63A8\u65AD")),e.a.createElement(t.a,{code:`// \u5C06 on \u53D8\u6210\u4E86\u4E00\u4E2A\u6CDB\u578B
type PropEventSource<Type> = {
    on<Key extends string & keyof Type>
        (eventName: \`\${Key}Changed\`, callback: (newValue: Type[Key]) => void ): void;
};

declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>;

const person = makeWatchedObject({
  firstName: "Saoirse",
  lastName: "Ronan",
  age: 26
});

person.on("firstNameChanged", newName => {
                                                          // (parameter) newName: string
    console.log(\`new name is \${newName.toUpperCase()}\`);
});

person.on("ageChanged", newAge => {
    // (parameter) newAge: number
    if (newAge < 0) {
        console.warn("warning! negative age");
    }
})`,lang:"ts"}),e.a.createElement("h2",{id:"\u5185\u7F6E\u5B57\u7B26\u64CD\u4F5C\u7C7B\u578B"},e.a.createElement(n.AnchorLink,{to:"#\u5185\u7F6E\u5B57\u7B26\u64CD\u4F5C\u7C7B\u578B","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5185\u7F6E\u5B57\u7B26\u64CD\u4F5C\u7C7B\u578B"),e.a.createElement(t.a,{code:`// 1.Uppercase
type Greeting = "Hello, world"
type ShoutyGreeting = Uppercase<Greeting>
// type ShoutyGreeting = "HELLO, WORLD"
type ASCIICacheKey<Str extends string> = \`ID-\${Uppercase<Str>}\`
type MainID = ASCIICacheKey<"my_app">
// type MainID = "ID-MY_APP"


// 2.Lowercase
type Greeting = "Hello, world"
type QuietGreeting = Lowercase<Greeting>
// type QuietGreeting = "hello, world"

type ASCIICacheKey<Str extends string> = \`id-\${Lowercase<Str>}\`
type MainID = ASCIICacheKey<"MY_APP">
// type MainID = "id-my_app"

// 3.Capitalize \u628A\u5B57\u7B26\u4E32\u7684\u7B2C\u4E00\u4E2A\u5B57\u7B26\u8F6C\u4E3A\u5927\u5199\u5F62\u5F0F
type LowercaseGreeting = "hello, world";
type Greeting = Capitalize<LowercaseGreeting>;
// type Greeting = "Hello, world"

// 4.Uncapitalize \u628A\u5B57\u7B26\u4E32\u7684\u7B2C\u4E00\u4E2A\u5B57\u7B26\u8F6C\u6362\u4E3A\u5C0F\u5199\u5F62\u5F0F\uFF1A
type UppercaseGreeting = "HELLO WORLD";
type UncomfortableGreeting = Uncapitalize<UppercaseGreeting>;
// type UncomfortableGreeting = "hELLO WORLD"`,lang:"ts"}),e.a.createElement("h2",{id:"utility-types"},e.a.createElement(n.AnchorLink,{to:"#utility-types","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),e.a.createElement(n.Link,{to:"https://www.typescriptlang.org/docs/handbook/utility-types.html#awaitedtype"},"Utility Types")),e.a.createElement("h3",{id:"awaitedtype"},e.a.createElement(n.AnchorLink,{to:"#awaitedtype","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),e.a.createElement("code",null,"Awaited<Type>")),e.a.createElement(t.a,{code:"",lang:"ts"}),e.a.createElement("h3",{id:"partialtype"},e.a.createElement(n.AnchorLink,{to:"#partialtype","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),e.a.createElement("code",null,"Partial<Type>")),e.a.createElement("ul",null,e.a.createElement("li",null,"\u4F20\u5165\u7684\u5C5E\u6027\u53D8\u6210\u53EF\u9009"),e.a.createElement("li",null,e.a.createElement("code",null,"type Partial<T> = ","{"," [P in keyof T]?: T[P] ","}",";"))),e.a.createElement("h3",{id:"requiredtype"},e.a.createElement(n.AnchorLink,{to:"#requiredtype","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),e.a.createElement("code",null,"Required<Type>")),e.a.createElement("ul",null,e.a.createElement("li",null,"\u5C06\u4F20\u5165\u7684\u5C5E\u6027\u53D8\u4E3A\u5FC5\u9009\u9879"),e.a.createElement("li",null,e.a.createElement("code",null,"type Required<T> = ","{"," [P in keyof T]-?: T[P] ","}",";"))),e.a.createElement("h3",{id:"readonlytype"},e.a.createElement(n.AnchorLink,{to:"#readonlytype","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),e.a.createElement("code",null,"Readonly<Type>")),e.a.createElement("ul",null,e.a.createElement("li",null,"\u5C06\u4F20\u5165\u7684\u5C5E\u6027\u53D8\u4E3A\u53EA\u8BFB"),e.a.createElement("li",null,e.a.createElement("code",null,"type Readonly<T> = ","{"," readonly [P in keyof T]: T[P] ","}",";"))),e.a.createElement("h3",{id:"recordkeys-type"},e.a.createElement(n.AnchorLink,{to:"#recordkeys-type","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),e.a.createElement("code",null,"Record<Keys, Type>")),e.a.createElement("ul",null,e.a.createElement("li",null,"\u5C06 K \u4E2D\u6240\u6709\u7684\u5C5E\u6027\u7684\u503C\u8F6C\u5316\u4E3A T \u7C7B\u578B(\u5B9A\u4E49\u4E00\u4E2A\u63A5\u53E3\u7684 key \u548C value)"),e.a.createElement("li",null,e.a.createElement("code",null,"type Record<K extends keyof any, T> = ","{"," [P in K]: T ","}",";"))),e.a.createElement(t.a,{code:`type keys = 'A' | 'B' | 'C';
const result: Record<keys, number> = {
  A: 1,
  B: 2,
  C: 3,
};`,lang:"ts"}),e.a.createElement("h3",{id:"picktype-keys"},e.a.createElement(n.AnchorLink,{to:"#picktype-keys","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),e.a.createElement("code",null,"Pick<Type, Keys>")),e.a.createElement("ul",null,e.a.createElement("li",null,"\u4ECE T \u4E2D\u53D6\u51FA \u4E00\u7CFB\u5217 K \u7684\u5C5E\u6027"),e.a.createElement("li",null,e.a.createElement("code",null,"type Pick<T, K extends keyof T> = ","{"," [P in K]: T[P] ","}",";"))),e.a.createElement(t.a,{code:`// Pick<\u63A5\u53E3,'key1','key2',...>
interface Props {
  name: string;
  label: number;
  value: boolean;
}
type ChildrenProps = Pick<Props, 'name' | 'label'>;`,lang:"ts"}),e.a.createElement("h3",{id:"omittype-keys"},e.a.createElement(n.AnchorLink,{to:"#omittype-keys","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),e.a.createElement("code",null,"Omit<Type, Keys>")),e.a.createElement(t.a,{code:`// \u5FFD\u89C6\u91CD\u5199\u67D0\u4E2A\u5C5E\u6027
interface A {
  a: number;
  b: number;
}
interface B extends Omit<A, 'a'> {
  a: boolean;
}`,lang:"ts"}),e.a.createElement("h3",{id:"excludeuniontype-excludedmembers"},e.a.createElement(n.AnchorLink,{to:"#excludeuniontype-excludedmembers","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),e.a.createElement("code",null,"Exclude<UnionType, ExcludedMembers>")),e.a.createElement("ul",null,e.a.createElement("li",null,"\u4ECE T \u4E2D\u5254\u9664\u53EF\u4EE5\u8D4B\u503C\u7ED9 U \u7684\u7C7B\u578B"),e.a.createElement("li",null,e.a.createElement("code",null,"type Exclude<T, U> = T extends U ? never : T;"))),e.a.createElement("h3",{id:"extracttype-union"},e.a.createElement(n.AnchorLink,{to:"#extracttype-union","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),e.a.createElement("code",null,"Extract<Type, Union>")),e.a.createElement("ul",null,e.a.createElement("li",null,"\u63D0\u53D6 T \u4E2D\u53EF\u4EE5\u8D4B\u503C\u7ED9 U \u7684\u7C7B\u578B"),e.a.createElement("li",null,e.a.createElement("code",null,"type Extract<T, U> = T extends U ? T : never;"))),e.a.createElement("h3",{id:"nonnullabletype"},e.a.createElement(n.AnchorLink,{to:"#nonnullabletype","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),e.a.createElement("code",null,"NonNullable<Type>")),e.a.createElement("ul",null,e.a.createElement("li",null,"\u4ECE T \u4E2D\u5254\u9664 null \u548C undefined"),e.a.createElement("li",null,e.a.createElement("code",null,"type NonNullable<T> = T extends null | undefined ? never : T;"))),e.a.createElement("h3",{id:"parameterstype"},e.a.createElement(n.AnchorLink,{to:"#parameterstype","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),e.a.createElement("code",null,"Parameters<Type>")),e.a.createElement(t.a,{code:`/**
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
type D = Parameters<typeof Math.max>; // number[]`,lang:"ts"}),e.a.createElement("h3",{id:"constructorparameterstype"},e.a.createElement(n.AnchorLink,{to:"#constructorparameterstype","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),e.a.createElement("code",null,"ConstructorParameters<Type>")),e.a.createElement(t.a,{code:`/**
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
// [string, (string | undefined)?]`,lang:"ts"}),e.a.createElement("h3",{id:"returntypetype"},e.a.createElement(n.AnchorLink,{to:"#returntypetype","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),e.a.createElement("code",null,"ReturnType<Type>")),e.a.createElement("ul",null,e.a.createElement("li",null,"\u83B7\u53D6\u51FD\u6570\u8FD4\u56DE\u503C\u7C7B\u578B"),e.a.createElement("li",null,e.a.createElement("code",null,"type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;"))),e.a.createElement(t.a,{code:"type T0 = ReturnType<() => string>;",lang:"ts"}),e.a.createElement("h3",{id:"instancetypetype"},e.a.createElement(n.AnchorLink,{to:"#instancetypetype","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),e.a.createElement("code",null,"InstanceType<Type>")),e.a.createElement("ul",null,e.a.createElement("li",null,"\u83B7\u53D6\u6784\u9020\u51FD\u6570\u7C7B\u578B\u7684\u5B9E\u4F8B\u7C7B\u578B")),e.a.createElement(t.a,{code:`/**
 * Obtain the return type of a constructor function type
 */
type InstanceType<T extends new (...args: any[]) => any> = T extends new (
  ...args: any[]
) => infer R
  ? R
  : any;
type A = InstanceType<ErrorConstructor>; // Error
type B = InstanceType<FunctionConstructor>; // Function
type C = InstanceType<RegExpConstructor>; // RegExp`,lang:"ts"}),e.a.createElement("h3",{id:"thisparametertypetype"},e.a.createElement(n.AnchorLink,{to:"#thisparametertypetype","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),e.a.createElement("code",null,"ThisParameterType<Type>")),e.a.createElement(t.a,{code:"",lang:"ts"}),e.a.createElement("h3",{id:"omitthisparametertype"},e.a.createElement(n.AnchorLink,{to:"#omitthisparametertype","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),e.a.createElement("code",null,"OmitThisParameter<Type>")),e.a.createElement(t.a,{code:"",lang:"ts"}),e.a.createElement("h3",{id:"thistypetype"},e.a.createElement(n.AnchorLink,{to:"#thistypetype","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),e.a.createElement("code",null,"ThisType<Type>")),e.a.createElement(t.a,{code:"",lang:"ts"}),e.a.createElement("h2",{id:"\u6211\u7684\u5DE5\u5177\u51FD\u6570"},e.a.createElement(n.AnchorLink,{to:"#\u6211\u7684\u5DE5\u5177\u51FD\u6570","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u6211\u7684\u5DE5\u5177\u51FD\u6570"),e.a.createElement("h3",{id:"overrideproperty"},e.a.createElement(n.AnchorLink,{to:"#overrideproperty","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"OverrideProperty"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u8986\u76D6\u63A5\u53E3\u5C5E\u6027")),e.a.createElement(t.a,{code:`/**
 * Returns object T, but with T[K] overridden to type U.
 * @example
 * type MyObject = { a: number, b: string }
 * OverrideProperty<MyObject, "a", string> // returns { a: string, b: string }
 */
export type OverrideProperty<T, K extends keyof T, U> = Omit<T, K> &
  { [P in keyof Pick<T, K>]: U };

// type Modify<T, R> = Omit<T, keyof R> & R;`,lang:"ts"}),e.a.createElement("h3",{id:"deeppartial"},e.a.createElement(n.AnchorLink,{to:"#deeppartial","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"DeepPartial"),e.a.createElement(t.a,{code:`type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};`,lang:"ts"}),e.a.createElement("h3",{id:"deeprequired"},e.a.createElement(n.AnchorLink,{to:"#deeprequired","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"DeepRequired"),e.a.createElement(t.a,{code:`type DeepRequired<T> = {
  [K in keyof T]-?: T[K] extends object ? DeepRequired<T[K]> : T[K];
};`,lang:"ts"}),e.a.createElement("h3",{id:"getcommonkeys"},e.a.createElement(n.AnchorLink,{to:"#getcommonkeys","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"GetCommonKeys"),e.a.createElement(t.a,{code:`// \u63D0\u53D6\u516C\u4F17\u5C5E\u6027
type CommonKeys = Extract<keyof Worker, keyof Student>;`,lang:"ts"}),e.a.createElement("h3",{id:"deletepartial"},e.a.createElement(n.AnchorLink,{to:"#deletepartial","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"DeletePartial"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u5220\u9664\u5C5E\u6027\u4E2D\u7684\u53EF\u9009\u5C5E\u6027")),e.a.createElement(t.a,{code:`type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};`,lang:"ts"}),e.a.createElement("h3",{id:"\u5DEE\u96C6"},e.a.createElement(n.AnchorLink,{to:"#\u5DEE\u96C6","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5DEE\u96C6"),e.a.createElement("ul",null,e.a.createElement("li",null,"worKer \u5728 student \u4E2D\u4E0D\u5B58\u5728\u7684 key")),e.a.createElement(t.a,{code:"type ExcludeKeys = Exclude<keyof Worker, keyof Student>;",lang:"ts"}),e.a.createElement("h3",{id:"tuple--union"},e.a.createElement(n.AnchorLink,{to:"#tuple--union","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"tuple => union"),e.a.createElement("ul",null,e.a.createElement("li",null,"[string, number] -> string | number")),e.a.createElement(t.a,{code:`type TTuple = [string, number];
type Res = TTuple[number]; // string | number`,lang:"ts"}),e.a.createElement("h3",{id:"union--intersection"},e.a.createElement(n.AnchorLink,{to:"#union--intersection","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"union => intersection"),e.a.createElement("ul",null,e.a.createElement("li",null,"T1 | T2 -> T1 & T2")),e.a.createElement(t.a,{code:`type UnionToIntersection<U> = (U extends any
? (k: U) => void
: never) extends (k: infer I) => void
  ? I
  : never;

type Result = UnionToIntersection<T1 | T2>; // T1 & T2`,lang:"ts"}),e.a.createElement("h2",{id:"\u64CD\u4F5C\u7B26"},e.a.createElement(n.AnchorLink,{to:"#\u64CD\u4F5C\u7B26","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u64CD\u4F5C\u7B26"),e.a.createElement("ul",null,e.a.createElement("li",null,e.a.createElement("p",null,e.a.createElement(n.Link,{to:""},"\u6620\u5C04\u4FEE\u9970\u7B26"))),e.a.createElement("li",null,e.a.createElement("p",null,"in")),e.a.createElement("li",null,e.a.createElement("p",null,"is"),e.a.createElement("ul",null,e.a.createElement("li",null,"this is Networked & this"),e.a.createElement("li",null,"this is ","{"," value: T ","}"),e.a.createElement("li",null,"\u7528\u4E8E\u7C7B\u578B\u6536\u7A84 arr is number[]"))),e.a.createElement("li",null,e.a.createElement("p",null,"[]")),e.a.createElement("li",null,e.a.createElement("p",null,"!.xxx")),e.a.createElement("li",null,e.a.createElement("p",null,"!:string")),e.a.createElement("li",null,e.a.createElement("p",null,"as")),e.a.createElement("li",null,e.a.createElement("p",null,"readonly")),e.a.createElement("li",null,e.a.createElement("p",null,"?"))),e.a.createElement("h2",{id:"type-\u4E0E-interface-\u7684\u533A\u522B"},e.a.createElement(n.AnchorLink,{to:"#type-\u4E0E-interface-\u7684\u533A\u522B","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"type \u4E0E interface \u7684\u533A\u522B"),e.a.createElement("ul",null,e.a.createElement("li",null,e.a.createElement(n.Link,{to:"https://www.typescriptlang.org/docs/handbook/advanced-types.html#interfaces-vs-type-aliases"},"https://www.typescriptlang.org/docs/handbook/advanced-types.html#interfaces-vs-type-aliases")),e.a.createElement("li",null,"\u540C\u540D\u7684 type \u4E0D\u4F1A\u81EA\u52A8\u5408\u5E76"),e.a.createElement("li",null,"type \u53EF\u4EE5\u4F7F\u7528\u6A21\u677F\u5B57\u9762\u91CF \u7D22\u5F15\u8BBF\u95EE\u7C7B\u578B\u7B49\u7279\u6027"),e.a.createElement("li",null,"...")),e.a.createElement("h2",{id:"\u63D0\u53D6\u51FD\u6570\u7C7B\u578B"},e.a.createElement(n.AnchorLink,{to:"#\u63D0\u53D6\u51FD\u6570\u7C7B\u578B","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u63D0\u53D6\u51FD\u6570\u7C7B\u578B"),e.a.createElement(t.a,{code:`interface Action<T> {
  payload?: T;
  type: string;
}

interface Module {
  count: number;
  message: string;
  asyncMethod<T, U>(input: Promise<T>): Promise<Action<U>>;
  syncMethod<T, U>(action: Action<T>): Action<U>;
}

type FuncName<T> = {
  [P in keyof T]: T[P] extends Function ? P : never;
}[keyof T];

type Connect = (module: Module) => { [T in FuncName<Module>]: Module[T] };
/*
 * type Connect = (module: Module) => {
 *   asyncMethod: <T, U>(input: Promise<T>) => Promise<Action<U>>;
 *   syncMethod: <T, U>(action: Action<T>) => Action<U>;
 * }
 */`,lang:"ts"}),e.a.createElement("h2",{id:"dispath-\u8F6C\u6362"},e.a.createElement(n.AnchorLink,{to:"#dispath-\u8F6C\u6362","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"dispath \u8F6C\u6362"),e.a.createElement(t.a,{code:`type Action =
  | {
      type: 'INIT';
    }
  | {
      type: 'SYNC';
    }
  | {
      type: 'LOG_IN';
      emailAddress: string;
    }
  | {
      type: 'LOG_IN_SUCCESS';
      accessToken: string;
    };

// \u7528\u7C7B\u578B\u67E5\u8BE2\u67E5\u51FAAction\u4E2D\u6240\u6709type\u7684\u8054\u5408\u7C7B\u578B
type ActionType = Action['type'];

// \u628A\u7C7B\u578B\u4E2Dkey\u4E3A"type"\u53BB\u6389
type ExcludeTypeField<A> = { [K in Exclude<keyof A, 'type'>]: A[K] };

type ExtractActionParameters<A, T> = A extends { type: T } ? A : never;
// \u628A\u53C2\u6570\u5BF9\u8C61\u4E2D\u7684type\u53BB\u6389
// Extract<A, { type: T }\u4F1A\u6311\u9009\u51FA\u80FDextend { type: T }\u8FD9\u4E2A\u7ED3\u6784\u7684Action\u4E2D\u7684\u7C7B\u578B
type ExtractActionParametersWithoutType<A, T> = ExcludeTypeField<
  ExtractActionParameters<A, T>
>;

type ExtractSimpleAction<A> = A extends any
  ? {} extends ExcludeTypeField<A>
    ? A
    : never
  : never;

type SimpleActionType = ExtractSimpleAction<Action>['type'];
type ComplexActionType = Exclude<ActionType, SimpleActionType>;

// \u7B80\u5355\u53C2\u6570\u7C7B\u578B
function dispatch<T extends SimpleActionType>(type: T): void;
// \u590D\u6742\u53C2\u6570\u7C7B\u578B
function dispatch<T extends ComplexActionType>(
  type: T,
  args: ExtractActionParametersWithoutType<Action, T>,
): void;
// \u5B9E\u73B0
function dispatch(arg: any, payload?: any) {}

dispatch('SYNC');

dispatch('LOG_IN', {
  emailAddress: 'ssh@qq.com',
});`,lang:"ts"}),e.a.createElement("h2",{id:"\u6DF7\u5408\u7EE7\u627F"},e.a.createElement(n.AnchorLink,{to:"#\u6DF7\u5408\u7EE7\u627F","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u6DF7\u5408\u7EE7\u627F"),e.a.createElement(t.a,{code:`// \u6DF7\u5408\u63A5\u53D7\u4E00\u4E2A\u7C7B\uFF0C\u5E76\u4E14\u4F7F\u7528\u65B0\u529F\u80FD\u6269\u5C55\u5B83
type Constructor<T = {}> = new (...args: any[]) => T;

/////////////
// mixins \u4F8B\u5B50
////////////

// \u6DFB\u52A0\u5C5E\u6027\u7684\u6DF7\u5408\u4F8B\u5B50 \u6269\u5C55\u4E00\u4E2A\u7C7B\u5E76\u4E14\u8FD4\u56DE\u5B83
function Timestamped<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    timestamp = Date.now();
  };
}

// \u6DFB\u52A0\u5C5E\u6027\u548C\u65B9\u6CD5\u7684\u6DF7\u5408\u4F8B\u5B50
function Activatable<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    isActivated = false;

    activate() {
      this.isActivated = true;
    }

    deactivate() {
      this.isActivated = false;
    }
  };
}

///////////
// \u7EC4\u5408\u7C7B
///////////

// \u7B80\u5355\u7684\u7C7B
class User {
  name = '';
}

// \u6DFB\u52A0 Timestamped \u7684 User
const TimestampedUser = Timestamped(User);

// Tina Timestamped \u548C Activatable \u7684\u7C7B
const TimestampedActivatableUser = Timestamped(Activatable(User));

//////////
// \u4F7F\u7528\u7EC4\u5408\u7C7B
//////////

const timestampedUserExample = new TimestampedUser();
console.log(timestampedUserExample.timestamp);

const timestampedActivatableUserExample = new TimestampedActivatableUser();
console.log(timestampedActivatableUserExample.timestamp);
console.log(timestampedActivatableUserExample.isActivated);`,lang:"ts"}),e.a.createElement("h2",{id:"react-\u4E0E-typescript"},e.a.createElement(n.AnchorLink,{to:"#react-\u4E0E-typescript","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"React \u4E0E TypeScript"),e.a.createElement(t.a,{code:`// props
React.ComponentProps<'button'>
React.ButtonHTMLAttributes<HTMLButtonElement>
// node
React.ReactNode
// css
React.CSSProperties
// children
React.FunctionComponentElement
// \u4E8B\u4EF6
onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
React.FormEvent<HTMLInputElement>
onSubmit: e: React.SyntheticEvent
e.target as typeof e.target & {
  email: {value: string }
}
e.target.email.value
// \u952E\u76D8\u4E8B\u4EF6
e:React.KeyboardEvent

// \u8FD4\u56DE\u7A7A\u7684\u7C7B\u578B
as any as JSX.Element
// forwardRef
forwardRef<useImperativeHandle\u91CC\u9762\u65B9\u6CD5\u7684type, props\u7684type>
// this.setState\u62A5\u9519
React.Component<P,S>\u5B9A\u4E49state\u7684type

// getDerivedStateFromProps
static getDerivedStateFromProps(
    props: Props,
    state: State
  ): Partial<State> | null {
    //
  }
class Comp extends React.Component<
  Props,
  ReturnType<typeof Comp["getDerivedStateFromProps"]>
> {
  static getDerivedStateFromProps(props: Props) {}
}
// defaultProps
  // internal contract, should not be exported out
type GreetProps = {
  age: number;
};

class Greet extends Component<GreetProps> {
  static defaultProps = { age: 21 };
}

  // external contract
export type ApparentGreetProps = JSX.LibraryManagedAttributes<
  typeof Greet,
  GreetProps
>;
type ComponentProps<T> = T extends
  | React.ComponentType<infer P>
  | React.Component<infer P>
  ? JSX.LibraryManagedAttributes<T, P>
  : never;

const TestComponent = (props: ComponentProps<typeof GreetComponent>) => {
  return <h1 />;
};

  // No error
const el = <TestComponent name="foo" />;`,lang:"ts"}),e.a.createElement(t.a,{code:`children?: React.ReactNode;
  childrenElement: JSX.Element;
  style?: React.CSSProperties;
  onChange?: React.FormEventHandler<HTMLInputElement>;
  props: Props & React.ComponentPropsWithoutRef<"button">;   // \u4E0D\u8F6C\u53D1\u7684props
  props2: Props & React.ComponentPropsWithRef<MyButtonWithForwardRef>;  // \u8F6C\u53D1\u7684props

 onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
 onClick(event: React.MouseEvent<HTMLButtonElement>): void;
  onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ text: e.currentTarget.value });
  };
  onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    this.setState({text: e.currentTarget.value})
  }
  // \u4E0D\u5173\u5FC3\u4E8B\u4EF6\u7684\u7C7B\u578B
  e: React.SyntheticEvent
  const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
  };`,lang:"ts"}),e.a.createElement("h3",{id:"typescript-\u83B7\u53D6-react-\u53CA-vue-\u7EC4\u4EF6\u5B9E\u4F8B"},e.a.createElement(n.AnchorLink,{to:"#typescript-\u83B7\u53D6-react-\u53CA-vue-\u7EC4\u4EF6\u5B9E\u4F8B","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"TypeScript \u83B7\u53D6 react \u53CA vue \u7EC4\u4EF6\u5B9E\u4F8B"),e.a.createElement("h4",{id:"class-\u83B7\u53D6\u7EC4\u4EF6\u5B9E\u4F8B"},e.a.createElement(n.AnchorLink,{to:"#class-\u83B7\u53D6\u7EC4\u4EF6\u5B9E\u4F8B","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"class \u83B7\u53D6\u7EC4\u4EF6\u5B9E\u4F8B"),e.a.createElement(t.a,{code:`import React from 'react';
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
}`,lang:"tsx"}),e.a.createElement("h4",{id:"hook-\u83B7\u53D6-ref---1"},e.a.createElement(n.AnchorLink,{to:"#hook-\u83B7\u53D6-ref---1","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"hook \u83B7\u53D6 ref - 1"),e.a.createElement(t.a,{code:`import React from 'react';
import Countdown, { CountdownHandle } from './Countdown';

function App() {
  const countdownEl = React.useRef<CountdownHandle>(null!);

  React.useEffect(() => {
    if (countdownEl.current) {
      countdownEl.current.a = 10;
    }
  }, []);

  return <Countdown ref={countdownEl} />;
}`,lang:"tsx"}),e.a.createElement(t.a,{code:`import React from 'react';
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

export default Countdown;`,lang:"tsx"}),e.a.createElement("h4",{id:"hook-\u83B7\u53D6-ref---2"},e.a.createElement(n.AnchorLink,{to:"#hook-\u83B7\u53D6-ref---2","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"hook \u83B7\u53D6 ref - 2"),e.a.createElement(t.a,{code:`import React from 'react';
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

export default React.forwardRef(Countdown);`,lang:"tsx"}),e.a.createElement(t.a,{code:`import React from 'react';
import Countdown from './Countdown';

const App: React.FC = () => {
  const ref = React.useRef<React.ElementRef<typeof Countdown>>(null!); // assign null makes it compatible with elements.
  ref.current?.start();
  return <Countdown ref={ref} />;
};`,lang:"tsx"}),e.a.createElement("h4",{id:"vue3"},e.a.createElement(n.AnchorLink,{to:"#vue3","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"vue3"),e.a.createElement(t.a,{code:`<script setup lang="ts">
import xxx from './xxx'
const Child = ref<InstanceType<typeof xxx>>(null!)
</script>`,lang:"js"}),e.a.createElement("h2",{id:"\u62A5\u9519\u7684\u89E3\u51B3"},e.a.createElement(n.AnchorLink,{to:"#\u62A5\u9519\u7684\u89E3\u51B3","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u62A5\u9519\u7684\u89E3\u51B3"),e.a.createElement("h3",{id:"\u5143\u7EC4"},e.a.createElement(n.AnchorLink,{to:"#\u5143\u7EC4","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5143\u7EC4"),e.a.createElement(t.a,{code:`const args = [8, 5] as const;
const angle = Math.atan2(...args);`,lang:"ts"}),e.a.createElement("h3",{id:"\u5BF9\u8C61\u7D22\u5F15\u5F62\u5F0F"},e.a.createElement(n.AnchorLink,{to:"#\u5BF9\u8C61\u7D22\u5F15\u5F62\u5F0F","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5BF9\u8C61\u7D22\u5F15\u5F62\u5F0F"),e.a.createElement(t.a,{code:`const props = {
  foo: 'bar',
};
props['foo'] = 'baz'; // Element implicitly has an 'any' type because expression of type 'string' can't be used to index type`,lang:"ts"}),e.a.createElement(t.a,{code:`interface Props {
  foo: string;
  [key: string]: Props[keyof Props];
}

const props: Props = {
  foo: 'bar',
};

props['foo'] = 'baz'; // ok
props['bar'] = 'baz'; // error`,lang:"ts"}),e.a.createElement("h3",{id:"\u5BF9\u8C61\u5C1A\u672A\u5B9A\u4E49"},e.a.createElement(n.AnchorLink,{to:"#\u5BF9\u8C61\u5C1A\u672A\u5B9A\u4E49","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5BF9\u8C61\u5C1A\u672A\u5B9A\u4E49"),e.a.createElement(t.a,{code:`class Component extends React.Component<{}, {}> {
    // \u8FD9\u4E2A\u5C5E\u6027\u53EF\u80FD\u662Fundefined
    graph: Graph?;

    componentDidMount() {
      this.graph = new Graph()
      this.init(this.graph)
    }

    init() {
      this.graph.on("click", () => {})  // Object is possibly 'undefined'
    }

    render() {
        return <div>foo</div>
    }
}`,lang:"ts"}),e.a.createElement(t.a,{code:`// \u9700\u8981\u4F7F\u7528 type guards
init() {
    if (this.graph) this.graph.on("click", () => {})  // ok
}
// !.xxx
init() {
    this.graph!.on("click", () => {})  // ok
}
// ?.
init() {
   this.graph?.on("click", () => {})  // ok
}`,lang:"ts"}))));u.default=r=>{const s=e.a.useContext(n.context),p=s.demos;return e.a.useEffect(()=>{var l;r!=null&&(l=r.location)!==null&&l!==void 0&&l.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(r.location.hash.slice(1)))},[]),e.a.createElement(i,{demos:p})}}}]);
