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
