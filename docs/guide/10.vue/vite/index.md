---
order: 10
nav:
  title: 前端之路
  path: /guide
---

# Vite

## 1. 准备阶段

```im
yarn create vite
npm install -D less
git clone git@github.com:eternallycyf/vite-react-antd-template.git
```

### public

```js
访问路径是 /
```

### css

```js
index.module.css;
import styles from 'index.module.css';
```

### 静态资源

```js
import imgUrl from './img.png';
('./URL.js?url');
('./字符串.js?raw');
('./webWorker.js?worker');
('./webWorkerBase64.js?worker&inline');
```

### 环境变量

```js
import.meta.env.VITE_xxx
VITE_xxx=12345
#
.env.production
.env.development
```

## 2. 配置

### 区分环境

```js
export default defineConfig(({ command, mode }) => {
  if (command === 'serve') {
    return {
      // dev 独有配置
    };
  } else {
    return {
      // build 独有配置
    };
  }
});
```

### 基本配置

```js
export default definConfig({
  // index.html 的位置
  root:'',
  // 公众基础路径
  base:'/',
  mode: "development" | "production"
  // public文件夹路径
  publicDir:"",
})
```

### devServer

```js
# vite.config.js
import { defineConfig } from "vite";
export default definConfig({
	server:{
    host: '127.0.0.1',
    port: 3000,
    open: true,
    cors: true,
    // 端口占用会用下一个端口
    strictPort: true,
    proxy: {
       // 字符串简写写法
      '/foo': 'http://localhost:4567',
      // 选项写法
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    },
  }
})
```

### resolve

#### alias

```js
# vite.config.js
import { defineConfig } from "vite";
export default definConfig({
	resolve:{
    alias:{
      "@": path.resolve(__dirname, "src"),
    }
  }
})
```

### plugins

```js
# vite.config.js
import { defineConfig } from "vite";
export default definConfig({
  plugins: [
    xxx(),
    {
      ...xxx(),
      // 指定插件引入的顺序
      enforce: 'pre' | 'post'
      // 生产模式还是开发模式
      apply: 'build' | 'serve'
    }
  ]
})
```

### optimizeDeps

```js
# vite.config.js
import { defineConfig } from "vite";
export default definConfig({
  optimizeDeps:{
    // 入口
    entries: string|string[],
    // 删除项
    exclude: string[]
    include: string[]
  }
})
```

### build

#### 基础配置

```js
module.exports = defineConfig({
	build: {
    // 浏览器兼容性 modules:支持ESM的浏览器esnext:内存更小es2015
    target:'',
    // dist文件路径
  	outDir: "",
    // 静态资源路径
    assetsDir: "",
    // 小于此值转为base64
    assetsInlineLimit: 4096,
    // 默认异步创建新的css false:css都在一个文件
    cssCodeSplit: true,
    // boolean | 'inline' | 'hidden'
    sourcemap: true

    // 防止vite将rgba转为#RGBA 微信小程序不支持
    cssTarget: 'chrome61',

    // 规定触发警告的 chunk 大小
    chunkSizeWarningLimit: 1024,

    rollupOptions: {

    }
  }
})
```

#### lib

```js
module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, '1.js'),
      name: '',
      filName: '',
    },
  },
});
```

#### rollupOptions

```js
module.exports = defineConfig({
  build: {
    rollupOptions: {
      // 多入口
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'nested/index.html'),
      },
      // external
      external: ['vue'],
      output: { globals: { vue: 'Vue' } },
    },
  },
});
```

## 3. SSR

```js
```
