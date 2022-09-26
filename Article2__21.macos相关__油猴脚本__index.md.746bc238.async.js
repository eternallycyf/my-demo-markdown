(self.webpackChunkmy_demo_markdown=self.webpackChunkmy_demo_markdown||[]).push([[1879],{89495:function(m,c,n){"use strict";n.r(c);var r=n(12924),e=n.n(r),u=n(16924),l=n(53401);const E=e().memo(({demos:t})=>e().createElement(e().Fragment,null,e().createElement("div",{className:"markdown"},e().createElement("h2",{id:"\u6CB9\u7334\u811A\u672C"},e().createElement(u.AnchorLink,{to:"#\u6CB9\u7334\u811A\u672C","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u6CB9\u7334\u811A\u672C"),e().createElement("h3",{id:"\u4EC0\u4E48\u662F-js-\u811A\u672C"},e().createElement(u.AnchorLink,{to:"#\u4EC0\u4E48\u662F-js-\u811A\u672C","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u4EC0\u4E48\u662F js \u811A\u672C"),e().createElement("ul",null,e().createElement("li",null,"\u7B80\u5355\u7684\u8BF4\u5C31\u662F\u5728\u7F51\u9875\u4E0A\u6267\u884C\u4E00\u6BB5",e().createElement("code",null,"js"),"\u4EE3\u7801"),e().createElement("li",null,"\u5728\u81EA\u52A8\u5316\u6D4B\u8BD5\u7B49\u573A\u666F\u8FD8\u662F\u6709\u4E00\u4E9B\u4F7F\u7528\u4EF7\u503C\u7684"),e().createElement("li",null,"\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u6536\u85CF\u4E00\u4E2A\u4E66\u7B7E"),e().createElement("li",null,"\u5C06\u4ED6\u7684\u5730\u5740\u8BBE\u7F6E\u4E3A\u4EE5\u4E0B\u4EE3\u7801"),e().createElement("li",null,"\u53EA\u9700\u8981\u70B9\u51FB\u4EE5\u4E0B\u5C31\u53EF\u4EE5\u6267\u884C\u4E86")),e().createElement(l.Z,{code:`javascript:(function(){
 ...
})()`,lang:"js"}),e().createElement("h2",{id:"\u5236\u4F5C\u4E00\u4E2A\u6CB9\u7334\u811A\u672C"},e().createElement(u.AnchorLink,{to:"#\u5236\u4F5C\u4E00\u4E2A\u6CB9\u7334\u811A\u672C","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u5236\u4F5C\u4E00\u4E2A\u6CB9\u7334\u811A\u672C"),e().createElement("ul",null,e().createElement("li",null,"\u6CB9\u7334\u7406\u89E3\u4E3A\u66F4\u5F3A\u5927\u529F\u80FD\u7684\u811A\u672C"),e().createElement("li",null,"\u4ED6\u53EF\u4EE5\u5F15\u5165 ",e().createElement("code",null,"jqery vue")," \u7B49\u3002\u8BA9\u6211\u4EEC\u53EF\u4EE5\u65B9\u4FBF\u7684\u7F16\u5199"),e().createElement("li",null,"\u8FD9\u91CC\u53EA\u9700\u8981\u5728\u524D\u7F00\u7684",e().createElement("ul",null,e().createElement("li",null,e().createElement("code",null,"@match")," \u6DFB\u52A0\u5339\u914D\u7684\u7F51\u7AD9\u5730\u5740"),e().createElement("li",null,e().createElement("code",null,"@require")," \u5F15\u5165",e().createElement("code",null,"jquery")),e().createElement("li",null,"\u968F\u540E\u5C31\u53EF\u4EE5\u5728\u81EA\u6267\u884C\u51FD\u6570\u4E2D\u6267\u884C\u81EA\u5DF1\u60F3\u8981\u7684\u64CD\u4F5C\u5566")))),e().createElement(l.Z,{code:`// ==UserScript==
// @name         \u81EA\u52A8\u8F93\u5165\u84DD\u6E56\u5BC6\u7801
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  enter username and password
// @author       eternallycyf
// @match        https://lanhuapp.com/*
// @grant        none
// @require      https://cdn.staticfile.org/jquery/2.1.4/jquery.min.js
// ==/UserScript==

(function() {
  $(document).ready(function() {
    $('input')[0].value = 'xxxx';
    $('.mu-raised-button-label')[0].click();
  });
})();`,lang:"js"}),e().createElement("h2",{id:"vue-\u7F51\u9875\u7684\u8868\u5355\u8D4B\u503C"},e().createElement(u.AnchorLink,{to:"#vue-\u7F51\u9875\u7684\u8868\u5355\u8D4B\u503C","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"vue \u7F51\u9875\u7684\u8868\u5355\u8D4B\u503C"),e().createElement("ul",null,e().createElement("li",null,"\u9700\u8981\u7528 ",e().createElement("code",null,"dispatchEvent(new Event('input'))")," \u5206\u53D1")),e().createElement(l.Z,{code:`javascript: (function() {
  let usernameInput = document.querySelector('input');
  let passwordInput = document.querySelector('input[type=password]');
  usernameInput.value = 'admin';
  usernameInput.dispatchEvent(new Event('input'));
  passwordInput.value = '123456';
  passwordInput.dispatchEvent(new Event('input'));
})();`,lang:"js"}),e().createElement("h2",{id:"react-\u7F51\u9875\u7684\u8868\u5355\u8D4B\u503C"},e().createElement(u.AnchorLink,{to:"#react-\u7F51\u9875\u7684\u8868\u5355\u8D4B\u503C","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"react \u7F51\u9875\u7684\u8868\u5355\u8D4B\u503C"),e().createElement("ul",null,e().createElement("li",null)),e().createElement(l.Z,{code:`javascript: (function() {
  setNativeValue = function(qs, value) {
    const element = document.querySelector(qs);
    const valueSetter = Object.getOwnPropertyDescriptor(element, 'value').set;
    const prototype = Object.getPrototypeOf(element);
    const prototypeValueSetter = Object.getOwnPropertyDescriptor(
      prototype,
      'value',
    ).set;
    if (valueSetter && valueSetter !== prototypeValueSetter) {
      prototypeValueSetter.call(element, value);
    } else {
      valueSetter.call(element, value);
    }
    element.dispatchEvent(new Event('input', { bubbles: true }));
  };
  // \u5BF9\u9700\u8981\u8D4B\u503C\u7684\u8868\u5355\u4F7F\u7528\u8BE5\u65B9\u6CD5
  setNativeValue('\u9009\u62E9\u5668', 'value');
})();`,lang:"js"}))));c.default=t=>{const o=e().useContext(u.context),i=o.demos;return e().useEffect(()=>{var a;t!=null&&(a=t.location)!==null&&a!==void 0&&a.hash&&u.AnchorLink.scrollToAnchor(decodeURIComponent(t.location.hash.slice(1)))},[]),e().createElement(E,{demos:i})}}}]);
