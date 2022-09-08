---
order: 6
group:
  path: /umi_permission
  title: UmiPermission
---

## UmiPermission

## layout 布局

- .umirc.ts 中开启简单全局性配置

```js
  layout: {
    title: 'Ant Design',
    // 默认开启，如无需菜单国际化可关闭
    locale: false,
    logo:"",
  },
```

- ./src/app.js export 一个 layout 名称的组件。这里写所有的配置

```js
export const layout = ({ initialState }) => {
  return {
    // 间距 切换多页面和面包屑模式需要配置
    disableContentMargin: false,
    iconfontUrl: '/fonticon/iconfont.js',
    logout: () => {}, // do something
    // 右侧菜单
    rightContentRender: () => <RightContent />,
    // 可以不配
    itemRender: (route, _params, routes, _paths) => {
      return <Link to={route.path}>{route.breadcrumbName}</Link>;
    },
    // 水印
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

- 子路由自定义 layout 页头页脚

```js
      // headerRender: false,
      // 不展示页脚
      footerRender: false,
      // 不展示菜单
      menuRender: false,
      // // 不展示菜单顶栏
      // menuHeaderRender: false,
```

- 路由 demo

```js
# 层级
.
├── 404.jsx
├── index.less
├── index.tsx
├── marketing
│   ├── matter
│   │   └── banner
│   │       ├── bannerDetail
│   │       │   ├── index.jsx
│   │       │   ├── index.less
│   │       │   ├── model.js
│   │       │   └── service.js
│   │       ├── bannerEdit
│   │       │   ├── index.jsx
│   │       │   ├── index.less
│   │       │   ├── model.js
│   │       │   └── service.js
│   │       ├── bannerOrder
│   │       │   ├── components
│   │       │   │   └── RenderContent
│   │       │   │       ├── index.jsx
│   │       │   │       └── index.less
│   │       │   ├── index.jsx
│   │       │   ├── index.less
│   │       │   ├── model.js
│   │       │   └── service.js
│   │       ├── components
│   │       │   └── Section
│   │       │       ├── index.jsx
│   │       │       └── index.less
│   │       ├── index.jsx
│   │       ├── index.less
│   │       ├── model.js
│   │       ├── service.js
│   │       └── utils.ts
│   └── preferential
│       └── activity
│           ├── activityDetail
│           │   ├── index.jsx
│           │   ├── index.less
│           │   ├── model.js
│           │   └── service.js
│           ├── activityEdit
│           │   ├── index.jsx
│           │   ├── index.less
│           │   ├── model.js
│           │   └── service.js
│           ├── components
│           │   ├── RenderPublishTip
│           │   │   └── index.jsx
│           │   └── TableList
│           │       └── index.jsx
│           ├── index.jsx
│           ├── index.less
│           ├── model.js
│           ├── service.js
│           └── utils.ts
└── user
    └── Login
        ├── index.jsx
        ├── index.less
        └── model.js
```

```js
  routes: [
    {
      path: '/user',
      layout: false,
      routes: [
        {
          path: '/user/login',
          layout: false,
          name: 'login',
          component: './user/Login',
        },
      ],
    },
    { path: '/', redirect: '/cockpit' },
    {
      name: '营销中心',
      path: '/marketing',
      icon: 'icon-caidan-yingxiaozhongxin',
      // headerRender: false,
      // 不展示页脚
      footerRender: false,
      // 不展示菜单
      menuRender: false,
      // // 不展示菜单顶栏
      // menuHeaderRender: false,
      routes: [
        {
          name: '优惠管理',
          path: '/marketing',
          redirect: '/marketing/preferential',
          hideInMenu: true,
        },
        {
          name: '优惠管理',
          path: '/marketing/preferential',
          hideChildrenInMenu: true,
          routes: [
            {
              name: '优惠活动',
              path: '/marketing/preferential',
              redirect: '/marketing/preferential/activity',
              hideInMenu: true,
            },
            {
              name: '优惠活动',
              path: '/marketing/preferential/activity',
              hideChildrenInMenu: true,
              routes: [
                {
                  name: '优惠活动',
                  path: '/marketing/preferential/activity',
                  component: '@/pages/marketing/preferential/activity',
                },
                {
                  name: '新增优惠活动',
                  path: '/marketing/preferential/activity/activityAdd',
                  component:
                    '@/pages/marketing/preferential/activity/activityEdit',
                },
                {
                  name: '编辑优惠活动',
                  path: '/marketing/preferential/activity/activityEdit',
                  component:
                    '@/pages/marketing/preferential/activity/activityEdit',
                },
                {
                  name: '优惠活动详情',
                  path: '/marketing/preferential/activity/activityDetail',
                  component:
                    '@/pages/marketing/preferential/activity/activityDetail',
                },
              ],
            },
          ],
        },
        {
          name: '素材管理',
          path: '/marketing/matter',
          hideChildrenInMenu: true,
          routes: [
            {
              name: 'Banner',
              path: '/marketing/matter',
              redirect: '/marketing/matter/banner',
              hideInMenu: true,
            },
            {
              name: 'Banner',
              path: '/marketing/matter/banner',
              hideChildrenInMenu: true,
              routes: [
                {
                  name: 'Banner',
                  path: '/marketing/matter/banner',
                  component: '@/pages/marketing/matter/banner',
                },
                {
                  name: '调整Banner顺序',
                  path: '/marketing/matter/banner/bannerOrder',
                  component: '@/pages/marketing/matter/banner/bannerOrder',
                },
                {
                  name: '新增Banner',
                  path: '/marketing/matter/banner/bannerAdd',
                  component: '@/pages/marketing/matter/banner/bannerEdit',
                },
                {
                  name: '编辑Banner',
                  path: '/marketing/matter/banner/bannerEdit',
                  component: '@/pages/marketing/matter/banner/bannerEdit',
                },
                {
                  name: 'Banner详情',
                  path: '/marketing/matter/banner/bannerDetail',
                  component: '@/pages/marketing/matter/banner/bannerDetail',
                },
              ],
            },
          ],
        },
      ],
    },
    { component: '@/pages/404' },
  ],
```

## 初始化数据获取流程

- 在 ./src/app.ts 中 export getInitialState 方法
- 这是初始化获取的数据(用户信息 token 等等)

```js
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
```

```js
# 使用方式
import { useModel } from 'umi';
  const {
    initialState, // 在app.ts export getInitialState
    loading,
    error,
    refresh,
    setInitialState
  } =
    useModel('@@initialState');
```

## 权限管理

```js
# 1.在./src/app.ts里面export了 获取初始化数据的方法
# 2.在 ./src/access.ts 会自动注入初始化的数据 在这里配置路由和按钮权限池
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
# 3.页面设置按钮权限
import { useAccess } from 'umi';
const access = useAccess();
if (access.canReadFoo) {
   // 如果可以读取 Foo，则...
}
# 4.配置路由权限 通过高阶组件 ./src/wrappers/auth.tsx
import { useModel, Redirect } from 'umi';

export default (props) => {
  const { initialState } = useModel('@@initialState');
  if (initialState) {
    return <div>{props.children}</div>;
  } else {
    return <Redirect to="/user/login" />;
  }
};
# 路由设置权限 ./umirc.ts => routes
  {
      name: '日清日结驾驶舱',
      path: '/dayClearDayOver',
      icon: 'icon-jiashicang',
      component: '@/pages/dayClearDayOver',
      wrappers: ['@/wrappers/auth'], // 是否验证权限
      access: 'routeAccess',    // 权限code
      role: 'dayClearDayOver',  // 角色code
    },
```

## 登录流程

- 这个都是自己写的

```js
#
   {
      path: '/user',
      layout: false,
      routes: [
        {
          path: '/user/login',
          layout: false,
          name: 'login',
          component: './user/Login',
        },
      ],
    },
# ./src/user/login
```

## 右上角退出流程

```js
# ./src/app.ts
export const layout = ({ initialState }) => {
  return {
    rightContentRender: () => <RightContent />,
    ...
  };
};

# ./src/components/RightContent/xxx
```

## umi 部署

```js
# yarn build

# .umirc.ts
  base: '/',
  hash: true,

# 测试
在dist目录下
npm i serve -g
serve

# 配置nginx 代理
        location / {
            root   html;
            index  index.html index.htm;
        }

        location /admin-site/ {
          proxy_pass https://platform-test.ococmall.com;
        }
```

```js
#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;

    server {
        listen       80;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            root   html;
            index  index.html index.htm;
        }

        location /admin-site/ {
          proxy_pass https://platform-test.ococmall.com;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

        # proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        #location ~ \.php$ {
        #    proxy_pass   http://127.0.0.1;
        #}

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        #location ~ \.php$ {
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
        #    fastcgi_index  index.php;
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
        #    include        fastcgi_params;
        #}

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #    deny  all;
        #}
    }


    # another virtual host using mix of IP-, name-, and port-based configuration
    #
    #server {
    #    listen       8000;
    #    listen       somename:8080;
    #    server_name  somename  alias  another.alias;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}


    # HTTPS server
    #
    #server {
    #    listen       443 ssl;
    #    server_name  localhost;

    #    ssl_certificate      cert.pem;
    #    ssl_certificate_key  cert.key;

    #    ssl_session_cache    shared:SSL:1m;
    #    ssl_session_timeout  5m;

    #    ssl_ciphers  HIGH:!aNULL:!MD5;
    #    ssl_prefer_server_ciphers  on;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}

}
```
