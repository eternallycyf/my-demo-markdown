---
order: 9
nav:
  title: 前端之路
  path: /guide
---

# Ahooks

## 准备阶段

```js
yarn add ahooks
```

## API

### useRequest

### Scene

#### useAntdTable

```js
const { tableProps, search } = useAntdTable(getTableData,{
  form?: any;
  // 自己切换表单展开折叠 用 search.changeType 控制
  defaultType?: 'simple' | 'advance';
  defaultParams?: [pagination, formData],
  // 默认分页数量
  defaultPageSize?: number;
  // 变化就会重新到第一页重新请求
  refreshDeps?: any[];
});
# useAntdTable(getTableData, {...} )

// getTableData 是网络请求函数 相当于 onChange事件
// 他的第一个形参是个 {}  获取到了 onChange的一些参数
// 第二个参数是个对象 相当于 form.getFieldsValue()
// 这个函数需要返回
{
  list: [],
  total: 1,
}

// useAntdTable 第二个形参用来设置表单配置

# tableProps  search params
// tableProps
// 包括table的props字段 还有search对象
// params 第一个参数table 第二个是表单
  search:{
    // 当前表单类型
    type: 'simple' | 'advance';
    // 切换表单类型
    changeType: () => void;
    // 提交表单
    submit: () => void;
    // 重置表单
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
/>
```

#### useFusionTable

```js
#

#
  const { paginationProps, tableProps } = useFusionTable(getTableData);
```
