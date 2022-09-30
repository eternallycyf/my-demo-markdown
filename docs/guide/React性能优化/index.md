---
title: React性能优化
order: 1
nav:
  title: 前端之路
  order: 1
---

<Alert>待整理 整理后将移动到其他地方</Alert>

# React 性能优化

## 1.减少 render 次数

### shouldComponentUpdate PureComponent

```js
shouldComponentUpdate(nextProps,nextState) {
return !this.props.xxx === nextProps.xxx
}
// PureComponent 自动浅对比
```

### React.Memo

```js
// 1.当props变化的时候才会重新渲染 浅层对比
function Component(props) {}
const MyComponent = React.memo(Component);
// 2.自定义比较对比Props 如果相等返回true 否则返回false
function MyComponent(props) {}
export default React.memo(MyComponent, (prevProps, nextProps) => boolean);
```

## 2.减少函数的重新执行导致的渲染: useCallback

```js
<button onClick={props.onClick}>改标题</button>
// 组件的每次渲染都会重新创建一个新的函数 因此函数的引用地址发生了变化
// 函数会重新开始执行 倒是子组件重新渲染
// 解决办法就是在函数没有改变的时候，重新渲染的时候保持两个函数的引用一致
const memoizedCallback = useCallback(()=>{}, [])
<Child onClick={memoizedCallback} name="xxx" />
```

## 3.缓存计算量比较大的函数结果: useMemo

- 如果没有提供依赖项数组，useMemo 在每次渲染时都会计算新的值
- 计算量如果很小的计算函数，也可以选择不使用 useMemo，因为这点优化并不会作为性能瓶颈的要点，反而可能使用错误还会引起一些性能问题

```js
const base = useMemo(fn, []);
```

## 4.其他优化

### 1.在 render 渲染函数中不要进行复杂的副作用(数组排序 等等)

### 2.减少不必要的嵌套

### 3.虚拟列表

### 4.惰性渲染 && 惰性函数

### 5.减少使用箭头函数 => 实例方法

- 使用箭头函数的情况下，每次组件的重新渲染都创建新的事件处理程序，这会导致子组件重新渲染

```js
// 1.class
<ComplexComponent onClick={evt => onClick(evt.id)} otherProps={values} />;
class MyComponent extends Component {
  render() {
    <ComplexComponent onClick={this.handleClick} otherProps={values} />;
  }
  handleClick = () => {};
}
// 2.hooks 使用useCallback包裹
const handleClick = useCallback(() => {}, []);
return <ComplexComponent onClick={handleClick} otherProps={values} />;
// 3.当状态很多时候
function useRefProps<T>(props: T) {
  const ref = useRef < T > props;
  // 每次渲染更新props
  useEffect(() => {
    ref.current = props;
  });
}

function MyComp(props) {
  const propsRef = useRefProps(props);
  // 现在handleClick是始终不变的
  const handleClick = useCallback(() => {
    const { foo, bar, baz, bazz, bazzzz } = propsRef.current;
  }, []);
}
// 4.class需要bind的时候
// 不要这样 <input type="button" value="Click" onClick={this.handleButtonClick.bind(this)} />
<input type="button" value="Click" onClick={this.handleButtonClick} />;
  constructor() {
    this.state = {
      name: "Mayank"
    }
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

```

### 6.使用 Immutable.js

### 7.简化 state 和 props

- 不是所有数据都需要放在 state 里面
- 如果需要组件响应它的变动, 或者需要渲染到视图中的数据才应该放到 state 中
- 这样可以避免不必要的数据变动导致组件重新渲染

### 8.颗粒化组件

- vue 不需要 shouldComponentUpdate 会自动优化
- 但是如果太过耦合 只要要任意一个属性值变动就会重新渲染整个组件
- 应该将数据隔离抽取到单一职责的组件
- 越细粒度的组件，可以收获更高的性能优化效果

### 8.懒加载异步组件

- lazy Suspense
- 减少主包体积 减少网络带宽

```js
if (this.props.name == 'Mayank') {
  ComponentToLazyLoad = lazy(() => import('./mayankComponent'));
} else if (this.props.name == 'Anshul') {
  ComponentToLazyLoad = lazy(() => import('./anshulComponent'));
}
<div>
  <h1>This is the Base User: {this.state.name}</h1>
  <Suspense fallback={<div>Loading...</div>}>
    <ComponentToLazyLoad />
  </Suspense>
</div>;
```

### 8.用 Fragment 代替自己最外层写的元素

### 9.复杂变动的组件+Key

- 并不是只有 map 渲染的时候才能写 key

### 10.避免使用内联样式

- <b style={{"backgroundColor": "blue"}}>Welcome to Sample Page</b>

### 11.防流节抖

### 12.CDN

### 13.gzip 压缩

### 14.webpack 拆包
