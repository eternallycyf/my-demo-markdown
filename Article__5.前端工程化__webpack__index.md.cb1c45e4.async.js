(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{NF7o:function(d,r,t){"use strict";t.r(r);var o=t("cDcd"),e=t.n(o),n=t("dEAq"),m=t.n(n),a=t("6T1g");const c=e.a.memo(({demos:l})=>e.a.createElement(e.a.Fragment,null,e.a.createElement("div",{className:"markdown"},e.a.createElement("h1",{id:"webpack"},e.a.createElement(n.AnchorLink,{to:"#webpack","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"webpack"),e.a.createElement("h2",{id:"1-base"},e.a.createElement(n.AnchorLink,{to:"#1-base","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"1. base"),e.a.createElement("h3",{id:"packjson"},e.a.createElement(n.AnchorLink,{to:"#packjson","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"pack.json"),e.a.createElement(a.a,{code:`yarn add webpack webpack-cli --save-dev
yarn add webpack-dev-server -D
yarn add html-webpack-plugin --save-dev

scripts: {
  "serve": "webpack serve "
  "build": "webpack",
}

\u251C\u2500\u2500 dist
\u2502   \u2514\u2500\u2500 main.js
\u251C\u2500\u2500 index.html
\u251C\u2500\u2500 package.json
\u251C\u2500\u2500 src
\u2502   \u2514\u2500\u2500 index.js
\u2514\u2500\u2500 webpack.config.js


const path = require('path')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: "development"
}`,lang:"js"}),e.a.createElement("h3",{id:"webpack-dev-server"},e.a.createElement(n.AnchorLink,{to:"#webpack-dev-server","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"webpack-dev-server"),e.a.createElement(a.a,{code:`yarn add webpack-dev-server -D
#
const path = require('path')
module.exports = {
    devServer: {
      // html\u9875\u9762\u7684\u8DEF\u5F84 (\u9ED8\u8BA4\u5C31\u662F\u9879\u76EE\u6839\u8DEF\u5F84)
      //  \u521D\u59CB\u76F8\u5BF9\u8DEF\u5F84\u662Fwebpack.config \u5982\u679Cdist\u548C\u4ED6\u540C\u7EA7
      // contentBase: './dist'
      contentBase: path.resolve(__dirname, 'build'),
      // \u5F71\u54CD\u672C\u5730\u8D44\u6E90\u7684\u8BBF\u95EE  express.static
      // \u662F\u5BF9 output \u6253\u5305\u6587\u4EF6\u7269\u7406\u5B58\u50A8\u4F4D\u7F6E\u7684\u6620\u5C04
      publicPath: "/assets/",
      // \u542F\u52A8gzip\u538B\u7F29
      compress: true,
      port: 8088,
      open:true
    }
}`,lang:"javascript"}),e.a.createElement("h3",{id:"html-webpack-plugin"},e.a.createElement(n.AnchorLink,{to:"#html-webpack-plugin","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"html-webpack-plugin"),e.a.createElement(a.a,{code:`yarn add html-webpack-plugin -D
# webpack.config.js
  const HtmlWebpackPlugin = require('html-webpack-plugin')
 module.exports = {
         plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html'
                 //\u8981\u751F\u6210\u7684\u6587\u4EF6\u540D \u5B58\u5728\u5185\u5B58 \u76EE\u5F55\u4E2D\u4E0D\u663E\u793A
                filename: 'index.html',
                minify: {
                   // \u79FB\u9664\u7A7A\u683C
                   collapseWhitespace: true,
                   // \u79FB\u9664\u6CE8\u91CA
                   removeComments: true
                }
            })
         ]
   }`,lang:"java"}),e.a.createElement("h2",{id:"2webpack-loader"},e.a.createElement(n.AnchorLink,{to:"#2webpack-loader","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"2.webpack loader"),e.a.createElement("h3",{id:"css-\u548C\u56FE\u7247\u5B57\u4F53"},e.a.createElement(n.AnchorLink,{to:"#css-\u548C\u56FE\u7247\u5B57\u4F53","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"css \u548C\u56FE\u7247\u5B57\u4F53"),e.a.createElement("ul",null,e.a.createElement("li",null,"postcss"),e.a.createElement("li",null,"\u81EA\u52A8\u6DFB\u52A0 css \u7684\u517C\u5BB9\u524D\u7F00")),e.a.createElement(a.a,{code:`# postcss.config.js
  const autoprefixer = require('autoprefixer')
  module.exports = {
        plugins: [autoprefixer]
  }
#
{
  test: /\\.css$/,
  use: ['style-loader', 'css-loader', 'postcss-loader'] },`,lang:"javascript"}),e.a.createElement("ul",null,e.a.createElement("li",null,"\u6837\u5F0F\u8868\u4E2D\u7684\u56FE\u7247\u548C\u5B57\u4F53\u6587\u4EF6"),e.a.createElement("li",null,"/limit \u7528\u6765\u6307\u5B9A\u56FE\u7247\u7684\u5927\u5C0F\uFF0C\u5355\u4F4D\u662F\u5B57\u8282(byte),\u53EA\u6709\u5C0F\u4E8E limit \u5927\u5C0F\u7684\u56FE\u7247\uFF0C\u624D\u4F1A\u88AB\u8F6C\u4E3A base64 \u56FE\u7247")),e.a.createElement(a.a,{code:`#
// use \u6570\u7EC4\u4E2D\u6307\u5B9A\u7684 loader \u987A\u5E8F\u662F\u56FA\u5B9A\u7684
// \u591A\u4E2A loader \u7684\u8C03\u7528\u987A\u5E8F\u662F\uFF1A\u4ECE\u540E\u5F80\u524D\u8C03\u7528
   yarn add style-loader css-loader -D
   yarn add less-loader less -D
   yarn add sass-loader node-sass -D
   yarn add postcss-loader autoprefixer -D
   yarn add url-loader file-loader --save-dev
# \u6CE8\u610F\u5728 index.js\u4E2D import \u5404\u79CDcss\u6587\u4EF6
# webpack.config.js  =>
module.exports = {
  module: {
    rules: [
       {
        test: /\\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
       },
      {
        test: /\\.less$/,
        use: [
        'style-loader',
        'css-loader',
        'less-loader',
        ]
      },
      {
        test: /\\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
     test:/\\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
        use: [
          'url-loader?limit=16941'
        ]
      },
      {
        test: /\\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\\.vue$/,
        use: 'vue-loader'
      }
    ]
  }
}


# webpack 5
url-loader \u53EF\u4EE5\u4E0D\u4E0B\u8F7D\u5305 \u5904\u7406\u56FE\u7247\u548C\u5B57\u4F53\u56FE\u6807
{ test: /\\.(gif|png|jpg|jpeg)/,type: 'asset' },
{ test: /\\.(eot|svg|ttf|woff|woff2)$/,type: 'asset/resource',
generator: { filename: 'fonts/[name].[hash:6][ext]' }}
//asset/resource \u4E0D\u538B\u7F29\u6210base64  asset => base64`,lang:"javascript"}),e.a.createElement("h3",{id:"\u9AD8\u7EA7\u8BED\u6CD5\u964D\u7EA7"},e.a.createElement(n.AnchorLink,{to:"#\u9AD8\u7EA7\u8BED\u6CD5\u964D\u7EA7","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u9AD8\u7EA7\u8BED\u6CD5\u964D\u7EA7"),e.a.createElement(a.a,{code:`yarn add -D babel-loader @babel/core @babel/preset-env
{
  test: /\\.js$/,
  exclude: /(node_modules|bower_components)/,
  use: {
    loader: 'babel-loader',
    options: {
      presets:  ['@babel/preset-env'] }
    }
  },`,lang:"javascript"}),e.a.createElement("h3",{id:"vue-loader"},e.a.createElement(n.AnchorLink,{to:"#vue-loader","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"vue-loader"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u5B89\u88C5\u52A0\u8F7D\u5668")),e.a.createElement(a.a,{code:`npm i vue-loader vue-template-compiler -D

const VueLoaderPlugin =
      require('vue-loader/lib/plugin')
rules: [
  { test: /\\.vue$/, use: 'vue-loader' }
],
plugins: [htmlPlguin, new VueLoaderPlugin()]`,lang:"javascript"}),e.a.createElement("h3",{id:"file-loader"},e.a.createElement(n.AnchorLink,{to:"#file-loader","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"file-loader"),e.a.createElement(a.a,{code:`yarn add file-loader -D
 use: {
   loader: "file-loader",
   options: {
     name: '[name]_[hash].[ext]',
     outputPath: "css/"
   }
 }`,lang:"javascript"}),e.a.createElement("h2",{id:"3\u9AD8\u7EA7"},e.a.createElement(n.AnchorLink,{to:"#3\u9AD8\u7EA7","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"3.\u9AD8\u7EA7"),e.a.createElement("h3",{id:"entry"},e.a.createElement(n.AnchorLink,{to:"#entry","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"entry"),e.a.createElement(a.a,{code:`# \u65B0\u5EFA\u76EE\u5F55src
    \u9ED8\u8BA4\u5165\u53E3: ./src/index.js
#
  \u591A\u5165\u53E3\u6253\u5305
  entry: {
    'jquery': './src/index.js',
    'angular': './src/2.js'
  },
# \u6839\u76EE\u5F55\u521B\u5EFAwebpack.config.js
 // entry: string   \u751F\u6210\u4E00\u4E2Achunk \u8F93\u51FA\u4E00\u4E2A bundle
 // entry: sring[]  \u751F\u6210\u4E00\u4E2Achunk \u8F93\u51FA\u4E00\u4E2A bundle
 // entry: object   \u6709\u51E0\u4E2A\u5165\u53E3\u6587\u4EF6\u5C31\u751F\u6210\u51E0\u4E2A chunk \u548C bundle
module.exports = {
  entry: "./src/main.js",
}`,lang:"js"}),e.a.createElement("h3",{id:"output"},e.a.createElement(n.AnchorLink,{to:"#output","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"output"),e.a.createElement(a.a,{code:`\u9ED8\u8BA4\u51FA\u53E3: ./dist/main.js
#
module.exports = {
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    // \u8D44\u6E90\u516C\u4F17\u8DEF\u5F84\u524D\u7F00
    // images/a.jpg => /images/a.jpg
    publicPath: '/',
    chunkFilename: 'js/[name]_chunk.js',
    // \u6574\u4E2A\u5E93\u5411\u5916\u4FDD\u7559\u7684\u53D8\u91CF\u540D
    library: '[name]'
    // \u53D8\u91CF\u540D\u6DFB\u52A0\u5230\u9876\u7EA7\u4F5C\u7528\u57DF global
    libraryTarget: 'window'
 },
}`,lang:"js"}),e.a.createElement("h3",{id:"mode"},e.a.createElement(n.AnchorLink,{to:"#mode","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"mode"),e.a.createElement(a.a,{code:`module.exports = {
  mode: 'development production',
};`,lang:"js"}),e.a.createElement("h3",{id:"devserver"},e.a.createElement(n.AnchorLink,{to:"#devserver","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"devServer"),e.a.createElement(a.a,{code:`module.exports = {
  port: 5000,
  host: 'localhost',
  open: true,
  hot: true,
  proxy: {
 /*
 \u672C\u5730 :5000 \u7AEF\u53E3\u670D\u52A1\u5668\u63A5\u53D7\u5230 /api/xxx \u7684\u8BF7\u6C42
 \u5C31\u4F1A\u628A\u8BF7\u6C42\u8F6C\u53D1\u5230\u53E6\u5916\u4E00\u4E2A\u670D\u52A1\u5668 :3000
 */
    '/api': {
       target: 'http://localhost:3000',
  // \u8BF7\u6C42\u8DEF\u5F84\u91CD\u5199\uFF1A\u5C06 /api/xxx --> /xxx \uFF08\u53BB\u6389/api\uFF09
       pathRewrite: {
         '^/api': ''
       }
     }
  }

  // \u4E0D\u663E\u793A\u670D\u52A1\u5668\u65E5\u5FD7\u4FE1\u606F
  clientLogLevel: 'none',
  // \u9664\u4E86\u4E00\u4E9B\u57FA\u672C\u542F\u52A8\u4FE1\u606F\u4EE5\u5916\uFF0C\u5176\u4ED6\u5185\u5BB9\u90FD\u4E0D\u8981\u663E\u793A
  quiet: true,
  // \u5982\u679C\u62A5\u9519 \u4E0D\u8981\u5168\u5C4F\u63D0\u793A
  overlay: false
  // \u542F\u52A8gzip\u538B\u7F29
  compress: true,
  watchContentBase: true,
  watchOptions: {
          // \u5FFD\u7565\u6587\u4EF6
          ignored: /node_modules/
  },

  # 4.0 webpack
  // \u5F71\u54CD\u672C\u5730\u8D44\u6E90\u7684\u8BBF\u95EE  express.static
  // \u662F\u5BF9 output \u6253\u5305\u6587\u4EF6\u7269\u7406\u5B58\u50A8\u4F4D\u7F6E\u7684\u6620\u5C04
  publicPath: "/assets/",
  // html\u9875\u9762\u7684\u8DEF\u5F84 (\u9ED8\u8BA4\u5C31\u662F\u9879\u76EE\u6839\u8DEF\u5F84)
  // \u521D\u59CB\u76F8\u5BF9\u8DEF\u5F84\u662Fwebpack.config \u5982\u679Cdist\u548C\u4ED6\u540C\u7EA7
  // contentBase: './dist'
  contentBase: resolve(__dirname, 'dist')
  // \u76D1\u89C6 contentBase \u76EE\u5F55\u4E0B\u7684\u6240\u6709\u6587\u4EF6 \u6587\u4EF6\u53D8\u5316\u5C31\u4F1A reload
  # 5.0 webpack
  // \u9ED8\u8BA4\u6307\u5B9A\u4E3A public \u76EE\u5F55
  static: { //false
    directory: path.join(__dirname, 'assets'),
    publicPath: '/index.html',
  }
}`,lang:"js"}),e.a.createElement("h3",{id:"module"},e.a.createElement(n.AnchorLink,{to:"#module","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"module"),e.a.createElement("h4",{id:"noparse"},e.a.createElement(n.AnchorLink,{to:"#noparse","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"noParse"),e.a.createElement(a.a,{code:`module.exports = {
  // \u9632\u6B62 webpack \u89E3\u6790\u8FD9\u4E9B\u6587\u4EF6
  // \u8FD9\u4E9B\u6587\u4EF6\u5185\u4E0D\u80FD\u542B\u6709 import require define
  // \u53EF\u4EE5\u63D0\u9AD8\u6027\u80FD
  module: {
    noParse: /jquery|lodash/,
  },
};`,lang:"js"}),e.a.createElement("h4",{id:"rules"},e.a.createElement(n.AnchorLink,{to:"#rules","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"rules"),e.a.createElement(a.a,{code:`module.exports = {
  module: {
    rules: [
      {
        test: /\\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\\.js$/
        // \u6392\u9664 node_modules \u4E0B\u7684js\u6587\u4EF6
        exclude: /node_modules/,
        // \u53EA\u68C0\u67E5 src \u4E0B\u7684js\u6587\u4EF6
        include: resolve(__dirname, 'scr'),
        // pre:\u4F18\u5148\u6267\u884C post:\u5EF6\u540E\u6267\u884C
        enforce: 'pre',
        loader: 'eslint-loader',
        options: { }
      },
      {
        // \u5F53\u89C4\u5219\u5339\u914D\u65F6 \u53EA\u4F7F\u7528\u7B2C\u4E00\u4E2A\u6210\u529F\u7684\u5339\u914D\u89C4\u5219
        oneOf: [
          {

          }
        ]
       }
    ]
  }
}`,lang:"js"}),e.a.createElement("h5",{id:"oneof"},e.a.createElement(n.AnchorLink,{to:"#oneof","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"oneOf"),e.a.createElement(a.a,{code:`// \u5F53\u89C4\u5219\u5339\u914D\u65F6 \u53EA\u4F7F\u7528\u7B2C\u4E00\u4E2A\u6210\u529F\u7684\u5339\u914D\u89C4\u5219
module.exports = {
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\\.(jpg|png|gif)/,
            loader: 'url-loader',
            options: {
              limit: 8 * 1024,
              name: '[hash:10].[ext]',
              outputPath: 'imgs',
              esModule: false,
            },
          },
          {
            test: /\\.html$/,
            loader: 'html-loader',
          },
          {
            exclude: /\\.(js|css|less|html|jpg|png|gif)/,
            loader: 'file-loader',
            options: {
              outputPath: 'media',
            },
          },
        ],
      },
    ],
  },
};`,lang:"js"}),e.a.createElement("h3",{id:"resolve"},e.a.createElement(n.AnchorLink,{to:"#resolve","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"resolve"),e.a.createElement("h4",{id:"alias"},e.a.createElement(n.AnchorLink,{to:"#alias","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"alias"),e.a.createElement(a.a,{code:`const path = require('path');
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
};`,lang:"js"}),e.a.createElement("h4",{id:"extensions-modules"},e.a.createElement(n.AnchorLink,{to:"#extensions-modules","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"extensions modules"),e.a.createElement(a.a,{code:`module.exports = {
  resolve: {
    // \u914D\u7F6E\u7701\u7565\u6587\u4EF6\u8DEF\u5F84\u7684\u540E\u7F00\u540D
    extensions: ['.js','.json','.jsx','.css']
    // \u544A\u8BC9 webpack \u89E3\u6790\u6A21\u5757\u53BB\u627E\u90A3\u4E2A\u76EE\u5F55
    modules: [
      resolve(__dirname, '../../node_modules'),
      'node_modules'
    ]
  }
}`,lang:"js"}),e.a.createElement("h3",{id:"plugins"},e.a.createElement(n.AnchorLink,{to:"#plugins","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"plugins"),e.a.createElement(a.a,{code:`module.exports = {
  plugins: [],
};`,lang:"js"}),e.a.createElement("h3",{id:"externals"},e.a.createElement(n.AnchorLink,{to:"#externals","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"externals"),e.a.createElement(a.a,{code:`// \u62D2\u7EDD jqery \u88AB\u6253\u5305
module.exports = {
  externals: {
    jquery: 'jQuery',
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
    }),
  ],
};`,lang:"js"}),e.a.createElement("h3",{id:"optimization"},e.a.createElement(n.AnchorLink,{to:"#optimization","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Optimization"),e.a.createElement("h4",{id:"splitchunks"},e.a.createElement(n.AnchorLink,{to:"#splitchunks","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"splitChunks"),e.a.createElement(a.a,{code:`// \u5C06 node_modules \u4E2D\u4EE3\u7801\u6253\u5305\u8FDB\u4E00\u4E2A chunk
// \u81EA\u52A8\u5206\u6790\u591A\u5165\u53E3 chunk \u6709\u6CA1\u6709\u516C\u5171\u6587\u4EF6 \u6709\u7684\u8BDD\u4F1A\u6253\u5305\u6210\u5355\u72EC\u4E00\u4E2A chunk
module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all async',
    },
  },
};`,lang:"js"}),e.a.createElement("h3",{id:"devtool"},e.a.createElement(n.AnchorLink,{to:"#devtool","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"devtool"),e.a.createElement("h4",{id:"source-map"},e.a.createElement(n.AnchorLink,{to:"#source-map","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"source-map"),e.a.createElement(a.a,{code:`module.exports = {
  devtool: 'cheap-module-source-map'
}
#
source-map: \u4E00\u79CD \u63D0\u4F9B\u6E90\u4EE3\u7801\u5230\u6784\u5EFA\u540E\u4EE3\u7801\u6620\u5C04 \u6280\u672F \uFF08\u5982\u679C\u6784\u5EFA\u540E\u4EE3\u7801\u51FA\u9519\u4E86\uFF0C\u901A\u8FC7\u6620\u5C04\u53EF\u4EE5\u8FFD\u8E2A\u6E90\u4EE3\u7801\u9519\u8BEF\uFF09

[inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map

      source-map\uFF1A\u5916\u90E8
        \u9519\u8BEF\u4EE3\u7801\u51C6\u786E\u4FE1\u606F \u548C \u6E90\u4EE3\u7801\u7684\u9519\u8BEF\u4F4D\u7F6E
      inline-source-map\uFF1A\u5185\u8054
        \u53EA\u751F\u6210\u4E00\u4E2A\u5185\u8054source-map
        \u9519\u8BEF\u4EE3\u7801\u51C6\u786E\u4FE1\u606F \u548C \u6E90\u4EE3\u7801\u7684\u9519\u8BEF\u4F4D\u7F6E
      hidden-source-map\uFF1A\u5916\u90E8
        \u9519\u8BEF\u4EE3\u7801\u9519\u8BEF\u539F\u56E0\uFF0C\u4F46\u662F\u6CA1\u6709\u9519\u8BEF\u4F4D\u7F6E
        \u4E0D\u80FD\u8FFD\u8E2A\u6E90\u4EE3\u7801\u9519\u8BEF\uFF0C\u53EA\u80FD\u63D0\u793A\u5230\u6784\u5EFA\u540E\u4EE3\u7801\u7684\u9519\u8BEF\u4F4D\u7F6E
      eval-source-map\uFF1A\u5185\u8054
        \u6BCF\u4E00\u4E2A\u6587\u4EF6\u90FD\u751F\u6210\u5BF9\u5E94\u7684source-map\uFF0C\u90FD\u5728eval
        \u9519\u8BEF\u4EE3\u7801\u51C6\u786E\u4FE1\u606F \u548C \u6E90\u4EE3\u7801\u7684\u9519\u8BEF\u4F4D\u7F6E
      nosources-source-map\uFF1A\u5916\u90E8
        \u9519\u8BEF\u4EE3\u7801\u51C6\u786E\u4FE1\u606F, \u4F46\u662F\u6CA1\u6709\u4EFB\u4F55\u6E90\u4EE3\u7801\u4FE1\u606F
      cheap-source-map\uFF1A\u5916\u90E8
        \u9519\u8BEF\u4EE3\u7801\u51C6\u786E\u4FE1\u606F \u548C \u6E90\u4EE3\u7801\u7684\u9519\u8BEF\u4F4D\u7F6E
        \u53EA\u80FD\u7CBE\u786E\u7684\u884C
      cheap-module-source-map\uFF1A\u5916\u90E8
        \u9519\u8BEF\u4EE3\u7801\u51C6\u786E\u4FE1\u606F \u548C \u6E90\u4EE3\u7801\u7684\u9519\u8BEF\u4F4D\u7F6E
        module\u4F1A\u5C06loader\u7684source map\u52A0\u5165

    \u5185\u8054 \u548C \u5916\u90E8\u7684\u533A\u522B\uFF1A1. \u5916\u90E8\u751F\u6210\u4E86\u6587\u4EF6\uFF0C\u5185\u8054\u6CA1\u6709 2. \u5185\u8054\u6784\u5EFA\u901F\u5EA6\u66F4\u5FEB

      \u5F00\u53D1\u73AF\u5883\uFF1A\u901F\u5EA6\u5FEB\uFF0C\u8C03\u8BD5\u66F4\u53CB\u597D
        \u901F\u5EA6\u5FEB(eval>inline>cheap>...)
          eval-cheap-souce-map
          eval-source-map
        \u8C03\u8BD5\u66F4\u53CB\u597D
          souce-map
          cheap-module-souce-map
          cheap-souce-map

        --> eval-source-map  / eval-cheap-module-souce-map

      \u751F\u4EA7\u73AF\u5883\uFF1A\u6E90\u4EE3\u7801\u8981\u4E0D\u8981\u9690\u85CF? \u8C03\u8BD5\u8981\u4E0D\u8981\u66F4\u53CB\u597D
        \u5185\u8054\u4F1A\u8BA9\u4EE3\u7801\u4F53\u79EF\u53D8\u5927\uFF0C\u6240\u4EE5\u5728\u751F\u4EA7\u73AF\u5883\u4E0D\u7528\u5185\u8054
        nosources-source-map \u5168\u90E8\u9690\u85CF
        hidden-source-map \u53EA\u9690\u85CF\u6E90\u4EE3\u7801\uFF0C\u4F1A\u63D0\u793A\u6784\u5EFA\u540E\u4EE3\u7801\u9519\u8BEF\u4FE1\u606F

        --> source-map / cheap-module-souce-map`,lang:"js"}),e.a.createElement("h2",{id:"demo"},e.a.createElement(n.AnchorLink,{to:"#demo","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"demo"),e.a.createElement("h3",{id:"css-\u62BD\u79BB"},e.a.createElement(n.AnchorLink,{to:"#css-\u62BD\u79BB","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"css \u62BD\u79BB"),e.a.createElement(a.a,{code:`plugins: [
   new MiniCssExtractPlugin({
     // \u5BF9\u8F93\u51FA\u7684css\u6587\u4EF6\u8FDB\u884C\u91CD\u547D\u540D
     filename: 'css/built.css'
   }),
   // \u538B\u7F29css
   new OptimizeCssAssetsWebpackPlugin()
]

#
  {
        test: /\\.css$/,
        use: [ 'file-loader']
             ['file-loader?name=[name].bundle[hash].css']
  },`,lang:"js"}),e.a.createElement("h3",{id:"js-\u62BD\u79BB"},e.a.createElement(n.AnchorLink,{to:"#js-\u62BD\u79BB","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"js \u62BD\u79BB"),e.a.createElement(a.a,{code:`output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
  },`,lang:"js"}),e.a.createElement("h3",{id:"js-\u8BED\u6CD5\u68C0\u67E5"},e.a.createElement(n.AnchorLink,{to:"#js-\u8BED\u6CD5\u68C0\u67E5","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"js \u8BED\u6CD5\u68C0\u67E5"),e.a.createElement(a.a,{code:`#
eslint eslint-loader
package.json \u4E2D\u6DFB\u52A0
// \u6392\u9664\u7B2C\u4E09\u65B9\u5E93 \u53EA\u68C0\u67E5\u81EA\u5DF1\u7684\u4EE3\u7801
"eslintConfig": { "extends": "airbnb-base"}
#
module: {
  rules: [
    {
      test: /\\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
      options: {
            // \u81EA\u52A8\u4FEE\u590Deslint\u7684\u9519\u8BEF
        fix: true
      }
    }
  ]
}`,lang:"js"}),e.a.createElement("h3",{id:"\u4EE3\u7801\u5207\u5272"},e.a.createElement(n.AnchorLink,{to:"#\u4EE3\u7801\u5207\u5272","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u4EE3\u7801\u5207\u5272"),e.a.createElement(a.a,{code:`1. \u591A\u5165\u53E3 \u81EA\u52A8\u6253\u5305\u591A\u4E2A\u6587\u4EF6
   entry: {
    'jquery': './src/index.js',
    'angular': './src/2.js'
  },
2. \u5F02\u90E8\u7684chunk
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
\u5F15\u5165cdn`,lang:"js"}),e.a.createElement("h3",{id:"dll"},e.a.createElement(n.AnchorLink,{to:"#dll","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"dll"),e.a.createElement(a.a,{code:`#
\u786C\u94FE\u63A5\u4E00\u4E2A \u5305,\u518D\u624B\u52A8scrit\u5F15\u5165\u8FD9\u4E2A\u5305 \u4E4B\u540Ewebpack\u5C31\u4E0D\u7528\u7F16\u8BD1\u4E86
#
yarn add add-asset-html-webpack-plugin
webpack --config webpack.config.dll.js && webpack
# \u6587\u4EF6\u8DEF\u5F84
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
    // \u544A\u8BC9webpack\u54EA\u4E9B\u5E93\u4E0D\u53C2\u4E0E\u6253\u5305\uFF0C\u540C\u65F6\u4F7F\u7528\u65F6\u7684\u540D\u79F0\u4E5F\u5F97\u53D8~
    new webpack.DllReferencePlugin({
        manifest: resolve(__dirname, 'dll/manifest.json')
    }),
    // \u5C06\u67D0\u4E2A\u6587\u4EF6\u6253\u5305\u8F93\u51FA\u53BB\uFF0C\u5E76\u5728html\u4E2D\u81EA\u52A8\u5F15\u5165\u8BE5\u8D44\u6E90
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
    // \u6253\u5305\u751F\u6210\u4E00\u4E2A manifest.json --> \u63D0\u4F9B\u548Cjquery\u6620\u5C04
    new webpack.DllPlugin({
      // \u6620\u5C04\u5E93\u7684\u66B4\u9732\u7684\u5185\u5BB9\u540D\u79F0 \u548C library \u76F8\u540C
      name: '[name]_[hash]',
      path: path.join(__dirname, 'dll/manifest.json'),
    })
  ],
  mode: 'production'
};`,lang:"js"}),e.a.createElement(a.a,{code:`externals: {
    jquery: 'jQuery'
},
new webpack.ProvidePlugin({
   $: path.resolve(path.join(__dirname, 'dll/jquery.js'))
}),`,lang:"js"}),e.a.createElement("h2",{id:"\u66F4\u591A\u63D2\u4EF6"},e.a.createElement(n.AnchorLink,{to:"#\u66F4\u591A\u63D2\u4EF6","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u66F4\u591A\u63D2\u4EF6"),e.a.createElement(a.a,{code:`# \u8F6C\u6362\u8BED\u6CD5es6
babel-loader
babel-core
babel-preset-env
# \u8F6C\u6362es7 async
babel-plugin-transform-runtime
# \u88C5\u9970\u5668
babel-plugin-transform-decorators
babel-plugin-transform-decorators-legacy`,lang:"js"}))));r.default=l=>{const i=e.a.useContext(n.context),u=i.demos;return e.a.useEffect(()=>{var s;l!=null&&(s=l.location)!==null&&s!==void 0&&s.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(l.location.hash.slice(1)))},[]),e.a.createElement(c,{demos:u})}}}]);
