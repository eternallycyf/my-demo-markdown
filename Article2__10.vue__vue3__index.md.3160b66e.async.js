(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"8cVu":function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dEAq");
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dumi_theme__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("H1Ra");










 // memo for page content, to avoid useless re-render since other context fields changed

const PageContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(({
  demos: DUMI_ALL_DEMOS
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "markdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    id: "vue-30"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#vue-30",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Vue 3.0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "1-\\u51C6\\u5907\\u9636\\u6BB5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#1-\\u51C6\\u5907\\u9636\\u6BB5",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "1. \\u51C6\\u5907\\u9636\\u6BB5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "v-modal \u66F4\u6362\u4E86\u9ED8\u8BA4\u540D\u79F0\\ntemplate \u4E0A v-for \u53EF\u4EE5\u5199 key\\nv-bind \u540C\u65F6 \u539F\u751F\u5199\u6CD5 \u8C01\u5148\u5199 \u5C31\u7528\u8C01\\n.native \u79FB\u9664 \u5C06\u4E8B\u4EF6\u9ED8\u8BA4\u4F20\u9012\u8FDB\u53BB\u4E86 \u4E0D\u7528 emit\u63A5\u53D7\u9ED8\u8BA4\u4E8B\u4EF6",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "tsconfig"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#tsconfig",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "tsconfig"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// tsconfig.json\\n{\\n  \\"compilerOptions\\": {\\n    \\"target\\": \\"esnext\\",\\n    \\"module\\": \\"esnext\\",\\n  // \u8FD9\u6837\u5C31\u53EF\u4EE5\u5BF9 \`this\` \u4E0A\u7684\u6570\u636E\u5C5E\u6027\u8FDB\u884C\u66F4\u4E25\u683C\u7684\u63A8\u65AD\\n    \\"strict\\": true,\\n    \\"jsx\\": \\"preserve\\",\\n    \\"moduleResolution\\": \\"node\\"\\n  }\\n}",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u8C03\\u8BD5\\u5DE5\\u5177\\u76F4\\u63A5\\u6253\\u5F00\\u4EE3\\u7801"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u8C03\\u8BD5\\u5DE5\\u5177\\u76F4\\u63A5\\u6253\\u5F00\\u4EE3\\u7801",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u8C03\\u8BD5\\u5DE5\\u5177\\u76F4\\u63A5\\u6253\\u5F00\\u4EE3\\u7801"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "#\\ncd /usr/local/bin\\nnano code\\n// \u628Apython\u6539\u6210python3\\n- function realpath() { python -c ...\\n+ function realpath() { python3 -c ...\\nctrl+X \u9000\u51FA\\n#\\n\u8F93\u5165code\u5C31\u81EA\u52A8\u6253\u5F00vscode\u4E86",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "2-css"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#2-css",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "2. css"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u6DF1\\u5EA6\\u4F5C\\u7528\\u7B26"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u6DF1\\u5EA6\\u4F5C\\u7528\\u7B26",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u6DF1\\u5EA6\\u4F5C\\u7528\\u7B26"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<style scoped>\\n// \u666E\u901A\\n::v-deep(.foo) {}\\n:deep(.foo) {}\\n\\n// \u63D2\u69FD\\n::v-slotted(.foo) {}\\n:slotted(.foo) {}\\n\\n// \u5168\u5C40\\n::v-global(.foo) {}\\n:global(.foo) {}\\n<style>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "css-\\u4F7F\\u7528\\u53D8\\u91CF"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#css-\\u4F7F\\u7528\\u53D8\\u91CF",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "css \\u4F7F\\u7528\\u53D8\\u91CF"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# css \u4F7F\u7528\u53D8\u91CF\\n<template>\\n  <div class=\\"content\\">content</div>\\n</template>\\n<script setup lang=\\"ts\\">\\nconst myRed = '#f10215'\\n</script>\\n<style scoped lang=\\"css\\">\\n.foo {\\n  color: v-bind(\\"myRed\\");\\n}\\n</style>\\n#\\njs\u539F\u59CBstyle \u4E0D\u8981\u52A0\u5B57\u7B26\u4E32\\nstyle=\\\\\\"--color:green;\\\\\\"\\n#\\n<template>\\n\\t<div class=\\"test\\">\\n\\t\\t<span :style=\\"spanStyle\\" class=\\"span1\\">hello world</span>\\n\\t\\t<span style=\\"--color:red\\" class=\\"span1\\">hello world</span>\\n\\t</div>\\n</template>\\n<script>\\nexport default {\\n\\tdata() {\\n\\t\\treturn {\\n\\t\\t\\tspanStyle: { \\"--color\\": \\"green\\" },\\n\\t\\t};\\n\\t}\\n}\\n</script>\\n<style scoped>\\n.span1 {\\n\\tcolor: var(--color);\\n}\\n</style>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "3-\\u4FEE\\u9970\\u7B26"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#3-\\u4FEE\\u9970\\u7B26",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "3. \\u4FEE\\u9970\\u7B26"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u4FEE\\u9970\\u7B26"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u4FEE\\u9970\\u7B26",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u4FEE\\u9970\\u7B26"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: ".exact\\n<!-- \u5373\u4F7F Alt \u6216 Shift \u88AB\u4E00\u540C\u6309\u4E0B\u65F6\u4E5F\u4F1A\u89E6\u53D1 -->\\n<button @click.ctrl=\\"onClick\\">A</button>\\n<!-- \u6709\u4E14\u53EA\u6709 Ctrl \u88AB\u6309\u4E0B\u7684\u65F6\u5019\u624D\u89E6\u53D1 -->\\n<button @click.ctrl.exact=\\"onCtrlClick\\">A</button>\\n<!-- \u6CA1\u6709\u4EFB\u4F55\u7CFB\u7EDF\u4FEE\u9970\u7B26\u88AB\u6309\u4E0B\u7684\u65F6\u5019\u624D\u89E6\u53D1 -->\\n<button @click.exact=\\"onClick\\">A</button>\\n# \u4E8B\u4EF6\u4FEE\u9970\u7B26\\n.stop\\n.prevent\\n.capture\\n.self\\n.once\\n.passive\\n# \u6309\u952E\u4FEE\u9970\u7B26\\n<input @keyup.enter=\\"submit\\" />\\n.enter\\n.tab\\n.delete (\u6355\u83B7\u201C\u5220\u9664\u201D\u548C\u201C\u9000\u683C\u201D\u952E)\\n.esc\\n.space\\n.up\\n.down\\n.left\\n.right\\n# \u7CFB\u7EDF\u4FEE\u9970\u7B26\\n.ctrl\\n.alt\\n.shift\\n.meta\\n# \u9F20\u6807\u4FEE\u9970\u7B26\\n.left\\n.right\\n.middle\\n\\n# \u8868\u5355\u4FEE\u9970\u7B26\\n.number\\n.lazy\\n.trim",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u81EA\\u5B9A\\u4E49\\u4FEE\\u9970\\u7B26"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u81EA\\u5B9A\\u4E49\\u4FEE\\u9970\\u7B26",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u81EA\\u5B9A\\u4E49\\u4FEE\\u9970\\u7B26"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "4-\\u5B9E\\u4F8B"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#4-\\u5B9E\\u4F8B",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "4. \\u5B9E\\u4F8B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "emit-props"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#emit-props",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "emit props"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// <script setup />\u4E2D\u4E0D\u9700\u8981\u5BFC\u5165 defineProps defineEmit \u76F4\u63A5\u4F7F\u7528\\n# props: defineProps withDefaults\\nconst { count } = defineProps(['count'])\\nconst { count } = defineProps({ count: Number })\\nconst { count } = defineProps<{ count?:number }>()\\ninterface INumberProps {count?: number}\\nconst { count } =\\n    withDefaults(defineProps<INumberProps>(),{number: 5})\\n# emit: defineEmit\\nconst emit = defineEmits(['passData']);\\nconst emit=\\n   defineEmits<{(e:'passDate',number:number):void}>\\n   ()emit('passData,123')",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "useslots-useattrs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#useslots-useattrs",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "useSlots useAttrs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "import { useSlots, useAttrs } from 'vue'\\nconst slots = useSlots()\\nconst attrs = useAttrs()\\n\\n\\n$attrs \u83B7\u53D6\u9664\u4E86 props emit \u5176\u4ED6\u7684\u5C5E\u6027",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "readonly"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#readonly",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "readonly"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "import { readonly } from 'vue';\\nreadonly(count);",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "5-\\u6307\\u4EE4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#5-\\u6307\\u4EE4",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "5. \\u6307\\u4EE4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "v-model"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#v-model",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "v-model"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// \u53EF\u4EE5\u4F20\u9012\u591A\u4E2Av-model\\n<Son\\n   v-model='msg'\\n/>\\n<Son\\n   :modelValue=\\"msg\\"\\n   @update:modelValue=\\"msg = $event\\"\\n/>\\n// \u81EA\u5B9A\u4E49\u547D\u540D\\n<ChildComponent v-model:title=\\"pageTitle\\" />\\n<ChildComponent :title=\\"pageTitle\\" @update:title=\\"pageTitle = $event\\" />",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "v-html"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#v-html",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "v-html"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<div v-html=\\"'<div></div>'\\"></div>;\\n\u4E2D\u95F4\u4E0D\u80FD\u653E\u5185\u5BB9;",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "v-bind"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#v-bind",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "v-bind"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<div  v-bind='obj' />\\nconst obj = {\\n  id:1,\\n  name:2\\n}\\n# \u52A8\u6001\u53C2\u6570 null\u79FB\u9664\u53C2\u6570\\n<div :[attr]='url' />\\nconst attr = 'id'\\n\\n\u4E0D\u8981\u62FC\u63A5 \u4F7F\u7528computed\u6765\u5199\\n<a :['foo' + bar]=\\"value\\"> ... </a>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "6-\\u57FA\\u672C-api"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#6-\\u57FA\\u672C-api",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "6. \\u57FA\\u672C API"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "setup"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#setup",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "setup"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "setup-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#setup-1",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "setup"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "/*\\n \u5728 beforecreate \u94A9\u5B50\u4E4B\u524D\u5B8C\u6210\\n export default \u7684\u5185\u5BB9\u4F1A\u653E\u5728\u539F\u7EC4\u4EF6 \u58F0\u660E\u5B57\u6BB5\\n this \u662F undefined\\n \u8BED\u6CD5\u7CD6 \\n       \u81EA\u52A8\u6CE8\u518C\u7EC4\u4EF6\\n       \u81EA\u52A8\u5BFC\u51FA\u53D8\u91CF\\n       \u81EA\u52A8\u6CE8\u518C\u6307\u4EE4\\n       \u9876\u5C42\u76F4\u63A5\u5199 await \u4E0D\u7528\u5199 async\\n*/",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "defineexpose"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#defineexpose",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "defineExpose"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// \u5BFC\u51FA\u53D8\u91CF,\u5176\u4ED6\u7EC4\u4EF6\u901A\u8FC7ref\u83B7\u53D6\u7EC4\u4EF6\u5B9E\u4F8B\\n// { a: number, b: number }\\ndefineExpose({\\n  a,\\n  b,\\n});",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "\\u5BFC\\u51FA\\u7EC4\\u4EF6\\u540D"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u5BFC\\u51FA\\u7EC4\\u4EF6\\u540D",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u5BFC\\u51FA\\u7EC4\\u4EF6\\u540D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u5BFC\u51FA\u7EC4\u4EF6\u540D\\n<script setup lang=\\"ts\\">\\n  export default {\\n   name: 'xxx'\\n  }\\n</script>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "reactive"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#reactive",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "reactive"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "reactive-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#reactive-1",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "reactive"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// \u6570\u636E\u6DF1\u5EA6\u54CD\u5E94\u5F0F\\n// \u5BF9 string number boolean \u539F\u59CB\u7C7B\u578B\u65E0\u6548\\nimport { reactive } from 'vue';\\nconst obj = reactive({\\n  name: 'ls',\\n  age: 18,\\n});\\n// \u76F4\u63A5\u89E3\u6784\u7684\u662F\u666E\u901A\u7684\u6570\u636E \u8981\u901A\u8FC7toRef\u8F6C\u6362",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "shallowreactive"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#shallowreactive",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "shallowReactive"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u53EA\u6709\u6839\u7EA7\u522B\u662F\u54CD\u5E94\u5F0F\u6570\u636E",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "toref"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#toref",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "toRef"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// \u8F6C\u6362reactive \u5355\u4E2A\u5C5E\u6027\u4E3A\u54CD\u5E94\u5F0F\u6570\u636E\\n// \u5F15\u7528\\n// \u4FEE\u6539\u54CD\u5E94\u5F0F\u6570\u636E\u4E0D\u4F1A\u5F71\u54CD\u4EE5\u524D\u7684\u6570\u636E\\n// \u6570\u636E\u53D1\u751F\u6539\u53D8 \u754C\u9762\u4E5F\u4E0D\u4F1A\u81EA\u52A8\u66F4\u65B0\\nconst name = toRef(obj, 'name');",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "torefs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#torefs",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "toRefs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// \u8F6C\u6362reactive \u6240\u6709\u5C5E\u6027\u4E3A\u54CD\u5E94\u5F0F\u6570\u636E\\nconst obj3 = toRefs(obj);",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "ref"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#ref",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "ref"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "ref-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#ref-1",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "ref"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// \u53EF\u4EE5\u4F7F\u7528\u4EFB\u4F55\u7C7B\u578B\\n// \u539F\u7406: reactive({ value:xxx })\\nimport { ref } from 'vue';\\nconst count = ref(0);\\ncount.value++;\\nconsole.log(count.value);",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "\\u83B7\\u53D6-dom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u83B7\\u53D6-dom",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u83B7\\u53D6 dom"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u5355\u4E2A\u5143\u7D20\\n<div ref=\\"dom\\">\u6211\u662Fbox</div>\\nconst dom = ref(null)\\nonMounted(()=>{\\n  console.log(dom.value)\\n})\\n# \u591A\u4E2A\u5143\u7D20\\n<ul>\\n    <li v-for=\\"i in 4\\" :key=\\"i\\" :ref=\\"setDom\\">\\n        \u7B2C{{i}}LI</li>\\n</ul>\\nconst domList = []\\nconst setDom = (el) => {domList.push(el)}\\nonMounted(()=>{\\n  console.log(domList)\\n})",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "\\u83B7\\u53D6\\u7EC4\\u4EF6-ref"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u83B7\\u53D6\\u7EC4\\u4EF6-ref",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u83B7\\u53D6\\u7EC4\\u4EF6 ref"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<Child ref='child' />\\n\\nconst child = ref(null)\\nonMounted(()=>{\\n  child.value\\n})\\n\\n# \u66B4\u9732\u6570\u636E\\ndefineExpose({\\n  a,\\n  b\\n})",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "computed"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#computed",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "computed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "import { computed } from 'vue'\\nconst xxx = computed(() => xxx.value*2 )\\nconsole.log(xxx.value)\\n#\\nconst xxx = computed({\\n  get(){\\n    return xxx.value*2\\n  }\\n  set(value){\\n   return xxx.value/2\\n  }\\n})",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "watch"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#watch",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "watch"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "import { watch,watchEffect } from 'vue'\\nwatch(\u53D8\u91CF,(newValue,oldValue) => {\\n})\\n# \u76D1\u542C\u591A\u4E2A\u6570\u636E\u6539\u53D8\\nwatch([count, obj], ()=>{\\n})\\n# \u76D1\u542C\u5BF9\u8C61\u67D0\u4E2A\u5C5E\u6027\u7684\u53D8\u5316\\nwatch(()=>obj.name,()=>{\\n})\\nwatch(()=>[obj.name,obj.age],()=>{\\n})\\n# \u6DF1\u5EA6\u76D1\u542C\\n// flush \u76D1\u542C\u5230\u66F4\u65B0\u540E\u7684dom\\nwatch(\u53D8\u91CF, (newValue,oldValue) => {\\n},{deep: true,immediate: true,flush: 'post' })\\n\\n\\n# watchEffect \u76F8\u5F53\u4E8Ewatch\u52A0\u4E86immediate:true\\nwatch \u5C5E\u6027\u53D8\u66F4\u4E86\u624D\u4F1A\u6267\u884C \u4E0D\u80FD\u505C\u6B62\\nwatchEffect \u4E00\u5B9A\u4F1A\u6267\u884C\u4E00\u6B21 \u4F9D\u8D56\u4E8E\u56DE\u8C03\u5185\u90E8\u7684\u53D8\u91CF\u53D8\u5316\\n            \u53EF\u4EE5\u505C\u6B62\\nwatchPostEffect\\n\\n# \u505C\u6B62\u76D1\u542C\u5668\\nconst unwatch = watchEffect(() => {})\\nunwatch()",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u81EA\\u5B9A\\u4E49\\u6307\\u4EE4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u81EA\\u5B9A\\u4E49\\u6307\\u4EE4",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u81EA\\u5B9A\\u4E49\\u6307\\u4EE4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u5168\u5C40\u6307\u4EE4\\nimport { createApp } from 'vue'\\nconst app = Vue.createApp({})\\n\\napp.directive('highlight', {\\n  created(el, binding, vnode, prevVnode) {},\\n  beforeMount(el, binding, vnode) {\\n    el.style.background = binding.value\\n  }\\n  mounted() {},\\n  beforeUpdate() {},\\n  updated() {},\\n  beforeUnmount() {},\\n  unmounted() {}\\n})\\n\\n<p v-highlight=\\"'yellow'\\">\u4EE5\u4EAE\u9EC4\u8272\u9AD8\u4EAE</p>\\n# \u5C40\u90E8\u6307\u4EE4\\n<script setup>\\nconst vMyDirective = {\\n  beforeMount: (el) => {\\n    // \u5728\u5143\u7D20\u4E0A\u505A\u4E9B\u64CD\u4F5C\\n  }\\n}\\n</script>\\n<template>\\n  <h1 v-my-directive>This is a Heading</h1>\\n</template>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u63D2\\u69FD"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u63D2\\u69FD",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u63D2\\u69FD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "import { useContext } from 'vue'\\n const { slots, attrs } = useContext()\\n import { useSlots, useAttrs } from 'vue'\\n const slots = useSlots()\\n const attrs = useAttrs()\\n # helloWord.vue\\n<template>\\n  <slot name=\\"header\\" :item=\\"'item'\\"></slot>\\n</template>\\n# app.vue\\n  <HelloWorld >\\n\\t\\t <template v-slot:header=\\"slotProps\\">\\n       <h2 >{{slotProps.item}}</h2>\\n\\t\\t </template>\\n\\t</HelloWorld>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u751F\\u547D\\u5468\\u671F"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u751F\\u547D\\u5468\\u671F",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u751F\\u547D\\u5468\\u671F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "import { onMounted } from 'vue'\\nonMouted(\u51FD\u6570\u540D)\\nonMounted(()=>{\\n   xxx\\n})\\n#\\nsetup \u521B\u5EFA\u5B9E\u4F8B\u524D\\nonBeforeMount \u6302\u8F7DDOM\u524D\\nonMounted \u6302\u8F7DDOM\u540E\\nonBeforeUpdate \u66F4\u65B0\u7EC4\u4EF6\u524D\\nonUpdated \u66F4\u65B0\u7EC4\u4EF6\u540E\\nonBeforeUnmount \u5378\u8F7D\u9500\u6BC1\u524D\\nonUnmounted \u5378\u8F7D\u9500\u6BC1\u540E",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "7-\\u5168\\u5C40-api"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#7-\\u5168\\u5C40-api",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "7. \\u5168\\u5C40 API"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "createapp"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#createapp",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "createApp"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "import { createApp } from 'vue';\\nconst app = createApp({});\\napp.component.directive.mixin.previde / inject.use.config.globalProperties;",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "\\u81EA\\u5B9A\\u4E49\\u6307\\u4EE4-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u81EA\\u5B9A\\u4E49\\u6307\\u4EE4-1",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u81EA\\u5B9A\\u4E49\\u6307\\u4EE4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<p v-highlight=\\"'yellow'\\">\u4EE5\u4EAE\u9EC4\u8272\u9AD8\u4EAE\u663E\u793A\u6B64\u6587\u672C</p>\\nconst app = Vue.createApp({})\\n\\napp.directive('highlight', {\\n  created(el, binding, vnode, prevVnode) {},\\n  beforeMount(el, binding, vnode) {\\n    el.style.background = binding.value\\n  }\\n  mounted() {},\\n  beforeUpdate() {},\\n  updated() {},\\n  beforeUnmount() {},\\n  unmounted() {}\\n})",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "mixin"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#mixin",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "mixin"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# main.ts\\nimport { createApp } from 'vue'\\nimport App from './App.vue'\\nimport Hello from './components/Hello.vue'\\nimport Thing from './components/Thing.vue'\\nimport globalMixin from './globalMixin'\\n\\ncreateApp({\\n  extends: App,\\n  mixins: [globalMixin],\\n  components: {\\n    Hello,\\n    Thing,\\n  }\\n}).mount('#app')",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "provideinject"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#provideinject",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Provide/Inject"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// \u53EF\u4EE5\u662F\u51FD\u6570 \u4E5F\u53EF\u4EE5\u662F\u53D8\u91CF\\nimport { provide } from 'vue';\\nprovide('money', money);\\nconst money = inject('money', '\u9ED8\u8BA4\u503C');\\nconst money = inject('money', () => '\u9ED8\u8BA4\u503C');",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "configglobalproperties"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#configglobalproperties",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), ".config.globalProperties"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// 2.0 \u662F Vue.prototype.$http\\nimport axios from 'axios'\\napp.config.globalProperties.$http = axios\\n# ts\u63D0\u793A\\nimport axios from 'axios'\\ndeclare module '@vue/runtime-core' {\\n  export interface ComponentCustomProperties {\\n    $http: typeof axios\\n  }\\n}",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "8-\\u5176\\u4ED6-api"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#8-\\u5176\\u4ED6-api",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "8. \\u5176\\u4ED6 API"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "nexttick"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#nexttick",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "nextTick"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "import { nextTick } from 'vue';\\nnextTick(() => {});",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "forceupdate"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#forceupdate",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "forceUpdate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "\u4EC5\u4EC5\u5F71\u54CD\u5B9E\u4F8B\u672C\u8EAB\u548C\u63D2\u5165\u63D2\u69FD\u5185\u5BB9\u7684\u5B50\u7EC4\u4EF6\uFF0C\u800C\u4E0D\u662F\u6240\u6709\u5B50\u7EC4\u4EF6",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "ref-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#ref-2",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "ref"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "customref"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#customref",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "customRef"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u81EA\u5B9A\u4E49ref\\nfunction myRef(value){\\n  return customRef((track,trigger)=> {\\n    return{\\n       get(){\\n           track() // \u9700\u8981\u8FFD\u8E2A\u53D8\u5316\\n           return value\\n       },\\n       set(newValue){\\n            value = newValue\\n            trigger() //\u89E6\u53D1\u754C\u9762\u66F4\u65B0\\n       }\\n    }\\n  });\\n}",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "shallowref"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#shallowref",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "shallowRef"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "import {shallowRef,shallowReactive\uFF0CtriggerRef} from 'vue'\\ntriggerRef(state) \u81EA\u52A8\u66F4\u65B0",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "toraw"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#toraw",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "toRaw"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u83B7\u53D6 ref reactive \u7684 \u539F\u59CB\u6570\u636E\\n//ref reactive \u662F\u9ED8\u8BA4\u9012\u5F52\u66F4\u65B0\u7684 \u6D88\u8017\u6027\u80FD\\n# \u5982\u679C\u4E0D\u9700\u8981\u66F4\u65B0UI\u754C\u9762 \u5C31\u9700\u8981 toRaw \u66F4\u65B0\u6570\u636E \u4F46\u4E0D\u66F4\u65B0UI\u754C\u9762\\nimport {toRaw} from 'vue'\\nlet obj = {xxx}\\nlet state = reactive(obj)\\nlet obj2 = toRaw(state)\\nobj1 === obj2  //true\\nobj.name = xxx\\nlet obj2 = toRwa(state.value) //ref \u9700\u8981.value",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "markraw"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#markraw",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "markRaw"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u6C38\u8FDC\u90FD\u4E0D\u88AB\u8FFD\u8E2A \u4E0D\u66F4\u65B0UI \u4E0D\u662F\u54CD\u5E94\u5F0F\u6570\u636E\\n obj = markRaw(obj)",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "readonly-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#readonly-1",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "readonly"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u9012\u5F52\u53EA\u8BFB\u6570\u636E\\nlet state = readonly({\\n   name:'zs'\\n})",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "9-\\u5185\\u7F6E\\u7EC4\\u4EF6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#9-\\u5185\\u7F6E\\u7EC4\\u4EF6",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "9. \\u5185\\u7F6E\\u7EC4\\u4EF6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "teleport"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#teleport",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "teleport"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// \u6307\u5B9A\u6E32\u67D3\u5230\u6839\u5143\u7D20 \u4E4B\u5916\u7684\u5730\u65B9\\n<teleport to=\\"body\\">...</teleport>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "component"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#component",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "component"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<component :is=\\"true? Home : Login\\" />\\n   \u9ED8\u8BA4\u4F1A\u9500\u6BC1",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "defineasynccomponent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#defineasynccomponent",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "defineAsyncComponent"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u5F02\u6B65\u7EC4\u4EF6\\nimport { defineAsyncComponent } from 'vue'\\nconst xxx = defineAsyncComponent(() => import('./'))\\nconst xxx = defineAsyncComponent({\\n  loader: () => import(''),\\n  delay: 200,\\n  timeout: 3000,\\n  errorComponent: xxx,\\n  loadingComponent: xxx,\\n})",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "keep-alive"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#keep-alive",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "keep-alive"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u7EC4\u4EF6\u7F13\u5B58\\n\u4E0D\u4F1A\u88AB\u9500\u6BC1\\n\u52A0\u4E0A\u5C31\u4F1A\u7F13\u5B58 \u6392\u9664\u5C31\u52A0exclude\u5C5E\u6027 , include\\n\\t\\t<keep-alive exclude=\\"\u7EC4\u4EF6\u7684name \u9017\u53F7\u5206\u9694\\">\\n\\t\\t\\t<router-view />\\n\\t\\t</keep-alive>\\n# \u751F\u547D\u5468\u671F\\nactivated - \u6FC0\u6D3B\\ndeactivated - \u5931\u53BB\u6FC0\u6D3B\u72B6\u6001",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "10-\\u7EC4\\u4EF6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#10-\\u7EC4\\u4EF6",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "10. \\u7EC4\\u4EF6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u7236\\u4F20\\u5B50"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u7236\\u4F20\\u5B50",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u7236\\u4F20\\u5B50"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u7236\u7EC4\u4EF6\\n  <HelloWorld :number=\\"\u7236\u7EC4\u4EF6\u5185\u90E8\u7684\u6570\u636E\\" />\\n# \u5B50\u7EC4\u4EF6\\nimport { defineProps, withDefaults } from 'vue'\\nconst { number } = defineProps(['number'])\\nconst { number } = defineProps({ number: Number })\\nconst { number } = defineProps<{ number?:number }>()\\n\\ninterface INumberProps {number?: number}\\nconst { number } = withDefaults(defineProps<INumberProps>(),\\n{number: 5})",
    lang: "tsx"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u5B50\\u4F20\\u7236"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u5B50\\u4F20\\u7236",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u5B50\\u4F20\\u7236"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u5B50\u7EC4\u4EF6\\nimport { defineEmit } from 'vue'\\nconst emit = defineEmits(['passData']);\\nconst emit= defineEmits<{(e:'passDate',number:number):void}>()\\nemit('passData',123)\\n# \u7236\u7EC4\u4EF6\\n<HelloWorld @passData=\\"\u81EA\u5B9A\u4E49\u4E8B\u4EF6\\" />\\nconst \u81EA\u5B9A\u4E49\u4E8B\u4EF6 = (data) => {\\n  console.log(data)\\n}",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "11-\\u5176\\u4ED6\\u529F\\u80FD"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#11-\\u5176\\u4ED6\\u529F\\u80FD",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "11. \\u5176\\u4ED6\\u529F\\u80FD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u51FD\\u6570\\u7EC4\\u4EF6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u51FD\\u6570\\u7EC4\\u4EF6",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u51FD\\u6570\\u7EC4\\u4EF6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<template>\\n  <component\\n    v-bind:is=\\"\`h\${$props.level}\`\\"\\n    v-bind=\\"$attrs\\"\\n  />\\n</template>\\n\\n<script>\\nexport default {\\n  props: ['level']\\n}\\n</script>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u81EA\\u5B9A\\u4E49\\u5143\\u7D20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u81EA\\u5B9A\\u4E49\\u5143\\u7D20",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u81EA\\u5B9A\\u4E49\\u5143\\u7D20"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<button is=\\"plastic-button\\">\u70B9\u51FB\u6211!</button>\\n<button is=\\"vue:plastic-button\\">\u70B9\u51FB\u6211!</button>\\ndocument.createElement('button', { is: 'plastic-button' })",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u5F02\\u6B65\\u7EC4\\u4EF6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u5F02\\u6B65\\u7EC4\\u4EF6",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u5F02\\u6B65\\u7EC4\\u4EF6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "import { defineAsyncComponent } from 'vue'\\n#\\nconst asyncModal =\\n   defineAsyncComponent(() => import('./Modal.vue'))\\n#\\nconst asyncModalWithOptions = defineAsyncComponent({\\n  loader: () => import('./Modal.vue'),\\n  delay: 200,\\n  timeout: 3000,\\n  errorComponent: ErrorComponent,\\n  loadingComponent: LoadingComponent\\n})\\n#\\nconst asyncComponent = defineAsyncComponent(\\n  () =>\\n    new Promise((resolve, reject) => {\\n      /* ... */\\n    })\\n)",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "12-vuex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#12-vuex",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "12 VueX"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# store/index.js\\nimport { createStore } from 'vuex'\\nexport default createStore({\\n  state: {\\n    count: 1\\n  },\\n  getters: {\\n  },\\n  mutations: {\\n  },\\n  actions: {\\n  },\\n  modules: {\\n  }\\n})\\n#\\nimport { createApp } from 'vue'\\nimport App from './App.vue'\\nimport store from './store'\\ncreateApp(App).use(store).mount('#app')",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "state"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#state",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "State"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u83B7\\u53D6\\u4F7F\\u7528\\u6570\\u636E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u4E0D\\u80FD\\u76F4\\u63A5\\u64CD\\u4F5C Store \\u4E2D\\u7684\\u6570\\u636E")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# state\\nstate: {\\n  count: 55\\n},\\n# 1\\nimport { computed } from 'vue'\\nimport { useStore } from 'vuex'\\nconst store = useStore()\\nconst count = computed(() => store.state.count)\\nconsole.log(count.value);  // 1",
    lang: "javascript"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "getter"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#getter",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Getter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "state: {\\n    count: 1\\n  },\\n  getters: {\\n    newCount(state) {\\n     return state.count*2\\n    }\\n  },\\n#\\nimport { computed } from 'vue'\\nimport { useStore } from 'vuex'\\nconst store = useStore()\\nconst newCount = computed(() => store.getters.newCount)\\nconsole.log(newCount.value);  // 1",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "mutation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#mutation",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Mutation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u4FEE\\u6539 Store \\u6570\\u636E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u8FD4\\u56DE\\u503C\\u662F undefined")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "state: {\\n    count: 1\\n  },\\n  getters: {\\n    newCount(state) {\\n      return state.count * 2\\n    }\\n  },\\n  mutations: {\\n    save(state, ...newState) {\\n      let objState = JSON.parse(JSON.stringify(state))\\n      const newObj = Object.assign({}, objState, ...newState)\\n      Object.entries(newObj).forEach(item => {\\n        state[item[0]] = item[1]\\n      })\\n    }\\n  },\\n# 1\\nimport { computed } from 'vue'\\nimport { useStore } from 'vuex'\\nconst store = useStore()\\nconst fn = () => store.commit('save', { count: 1123121, a: 2 })\\n  <button @click=\\"fn\\">{{ count }}</button>",
    lang: "javascript"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#action",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u5904\\u7406\\u5F02\\u6B65\\u64CD\\u4F5C \\u901A\\u8FC7\\u89E6\\u53D1 mutation \\u7684\\u65B9\\u5F0F\\u53D8\\u66F4\\u6570\\u636E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u53EF\\u4EE5\\u6709\\u8FD4\\u56DE\\u503C \\u662F\\u4E00\\u4E2A promise \\u7528 await \\u89E3\\u6790")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "#\\nmutations: {\\n    save(state, ...newState) {\\n      let objState = JSON.parse(JSON.stringify(state))\\n      const newObj = Object.assign({}, objState, ...newState)\\n      Object.entries(newObj).forEach(item => {\\n        state[item[0]] = item[1]\\n      })\\n    }\\n  },\\n  actions: {\\n    asyncSave(context, newState) {\\n      const { commit, state, getters } = context\\n      setTimeout(() => {\\n        commit('save', newState)\\n      }, 1000)\\n    }\\n  },\\n#\\nimport { computed } from 'vue'\\nimport { useStore } from 'vuex'\\nconst store = useStore()\\nconst count = computed(() => store.state.count)\\nconst ayFn = () => store.dispatch('asyncSave', { count: 1123121, a: 2 })",
    lang: "javascript"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "module"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#module",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Module"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "store")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "import { createStore } from 'vuex';\\nconst Hello = {\\n  namespaced: true,\\n  state: {\\n    count: 1,\\n  },\\n  getters: {\\n    newCount(state, getters, rootState, rootGetters) {\\n      return state.count * 2;\\n    },\\n  },\\n  mutations: {\\n    save(state, ...newState) {\\n      let objState = JSON.parse(JSON.stringify(state));\\n      const newObj = Object.assign({}, objState, ...newState);\\n      Object.entries(newObj).forEach(item => {\\n        state[item[0]] = item[1];\\n      });\\n    },\\n  },\\n  actions: {\\n    asyncSave(context, newState) {\\n      const { commit, state, getters, dispatch, rootGetters } = context;\\n      setTimeout(() => {\\n        commit('save', newState);\\n      }, 1000);\\n    },\\n  },\\n};\\nexport default createStore({\\n  modules: {\\n    Hello,\\n  },\\n  getters: {\\n    globalCount(state, getters, rootState) {\\n      return state['Hello'].count;\\n      return getters['Hello/newCount'];\\n      return rootState['Hello'].count;\\n    },\\n  },\\n});",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Hello.vue")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<script setup>\\nimport { computed } from 'vue'\\nimport { useStore } from 'vuex'\\nconst store = useStore()\\nconst count = computed(() => store.state['Hello'].count)\\nconst getterCount = computed(() => store.getters['Hello/newCount'])\\nconst fn = () => store.commit('Hello/save', { count: 1123, a: 2 })\\nconst ayFn = () => store.dispatch('Hello/asyncSave', { count: 1123222, a: 2 })\\n</script>\\n<template>\\n  <button @click=\\"fn\\">{{ count }}</button>\\n  <button @click=\\"ayFn\\">{{ count }}</button>\\n</template>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# namespaced: true \u5F00\u542F\u547D\u540D\u7A7A\u95F4\\n# root:true \u8C03\u7528\u5168\u5C40\u53C2\u6570\\ncontext.commit('\u5B50\u6A21\u5757\u540D\u79F0/\u65B9\u6CD5',\u53C2\u6570,{root:true})\\ncontext.dispatch('\u5B50\u6A21\u5757\u540D\u79F0/\u65B9\u6CD5',\u53C2\u6570,{root:true})",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "\\u52A8\\u6001\\u6CE8\\u518C"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u52A8\\u6001\\u6CE8\\u518C",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u52A8\\u6001\\u6CE8\\u518C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "store.registerModule('myModule', {});",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "13-pinia"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#13-pinia",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "13. pinia"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "demo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#demo",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "demo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// stores/counter.js\\nimport { defineStore } from 'pinia';\\n\\nexport const useCounterStore = defineStore('counter', {\\n  state: () => ({\\n    counter: 0,\\n  }),\\n  getters: {\\n    doubleCount: state => state.counter * 2,\\n  },\\n  // \u8FD4\u56DE\u7C7B\u578B\u5FC5\u987B\u660E\u786E\u8BBE\u7F6E\\n  doublePlusOne(): number {\\n    return this.counter * 2 + 1;\\n  },\\n  // could also be defined as\\n  // state: () => ({ count: 0 })\\n  actions: {\\n    increment() {\\n      this.count++;\\n    },\\n  },\\n});",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "import { useCounterStore } from '@/stores/counter';\\n\\nexport default {\\n  setup() {\\n    const counter = useCounterStore();\\n\\n    counter.count++;\\n    // with autocompletion \u2728\\n    counter.$patch({ count: counter.count + 1 });\\n    // or using an action instead\\n    counter.increment();\\n  },\\n};",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "state-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#state-1",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "state"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u76F4\u63A5\u89E3\u6784\u6CA1\u6709\u54CD\u5E94\u5F0F \u9700\u8981\u901A\u8FC7storeToRefs\u89E3\u6784\\nconst { name, doubleCount } = storeToRefs(store)\\n# \u91CD\u7F6E\u72B6\u6001\\nstore.$reset()\\n# \u6539\u53D8\\nstore.counter++\\nstore.$patch({\\n  counter: store.counter + 1,\\n  name: 'Abalam',\\n})\\ncartStore.$patch((state) => {\\n  state.items.push({ name: 'shoes', quantity: 1 })\\n  state.hasChanged = true\\n})\\n# \u66FF\u6362\u6574\u4E2Astate\\nstore.$state = { counter: 666, name: 'Paimon' }\\npinia.state.value = {}",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "getters"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#getters",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "getters"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "getters: {\\n    // \u81EA\u52A8\u5C06\u8FD4\u56DE\u7C7B\u578B\u63A8\u65AD\u4E3A\u6570\u5B57\\n    doubleCount(state) {\\n      return state.counter * 2\\n    },\\n    // \u8FD4\u56DE\u7C7B\u578B\u5FC5\u987B\u660E\u786E\u8BBE\u7F6E\\n    doublePlusOne(): number {\\n      return this.counter * 2 + 1\\n    },\\n    // \u5FC5\u987B\u8FD4\u56DE\u51FD\u6570\u624D\u80FD\u4F20\u9012\u53C2\u6570\\n    getUserById: (state) => {\\n      return (userId) => state.users.find((user) => user.id === userId)\\n    },\\n  },\\n#\\nconst store = useStore()\\nstore.doubleCount\\ngetUserById(2)\\n# \u8BBF\u95EE\u5176\u4ED6store\\n  const otherStore = useOtherStore()\\n  otherStore.xxx",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "actions"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#actions",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "actions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "actions: {\\n    increment() {\\n      this.counter++\\n    },\\n    randomizeCounter() {\\n      this.counter = Math.round(100 * Math.random())\\n    },\\n  },\\n # \u53EF\u4EE5\u4F7F\u7528async await\\nconst main = useMainStore()\\nmain.randomizeCounter()",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "plugins"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#plugins",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "plugins"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u4E3A\u6BCF\u4E2Astore\u6DFB\u52A0\u4E00\u4E2A secret\u7684\u5C5E\u6027\\nimport { createPinia } from 'pinia'\\nfunction SecretPiniaPlugin() {\\n  return { secret: 'the cake is a lie' }\\n}\\nconst pinia = createPinia()\\npinia.use(SecretPiniaPlugin)\\n\\nconst store = useStore()\\nstore.secret\\n\\npinia.use(() => ({ hello: 'world' }))\\npinia.use(({ store }) => {\\n  store.hello = 'world'\\n})\\n# \u6DFB\u52A0\u5916\u90E8\u9759\u6001\u5C5E\u6027\\nimport { markRaw } from 'vue'\\nimport { router } from './router'\\npinia.use(({ store }) => {\\n  store.router = markRaw(router)\\n})",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "api"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#api",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "api"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# $subscribe() \u76D1\u542C\u53D8\u5316\\ncartStore.$subscribe((mutation, state) => {\\n  // import { MutationType } from 'pinia'\\n  mutation.type // 'direct' | 'patch object' | 'patch function'\\n  // \u4E0E cartStore.$id \u76F8\u540C\\n  mutation.storeId // 'cart'\\n  // \u4EC5\u9002\u7528\u4E8E mutation.type === 'patch object'\\n  mutation.payload // \u8865\u4E01\u5BF9\u8C61\u4F20\u9012\u7ED9 to cartStore.$patch()\\n\\n  // \u6BCF\u5F53\u5B83\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u5C06\u6574\u4E2A\u72B6\u6001\u6301\u4E45\u5316\u5230\u672C\u5730\u5B58\u50A8\\n  localStorage.setItem('cart', JSON.stringify(state))\\n})\\n const someStore = useSomeStore()\\n someStore.$subscribe(callback, { detached: true })\\n\\n# $onAction \u8BA2\u9605action\\n# $state",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "14-vuerouter"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#14-vuerouter",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "14 VueRouter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "15-hook"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#15-hook",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "15. hook"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "16-\\u5176\\u4ED6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#16-\\u5176\\u4ED6",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "16. \\u5176\\u4ED6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u61D2\\u52A0\\u8F7D"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u61D2\\u52A0\\u8F7D",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u61D2\\u52A0\\u8F7D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// \u5B9A\u4E49\u6307\u4EE4\\nconst defineDirective = app => {\\n  // 1. \u56FE\u7247\u61D2\u52A0\u8F7D\u6307\u4EE4 v-lazy\\n  // \u539F\u7406\uFF1A\u5148\u5B58\u50A8\u56FE\u7247\u5730\u5740\u4E0D\u80FD\u5728src\u4E0A\uFF0C\u5F53\u56FE\u7247\u8FDB\u5165\u53EF\u89C6\u533A\uFF0C\u5C06\u4F60\u5B58\u50A8\u56FE\u7247\u5730\u5740\u8BBE\u7F6E\u7ED9\u56FE\u7247\u5143\u7D20\u5373\u53EF\u3002\\n  app.directive('lazy', {\\n    // vue2.0 \u76D1\u542C\u4F7F\u7528\u6307\u4EE4\u7684DOM\u662F\u5426\u521B\u5EFA\u597D\uFF0C\u94A9\u5B50\u51FD\u6570\uFF1Ainserted\\n    // vue3.0 \u7684\u6307\u4EE4\u62E5\u6709\u7684\u94A9\u5B50\u51FD\u6570\u548C\u7EC4\u4EF6\u7684\u4E00\u6837\uFF0C\u4F7F\u7528\u6307\u4EE4\u7684DOM\u662F\u5426\u521B\u5EFA\u597D\uFF0C\u94A9\u5B50\u51FD\u6570\uFF1Amounted\\n    mounted(el, binding) {\\n      // 2. \u521B\u5EFA\u4E00\u4E2A\u89C2\u5BDF\u5BF9\u8C61\uFF0C\u6765\u89C2\u5BDF\u5F53\u524D\u4F7F\u7528\u6307\u4EE4\u7684\u5143\u7D20\\n      const observe = new IntersectionObserver(\\n        ([{ isIntersecting }]) => {\\n          if (isIntersecting) {\\n            // \u505C\u6B62\u89C2\u5BDF\\n            observe.unobserve(el);\\n            // 3. \u628A\u6307\u4EE4\u7684\u503C\u8BBE\u7F6E\u7ED9el\u7684src\u5C5E\u6027 binding.value\u5C31\u662F\u6307\u4EE4\u7684\u503C\\n            // 4. \u5904\u7406\u56FE\u7247\u52A0\u8F7D\u5931\u8D25 error \u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u7684\u4E8B\u4EF6 load \u56FE\u7247\u52A0\u8F7D\u6210\u529F\\n            el.onerror = () => {\\n              // \u52A0\u8F7D\u5931\u8D25\uFF0C\u8BBE\u7F6E\u9ED8\u8BA4\u56FE\\n              el.src = defaultImg;\\n            };\\n            el.src = binding.value;\\n          }\\n        },\\n        {\\n          threshold: 0,\\n        },\\n      );\\n      // \u5F00\u542F\u89C2\u5BDF\\n      observe.observe(el);\\n    },\\n  });\\n};",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "jsx"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#jsx",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "jsx"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "yarn add @vitejs/plugin-vue-jsx -D\\nimport vueJsx from '@vitejs/plugin-vue-jsx'\\nplugins: [vue(), vueJsx({})]\\n\\n# HelloWorld.vue\\n<script setup lang=\\"jsx\\">\\nimport { defineComponent } from 'vue'\\nconst Bar = defineComponent({\\n  render() { return <div>asdas</div> }})\\n</script>\\n<template>  <Bar/> </template>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "jsx")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "const App = () => <div></div>;\\nconst App = {\\n  render() {\\n    return <div>Vue 3.0</div>;\\n  },\\n};",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "v-show")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "## v-show\\nconst Bar = defineComponent({\\n  data() {\\n    return {\\n      visible: true\\n    }\\n  },\\n  render() {\\n    return <input v-show={this.visible} />\\n  }\\n})",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "v-model")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "## v-model\\n<input v-model={val} />\\n<input v-model:argument={val} />\\n<input v-model={[val, [\\"modifier\\"]]} />\\n<A v-model={[val, \\"argument\\", [\\"modifier\\"]]} />",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "v-directives")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "const App = {\\n  directives: { custom: customDirective },\\n  setup() {\\n    return () => <a v-custom={[val, 'arg', ['a', 'b']]} />;\\n  },\\n};",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u63D2\\u69FD")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u6E32\\u67D3\\u51FD\\u6570"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u6E32\\u67D3\\u51FD\\u6570",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u6E32\\u67D3\\u51FD\\u6570"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<template>\\n  <vnode />\\n</template>\\n<script setup lang=\\"ts\\">\\nimport { defineComponent, h } from 'vue'\\nconst vnode = defineComponent({\\n  render() {\\n    return h('div', // type\\n      { id: 'foo', class: 'bar', innerHTML: \\"hello\\" }, // props\\n      [\\n        // children\\n      ]\\n    )\\n  }\\n})\\n</script>",
    lang: "js"
  })));
});
/* harmony default export */ __webpack_exports__["default"] = (props => {
  const _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["context"]),
        demos = _React$useContext.demos; // scroll to anchor after page component loaded


  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    var _props$location;

    if (props !== null && props !== void 0 && (_props$location = props.location) !== null && _props$location !== void 0 && _props$location.hash) {
      dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"].scrollToAnchor(decodeURIComponent(props.location.hash.slice(1)));
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageContent, {
    demos: demos
  });
});

//# sourceURL=webpack:///./src/Article2/10.vue/vue3/index.md?`)}}]);
