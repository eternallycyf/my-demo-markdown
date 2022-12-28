(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{ZQst:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
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
    id: "vuehoc"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#vuehoc",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "VueHOC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "vue3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#vue3",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Vue3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "utils.tsx")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "import { reactive, onMounted, unref, defineComponent, watch } from 'vue';\\n/**\\n * HOC Component transform function\\n * @param {(params: any) => Promise<any>} promiseFn\\n * @param {Object} params\\n */\\nconst usePromiseFetch = (\\n  promiseFn: (params: any) => Promise<any>,\\n  params = {},\\n) => {\\n  const obj = reactive<{ result: null | {}; error: boolean; loading: boolean }>(\\n    {\\n      result: null,\\n      error: false,\\n      loading: false,\\n    },\\n  );\\n\\n  const fetchRequest = async params => {\\n    obj.loading = true;\\n    const result = await promiseFn(params).finally(() => {\\n      obj.loading = false;\\n    });\\n    obj.result = result;\\n  };\\n\\n  /**\\n   * @param {JSX.IntrinsicElements | any} Wrapped\\n   */\\n  return function wrap(Wrapped: JSX.IntrinsicElements | any) {\\n    onMounted(() => fetchRequest(params));\\n    watch(params, newVal => fetchRequest(newVal), { immediate: true });\\n\\n    const NewWrapped = defineComponent<InstanceType<typeof Wrapped>>({\\n      setup(props, ctx) {\\n        return {\\n          slots: ctx.slots,\\n          attrs: ctx.attrs,\\n          props,\\n          this: this,\\n        };\\n      },\\n      render() {\\n        if (obj.loading) return <span>loading...</span>;\\n        if (obj.error) return <span>error...</span>;\\n        return (\\n          <Wrapped\\n            slots={this.slots}\\n            attrs={this.attrs}\\n            props={this.props}\\n            loading={unref(obj.loading)}\\n            result={unref(obj.result)}\\n          />\\n        );\\n      },\\n    });\\n    return NewWrapped;\\n  };\\n};\\n\\nfunction compose(...funcs: Function[]) {\\n  if (funcs.length === 0) {\\n    return <T extends any>(arg: T) => arg;\\n  }\\n\\n  if (funcs.length === 1) {\\n    return funcs[0];\\n  }\\n\\n  return funcs.reduce((a, b) => (...args: any) => a(b(...args)));\\n}\\n\\nfunction normalizeProps(vm) {\\n  return {\\n    on: vm.$listeners,\\n    attr: vm.$attrs,\\n    scopedSlots: vm.$scopedSlots,\\n  };\\n}\\n\\nconst WithLog = (Wrapped: JSX.IntrinsicElements | any) => {\\n  return defineComponent({\\n    mounted() {\\n      console.log('log');\\n    },\\n    render() {\\n      const props = normalizeProps(this);\\n      return <Wrapped {...props} />;\\n    },\\n  });\\n};\\n\\nexport { usePromiseFetch, compose, WithLog };",
    lang: "tsx"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "View.vue")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<template>\\n  <div>\\n    <span>{{ result?.name }}</span>\\n  </div>\\n</template>\\n<script setup lang=\\"tsx\\">\\n  import { useSlots, useAttrs } from 'vue';\\n  const { result, loading } = defineProps(['result', 'loading']);\\n\\n  const slots = useSlots();\\n  const attrs = useAttrs();\\n  defineExpose({\\n    slots,\\n    attrs,\\n  });\\n</script>",
    lang: "tsx"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "index.vue")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<template> <HOC /></template>\\n<script setup lang=\\"tsx\\">\\n  import { compose, usePromiseFetch, WithLog } from './utils';\\n  import View from './View.vue';\\n\\n  const params = { id: 10 };\\n\\n  const request = (params = {}) => {\\n    // mock the fetch\\n    // parmas is the params of the request\\n    return new Promise(resolve => {\\n      setTimeout(() => {\\n        resolve({ name: 'ssh' });\\n      }, 1000);\\n    });\\n  };\\n\\n  // const HOC = usePromiseFetch(View, request, params);\\n  // const HOC = WithLog(usePromiseFetch(View, request, params));\\n  const composed = compose(usePromiseFetch(request), WithLog);\\n  const HOC = composed(View);\\n</script>",
    lang: "html"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "vue2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#vue2",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "vue2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<!DOCTYPE html>\\n<html lang=\\"en\\">\\n  <head>\\n    <meta charset=\\"UTF-8\\" />\\n    <meta name=\\"viewport\\" content=\\"width=device-width, initial-scale=1.0\\" />\\n    <title>hoc-promise</title>\\n  </head>\\n  <body>\\n    <div id=\\"app\\">\\n      <hoc msg=\\"msg\\" @change=\\"onChange\\">\\n        <template>\\n          <div>I am slot</div>\\n        </template>\\n        <template v-slot:named>\\n          <div>I am named slot</div>\\n        </template>\\n      </hoc>\\n    </div>\\n    <script src=\\"https://cdn.jsdelivr.net/npm/vue@2.7.10\\"></script>\\n    <script>\\n      var view = {\\n        props: ['result'],\\n        data() {\\n          return {\\n            requestParams: {\\n              name: 'ssh',\\n            },\\n          };\\n        },\\n        methods: {\\n          reload() {\\n            this.requestParams = {\\n              name: 'changed!!',\\n            };\\n          },\\n        },\\n        template: \`\\n          <span>\\n            <span>{{result?.name}}</span>\\n            <slot></slot>\\n            <slot name=\\"named\\"></slot>\\n            <button @click=\\"reload\\">\u91CD\u65B0\u52A0\u8F7D\u6570\u636E</button>\\n          </span>\\n        \`,\\n      };\\n\\n      const withPromise = promiseFn => {\\n        return function(wrapped) {\\n          return {\\n            data() {\\n              return {\\n                loading: false,\\n                error: false,\\n                result: null,\\n              };\\n            },\\n            methods: {\\n              async request() {\\n                this.loading = true;\\n                // \u4ECE\u5B50\u7EC4\u4EF6\u5B9E\u4F8B\u91CC\u62FF\u5230\u6570\u636E\\n                const { requestParams } = this.$refs.wrapped;\\n                // \u4F20\u9012\u7ED9\u8BF7\u6C42\u51FD\u6570\\n                const result = await promiseFn(requestParams).finally(() => {\\n                  this.loading = false;\\n                });\\n                this.result = result;\\n              },\\n            },\\n            async mounted() {\\n              // \u7ACB\u523B\u53D1\u9001\u8BF7\u6C42\uFF0C\u5E76\u4E14\u76D1\u542C\u53C2\u6570\u53D8\u5316\u91CD\u65B0\u8BF7\u6C42\\n              this.$refs.wrapped.$watch(\\n                'requestParams',\\n                this.request.bind(this),\\n                {\\n                  immediate: true,\\n                },\\n              );\\n            },\\n            render(h) {\\n              const args = {\\n                props: {\\n                  // \u6DF7\u5165 $attrs\\n                  ...this.$attrs,\\n                  result: this.result,\\n                  loading: this.loading,\\n                },\\n\\n                // \u4F20\u9012\u4E8B\u4EF6\\n                on: this.$listeners,\\n\\n                // \u4F20\u9012 $scopedSlots\\n                scopedSlots: this.$scopedSlots,\\n                ref: 'wrapped',\\n              };\\n\\n              const wrapper = h('div', [\\n                this.loading ? h('span', ['\u52A0\u8F7D\u4E2D\u2026\u2026']) : null,\\n                this.error ? h('span', ['\u52A0\u8F7D\u9519\u8BEF']) : null,\\n                h(wrapped, args),\\n              ]);\\n\\n              return wrapper;\\n            },\\n          };\\n        };\\n      };\\n\\n      const withLog = wrapped => {\\n        return {\\n          mounted() {\\n            console.log('I am mounted!');\\n          },\\n          render(h) {\\n            return h(wrapped, normalizeProps(this));\\n          },\\n        };\\n      };\\n\\n      const request = data => {\\n        return new Promise(r => {\\n          setTimeout(() => {\\n            r(data);\\n          }, 1000);\\n        });\\n      };\\n\\n      const composed = compose(withLog, withPromise(request));\\n\\n      var hoc = composed(view);\\n\\n      new Vue({\\n        el: '#app',\\n        components: {\\n          hoc,\\n        },\\n        methods: {\\n          onChange() {},\\n        },\\n      });\\n\\n      function compose(...funcs) {\\n        return funcs.reduce((a, b) => (...args) => a(b(...args)));\\n      }\\n\\n      function normalizeProps(vm) {\\n        return {\\n          on: vm.$listeners,\\n          attr: vm.$attrs,\\n          // \u4F20\u9012 $scopedSlots\\n          scopedSlots: vm.$scopedSlots,\\n        };\\n      }\\n    </script>\\n  </body>\\n</html>",
    lang: "html"
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

//# sourceURL=webpack:///./src/Project/VueHOC/index.md?`)}}]);
