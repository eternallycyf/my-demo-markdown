---
order: 9
nav:
  title: Article
  path: /article
---

# qiankun

### **1.1 -- api 说明**

```js
   // app - 微应用配置列表
    name: 'react16',   // string 必填，微应用的名称，微应用之间必须确保唯一
    entry: '//localhost:7100',   // string 必填，微应用的入口；
    container: '#subapp-viewport',  // string | HTMLElement 必填，微应用的容器节点的选择器或Element实例;
    activeRule: '/react16',  string 必填，微应用的激活规则;
    loader,  可选，loading状态发生变化时会调用的方法;
    props：object，可选，主应用需要传递给微应用的数据；

    // 生命周期
    eforeLoad - Lifecycle | Array<Lifecycle> - 可选
    beforeMount - Lifecycle | Array<Lifecycle> - 可选
    afterMount - Lifecycle | Array<Lifecycle> - 可选
    beforeUnmount - Lifecycle | Array<Lifecycle> - 可选
    afterUnmount - Lifecycle | Array<Lifecycle> - 可选

   支持更多的其他配置，详细看这里 https://qiankun.umijs.org/zh/api/#start-opts

```

### 1.2 -- 配置微应用

#### 1.2.1 -- 基于路由配置微应用 （另外一种是手动加载微应用）

##### **qiankun 用法**

```js
registerMicroApps(
[
    {
      name: 'react16',
      entry: '//localhost:7100',
      container: '#subapp-viewport',
      activeRule: '/react16',
      props：{}
    }
]，
{
    beforeLoad: (app) => console.log('before load', app.name),
    beforeMount: [(app) => console.log('before mount', app.name)],
 }
)；

视屏学习https://www.bilibili.com/video/BV16T4y1e7TC?p=5&vd_source=b681d2a1811642a43c60c5ecab480f3d


```

##### **基座主应用注册 qiankun**

```js
import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'reactApp',
    entry: '//localhost:3000',
    container: '#container',
    activeRule: '/app-react',
  },
  {
    name: 'vueApp',
    entry: '//localhost:8080',
    container: '#container',
    activeRule: '/app-vue',
  },
]);

// 启动 qiankun
start(
   sandbox: {
      strictStyleIsolation: true, // * 表示开启严格的样式隔离模式。
      experimentalStyleIsolation: true, // * 实验性的样式隔离特性
  },
);

更多详情：  https://qiankun.umijs.org/zh/guide/tutorial#%E4%B8%BB%E5%BA%94%E7%94%A8

```

##### **子应用导出生命周期**

```js
1. 入口文件

import './public-path';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function render(props) {
  const { container } = props;
  ReactDOM.render(<App />, container ? container.querySelector('#root') : document.querySelector('#root'));
}

if (!window.__POWERED_BY_QIANKUN__) {  render({})}

export async function bootstrap() { console.log('[react16] react app bootstraped') }  // 应用加载之前

export async function mount(props) {  render(props)  }  // 应用 render 之前触发

export async function unmount(props) {    // 应用卸载之后触发
  const { container } = props;
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}


2. 解决子应用静态资源路径不正确问题

if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}


3. 修改webpack配置

安装插件 @rescripts/cli，
推荐方法 ---- 当然也可以选择其他的插件，例如 npm install  react-app-rewired -D  修改启动配置 --- "start": "react-app-rewired start",

根目录新增 .rescriptsrc.js：
onst { name } = require('./package');

module.exports = {
  webpack: (config) => {
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = 'umd';
    config.output.jsonpFunction = `webpackJsonp_${name}`;
    config.output.globalObject = 'window';
    return config;
  },

devServer: (_) => {
    const config = _;
    config.headers = {
      'Access-Control-Allow-Origin': '*',
    };
    config.historyApiFallback = true;
    config.hot = false;
    config.watchContentBase = false;
    config.liveReload = false;
    return config;
  },

修改 package.json：
-   "start": "react-scripts start",
+   "start": "rescripts start",
-   "build": "react-scripts build",
+   "build": "rescripts build",
-   "test": "react-scripts test",
+   "test": "rescripts test",
-   "eject": "react-scripts eject"

```

##### **主应用与子应用通信**

```js
一、主应用：

1. 入口文档
import { initGlobalState, MicroAppStateActions } from 'qiankun';
// 初始化 state
const actions: MicroAppStateActions = initGlobalState(state);
actions.onGlobalStateChange((state, prev) => {   // 在当前应用监听全局状态，有变更触发 callback，fireImmediately = true 立即触发 callback
  // state: 变更后的状态; prev 变更前的状态
  console.log(state, prev);
});
actions.setGlobalState(state);  // 按一级属性设置全局状态，微应用中只能修改已存在的一级属性
actions.offGlobalStateChange();  // 移除当前应用的状态监听，微应用 umount 时会默认调用

二、微应用：
// 从生命周期 mount 中获取通信方法，使用方式和 master 一致
export function mount(props) {
  props.onGlobalStateChange((state, prev) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log(state, prev);
  });
  props.setGlobalState(state);
}
```

#####

#### 1.2.2 -- 手动加载微应用\*\*

手动加载微应用的场景：**不带路由的可独立运行的业务组件**。微应用不宜拆分过细，建议按业务域来做拆分。业务关联紧密的功能单元应该做成一个微应用。一个判断业务关联是否紧密的标准：看这个微应用与其它微应用是否有频繁的通信需求。

```js
1. 参数
// app - 微应用配置列表
  name: 'react16',   // string 必填，微应用的名称，微应用之间必须确保唯一
  entry: '//localhost:7100',   // string 必填，微应用的入口；
  container: '#subapp-viewport',  // string | HTMLElement 必填，微应用的容器节点的选择器或Element实例;
  props：object，可选，主应用需要传递给微应用的数据；

// configuration - 可选，微应用的配置信息
  sandbox - boolean | { strictStyleIsolation?: boolean, experimentalStyleIsolation?: boolean } - 可选，是否开启沙箱，默认为 true
  singular - boolean | ((app: RegistrableApp<any>) => Promise<boolean>); - 可选，是否为单实例场景，单实例指的是同一时间只会渲染一个微应用。默认为 false。
  fetch - Function - 可选，自定义的 fetch 方法。
  getPublicPath - (entry: Entry) => string - 可选，参数是微应用的 entry 值。
  getTemplate - (tpl: string) => string - 可选
  excludeAssetFilter - (assetUrl: string) => boolean - 可选，指定部分特殊的动态加载的微应用资源（css/js) 不被 qiankun 劫持处理
}
支持更多的其他配置，详细看这里 https://qiankun.umijs.org/zh/api/#start-opts

2. 返回一个微应用实例
  mount(): Promise<null>;
  unmount(): Promise<null>;
  update(customProps: object): Promise<any>;
  getStatus(): | "NOT_LOADED" | "LOADING_SOURCE_CODE" | "NOT_BOOTSTRAPPED" | "BOOTSTRAPPING" | "NOT_MOUNTED" | "MOUNTING" | "MOUNTED" | "UPDATING" | "UNMOUNTING" | "UNLOADING" | "SKIP_BECAUSE_BROKEN" | "LOAD_ERROR";
  loadPromise: Promise<null>;
  bootstrapPromise: Promise<null>;
  mountPromise: Promise<null>;
  unmountPromise: Promise<null>;

3. 用法
手动加载一个微应用。
如果需要能支持主应用手动 update 微应用，需要微应用 entry 再多导出一个 update 钩子：

export async function mount(props) {
  renderApp(props);
}

// 增加 update 钩子以便主应用手动更新微应用
export async function update(props) {
  renderPatch(props);
}

4. 示例
import { loadMicroApp } from 'qiankun';
import React from 'react';

class App extends React.Component {
  containerRef = React.createRef();
  microApp = null;
  componentDidMount() {
    this.microApp = loadMicroApp({
      name: 'app1',
      entry: '//localhost:1234',
      container: this.containerRef.current,
      props: { brand: 'qiankun' },
    });
  }

  componentWillUnmount() {
      this.microApp.unmount();
  }

  componentDidUpdate() {
      this.microApp.update({ name: 'kuitos' });
  }

  render() {
    return <div ref={this.containerRef}></div>;
  }}


```

#####

# 2.umi---qiankun

### **2.1--基座主应用**

#### **2.1.1--注册 qiankun**

安装 yarn add @umijs/plugin-qiankun -D

```js
1. 注册子应用, 子应用注册有两种方式，二选一即可

// .umirc.ts,  直接在配置文件中写死路径
1.1 插件构建期配置子应用
qiankun: {
    master: {
      apps: [
        {
          name: 'app1',
          entry: '//localhost:7001',
        },
        {
          name: 'app2',
          entry: '//localhost:7002',
        },
      ],
    },
},

1.2 运行时动态配置子应用
// .umirc.ts
qiankun: {  master: { apps: [] } },

// 在入口文件中，从接口中获取子应用配置，export 出的 qiankun 变量是一个 promise
export const qiankun = fetch('/config').then(({ apps }) => ({
  // 注册子应用信息
  apps,
  // 完整生命周期钩子请看 https://qiankun.umijs.org/zh/api/#registermicroapps-apps-lifecycles
  lifeCycles: {
    afterMount: (props) => {
      console.log(props);
    },
  },
  // 支持更多的其他配置，详细看这里 https://qiankun.umijs.org/zh/api/#start-opts
}))

```

#####

#### **2.1.2--装载子应用**

```js
一.  装载子应用
1. 路由绑定引入子应用。
2. <MicroApp /> 组件引入子应用。
3. <MicroAppWithMemoHistory /> 嵌套子应用。

1. 路由绑定引入子应用
// .umirc.ts
 routes: [
    { path: '/app1', microApp: 'app1' },
    { path: '/app2', microApp: 'app2' },
 ],

其他更多详情  https://umijs.org/docs/max/micro-frontend#%E8%BF%90%E8%A1%8C%E6%97%B6%E6%B3%A8%E5%86%8C%E5%AD%90%E5%BA%94%E7%94%A8


2. <MicroApp /> 组件引入子应用
// 建议使用这种方式来引入不带路由的子应用。 否则请自行关注微应用依赖的路由跟当前浏览器 url 是否能正确匹配上，否则很容易出现微应用加载了，但是页面没有渲染出来的情况。

import { MicroApp } from 'umi';

export function MyPage() {
  return (
    <div>
      <div>
         <MicroApp name="app1"   basename=“/page ” />
      </div>
    </div>
  )
}
// 使用该方式引入子应用时，父子应用的路由将一一对应，例如当父应用路由为 /page 时，子应用路由同样变为 /page。

3. <MicroAppWithMemoHistory /> 嵌套子应用
在 App1 中加入 master 配置， * slave: {}配置需要保留
export default {
  qiankun: {
    master: {
      apps: [{ name: 'app3',   entry: '//localhost:7003'}], // 微应用app3
    },
  },
};

import { MicroAppWithMemoHistory } from 'umi';
export function MyPage() {
  return (
    <div>
      <div>
          <MicroAppWithMemoHistory name="app3" url="/user" />
      </div>
    </div>
  )
}

```

### **2.2--子应用**

#### **2.2.1--注册 qiankun**

```js
1. 注册qiankun
// .umirc.ts
qiankun: { slave: {}},

2. 配置package.json
{ *  "name": "app1,app1..." }

3.在入口文件导出生命周期
export const qiankun = {
  // 应用加载之前
  async bootstrap(props) {
    console.log('app1 bootstrap', props);
  },
  // 应用 render 之前触发
  async mount(props) {
    console.log('app1 mount', props);
  },
  // 应用卸载之后触发
  async unmount(props) {  console.log('app1 unmount', props)},
};

```

### **2.3--父子应用通信**

#### **2.3.1-- 基于 useModel() 的通信。这是 Umi 推荐的解决方案**

```js

1. 基座主应用
如果通过路由的模式引入子应用，则需要在父应用的 src/app.ts 里导出一个名为 useQiankunStateForSlave() 的函数，该函数的返回值将传递给子应用：
// src/app.ts
export function useQiankunStateForSlave() {
  const [globalState, setGlobalState] = useState<any>({
    slogan: 'Hello MicroFrontend',
  });
  return {
    globalState,
    setGlobalState,
  };
}

2.子应用消费数据
import { useModel } from 'umi'；
export default () => {
  const masterProps = useModel('@@qiankunStateFromMaster');
  return <div>{JSON.stringify(masterProps)}</div>;
};

```

#### **2.3.2 -- 通过 props 传递参数**

```js
1. 基于配置的通信;
// src/app.ts
1. 基座主应用
export const qiankun = {
  apps: [
    {
      name: 'app1',
      entry: '//localhost:7001',
      props: {
        accountOnClick: (event) => console.log(event),
        accountName: 'Alex',
        accountAge: 21,
      },
    },
  ],
};

```

# 3. 应用部署

### **3.1 -- 单一端口部署**

```js
1. 注：各服务中umirc.js文件修改
publicPath:'/app1/',   public都修改为/微前端名字/,即使package.json中name属性的配置值，例如:app1,app2..
runtimePublicPath: true,  umirc中runtimePublicPath设置为true时，打包后，按需加载时，会自动加载前缀public

2.注释掉按需加载的配置
//dynamicImport: {
//          webpackChunkName: true,
//          loadingComponent: './components/Loader/Loader',
//        },

3.theme文件夹中的iconfont.less文件，加上前缀，前缀和publicPath保持一致(app1,app2..)
@font-face {font-family: "iconfont";
  src: url('/微前端名字/fonts/iconfont.eot?t=1523418286790'); /* IE9*/
  src: url('/微前端名字/fonts/iconfont.eot?t=1523418286790#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('/微前端名字/fonts/iconfont.ttf?t=1523418286790') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('/微前端名字/fonts/iconfont.svg?t=1523418286790#iconfont') format('svg'); /* iOS 4.1- */
}

4.微前端entry后面要加上微前端名字，例如 ip:port/app1


```

### **3.2 -- 多端口部署**

```js
注：各服务中umirc.js文件修改

1.publicPath:'/',   public都修改为/

2.按需加载配置打开

dynamicImport: {
   webpackChunkName: true,
   loadingComponent: './components/Loader/Loader',
},

3.theme文件夹中的iconfont.less文件，去掉前缀(app1,app2...)
@font-face {font-family: "iconfont";
  src: url('/fonts/iconfont.eot?t=1523418286790'); /* IE9*/
  src: url('/fonts/iconfont.eot?t=1523418286790#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('/fonts/iconfont.ttf?t=1523418286790') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('/fonts/iconfont.svg?t=1523418286790#iconfont') format('svg'); /* iOS 4.1- */
}



```
