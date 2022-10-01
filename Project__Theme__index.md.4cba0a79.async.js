(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{mZg7:function(m,o,a){"use strict";a.r(o);var s=a("cDcd"),e=a.n(s),n=a("dEAq"),d=a.n(n),u=a("H1Ra");const i=e.a.memo(({demos:t})=>e.a.createElement(e.a.Fragment,null,e.a.createElement("div",{className:"markdown"},e.a.createElement("h2",{id:"theme"},e.a.createElement(n.AnchorLink,{to:"#theme","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"theme"),e.a.createElement("h2",{id:"\u4EE5-umi3-\u4E3A\u4F8B"},e.a.createElement(n.AnchorLink,{to:"#\u4EE5-umi3-\u4E3A\u4F8B","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u4EE5 umi3 \u4E3A\u4F8B"),e.a.createElement("h3",{id:"\u4E3A-css-\u8BBE\u7F6E\u4E13\u5C5E\u7C7B\u540D\u524D\u7F00"},e.a.createElement(n.AnchorLink,{to:"#\u4E3A-css-\u8BBE\u7F6E\u4E13\u5C5E\u7C7B\u540D\u524D\u7F00","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u4E3A css \u8BBE\u7F6E\u4E13\u5C5E\u7C7B\u540D\u524D\u7F00"),e.a.createElement(u.a,{code:`// .umirc.ts
import { winPath } from '@umijs/utils';
// or import slash from 'slash2';
const getLocalIdent = (context, localIdentName, localName) => {
  if (
    context.resourcePath.includes('node_modules') ||
    context.resourcePath.includes('mixin.less') ||
    context.resourcePath.includes('global.less')
  ) {
    return localName;
  }
  const match = context.resourcePath.match(/src(.*)/);
  if (match && match[1]) {
    const antdPath = match[1].replace('.less', '');
    const arr = winPath(antdPath)
      .split('/')
      .map((a: string) => a.replace(/([A-Z])/g, '-$1'))
      .map((a: string) => a.toLowerCase());

    return \`MyClassName\${arr.join('-')}-\${localName}\`.replace(/--/g, '-');
  }
  return localName;
};

export default defineConfig({
  cssLoader: {
    modules: {
      getLocalIdent,
    },
  },
});`,lang:"ts"}),e.a.createElement("h3",{id:"\u4E3A\u6A21\u5757\u8BBE\u7F6E\u4E13\u5C5E\u7C7B\u540D"},e.a.createElement(n.AnchorLink,{to:"#\u4E3A\u6A21\u5757\u8BBE\u7F6E\u4E13\u5C5E\u7C7B\u540D","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u4E3A\u6A21\u5757\u8BBE\u7F6E\u4E13\u5C5E\u7C7B\u540D"),e.a.createElement(u.a,{code:`// .umirc.ts
const getModulePackageName = module => {
  if (!module.context) {
    return null;
  }
  const nodeModulesPath = path.join(__dirname, '/node_modules/');
  if (module.context.substring(0, nodeModulesPath.length) != nodeModulesPath) {
    return null;
  }
  const moduleRelativePath = module.context.substring(nodeModulesPath.length);
  const [moduleDirName] = moduleRelativePath.split(path.sep);
  let packageName = moduleDirName;
  // handle tree shaking
  if (packageName.match('^_')) {
    // eslint-disable-next-line prefer-destructuring
    packageName = packageName.match(/^_(@?[^@]+)/)[1];
  }
  return packageName;
};

export default defineConfig({
  chainWebpack: config => {
    // optimize chunks
    config.optimization.runtimeChunk(false).splitChunks({
      chunks: 'async',
      name: 'vendors',
      maxSize: 0,
      cacheGroups: {
        vendors: {
          test: modules => {
            const packageName = getModulePackageName(module);
            if (packageName) {
              return (
                ['bizcharts', '@antv_data-set', '@ant-design_icons'].indexOf(
                  packageName,
                ) >= 0
              );
            }
            return false;
          },
          name(module) {
            const packageName = getModulePackageName(module);
            if (['bizcharts', '@antv_data-set'].indexOf(packageName) >= 0) {
              return 'viz';
            }
            if (['@ant-design_icons'].indexOf(packageName) >= 0) {
              return 'icons';
            }
            return 'misc';
          },
        },
      },
    });
  },
});`,lang:"ts"}),e.a.createElement("h3",{id:"\u4E3B\u9898\u8272"},e.a.createElement(n.AnchorLink,{to:"#\u4E3B\u9898\u8272","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u4E3B\u9898\u8272"),e.a.createElement("h3",{id:"\u4E3A\u6A21\u5757\u8BBE\u7F6E\u4E13\u5C5E\u7C7B\u540D-1"},e.a.createElement(n.AnchorLink,{to:"#\u4E3A\u6A21\u5757\u8BBE\u7F6E\u4E13\u5C5E\u7C7B\u540D-1","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u4E3A\u6A21\u5757\u8BBE\u7F6E\u4E13\u5C5E\u7C7B\u540D"),e.a.createElement(u.a,{code:`// .umirc.ts
// \u66F4\u591A\u914D\u7F6E\u53EF\u67E5\u770Bantd\u5B98\u7F51\u63CF\u8FF0
// https://ant-design.antgroup.com/docs/react/customize-theme-cn
export default defineConfig({
  theme: {
    'primary-color': '#00CA88',
  },
});`,lang:"ts"}))));o.default=t=>{const l=e.a.useContext(n.context),r=l.demos;return e.a.useEffect(()=>{var c;t!=null&&(c=t.location)!==null&&c!==void 0&&c.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(t.location.hash.slice(1)))},[]),e.a.createElement(i,{demos:r})}}}]);
