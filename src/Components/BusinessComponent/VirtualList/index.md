---
order: 2
group:
  path: /my-components
  title: 封装的业务组件
  order: 2
---

## VirtualList

### VirtualListHook

<code src="./VirtualListHook/index.tsx" compact="true" transform="true" iframe="true" title='自定义布局' desc='缺点: 实际上一次性把最外层的 div 还是渲染了 内部是可视区渲染'></code>

<API src="./VirtualListHook/useVirtualList.tsx" exports='["IProps"]'></API>

### VirtualList

<code src="./VirtualList/index.tsx" compact="true" transform="true" iframe="true" title='一次只渲染 指定个数' desc='不支持 grid 需要自己对数据切割 然后自己栅格'></code>

<API src="./VirtualList/VirtualList.tsx" hideTitle></API>
