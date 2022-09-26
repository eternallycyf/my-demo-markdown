(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{IYhs:function(u,l,t){"use strict";t.r(l);var o=t("cDcd"),e=t.n(o),n=t("dEAq"),m=t.n(n),a=t("H1Ra");const c=e.a.memo(({demos:i})=>e.a.createElement(e.a.Fragment,null,e.a.createElement("div",{className:"markdown"},e.a.createElement("h1",{id:"vite"},e.a.createElement(n.AnchorLink,{to:"#vite","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Vite"),e.a.createElement("h2",{id:"1-\u51C6\u5907\u9636\u6BB5"},e.a.createElement(n.AnchorLink,{to:"#1-\u51C6\u5907\u9636\u6BB5","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"1. \u51C6\u5907\u9636\u6BB5"),e.a.createElement(a.a,{code:`yarn create vite
npm install -D less
git clone git@github.com:eternallycyf/vite-react-antd-template.git`,lang:"im"}),e.a.createElement("h3",{id:"public"},e.a.createElement(n.AnchorLink,{to:"#public","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"public"),e.a.createElement(a.a,{code:"\u8BBF\u95EE\u8DEF\u5F84\u662F /",lang:"js"}),e.a.createElement("h3",{id:"css"},e.a.createElement(n.AnchorLink,{to:"#css","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"css"),e.a.createElement(a.a,{code:`index.module.css;
import styles from 'index.module.css';`,lang:"js"}),e.a.createElement("h3",{id:"\u9759\u6001\u8D44\u6E90"},e.a.createElement(n.AnchorLink,{to:"#\u9759\u6001\u8D44\u6E90","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u9759\u6001\u8D44\u6E90"),e.a.createElement(a.a,{code:`import imgUrl from './img.png';
('./URL.js?url');
('./\u5B57\u7B26\u4E32.js?raw');
('./webWorker.js?worker');
('./webWorkerBase64.js?worker&inline');`,lang:"js"}),e.a.createElement("h3",{id:"\u73AF\u5883\u53D8\u91CF"},e.a.createElement(n.AnchorLink,{to:"#\u73AF\u5883\u53D8\u91CF","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u73AF\u5883\u53D8\u91CF"),e.a.createElement(a.a,{code:`import.meta.env.VITE_xxx
VITE_xxx=12345
#
.env.production
.env.development`,lang:"js"}),e.a.createElement("h2",{id:"2-\u914D\u7F6E"},e.a.createElement(n.AnchorLink,{to:"#2-\u914D\u7F6E","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"2. \u914D\u7F6E"),e.a.createElement("h3",{id:"\u533A\u5206\u73AF\u5883"},e.a.createElement(n.AnchorLink,{to:"#\u533A\u5206\u73AF\u5883","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u533A\u5206\u73AF\u5883"),e.a.createElement(a.a,{code:`export default defineConfig(({ command, mode }) => {
  if (command === 'serve') {
    return {
      // dev \u72EC\u6709\u914D\u7F6E
    };
  } else {
    return {
      // build \u72EC\u6709\u914D\u7F6E
    };
  }
});`,lang:"js"}),e.a.createElement("h3",{id:"\u57FA\u672C\u914D\u7F6E"},e.a.createElement(n.AnchorLink,{to:"#\u57FA\u672C\u914D\u7F6E","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u57FA\u672C\u914D\u7F6E"),e.a.createElement(a.a,{code:`export default definConfig({
  // index.html \u7684\u4F4D\u7F6E
  root:'',
  // \u516C\u4F17\u57FA\u7840\u8DEF\u5F84
  base:'/',
  mode: "development" | "production"
  // public\u6587\u4EF6\u5939\u8DEF\u5F84
  publicDir:"",
})`,lang:"js"}),e.a.createElement("h3",{id:"devserver"},e.a.createElement(n.AnchorLink,{to:"#devserver","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"devServer"),e.a.createElement(a.a,{code:`# vite.config.js
import { defineConfig } from "vite";
export default definConfig({
	server:{
    host: '127.0.0.1',
    port: 3000,
    open: true,
    cors: true,
    // \u7AEF\u53E3\u5360\u7528\u4F1A\u7528\u4E0B\u4E00\u4E2A\u7AEF\u53E3
    strictPort: true,
    proxy: {
       // \u5B57\u7B26\u4E32\u7B80\u5199\u5199\u6CD5
      '/foo': 'http://localhost:4567',
      // \u9009\u9879\u5199\u6CD5
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\\/api/, '')
      },
    },
  }
})`,lang:"js"}),e.a.createElement("h3",{id:"resolve"},e.a.createElement(n.AnchorLink,{to:"#resolve","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"resolve"),e.a.createElement("h4",{id:"alias"},e.a.createElement(n.AnchorLink,{to:"#alias","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"alias"),e.a.createElement(a.a,{code:`# vite.config.js
import { defineConfig } from "vite";
export default definConfig({
	resolve:{
    alias:{
      "@": path.resolve(__dirname, "src"),
    }
  }
})`,lang:"js"}),e.a.createElement("h3",{id:"plugins"},e.a.createElement(n.AnchorLink,{to:"#plugins","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"plugins"),e.a.createElement(a.a,{code:`# vite.config.js
import { defineConfig } from "vite";
export default definConfig({
  plugins: [
    xxx(),
    {
      ...xxx(),
      // \u6307\u5B9A\u63D2\u4EF6\u5F15\u5165\u7684\u987A\u5E8F
      enforce: 'pre' | 'post'
      // \u751F\u4EA7\u6A21\u5F0F\u8FD8\u662F\u5F00\u53D1\u6A21\u5F0F
      apply: 'build' | 'serve'
    }
  ]
})`,lang:"js"}),e.a.createElement("h3",{id:"optimizedeps"},e.a.createElement(n.AnchorLink,{to:"#optimizedeps","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"optimizeDeps"),e.a.createElement(a.a,{code:`# vite.config.js
import { defineConfig } from "vite";
export default definConfig({
  optimizeDeps:{
    // \u5165\u53E3
    entries: string|string[],
    // \u5220\u9664\u9879
    exclude: string[]
    include: string[]
  }
})`,lang:"js"}),e.a.createElement("h3",{id:"build"},e.a.createElement(n.AnchorLink,{to:"#build","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"build"),e.a.createElement("h4",{id:"\u57FA\u7840\u914D\u7F6E"},e.a.createElement(n.AnchorLink,{to:"#\u57FA\u7840\u914D\u7F6E","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u57FA\u7840\u914D\u7F6E"),e.a.createElement(a.a,{code:`module.exports = defineConfig({
	build: {
    // \u6D4F\u89C8\u5668\u517C\u5BB9\u6027 modules:\u652F\u6301ESM\u7684\u6D4F\u89C8\u5668esnext:\u5185\u5B58\u66F4\u5C0Fes2015
    target:'',
    // dist\u6587\u4EF6\u8DEF\u5F84
  	outDir: "",
    // \u9759\u6001\u8D44\u6E90\u8DEF\u5F84
    assetsDir: "",
    // \u5C0F\u4E8E\u6B64\u503C\u8F6C\u4E3Abase64
    assetsInlineLimit: 4096,
    // \u9ED8\u8BA4\u5F02\u6B65\u521B\u5EFA\u65B0\u7684css false:css\u90FD\u5728\u4E00\u4E2A\u6587\u4EF6
    cssCodeSplit: true,
    // boolean | 'inline' | 'hidden'
    sourcemap: true

    // \u9632\u6B62vite\u5C06rgba\u8F6C\u4E3A#RGBA \u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u4E0D\u652F\u6301
    cssTarget: 'chrome61',

    // \u89C4\u5B9A\u89E6\u53D1\u8B66\u544A\u7684 chunk \u5927\u5C0F
    chunkSizeWarningLimit: 1024,

    rollupOptions: {

    }
  }
})`,lang:"js"}),e.a.createElement("h4",{id:"lib"},e.a.createElement(n.AnchorLink,{to:"#lib","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"lib"),e.a.createElement(a.a,{code:`module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, '1.js'),
      name: '',
      filName: '',
    },
  },
});`,lang:"js"}),e.a.createElement("h4",{id:"rollupoptions"},e.a.createElement(n.AnchorLink,{to:"#rollupoptions","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"rollupOptions"),e.a.createElement(a.a,{code:`module.exports = defineConfig({
  build: {
    rollupOptions: {
      // \u591A\u5165\u53E3
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'nested/index.html'),
      },
      // external
      external: ['vue'],
      output: { globals: { vue: 'Vue' } },
    },
  },
});`,lang:"js"}),e.a.createElement("h2",{id:"3-ssr"},e.a.createElement(n.AnchorLink,{to:"#3-ssr","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"3. SSR"),e.a.createElement(a.a,{code:"",lang:"js"}))));l.default=i=>{const s=e.a.useContext(n.context),d=s.demos;return e.a.useEffect(()=>{var r;i!=null&&(r=i.location)!==null&&r!==void 0&&r.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(i.location.hash.slice(1)))},[]),e.a.createElement(c,{demos:d})}}}]);
