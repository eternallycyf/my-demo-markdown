(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{p8ol:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dEAq");
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dumi_theme__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("H1Ra");










 // memo for page content, to avoid useless re-render since other context fields changed

const PageContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(({
  demos: DUMI_ALL_DEMOS
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "markdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    id: "storybook"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#storybook",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "storyBook"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u51C6\\u5907\\u9636\\u6BB5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u51C6\\u5907\\u9636\\u6BB5",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u51C6\\u5907\\u9636\\u6BB5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "https://storybook.js.org/docs/react/get-started/install\\n\\nnpx storybook init\\nyarn storybook\\nhttp://localhost:6006/?path=/story/example-introduction--page\\n\\n#\\nnpm i -D @storybook/addo-info\\nnpm i @types/storybook__addon-info\\n\\n# \u81EA\u52A8\u751F\u6210api\u6587\u6863 react-docgen\\nyarn add --dev react-docgen-typescript-loader",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# .stroybook/preview.js\\n\\nimport { withInfo } from '@storybook/addon-info';\\n\\nconst wrapperStyle: React.CSSProperties = {\\n  padding: '20px 40px'\\n}\\n\\nconst storyWrapper = (stroyFn: any) => (\\n  <div style={wrapperStyle}>\\n    <h3>\u7EC4\u4EF6\u6F14\u793A</h3>\\n    {stroyFn()}\\n  </div>\\n)\\n\\nconst storyWrapper = (stroyFn: any) => (\\n  <div style={wrapperStyle}>\\n    <h3>\u7EC4\u4EF6\u6F14\u793A</h3>\\n    {stroyFn()}\\n  </div>\\n)\\n\\nexport const parameters = {\\n  actions: { argTypesRegex: \\"^on[A-Z].*\\" },\\n  controls: {\\n    matchers: {\\n      color: /(background|color)$/i,\\n      date: /Date$/,\\n    },\\n  },\\n  info: {\\n    inline: true, header: false\\n  },\\n  layout: 'centered',\\n}\\n\\n\\nexport const decorators = [\\n  storyWrapper,\\n  withInfo,\\n];",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "storybook-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#storybook-1",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "storyBook"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u4E00\\u7EA7-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u4E00\\u7EA7-menu",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u4E00\\u7EA7 menu"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u4E00\u7EA7menu xxx.stroies.mdx\\n// \u53EF\u4EE5\u4F7F\u7528md\u8BED\u6CD5 \u4E0D\u9700\u8981retun\\nimport { Meta } from \\"@storybook/addon-docs\\";\\n<Meta title=\\"Example/Introduction\\" />\\n<style>\\n  {\\n  \`\\n    .xxx{ color: red}\\n  \`\\n }\\n</style>\\n<span>hello</span>\\n# \u4E00\u7EA7menu xxx.stroies.tsx\\nimport { ComponentStory, ComponentMeta } from '@storybook/react';\\nexport default {\\n  //   title: 'Example/Page',\\n  title:'\u4E00\u7EA7menu/\u4E8C\u7EA7menu',\\n  component: \u7EC4\u4EF6\u540D,\\n  parameters: {\\n    layout: 'fullscreen',\\n  },\\n  argTypes: {\\n    backgroundColor: { control: 'color' },\\n  },\\n}as ComponentMeta<typeof \u5F15\u5165\u7684\u7EC4\u4EF6\u540D>;\\n\\nconst Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;\\nexport const Primary = Template.bind({});\\nPrimary.args = {\\n  primary: true,\\n  label: 'Button',\\n};",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u4E8C\\u7EA7-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u4E8C\\u7EA7-menu",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u4E8C\\u7EA7 menu"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u5BFC\u51FA\u51E0\u4E2A\u5C31\u4F1A\u751F\u6210\u51E0\u4E2A\u4E8C\u7EA7 menu\\nxxx.stories.tsx\\nexport const xxx = () =>{\\n\\n}",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "api-tsx"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#api-tsx",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "api-tsx"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "layout"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#layout",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "layout"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "export const parameters = {\\n  // centered fullscreen padded centered\\n  // padding \u7EC4\u4EF6\u81EA\u52A8\u52A0Padding\\n  layout: 'padded',\\n  // \u53EA\u5BF9\u5177\u4F53\u7EC4\u4EF6\u751F\u6548,\\n  parameters: {\\n    layout: 'centered',\\n  },\\n};\\n# \u5177\u4F53\u7EC4\u4EF6\\nconst Template = () => ({\\n // Your template goes here\\n});\\nexport const WithLayout= Template.bind({});\\nWithLayout.parameters = {\\n  layout: 'centered',\\n};",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "componentstory"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#componentstory",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "ComponentStory"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "import { ComponentStory, ComponentMeta } from '@storybook/react';\\nconst Template: ComponentStory<typeof Page> = args => <Page {...args} />;\\n\\nexport const LoggedOut = Template.bind({});",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "api-mdx"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#api-mdx",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "api-mdx"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "layout-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#layout-1",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "layout"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<!-- xxx.stories.mdx -->\\nimport { Meta } from '@storybook/addon-docs';\\nimport { Button } from './Button';\\n<Meta\\n  title=\\"Button\\"\\n  parameters={{\\n    layout: 'centered',\\n  }}\\n  component={Button}\\n/>\\n# \u5177\u4F53\u7EC4\u4EF6\\n<!-- Button.stories.mdx -->\\nimport { Meta, Story } from '@storybook/addon-docs';\\n\\nimport { Button } from './Button';\\n\\n<Meta title=\\"Button\\" component={Button}/>\\n\\nexport const Template = () => ({\\n  //\u{1F447} Your template goes here\\n});\\n\\n<Story\\n  name=\\"WithLayout\\"\\n  parameters={{\\n    layout: 'centered',\\n  }}>\\n  {Template.bind({})}\\n</Story>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "api-storiesof"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#api-storiesof",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "api-storiesOf"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "demo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#demo",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "demo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# my.stories.tsx\\nimport React from 'react'\\nimport { storiesOf } from '@storybook/react'\\nimport { action } from '@storybook/addon-actions'\\n\\nconst Button = (props: any) => {\\n  const { children } = props\\n  return (\\n    <button>{children}</button>\\n  )\\n}\\n\\nconst styles: React.CSSProperties = {\\n  textAlign: 'center'\\n}\\n\\nconst CenterDecorator = (storyFn:any) =>\\n<div style={styles}>{storyFn()}</div>\\n\\nconst defaultButton = () => (\\n  <Button onClick={action('clicked')}> default button </Button>\\n)\\n\\nconst buttonWithSize = () => (\\n  <>\\n    <Button size=\\"lg\\"> large button </Button>\\n    <Button size=\\"sm\\"> small button </Button>\\n  </>\\n)\\n\\nconst buttonWithType = () => (\\n  <>\\n    <Button btnType=\\"primary\\"> primary button </Button>\\n    <Button btnType=\\"danger\\"> danger button </Button>\\n    <Button btnType=\\"link\\" href=\\"https://google.com\\"> link button </Button>\\n  </>\\n)\\nstoriesOf('Button\u7EC4\u4EF6', module)\\n  .addDecorator(CenterDecorator)\\n  .add('Button', defaultButton)\\n  .add('\u4E0D\u540C\u5C3A\u5BF8\u7684 Button', buttonWithSize, {\\n     info: {inline:false }\\n   })\\n  .add('\u4E0D\u540C\u7C7B\u578B\u7684 Button', buttonWithType)",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "addo-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#addo-info",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "addo-info"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "import { withInfo } from '@storybook/addon-info';\\n .addDecorator(withInfo)\\n  .addParameters({\\n    info: {\\n      // \u53EF\u4EE5\u4F7F\u7528markdown\\n      text: \\"\u81EA\u5B9A\u4E49\u5185\u5BB9\\",\\n      inline: true\\n    }\\n  })",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "react-docgen"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#react-docgen",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "react-docgen"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# .umirc.ts\\n  chainWebpack(config) {\\n    config.module.rules.push({\\n      test: /\\\\.tsx?$/,\\n      include: path.resolve(__dirname, \\"./src\\"),\\n      use: [\\n        require.resolve(\\"ts-loader\\"),\\n        {\\n          loader: require.resolve('react-docgen-typescript-loader'),\\n          options: {\\n            shouldExtractLiteralValuesFromEnum: true,\\n            tsconfigPath: path.resolve(__dirname, \\"../tsconfig.json\\"),\\n            propFilter: (prop) => {\\n              if (prop.parent) {\\n                return !prop.parent.fileName.includes('node_modules')\\n              }\\n              return true\\n            }\\n          },\\n        }\\n      ]\\n    })\\n    config.resolve.extensions.push(\\".ts\\", \\".tsx\\");\\n    return config\\n  }\\n#  xxx. stories.tsx\\nReact.xxx \u5FC5\u987B\u624B\u52A8\u5F15\u5165 import {xxx} from 'react'\\n\u7EC4\u4EF6\u5FC5\u987Bexport\\nexport const xxx = () => {}\\nButton.defaultProps = {\\n  disabled: false\\n}",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u6CE8\u91CA\\n/**\\n * button\u6D4B\u8BD5\u6CE8\u91CA\u529F\u80FD\\n * ## Button header\\n * \`\`\`js\\n *  cosnt button = this.button\\n * \`\`\`\\n * @param {boolean} props \u53C2\u6570\\n * @returns\\n */\\n# descirption\\ninterface BaseButtonProps {\\n  className?: string;\\n  /**\u8BBE\u7F6EButton \u7684\u7981\u7528 */\\n  disabled?: boolean;\\n  size?: 'lg' | 'sm';\\n  type?: 'primary' | 'default' | 'danger' | 'link';\\n  children?: React.ReactNode,\\n  href?: string\\n}",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u7EC4\\u4EF6\\u95F4\\u7684\\u95F4\\u8DDD")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "import { addDecorator } from '@storybook/react';\\nconst wrapperStyle: React.CSSProperties = {\\n  padding: '20px 40px',\\n};\\nconst storyWrapper = (stroyFn: any) => (\\n  <div style={wrapperStyle}>\\n    <h3>\u7EC4\u4EF6\u6F14\u793A</h3>\\n    {stroyFn()}\\n  </div>\\n);\\naddDecorator(storyWrapper);",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u90E8\\u7F72"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u90E8\\u7F72",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u90E8\\u7F72"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u751F\u6210dist\\nyarn build-storybook",
    lang: "yaml"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# .travis.yml\\nlanguage: node_js\\nnode_js:\\n  - lts/*\\ninstall:\\n  - yarn install # npm ci\\nscript:\\n  - yarn docs:build # npm run docs:build\\ndeploy:\\n  provider: pages\\n  skip_cleanup: true\\n  local_dir: ./storybook-static\\n  github_token: $GITHUB_TOKEN # \u5728 GitHub \u4E2D\u751F\u6210\uFF0C\u7528\u4E8E\u5141\u8BB8 Travis \u5411\u4F60\u7684\u4ED3\u5E93\u63A8\u9001\u4EE3\u7801\u3002\u5728 Travis \u7684\u9879\u76EE\u8BBE\u7F6E\u9875\u9762\u8FDB\u884C\u914D\u7F6E\uFF0C\u8BBE\u7F6E\u4E3A secure variable\\n  keep_history: true\\n  on:\\n    branch: master",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# ./deploy.sh\\n#!/usr/bin/env sh\\n\\n# \u786E\u4FDD\u811A\u672C\u629B\u51FA\u9047\u5230\u7684\u9519\u8BEF\\nset -e\\n\\n# \u5220\u9664\u65E7\u7684\u6587\u4EF6\\nrm -rf storybook-static\\n\\n# \u751F\u6210\u65B0\u7684\u538B\u7F29\u6587\u4EF6\\nyarn build-storybook\\n\\n# \u8FDB\u5165\u751F\u6210\u7684\u6587\u4EF6\u5939\\ncd storybook-static\\n\\n# \u590D\u5236\u4E00\u4E2A index.html\u5E76\u547D\u540D\u4E3A 404.html \u89E3\u51B3 historyAPI 404\u95EE\u9898\\ncp index.html 404.html\\n\\n# \u5982\u679C\u662F\u53D1\u5E03\u5230\u81EA\u5B9A\u4E49\u57DF\u540D\\n# echo 'www.example.com' > CNAME\\n\\ngit init\\ngit add -A\\ngit commit -m 'deploy'\\n\\n# \u5982\u679C\u53D1\u5E03\u5230 https://<USERNAME>.github.io\\n# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master\\n\\n# \u5982\u679C\u53D1\u5E03\u5230 https://<USERNAME>.github.io/<REPO>\\ngit push -f git@github.com:eternallycyf/node-script-router-inject-demo.git master:gh-pages\\n\\ncd -",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# package.json\\n\\"deploy\\": \\"bash ./deploy.sh\\"\\n\\nyarn deploy",
    lang: "js"
  })));
});
/* harmony default export */ __webpack_exports__["default"] = (props => {
  const _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["context"]),
        demos = _React$useContext.demos; // scroll to anchor after page component loaded


  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    var _props$location;

    if (props !== null && props !== void 0 && (_props$location = props.location) !== null && _props$location !== void 0 && _props$location.hash) {
      dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"].scrollToAnchor(decodeURIComponent(props.location.hash.slice(1)));
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageContent, {
    demos: demos
  });
});

//# sourceURL=webpack:///./src/Article/4.%E5%86%99%E6%96%87%E6%A1%A3%E7%9A%84%E5%B7%A5%E5%85%B7/storybook/index.md?`)}}]);
