---
order: 2
group:
  path: /my-components
  title: 封装的业务组件
  order: 2
---

## CustomTooltip 溢出文字省略

### 1.省略文字组件-可设置自动换行-收起展开-指定最大行数

```tsx
import React from 'react';
import CustomTooltip from './CustomTooltip';
import { tagS, text } from './constant.tsx';
export default () => (
  <CustomTooltip
    col={24}
    text={tagS}
    row={{
      rows: 1,
      expend: true,
      EllipsisSymbol: true,
      lineMaxHeight: 22,
    }}
  />
);
```

### 2.自动换行

```tsx
import React from 'react';
import CustomTooltip from './CustomTooltip';
import { tagS, tagS2, text } from './constant.tsx';
export default () => (
  <CustomTooltip
    col={24}
    text={tagS2}
    row={{
      rows: 1,
      expend: true,
      EllipsisSymbol: true,
      lineMaxHeight: 22,
      isRight: false,
    }}
  />
);
```

### 3.收起展开按钮放置右侧

```tsx
import React from 'react';
import CustomTooltip from './CustomTooltip';
import { tagS, tagS2, text } from './constant.tsx';
export default () => (
  <CustomTooltip
    col={24}
    text={tagS2}
    row={{
      rows: 1,
      expend: true,
      EllipsisSymbol: false,
      lineMaxHeight: 22,
      isRight: true,
    }}
  />
);
```

### 4.文字处理

```tsx
import React from 'react';
import { Row, Col } from 'antd';
import CustomTooltip from './CustomTooltip';
import { tagS, tagS2, TEXT } from './constant.tsx';
export default () => (
  <Row gutter={10}>
    <CustomTooltip text={TEXT} copyable col={3} maxLength={3} />
    <CustomTooltip text={TEXT} copyable col={3} row={{ rows: 'autoSize' }} />
    <CustomTooltip
      text={TEXT}
      copyable
      col={4}
      row={{ rows: 3, expend: true }}
    />
    <CustomTooltip
      text={TEXT}
      copyable
      col={5}
      row={{ rows: 3, expend: false }}
    />
    <CustomTooltip
      text={TEXT}
      copyable
      col={6}
      row={{ rows: 'autoSize', EllipsisSymbol: false }}
    />
  </Row>
);
```

<API src="./CustomTooltip.tsx" exports='["IProps"]'></API>

<API src="./CustomTooltip.tsx" exports='["IRowProps"]'></API>
