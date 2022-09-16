---
order: 2
group:
  path: /file
  title: 文件的导出与预览
  order: 2
---

## 前端导出 word

```tsx
/**
 * inline: true
 */
import React from 'react';
import Alert from '@/MyComponents/Alert';
export default () => (
  <Alert
    type="warning"
    message={
      <a href="http://wangxince.site/node-script-router-inject-demo/#/file_export_word">
        由于dumi无法引入本地文件 请查看这个可以运行的demo
      </a>
    }
  />
);
```

<code src="./index.tsx"></code>
