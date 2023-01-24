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

## 概念

### 1.How does React know which state to return?

- useState 为什么要写在顶层
- https://codesandbox.io/s/63td7j?file=/index.js&utm_medium=sandpack

### 2.异步读取数据问题

- https://github.com/reactwg/react-18/discussions/21

### 3.[函数式组件与类组件有何不同？](https://overreacted.io/zh-hans/how-are-function-components-different-from-classes/)

## 已发布的 Api

### 1.useRef

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

### 3.useMemo

- 什么时候使用: 比如计算时间过长

```tsx | pure
console.time('filter array');
const visibleTodos = getFilteredTodos(todos, filter);
console.timeEnd('filter array');
```

## 实验中的

### 1.useEffectEvent

- 为什么使用它

  - [github-rfcs 地址](https://github.com/reactjs/rfcs/blob/useevent/text/0000-useevent.md#basic-example)

  - react 处理函数引用的方式

  ```tsx | pure
    <button onClick={props.onClick}>改标题</button>
    // 组件的每次渲染都会重新创建一个新的函数 因此函数的引用地址发生了变化
    // 函数会重新开始执行 倒是子组件重新渲染
    // 解决办法就是在函数没有改变的时候，重新渲染的时候保持两个函数的引用一致
    const memoizedCallback = useCallback(()=>{}, [])
    <Child onClick={memoizedCallback} name="xxx" />
  ```

* 由于闭包产生一个一个问题 在 useCallback 中读取的 state 永远是首次渲染时创建的闭包中的变量
* 解决方法
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

## 一些自定义 hook

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
