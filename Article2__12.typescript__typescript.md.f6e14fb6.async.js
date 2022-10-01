(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"9MQq":function(E,c,a){"use strict";a.r(c);var i=a("cDcd"),e=a.n(i),n=a("dEAq"),d=a.n(n),t=a("H1Ra"),r=a("dMo/");const o=e.a.memo(({demos:l})=>e.a.createElement(e.a.Fragment,null,e.a.createElement("div",{className:"markdown"},e.a.createElement("h1",{id:"typescript"},e.a.createElement(n.AnchorLink,{to:"#typescript","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Typescript"),e.a.createElement("h2",{id:"1-\u51C6\u5907\u9636\u6BB5"},e.a.createElement(n.AnchorLink,{to:"#1-\u51C6\u5907\u9636\u6BB5","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"1 \u51C6\u5907\u9636\u6BB5"),e.a.createElement(t.a,{code:`tsc hello.ts     =>  .ts
tsc --init
\u7EC8\u7AEF ctrl+shift+b \u76D1\u89C6tsc
\u6216\u8005\u5728\u6700\u4E0A\u65B9 \u83DC\u5355 \u7EC8\u7AEF \u8FD0\u884C\u4EFB\u52A1 \u76D1\u89C6tsconfig.json`,lang:"tsx"}),e.a.createElement("h2",{id:"2-\u6982\u5FF5"},e.a.createElement(n.AnchorLink,{to:"#2-\u6982\u5FF5","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"2. \u6982\u5FF5"),e.a.createElement("h3",{id:"tsconfig"},e.a.createElement(n.AnchorLink,{to:"#tsconfig","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"tsconfig"),e.a.createElement(t.a,{code:`{
   "compilerOptions": {
       // \u5F00\u542Fjs\u63D0\u793A
       "allowJs": true,
       // \u6307\u5B9A\u538B\u7F29\u4EE3\u7801\u751F\u6210\u7684\u76EE\u5F55 \u968F\u4FBF\u4E00\u4E2A\u4E0D\u5B58\u5728\u7684\u8DEF\u5F84\u5C31\u884C
       "outDir": "./random",
       "declaration": true, //\u81EA\u52A8\u751F\u6210.d.ts\u6587\u4EF6\u7C7B\u578B\u6821\u9A8C
        "module": "esnext", // \u4FDD\u7559import.then
          // \u53EA\u5141\u8BB8\u4F7F\u7528@types\u7684\u5305
         "types" : [ "jquery"],
        "noImplicitAny":true // \u9ED8\u8BA4any\u4E0D\u63D0\u793A
        "--noImplicitThis":true // \u81EA\u52A8\u952E\u5165this
        "jsx": "react" // preserve\u8868\u793A\u81EA\u5B9A\u4E49\u8F6C\u6362

   }
}`,lang:"json"}),e.a.createElement("h3",{id:"declare"},e.a.createElement(n.AnchorLink,{to:"#declare","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"declare"),e.a.createElement(t.a,{code:`// \u5168\u5C40\u7C7B\u578B\u6807\u6CE8
// \u58F0\u660E\u4E0D\u5B58\u5728\u7684sdk \u907F\u514D\u62A5\u9519
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
# \u9700\u8981\u5728tsconfig.json \u5F15\u5165\u6587\u4EF6
  "include": [
    "typings.d.ts"
  ],
# react\u6709\u4E9B\u5305\u7684module\u9700\u8981\u5728\u8FD9\u91CC\u5B9A\u4E49
react-app-env.d.ts => declare`,lang:"typescript"}),e.a.createElement("h3",{id:"namespace"},e.a.createElement(n.AnchorLink,{to:"#namespace","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"namespace"),e.a.createElement(t.a,{code:`# \u76F8\u5F53\u4E8E\u81EA\u6267\u884C\u51FD\u6570
namespace xxx {
  export function log(){}
}
xxx.log('xx')
# \u590D\u5236\u4E00\u4E2A\u7C7B
namespace importing {
  export class Foo {}
}
import Bar = importing.Foo;
let bar: Bar; // ok`,lang:"tsx"}),e.a.createElement("h3",{id:"mixin"},e.a.createElement(n.AnchorLink,{to:"#mixin","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"mixin"),e.a.createElement("ul",null,e.a.createElement("li",null,e.a.createElement(n.Link,{to:"https://mariusschulz.com/blog/mixin-classes-in-typescript"},"https://mariusschulz.com/blog/mixin-classes-in-typescript"))),e.a.createElement(t.a,{code:`class SmartObject implements Disposable, Activatable { }
#
applyMixins(SmartObject, [Disposable, Activatable]);
#
function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        })
    });
}`,lang:"tsx"}),e.a.createElement("h3",{id:"this-\u6307\u5411"},e.a.createElement(n.AnchorLink,{to:"#this-\u6307\u5411","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"this \u6307\u5411"),e.a.createElement(t.a,{code:`type ThisPointer = { name: '19Qingfeng' };
function xxx(this: ThisPointer) {
  this.name;
}`,lang:"tsx"}),e.a.createElement("h3",{id:"\u7248\u672C\u95EE\u9898"},e.a.createElement(n.AnchorLink,{to:"#\u7248\u672C\u95EE\u9898","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u7248\u672C\u95EE\u9898"),e.a.createElement(t.a,{code:"@types/react \u8981\u548Cts\u7248\u672C\u5BF9\u5E94 \u4E0D\u7136\u4F1A\u62A5\u9519",lang:"tsx"}),e.a.createElement("h2",{id:"3-\u6570\u636E\u7C7B\u578B"},e.a.createElement(n.AnchorLink,{to:"#3-\u6570\u636E\u7C7B\u578B","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"3 \u6570\u636E\u7C7B\u578B"),e.a.createElement("h3",{id:"\u57FA\u672C\u7C7B\u578B"},e.a.createElement(n.AnchorLink,{to:"#\u57FA\u672C\u7C7B\u578B","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u57FA\u672C\u7C7B\u578B"),e.a.createElement(r.a,null,e.a.createElement("thead",null,e.a.createElement("tr",null,e.a.createElement("th",null,"\u6570\u636E\u7C7B\u578B"),e.a.createElement("th",null,"\u63CF\u8FF0"))),e.a.createElement("tbody",null,e.a.createElement("tr",null,e.a.createElement("td",null,"boolean"),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"number"),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"string"),e.a.createElement("td",null,"\u63A8\u8350\u5355\u5F15\u53F7")),e.a.createElement("tr",null,e.a.createElement("td",null,"Array"),e.a.createElement("td",null,"Array",e.a.createElement("t",null))),e.a.createElement("tr",null,e.a.createElement("td",null,"tuple"),e.a.createElement("td",null,"\u5143\u7EC4 \u56FA\u5B9A\u957F\u5EA6\u7684\u6570\u7EC4 [string,string?] => \u53EF\u9009")),e.a.createElement("tr",null,e.a.createElement("td",null,"Object"),e.a.createElement("td",null,"\u4EFB\u610F\u7684 JS \u5BF9\u8C61 \u4F46\u662F\u4E0D\u80FD\u8C03\u7528\u5176\u4ED6\u65B9\u6CD5 \u5373\u4FBF\u5B83\u771F\u7684\u6709")),e.a.createElement("tr",null,e.a.createElement("td",null,"any"),e.a.createElement("td",null,"\u4EFB\u610F\u7C7B\u578B")),e.a.createElement("tr",null,e.a.createElement("td",null,"unknown"),e.a.createElement("td",null,"\u7C7B\u578B\u5B89\u5168\u7684 any \u533A\u522B\u662F any \u4F1A\u628A\u522B\u7684\u4E5F\u63A8\u65AD\u6210 any \u4ED6\u53EA\u63A8\u65AD\u81EA\u5DF1")),e.a.createElement("tr",null,e.a.createElement("td",null,"null"),e.a.createElement("td",null,"\u53EF\u4EE5\u8D4B\u7ED9\u5176\u4ED6\u7C7B\u578B\u53D8\u91CF \u4F46\u5982\u679C--strictNullChecks \u5C31\u53EA\u80FD\u7ED9\u81EA\u5DF1")),e.a.createElement("tr",null,e.a.createElement("td",null,"undefined"),e.a.createElement("td",null,"\u53EF\u4EE5\u8D4B\u7ED9\u5176\u4ED6\u7C7B\u578B\u53D8\u91CF \u4F46\u5982\u679C--strictNullChecks \u5C31\u53EA\u80FD\u7ED9\u81EA\u5DF1")),e.a.createElement("tr",null,e.a.createElement("td",null,"void"),e.a.createElement("td",null,"\u51FD\u6570\u6CA1\u6709\u8FD4\u56DE\u503C\u4ED6\u7684\u7C7B\u578B\u5C31\u662F void \u53EA\u80FD undefined null")),e.a.createElement("tr",null,e.a.createElement("td",null,"never"),e.a.createElement("td",null,"\u7528\u4E8E\u51FD\u6570\u6CA1\u6709\u8FD4\u56DE\u503C \u4F8B\u5982\u53EA\u7528\u4E8E\u62A5\u9519\u7684\u51FD\u6570 switch:defualt")),e.a.createElement("tr",null,e.a.createElement("td",null,"bigint"),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"symbol"),e.a.createElement("td",null)))),e.a.createElement("h3",{id:"\u5176\u4ED6\u7C7B\u578B"},e.a.createElement(n.AnchorLink,{to:"#\u5176\u4ED6\u7C7B\u578B","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5176\u4ED6\u7C7B\u578B"),e.a.createElement(r.a,null,e.a.createElement("thead",null,e.a.createElement("tr",null,e.a.createElement("th",null,"\u6570\u636E\u7C7B\u578B"),e.a.createElement("th",null,"\u63CF\u8FF0"))),e.a.createElement("tbody",null,e.a.createElement("tr",null,e.a.createElement("td",null,"enum"),e.a.createElement("td",null,"\u679A\u4E3E \u53EA\u80FD\u8D4B\u503C\u4E3A undefined \u548C null")),e.a.createElement("tr",null,e.a.createElement("td",null,"turple"),e.a.createElement("td",null,'let x: [number, string] = [10, "jack"]')),e.a.createElement("tr",null,e.a.createElement("td",null,"Union Types"),e.a.createElement("td",null,"| \u8054\u5408\u7C7B\u578B \u53EA\u80FD\u540C\u65F6\u4E3A\u4E00\u79CD")),e.a.createElement("tr",null,e.a.createElement("td",null,"&"),e.a.createElement("td",null,"& \u4EA4\u53C9\u7C7B\u578B \u5408\u5E76")))),e.a.createElement("h3",{id:"\u57FA\u672C\u4FEE\u9970\u7B26"},e.a.createElement(n.AnchorLink,{to:"#\u57FA\u672C\u4FEE\u9970\u7B26","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u57FA\u672C\u4FEE\u9970\u7B26"),e.a.createElement(r.a,null,e.a.createElement("thead",null,e.a.createElement("tr",null,e.a.createElement("th",null,"\u4FEE\u9970\u7B26"),e.a.createElement("th",null,"\u63CF\u8FF0"),e.a.createElement("th",null,"\u5176\u4ED6"))),e.a.createElement("tbody",null,e.a.createElement("tr",null,e.a.createElement("td",null,"?:"),e.a.createElement("td",null,"\u53EF\u9009\u5C5E\u6027"),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"!."),e.a.createElement("td",null,"\u975E\u7A7A\u65AD\u8A00"),e.a.createElement("td",null,"\u53BB\u9664 Null undefined")),e.a.createElement("tr",null,e.a.createElement("td",null,"!:"),e.a.createElement("td",null,"\u5916\u90E8\u5F15\u5165\u7684\u53D8\u91CF"),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"readonly"),e.a.createElement("td",null,"\u53EA\u8BFB"),e.a.createElement("td",null,"\u6D45\u7684\u53EA\u8BFB")),e.a.createElement("tr",null,e.a.createElement("td",null,"is"),e.a.createElement("td",null),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"as"),e.a.createElement("td",null),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null),e.a.createElement("td",null),e.a.createElement("td",null)))),e.a.createElement("h3",{id:"\u6620\u5C04\u4FEE\u9970\u7B26"},e.a.createElement(n.AnchorLink,{to:"#\u6620\u5C04\u4FEE\u9970\u7B26","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u6620\u5C04\u4FEE\u9970\u7B26"),e.a.createElement("ul",null,e.a.createElement("li",null,"readonly ? - + \u6CA1\u5199\u7B49\u4E8E\u4F7F\u7528\u4E86+")),e.a.createElement(r.a,null,e.a.createElement("thead",null,e.a.createElement("tr",null,e.a.createElement("th",null,"\u6620\u5C04\u4FEE\u9970\u7B26"),e.a.createElement("th",null,"\u63CF\u8FF0"),e.a.createElement("th",null,"\u5176\u4ED6"))),e.a.createElement("tbody",null,e.a.createElement("tr",null,e.a.createElement("td",null,"-"),e.a.createElement("td",null,"-?:"),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"+"),e.a.createElement("td",null,"\u9ED8\u8BA4"),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"readonly"),e.a.createElement("td",null,"-readonly"),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"?"),e.a.createElement("td",null,"-?:"),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null),e.a.createElement("td",null),e.a.createElement("td",null)))),e.a.createElement(t.a,{code:`# \u5220\u9664\u5C5E\u6027\u4E2D\u7684\u53EA\u8BFB\u5C5E\u6027
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

# \u5220\u9664\u5C5E\u6027\u4E2D\u7684\u53EF\u9009\u5C5E\u6027
type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

# as
type MappedTypeWithNewProperties<Type> = {
    [Properties in keyof Type as NewKeyType]: Type[Properties]
}`,lang:"tsx"}),e.a.createElement("h3",{id:"\u64CD\u4F5C\u7B26"},e.a.createElement(n.AnchorLink,{to:"#\u64CD\u4F5C\u7B26","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u64CD\u4F5C\u7B26"),e.a.createElement("h4",{id:"uppercase"},e.a.createElement(n.AnchorLink,{to:"#uppercase","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Uppercase"),e.a.createElement(t.a,{code:`# Uppercase \u628A\u6BCF\u4E2A\u5B57\u7B26\u8F6C\u4E3A\u5927\u5199\u5F62\u5F0F\uFF1A
type Greeting = "Hello, world"
type ShoutyGreeting = Uppercase<Greeting>
// type ShoutyGreeting = "HELLO, WORLD"

type ASCIICacheKey<Str extends string> = \`ID-\${Uppercase<Str>}\`
type MainID = ASCIICacheKey<"my_app">
// type MainID = "ID-MY_APP"`,lang:"tsx"}),e.a.createElement("h4",{id:"lowercase"},e.a.createElement(n.AnchorLink,{to:"#lowercase","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Lowercase"),e.a.createElement(t.a,{code:`type Greeting = "Hello, world"
type QuietGreeting = Lowercase<Greeting>
// type QuietGreeting = "hello, world"

type ASCIICacheKey<Str extends string> = \`id-\${Lowercase<Str>}\`
type MainID = ASCIICacheKey<"MY_APP">
// type MainID = "id-my_app"`,lang:"tsx"}),e.a.createElement("h4",{id:"capitalize"},e.a.createElement(n.AnchorLink,{to:"#capitalize","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Capitalize"),e.a.createElement(t.a,{code:`# Capitalize \u5B57\u7B26\u4E32\u7684\u7B2C\u4E00\u4E2A\u5B57\u7B26\u8F6C\u4E3A\u5927\u5199\u5F62\u5F0F
type LowercaseGreeting = "hello, world";
type Greeting = Capitalize<LowercaseGreeting>;
// type Greeting = "Hello, world"`,lang:"tsx"}),e.a.createElement("h4",{id:"uncapitalize"},e.a.createElement(n.AnchorLink,{to:"#uncapitalize","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Uncapitalize"),e.a.createElement(t.a,{code:`# Uncapitalize
type UppercaseGreeting = "HELLO WORLD";
type UncomfortableGreeting = Uncapitalize<UppercaseGreeting>;
// type UncomfortableGreeting = "hELLO WORLD"`,lang:"tsx"}),e.a.createElement("h3",{id:"\u6A21\u677F\u5B57\u9762\u91CF"},e.a.createElement(n.AnchorLink,{to:"#\u6A21\u677F\u5B57\u9762\u91CF","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u6A21\u677F\u5B57\u9762\u91CF"),e.a.createElement(t.a,{code:'type World = "world";\ntype Greeting = `hello ${World}`;\n// type Greeting = "hello world"\n# \u5982\u679C\u662F\u8054\u5408\u7C7B\u578B \u5C31\u4F1A\u6709\u591A\u79CD\u53EF\u80FD',lang:"tsx"}),e.a.createElement("h2",{id:"4-\u57FA\u672C-api"},e.a.createElement(n.AnchorLink,{to:"#4-\u57FA\u672C-api","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"4. \u57FA\u672C API"),e.a.createElement("h3",{id:"\u7C7B\u578B\u65AD\u8A00"},e.a.createElement(n.AnchorLink,{to:"#\u7C7B\u578B\u65AD\u8A00","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u7C7B\u578B\u65AD\u8A00"),e.a.createElement(t.a,{code:`// \u624B\u52A8\u6307\u5B9A\u67D0\u4E00\u4E2A\u503C\u7684\u7C7B\u578B
1.\u503C as \u7C7B\u578B
(someValue as string)  React-jsx\u5FC5\u987B\u7528\u8FD9\u4E2A
2.<\u7C7B\u578B>\u503C
(<string>someValue)

# \u53CC\u91CD\u65AD\u8A00
 const element = (event as any) as HTMLElement; // ok
 as any as JSX.Element;`,lang:"typescript"}),e.a.createElement("h3",{id:"type"},e.a.createElement(n.AnchorLink,{to:"#type","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"type"),e.a.createElement("ul",null,e.a.createElement("li",null,e.a.createElement(n.Link,{to:"https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces"},"type \u548C interface \u7684\u533A\u522B"),e.a.createElement("ul",null,e.a.createElement("li",null,"interface \u53EF\u4EE5\u540C\u540D\u4F1A\u81EA\u52A8\u5408\u5E76"),e.a.createElement("li",null,"type \u53EF\u4F7F\u7528\u6A21\u677F\u5B57\u9762\u91CF \u7D22\u5F15\u4FEE\u9970\u7B26\u7B49")))),e.a.createElement(t.a,{code:`# \u6CDB\u578B
type Box<T> = {contents: T; };`,lang:"typescript"}),e.a.createElement("h3",{id:"\u51FD\u6570"},e.a.createElement(n.AnchorLink,{to:"#\u51FD\u6570","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u51FD\u6570"),e.a.createElement(t.a,{code:`type Fn = (...arg: number[]) => void
let IdFn: { <Type>(arg: Type): Type } = IdFn;
# \u51FD\u6570\u7684\u91CD\u8F7D
...
# \u6709\u5C5E\u6027\u7684\u51FD\u6570
type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}
# new\u5B9E\u4F8B\u5316
type SomeConstructor = {
  new (str: string): {
    num: number;
  };
};
function fn(ctor: SomeConstructor) {
  return new ctor('1').num;
}`,lang:"typescript"}),e.a.createElement("h3",{id:"\u679A\u4E3E"},e.a.createElement(n.AnchorLink,{to:"#\u679A\u4E3E","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u679A\u4E3E"),e.a.createElement("ul",null,e.a.createElement("li",null,e.a.createElement(n.Link,{to:"https://www.typescriptlang.org/docs/handbook/enums.html#const-enums"},"\u5E38\u91CF\u679A\u4E3E\u548C\u76F4\u63A5\u679A\u4E3E\u7684\u533A\u522B"),": \u4F1A\u751F\u6210\u989D\u5916\u7684\u4EE3\u7801"),e.a.createElement("li",null,"\u76F8\u540C\u540D\u79F0\u7684\u679A\u4E3E\u81EA\u52A8\u5408\u5E76")),e.a.createElement(t.a,{code:`// \u9ED8\u8BA4\u4ECE0\u5F00\u59CB\u9012\u589E \u76F4\u5230\u679A\u4E3E\u8FDB\u884C\u53CD\u5411\u6620\u5C04
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
# \u5E38\u91CF\u679A\u4E3E
const enum xxx { }
# \u83B7\u53D6\u679A\u4E3E\u7684\u7C7B\u578B
enum Methods {
  'GET',
  'POST',
}
keyof typeof Methods;  // "GET" | "POST"`,lang:"ts"}),e.a.createElement("h3",{id:"typeof"},e.a.createElement(n.AnchorLink,{to:"#typeof","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"typeof"),e.a.createElement("ul",null,e.a.createElement("li",null,"string | number | boolean | bigint | symbol | undefined | object |function"),e.a.createElement("li",null,"\u6CA1\u6709 null"),e.a.createElement("li",null,"\u9075\u5B88 falsy \u503C\u7EA6\u5B9A"),e.a.createElement("li",null,"\u901A\u5E38\u7ED3\u5408 keyof \u4F7F\u7528"),e.a.createElement("li",null,"\u53EF\u4EE5\u83B7\u53D6\u5B9E\u4F8B\u7684\u7C7B\u578B => InstanceType<typeof \u5B9E\u4F8B>")),e.a.createElement("h3",{id:"keyof"},e.a.createElement(n.AnchorLink,{to:"#keyof","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"keyof"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u53EA\u80FD\u8FD4\u56DE number string symbol \u7C7B\u578B \u9700\u8981\u81EA\u5DF1\u6536\u7A84\u7C7B\u578B")),e.a.createElement(t.a,{code:`# \u83B7\u53D6\u4E00\u4E2A\u63A5\u53E3\u7684\u6240\u6709key
interface Foo {
  name: string;
  age: number
}
type T = keyof Foo // -> "name" | "age"
# \u5F53\u53C2\u6570\u4F20\u5165\u5BF9\u8C61 \u548C \u5BF9\u8C61\u7684\u67D0\u4E2A\u952E\u65F6 \u6709\u5173\u7CFB
function prop<T extends object, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
# \u751F\u6210\u5B57\u7B26\u4E32\u7684\u8054\u5408\u7C7B\u578B
type xxx = keyof \u63A5\u53E3
type xxx = keyof typeof \u53D8\u91CF(enum)`,lang:"tsx"}),e.a.createElement("ul",null,e.a.createElement("li",null,"\u7D22\u5F15\u8BBF\u95EE\u7C7B\u578B")),e.a.createElement(t.a,{code:`# \u751F\u6210value
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

# \u6570\u7EC4\u7D22\u5F15 => number
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
// type Age2 = number`,lang:"tsx"}),e.a.createElement("h3",{id:"infer"},e.a.createElement(n.AnchorLink,{to:"#infer","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"infer"),e.a.createElement(t.a,{code:`// \u8868\u793A\u5728 extends \u6761\u4EF6\u8BED\u53E5\u4E2D\u5F85\u63A8\u65AD\u7684\u7C7B\u578B\u53D8\u91CF
type Info<T> = T extends { a: infer U; b: infer U } ? U : never;
// Props\u7C7B\uFF1A string | number
type Props = Info<{ a: string; b: number }>;
// Props\u7C7B\u578B\uFF1A never
type Props1 = Info<number>;`,lang:"tsx"}),e.a.createElement("h3",{id:"in"},e.a.createElement(n.AnchorLink,{to:"#in","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"in"),e.a.createElement(t.a,{code:`in \u5219\u53EF\u4EE5\u904D\u5386\u679A\u4E3E\u7C7B\u578B
type Keys = "a" | "b"
type Obj =  {
  [p in Keys]: any
} // -> { a: any, b: any }
# \u5C06\u6240\u6709\u7684\u7C7B\u578B\u8F6C\u4E3A\u53EF\u9009\u7684
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
}`,lang:"tsx"}),e.a.createElement("h3",{id:"is"},e.a.createElement(n.AnchorLink,{to:"#is","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"is"),e.a.createElement(t.a,{code:`function isNumber(x: any): x is number {
  //\u9ED8\u8BA4\u4F20\u5165\u7684\u662Fnumber\u7C7B\u578B
  return typeof x === 'number';
}

console.log(isNumber(7)); // true
console.log(isNumber('7')); //false
console.log(isNumber(true)); //false`,lang:"tsx"}),e.a.createElement("h2",{id:"5inerface"},e.a.createElement(n.AnchorLink,{to:"#5inerface","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"5.inerface"),e.a.createElement(t.a,{code:`# base
interface IPerson {
   readonly name: string | number,  // \u53EA\u8BFB
   age?: number,                    // \u53EF\u9009
   [propsName: string]: any         // \u4EFB\u610F\u5C5E\u6027\u4E2A\u6570
}
# \u63A5\u53E3\u7EE7\u627F
interface \u65B0\u7684\u63A5\u53E3\u540D entends \u63A5\u53E3\u540D, \u63A5\u53E3\u540D{ }
# \u6CDB\u578B\u63A5\u53E3
interface Icreate<T>{ (a:T,b:T):T }
# extends \u7C7B\u578B\u6536\u7A84 \u5FC5\u987B\u6709length\u5C5E\u6027
function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) { return a; }
  else { return b;}
}`,lang:"tsx"}),e.a.createElement("h2",{id:"6-\u6CDB\u578B"},e.a.createElement(n.AnchorLink,{to:"#6-\u6CDB\u578B","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"6. \u6CDB\u578B"),e.a.createElement(t.a,{code:`#
function swap<T, U>(data: [T, U]): [U, T] { } T[]
# \u7EA6\u675F\u6CDB\u578B
function fn<T extends{length: number}>(a: T): number {
  return a.length
}
fn(1)  // \u62A5\u9519 \u6570\u5B57\u6CA1\u6709.length \u5FC5\u987B\u8981\u6709.length
# \u4E0E\u51FD\u6570\u7684\u7ED3\u5408
interface Icreate {
  <T>(name: string, value: T): Array<T>
}
# \u4E0E\u7C7B\u7684\u7ED3\u5408
class Person <T>{
  name: T;
  constructor(name:T){
    this.name = name
  }
}
const xxx = new Person<string>('\u5F20\u4E09')`,lang:"tsx"}),e.a.createElement("h2",{id:"7-class"},e.a.createElement(n.AnchorLink,{to:"#7-class","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"7. class"),e.a.createElement("h3",{id:"js"},e.a.createElement(n.AnchorLink,{to:"#js","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"js"),e.a.createElement(t.a,{code:"#\u79C1\u6709\u5C5E\u6027",lang:"tsx"}),e.a.createElement("h3",{id:"api"},e.a.createElement(n.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"API"),e.a.createElement(t.a,{code:`# \u904D\u5386\u5C5E\u6027
Object.kes(\u5B9E\u4F8B\u540D).forEach(key=>\u5B9E\u4F8B\u540D[key])
# \u904D\u5386\u65B9\u6CD5
className.prototype \u4E0D\u80FD\u901A\u8FC7 forEach\u904D\u5386 // \u6784\u9020\u51FD\u6570 \u53EF\u4EE5
Object.getOwnPropertyNames([className].prototype)
  .forEach(item=>[className].prototype[item])`,lang:"tsx"}),e.a.createElement("h3",{id:"\u7C7B\u8868\u8FBE\u5F0F"},e.a.createElement(n.AnchorLink,{to:"#\u7C7B\u8868\u8FBE\u5F0F","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u7C7B\u8868\u8FBE\u5F0F"),e.a.createElement(t.a,{code:`const aaa = class {
  // \u533F\u540D
}
const bbb = class ccc {
  ccc.name
  // \u53EA\u6709\u5185\u90E8\u53EF\u4EE5\u8BBF\u95EEccc
}`,lang:"tsx"}),e.a.createElement("h3",{id:"4-\u4E2A\u72B6\u6001"},e.a.createElement(n.AnchorLink,{to:"#4-\u4E2A\u72B6\u6001","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"4 \u4E2A\u72B6\u6001"),e.a.createElement("h4",{id:"public"},e.a.createElement(n.AnchorLink,{to:"#public","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"public"),e.a.createElement(t.a,{code:"\u5B9E\u4F8B\u548C\u7236\u7C7B\u80FD\u90FD\u8BBF\u95EE;",lang:"tsx"}),e.a.createElement("h4",{id:"static"},e.a.createElement(n.AnchorLink,{to:"#static","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"static"),e.a.createElement(t.a,{code:`// \u53EA\u80FD\u7236\u7C7B\u70B9\u51FA\u6765
// \u7C7B\u4F3C\u4E8E\u76F4\u63A5\u5728 Person.prototype.aaaa = '\u5B59\u609F\u7A7A'
//  constructor() { this.bbb = 12; }
class Person {
  static aaaa: string = ' xxx';
  bbb: number = 12;
  bbb!: number = 12;
  [s: string]: boolean | ((s: string) => boolean);
}
const per = new Person();
console.log(Person.aaaa);`,lang:"tsx"}),e.a.createElement("h4",{id:"private"},e.a.createElement(n.AnchorLink,{to:"#private","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"private"),e.a.createElement(t.a,{code:`// private    \u79C1\u6709\u7684         \u5916\u754C\u65E0\u6CD5\u8BBF\u95EE \u4E0D\u80FD\u88AB\u7EE7\u627F
\u4E3A\u4E86\u907F\u514D\u76F4\u63A5\u4FEE\u6539 class\u4E2D\u7684\u5C5E\u6027 \u4EA7\u751F\u6570\u636E\u6DF7\u4E71
\u7528private \u5B9A\u4E49\u5C5E\u6027 \u62D2\u7EDD\u5916\u754C\u8BBF\u95EE
\u540C\u65F6\u5728class\u5185\u90E8 \u5B9A\u4E49 getter setter \u5411\u5916\u754C\u5F00\u653E \u83B7\u53D6\u548C\u4FEE\u6539\u7684\u65B9\u6CD5
\u5185\u90E8\u53EF\u4EE5\u8BBE\u8BA1 \u65B9\u6CD5\u7684\u6743\u9650
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
const per = new Person('\u5F20\u4E09', 10)
per.age = 200
console.log(per) //10`,lang:"tsx"}),e.a.createElement("h4",{id:"protected"},e.a.createElement(n.AnchorLink,{to:"#protected","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"protected"),e.a.createElement(t.a,{code:"// protected  \u53D7\u4FDD\u62A4\u7684       \u5916\u754C\u65E0\u6CD5\u8BBF\u95EE \u53EF\u4EE5\u88AB\u7EE7\u627F",lang:"tsx"}),e.a.createElement("h3",{id:"readonly"},e.a.createElement(n.AnchorLink,{to:"#readonly","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"readonly"),e.a.createElement(t.a,{code:`readonly ccc: string = 'ss'
static readonly ccc: string = 'ss'
\u53EA\u80FD\u5728\u6784\u9020\u5668\u91CC\u9762\u4FEE\u6539`,lang:"tsx"}),e.a.createElement("h3",{id:"get-set"},e.a.createElement(n.AnchorLink,{to:"#get-set","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"get set"),e.a.createElement(t.a,{code:`// \u624B\u52A8\u5B9A\u4E49 \u83B7\u53D6\u548C\u66F4\u6539\u65B9\u6CD5 \u7684computed
// get \u5B9A\u4E49\u7684 \u53EF\u4EE5\u76F4\u63A5\u70B9\u51FA\u6765 \u4E0D\u7528\u8C03\u65B9\u6CD5
// \u5982\u679C\u4E0D\u662F\u5173\u952E\u5B57 get \u5C31\u5F97\u4F7F\u7528\u5B9A\u4E49\u7684\u65B9\u6CD5\u4FEE\u6539
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
const per = new Person('\u5F20\u4E09', 10);
per.age = 200;
console.log(per); //10`,lang:"tsx"}),e.a.createElement("h3",{id:"constructor"},e.a.createElement(n.AnchorLink,{to:"#constructor","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"constructor"),e.a.createElement("h4",{id:"constructor-1"},e.a.createElement(n.AnchorLink,{to:"#constructor-1","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"constructor"),e.a.createElement(t.a,{code:`class Person {
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
# \u6216\u8005
class Person {
  constructor(public name: string,public age: number) {
  }
  sayHi() {
    console.log('hello')
  }
}
const per: Person = new Person('2', 2)`,lang:"tsx"}),e.a.createElement("h4",{id:"super"},e.a.createElement(n.AnchorLink,{to:"#super","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"super"),e.a.createElement(t.a,{code:`class Animal {
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
new Cat('as', 1, 'asd').sayHi();`,lang:"tsx"}),e.a.createElement("h3",{id:"extends"},e.a.createElement(n.AnchorLink,{to:"#extends","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"extends"),e.a.createElement(t.a,{code:`\u5B50\u7C7B\u91CD\u5199\u65B9\u6CD5 \u5728\u5B50\u7C7B\u4E2D \u4F1A\u8986\u76D6\u7236\u7C7B\u7684\u65B9\u6CD5
// \u5982\u679C\u8981\u52A0\u5C5E\u6027 \u5FC5\u987B\u5199super \u91CD\u5199\u5C5E\u6027`,lang:"tsx"}),e.a.createElement("h3",{id:"implements"},e.a.createElement(n.AnchorLink,{to:"#implements","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"implements"),e.a.createElement(t.a,{code:`# implements  \u9700\u8981\u91CD\u5199\u5C5E\u6027\u548C\u65B9\u6CD5
class A implements \u63A5\u53E3{
   /**
    * @override
    */
}
// \u4E0D\u7528\u5B9A\u4E49 super() \u53EF\u4EE5\u91CD\u5199 \u5C5E\u6027\u548C\u65B9\u6CD5`,lang:"tsx"}),e.a.createElement("h3",{id:"abstract"},e.a.createElement(n.AnchorLink,{to:"#abstract","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"abstract"),e.a.createElement(t.a,{code:`# \u62BD\u8C61\u7C7B \u7981\u6B62\u88AB\u5B9E\u4F8B\u5316 \u7528\u6765\u88AB\u7EE7\u627F\u7684
abstract class Parent{

}
# \u7236\u7C7B\u6307\u5B9A\u7ED3\u6784 \u5B50\u7C7B\u6765\u5B9E\u73B0 \u907F\u514D\u5FD8\u8BB0\u91CD\u5199\u65B9\u6CD5\u5BFC\u81F4\u4F7F\u7528\u9ED8\u8BA4\u7684\u65B9\u6CD5
// \u62BD\u8C61\u65B9\u6CD5\u53EA\u80FD\u4EE5abstract\u5F00\u5934 \u6CA1\u6709\u65B9\u6CD5\u4F53
// \u53EA\u80FD\u5B9A\u4E49\u5728\u62BD\u8C61\u7C7B\u91CC\u9762 \u5B50\u7C7B\u5FC5\u987B\u91CD\u5199
abstract class Parent{
 abstract sayHi():void;
}`,lang:"tsx"}),e.a.createElement("h2",{id:"8-\u88C5\u9970\u5668"},e.a.createElement(n.AnchorLink,{to:"#8-\u88C5\u9970\u5668","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"8. \u88C5\u9970\u5668"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u5728\u8FD0\u884C\u65F6\u7ACB\u5373\u8C03\u7528 \u88AB\u88C5\u9970\u7684\u58F0\u660E\u4FE1\u606F\u505A\u4E3A\u53C2\u6570\u4F20\u5165")),e.a.createElement(t.a,{code:`function Path(name: string) {
  console.log('\u9700\u8981\u901A\u8FC7\u67EF\u91CC\u5316\u5F62\u5F0F\u62FF\u5230\u53C2\u6570,\u9ED8\u8BA4\u4F20\u5165\u7684\u662Ftarget')
  return function (traget: any) {
    console.dir(name, traget.age)
  }
}

@Path('zhangsan')
class Hello {
  public static age: number = 12
}

# \u51FD\u6570\u53C2\u6570
(
  target:any,  Hello.prototype
  methodName:  string, \u51FD\u6570\u540D
  descriptor:  PropertyDecorator \u63CF\u8FF0
)`,lang:"tsx"}),e.a.createElement("h2",{id:"9-utility-types"},e.a.createElement(n.AnchorLink,{to:"#9-utility-types","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"9. Utility Types"),e.a.createElement("h3",{id:"awaitedtype"},e.a.createElement(n.AnchorLink,{to:"#awaitedtype","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),e.a.createElement("code",null,"Awaited<Type>")),e.a.createElement("h3",{id:"partialtype"},e.a.createElement(n.AnchorLink,{to:"#partialtype","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),e.a.createElement("code",null,"Partial<Type>")),e.a.createElement("ul",null,e.a.createElement("li",null,"\u4F20\u5165\u7684\u5C5E\u6027\u53D8\u6210\u53EF\u9009"),e.a.createElement("li",null,e.a.createElement("code",null,"type Partial<T> = ","{"," [P in keyof T]?: T[P] ","}",";"))),e.a.createElement("h3",{id:"requiredtype"},e.a.createElement(n.AnchorLink,{to:"#requiredtype","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),e.a.createElement("code",null,"Required<Type>")),e.a.createElement("ul",null,e.a.createElement("li",null,"\u5C06\u4F20\u5165\u7684\u5C5E\u6027\u53D8\u4E3A\u5FC5\u9009\u9879"),e.a.createElement("li",null,e.a.createElement("code",null,"type Required<T> = ","{"," [P in keyof T]-?: T[P] ","}",";"))),e.a.createElement("h3",{id:"readonlytype"},e.a.createElement(n.AnchorLink,{to:"#readonlytype","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),e.a.createElement("code",null,"Readonly<Type>")),e.a.createElement("ul",null,e.a.createElement("li",null,"\u5C06\u4F20\u5165\u7684\u5C5E\u6027\u53D8\u4E3A\u53EA\u8BFB"),e.a.createElement("li",null,e.a.createElement("code",null,"type Readonly<T> = ","{"," readonly [P in keyof T]: T[P] ","}",";"))),e.a.createElement("h3",{id:"recordkeys-type"},e.a.createElement(n.AnchorLink,{to:"#recordkeys-type","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),e.a.createElement("code",null,"Record<Keys, Type>")),e.a.createElement("ul",null,e.a.createElement("li",null,"\u5C06 K \u4E2D\u6240\u6709\u7684\u5C5E\u6027\u7684\u503C\u8F6C\u5316\u4E3A T \u7C7B\u578B(\u5B9A\u4E49\u4E00\u4E2A\u63A5\u53E3\u7684 key \u548C value)"),e.a.createElement("li",null,e.a.createElement("code",null,"type Record<K extends keyof any, T> = ","{"," [P in K]: T ","}",";"))),e.a.createElement(t.a,{code:`type keys = 'A' | 'B' | 'C';
const result: Record<keys, number> = {
  A: 1,
  B: 2,
  C: 3,
};`,lang:"tsx"}),e.a.createElement("h3",{id:"picktype-keys"},e.a.createElement(n.AnchorLink,{to:"#picktype-keys","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),e.a.createElement("code",null,"Pick<Type, Keys>")),e.a.createElement("ul",null,e.a.createElement("li",null,"\u4ECE T \u4E2D\u53D6\u51FA \u4E00\u7CFB\u5217 K \u7684\u5C5E\u6027"),e.a.createElement("li",null,e.a.createElement("code",null,"type Pick<T, K extends keyof T> = ","{"," [P in K]: T[P] ","}",";"))),e.a.createElement(t.a,{code:`// Pick<\u63A5\u53E3,'key1','key2',...>
interface Props {
  name: string;
  label: number;
  value: boolean;
}
type ChildrenProps = Pick<Props, 'name' | 'label'>;`,lang:"tsx"}),e.a.createElement("h3",{id:"omittype-keys"},e.a.createElement(n.AnchorLink,{to:"#omittype-keys","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),e.a.createElement("code",null,"Omit<Type, Keys>")),e.a.createElement(t.a,{code:`// \u5FFD\u89C6\u91CD\u5199\u67D0\u4E2A\u5C5E\u6027
interface A {
  a: number;
  b: number;
}
interface B extends Omit<A, 'a'> {
  a: boolean;
}`,lang:"tsx"}),e.a.createElement("h3",{id:"excludeuniontype-excludedmembers"},e.a.createElement(n.AnchorLink,{to:"#excludeuniontype-excludedmembers","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),e.a.createElement("code",null,"Exclude<UnionType, ExcludedMembers>")),e.a.createElement("ul",null,e.a.createElement("li",null,"\u4ECE T \u4E2D\u5254\u9664\u53EF\u4EE5\u8D4B\u503C\u7ED9 U \u7684\u7C7B\u578B"),e.a.createElement("li",null,e.a.createElement("code",null,"type Exclude<T, U> = T extends U ? never : T;"))),e.a.createElement("h3",{id:"extracttype-union"},e.a.createElement(n.AnchorLink,{to:"#extracttype-union","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),e.a.createElement("code",null,"Extract<Type, Union>")),e.a.createElement("ul",null,e.a.createElement("li",null,"\u63D0\u53D6 T \u4E2D\u53EF\u4EE5\u8D4B\u503C\u7ED9 U \u7684\u7C7B\u578B"),e.a.createElement("li",null,e.a.createElement("code",null,"type Extract<T, U> = T extends U ? T : never;"))),e.a.createElement("h3",{id:"nonnullabletype"},e.a.createElement(n.AnchorLink,{to:"#nonnullabletype","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),e.a.createElement("code",null,"NonNullable<Type>")),e.a.createElement("ul",null,e.a.createElement("li",null,"\u4ECE T \u4E2D\u5254\u9664 null \u548C undefined"),e.a.createElement("li",null,e.a.createElement("code",null,"type NonNullable<T> = T extends null | undefined ? never : T;"))),e.a.createElement("h3",{id:"parameterstype"},e.a.createElement(n.AnchorLink,{to:"#parameterstype","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),e.a.createElement("code",null,"Parameters<Type>")),e.a.createElement(t.a,{code:`/**
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
type D = Parameters<typeof Math.max>; // number[]`,lang:"tsx"}),e.a.createElement("h3",{id:"constructorparameterstype"},e.a.createElement(n.AnchorLink,{to:"#constructorparameterstype","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),e.a.createElement("code",null,"ConstructorParameters<Type>")),e.a.createElement(t.a,{code:`/**
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
// [string, (string | undefined)?]`,lang:"tsx"}),e.a.createElement("h3",{id:"returntypetype"},e.a.createElement(n.AnchorLink,{to:"#returntypetype","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),e.a.createElement("code",null,"ReturnType<Type>")),e.a.createElement("ul",null,e.a.createElement("li",null,"\u83B7\u53D6\u51FD\u6570\u8FD4\u56DE\u503C\u7C7B\u578B"),e.a.createElement("li",null,e.a.createElement("code",null,"type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;"))),e.a.createElement(t.a,{code:"type T0 = ReturnType<() => string>;",lang:"tsx"}),e.a.createElement("h3",{id:"instancetypetype"},e.a.createElement(n.AnchorLink,{to:"#instancetypetype","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),e.a.createElement("code",null,"InstanceType<Type>")),e.a.createElement("ul",null,e.a.createElement("li",null,"\u83B7\u53D6\u6784\u9020\u51FD\u6570\u7C7B\u578B\u7684\u5B9E\u4F8B\u7C7B\u578B")),e.a.createElement(t.a,{code:`/**
 * Obtain the return type of a constructor function type
 */
type InstanceType<T extends new (...args: any[]) => any> = T extends new (
  ...args: any[]
) => infer R
  ? R
  : any;
type A = InstanceType<ErrorConstructor>; // Error
type B = InstanceType<FunctionConstructor>; // Function
type C = InstanceType<RegExpConstructor>; // RegExp`,lang:"tsx"}),e.a.createElement("h2",{id:"10-\u5DE5\u5177\u51FD\u6570"},e.a.createElement(n.AnchorLink,{to:"#10-\u5DE5\u5177\u51FD\u6570","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"10. \u5DE5\u5177\u51FD\u6570"),e.a.createElement("h4",{id:"overrideproperty"},e.a.createElement(n.AnchorLink,{to:"#overrideproperty","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"OverrideProperty"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u8986\u76D6\u63A5\u53E3\u5C5E\u6027")),e.a.createElement(t.a,{code:`/**
 * Returns object T, but with T[K] overridden to type U.
 * @example
 * type MyObject = { a: number, b: string }
 * OverrideProperty<MyObject, "a", string> // returns { a: string, b: string }
 */
export type OverrideProperty<T, K extends keyof T, U> = Omit<T, K> &
  { [P in keyof Pick<T, K>]: U };

// type Modify<T, R> = Omit<T, keyof R> & R;`,lang:"tsx"}),e.a.createElement("h4",{id:"deeppartial"},e.a.createElement(n.AnchorLink,{to:"#deeppartial","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"DeepPartial"),e.a.createElement(t.a,{code:`type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};`,lang:"tsx"}),e.a.createElement("h4",{id:"deeprequired"},e.a.createElement(n.AnchorLink,{to:"#deeprequired","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"DeepRequired"),e.a.createElement(t.a,{code:`type DeepRequired<T> = {
  [K in keyof T]-?: T[K] extends object ? DeepRequired<T[K]> : T[K];
};`,lang:"tsx"}),e.a.createElement("h4",{id:"getcommonkeys"},e.a.createElement(n.AnchorLink,{to:"#getcommonkeys","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"GetCommonKeys"),e.a.createElement(t.a,{code:`// \u63D0\u53D6\u516C\u4F17\u5C5E\u6027
type CommonKeys = Extract<keyof Worker, keyof Student>;`,lang:"tsx"}),e.a.createElement("h4",{id:"deletepartial"},e.a.createElement(n.AnchorLink,{to:"#deletepartial","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"DeletePartial"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u5220\u9664\u5C5E\u6027\u4E2D\u7684\u53EF\u9009\u5C5E\u6027")),e.a.createElement(t.a,{code:`type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};`,lang:"tsx"}),e.a.createElement("h4",{id:"\u5DEE\u96C6"},e.a.createElement(n.AnchorLink,{to:"#\u5DEE\u96C6","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5DEE\u96C6"),e.a.createElement("ul",null,e.a.createElement("li",null,"worKer \u5728 student \u4E2D\u4E0D\u5B58\u5728\u7684 key")),e.a.createElement(t.a,{code:"type ExcludeKeys = Exclude<keyof Worker, keyof Student>;",lang:"tsx"}),e.a.createElement("h4",{id:"tuple--union"},e.a.createElement(n.AnchorLink,{to:"#tuple--union","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"tuple => union"),e.a.createElement("ul",null,e.a.createElement("li",null,"[string, number] -> string | number")),e.a.createElement(t.a,{code:`type TTuple = [string, number];
type Res = TTuple[number]; // string | number`,lang:"tsx"}),e.a.createElement("h4",{id:"union--intersection"},e.a.createElement(n.AnchorLink,{to:"#union--intersection","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"union => intersection"),e.a.createElement("ul",null,e.a.createElement("li",null,"T1 | T2 -> T1 & T2")),e.a.createElement(t.a,{code:`type UnionToIntersection<U> = (U extends any
? (k: U) => void
: never) extends (k: infer I) => void
  ? I
  : never;

type Result = UnionToIntersection<T1 | T2>; // T1 & T2`,lang:"tsx"}),e.a.createElement("h2",{id:"11-react-\u63A5\u53E3"},e.a.createElement(n.AnchorLink,{to:"#11-react-\u63A5\u53E3","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"11. ",e.a.createElement(n.Link,{to:"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/1349b640d4d07f40aa7c1c6931f18e3fbf667f3a/types/react/index.d.ts#L835"},"react \u63A5\u53E3")),e.a.createElement("h4",{id:"base"},e.a.createElement(n.AnchorLink,{to:"#base","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"base"),e.a.createElement(t.a,{code:`# \u7EC4\u4EF6
class xxx extends React.Component<PropType,StateType>{ }
xxx: React.FunctionComponent | FC
# \u51FD\u6570props
React.ComponentProps<'button'>
# jsx
React.ReactNode JSX.Element
JSX.Element-> \u8FD4\u56DE\u503CReact.createElement
React.ReactNode-> \u7EC4\u4EF6\u7684\u8FD4\u56DE\u503C
# css
React.CSSProperties
# children
React.FunctionComponentElement
# html\u5143\u7D20\u63A5\u53E3
ButtonHTMLAttributes, AnchorHTMLAttributes
# promise
Promise<string[]>
# \u952E\u76D8\u4E8B\u4EF6
e:React.KeyboardEvent
# props
React.ButtonHTMLAttributes<HTMLButtonElement>

# \u4E8B\u4EF6
onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
React.FormEvent<HTMLInputElement>

onSubmit: e: React.SyntheticEvent
e.target as typeof e.target & {
  email: {value: string }
}
e.target.email.value

# \u5BFC\u51FAprops
  type ComponentProps<T> = T extends
  | React.ComponentType<infer P>
  | React.Component<infer P>
  ? JSX.LibraryManagedAttributes<T, P>
  : never;

const TestComponent = (props: ComponentProps<typeof GreetComponent>) => {
  return <h1 />;
};
const el = <TestComponent name="foo" />;

# \u7EC4\u4EF6\u5B9E\u4F8B \u89C1\u4E0B\u65B9`,lang:"tsx"}),e.a.createElement("h4",{id:"\u7EC4\u4EF6\u5B9E\u4F8B"},e.a.createElement(n.AnchorLink,{to:"#\u7EC4\u4EF6\u5B9E\u4F8B","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u7EC4\u4EF6\u5B9E\u4F8B"),e.a.createElement("h4",{id:"class"},e.a.createElement(n.AnchorLink,{to:"#class","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"class"),e.a.createElement(t.a,{code:`import React from 'react';
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
}`,lang:"tsx"}),e.a.createElement("h4",{id:"hook"},e.a.createElement(n.AnchorLink,{to:"#hook","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"hook"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u7B2C\u4E00\u79CD\u65B9\u5F0F")),e.a.createElement(t.a,{code:`import React from 'react';
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

export default Countdown;`,lang:"tsx"}),e.a.createElement("ul",null,e.a.createElement("li",null,"\u7B2C\u4E8C\u79CD\u65B9\u5F0F")),e.a.createElement(t.a,{code:`import React from 'react';
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
</script>`,lang:"tsx"}))));c.default=l=>{const s=e.a.useContext(n.context),m=s.demos;return e.a.useEffect(()=>{var u;l!=null&&(u=l.location)!==null&&u!==void 0&&u.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(l.location.hash.slice(1)))},[]),e.a.createElement(o,{demos:m})}}}]);
