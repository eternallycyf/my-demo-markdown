---
order: 4
toc: menu
nav:
  title: 我遇到的千奇百怪的 bug
  order: 4
---

# Debug

<Alert>我遇到的千奇百怪的 bug</Alert>

## 1.transform3d 闪烁

```js
- 问题描述: Chrome 开启硬件加速时 做一个类似硬币一样的东西
当鼠标经过的时候 让这个圆形物体 翻转到背面 此时出现了闪烁(类似鬼畜一样。。。)
- 解决方法:
webkit- backface-visibility:hidden
webkit-perspective: 1000
```

## 2.antd mobile-v2 轮播图滑动报错

```js
1.使用react 17.0以下版本
2.node_modules
carousel.js  400行  注释掉：e.preventDefault()
```

## 3.vuepress 无法使用 上次 git 上传时间

```js
/Users/eternallycyf/Documents/GitHub/case/pluviophobe-vue-document/node_modules/@vuepress/plugin-last-updated/index.js
const lastUpdated = dateFormat(timestamp, 'yyyy-MM-dd hh:mm:ss')
自己重新定义一个时间过滤的函数
```

## 4.react return 加注释就报错

```js
# 1
const Hello = ()=> {
  return (
    // 这里加注释就报错
  )
}
# 2 return 后面什么都不写也会报错
```

## 5. rcpress build 上传后 刷新就 404

```js
由于rcpress 只提供了 history API 路由的跳转方式
所以一旦刷新就会寻找每个文件夹的index.html
但是并没有 就自动跳转到404页面 由于rcpress build没有自动加404界面
所以刷新就会报错

解决办法 在 dist目录 复制index.html所有内容 复制到创新的 404.html中

我的 cicd

#!/usr/bin/env sh

set -e
rm -rf docs/.rcpress/dist
npm run build
cd docs/.rcpress/dist
cp index.html 404.html
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:eternallycyf/pluviophobe-react-document.git master:gh-pages

cd -
```

## 6. 阿里云 mysql 本地 navicat 不能连接 提示 1045

```js
首先需要服务器防火墙开放3306端口 阿里云安全组放行3306
不能连接的原因是root用户初始化的host是 localhost 不能远程连接
需要手动更改 root用户的 host , 由 localhost 变为 %
我使用的是宝塔面板 所以下载了一个phpadmin 然后在 名称为 mysql的数据库的user表
将root用户的 host , 由 localhost 变为 %
随后重启 Mysql
就可以连接了
navicat 主机是公网ip root 密码是自己设置的
```

## 7. vscode tsconfig path 别名不起作用

```js
// 可以看 vscode右下角提示, 在某个文件时 就会显示 tsconfig or jsconfig 是否生效
项目的根路径配置了一个 tsconfig.json 其中有配置 path别名 但只有ts文件生效
项目使用的是 jsx 语法 , 别名没有起作用
我首先配置了 一个jsconfig.json 还是没反应 到vscode github issues 上看了下
tsconfig.json jsconfig.json 如果同时存在 就只有 tsconfig.json 生效
如果需要 ts js 文件都生效需要 在tsconfig.json 中配置
{
  "compilerOptions":{
    "allowJs": true,   // 允许 js
    "outDir": "./xxx", // 我的ts报了一个错误 这里随便写 只要不是项目文件名就行
  }
}
vscode右下角已经显示 ok 了, 但是 事实还没有好, 不能跳转到 带有别名的路径
此时 我将 jsx 文件改为 tsx 文件 , 他好了 !!!
然后 再改回 jsx文件 就 success 了
```

## 8. 线上环境正则表达式无法识别 中文字符

```js
我用了一个正则截取中文 （
本机运行 ok 线上环境失败了 识别不了中文字符
解决办法
（ 转 unicode
var reg1 = /\uff08/g
这样就可以了
```

## 9. vue 父传子 调试工具显示正常 但 console.log 输出 {**ob**: Observer}

```js
原因: 子组件渲染不会等待 axios的请求
<子组件
 v-if='xxx.length > 0'
/>
## 或者在子组件内部 监听
  watch: {
    chartData: {
      deep: true,
      immediate: true,
      handler(val) {
        this.chartData = val
      }
    }
  },
##      Object.assign({}, this.chartData)
```

## 10. antd select placeholder 无效

```js
设置初始值为 undefined  就可以了
<Select value={ xxx ? xxx : undefined } />
```

## 11. vue props 异步 watch 监听

```js
// this.drawLine 原来是 mounted中的方法
  props:['chartData'],
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        if (val) {
          this.drawLine()
        }
      }
    }
  },
```

## 12. vue 在 style 中使用变量

- 使用原生的方法 react 也差不多

```js
<template>
	<div class="test">
		<span :style="spanStyle" class="span1">hello world</span>
		<span style="--color:red" class="span1">hello world</span>
	</div>
</template>
<script>
export default {
	data() {return { spanStyle: { "--color": "green" }};}
}
</script>
<style scoped>
.span1 {
	color: var(--color);
}
</style>
```

- react 如果开始了校验需要转变下类型 否则会报错

```js
import styles from './app.module.css'
const App = () => {
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

## 13. vscode 双击时删除键无效

```js
关闭Comment Translate插件
```

## 14. redux 调试工具有的项目用不了

```js
一个新的umi项目 redux调试工具一直是黑框
旧的项目依然可以用
解决方法: Google商店重新安装 redux调试工具
可能是新项目redux版本太高
我重新装了变就可以用了
redux调试工具貌似升级了 看着样式也变了
```

## 15. dva subscriptions 监听路由会触发两次

- 使用 `umi` 的 `Link` 组件跳转
- 不要使用 `history.push()`
- `github isszue` 上有相关的讨论
- 还有一些别的解决方法

## 16. antd 表单重新进入页面的时候有残留

- 表现为多了一个值

```js
页面初始化时候 清除表单值 form.resetFieldValue
```

## 17. antd-vue 不能禁用年份

```js
升级到最新版;
```

## 18. 近期 vue-cli 找不到 peacenotwar。docker 打包失败

```js
vue-cli 依赖于 node-ipc
node-ipc有用到peacenotwar这个包
这个包的作者为了宣传乌克兰反战思想注入恶意代码
流水线docker无法正常打包 报错找不到peacenotwar这个依赖
https://www.zhihu.com/question/522144107
# 解决方法
在package.json中加入
  "resolutions": {
    "node-ipc": "9.2.1"
  },
```

## 19. vue 使用 echarts 切换页面后地图未初始化

```js
使用ref来获取dom;
```

## 20. antd-charts 坐标轴是乱序

```js
# 横坐标lable乱序触发条件

# 出现问题原因
- g2字段自动度量规则
  - 如果没有，判断字段的第一条数据的字段类型
  - 如果数据中不存在对应的字段，则为 'identity'
  - 如果是数字则为 'linear'；
  - 如果是字符串，判定是否是时间格式，如果是时间格式则为时间类型 'time',
  - 否则是分类类型 'cat' 分类类型是乱序的 需要手动指定枚举顺序


- g2自动判断的度量单位如果是时间类型只有这两种可以识别
  - 时间戳的数字形式: 1436237115500
  - 时间字符串:
    - '2015-03-01',
    - '2015-03-01 12:01:40',
    - '2015/01/05',
    - '2015-03-01T16:00:00.000Z'


# 解决办法
1.手动将数据的时间格式 MM-DD HH:mm 格式为 YYYY-MM-DD HH:mm

https://g2.antv.vision/zh/docs/manual/tutorial/scale#%E5%BA%A6%E9%87%8F%E5%AE%9A%E4%B9%89
```

## 21. Border 放大变成空心

```js
增加背景色;
background: xxx;
```

## 22. vue-admin-element 页签点击首页会触发上个页面的生命周期

```js
# 使用组件内的钩子 进行处理
  beforeRouteEnter(to, from, next) {

  },
  beforeRouteLeave(to, from, next) {

  }
# 根据路由变化进行 watch 重新调用初始化函数
```

## 23. vue 调试工具打不开

```js
# vue2
Vue.config.devtools = true
# vue3
app.config.performance = true
#
react调试工具有时候会和vue调试工具冲突 如果有问题就先关闭react调试工具
```

## 24. react 会渲染两次 闪烁

```js
- aaa的数据更新后又重新触发了渲染
xxx(){
  if(aaa.length>0) return true
  return false
}
{this.xxx()?'':'xxx'}
```

## 25.jQuery 的屎山全是字符串拼接

```js
使用eslint全部转换成模板字符串;
https://stackoverflow.com/questions/45308933/automatically-convert-string-concatenation-to-template-literals
// 加权限
chmod 777 xxx.js
eslint xxx.js --rule '{prefer-template:[2]}' --fix
```

## 26. Ant Design Charts-react

### 1.Y 轴图表溢出 || lable 溢出

```markdown
配置 padding 和 appendPadding 挤压
```

### 2.Label 重叠

```js
autoRotate;
autoHide;
```

### 3.自适应 y 轴

```js
自己自定义min max
```

### 4.横坐标乱序

```js
需要对时间处理成 g2 能识别的时间格式
https://g2.antv.vision/zh/docs/manual/tutorial/scale#%E5%BA%A6%E9%87%8F%E5%AE%9A%E4%B9%89
```

### 5.自定义 y 轴坐标个数

```js
{
  tickCount: 8,
  tickMethod: function tickMethod(_ref) {
    var max = _ref.max;
    var interval = Math.ceil(max / 9);
    return [
      0,
      interval,
      interval * 2,
      interval * 3,
      interval * 4,
      interval * 5,
      interval * 6,
      ~~max,
    ];
  },
}
```

### 6.子弹图目标值 y 轴对不上

- 只有当异步获取数据的时候才会出现这个问题
- 解决方法是手动加一条数据 触发它的重绘 然后将这条数据颜色改成透明色

```js
let time = {};
if (data?.length) {
  time = bdata[data.length - 1];
}
bDate = [...bdata];
bDate.push({
  isType: false,
  ...time,
  ranges: [],
  measure: [],
  target: 1000,
});
```

```js
{
  target: datum => {
    return {
      stroke:
        datum.target === targetMaxLimit ? 'transparent' : 'rgba(11, 10, 25, 1)',
      lineWidth: 2.5,
    };
  },
};
```

### 7. min max 不生效

```js
# 使用期望出现几条
tickCount: 6,
# 手动指定
meta:{
    value:{
      min:100,
      ticks: [0, 20, 50, 100, 150, 300]
    }
  },
```

### 8. 刻度上方是空的

```js
xAxis:{
  nice: true,
  min: 0,
  max: 35,
  tickInterval: 7,
  tickCount: 8,
  tickMethod: function tickMethod(_ref) {
          var max = _ref.max;
          var interval = Math.ceil(max / 9);
          return [
            0,
            interval,
            interval * 2,
            interval * 3,
            interval * 4,
            interval * 5,
            interval * 6,
            ~~max,
          ];
        },
}
```

## 27. antd upload onChange 获取不到 done 状态

- 使用了 upload 自带的 action 上传 但是需要获取上传成功后的信息 但是 onChange 里面获取不到 done 状态
- https://github.com/ant-design/ant-design/issues/2423
- 如果是动态表单 只用一个 upload 定义全局 state 存放 index onChange 时候改变 fileList
- 替换和加入 status 判断

```js
# 我的代码
onchange: ({file,fileList})=> {
  if(file.status == 'done'){
    // do somethings
  }
}
# 解决方案
// 需要加上key 且受控控制
<Upload
  key={'uploadFile'}
  fileList={fileList}
  onchange={({file,fileList})=> {
     setFileList(fileList)
     if(file.status == 'done'){
      // do somethings
     }
  }}
>
```

## 28. antd table columns 设置 width 无效 依然是自适应

- scroll:{x:true}
- scroll={{ x: 'max-content' }}
- 如果全部都设置了 width，width 并不会起作用，还是会百分比分配大小，只有在部分设置了 width，宽度才会起作用

## 29 textArea 右下角的颜色

```css
::-webkit-resizer {
  display: none;
}
```

## 30 textArea 右下角的颜色

```css
::-webkit-resizer {
  display: none;
}
```

## 31 antd table 如果少于 10 条数据 依然有空白的宽度撑满

```css
.ant-table-body {
  height: auto !important;
}
```

## 32. antd textArea autoSize={true} 有时候失效

- 打开模态框需要 resetFields

## 33. treeCheckable 自动选中了 parent 的 tree

- 需要点什么选什么
- treeCheckStrictly

## 34. scrollIntoView 滚动元素 使元素出现在视口

## 35. antd table 如果每一个 columns 都指定了 width 就会不生效

- 必须要有一个不指定 width 否则自动所有的自适应

## 36.直接根据服务器路径下载文件

```js
# 反向代理
'/image':{
  target:'http://172.163.212.21:8080/',
  changeOrigin: true
}
# utils
export function postDownLoadFile(fileName, params, data) {
  function download(params, data){
    return request(`/image/${fileName}`, {
      method: 'get',
      responseType: 'blob',
      params,
      data,
      header:{
        accept: 'application/json',
        'Access-Control-Allow-Headers': '*'
      }
    });
  }
  return download(parameter, bodyData).then((data) => {
    if (!data || data.size === 0) {
      message.warning('文件下载失败');
      return;
    }
    if (typeof window.navigator.msSaveBlob !== 'undefined') {
      window.navigator.msSaveBlob(new Blob([data]), fileName);
    } else {
      let url = window.URL.createObjectURL(new Blob([data]));
      let link = document.createElement('a');
      link.style.display = 'none';
      link.href = url;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    }
  })
}
# use url是服务器上文件的名字(`http://172.163.212.21:8080/image/aaaa.png` => `aaa.png`)
handleDownFile = ({ url }) => {
  postDownLoadFile(ulr, {}, {})
}
```

## 37. react-router(umi) 路由跳转传值 页面接受的是异步的 或者不重新渲染

```js
# 如果在当前页面跳转 直接router.query componentWillReceiveProps 里面监听最新值 只要setState就会重新渲染
# 如果是其他页面 使用localStroge 或者
1.不要使用Link
2.router.query 自己用原生获取query (react-router返回的参数是错误的 异步 第二次重复点击就不对了 但是网页上显示的路径参数是实时正确的)
function GetUrlParms()
{
 var args=new Object();
 var query=decodeURIComponent(location.search).substring(1);//获取查询串
 var pairs=query.split("&");//在逗号处断开
 for(var i=0;i<pairs.length;i++)
 {
  var pos=pairs[i].indexOf('=');//查找name=value
   if(pos==-1) continue;//如果没有找到就跳过
   var argname=pairs[i].substring(0,pos);//提取name
   var value=pairs[i].substring(pos+1);//提取value
   args[argname]=unescape(value);//存为属性
 }
 return args;
}
var args = new Object();
args = GetUrlParms();
# 强制刷新页面
window.location.href = '/'
window.reload
# 给组件+一个动态的key控制渲染 react如果key变了就会自动渲染
```

## 38. 使用 antd-form.List 时候 自定义了一个表单组件(穿梭框)

- 自己是通过 ref 的方式调用和设置组件内部数据的
- 但是当 form.list 增加或者删除的时候 索引会变化 ref 的方式很难定位索引
- 因此将自定义表单的数据放在自己的 select 表单上 当开始了 labelInValue 的时候
- 这个对象可以自定义的往里面加字段 同时又保持了动态删除 新增的动态性

## 39. antd table 隐藏某列

```js
tableLayout = 'fixed';
width: 0;
```

## 40. antd upload 组件使用自带的 action 上传 不经过 umi 的拦截器

## 41. antd 表单自定义触发时机

```js
<Form.Item
  label="Username"
  name="username"
  validateTrigger={['onChange', 'onSubmit', 'onBlur']}
  rules={[
    {
      required: true,
      message: 'Please input your username!',
      validateTrigger: 'onSubmit',
    },
  ]}
>
  <Input />
</Form.Item>
```

## 42.判断页面是否刷新

```js
if (window.performance) {
  if (performance.navigation.type == 1) {
    console.log('-');
    window.localStorage.setItem('loading', 'true');
  }
}
```

## 43.ts 两个使用 commonjs 规范的引入 fs 模块报错

```ts
 TS认为这些文件会被合并成一个文件，并没有会被认为是模块，
在文件的尾部加上export {};
```

## 44.url 解码无效 当不是 url 格式时 需要使用 encodeURIComponent

- 例如 http://xxx.com?download=http://aaa.com/image

```markdown
encodeURIComponent
decodeURIComponent
encodeURI
decodeURI
```

## 45.字符串 slice 不对

- 原因: 有些汉字的码元是 16 位 因为不够用 有的是 32
- 所以字符串长度有的是一位 有的是两位
- 不能直接通过 slice 截取 会有问题
- js 有 api 可以获取码元

```js
String.prototype.sliceByPoint = function(pStart, pEnd) {
  let result = ''; // 截取的结果
  let pIndex = 0; // 码点的指针
  let cIndex = 0; // 码元的指针
  while (true) {
    if (pIndex >= pEnd || cIndex >= this.length) {
      break;
    }
    const point = this.codePointAt(cIndex);
    if (pIndex >= pStart) {
      result += String.fromCodePoint(point);
    }
    pIndex++;
    cIndex += point > 0xffff ? 2 : 1;
  }
  return result;
};
```

## 46.axios put 请求添加 query 无效

- 需要自己手动拼接 不能直接传对象
- 例如

```js
// error
axios.put('/api/xxx', { id: 1 }, { params: { a: 1 } });
// right
axios.put('/api/xxx?id=1');
```

## 47 axios 转换成 base64

```js
function getBase64(url) {
  return axios
    .get(url, {
      responseType: 'arraybuffer',
    })
    .then(response => Buffer.from(response.data, 'binary').toString('base64'));
}
const url = 'data:image/png;base64,' + (await getBase64(_p));
```

## 48.react-redux connect 后 获取不到 ref

```js
// react-redux v6之前
export default connect(mapStateToProps, mapDispatchToProps, null, {
  withRef: true,
})(InviteReceiverForm);
// v6
export default connect(mapStateToProps, mapDispatchToProps, null, {
  forwardRef: true,
})(InviteReceiverForm);
```

## 48. antd-table 放在 modal 里面打开关闭卡顿

- react 元素深拷贝 会导致卡顿

```js
columns如果;
title: <div>...</div>;
需要换成函数形式;
title: () => <div>...</div>;
```

## 49 img 使用异步的 url

```js
function Image({userId}){
  const [actualSrc, setActualSrc] = useState('placeholder image link')
  useEffect(()=>{
    const getUrl = async (id) => {
       let url = `http://127.0.0.1:8000/api/user/${id}/`
       const response = await fetch(url)
       const data = await response.json()
       const avatarurl = data.avatar
       return avatarurl;

    getUrl(userId).then((url) => setActualSrc(url));
  }, [userId]);

  return <img src={actualSrc}/>
}
{data?.map((data) => (
  <div className="allpostsingle" key={data.id} onClick={() => sendTo(data.id)}>
    <div className="allpostheader">
      <Image userId={data.user} />
      <p>{data?.description}</p>
    </div>
  </div>
))}
```

## 50. react input onchange e.target is null

```js
onChange = e => {
  e.persist();
  console.log(e.target.value);
};

## hooks
const MyComponent = () => {
  const handleChange = useMemo(() => {
    const debounced = _.debounce(e => console.log(e.target.value), 1000);
    return e => {
      e.persist();
      return debounced(e);
    };
  }, []);
  return <input onChange={handleChange} />;
};

## class
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = _.debounce(this.handleChange.bind(this), 1000);
  }
  handleChange(e) {
    console.log(e.target.value);
  }
  render() {
    return <input onChange={(e)=>{
      e.persist();
      this.handleChange
    }}
   />;
  }
}
```

## 51. antd col 会默认添加 position:relative => z-index:0

## 52. APP 更新后白屏 必须清缓存才行

- js 文件加了 hash 但是 html 文件缓存了

```
location / {
  index index.html
  try_files $uri $uri/ /index.html;
  if ($request_filename ~* .*\.(?:htm|html)$)
  {
      add_header Cache-Control "no-store, no-store"
  }
};
```

## 53. antd select 6000 条数据卡顿 滚动不下去

- 太多数据的 key 相同导致的
- 如果还需要 value 可以这样写 将唯一值放在 Key 那里
- {label:xxx,value:xxx,key:xxx}

## 54.put delete 请求 axios params 无效

- 需要自己拼接
- xxx?aaa=222

## 55.antd-table 抖动 || 当屏幕分辨率缩小的时候无限拉伸

- columns width 可能是 NaN 了

## 56. Array.filter(Boolean) 去空值

- b = a.filter(Boolean);
- b = a.filter(function (x) { return Boolean(x); });

## 57. 图片保持横纵比例;

- object-fit: contain;
- background-size: contain;

## 58.页签切换后不触发生命周期

```js
// hooks
useEffect(() => {

}, [window.location.pathname])

// class
// 1.通过 componentDidUpdate 对比
// 2. 动态设置 key
<Route path="/page/:pageid" render={(props) => (
  <Page key={props.match.params.pageid} {...props} />)
} />
// 3.动态路由参数
// https://umijs.org/docs/guides/routes#%E8%B7%AF%E7%94%B1%E5%8A%A8%E6%80%81%E5%8F%82%E6%95%B0
// 4.通过 history 监听
  componentDidMount() {
    history.listen(({ location }) => {
      console.log(location);
    })
  }
// 5.写一个子hoooks组件 专门监听
```

## 58 github pages 一直加载失败

- react_devtools_backend.js:4012 ChunkLoadError: Loading chunk 983 failed.
- 原因是 html 文件缓存问题
- hash 只对 js css 生效

```js
  metas: [
    {
      'http-equiv': 'Content-Security-Policy',content: 'upgrade-insecure-requests',
    },
    { 'http-equiv': 'Cache-control', content: 'no-cache' },
    { 'http-equiv': 'Cache', content: 'no-cache' },
  ],
```

## 59. github workflow 必须给与权限

- 仓库 settings Action General
- https://github.com/eternallycyf/umi4-tab/settings/actions

## 60.tsconfig 关闭隐式报错

- obj[i] = xxx ; // error
- "suppressImplicitAnyIndexErrors": true

## 61. antd table 左上角斜线

```ts
  title: (
      <th className={styles.slashWrap}>
        <span className={styles.left}>区域</span>
        <span className={styles.slash}></span>
        <span className={styles.right}>客户分级</span>
      </th>
    ),
       width: 220,
```

```css
/* th单元格 */
.slashWrap {
  position: relative;
  box-sizing: border-box;
  width: 150px;
  height: 80px;
}

/* 斜线 */
.slash {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  /* 斜边边长 */
  /* Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)) */
  /* Math.sqrt(Math.pow(150, 2) + Math.pow(80, 2)) = 170 */
  width: 170px;
  height: 1px;
  background-color: #ccc;
  /* 旋转角度计算公式 */
  /*  Math.atan(height / width) * 180 / Math.PI  */
  /*  Math.atan(80 / 150) * 180 / Math.PI  = 28.072486935852954 */
  transform: rotate(28.072486935852954deg);
  transform-origin: top left;
}

/* 左下角文字 */
.left {
  position: absolute;
  bottom: 15px;
  /* 左下角 left:0; bottom: 0; */
  left: 15px;
}

/* 右上角文字 */
.right {
  position: absolute;
  top: 15px;
  /* 右上角 right:0; top: 0; */
  right: 15px;
}

:global {
  .ant-table-thead {
    tr:nth-child(1) {
      th:nth-child(1) {
        padding: 0 !important;
      }
    }
  }
}
```

## 62. headers 不能传递中文 需要解码编码操作

## 63. tsx 动态传值

```tsx | pure
type TestProps<T extends boolean> = T extends true ? { a: string } : { b: string };
const Test = <T extends boolean = true>(props: TestProps<T>) => <span>Some component logic</span>;

<Text<true> b={'ss'}>  // error
```

## 64 attr

```tsx | pure
<div className={styles.div} data-color="red" />
.div {
  &::before {
    content: attr(data-color)
  }
}
```

## 65 table 如何可以 hover 行和列都高亮

- https://github.com/ant-design/ant-design/discussions/40594

## 66. antd RadioStyle

```less
:global {
  .ant-picker.ant-picker-borderless {
    left: 20% !important;
    height: 32px;
    border: 1px solid #b8cdff !important;
    background-color: rgba(255, 255, 255, 1) !important;
  }

  .ant-radio-group {
    margin-left: 0px;
    height: 25px;
  }

  .ant-picker-large .ant-picker-input > input {
    font-size: 12px;
  }

  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
    &:focus-within {
      box-shadow: none;
    }
  }

  .ant-radio-button-wrapper {
    border-color: rgba(184, 205, 255);
    background-color: #fff;
    color: rgba(11, 10, 25, 0.65);

    &:hover {
      color: #3363d7 !important;
    }
  }

  .ant-radio-button-wrapper-checked:not([class*=' ant-radio-button-wrapper-disabled']).ant-radio-button-wrapper:first-child {
    border-radius: 2px 0 0px 2px !important;
  }

  .ant-radio-button-wrapper-checked:not([class*=' ant-radio-button-wrapper-disabled']).ant-radio-button-wrapper:last-child {
    border-radius: 0 2px 2px 0 !important;
  }

  .ant-radio-button-wrapper-checked:not(:first-child)::before {
    background-color: rgba(184, 205, 255);
  }

  .ant-radio-button-wrapper:not(:first-child)::before {
    background-color: rgba(184, 205, 255);
  }

  .ant-radio-button-wrapper-checked {
    border-color: rgba(184, 205, 255) !important;
    background: #e0ecff !important;
    color: #3363d7 !important;

    &:not(:first-child)::before {
      background-color: #b8cdff !important;
    }

    &:hover {
      border: 1px solid #3363d7 !important;
      background-color: rgb(224, 236, 255);

      &:not(:first-child)::before {
        background-color: rgb(77, 120, 223) !important;
      }
    }
  }
}
```

## 67.echarts xAxis 换行

```js
{
  "xAxis": {
    "axisLabel":{
      "formatter": (v) => {
        const values = v.split('-');
        if(!Array.isArray(values)) return '--';
        if(values?.length == 0) return '--';
        return [
          `{a|${values[1]}}`,
          `{b|${values[0]}}`,
        ]
      }
    },
    rich: {
      a: {
        fontSize: 12,
        ...
      },
      b: {
        fontSize: 12,
        ...
      }
    }
  }
}
```

## 68 svg-path

```js
'path://M8,8,h8,v8,h-8Z';
```

## 69 not-css 兼容 chrome88 以下版本

## 70.antd table 多行合并

```ts
// 合并4行
render: (value, record, index) => ({
        children: value,
        props: {
          rowSpan: index === 0 ? 4 : 0,
        },
      }),
```

```js
createNewArr = (data, key = 'name') => {
  return data
    .reduce((result, item) => {
      //首先将name字段作为新数组result取出
      if (result.indexOf(item[key]) < 0) {
        result.push(item[key]);
      }
      return result;
    }, [])
    .reduce((result, name) => {
      //将name相同的数据作为新数组取出，并在其内部添加新字段**rowSpan**
      const children = data.filter(item => item[key] === name);
      result = result.concat(
        children.map((item, index) => ({
          ...item,
          rowSpan: index === 0 ? children.length : 0, //将第一行数据添加rowSpan字段
        })),
      );
      return result;
    }, []);
};
const getRowSpans = (arr, key) => {
  let sameValueLength = 0;
  const rowSpans = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (i === 0) {
      rowSpans[i] = sameValueLength + 1;
      continue;
    }
    if (arr[i][key] === arr[i - 1][key]) {
      rowSpans[i] = 0;
      sameValueLength++;
    } else {
      console.log(sameValueLength);
      rowSpans[i] = sameValueLength + 1;
      sameValueLength = 0;
    }
  }
  return rowSpans;
};

const dataSource = [
  {
    collector: '0',
    c: '0',
  },
  {
    collector: '1',
    c: '1',
  },
  {
    collector: '1',
    c: '2',
  },
  {
    collector: '1',
    c: '3',
  },
  {
    collector: '1',
    c: '4',
  },
];

const rowSpans = getRowSpans(dataSource, 'collector');

const columns = [
  {
    title: '名称',
    dataIndex: 'collector',
    key: 'collector',
    align: 'center',
    render: (value, _, index) => {
      const obj = {
        children: value,
        props: {},
      };

      obj.props.rowSpan = rowSpans[index];
      return obj;
    },
    onCell: () => ({
      style: { background: '#F7F7F7' },
    }),
  },
  { title: '地址', align: 'center', dataIndex: 'c', key: 'c' },
];
<Table dataSource={dataSource} columns={columns} />;
```

## 71.antd tootip 渲染在父元素

```ts
getPopupContainer={trigger => trigger.parentNode}
```

## 72. antd table 点击筛选后恢复上次的滚动位置

- 自定义了 component-body 也可以

- scroll={{ scrollToFirstRowOnChange: false }}

## 73 antd table coulumns 泛型

```ts
import { ColumnGroupType, ColumnType } from 'antd/lib/table/interface';

type AnyData = Record<string, unknown>;
type RenderReturn<TRecord = AnyData> = ReturnType<NonNullable<ColumnType<TRecord>['render']>>;
type Column<TRecord = AnyData> =
  | (Omit<ColumnGroupType<TRecord>, 'render'> & {
      render?: (value: TRecord, record: TRecord, index: number) => RenderReturn<TRecord>;
    })
  | (ColumnType<TRecord> & {
      dataIndex?: keyof TRecord;
      render?: <T = TRecord>(value: T, record: TRecord, index: number) => RenderReturn<TRecord>;
    })
  | (ColumnType<TRecord> & {
      // TODO: 为每一个对象拓展属性
      dataIndex?: keyof TRecord;
      tooltip?: React.ReactNode;
      editable: boolean;
    });
// 传入泛型:Columns<{ code: string }>
// 指定dataIndex及render的record类型
type Columns<TRecord = AnyData> = Column<TRecord>[];
//表单控件
export type IColumnsType<T = AnyData> = Columns<T>;

const columns:IColumnsType<{code:string}> = [
  {
    dataIndex: 'code';
    editable: false;
  }
]
```

## 74. antd table rowKey 不生效

- rowKey={string} => rowKey={(record) => record[string]}

## 75 动态路由

```ts
path: '/home/class/detail/:id', -this.props!.match!.params.id;
history.push({
  pathname: `/home/class/detail/${21312312323}`,
});
```

## 76.chatGTP 行数限制

```ts
please start at the beginning and provide the lines 1-50 of the script and prompt me to type MORE. Then provide me with lines 50-100 of the script and prompt me to type MORE. Then provide me with lines 100-159 of the script and prompt me to type MORE. Then provide me with lines 150-200 of the script and prompt me to type MORE. Then provide me with lines 200-250 of the script and prompt me to type MORE. Then provide me with lines 250-300 of the script 。 and more than 1000 word code
```

## 77. antd select 不使用 labelInvalue 设置默认值

```ts
form.setFieldsValue({
  selectName: {
    key: 'xxx',
  },
});
```

## 78. step 步骤条

```less
.arrow {
  position: absolute;
  bottom: -2%;
  z-index: 2;
  display: inline-block;
  width: 0;
  height: 0;
}

.arrow::before {
  position: absolute;
  left: 50%;
  display: block;
  width: 16px;
  height: 16px;
  border-color: #dee1e7;
  background-color: #fafafb;
  content: '';
  transform: translateX(-50%) rotate(45deg);
}

.card {
  position: relative;
  z-index: 3;
  margin-top: 10px;
  width: 100%;
  background: #fafafb;
}
```

```tsx | pure
import React, { useMemo, useState } from 'react';
import { Divider, Steps, Popover, Row, Col, Card } from 'antd';
import { CaretUpOutlined } from '@ant-design/icons';
import styles from './index.less';
const App: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const onChange = (value: number) => {
    console.log('onChange:', value);
    setCurrent(value);
  };

  const title = 'ttt';
  const description = (
    <>
      <div>title</div>
      <div className={styles.arrow}></div>
    </>
  );

  return (
    <>
      <div>
        <Steps
          labelPlacement="vertical"
          current={current}
          onChange={onChange}
          style={{ position: 'relative' }}
          items={[
            {
              title,
              description,
            },
            {
              title,
              description,
            },
            {
              title,
              description,
            },
          ]}
        />
      </div>
      <div className={styles.card}>hello word</div>
    </>
  );
};

export default App;
```

## 79 react forceUpdate 不生效

- 因为变量不是内部维护的
- 可以用 key 强制刷新

## 80 antd date onChange dateString

```ts
function(date: dayjs, dateString: string)
```

## 81 解析 params 路径参数

```ts
import { stringify } from 'query-string';
```

## 82 antd hidden 隐藏表单

- 依然会收集和校验字段

```tsx | pure
<Form.Item name="name" hidden>
  <Input />
</Form.Item>
```

## 83 antd form.Item 没有 label 自定义校验信息

```tsx | pure
<Form.Item
  messageVariables={{ label: '自定义的提示信息' }}
  name="xxx"
  rules={[{ required: true, message: '${label}' }]}
>
  <Input />
</Form.Item>
```

## 84 antd form.Item normalize

- 自定义转换后放置到表单中的值

```tsx | pure
<Form.Item normalize={e => e + '%'}>
  <Input />
</Form.Item>
```

## 85. 隐藏 a title

```tsx | pure
<a href="" title="Something">
  <span title="">Your text</span>
</a>
```

## 86.ecahrtx x 轴首尾不要 tick

```ts
yAxis: {
  max: val => {
    return val;
  };

  boundaryGap: true;
}

xAxis: {
  axisTick: {
    show: true,
    length: 42,
    interval: (index,val)=> value =='xxx'
  },
  lineStyle: {
    color: '#EFF1F4',
  }
}
```

## 87.echarts 动态 label

- 堆叠图点击 legend 后 label 不是动态的
- https://www.isqqw.com/viewer?id=20160

```ts
// echarts for react 需要这样
const [data,setData] = useState([]);
const [options,setOptions] = useState({});
const EchartsRef = useRef(null);

const handelChangeLegened = useCallbackk((obj)=>{
  const {selected} = obj;
  // TODO 筛选出 type == 'bar' 的 series
  // 获取当前展示的 bar 名称
  // 获取合计的名称及 key
  // 计算新的data => data.map(item => {...item,total:xxx})

  const newOptions = {...options}
  newOptions.series[5].label.formatter = (item) =>{
    const newObj = newData.find(ele => ele.time == item.data.time)
    return newObj.total ? newObj.total.toLocalString() : ''
  }

  setOptions(newOptions);
  EchartsRef.current.getEchartsInstance().setOption(newOptions)

},[data])

const onEvents = {
  legendselectchanged: handelChangeLegened
}

<ReactEcharts
  option={option}
  style={style}
  onEvents={onEvents}
  ref={EchartsRef}
  theme={theme}
/>
```

```ts
// 切换options时 强制清除label
useLayoutEffect(() => {
  setOptions(options);
  if (EchartsRef.current) {
    EchartsRef.current.getEchartsInstance().setOption(options, true);
  }
}, [data]);
```

## 88.antd table sort 某一行不排序

```tsx | pure
 sorter: (a, b) => {
   if(a.name === '合计' || b.name === '合计') return 0;
   return a.name.length - b.name.length
 },
```

- null 排最后

```tsx | pure
function numeric(x) {
  const val = parseFloat(x);
  if (isNaN(val)) {
    return parseFloat(x.slice(1));
  } else {
    return val;
  }
}

function descendingComparator(a, b) {
  if (a === null) return 1;
  if (b === null) return -1;
  const numericA = numeric(a);
  const numericB = numeric(b);
  if (numericB < numericA) {
    return -1;
  }
  if (numericB > numericA) {
    return 1;
  }
  return 0;
}

sorter: (a, b) => descendingComparator(a.name, b.name),
```

## 89.antd table 固定行

```tsx
const defaultOnRow = restProps.onRow ? restProps.onRow : null;
const fixRowkeys = restProps?.fixRowkeys || [];
const _data = (data?.length > 0 ? data : dataSource) || [];
restProps.onRow = (record: any, index: number) => {
  const defaultRowProps = defaultOnRow ? defaultOnRow(record, index) : {};
  const dataHasFixedKeys =
    fixRowkeys.filter((key: any) =>
      _data.some((ele: any) => ele[rowKey as any] == key),
    ) || [];
  const currentRowKey = record?.[rowKey as any];
  const fixedStyle = {};

  if (dataHasFixedKeys.includes(currentRowKey)) {
    fixedStyle['position'] = 'sticky';
    fixedStyle['top'] =
      45 * dataHasFixedKeys.findIndex((item: any) => item == currentRowKey);
    fixedStyle['zIndex'] = 999;
  }

  return {
    index,
    moveRow: this.moveRow,
    style: fixedStyle,
    ...defaultRowProps,
  } as React.HTMLAttributes<any>;
};
```

## 90 sort 根据指定顺序排序

```tsx
function sortBy<T extends any[]>(
  data: T,
  idOrder: Array<string | number>,
  key: string = 'id',
): T {
  const orderMap = (Object.fromEntries(
    idOrder.map((id, i) => [id, i]),
  ) as any) as T;
  return data.sort((a, b) => orderMap[a[key]] - orderMap[b[key]]);
}
```

## 91 深层改变对象的 key

```tsx
const mapKeysDeep = (obj: any, cb: (value: any, key: string) => string): any =>
  _.mapValues(_.mapKeys(obj, cb), val =>
    _.isObject(val) ? mapKeysDeep(val, cb) : val,
  );

const mapValuesDeep = (v, callback) =>
  _.isObject(v) ? _.mapValues(v, v => mapValuesDeep(v, callback)) : callback(v);

const newObj = mapKeysDeep(obj, (value, key) => {
  if (key === '账号') return 'account';
  if (key === '姓名') return 'name';
  return key;
});
```

## 92. ts 计数

```ts
type Enumerate<
  N extends number,
  Acc extends number[] = []
> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>;

type IntRange<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;

type T = IntRange<20, 300>;
```

## 93. [antd-formList-指定检验某一行](https://juejin.cn/post/6844904176770613261)

```tsx | pure
<Form form={form}>
    <Form.List name="users">
        {(fields, { add, remove }) => {
          return (
            <div>
              {fields.map((field,index) => (
                <Space key={field.key} style={{ display: 'flex', marginBottom: 5, justifyContent: 'center' }} align="start">
                  <Form.Item
                    {...field}
                    name={[field.name, 'firstName']}
                    fieldKey={[field.fieldKey, 'firstName']}
                    rules={[{ required: true, message: 'please input firstName' }]}
                  >
                    <Input placeholder="first name" />
                  </Form.Item>
                  <Form.Item
                    {...field}
                    name={[field.name, 'lastName']}
                    fieldKey={[field.fieldKey, 'lastName']}
                    rules={[{ required: true, message: 'please input lastName' }]}
                  >
                    <Input placeholder="last name"/>
                  </Form.Item>
                </Space>
              ))}
              <Form.Item style={{width:'50%', margin:'0 auto'}}>
                <Button type="dashed" onClick={() => { add(); }} block>
                  <PlusOutlined /> 添加行
                </Button>
              </Form.Item>
            </div>
          )
        }}
    </Form.List>
    <Form.Item
      label="分组"
      name="group"
      rules: [{ required: true, message: '请输入预付款金额' }]
      >
      <Input />
    </Form.Item>
</Form>

```

```tsx | pure
    //单行验证, index代表的是第几行数据
  form.validateFields([['users', index, 'firstName'], ['users', index, 'lastName']]).then(values => {
    console.log(values.users[index].firstName, values.users[index].lastName)
  });
  //整个users验证需要把每行的field name传进去，暂未找到别的解决方案
  form.validateFields([    ['users', 0, 'firstName'], ['users', 0, 'lastName']，
    ['users', 1, 'firstName'], ['users', 1, 'lastName']
    ...
  ])

```

## 94. grid

```less
.card {
  display: grid;
  grid-template-column: 50% 50%;
  // 2:1 关系
  // grid-template-columns: 2fr 1fr;
  gap: 10px;
  grid-template-areas:
    'a b'
    'c d'
    'e f';
  place-items: center;
}

.item1 {
  grid-area: a;
  align-self: center;
  justify-self: start;
}
```

## 95 Can only set one of `children` or `props.dangerouslySetInnerHTML`

```tsx | pure
const RenderHTML = props => (
  <span dangerouslySetInnerHTML={{ __html: props.HTML }}></span>
);
YourData.map((d, i) => {
  return <RenderHTML HTML={d.YOUR_HTML} />;
});
```

## 96 flex 间距

- flexBasis: '86%';

## 97 antd-row-gutter 无效

- 不要给 col 添加 style

## 98 Omit 失效

- 不能有 {[props:string]:any}

## 99 监听 form.getFormValues 卡顿

- 换成 form.getFormValue('xxx')
