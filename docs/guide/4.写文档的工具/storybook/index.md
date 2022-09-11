---
order: 4
nav:
  title: 前端之路
  path: /guide
---

# storyBook

## 准备阶段

```js
https://storybook.js.org/docs/react/get-started/install

npx storybook init
yarn storybook
http://localhost:6006/?path=/story/example-introduction--page

#
npm i -D @storybook/addo-info
npm i @types/storybook__addon-info

# 自动生成api文档 react-docgen
yarn add --dev react-docgen-typescript-loader
```

```js
# .stroybook/preview.js

import { withInfo } from '@storybook/addon-info';

const wrapperStyle: React.CSSProperties = {
  padding: '20px 40px'
}

const storyWrapper = (stroyFn: any) => (
  <div style={wrapperStyle}>
    <h3>组件演示</h3>
    {stroyFn()}
  </div>
)

const storyWrapper = (stroyFn: any) => (
  <div style={wrapperStyle}>
    <h3>组件演示</h3>
    {stroyFn()}
  </div>
)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  info: {
    inline: true, header: false
  },
  layout: 'centered',
}


export const decorators = [
  storyWrapper,
  withInfo,
];
```

## storyBook

### 一级 menu

```js
# 一级menu xxx.stroies.mdx
// 可以使用md语法 不需要retun
import { Meta } from "@storybook/addon-docs";
<Meta title="Example/Introduction" />
<style>
  {
  `
    .xxx{ color: red}
  `
 }
</style>
<span>hello</span>
# 一级menu xxx.stroies.tsx
import { ComponentStory, ComponentMeta } from '@storybook/react';
export default {
  //   title: 'Example/Page',
  title:'一级menu/二级menu',
  component: 组件名,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}as ComponentMeta<typeof 引入的组件名>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

```

### 二级 menu

```js
# 导出几个就会生成几个二级 menu
xxx.stories.tsx
export const xxx = () =>{

}
```

## api-tsx

### layout

```js
export const parameters = {
  // centered fullscreen padded centered
  // padding 组件自动加Padding
  layout: 'padded',
  // 只对具体组件生效,
  parameters: {
    layout: 'centered',
  },
};
# 具体组件
const Template = () => ({
 // Your template goes here
});
export const WithLayout= Template.bind({});
WithLayout.parameters = {
  layout: 'centered',
};
```

### ComponentStory

```js
import { ComponentStory, ComponentMeta } from '@storybook/react';
const Template: ComponentStory<typeof Page> = args => <Page {...args} />;

export const LoggedOut = Template.bind({});
```

## api-mdx

### layout

```js
<!-- xxx.stories.mdx -->
import { Meta } from '@storybook/addon-docs';
import { Button } from './Button';
<Meta
  title="Button"
  parameters={{
    layout: 'centered',
  }}
  component={Button}
/>
# 具体组件
<!-- Button.stories.mdx -->
import { Meta, Story } from '@storybook/addon-docs';

import { Button } from './Button';

<Meta title="Button" component={Button}/>

export const Template = () => ({
  //👇 Your template goes here
});

<Story
  name="WithLayout"
  parameters={{
    layout: 'centered',
  }}>
  {Template.bind({})}
</Story>
```

## api-storiesOf

### demo

```js
# my.stories.tsx
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

const Button = (props: any) => {
  const { children } = props
  return (
    <button>{children}</button>
  )
}

const styles: React.CSSProperties = {
  textAlign: 'center'
}

const CenterDecorator = (storyFn:any) =>
<div style={styles}>{storyFn()}</div>

const defaultButton = () => (
  <Button onClick={action('clicked')}> default button </Button>
)

const buttonWithSize = () => (
  <>
    <Button size="lg"> large button </Button>
    <Button size="sm"> small button </Button>
  </>
)

const buttonWithType = () => (
  <>
    <Button btnType="primary"> primary button </Button>
    <Button btnType="danger"> danger button </Button>
    <Button btnType="link" href="https://google.com"> link button </Button>
  </>
)
storiesOf('Button组件', module)
  .addDecorator(CenterDecorator)
  .add('Button', defaultButton)
  .add('不同尺寸的 Button', buttonWithSize, {
     info: {inline:false }
   })
  .add('不同类型的 Button', buttonWithType)


```

## addo-info

```js
import { withInfo } from '@storybook/addon-info';
 .addDecorator(withInfo)
  .addParameters({
    info: {
      // 可以使用markdown
      text: "自定义内容",
      inline: true
    }
  })
```

## react-docgen

```js
# .umirc.ts
  chainWebpack(config) {
    config.module.rules.push({
      test: /\.tsx?$/,
      include: path.resolve(__dirname, "./src"),
      use: [
        require.resolve("ts-loader"),
        {
          loader: require.resolve('react-docgen-typescript-loader'),
          options: {
            shouldExtractLiteralValuesFromEnum: true,
            tsconfigPath: path.resolve(__dirname, "../tsconfig.json"),
            propFilter: (prop) => {
              if (prop.parent) {
                return !prop.parent.fileName.includes('node_modules')
              }
              return true
            }
          },
        }
      ]
    })
    config.resolve.extensions.push(".ts", ".tsx");
    return config
  }
#  xxx. stories.tsx
React.xxx 必须手动引入 import {xxx} from 'react'
组件必须export
export const xxx = () => {}
Button.defaultProps = {
  disabled: false
}
```

````js
# 注释
/**
 * button测试注释功能
 * ## Button header
 * ```js
 *  cosnt button = this.button
 * ```
 * @param {boolean} props 参数
 * @returns
 */
# descirption
interface BaseButtonProps {
  className?: string;
  /**设置Button 的禁用 */
  disabled?: boolean;
  size?: 'lg' | 'sm';
  type?: 'primary' | 'default' | 'danger' | 'link';
  children?: React.ReactNode,
  href?: string
}
````

- 组件间的间距

```js
import { addDecorator } from '@storybook/react';
const wrapperStyle: React.CSSProperties = {
  padding: '20px 40px',
};
const storyWrapper = (stroyFn: any) => (
  <div style={wrapperStyle}>
    <h3>组件演示</h3>
    {stroyFn()}
  </div>
);
addDecorator(storyWrapper);
```

## 部署

```yaml
# 生成dist
yarn build-storybook
```

```js
# .travis.yml
language: node_js
node_js:
  - lts/*
install:
  - yarn install # npm ci
script:
  - yarn docs:build # npm run docs:build
deploy:
  provider: pages
  skip_cleanup: true
  local_dir: ./storybook-static
  github_token: $GITHUB_TOKEN # 在 GitHub 中生成，用于允许 Travis 向你的仓库推送代码。在 Travis 的项目设置页面进行配置，设置为 secure variable
  keep_history: true
  on:
    branch: master

```

```js
# ./deploy.sh
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 删除旧的文件
rm -rf storybook-static

# 生成新的压缩文件
yarn build-storybook

# 进入生成的文件夹
cd storybook-static

# 复制一个 index.html并命名为 404.html 解决 historyAPI 404问题
cp index.html 404.html

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:eternallycyf/node-script-router-inject-demo.git master:gh-pages

cd -
```

```js
# package.json
"deploy": "bash ./deploy.sh"

yarn deploy
```
