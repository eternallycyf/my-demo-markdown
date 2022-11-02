---
order: 9
nav:
  title: Article
  path: /article
---

# React

## 1 准备阶段

```js
# 自定义折叠区域
//#region
/#endregion
# 包裹根元素就会自动检查
<React.StrictMode> </React.StrictMode>
# yarn eject
暴露配置文件
# computed
get xxx(){
  return xxx
}
new 组件().xxx
```

### 为什么需要绑定 this

```js
# class如果调用静态或原型方法不指定this 变量进行赋值 默认undefiend
class obj{
  speak()
}
let speak  =  obj.speak
speak() // undefined
# 函数谁调用它 this执行谁
class内部遵循严格模式
当函数复制给变量 this就是undefined
匿名函数需要绑定 this
```

## 2 JSX

- 语法规范

```react
JSX语法 => JavaScript XML
     通过@babel/preset-react编译 => 脚手架
     只能有一个根节点
     推荐用小括号包裹JSX 避免JS自动插入分号bug
     驼峰命名
     {JavaScript表达式} => 表达式 map()  funtion()  demo()
     style={{backgroundColor: "violet" }}
     条件渲染 if-else  三元表达式 短路运算
     列表渲染 map(item=>(jsx))  key={item.id}不能用for他是语句
     标签首字母小写 转为html同名元素
     标签首字母大小 渲染组件
const title = <h1>hello-react<span>这是spn</span></h1>
ReactDOM.render(title, document.getElementById("root"))
```

- 特殊属性名

| 特殊属性名              | JSX 语法标签                   |     |
| ----------------------- | ------------------------------ | --- |
| class                   | className                      |     |
| for                     | htmlfor                        |     |
| tabindex                | tabIndex                       |     |
| checked                 | defaultChecked 第一次才有用    |     |
| dangerouslySetInnerHTML | ={{_html:'节点' }} 类似 v-html |     |

### API

| API                                                   | 描述                       | 其他 |
| ----------------------------------------------------- | -------------------------- | ---- |
| React.createElement('ele',eleAttributeObj,[,...node]) | {title: "标题" }           |      |
| React.Component{render(){ return }}                   |                            |      |
| ReactDOM.render(targetElement,mountDomObject)         |                            |      |
| React.createRef()                                     |                            |      |
| React. createContext()                                | Provider Consumer          |      |
| React.PureComponent                                   |                            |      |
| React.forwardRef                                      | 解决 HOC 组件传递 r 的问题 |      |

## 3 React 组件

### 创建组件

```react
# 函数组件
  - 函数名必须大写字母开头  // 如果是小写 babel会转换成字符串
  - 函数组件必须有返回值 表示组件结构
    - 返回值为 null 表示不渲染任何内容
function Hello() {
  return (
    <div>Hello-world</div>
  )
}
const Hello = () => <div>hello</div>
ReactDOM.render(<Hello />, document.getElementById('root'))
# 类组件
  - 类名称必须以大写字母开头
  - 类组件必须提供 render() 方法
  - render() 方法必须有返回值 表示该组件的结+构
class Hello extends React.Component {
  render() {
    return <div>hello</div>
  }
}
ReactDOM.render(<Hello />, document.getElementById('root'))
```

### 事件处理

```react
# 事件绑定  => 与原生DOM类似
  - on+事件名称={事件处理程序}
  - 采用驼峰命名法 => onClick
# 事件对象  => react中的事件对象叫 合成事件(对象)
  - 兼容所有浏览器 无需担心跨浏览器兼容性问题
  - 事件委托 => 高效   event => 默认参数
## 如果要同时传递e和参数  需要采用柯里化
onChange={this.changeCheckbox(id)}
changeCheckbox = (id) => {
    return (e) => {
      console.log(id, e);
    }
  }
## 或者这样
onChange={(e) => this.changeCheckbox(id,e)}
changeCheckbox = (id,e) => {
      console.log(id, e);
}
```

### this 指向

```react
# 事件处理程序中 this 的值为 undefined
# 因为函数内部开启严格模式 this就是undefined
1. 箭头函数  => 自身不绑定this 可以获取到setState
  <button onClick={() => this.handle()}>点击</button>
2. Function.prototype.bind()=>绑定事件处理程序的this和组件
      constructor () {
        super()
        this.handle = this.handle.bind(this)
      }
3. class 的实例方法  => 利用箭头函数形式的class实例方法
     handle = () => {
       this.setState({
         count: this.state.count + 1
       })
     }
```

### 表单处理

```react
# 非受控组件
通过ref属性获得表单的value
<input type='password' ref={c => this.passwordDOM = c} />
this.passwordDOM.value

# 受控组件
为表单设置name  绑定相同的onChange事件
通过e.target.type 判断是要 checked属性 还是 value 属性
最后通过属性名表达式 setState 进行更新
     this.setState({
          [e.target.name]: e.target.value
      })
 # 同时获取 e 和 事件传递的参数
 # 1.
 <input onChange={changeValue(username)} />
  changeValue = (username) => {
    return (e) => {
       console.log(e,username)
    }
  }
 # 2. event 默认最后一个接收
  <input onChange={(e) => changeValue(username,e)} />
   changeValue = (username,e) => {
       console.log(e,username)
  }
# 函数的柯里化
函数调用继续返回函数的方式 实现多次接收参数最后统一处理的函数编码形式
   function sum(a){
             return(b)=>{
                  return (c)=>{
                      return a+b+c
                             }
                           }
                        }
　　　　　　const result = sum(1)(2)(3)
          console.log(result);
```

### 生命周期

```react
# 只有 类组件 才有生命周期。
 1. 初始化阶段: 由ReactDOM.render()触发---初次渲染
							1.	constructor()
						  2.	getDerivedStateFromProps
						  3.	render()
				      4.	componentDidMount() 类似vue的 mounted
初始化state 为事件处理函数绑定this
开启定时器、发送网络请求、订阅消息
2. 更新阶段: 由组件内部this.setSate()或父组件重新render触发
			1.	getDerivedStateFromProps
          return null or state
			2.	shouldComponentUpdate() 返回布尔值决定是否渲染
			3.	render()
			4.	getSnapshotBeforeUpdate
	    5.	componentDidUpdate()
          发送网络请求  DOM操作
         注意：如果要setState() 必须放在一个if条件中
3. 卸载组件由ReactDOM.unmountComponentAtNode(dom元素)触发
import ReactDOM from 'react-dom'
import { unmountComponentAtNode } from 'react-dom';
 ReactDOM.unmountComponentAtNode(document.getElementById("root"))
还需要在componentWillUnmount中 关闭定时器等操作
	    1.	componentWillUnmount()
			   关闭定时器、取消订阅消息

# 操作其他副作用
componentDidUpdate

# 处理props state默认值
getDerivedStateFromProps

# 重置某些state
// 获取最新的Props
componentWillReceiveProps(nextProps, nextState)
```

### DIFF 算法 虚拟 DOM

```js
React 更新视图的思想是：只要 state 变化就重新渲染视图
部分更新  => 虚拟 DOM 配合 Diff 算法
#虚拟DOM：本质上就是一个JS对象
1. 创建一个虚拟DOM
2. 根据虚拟 DOM 生成真实 DOM
3. 当数据变化后 创建新的虚拟DOM
4. 与上一次得到的虚拟DOM  使 Diff 算法对比找不同 得到需要更新的内容。
5. 只将变化的内容更新到 DOM 中
```

## 4 三大属性

### state

```react
# state => 组件内部的私有数据 只能在组件内部使用 => this.state.xxx
# 函数组件需要 hooks
  - state的值是对象 表示一个组件中可以有多个数据
  class App extends React.Component {
    state = { count: 0 }
    constructor() {
      super()   # es6的规范  必须写
        this.state = {
          count: 0
        }
      }
  }
# this.setState({})  对象形式
     this.setState({
             count: this.state.count + 1
     },()=>这里的内容是同步的 在这里子传父)
# setState 函数形式
多次调用setState({})
执行的结果不正确 因为都是异步的 没有顺序
而使用setState((state,props)=>{xxx})
这种形式就对了 它也是异步 有顺序
使用这种形式就可以 直接立即拿到更新后的值  类似vue nextTick
    this.setState((state, props) => ({
      count: state.count + 1
    }), () => { 这里是更新后的数据 })
# state和Props 更新是异步的
顺序不一定 需要放到setState的回调函数中
```

### ref

```react
 #  字符串形式 废弃ing
 ref='自定义名称'
 this.refs.自定义名称 => 对应的dom元素
 #  回调形式
 // 内联函数的情况下 会render两次
 // 这种形式只渲染一次 ref={this.函数名} 函数名=(c)=>{this.xx=x}
  ref={(currentNode)=>{this.自定义名字 = currentNode}}
  //currentNode是自定义的
  简化版 ref={ c  => this.自定义名字 = c }
  this.自定义名字  => 取得dom对象
 #  createRef形式
 // 专人专用
   [this.]myRef  = React.createRef
  <input ref={this.myRef} />
  this.myRef.current.xxx

# ref 转发到内部
 constructor(props) {
   super(props);
   this.inputRef = React.createRef()
 }
<MyInput ref={this.inputRef}/>
const MyInput = React.forwardRef((props, ref) => {
  return (
    <input type="text" ref={ref} />
  )
})
```

### props

#### 外界传入

- props 不能改变指向

```js
# 外界传入组件 数据
<组件标签
自定义属性名='字符串类型变量'
自定义属性名={数值类型变量}
{...对象名}
 />
//原生js只能  {...obj} 克隆对象  ...obj这种语法不允许
//在react和babel的标签属性中 => ...对象名  可以被解析
# 函数组件 =>
函数设置自定义参数接收
=>    function(props)  =>  props.xxx
# 类组件  =>
只读  可任意类型参数
如果使用了constructor(props)   super(props)必须写
=>   this.props.xxx
```

#### 父子组件

```react
父组件内部  =>
<引用的子组件 自定义属性名={this.state.变量} />
子组件内部  =>
this.props.自定义属性名 在componentDidMount 里面传递
```

```react
子组件内部 => 定义一个点击事件 在他的内部
          this.props.自定义事件(传递的变量)
父组件内部 =>
          <引用的子组件 自定义事件={自定义接收的函数} />
          自定义接收的函数(变量) => {
                  console.log(变量)
          }
```

#### children

```react
# children 子节点  获取子组件的插槽
// parent
<children>
  {
    a => <div> {a} </div>,
    b : <div> {b} </div>
  }
</children>
//children 组件的内部
  return (
      <div >
        {props.children['a']}
        {props.children['b']}
      </div>
    )
 # React.children.map 会跳过错误的类型
  React.children.map(children,(child,index)=>{
const childElement = child as React.FunctionComponentElement<MenuItemProps>
  childElement.type
  })
 # React.cloneElement 可以加入属性及元素
 React.cloneElement(
   element,
   [props],
   [...children]
 )
```

#### render props

```js
# render props 插槽传值
// 在内部通过自定义事件 传值  然后自定义事件接受变量 并渲染
一般都用render作为自定义事件名

//Parent 组件
class App extends React.Component {
  xxx = (e) =>{
    return (
      <div>{e}</div>
    )
  }
  render (){
     <Children 自定义事件名={this.xxx}
  }
}
//Children 组件在render函数里面
{this.props.自定义事件名(数据)}
```

#### propTypes

```react
# 使用
安装 yarn add props-types
import PropTypes from 'prop-types'
组件名.propTypes = {
  colors: PropTypes.array
  // 约定colors属性为array类型
  // 如果类型不对，则报出明确错误，便于分析错误原因
}

# 写在class组件里面  => static propTypes={}
约束规则
1. 常见类型：array、bool、func、number、object、string
2. React元素类型：element
3. 必填项：isRequired
4. 特定结构的对象：shape({ })
// 常见类型
optionalFunc: PropTypes.func,
// 必选  isRequired
requiredFunc: PropTypes.func.isRequired,
// 特定结构的对象 shape
optionalObjectWithShape: PropTypes.shape({
      color: PropTypes.string,
      fontSize: PropTypes.number
  })
```

#### defaultProps

```react
# defaultProps
# 场景：分页组件  每页显示条数
作用：给 props 设置默认值，在未传入 props 时生效
// 设置默认值
App.defaultProps = {
  pageSize: 10
}
组件名.defaultProps ={
  // 默认标签属性值
  name:"zhuangsan"
}
  // 不传入pageSize属性
  < App />
# 复杂类型的参数需要手动合并 不然会覆盖掉
 const defaultProps = { pageSize: 20, showTotal: (total) => `共 ${total} 条数据` }
  const { total, current, pageSize, showTotal } = { ...defaultProps, ...pagination }
```

## 5 React 路由

### react-router-dom

```react
# 路由组件
BrowserRouter  HashRoute
Route
Redirect
Link
NavLink(加active类名就会高亮 activeClassName='xxx' 默认是active)
Switch  包括所有的route标签 一旦匹配上就不会继续往下进行了
# 三个属性
history
go goback goForward push replace
location
pathname search state
match
params path url
# HashRouter(hash实现) BrowserRouter(推荐 h5 historyAPI实现)
yarn add react-router-dom
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
 <Router>
    <Link to="/first">页面一</Link>
    <Route path='/first' component={First} />
 </Router>
# 默认路由
   <Route path="/" component={Home} />
```

### 编程式导航

```react
<link replace={true} />
# history
  this.props.history.push("./login?name=zs&age=12")
                         ("./login/${id}")
                         {'/login',{id:zs,age:12}}
//只有params形式需要声明接收  xxxxxx/:xxx
 replace('/')   不留下痕迹
 go(n)
 goForward      前进
 goBack         后退
# 默认情况下 只有route直接渲染的组件才能获取到路由信息 history等
  需要用withRouter高阶组件获取
  import { withRouter } from 'dva/router';
 expot default withRouter(Login)
```

### 路由匹配模式

```react
# 模糊匹配模式
/ 可以匹配所有的路由
# 精准匹配
exact 属性
<Route exact path="/" component=... />
# replace模式
<link replace />
 //不留下痕迹
```

### 嵌套路由

```react
必须以父路由 的path开头
如果不想显示父路由 加 exact
```

### 路由重定向

```react
 import { Redirect } from 'react-router-dom'
<Route path="/" exact render={()=><Redirect to="/home" />} />
<Redirect to='/home' />
  一般在最下方
```

### 路由传参

```html
# params
<Link to={`/login/${obj.id}`}>页面一</Link>
<Route path='/login/:id' component={First} />
this.props.match.params

# search
<Link to={`/login?id=${obj.id}&name=${obj.name}`}></Link>
<Route path='/login' component={First} />
import qs from 'queryString'
qs.parse(this.props.loacation.search)

qs.stringify()  对象转urlencoded
qs.parse()      urlencoded转对象

# state
<Link to={path:'/login',state:{id:1,name:zs}}></Link>
<Route path='/login' component={First} />
this.props.location.state
刷新也能保留参数 在缓存里
```

### 懒加载

```js
// lazy 只支持 export edfault
// tree shaking 动态导入 删除没用的代码
import {lazy,Suspense} from 'react'
const Login = lazy(()=>import('@/pages/Login'))
 <Suspense fallback={<h1>加载中</h1>}>
     ...路由标签
 </Suspense>
//fallback 如果用子组件 不能用懒加载导入注册组件
# 自定义 webpack chunk
 const Header = React.lazy(() => import(/* webpackChunkName: "xxx" */'./Header'))
 # 在network block request url 阻止加载
 当加载失败时 用错误边界
 state = {
   hasError: false
 }
 componentDidCatch(){
   this.setState({
     hasError:true
   })
 }
render(){
  if(this.state.hasError){
    return <div>error</div>
  }
  rerurn (xxxx)
}
```

### 鉴权路由

```js
# <AuthRoute path="..." component={...} />
# const isAuth = () => !!getToken()
import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isAuth } from '../../utils'
const AuthRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        const isLogin = isAuth()
 if (isLogin) {
          // 已登录
 return <Component {...props} />
        } else {
return (<Redirect
  to={{ pathname: '/login',state: { from: props.location } }}
 />
          )
        }
      }}
    />
  )
}
export default AuthRoute
# 登录成功后
  if (!props.location.state) {props.history.go(-1)}
  // 此时，表示是直接进入到了该页面，直接调用 go(-1) 即可
 else {
props.history.replace(props.location.state.from.pathname)
      }
```

### 获取路由信息

```js
默认只有 路由标签才有信息
使用高阶组件 包装的也有
import { withRouter } from 'react-router-dom'
withRouter(NavHeader)
```

## 6 React-Redux

### redux

```js
# 组件的地方 需要getState 获取数据 并 subScribe 保持监听更新数据
# 通过 dispatch 发送到 reducer 中
// 注意 store 中的数据 需要放到 组件的 state 中
// hook 用 useState 就行
// 一般 aciotn 的 type 拆分成常量 且封装成方法放在另一个文件
// 纯函数 给固定的输入 就会有固定的数据 不会有副作用
state = store.getState()
store.subscribe(()=>this.setState(store.getState()))
// 写在componentdidmount中
store.dispatch({
  type:'add',
  payload:{number:number+1}}
)

// 需要手动监听 store的变化,更换state中的数据
# store
import {createStore} from 'redux'
import reducer from '../reducer'
export default createStore(
  reducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
# reducer
const initialState = {
  number: 0,
}
export default (state = initialState, {type, payload}) => {
  switch (type) {
    case 'add' :
      return {...state, ...payload}
    default:
      return state
  }
}
```

### redux-thunk

```js
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
));

export default store;
#
const getList = () => {
  return async (dispatch) => {
    // 只有用了thunk action才可以使用函数 参数就是dispatch
    const {data:{number}} = await axios({url: ''})
    const action = {type: 'add', payload: {number}}
    dispatch(action)
  }
}
  React.useEffect(() => {
    const action = getList()
    store.dispatch(action)
  }, [])
```

### redux-saga

```js
yarn add redux-saga
# store
import {createStore, compose, applyMiddleware} from 'redux';
import reducer from '../reducer';
import createSagaMiddleware from "redux-saga"
import {login} from "../saga"

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

const store = createStore(reducer, enhancer);
sagaMiddleware.run(login)

export default store;
# sagas.js
import {call, put, takeEvery, takeLatest} from "redux-saga/effects"
import axios from "axios";
function* getList() {
  const {data: {data: {number}}} = yield axios({url: ''})
  const action = {type: 'add', payload: {number}}
  yield put(action)
}
export function* login() {
  yield  takeEvery('add', getList)
}

# app.js
  React.useEffect(() => {
    store.dispatch({type: 'add'})
  }, [])
```

### react-redux

```js
# index.js 入口文件
import { Provider,connect } from 'react-redux'
import store from './store'
<Provider store={store} >
  <App />
</Propvider>
# reducer
const initialState = {
  number: 0
}
export default (state = initialState, {type, payload}) => {
  switch (type) {
    case 'add' :
      return {...state, ...payload}
    default:
      return state
  }
}

# login.js
import React, from 'react'
import store from "./store"
import {connect} from 'react-redux'

const App = (props) => {
  console.log(props.number) // 这里就是reducer的值
  return (
    <>
      <button onClick={props.add}>add</button>
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    ...state
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    add(e){
      console.log(store.getState()) // 获取 state
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
# 异步
```

### combineReducers

```js
划分模块;
// 在reducer的主页面 移入其他的局部reducer
import { combineReducers } from 'redux';
import 局部的reducer from '局部的reducer';
const reducer = combineReducers({
  login: 局部的reducer,
});
export default reducer;
// 子页面 和正常一样
```

### Immutable

```js
yarn add immutable
import {fromJS} from "immutable"
const initialState = fromJS({
  number: 0
})
export default (state = initialState, {type, payload}) => {
  console.log(payload)
  switch (type) {
    case 'add' :
      return state.set('number',payload.number ) // set
    default:
      return state
  }
}
# index.js
console.log(props.login.get('number'))
const mapStateToProps = (state) => {
  return {
    login: state.login
  }
}
const mapDispatchToProps = (dispatch, aa) => {
  return {
    add() {
      let number = store.getState().login.get('number') + 1
      const action = {
        type: 'add',
        payload: {number}
      }
      dispatch(action)
    }
  }
}
# redux-immutable
yarn add redux-immutable
// reducer
import {combineReducers} from "redux-immutable"
import loginreducer from "./loginreducer"
export default combineReducers({
  login: loginreducer
})
// 使用后 获取 store 时  模块名也要get才行
const mapStateToProps = (state) => {
  // state.get('login').get('number')
  // state.getIn(['login','number'])
  return {
    login: state.get('login')
  }
}
```

### applyMiddleware

```js
# createSagaMiddleware(options)
创建中间件 连接到Redex Store 通过createStore第三个参数传入
# middleware.run(saga,...args)
动态运行saga 在applyMiddleware之后执行
# 辅助函数
takeEvery(pattern,saga,...args)
  => 在dispatch到store时 为每一个action派生一个sage
takeLatest(pattern,saga,...args)
  => 派生 并 自动取消之前的saga任务
throttle(ms,pattern,saga,...args)
  => 派生一个 节流阀
# Effect 创建起
select(selector,...args)
  => 获取redux中的state  如果selector为空 则获取完整的state
call(fn,...args)
  => 创建一个Effect 描述信息 用来命令middleware 以参数args调用函数fn
take(pattern)
  => 阻塞的方法  匹配发出的action
put(action)
  => 用来命令 middleware 向 store 发起一个action 这个是非阻塞型的
```

## 7 pubs-sub

```jsx | pure
yarn add pubsub-js
import PubSub from 'pubsub-js'
PubSub.publish('delete', data) //发布消息 发送数据
PubSub.subscribe('delete‘,function(msg,data){ }); //订阅拿到数据
```

## 8 HOOKS

- 只在最顶层使用 hook
- 只在 React 函数中调用 Hook

### useState

```js
# React.useState()
const [xxx,setXxx] = React.useState(initValue)

xxx    => state的当前状态值
setXXX => 更新的数据

第一次初始化值在内部缓存 底层处理 后续就不执行了

setXxx(newValue)

# 传入一个函数 这个函数的参数 就是最新的值
setXxx(xxx => newValue)  //函数形式
注意返回对象 需要改变指向 不然不会变化
```

### useEffect

```js
# React.useEffect()
React.useEffect(() => {
  effect
  return () => {
    cleanup
  }
}, [input])

## componentDidMount
React.useEffect(()=>{
 // componentDidMount
 },[])
// 数组里面传什么state 就检测什么数据 相当于update钩子了 不写的就不检测
      ### ReactDOM.unmountComponentAtNode
      //卸载组件
import ReactDOM from 'react-dom'
import { unmountComponentAtNode } from 'react-dom';
ReactDOM.unmountComponentAtNode(document.getElementById("root"))
 ## componentWillUnmount
React.useEffect(()=>{
  return () =>{ /* componentWillUnmount*/ () {}
 },[])
## componentDisUpdata()
React.useEffect(()=>{
 // componentDidUpdata 检测所有的
 })
React.useEffect(()=>{
 // componentDidUpdata 检测数组内的
 },[])
# 实现vue的watch
useEffect(() => {
    console.log('counter发生了变化，最新值：', counter);
}, [counter]);
```

### useRef

```js
const ref = React.useRef(initialValue)
<input type='text' ref={myRef} />
<button onClick={console.log(myRef.current.value)}  />

#  可以用来存变量
const xxx = React.useRef(0)
// ref在渲染的时候 都是唯一的, 引用的都是一样的,不会异步
修改 ref 的值  不会让组件重新渲染
借用 useState 的方法 可以让他手动渲染
# 可以根据这个变量 消除useEffect的 首次加载效果
const firstRender = useRef(true)
 useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    ......
  }, [checked]);
# 记录上一次的Porps的值
const CountRef = useRef()
useEffect(()=>{
  CountRef.current = count
})
const preCount = CountRef.current
```

### 自定义 hook

```js | pure
# 共享逻辑
# 函数名称必须以 use 开头, 不共享 state
const useXxx = () => {
  const [count, setCount] = React.useState(20)
  useEffect
  const increment = useCallback(() => {
        setCount(count + 1)
    }, [count])
  return {count,setCount,increment}
}
# 使用
const {count, setCount,increment} = useXxx()
<button onClick={increment}>
```

#### useDebouce

```js
import { useState, useEffect } from 'react'
function useDebounce(value: any, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(() => {
    const handler = window.setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])
  return debouncedValue
}
export default useDebounce;
#
import useDebounce from './useDebounce'
const useDebounceValue = useDebounce(inputValue, 500)
此时只要 把 之前的 表单value 全部换成 useDebounceValue就行了
```

#### useThrottle

```js
import {useEffect, useRef,useCallback} from 'react';
function useThrottle(fn, delay, dep = []) {
  const { current } = useRef({ fn, timer: null });
  useEffect(function () {
    current.fn = fn;
  }, [fn]);

  return useCallback(function (...args) {
    if (!current.timer) {
      current.timer = setTimeout(() => {
        delete current.timer;
      }, delay);
      current.fn.call(this, ...args);
    }
  }, dep);
}
export default useThrottle
#
import useThrottle from './useThrottle'
const throttledFunc = useThrottle(fn, 2000);
```

#### useScrollPosition

```js
// 获取滚动条高度
import {useState,useEffect} from 'react'
function useScrollPostion() {
  const [scrollPosition, setScrollPostion] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      setScrollPostion(window.scrollY)
    }
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  },[])
  return scrollPosition
}
export default useScrollPostion
#
import useScrollPostion form './useScrollPostion'
const position = useScrollPostion()
```

#### useWinSize

```js
// 获取屏幕尺寸
import { useState, useCallback, useEffect } from 'react'
function useWinSize() {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })
  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
  }, [])
  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('reisze', onResize)
    }
  }, [])
  return size
}
export default useWinSize
#
  import useWinSize from './useWinSize'
  const size = useWinSize()
```

#### useIsVisible

```js
// 是否在可视区
import { useState, useEffect } from "react";
const OPTIONS = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0,
};

const useIsVisible = (elementRef) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (elementRef.current) {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(elementRef.current);
          }
        });
      }, OPTIONS);
      observer.observe(elementRef.current);
    }
  }, [elementRef]);

  return isVisible;
};

export default useIsVisible;

#
  const elemRef = useRef();
  const isVisible = useVisible(elemRef);
          <div style={{ height: "145vh", width: '100%' }}>1</div>
          <div ref={elemRef}>hello {isVisible && console.log("visible")}</div>
```

#### useVirtualList

```js
// 虚拟列表
import { RefObject, useEffect, useState } from 'react'
interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean
}
/**
 *
 * @param {ReactRef} elementRef 传入虚拟列表父盒子的 ref
 * @param {object}
 * threshold         阀值 0-1 1表示完全出现在屏幕可视区域才触发
 * root              表示指定根元素 默认为浏览器视口  用于检查目标可见性
 * rootMargin        root的外边距 '0 0 0 0'
 * freezeOnceVisible 是否缓存 再次滑动不重新渲染
 * @returns {Object} entry 这个对象具有当前可视区的信息
 * 例如 entry.isIntersecting 是否在可视区范围
 */
function useVirtualList(
  elementRef: RefObject<Element>,
  {
    threshold = 0,
    root = null,
    rootMargin = '0%',
    freezeOnceVisible = false
  }: Args
): IntersectionObserverEntry | undefined {

  const [entry, setEntry] = useState<IntersectionObserverEntry>()
  const frozen = entry?.isIntersecting && freezeOnceVisible
  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry)
  }
  useEffect(() => {
    const node = elementRef?.current
    const hasIOSupport = !!window.IntersectionObserver
    if (!hasIOSupport || frozen || !node) return
    const observerParams = { threshold, root, rootMargin }
    const observer = new IntersectionObserver(updateEntry, observerParams)
    observer.observe(node)
    return () => observer.disconnect()
  }, [elementRef, JSON.stringify(threshold), root, rootMargin, frozen])

  return entry
}

export default useVirtualList


# 使用
const Section = (props) => {
  const ref = useRef(null)
  const entry = useVirtualList(ref, {})
  const isVisible = !!entry?.isIntersecting
  console.log(`Render Section ${props.title}`, { isVisible })
  return (
    <div
      ref={ref}
      style={{
        minHeight: '100vh',
        display: 'flex',
        border: '1px dashed #000',
        fontSize: '2rem',
        width: '100%'
      }}
    >
      {
        isVisible ? (
          <div style={{ margin: 'auto' }}>{props.title}</div>
        ) : ""
      }
    </div>
  )
}


 Array.from({ length: 100 }).map((_, index) => (
 <Section key={index + 1} title={`${index + 1}`} />
 ))



```

```js
import { Col } from 'antd'
import { FC, useRef } from "react"
import { IVirtualListProps } from './Interface'
import { useVirtualList } from "./utils"

const VirtualList: FC<IVirtualListProps> = (props) => {
  const ref = useRef<HTMLDivElement>(null!)
  const entry = useVirtualList(ref, { freezeOnceVisible: false })
  const isVisible = !!entry?.isIntersecting
  const { rows, children } = props
  return (
    <Col span={24 / rows} ref={ref} style={{ margin: '10px 0' }}>
      {isVisible ? (children) : null}
    </Col>
  )
}

export default VirtualList
#
import VirtualList from './VirtualList';
  {newData?.map((item: any) => {
     return (
     <VirtualList key={item?.[ID]} rows={rows} >
                ...
     </VirtualList>
     )
})}
```

### useReducer

```js
function init(initialCount) {
  return { count: initialCount };
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
}

function Counter({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  return (
    <>
      Count: {state.count}
      <button
        onClick={() => dispatch({ type: 'reset', payload: initialCount })}
      >
        Reset
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}
```

### useCallback

```js
# 和useMemo类似 但是返回函数不调用它
let newDataFn = useCallback((count)=>{
   xxx
},[a,b])
```

### useMemo

```js
# 和 useEffect 使用方式一样 类似 vue 的computed 在渲染前执行
let newData = useMemo(()=>{
  return a+b
},[a,b])
```

### useContext

```js
export const xxx = React.createContext(默认值)
<xxx.Provider value={默认值} >
   const 变量 = useContext(xxx) // 或者使用Consumer
   <xxx.Consumer>
     {
       value => <>{value}</>
     }
   </xxx.Consumer>
<xxx.Provider />
# 可以传递函数进行数据交互
  const Mycontext = React.createContext(null)
  const [data, setData] = React.useState([])
  const clear = () => {
    setData([])
  }
  <Provider value={{data, setData, clear}}>
      <Header></Header>
  <Provider>

 const value = React.useContext(Mycontext)
 value.setData([10])
 value,clear()
```

### forceUpdate

```js
# class组件
this.forceUpdate(callback)

const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  function handleClick() {
    forceUpdate();
  }
```

### useLayoutEffect

```js
useEffect 是异步执行的，而useLayoutEffect是同步执行的。
useEffect 的执行时机是浏览器完成渲染之后，而 useLayoutEffect 的执行时机是浏览器把内容真正渲染到界面之前，和 componentDidMount 等价。
# 解决闪烁问题
```

9 React 源码

```js
flow-tyoe 静态检查工具
packages
   - event 事件
   - react 定义节点 表现行为的包
   - react-dom
   - react-reconciler   工具
   - scheduler          调度 异步渲染
   - shared
```

```js
# ReactElement.js
createElement
# ReactBaseClasses.js
component PureComponent forceUpdate setState
#
createRef
    retrun {
      current :null
    }
```

## 9 animate

### react-spring

```js
yarn add react-spring
<Spring
 from{{ opacity:1 }}
 to={{ opcity:1 }}
 { props => <div sytle={props}> 动画内容 </div> }
>
</Spring>
```

### Transition

```js
yarn add react-transition-group
yarn add @types/react-transition-group --save
import {CSSTransition} from 'react-transition-group'
#
<CSSTransition
  in={控制样式的变量}
  timeout={1000}
  classNames="zoom-in-top"
  appear   // 一开始就执行
/>
.fade-enter  入场动画
.fade-enter-active 入场动画执行中
.fade-enter-done 入场动画执行完成后

.fade-edit
.fade-edit-active
.fade-done
```

### react-loadable

```js
#
yarn add react-loadable
import Loadable from 'react-loadable';
import Loading from './my-loading-component';
const LoadableComponent = Loadable({
  loader: () => import('./my-component'),  // 异步加载的组件
  loading: Loading, // 临时的loading效果组件
  // loading(){ return <div>加载中</div>}
});
export default () => <LoadableComponent/>

```

## 10 hign

### 使用 css 变量

```js
import styles from './app.module.css'
const App = () => {
  // 不用加React.CSSProperties;
  var style = { "--color": 10 } as React.CSSProperties;
  return (
    <div className={styles.header} style={style}>
      hello
    </div>
  );
};
export default App;
#
.header {
  color: var(--color)
}
```

### Fragment

```js
没有含义的一个标签 包裹用
<Flagment> </Flagment>
<>
</>
```

### forwardRef

```js
将 Father 组件的refs 变成children组件内 button的ref
#
const ref = React.useRef()
<Father  ref={ref} />
#
const children = React.forwardRef((props, ref)) => (
  <Button ref={ref}>
    {props.children}
  </Button>
)
console.log(ref.current.value)  // button
```

### getDerivedStateFromProps

```js
// 会在调用 render 方法之前调用 应返回一个对象来更新 state
// 如果返回 null 则不更新任何内容
// 当 state 的值在任何时候都取决于 props的时候用

static getDerivedStateFromProps(props, state){
  return {

  }
}
```

### 错误边界

```js
# getDerivedStateFromError配合componentDidCatch
生产环境才有用。。。
  捕捉后代组件生命周期产生的错误 不能捕获自己组件的错误
  其他组件的和合成事件 定时器中的错误
// 生命周期函数，一旦后台组件报错，就会触发
static getDerivedStateFromError(error) {
    console.log(error);
    // 在render之前触发 返回新的state
    return {stateName :error,};
}
componentDidCatch(error, info) {
    // 统计页面的错误。发送请求发送到后台去
    console.log(error, info);
}
# 只在生产环境 不报错
 在network 右键 block request url 阻止加载
yarn run build
serve -s build
```

### Context

```js
# 类组件 和 函数组件
const { Provider, Consumer } = React.createContext()
   <Provider value={}> //注意变量不要叫value
   </Provider>
<Consumer>
{
  value=> {
    return <div>{  value  }</div>
}
</Consumer>
# 类组件用contextType   函数组件用useContext
static contextType = MyContext
this.context;

 const value = React.useContext(Mycontext)
# 可以传递函数进行数据交互
  const Mycontext = React.createContext(null)
  const [data, setData] = React.useState([])
  const clear = () => {
    setData([])
  }
  <Provider value={{data, setData, clear}}>
      <Header></Header>
  <Provider>

 const value = React.useContext(Mycontext)
 value.setData([10])
 value,clear()
```

### 组件优化

```js
# 减轻state   => 只存储跟组件渲染相关的数据
例如 定时器id放在this中
# 只有子组件数据改变时才重新render
- 1.使用 shouldComponentUpdate
     shouldComponentUpdate(nextProps,nextState) { }
// 决定是否重新渲染组件 nextState 最新的状态 this.state 当前的状态
     return !this.state.xxx === nextState.xxx
     return !this.props.xxx === nextProps.xxx
- 2. 使用 PureComponent
// 自动浅比较 变化返回 false
// state同一指向 直接返回false  即不能直接改变state对象的属性
// 这个高阶组件 只有改变state指向 才能识别
import {PureComponent} from 'react'
export default class App extends PureComponent

- React.memo(组件,boolean)
// 和 shouldComponentUpdate一样 当变化的时候 true 刷新
```

### 高阶组件

```react
# 设置displayName => 调试工具区分名字   由于高阶组件返回的名字相同
// xxx.displayName = ''
// component.type.displayName
XxxxxxcomponentName.displayName = `WithXxxxxName${getDisplayName(WrappedComponent)}`
// 在高阶组件内部
function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}
function withxxx(XcomponentsName) {
// 函数内写一个有逻辑数据的class组件 在rander中以自定义属性形式导出逻辑
 class Mouse extends React.Component{
    render(){
    return <XcomponentsName {...this.state }{...this.props}/>
    }
  }
}
const newComponentName = withxxx(needHIGHcomponentName)
<newComponentName />
```

### createPortal

```js
渲染到dom之外;
ReactDOM.createPortal(child, container);
```

### PWA

```js
# 在项目中开启 pwa
Workbox库
npx create-react-app my-app --template cra-template-pwa
npm install workbox-webpack-plugin
在 index.js
serviceWorker.register();

# 打包之后
manifest.json 配置元信息
service-worker.js pwa信息
precache-manifest 静态资源
```

#### serverWorker

```js
// 在chrome application serviceWorkers 中点击 skipWaiting 刷新
# 注册
navigator.serviceWorker.register('./sw.js', {scope: './'})
    .then(
      registration => console.log(registration),
      error => console.error(error)
    )
# self 全局对象 install .activate .fetch 事件 push sync
// install 新的 serverWorker 下载之后 只发生一次
// activate 停止 只发生一次
// fetch 资源被请求时 发生无数次
self.addEventListener('install', e => {
  console.log('install', event)
  e.waitUntil(); // 传入promise 会阻塞后续activate执行
  e.waitUntil(self.skipWaiting()) // 停止旧的 开启新的
})
self.addEventListener('activate', e => {
  console.log('activate', e)
  e.waitUntil(self.clients.claim()) // 控制
})
self.addEventListener('fetch', e => {
  console.log('fetch', e)
  e.respondWith()
})
```

#### cache

```js
// 在 onload 之后也可以写缓存

# caches.open('xxx') caches.addAll(['/','./xxx'])
// 打开缓存 添加缓存路径
self.addEventListener('install', e => {
  console.log('install', e)
  e.waitUntil(
    caches.open('cache-v1').then(
      cache=> cache.addAll(['/','./index.css'])
    )
  )
})
# 添加缓存
# xxx.match(e.request) cache.put(e.request,res.clone())
# 划词翻译插件会报错
self.addEventListener('fetch', e => {
  // console.log('fetch', e)
  e.respondWith(
    caches.open('cache-v1').then(
      cache =>
        cache.match(e.request).then(
          response => {
            if (response) {
              return response
            }
            return fetch(e.request).then(
              fetchRes => {
                cache.put(e.request, fetchRes.clone());
                return fetchRes
              }
            )
          }
        )
    )
  )
})
# 清除上一次的缓存
self.addEventListener('activate', e => {
  console.log('activate', e)
  e.waitUntil(caches.keys()
    .then(
      cachesNames => {
        return Promise.all(cachesNames.map(cachesName => {
            if (cachesName !== CACHE_NAME) {
              return caches.delete(cachesName)
            }
          })
        )
      }
    )
  )
})

```

#### Notification

```js
# 查看权限
Notification.permission
"denied" "default" 'granted'
# 获取权限
Notification.requestPermission()
  .then( permission => console.log(permission) )
# 发送普通通知
new Notification('主标题',{body:"内容"} )
# 缓存的通知
self.registration.showNotification('hi')
```

### OAuth

```js
# github
setting
developer settings
New Github App

homepage URL  网站的链接   http://localhost:3000
Callback URL  登录成功跳转回的地址  http://localhost:3000/auth
#
App ID: 140639
Client ID: Iv1.c569ce9b56fd26a5
```

### react-virtualized

```js
只渲染页面可视区的列表项，非可视区域数据 不渲染 在滚动列表时动态更新列表项
yarn add react-virtualized
import 'react-virtualized/styles.css'
import { List,AutoSizer } from 'react-virtualized'

https://github.com/bvaughn/react-virtualized/blob/master/docs/List.md


<AitpSizer></AitpSizer> 让list组件沾满屏幕
```

```js
# 滚动条位置
function findScroller(element) {
    element.onscroll = function () {
        console.log(element)
    }
    Array.from(element.children).forEach(findScroller)
}
findScroller(document.body)
```

### hook 获取 Hook-ref

```js
import React, {
  useImperativeHandle,
  useRef,
  useEffect,
  forwardRef,
} from 'react';

const Child = (props, ModalRef) => {
  useImperativeHandle(ModalRef, () => ({
    getData: () => {
      return [1, 2, 3];
    },
  }));

  return (
    <>
      <div ref={ModalRef}>sss</div>
    </>
  );
};

const Children = forwardRef(Child);

const Father = () => {
  const ModalRef = useRef(null);

  useEffect(() => {
    console.log(ModalRef.current.getData());
  }, []);

  return (
    <>
      <Children ref={ModalRef} />
    </>
  );
};

export default Father;
```

### class 获取 hook-ref

```js
import React, { useImperativeHandle } from 'react';

const Children = props => {
  const { ModalRef } = props;

  useImperativeHandle(ModalRef, () => ({
    getData: () => {
      return [1, 2, 3];
    },
  }));

  return <>Children</>;
};

export default class Father extends React.Component {
  ModalRef = React.createRef();
  state = {};
  componentDidMount() {
    console.log(this.ModalRef.current.getData());
  }

  render() {
    return (
      <>
        <Children ModalRef={this.ModalRef} />
      </>
    );
  }
}
```

### 一次生成多个 ref

```js
#
const inputRef = useRef([]);
inputRef.current[idx].focus();
<input
  ref={el => inputRef.current[idx] = el}
/>
#
  const {useRef} = React;
const App = () => {
  const list = [...Array(8).keys()];
  const inputRef = useRef([]);
  const handler = idx => e => {
    const next = inputRef.current[idx + 1];
    if (next) {
      next.focus()
    }
  };
  return (
    <div className="App">
      <div className="input_boxes">
        {list.map(x => (
        <div>
          <input
            key={x}
            ref={el => inputRef.current[x] = el}
            onChange={handler(x)}
            type="number"
            className="otp_box"
          />
        </div>
        ))}
      </div>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
```

## 其他

### 项目打包

```js
根目录创建 .env.production
REACT_APP_URL=http://localhost:8080
yarn build

# 修改脚手架配置
npm run eject 不可逆
https://github.com/timarney/react-app-rewired
```

### express 后端创建

```js
#   npm install express-generator -g
yarn build
express 生成的文件夹名字  // 创建一个express 服务
将dist文件所有的内容 放在 express创建的文件的 public 文件目录下
yarn
yarn start
http://localhost:3000/
```

### 自定义组件顺序

```js
# 子组件
import React, { useEffect, useRef, useState } from 'react'
const Home = ({ list, children }) => {
  console.log(children)
  return (
    <>
      {
        list.map((item, index) => (
          <div key={index}>
            {children[item]}
          </div>
        ))
      }
    </>
  )
}
export default Home
# 父组件
import styles from './index.less';
import Home from './home'

export default function IndexPage() {
  let list = ['one', 'three', 'two',]
  return (
    <>
      <Home list={list}>
        {
          {
            one: (<>1</>),
            two: (<>2</>),
            three: (<>3</>),
          }
        }
      </Home>
    </>
  );
}
# 此时通过数组的顺序 就能直接控制组件的位置了
```

### https

```js
  proxy: {
    '/admin-site': {
      // target: 'http://192.168.2.60:8082', //遇安环境
      target: 'https://admin-test.ococmall.com',
        // 测试环境:https 需要配置secure headers
      changeOrigin: true,
      secure: false,
      headers: {
        Referer: 'https://admin-test.ococmall.com',
      },
    },
  },
```
