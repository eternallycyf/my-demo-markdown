---
order: 21
nav:
  title: 前端之路
  path: /guide
---

## 什么是 js 脚本

- 简单的说就是在网页上执行一段`js`代码
- 在自动化测试等场景还是有一些使用价值的
- 我们可以通过收藏一个书签
- 将他的地址设置为以下代码
- 只需要点击以下就可以执行了

```js
javascript:(function(){
 ...
})()
```

## 制作一个油猴脚本

- 油猴理解为更强大功能的脚本
- 他可以引入 `jqery vue` 等。让我们可以方便的编写
- 这里只需要在前缀的
  - `@match` 添加匹配的网站地址
  - `@require` 引入`jquery`
  - 随后就可以在自执行函数中执行自己想要的操作啦

```js
// ==UserScript==
// @name         自动输入蓝湖密码
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
})();
```

## vue 网页的表单赋值

- 需要用 `dispatchEvent(new Event('input'))` 分发

```js
javascript: (function() {
  let usernameInput = document.querySelector('input');
  let passwordInput = document.querySelector('input[type=password]');
  usernameInput.value = 'admin';
  usernameInput.dispatchEvent(new Event('input'));
  passwordInput.value = '123456';
  passwordInput.dispatchEvent(new Event('input'));
})();
```

## react 网页的表单赋值

-

```js
javascript: (function() {
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
  // 对需要赋值的表单使用该方法
  setNativeValue('选择器', 'value');
})();
```
