(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{FxTl:function(m,s,a){"use strict";a.r(s);var i=a("cDcd"),n=a.n(i),e=a("dEAq"),d=a.n(e),t=a("6T1g");const c=n.a.memo(({demos:r})=>n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h1",{id:"umi4"},n.a.createElement(e.AnchorLink,{to:"#umi4","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"umi4"),n.a.createElement(t.a,{code:"pnpm dlx create-umi@latest",lang:"js"}),n.a.createElement("h2",{id:"alias"},n.a.createElement(e.AnchorLink,{to:"#alias","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"alias"),n.a.createElement(t.a,{code:`alias: {
    src: path.resolve(__dirname, '.', './src/'),
    Components: path.resolve(__dirname, '.', 'src/Components/'),
    MyComponents: path.resolve(__dirname, '.', 'src/MyComponents/'),
    style: path.resolve(__dirname, '.', 'src/style/'),
  },

    from 'src'`,lang:"js"}),n.a.createElement("h2",{id:"umi-api"},n.a.createElement(e.AnchorLink,{to:"#umi-api","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"UMI-API"),n.a.createElement("h3",{id:"history"},n.a.createElement(e.AnchorLink,{to:"#history","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"history"),n.a.createElement(t.a,{code:`import { history } from 'umi';

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
# \u76D1\u542C\u8DEF\u7531
const unlisten = history.listen(({ location, action }) => {
  console.log(location.pathname);
});
unlisten();`,lang:"js"}),n.a.createElement("h3",{id:"link"},n.a.createElement(e.AnchorLink,{to:"#link","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Link"),n.a.createElement(t.a,{code:`<Link
  // string | {pathname:'',search:'',hash:''}
  to={}
  // \u76F8\u5F53\u4E8Ea\u94FE\u63A5
  reloadDocument={boolean}
  state={boolean}
  replace={boolean}
  // \u9884\u52A0\u8F7D\u76F8\u5173\u6587\u4EF6
  prefetch={boolean}
/>`,lang:"js"}),n.a.createElement("h3",{id:"navlink"},n.a.createElement(e.AnchorLink,{to:"#navlink","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"NavLink"),n.a.createElement(t.a,{code:"\u6FC0\u6D3B\u7684Link;",lang:"js"}),n.a.createElement("h2",{id:"umircts"},n.a.createElement(e.AnchorLink,{to:"#umircts","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),".umirc.ts"),n.a.createElement(t.a,{code:`import { defineConfig } from '@umijs/max';
export default defineConfig({

# \u529F\u80FD\u6027\u914D\u7F6E
// \u53EF\u4EE5\u8DF3\u8F6C\u5230\u6E90\u7801 option+click
  clickToComponent: {},
/* \u8DEF\u7531\u9884\u52A0\u8F7D\u6570\u636E \u89E3\u51B3\u7011\u5E03\u6D41\u95EE\u9898
import { useClientLoaderData } from 'umi';
const data = useClientLoaderData();
*/
  clientLoader: {},
// \u7ED9\u8DE8\u57DF\u63D0\u4F9B\u5B8C\u6574\u62A5\u9519\u4FE1\u606F script\u52A0\u4E0A crossorigin="anonymous"
  crossorigin: {}
// css\u538B\u7F29\u5DE5\u5177 esbuild, cssnano, parcelCSS, none \u4E0D\u538B\u7F29
  cssMinifier: 'esbuild'
// css\u538B\u7F29\u76F8\u5173\u914D\u7F6E
  cssMinifierOptions: {
    minifyWhitespace: true,
    minifySyntax: true,
  },
// \u5C06CSS\u53D8\u6210\u9A7C\u5CF0
   cssLoaderModules: {
     exportLocalsConvention: 'camelCase'
   }
// \u7EA6\u5B9A\u5F0F\u8DEF\u7531\u6392\u9664\u7684\u6587\u4EF6\u5939
  conventionRoutes: {
    exclude: [/\\/components\\//, /\\/models\\//],
  },
// \u590D\u5236\u5230dist\u76EE\u5F55 \u5C06./src/form\u4E0B\u9762\u6240\u6709\u4E1C\u897F\u590D\u5236\u5230dist/output\u4E0B
  copy: [
    { from: 'from', to: 'dist/output' },
    { from: 'file.json', to: 'dist' }
  ]
// \u9ED8\u8BA4\u4F1A\u79FB\u9664\u6CE8\u91CA
  jsMinifierOptions: {
    minifyWhitespace: true,
    minifyIdentifiers: true,
    minifySyntax: true,
  }

# \u5E38\u7528\u914D\u7F6E
  base: '/',
// \u5B9A\u4E49\u5168\u5C40\u53D8\u91CF console(foo) => console('bar')
  define: {
    foo: 'bar'
  },
  favicons: ['/assets/favicon.ico'],
// \u5F00\u542Fts\u68C0\u67E5
  forkTSChecker: { },
// \u89E3\u51B3build\u540E\u6D4F\u89C8\u5668\u7F13\u5B58\u95EE\u9898
  hash: false,
// \u5FFD\u7565Moment\u56FD\u9645\u5316
  ignoreMomentLocale: false,
// mfsu
  mfsu: true,
  mock: {},
  history: 'browser' | 'hash' | 'momory',
// <head> \u4E2D\u989D\u5916\u914D\u7F6E
  headScripts: [
    { src: '/foo.js', defer: true },
    { content: \`alert('\u4F60\u597D');\`, charset: 'utf-8' },
  ],
  links: [{ href: './xxx',rel:'preload' }],
  metas: [ {name:'', content:''}],
  proxy: {
    ...
  },
  publicPath: '/',
  theme: { '@primary-color': '#1DA57A' },
  routes: [],

// \u662F\u5426\u6709 sourcemap  eval\u6700\u5FEB source-map\u6700\u6162
  devtool: process.env.NODE_ENV === 'development' ? 'eval' : false,
  externals:{
    react: 'React',
  },
  scripts: ['...']


# \u5176\u4ED6\u63D2\u4EF6
// \u4FEE\u6539webpack\u914D\u7F6E
  chainWebpack(memoo,{env,webpack}){ }
// \u5904\u7406Babel\u7684npm\u5305
  extraBabelIncludes: [
     join(__dirname, '../../common'),
    'react-monaco-editor',
  ],
// \u914D\u7F6E\u989D\u5916\u7684babel\u63D2\u4EF6
   extraBabelPlugins: [ xxx,()=>xxx ]
// \u914D\u7F6E postCSS \u989D\u5916\u914D\u7F6E
   extraPostCSSPlugins: [ ]
//
  autoprefixer:{ flexbox:'no-2009' }
});`,lang:"js"}),n.a.createElement("h2",{id:"\u76EE\u5F55\u7ED3\u6784"},n.a.createElement(e.AnchorLink,{to:"#\u76EE\u5F55\u7ED3\u6784","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u76EE\u5F55\u7ED3\u6784"),n.a.createElement(t.a,{code:`// \u4FEE\u6539\u8DEF\u7531 \u9519\u8BEF\u5904\u7406 loading dva \u62E6\u622A\u5668
./src/app.ts
// \u7EA6\u5B9A\u7684\u9996\u9875\u4F4D\u7F6E /
./src/layouts/index.tsx
// 404 \u8C03\u8BD5\u65F6: /404
./src/404.js
// \u5168\u5C40\u6837\u5F0F
./src/global.less
// \u61D2\u52A0\u8F7D\u4E2D\u7684 loading
./src/loading.tsx
@ant-design/pro-layout/es/PageLoading
// \u6743\u9650\u6821\u9A8C
./src/wrapperes/auth.tsx`,lang:"js"}),n.a.createElement("h2",{id:"\u8DEF\u7531"},n.a.createElement(e.AnchorLink,{to:"#\u8DEF\u7531","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u8DEF\u7531"),n.a.createElement(t.a,{code:`routes: [
  {
    path: '/',
    title: '',
    component: 'index',
    redirect: '/list',
    wrappers: ['@/wrappers/auth'],
    // \u6743\u9650\u914D\u7F6E\uFF0C\u9700\u8981\u4E0E plugin-access \u63D2\u4EF6\u914D\u5408\u4F7F\u7528
    access: 'canRead',
    routes: [

    ],
    // \u6CA1\u6709\u5C31\u4E0D\u663E\u793A\u8BE5\u83DC\u5355
    name: '\u6B22\u8FCE',
    icon: 'testicon',
    target: '_blank',
    // \u4E0D\u5C55\u793A\u9876\u680F
    headerRender: false,
    // \u4E0D\u5C55\u793A\u9875\u811A
    footerRender: false,
    // \u4E0D\u5C55\u793A\u83DC\u5355
    menuRender: false,
    // \u4E0D\u5C55\u793A\u83DC\u5355\u9876\u680F
    menuHeaderRender: false,
    // \u9690\u85CF\u5B50\u83DC\u5355
    hideChildrenInMenu: true,
    // \u9690\u85CF\u81EA\u5DF1\u548C\u5B50\u83DC\u5355
    hideInMenu: true,
    // \u5728\u9762\u5305\u5C51\u4E2D\u9690\u85CF
    hideInBreadcrumb: true,
    // \u5B50\u9879\u5F80\u4E0A\u63D0\uFF0C\u4ECD\u65E7\u5C55\u793A,
    flatMenu: true,
  }
]
# \u83B7\u53D6\u8DEF\u7531\u53C2\u6570
// params pathname
const match = useMatch('/comp/:id')
// pathname search hash state
const location  = useLocation();
// \u52A8\u6001\u8DEF\u7531
const params  = useParams();
// query => /comp?a=b;
const [searchParams, setSearchParams] = useSearchParams();
searchParams.get('a')  // b
searchParams.toString()  // a=b`,lang:"js"}),n.a.createElement("h2",{id:"\u73AF\u5883\u53D8\u91CF"},n.a.createElement(e.AnchorLink,{to:"#\u73AF\u5883\u53D8\u91CF","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u73AF\u5883\u53D8\u91CF"),n.a.createElement(t.a,{code:`# ./env
// \u6307\u5B9A\u7AEF\u53E3
PORT=3000
// \u53D6\u6D88babel\u7F13\u5B58
BABEL_CACHE=none
# cross-env \u8DE8\u64CD\u4F5C\u7CFB\u7EDF\u64CD\u4F5C\u73AF\u5883\u53D8\u91CF

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
  },`,lang:"js"}),n.a.createElement("h2",{id:"layout"},n.a.createElement(e.AnchorLink,{to:"#layout","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"layout"),n.a.createElement(t.a,{code:`# ./umirc.ts
  layout: {
    title: 'Ant Design',
    // \u9ED8\u8BA4\u5F00\u542F\uFF0C\u5982\u65E0\u9700\u83DC\u5355\u56FD\u9645\u5316\u53EF\u5173\u95ED
    locale: false,
    logo:"",
    // \u9000\u51FA\u767B\u5F55\u7684\u903B\u8F91
    logout:(initialState: any) => void,
    // \u5C55\u793A\u7528\u6237\u540D\u3001\u5934\u50CF\u3001\u9000\u51FA\u767B\u5F55\u76F8\u5173\u7EC4\u4EF6
    rightRender: (initialState: any) => React.ReactNode
    pageTitleRender: false,
    contentWidth: 'Fluid',
    navTheme: 'light',
  },`,lang:"js"}),n.a.createElement(t.a,{code:`# ./src/app.tsx
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

/** \u83B7\u53D6\u7528\u6237\u4FE1\u606F\u6BD4\u8F83\u6162\u7684\u65F6\u5019\u4F1A\u5C55\u793A\u4E00\u4E2A loading */

export const initialStateConfig = {
  loading: <PageLoading />,
};

export const getInitialState = async () => {
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
};

// umi-request error\u5904\u7406
export const request = {
  requestInterceptors: [requestInterceptors],
  credentials: 'include', // \u628A\u8FD9\u884C\u52A0\u4E0A\uFF0C\u8BF7\u6C42\u4F1A\u81EA\u52A8\u5E26\u4E0Acookie\u7B49\u6570\u636E
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
};`,lang:"js"}),n.a.createElement("h2",{id:"\u6743\u9650\u6D41\u7A0B"},n.a.createElement(e.AnchorLink,{to:"#\u6743\u9650\u6D41\u7A0B","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u6743\u9650\u6D41\u7A0B"),n.a.createElement(t.a,{code:`# \u521D\u59CB\u5316\u6570\u636E \u5728 ./src/app.ts\u4E2D\u5BFC\u51FA getInitialState \u65B9\u6CD5
export const getInitialState = async () => {
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
};

# src/access.ts
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

  {
    path: '/pageA',
    component: 'PageA',
    access: 'canReadPageA', // \u6743\u9650\u5B9A\u4E49\u8FD4\u56DE\u503C\u7684\u67D0\u4E2A key
  },


# usemodel \u4F7F\u7528\u521D\u59CB\u5316\u6570\u636E
import { useModel } from 'umi';
  const {
    initialState, // \u5728app.ts export getInitialState
    loading,
    error,
    refresh,
    setInitialState
  } =
    useModel('@@initialState');
// \u4F7F\u7528\u522B\u7684\u547D\u540D\u7A7A\u95F4\u7684\u6570\u636E
useModel('xxx',()=>{
  \u66F4\u65B0
})

# useAccess \u6309\u94AE\u6743\u9650\u63A7\u5236
import { useAccess } from 'umi';
const access = useAccess();
if (access.canReadFoo) {
   // \u5982\u679C\u53EF\u4EE5\u8BFB\u53D6 Foo\uFF0C\u5219...
}

# wrapper \u8DEF\u7531\u6743\u9650\u6821\u9A8C

import { useModel, Redirect, Outlet } from 'umi';
export default (props) => {
  const { initialState } = useModel('@@initialState');
  if (initialState) {
    return <Outlet />;
  } else {
    return <Redirect to="/user/login" />;
  }
};`,lang:"js"}),n.a.createElement("h2",{id:"\u62E6\u622A\u5668"},n.a.createElement(e.AnchorLink,{to:"#\u62E6\u622A\u5668","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u62E6\u622A\u5668"),n.a.createElement(t.a,{code:`src / app.ts;
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
};`,lang:"js"}),n.a.createElement("h2",{id:"\u5176\u4ED6"},n.a.createElement(e.AnchorLink,{to:"#\u5176\u4ED6","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5176\u4ED6"),n.a.createElement("h3",{id:"react-\u591A\u9875\u7B7E"},n.a.createElement(e.AnchorLink,{to:"#react-\u591A\u9875\u7B7E","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"react \u591A\u9875\u7B7E"),n.a.createElement(t.a,{code:`#
https://github.com/fangzhengjin/umi-plugin-panel-tabs
https://github.com/MudOnTire/antd-pro-page-tabs
npm i umi-plugin-panel-tabs
#
  panelTab: {
    use404: true,
    useAuth: true,
    autoI18n: true,
    // \u6253\u5F00\u591A\u5C11\u9875\u7B7E\u65F6\u5F39\u51FA\u63D0\u793A
    tabsLimit: 10,
    // \u9632\u6296\u65F6\u95F4
    tabsLimitWait: 500,
    tabsLimitWarnTitle: '\u63D0\u793A',
    tabsLimitWarnContent: '\u60A8\u5F53\u524D\u6253\u5F00\u9875\u9762\u8FC7\u591A, \u8BF7\u5173\u95ED\u4E0D\u4F7F\u7528\u7684\u9875\u9762\u4EE5\u51CF\u5C11\u5361\u987F!',
    tabsBarBackgroundColor: '#FFFFFF',
    tabsTagColor: '#1890ff',
  },
#
 \u5F53route\u5177\u6709name\u5C31\u4F1A\u663E\u793A\u9875\u7B7E
 \u6DFB\u52A0hideInPanelTab:true \u5C31\u9690\u85CF\u9875\u7B7E`,lang:"js"}))));s.default=r=>{const l=n.a.useContext(e.context),u=l.demos;return n.a.useEffect(()=>{var o;r!=null&&(o=r.location)!==null&&o!==void 0&&o.hash&&e.AnchorLink.scrollToAnchor(decodeURIComponent(r.location.hash.slice(1)))},[]),n.a.createElement(c,{demos:u})}}}]);
