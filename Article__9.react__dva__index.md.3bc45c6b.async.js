(self.webpackChunkmy_demo_markdown=self.webpackChunkmy_demo_markdown||[]).push([[9885],{68401:function(u,o,a){"use strict";a.r(o);var i=a(12924),e=a.n(i),n=a(16924),t=a(53401);const r=e().memo(({demos:s})=>e().createElement(e().Fragment,null,e().createElement("div",{className:"markdown"},e().createElement("h1",{id:"dva"},e().createElement(n.AnchorLink,{to:"#dva","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"Dva"),e().createElement("h2",{id:"\u51C6\u5907\u9636\u6BB5"},e().createElement(n.AnchorLink,{to:"#\u51C6\u5907\u9636\u6BB5","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u51C6\u5907\u9636\u6BB5"),e().createElement(t.Z,{code:`routes  \u9996\u9875\u5185\u5BB9
#
\u5207\u6362\u8DEF\u7531\u6A21\u5F0F \u5728index.js
import { createBrowserHistory as createHistory } from 'history';
const app = dva({history: createHistory(),});
\u8986\u76D6\u6389\u4E4B\u524D\u7684 const app = dva();
# \u53E6\u4E00\u4E2A\u62A5\u9519 package.json
   "dva":"2.6.0-beta.20",
  \u7136\u540E\u91CD\u65B0\u4E0B\u8F7D
# dva
useState\u4E2D\u7684\u6570\u636E \u4E0D\u4F1A\u66F4\u65B0 \u9700\u8981\u7528model\u4E2D\u7684\u8FDB\u884C\u66F4\u65B0`,lang:"js"}),e().createElement("h3",{id:"js-\u6587\u4EF6\u83B7\u53D6\u6570\u636E"},e().createElement(n.AnchorLink,{to:"#js-\u6587\u4EF6\u83B7\u53D6\u6570\u636E","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"js \u6587\u4EF6\u83B7\u53D6\u6570\u636E"),e().createElement(t.Z,{code:"getDvaApp()._store.getState().global.pathname;",lang:"js"}),e().createElement("h2",{id:"models"},e().createElement(n.AnchorLink,{to:"#models","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"Models"),e().createElement(t.Z,{code:`namespace
state
reducers       mutations \u8FD4\u56DE\u5B8C\u6574\u7684 state
effects        actions
//\u5E76\u53D1 const [r1, r2] = yield all([call(..), call(..)])
//yield put(routerRedux.push("/welcome"));
commit         dispatch
subscriptions  \u76D1\u542C\u8DEF\u7531 \u952E\u76D8\u4E8B\u4EF6\u7B49\u8C03\u7528
connext`,lang:"js"}),e().createElement("h3",{id:"state"},e().createElement(n.AnchorLink,{to:"#state","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"state"),e().createElement(t.Z,{code:`# models
export default {
  namespace: "index",
  state: {
    name: "\u5F20\u4E09"
  }
};

# index.js
import { connect } from 'dva';
const mapStateToProps = state => {
  console.log(state);
  return {
    msg:"\u6211\u7231\u4F60",
    name: state.index.name
  }
}
export default connect(mapStateToProps)(index)
# \u4F7F\u7528
this.props.msg  //\u6211\u7231\u4F60
this.props.name //\u5F20\u4E09`,lang:"js"}),e().createElement("h3",{id:"reducers"},e().createElement(n.AnchorLink,{to:"#reducers","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"reducers"),e().createElement(t.Z,{code:`# models
  reducers: {
    setName (state, action) {
      //   console.log(action.data);
      return { ...state, ...action.data } // \u5FC5\u987B return
    }
  }
# index.js
  const action = { type: "login/setName",data: { name:"xxx"} }
  // type \u662F  \u547D\u540D\u7A7A\u95F4\u540D\u5B57/\u51FD\u6570\u540D
  this.props.dispatch(action)`,lang:"js"}),e().createElement("h3",{id:"effects"},e().createElement(n.AnchorLink,{to:"#effects","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"effects"),e().createElement("ul",null,e().createElement("li",null,"Put")),e().createElement(t.Z,{code:`# model
// put \u4F20\u5165 action \u540C\u6B65
// call \u53D1\u9001\u5F02\u6B65
  effects: {
    *setNmaeAsync (action, { call, put }) {
     const actionSync = { type: "setName", data: { name: action.data.name } }
      yield put(actionSync)
    },
  }
# index.js
const action =
    { type: "login/setNmaeAsync", data: { name: "\u5F02\u6B65\u7684\u540D\u5B57" } }
this.props.dispatch(action)
# \u53EF\u4EE5 return
# \u4F7F\u7528 try catch \u6355\u83B7\u9519\u8BEF`,lang:"js"}),e().createElement("ul",null,e().createElement("li",null,"call")),e().createElement(t.Z,{code:`# model
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
      //testCnode \u662F\u5F02\u6B65\u7684\u51FD\u6570
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

// \u4F7F\u7528 setTimeout \u5916\u754C\u653E\u4E00\u4E2A\u51FD\u6570
const delay = (ms) => new Promise((resolve) => {
  setTimeout(resolve, ms);
});
   yield call(delay, 1000);
   yield put`,lang:"js"}),e().createElement("ul",null,e().createElement("li",null,"poll")),e().createElement(t.Z,{code:`effects:{
      pollStatus: [
      function* (_, { put, all }) {
        yield all([put({ type: 'chart' })]);
        yield all([put({ type: 'chartBatch' })]);
        yield all([put({ type: 'chartSinter' })]);
      },
        // 5\u5206\u949F
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
  },`,lang:"js"}),e().createElement("h3",{id:"subscriptions"},e().createElement(n.AnchorLink,{to:"#subscriptions","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"subscriptions"),e().createElement(t.Z,{code:`// \u6570\u636E\u521D\u59CB\u5316
subscriptions: {
    setup (dispatch, history) {
   return history.listen(async (pathname) => {
     await dispatch("\u7F51\u7EDC\u8BF7\u6C42stop")
        if (pathname === 'users') {
          dispatch({
            type: 'users/\u7F51\u7EDC\u8BF7\u6C42\u521D\u59CB\u5316\u6570\u636Estart',
          });
        }
      })
    }
  }`,lang:"js"}),e().createElement("h2",{id:"mock"},e().createElement(n.AnchorLink,{to:"#mock","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"Mock"),e().createElement(t.Z,{code:`yarn add mockjs --save
\u4F7F\u7528fetch
# Mock/index.js
module.exports = {
  'GET /api/mockdate': (req, res) => {
    res.send({
      msg: "\u5915\u9633\u4E0B"
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
\u9700\u8981node 11.0
yapi server
\u5728\u8FD4\u56DE\u6570\u636E \u8BBE\u7F6E \u7F16\u8F91\u6E90\u7801
{
  "boolean|1": true
}
node vendors/server/app.js`,lang:"js"}),e().createElement("h2",{id:"\u5176\u4ED6"},e().createElement(n.AnchorLink,{to:"#\u5176\u4ED6","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u5176\u4ED6"),e().createElement("h3",{id:"\u53CD\u5411\u4EE3\u7406"},e().createElement(n.AnchorLink,{to:"#\u53CD\u5411\u4EE3\u7406","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u53CD\u5411\u4EE3\u7406"),e().createElement(t.Z,{code:`# .webpackrc.js
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
#`,lang:"js"}),e().createElement("h3",{id:"loading"},e().createElement(n.AnchorLink,{to:"#loading","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"loading"),e().createElement(t.Z,{code:`yarn add dva-loading --save
import createLoading from 'dva-loading'
app.use(createLoading())

// \u968F\u540E reducer \u7684 state \u4E2D\u4F1A\u589E\u52A0\u4E00\u4E2A loading \u7684\u5C5E\u6027
function mapStateToProps(state, ownProps) {
  return {
    loading:state.loading
  }
}

const loading=this.props.loading.effects['todoList/addAsync']

 <Spin spinning={!!loading}>`,lang:"js"}))));o.default=s=>{const l=e().useContext(n.context),d=l.demos;return e().useEffect(()=>{var c;s!=null&&(c=s.location)!==null&&c!==void 0&&c.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(s.location.hash.slice(1)))},[]),e().createElement(r,{demos:d})}}}]);
