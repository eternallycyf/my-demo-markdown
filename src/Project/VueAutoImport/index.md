---
order: 6
group:
  path: /VueAutoImport
  title: VueAutoImport
---

# VueAutoImport

## npm install -D unplugin-vue-components unplugin-auto-import

## vue-config-js

```tsx | pure
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');

module.exports = {
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
};
```

## tsconfig.json

```json
    "typeRoots": [
      "./node_modules/@types/",
      "./types"
    ],

```

## example

- 此时根目录会自动生成 `auto-imports.d.ts` `components.d.ts`
- 随便一个 `vue` 文件 输入 `a-table` 即可键入提示 且自动引入懒加载
- `data` => `dataSource`
