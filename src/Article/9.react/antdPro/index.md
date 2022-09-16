---
order: 9
nav:
  title: Article
  path: /article
---

# Ant-Pro

## 准备阶段

```js
yarn create umi app && tyarn add @umijs/preset-ui -D

yarn analyze
```

### 项目结构

```js
#
├── config                   umi 配置，包含路由，构建等配置
├── mock                     本地模拟数据
├── public
│   └── favicon.png          favicon
├── src
│   ├── assets               本地静态资源
│   ├── components           业务通用组件
│   ├── e2e                  集成测试用例
│   ├── layouts              通用布局
│   ├── models               全局 dva model
│   ├── pages                业务页面入口和常用模板
│   ├── services             后台接口服务
│   ├── utils                工具库
│   ├── locales              国际化资源
│   ├── global.less          全局样式
│   └── global.ts            全局 JS
├── tests                    测试工具
├── README.md
└── package.json
```

### 基本配置

```JS
# 标题和 logo
./config/defaultSettings.ts

```

### 鉴权流程

```js
1. src/app.ts 中导出 getInitialState 方法
   这个方法网络请求 登录的用户信息
2. src/auth
import {useModel,Redirect} from 'umi'
export default (props) => {
  const {
    initalState,
    loading,
    error,
    refresh,
    setInitalState,

  } = useModel('@@initialState')
  if (initialState) {
    return <div>{props.children}</div>;
    } else {
    return <Redirect to="/user/login" />;
  }
}
3. 权限
@umijs/pulgin-access
路由
 wrappers: ['@/wrappers/auth'],
 access: 'routeAccess',
 role: 'backStageMaintain_message',
按钮
import {useAccess,Access} form 'umi'
const access = useAccess();
<Access
  accessible={ access.moduleAccess('按钮权限名') }
/>
```

## 权限控制

### 页面加载顺序

```js
./src/access.js
./src/wrappers/auth.js
根路径的页面
./src/wrappers/auth.js
按钮权限
//重定向 判断是否登录 未登录就跳转到login 否则跳回/
./src/root.jsx
```

### 路由导航守卫控制是否登录

```js
# umirc.ts 路由规则加上这个
 wrappers: ['@/wrappers/auth'],
# ./src/wrappers/auth  路由导航守卫
import { useModel, Redirect } from 'umi';
export default (props) => {
  const { initialState } = useModel('@@initialState');
  if (initialState) {
    return <div>{props.children}</div>;
  } else {
    return <Redirect to="/user/login" />;
  }
};
```

### 路由权限

```js
# 路由元信息
 wrappers: ['@/wrappers/auth'],
 access: 'routeAccess',
 role: 'backStageMaintain_message',
# ./src/access.js 页面先进入这里
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
```

### 按钮权限

```js
在登录成功后
网络请求用户权限数据
mixin 混入方法进行判断

import {useAccess,Access} form 'umi'
const access = useAccess();
<Access
  accessible={ access.moduleAccess('按钮权限名') }
/>
```

### 角色权限

```js
接口;
```

### API 权限控制

```js
在请求拦截器中处理 axios命令
```

## 组件

### 下载

```js
npm i @ant-design/pro-form --save
npm i @ant-design/pro-layout --save
npm i @ant-design/pro-table --save
```

### 面包屑导航及水印

```js
import { PageContainer,WaterMark } from '@ant-design/pro-layout';
import { useModel } from 'umi';
const { initialState } = useModel('@@initialState');

<WaterMark
 content={initialState?.name + '(' + initialState?.userName + ')'}
>
<PageContainer
  className={styles.authority}
  loading={}
  extra={ReactNode}
>
</PageContainer>
</WaterMark>
# app.js
export const layout = () => {
  return {
    itemRender: (route, _params, routes, _paths) => {
      const last =
        routes[0].path === route.path ||
        routes[routes.length - 1].path === route.path;
      return last ? (
        <span>{route.breadcrumbName}</span>
      ) : (
        <Link to={route.path}>{route.breadcrumbName}</Link>
      );
    },
  };
};
#
```

### 展开表单

```js
```

### 筛选 table

```js
<QueryFilter
  onFinish={async values => {
    console.log(values.name);
  }}
>
  <ProFormText name="name" label="应用名称" rules={[{ required: true }]} />
  <ProFormText name="creater" label="创建人" />
  <ProFormSelect
    name="sex"
    label="性别"
    showSearch
    valueEnum={{
      man: '男',
      woman: '女',
    }}
  />
</QueryFilter>
```

### 模态框

```js
import ProForm, { ModalForm } from '@ant-design/pro-form';

 <ModalForm
// 模态框标题
 	title="新建表单"
  width={200}
// 提交表单自动重置
  destroyOnClose
// 自动选中第一项表单
  autoFocusFirstInput

// 模态框外表的dom
	trigger={ReactNode}

// 其他配置,不支持visible
  modalProps={{
  	onCancel: ()=>xxx
  }}
// 提交按钮的相关配置
  submitter={{
     onSubmit:
     onReset:
     searchConfig:{}
     submitButtonProps:{}
     resetButtonProps:{}
     render:{}
  }}
// 提交表单时触发 返回true会关闭抽屉
  onFinish={boolean}
>

</ModalForm>
```
