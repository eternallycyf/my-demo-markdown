(self.webpackChunkmy_demo_markdown=self.webpackChunkmy_demo_markdown||[]).push([[1194],{60095:function(d,l,a){"use strict";a.r(l);var c=a(12924),e=a.n(c),n=a(16924),o=a(53401);const r=e().memo(({demos:t})=>e().createElement(e().Fragment,null,e().createElement("div",{className:"markdown"},e().createElement("h1",{id:"ahooks"},e().createElement(n.AnchorLink,{to:"#ahooks","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"Ahooks"),e().createElement("h2",{id:"\u51C6\u5907\u9636\u6BB5"},e().createElement(n.AnchorLink,{to:"#\u51C6\u5907\u9636\u6BB5","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u51C6\u5907\u9636\u6BB5"),e().createElement(o.Z,{code:"yarn add ahooks",lang:"js"}),e().createElement("h2",{id:"api"},e().createElement(n.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"API"),e().createElement("h3",{id:"userequest"},e().createElement(n.AnchorLink,{to:"#userequest","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"useRequest"),e().createElement("h3",{id:"scene"},e().createElement(n.AnchorLink,{to:"#scene","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"Scene"),e().createElement("h4",{id:"useantdtable"},e().createElement(n.AnchorLink,{to:"#useantdtable","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"useAntdTable"),e().createElement(o.Z,{code:`const { tableProps, search } = useAntdTable(getTableData,{
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
/>`,lang:"js"}),e().createElement("h4",{id:"usefusiontable"},e().createElement(n.AnchorLink,{to:"#usefusiontable","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"useFusionTable"),e().createElement(o.Z,{code:`#

#
  const { paginationProps, tableProps } = useFusionTable(getTableData);`,lang:"js"}))));l.default=t=>{const i=e().useContext(n.context),m=i.demos;return e().useEffect(()=>{var s;t!=null&&(s=t.location)!==null&&s!==void 0&&s.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(t.location.hash.slice(1)))},[]),e().createElement(r,{demos:m})}}}]);
