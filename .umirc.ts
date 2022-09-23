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
  // cssModulesTypescriptLoader: {},
  // cssnano: { normalizeUrl: false, },
  alias: {
    src: path.resolve(__dirname, '.', './src/'),
    public: path.resolve(__dirname, '.', './public/'),
    Components: path.resolve(__dirname, '.', 'src/Components/'),
    MyComponents: path.resolve(__dirname, '.', 'src/MyComponents/'),
    style: path.resolve(__dirname, '.', 'src/style/'),
  },
  links: [
    { rel: 'stylesheet', type: 'text/css', href: `/${repo}/css/global.less` },
  ],
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  hash: true,
  targets: {
    chrome: 79,
    firefox: false,
    safari: false,
    edge: false,
    ios: false,
  },
  devtool: false,
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
  // exportStatic: {},
  ignoreMomentLocale: true,
  dynamicImport: {
    loading: '@/Loading',
  },
  esbuild: {},
  chunks: ['vendors', 'umi'],
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
  externals: {
    react: 'window.React',
    'react-dom': 'window.ReactDOM',
    moment: 'window.moment',
    echarts: 'window.echarts',
    d3: 'window.d3',
    exceljs: 'window.exceljs',
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
    'https://unpkg.com/react@18.2.0/umd/react.production.min.js',
    'https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js',
    'https://unpkg.com/moment@2.29.4/moment.js',
    'https://unpkg.com/echarts@5.3.3/dist/echarts.js',
    'https://unpkg.com/d3@7.6.1/dist/d3.min.js',
    'https://unpkg.com/exceljs@4.3.0/dist/exceljs.min.js',
  ],
});
