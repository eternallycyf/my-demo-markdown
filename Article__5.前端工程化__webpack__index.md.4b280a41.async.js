(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{NF7o:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dEAq");
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dumi_theme__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("H1Ra");










 // memo for page content, to avoid useless re-render since other context fields changed

const PageContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(({
  demos: DUMI_ALL_DEMOS
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "markdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    id: "webpack"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#webpack",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "webpack"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "1-base"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#1-base",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "1. base"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "packjson"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#packjson",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "pack.json"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "yarn add webpack webpack-cli --save-dev\\nyarn add webpack-dev-server -D\\nyarn add html-webpack-plugin --save-dev\\n\\nscripts: {\\n  \\"serve\\": \\"webpack serve \\"\\n  \\"build\\": \\"webpack\\",\\n}\\n\\n\u251C\u2500\u2500 dist\\n\u2502   \u2514\u2500\u2500 main.js\\n\u251C\u2500\u2500 index.html\\n\u251C\u2500\u2500 package.json\\n\u251C\u2500\u2500 src\\n\u2502   \u2514\u2500\u2500 index.js\\n\u2514\u2500\u2500 webpack.config.js\\n\\n\\nconst path = require('path')\\nmodule.exports = {\\n  entry: './src/index.js',\\n  output: {\\n    filename: 'main.js',\\n    path: path.resolve(__dirname, 'dist'),\\n  },\\n  mode: \\"development\\"\\n}",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "webpack-dev-server"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#webpack-dev-server",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "webpack-dev-server"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "yarn add webpack-dev-server -D\\n#\\nconst path = require('path')\\nmodule.exports = {\\n    devServer: {\\n      // html\u9875\u9762\u7684\u8DEF\u5F84 (\u9ED8\u8BA4\u5C31\u662F\u9879\u76EE\u6839\u8DEF\u5F84)\\n      //  \u521D\u59CB\u76F8\u5BF9\u8DEF\u5F84\u662Fwebpack.config \u5982\u679Cdist\u548C\u4ED6\u540C\u7EA7\\n      // contentBase: './dist'\\n      contentBase: path.resolve(__dirname, 'build'),\\n      // \u5F71\u54CD\u672C\u5730\u8D44\u6E90\u7684\u8BBF\u95EE  express.static\\n      // \u662F\u5BF9 output \u6253\u5305\u6587\u4EF6\u7269\u7406\u5B58\u50A8\u4F4D\u7F6E\u7684\u6620\u5C04\\n      publicPath: \\"/assets/\\",\\n      // \u542F\u52A8gzip\u538B\u7F29\\n      compress: true,\\n      port: 8088,\\n      open:true\\n    }\\n}",
    lang: "javascript"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "html-webpack-plugin"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#html-webpack-plugin",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "html-webpack-plugin"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "yarn add html-webpack-plugin -D\\n# webpack.config.js\\n  const HtmlWebpackPlugin = require('html-webpack-plugin')\\n module.exports = {\\n         plugins: [\\n            new HtmlWebpackPlugin({\\n                template: './public/index.html'\\n                 //\u8981\u751F\u6210\u7684\u6587\u4EF6\u540D \u5B58\u5728\u5185\u5B58 \u76EE\u5F55\u4E2D\u4E0D\u663E\u793A\\n                filename: 'index.html',\\n                minify: {\\n                   // \u79FB\u9664\u7A7A\u683C\\n                   collapseWhitespace: true,\\n                   // \u79FB\u9664\u6CE8\u91CA\\n                   removeComments: true\\n                }\\n            })\\n         ]\\n   }",
    lang: "java"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "2webpack-loader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#2webpack-loader",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "2.webpack loader"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "css-\\u548C\\u56FE\\u7247\\u5B57\\u4F53"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#css-\\u548C\\u56FE\\u7247\\u5B57\\u4F53",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "css \\u548C\\u56FE\\u7247\\u5B57\\u4F53"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "postcss"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u81EA\\u52A8\\u6DFB\\u52A0 css \\u7684\\u517C\\u5BB9\\u524D\\u7F00")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# postcss.config.js\\n  const autoprefixer = require('autoprefixer')\\n  module.exports = {\\n        plugins: [autoprefixer]\\n  }\\n#\\n{\\n  test: /\\\\.css$/,\\n  use: ['style-loader', 'css-loader', 'postcss-loader'] },",
    lang: "javascript"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u6837\\u5F0F\\u8868\\u4E2D\\u7684\\u56FE\\u7247\\u548C\\u5B57\\u4F53\\u6587\\u4EF6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "/limit \\u7528\\u6765\\u6307\\u5B9A\\u56FE\\u7247\\u7684\\u5927\\u5C0F\\uFF0C\\u5355\\u4F4D\\u662F\\u5B57\\u8282(byte),\\u53EA\\u6709\\u5C0F\\u4E8E limit \\u5927\\u5C0F\\u7684\\u56FE\\u7247\\uFF0C\\u624D\\u4F1A\\u88AB\\u8F6C\\u4E3A base64 \\u56FE\\u7247")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "#\\n// use \u6570\u7EC4\u4E2D\u6307\u5B9A\u7684 loader \u987A\u5E8F\u662F\u56FA\u5B9A\u7684\\n// \u591A\u4E2A loader \u7684\u8C03\u7528\u987A\u5E8F\u662F\uFF1A\u4ECE\u540E\u5F80\u524D\u8C03\u7528\\n   yarn add style-loader css-loader -D\\n   yarn add less-loader less -D\\n   yarn add sass-loader node-sass -D\\n   yarn add postcss-loader autoprefixer -D\\n   yarn add url-loader file-loader --save-dev\\n# \u6CE8\u610F\u5728 index.js\u4E2D import \u5404\u79CDcss\u6587\u4EF6\\n# webpack.config.js  =>\\nmodule.exports = {\\n  module: {\\n    rules: [\\n       {\\n        test: /\\\\.css$/,\\n        use: [\\n          'style-loader',\\n          'css-loader',\\n          'postcss-loader'\\n        ]\\n       },\\n      {\\n        test: /\\\\.less$/,\\n        use: [\\n        'style-loader',\\n        'css-loader',\\n        'less-loader',\\n        ]\\n      },\\n      {\\n        test: /\\\\.scss$/,\\n        use: [\\n          'style-loader',\\n          'css-loader',\\n          'sass-loader'\\n        ]\\n      },\\n      {\\n     test:/\\\\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,\\n        use: [\\n          'url-loader?limit=16941'\\n        ]\\n      },\\n      {\\n        test: /\\\\.js$/,\\n        exclude: /(node_modules|bower_components)/,\\n        use: {\\n          loader: 'babel-loader',\\n          options: {\\n            presets: ['@babel/preset-env']\\n          }\\n        }\\n      },\\n      {\\n        test: /\\\\.vue$/,\\n        use: 'vue-loader'\\n      }\\n    ]\\n  }\\n}\\n\\n\\n# webpack 5\\nurl-loader \u53EF\u4EE5\u4E0D\u4E0B\u8F7D\u5305 \u5904\u7406\u56FE\u7247\u548C\u5B57\u4F53\u56FE\u6807\\n{ test: /\\\\.(gif|png|jpg|jpeg)/,type: 'asset' },\\n{ test: /\\\\.(eot|svg|ttf|woff|woff2)$/,type: 'asset/resource',\\ngenerator: { filename: 'fonts/[name].[hash:6][ext]' }}\\n//asset/resource \u4E0D\u538B\u7F29\u6210base64  asset => base64",
    lang: "javascript"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u9AD8\\u7EA7\\u8BED\\u6CD5\\u964D\\u7EA7"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u9AD8\\u7EA7\\u8BED\\u6CD5\\u964D\\u7EA7",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u9AD8\\u7EA7\\u8BED\\u6CD5\\u964D\\u7EA7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "yarn add -D babel-loader @babel/core @babel/preset-env\\n{\\n  test: /\\\\.js$/,\\n  exclude: /(node_modules|bower_components)/,\\n  use: {\\n    loader: 'babel-loader',\\n    options: {\\n      presets:  ['@babel/preset-env'] }\\n    }\\n  },",
    lang: "javascript"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "vue-loader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#vue-loader",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "vue-loader"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u5B89\\u88C5\\u52A0\\u8F7D\\u5668")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "npm i vue-loader vue-template-compiler -D\\n\\nconst VueLoaderPlugin =\\n      require('vue-loader/lib/plugin')\\nrules: [\\n  { test: /\\\\.vue$/, use: 'vue-loader' }\\n],\\nplugins: [htmlPlguin, new VueLoaderPlugin()]",
    lang: "javascript"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "file-loader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#file-loader",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "file-loader"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "yarn add file-loader -D\\n use: {\\n   loader: \\"file-loader\\",\\n   options: {\\n     name: '[name]_[hash].[ext]',\\n     outputPath: \\"css/\\"\\n   }\\n }",
    lang: "javascript"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "3\\u9AD8\\u7EA7"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#3\\u9AD8\\u7EA7",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "3.\\u9AD8\\u7EA7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "entry"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#entry",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "entry"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u65B0\u5EFA\u76EE\u5F55src\\n    \u9ED8\u8BA4\u5165\u53E3: ./src/index.js\\n#\\n  \u591A\u5165\u53E3\u6253\u5305\\n  entry: {\\n    'jquery': './src/index.js',\\n    'angular': './src/2.js'\\n  },\\n# \u6839\u76EE\u5F55\u521B\u5EFAwebpack.config.js\\n // entry: string   \u751F\u6210\u4E00\u4E2Achunk \u8F93\u51FA\u4E00\u4E2A bundle\\n // entry: sring[]  \u751F\u6210\u4E00\u4E2Achunk \u8F93\u51FA\u4E00\u4E2A bundle\\n // entry: object   \u6709\u51E0\u4E2A\u5165\u53E3\u6587\u4EF6\u5C31\u751F\u6210\u51E0\u4E2A chunk \u548C bundle\\nmodule.exports = {\\n  entry: \\"./src/main.js\\",\\n}",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "output"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#output",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "output"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "\u9ED8\u8BA4\u51FA\u53E3: ./dist/main.js\\n#\\nmodule.exports = {\\n  output: {\\n    path: path.join(__dirname, \\"dist\\"),\\n    filename: \\"bundle.js\\",\\n    // \u8D44\u6E90\u516C\u4F17\u8DEF\u5F84\u524D\u7F00\\n    // images/a.jpg => /images/a.jpg\\n    publicPath: '/',\\n    chunkFilename: 'js/[name]_chunk.js',\\n    // \u6574\u4E2A\u5E93\u5411\u5916\u4FDD\u7559\u7684\u53D8\u91CF\u540D\\n    library: '[name]'\\n    // \u53D8\u91CF\u540D\u6DFB\u52A0\u5230\u9876\u7EA7\u4F5C\u7528\u57DF global\\n    libraryTarget: 'window'\\n },\\n}",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "mode"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#mode",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "mode"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "module.exports = {\\n  mode: 'development production',\\n};",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "devserver"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#devserver",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "devServer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "module.exports = {\\n  port: 5000,\\n  host: 'localhost',\\n  open: true,\\n  hot: true,\\n  proxy: {\\n /*\\n \u672C\u5730 :5000 \u7AEF\u53E3\u670D\u52A1\u5668\u63A5\u53D7\u5230 /api/xxx \u7684\u8BF7\u6C42\\n \u5C31\u4F1A\u628A\u8BF7\u6C42\u8F6C\u53D1\u5230\u53E6\u5916\u4E00\u4E2A\u670D\u52A1\u5668 :3000\\n */\\n    '/api': {\\n       target: 'http://localhost:3000',\\n  // \u8BF7\u6C42\u8DEF\u5F84\u91CD\u5199\uFF1A\u5C06 /api/xxx --> /xxx \uFF08\u53BB\u6389/api\uFF09\\n       pathRewrite: {\\n         '^/api': ''\\n       }\\n     }\\n  }\\n\\n  // \u4E0D\u663E\u793A\u670D\u52A1\u5668\u65E5\u5FD7\u4FE1\u606F\\n  clientLogLevel: 'none',\\n  // \u9664\u4E86\u4E00\u4E9B\u57FA\u672C\u542F\u52A8\u4FE1\u606F\u4EE5\u5916\uFF0C\u5176\u4ED6\u5185\u5BB9\u90FD\u4E0D\u8981\u663E\u793A\\n  quiet: true,\\n  // \u5982\u679C\u62A5\u9519 \u4E0D\u8981\u5168\u5C4F\u63D0\u793A\\n  overlay: false\\n  // \u542F\u52A8gzip\u538B\u7F29\\n  compress: true,\\n  watchContentBase: true,\\n  watchOptions: {\\n          // \u5FFD\u7565\u6587\u4EF6\\n          ignored: /node_modules/\\n  },\\n\\n  # 4.0 webpack\\n  // \u5F71\u54CD\u672C\u5730\u8D44\u6E90\u7684\u8BBF\u95EE  express.static\\n  // \u662F\u5BF9 output \u6253\u5305\u6587\u4EF6\u7269\u7406\u5B58\u50A8\u4F4D\u7F6E\u7684\u6620\u5C04\\n  publicPath: \\"/assets/\\",\\n  // html\u9875\u9762\u7684\u8DEF\u5F84 (\u9ED8\u8BA4\u5C31\u662F\u9879\u76EE\u6839\u8DEF\u5F84)\\n  // \u521D\u59CB\u76F8\u5BF9\u8DEF\u5F84\u662Fwebpack.config \u5982\u679Cdist\u548C\u4ED6\u540C\u7EA7\\n  // contentBase: './dist'\\n  contentBase: resolve(__dirname, 'dist')\\n  // \u76D1\u89C6 contentBase \u76EE\u5F55\u4E0B\u7684\u6240\u6709\u6587\u4EF6 \u6587\u4EF6\u53D8\u5316\u5C31\u4F1A reload\\n  # 5.0 webpack\\n  // \u9ED8\u8BA4\u6307\u5B9A\u4E3A public \u76EE\u5F55\\n  static: { //false\\n    directory: path.join(__dirname, 'assets'),\\n    publicPath: '/index.html',\\n  }\\n}",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "module"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#module",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "module"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "noparse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#noparse",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "noParse"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "module.exports = {\\n  // \u9632\u6B62 webpack \u89E3\u6790\u8FD9\u4E9B\u6587\u4EF6\\n  // \u8FD9\u4E9B\u6587\u4EF6\u5185\u4E0D\u80FD\u542B\u6709 import require define\\n  // \u53EF\u4EE5\u63D0\u9AD8\u6027\u80FD\\n  module: {\\n    noParse: /jquery|lodash/,\\n  },\\n};",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "rules"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#rules",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "rules"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "module.exports = {\\n  module: {\\n    rules: [\\n      {\\n        test: /\\\\.css$/,\\n        use: ['style-loader', 'css-loader']\\n      },\\n      {\\n        test: /\\\\.js$/\\n        // \u6392\u9664 node_modules \u4E0B\u7684js\u6587\u4EF6\\n        exclude: /node_modules/,\\n        // \u53EA\u68C0\u67E5 src \u4E0B\u7684js\u6587\u4EF6\\n        include: resolve(__dirname, 'scr'),\\n        // pre:\u4F18\u5148\u6267\u884C post:\u5EF6\u540E\u6267\u884C\\n        enforce: 'pre',\\n        loader: 'eslint-loader',\\n        options: { }\\n      },\\n      {\\n        // \u5F53\u89C4\u5219\u5339\u914D\u65F6 \u53EA\u4F7F\u7528\u7B2C\u4E00\u4E2A\u6210\u529F\u7684\u5339\u914D\u89C4\u5219\\n        oneOf: [\\n          {\\n\\n          }\\n        ]\\n       }\\n    ]\\n  }\\n}",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    id: "oneof"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#oneof",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "oneOf"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// \u5F53\u89C4\u5219\u5339\u914D\u65F6 \u53EA\u4F7F\u7528\u7B2C\u4E00\u4E2A\u6210\u529F\u7684\u5339\u914D\u89C4\u5219\\nmodule.exports = {\\n  module: {\\n    rules: [\\n      {\\n        oneOf: [\\n          {\\n            test: /\\\\.(jpg|png|gif)/,\\n            loader: 'url-loader',\\n            options: {\\n              limit: 8 * 1024,\\n              name: '[hash:10].[ext]',\\n              outputPath: 'imgs',\\n              esModule: false,\\n            },\\n          },\\n          {\\n            test: /\\\\.html$/,\\n            loader: 'html-loader',\\n          },\\n          {\\n            exclude: /\\\\.(js|css|less|html|jpg|png|gif)/,\\n            loader: 'file-loader',\\n            options: {\\n              outputPath: 'media',\\n            },\\n          },\\n        ],\\n      },\\n    ],\\n  },\\n};",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "resolve"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#resolve",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "resolve"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "alias"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#alias",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "alias"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "const path = require('path');\\nmodule.exports = {\\n  resolve: {\\n    alias: {\\n      '@': path.resolve(__dirname, 'src'),\\n      '@/components': path.resolve(__dirname, '..', 'src/components'),\\n      '@/utils': path.resolve(__dirname, '..', 'src/utils'),\\n      '@/services': path.resolve(__dirname, '..', 'src/services'),\\n      '@/models': path.resolve(__dirname, '..', 'src/models'),\\n      '@/pages': path.resolve(__dirname, '..', 'src/pages'),\\n    },\\n  },\\n};",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "extensions-modules"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#extensions-modules",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "extensions modules"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "module.exports = {\\n  resolve: {\\n    // \u914D\u7F6E\u7701\u7565\u6587\u4EF6\u8DEF\u5F84\u7684\u540E\u7F00\u540D\\n    extensions: ['.js','.json','.jsx','.css']\\n    // \u544A\u8BC9 webpack \u89E3\u6790\u6A21\u5757\u53BB\u627E\u90A3\u4E2A\u76EE\u5F55\\n    modules: [\\n      resolve(__dirname, '../../node_modules'),\\n      'node_modules'\\n    ]\\n  }\\n}",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "plugins"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#plugins",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "plugins"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "module.exports = {\\n  plugins: [],\\n};",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "externals"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#externals",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "externals"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// \u62D2\u7EDD jqery \u88AB\u6253\u5305\\nmodule.exports = {\\n  externals: {\\n    jquery: 'jQuery',\\n  },\\n  plugins: [\\n    new webpack.ProvidePlugin({\\n      $: 'jquery',\\n    }),\\n  ],\\n};",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "optimization"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#optimization",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Optimization"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "splitchunks"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#splitchunks",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "splitChunks"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// \u5C06 node_modules \u4E2D\u4EE3\u7801\u6253\u5305\u8FDB\u4E00\u4E2A chunk\\n// \u81EA\u52A8\u5206\u6790\u591A\u5165\u53E3 chunk \u6709\u6CA1\u6709\u516C\u5171\u6587\u4EF6 \u6709\u7684\u8BDD\u4F1A\u6253\u5305\u6210\u5355\u72EC\u4E00\u4E2A chunk\\nmodule.exports = {\\n  optimization: {\\n    splitChunks: {\\n      chunks: 'all async',\\n    },\\n  },\\n};",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "devtool"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#devtool",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "devtool"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "source-map"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#source-map",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "source-map"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "module.exports = {\\n  devtool: 'cheap-module-source-map'\\n}\\n#\\nsource-map: \u4E00\u79CD \u63D0\u4F9B\u6E90\u4EE3\u7801\u5230\u6784\u5EFA\u540E\u4EE3\u7801\u6620\u5C04 \u6280\u672F \uFF08\u5982\u679C\u6784\u5EFA\u540E\u4EE3\u7801\u51FA\u9519\u4E86\uFF0C\u901A\u8FC7\u6620\u5C04\u53EF\u4EE5\u8FFD\u8E2A\u6E90\u4EE3\u7801\u9519\u8BEF\uFF09\\n\\n[inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map\\n\\n      source-map\uFF1A\u5916\u90E8\\n        \u9519\u8BEF\u4EE3\u7801\u51C6\u786E\u4FE1\u606F \u548C \u6E90\u4EE3\u7801\u7684\u9519\u8BEF\u4F4D\u7F6E\\n      inline-source-map\uFF1A\u5185\u8054\\n        \u53EA\u751F\u6210\u4E00\u4E2A\u5185\u8054source-map\\n        \u9519\u8BEF\u4EE3\u7801\u51C6\u786E\u4FE1\u606F \u548C \u6E90\u4EE3\u7801\u7684\u9519\u8BEF\u4F4D\u7F6E\\n      hidden-source-map\uFF1A\u5916\u90E8\\n        \u9519\u8BEF\u4EE3\u7801\u9519\u8BEF\u539F\u56E0\uFF0C\u4F46\u662F\u6CA1\u6709\u9519\u8BEF\u4F4D\u7F6E\\n        \u4E0D\u80FD\u8FFD\u8E2A\u6E90\u4EE3\u7801\u9519\u8BEF\uFF0C\u53EA\u80FD\u63D0\u793A\u5230\u6784\u5EFA\u540E\u4EE3\u7801\u7684\u9519\u8BEF\u4F4D\u7F6E\\n      eval-source-map\uFF1A\u5185\u8054\\n        \u6BCF\u4E00\u4E2A\u6587\u4EF6\u90FD\u751F\u6210\u5BF9\u5E94\u7684source-map\uFF0C\u90FD\u5728eval\\n        \u9519\u8BEF\u4EE3\u7801\u51C6\u786E\u4FE1\u606F \u548C \u6E90\u4EE3\u7801\u7684\u9519\u8BEF\u4F4D\u7F6E\\n      nosources-source-map\uFF1A\u5916\u90E8\\n        \u9519\u8BEF\u4EE3\u7801\u51C6\u786E\u4FE1\u606F, \u4F46\u662F\u6CA1\u6709\u4EFB\u4F55\u6E90\u4EE3\u7801\u4FE1\u606F\\n      cheap-source-map\uFF1A\u5916\u90E8\\n        \u9519\u8BEF\u4EE3\u7801\u51C6\u786E\u4FE1\u606F \u548C \u6E90\u4EE3\u7801\u7684\u9519\u8BEF\u4F4D\u7F6E\\n        \u53EA\u80FD\u7CBE\u786E\u7684\u884C\\n      cheap-module-source-map\uFF1A\u5916\u90E8\\n        \u9519\u8BEF\u4EE3\u7801\u51C6\u786E\u4FE1\u606F \u548C \u6E90\u4EE3\u7801\u7684\u9519\u8BEF\u4F4D\u7F6E\\n        module\u4F1A\u5C06loader\u7684source map\u52A0\u5165\\n\\n    \u5185\u8054 \u548C \u5916\u90E8\u7684\u533A\u522B\uFF1A1. \u5916\u90E8\u751F\u6210\u4E86\u6587\u4EF6\uFF0C\u5185\u8054\u6CA1\u6709 2. \u5185\u8054\u6784\u5EFA\u901F\u5EA6\u66F4\u5FEB\\n\\n      \u5F00\u53D1\u73AF\u5883\uFF1A\u901F\u5EA6\u5FEB\uFF0C\u8C03\u8BD5\u66F4\u53CB\u597D\\n        \u901F\u5EA6\u5FEB(eval>inline>cheap>...)\\n          eval-cheap-souce-map\\n          eval-source-map\\n        \u8C03\u8BD5\u66F4\u53CB\u597D\\n          souce-map\\n          cheap-module-souce-map\\n          cheap-souce-map\\n\\n        --> eval-source-map  / eval-cheap-module-souce-map\\n\\n      \u751F\u4EA7\u73AF\u5883\uFF1A\u6E90\u4EE3\u7801\u8981\u4E0D\u8981\u9690\u85CF? \u8C03\u8BD5\u8981\u4E0D\u8981\u66F4\u53CB\u597D\\n        \u5185\u8054\u4F1A\u8BA9\u4EE3\u7801\u4F53\u79EF\u53D8\u5927\uFF0C\u6240\u4EE5\u5728\u751F\u4EA7\u73AF\u5883\u4E0D\u7528\u5185\u8054\\n        nosources-source-map \u5168\u90E8\u9690\u85CF\\n        hidden-source-map \u53EA\u9690\u85CF\u6E90\u4EE3\u7801\uFF0C\u4F1A\u63D0\u793A\u6784\u5EFA\u540E\u4EE3\u7801\u9519\u8BEF\u4FE1\u606F\\n\\n        --> source-map / cheap-module-souce-map",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "demo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#demo",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "demo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "css-\\u62BD\\u79BB"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#css-\\u62BD\\u79BB",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "css \\u62BD\\u79BB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "plugins: [\\n   new MiniCssExtractPlugin({\\n     // \u5BF9\u8F93\u51FA\u7684css\u6587\u4EF6\u8FDB\u884C\u91CD\u547D\u540D\\n     filename: 'css/built.css'\\n   }),\\n   // \u538B\u7F29css\\n   new OptimizeCssAssetsWebpackPlugin()\\n]\\n\\n#\\n  {\\n        test: /\\\\.css$/,\\n        use: [ 'file-loader']\\n             ['file-loader?name=[name].bundle[hash].css']\\n  },",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "js-\\u62BD\\u79BB"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#js-\\u62BD\\u79BB",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "js \\u62BD\\u79BB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "output: {\\n    filename: 'js/[name].js',\\n    path: path.resolve(__dirname, 'dist'),\\n  },",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "js-\\u8BED\\u6CD5\\u68C0\\u67E5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#js-\\u8BED\\u6CD5\\u68C0\\u67E5",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "js \\u8BED\\u6CD5\\u68C0\\u67E5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "#\\neslint eslint-loader\\npackage.json \u4E2D\u6DFB\u52A0\\n// \u6392\u9664\u7B2C\u4E09\u65B9\u5E93 \u53EA\u68C0\u67E5\u81EA\u5DF1\u7684\u4EE3\u7801\\n\\"eslintConfig\\": { \\"extends\\": \\"airbnb-base\\"}\\n#\\nmodule: {\\n  rules: [\\n    {\\n      test: /\\\\.js$/,\\n      exclude: /node_modules/,\\n      loader: 'eslint-loader',\\n      options: {\\n            // \u81EA\u52A8\u4FEE\u590Deslint\u7684\u9519\u8BEF\\n        fix: true\\n      }\\n    }\\n  ]\\n}",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u4EE3\\u7801\\u5207\\u5272"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u4EE3\\u7801\\u5207\\u5272",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u4EE3\\u7801\\u5207\\u5272"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "1. \u591A\u5165\u53E3 \u81EA\u52A8\u6253\u5305\u591A\u4E2A\u6587\u4EF6\\n   entry: {\\n    'jquery': './src/index.js',\\n    'angular': './src/2.js'\\n  },\\n2. \u5F02\u90E8\u7684chunk\\n   require.ensure([],function(_require){\\n     _require('./xxx')\\n   })\\n  import('./2.css').then(() => {\\n    ...\\n  })\\n}\\n#\\n3.\\noptimization: {\\n  splitChunks: {\\n    chunks: 'all'\\n  }\\n}\\n#\\nexternals: {\\n  jquery: 'jQuery'\\n}\\n\u5F15\u5165cdn",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "dll"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#dll",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "dll"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "#\\n\u786C\u94FE\u63A5\u4E00\u4E2A \u5305,\u518D\u624B\u52A8scrit\u5F15\u5165\u8FD9\u4E2A\u5305 \u4E4B\u540Ewebpack\u5C31\u4E0D\u7528\u7F16\u8BD1\u4E86\\n#\\nyarn add add-asset-html-webpack-plugin\\nwebpack --config webpack.config.dll.js && webpack\\n# \u6587\u4EF6\u8DEF\u5F84\\n  webpack.config.js\\n  webpack.config.dll.js\\n  dist\\n     index.html\\n  src\\n  public\\n  dll\\n     jquery\\n     manifest.json\\n# webpack.config.js\\nconst path = require('path')\\nconst webpack = require('webpack');\\nconst HtmlWebpackPlugin = require('html-webpack-plugin');\\nconst AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');\\nmodule.export = {\\n  ...\\n  externals: {\\n    jquery: 'jQuery'\\n  },\\n  plugins:[\\n    new HtmlWebpackPlugin({\\n      template: './index.html',\\n      filename: 'index.html',\\n      minify: { removeComments: true }\\n    }),\\n    // \u544A\u8BC9webpack\u54EA\u4E9B\u5E93\u4E0D\u53C2\u4E0E\u6253\u5305\uFF0C\u540C\u65F6\u4F7F\u7528\u65F6\u7684\u540D\u79F0\u4E5F\u5F97\u53D8~\\n    new webpack.DllReferencePlugin({\\n        manifest: resolve(__dirname, 'dll/manifest.json')\\n    }),\\n    // \u5C06\u67D0\u4E2A\u6587\u4EF6\u6253\u5305\u8F93\u51FA\u53BB\uFF0C\u5E76\u5728html\u4E2D\u81EA\u52A8\u5F15\u5165\u8BE5\u8D44\u6E90\\n    new AddAssetHtmlPlugin({\\n       filepath: path.resolve(__dirname, 'dll/jquery.js'),\\n       publicPath: '../dll',\\n       outputPath: 'vendor',\\n    }),\\n  ]\\n}\\n# webpack.config.dll.js\\nconst path = require('path');\\nconst webpack = require('webpack')\\nmodule.exports = {\\n  entry: {\\n    jquery: ['jquery'],\\n  },\\n  output: {\\n    filename: '[name].js',\\n    path: path.resolve(__dirname, 'dll'),\\n    library: '[name]_[hash]'\\n  },\\n  plugins: [\\n    // \u6253\u5305\u751F\u6210\u4E00\u4E2A manifest.json --> \u63D0\u4F9B\u548Cjquery\u6620\u5C04\\n    new webpack.DllPlugin({\\n      // \u6620\u5C04\u5E93\u7684\u66B4\u9732\u7684\u5185\u5BB9\u540D\u79F0 \u548C library \u76F8\u540C\\n      name: '[name]_[hash]',\\n      path: path.join(__dirname, 'dll/manifest.json'),\\n    })\\n  ],\\n  mode: 'production'\\n};",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "externals: {\\n    jquery: 'jQuery'\\n},\\nnew webpack.ProvidePlugin({\\n   $: path.resolve(path.join(__dirname, 'dll/jquery.js'))\\n}),",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u66F4\\u591A\\u63D2\\u4EF6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u66F4\\u591A\\u63D2\\u4EF6",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u66F4\\u591A\\u63D2\\u4EF6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u8F6C\u6362\u8BED\u6CD5es6\\nbabel-loader\\nbabel-core\\nbabel-preset-env\\n# \u8F6C\u6362es7 async\\nbabel-plugin-transform-runtime\\n# \u88C5\u9970\u5668\\nbabel-plugin-transform-decorators\\nbabel-plugin-transform-decorators-legacy",
    lang: "js"
  })));
});
/* harmony default export */ __webpack_exports__["default"] = (props => {
  const _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["context"]),
        demos = _React$useContext.demos; // scroll to anchor after page component loaded


  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    var _props$location;

    if (props !== null && props !== void 0 && (_props$location = props.location) !== null && _props$location !== void 0 && _props$location.hash) {
      dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"].scrollToAnchor(decodeURIComponent(props.location.hash.slice(1)));
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageContent, {
    demos: demos
  });
});

//# sourceURL=webpack:///./src/Article/5.%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/webpack/index.md?`)}}]);
