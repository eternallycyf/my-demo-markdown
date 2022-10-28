---
title: my-demo - My various demo and bug summary
order: 10
hero:
  title: my-demo
  desc: 📖 My various demo and bug summary
  actions:
    - text: Vue-Markdown-demo
      link: http://wangxince.site/vue-markdown-demo/
    - text: Getting Started
      link: /guide
# features:
# - icon: https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png
# title: Out of the box
# desc: Elegant default configrations and convention routing assist developers to get started as simple as possible, that focus all attentions on developing libraries & writting docs
footer: Open-source MIT Licensed | Copyright © 2019-present<br />Powered by self
---

```tsx
/**
 * inline: true
 */
import React from 'react';
import Alert from '@/MyComponents/Alert';
import Marquee from 'react-fast-marquee';
export default () => (
  <Alert
    type="warning"
    message="Getting Started"
    description={
      <Marquee
        direction="left"
        speed={100}
        gradientColor={[]}
        gradientWidth={400}
        className="mymarquee"
        pauseOnHover
        pauseOnClick
        direction
      >
        All the gloom is left to the past, from the beginning of meeting you,
        the winter is gone, the Star River is bright!🎉 🎉 🎉
      </Marquee>
    }
  />
);
```
