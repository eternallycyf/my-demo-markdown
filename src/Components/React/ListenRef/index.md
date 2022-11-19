---
order: 1
group:
  path: /react
  title: react技巧
  order: 1
---

## ListenRef 监听 ref

- https://zh-hans.reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node

```tsx | pure
import { useCallback } from 'react';

const myComponent = () => {
  const elemRef = useCallback((node: HTMLDivElement) => {
    if (node !== null) {
      // do stuff here
    }
  }, []);

  return (
    <div id="base-element">
      <div id="element" ref={elemRef}></div>
    </div>
  );
};

export default myComponent;
```
