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

- DebounceSelect

```tsx | pure
import { Select, Spin, SelectProps } from 'antd';
import { debounce } from 'lodash';
import React, { useMemo, useState, useRef } from 'react';

export interface DebounceSelectProps<ValueType = any>
  extends Omit<SelectProps<ValueType | ValueType[]>, 'options' | 'children'> {
  fetchOptions: (search: string) => Promise<ValueType[]>;
  debounceTimeout?: number;
  setOptions: (options: ValueType[]) => void;
}

function DebounceSelectOrigin<
  ValueType extends {
    key?: string;
    label: React.ReactNode;
    value: string | number;
  } = any
>({
  fetchOptions,
  debounceTimeout = 800,
  setOptions,
  ...props
}: DebounceSelectProps<ValueType>) {
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
      allowClear
      showSearch
      filterOption={false}
      onSearch={debounceFetcher}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      {...props}
    />
  );
}

export default DebounceSelectOrigin;
```

- index.tsx

```tsx | pure
import { request } from 'umi';
import projectConfig from '@/config/projectConfig';
import DebounceSelect from './DebounceSelectct';
import Select from 'antd';
import React, { useState, useEffect } from 'react';
const { apiPrefix } = projectConfig;

interface Iprops {
  placeholder?: any;
  fetchConfig?: {
    method?: 'get' | 'post';
    dictConfig?: { label: string; value: string; key?: string };
    params?: any;
    data?: string;
    url?: string;
    searchKey?: string;
    dataPath?: string;
    renderItem?: (
      data: any,
    ) => { label: string; value: string | number; key?: string | number };
    firstInit?: boolean;
    openDebounceSearch?: boolean;
    dict?: any;
  };
  [props: string]: any;
}

export function baseFetchFn({
  method = 'get',
  params = {},
  data = {},
  url = '',
  searchKey = 'kw',
  searchValue = '',
}): Promise<any> {
  const methodType = method.toLocaleLowerCase() == 'get' ? 'get' : 'post';
  const paramsObj =
    methodType == 'get'
      ? { params: { ...params, [searchKey]: searchValue } }
      : { data: { ...data, [searchKey]: searchValue } };
  return request[methodType](`${url}`, {
    ...paramsObj,
  });
}

const DebounceSelect: React.FC<Iprops> = props => {
  const { placeholder = '请选择', fetchConfig = {}, ...restProps } = props;
  const [options, setOptions] = useState<any[]>([]);
  let newFetchConfig = {
    method: fetchConfig?.method || 'get',
    dictConfig: fetchConfig?.dictConfig
      ? fetchConfig.dictConfig
      : { label: 'label', value: 'value', key: 'key' },
    params: fetchConfig?.params || {},
    data: fetchConfig?.data || {},
    url: fetchConfig?.url || '',
    searchKey: fetchConfig?.searchKey || 'kw',
    dataPath: fetchConfig?.dataPath || 'data',
    renderItem: fetchConfig?.renderItem || undefined,
    firstInit: fetchConfig?.firstInit || true,
    openDebounceSearch: fetchConfig?.openDebounceSearch || false,
    dict: fetchConfig?.dict || false,
  };

  const fetchOptions = async (searchValue: string = '') => {
    const res = await baseFetchFn({ ...newFetchConfig, searchValue });
    const data = res[newFetchConfig.dataPath];
    if (newFetchConfig?.renderItem) {
      return newFetchConfig.renderItem(data);
    }
    return data.map((item: any) => ({
      label: item[newFetchConfig.dictConfig?.label],
      value: item[newFetchConfig.dictConfig?.value],
      key:
        item[newFetchConfig.dictConfig?.key!] ||
        item[newFetchConfig.dictConfig?.value],
    }));
  };

  const handleInitPage = async () => {
    if (newFetchConfig?.dict) return false;
    if (newFetchConfig?.firstInit) {
      const options = await fetchOptions('');
      setOptions(options);
    }
  };

  useEffect(() => {
    handleInitPage();
  });

  if (!newFetchConfig.openDebounceSearch) {
    return (
      <Select
        labelInValue
        allowClear
        showSearch
        optionFilterProp="children"
        filterOption={(input: any, option: any) =>
          (option?.label ?? '').toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        options={newFetchConfig.dict == false ? options : newFetchConfig.dict}
        {...props}
      />
    );
  }

  return (
    <DebounceSelect
      options={options}
      fetchOptions={fetchOptions}
      setOptions={setOptions}
      placeholder={placeholder}
      {...restProps}
    />
  );
};
```

- use

```tsx | pure
<Form.Item>
  <DebounceSelect
    fetchConfig={{
      dictConfig: { label: 'itemComment', value: 'subEntry' },
      url: `${baseUrl}/ims/dict/11111`,
      dataPath: 'data',
      method: 'get',
    }}
    placeholder="请选择"
  />
  // <DebounceSelect
  //   fetchConfig={{
  //     dictConfig: { label: 'itemComment', value: 'subEntry' },
  //     url: `${baseUrl}/ims/getBranchList`,
  //     dataPath: 'data',
  //     searchKey: 'search',
  //     method: 'get',
  //     renderItem: data => {
  //       return data.map(item => ({
  //         label: `${item.branchCode} - ${item.branchName}`,
  //         value: item.branchCode,
  //       }));
  //     },
  //   }}
  //   placeholder="请选择"
  // />

  // <DebounceSelect
  //   fetchConfig={{
  //     dict: [
  //       { label:'zhangsan', value:1 },
  //       { label:'ls', value:2}
  //     ]
  //   }}
  //   placeholder="请选择"
  // />
</Form.Item>
```
