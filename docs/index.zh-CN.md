---
title: my-demo - 我的各种demo及bug总结
order: 10
hero:
  title: my-demo
  desc: 📖 我的各种demo及bug总结
  actions:
    - text: 快速上手
      link: /zh-CN/guide
# features:
#   - icon: https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png
#     title: 开箱即用
#     desc: 考究的默认配置和约定式的目录结构，帮助开发者零成本上手，让所有注意力都能放在文档编写和组件开发上
footer: Open-source MIT Licensed | Copyright © 2019-present<br />Powered by self
---

```tsx
/**
 * inline: true
 */
import React from 'react';
import Alert from '@/MyComponents/Alert';
export default () => (
  <Alert
    type="warning"
    message="立即开始"
    description="所有晦暗都留给过往，从遇见你开始，凛冬散尽，星河长明！🎉 🎉 🎉"
  />
);
```
