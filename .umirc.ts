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
  base: process.env.APP_ENV === 'development' ? '/' : `/${repo}`,
  publicPath: process.env.APP_ENV === 'development' ? '/' : `/${repo}/`,
  // base: process.env.APP_ENV === 'development' ? `/${repo}` : `/`,
  // publicPath: process.env.APP_ENV === 'development' ? `/${repo}` : `/`,
  fastRefresh: {},
  // cssModulesTypescriptLoader: {},
  // cssnano: { normalizeUrl: false, },
  exportStatic: {},
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
  devtool:
    process.env.NODE_ENV === 'development' ? 'cheap-module-source-map' : 'eval',
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
});
