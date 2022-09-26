(self.webpackChunkmy_demo_markdown=self.webpackChunkmy_demo_markdown||[]).push([[7394],{99156:function(p,l,a){"use strict";a.r(l);var i=a(12924),e=a.n(i),n=a(16924),t=a(53401);const o=e().memo(({demos:r})=>e().createElement(e().Fragment,null,e().createElement("div",{className:"markdown"},e().createElement("h1",{id:"typescript-\u6CE8\u91CA\u6587\u6863"},e().createElement(n.AnchorLink,{to:"#typescript-\u6CE8\u91CA\u6587\u6863","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"typescript \u6CE8\u91CA\u6587\u6863"),e().createElement("h2",{id:"\u57FA\u672C\u7C7B\u578B"},e().createElement(n.AnchorLink,{to:"#\u57FA\u672C\u7C7B\u578B","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u57FA\u672C\u7C7B\u578B"),e().createElement("h3",{id:"type"},e().createElement(n.AnchorLink,{to:"#type","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"@type"),e().createElement(t.Z,{code:`# @type \u63CF\u8FF0\u7C7B\u578B \u53D8\u91CF\u7684\u6CE8\u91CA
  @type {string|boolean} {Window} {HTMLElement}
  {(s: string, b: boolean) => number}
  {Function}
  {const}
  {\u63A5\u53E3}
  {typeof import('./xxx').xxx}
  {*}  =>   any
  {?}  =>   unknown
  var xxx;`,lang:"typescript"}),e().createElement("h3",{id:"typedef"},e().createElement(n.AnchorLink,{to:"#typedef","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"@typedef"),e().createElement(t.Z,{code:`# @typedef \u6DFB\u52A0\u6CE8\u91CA\u63A5\u53E3 \u522B\u7684\u5730\u65B9\u53EF\u4EE5\u76F4\u63A5\u7528@typedef\u5B9A\u4E49\u7684
  @typedef {string} A
  @type {A}`,lang:"typescript"}),e().createElement("h3",{id:"filename"},e().createElement(n.AnchorLink,{to:"#filename","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"@filename"),e().createElement(t.Z,{code:`# @filename \u5BFC\u5165\u6587\u4EF6
  ts: @filename: types.d.ts
  js: @param { import("./types").Pet } p`,lang:"typescript"}),e().createElement("h3",{id:"param"},e().createElement(n.AnchorLink,{to:"#param","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"@param"),e().createElement(t.Z,{code:`# @param \u63CF\u8FF0\u53C2\u6570 \u548Ctype\u65B9\u5F0F\u4E00\u6837 \u4F46\u662F\u52A0\u4E86\u53C2\u6570\u540D
  @param {string} \u53C2\u6570\u540D
         {string} [p]         \u53EF\u9009
         {string} [p1='test'] \u53EF\u9009+\u9ED8\u8BA4\u503C
         {string} options.prop1`,lang:"typescript"}),e().createElement("h3",{id:"returns"},e().createElement(n.AnchorLink,{to:"#returns","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"@returns"),e().createElement(t.Z,{code:`# \u8FD4\u56DE\u503C @returns
  @returns {Promise<string[]>}`,lang:"typescript"}),e().createElement("h3",{id:"property"},e().createElement(n.AnchorLink,{to:"#property","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"@property"),e().createElement(t.Z,{code:`# \u5BF9\u8C61\u7684\u5C5E\u6027 @property
  @property {string} [prop1='1']
  @prop {string} [prop1='1']`,lang:"typescript"}),e().createElement("h3",{id:"callback"},e().createElement(n.AnchorLink,{to:"#callback","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"@callback"),e().createElement(t.Z,{code:`# \u6307\u5B9A\u56DE\u8C03\u51FD\u6570\u7C7B\u578B @callback
  @callback requestCallback`,lang:"typescript"}),e().createElement("h3",{id:"template"},e().createElement(n.AnchorLink,{to:"#template","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"@template"),e().createElement(t.Z,{code:`# \u6CDB\u578B @template
  @template T
  @template [T=object] \u9ED8\u8BA4\u503C
  @template U,V
  @param {T} x
  @template {string} T`,lang:"typescript"}),e().createElement("h3",{id:"emum"},e().createElement(n.AnchorLink,{to:"#emum","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"@emum"),e().createElement(t.Z,{code:`# emum
  @emum {number}
  @enum {function(number): number}`,lang:"typescript"}),e().createElement("h2",{id:"class"},e().createElement(n.AnchorLink,{to:"#class","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"class"),e().createElement(t.Z,{code:`#
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
/** @override */  \u8986\u76D6\u57FA\u7C7B\u65B9\u6CD5\u4E0A\u4F7F\u7528
/** @implements {\u91CD\u6784\u7684\u65B9\u6CD5\u540D} */
# \u7EE7\u627F
/**
 * @template T
 * @extends {Set<T>}
 */
class SortableSet extends Set {
  // ...
}
# constructor
\u6DFB\u52A0\u540E\u68C0\u67E5\u66F4\u4E25\u683C  this
@constructor`,lang:"typescript"}),e().createElement("h2",{id:"\u5176\u4ED6"},e().createElement(n.AnchorLink,{to:"#\u5176\u4ED6","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u5176\u4ED6"),e().createElement(t.Z,{code:`# this
@this {HTMLElement}

# \u5F53\u4E00\u4E2A\u51FD\u6570\u88AB\u5F03\u7528\u65F6 \u4F1A\u52A0\u5165\u4E00\u4E2A\u5220\u9664\u7EBF
/** @deprecated */

# @see \u94FE\u63A5\u5230\u7A0B\u5E8F\u4E2D\u7684\u5176\u4ED6\u540D\u79F0 \u70B9\u51FB\u4F1A\u8DF3\u8F6C
type Box<T> = { t: T }
/** @see Box for implementation details */
type Boxify<T> = { [K in keyof T]: Box<T> };

# @link \u53EF\u4EE5\u5728\u4EFB\u4F55\u6807\u7B7E\u91CC\u9762\u4F7F\u7528 \u548C@see\u4E00\u6837
  @link xxx \u6587\u5B57

# @author \u4F5C\u8005
  @author Jun <xxx@qq.com>

# \u53EF\u4EE5\u4E3A\u7A7A\u7684\u7C7B\u578B
  @type {!number}`,lang:"typescript"}),e().createElement("h3",{id:"\u53C2\u8003\u94FE\u63A5"},e().createElement(n.AnchorLink,{to:"#\u53C2\u8003\u94FE\u63A5","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u53C2\u8003\u94FE\u63A5"),e().createElement("ul",null,e().createElement("li",null,e().createElement("p",null,e().createElement(n.Link,{to:"https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html"},"https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html"))),e().createElement("li",null,e().createElement("p",null,e().createElement(n.Link,{to:"https://jsdoc.app/"},"https://jsdoc.app/"))),e().createElement("li",null,e().createElement("p",null,e().createElement(n.Link,{to:"https://google.github.io/styleguide/jsguide.html"},"https://google.github.io/styleguide/jsguide.html")))))));l.default=r=>{const m=e().useContext(n.context),s=m.demos;return e().useEffect(()=>{var c;r!=null&&(c=r.location)!==null&&c!==void 0&&c.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(r.location.hash.slice(1)))},[]),e().createElement(o,{demos:s})}}}]);
