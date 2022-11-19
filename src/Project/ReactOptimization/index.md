---
group:
  path: /react_optimization
  title: React 性能优化
---

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

- 一般情况可以无脑用
- 但是比如 某个组件传入了一万个 props 这样就需要调用很多次 react 内部对比是否变化
- 反而时间花费更长了

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

- https://usehooks-ts.com/react-hook/use-intersection-observer

### 4.惰性渲染 && 惰性函数

- 惰性加载表示函数执行的分支只会在函数第一次调用的时候执行。在第一次调用的过程中。
- 该函数被覆盖为另一个按照合适的方式执行的函数。这样任何对原函数的调用就不用再经过执行的分支了

```js
#
 var timeStamp = null;
  function getTimeStamp() {
    if (timeStamp) {
      return timeStamp
    }
    // 直接为外界的变量赋值
    timeStamp = new Date().getTime()
    return timeStamp;
  }
  console.log(getTimeStamp());
  console.log(getTimeStamp());
  console.log(getTimeStamp());
  console.log(getTimeStamp());
# 自执行函数 避免污染全局变量
  var getTimeStamp = (function () {
    var timeStamp = null;
    return function () {
      if (timeStamp) {
        return timeStamp;
      }
      timeStamp = new Date().getTime()
      return timeStamp;
    }
  })()
# 第一次只是在给函数重新定义 第二次执行时候才生效
 var getTimeStamp = function () {
    var timeStamp = new Date().getTime()
    getTimeStamp = function () {
      return timeStamp
    }
    return getTimeStamp()
  }
# element ui 源码 处理 dom 事件
export const on = (function() {
  if (!isServer && document.addEventListener) {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler);
      }
    };
  }
})();
#
   function test(num) {
    switch (num) {
      case 1:
        test = () => 1
        break;
      case 2:
        test = () => 2
        break;
      case 3:
        test = () => 3
        break;
      default:
        test = () => null
        break;
    }
    return test()
  }
  console.log(test(null)); // null
```

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
- element 等组件库会将一些 API 利用 computed 缓存（computed 只有当 props 和 data 中的变量变化的时候才会重新缓存）
- vue 的 diff 算法有时候自动计算会直接缓存
  - （比如你写了两个 El-Button 这时候 diff 算法将他们当成一个,而组件库内部的 computed 没有重新计算）
  - 此时就可能产生值变化 但是表单的 API 未变化的 bug
  - 这时候就需要给其加不同的 key

### 10.避免使用内联样式

- <b style={{"backgroundColor": "blue"}}>Welcome to Sample Page</b>

### 11.防流节抖

### 12.CDN

### 13.gzip 压缩

```conf
http{
  gzip on;                      #开启gzip功能
  gzip_types *;                 #压缩源文件类型,根据具体的访问资源类型设定
  gzip_comp_level 6;            #gzip压缩级别
  gzip_min_length 1024;         #进行压缩响应页面的最小长度,content-length
  gzip_buffers 4 16K;           #缓存空间大小
  gzip_http_version 1.1;        #指定压缩响应所需要的最低HTTP请求版本
  gzip_vary  on;                #往头信息中添加压缩标识
  gzip_disable "MSIE [1-6]\.";  #对IE6以下的版本都不进行压缩
  gzip_proxied  off;            #nginx作为反向代理压缩服务端返回数据的条件
}
```

### 14.webpack 拆包

#### css 抽离

```js
plugins: [
   new MiniCssExtractPlugin({
     // 对输出的css文件进行重命名
     filename: 'css/built.css'
   }),
   // 压缩css
   new OptimizeCssAssetsWebpackPlugin()
]

#
  {
        test: /\.css$/,
        use: [ 'file-loader']
             ['file-loader?name=[name].bundle[hash].css']
  },
```

#### js 抽离

```js
 output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
```

#### 代码切割

```js
1. 多入口 自动打包多个文件
   entry: {
    'jquery': './src/index.js',
    'angular': './src/2.js'
  },
2. 异部的chunk
   require.ensure([],function(_require){
     _require('./xxx')
   })
  import('./2.css').then(() => {
    ...
  })
}
#
3.
optimization: {
  splitChunks: {
    chunks: 'all'
  }
}
#
externals: {
  jquery: 'jQuery'
}
引入cdn
```

#### dll

```js
#
硬链接一个 包,再手动scrit引入这个包 之后webpack就不用编译了
#
yarn add add-asset-html-webpack-plugin
webpack --config webpack.config.dll.js && webpack
# 文件路径
  webpack.config.js
  webpack.config.dll.js
  dist
     index.html
  src
  public
  dll
     jquery
     manifest.json
# webpack.config.js
const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
module.export = {
  ...
  externals: {
    jquery: 'jQuery'
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      minify: { removeComments: true }
    }),
    // 告诉webpack哪些库不参与打包，同时使用时的名称也得变~
    new webpack.DllReferencePlugin({
        manifest: resolve(__dirname, 'dll/manifest.json')
    }),
    // 将某个文件打包输出去，并在html中自动引入该资源
    new AddAssetHtmlPlugin({
       filepath: path.resolve(__dirname, 'dll/jquery.js'),
       publicPath: '../dll',
       outputPath: 'vendor',
    }),
  ]
}
# webpack.config.dll.js
const path = require('path');
const webpack = require('webpack')
module.exports = {
  entry: {
    jquery: ['jquery'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dll'),
    library: '[name]_[hash]'
  },
  plugins: [
    // 打包生成一个 manifest.json --> 提供和jquery映射
    new webpack.DllPlugin({
      // 映射库的暴露的内容名称 和 library 相同
      name: '[name]_[hash]',
      path: path.join(__dirname, 'dll/manifest.json'),
    })
  ],
  mode: 'production'
};
```

```js
externals: {
    jquery: 'jQuery'
},
new webpack.ProvidePlugin({
   $: path.resolve(path.join(__dirname, 'dll/jquery.js'))
}),
```

#### 其他 cli 集成

```ts
  chainWebpack: function(config, { webpack }) {
    config.merge({
      optimization: {
        splitChunks: {
          chunks: 'all',
          minSize: 30000,
          minChunks: 3,
          automaticNameDelimiter: '.',
          cacheGroups: {
            vendor: {
              name: 'vendors',
              test({ resource }: any) {
                return /[\\/]node_modules[\\/]/.test(resource);
              },
              priority: 10,
            },
          },
        },
      },
    });
  },
```
