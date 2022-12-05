---
order: 2
group:
  path: /my-components
  title: 封装的业务组件
  order: 2
---

## Select 多选展示风格

<code src="./index.tsx"  title='展开的select' desc='当选择人员时更加清晰'></code>

<API src="/index.tsx"></API>

## 自适应宽度的 el-select

### 1.React

- antd-select 默认就是自适应的

### 2.vue

```js
<template>
  <div style="margin: 80px">
    <el-select class="autowidth-sel" v-model="value" :clearable="true">
      <template slot="prefix">
        {{ (options.find(s => s.value === value) || {}).label }}
      </template>
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option> </el-select
    >1111
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      options: [
        {
          value: '选项1',
          label: '黄金糕',
        },
        {
          value: '选项2',
          label:
            '双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶',
        },
        {
          value: '选项3',
          label: '蚵仔煎蚵仔煎蚵仔煎蚵仔煎',
        },
        {
          value: '选项4',
          label: '龙须',
        },
        {
          value: '选项5',
          label: '北京烤鸭北京烤鸭',
        },
      ],
    };
  },
};
</script>
<style scoped>
.autowidth-sel {
  min-width: 120px;
}
.autowidth-sel >>> .el-input__prefix {
  position: relative;
  left: 0px;
  box-sizing: border-box;
  border: 1px solid #ffffff00;
  padding: 0 30px;
  height: 40px;
  line-height: 40px;
  visibility: hidden;
}
.autowidth-sel >>> input {
  position: absolute;
}
</style>
```

## DebounceSelect

```tsx | pure
import { Select, Spin } from 'antd';
import type { SelectProps } from 'antd/es/select';
import debounce from 'lodash/debounce';
import React, { useMemo, useRef, useState } from 'react';

export interface DebounceSelectProps<ValueType = any>
  extends Omit<SelectProps<ValueType | ValueType[]>, 'options' | 'children'> {
  fetchOptions: (search: string) => Promise<ValueType[]>;
  debounceTimeout?: number;
}

function DebounceSelect<
  ValueType extends { key?: string; label: React.ReactNode; value: string | number } = any,
>({
  fetchOptions,
  debounceTimeout = 800,
  setOptions,
  ...props }: DebounceSelectProps<ValueType>) {
  const [fetching, setFetching] = useState(false);
  const fetchRef = useRef(0);

  const debounceFetcher = useMemo(() => {
    const loadOptions = (value: string) => {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;
      setOptions([]);
      setFetching(true);

      fetchOptions(value).then(newOptions => {
        if (fetchId !== fetchRef.current) {
          // for fetch callback order
          return;
        }

        setOptions(newOptions);
        setFetching(false);
      });
    };

    return debounce(loadOptions, debounceTimeout);
  }, [fetchOptions, debounceTimeout]);

  return (
    <Select
      labelInValue
      filterOption={false}
      showSearch
      onSearch={debounceFetcher}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      {...props}
    />
  );
}
```

- use

```tsx | pure
type ILableInValue = {
  label: string;
  value: string;
};
async function fetchUserList(kw: string): Promise<ILableInValue> {
  const { data } = await getList({ kw });
  return data.map((item: any) => ({
    label: item.name,
    value: item.id,
  }));
}

const [options, setOptions] = useState<any[]>([]);
<Form.Item>
  <DebounceSelect
    placeholder="请输入"
    labelInValue
    allowClear
    options={options}
    fetchOptions={fetchUserList}
    onChange={}
    setOptions={setOptions}
  />
</Form.Item>;
```
