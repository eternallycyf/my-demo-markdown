(self.webpackChunkmy_demo_markdown=self.webpackChunkmy_demo_markdown||[]).push([[7091],{22327:function(m,c,a){"use strict";a.r(c);var i=a(12924),e=a.n(i),n=a(16924),t=a(53401);const l=e().memo(({demos:o})=>e().createElement(e().Fragment,null,e().createElement("div",{className:"markdown"},e().createElement("h1",{id:"vue-30"},e().createElement(n.AnchorLink,{to:"#vue-30","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"Vue 3.0"),e().createElement("h2",{id:"1-\u51C6\u5907\u9636\u6BB5"},e().createElement(n.AnchorLink,{to:"#1-\u51C6\u5907\u9636\u6BB5","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"1. \u51C6\u5907\u9636\u6BB5"),e().createElement(t.Z,{code:`v-modal \u66F4\u6362\u4E86\u9ED8\u8BA4\u540D\u79F0
template \u4E0A v-for \u53EF\u4EE5\u5199 key
v-bind \u540C\u65F6 \u539F\u751F\u5199\u6CD5 \u8C01\u5148\u5199 \u5C31\u7528\u8C01
.native \u79FB\u9664 \u5C06\u4E8B\u4EF6\u9ED8\u8BA4\u4F20\u9012\u8FDB\u53BB\u4E86 \u4E0D\u7528 emit\u63A5\u53D7\u9ED8\u8BA4\u4E8B\u4EF6`,lang:"js"}),e().createElement("h3",{id:"tsconfig"},e().createElement(n.AnchorLink,{to:"#tsconfig","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"tsconfig"),e().createElement(t.Z,{code:`// tsconfig.json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
  // \u8FD9\u6837\u5C31\u53EF\u4EE5\u5BF9 \`this\` \u4E0A\u7684\u6570\u636E\u5C5E\u6027\u8FDB\u884C\u66F4\u4E25\u683C\u7684\u63A8\u65AD
    "strict": true,
    "jsx": "preserve",
    "moduleResolution": "node"
  }
}`,lang:"js"}),e().createElement("h3",{id:"\u8C03\u8BD5\u5DE5\u5177\u76F4\u63A5\u6253\u5F00\u4EE3\u7801"},e().createElement(n.AnchorLink,{to:"#\u8C03\u8BD5\u5DE5\u5177\u76F4\u63A5\u6253\u5F00\u4EE3\u7801","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u8C03\u8BD5\u5DE5\u5177\u76F4\u63A5\u6253\u5F00\u4EE3\u7801"),e().createElement(t.Z,{code:`#
cd /usr/local/bin
nano code
// \u628Apython\u6539\u6210python3
- function realpath() { python -c ...
+ function realpath() { python3 -c ...
ctrl+X \u9000\u51FA
#
\u8F93\u5165code\u5C31\u81EA\u52A8\u6253\u5F00vscode\u4E86`,lang:"js"}),e().createElement("h3",{id:""},e().createElement(n.AnchorLink,{to:"#","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"}))),e().createElement("h2",{id:"2-css"},e().createElement(n.AnchorLink,{to:"#2-css","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"2. css"),e().createElement("h3",{id:"\u6DF1\u5EA6\u4F5C\u7528\u7B26"},e().createElement(n.AnchorLink,{to:"#\u6DF1\u5EA6\u4F5C\u7528\u7B26","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u6DF1\u5EA6\u4F5C\u7528\u7B26"),e().createElement(t.Z,{code:`<style scoped>
// \u666E\u901A
::v-deep(.foo) {}
:deep(.foo) {}

// \u63D2\u69FD
::v-slotted(.foo) {}
:slotted(.foo) {}

// \u5168\u5C40
::v-global(.foo) {}
:global(.foo) {}
<style>`,lang:"js"}),e().createElement("h3",{id:"css-\u4F7F\u7528\u53D8\u91CF"},e().createElement(n.AnchorLink,{to:"#css-\u4F7F\u7528\u53D8\u91CF","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"css \u4F7F\u7528\u53D8\u91CF"),e().createElement(t.Z,{code:`# css \u4F7F\u7528\u53D8\u91CF
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
js\u539F\u59CBstyle \u4E0D\u8981\u52A0\u5B57\u7B26\u4E32
style=\\"--color:green;\\"
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
</style>`,lang:"js"}),e().createElement("h2",{id:"3-\u4FEE\u9970\u7B26"},e().createElement(n.AnchorLink,{to:"#3-\u4FEE\u9970\u7B26","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"3. \u4FEE\u9970\u7B26"),e().createElement("h3",{id:"\u4FEE\u9970\u7B26"},e().createElement(n.AnchorLink,{to:"#\u4FEE\u9970\u7B26","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u4FEE\u9970\u7B26"),e().createElement(t.Z,{code:`.exact
<!-- \u5373\u4F7F Alt \u6216 Shift \u88AB\u4E00\u540C\u6309\u4E0B\u65F6\u4E5F\u4F1A\u89E6\u53D1 -->
<button @click.ctrl="onClick">A</button>
<!-- \u6709\u4E14\u53EA\u6709 Ctrl \u88AB\u6309\u4E0B\u7684\u65F6\u5019\u624D\u89E6\u53D1 -->
<button @click.ctrl.exact="onCtrlClick">A</button>
<!-- \u6CA1\u6709\u4EFB\u4F55\u7CFB\u7EDF\u4FEE\u9970\u7B26\u88AB\u6309\u4E0B\u7684\u65F6\u5019\u624D\u89E6\u53D1 -->
<button @click.exact="onClick">A</button>
# \u4E8B\u4EF6\u4FEE\u9970\u7B26
.stop
.prevent
.capture
.self
.once
.passive
# \u6309\u952E\u4FEE\u9970\u7B26
<input @keyup.enter="submit" />
.enter
.tab
.delete (\u6355\u83B7\u201C\u5220\u9664\u201D\u548C\u201C\u9000\u683C\u201D\u952E)
.esc
.space
.up
.down
.left
.right
# \u7CFB\u7EDF\u4FEE\u9970\u7B26
.ctrl
.alt
.shift
.meta
# \u9F20\u6807\u4FEE\u9970\u7B26
.left
.right
.middle

# \u8868\u5355\u4FEE\u9970\u7B26
.number
.lazy
.trim`,lang:"js"}),e().createElement("h3",{id:"\u81EA\u5B9A\u4E49\u4FEE\u9970\u7B26"},e().createElement(n.AnchorLink,{to:"#\u81EA\u5B9A\u4E49\u4FEE\u9970\u7B26","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u81EA\u5B9A\u4E49\u4FEE\u9970\u7B26"),e().createElement(t.Z,{code:"",lang:"js"}),e().createElement("h2",{id:"4-\u5B9E\u4F8B"},e().createElement(n.AnchorLink,{to:"#4-\u5B9E\u4F8B","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"4. \u5B9E\u4F8B"),e().createElement("h3",{id:"emit-props"},e().createElement(n.AnchorLink,{to:"#emit-props","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"emit props"),e().createElement(t.Z,{code:`// <script setup />\u4E2D\u4E0D\u9700\u8981\u5BFC\u5165 defineProps defineEmit \u76F4\u63A5\u4F7F\u7528
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
   ()emit('passData,123')`,lang:"js"}),e().createElement("h3",{id:"useslots-useattrs"},e().createElement(n.AnchorLink,{to:"#useslots-useattrs","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"useSlots useAttrs"),e().createElement(t.Z,{code:`import { useSlots, useAttrs } from 'vue'
const slots = useSlots()
const attrs = useAttrs()


$attrs \u83B7\u53D6\u9664\u4E86 props emit \u5176\u4ED6\u7684\u5C5E\u6027`,lang:"js"}),e().createElement("h3",{id:"readonly"},e().createElement(n.AnchorLink,{to:"#readonly","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"readonly"),e().createElement(t.Z,{code:`import { readonly } from 'vue';
readonly(count);`,lang:"js"}),e().createElement("h2",{id:"5-\u6307\u4EE4"},e().createElement(n.AnchorLink,{to:"#5-\u6307\u4EE4","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"5. \u6307\u4EE4"),e().createElement("h3",{id:"v-model"},e().createElement(n.AnchorLink,{to:"#v-model","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"v-model"),e().createElement(t.Z,{code:`// \u53EF\u4EE5\u4F20\u9012\u591A\u4E2Av-model
<Son
   v-model='msg'
/>
<Son
   :modelValue="msg"
   @update:modelValue="msg = $event"
/>
// \u81EA\u5B9A\u4E49\u547D\u540D
<ChildComponent v-model:title="pageTitle" />
<ChildComponent :title="pageTitle" @update:title="pageTitle = $event" />`,lang:"js"}),e().createElement("h3",{id:"v-html"},e().createElement(n.AnchorLink,{to:"#v-html","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"v-html"),e().createElement(t.Z,{code:`<div v-html="'<div></div>'"></div>;
\u4E2D\u95F4\u4E0D\u80FD\u653E\u5185\u5BB9;`,lang:"js"}),e().createElement("h3",{id:"v-bind"},e().createElement(n.AnchorLink,{to:"#v-bind","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"v-bind"),e().createElement(t.Z,{code:`<div  v-bind='obj' />
const obj = {
  id:1,
  name:2
}
# \u52A8\u6001\u53C2\u6570 null\u79FB\u9664\u53C2\u6570
<div :[attr]='url' />
const attr = 'id'

\u4E0D\u8981\u62FC\u63A5 \u4F7F\u7528computed\u6765\u5199
<a :['foo' + bar]="value"> ... </a>`,lang:"js"}),e().createElement("h2",{id:"6-\u57FA\u672C-api"},e().createElement(n.AnchorLink,{to:"#6-\u57FA\u672C-api","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"6. \u57FA\u672C API"),e().createElement("h3",{id:"setup"},e().createElement(n.AnchorLink,{to:"#setup","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"setup"),e().createElement("h4",{id:"setup-1"},e().createElement(n.AnchorLink,{to:"#setup-1","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"setup"),e().createElement(t.Z,{code:`/*
 \u5728 beforecreate \u94A9\u5B50\u4E4B\u524D\u5B8C\u6210
 export default \u7684\u5185\u5BB9\u4F1A\u653E\u5728\u539F\u7EC4\u4EF6 \u58F0\u660E\u5B57\u6BB5
 this \u662F undefined
 \u8BED\u6CD5\u7CD6 
       \u81EA\u52A8\u6CE8\u518C\u7EC4\u4EF6
       \u81EA\u52A8\u5BFC\u51FA\u53D8\u91CF
       \u81EA\u52A8\u6CE8\u518C\u6307\u4EE4
       \u9876\u5C42\u76F4\u63A5\u5199 await \u4E0D\u7528\u5199 async
*/`,lang:"js"}),e().createElement("h4",{id:"defineexpose"},e().createElement(n.AnchorLink,{to:"#defineexpose","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"defineExpose"),e().createElement(t.Z,{code:`// \u5BFC\u51FA\u53D8\u91CF,\u5176\u4ED6\u7EC4\u4EF6\u901A\u8FC7ref\u83B7\u53D6\u7EC4\u4EF6\u5B9E\u4F8B
// { a: number, b: number }
defineExpose({
  a,
  b,
});`,lang:"js"}),e().createElement("h4",{id:"\u5BFC\u51FA\u7EC4\u4EF6\u540D"},e().createElement(n.AnchorLink,{to:"#\u5BFC\u51FA\u7EC4\u4EF6\u540D","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u5BFC\u51FA\u7EC4\u4EF6\u540D"),e().createElement(t.Z,{code:`# \u5BFC\u51FA\u7EC4\u4EF6\u540D
<script setup lang="ts">
  export default {
   name: 'xxx'
  }
</script>`,lang:"js"}),e().createElement("h3",{id:"reactive"},e().createElement(n.AnchorLink,{to:"#reactive","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"reactive"),e().createElement("h4",{id:"reactive-1"},e().createElement(n.AnchorLink,{to:"#reactive-1","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"reactive"),e().createElement(t.Z,{code:`// \u6570\u636E\u6DF1\u5EA6\u54CD\u5E94\u5F0F
// \u5BF9 string number boolean \u539F\u59CB\u7C7B\u578B\u65E0\u6548
import { reactive } from 'vue';
const obj = reactive({
  name: 'ls',
  age: 18,
});
// \u76F4\u63A5\u89E3\u6784\u7684\u662F\u666E\u901A\u7684\u6570\u636E \u8981\u901A\u8FC7toRef\u8F6C\u6362`,lang:"js"}),e().createElement("h4",{id:"shallowreactive"},e().createElement(n.AnchorLink,{to:"#shallowreactive","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"shallowReactive"),e().createElement(t.Z,{code:"# \u53EA\u6709\u6839\u7EA7\u522B\u662F\u54CD\u5E94\u5F0F\u6570\u636E",lang:"js"}),e().createElement("h4",{id:"toref"},e().createElement(n.AnchorLink,{to:"#toref","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"toRef"),e().createElement(t.Z,{code:`// \u8F6C\u6362reactive \u5355\u4E2A\u5C5E\u6027\u4E3A\u54CD\u5E94\u5F0F\u6570\u636E
// \u5F15\u7528
// \u4FEE\u6539\u54CD\u5E94\u5F0F\u6570\u636E\u4E0D\u4F1A\u5F71\u54CD\u4EE5\u524D\u7684\u6570\u636E
// \u6570\u636E\u53D1\u751F\u6539\u53D8 \u754C\u9762\u4E5F\u4E0D\u4F1A\u81EA\u52A8\u66F4\u65B0
const name = toRef(obj, 'name');`,lang:"js"}),e().createElement("h4",{id:"torefs"},e().createElement(n.AnchorLink,{to:"#torefs","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"toRefs"),e().createElement(t.Z,{code:`// \u8F6C\u6362reactive \u6240\u6709\u5C5E\u6027\u4E3A\u54CD\u5E94\u5F0F\u6570\u636E
const obj3 = toRefs(obj);`,lang:"js"}),e().createElement("h3",{id:"ref"},e().createElement(n.AnchorLink,{to:"#ref","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"ref"),e().createElement("h4",{id:"ref-1"},e().createElement(n.AnchorLink,{to:"#ref-1","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"ref"),e().createElement(t.Z,{code:`// \u53EF\u4EE5\u4F7F\u7528\u4EFB\u4F55\u7C7B\u578B
// \u539F\u7406: reactive({ value:xxx })
import { ref } from 'vue';
const count = ref(0);
count.value++;
console.log(count.value);`,lang:"js"}),e().createElement("h4",{id:"\u83B7\u53D6-dom"},e().createElement(n.AnchorLink,{to:"#\u83B7\u53D6-dom","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u83B7\u53D6 dom"),e().createElement(t.Z,{code:`# \u5355\u4E2A\u5143\u7D20
<div ref="dom">\u6211\u662Fbox</div>
const dom = ref(null)
onMounted(()=>{
  console.log(dom.value)
})
# \u591A\u4E2A\u5143\u7D20
<ul>
    <li v-for="i in 4" :key="i" :ref="setDom">
        \u7B2C{{i}}LI</li>
</ul>
const domList = []
const setDom = (el) => {domList.push(el)}
onMounted(()=>{
  console.log(domList)
})`,lang:"js"}),e().createElement("h4",{id:"\u83B7\u53D6\u7EC4\u4EF6-ref"},e().createElement(n.AnchorLink,{to:"#\u83B7\u53D6\u7EC4\u4EF6-ref","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u83B7\u53D6\u7EC4\u4EF6 ref"),e().createElement(t.Z,{code:`<Child ref='child' />

const child = ref(null)
onMounted(()=>{
  child.value
})

# \u66B4\u9732\u6570\u636E
defineExpose({
  a,
  b
})`,lang:"js"}),e().createElement("h3",{id:"computed"},e().createElement(n.AnchorLink,{to:"#computed","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"computed"),e().createElement(t.Z,{code:`import { computed } from 'vue'
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
})`,lang:"js"}),e().createElement("h3",{id:"watch"},e().createElement(n.AnchorLink,{to:"#watch","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"watch"),e().createElement(t.Z,{code:`import { watch,watchEffect } from 'vue'
watch(\u53D8\u91CF,(newValue,oldValue) => {
})
# \u76D1\u542C\u591A\u4E2A\u6570\u636E\u6539\u53D8
watch([count, obj], ()=>{
})
# \u76D1\u542C\u5BF9\u8C61\u67D0\u4E2A\u5C5E\u6027\u7684\u53D8\u5316
watch(()=>obj.name,()=>{
})
watch(()=>[obj.name,obj.age],()=>{
})
# \u6DF1\u5EA6\u76D1\u542C
// flush \u76D1\u542C\u5230\u66F4\u65B0\u540E\u7684dom
watch(\u53D8\u91CF, (newValue,oldValue) => {
},{deep: true,immediate: true,flush: 'post' })


# watchEffect \u76F8\u5F53\u4E8Ewatch\u52A0\u4E86immediate:true
watch \u5C5E\u6027\u53D8\u66F4\u4E86\u624D\u4F1A\u6267\u884C \u4E0D\u80FD\u505C\u6B62
watchEffect \u4E00\u5B9A\u4F1A\u6267\u884C\u4E00\u6B21 \u4F9D\u8D56\u4E8E\u56DE\u8C03\u5185\u90E8\u7684\u53D8\u91CF\u53D8\u5316
            \u53EF\u4EE5\u505C\u6B62
watchPostEffect

# \u505C\u6B62\u76D1\u542C\u5668
const unwatch = watchEffect(() => {})
unwatch()`,lang:"js"}),e().createElement("h3",{id:"\u81EA\u5B9A\u4E49\u6307\u4EE4"},e().createElement(n.AnchorLink,{to:"#\u81EA\u5B9A\u4E49\u6307\u4EE4","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u81EA\u5B9A\u4E49\u6307\u4EE4"),e().createElement(t.Z,{code:`# \u5168\u5C40\u6307\u4EE4
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

<p v-highlight="'yellow'">\u4EE5\u4EAE\u9EC4\u8272\u9AD8\u4EAE</p>
# \u5C40\u90E8\u6307\u4EE4
<script setup>
const vMyDirective = {
  beforeMount: (el) => {
    // \u5728\u5143\u7D20\u4E0A\u505A\u4E9B\u64CD\u4F5C
  }
}
</script>
<template>
  <h1 v-my-directive>This is a Heading</h1>
</template>`,lang:"js"}),e().createElement("h3",{id:"\u63D2\u69FD"},e().createElement(n.AnchorLink,{to:"#\u63D2\u69FD","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u63D2\u69FD"),e().createElement(t.Z,{code:`import { useContext } from 'vue'
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
	</HelloWorld>`,lang:"js"}),e().createElement("h3",{id:"\u751F\u547D\u5468\u671F"},e().createElement(n.AnchorLink,{to:"#\u751F\u547D\u5468\u671F","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u751F\u547D\u5468\u671F"),e().createElement(t.Z,{code:`import { onMounted } from 'vue'
onMouted(\u51FD\u6570\u540D)
onMounted(()=>{
   xxx
})
#
setup \u521B\u5EFA\u5B9E\u4F8B\u524D
onBeforeMount \u6302\u8F7DDOM\u524D
onMounted \u6302\u8F7DDOM\u540E
onBeforeUpdate \u66F4\u65B0\u7EC4\u4EF6\u524D
onUpdated \u66F4\u65B0\u7EC4\u4EF6\u540E
onBeforeUnmount \u5378\u8F7D\u9500\u6BC1\u524D
onUnmounted \u5378\u8F7D\u9500\u6BC1\u540E`,lang:"js"}),e().createElement("h2",{id:"7-\u5168\u5C40-api"},e().createElement(n.AnchorLink,{to:"#7-\u5168\u5C40-api","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"7. \u5168\u5C40 API"),e().createElement("h3",{id:"createapp"},e().createElement(n.AnchorLink,{to:"#createapp","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"createApp"),e().createElement(t.Z,{code:`import { createApp } from 'vue';
const app = createApp({});
app.component.directive.mixin.previde / inject.use.config.globalProperties;`,lang:"js"}),e().createElement("h4",{id:"\u81EA\u5B9A\u4E49\u6307\u4EE4-1"},e().createElement(n.AnchorLink,{to:"#\u81EA\u5B9A\u4E49\u6307\u4EE4-1","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u81EA\u5B9A\u4E49\u6307\u4EE4"),e().createElement(t.Z,{code:`<p v-highlight="'yellow'">\u4EE5\u4EAE\u9EC4\u8272\u9AD8\u4EAE\u663E\u793A\u6B64\u6587\u672C</p>
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
})`,lang:"js"}),e().createElement("h4",{id:"mixin"},e().createElement(n.AnchorLink,{to:"#mixin","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"mixin"),e().createElement(t.Z,{code:`# main.ts
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
}).mount('#app')`,lang:"js"}),e().createElement("h4",{id:"provideinject"},e().createElement(n.AnchorLink,{to:"#provideinject","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"Provide/Inject"),e().createElement(t.Z,{code:`// \u53EF\u4EE5\u662F\u51FD\u6570 \u4E5F\u53EF\u4EE5\u662F\u53D8\u91CF
import { provide } from 'vue';
provide('money', money);
const money = inject('money', '\u9ED8\u8BA4\u503C');
const money = inject('money', () => '\u9ED8\u8BA4\u503C');`,lang:"js"}),e().createElement("h4",{id:"configglobalproperties"},e().createElement(n.AnchorLink,{to:"#configglobalproperties","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),".config.globalProperties"),e().createElement(t.Z,{code:`// 2.0 \u662F Vue.prototype.$http
import axios from 'axios'
app.config.globalProperties.$http = axios
# ts\u63D0\u793A
import axios from 'axios'
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $http: typeof axios
  }
}`,lang:"js"}),e().createElement("h2",{id:"8-\u5176\u4ED6-api"},e().createElement(n.AnchorLink,{to:"#8-\u5176\u4ED6-api","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"8. \u5176\u4ED6 API"),e().createElement("h3",{id:"nexttick"},e().createElement(n.AnchorLink,{to:"#nexttick","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"nextTick"),e().createElement(t.Z,{code:`import { nextTick } from 'vue';
nextTick(() => {});`,lang:"js"}),e().createElement("h3",{id:"forceupdate"},e().createElement(n.AnchorLink,{to:"#forceupdate","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"forceUpdate"),e().createElement(t.Z,{code:"\u4EC5\u4EC5\u5F71\u54CD\u5B9E\u4F8B\u672C\u8EAB\u548C\u63D2\u5165\u63D2\u69FD\u5185\u5BB9\u7684\u5B50\u7EC4\u4EF6\uFF0C\u800C\u4E0D\u662F\u6240\u6709\u5B50\u7EC4\u4EF6",lang:"js"}),e().createElement("h3",{id:"ref-2"},e().createElement(n.AnchorLink,{to:"#ref-2","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"ref"),e().createElement("h4",{id:"customref"},e().createElement(n.AnchorLink,{to:"#customref","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"customRef"),e().createElement(t.Z,{code:`# \u81EA\u5B9A\u4E49ref
function myRef(value){
  return customRef((track,trigger)=> {
    return{
       get(){
           track() // \u9700\u8981\u8FFD\u8E2A\u53D8\u5316
           return value
       },
       set(newValue){
            value = newValue
            trigger() //\u89E6\u53D1\u754C\u9762\u66F4\u65B0
       }
    }
  });
}`,lang:"js"}),e().createElement("h4",{id:"shallowref"},e().createElement(n.AnchorLink,{to:"#shallowref","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"shallowRef"),e().createElement(t.Z,{code:`import {shallowRef,shallowReactive\uFF0CtriggerRef} from 'vue'
triggerRef(state) \u81EA\u52A8\u66F4\u65B0`,lang:"js"}),e().createElement("h4",{id:"toraw"},e().createElement(n.AnchorLink,{to:"#toraw","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"toRaw"),e().createElement(t.Z,{code:`# \u83B7\u53D6 ref reactive \u7684 \u539F\u59CB\u6570\u636E
//ref reactive \u662F\u9ED8\u8BA4\u9012\u5F52\u66F4\u65B0\u7684 \u6D88\u8017\u6027\u80FD
# \u5982\u679C\u4E0D\u9700\u8981\u66F4\u65B0UI\u754C\u9762 \u5C31\u9700\u8981 toRaw \u66F4\u65B0\u6570\u636E \u4F46\u4E0D\u66F4\u65B0UI\u754C\u9762
import {toRaw} from 'vue'
let obj = {xxx}
let state = reactive(obj)
let obj2 = toRaw(state)
obj1 === obj2  //true
obj.name = xxx
let obj2 = toRwa(state.value) //ref \u9700\u8981.value`,lang:"js"}),e().createElement("h4",{id:"markraw"},e().createElement(n.AnchorLink,{to:"#markraw","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"markRaw"),e().createElement(t.Z,{code:`# \u6C38\u8FDC\u90FD\u4E0D\u88AB\u8FFD\u8E2A \u4E0D\u66F4\u65B0UI \u4E0D\u662F\u54CD\u5E94\u5F0F\u6570\u636E
 obj = markRaw(obj)`,lang:"js"}),e().createElement("h4",{id:"readonly-1"},e().createElement(n.AnchorLink,{to:"#readonly-1","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"readonly"),e().createElement(t.Z,{code:`# \u9012\u5F52\u53EA\u8BFB\u6570\u636E
let state = readonly({
   name:'zs'
})`,lang:"js"}),e().createElement("h2",{id:"9-\u5185\u7F6E\u7EC4\u4EF6"},e().createElement(n.AnchorLink,{to:"#9-\u5185\u7F6E\u7EC4\u4EF6","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"9. \u5185\u7F6E\u7EC4\u4EF6"),e().createElement("h3",{id:"teleport"},e().createElement(n.AnchorLink,{to:"#teleport","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"teleport"),e().createElement(t.Z,{code:`// \u6307\u5B9A\u6E32\u67D3\u5230\u6839\u5143\u7D20 \u4E4B\u5916\u7684\u5730\u65B9
<teleport to="body">...</teleport>`,lang:"js"}),e().createElement("h3",{id:"component"},e().createElement(n.AnchorLink,{to:"#component","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"component"),e().createElement(t.Z,{code:`<component :is="true? Home : Login" />
   \u9ED8\u8BA4\u4F1A\u9500\u6BC1`,lang:"js"}),e().createElement("h3",{id:"defineasynccomponent"},e().createElement(n.AnchorLink,{to:"#defineasynccomponent","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"defineAsyncComponent"),e().createElement(t.Z,{code:`# \u5F02\u6B65\u7EC4\u4EF6
import { defineAsyncComponent } from 'vue'
const xxx = defineAsyncComponent(() => import('./'))
const xxx = defineAsyncComponent({
  loader: () => import(''),
  delay: 200,
  timeout: 3000,
  errorComponent: xxx,
  loadingComponent: xxx,
})`,lang:"js"}),e().createElement("h3",{id:"keep-alive"},e().createElement(n.AnchorLink,{to:"#keep-alive","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"keep-alive"),e().createElement(t.Z,{code:`# \u7EC4\u4EF6\u7F13\u5B58
\u4E0D\u4F1A\u88AB\u9500\u6BC1
\u52A0\u4E0A\u5C31\u4F1A\u7F13\u5B58 \u6392\u9664\u5C31\u52A0exclude\u5C5E\u6027 , include
		<keep-alive exclude="\u7EC4\u4EF6\u7684name \u9017\u53F7\u5206\u9694">
			<router-view />
		</keep-alive>
# \u751F\u547D\u5468\u671F
activated - \u6FC0\u6D3B
deactivated - \u5931\u53BB\u6FC0\u6D3B\u72B6\u6001`,lang:"js"}),e().createElement("h2",{id:"10-\u7EC4\u4EF6"},e().createElement(n.AnchorLink,{to:"#10-\u7EC4\u4EF6","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"10. \u7EC4\u4EF6"),e().createElement("h3",{id:"\u7236\u4F20\u5B50"},e().createElement(n.AnchorLink,{to:"#\u7236\u4F20\u5B50","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u7236\u4F20\u5B50"),e().createElement(t.Z,{code:`# \u7236\u7EC4\u4EF6
  <HelloWorld :number="\u7236\u7EC4\u4EF6\u5185\u90E8\u7684\u6570\u636E" />
# \u5B50\u7EC4\u4EF6
import { defineProps, withDefaults } from 'vue'
const { number } = defineProps(['number'])
const { number } = defineProps({ number: Number })
const { number } = defineProps<{ number?:number }>()

interface INumberProps {number?: number}
const { number } = withDefaults(defineProps<INumberProps>(),
{number: 5})`,lang:"tsx"}),e().createElement("h3",{id:"\u5B50\u4F20\u7236"},e().createElement(n.AnchorLink,{to:"#\u5B50\u4F20\u7236","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u5B50\u4F20\u7236"),e().createElement(t.Z,{code:`# \u5B50\u7EC4\u4EF6
import { defineEmit } from 'vue'
const emit = defineEmits(['passData']);
const emit= defineEmits<{(e:'passDate',number:number):void}>()
emit('passData',123)
# \u7236\u7EC4\u4EF6
<HelloWorld @passData="\u81EA\u5B9A\u4E49\u4E8B\u4EF6" />
const \u81EA\u5B9A\u4E49\u4E8B\u4EF6 = (data) => {
  console.log(data)
}`,lang:"js"}),e().createElement("h2",{id:"11-\u5176\u4ED6\u529F\u80FD"},e().createElement(n.AnchorLink,{to:"#11-\u5176\u4ED6\u529F\u80FD","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"11. \u5176\u4ED6\u529F\u80FD"),e().createElement("h3",{id:"\u51FD\u6570\u7EC4\u4EF6"},e().createElement(n.AnchorLink,{to:"#\u51FD\u6570\u7EC4\u4EF6","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u51FD\u6570\u7EC4\u4EF6"),e().createElement(t.Z,{code:`<template>
  <component
    v-bind:is="\`h\${$props.level}\`"
    v-bind="$attrs"
  />
</template>

<script>
export default {
  props: ['level']
}
</script>`,lang:"js"}),e().createElement("h3",{id:"\u81EA\u5B9A\u4E49\u5143\u7D20"},e().createElement(n.AnchorLink,{to:"#\u81EA\u5B9A\u4E49\u5143\u7D20","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u81EA\u5B9A\u4E49\u5143\u7D20"),e().createElement(t.Z,{code:`<button is="plastic-button">\u70B9\u51FB\u6211!</button>
<button is="vue:plastic-button">\u70B9\u51FB\u6211!</button>
document.createElement('button', { is: 'plastic-button' })`,lang:"js"}),e().createElement("h3",{id:"\u5F02\u6B65\u7EC4\u4EF6"},e().createElement(n.AnchorLink,{to:"#\u5F02\u6B65\u7EC4\u4EF6","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u5F02\u6B65\u7EC4\u4EF6"),e().createElement(t.Z,{code:`import { defineAsyncComponent } from 'vue'
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
)`,lang:"js"}),e().createElement("h2",{id:"12-vuex"},e().createElement(n.AnchorLink,{to:"#12-vuex","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"12 VueX"),e().createElement(t.Z,{code:`# store/index.js
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
createApp(App).use(store).mount('#app')`,lang:"js"}),e().createElement("h4",{id:"state"},e().createElement(n.AnchorLink,{to:"#state","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"State"),e().createElement("ul",null,e().createElement("li",null,"\u83B7\u53D6\u4F7F\u7528\u6570\u636E"),e().createElement("li",null,"\u4E0D\u80FD\u76F4\u63A5\u64CD\u4F5C Store \u4E2D\u7684\u6570\u636E")),e().createElement(t.Z,{code:`# state
state: {
  count: 55
},
# 1
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const count = computed(() => store.state.count)
console.log(count.value);  // 1`,lang:"javascript"}),e().createElement("h4",{id:"getter"},e().createElement(n.AnchorLink,{to:"#getter","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"Getter"),e().createElement(t.Z,{code:`state: {
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
console.log(newCount.value);  // 1`,lang:"js"}),e().createElement("h4",{id:"mutation"},e().createElement(n.AnchorLink,{to:"#mutation","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"Mutation"),e().createElement("ul",null,e().createElement("li",null,"\u4FEE\u6539 Store \u6570\u636E"),e().createElement("li",null,"\u8FD4\u56DE\u503C\u662F undefined")),e().createElement(t.Z,{code:`state: {
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
  <button @click="fn">{{ count }}</button>`,lang:"javascript"}),e().createElement("h4",{id:"action"},e().createElement(n.AnchorLink,{to:"#action","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"Action"),e().createElement("ul",null,e().createElement("li",null,"\u5904\u7406\u5F02\u6B65\u64CD\u4F5C \u901A\u8FC7\u89E6\u53D1 mutation \u7684\u65B9\u5F0F\u53D8\u66F4\u6570\u636E"),e().createElement("li",null,"\u53EF\u4EE5\u6709\u8FD4\u56DE\u503C \u662F\u4E00\u4E2A promise \u7528 await \u89E3\u6790")),e().createElement(t.Z,{code:`#
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
const ayFn = () => store.dispatch('asyncSave', { count: 1123121, a: 2 })`,lang:"javascript"}),e().createElement("h4",{id:"module"},e().createElement(n.AnchorLink,{to:"#module","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"Module"),e().createElement("ul",null,e().createElement("li",null,"store")),e().createElement(t.Z,{code:`import { createStore } from 'vuex';
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
});`,lang:"js"}),e().createElement("ul",null,e().createElement("li",null,"Hello.vue")),e().createElement(t.Z,{code:`<script setup>
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
</template>`,lang:"js"}),e().createElement(t.Z,{code:`# namespaced: true \u5F00\u542F\u547D\u540D\u7A7A\u95F4
# root:true \u8C03\u7528\u5168\u5C40\u53C2\u6570
context.commit('\u5B50\u6A21\u5757\u540D\u79F0/\u65B9\u6CD5',\u53C2\u6570,{root:true})
context.dispatch('\u5B50\u6A21\u5757\u540D\u79F0/\u65B9\u6CD5',\u53C2\u6570,{root:true})`,lang:"js"}),e().createElement("h4",{id:"\u52A8\u6001\u6CE8\u518C"},e().createElement(n.AnchorLink,{to:"#\u52A8\u6001\u6CE8\u518C","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u52A8\u6001\u6CE8\u518C"),e().createElement(t.Z,{code:"store.registerModule('myModule', {});",lang:"js"}),e().createElement("h2",{id:"13-pinia"},e().createElement(n.AnchorLink,{to:"#13-pinia","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"13. pinia"),e().createElement("h4",{id:"demo"},e().createElement(n.AnchorLink,{to:"#demo","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"demo"),e().createElement(t.Z,{code:`// stores/counter.js
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0,
  }),
  getters: {
    doubleCount: state => state.counter * 2,
  },
  // \u8FD4\u56DE\u7C7B\u578B\u5FC5\u987B\u660E\u786E\u8BBE\u7F6E
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
});`,lang:"js"}),e().createElement(t.Z,{code:`import { useCounterStore } from '@/stores/counter';

export default {
  setup() {
    const counter = useCounterStore();

    counter.count++;
    // with autocompletion \u2728
    counter.$patch({ count: counter.count + 1 });
    // or using an action instead
    counter.increment();
  },
};`,lang:"js"}),e().createElement("h4",{id:"state-1"},e().createElement(n.AnchorLink,{to:"#state-1","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"state"),e().createElement(t.Z,{code:`# \u76F4\u63A5\u89E3\u6784\u6CA1\u6709\u54CD\u5E94\u5F0F \u9700\u8981\u901A\u8FC7storeToRefs\u89E3\u6784
const { name, doubleCount } = storeToRefs(store)
# \u91CD\u7F6E\u72B6\u6001
store.$reset()
# \u6539\u53D8
store.counter++
store.$patch({
  counter: store.counter + 1,
  name: 'Abalam',
})
cartStore.$patch((state) => {
  state.items.push({ name: 'shoes', quantity: 1 })
  state.hasChanged = true
})
# \u66FF\u6362\u6574\u4E2Astate
store.$state = { counter: 666, name: 'Paimon' }
pinia.state.value = {}`,lang:"js"}),e().createElement("h4",{id:"getters"},e().createElement(n.AnchorLink,{to:"#getters","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"getters"),e().createElement(t.Z,{code:`getters: {
    // \u81EA\u52A8\u5C06\u8FD4\u56DE\u7C7B\u578B\u63A8\u65AD\u4E3A\u6570\u5B57
    doubleCount(state) {
      return state.counter * 2
    },
    // \u8FD4\u56DE\u7C7B\u578B\u5FC5\u987B\u660E\u786E\u8BBE\u7F6E
    doublePlusOne(): number {
      return this.counter * 2 + 1
    },
    // \u5FC5\u987B\u8FD4\u56DE\u51FD\u6570\u624D\u80FD\u4F20\u9012\u53C2\u6570
    getUserById: (state) => {
      return (userId) => state.users.find((user) => user.id === userId)
    },
  },
#
const store = useStore()
store.doubleCount
getUserById(2)
# \u8BBF\u95EE\u5176\u4ED6store
  const otherStore = useOtherStore()
  otherStore.xxx`,lang:"js"}),e().createElement("h4",{id:"actions"},e().createElement(n.AnchorLink,{to:"#actions","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"actions"),e().createElement(t.Z,{code:`actions: {
    increment() {
      this.counter++
    },
    randomizeCounter() {
      this.counter = Math.round(100 * Math.random())
    },
  },
 # \u53EF\u4EE5\u4F7F\u7528async await
const main = useMainStore()
main.randomizeCounter()`,lang:"js"}),e().createElement("h4",{id:"plugins"},e().createElement(n.AnchorLink,{to:"#plugins","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"plugins"),e().createElement(t.Z,{code:`# \u4E3A\u6BCF\u4E2Astore\u6DFB\u52A0\u4E00\u4E2A secret\u7684\u5C5E\u6027
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
# \u6DFB\u52A0\u5916\u90E8\u9759\u6001\u5C5E\u6027
import { markRaw } from 'vue'
import { router } from './router'
pinia.use(({ store }) => {
  store.router = markRaw(router)
})`,lang:"js"}),e().createElement("h4",{id:"api"},e().createElement(n.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"api"),e().createElement(t.Z,{code:`# $subscribe() \u76D1\u542C\u53D8\u5316
cartStore.$subscribe((mutation, state) => {
  // import { MutationType } from 'pinia'
  mutation.type // 'direct' | 'patch object' | 'patch function'
  // \u4E0E cartStore.$id \u76F8\u540C
  mutation.storeId // 'cart'
  // \u4EC5\u9002\u7528\u4E8E mutation.type === 'patch object'
  mutation.payload // \u8865\u4E01\u5BF9\u8C61\u4F20\u9012\u7ED9 to cartStore.$patch()

  // \u6BCF\u5F53\u5B83\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u5C06\u6574\u4E2A\u72B6\u6001\u6301\u4E45\u5316\u5230\u672C\u5730\u5B58\u50A8
  localStorage.setItem('cart', JSON.stringify(state))
})
 const someStore = useSomeStore()
 someStore.$subscribe(callback, { detached: true })

# $onAction \u8BA2\u9605action
# $state`,lang:"js"}),e().createElement("h2",{id:"14-vuerouter"},e().createElement(n.AnchorLink,{to:"#14-vuerouter","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"14 VueRouter"),e().createElement(t.Z,{code:"",lang:"js"}),e().createElement("h2",{id:"15-hook"},e().createElement(n.AnchorLink,{to:"#15-hook","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"15. hook"),e().createElement("h2",{id:"16-\u5176\u4ED6"},e().createElement(n.AnchorLink,{to:"#16-\u5176\u4ED6","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"16. \u5176\u4ED6"),e().createElement("h3",{id:"\u61D2\u52A0\u8F7D"},e().createElement(n.AnchorLink,{to:"#\u61D2\u52A0\u8F7D","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u61D2\u52A0\u8F7D"),e().createElement(t.Z,{code:`// \u5B9A\u4E49\u6307\u4EE4
const defineDirective = app => {
  // 1. \u56FE\u7247\u61D2\u52A0\u8F7D\u6307\u4EE4 v-lazy
  // \u539F\u7406\uFF1A\u5148\u5B58\u50A8\u56FE\u7247\u5730\u5740\u4E0D\u80FD\u5728src\u4E0A\uFF0C\u5F53\u56FE\u7247\u8FDB\u5165\u53EF\u89C6\u533A\uFF0C\u5C06\u4F60\u5B58\u50A8\u56FE\u7247\u5730\u5740\u8BBE\u7F6E\u7ED9\u56FE\u7247\u5143\u7D20\u5373\u53EF\u3002
  app.directive('lazy', {
    // vue2.0 \u76D1\u542C\u4F7F\u7528\u6307\u4EE4\u7684DOM\u662F\u5426\u521B\u5EFA\u597D\uFF0C\u94A9\u5B50\u51FD\u6570\uFF1Ainserted
    // vue3.0 \u7684\u6307\u4EE4\u62E5\u6709\u7684\u94A9\u5B50\u51FD\u6570\u548C\u7EC4\u4EF6\u7684\u4E00\u6837\uFF0C\u4F7F\u7528\u6307\u4EE4\u7684DOM\u662F\u5426\u521B\u5EFA\u597D\uFF0C\u94A9\u5B50\u51FD\u6570\uFF1Amounted
    mounted(el, binding) {
      // 2. \u521B\u5EFA\u4E00\u4E2A\u89C2\u5BDF\u5BF9\u8C61\uFF0C\u6765\u89C2\u5BDF\u5F53\u524D\u4F7F\u7528\u6307\u4EE4\u7684\u5143\u7D20
      const observe = new IntersectionObserver(
        ([{ isIntersecting }]) => {
          if (isIntersecting) {
            // \u505C\u6B62\u89C2\u5BDF
            observe.unobserve(el);
            // 3. \u628A\u6307\u4EE4\u7684\u503C\u8BBE\u7F6E\u7ED9el\u7684src\u5C5E\u6027 binding.value\u5C31\u662F\u6307\u4EE4\u7684\u503C
            // 4. \u5904\u7406\u56FE\u7247\u52A0\u8F7D\u5931\u8D25 error \u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u7684\u4E8B\u4EF6 load \u56FE\u7247\u52A0\u8F7D\u6210\u529F
            el.onerror = () => {
              // \u52A0\u8F7D\u5931\u8D25\uFF0C\u8BBE\u7F6E\u9ED8\u8BA4\u56FE
              el.src = defaultImg;
            };
            el.src = binding.value;
          }
        },
        {
          threshold: 0,
        },
      );
      // \u5F00\u542F\u89C2\u5BDF
      observe.observe(el);
    },
  });
};`,lang:"js"}),e().createElement("h3",{id:"jsx"},e().createElement(n.AnchorLink,{to:"#jsx","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"jsx"),e().createElement(t.Z,{code:`yarn add @vitejs/plugin-vue-jsx -D
import vueJsx from '@vitejs/plugin-vue-jsx'
plugins: [vue(), vueJsx({})]

# HelloWorld.vue
<script setup lang="jsx">
import { defineComponent } from 'vue'
const Bar = defineComponent({
  render() { return <div>asdas</div> }})
</script>
<template>  <Bar/> </template>`,lang:"js"}),e().createElement("ul",null,e().createElement("li",null,"jsx")),e().createElement(t.Z,{code:`const App = () => <div></div>;
const App = {
  render() {
    return <div>Vue 3.0</div>;
  },
};`,lang:"js"}),e().createElement("ul",null,e().createElement("li",null,"v-show")),e().createElement(t.Z,{code:`## v-show
const Bar = defineComponent({
  data() {
    return {
      visible: true
    }
  },
  render() {
    return <input v-show={this.visible} />
  }
})`,lang:"js"}),e().createElement("ul",null,e().createElement("li",null,"v-model")),e().createElement(t.Z,{code:`## v-model
<input v-model={val} />
<input v-model:argument={val} />
<input v-model={[val, ["modifier"]]} />
<A v-model={[val, "argument", ["modifier"]]} />`,lang:"js"}),e().createElement("ul",null,e().createElement("li",null,"v-directives")),e().createElement(t.Z,{code:`const App = {
  directives: { custom: customDirective },
  setup() {
    return () => <a v-custom={[val, 'arg', ['a', 'b']]} />;
  },
};`,lang:"js"}),e().createElement("ul",null,e().createElement("li",null,"\u63D2\u69FD")),e().createElement(t.Z,{code:"",lang:"js"}),e().createElement("h3",{id:"\u6E32\u67D3\u51FD\u6570"},e().createElement(n.AnchorLink,{to:"#\u6E32\u67D3\u51FD\u6570","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u6E32\u67D3\u51FD\u6570"),e().createElement(t.Z,{code:`<template>
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
</script>`,lang:"js"}))));c.default=o=>{const u=e().useContext(n.context),s=u.demos;return e().useEffect(()=>{var r;o!=null&&(r=o.location)!==null&&r!==void 0&&r.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(o.location.hash.slice(1)))},[]),e().createElement(l,{demos:s})}}}]);
