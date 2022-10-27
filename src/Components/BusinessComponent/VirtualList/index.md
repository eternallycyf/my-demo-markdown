---
order: 2
group:
  path: /my-components
  title: 封装的业务组件
  order: 2
---

## VirtualList

### VirtualList

- 一次只渲染 指定个数
- 不支持 grid 需要自己对数据切割 然后自己栅格
  <code src="./VirtualList/index.tsx" transform="true" iframe="true"></code>

### VirtualListHook

- 自定义布局
- 缺点: 实际上一次性把最外层的 div 还是渲染了 内部是可视区渲染
  <code src="./VirtualListHook/index.tsx" transform="true" iframe="true"></code>
