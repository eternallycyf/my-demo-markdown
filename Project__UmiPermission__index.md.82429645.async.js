(self.webpackChunkmy_demo_markdown=self.webpackChunkmy_demo_markdown||[]).push([[872],{87923:function(m,s,a){"use strict";a.r(s);var o=a(12924),n=a.n(o),t=a(16924),e=a(53401);const l=n().memo(({demos:r})=>n().createElement(n().Fragment,null,n().createElement("div",{className:"markdown"},n().createElement("h2",{id:"umipermission"},n().createElement(t.AnchorLink,{to:"#umipermission","aria-hidden":"true",tabIndex:-1},n().createElement("span",{className:"icon icon-link"})),"UmiPermission"),n().createElement("h2",{id:"layout-\u5E03\u5C40"},n().createElement(t.AnchorLink,{to:"#layout-\u5E03\u5C40","aria-hidden":"true",tabIndex:-1},n().createElement("span",{className:"icon icon-link"})),"layout \u5E03\u5C40"),n().createElement("ul",null,n().createElement("li",null,".umirc.ts \u4E2D\u5F00\u542F\u7B80\u5355\u5168\u5C40\u6027\u914D\u7F6E")),n().createElement(e.Z,{code:`layout: {
    title: 'Ant Design',
    // \u9ED8\u8BA4\u5F00\u542F\uFF0C\u5982\u65E0\u9700\u83DC\u5355\u56FD\u9645\u5316\u53EF\u5173\u95ED
    locale: false,
    logo:"",
  },`,lang:"js"}),n().createElement("ul",null,n().createElement("li",null,"./src/app.js export \u4E00\u4E2A layout \u540D\u79F0\u7684\u7EC4\u4EF6\u3002\u8FD9\u91CC\u5199\u6240\u6709\u7684\u914D\u7F6E")),n().createElement(e.Z,{code:`export const layout = ({ initialState }) => {
  return {
    // \u95F4\u8DDD \u5207\u6362\u591A\u9875\u9762\u548C\u9762\u5305\u5C51\u6A21\u5F0F\u9700\u8981\u914D\u7F6E
    disableContentMargin: false,
    iconfontUrl: '/fonticon/iconfont.js',
    logout: () => {}, // do something
    // \u53F3\u4FA7\u83DC\u5355
    rightContentRender: () => <RightContent />,
    // \u53EF\u4EE5\u4E0D\u914D
    itemRender: (route, _params, routes, _paths) => {
      return <Link to={route.path}>{route.breadcrumbName}</Link>;
    },
    // \u6C34\u5370
    waterMarkProps: {
      content: initialState?.currentUser?.name,
    },
    onPageChange: () => {
      const { location } = history; // \u5982\u679C\u6CA1\u6709\u767B\u5F55\uFF0C\u91CD\u5B9A\u5411\u5230 login
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
};`,lang:"js"}),n().createElement("ul",null,n().createElement("li",null,"\u5B50\u8DEF\u7531\u81EA\u5B9A\u4E49 layout \u9875\u5934\u9875\u811A")),n().createElement(e.Z,{code:`// headerRender: false,
      // \u4E0D\u5C55\u793A\u9875\u811A
      footerRender: false,
      // \u4E0D\u5C55\u793A\u83DC\u5355
      menuRender: false,
      // // \u4E0D\u5C55\u793A\u83DC\u5355\u9876\u680F
      // menuHeaderRender: false,`,lang:"js"}),n().createElement("ul",null,n().createElement("li",null,"\u8DEF\u7531 demo")),n().createElement(e.Z,{code:`# \u5C42\u7EA7
.
\u251C\u2500\u2500 404.jsx
\u251C\u2500\u2500 index.less
\u251C\u2500\u2500 index.tsx
\u251C\u2500\u2500 marketing
\u2502\xA0\xA0 \u251C\u2500\u2500 matter
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2514\u2500\u2500 banner
\u2502\xA0\xA0 \u2502\xA0\xA0     \u251C\u2500\u2500 bannerDetail
\u2502\xA0\xA0 \u2502\xA0\xA0     \u2502\xA0\xA0 \u251C\u2500\u2500 index.jsx
\u2502\xA0\xA0 \u2502\xA0\xA0     \u2502\xA0\xA0 \u251C\u2500\u2500 index.less
\u2502\xA0\xA0 \u2502\xA0\xA0     \u2502\xA0\xA0 \u251C\u2500\u2500 model.js
\u2502\xA0\xA0 \u2502\xA0\xA0     \u2502\xA0\xA0 \u2514\u2500\u2500 service.js
\u2502\xA0\xA0 \u2502\xA0\xA0     \u251C\u2500\u2500 bannerEdit
\u2502\xA0\xA0 \u2502\xA0\xA0     \u2502\xA0\xA0 \u251C\u2500\u2500 index.jsx
\u2502\xA0\xA0 \u2502\xA0\xA0     \u2502\xA0\xA0 \u251C\u2500\u2500 index.less
\u2502\xA0\xA0 \u2502\xA0\xA0     \u2502\xA0\xA0 \u251C\u2500\u2500 model.js
\u2502\xA0\xA0 \u2502\xA0\xA0     \u2502\xA0\xA0 \u2514\u2500\u2500 service.js
\u2502\xA0\xA0 \u2502\xA0\xA0     \u251C\u2500\u2500 bannerOrder
\u2502\xA0\xA0 \u2502\xA0\xA0     \u2502\xA0\xA0 \u251C\u2500\u2500 components
\u2502\xA0\xA0 \u2502\xA0\xA0     \u2502\xA0\xA0 \u2502\xA0\xA0 \u2514\u2500\u2500 RenderContent
\u2502\xA0\xA0 \u2502\xA0\xA0     \u2502\xA0\xA0 \u2502\xA0\xA0     \u251C\u2500\u2500 index.jsx
\u2502\xA0\xA0 \u2502\xA0\xA0     \u2502\xA0\xA0 \u2502\xA0\xA0     \u2514\u2500\u2500 index.less
\u2502\xA0\xA0 \u2502\xA0\xA0     \u2502\xA0\xA0 \u251C\u2500\u2500 index.jsx
\u2502\xA0\xA0 \u2502\xA0\xA0     \u2502\xA0\xA0 \u251C\u2500\u2500 index.less
\u2502\xA0\xA0 \u2502\xA0\xA0     \u2502\xA0\xA0 \u251C\u2500\u2500 model.js
\u2502\xA0\xA0 \u2502\xA0\xA0     \u2502\xA0\xA0 \u2514\u2500\u2500 service.js
\u2502\xA0\xA0 \u2502\xA0\xA0     \u251C\u2500\u2500 components
\u2502\xA0\xA0 \u2502\xA0\xA0     \u2502\xA0\xA0 \u2514\u2500\u2500 Section
\u2502\xA0\xA0 \u2502\xA0\xA0     \u2502\xA0\xA0     \u251C\u2500\u2500 index.jsx
\u2502\xA0\xA0 \u2502\xA0\xA0     \u2502\xA0\xA0     \u2514\u2500\u2500 index.less
\u2502\xA0\xA0 \u2502\xA0\xA0     \u251C\u2500\u2500 index.jsx
\u2502\xA0\xA0 \u2502\xA0\xA0     \u251C\u2500\u2500 index.less
\u2502\xA0\xA0 \u2502\xA0\xA0     \u251C\u2500\u2500 model.js
\u2502\xA0\xA0 \u2502\xA0\xA0     \u251C\u2500\u2500 service.js
\u2502\xA0\xA0 \u2502\xA0\xA0     \u2514\u2500\u2500 utils.ts
\u2502\xA0\xA0 \u2514\u2500\u2500 preferential
\u2502\xA0\xA0     \u2514\u2500\u2500 activity
\u2502\xA0\xA0         \u251C\u2500\u2500 activityDetail
\u2502\xA0\xA0         \u2502\xA0\xA0 \u251C\u2500\u2500 index.jsx
\u2502\xA0\xA0         \u2502\xA0\xA0 \u251C\u2500\u2500 index.less
\u2502\xA0\xA0         \u2502\xA0\xA0 \u251C\u2500\u2500 model.js
\u2502\xA0\xA0         \u2502\xA0\xA0 \u2514\u2500\u2500 service.js
\u2502\xA0\xA0         \u251C\u2500\u2500 activityEdit
\u2502\xA0\xA0         \u2502\xA0\xA0 \u251C\u2500\u2500 index.jsx
\u2502\xA0\xA0         \u2502\xA0\xA0 \u251C\u2500\u2500 index.less
\u2502\xA0\xA0         \u2502\xA0\xA0 \u251C\u2500\u2500 model.js
\u2502\xA0\xA0         \u2502\xA0\xA0 \u2514\u2500\u2500 service.js
\u2502\xA0\xA0         \u251C\u2500\u2500 components
\u2502\xA0\xA0         \u2502\xA0\xA0 \u251C\u2500\u2500 RenderPublishTip
\u2502\xA0\xA0         \u2502\xA0\xA0 \u2502\xA0\xA0 \u2514\u2500\u2500 index.jsx
\u2502\xA0\xA0         \u2502\xA0\xA0 \u2514\u2500\u2500 TableList
\u2502\xA0\xA0         \u2502\xA0\xA0     \u2514\u2500\u2500 index.jsx
\u2502\xA0\xA0         \u251C\u2500\u2500 index.jsx
\u2502\xA0\xA0         \u251C\u2500\u2500 index.less
\u2502\xA0\xA0         \u251C\u2500\u2500 model.js
\u2502\xA0\xA0         \u251C\u2500\u2500 service.js
\u2502\xA0\xA0         \u2514\u2500\u2500 utils.ts
\u2514\u2500\u2500 user
    \u2514\u2500\u2500 Login
        \u251C\u2500\u2500 index.jsx
        \u251C\u2500\u2500 index.less
        \u2514\u2500\u2500 model.js`,lang:"js"}),n().createElement(e.Z,{code:`routes: [
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
      name: '\u8425\u9500\u4E2D\u5FC3',
      path: '/marketing',
      icon: 'icon-caidan-yingxiaozhongxin',
      // headerRender: false,
      // \u4E0D\u5C55\u793A\u9875\u811A
      footerRender: false,
      // \u4E0D\u5C55\u793A\u83DC\u5355
      menuRender: false,
      // // \u4E0D\u5C55\u793A\u83DC\u5355\u9876\u680F
      // menuHeaderRender: false,
      routes: [
        {
          name: '\u4F18\u60E0\u7BA1\u7406',
          path: '/marketing',
          redirect: '/marketing/preferential',
          hideInMenu: true,
        },
        {
          name: '\u4F18\u60E0\u7BA1\u7406',
          path: '/marketing/preferential',
          hideChildrenInMenu: true,
          routes: [
            {
              name: '\u4F18\u60E0\u6D3B\u52A8',
              path: '/marketing/preferential',
              redirect: '/marketing/preferential/activity',
              hideInMenu: true,
            },
            {
              name: '\u4F18\u60E0\u6D3B\u52A8',
              path: '/marketing/preferential/activity',
              hideChildrenInMenu: true,
              routes: [
                {
                  name: '\u4F18\u60E0\u6D3B\u52A8',
                  path: '/marketing/preferential/activity',
                  component: '@/pages/marketing/preferential/activity',
                },
                {
                  name: '\u65B0\u589E\u4F18\u60E0\u6D3B\u52A8',
                  path: '/marketing/preferential/activity/activityAdd',
                  component:
                    '@/pages/marketing/preferential/activity/activityEdit',
                },
                {
                  name: '\u7F16\u8F91\u4F18\u60E0\u6D3B\u52A8',
                  path: '/marketing/preferential/activity/activityEdit',
                  component:
                    '@/pages/marketing/preferential/activity/activityEdit',
                },
                {
                  name: '\u4F18\u60E0\u6D3B\u52A8\u8BE6\u60C5',
                  path: '/marketing/preferential/activity/activityDetail',
                  component:
                    '@/pages/marketing/preferential/activity/activityDetail',
                },
              ],
            },
          ],
        },
        {
          name: '\u7D20\u6750\u7BA1\u7406',
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
                  name: '\u8C03\u6574Banner\u987A\u5E8F',
                  path: '/marketing/matter/banner/bannerOrder',
                  component: '@/pages/marketing/matter/banner/bannerOrder',
                },
                {
                  name: '\u65B0\u589EBanner',
                  path: '/marketing/matter/banner/bannerAdd',
                  component: '@/pages/marketing/matter/banner/bannerEdit',
                },
                {
                  name: '\u7F16\u8F91Banner',
                  path: '/marketing/matter/banner/bannerEdit',
                  component: '@/pages/marketing/matter/banner/bannerEdit',
                },
                {
                  name: 'Banner\u8BE6\u60C5',
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
  ],`,lang:"js"}),n().createElement("h2",{id:"\u521D\u59CB\u5316\u6570\u636E\u83B7\u53D6\u6D41\u7A0B"},n().createElement(t.AnchorLink,{to:"#\u521D\u59CB\u5316\u6570\u636E\u83B7\u53D6\u6D41\u7A0B","aria-hidden":"true",tabIndex:-1},n().createElement("span",{className:"icon icon-link"})),"\u521D\u59CB\u5316\u6570\u636E\u83B7\u53D6\u6D41\u7A0B"),n().createElement("ul",null,n().createElement("li",null,"\u5728 ./src/app.ts \u4E2D export getInitialState \u65B9\u6CD5"),n().createElement("li",null,"\u8FD9\u662F\u521D\u59CB\u5316\u83B7\u53D6\u7684\u6570\u636E(\u7528\u6237\u4FE1\u606F token \u7B49\u7B49)")),n().createElement(e.Z,{code:`export const getInitialState = async () => {
  const fetchUserInfo = async () => {
    try {
      const user = await queryCurrentUser();
      return user.data;
    } catch (error) {
      console.error('\u91CD\u65B0\u767B\u9646');
    }
    return undefined;
  }; // \u5982\u679C\u662F\u767B\u5F55\u9875\u9762\uFF0C\u4E0D\u6267\u884C
  // \u5982\u679C\u662F\u767B\u5F55\u9875\u9762\uFF0C\u4E0D\u6267\u884C
  const currentUser = await fetchUserInfo();
  return {
    fetchUserInfo,
    currentUser,
    settings: {},
  };
};`,lang:"js"}),n().createElement(e.Z,{code:`# \u4F7F\u7528\u65B9\u5F0F
import { useModel } from 'umi';
  const {
    initialState, // \u5728app.ts export getInitialState
    loading,
    error,
    refresh,
    setInitialState
  } =
    useModel('@@initialState');`,lang:"js"}),n().createElement("h2",{id:"\u6743\u9650\u7BA1\u7406"},n().createElement(t.AnchorLink,{to:"#\u6743\u9650\u7BA1\u7406","aria-hidden":"true",tabIndex:-1},n().createElement("span",{className:"icon icon-link"})),"\u6743\u9650\u7BA1\u7406"),n().createElement(e.Z,{code:`# 1.\u5728./src/app.ts\u91CC\u9762export\u4E86 \u83B7\u53D6\u521D\u59CB\u5316\u6570\u636E\u7684\u65B9\u6CD5
# 2.\u5728 ./src/access.ts \u4F1A\u81EA\u52A8\u6CE8\u5165\u521D\u59CB\u5316\u7684\u6570\u636E \u5728\u8FD9\u91CC\u914D\u7F6E\u8DEF\u7531\u548C\u6309\u94AE\u6743\u9650\u6C60
export default function (initialState) {
  const menu = initialState?.menu?.split(',') ?? [];
  const parentMenu = initialState?.parentMenu?.split(',') ?? [];
  const authList = [...parentMenu, ...menu];
  return {
    // \u83DC\u5355\u6743\u9650
    routeAccess: (route) => {
      return authList.includes(route.role);
    },
    // \u6309\u94AE\u6743\u9650
    moduleAccess: (foo) => {
      return authList.includes(foo);
    },
  };
}
# 3.\u9875\u9762\u8BBE\u7F6E\u6309\u94AE\u6743\u9650
import { useAccess } from 'umi';
const access = useAccess();
if (access.canReadFoo) {
   // \u5982\u679C\u53EF\u4EE5\u8BFB\u53D6 Foo\uFF0C\u5219...
}
# 4.\u914D\u7F6E\u8DEF\u7531\u6743\u9650 \u901A\u8FC7\u9AD8\u9636\u7EC4\u4EF6 ./src/wrappers/auth.tsx
import { useModel, Redirect } from 'umi';

export default (props) => {
  const { initialState } = useModel('@@initialState');
  if (initialState) {
    return <div>{props.children}</div>;
  } else {
    return <Redirect to="/user/login" />;
  }
};
# \u8DEF\u7531\u8BBE\u7F6E\u6743\u9650 ./umirc.ts => routes
  {
      name: '\u65E5\u6E05\u65E5\u7ED3\u9A7E\u9A76\u8231',
      path: '/dayClearDayOver',
      icon: 'icon-jiashicang',
      component: '@/pages/dayClearDayOver',
      wrappers: ['@/wrappers/auth'], // \u662F\u5426\u9A8C\u8BC1\u6743\u9650
      access: 'routeAccess',    // \u6743\u9650code
      role: 'dayClearDayOver',  // \u89D2\u8272code
    },`,lang:"js"}),n().createElement("h2",{id:"\u767B\u5F55\u6D41\u7A0B"},n().createElement(t.AnchorLink,{to:"#\u767B\u5F55\u6D41\u7A0B","aria-hidden":"true",tabIndex:-1},n().createElement("span",{className:"icon icon-link"})),"\u767B\u5F55\u6D41\u7A0B"),n().createElement("ul",null,n().createElement("li",null,"\u8FD9\u4E2A\u90FD\u662F\u81EA\u5DF1\u5199\u7684")),n().createElement(e.Z,{code:`#
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
# ./src/user/login`,lang:"js"}),n().createElement("h2",{id:"\u53F3\u4E0A\u89D2\u9000\u51FA\u6D41\u7A0B"},n().createElement(t.AnchorLink,{to:"#\u53F3\u4E0A\u89D2\u9000\u51FA\u6D41\u7A0B","aria-hidden":"true",tabIndex:-1},n().createElement("span",{className:"icon icon-link"})),"\u53F3\u4E0A\u89D2\u9000\u51FA\u6D41\u7A0B"),n().createElement(e.Z,{code:`# ./src/app.ts
export const layout = ({ initialState }) => {
  return {
    rightContentRender: () => <RightContent />,
    ...
  };
};

# ./src/components/RightContent/xxx`,lang:"js"}),n().createElement("h2",{id:"umi-\u90E8\u7F72"},n().createElement(t.AnchorLink,{to:"#umi-\u90E8\u7F72","aria-hidden":"true",tabIndex:-1},n().createElement("span",{className:"icon icon-link"})),"umi \u90E8\u7F72"),n().createElement(e.Z,{code:`# yarn build

# .umirc.ts
  base: '/',
  hash: true,

# \u6D4B\u8BD5
\u5728dist\u76EE\u5F55\u4E0B
npm i serve -g
serve

# \u914D\u7F6Enginx \u4EE3\u7406
        location / {
            root   html;
            index  index.html index.htm;
        }

        location /admin-site/ {
          proxy_pass https://platform-test.ococmall.com;
        }`,lang:"js"}),n().createElement(e.Z,{code:`#user  nobody;
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
        #location ~ \\.php$ {
        #    proxy_pass   http://127.0.0.1;
        #}

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        #location ~ \\.php$ {
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
        #    fastcgi_index  index.php;
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
        #    include        fastcgi_params;
        #}

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\\.ht {
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

}`,lang:"js"}))));s.default=r=>{const u=n().useContext(t.context),c=u.demos;return n().useEffect(()=>{var i;r!=null&&(i=r.location)!==null&&i!==void 0&&i.hash&&t.AnchorLink.scrollToAnchor(decodeURIComponent(r.location.hash.slice(1)))},[]),n().createElement(l,{demos:c})}}}]);
