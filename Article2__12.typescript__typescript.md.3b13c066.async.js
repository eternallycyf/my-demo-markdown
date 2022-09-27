(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"9MQq":function(d,l,a){"use strict";a.r(l);var o=a("cDcd"),e=a.n(o),n=a("dEAq"),E=a.n(n),t=a("H1Ra"),c=a("dMo/");const i=e.a.memo(({demos:r})=>e.a.createElement(e.a.Fragment,null,e.a.createElement("div",{className:"markdown"},e.a.createElement("h1",{id:"typescript"},e.a.createElement(n.AnchorLink,{to:"#typescript","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Typescript"),e.a.createElement("h2",{id:"1-\u51C6\u5907\u9636\u6BB5"},e.a.createElement(n.AnchorLink,{to:"#1-\u51C6\u5907\u9636\u6BB5","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"1 \u51C6\u5907\u9636\u6BB5"),e.a.createElement(t.a,{code:`tsc hello.ts     =>  .ts
tsc --init
\u7EC8\u7AEF ctrl+shift+b \u76D1\u89C6tsc
\u6216\u8005\u5728\u6700\u4E0A\u65B9 \u83DC\u5355 \u7EC8\u7AEF \u8FD0\u884C\u4EFB\u52A1 \u76D1\u89C6tsconfig.json`,lang:"typescript"}),e.a.createElement("h2",{id:"2-\u6982\u5FF5"},e.a.createElement(n.AnchorLink,{to:"#2-\u6982\u5FF5","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"2. \u6982\u5FF5"),e.a.createElement("h3",{id:"\u7C7B\u578B\u63A8\u65AD"},e.a.createElement(n.AnchorLink,{to:"#\u7C7B\u578B\u63A8\u65AD","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u7C7B\u578B\u63A8\u65AD"),e.a.createElement(t.a,{code:`\u5982\u679C\u5B9A\u4E49\u7684\u65F6\u5019\u6CA1\u6709\u8D4B\u503C\uFF0C\u4E0D\u7BA1\u4E4B\u540E\u6709\u6CA1\u6709\u8D4B\u503C\uFF0C\u90FD\u4F1A\u88AB\u63A8\u65AD\u6210 any \u7C7B\u578B\u800C\u5B8C\u5168\u4E0D\u88AB\u7C7B\u578B\u68C0\u67E5\uFF1A
\u5982\u679C\u5B9A\u4E49\u7684\u65F6\u5019\u8D4B\u503C\u4E86  \u5C31\u63A8\u65AD\u6210\u8FD9\u4E2A\u683C\u5F0F`,lang:"unknown"}),e.a.createElement("h3",{id:"tsconfig"},e.a.createElement(n.AnchorLink,{to:"#tsconfig","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"tsconfig"),e.a.createElement(t.a,{code:`{
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
}`,lang:"js"}),e.a.createElement("h3",{id:"declare"},e.a.createElement(n.AnchorLink,{to:"#declare","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"declare"),e.a.createElement(t.a,{code:`// \u5168\u5C40\u7C7B\u578B\u6807\u6CE8
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
  ],`,lang:"typescript"}),e.a.createElement("h3",{id:"export"},e.a.createElement(n.AnchorLink,{to:"#export","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"export"),e.a.createElement(t.a,{code:`# \u517C\u5BB9require
export = xxx;
import xxx = require('./xxx')
#
import fs = require("fs");
const code = fs.readFileSync("hello.ts", "utf8");`,lang:"js"}),e.a.createElement("h3",{id:"namespace"},e.a.createElement(n.AnchorLink,{to:"#namespace","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"namespace"),e.a.createElement(t.a,{code:`# \u76F8\u5F53\u4E8E\u81EA\u6267\u884C\u51FD\u6570
namespace xxx {
  export function log(){}
}
xxx.log('xx')
# \u590D\u5236\u4E00\u4E2A\u7C7B
namespace importing {
  export class Foo {}
}

import Bar = importing.Foo;
let bar: Bar; // ok`,lang:"js"}),e.a.createElement("h3",{id:"mixin"},e.a.createElement(n.AnchorLink,{to:"#mixin","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"mixin"),e.a.createElement("ul",null,e.a.createElement("li",null,e.a.createElement(n.Link,{to:"https://mariusschulz.com/blog/mixin-classes-in-typescript"},"https://mariusschulz.com/blog/mixin-classes-in-typescript"))),e.a.createElement(t.a,{code:`class SmartObject implements Disposable, Activatable { }
#
applyMixins(SmartObject, [Disposable, Activatable]);
#
function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        })
    });
}`,lang:"js"}),e.a.createElement("h3",{id:"this-\u6307\u5411"},e.a.createElement(n.AnchorLink,{to:"#this-\u6307\u5411","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"this \u6307\u5411"),e.a.createElement(t.a,{code:`type ThisPointer = { name: '19Qingfeng' };
function xxx(this: ThisPointer) {
  this.name;
}`,lang:"js"}),e.a.createElement("h3",{id:"\u7248\u672C\u95EE\u9898"},e.a.createElement(n.AnchorLink,{to:"#\u7248\u672C\u95EE\u9898","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u7248\u672C\u95EE\u9898"),e.a.createElement(t.a,{code:"@types/react \u8981\u548Cts\u7248\u672C\u5BF9\u5E94 \u4E0D\u7136\u4F1A\u62A5\u9519",lang:"js"}),e.a.createElement("h3",{id:"\u6A21\u677F\u5B57\u7B26\u4E32"},e.a.createElement(n.AnchorLink,{to:"#\u6A21\u677F\u5B57\u7B26\u4E32","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u6A21\u677F\u5B57\u7B26\u4E32"),e.a.createElement(t.a,{code:'type World = "world";\ntype Greeting = `hello ${World}`;\n// type Greeting = "hello world"\n# \u5982\u679C\u662F\u8054\u5408\u7C7B\u578B \u5C31\u4F1A\u6709\u591A\u79CD\u53EF\u80FD',lang:"js"}),e.a.createElement("h2",{id:"3-\u6570\u636E\u7C7B\u578B"},e.a.createElement(n.AnchorLink,{to:"#3-\u6570\u636E\u7C7B\u578B","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"3 \u6570\u636E\u7C7B\u578B"),e.a.createElement("h3",{id:"\u57FA\u672C\u7C7B\u578B"},e.a.createElement(n.AnchorLink,{to:"#\u57FA\u672C\u7C7B\u578B","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u57FA\u672C\u7C7B\u578B"),e.a.createElement(c.a,null,e.a.createElement("thead",null,e.a.createElement("tr",null,e.a.createElement("th",null,"\u6570\u636E\u7C7B\u578B"),e.a.createElement("th",null,"\u63CF\u8FF0"))),e.a.createElement("tbody",null,e.a.createElement("tr",null,e.a.createElement("td",null,"boolean"),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"number"),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"string"),e.a.createElement("td",null,"\u63A8\u8350\u5355\u5F15\u53F7")),e.a.createElement("tr",null,e.a.createElement("td",null,"Array"),e.a.createElement("td",null,"Array",e.a.createElement("number",null," || number [ ] || string [ ] || Array",e.a.createElement("t",null)))),e.a.createElement("tr",null,e.a.createElement("td",null,"tuple"),e.a.createElement("td",null,"\u5143\u7EC4 \u56FA\u5B9A\u957F\u5EA6\u7684\u6570\u7EC4 [string,string?]")),e.a.createElement("tr",null,e.a.createElement("td",null,"Object"),e.a.createElement("td",null,"\u4EFB\u610F\u7684 JS \u5BF9\u8C61 \u4F46\u662F\u4E0D\u80FD\u8C03\u7528\u5176\u4ED6\u65B9\u6CD5 \u5373\u4FBF\u5B83\u771F\u7684\u6709")),e.a.createElement("tr",null,e.a.createElement("td",null,"any"),e.a.createElement("td",null,"\u4EFB\u610F\u7C7B\u578B")),e.a.createElement("tr",null,e.a.createElement("td",null,"unknown"),e.a.createElement("td",null,"\u7C7B\u578B\u5B89\u5168\u7684 any \u533A\u522B\u662F any \u4F1A\u628A\u522B\u7684\u4E5F\u63A8\u65AD\u6210 any \u4ED6\u53EA\u63A8\u65AD\u81EA\u5DF1")),e.a.createElement("tr",null,e.a.createElement("td",null,"null"),e.a.createElement("td",null,"\u53EF\u4EE5\u8D4B\u7ED9\u5176\u4ED6\u7C7B\u578B\u53D8\u91CF \u4F46\u5982\u679C--strictNullChecks \u5C31\u53EA\u80FD\u7ED9\u81EA\u5DF1")),e.a.createElement("tr",null,e.a.createElement("td",null,"undefined"),e.a.createElement("td",null,"\u53EF\u4EE5\u8D4B\u7ED9\u5176\u4ED6\u7C7B\u578B\u53D8\u91CF \u4F46\u5982\u679C--strictNullChecks \u5C31\u53EA\u80FD\u7ED9\u81EA\u5DF1")),e.a.createElement("tr",null,e.a.createElement("td",null,"void"),e.a.createElement("td",null,"\u51FD\u6570\u6CA1\u6709\u8FD4\u56DE\u503C\u4ED6\u7684\u7C7B\u578B\u5C31\u662F void \u53EA\u80FD undefined null")),e.a.createElement("tr",null,e.a.createElement("td",null,"never"),e.a.createElement("td",null,"\u6CA1\u6709\u503C \u4E0D\u80FD\u662F\u4EFB\u4F55\u503C: \u7528\u4E8E\u51FD\u6570\u6CA1\u6709\u8FD4\u56DE\u503C \u4F8B\u5982\u53EA\u7528\u4E8E\u62A5\u9519\u7684\u51FD\u6570")),e.a.createElement("tr",null,e.a.createElement("td",null,"ReadonlyArray",e.a.createElement("t",null)),e.a.createElement("td",null,"\u8BA9\u6570\u7EC4\u521B\u5EFA\u540E\u4E0D\u80FD\u4FEE\u6539 \u53EF\u4EE5\u7C7B\u578B\u65AD\u8A00\u91CD\u5199")))),e.a.createElement("h3",{id:"\u5176\u4ED6\u7C7B\u578B"},e.a.createElement(n.AnchorLink,{to:"#\u5176\u4ED6\u7C7B\u578B","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5176\u4ED6\u7C7B\u578B"),e.a.createElement(c.a,null,e.a.createElement("thead",null,e.a.createElement("tr",null,e.a.createElement("th",null,"\u6570\u636E\u7C7B\u578B"),e.a.createElement("th",null,"\u63CF\u8FF0"))),e.a.createElement("tbody",null,e.a.createElement("tr",null,e.a.createElement("td",null,"?:"),e.a.createElement("td",null,"\u53EF\u9009\u5C5E\u6027")),e.a.createElement("tr",null,e.a.createElement("td",null,"!:"),e.a.createElement("td",null,"\u975E\u7A7A\u65AD\u8A00 => ?.")),e.a.createElement("tr",null,e.a.createElement("td",null,"!."),e.a.createElement("td",null,"\u7C7B\u578B\u65AD\u8A00 \u53BB\u9664 null undefined")),e.a.createElement("tr",null,e.a.createElement("td",null,"readonly"),e.a.createElement("td",null,"\u53EA\u8BFB")),e.a.createElement("tr",null,e.a.createElement("td",null,"[xxx:string ]:any"),e.a.createElement("td",null,"\u4E0D\u89C4\u5B9A\u540E\u7EED\u5185\u5BB9\u7C7B\u578B")),e.a.createElement("tr",null,e.a.createElement("td",null,"enum"),e.a.createElement("td",null,"\u679A\u4E3E \u53EA\u80FD\u8D4B\u503C\u4E3A undefined \u548C null")),e.a.createElement("tr",null,e.a.createElement("td",null,"\u5143\u7EC4"),e.a.createElement("td",null,'let x: [number, string] = [10, "jack"]')),e.a.createElement("tr",null,e.a.createElement("td",null,"|"),e.a.createElement("td",null,"\u8054\u5408\u7C7B\u578B \u53EA\u80FD\u540C\u65F6\u4E3A\u4E00\u79CD")),e.a.createElement("tr",null,e.a.createElement("td",null,"&"),e.a.createElement("td",null,"\u4EA4\u53C9\u7C7B\u578B \u5408\u5E76")),e.a.createElement("tr",null,e.a.createElement("td",null,"Partial"),e.a.createElement("td",null,"\u53EF\u9009\u7C7B\u578B\u5408\u5E76 Partial <xxx & xxx>")))),e.a.createElement("h2",{id:"4-\u57FA\u672C-api"},e.a.createElement(n.AnchorLink,{to:"#4-\u57FA\u672C-api","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"4. \u57FA\u672C API"),e.a.createElement("h3",{id:"\u5B9A\u4E49\u53D8\u91CF"},e.a.createElement(n.AnchorLink,{to:"#\u5B9A\u4E49\u53D8\u91CF","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5B9A\u4E49\u53D8\u91CF"),e.a.createElement(t.a,{code:`# \u53D8\u91CF: \u6570\u636E\u7C7B\u578B
var hello: string =  'helloworld'
# \u5BF9\u8C61: {\u5BF9\u8C61\u5C5E\u6027: \u6570\u636E\u7C7B\u578B , ...} = { xxx}
var user: {name: string, age: number}={ name:'jack',age: 15 }
let obj= {name:string} & {age:number}
// \u4EFB\u610F\u7C7B\u578B => \u6CDB\u578B
var c:{name:string,[xxx: string]:any};
# \u6570\u7EC4
var arr: number[] = [1,2,3]
var arr: Array<number> = [1,2,3]
interface arr {
	[index: number]: number
}
// \u6307\u5B9A\u67D0\u4E00\u4E2A\u6570\u7EC4\u4E0B\u7684 \u6BCF\u4E00\u4E2A\u5BF9\u8C61\u7684\u5C5E\u6027
dataSource?: [{ [key: number]: Interface }]
// \u6216\u8005\u8FD9\u6837
interface TestArr {
  username: string,
  password: number
}
interface arr {
  [xx: number]: TestArr
}
var arr: arr = [{ username: 'ss', password: 555 }]`,lang:"typescript"}),e.a.createElement("h3",{id:"\u7C7B\u578B\u65AD\u8A00"},e.a.createElement(n.AnchorLink,{to:"#\u7C7B\u578B\u65AD\u8A00","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u7C7B\u578B\u65AD\u8A00"),e.a.createElement(t.a,{code:`// \u624B\u52A8\u6307\u5B9A\u67D0\u4E00\u4E2A\u503C\u7684\u7C7B\u578B
1.\u503C as \u7C7B\u578B
(someValue as string)  React-jsx\u5FC5\u987B\u7528\u8FD9\u4E2A
2.<\u7C7B\u578B>\u503C
(<string>someValue)

# \u53CC\u91CD\u65AD\u8A00
 const element = (event as any) as HTMLElement; // ok
 as any as JSX.Element;`,lang:"typescript"}),e.a.createElement("h3",{id:"type"},e.a.createElement(n.AnchorLink,{to:"#type","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"type"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u8D77\u522B\u540D\u4E0D\u4F1A\u65B0\u5EFA\u4E00\u4E2A\u7C7B\u578B - \u5B83\u521B\u5EFA\u4E86\u4E00\u4E2A\u65B0 \u540D\u5B57\u6765\u5F15\u7528\u90A3\u4E2A\u7C7B\u578B",e.a.createElement("ul",null,e.a.createElement("li",null,"\u9519\u8BEF\u4FE1\u606F\u4E0D\u4F1A\u4F7F\u7528\u522B\u540D"),e.a.createElement("li",null,"\u7C7B\u578B\u522B\u540D\u4E0D\u80FD\u88AB ",e.a.createElement("code",null,"extends"),"\u548C ",e.a.createElement("code",null,"implements")))),e.a.createElement("li",null,"\u5982\u679C\u65E0\u6CD5\u901A\u8FC7\u63A5\u53E3\u6765\u63CF\u8FF0\u4E00\u4E2A\u7C7B\u578B\u5E76\u4E14\u9700\u8981\u4F7F\u7528\u8054\u5408\u7C7B\u578B\u6216\u5143\u7EC4\u7C7B\u578B\uFF0C\u8FD9\u65F6\u901A\u5E38\u4F1A\u4F7F\u7528\u7C7B\u578B\u522B\u540D")),e.a.createElement(t.a,{code:`# base
type str = string | number;
// \u63A5\u53E3\u4E5F\u53EF\u4EE5\u7528
// type str = \u63A5\u53E31 | \u63A5\u53E32
var str: str = "10"
str = 10
# \u9650\u5236\u56FA\u5B9A\u5E38\u91CF
type sex = '\u7537' | '\u5973'
# \u51FD\u6570\u522B\u540D
type newType = (x: number, y: number) => number
function sum(s: number, y: number): number {
  return x + y
}
const sum2: newType = sum`,lang:"typescript"}),e.a.createElement("h3",{id:"\u51FD\u6570"},e.a.createElement(n.AnchorLink,{to:"#\u51FD\u6570","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u51FD\u6570"),e.a.createElement(t.a,{code:`#
// \u53EF\u9009
name?:number
// \u9ED8\u8BA4\u503C
name: string = 20
# \u7BAD\u5934\u51FD\u6570
const fn: <T>(arg: T) => T
# \u51FD\u6570\u7684\u91CD\u8F7D
function getInfo(name:string):string;
function getInfo(age:number):string;
function getInfo(s:any):any{
    if(typeof s==='string'){
        return '\u6211\u53EB:'+s;
    }else{
        return '\u6211\u7684\u5E74\u9F84\u662F'+s;
    }
}
 console.log(getInfo('\u5F20\u4E09'));   //\u6B63\u786E
 console.log(getInfo(20));   //\u6B63\u786E
// console.log(getInfo(true));    //\u9519\u8BEF\u5199\u6CD5 ts\u7F16\u8BD1\u62A5\u9519
# \u53EF\u4EE5\u76F4\u63A5\u4F20\u4E00\u4E2A\u53D8\u91CF\u8FDB\u53BB \u4F1A\u8DF3\u8FC7ts\u68C0\u67E5
let prop = { colour: "red", width: 100 };
let aaa = fn(prop);
# \u6709\u5C5E\u6027\u7684\u51FD\u6570
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
}`,lang:"typescript"}),e.a.createElement("h3",{id:"\u679A\u4E3E"},e.a.createElement(n.AnchorLink,{to:"#\u679A\u4E3E","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u679A\u4E3E"),e.a.createElement(t.a,{code:`// \u7528\u4E8E\u53D6\u503C \u5E76\u9650\u5B9A\u5728\u4E00\u5B9A\u8303\u56F4  =>  \u4F1A\u88AB\u7F16\u8BD1\u6210\u4E00\u4E2A\u53CC\u5411\u6620\u5C04\u7684\u5BF9\u8C61
 // \u9ED8\u8BA4\u4ECE0\u5F00\u59CB\u9012\u589E \u76F4\u5230\u679A\u4E3E\u8FDB\u884C\u53CD\u5411\u6620\u5C04
enum Days {
  Sun = 3,  // \u4E00\u4E2A\u8BBE\u7F6E\u503C \u5176\u4ED6\u4E5F\u8981\u8BBE\u7F6E
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat
}
let xxx = Days.Sun
# \u5E38\u91CF\u679A\u4E3E
const dnum xxx {

}
# \u76F8\u540C\u540D\u79F0\u7684\u679A\u4E3E\u81EA\u52A8\u5408\u5E76


#
enum Methods {
  'GET',
  'POST',
}
type ReqShape = {
  url: string;
  method: keyof typeof Methods;  // "GET" | "POST"
};`,lang:"typescript"}),e.a.createElement("h2",{id:"5inerface"},e.a.createElement(n.AnchorLink,{to:"#5inerface","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"5.inerface"),e.a.createElement(t.a,{code:`# base
interface IPerson {
  readonly name: string | number,  // \u53EA\u8BFB
   age?: number,                   // \u53EF\u9009
   [propsName: string]: any        // \u4EFB\u610F\u5C5E\u6027\u4E2A\u6570
}
let user: Person = {
   name:"zhuangsan",
   age: 18,
   ...
}
# \u63A5\u53E3\u5D4C\u5957
interface TestArr {
  username: string,
  password: number
}
interface arr {
  [xx: number]: TestArr
}
var arr: arr = [{ username: 'ss', password: 555 }]
# \u51FD\u6570\u63A5\u53E3
interface aa {
  (name: string, age: number): number
}
const fm:aa = function(name:string,age:number){
  return 1
}
# \u63A5\u53E3\u7EE7\u627F
interface \u65B0\u7684\u63A5\u53E3\u540D entends \u63A5\u53E3\u540D, \u63A5\u53E3\u540D{ }
# \u63A5\u53E3\u91CD\u5199
class xxx implements xxx {}
# \u63A5\u53E3\u5B9E\u73B0
class Car implements \u63A5\u53E3\u540D{ }
# \u6CDB\u578B\u7ED3\u51FD\u6570
interface Icreate<T>{
  (a:T,b:T):T
}
const a: Icreate<number> = \u51FD\u6570
# \u4F20\u5165\u7684\u53C2\u6570\u5FC5\u987B\u6709length\u5C5E\u6027
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
// Argument of type 'number' is not assignable to parameter of type '{ length: number; }'.`,lang:"js"}),e.a.createElement("h2",{id:"6-\u6CDB\u578B"},e.a.createElement(n.AnchorLink,{to:"#6-\u6CDB\u578B","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"6. \u6CDB\u578B"),e.a.createElement(t.a,{code:`#
\u6307\u4E0D\u9884\u5148\u6307\u5B9A\u5177\u4F53\u7C7B\u578B \u800C\u4F7F\u7528\u65F6\u5019\u518D\u6307\u5B9A \u7684\u4E00\u79CD\u7279\u6027
function echo<T>(arg: T): T { return arg }
echo('4')  echo<string>('4')
function swap<T, U>(data: [T, U]): [U, T] { }
T[]
# \u7EA6\u675F\u6CDB\u578B
interface Inter {
  length: number
}
function fn<T extends Inter>(a: T): number {
  return a.length
}
fn(1)  // \u62A5\u9519 \u6570\u5B57\u6CA1\u6709.length \u5FC5\u987B\u8981\u6709.length


# \u4E0E\u63A5\u53E3\u7ED3\u5408
interface Icreate <T,U> {
  name:T;
  age:U;
}
let test:Icreate<number,string> = {name:5\uFF0Cage="ss"}
# \u4E0E\u51FD\u6570\u7684\u7ED3\u5408
interface Icreate {
  <T>(name: string, value: T): Array<T>
}
let aaaaaa: Icreate;
aaaaaa = function <T>(name: string, value: T): Array<T> {
  return []
}
var aaa: number[] = aaaaaa("zzhang", 5)
# \u4E0E\u7C7B\u7684\u7ED3\u5408
class Person <T>{
  name: T;
  constructor(name:T){
    this.name = name
  }
}
const xxx = new Person<string>('\u5F20\u4E09')`,lang:"js"}),e.a.createElement("h2",{id:"7-class"},e.a.createElement(n.AnchorLink,{to:"#7-class","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"7. class"),e.a.createElement("h3",{id:"js"},e.a.createElement(n.AnchorLink,{to:"#js","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"js"),e.a.createElement(t.a,{code:"#\u79C1\u6709\u5C5E\u6027",lang:"js"}),e.a.createElement("h3",{id:"api"},e.a.createElement(n.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"API"),e.a.createElement(t.a,{code:`# \u904D\u5386\u5C5E\u6027
Object.kes(\u5B9E\u4F8B\u540D).forEach(key=>\u5B9E\u4F8B\u540D[key])
# \u904D\u5386\u65B9\u6CD5
className.prototype \u4E0D\u80FD\u901A\u8FC7 forEach\u904D\u5386 // \u6784\u9020\u51FD\u6570 \u53EF\u4EE5
Object.getOwnPropertyNames([className].prototype)
  .forEach(item=>[className].prototype[item])`,lang:"js"}),e.a.createElement("h3",{id:"\u7C7B\u8868\u8FBE\u5F0F"},e.a.createElement(n.AnchorLink,{to:"#\u7C7B\u8868\u8FBE\u5F0F","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u7C7B\u8868\u8FBE\u5F0F"),e.a.createElement(t.a,{code:`const aaa = class {
  // \u533F\u540D
}

const bbb = class ccc {
  ccc.name
  // \u53EA\u6709\u5185\u90E8\u53EF\u4EE5\u8BBF\u95EEccc
}`,lang:"js"}),e.a.createElement("h3",{id:"4-\u4E2A\u72B6\u6001"},e.a.createElement(n.AnchorLink,{to:"#4-\u4E2A\u72B6\u6001","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"4 \u4E2A\u72B6\u6001"),e.a.createElement("h4",{id:"public"},e.a.createElement(n.AnchorLink,{to:"#public","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"public"),e.a.createElement(t.a,{code:"\u5B9E\u4F8B\u548C\u7236\u7C7B\u80FD\u90FD\u8BBF\u95EE;",lang:"js"}),e.a.createElement("h4",{id:"static"},e.a.createElement(n.AnchorLink,{to:"#static","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"static"),e.a.createElement(t.a,{code:`// \u53EA\u80FD\u7236\u7C7B\u70B9\u51FA\u6765
// \u7C7B\u4F3C\u4E8E\u76F4\u63A5\u5728 Person.prototype.aaaa = '\u5B59\u609F\u7A7A'
//  constructor() { this.bbb = 12; }
class Person {
  static aaaa: string = ' \u5B59\u609F\u7A7A';
  bbb: number = 12;
  bbb!: number = 12;
  [s: string]: boolean | ((s: string) => boolean);
}
const per = new Person()
console.log(Person.aaaa)`,lang:"js"}),e.a.createElement("h4",{id:"private"},e.a.createElement(n.AnchorLink,{to:"#private","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"private"),e.a.createElement(t.a,{code:`// private    \u79C1\u6709\u7684         \u5916\u754C\u65E0\u6CD5\u8BBF\u95EE \u4E0D\u80FD\u88AB\u7EE7\u627F
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
console.log(per) //10`,lang:"js"}),e.a.createElement("h4",{id:"protected"},e.a.createElement(n.AnchorLink,{to:"#protected","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"protected"),e.a.createElement(t.a,{code:"// protected  \u53D7\u4FDD\u62A4\u7684       \u5916\u754C\u65E0\u6CD5\u8BBF\u95EE \u53EF\u4EE5\u88AB\u7EE7\u627F",lang:"js"}),e.a.createElement("h3",{id:"readonly"},e.a.createElement(n.AnchorLink,{to:"#readonly","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"readonly"),e.a.createElement(t.a,{code:`readonly ccc: string = 'ss'
static readonly ccc: string = 'ss'
\u53EA\u80FD\u5728\u6784\u9020\u5668\u91CC\u9762\u4FEE\u6539`,lang:"js"}),e.a.createElement("h3",{id:"get-set"},e.a.createElement(n.AnchorLink,{to:"#get-set","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"get set"),e.a.createElement(t.a,{code:`// \u624B\u52A8\u5B9A\u4E49 \u83B7\u53D6\u548C\u66F4\u6539\u65B9\u6CD5 \u7684computed
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
console.log(per) //10`,lang:"js"}),e.a.createElement("h3",{id:"constructor"},e.a.createElement(n.AnchorLink,{to:"#constructor","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"constructor"),e.a.createElement("h4",{id:"constructor-1"},e.a.createElement(n.AnchorLink,{to:"#constructor-1","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"constructor"),e.a.createElement(t.a,{code:`class Person {
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
const per: Person = new Person('2', 2)`,lang:"js"}),e.a.createElement("h4",{id:"super"},e.a.createElement(n.AnchorLink,{to:"#super","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"super"),e.a.createElement(t.a,{code:`class Animal {
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
new Cat('as', 1, 'asd').sayHi();`,lang:"js"}),e.a.createElement("h3",{id:"extends"},e.a.createElement(n.AnchorLink,{to:"#extends","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"extends"),e.a.createElement(t.a,{code:`\u5B50\u7C7B\u91CD\u5199\u65B9\u6CD5 \u5728\u5B50\u7C7B\u4E2D \u4F1A\u8986\u76D6\u7236\u7C7B\u7684\u65B9\u6CD5
// \u5982\u679C\u8981\u52A0\u5C5E\u6027 \u5FC5\u987B\u5199super \u91CD\u5199\u5C5E\u6027`,lang:"js"}),e.a.createElement("h3",{id:"implements"},e.a.createElement(n.AnchorLink,{to:"#implements","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"implements"),e.a.createElement(t.a,{code:`# implements  \u9700\u8981\u91CD\u5199\u5C5E\u6027\u548C\u65B9\u6CD5
class A implements \u63A5\u53E3{
   /**
    * @override
    */
}
// \u4E0D\u7528\u5B9A\u4E49 super() \u53EF\u4EE5\u91CD\u5199 \u5C5E\u6027\u548C\u65B9\u6CD5`,lang:"js"}),e.a.createElement("h3",{id:"abstract"},e.a.createElement(n.AnchorLink,{to:"#abstract","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"abstract"),e.a.createElement(t.a,{code:`# \u62BD\u8C61\u7C7B \u7981\u6B62\u88AB\u5B9E\u4F8B\u5316 \u7528\u6765\u88AB\u7EE7\u627F\u7684
abstract class Parent{

}
# \u7236\u7C7B\u6307\u5B9A\u7ED3\u6784 \u5B50\u7C7B\u6765\u5B9E\u73B0 \u907F\u514D\u5FD8\u8BB0\u91CD\u5199\u65B9\u6CD5\u5BFC\u81F4\u4F7F\u7528\u9ED8\u8BA4\u7684\u65B9\u6CD5
// \u62BD\u8C61\u65B9\u6CD5\u53EA\u80FD\u4EE5abstract\u5F00\u5934 \u6CA1\u6709\u65B9\u6CD5\u4F53
// \u53EA\u80FD\u5B9A\u4E49\u5728\u62BD\u8C61\u7C7B\u91CC\u9762 \u5B50\u7C7B\u5FC5\u987B\u91CD\u5199
abstract class Parent{
 abstract sayHi():void;
}`,lang:"js"}),e.a.createElement("h2",{id:"8-\u88C5\u9970\u5668"},e.a.createElement(n.AnchorLink,{to:"#8-\u88C5\u9970\u5668","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"8. \u88C5\u9970\u5668"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u5728\u8FD0\u884C\u65F6\u7ACB\u5373\u8C03\u7528 \u88AB\u88C5\u9970\u7684\u58F0\u660E\u4FE1\u606F\u505A\u4E3A\u53C2\u6570\u4F20\u5165")),e.a.createElement(t.a,{code:`function Path(name: string) {
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
 methodName:string, \u51FD\u6570\u540D
 descriptor: PropertyDecorator \u63CF\u8FF0
)`,lang:"js"}),e.a.createElement("h2",{id:"9-\u9AD8\u7EA7-api"},e.a.createElement(n.AnchorLink,{to:"#9-\u9AD8\u7EA7-api","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"9. \u9AD8\u7EA7 API"),e.a.createElement("h3",{id:"partial"},e.a.createElement(n.AnchorLink,{to:"#partial","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Partial"),e.a.createElement(t.a,{code:`// \u53EF\u9009\u7C7B\u578B
Partial <xxx & xxx>`,lang:"js"}),e.a.createElement("h3",{id:"omit"},e.a.createElement(n.AnchorLink,{to:"#omit","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"omit"),e.a.createElement(t.a,{code:`// \u5FFD\u89C6\u91CD\u5199\u67D0\u4E2A\u5C5E\u6027
interface A {
  a: number;
  b: number;
}
interface B extends Omit<A, 'a'> {
  a: boolean;
}`,lang:"js"}),e.a.createElement("h3",{id:"record"},e.a.createElement(n.AnchorLink,{to:"#record","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Record"),e.a.createElement(t.a,{code:`// \u5B9A\u4E49\u4E00\u4E2A\u5BF9\u8C61\u7684 key \u548C value
type keys = 'A' | 'B' | 'C'
const result: Record<keys, number> = {
  A: 1,
  B: 2,
  C: 3
}
#
type Record<K extends string, T> = {
    [P in K]: T;
}`,lang:"js"}),e.a.createElement("h3",{id:"typeof"},e.a.createElement(n.AnchorLink,{to:"#typeof","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"typeof"),e.a.createElement(t.a,{code:"// \u81EA\u52A8\u63A8\u65AD\u540E\u7EED\u7684\u5C5E\u6027",lang:"js"}),e.a.createElement("h3",{id:"keyof"},e.a.createElement(n.AnchorLink,{to:"#keyof","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"keyof"),e.a.createElement(t.a,{code:`# \u53EA\u4F1A\u8FD4\u56DE number string symbol\u7C7B\u578B \u5176\u4ED6\u9700\u8981\u81EA\u5DF1 & || Exclude
# keyof \u53EF\u4EE5\u7528\u6765\u53D6\u5F97\u4E00\u4E2A\u5BF9\u8C61\u63A5\u53E3\u7684\u6240\u6709 key \u503C.
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
type xxx = keyof typeof \u53D8\u91CF(enum)

# \u751F\u6210value
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
// type Age2 = number`,lang:"js"}),e.a.createElement("h3",{id:"in"},e.a.createElement(n.AnchorLink,{to:"#in","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"in"),e.a.createElement(t.a,{code:`in \u5219\u53EF\u4EE5\u904D\u5386\u679A\u4E3E\u7C7B\u578B
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
}`,lang:"js"}),e.a.createElement("h3",{id:"is"},e.a.createElement(n.AnchorLink,{to:"#is","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"is"),e.a.createElement(t.a,{code:`function isNumber(x: any): x is number { //\u9ED8\u8BA4\u4F20\u5165\u7684\u662Fnumber\u7C7B\u578B
  return typeof x === "number";
}

console.log(isNumber(7)) // true
console.log(isNumber('7')) //false
console.log(isNumber(true)) //false`,lang:"js"}),e.a.createElement("h3",{id:"pick"},e.a.createElement(n.AnchorLink,{to:"#pick","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Pick"),e.a.createElement(t.a,{code:`# \u4ECE\u590D\u5408\u7C7B\u578B\u4E2D \u53D6\u51FA\u51E0\u4E2A\u60F3\u8981\u7684\u7C7B\u578B\u7EC4\u5408
type Pick<T, K extends keyof T> = {
	[key in K]: T[key]
}
# Pick<\u63A5\u53E3,'key1','key2'>
interface Props {
  name: string;
  label: number;
  value: boolean;
}

type ChildrenProps = Pick<Props, 'name' | 'label'>;`,lang:"js"}),e.a.createElement("h3",{id:"infer"},e.a.createElement(n.AnchorLink,{to:"#infer","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"infer"),e.a.createElement(t.a,{code:`\u8868\u793A\u5728 extends \u6761\u4EF6\u8BED\u53E5\u4E2D\u5F85\u63A8\u65AD\u7684\u7C7B\u578B\u53D8\u91CF
    type Info<T> = T extends { a: infer U; b: infer U } ? U : never;

    type Props = Info<{ a: string; b: number }>; // Props\u7C7B\uFF1A string | number

    type Props1 = Info<number> // Props\u7C7B\u578B\uFF1A never`,lang:"js"}),e.a.createElement("h2",{id:"10-\u5176\u4ED6"},e.a.createElement(n.AnchorLink,{to:"#10-\u5176\u4ED6","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"10. \u5176\u4ED6"),e.a.createElement("h3",{id:"\u5DE5\u5177\u51FD\u6570"},e.a.createElement(n.AnchorLink,{to:"#\u5DE5\u5177\u51FD\u6570","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5DE5\u5177\u51FD\u6570"),e.a.createElement(t.a,{code:`# \u8986\u76D6\u63A5\u53E3\u5C5E\u6027
/**
 * Returns object T, but with T[K] overridden to type U.
 * @example
 * type MyObject = { a: number, b: string }
 * OverrideProperty<MyObject, "a", string> // returns { a: string, b: string }
 */
export type OverrideProperty<T, K extends keyof T, U> = Omit<T, K> & { [P in keyof Pick<T, K>]: U };
# \u7B2C\u4E8C\u79CD\u65B9\u6CD5
type Modify<T, R> = Omit<T, keyof R> & R;

# \u6DF1\u7684Partial

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};
# \u6DF1\u7684Required
type DeepRequired<T> = {
  [K in keyof T]-?: T[K] extends object ? DeepRequired<T[K]> : T[K];
};


# \u63D0\u53D6\u516C\u4F17\u5C5E\u6027
type CommonKeys = Extract<keyof Worker, keyof Student>
# \u5DEE\u96C6 worKer\u5728student\u4E2D\u4E0D\u5B58\u5728\u7684key
type ExcludeKeys = Exclude<keyof Worker, keyof Student>

  # \u5143\u7EC4\u8F6C\u8054\u5408\u7C7B\u578B
type TTuple = [string, number];
type Res = TTuple[number];  // string | number

# \u5143\u7EC4\u8F6C &
 type UnionToIntersection<U> =
  (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;

type Result = UnionToIntersection<string | number>; // string & number`,lang:"js"}),e.a.createElement("h3",{id:"\u9AD8\u7EA7\u6CDB\u578B"},e.a.createElement(n.AnchorLink,{to:"#\u9AD8\u7EA7\u6CDB\u578B","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u9AD8\u7EA7\u6CDB\u578B"),e.a.createElement(t.a,{code:`Readonly<T>
ReadonlyArray<T>
Partial<T>
Required<T>`,lang:"js"}),e.a.createElement("h3",{id:"\u64CD\u4F5C\u7B26"},e.a.createElement(n.AnchorLink,{to:"#\u64CD\u4F5C\u7B26","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u64CD\u4F5C\u7B26"),e.a.createElement(t.a,{code:`# Uppercase \u628A\u6BCF\u4E2A\u5B57\u7B26\u8F6C\u4E3A\u5927\u5199\u5F62\u5F0F\uFF1A
type Greeting = "Hello, world"
type ShoutyGreeting = Uppercase<Greeting>
// type ShoutyGreeting = "HELLO, WORLD"

type ASCIICacheKey<Str extends string> = \`ID-\${Uppercase<Str>}\`
type MainID = ASCIICacheKey<"my_app">
// type MainID = "ID-MY_APP"

# Lowercase
type Greeting = "Hello, world"
type QuietGreeting = Lowercase<Greeting>
// type QuietGreeting = "hello, world"

type ASCIICacheKey<Str extends string> = \`id-\${Lowercase<Str>}\`
type MainID = ASCIICacheKey<"MY_APP">
// type MainID = "id-my_app"


# Capitalize \u5B57\u7B26\u4E32\u7684\u7B2C\u4E00\u4E2A\u5B57\u7B26\u8F6C\u4E3A\u5927\u5199\u5F62\u5F0F
type LowercaseGreeting = "hello, world";
type Greeting = Capitalize<LowercaseGreeting>;
// type Greeting = "Hello, world"


# Uncapitalize
type UppercaseGreeting = "HELLO WORLD";
type UncomfortableGreeting = Uncapitalize<UppercaseGreeting>;
// type UncomfortableGreeting = "hELLO WORLD"`,lang:"js"}),e.a.createElement("h3",{id:"\u6620\u5C04\u4FEE\u9970\u7B26"},e.a.createElement(n.AnchorLink,{to:"#\u6620\u5C04\u4FEE\u9970\u7B26","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u6620\u5C04\u4FEE\u9970\u7B26"),e.a.createElement(t.a,{code:`readonly ? - + \u6CA1\u5199\u7B49\u4E8E\u4F7F\u7528\u4E86+
#
// \u5220\u9664\u5C5E\u6027\u4E2D\u7684\u53EA\u8BFB\u5C5E\u6027
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
// \u5220\u9664\u5C5E\u6027\u4E2D\u7684\u53EF\u9009\u5C5E\u6027
type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

# as
type MappedTypeWithNewProperties<Type> = {
    [Properties in keyof Type as NewKeyType]: Type[Properties]
}`,lang:"js"}),e.a.createElement("h3",{id:"\u6761\u4EF6\u7C7B\u578B"},e.a.createElement(n.AnchorLink,{to:"#\u6761\u4EF6\u7C7B\u578B","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u6761\u4EF6\u7C7B\u578B"),e.a.createElement(t.a,{code:`# Exclude
// Exclude \u9488\u5BF9\u8054\u5408\u7C7B\u578B omit\u9488\u5BF9 key\u548Cvalue
let a: string | number;
type CustomType = Exclude<typeof a, string>; // number\u7C7B\u578B
Exclude<T, U> -- \u4ECET\u4E2D\u5254\u9664\u53EF\u4EE5\u8D4B\u503C\u7ED9U\u7684\u7C7B\u578B\u3002
Extract<T, U> -- \u63D0\u53D6T\u4E2D\u53EF\u4EE5\u8D4B\u503C\u7ED9U\u7684\u7C7B\u578B\u3002
NonNullable<T> -- \u4ECET\u4E2D\u5254\u9664null\u548Cundefined\u3002
#  ReturnType<T> -- \u83B7\u53D6\u51FD\u6570\u8FD4\u56DE\u503C\u7C7B\u578B\u3002
// type T0 = string
type T0 = ReturnType<() => string>;
#
InstanceType<T> -- \u83B7\u53D6\u6784\u9020\u51FD\u6570\u7C7B\u578B\u7684\u5B9E\u4F8B\u7C7B\u578B\u3002`,lang:"js"}),e.a.createElement("h3",{id:"\u7D22\u5F15\u8BBF\u95EE\u7C7B\u578B"},e.a.createElement(n.AnchorLink,{to:"#\u7D22\u5F15\u8BBF\u95EE\u7C7B\u578B","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u7D22\u5F15\u8BBF\u95EE\u7C7B\u578B"),e.a.createElement(t.a,{code:"",lang:"js"}),e.a.createElement("h3",{id:"\u62C6\u5305"},e.a.createElement(n.AnchorLink,{to:"#\u62C6\u5305","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u62C6\u5305"),e.a.createElement(t.a,{code:`function unproxify<T>(t: Proxify<T>): T {
    let result = {} as T;
    for (const k in t) {
        result[k] = t[k].get();
    }
    return result;
}

let originalProps = unproxify(proxyProps);`,lang:"js"}),e.a.createElement("h2",{id:"11-react-\u63A5\u53E3"},e.a.createElement(n.AnchorLink,{to:"#11-react-\u63A5\u53E3","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"11. react \u63A5\u53E3"),e.a.createElement(t.a,{code:`# class \u57FA\u7C7B
 class xxx extends React.Component<PropType, StateType>{

 }
# \u51FD\u6570\u7EC4\u4EF6
xxx: React.FunctionComponent | FC`,lang:"js"}),e.a.createElement(t.a,{code:`# react\u7EC4\u4EF6\u63A5\u53E3
import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
# react\u7EC4\u4EF6props\u63A5\u53E3
React.ComponentProps<'button'>
# jsx
React.ReactNode
# css
React.CSSProperties
# children
React.FunctionComponentElement
# \u4E8B\u4EF6
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
# \u952E\u76D8\u4E8B\u4EF6
e:React.KeyboardEvent
# props
React.ButtonHTMLAttributes<HTMLButtonElement>
# \u7EC4\u4EF6\u5B9E\u4F8B

// class\u76F4\u63A5\u5199
const test = React.useRef<InstanceType<typeof Test>>(null!);

// hook\u9700\u8981
  const ref = useRef<RefObject>(null);

const Child = forwardRef((props, ref: Ref<RefObject>) => {
}`,lang:"js"}),e.a.createElement(t.a,{code:`# useRef
const divRef = useRef<HTMLDivElement>(null);
if (!divRef.current) throw Error("divRef is not assigned");
divRef.current

const divRef = useRef<HTMLDivElement>(null!);
# forwardRefs
ref: React.Ref<HTMLButtonElement> | null

# \u5BFC\u51FAprops
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
JSX.Element-> \u8FD4\u56DE\u503CReact.createElement
React.ReactNode-> \u7EC4\u4EF6\u7684\u8FD4\u56DE\u503C`,lang:"js"}),e.a.createElement("ul",null,e.a.createElement("li",null,"hook-ref1")),e.a.createElement(t.a,{code:`#
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

export default Countdown`,lang:"js"}),e.a.createElement("ul",null,e.a.createElement("li",null,"hook ref2")),e.a.createElement(t.a,{code:`#
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
};`,lang:"js"}),e.a.createElement("ul",null,e.a.createElement("li",null,"class")),e.a.createElement(t.a,{code:`import React from 'react'
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
}`,lang:"js"}),e.a.createElement("h2",{id:"12-\u95EE\u9898"},e.a.createElement(n.AnchorLink,{to:"#12-\u95EE\u9898","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"12 \u95EE\u9898"),e.a.createElement("h3",{id:"bind"},e.a.createElement(n.AnchorLink,{to:"#bind","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"bind"),e.a.createElement(t.a,{code:`bind\u4F1A\u4E22\u5931\u7C7B\u578B
1.\u4F7F\u7528\u7BAD\u5934\u51FD\u6570
2.\u624B\u52A8\u6307\u5B9A
const add: typeof adder.add = adder.add.bind(adder);
3.\u67EF\u91CC\u5316`,lang:"js"}))));l.default=r=>{const s=e.a.useContext(n.context),m=s.demos;return e.a.useEffect(()=>{var u;r!=null&&(u=r.location)!==null&&u!==void 0&&u.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(r.location.hash.slice(1)))},[]),e.a.createElement(i,{demos:m})}}}]);
