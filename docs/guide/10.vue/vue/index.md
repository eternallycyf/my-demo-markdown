---
order: 10
nav:
  title: 前端之路
  path: /guide
---

# vue

## 1. 准备阶段

### 1.1 准备

- MVVM

  - 数据驱动视图 不操作 DOM
  - model viewModel view

- 响应式数据

  - 当数据发生改变 其他绑定的 dom 都会改变
  - 多页面应用程序

  ```css
  以服务端为主导，前后端混合
  速度慢 等待时间过长
  有利于SEO 搜索引擎优化
  ```

  - 单页面应用程序

  ```css
  速度快
  前后端分离   用接口方式交互 可单可多 以单为主
   AngulaiJS.    开发单页更容易
   ReactJS         组件化
   VueJS
  无法兼容低版本浏览器  大部分都是 IE9以上
  数据都是异步加载过来的 不会被搜索引擎搜索到 不利于SEO
  最主要目的：：为了前后端分离
  ```

  - 前端的工作

  ```css
  前端的工作
  需求分析
  写页面和功能
  通过接口和服务端进行交互
  ```

```javascript
<script src="node_modules/vue/dist/vue.js"></script>
```

### 1.2 工具

- live-server
- vue 谷歌 devtools 调试工具

### 1.3 重绘与回流

```
回流(重排): 当浏览器必须重新处理和绘制部分或全部页面时，回流就会发生

重绘: 不影响布局, 只是标签页面发生变化, 重新绘制

注意: 回流(重排)必引发重绘, 重绘不一定引发回流(重排)
```

### 1.4 虚拟 dom

```
本质是保存dom关键信息的JS对象 生成新的虚拟DOM结构  和旧的虚拟DOM结构对比
利用diff算法, 找不不同, 只更新变化的部分(重绘/回流)到页面 - 也叫打补丁

情况1: 根元素变了 删除重建
情况2: 根元素没变 属性改变 元素复用 更新属性
情况3: 根元素没变 子元素没变 元素内容改变
       无key - 就地更新 插入后面的都更新了值或标签
       有key - 就地更新 key存在就复用此标签并更新
                      key不存在就建立一个新的

       有key - 值为id  视情况而定
```

## 2. VUE 基础

### 2.1 实例

```javascript
const app = new Vue({
  el: '#app',
  data: {},
  methods: {},
});
```

| 名称       | 使用          | 注意 | 含义                    |
| ---------- | ------------- | ---- | ----------------------- |
| el         |               |      | 元素的挂载位置          |
| data       |               |      | 模型数据(值是一个对象)  |
| methods    |               |      | 函数/方法               |
| computed   |               |      | 计算属性 针对插值表达式 |
| watch      |               |      | 监视器 针对 data 中数据 |
| directives |               |      | 局部指令                |
| filters    |               |      | 过滤器                  |
| 钩子函数   | mounted       |      | 当触发时 模板已可以使用 |
| components |               |      | 局部组件                |
| router     | router:router |      | 挂载路由实例对象        |
| render     |               |      | 渲染 webpack 组件       |
| store      |               |      | 挂载 VueX               |

### 2.2 模板语法

#### 1.插值表达式

{{  }}

#### 2.指令

- 自定义属性

| 名称      | 使用                   | 注意       | 含义                         |
| --------- | ---------------------- | ---------- | ---------------------------- |
| v-cloak   |                        | 解决闪烁   | [v-cloak] { display: none; } |
| v-text    | v-text='msg'           | 解决闪烁   | 填充纯文本 全部覆盖          |
| v-html    | v-html="msg"           | 有安全问题 | 填充 html 片段 全部覆盖      |
| v-pre     |                        | 不渲染     | 显示原始信息 跳过编译过程    |
| v-show    |                        | 布尔值     | 默认 display-none            |
| v-bind    | v-bind:data 属性值     |            | 只能用于属性动态绑定属性值   |
| v-model   |                        |            | 双向绑定表单控件             |
| v-once    |                        | 节约性能   | 一次性绑定 后续无响应功能了  |
| v-on      |                        | 绑定事件   |                              |
| v-if      | v-if="seen"ture/false  |            | 直接从 dom 树移除            |
| v-else    |                        |            |                              |
| v-else-if |                        |            |                              |
| v-for     | v-for="xx in 定义名称" |            | 循环生成                     |
| v-slot    |                        |            |                              |
|           |                        |            |                              |

- vue 标签的闪烁问题 由于在数据发起之前 数据默认是空 因此会闪烁

- 所以需要 v-if 判断 是否不存在 如果不存在 就使用 v-if 控制他的显示

- v-model 底层实现原理

- `<input v-bind:value="msg" v-on:input="msg=$event.target.value">`

- 样式绑定

  - class 样式处理

    - 对象语法
    - 数组语法

  ```javascript
  # 对象语法
    <div :class= "{ current: true }" ></div>
  # 数组语法
    <div :class="['current']"></div>
  # 两种形式可以结合使用
  <div :class="[currentClass,{test:isTest}]">测试</div>

  <div v-bind:class='arrClasses'></div>
   data: {arrClasses: ['active', 'error']},

  <div v-bind:class='objClasses'></div>
    data: objClasses: { active: true }
  ```

  - style 样式处理
    - 对象语法
    - 数组语法

```javascript
# 对象语法
 <div v-bind:style='{border:"1px solid blue"}'></div>
# 数组语法
 <div v-bind:style='[{border:"1px solid blue"}]'></div>
```

#### 3. 修饰符

##### 事件修饰符

- 修饰符可以串联
- 修饰符有顺序
  - v-on:click.prevent.self 会阻止所有的点击
  - v-on:click.self.prevent 只会阻止对元素自身的点击

| 名称     | 使用               | 注意                   | 含义                               |
| -------- | ------------------ | ---------------------- | ---------------------------------- |
| .prevent | v-on:click.prevent | event.preventDefault() | 阻止默认行为                       |
| .number  |                    |                        | 转为数值类型                       |
| .lazy    |                    |                        | 转为在 change 事件*之后*进行同步： |
| .trim    |                    |                        | 自动过滤用户输入的首尾空白字符     |
| .stop    |                    |                        | 阻止冒泡                           |
| .capture |                    |                        | 添加侦听器 capture 模式            |
| .self    |                    |                        | 冒泡事件不触发 点他才触发          |
| .once    |                    |                        | 只执行一次事件函数                 |
| .passive |                    |                        | 以 { passive: true }模式添加侦听器 |
| .sync    |                    |                        | 传入对象名 使用多个 v-model        |

##### 键盘修饰符

- keyup 键盘按键修饰符
- 全局按键对象

  - Vue.config.keyCodes.name = 112

  - @keyup.name='handle'

    - event*.*keyCode

| 按键修饰符 | 使用                  | 注意 | 含义 |
| ---------- | --------------------- | ---- | ---- |
| enter      | @keyup.enter="submit" |      |      |
| tab        |                       |      |      |
| delete     |                       |      |      |
| esc        |                       |      |      |
| space      |                       |      |      |
| up         |                       |      |      |
| down       |                       |      |      |
| left       |                       |      |      |
| right      |                       |      |      |

##### 鼠标修饰符

| 鼠标修饰符 | 使用 | 注意 | 含义 |
| ---------- | ---- | ---- | ---- |
| ctrl       |      |      |      |
| alt        |      |      |      |
| shift      |      |      |      |
| meta       |      |      |      |
|            |      |      |      |

##### 表单域修饰符

| 表单域修饰符 | 描述                            |
| ------------ | ------------------------------- |
| number       | 转化为数值                      |
| trim         | 去除开始和结尾的空格            |
| lazy         | 将 input 事件切换为 change 事件 |

##### 其他修饰符

| 其他修饰符 | 描述                                      |
| ---------- | ----------------------------------------- |
| native     | 监听原生事件 让子组件直接可以用原生的事件 |

### 2.3 分支循环结构

| 分支结构  | 描述 |
| --------- | ---- |
| v-if      |      |
| v-else    |      |
| v-else-if |      |

- 循环结构

```javascript
# v-for 遍历数组
    <div v-for='(value, key) in object'></div>
# key  帮助vue 区分不同的元素 提高性能
   <li :key='item.id' v-for='item in myFruits'></li>
# v-if和v-for结合使用 只有符合if条件的才能渲染
 <div v-if='value==12' v-for='(value, key) in object'></div>
# v-for="number in xxx"
遍历数字从1开始
```

### 2.4 常用特性

#### 表单操作

```javascript
text        =>   v-model
password    =>   v-model
textarea     =>  v-model

select      =>  option(value)  v-model(select)
                multiple 多个项提交

checkbox    =>  value要不同  v-model
              this.自定义参数  => [数组的形式]
              this.自定义参数.toString() => 拿到value
radio       name要相同  v-model
            =>  this.自定义参数
```

#### 自定义指令

- Vue.directive ( ' 指令名称 ' , { 选项参数 } )

| 钩子函数         | 含义             | 用法 | 其他             |
| ---------------- | ---------------- | ---- | ---------------- |
| hool             |                  |      |                  |
| bind             | 只调用一次       |      | 拿不到父元素     |
| inserted         | focus 也要用这个 |      | 可以拿父元素     |
| update           |                  |      | 指令绑定的值更新 |
| componentUpdated |                  |      | 位于的组件更新   |
| unbind           |                  |      | 收尾工作         |
|                  |                  |      |                  |

| 钩子函数参数 | 描述                                                      |
| ------------ | --------------------------------------------------------- |
| el           | 指定所绑定的元素 可以直接操作 dom                         |
| binding      | 一个对象 {name, value,oldValue,expression,arg,modifiers   |
| vnode        | Vue 编译生成的虚拟节点                                    |
| oldVnode     | 上一个虚拟节点 仅在 update 和 componentUpdated 钩子中使用 |
|              |                                                           |
|              |                                                           |

```javascript
 v-focus
 Vue.directive('focus', {
      inserted: function(el){
        // el表示指令所绑定的元素
        el.focus();
      }
    });
# 使用场景
按钮权限控制
图片加载失败
```

###### 局部指令

```javascript
v-color="'red'"
directives: {
        color: {
          bind: function(el, binding){
            el.style.backgroundColor = binding.value.color;
          }
        },
```

#### 计算属性

- 类似 data 数据一样使用

- 不要与 data 中同名

- 必须 return

- 计算属性是基于数据的依赖进行缓存的

  - 依赖项发生变化 计算属性的值也会随之更新
  - 多次调用 直接从缓存中取值

  ```javascript
    <div>{{reverseString}}</div>
    computed: {
          reverseString() {
            return this.msg.split('').reverse().join('');
          }
        }
  # 如果要v-model 双向绑定 需要set设置值
   computed: {
          result:{
            set(val){
              this.num1 = val / 2;
              this.num2 = val / 2
            },
            get(){
              return  this.num1 + this.num2
            }
          }
        },
  ```

#### 过滤器

- 在插值表达式中使用
  - `<div>{{message | filter name }}</div>`
- bind 指令绑定的值
  - `<div :abc='msg | filter name'></div>`

```javascript
//全局过滤器
Vue.filter("过滤器名称",function(value){
    //value就是过滤器传递过来的参数
})
//局部过滤器
filters:{
  过滤器名称: function(){}
}
// 可以传参
Vue.filter('line', (val, s) =>val.split("").reverse().join(s))
<h1>{{ hello | line("-")}}</h1>
```

#### 侦听器

- watch 实例
  - 针对 data/computed 已有的数据
- 数据一旦发生变化 就执行侦听器所绑定的方法
- 数据变化时执行异步或开销较大的操作. 类似中间件

```javascript
watch: {
    "要侦听的属性名": {
       immediate: true, // 立即执行  e米底ei特
       deep: true, // 监听对象属性的变化 如果监听整个对象改变就不需要
       handler (newVal, oldVal) {//handler是固定的
        }
    }
}
## 只监听 对象下的某个属性
利用 computed return 出这个属性
watch 这个属性即可
## 或者
'form.name'(val){
  ...
}
```

#### 生命周期

```javascript
created          => 注册全局的事件  网络请求  定时器
beforeMount      => 预处理data 不会触发update钩子函数
mounted          => 可以拿到dom元素
updated          => 获取更新后的真实DOM
beforeDestory    => 移除watch 子组件 计时器 定时器

① beforeCreate 在实例初始化之后，数据观测和事件配置之前被调用。
② created 在实例创建完成后被立即调用。
③ beforeMount 在挂载开始之前被调用。
④ mounted el被新创建的vm.$el替换，并挂载到实例上去之后调用该钩子。
⑤ beforeUpdate 数据更新时调用，发生在虚拟DOM打补丁之前。
⑥ updated 由于数据更改导致的虚拟DOM重新渲染和打补丁，在这之后会调用该钩子。
⑦ beforeDestroy 实例销毁之前调用。 des卓诶
⑧ destroyed 实例销毁后调用。
# 第一次加载页面会触发哪几个钩子函数
beforeCreate, created, beforeMount, mounted
```

#### 变更方法

- 变更的方法能够实现数据更新视图自动更新

```
push  pop  shift  unshift   splice    sort   reverse
this.arr[0] ={ name:"zhangsan"}  整体重新赋值 是没用的 需要set方法
this.arr[0].name                 是可以的
```

#### 替换数组

- 替换数组 不会修改原始数据 导致 数据改变 视图不一定更新

```
filter   concat    slice
```

## 3.API

| API                                         | 描述                        |
| ------------------------------------------- | --------------------------- |
| this,\$set(arr,index,newArrData)            | 触发视图重新更新            |
| a 是要更改的数据 b 是数据的第几项           | c 是更改后的数据            |
| \$emit ( "自定义事件名",要传递的参数 )      | 子组件向父组件传值          |
| \$event                                     | 父组件接收子组件的值        |
| eventHub.\$on("自定义事件的名称",事件函数)  | 监听事件在 mounter 下       |
| eventHub.\$off("自定义的事件名称")          | 销毁事件在 mounter 下       |
| \$route.params.动态路由参数                 | 动态获取路由参数            |
| this.\$router.push('/register')             | 跳转到路由                  |
| this.\$router.go(-1)                        | 前进与后退路由/             |
| \$http                                      | Vue.prototype.\$http= axios |
| \$ref                                       |                             |
| this.\$store.state.全局数据名称             |                             |
| this.\$store.commit("变异中的函数名",实参)  |                             |
| this.\$store.dispatch('actions 中的函数名') |                             |
|                                             |                             |

## 4. 组件

### 4.1 准备阶段

- is 绑定组件的是组件 name 属性值 也可以绑定一个组件的构造器选项对象

- 标准 分治 重用 组合

- Web Components 组件化规范
  - https://developer.mozilla.org/zh-CN/docs/Web/Web_Components
  - 通过定制元素的方式

```css
为了适于记忆
组件名称定义  props               => 短横线和驼峰皆可以
template                        => 驼峰
元素标签     元素绑定的Props属性    => 短横线
```

### 4.2 全局组件

```javascript
# 使用自定义组件时必须用短横线形式  tempalte和组件名称驼峰和短横线随意
# data必须是一个函数
# template必须使用 ``
# tempalte中必须要有根元素
# tempalte中可以放 子模板
<hello-world></hello-World>
Vue.component("hello-world || helloWorld",{
      data: function(){},
      template:`<hello-world> || <helloWorld> `
})
# 单文件组件
全局 =>  main.js

import Panel from "./components/Pannel1"
Vue.component("Panel", Panel)
<Panel></Panel>
```

### 4.3 局部组件

- 局部组件只能在注册他的父组件中使用

```css
<自定义-模板名 > </自定义-模板名 > var ComponentXXX = {
  /* ... */
}
var ComponentXXX = {
  /* ... */
}
components: {
  '自定义模板名':componentxxx,'自定义模板名': ComponentXXX;
}
# 单文件组件 import 组件对象 from 'vue文件路径' export default {
  components: {
    "组件名":组件对象 ;
  }
}
```

### props 校验

```js
props:{
    xxx:{
      type:Array,
      default:"", // 如果是一个复杂类型 就需要 一个函数 return 出去
      required:true,
      validator(val){
         //自定义校验规则 return true false
      }
   }
}
```

### 4.4 组件间数据交互

- props 是单向数据流 子组件不能修改父组件的指向 可以给对象属性赋值
- props 可以设置成对象 进行校验

#### 父组件向子组件传值

- props 直接传递的是字符串 如果是变量需要 bind 动态绑定 :tiele='xxx'
- 可以传递一个函数
- 儿子通过函数参数接收回调

```javascript
# props中随便用 元素标签中的:属性必须短横线 template中必须驼峰
<div :hello-world='父组件data'></div>
       Vue.component("组件名", {
          props: ['helloWorld || hello-world'],
          template: `{{helloWorld}}`
        })
# 单位件组件
//父亲
<son :title="" title='hello'></son>
import Product from "./components/son"
    components: {
        son,
    },

// 儿子
<template>
  <div>
    <h3>标题: {{ title }}</h3>
  </div>
</template>
<script>
export default {
    props: ["title"],
}
</script>
```

#### 子组件向父组件传值

- 子组件通过自定义事件向父组件传递信息
- \$emit ( "自定义事件名",要传递的参数 )
- $event     =>    用来接收   $emit 传递的参数

```javascript
<hello-world @事件-名='父组件事件($event)'> </hello world>
Vue.component("hello-world",{
     template:
   `<button @click='$emit("事件-名",参数)'> </button> `
})
```

#### 兄弟组件间传值

```javascript
//单独的事件中心管理组件间的通信
var hub = new Vue()

methods:{
   handle: function(){
//触发事件
       hub.$emit('自定义事件的名称',参数)
    },
//监听事件
mounted:function(){
        hub.$on('自定义事件的名称', 事件函数(val)=>{})
     }
//在父组件的方法中  销毁组件
hub.$off('自定义事件的名称')
```

### 4.5 动态组件

```js
# 动态组件
<component :is='组件名'>
 默认会销毁
# 组件缓存
不会被销毁
加上就会缓存 排除就加exclude属性
		<keep-alive exclude="组件的name 逗号分隔">
			<router-view />
		</keep-alive>
# 生命周期
activated - 激活
deactivated - 失去激活状态
```

### 4.6 组件插槽

```javascript
子组件 => <slot>默认内容</slot>;
子组件在父组件中的标签 => <子组件>xxxx</子组件>;
```

#### 具名插槽

```javascript
子组件 => <slot name="footer"></slot>;
子组件在父组件中的标签 => (
  <子组件>
    # slot="footer" || v-slot:footer || #footer => template
    <template slot="footer">内容</template>
    或者
    <p slot="footer"> </p>
  </子组件>
);
```

#### 作用域插槽

```javascript
子组件               =>   :自定义名称='变量'
子组件在父组件中的标签  =>
        v-slot:具名名称='自定义名称scoped'  #具名名称='自定义名称'
<slot :msg="msg"></slot>
   data() {
	 	return {
	 		msg: 'hello',
	  	}
  	},
<Zuoyongyu>
	<template v-slot="msg">{{msg.msg}}</template>
</Zuoyongyu>
```

## 5. 前后端交互

### 5.1 准备阶段

- URL

```css
scheme://host:port/path?query#fragment
scheme:通信协议
    常用的http,ftp,maito等
host:主机
    服务器(计算机)域名系统 (DNS) 主机名或 IP 地址。
port:端口号
    整数，可选，省略时使用方案的默认端口，如http的默认端口为80。
path:路径
    由零或多个'/'符号隔开的字符串，一般用来表示主机上的一个目录或文件地址。
query:查询
    可选，用于给动态网页传递参数，可有多个参数，用'&'符号隔开，每个参数的名和值用'='符号隔开。例如：name=zs
fragment:(hash)信息片断
    字符串，锚点.
```

- Restful 形式的 URL

```css
GET         http://www.baidu.com/books
POST        http://www.baidu.com/books
PUT         http://www.baidu.com/books/123
DELETE      http://www.baidu.com/books/123
```

#### 调用接口的方式

- ajax
- jQuery-ajax
- fetch
- axios 第三方库

### 5.2 Promise

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise
- 定义之后会立即执行

#### 实例方法

- then

  - 得到异步任务的正确结果

  ```javascript
  //then的返回值
  //  1.返回一个新的Promise实例对象
  //    下一个then就会调用上一个return的promise对象
  //  2. 返回普通值
  //     下一个函数then的参数data 用来接收他
  var p = new Promise(function (resolve, reject) {
   //成功时调用resolve回调函数
   //失败时调用reject回调函数
   });

  p.then(
     function(data){/*从resolve中得到正常结果*/},
     function(data){/*从reject中得到错误结果*/}
    );
  p.then(function(data){ return p}
   .catch(function(data){ return p}
  # 快速方式
   Promise.resolve()
   => 将这个对象转为Promise对象 立即执行then方法
   Promise.reject()
  ```

- catch

  - 得到异常信息

- finally

  - 成功与否都会执行 ( 尚且不是正式标准 )

#### 对象方法

- Promise.all ( ) 并发处理多个异步任务,所有任务都执行完成才能得到结果
- Promise.race( ) 并发处理多个异步任务 只要有一个任务完成就能得到结果

```css
Promise.all([p1,p2,p3]).then((result) => {
   console.log(result)
});
Promise.race([p1,p2,p3]).then((result) => {
   console.log(result)
});
```

#### promise.resolve

```js
Promise.resolve().then(() => 这里面的代码会立即执行);
```

### 5.3 fetch

- https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API
- 后端获取
  - restful
    - express 通过 res.params
  - 对象和 uncoded 形式
    - express 通过 res.query
  - json 形式
    - express 通过 res.body

```javascript
fetch(url,{method:'get'}).then(data=>{return data.text();})
          .then(data=>{console.log(data)})
//这里的data才是真实的数据 上一个data.text()是promise实例对象
          .catch(fn)
/*
text()方法属于fetchAPI的一部分，它返回一个Promise实例对象，用于获取后台返回的数据
*/
API
 1.method(String):HTTP请求方法,默认为GET(GET,POST,PUT,DELETE)
 2.body(String):HTTP的请求参数
 3.headers(Object):HTTP的请求头,默认为 { }
```

#### 响应数据格式

- text( ) 将返回体处理成字符串类型
- json ( ) 返回结果和 JSON.parse (response Text)一样

#### get

- urlencoded 方式

```javascript
fetch('http://localhost:3000/books?id=123', { method: 'get' });
//express通过  req.query.id获取
```

- restful 形式的 url

```javascript
fetch('http://localhost:3000/books/456', { method: 'get' });
app.get('/books/:id', (req, res) => {
  //这里id是自定义的
  //express通过  req.params.id获取  id是url处定义的
});
```

#### post

- uncoded

```javascript
fetch('http://localhost:3000/books', {
        method: 'post',
        body: 'uname=lisi&pwd=123',
headers: {'Content-Type': 'application/x-www-form-urlencoded'}
 })

//express通过 req.body.属性 获取
# body-parser提供的post.body方法
```

- json

```javascript
fetch('http://localhost:3000/books', {
        method: 'post',
        body: JSON.stringify({
           uname:'张三',
           pwd='456'
        }),
        headers: {'Content-Type': 'application/json'}
 })
//express通过 req.body.属性 获取
# body-parser提供的 app.use(bodyParser.json())
```

#### put

```javascript
fetch('http://localhost:3000/books/123', {
  method: 'put',
  body: JSON.stringify({
    uname: '张三',
    pwd: '789',
  }),
  headers: {
    'Content-Type': 'application/X-WWW-form-urlencoded',
    //也支持json类型
  },
});

app.put('/books/:id', (req, res) => {
  res.send(
    'PUT请求传递参数!' +
      req.params.id +
      '---' +
      req.body.uname +
      '---' +
      req.body.pwd,
  );
});
```

#### delete

- urlencoded 方式
- restful 形式的 url

```javascript
fetch('http://localhost:3000/books/789', { method: 'delete' });

app.delete('/books/:id', (req, res) => {
  res.send('DELETE请求传递参数!' + req.params.id);
});
```

#### 响应数据格式

- text( ) 将返回体处理成字符串类型
  - 如果想和 json 一样 需要 JSON.parse(data)
- json ( ) 返回结果和 JSON.parse (response Text)一样
  - 后端 /json => res.json ({ 对象形式 })

### 5.4 axios

- 基于 Promise 和 node.js 的 HTTP 客户端
- 支持浏览器和 node
- 支持 promise
- 能拦截请求和响应
- 自动转换 JSON 数据
- data 属性名是固定的
- 后端获取
  - restful
    - express 通过 res.params
  - 对象和 uncoded 形式
    - express 通过 res.query
  - json 形式
    - express 通过 res.body

#### 全局配置

```javascript
 # 1. 模块化中一般这么用
   import axios from 'axios'
   Vue.prototype.$http = axios
    this.$http.post('url', {})
 #  2.或者创建axios实例 封装函数导出
 // 优点 职责单一
 import axios from "axios"
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/',
  // transformResponse 自定义后端返回来的数据
  transformResponse: [function (data) {
    try {
      return JSONBig.parse(data)
    } catch (err) {
      return data
    }
  }]
})
 export default request

 import request from '@/utils/request'
 export const login = data => {
   return request({
     method: 'POST',
     url: '/app/v1_0/authorizations',
     data
   })
 }
// 超时时间

    axios.defaults.timeout = 3000;
    // 配置请求的基准URL地址
    axios.defaults.baseURL = 'http://localhost:3000/';
    // 配置请求头信息 X-Requestrd-With Content-Type mytoken
    axios.defaults.headers['mytoken'] = 'hello';
    axios.defaults.headers.post['Content-Type'] =
      'application/x-www-form-urlencoded';
    axios.get('axios-json').then(function(ret){
      console.log(ret.data.uname)
    })
   //响应主要属性
   data:数据
   headers
   status
   statusText 响应状态信息
```

#### get

- 数据可以用三种形式传递
  - urlencoded 形式
  - http://localhost:3000/axios?id=123'
  - restful 形式
    - http://localhost:3000/axios/123
    - express => res.params.传递参数
  - 放在第二个参数 params 中
    - { params: { id:789 } }
    - express => res.query.传递参数

```javascript
axios.get(url, { params: paramsObj }).then(function(res) {
  // res.data 是服务器返回的数据 data是固定的
});
```

#### post

- 通过第二个 对象方式 默认传递的是 json 形式数据
  - { uname:list , pwd:123 }

```javascript
axios.post(url, dataObj).then(function(res) {
  // res.data 是服务器返回的数据
});
```

- 通过 URLSearchParams 传递参数

```javascript
var params = new URLSearchParams();
params.append('uname', 'zhangsan');
params.append('pwd', '111');
axios.post('http://localhost:3000/axios', params).then(function(ret) {
  console.log(ret.data);
});
```

#### delete

- 传参与 get 类似
  - { params: { id:789 } }

```javascript
axios
  .delete('http://localhost:3000/axios', { params: { id: 111 } })
  .then(function(ret) {
    console.log(ret.data);
  });
```

#### Put

- 与 post 类似

```javascript
axios
  .put('http://localhost:3000/axios/123', { uname: 'lisi', pwd: 123 })
  .then(function(ret) {
    console.log(ret.data);
  });
```

#### axios

```javascript
axios({
  method: '请求类型',
  url: '请求的URL地址',
  data: {
    /* POST数据 */
  },
  params: {
    /* GET参数 对象形式 */
  },
}).then(callback);
```

#### 请求拦截器

- axios.interceptors.request.use
- 判断 token 是否有效 有效就放到请求头

```javascript
// axios请求拦截
axios.interceptors.request.use(function (config) {
  if ( && token) {
# token的主动拦截
    if(token是否超时){
      退出登录
      跳转到登录页面
      return Promist.reject(new Error("token失效了"))
# 请求头token
config.headers.Authorization = `Bearer &{store.getters.token}`
  }
  return config
}, function (error) {
  return Promise.reject(error)
})
```

#### 响应拦截器

- axios.interceptors.response.use

```javascript
axios.interceptors.response.use(function(res) {
  # 脱去data的外衣 项目里请求就不用 点了 直接就是data
    const {sucess,message,data} = res.data
    if(success){return data }
    else{return Promise.reject(new Error(message)) }
    }, function(err){
    # token 失效的被动处理
    if(后端返回token失效了没有){
      跳转到登录 删除token
    }else{
      提示错误信息
    }
```

#### 并发处理

- axios.all(iterable)

- axios.spread(callback)

### 5.5 async/await

- async 函数返回一个 Promise 实例对象
- await 后面可以直接跟一个 Promise 实例对象

```js
第一个await之前的代码会同步执行
await后面的代码及自己  会异步执行

await 会方法内部等待
async 会让方法外异步
```

## 6. Vue-router

### 1.准备阶段

- 后端路由
  - mode:history 没有#号 任意地址的变化都会经过服务器
  - 根据不同的用户 URL 请求 返回不同的内容
  - URL 请求地址与服务器资源之间的对应关系
    - 存在性能问题
- 前端路由
  - mode:hash 地址有#号
  - 不会刷新页面 不经过服务器 需要服务端支持
  - URL 请求地址与服务器资源之间的对应关系
  - 用户事件与事件处理函数之间的对应关系
    - SPA :单页面应用程序
      - URL 地址的 hash 不会触发新的 URL 请求
      - onhashchange 事件可以获得最近的 hash 值
      - location.hash.slice(1)
- base
  - _base:_'/baidu/' 加一个路径

```javascript
 <router-link to="/user">User</router-link>
 <router-view></router-view>
 const router = new VueRouter({
        routes: [
          // 路由重定向 根路径设置为xx地址
          { path: '/', redirect: '/user'},
          { path: '/user', component: User },
          { path: '*',component:xxx}//自定义404 //在最后
  # 如果动态添加路由后 需要手动重新把404放在最后
        ],
          mode: 'history', //不带#号的地址 需要服务端支持 不兼容IE,
          hidden: true,
          meta:{
            //路由元信息
          }
      })
# router 需要挂载到vue实例上
.router-link-exact-active   => 精确匹配
.router-link-active         => 模糊匹配
一级路由就在app.vue的 router-view
二级路由就在父亲.vue的 router-view
```

### 2. 嵌套路由

```javascript
# path :"" 为空就是默认子路由 且只能有一个
# 子路由 加了'/'    这时候就是独立的路由
<router-link to="/find/ranking">排行榜</router-link>
<router-view />
routes: [
        {
          path: '/user 	', component: 父组件,
          children: [
            { path: 'ranking', component: 子组件 },
        //    component: () => import('@/views/login')
          ]
        }
      ]
```

### 3. 动态路由匹配

```javascript
# 开启proos后 既可以路由 也可以子组件 的方式
#  传id可以 不传id也行
path:'user/:id?'
# $route.query.参数
<router-link to='xxx?参数'>
=>
this.$route.query.参数

# params
1.
router-link to='xxx/参数'>
path:'user/:id'
=>
this.$route.params.参数

2.
router-link to='xxx/参数'>
path:'user/:id'
props:true
=>
props:['id']
{{id}}

3.
router-link to='xxx/'>
path:'user/'
props:{name:'zs',age:12}
=>
props:['name','age']
{{name}} {{age}}
4.
router-link to='xxx/参数'>
path:'user/:id'
props: route => ({name:'zs',age:20,id:route.params.id})
=>
props:['name','age','id']
{{name}}
#
  meta: { // meta保存路由对象额外信息的
          title: "首页"
        }
```

### 4. 命名路由

```javascript
<router-link :to="{ name: 'user',
params: { id: 123 }}">User</router-link>
{path:'/user/:id',name:'user',component:User}
```

### 5. 编程式导航

```java
this.$router.push('/user?name=zhangsan&age=12')
this.$route.query.name

this.$router.push('/user/zhangsan')
path: "/part/:id",
this.$route.params.id

this.$router.go(n)
this.$router.replace('/path') 不记录历史

路由跳转:   this.$router.push()
路由替换:   this.$router.replace()
后退：      this.$router.back()
前进：      this.$router.forward()
```

### 6. 路由导航守卫

- 只能判断是否有 token
- 不能知道 token 过没过期 需要用过拦截器状态码获知
- 在拦截器里面添加请求头

```javascript
 // next()正常跳转  next(false)原地停留  next("./")
# 全局前置守卫
router.beforeEach((to, form, next) => {
  if (to.path === '/login') return next();
  const tokenStr = window.sessionStorage.getItem('token');
  if (!tokenStr) return next('/login');
  next();
})
# 全局后置守卫
只有路由跳转之后才会触发
如果前置路由守卫 next() 则不触发后置路由守卫
router.afterEach(function() {
  NProgress.done() // 关闭进度条
})
## next是泛型 不指定具体类型时 需要手动指定后置守卫的内容 否则不触发后置守卫
next()   后置不接受

# 路由独享守卫 在声明路由的时候 针对特定路由的构造函数
beforeEnter
```

### 路由懒加载

```js
const Foo = () => import(/* webpackChunkName: "group-foo" */ './Foo.vue');
```

### 重置路由

```js
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}
```

### 7 addRoutes

```js
# 1.router.addRoutes(routes) 已废弃
router.addRoutes([{},{},...])
在路由导航守卫中 addRoutes next()会有Bug  需要重新跳转下 [相当于刷新下]
if(xxx) {
  router.addRoutes(routes)
  next ( to.path )
  }
else { next() }
需要使用next(to.path)
```

### addRoute

```js
# router.addRoute() 注册新的路由
vue-router 4.0
 routes.forEach(i => {
     router.addRoute(, i)
 })
```

#### 动态路由控制

```js
# 1.初始化 state mutations
VueX 中新建权限管理 modules
引入静态路由权限 routes 放入 state
添加操作 state 的方法
注意不要添加上一次登录的routes信息 直接覆盖 上传新的
// state.routes = [...constantRoutes, ...newRoutes]
// 注意 如果重新登陆 需要将上次登录的路由覆盖掉 重新添加
  setRoutes (state, newRoutes) {
    state.routes = [...constantRoutes, ...newRoutes]
  }
# 2.设置 action
// 在登录时 路由导航守卫 如果登录成功 就发起对用户资料的网络请求
// 这个数据里的menus中 存储着 路由权限的数组
// 通过动态路由 自己写的 name 属性 与 这个数组 对比 如果相同就有权限
// 找相同的数据 调用mutaions中的方法 添加路由规则
// 注意需要 return routes
// state数据 是用来 显示左侧菜单用的  return  是给路由addRoutes用的
  filterRoutes ({ commit }, menus) {
    const routes = []
    menus.forEach(key => {
      routes.push(...asyncRoutes.filter(item => item.name === key))
    })
    commit('setRoutes', routes)
  }
# 3.调用 action
// 在路由导航守卫 中 如果登录成功 发送网络请求 获取路由权限数组
// 调用 actions 获取 return 的数组
// 调用 addRoutes 方法 添加信息 到 路由表
# 4.设置routes的getters快捷访问 在侧边栏渲染页面添加getters 并渲染

# 5. 在退出登录时候 重置路由 重置路由权限
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // 重新设置路由的可匹配路径
}
context.commit('permission/setRoutes', [], { root: true })
# 6. 404 路由没有放在最后面
router.addRoutes([...routes, { path: '*', redirect: '/404', hidden: true }])
```

## 7. VueX

- 注意文件名不要和 vue 相关
- npm install vuex --sav
- npm install vuex axios ant-design-vue –S

#### 准备阶段

- Vuex 是实现组件全局状态(数据)管理的一种机制
  - 能够在 vuex 中集中管理共享的数据 易于开发和后期维护
  - 能够高效地实现组件之间的数据共享 提高开发效率
  - 存储在 vuex 中的数据都是响应式的 能够实时保持数据与页面的同步

```javascript
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
在vue实例中 挂载store对象
el:"#app",
store

```

| 核心概念 | 描述       |
| -------- | ---------- |
| State    | 公共数据源 |
| Mutation |            |
| Action   |            |
| Getter   |            |

#### State

- 获取使用数据
- 不能直接操作 Store 中的数据

```javascript
# state
state: {
    aaa: 55
  },
# 1
this.$store.state.数据名

# 2
import { mapState } from 'vuex'
computed: {
 ...mapState(['count'],['sum'])
}
```

#### Mutation

- 修改 Store 数据
- 返回值是 undefined

```javascript
mutation:{
  fn(state,...){
  }
}
# 1
this.$store.commit("mutations中定义的函数名",实参)
# 2
 import { mapMutations } from 'vuex'
 methods: {
 ...mapMutations(['add', 'addN'])
}
```

#### Action

- 处理异步操作 通过触发 mutation 的方式变更数据
- 可以有返回值 是一个 promise 用 await 解析

```javascript
action:{
  fn(context,...){ //context=>this.$store
 //  asyncFn =>他的内部提交 context.commit(xxx)
   context.commit(xxx)
  }
}
# 1
this.$store.dispatch('AddAsync',5)
# 2
import { mapActions } from 'vuex'
methods: {
  ...mapActions(['addASync', 'addNASync'])
}
```

#### Getter

- 对 Store 中的数据加工形成新的数据 类似 Vue 的计算属性 是同步的

```javascript
getters:{
  newdata(state){
    return xxx
  }
}
# 1
this.$store.getters.名称
# 2
import { mapGetters } from 'vuex'
  computed:{
       ...mapGetters(['showNum'])
  }
```

#### Module

```js
const moduleA = {
  state: () => ({ ... }),
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}
const store = new Vuex.Store({
  modules: {
    a: moduleA,
  }
})
# action mutation getter 使用方法和之前一样
this.$store.state.a.xxx
computed: {
...mapState({ loginMsg: state => state.login.loginMsg
         })
},
# namespaced: true
加了这个属性之后就需要  []加路径了  在自己的子modules对象中
this.$store.getters['a/xxx']
computed: {
 ...mapState('a/xxx',['sum'])
}
{{ this['a/sum'] }}
# 快捷 访问
getters:{
  userId: state => state.uer.userInfo.id
}
# createNamespacedHelpers
import {  createNamespacedHelpers } from 'vuex'
const { mapState,mapMutations.... } = createNamespacedHelpers('user')
// 这里的 就不用处理了 获取的 就是处理后的vueX局部变量
computed:{
  ...mapState(['userInfo'])
}
## root:true 调用全局参数
默认的 context 是局部的 store 对象 当开启命名空间后 是全局的context
当开启命名空间的时候 如果 子模块需要调用另一个子模块 需要这样
context.commit('子模块名称/方法',参数,{root:true})
```

### 动态注册

```js
store.registerModule('xxxx', moduleObj);
```

## 8. 其他

### ref

```javascript
 # 通过 ref属性 标注 DOM
 <div ref="info">hello</div>
 # 通过 $refs 属性获取DOM元素
 let info = this.$refs.info.innerHTML
 console.log(info) // hello
 # 主要用于拿到组件对象 给组件加ref属性

 -
   $.parent
   $.root
   $.children
   ...
```

### nextTick

```js
# vue更新dom是异步的
在修改数据之后立即使用这个方法，获取更新后的 DOM
nextTick => 立即获取原生dom内容   也可以在update中拿到
 this.$nextTick(() => {
        console.log(this.$refs.myP.innerHTML); // 1
  })
#
父组件传值给子组件 父组件这个数据发生变化
子组件prop不一定能获取到更新后的结果

子组件需要 nextTick 拿到数据  或者v-if 进行重新获取
```

### 深度操作符

```javascript
# 由于style设置了scoped 只对子组件生效
只要是vue文件中 出现的标签都可以操作
渲染的 插槽的都不能访问
# 如果想对父组件生效需要加前缀
# 可以影响父组件的最外层 可以操作他的class   他有两个自定义属性
/deep/            => less
>>>               => css原生样式
::v-deep          => 使用了预处理器都能用 scss

将自定义属性选择器  放在了上一级的选择器上
插槽的style  可以在使用的页面控制
```

### 子组件使用 v-model

```js
# v-model 默认使用input事件 监听value属性
<子组件 v-model='xxx'>
<子组件 :value='dialogValue' @input='dialogValue =$event '>
  子组件需要input事件传参 接受value的props
# 子组件的model属性 可以修改自定义事件名
 model: {
    prop: 'checked',
    event: 'change'
  },
# .sync 修饰符
v-model='xxx'
:error.sync = 'err' //相当于又使用了一次v-model
<子组件 :自定义属性='err' @update:自定义属性='err = $event' />
   子组件需要接受err的props  需要 update:自定义属性 的事件传参
```

### provider

```javascript
	provide () {
		return {
			articleId: this.articleId
		}
	},
		inject: ['articleId'],// 和Props用法一样
```

### Mixin

```js
# 1.
var obj= {
  created() {
    xxx
  },
export default {
  mixins:[obj]
}
如果重名 都存在 会进行合并
如果是钩子函数重名 会合并成数据 都会被调用
发生冲突时 组件数据优先
# 2. 全局混入
Vue.mixin({
  xxx
})
# 不是数据的共享 只是代码的混入
修改了数据 其他的不会变
# 当多个组件具备相同逻辑代码的时候  可以使用Mixin 进行复用
```

### 触发视图重新渲染

```js
this,$set(arr,index,newArrData)
$forceUpdata
v-if
nextTick
```

### vue 数据不是响应式的情况

```js
# 不能检测到对象属性的添加和删除 属性必须在data对象上才能转换成响应式
obj.name=xxx       不是响应式
obj['name']=xxx    不是响应式
解决方式 =>
1.需要...展开  覆盖掉原来的指向
同样的如果再改变指向后 .属性 [属性]  vue不能检测到响应式效果
虽然他可以添加上 但是它没有getter和setter
2.使用set方法(必须创建的是新的属性)
# 数组
## 不能通过索引直接设置
this.arr[0] ={ name:"zhangsan"}  不是响应式的
this.arr[0].name                 是响应式的
解决方式 => 用set方法解决
## 当你修改数组的长度
vm.items.length = 2                  不是响应式
解决方式 => vm.items.splice(newLength) 是响应式的
```

### 组件缓存

```js
<keep-alive exclude="组件的name 逗号分隔">
  {' '}
  //include
  <router-view />
</keep-alive>
```

### 脚手架中的知识

```js
# @
@   指src
~@  指src  //css
# 图片地址
webpack中的 vue  图片 需要通过 require('/') 的方式导入
```

### 反向代理

```js
设置代理
# 开发阶段  || 上线阶段 => nginx
# 1. package.json
"proxy":"http://localhost:5000"

# 2  在src目录下  setupProxy.js
const proxy = require('http-proxy-middleware')
   module.exports = function(app) {
     app.use(
       proxy('/api1', {
         target: 'http://localhost:5000',
         pathRewrite: {'^/api1': ''}
         // 如果后端也有api1 就要重写
       }),
     )
   }
// 线上接口的路径 http://xxx/api/ays/login
// 在发起网路请求时 http://127.0.0.1:9999/abc/sys/login
//  http://xxx/api/abc/sys/login
# 3 vue.confis.js
devServer: {
  xxx
}
# Nginx
https://www.cnblogs.com/ysocean/p/9392908.html
server{
   //监听9099端口
    listen 9099;
    // 本地的域名是localhost
    server_name localhost;
    //凡是localhost:9099/api这个样子的，都转发到真正的服务端地址http://baidu.com
    location ^~ /api {
        proxy_pass http://baidu.com;
    }
}
```

### 脚手架中的环境变量

```js
.env.development
.env.production
.env.test
// 命名必须VUE_APP_开头
VUE_APP_BASE_API = '需要请求API'
// 使用后 serve build 就会自动切换了
process.env.VUE_APP_BASE_API
```

### 开发环境与生产环境

```js
# 环境
.env.development
.env.production
//测试环境
.env.test
//预演环境 会导入一些数据
.env.staging
# 判断环境
const isProd = process.env.NODE_ENV === 'production'
# 读取当前环境 对应的配置数据
process.env.xxxxx
// 命名必须VUE_APP_开头
VUE_APP_BASE_API = '需要请求API'
// 使用后 serve build 就会自动切换了
process.env.VUE_APP_BASE_API
```

### 组件的统一注册

```js
# 1.
如果用到了vue的 特性 如过滤器等
就需要Vue.use()
没有用到 import 就行
export default{
  Aaa,
  Bbb,
  Ccc
}
import as xxx from '@/components'
Object.keys(xxx).forEach(item=>{
  Vue.Component(item,xxx[item])
})
# 2.
Vue.use( xxx.install(vue){xxx} )
import PageTools from './PageTools'
export default {
  install (Vue) {
    Vue.component('PageTools', PageTools)
  }
}
import Component from '@/components'
Vue.use(Component)
```

### RBAC

```js
Role based access control
页面访问权限  => 动态路由
按钮操作权限  => 例如删除按钮没权限就隐藏
API访问权限  => 后端进行控制 防止用户用调试工具等形式破解
给员工分配角色 角色控制权限 将权限传递给路由控制
```

#### 动态路由控制

```js
# 1.初始化 state mutations
VueX 中新建权限管理 modules
引入静态路由权限 routes 放入 state
添加操作 state 的方法
注意不要添加上一次登录的routes信息 直接覆盖 上传新的
// state.routes = [...constantRoutes, ...newRoutes]
// 注意 如果重新登陆 需要将上次登录的路由覆盖掉 重新添加
  setRoutes (state, newRoutes) {
    state.routes = [...constantRoutes, ...newRoutes]
  }
# 2.设置 action
// 在登录时 路由导航守卫 如果登录成功 就发起对用户资料的网络请求
// 这个数据里的menus中 存储着 路由权限的数组
// 通过动态路由 自己写的 name 属性 与 这个数组 对比 如果相同就有权限
// 找相同的数据 调用mutaions中的方法 添加路由规则
// 注意需要 return routes
// state数据 是用来 显示左侧菜单用的  return  是给路由addRoutes用的
  filterRoutes ({ commit }, menus) {
    const routes = []
    menus.forEach(key => {
      routes.push(...asyncRoutes.filter(item => item.name === key))
    })
    commit('setRoutes', routes)
  }
# 3.调用 action
// 在路由导航守卫 中 如果登录成功 发送网络请求 获取路由权限数组
// 调用 actions 获取 return 的数组
// 调用 addRoutes 方法 添加信息 到 路由表
# 4.设置routes的getters快捷访问 在侧边栏渲染页面添加getters 并渲染
# 5. 在退出登录时候 重置路由 重置路由权限
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // 重新设置路由的可匹配路径
}
context.commit('permission/setRoutes', [], { root: true })
# 6. 404 路由没有放在最后面
router.addRoutes([...routes, { path: '*', redirect: '/404', hidden: true }])
```

#### 按钮访问权限

```js
# 1.在路由导航守卫的网络请求中 有一个 points 数组 存放按钮访问权限
# 2.通过 Mixin 创建一个函数  判断 按钮 的显示隐藏
export default {
  methods: {
    checkPermission (key) {
      const { points } = store.state.user
      if (points && points.length) {
        return points.some(item => item === key)
      }
      return false
    }
  }
}
```

#### API 权限

```js
后端进行控制;
在请求拦截器进行处理;
requerst.method;
```

### vue 国际化

```js
yarn add vue-i18n@8.22.2
import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale:"zh",
  messages:{
    en: {
      loginText: "login"
    },
    zh: {
      loginText: "登录"
    }
  }
})

new Vue({
  i18n
})

// 使用
模板中: {{$t('loginText')}}
js中: $t('loginText')
// 点击改变
this.$i18n.locale = 'en'
```

### 性能优化

```js
# 1. 性能分析
npm run preview -- --report
# 1. vue.config.js  // src导入的 全局对象 $ echart
let cdn = { css: [], js: [] }
const isProd = process.env.NODE_ENV === 'production'
let externals = {}
if (isProd) {
  externals = {
    'vue': 'Vue',
  }
  cdn = {
    css: [...],
    js: []
  }
}
module.exports = {
  configureWebpack:{
    externals:externals
  }
}
 chainWebpack (config) {
    config.plugin('html').tap(args => {
      args[0].cdn = cdn
      return args
    })
 }
}
# 2. index.html
  <% for(var css of htmlWebpackPlugin.options.cdn.css) { %>
    <link rel="stylesheet" href="<%=css%>">
  <% } %>

  <% for(var js of htmlWebpackPlugin.options.cdn.js) { %>
    <script src="<%=js%>"></script>
  <% } %>
# 3. npm run build:prod
# 路由懒加载
```

### 后端服务器上线

```js
mkdir hrServer
cd hrServer
touch app.js
mkdir public
//把dist 目录下的所有文件 放到 public 目录中
yarn init -y
yarn add koa koa-static koa2-connect-history-api-fallback koa2-proxy-middleware

const Koa = require('koa')
const serve = require('koa-static');
const { historyApiFallback } = require('koa2-connect-history-api-fallback');
const path = require('path')
const proxy = require('koa2-proxy-middleware')
const app = new Koa();
app.use(historyApiFallback({
  whiteList: ['/prod-api']
}));
app.use(serve(__dirname + "/public"));
app.use(proxy({
  targets: {
    '/prod-api/(.*)': {
      target: 'http://ihrm-java.itheima.net/api',
      changeOrigin: true,
      pathRewrite: {
        '/prod-api': ""
      }
    }
  }
}))
app.listen(8888, () => {
  console.log('http://localhost:8888')
})
```

### 彻底的模块划分

```js
# 内容
所有内容都写在 a模块的文件中
# a模块 index.js
export default {
  install(Vue){
     Vue.addRoutes(RoutesArray)
     Vue.rigisterModules("ModuleName",ModuleObj)
  }
}
# main.js
import a from 'xxx'
Vue.use(a)
```

### jsx

```js
npm install @vue/babel-preset-jsx @vue/babel-helper-vue-jsx-merge-props
		renderExpandItem() {
			const Item = {
				functional: true,
				render(createElement, context) {
					return createElement(
						'div',
						{
							domProps: {
								innerText: "hello"
							},
						}
					);
				}
			};
```

### 自定义组件顺序

```js
<template>
	<div class="CustomForm-container">
		<div
			v-for="(item,index) in list"
			:key="index"
		>
			<slot :name='item.name' />
		</div>
	</div>
</template>
<script>
export default {
	name: "CustomForm",
	props: {
		list: Array
	},
}
</script>
#  父组件
<CustomForm :list='formList'>
  <template #1>1</template>
  <template #2>2</template>
</CustomForm>
data(){
  return {
    formList: [ {name:"1"},{name:"2"},...]
  }
}
```

### css 变量

```js
#
js原始style 不要加字符串
style=\"--color:green;\"
#
<template>
	<div class="test">
		<span :style="spanStyle" class="span1">hello world</span>
		<span style="--color:red" class="span1">hello world</span>
	</div>
</template>
<script>
export default {
	data() {
		return {
			spanStyle: { "--color": "green" },
		};
	}
}
</script>
<style scoped>
.span1 {
	color: var(--color);
}
</style>
```

### 默认子路由

```js
  {
    path: '/',
    // name: 'layout', // 如果父路由有默认子路由，那它的 name 没有意义
    component: () => import('@/views/layout'),
    children: [
      {
        path: '', // 默认子路由，只能有1个
        name: 'home',
        component: () => import('@/views/home')
      },
      {
        path: '/qa',
        name: 'qa',
        component: () => import('@/views/qa')
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('@/views/video')
      },
      {
        path: '/my',
        name: 'my',
        component: () => import('@/views/my')
      }
    ]
  },
```
