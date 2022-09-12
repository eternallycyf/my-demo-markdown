---
order: 9
nav:
  title: 前端之路
  path: /guide
---

# UmiJS

```js
yarn create @umijs/umi-app
mfsu: {}, // 改变base路径加速
```

## 基础配置

### hash

```js
hash: true;
避免浏览器加载缓存;
```

### mock

### alias

```js
import { resolve } from "path";
  alias: {
    "@": resolve(__dirname, "./src"),
    "@/components": resolve(__dirname, "./src/components"),
  },
```

### cssModules

### css

```js
import styles from './foo.css';
import './foo.css';
styles.xxx;
```

### 图片

```js
export default () => <img src={require('./foo.png')} />
<img src='/' />
// 斜杠就是public目录
```

### svg

```js
import { ReactComponent as Logo } from './logo.svg';
function Analysis() {
  return <Logo width={90} height={120} />;
}
// url
import logoSrc from './logo.svg';
function Analysis() {
  return <img src={logoSrc} alt="logo" />;
}
```

### 懒加载

```js
export default {
  dynamicImport: {},
}

import { dynamic } from 'umi';
export default dynamic({
  loader: async function() {
    // 这里的注释 webpackChunkName 可以指导 webpack 将该组件 HugeA 以这个名字单独拆出去
    const { default: HugeA } = await import(/* webpackChunkName: "external_A" */ './HugeA');
    return HugeA;
  },
});
# 异步组件
AsyncHugeA
```

### layout

## .umirc.ts

```js
  mfsu: {},
```

### route

```js

hideChildrenInMenu:true
# 组件
link to='./'

# routes 路由
exact
redirect
title
wrappers:["组件路径"]   配置鉴权路由
# 嵌套路由
子组件添加 toutes:[]

# 编程式导航
history.push()
history.goBack();

# history模式
{type: 'browser'}


# 路由元信息 通过props属性获得
match     params、path、url isExact
loaction  pathname、search、query
history
route    path、exact、component、routes
routes
传递给子路由 React.cloneElement(child, { foo: 'bar' });

# 动态路由
用[]   包裹的文件名 例如 [index].tsx
用[ $] 包裹的文件名 动态可选的路由
用_xxx.tsx 会生成嵌套路由

export function patchRoutes({ routes }){
  routes.unshift({
    path:"login",
    exact:true,
    component:require('@/extraRoutes/foo')
  })
}
```

#### 二级子路由

```js
# https://github.com/umijs/umi/issues/5221
{
      path: '/Marketing',
      name: '营销中心',
      component: '@/pages/Marketing/preferential',
      routes: [
        {
          redirect: '/Marketing/preferential',
        },
        {
          name: '优惠管理',
          exact: true,
          path: '/Marketing/preferential',
          component: '@/pages/Marketing/preferential',
        },
        {
          name: '素材管理',
          exact: true,
          path: '/Marketing/matter',
          component: '@/pages/Marketing/matter',
        },
      ],
    },
```

#### 动态路由

```js
{
  name: '新增编辑Banner',
  path: '/marketing/matter/bannerAddAndEdit:id?',
  component:
   '@/pages/marketing/matter/bannerAddAndEdit/[id$]',
 },
#
  [id$].jsx
#
history.push('/marketing/matter/bannerAddAndEdit:1')
```

## 性能优化

### 检查大小

```js
ANALYZE_SSR=1 umi build
#
ANALYZE=1 umi build
http://127.0.0.1:8888/
```

### 懒加载

```js
dynamicImport: {
    loading: '@/PageLoadingComponent',
}
```

### 关闭 moment 国际化

```js
ignoreMomentLocale: true;
```

### antdIcon

```js
import Star from 'antd/icons/star';
<Star />
#
https://github.com/HeskeyBaozi/reduce-antd-icons-bundle-demo
// .umirc.js
alias: {
 '@ant-design/icons/lib/dist$': path.resolve(__dirname, './src/icons.js')
  }
export {default as SmileOutline} from
'@ant-design/icons/lib/outline/SmileOutline';
```

### externals

```js
externals: {
    react: 'window.React',
},
scripts: ['...url'],
```

#### 内网

```js
# 将 包 下载下来放在 public 文件夹
# .eslintignore
/public
#
externals: {
    react: 'window.React',
},
scripts: ['public/..'],
```

### nginx

```js
//nginx.conf
location / {
      root /app;
      try_files $uri $uri/ /index.html;
//尝试访问文件，如果命中即返回文件，如js等资源文件。如访问不到，如前端路径，即访问index.html
      index index.html index.htm;
}

// 反向代理让前后端同域
location /dpm/ {
    proxy_pass http://10.20.0.47:8080;
}

```

### dockerFile

```js
//Dockerfile
FROM node:12.16.1-alpine AS installer
COPY package.json ./
RUN npm i tyarn -g
RUN tyarn

FROM node:12.16.1-alpine AS builder
COPY --from=installer /node_modules ./node_modules
COPY . .
RUN npm run build

FROM  vixlet/nginx:alpine
COPY --from=builder /dist /app
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
```

## 页面初始化

### 全局 model

```js
src / models / xxx.js;
```

### 初始化数据

```js
src/app.ts
export const getInitialState = ()=>{
  return 登录账号用户信息
}
# 使用
import { useModel } from 'umi'
const { initialState, loading, refresh, setInitialState } = useModel('@@initialState');
```

### 权限

```js
src/access.ts
export default function(initialState){
  return {
    // 自定义函数 逻辑判断是否有权限
   // 菜单权限
    routeAccess: (route) => {
      return authList.includes(route.role);
    },
    // 按钮权限
    moduleAccess: (foo) => {
      return authList.includes(foo);
    },
  }
}
# 使用
// 如果是false就会跳转到403
1.umirc.ts routes>access
 access: 'routeAccess',
2.
import { useAccess, Access } from 'umi';
const access = useAccess();
<Access
  accessible={access.moduleAccess}
	fallback={}>
  	...
</Access>
```

## ssr

```js
  ssr: {},
  exportStatic: {},
```

```js
    "enquire-js": "^0.2.1",
    "rc-banner-anim": "^2.1.0",
    "rc-queue-anim": "^1.6.7",
    "rc-scroll-anim": "^2.5.6",
    "rc-texty": "^0.2.0",
    "rc-tween-one": "^2.2.14",
    "react-sublime-video": "^0.2.5"
```

````js
# umi ssr demo

## 1. 使用[Ant-Design-Landing-Page](https://landing.ant.design/index-cn)可视化创建页面

## 1.1 在左上方第三个按钮点击下载
- 将会下载一个文件名为`Home`的文件夹

## 2. 使用 `umi` 搭建项目
```js
#
cd desktop
#
mkdir umi-ssr-demo && cd umi-ssr-demo
#
yarn create @umijs/umi-app
# 在package.json 加入依赖
  "dependencies": {
    "enquire-js": "^0.2.1",
    "rc-banner-anim": "^2.1.0",
    "rc-queue-anim": "^1.6.7",
    "rc-scroll-anim": "^2.5.6",
    "rc-texty": "^0.2.0",
    "rc-tween-one": "^2.2.14",
    "react-sublime-video": "^0.2.5"
  },
#  yarn
#  在.umirc.ts 开启ssr
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  ssr: {},
  exportStatic: {},
});
# umi dev
随后审查网页源代码就可以看到
如果 <div id="root"> DOM 里的元素不为空，则是 SSR，否则为 CSR
```

## 3. 配置dockerfile nginx
```js
参考仓库中的配置
docker-compose.yml
Dockerfile
nginx.conf
```

## 4. 服务器部署
```js
# 1.使用sftp将除了node_modules的文件放在服务器 例如 ./home/blog
scp -r nextjs-docker-nginx-demo root@服务器地址:/home/blog/

# 2
# 2.1 在 ./home/blog 根目录运行
ssh 'root@服务器地址'
cd /home/blog/nextjs-docker-nginx-demo
docker-compose up -d
# 2.2 停止命令
docker-compose down
```

##
````

## 部署

```js
  define: {
    "process.env": process.env,
  },
  history: { type: 'hash' },
  publicPath: process.env.APP_ENV === "development" ? "/" : "http://wangxince.site/node-script-router-inject-demo/",
  hash: true,
  dynamicImport: {},

```

```js
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 删除旧的文件
rm -rf dist

rm -rf ./src/pages/.DS_Store

# 生成新的压缩文件
yarn build:pro

# 进入生成的文件夹
cd dist

# 复制一个 index.html并命名为 404.html 解决 historyAPI 404问题
cp index.html 404.html

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:eternallycyf/node-script-router-inject-demo.git master:gh-pages

cd -
```
