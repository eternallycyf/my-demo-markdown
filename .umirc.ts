import { defineConfig } from 'dumi';
const path = require("path");

const repo = 'my-demo-markdown';

export default defineConfig({
  title: repo,
  favicon: '/images/favicon.ico',
  logo: '/images/logo.png',
  outputPath: 'docs-dist',
  mode: 'site',
  hash: true,
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  fastRefresh: {},
  ignoreMomentLocale: true,
  // cssModulesTypescriptLoader: {},
  // cssnano: { normalizeUrl: false, },
  exportStatic: {},
  alias: {
    src: path.resolve(__dirname, '.', './src/'),
    Components: path.resolve(__dirname, '.', 'src/Components/'),
    MyComponents: path.resolve(__dirname, '.', 'src/MyComponents/'),
    style: path.resolve(__dirname, '.', 'src/style/'),
  },
  links: [
    { rel: 'stylesheet', type: 'text/css', href: `../css/global.less` },
  ],
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
