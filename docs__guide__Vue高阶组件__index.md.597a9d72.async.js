(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{TaK3:function(p,o,e){"use strict";e.r(o);var l=e("cDcd"),n=e.n(l),t=e("dEAq"),d=e.n(t),i=e("JQtJ"),a=e("6T1g");const u=n.a.memo(({demos:s})=>n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("p",null,n.a.createElement(i.a,null,"\u5F85\u6574\u7406 \u6574\u7406\u540E\u5C06\u79FB\u52A8\u5230\u5176\u4ED6\u5730\u65B9")),n.a.createElement("h1",{id:"vue-\u9AD8\u9636\u7EC4\u4EF6"},n.a.createElement(t.AnchorLink,{to:"#vue-\u9AD8\u9636\u7EC4\u4EF6","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Vue \u9AD8\u9636\u7EC4\u4EF6"),n.a.createElement("h2",{id:"vue3"},n.a.createElement(t.AnchorLink,{to:"#vue3","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Vue3"),n.a.createElement("ul",null,n.a.createElement("li",null,"utils.tsx")),n.a.createElement(a.a,{code:`import { reactive, onMounted, unref, defineComponent, watch } from 'vue';
/**
 * HOC Component transform function
 * @param {(params: any) => Promise<any>} promiseFn
 * @param {Object} params
 */
const usePromiseFetch = (
  promiseFn: (params: any) => Promise<any>,
  params = {},
) => {
  const obj = reactive<{ result: null | {}; error: boolean; loading: boolean }>(
    {
      result: null,
      error: false,
      loading: false,
    },
  );

  const fetchRequest = async params => {
    obj.loading = true;
    const result = await promiseFn(params).finally(() => {
      obj.loading = false;
    });
    obj.result = result;
  };

  /**
   * @param {JSX.IntrinsicElements | any} Wrapped
   */
  return function wrap(Wrapped: JSX.IntrinsicElements | any) {
    onMounted(() => fetchRequest(params));
    watch(params, newVal => fetchRequest(newVal), { immediate: true });

    const NewWrapped = defineComponent<InstanceType<typeof Wrapped>>({
      setup(props, ctx) {
        return {
          slots: ctx.slots,
          attrs: ctx.attrs,
          props,
          this: this,
        };
      },
      render() {
        if (obj.loading) return <span>loading...</span>;
        if (obj.error) return <span>error...</span>;
        return (
          <Wrapped
            slots={this.slots}
            attrs={this.attrs}
            props={this.props}
            loading={unref(obj.loading)}
            result={unref(obj.result)}
          />
        );
      },
    });
    return NewWrapped;
  };
};

function compose(...funcs: Function[]) {
  if (funcs.length === 0) {
    return <T extends any>(arg: T) => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce((a, b) => (...args: any) => a(b(...args)));
}

function normalizeProps(vm) {
  return {
    on: vm.$listeners,
    attr: vm.$attrs,
    scopedSlots: vm.$scopedSlots,
  };
}

const WithLog = (Wrapped: JSX.IntrinsicElements | any) => {
  return defineComponent({
    mounted() {
      console.log('log');
    },
    render() {
      const props = normalizeProps(this);
      return <Wrapped {...props} />;
    },
  });
};

export { usePromiseFetch, compose, WithLog };`,lang:"tsx"}),n.a.createElement("ul",null,n.a.createElement("li",null,"View.vue")),n.a.createElement(a.a,{code:`<template>
  <div>
    <span>{{ result?.name }}</span>
  </div>
</template>
<script setup lang="tsx">
  import { useSlots, useAttrs } from 'vue';
  const { result, loading } = defineProps(['result', 'loading']);

  const slots = useSlots();
  const attrs = useAttrs();
  defineExpose({
    slots,
    attrs,
  });
</script>`,lang:"tsx"}),n.a.createElement("ul",null,n.a.createElement("li",null,"index.vue")),n.a.createElement(a.a,{code:`<template> <HOC /></template>
<script setup lang="tsx">
  import { compose, usePromiseFetch, WithLog } from './utils';
  import View from './View.vue';

  const params = { id: 10 };

  const request = (params = {}) => {
    // mock the fetch
    // parmas is the params of the request
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ name: 'ssh' });
      }, 1000);
    });
  };

  // const HOC = usePromiseFetch(View, request, params);
  // const HOC = WithLog(usePromiseFetch(View, request, params));
  const composed = compose(usePromiseFetch(request), WithLog);
  const HOC = composed(View);
</script>`,lang:"html"}),n.a.createElement("h2",{id:"vue2"},n.a.createElement(t.AnchorLink,{to:"#vue2","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"vue2"),n.a.createElement(a.a,{code:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>hoc-promise</title>
  </head>
  <body>
    <div id="app">
      <hoc msg="msg" @change="onChange">
        <template>
          <div>I am slot</div>
        </template>
        <template v-slot:named>
          <div>I am named slot</div>
        </template>
      </hoc>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.7.10"></script>
    <script>
      var view = {
        props: ['result'],
        data() {
          return {
            requestParams: {
              name: 'ssh',
            },
          };
        },
        methods: {
          reload() {
            this.requestParams = {
              name: 'changed!!',
            };
          },
        },
        template: \`
          <span>
            <span>{{result?.name}}</span>
            <slot></slot>
            <slot name="named"></slot>
            <button @click="reload">\u91CD\u65B0\u52A0\u8F7D\u6570\u636E</button>
          </span>
        \`,
      };

      const withPromise = promiseFn => {
        return function(wrapped) {
          return {
            data() {
              return {
                loading: false,
                error: false,
                result: null,
              };
            },
            methods: {
              async request() {
                this.loading = true;
                // \u4ECE\u5B50\u7EC4\u4EF6\u5B9E\u4F8B\u91CC\u62FF\u5230\u6570\u636E
                const { requestParams } = this.$refs.wrapped;
                // \u4F20\u9012\u7ED9\u8BF7\u6C42\u51FD\u6570
                const result = await promiseFn(requestParams).finally(() => {
                  this.loading = false;
                });
                this.result = result;
              },
            },
            async mounted() {
              // \u7ACB\u523B\u53D1\u9001\u8BF7\u6C42\uFF0C\u5E76\u4E14\u76D1\u542C\u53C2\u6570\u53D8\u5316\u91CD\u65B0\u8BF7\u6C42
              this.$refs.wrapped.$watch(
                'requestParams',
                this.request.bind(this),
                {
                  immediate: true,
                },
              );
            },
            render(h) {
              const args = {
                props: {
                  // \u6DF7\u5165 $attrs
                  ...this.$attrs,
                  result: this.result,
                  loading: this.loading,
                },

                // \u4F20\u9012\u4E8B\u4EF6
                on: this.$listeners,

                // \u4F20\u9012 $scopedSlots
                scopedSlots: this.$scopedSlots,
                ref: 'wrapped',
              };

              const wrapper = h('div', [
                this.loading ? h('span', ['\u52A0\u8F7D\u4E2D\u2026\u2026']) : null,
                this.error ? h('span', ['\u52A0\u8F7D\u9519\u8BEF']) : null,
                h(wrapped, args),
              ]);

              return wrapper;
            },
          };
        };
      };

      const withLog = wrapped => {
        return {
          mounted() {
            console.log('I am mounted!');
          },
          render(h) {
            return h(wrapped, normalizeProps(this));
          },
        };
      };

      const request = data => {
        return new Promise(r => {
          setTimeout(() => {
            r(data);
          }, 1000);
        });
      };

      const composed = compose(withLog, withPromise(request));

      var hoc = composed(view);

      new Vue({
        el: '#app',
        components: {
          hoc,
        },
        methods: {
          onChange() {},
        },
      });

      function compose(...funcs) {
        return funcs.reduce((a, b) => (...args) => a(b(...args)));
      }

      function normalizeProps(vm) {
        return {
          on: vm.$listeners,
          attr: vm.$attrs,
          // \u4F20\u9012 $scopedSlots
          scopedSlots: vm.$scopedSlots,
        };
      }
    </script>
  </body>
</html>`,lang:"html"}))));o.default=s=>{const m=n.a.useContext(t.context),c=m.demos;return n.a.useEffect(()=>{var r;s!=null&&(r=s.location)!==null&&r!==void 0&&r.hash&&t.AnchorLink.scrollToAnchor(decodeURIComponent(s.location.hash.slice(1)))},[]),n.a.createElement(u,{demos:c})}}}]);
