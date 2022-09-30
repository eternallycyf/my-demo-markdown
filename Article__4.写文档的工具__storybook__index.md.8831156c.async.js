(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{p8ol:function(m,s,o){"use strict";o.r(s);var i=o("cDcd"),n=o.n(i),e=o("dEAq"),u=o.n(e),t=o("6T1g");const c=n.a.memo(({demos:a})=>n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h1",{id:"storybook"},n.a.createElement(e.AnchorLink,{to:"#storybook","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"storyBook"),n.a.createElement("h2",{id:"\u51C6\u5907\u9636\u6BB5"},n.a.createElement(e.AnchorLink,{to:"#\u51C6\u5907\u9636\u6BB5","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u51C6\u5907\u9636\u6BB5"),n.a.createElement(t.a,{code:`https://storybook.js.org/docs/react/get-started/install

npx storybook init
yarn storybook
http://localhost:6006/?path=/story/example-introduction--page

#
npm i -D @storybook/addo-info
npm i @types/storybook__addon-info

# \u81EA\u52A8\u751F\u6210api\u6587\u6863 react-docgen
yarn add --dev react-docgen-typescript-loader`,lang:"js"}),n.a.createElement(t.a,{code:`# .stroybook/preview.js

import { withInfo } from '@storybook/addon-info';

const wrapperStyle: React.CSSProperties = {
  padding: '20px 40px'
}

const storyWrapper = (stroyFn: any) => (
  <div style={wrapperStyle}>
    <h3>\u7EC4\u4EF6\u6F14\u793A</h3>
    {stroyFn()}
  </div>
)

const storyWrapper = (stroyFn: any) => (
  <div style={wrapperStyle}>
    <h3>\u7EC4\u4EF6\u6F14\u793A</h3>
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
];`,lang:"js"}),n.a.createElement("h2",{id:"storybook-1"},n.a.createElement(e.AnchorLink,{to:"#storybook-1","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"storyBook"),n.a.createElement("h3",{id:"\u4E00\u7EA7-menu"},n.a.createElement(e.AnchorLink,{to:"#\u4E00\u7EA7-menu","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4E00\u7EA7 menu"),n.a.createElement(t.a,{code:`# \u4E00\u7EA7menu xxx.stroies.mdx
// \u53EF\u4EE5\u4F7F\u7528md\u8BED\u6CD5 \u4E0D\u9700\u8981retun
import { Meta } from "@storybook/addon-docs";
<Meta title="Example/Introduction" />
<style>
  {
  \`
    .xxx{ color: red}
  \`
 }
</style>
<span>hello</span>
# \u4E00\u7EA7menu xxx.stroies.tsx
import { ComponentStory, ComponentMeta } from '@storybook/react';
export default {
  //   title: 'Example/Page',
  title:'\u4E00\u7EA7menu/\u4E8C\u7EA7menu',
  component: \u7EC4\u4EF6\u540D,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}as ComponentMeta<typeof \u5F15\u5165\u7684\u7EC4\u4EF6\u540D>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};`,lang:"js"}),n.a.createElement("h3",{id:"\u4E8C\u7EA7-menu"},n.a.createElement(e.AnchorLink,{to:"#\u4E8C\u7EA7-menu","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4E8C\u7EA7 menu"),n.a.createElement(t.a,{code:`# \u5BFC\u51FA\u51E0\u4E2A\u5C31\u4F1A\u751F\u6210\u51E0\u4E2A\u4E8C\u7EA7 menu
xxx.stories.tsx
export const xxx = () =>{

}`,lang:"js"}),n.a.createElement("h2",{id:"api-tsx"},n.a.createElement(e.AnchorLink,{to:"#api-tsx","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"api-tsx"),n.a.createElement("h3",{id:"layout"},n.a.createElement(e.AnchorLink,{to:"#layout","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"layout"),n.a.createElement(t.a,{code:`export const parameters = {
  // centered fullscreen padded centered
  // padding \u7EC4\u4EF6\u81EA\u52A8\u52A0Padding
  layout: 'padded',
  // \u53EA\u5BF9\u5177\u4F53\u7EC4\u4EF6\u751F\u6548,
  parameters: {
    layout: 'centered',
  },
};
# \u5177\u4F53\u7EC4\u4EF6
const Template = () => ({
 // Your template goes here
});
export const WithLayout= Template.bind({});
WithLayout.parameters = {
  layout: 'centered',
};`,lang:"js"}),n.a.createElement("h3",{id:"componentstory"},n.a.createElement(e.AnchorLink,{to:"#componentstory","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"ComponentStory"),n.a.createElement(t.a,{code:`import { ComponentStory, ComponentMeta } from '@storybook/react';
const Template: ComponentStory<typeof Page> = args => <Page {...args} />;

export const LoggedOut = Template.bind({});`,lang:"js"}),n.a.createElement("h2",{id:"api-mdx"},n.a.createElement(e.AnchorLink,{to:"#api-mdx","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"api-mdx"),n.a.createElement("h3",{id:"layout-1"},n.a.createElement(e.AnchorLink,{to:"#layout-1","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"layout"),n.a.createElement(t.a,{code:`<!-- xxx.stories.mdx -->
import { Meta } from '@storybook/addon-docs';
import { Button } from './Button';
<Meta
  title="Button"
  parameters={{
    layout: 'centered',
  }}
  component={Button}
/>
# \u5177\u4F53\u7EC4\u4EF6
<!-- Button.stories.mdx -->
import { Meta, Story } from '@storybook/addon-docs';

import { Button } from './Button';

<Meta title="Button" component={Button}/>

export const Template = () => ({
  //\u{1F447} Your template goes here
});

<Story
  name="WithLayout"
  parameters={{
    layout: 'centered',
  }}>
  {Template.bind({})}
</Story>`,lang:"js"}),n.a.createElement("h2",{id:"api-storiesof"},n.a.createElement(e.AnchorLink,{to:"#api-storiesof","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"api-storiesOf"),n.a.createElement("h3",{id:"demo"},n.a.createElement(e.AnchorLink,{to:"#demo","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"demo"),n.a.createElement(t.a,{code:`# my.stories.tsx
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
storiesOf('Button\u7EC4\u4EF6', module)
  .addDecorator(CenterDecorator)
  .add('Button', defaultButton)
  .add('\u4E0D\u540C\u5C3A\u5BF8\u7684 Button', buttonWithSize, {
     info: {inline:false }
   })
  .add('\u4E0D\u540C\u7C7B\u578B\u7684 Button', buttonWithType)`,lang:"js"}),n.a.createElement("h2",{id:"addo-info"},n.a.createElement(e.AnchorLink,{to:"#addo-info","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"addo-info"),n.a.createElement(t.a,{code:`import { withInfo } from '@storybook/addon-info';
 .addDecorator(withInfo)
  .addParameters({
    info: {
      // \u53EF\u4EE5\u4F7F\u7528markdown
      text: "\u81EA\u5B9A\u4E49\u5185\u5BB9",
      inline: true
    }
  })`,lang:"js"}),n.a.createElement("h2",{id:"react-docgen"},n.a.createElement(e.AnchorLink,{to:"#react-docgen","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"react-docgen"),n.a.createElement(t.a,{code:`# .umirc.ts
  chainWebpack(config) {
    config.module.rules.push({
      test: /\\.tsx?$/,
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
React.xxx \u5FC5\u987B\u624B\u52A8\u5F15\u5165 import {xxx} from 'react'
\u7EC4\u4EF6\u5FC5\u987Bexport
export const xxx = () => {}
Button.defaultProps = {
  disabled: false
}`,lang:"js"}),n.a.createElement(t.a,{code:`# \u6CE8\u91CA
/**
 * button\u6D4B\u8BD5\u6CE8\u91CA\u529F\u80FD
 * ## Button header
 * \`\`\`js
 *  cosnt button = this.button
 * \`\`\`
 * @param {boolean} props \u53C2\u6570
 * @returns
 */
# descirption
interface BaseButtonProps {
  className?: string;
  /**\u8BBE\u7F6EButton \u7684\u7981\u7528 */
  disabled?: boolean;
  size?: 'lg' | 'sm';
  type?: 'primary' | 'default' | 'danger' | 'link';
  children?: React.ReactNode,
  href?: string
}`,lang:"js"}),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7EC4\u4EF6\u95F4\u7684\u95F4\u8DDD")),n.a.createElement(t.a,{code:`import { addDecorator } from '@storybook/react';
const wrapperStyle: React.CSSProperties = {
  padding: '20px 40px',
};
const storyWrapper = (stroyFn: any) => (
  <div style={wrapperStyle}>
    <h3>\u7EC4\u4EF6\u6F14\u793A</h3>
    {stroyFn()}
  </div>
);
addDecorator(storyWrapper);`,lang:"js"}),n.a.createElement("h2",{id:"\u90E8\u7F72"},n.a.createElement(e.AnchorLink,{to:"#\u90E8\u7F72","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u90E8\u7F72"),n.a.createElement(t.a,{code:`# \u751F\u6210dist
yarn build-storybook`,lang:"yaml"}),n.a.createElement(t.a,{code:`# .travis.yml
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
  github_token: $GITHUB_TOKEN # \u5728 GitHub \u4E2D\u751F\u6210\uFF0C\u7528\u4E8E\u5141\u8BB8 Travis \u5411\u4F60\u7684\u4ED3\u5E93\u63A8\u9001\u4EE3\u7801\u3002\u5728 Travis \u7684\u9879\u76EE\u8BBE\u7F6E\u9875\u9762\u8FDB\u884C\u914D\u7F6E\uFF0C\u8BBE\u7F6E\u4E3A secure variable
  keep_history: true
  on:
    branch: master`,lang:"js"}),n.a.createElement(t.a,{code:`# ./deploy.sh
#!/usr/bin/env sh

# \u786E\u4FDD\u811A\u672C\u629B\u51FA\u9047\u5230\u7684\u9519\u8BEF
set -e

# \u5220\u9664\u65E7\u7684\u6587\u4EF6
rm -rf storybook-static

# \u751F\u6210\u65B0\u7684\u538B\u7F29\u6587\u4EF6
yarn build-storybook

# \u8FDB\u5165\u751F\u6210\u7684\u6587\u4EF6\u5939
cd storybook-static

# \u590D\u5236\u4E00\u4E2A index.html\u5E76\u547D\u540D\u4E3A 404.html \u89E3\u51B3 historyAPI 404\u95EE\u9898
cp index.html 404.html

# \u5982\u679C\u662F\u53D1\u5E03\u5230\u81EA\u5B9A\u4E49\u57DF\u540D
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# \u5982\u679C\u53D1\u5E03\u5230 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# \u5982\u679C\u53D1\u5E03\u5230 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:eternallycyf/node-script-router-inject-demo.git master:gh-pages

cd -`,lang:"js"}),n.a.createElement(t.a,{code:`# package.json
"deploy": "bash ./deploy.sh"

yarn deploy`,lang:"js"}))));s.default=a=>{const l=n.a.useContext(e.context),d=l.demos;return n.a.useEffect(()=>{var r;a!=null&&(r=a.location)!==null&&r!==void 0&&r.hash&&e.AnchorLink.scrollToAnchor(decodeURIComponent(a.location.hash.slice(1)))},[]),n.a.createElement(c,{demos:d})}}}]);
