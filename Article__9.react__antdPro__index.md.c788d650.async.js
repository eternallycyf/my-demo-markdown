(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{Nksx:function(m,c,t){"use strict";t.r(c);var i=t("cDcd"),e=t.n(i),n=t("dEAq"),d=t.n(n),a=t("H1Ra");const s=e.a.memo(({demos:u})=>e.a.createElement(e.a.Fragment,null,e.a.createElement("div",{className:"markdown"},e.a.createElement("h1",{id:"ant-pro"},e.a.createElement(n.AnchorLink,{to:"#ant-pro","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Ant-Pro"),e.a.createElement("h2",{id:"\u51C6\u5907\u9636\u6BB5"},e.a.createElement(n.AnchorLink,{to:"#\u51C6\u5907\u9636\u6BB5","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u51C6\u5907\u9636\u6BB5"),e.a.createElement(a.a,{code:`yarn create umi app && tyarn add @umijs/preset-ui -D

yarn analyze`,lang:"js"}),e.a.createElement("h3",{id:"\u9879\u76EE\u7ED3\u6784"},e.a.createElement(n.AnchorLink,{to:"#\u9879\u76EE\u7ED3\u6784","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u9879\u76EE\u7ED3\u6784"),e.a.createElement(a.a,{code:`#
\u251C\u2500\u2500 config                   umi \u914D\u7F6E\uFF0C\u5305\u542B\u8DEF\u7531\uFF0C\u6784\u5EFA\u7B49\u914D\u7F6E
\u251C\u2500\u2500 mock                     \u672C\u5730\u6A21\u62DF\u6570\u636E
\u251C\u2500\u2500 public
\u2502   \u2514\u2500\u2500 favicon.png          favicon
\u251C\u2500\u2500 src
\u2502   \u251C\u2500\u2500 assets               \u672C\u5730\u9759\u6001\u8D44\u6E90
\u2502   \u251C\u2500\u2500 components           \u4E1A\u52A1\u901A\u7528\u7EC4\u4EF6
\u2502   \u251C\u2500\u2500 e2e                  \u96C6\u6210\u6D4B\u8BD5\u7528\u4F8B
\u2502   \u251C\u2500\u2500 layouts              \u901A\u7528\u5E03\u5C40
\u2502   \u251C\u2500\u2500 models               \u5168\u5C40 dva model
\u2502   \u251C\u2500\u2500 pages                \u4E1A\u52A1\u9875\u9762\u5165\u53E3\u548C\u5E38\u7528\u6A21\u677F
\u2502   \u251C\u2500\u2500 services             \u540E\u53F0\u63A5\u53E3\u670D\u52A1
\u2502   \u251C\u2500\u2500 utils                \u5DE5\u5177\u5E93
\u2502   \u251C\u2500\u2500 locales              \u56FD\u9645\u5316\u8D44\u6E90
\u2502   \u251C\u2500\u2500 global.less          \u5168\u5C40\u6837\u5F0F
\u2502   \u2514\u2500\u2500 global.ts            \u5168\u5C40 JS
\u251C\u2500\u2500 tests                    \u6D4B\u8BD5\u5DE5\u5177
\u251C\u2500\u2500 README.md
\u2514\u2500\u2500 package.json`,lang:"js"}),e.a.createElement("h3",{id:"\u57FA\u672C\u914D\u7F6E"},e.a.createElement(n.AnchorLink,{to:"#\u57FA\u672C\u914D\u7F6E","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u57FA\u672C\u914D\u7F6E"),e.a.createElement(a.a,{code:`# \u6807\u9898\u548C logo
./config/defaultSettings.ts`,lang:"JS"}),e.a.createElement("h3",{id:"\u9274\u6743\u6D41\u7A0B"},e.a.createElement(n.AnchorLink,{to:"#\u9274\u6743\u6D41\u7A0B","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u9274\u6743\u6D41\u7A0B"),e.a.createElement(a.a,{code:`1. src/app.ts \u4E2D\u5BFC\u51FA getInitialState \u65B9\u6CD5
   \u8FD9\u4E2A\u65B9\u6CD5\u7F51\u7EDC\u8BF7\u6C42 \u767B\u5F55\u7684\u7528\u6237\u4FE1\u606F
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
3. \u6743\u9650
@umijs/pulgin-access
\u8DEF\u7531
 wrappers: ['@/wrappers/auth'],
 access: 'routeAccess',
 role: 'backStageMaintain_message',
\u6309\u94AE
import {useAccess,Access} form 'umi'
const access = useAccess();
<Access
  accessible={ access.moduleAccess('\u6309\u94AE\u6743\u9650\u540D') }
/>`,lang:"js"}),e.a.createElement("h2",{id:"\u6743\u9650\u63A7\u5236"},e.a.createElement(n.AnchorLink,{to:"#\u6743\u9650\u63A7\u5236","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u6743\u9650\u63A7\u5236"),e.a.createElement("h3",{id:"\u9875\u9762\u52A0\u8F7D\u987A\u5E8F"},e.a.createElement(n.AnchorLink,{to:"#\u9875\u9762\u52A0\u8F7D\u987A\u5E8F","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u9875\u9762\u52A0\u8F7D\u987A\u5E8F"),e.a.createElement(a.a,{code:`./src/access.js
./src/wrappers/auth.js
\u6839\u8DEF\u5F84\u7684\u9875\u9762
./src/wrappers/auth.js
\u6309\u94AE\u6743\u9650
//\u91CD\u5B9A\u5411 \u5224\u65AD\u662F\u5426\u767B\u5F55 \u672A\u767B\u5F55\u5C31\u8DF3\u8F6C\u5230login \u5426\u5219\u8DF3\u56DE/
./src/root.jsx`,lang:"js"}),e.a.createElement("h3",{id:"\u8DEF\u7531\u5BFC\u822A\u5B88\u536B\u63A7\u5236\u662F\u5426\u767B\u5F55"},e.a.createElement(n.AnchorLink,{to:"#\u8DEF\u7531\u5BFC\u822A\u5B88\u536B\u63A7\u5236\u662F\u5426\u767B\u5F55","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u8DEF\u7531\u5BFC\u822A\u5B88\u536B\u63A7\u5236\u662F\u5426\u767B\u5F55"),e.a.createElement(a.a,{code:`# umirc.ts \u8DEF\u7531\u89C4\u5219\u52A0\u4E0A\u8FD9\u4E2A
 wrappers: ['@/wrappers/auth'],
# ./src/wrappers/auth  \u8DEF\u7531\u5BFC\u822A\u5B88\u536B
import { useModel, Redirect } from 'umi';
export default (props) => {
  const { initialState } = useModel('@@initialState');
  if (initialState) {
    return <div>{props.children}</div>;
  } else {
    return <Redirect to="/user/login" />;
  }
};`,lang:"js"}),e.a.createElement("h3",{id:"\u8DEF\u7531\u6743\u9650"},e.a.createElement(n.AnchorLink,{to:"#\u8DEF\u7531\u6743\u9650","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u8DEF\u7531\u6743\u9650"),e.a.createElement(a.a,{code:`# \u8DEF\u7531\u5143\u4FE1\u606F
 wrappers: ['@/wrappers/auth'],
 access: 'routeAccess',
 role: 'backStageMaintain_message',
# ./src/access.js \u9875\u9762\u5148\u8FDB\u5165\u8FD9\u91CC
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
}`,lang:"js"}),e.a.createElement("h3",{id:"\u6309\u94AE\u6743\u9650"},e.a.createElement(n.AnchorLink,{to:"#\u6309\u94AE\u6743\u9650","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u6309\u94AE\u6743\u9650"),e.a.createElement(a.a,{code:`\u5728\u767B\u5F55\u6210\u529F\u540E
\u7F51\u7EDC\u8BF7\u6C42\u7528\u6237\u6743\u9650\u6570\u636E
mixin \u6DF7\u5165\u65B9\u6CD5\u8FDB\u884C\u5224\u65AD

import {useAccess,Access} form 'umi'
const access = useAccess();
<Access
  accessible={ access.moduleAccess('\u6309\u94AE\u6743\u9650\u540D') }
/>`,lang:"js"}),e.a.createElement("h3",{id:"\u89D2\u8272\u6743\u9650"},e.a.createElement(n.AnchorLink,{to:"#\u89D2\u8272\u6743\u9650","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u89D2\u8272\u6743\u9650"),e.a.createElement(a.a,{code:"\u63A5\u53E3;",lang:"js"}),e.a.createElement("h3",{id:"api-\u6743\u9650\u63A7\u5236"},e.a.createElement(n.AnchorLink,{to:"#api-\u6743\u9650\u63A7\u5236","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"API \u6743\u9650\u63A7\u5236"),e.a.createElement(a.a,{code:"\u5728\u8BF7\u6C42\u62E6\u622A\u5668\u4E2D\u5904\u7406 axios\u547D\u4EE4",lang:"js"}),e.a.createElement("h2",{id:"\u7EC4\u4EF6"},e.a.createElement(n.AnchorLink,{to:"#\u7EC4\u4EF6","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u7EC4\u4EF6"),e.a.createElement("h3",{id:"\u4E0B\u8F7D"},e.a.createElement(n.AnchorLink,{to:"#\u4E0B\u8F7D","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u4E0B\u8F7D"),e.a.createElement(a.a,{code:`npm i @ant-design/pro-form --save
npm i @ant-design/pro-layout --save
npm i @ant-design/pro-table --save`,lang:"js"}),e.a.createElement("h3",{id:"\u9762\u5305\u5C51\u5BFC\u822A\u53CA\u6C34\u5370"},e.a.createElement(n.AnchorLink,{to:"#\u9762\u5305\u5C51\u5BFC\u822A\u53CA\u6C34\u5370","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u9762\u5305\u5C51\u5BFC\u822A\u53CA\u6C34\u5370"),e.a.createElement(a.a,{code:`import { PageContainer,WaterMark } from '@ant-design/pro-layout';
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
#`,lang:"js"}),e.a.createElement("h3",{id:"\u5C55\u5F00\u8868\u5355"},e.a.createElement(n.AnchorLink,{to:"#\u5C55\u5F00\u8868\u5355","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5C55\u5F00\u8868\u5355"),e.a.createElement(a.a,{code:"",lang:"js"}),e.a.createElement("h3",{id:"\u7B5B\u9009-table"},e.a.createElement(n.AnchorLink,{to:"#\u7B5B\u9009-table","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u7B5B\u9009 table"),e.a.createElement(a.a,{code:`<QueryFilter
  onFinish={async values => {
    console.log(values.name);
  }}
>
  <ProFormText name="name" label="\u5E94\u7528\u540D\u79F0" rules={[{ required: true }]} />
  <ProFormText name="creater" label="\u521B\u5EFA\u4EBA" />
  <ProFormSelect
    name="sex"
    label="\u6027\u522B"
    showSearch
    valueEnum={{
      man: '\u7537',
      woman: '\u5973',
    }}
  />
</QueryFilter>`,lang:"js"}),e.a.createElement("h3",{id:"\u6A21\u6001\u6846"},e.a.createElement(n.AnchorLink,{to:"#\u6A21\u6001\u6846","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u6A21\u6001\u6846"),e.a.createElement(a.a,{code:`import ProForm, { ModalForm } from '@ant-design/pro-form';

 <ModalForm
// \u6A21\u6001\u6846\u6807\u9898
 	title="\u65B0\u5EFA\u8868\u5355"
  width={200}
// \u63D0\u4EA4\u8868\u5355\u81EA\u52A8\u91CD\u7F6E
  destroyOnClose
// \u81EA\u52A8\u9009\u4E2D\u7B2C\u4E00\u9879\u8868\u5355
  autoFocusFirstInput

// \u6A21\u6001\u6846\u5916\u8868\u7684dom
	trigger={ReactNode}

// \u5176\u4ED6\u914D\u7F6E,\u4E0D\u652F\u6301visible
  modalProps={{
  	onCancel: ()=>xxx
  }}
// \u63D0\u4EA4\u6309\u94AE\u7684\u76F8\u5173\u914D\u7F6E
  submitter={{
     onSubmit:
     onReset:
     searchConfig:{}
     submitButtonProps:{}
     resetButtonProps:{}
     render:{}
  }}
// \u63D0\u4EA4\u8868\u5355\u65F6\u89E6\u53D1 \u8FD4\u56DEtrue\u4F1A\u5173\u95ED\u62BD\u5C49
  onFinish={boolean}
>

</ModalForm>`,lang:"js"}))));c.default=u=>{const o=e.a.useContext(n.context),l=o.demos;return e.a.useEffect(()=>{var r;u!=null&&(r=u.location)!==null&&r!==void 0&&r.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(u.location.hash.slice(1)))},[]),e.a.createElement(s,{demos:l})}}}]);
