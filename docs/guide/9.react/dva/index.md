---
order: 9
nav:
  title: 前端之路
  path: /guide
---

# Dva

## 准备阶段

```js
routes  首页内容
#
切换路由模式 在index.js
import { createBrowserHistory as createHistory } from 'history';
const app = dva({history: createHistory(),});
覆盖掉之前的 const app = dva();
# 另一个报错 package.json
   "dva":"2.6.0-beta.20",
  然后重新下载
# dva
useState中的数据 不会更新 需要用model中的进行更新
```

### js 文件获取数据

```js
getDvaApp()._store.getState().global.pathname;
```

## Models

```js
namespace
state
reducers       mutations 返回完整的 state
effects        actions
//并发 const [r1, r2] = yield all([call(..), call(..)])
//yield put(routerRedux.push("/welcome"));
commit         dispatch
subscriptions  监听路由 键盘事件等调用
connext
```

### state

```js
# models
export default {
  namespace: "index",
  state: {
    name: "张三"
  }
};

# index.js
import { connect } from 'dva';
const mapStateToProps = state => {
  console.log(state);
  return {
    msg:"我爱你",
    name: state.index.name
  }
}
export default connect(mapStateToProps)(index)
# 使用
this.props.msg  //我爱你
this.props.name //张三
```

### reducers

```js
# models
  reducers: {
    setName (state, action) {
      //   console.log(action.data);
      return { ...state, ...action.data } // 必须 return
    }
  }
# index.js
  const action = { type: "login/setName",data: { name:"xxx"} }
  // type 是  命名空间名字/函数名
  this.props.dispatch(action)
```

### effects

- Put

```js
# model
// put 传入 action 同步
// call 发送异步
  effects: {
    *setNmaeAsync (action, { call, put }) {
     const actionSync = { type: "setName", data: { name: action.data.name } }
      yield put(actionSync)
    },
  }
# index.js
const action =
    { type: "login/setNmaeAsync", data: { name: "异步的名字" } }
this.props.dispatch(action)
# 可以 return
# 使用 try catch 捕获错误
```

- call

```js
# model
  state: {
    cnodeDate: {}
  },
  reducers: {
    getCode (state, action) {
      return { ...state, ...action.data }
    }
  },
  effects: {
    *testCnode (action, { call, put }) {
      const res = yield call(apis.testCnode)
      //testCnode 是异步的函数
      if (res.data) {
        const actionAsync = { type: "setName", cnodeDates: res.data.data }
        yield put(actionAsync)
      }
    }
  }
#
    this.props.dispatch({
      type: "login/testCnode"
    })

// 使用 setTimeout 外界放一个函数
const delay = (ms) => new Promise((resolve) => {
  setTimeout(resolve, ms);
});
   yield call(delay, 1000);
   yield put
```

- poll

```js
 effects:{
      pollStatus: [
      function* (_, { put, all }) {
        yield all([put({ type: 'chart' })]);
        yield all([put({ type: 'chartBatch' })]);
        yield all([put({ type: 'chartSinter' })]);
      },
        // 5分钟
      { type: 'poll', delay: 1000 * 60 * 5 },
    ],
}
#
  subscriptions: {
    setup({ dispatch, history }) {
  return history.listen(async ({ pathname }) => {
  await dispatch({ type: 'xxx/pollStatus-stop' });;
        if (true) {
          dispatch({
            type: 'xxx/pollStatus-start',
          });
        }
      });
    },
  },
```

### subscriptions

```js
// 数据初始化
subscriptions: {
    setup (dispatch, history) {
   return history.listen(async (pathname) => {
     await dispatch("网络请求stop")
        if (pathname === 'users') {
          dispatch({
            type: 'users/网络请求初始化数据start',
          });
        }
      })
    }
  }
```

## Mock

```js
yarn add mockjs --save
使用fetch
# Mock/index.js
module.exports = {
  'GET /api/mockdate': (req, res) => {
    res.send({
      msg: "夕阳下"
    })
  }
}
# .roadhogrc.mock.js
export default {
  ...require('./mock/index')
};
# services/example.js
export function getMockData () {
  return request('/api/mockdate');
}
# index.js
  async componentDidMount () {
    console.log(await getMockData());
  }'
# yapi
需要node 11.0
yapi server
在返回数据 设置 编辑源码
{
  "boolean|1": true
}
node vendors/server/app.js
```

## 其他

### 反向代理

```js
# .webpackrc.js
export default {
  "proxy": {
    "/api": {
      "target": "http://jsonplaceholder.typicode.com/",
      "changeOrigin": true,
      "pathRewrite": { "^/api": "" }
    }
  },
}
#
return request('/api1//api/v1/topics');
https://cnodejs.org/api
#
```

### loading

```js
yarn add dva-loading --save
import createLoading from 'dva-loading'
app.use(createLoading())

// 随后 reducer 的 state 中会增加一个 loading 的属性
function mapStateToProps(state, ownProps) {
  return {
    loading:state.loading
  }
}

const loading=this.props.loading.effects['todoList/addAsync']

 <Spin spinning={!!loading}>
```
