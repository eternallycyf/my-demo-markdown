(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{sqxn:function(m,l,n){"use strict";n.r(l);var c=n("cDcd"),e=n.n(c),a=n("dEAq"),u=n.n(a),o=n("H1Ra");const r=e.a.memo(({demos:t})=>e.a.createElement(e.a.Fragment,null,e.a.createElement("div",{className:"markdown"},e.a.createElement("h1",{id:"ahooks"},e.a.createElement(a.AnchorLink,{to:"#ahooks","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Ahooks"),e.a.createElement("h2",{id:"\u51C6\u5907\u9636\u6BB5"},e.a.createElement(a.AnchorLink,{to:"#\u51C6\u5907\u9636\u6BB5","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u51C6\u5907\u9636\u6BB5"),e.a.createElement(o.a,{code:"yarn add ahooks",lang:"js"}),e.a.createElement("h2",{id:"api"},e.a.createElement(a.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"API"),e.a.createElement("h3",{id:"userequest"},e.a.createElement(a.AnchorLink,{to:"#userequest","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"useRequest"),e.a.createElement("h3",{id:"scene"},e.a.createElement(a.AnchorLink,{to:"#scene","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Scene"),e.a.createElement("h4",{id:"useantdtable"},e.a.createElement(a.AnchorLink,{to:"#useantdtable","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"useAntdTable"),e.a.createElement(o.a,{code:`const { tableProps, search } = useAntdTable(getTableData,{
  form?: any;
  // \u81EA\u5DF1\u5207\u6362\u8868\u5355\u5C55\u5F00\u6298\u53E0 \u7528 search.changeType \u63A7\u5236
  defaultType?: 'simple' | 'advance';
  defaultParams?: [pagination, formData],
  // \u9ED8\u8BA4\u5206\u9875\u6570\u91CF
  defaultPageSize?: number;
  // \u53D8\u5316\u5C31\u4F1A\u91CD\u65B0\u5230\u7B2C\u4E00\u9875\u91CD\u65B0\u8BF7\u6C42
  refreshDeps?: any[];
});
# useAntdTable(getTableData, {...} )

// getTableData \u662F\u7F51\u7EDC\u8BF7\u6C42\u51FD\u6570 \u76F8\u5F53\u4E8E onChange\u4E8B\u4EF6
// \u4ED6\u7684\u7B2C\u4E00\u4E2A\u5F62\u53C2\u662F\u4E2A {}  \u83B7\u53D6\u5230\u4E86 onChange\u7684\u4E00\u4E9B\u53C2\u6570
// \u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u4E2A\u5BF9\u8C61 \u76F8\u5F53\u4E8E form.getFieldsValue()
// \u8FD9\u4E2A\u51FD\u6570\u9700\u8981\u8FD4\u56DE
{
  list: [],
  total: 1,
}

// useAntdTable \u7B2C\u4E8C\u4E2A\u5F62\u53C2\u7528\u6765\u8BBE\u7F6E\u8868\u5355\u914D\u7F6E

# tableProps  search params
// tableProps
// \u5305\u62ECtable\u7684props\u5B57\u6BB5 \u8FD8\u6709search\u5BF9\u8C61
// params \u7B2C\u4E00\u4E2A\u53C2\u6570table \u7B2C\u4E8C\u4E2A\u662F\u8868\u5355
  search:{
    // \u5F53\u524D\u8868\u5355\u7C7B\u578B
    type: 'simple' | 'advance';
    // \u5207\u6362\u8868\u5355\u7C7B\u578B
    changeType: () => void;
    // \u63D0\u4EA4\u8868\u5355
    submit: () => void;
    // \u91CD\u7F6E\u8868\u5355
    reset: () => void;
  }
#
import { useAntdTable } from 'ahooks';
const [form] = Form.useForm();
const { tableProps,search,params } = useAntdTable(getTableData,{
  form,
  defaultPageSize: 5,
});
const columns = []

<Table
    columns={columns}
    rowKey="email"
    {...tableProps}
/>`,lang:"js"}),e.a.createElement("h4",{id:"usefusiontable"},e.a.createElement(a.AnchorLink,{to:"#usefusiontable","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"useFusionTable"),e.a.createElement(o.a,{code:`#

#
  const { paginationProps, tableProps } = useFusionTable(getTableData);`,lang:"js"}))));l.default=t=>{const i=e.a.useContext(a.context),d=i.demos;return e.a.useEffect(()=>{var s;t!=null&&(s=t.location)!==null&&s!==void 0&&s.hash&&a.AnchorLink.scrollToAnchor(decodeURIComponent(t.location.hash.slice(1)))},[]),e.a.createElement(r,{demos:d})}}}]);
