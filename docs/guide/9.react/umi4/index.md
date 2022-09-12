---
order: 9
nav:
  title: 前端之路
  path: /guide
---

# umi4

```js
pnpm dlx create-umi@latest
```

## alias

```js
  alias: {
    src: path.resolve(__dirname, '.', './src/'),
    Components: path.resolve(__dirname, '.', 'src/Components/'),
    MyComponents: path.resolve(__dirname, '.', 'src/MyComponents/'),
    style: path.resolve(__dirname, '.', 'src/style/'),
  },

    from 'src'
```

## UMI-API

### history

```js
import { history } from 'umi';

#
history.location.pathname;
history.location.search;
history.location.hash;
#
history.push('/list');
history.push('/list?a=b&c=d#anchor');
history.push({
  pathname: '/list',
  search: '?a=b&c=d',
  hash: 'anchor',
});
history.back();
history.go(-1);
# 监听路由
const unlisten = history.listen(({ location, action }) => {
  console.log(location.pathname);
});
unlisten();
```

### Link

```js
<Link
  // string | {pathname:'',search:'',hash:''}
  to={}
  // 相当于a链接
  reloadDocument={boolean}
  state={boolean}
  replace={boolean}
  // 预加载相关文件
  prefetch={boolean}
/>
```

### NavLink

```js
激活的Link;
```

## .umirc.ts

```js
import { defineConfig } from '@umijs/max';
export default defineConfig({

# 功能性配置
// 可以跳转到源码 option+click
  clickToComponent: {},
/* 路由预加载数据 解决瀑布流问题
import { useClientLoaderData } from 'umi';
const data = useClientLoaderData();
*/
  clientLoader: {},
// 给跨域提供完整报错信息 script加上 crossorigin="anonymous"
  crossorigin: {}
// css压缩工具 esbuild, cssnano, parcelCSS, none 不压缩
  cssMinifier: 'esbuild'
// css压缩相关配置
  cssMinifierOptions: {
    minifyWhitespace: true,
    minifySyntax: true,
  },
// 将CSS变成驼峰
   cssLoaderModules: {
     exportLocalsConvention: 'camelCase'
   }
// 约定式路由排除的文件夹
  conventionRoutes: {
    exclude: [/\/components\//, /\/models\//],
  },
// 复制到dist目录 将./src/form下面所有东西复制到dist/output下
  copy: [
    { from: 'from', to: 'dist/output' },
    { from: 'file.json', to: 'dist' }
  ]
// 默认会移除注释
  jsMinifierOptions: {
    minifyWhitespace: true,
    minifyIdentifiers: true,
    minifySyntax: true,
  }

# 常用配置
  base: '/',
// 定义全局变量 console(foo) => console('bar')
  define: {
    foo: 'bar'
  },
  favicons: ['/assets/favicon.ico'],
// 开启ts检查
  forkTSChecker: { },
// 解决build后浏览器缓存问题
  hash: false,
// 忽略Moment国际化
  ignoreMomentLocale: false,
// mfsu
  mfsu: true,
  mock: {},
  history: 'browser' | 'hash' | 'momory',
// <head> 中额外配置
  headScripts: [
    { src: '/foo.js', defer: true },
    { content: `alert('你好');`, charset: 'utf-8' },
  ],
  links: [{ href: './xxx',rel:'preload' }],
  metas: [ {name:'', content:''}],
  proxy: {
    ...
  },
  publicPath: '/',
  theme: { '@primary-color': '#1DA57A' },
  routes: [],

// 是否有 sourcemap  eval最快 source-map最慢
  devtool: process.env.NODE_ENV === 'development' ? 'eval' : false,
  externals:{
    react: 'React',
  },
  scripts: ['...']


# 其他插件
// 修改webpack配置
  chainWebpack(memoo,{env,webpack}){ }
// 处理Babel的npm包
  extraBabelIncludes: [
     join(__dirname, '../../common'),
    'react-monaco-editor',
  ],
// 配置额外的babel插件
   extraBabelPlugins: [ xxx,()=>xxx ]
// 配置 postCSS 额外配置
   extraPostCSSPlugins: [ ]
//
  autoprefixer:{ flexbox:'no-2009' }
});

```

## 目录结构

```js
// 修改路由 错误处理 loading dva 拦截器
./src/app.ts
// 约定的首页位置 /
./src/layouts/index.tsx
// 404 调试时: /404
./src/404.js
// 全局样式
./src/global.less
// 懒加载中的 loading
./src/loading.tsx
@ant-design/pro-layout/es/PageLoading
// 权限校验
./src/wrapperes/auth.tsx
```

## 路由

```js
routes: [
  {
    path: '/',
    title: '',
    component: 'index',
    redirect: '/list',
    wrappers: ['@/wrappers/auth'],
    // 权限配置，需要与 plugin-access 插件配合使用
    access: 'canRead',
    routes: [

    ],
    // 没有就不显示该菜单
    name: '欢迎',
    icon: 'testicon',
    target: '_blank',
    // 不展示顶栏
    headerRender: false,
    // 不展示页脚
    footerRender: false,
    // 不展示菜单
    menuRender: false,
    // 不展示菜单顶栏
    menuHeaderRender: false,
    // 隐藏子菜单
    hideChildrenInMenu: true,
    // 隐藏自己和子菜单
    hideInMenu: true,
    // 在面包屑中隐藏
    hideInBreadcrumb: true,
    // 子项往上提，仍旧展示,
    flatMenu: true,
  }
]
# 获取路由参数
// params pathname
const match = useMatch('/comp/:id')
// pathname search hash state
const location  = useLocation();
// 动态路由
const params  = useParams();
// query => /comp?a=b;
const [searchParams, setSearchParams] = useSearchParams();
searchParams.get('a')  // b
searchParams.toString()  // a=b
```

## 环境变量

```js
# ./env
// 指定端口
PORT=3000
// 取消babel缓存
BABEL_CACHE=none
# cross-env 跨操作系统操作环境变量

cross-env PORT=3000 umi dev


cross-env UMI_ENV=production umi build

.umirc.production.js
export default {
  define: {
    baseURl: 'ws://172.20.0.87:8099',
  },
};
.umirc.ts
  define: {
    baseURl: 'ws://121.199.6.173:30261',
  },
```

## layout

```js
# ./umirc.ts
  layout: {
    title: 'Ant Design',
    // 默认开启，如无需菜单国际化可关闭
    locale: false,
    logo:"",
    // 退出登录的逻辑
    logout:(initialState: any) => void,
    // 展示用户名、头像、退出登录相关组件
    rightRender: (initialState: any) => React.ReactNode
    pageTitleRender: false,
    contentWidth: 'Fluid',
    navTheme: 'light',
  },
```

```js
# ./src/app.tsx
https://umijs.org/docs/max/layout-menu
import { currentUser as queryCurrentUser } from './services/global';
import { PageLoading } from '@ant-design/pro-layout';
import { history, useModel } from 'umi';
import requestInterceptors from '@/utils/request';
import RightContent from '@/components/RightContent';
import { Link } from 'umi';

const whitelist = ['/user/login'];
const loginPath = '/user/login';

// dva errorCatch
export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
    },
  },
};

/** 获取用户信息比较慢的时候会展示一个 loading */

export const initialStateConfig = {
  loading: <PageLoading />,
};

export const getInitialState = async () => {
  const fetchUserInfo = async () => {
    try {
      const user = await queryCurrentUser();
      return user.data;
    } catch (error) {
      console.error('重新登陆');
    }
    return undefined;
  }; // 如果是登录页面，不执行
  // 如果是登录页面，不执行
  const currentUser = await fetchUserInfo();
  return {
    fetchUserInfo,
    currentUser,
    settings: {},
  };
};

// umi-request error处理
export const request = {
  requestInterceptors: [requestInterceptors],
  credentials: 'include', // 把这行加上，请求会自动带上cookie等数据
  errorConfig: {
    adaptor: (resData, { res }) => {
      return {
        ...resData,
        showType:
          res.status === 403 || res.status === 405 || res.status === 401
            ? 9
            : 2,
        success: resData.code === 200,
        errorMessage: resData.msg || resData.message,
      };
    },
    errorPage: '/user/login',
  },
};

export const layout = ({ initialState }) => {
  return {
    disableContentMargin: false,
    iconfontUrl: '/fonticon/iconfont.js',
    logout: () => {}, // do something
    rightContentRender: () => <RightContent />,
    itemRender: (route, _params, routes, _paths) => {
      return <Link to={route.path}>{route.breadcrumbName}</Link>;
    },
    waterMarkProps: {
      content: initialState?.currentUser?.name,
    },
    onPageChange: () => {
      const { location } = history; // 如果没有登录，重定向到 login
      if (
        !initialState?.state?.code === 200 &&
        location.pathname !== loginPath
      ) {
        history.push(loginPath);
      }
    },
    menuHeaderRender: undefined,
    ...initialState?.settings,
  };
};

```

## 权限流程

```js
# 初始化数据 在 ./src/app.ts中导出 getInitialState 方法
export const getInitialState = async () => {
  const fetchUserInfo = async () => {
    try {
      const user = await queryCurrentUser();
      return user.data;
    } catch (error) {
      console.error('重新登陆');
    }
    return undefined;
  }; // 如果是登录页面，不执行
  // 如果是登录页面，不执行
  const currentUser = await fetchUserInfo();
  return {
    fetchUserInfo,
    currentUser,
    settings: {},
  };
};

# src/access.ts
export default function (initialState) {
  const menu = initialState?.menu?.split(',') ?? [];
  const parentMenu = initialState?.parentMenu?.split(',') ?? [];
  const authList = [...parentMenu, ...menu];
  return {
    // 菜单权限
    routeAccess: (route) => {
      return authList.includes(route.role);
    },
    // 按钮权限
    moduleAccess: (foo) => {
      return authList.includes(foo);
    },
  };
}

  {
    path: '/pageA',
    component: 'PageA',
    access: 'canReadPageA', // 权限定义返回值的某个 key
  },


# usemodel 使用初始化数据
import { useModel } from 'umi';
  const {
    initialState, // 在app.ts export getInitialState
    loading,
    error,
    refresh,
    setInitialState
  } =
    useModel('@@initialState');
// 使用别的命名空间的数据
useModel('xxx',()=>{
  更新
})

# useAccess 按钮权限控制
import { useAccess } from 'umi';
const access = useAccess();
if (access.canReadFoo) {
   // 如果可以读取 Foo，则...
}

# wrapper 路由权限校验

import { useModel, Redirect, Outlet } from 'umi';
export default (props) => {
  const { initialState } = useModel('@@initialState');
  if (initialState) {
    return <Outlet />;
  } else {
    return <Redirect to="/user/login" />;
  }
};

```

## 拦截器

```js
src / app.ts;
import type { RequestConfig } from 'umi';
export const request: RequestConfig = {
  timeout: 1000,
  // other axios options you want
  errorConfig: {
    errorHandler() {},
    errorThrower() {},
  },
  requestInterceptors: [],
  responseInterceptors: [],
};
```

## 其他

### react 多页签

```js
#
https://github.com/fangzhengjin/umi-plugin-panel-tabs
https://github.com/MudOnTire/antd-pro-page-tabs
npm i umi-plugin-panel-tabs
#
  panelTab: {
    use404: true,
    useAuth: true,
    autoI18n: true,
    // 打开多少页签时弹出提示
    tabsLimit: 10,
    // 防抖时间
    tabsLimitWait: 500,
    tabsLimitWarnTitle: '提示',
    tabsLimitWarnContent: '您当前打开页面过多, 请关闭不使用的页面以减少卡顿!',
    tabsBarBackgroundColor: '#FFFFFF',
    tabsTagColor: '#1890ff',
  },
#
 当route具有name就会显示页签
 添加hideInPanelTab:true 就隐藏页签
```
