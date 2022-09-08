---
order: 5
group:
  path: /theme
  title: theme
---

## theme

## 以 umi3 为例

### 为 css 设置专属类名前缀

```ts
// .umirc.ts
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

    return `MyClassName${arr.join('-')}-${localName}`.replace(/--/g, '-');
  }
  return localName;
};

export default defineConfig({
  cssLoader: {
    modules: {
      getLocalIdent,
    },
  },
});
```

### 为模块设置专属类名

```ts
// .umirc.ts
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
});
```

### 主题色

### 为模块设置专属类名

```ts
// .umirc.ts
// 更多配置可查看antd官网描述
// https://ant-design.antgroup.com/docs/react/customize-theme-cn
export default defineConfig({
  theme: {
    'primary-color': '#00CA88',
  },
});
```
