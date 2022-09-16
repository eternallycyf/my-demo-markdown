---
order: 5
nav:
  title: Article
  path: /article
  order: 1
---

# webpack

## 1. base

### pack.json

```js
yarn add webpack webpack-cli --save-dev
yarn add webpack-dev-server -D
yarn add html-webpack-plugin --save-dev

scripts: {
  "serve": "webpack serve "
  "build": "webpack",
}

├── dist
│   └── main.js
├── index.html
├── package.json
├── src
│   └── index.js
└── webpack.config.js


const path = require('path')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: "development"
}
```

### webpack-dev-server

```javascript
yarn add webpack-dev-server -D
#
const path = require('path')
module.exports = {
    devServer: {
      // html页面的路径 (默认就是项目根路径)
      //  初始相对路径是webpack.config 如果dist和他同级
      // contentBase: './dist'
      contentBase: path.resolve(__dirname, 'build'),
      // 影响本地资源的访问  express.static
      // 是对 output 打包文件物理存储位置的映射
      publicPath: "/assets/",
      // 启动gzip压缩
      compress: true,
      port: 8088,
      open:true
    }
}
```

### html-webpack-plugin

```java
yarn add html-webpack-plugin -D
# webpack.config.js
  const HtmlWebpackPlugin = require('html-webpack-plugin')
 module.exports = {
         plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html'
                 //要生成的文件名 存在内存 目录中不显示
                filename: 'index.html',
                minify: {
                   // 移除空格
                   collapseWhitespace: true,
                   // 移除注释
                   removeComments: true
                }
            })
         ]
   }
```

## 2.webpack loader

### css 和图片字体

- postcss
- 自动添加 css 的兼容前缀

```javascript
# postcss.config.js
  const autoprefixer = require('autoprefixer')
  module.exports = {
        plugins: [autoprefixer]
  }
#
{
  test: /\.css$/,
  use: ['style-loader', 'css-loader', 'postcss-loader'] },
```

- 样式表中的图片和字体文件
- /limit 用来指定图片的大小，单位是字节(byte),只有小于 limit 大小的图片，才会被转为 base64 图片

```javascript
#
// use 数组中指定的 loader 顺序是固定的
// 多个 loader 的调用顺序是：从后往前调用
   yarn add style-loader css-loader -D
   yarn add less-loader less -D
   yarn add sass-loader node-sass -D
   yarn add postcss-loader autoprefixer -D
   yarn add url-loader file-loader --save-dev
# 注意在 index.js中 import 各种css文件
# webpack.config.js  =>
module.exports = {
  module: {
    rules: [
       {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
       },
      {
        test: /\.less$/,
        use: [
        'style-loader',
        'css-loader',
        'less-loader',
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
     test:/\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
        use: [
          'url-loader?limit=16941'
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  }
}


# webpack 5
url-loader 可以不下载包 处理图片和字体图标
{ test: /\.(gif|png|jpg|jpeg)/,type: 'asset' },
{ test: /\.(eot|svg|ttf|woff|woff2)$/,type: 'asset/resource',
generator: { filename: 'fonts/[name].[hash:6][ext]' }}
//asset/resource 不压缩成base64  asset => base64
```

### 高级语法降级

```javascript
yarn add -D babel-loader @babel/core @babel/preset-env
{
  test: /\.js$/,
  exclude: /(node_modules|bower_components)/,
  use: {
    loader: 'babel-loader',
    options: {
      presets:  ['@babel/preset-env'] }
    }
  },
```

### vue-loader

- 安装加载器

```javascript
npm i vue-loader vue-template-compiler -D

const VueLoaderPlugin =
      require('vue-loader/lib/plugin')
rules: [
  { test: /\.vue$/, use: 'vue-loader' }
],
plugins: [htmlPlguin, new VueLoaderPlugin()]
```

### file-loader

```javascript
 yarn add file-loader -D
 use: {
   loader: "file-loader",
   options: {
     name: '[name]_[hash].[ext]',
     outputPath: "css/"
   }
 }
```

## 3.高级

### entry

```js
# 新建目录src
    默认入口: ./src/index.js
#
  多入口打包
  entry: {
    'jquery': './src/index.js',
    'angular': './src/2.js'
  },
# 根目录创建webpack.config.js
 // entry: string   生成一个chunk 输出一个 bundle
 // entry: sring[]  生成一个chunk 输出一个 bundle
 // entry: object   有几个入口文件就生成几个 chunk 和 bundle
module.exports = {
  entry: "./src/main.js",
}
```

### output

```js
  默认出口: ./dist/main.js
#
module.exports = {
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    // 资源公众路径前缀
    // images/a.jpg => /images/a.jpg
    publicPath: '/',
    chunkFilename: 'js/[name]_chunk.js',
    // 整个库向外保留的变量名
    library: '[name]'
    // 变量名添加到顶级作用域 global
    libraryTarget: 'window'
 },
}
```

### mode

```js
module.exports = {
  mode: 'development production',
};
```

### devServer

```js
module.exports = {
  port: 5000,
  host: 'localhost',
  open: true,
  hot: true,
  proxy: {
 /*
 本地 :5000 端口服务器接受到 /api/xxx 的请求
 就会把请求转发到另外一个服务器 :3000
 */
    '/api': {
       target: 'http://localhost:3000',
  // 请求路径重写：将 /api/xxx --> /xxx （去掉/api）
       pathRewrite: {
         '^/api': ''
       }
     }
  }

  // 不显示服务器日志信息
  clientLogLevel: 'none',
  // 除了一些基本启动信息以外，其他内容都不要显示
  quiet: true,
  // 如果报错 不要全屏提示
  overlay: false
  // 启动gzip压缩
  compress: true,
  watchContentBase: true,
  watchOptions: {
          // 忽略文件
          ignored: /node_modules/
  },

  # 4.0 webpack
  // 影响本地资源的访问  express.static
  // 是对 output 打包文件物理存储位置的映射
  publicPath: "/assets/",
  // html页面的路径 (默认就是项目根路径)
  // 初始相对路径是webpack.config 如果dist和他同级
  // contentBase: './dist'
  contentBase: resolve(__dirname, 'dist')
  // 监视 contentBase 目录下的所有文件 文件变化就会 reload
  # 5.0 webpack
  // 默认指定为 public 目录
  static: { //false
    directory: path.join(__dirname, 'assets'),
    publicPath: '/index.html',
  }
}
```

### module

#### noParse

```js
module.exports = {
  // 防止 webpack 解析这些文件
  // 这些文件内不能含有 import require define
  // 可以提高性能
  module: {
    noParse: /jquery|lodash/,
  },
};
```

#### rules

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/
        // 排除 node_modules 下的js文件
        exclude: /node_modules/,
        // 只检查 src 下的js文件
        include: resolve(__dirname, 'scr'),
        // pre:优先执行 post:延后执行
        enforce: 'pre',
        loader: 'eslint-loader',
        options: { }
      },
      {
        // 当规则匹配时 只使用第一个成功的匹配规则
        oneOf: [
          {

          }
        ]
       }
    ]
  }
}
```

##### oneOf

```js
// 当规则匹配时 只使用第一个成功的匹配规则
module.exports = {
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.(jpg|png|gif)/,
            loader: 'url-loader',
            options: {
              limit: 8 * 1024,
              name: '[hash:10].[ext]',
              outputPath: 'imgs',
              esModule: false,
            },
          },
          {
            test: /\.html$/,
            loader: 'html-loader',
          },
          {
            exclude: /\.(js|css|less|html|jpg|png|gif)/,
            loader: 'file-loader',
            options: {
              outputPath: 'media',
            },
          },
        ],
      },
    ],
  },
};
```

### resolve

#### alias

```js
const path = require('path');
module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@/components': path.resolve(__dirname, '..', 'src/components'),
      '@/utils': path.resolve(__dirname, '..', 'src/utils'),
      '@/services': path.resolve(__dirname, '..', 'src/services'),
      '@/models': path.resolve(__dirname, '..', 'src/models'),
      '@/pages': path.resolve(__dirname, '..', 'src/pages'),
    },
  },
};
```

#### extensions modules

```js
module.exports = {
  resolve: {
    // 配置省略文件路径的后缀名
    extensions: ['.js','.json','.jsx','.css']
    // 告诉 webpack 解析模块去找那个目录
    modules: [
      resolve(__dirname, '../../node_modules'),
      'node_modules'
    ]
  }
}
```

### plugins

```js
module.exports = {
  plugins: [],
};
```

### externals

```js
// 拒绝 jqery 被打包
module.exports = {
  externals: {
    jquery: 'jQuery',
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
    }),
  ],
};
```

### Optimization

#### splitChunks

```js
// 将 node_modules 中代码打包进一个 chunk
// 自动分析多入口 chunk 有没有公共文件 有的话会打包成单独一个 chunk
module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all async',
    },
  },
};
```

### devtool

#### source-map

```js
module.exports = {
  devtool: 'cheap-module-source-map'
}
#
source-map: 一种 提供源代码到构建后代码映射 技术 （如果构建后代码出错了，通过映射可以追踪源代码错误）

[inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map

      source-map：外部
        错误代码准确信息 和 源代码的错误位置
      inline-source-map：内联
        只生成一个内联source-map
        错误代码准确信息 和 源代码的错误位置
      hidden-source-map：外部
        错误代码错误原因，但是没有错误位置
        不能追踪源代码错误，只能提示到构建后代码的错误位置
      eval-source-map：内联
        每一个文件都生成对应的source-map，都在eval
        错误代码准确信息 和 源代码的错误位置
      nosources-source-map：外部
        错误代码准确信息, 但是没有任何源代码信息
      cheap-source-map：外部
        错误代码准确信息 和 源代码的错误位置
        只能精确的行
      cheap-module-source-map：外部
        错误代码准确信息 和 源代码的错误位置
        module会将loader的source map加入

    内联 和 外部的区别：1. 外部生成了文件，内联没有 2. 内联构建速度更快

      开发环境：速度快，调试更友好
        速度快(eval>inline>cheap>...)
          eval-cheap-souce-map
          eval-source-map
        调试更友好
          souce-map
          cheap-module-souce-map
          cheap-souce-map

        --> eval-source-map  / eval-cheap-module-souce-map

      生产环境：源代码要不要隐藏? 调试要不要更友好
        内联会让代码体积变大，所以在生产环境不用内联
        nosources-source-map 全部隐藏
        hidden-source-map 只隐藏源代码，会提示构建后代码错误信息

        --> source-map / cheap-module-souce-map

```

## demo

### css 抽离

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

### js 抽离

```js
 output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
```

### js 语法检查

```js
#
eslint eslint-loader
package.json 中添加
// 排除第三方库 只检查自己的代码
"eslintConfig": { "extends": "airbnb-base"}
#
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
      options: {
            // 自动修复eslint的错误
        fix: true
      }
    }
  ]
}
```

### 代码切割

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

### dll

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

## 更多插件

```js
# 转换语法es6
babel-loader
babel-core
babel-preset-env
# 转换es7 async
babel-plugin-transform-runtime
# 装饰器
babel-plugin-transform-decorators
babel-plugin-transform-decorators-legacy
```
