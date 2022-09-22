import { defineConfig } from 'dumi';
const path = require('path');

const repo = 'my-demo-markdown';

export default defineConfig({
  define: {
    'process.env': process.env,
  },
  title: repo,
  favicon:
    process.env.APP_ENV === 'development'
      ? '/images/favicon.ico'
      : `/${repo}/images/favicon.ico`,
  logo:
    process.env.APP_ENV === 'development'
      ? '/images/logo.png'
      : `/${repo}/images/logo.png`,
  outputPath: 'docs-dist',
  mode: 'site',
  hash: true,
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/eternallycyf/my-demo-markdown',
    },
  ],
  // 现在使用github actions来部署，所以不需要在生产模式指定 ${repo} 基础路径
  // base: process.env.APP_ENV === 'development' ? `/${repo}` : `/`,
  // publicPath: process.env.APP_ENV === 'development' ? `/${repo}` : `/`,
  base: process.env.APP_ENV === 'development' ? '/' : `/${repo}`,
  publicPath: process.env.APP_ENV === 'development' ? '/' : `/${repo}/`,
  fastRefresh: {},
  // cssModulesTypescriptLoader: {},
  // cssnano: { normalizeUrl: false, },
  alias: {
    src: path.resolve(__dirname, '.', './src/'),
    public: path.resolve(__dirname, '.', './public/'),
    Components: path.resolve(__dirname, '.', 'src/Components/'),
    MyComponents: path.resolve(__dirname, '.', 'src/MyComponents/'),
    style: path.resolve(__dirname, '.', 'src/style/'),
  },
  links: [{ rel: 'stylesheet', type: 'text/css', href: `../css/global.less` }],
  nodeModulesTransform: {
    type: 'none',
  },
  devtool: 'eval',
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],

  exportStatic: {},
  ignoreMomentLocale: true,
  dynamicImport: {
    loading: '@/Loading',
  },
  // chunks: ['vendors', 'umi'],
  // chainWebpack: function (config, { webpack }) {
  //   config.merge({
  //     optimization: {
  //       minimize: true,
  //       splitChunks: {
  //         chunks: 'async',
  //         minSize: 30000, //文件最小打包体积，单位byte，默认30000，若单个文件不满足会合并其他文件组成一个
  //         minChunks: 2, //最小使用到次数，超过2次执行
  //         automaticNameDelimiter: '.', //连接符
  //         cacheGroups: {
  //           vendor: {
  //             // 基本框架
  //             name: 'vendors',
  //             test: /^.*node_modules[\\/](?!react|react-dom|antd).*$/,
  //             chunks: 'all',
  //             priority: 10,
  //           },
  //           echartsVenodr: {
  //             // 异步加载echarts包
  //             name: 'echartsVenodr',
  //             test: /(echarts|zrender)/,
  //             chunks: 'async',
  //             priority: 10, // 高于async-commons优先级
  //           },
  //           'async-commons': {
  //             // 其余异步加载包
  //             chunks: 'async',
  //             minChunks: 2,
  //             name: 'async-commons',
  //             priority: 9,
  //           },
  //           commons: {
  //             // 其余同步加载包
  //             chunks: 'all',
  //             minChunks: 2,
  //             name: 'commons',
  //             priority: 8,
  //           },
  //         },
  //       },
  //     },
  //   });
  // },
  externals: {
    //   react: 'window.React',
    //   'react-dom': 'window.ReactDOM',
    // moment: 'window.moment',
    // echarts: 'window.echarts',
    // d3: 'window.d3',
    // exceljs: 'window.exceljs',
  },
  styles: [
    `.snow-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.02);
    pointer-events: none;
    z-index: 100001;
  }`,
  ],
  headScripts: [
    { src: 'https://cdn.bootcdn.net/ajax/libs/three.js/0.144.0/three.js' },
    { src: 'https://cdn.bootcdn.net/ajax/libs/jquery/3.6.1/jquery.js' },
  ],
  scripts: [
    {
      content: `(function(){
        let divs = document.createElement('div');
        divs.className = 'snow-container';
        document.querySelector('body')?.appendChild(divs);
        })()
      `,
      charset: 'utf-8',
    },
    {
      src: `/${repo}/js/show.js`,
    },
    //   'https://unpkg.com/react@18.2.0/umd/react.production.min.js',
    //   'https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js',
    // 'https://unpkg.com/moment@2.29.4/moment.js',
    // 'https://unpkg.com/echarts@5.3.3/dist/echarts.js',
    // 'https://unpkg.com/d3@7.6.1/dist/d3.min.js',
    // 'https://unpkg.com/exceljs@4.3.0/dist/exceljs.min.js',
  ],
});
