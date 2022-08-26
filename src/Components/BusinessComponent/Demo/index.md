---
order: 2
group:
  path: /my-components
  title: 封装的业务组件
  order: 2
---

## demo

```tsx
import React, { useState } from 'react';
import { Select, Input, Button, Tag, Form } from 'antd';

const { Option } = Select;

const App = () => {
  const [open, setOpen] = useState(false);
  const options = [
    { lable: 'jack', value: '1' },
    { lable: 'lucy', value: '2' },
    { lable: 'Yiminghe', value: '3' },
  ];
  return (
    <Select
      style={{ width: 300 }}
      open={open}
      onDropdownVisibleChange={visible => setOpen(visible)}
      dropdownRender={menu => {
        return (
          <>
            {options.map(item => (
              <Tag
                onClick={() => {
                  setOpen(false);
                }}
                key={item.value}
              >
                {item.lable}
              </Tag>
            ))}
          </>
        );
      }}
      options={options}
    />
  );
};

export default App;
```

<code src="./index.tsx"></code>

<API src="/index.tsx"></API>
