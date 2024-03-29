---
title: React18
order: 1
nav:
  title: 前端之路
  order: 1
---

# [React18](https://beta.reactjs.org)

```tsx
/**
 * inline: true
 */
import React from 'react';
import Alert from '@/MyComponents/Alert';
export default () => (
  <Alert type="warning" message="待整理" description="整理后将移动到其他地方" />
);
```

## 一、概念

### 1.How does React know which state to return?

- useState 为什么要写在顶层
- https://codesandbox.io/s/63td7j?file=/index.js&utm_medium=sandpack

### 2.异步读取数据问题

- https://github.com/reactwg/react-18/discussions/21

### 3.[函数式组件与类组件有何不同？](https://overreacted.io/zh-hans/how-are-function-components-different-from-classes/)

### 4.自动批处理

- [Automatic batching for fewer renders in React 18](https://github.com/reactwg/react-18/discussions/21)

## 二、旧的 API

### 1.useRef

- 保持纯函数 最好不要再 render 阶段赋值 保持结果相同
- 如果很昂贵的消费 可以这样

```tsx | pure
const playerRef = useRef(null);
if (playerRef.current === null) {
  playerRef.current = new VideoPlayer();
}
```

- 存储多个

  - 使用 map 或数组等方式
  - https://codesandbox.io/s/zt4gd8?file=%2FApp.js&utm_medium=sandpack
  - http://wangxince.site/my-demo-markdown/components/react/muitiple-ref

- 使用 useCallback 监听 ref 变化

  - http://wangxince.site/my-demo-markdown/components/react/listen-ref
  - 或者直接不用 ref 直接用 useState 存 dom 节点

```tsx | pure
const [element, setElement] = useState(null);
useEffect(() => {
  if (!element) return;
  // do something with element
  return () => {
    // do something when element is removed
  };
}, [element]);
return <div ref={setElement} />;
```

- 删除 node
  - ref.current.remove()

### 2.useEffect

- 每次渲染都会重新执行

  - useEffect(()=>{})

- 只在第一次渲染时执行

  - 使用 ref 或本地变量存储 一个止回阀

- 全局或可变值可以是依赖项吗？

  - 例如 window.location.pathname ref.current.xxx
  - 更改它不会触发组件的重新渲染 因此 useEffect 设置依赖项不一定会触发 可以当改变值时候 通过 forceUpdate 强制触发
    - hooks 使用 useReducer
      - const [, forceUpdate] = useReducer(p => !p, false);
      - forceUpdate();
    - class 使用 this.forceUpdate
  - 如何监听

    - 使用 useCallback 监听 ref 变化
      - http://wangxince.site/my-demo-markdown/components/react/listen-ref
    - 使用 useSyncExternalStore

### 3.useLayoutEffect

- useLayoutEffect(setup, dependencies?)
- 在浏览器重新绘制屏幕之前触发
- 使用场景
  - 处理闪烁
  - 处理 Tooltip 等效果 如果区域不够 根据现在的高度 调整到其他地方
  - 阻止重绘

### 4.useMemo

- 什么时候使用: 比如计算时间过长 切换主题

```tsx | pure
console.time('filter array');
const visibleTodos = getFilteredTodos(todos, filter);
console.timeEnd('filter array');
```

### 5.useImperativeHandle

- useImperativeHandle(ref, createHandle, [deps])

## 三、新特性

### Suspense

- 基本用法

```tsx | pure
<Suspense fallback={<Loading />}>
  <SomeComponent />
</Suspense>
```

- 可以嵌套

```tsx | pure
<Suspense fallback={<Loading />}>
  <Biography />
  <Suspense fallback={<Skeleton />}>
    <Panel>
      <Albums />
    </Panel>
  </Suspense>
</Suspense>
```

- loading 期间使用上次的结果

```tsx | pure
export default function App() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  return (
    <>
      <label>
        Search albums:
        <input value={query} onChange={e => setQuery(e.target.value)} />
      </label>
      <Suspense fallback={<h2>Loading...</h2>}>
        <div style={{ opacity: isStale ? 0.5 : 1 }}>
          <SearchResults query={deferredQuery} />
        </div>
      </Suspense>
    </>
  );
}
```

- 对于嵌套优先级处理 使用 startTransition 标记为非堵塞处理 优先级比它高的先处理

  ```tsx | pure
  import { Suspense, startTransition, useTransition, useState } from 'react';
  export default function App() {
    const [query, setQuery] = useState('');
    // 可以直接使用 startTransition 也可以使用 useTransition 增加过渡处理
    const [isPending, startTransition] = useTransition();
    const handleOnChange = e => {
      startTransition(() => {
        setQuery(e.target.value);
      });
    };

    return (
      <>
        <label>
          Search albums:
          <input value={query} onChange={handleOnChange} />
        </label>
        <Suspense fallback={<h2>Loading...</h2>}>
          <div style={{ opacity: isStale ? 0.5 : 1 }}>
            <SearchResults query={deferredQuery} />
          </div>
        </Suspense>
      </>
    );
  }
  ```

- 错误边界功能

### Lazy

- 当使用 Lazy 进行懒加载时候 必须使用 Suspense 包裹 否则报错
- import { useState, Suspense, lazy } from 'react';
- const MarkdownPreview = lazy(() => import('./MarkdownPreview.js'));

### useSyncExternalStore

- const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot?)
- 订阅外部数据 window.location.pathname window.navigator.onLine 等

### useTransition

- - 在不阻塞 UI 的情况下更新状态。

```tsx | pure
const [isPending, startTransition] = useTransition();
startTransition(() => {
  setQuery(e.target.value);
});
```

### startTransition

- 在不阻塞 UI 的情况下更新状态。
- startTransition 与 非常相似 useTransition 但它不提供 isPending 标志来跟踪转换是否正在进行

### useDeferredValue

- 推迟更新的部分 生成延迟版的数据
- const deferredQuery = useDeferredValue(query);
- 需要 memo
- 和防抖节流的不同 它没有固定的延迟 如果用户设备好 将立即执行 否则将展示滞后的效果
- 延迟的重新渲染时可中断的

### useId

- 生成唯一 ID
- const id = useId()
- 可用于 label 与 表单的绑定生成唯一 id 与 key 的关联
- 只能在顶层 如果要循环生成 封装成子组件

### useInsertionEffect

- useInsertionEffect(setup, dependencies?)
- 用于 cssinjs 注入样式
- 在任何 dom 发生变化前执行

```tsx | pure
// Inside your CSS-in-JS library
let isInserted = new Set();
function useCSS(rule) {
  useInsertionEffect(() => {
    // As explained earlier, we don't recommend runtime injection of <style> tags.
    // But if you have to do it, then it's important to do in useInsertionEffect.
    if (!isInserted.has(rule)) {
      isInserted.add(rule);
      document.head.appendChild(getStyleForRule(rule));
    }
  });
  return rule;
}

function Button() {
  const className = useCSS('...');
  return <div className={className} />;
}
```

### createPortal

- import { createPortal } from 'react-dom';
- 将一些 dom 渲染到其他区域
- {createPortal(children, domNode)}

### flushSync(callback)

- import { flushSync } from 'react-dom';
- 确保了 DOM 立即更新

### useDebugValue

- 为自定义 hook 添加标签
- useDebugValue(isOnline ? 'Online' : 'Offline');
- useDebugValue(date, date => date.toDateString());

## 四、实验中的

### 1.useEffectEvent

- 为什么使用它
- 从 Effect 中读取最新的道具和状态而不对它们做出反应

* [github-rfcs 地址](https://github.com/reactjs/rfcs/blob/useevent/text/0000-useevent.md#basic-example)

* react 处理函数引用的方式

```tsx | pure
  <button onClick={props.onClick}>改标题</button>
  // 组件的每次渲染都会重新创建一个新的函数 因此函数的引用地址发生了变化
  // 函数会重新开始执行 倒是子组件重新渲染
  // 解决办法就是在函数没有改变的时候，重新渲染的时候保持两个函数的引用一致
  const memoizedCallback = useCallback(()=>{}, [])
  <Child onClick={memoizedCallback} name="xxx" />
```

- 由于闭包产生一个一个问题 在 useCallback 中读取的 state 永远是首次渲染时创建的闭包中的变量
- 解决方法
  - 1.用 ref 追踪最新值
  - 2.deps 数组中增加 counter
    - const memoizedCallback = useCallback(()=>{}, [count])
  - 3.改写逻辑 父组件主动触发事件 子组件纯函数处理事情

```tsx
import React, { useState, useCallback } from 'react';
const App = () => {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    console.log(count); // 如果不指定 count依赖 永远都是0
    setCount(count + 1);
  }, []);
  return (
    <div>
      {count}
      <button onClick={handleClick}>click</button>
    </div>
  );
};
export default App;
```

- useEvent 已经移除 目前 useEffectEvent 需要手动声明
- 不会返回稳定的引用，但仍然可以引用 useEffect 而无需在 dependencies 数组中指定它

  - before

```tsx | pure
function Page({ url }) {
  const { items } = useContext(ShoppingCartContext);
  const numberOfItems = items.length;

  useEffect(() => {
    logVisit(url, numberOfItems);
  }, [url]); // 🔴 React Hook useEffect has a missing dependency: 'numberOfItems'
  // ...
}
```

- to

```tsx | pure
function Page({ url }) {
  const { items } = useContext(ShoppingCartContext);
  const numberOfItems = items.length;

  const onVisit = useEffectEvent(visitedUrl => {
    logVisit(visitedUrl, numberOfItems);
  });

  useEffect(() => {
    onVisit(url);
  }, [url]); // ✅ All dependencies declared
  // ...
}
```

- 注意
  - 即使不传递参数 useEffectEvent 也可以获取
  - 如果有异步操作（onVisit 是异步的）就需要手动给 useEffectEvent 传递参数

```tsx | pure
const onVisit = useEffectEvent(() => {
  logVisit(url, numberOfItems);
});

useEffect(() => {
  onVisit();
}, [url]);
```

## 五、一些自定义 hook

### 1.useForceUpdate

```tsx | pure
import * as React from 'react';

export default function useForceUpdate() {
  const [, forceUpdate] = React.useReducer(x => x + 1, 0);
  return forceUpdate;
}
```

### 2.useStateCallback

- 类似 class 组件的 this.setState({}, callback)

```tsx | pure
import {
  SetStateAction,
  useCallback,
  useState,
  useEffect,
  useRef,
} from 'react';

const useStateCallback = (defaultVal: any) => {
  const [state, setState] = useState(defaultVal);
  const listenRef = useRef<any>(); //监听新状态的回调器
  const _setState = useCallback(
    (newVal: SetStateAction<any>, callback: Function) => {
      listenRef.current = callback;
      setState(newVal);
    },
    [],
  );
  useEffect(() => {
    if (listenRef.current) {
      listenRef.current(state);
    }
  }, [state]);

  return [state, _setState];
};

export default useStateCallback;
```

### 3.useSyncState

- 使用同步的 state

```tsx | pure
import * as React from 'react';
import useForceUpdate from './useForceUpdate';

type UseSyncStateProps<T> = readonly [() => T, (newValue: T) => void];

export default function useSyncState<T>(initialValue: T): UseSyncStateProps<T> {
  const ref = React.useRef<T>(initialValue);
  const forceUpdate = useForceUpdate();

  return [
    () => ref.current,
    (newValue: T) => {
      ref.current = newValue;
      // re-render
      forceUpdate();
    },
  ] as const;
}
```
