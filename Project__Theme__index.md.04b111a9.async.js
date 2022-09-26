(self.webpackChunkmy_demo_markdown=self.webpackChunkmy_demo_markdown||[]).push([[6689],{16694:function(m,o,t){"use strict";t.r(o);var s=t(12924),e=t.n(s),n=t(16924),u=t(53401);const l=e().memo(({demos:a})=>e().createElement(e().Fragment,null,e().createElement("div",{className:"markdown"},e().createElement("h2",{id:"theme"},e().createElement(n.AnchorLink,{to:"#theme","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"theme"),e().createElement("h2",{id:"\u4EE5-umi3-\u4E3A\u4F8B"},e().createElement(n.AnchorLink,{to:"#\u4EE5-umi3-\u4E3A\u4F8B","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u4EE5 umi3 \u4E3A\u4F8B"),e().createElement("h3",{id:"\u4E3A-css-\u8BBE\u7F6E\u4E13\u5C5E\u7C7B\u540D\u524D\u7F00"},e().createElement(n.AnchorLink,{to:"#\u4E3A-css-\u8BBE\u7F6E\u4E13\u5C5E\u7C7B\u540D\u524D\u7F00","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u4E3A css \u8BBE\u7F6E\u4E13\u5C5E\u7C7B\u540D\u524D\u7F00"),e().createElement(u.Z,{code:`// .umirc.ts
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
});`,lang:"ts"}),e().createElement("h3",{id:"\u4E3A\u6A21\u5757\u8BBE\u7F6E\u4E13\u5C5E\u7C7B\u540D"},e().createElement(n.AnchorLink,{to:"#\u4E3A\u6A21\u5757\u8BBE\u7F6E\u4E13\u5C5E\u7C7B\u540D","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u4E3A\u6A21\u5757\u8BBE\u7F6E\u4E13\u5C5E\u7C7B\u540D"),e().createElement(u.Z,{code:`// .umirc.ts
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
});`,lang:"ts"}),e().createElement("h3",{id:"\u4E3B\u9898\u8272"},e().createElement(n.AnchorLink,{to:"#\u4E3B\u9898\u8272","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u4E3B\u9898\u8272"),e().createElement("h3",{id:"\u4E3A\u6A21\u5757\u8BBE\u7F6E\u4E13\u5C5E\u7C7B\u540D-1"},e().createElement(n.AnchorLink,{to:"#\u4E3A\u6A21\u5757\u8BBE\u7F6E\u4E13\u5C5E\u7C7B\u540D-1","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u4E3A\u6A21\u5757\u8BBE\u7F6E\u4E13\u5C5E\u7C7B\u540D"),e().createElement(u.Z,{code:`// .umirc.ts
// \u66F4\u591A\u914D\u7F6E\u53EF\u67E5\u770Bantd\u5B98\u7F51\u63CF\u8FF0
// https://ant-design.antgroup.com/docs/react/customize-theme-cn
export default defineConfig({
  theme: {
    'primary-color': '#00CA88',
  },
});`,lang:"ts"}))));o.default=a=>{const i=e().useContext(n.context),r=i.demos;return e().useEffect(()=>{var c;a!=null&&(c=a.location)!==null&&c!==void 0&&c.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(a.location.hash.slice(1)))},[]),e().createElement(l,{demos:r})}}}]);
