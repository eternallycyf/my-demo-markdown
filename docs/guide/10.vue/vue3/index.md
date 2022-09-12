---
order: 10
nav:
  title: 前端之路
  path: /guide
---

# Vue 3.0

## 1. 准备阶段

```js
v-modal 更换了默认名称
template 上 v-for 可以写 key
v-bind 同时 原生写法 谁先写 就用谁
.native 移除 将事件默认传递进去了 不用 emit接受默认事件
```

### tsconfig

```js
// tsconfig.json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
  // 这样就可以对 `this` 上的数据属性进行更严格的推断
    "strict": true,
    "jsx": "preserve",
    "moduleResolution": "node"
  }
}
```

### 调试工具直接打开代码

```js
#
cd /usr/local/bin
nano code
// 把python改成python3
- function realpath() { python -c ...
+ function realpath() { python3 -c ...
ctrl+X 退出
#
输入code就自动打开vscode了
```

###

## 2. css

### 深度作用符

```js
<style scoped>
// 普通
::v-deep(.foo) {}
:deep(.foo) {}

// 插槽
::v-slotted(.foo) {}
:slotted(.foo) {}

// 全局
::v-global(.foo) {}
:global(.foo) {}
<style>
```

### css 使用变量

```js
# css 使用变量
<template>
  <div class="content">content</div>
</template>
<script setup lang="ts">
const myRed = '#f10215'
</script>
<style scoped lang="css">
.foo {
  color: v-bind("myRed");
}
</style>
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

## 3. 修饰符

### 修饰符

```js
.exact
<!-- 即使 Alt 或 Shift 被一同按下时也会触发 -->
<button @click.ctrl="onClick">A</button>
<!-- 有且只有 Ctrl 被按下的时候才触发 -->
<button @click.ctrl.exact="onCtrlClick">A</button>
<!-- 没有任何系统修饰符被按下的时候才触发 -->
<button @click.exact="onClick">A</button>
# 事件修饰符
.stop
.prevent
.capture
.self
.once
.passive
# 按键修饰符
<input @keyup.enter="submit" />
.enter
.tab
.delete (捕获“删除”和“退格”键)
.esc
.space
.up
.down
.left
.right
# 系统修饰符
.ctrl
.alt
.shift
.meta
# 鼠标修饰符
.left
.right
.middle

# 表单修饰符
.number
.lazy
.trim
```

### 自定义修饰符

```js
```

## 4. 实例

### emit props

```js
// <script setup />中不需要导入 defineProps defineEmit 直接使用
# props: defineProps withDefaults
const { count } = defineProps(['count'])
const { count } = defineProps({ count: Number })
const { count } = defineProps<{ count?:number }>()
interface INumberProps {count?: number}
const { count } =
    withDefaults(defineProps<INumberProps>(),{number: 5})
# emit: defineEmit
const emit = defineEmits(['passData']);
const emit=
   defineEmits<{(e:'passDate',number:number):void}>
   ()emit('passData,123')
```

### useSlots useAttrs

```js
import { useSlots, useAttrs } from 'vue'
const slots = useSlots()
const attrs = useAttrs()


$attrs 获取除了 props emit 其他的属性
```

### readonly

```js
import { readonly } from 'vue';
readonly(count);
```

## 5. 指令

### v-model

```js
// 可以传递多个v-model
<Son
   v-model='msg'
/>
<Son
   :modelValue="msg"
   @update:modelValue="msg = $event"
/>
// 自定义命名
<ChildComponent v-model:title="pageTitle" />
<ChildComponent :title="pageTitle" @update:title="pageTitle = $event" />
```

### v-html

```js
<div v-html="'<div></div>'"></div>;
中间不能放内容;
```

### v-bind

```js
<div  v-bind='obj' />
const obj = {
  id:1,
  name:2
}
# 动态参数 null移除参数
<div :[attr]='url' />
const attr = 'id'

不要拼接 使用computed来写
<a :['foo' + bar]="value"> ... </a>
```

## 6. 基本 API

### setup

#### setup

```js
/*
 在 beforecreate 钩子之前完成
 export default 的内容会放在原组件 声明字段
 this 是 undefined
 语法糖 
       自动注册组件
       自动导出变量
       自动注册指令
       顶层直接写 await 不用写 async
*/
```

#### defineExpose

```js
// 导出变量,其他组件通过ref获取组件实例
// { a: number, b: number }
defineExpose({
  a,
  b,
});
```

#### 导出组件名

```js
# 导出组件名
<script setup lang="ts">
  export default {
   name: 'xxx'
  }
</script>
```

### reactive

#### reactive

```js
// 数据深度响应式
// 对 string number boolean 原始类型无效
import { reactive } from 'vue';
const obj = reactive({
  name: 'ls',
  age: 18,
});
// 直接解构的是普通的数据 要通过toRef转换
```

#### shallowReactive

```js
# 只有根级别是响应式数据
```

#### toRef

```js
// 转换reactive 单个属性为响应式数据
// 引用
// 修改响应式数据不会影响以前的数据
// 数据发生改变 界面也不会自动更新
const name = toRef(obj, 'name');
```

#### toRefs

```js
// 转换reactive 所有属性为响应式数据
const obj3 = toRefs(obj);
```

### ref

#### ref

```js
// 可以使用任何类型
// 原理: reactive({ value:xxx })
import { ref } from 'vue';
const count = ref(0);
count.value++;
console.log(count.value);
```

#### 获取 dom

```js
# 单个元素
<div ref="dom">我是box</div>
const dom = ref(null)
onMounted(()=>{
  console.log(dom.value)
})
# 多个元素
<ul>
    <li v-for="i in 4" :key="i" :ref="setDom">
        第{{i}}LI</li>
</ul>
const domList = []
const setDom = (el) => {domList.push(el)}
onMounted(()=>{
  console.log(domList)
})
```

#### 获取组件 ref

```js
<Child ref='child' />

const child = ref(null)
onMounted(()=>{
  child.value
})

# 暴露数据
defineExpose({
  a,
  b
})
```

### computed

```js
import { computed } from 'vue'
const xxx = computed(() => xxx.value*2 )
console.log(xxx.value)
#
const xxx = computed({
  get(){
    return xxx.value*2
  }
  set(value){
   return xxx.value/2
  }
})
```

### watch

```js
import { watch,watchEffect } from 'vue'
watch(变量,(newValue,oldValue) => {
})
# 监听多个数据改变
watch([count, obj], ()=>{
})
# 监听对象某个属性的变化
watch(()=>obj.name,()=>{
})
watch(()=>[obj.name,obj.age],()=>{
})
# 深度监听
// flush 监听到更新后的dom
watch(变量, (newValue,oldValue) => {
},{deep: true,immediate: true,flush: 'post' })


# watchEffect 相当于watch加了immediate:true
watch 属性变更了才会执行 不能停止
watchEffect 一定会执行一次 依赖于回调内部的变量变化
            可以停止
watchPostEffect

# 停止监听器
const unwatch = watchEffect(() => {})
unwatch()
```

### 自定义指令

```js
# 全局指令
import { createApp } from 'vue'
const app = Vue.createApp({})

app.directive('highlight', {
  created(el, binding, vnode, prevVnode) {},
  beforeMount(el, binding, vnode) {
    el.style.background = binding.value
  }
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {}
})

<p v-highlight="'yellow'">以亮黄色高亮</p>
# 局部指令
<script setup>
const vMyDirective = {
  beforeMount: (el) => {
    // 在元素上做些操作
  }
}
</script>
<template>
  <h1 v-my-directive>This is a Heading</h1>
</template>
```

### 插槽

```js
 import { useContext } from 'vue'
 const { slots, attrs } = useContext()
 import { useSlots, useAttrs } from 'vue'
 const slots = useSlots()
 const attrs = useAttrs()
 # helloWord.vue
<template>
  <slot name="header" :item="'item'"></slot>
</template>
# app.vue
  <HelloWorld >
		 <template v-slot:header="slotProps">
       <h2 >{{slotProps.item}}</h2>
		 </template>
	</HelloWorld>
```

### 生命周期

```js
import { onMounted } from 'vue'
onMouted(函数名)
onMounted(()=>{
   xxx
})
#
setup 创建实例前
onBeforeMount 挂载DOM前
onMounted 挂载DOM后
onBeforeUpdate 更新组件前
onUpdated 更新组件后
onBeforeUnmount 卸载销毁前
onUnmounted 卸载销毁后
```

## 7. 全局 API

### createApp

```js
import { createApp } from 'vue';
const app = createApp({});
app.component.directive.mixin.previde / inject.use.config.globalProperties;
```

#### 自定义指令

```js
<p v-highlight="'yellow'">以亮黄色高亮显示此文本</p>
const app = Vue.createApp({})

app.directive('highlight', {
  created(el, binding, vnode, prevVnode) {},
  beforeMount(el, binding, vnode) {
    el.style.background = binding.value
  }
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {}
})
```

#### mixin

```js
# main.ts
import { createApp } from 'vue'
import App from './App.vue'
import Hello from './components/Hello.vue'
import Thing from './components/Thing.vue'
import globalMixin from './globalMixin'

createApp({
  extends: App,
  mixins: [globalMixin],
  components: {
    Hello,
    Thing,
  }
}).mount('#app')
```

#### Provide/Inject

```js
// 可以是函数 也可以是变量
import { provide } from 'vue';
provide('money', money);
const money = inject('money', '默认值');
const money = inject('money', () => '默认值');
```

#### .config.globalProperties

```js
// 2.0 是 Vue.prototype.$http
import axios from 'axios'
app.config.globalProperties.$http = axios
# ts提示
import axios from 'axios'
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $http: typeof axios
  }
}
```

## 8. 其他 API

### nextTick

```js
import { nextTick } from 'vue';
nextTick(() => {});
```

### forceUpdate

```js
仅仅影响实例本身和插入插槽内容的子组件，而不是所有子组件
```

### ref

#### customRef

```js
# 自定义ref
function myRef(value){
  return customRef((track,trigger)=> {
    return{
       get(){
           track() // 需要追踪变化
           return value
       },
       set(newValue){
            value = newValue
            trigger() //触发界面更新
       }
    }
  });
}
```

#### shallowRef

```js
import {shallowRef,shallowReactive，triggerRef} from 'vue'
triggerRef(state) 自动更新
```

#### toRaw

```js
# 获取 ref reactive 的 原始数据
//ref reactive 是默认递归更新的 消耗性能
# 如果不需要更新UI界面 就需要 toRaw 更新数据 但不更新UI界面
import {toRaw} from 'vue'
let obj = {xxx}
let state = reactive(obj)
let obj2 = toRaw(state)
obj1 === obj2  //true
obj.name = xxx
let obj2 = toRwa(state.value) //ref 需要.value
```

#### markRaw

```js
# 永远都不被追踪 不更新UI 不是响应式数据
 obj = markRaw(obj)
```

#### readonly

```js
# 递归只读数据
let state = readonly({
   name:'zs'
})
```

## 9. 内置组件

### teleport

```js
// 指定渲染到根元素 之外的地方
<teleport to="body">...</teleport>
```

### component

```js
<component :is="true? Home : Login" />
   默认会销毁
```

### defineAsyncComponent

```js
# 异步组件
import { defineAsyncComponent } from 'vue'
const xxx = defineAsyncComponent(() => import('./'))
const xxx = defineAsyncComponent({
  loader: () => import(''),
  delay: 200,
  timeout: 3000,
  errorComponent: xxx,
  loadingComponent: xxx,
})
```

### keep-alive

```js
# 组件缓存
不会被销毁
加上就会缓存 排除就加exclude属性 , include
		<keep-alive exclude="组件的name 逗号分隔">
			<router-view />
		</keep-alive>
# 生命周期
activated - 激活
deactivated - 失去激活状态
```

## 10. 组件

### 父传子

```tsx | pure
# 父组件
  <HelloWorld :number="父组件内部的数据" />
# 子组件
import { defineProps, withDefaults } from 'vue'
const { number } = defineProps(['number'])
const { number } = defineProps({ number: Number })
const { number } = defineProps<{ number?:number }>()

interface INumberProps {number?: number}
const { number } = withDefaults(defineProps<INumberProps>(),
{number: 5})
```

### 子传父

```js
# 子组件
import { defineEmit } from 'vue'
const emit = defineEmits(['passData']);
const emit= defineEmits<{(e:'passDate',number:number):void}>()
emit('passData',123)
# 父组件
<HelloWorld @passData="自定义事件" />
const 自定义事件 = (data) => {
  console.log(data)
}
```

## 11. 其他功能

### 函数组件

```js
<template>
  <component
    v-bind:is="`h${$props.level}`"
    v-bind="$attrs"
  />
</template>

<script>
export default {
  props: ['level']
}
</script>
```

### 自定义元素

```js
<button is="plastic-button">点击我!</button>
<button is="vue:plastic-button">点击我!</button>
document.createElement('button', { is: 'plastic-button' })
```

### 异步组件

```js
import { defineAsyncComponent } from 'vue'
#
const asyncModal =
   defineAsyncComponent(() => import('./Modal.vue'))
#
const asyncModalWithOptions = defineAsyncComponent({
  loader: () => import('./Modal.vue'),
  delay: 200,
  timeout: 3000,
  errorComponent: ErrorComponent,
  loadingComponent: LoadingComponent
})
#
const asyncComponent = defineAsyncComponent(
  () =>
    new Promise((resolve, reject) => {
      /* ... */
    })
)
```

## 12 VueX

```js
# store/index.js
import { createStore } from 'vuex'
export default createStore({
  state: {
    count: 1
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
#
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
createApp(App).use(store).mount('#app')
```

#### State

- 获取使用数据
- 不能直接操作 Store 中的数据

```javascript
# state
state: {
  count: 55
},
# 1
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const count = computed(() => store.state.count)
console.log(count.value);  // 1
```

#### Getter

```js
 state: {
    count: 1
  },
  getters: {
    newCount(state) {
     return state.count*2
    }
  },
#
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const newCount = computed(() => store.getters.newCount)
console.log(newCount.value);  // 1
```

#### Mutation

- 修改 Store 数据
- 返回值是 undefined

```javascript
  state: {
    count: 1
  },
  getters: {
    newCount(state) {
      return state.count * 2
    }
  },
  mutations: {
    save(state, ...newState) {
      let objState = JSON.parse(JSON.stringify(state))
      const newObj = Object.assign({}, objState, ...newState)
      Object.entries(newObj).forEach(item => {
        state[item[0]] = item[1]
      })
    }
  },
# 1
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const fn = () => store.commit('save', { count: 1123121, a: 2 })
  <button @click="fn">{{ count }}</button>
```

#### Action

- 处理异步操作 通过触发 mutation 的方式变更数据
- 可以有返回值 是一个 promise 用 await 解析

```javascript
#
mutations: {
    save(state, ...newState) {
      let objState = JSON.parse(JSON.stringify(state))
      const newObj = Object.assign({}, objState, ...newState)
      Object.entries(newObj).forEach(item => {
        state[item[0]] = item[1]
      })
    }
  },
  actions: {
    asyncSave(context, newState) {
      const { commit, state, getters } = context
      setTimeout(() => {
        commit('save', newState)
      }, 1000)
    }
  },
#
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const count = computed(() => store.state.count)
const ayFn = () => store.dispatch('asyncSave', { count: 1123121, a: 2 })
```

#### Module

- store

```js
import { createStore } from 'vuex';
const Hello = {
  namespaced: true,
  state: {
    count: 1,
  },
  getters: {
    newCount(state, getters, rootState, rootGetters) {
      return state.count * 2;
    },
  },
  mutations: {
    save(state, ...newState) {
      let objState = JSON.parse(JSON.stringify(state));
      const newObj = Object.assign({}, objState, ...newState);
      Object.entries(newObj).forEach(item => {
        state[item[0]] = item[1];
      });
    },
  },
  actions: {
    asyncSave(context, newState) {
      const { commit, state, getters, dispatch, rootGetters } = context;
      setTimeout(() => {
        commit('save', newState);
      }, 1000);
    },
  },
};
export default createStore({
  modules: {
    Hello,
  },
  getters: {
    globalCount(state, getters, rootState) {
      return state['Hello'].count;
      return getters['Hello/newCount'];
      return rootState['Hello'].count;
    },
  },
});
```

- Hello.vue

```js
<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const count = computed(() => store.state['Hello'].count)
const getterCount = computed(() => store.getters['Hello/newCount'])
const fn = () => store.commit('Hello/save', { count: 1123, a: 2 })
const ayFn = () => store.dispatch('Hello/asyncSave', { count: 1123222, a: 2 })
</script>
<template>
  <button @click="fn">{{ count }}</button>
  <button @click="ayFn">{{ count }}</button>
</template>
```

```js
# namespaced: true 开启命名空间
# root:true 调用全局参数
context.commit('子模块名称/方法',参数,{root:true})
context.dispatch('子模块名称/方法',参数,{root:true})
```

#### 动态注册

```js
store.registerModule('myModule', {});
```

## 13. pinia

#### demo

```js
// stores/counter.js
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0,
  }),
  getters: {
    doubleCount: state => state.counter * 2,
  },
  // 返回类型必须明确设置
  doublePlusOne(): number {
    return this.counter * 2 + 1;
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++;
    },
  },
});
```

```js
import { useCounterStore } from '@/stores/counter';

export default {
  setup() {
    const counter = useCounterStore();

    counter.count++;
    // with autocompletion ✨
    counter.$patch({ count: counter.count + 1 });
    // or using an action instead
    counter.increment();
  },
};
```

#### state

```js
# 直接解构没有响应式 需要通过storeToRefs解构
const { name, doubleCount } = storeToRefs(store)
# 重置状态
store.$reset()
# 改变
store.counter++
store.$patch({
  counter: store.counter + 1,
  name: 'Abalam',
})
cartStore.$patch((state) => {
  state.items.push({ name: 'shoes', quantity: 1 })
  state.hasChanged = true
})
# 替换整个state
store.$state = { counter: 666, name: 'Paimon' }
pinia.state.value = {}
```

#### getters

```js
  getters: {
    // 自动将返回类型推断为数字
    doubleCount(state) {
      return state.counter * 2
    },
    // 返回类型必须明确设置
    doublePlusOne(): number {
      return this.counter * 2 + 1
    },
    // 必须返回函数才能传递参数
    getUserById: (state) => {
      return (userId) => state.users.find((user) => user.id === userId)
    },
  },
#
const store = useStore()
store.doubleCount
getUserById(2)
# 访问其他store
  const otherStore = useOtherStore()
  otherStore.xxx
```

#### actions

```js
  actions: {
    increment() {
      this.counter++
    },
    randomizeCounter() {
      this.counter = Math.round(100 * Math.random())
    },
  },
 # 可以使用async await
const main = useMainStore()
main.randomizeCounter()
```

#### plugins

```js
# 为每个store添加一个 secret的属性
import { createPinia } from 'pinia'
function SecretPiniaPlugin() {
  return { secret: 'the cake is a lie' }
}
const pinia = createPinia()
pinia.use(SecretPiniaPlugin)

const store = useStore()
store.secret

pinia.use(() => ({ hello: 'world' }))
pinia.use(({ store }) => {
  store.hello = 'world'
})
# 添加外部静态属性
import { markRaw } from 'vue'
import { router } from './router'
pinia.use(({ store }) => {
  store.router = markRaw(router)
})
```

#### api

```js
# $subscribe() 监听变化
cartStore.$subscribe((mutation, state) => {
  // import { MutationType } from 'pinia'
  mutation.type // 'direct' | 'patch object' | 'patch function'
  // 与 cartStore.$id 相同
  mutation.storeId // 'cart'
  // 仅适用于 mutation.type === 'patch object'
  mutation.payload // 补丁对象传递给 to cartStore.$patch()

  // 每当它发生变化时，将整个状态持久化到本地存储
  localStorage.setItem('cart', JSON.stringify(state))
})
 const someStore = useSomeStore()
 someStore.$subscribe(callback, { detached: true })

# $onAction 订阅action
# $state
```

## 14 VueRouter

```js
```

## 15. hook

## 16. 其他

### 懒加载

```js
// 定义指令
const defineDirective = app => {
  // 1. 图片懒加载指令 v-lazy
  // 原理：先存储图片地址不能在src上，当图片进入可视区，将你存储图片地址设置给图片元素即可。
  app.directive('lazy', {
    // vue2.0 监听使用指令的DOM是否创建好，钩子函数：inserted
    // vue3.0 的指令拥有的钩子函数和组件的一样，使用指令的DOM是否创建好，钩子函数：mounted
    mounted(el, binding) {
      // 2. 创建一个观察对象，来观察当前使用指令的元素
      const observe = new IntersectionObserver(
        ([{ isIntersecting }]) => {
          if (isIntersecting) {
            // 停止观察
            observe.unobserve(el);
            // 3. 把指令的值设置给el的src属性 binding.value就是指令的值
            // 4. 处理图片加载失败 error 图片加载失败的事件 load 图片加载成功
            el.onerror = () => {
              // 加载失败，设置默认图
              el.src = defaultImg;
            };
            el.src = binding.value;
          }
        },
        {
          threshold: 0,
        },
      );
      // 开启观察
      observe.observe(el);
    },
  });
};
```

### jsx

```js
yarn add @vitejs/plugin-vue-jsx -D
import vueJsx from '@vitejs/plugin-vue-jsx'
plugins: [vue(), vueJsx({})]

# HelloWorld.vue
<script setup lang="jsx">
import { defineComponent } from 'vue'
const Bar = defineComponent({
  render() { return <div>asdas</div> }})
</script>
<template>  <Bar/> </template>
```

- jsx

```js
const App = () => <div></div>;
const App = {
  render() {
    return <div>Vue 3.0</div>;
  },
};
```

- v-show

```js
## v-show
const Bar = defineComponent({
  data() {
    return {
      visible: true
    }
  },
  render() {
    return <input v-show={this.visible} />
  }
})
```

- v-model

```js
## v-model
<input v-model={val} />
<input v-model:argument={val} />
<input v-model={[val, ["modifier"]]} />
<A v-model={[val, "argument", ["modifier"]]} />
```

- v-directives

```js
const App = {
  directives: { custom: customDirective },
  setup() {
    return () => <a v-custom={[val, 'arg', ['a', 'b']]} />;
  },
};
```

- 插槽

```js
```

### 渲染函数

```js
<template>
  <vnode />
</template>
<script setup lang="ts">
import { defineComponent, h } from 'vue'
const vnode = defineComponent({
  render() {
    return h('div', // type
      { id: 'foo', class: 'bar', innerHTML: "hello" }, // props
      [
        // children
      ]
    )
  }
})
</script>
```
