(self.webpackChunkmy_demo_markdown=self.webpackChunkmy_demo_markdown||[]).push([[9727],{91831:function(E,c,t){"use strict";t.r(c);var r=t(12924),e=t.n(r),n=t(16924),u=t(53401);const o=e().memo(({demos:l})=>e().createElement(e().Fragment,null,e().createElement("div",{className:"markdown"},e().createElement("h2",{id:"reactnative"},e().createElement(n.AnchorLink,{to:"#reactnative","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"reactNative"),e().createElement("ul",null,e().createElement("li",null,"\u5728\u642D\u5EFA ",e().createElement("code",null,"React Native")," \u7684\u9014\u4E2D\u771F\u7684\u662F\u9047\u5230\u592A\u591A\u95EE\u9898\u4E86"),e().createElement("li",null,"\u3002\u3002\u3002\u8FD9\u91CC\u8BB0\u5F55\u4E00\u4E0B"),e().createElement("li",null,"\u4F7F\u7528\u7684\u64CD\u4F5C\u7CFB\u7EDF\u662F ",e().createElement("code",null,"Macos Monterey")),e().createElement("li",null,"\u53EF\u4EE5\u76F4\u63A5\u514B\u9686\u6211\u7684\u4ED3\u5E93 \u4FEE\u6539\u6210\u81EA\u5DF1\u7684\u67B6\u6784",e().createElement("ul",null,e().createElement("li",null,e().createElement(n.Link,{to:"https://github.com/eternallycyf/react-native-dva-template"},"\u4ED3\u5E93\u5730\u5740")),e().createElement("li",null,"\u5DF2\u7ECF\u96C6\u6210\u4E86",e().createElement("ul",null,e().createElement("li",null,"antd/react-native"),e().createElement("li",null,"dva"),e().createElement("li",null,"axios"),e().createElement("li",null,"react-native-config (\u533A\u5206\u5F00\u53D1\u73AF\u5883)"),e().createElement("li",null,"eslint"),e().createElement("li",null,"typescript"),e().createElement("li",null,"reactnavigation (\u8DEF\u7531\u5BFC\u822A)")))))),e().createElement("h2",{id:"2bug-\u6C47\u603B"},e().createElement(n.AnchorLink,{to:"#2bug-\u6C47\u603B","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"2.bug \u6C47\u603B"),e().createElement("ul",null,e().createElement("li",null,"\u5148\u8FDB\u884C\u4E0B\u4E00\u6B65,\u9047\u5230\u95EE\u9898\u518D\u56DE\u6765\u770B\u770B")),e().createElement(u.Z,{code:`# \u642D\u5EFA\u73AF\u5883\u4E0B\u8F7D\u4F9D\u8D56\u4E00\u76F4\u5931\u8D25
https://www.react-native.cn/docs/environment-setup
# yarn ios \u8FD0\u884C\u6A21\u62DF\u5668\u65F6\u5019\u6CA1\u6709 app
// \u9700\u8981\u7ED9\u6743\u9650
sudo chown -R eternallycyf ~/react_native_project
chmod 777 RN
# \u8FD0\u884C\u62A5\u9519
// \u7AEF\u53E3\u5728\u8FD0\u884C\u4E86 \u6740\u4E0B\u7AEF\u53E3

# react native debugger \u663E\u793A\u4E00\u7247\u7A7A\u767D
// react-devtools \u7248\u672C\u51B2\u7A81 \u8BF7\u5378\u8F7D\u5168\u5C40 react-devtools
// \u5E76\u6309\u7167react native debugger \u9875\u9762\u63D0\u793A\u7684\u7248\u672C \u5B89\u88C5
// npm i -g react-devtools@^4.13.0
// github \u6709 issue
# react native debugger \u7F51\u7EDC\u8BF7\u6C42\u4E0D\u663E\u793A
// \u4ED6\u8FD9\u4E2A\u9700\u8981\u5148\u624B\u52A8 \u5728 element\u9875\u9762 \u53F3\u952E\u70B9\u51FB enable network \u5F00\u542F

# npm\u52A0\u5165\u5176\u4ED6\u5305\u7684\u65F6\u5019\u8BF7\u91CD\u65B0 pod install \u6216\u8005\u76F4\u63A5\u91CD\u65B0\u8FD0\u884C\u6253\u5305

# react-native-config ios\u914D\u7F6E\u6210\u529F \u5B89\u5353config\u662F\u4E00\u4E2A\u7A7A\u5BF9\u8C61\u6216\u8005\u4E00\u4E2A\u6742\u4E71\u7684\u5BF9\u8C61
// \u8BF7\u786E\u5B9A
// 1. android/app/build.gradle \u8BBE\u7F6E\u4E86 resValue "string", "build_config_package", "com.rn"
//                                   (\u4ED6\u7684\u503C\u4E0D\u662F\u56FA\u5B9A\u7684 \u662F\u53E6\u4E00\u4E2A\u6587\u4EF6\u91CC\u7684\u5B57\u6BB5)
// 2. android/app/src/main/AndroidManifest.xml <manifest package="com.rn">
// \u5176\u5B9E\u8FD9\u4E2A\u5C31\u5728npm\u9996\u9875\u6709\u5199 \u5F53\u65F6\u6211\u4E5F\u6CA1\u6709\u770B\u5230 \u627E\u4E86\u5F88\u4E45 \u3002\u3002\u3002`,lang:"js"}),e().createElement("h2",{id:"3\u51C6\u5907\u9636\u6BB5"},e().createElement(n.AnchorLink,{to:"#3\u51C6\u5907\u9636\u6BB5","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"3.\u51C6\u5907\u9636\u6BB5"),e().createElement("h3",{id:"\u57FA\u672C\u73AF\u5883\u7684\u5B89\u88C5"},e().createElement(n.AnchorLink,{to:"#\u57FA\u672C\u73AF\u5883\u7684\u5B89\u88C5","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u57FA\u672C\u73AF\u5883\u7684\u5B89\u88C5"),e().createElement(u.Z,{code:`npx react-native init AwesomeProject
npx react-native init RN --template react-native-template-typescript
yarn android
yarn ios
# \u5177\u4F53\u6D41\u7A0B: \u53C2\u8003\u5B98\u7F51
// \u6309\u7740\u5B98\u7F51\u7684\u5148\u4E00\u90E8\u4E00\u90E8\u6765 \u628A\u57FA\u7840\u5FC5\u5907\u7684\u4E1C\u897F\u5148\u88C5\u4E86
// \u4F8B\u5982: Xcode Watchman Node CocoaPods
https://www.react-native.cn/docs/environment-setup
# \u5B89\u88C5\u8FC7\u7A0B\u4E2D\u9047\u5230\u7684\u95EE\u9898: \u6307\u5B9A\u955C\u50CF(\u5FC5\u987B \u6216\u8005\u81EA\u5DF1\u4EE3\u7406)
// \u53C2\u8003\u8FD9\u7BC7\u6587\u7AE0 \u57FA\u672C\u89E3\u51B3\u7684\u642D\u5EFA\u73AF\u5883\u7684\u6240\u6709\u95EE\u9898
https://www.jianshu.com/p/412d760bcacd`,lang:"js"}),e().createElement("h3",{id:"android-\u6A21\u62DF\u5668"},e().createElement(n.AnchorLink,{to:"#android-\u6A21\u62DF\u5668","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"Android \u6A21\u62DF\u5668"),e().createElement("ul",null,e().createElement("li",null,"\u8FD9\u91CC\u5C31\u4E0D\u63D0\u8FD9\u4E2A\u4E86"),e().createElement("li",null,"\u6309\u7167\u5B98\u7F51\u4E00\u6B65\u4E00\u6B65\u64CD\u4F5C && \u6709\u4E00\u4E2A\u68AF\u5B50 \u4E0D\u7136\u4E0B\u8F7D\u5E94\u7528\u7F51\u7AD9\u6253\u4E0D\u5F00 \u6216\u8005\u627E\u7B2C\u4E09\u65B9\u7684\u5730\u65B9\u4E0B\u8F7D"),e().createElement("li",null,"\u5176\u6B21 \u914D\u7F6E\u73AF\u5883\u53D8\u91CF\u65F6 ",e().createElement("code",null,"open ~/.bash_profile")," \u6216 ",e().createElement("code",null,"open ~/.zshrc")," \u6253\u4E0D\u5F00",e().createElement("ul",null,e().createElement("li",null,"\u53EF\u80FD\u662F\u81EA\u5DF1\u7535\u8111\u4E4B\u524D\u914D\u7F6E\u6709\u95EE\u9898"),e().createElement("li",null,"\u7528\u8FD9\u4E2A\u547D\u4EE4\u6253\u5F00 ",e().createElement("code",null,"open -e ~/.bash_profile"))))),e().createElement("h3",{id:"\u8C03\u8BD5"},e().createElement(n.AnchorLink,{to:"#\u8C03\u8BD5","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u8C03\u8BD5"),e().createElement("h4",{id:"\u6211\u7684\u65B9\u6848"},e().createElement(n.AnchorLink,{to:"#\u6211\u7684\u65B9\u6848","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u6211\u7684\u65B9\u6848"),e().createElement("ul",null,e().createElement("li",null,"\u6211\u8FD9\u91CC\u6700\u7EC8\u642D\u5EFA\u7684\u4F53\u7CFB\u662F\u91C7\u7528 ",e().createElement("code",null,"react-native-debugger")," \u548C ",e().createElement("code",null,"ios"),"\u6A21\u62DF\u5668\u7ED3\u5408",e().createElement("ul",null,e().createElement("li",null,e().createElement("code",null,"react-native-debugger \u96C6\u6210\u4E86 console.log network redux")," \u8C03\u8BD5\u5DE5\u5177\u7B49\u529F\u80FD"),e().createElement("li",null,e().createElement("code",null,"ios")," \u6A21\u62DF\u5668 \u652F\u6301\u63D0\u793A\u9519\u8BEF \u5143\u7D20\u5BA1\u67E5 \u7B49\u529F\u80FD"),e().createElement("li",null,"\u57FA\u672C\u6EE1\u8DB3\u8C03\u8BD5\u7684\u6240\u6709\u9700\u8981\u4E86"))),e().createElement("li",null,"{","% inlineImg ",e().createElement(n.Link,{to:"https://user-images.githubusercontent.com/3001525/29451479-6621bf1a-83c8-11e7-8ebb-b4e98b1af91c.png"},"https://user-images.githubusercontent.com/3001525/29451479-6621bf1a-83c8-11e7-8ebb-b4e98b1af91c.png")," 300px %","}")),e().createElement(u.Z,{code:`# brew install --cask react-native-debugger
\u7136\u540E\u76F4\u63A5\u6253\u5F00\u5E94\u7528\u5C31\u884C // \u6CE8\u610F\u4ED6\u76F4\u63A5\u662F\u4E00\u4E2A\u5E94\u7528 \u4E0D\u662F\u76F4\u63A5\u8FD0\u884C\u5728\u6D4F\u89C8\u5668\u7684`,lang:"js"}),e().createElement("h4",{id:"\u8C03\u8BD5\u5982\u4F55\u4F7F\u7528"},e().createElement(n.AnchorLink,{to:"#\u8C03\u8BD5\u5982\u4F55\u4F7F\u7528","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u8C03\u8BD5\u5982\u4F55\u4F7F\u7528"),e().createElement("blockquote",null,"\u5728\u8C03\u8BD5\u4E2D\u9047\u5230\u7684bug\u6211\u7EDF\u4E00\u653E\u5728\u7B2C\u4E8C\u7AE0\u8BF4\u660E\u4E86,\u6709\u95EE\u9898\u8BDD\u5F80\u524D\u7FFB"),e().createElement("ul",null,e().createElement("li",null,"\u5237\u65B0\u6A21\u62DF\u5668:\u4E24\u79CD\u65B9\u6CD5",e().createElement("ul",null,e().createElement("li",null,"1.\u6309\u4E24\u4E0B ",e().createElement("code",null,"R || r")," \u5FEB\u901F\u5237\u65B0"),e().createElement("li",null,"2.\u624B\u52A8\u5728\u6A21\u62DF\u5668\u64CD\u4F5C",e().createElement("ul",null,e().createElement("li",null,e().createElement("code",null,"ios: command+R || command+D => reload")),e().createElement("li",null,e().createElement("code",null,"android: command + m reload")," (\u6A21\u62DF\u5668\u5728 \u5E94\u7528 ",e().createElement("code",null,"=> avd => manager"),"\u91CC\u9762)"))))),e().createElement("li",null,"\u5BA1\u67E5\u5143\u7D20",e().createElement("ul",null,e().createElement("li",null,e().createElement("code",null,"commend+d")),e().createElement("li",null,e().createElement("code",null,"show Inspector")),e().createElement("li",null,"\u70B9\u51FB\u5143\u7D20"))),e().createElement("li",null,e().createElement("code",null,"console.log"),e().createElement("ul",null,e().createElement("li",null,"1.\u76F4\u63A5\u4F7F\u7528 ",e().createElement("code",null,"react-native-debugger")," \u8C03\u8BD5\u5DE5\u5177",e().createElement("code",null,"console.log")," \u754C\u9762\u5C31\u80FD\u770B\u5230\u4E86"),e().createElement("li",null,"2.\u8FD0\u884C\u6A21\u62DF\u5668\u7684\u7EC8\u7AEF"),e().createElement("li",null,"3.",e().createElement("code",null,"command+D"),e().createElement("ul",null,e().createElement("li",null,e().createElement("code",null,"Debug with Chrome")),e().createElement("li",null,"\u5207\u6362\u5230",e().createElement("code",null,"console"),"\u754C\u9762"),e().createElement("li",null,"\u5C06",e().createElement("code",null,"top"),"\u5207\u6362\u4E3A ",e().createElement("code",null,"debug...")))))),e().createElement("li",null,"\u7F51\u7EDC\u8BF7\u6C42",e().createElement("ul",null,e().createElement("li",null,e().createElement("code",null,"react native debugger")),e().createElement("li",null,"\u5728 ",e().createElement("code",null,"Element")," \u9875\u9762 \u53F3\u952E\u5F00\u542F ",e().createElement("code",null,"enable network")),e().createElement("li",null,"\u7136\u540E\u5728 ",e().createElement("code",null,"network")," \u9875\u9762\u5237\u65B0\u5C31\u80FD\u770B\u5230\u7F51\u7EDC\u8BF7\u6C42\u4E86"))),e().createElement("li",null,e().createElement("code",null,"redux|dva"),e().createElement("ul",null,e().createElement("li",null,"\u5728",e().createElement("code",null,"react native debugger")," \u9875\u9762\u5C31\u80FD\u770B\u5230\u4E86")))),e().createElement("h4",{id:"\u5176\u4ED6\u8C03\u8BD5\u65B9\u6848\u5355\u72EC\u6B65\u9AA4"},e().createElement(n.AnchorLink,{to:"#\u5176\u4ED6\u8C03\u8BD5\u65B9\u6848\u5355\u72EC\u6B65\u9AA4","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u5176\u4ED6\u8C03\u8BD5\u65B9\u6848\u5355\u72EC\u6B65\u9AA4"),e().createElement("blockquote",null,"\u5982\u679C\u6309\u7167react-native-debugger\u65B9\u6848,\u4E0D\u9700\u8981\u770B\u8FD9\u91CC\u7684\u5185\u5BB9,\u76F4\u63A5\u8DF3\u8FC7"),e().createElement("h5",{id:"ts-\u8BED\u6CD5\u63D0\u793A"},e().createElement(n.AnchorLink,{to:"#ts-\u8BED\u6CD5\u63D0\u793A","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"ts \u8BED\u6CD5\u63D0\u793A"),e().createElement(u.Z,{code:`npm install --save @types/react-native
// \u6839\u76EE\u5F55\u6784\u5EFAtsconfig.json\u6587\u4EF6
{
  "compilerOptions": {
    "allowJs": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "jsx": "react",
    "lib": [
      "es6"
    ],
    "moduleResolution": "node",
    "noEmit": true,
    "strict": true,
    "target": "esnext"
  },
  "exclude": [
    "node_modules",
    "babel.config.js",
    "metro.config.js",
    "jest.config.js"
  ]
}`,lang:"js"}),e().createElement("h5",{id:"\u7F51\u7EDC\u8BF7\u6C42"},e().createElement(n.AnchorLink,{to:"#\u7F51\u7EDC\u8BF7\u6C42","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u7F51\u7EDC\u8BF7\u6C42"),e().createElement(u.Z,{code:`// vscode \u5B89\u88C5 react native tools \u63D2\u4EF6
// \u6253\u5F00vscode\u5F00\u53D1\u8005\u5DE5\u5177 \u5C31\u53EF\u4EE5\u770B\u5230\u7F51\u7EDC\u8BF7\u6C42\u4E86`,lang:"js"}),e().createElement("h5",{id:"react-\u8C03\u8BD5\u5DE5\u5177"},e().createElement(n.AnchorLink,{to:"#react-\u8C03\u8BD5\u5DE5\u5177","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"react \u8C03\u8BD5\u5DE5\u5177"),e().createElement(u.Z,{code:`// npm i -g react-devtools@^4.13.0
// \u7EC8\u7AEF\u8F93\u5165\u547D\u4EE4 react-devtools
// \u5728\u6A21\u62DF\u5668\u5237\u65B0\u540E react-devtools \u5C31\u6709\u5185\u5BB9\u4E86`,lang:"js"}),e().createElement("h3",{id:"\u76EE\u5F55\u7ED3\u6784"},e().createElement(n.AnchorLink,{to:"#\u76EE\u5F55\u7ED3\u6784","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u76EE\u5F55\u7ED3\u6784"),e().createElement(u.Z,{code:`__tests__.bundle;
android;
ios;
node_modules.buckconfig.flowconfig.ruby - version.watchmanconfig;
App.js;
app.json;
babel.config.js;
Gemfile;
Gemfile.lock;
index.js;
metro.config.js;
package.json;`,lang:"js"}),e().createElement("h2",{id:"4-\u63D2\u4EF6\u96C6\u6210"},e().createElement(n.AnchorLink,{to:"#4-\u63D2\u4EF6\u96C6\u6210","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"4. \u63D2\u4EF6\u96C6\u6210"),e().createElement("h3",{id:"dva"},e().createElement(n.AnchorLink,{to:"#dva","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"dva"),e().createElement(u.Z,{code:`yarn add dva-core-ts react-redux @types/react-redux
// \u968F\u540E\u5F15\u5165dva\u5C31\u53EF\u4EE5\u4E86
import {create, Model} from 'dva-core-ts';
import createLoading from 'dva-loading-ts';
import models from '@/models/index';
import '@/config/http';
import home, {HomeModelType} from '@/models/home';
import {Animated} from 'react-native';

const modelExtend = require('dva-model-extend').default;

// 1.\u521B\u5EFA\u5B9E\u4F8B
const app = create({
  onError: function(e) {
    console.log('e', e);
  },
});
// 2.\u52A0\u8F7Dmodel\u5BF9\u8C61
models.forEach(model => {
  app.model(model);
});

app.use(createLoading());

// 3.\u542F\u52A8dva
app.start();
// 4.\u5BFC\u51FAdva\u7684\u6570\u636E
export default app._store;

interface Cached {
  [key: string]: number;
}

const cached: Cached = {
  home: 1,
};
function registerModel(model: Model) {
  if (!cached[model.namespace]) {
    app.model(model);
    cached[model.namespace] = 1;
  }
}

export function createModel(namespace: string) {
  const model: HomeModelType = modelExtend(home, {
    namespace,
    state: {
      scrollValue: new Animated.Value(0),
    },
  });
  registerModel(model);
}`,lang:"js"}),e().createElement("h3",{id:"react-native-config"},e().createElement(n.AnchorLink,{to:"#react-native-config","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"react-native-config"),e().createElement(u.Z,{code:`// \u533A\u5206\u591A\u73AF\u5883 \u9700\u8981\u91CD\u65B0\u6253\u5305
yarn add react-native-config
# \u914D\u7F6E \u53C2\u8003Npm\u5B98\u7F51\u5C31\u53EF\u4EE5\u4E86
// \u5982\u679C ios \u53EF\u4EE5\u663E\u793A , android \u6253\u5370\u7ED3\u679C\u4E3A\u7A7A\u5BF9\u8C61\u6216\u8005\u4E00\u4E2A\u5BF9\u8C61\u91CC\u6709\u4E00\u5806\u65E0\u5173\u7684\u6570\u636E
// \u8BF7\u786E\u5B9A\u81EA\u5DF1\u6B63\u786E\u914D\u7F6E\u4E86 resValue  \u8FD9\u4E2A\u503C\u662F\u53E6\u4E00\u4E2A\u6587\u4EF6\u4E2D\u7684\u53D8\u91CF
// \u8FD9\u91CC\u7684 bug \u89E3\u51B3\u65B9\u5F0F\u653E\u5728\u6700\u524D\u9762\u4E86
...
npx react-native link react-native-config
# \u6839\u76EE\u5F55\u65B0\u5EFA .env
API_URL=https://myapi.com
# App.tsx
import Config from 'react-native-config'`,lang:"js"}),e().createElement("h3",{id:"babel-plugin-module-resolve"},e().createElement(n.AnchorLink,{to:"#babel-plugin-module-resolve","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"babel-plugin-module-resolve"),e().createElement(u.Z,{code:`yarn add babel-plugin-module-resolver
# babel.config.js
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@/utils': './src/utils',
          '@/pages': './src/pages',
          '@/navigator': './src/navigator',
          '@/models': './src/models',
          '@/config': './src/config',
          '@/components': './src/components',
          '@/assets': './src/assets',
        },
      },
    ],
  ],
};
# tsconfig.json
 "baseUrl": "./src",
 "paths": {
      "@/assets/*": ["assets/*"],
      "@/components/*": ["components/*"],
      "@/config/*": ["config/*"],
      "@/models/*": ["models/*"],
      "@/navigator/*": ["navigator/*"],
      "@/pages/*": ["pages/*"],
      "@/utils/*": ["utils/*"]
 },`,lang:"js"}),e().createElement("h3",{id:"antdreactnative"},e().createElement(n.AnchorLink,{to:"#antdreactnative","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"antd/reactNative"),e().createElement(u.Z,{code:`import { View, Text, Button } from 'react-native';
import { Icon } from '@ant-design/react-native';`,lang:"js"}),e().createElement("h3",{id:"react-navigation"},e().createElement(n.AnchorLink,{to:"#react-navigation","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"React Navigation"),e().createElement(u.Z,{code:`\u8FD9\u4E2A\u76F4\u63A5\u53C2\u8003\u5B98\u65B9\u6587\u6863\u5C31\u53EF\u4EE5\u4E86 \u6211\u6CA1\u6709\u9047\u5230\u4EC0\u4E48\u95EE\u9898
\u53EA\u662F\u6709\u4E9BAPI\u6709\u7248\u672C\u95EE\u9898`,lang:"js"}),e().createElement("h2",{id:"5-\u53C2\u8003\u94FE\u63A5"},e().createElement(n.AnchorLink,{to:"#5-\u53C2\u8003\u94FE\u63A5","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"5. \u53C2\u8003\u94FE\u63A5"),e().createElement("ul",null,e().createElement("li",null,e().createElement(n.Link,{to:"https://www.react-native.cn/docs/environment-setup"},"ReactNative#\u5B98\u7F51\u642D\u5EFA\u5F00\u53D1\u73AF\u5883\u6587\u6863")),e().createElement("li",null,e().createElement(n.Link,{to:"https://www.jianshu.com/p/412d760bcacd"},"\u642D\u5EFA\u73AF\u5883\u95EE\u9898\u7684\u89E3\u51B3")),e().createElement("li",null,e().createElement(n.Link,{to:"https://github.com/eternallycyf/react-native-dva-template"},"\u6211\u7684 reactNative \u9879\u76EE\u6A21\u677F\u4ED3\u5E93")),e().createElement("li",null,e().createElement(n.Link,{to:"https://dvajs.com/guide/#%E7%89%B9%E6%80%A7"},"dva")),e().createElement("li",null,e().createElement(n.Link,{to:"https://www.npmjs.com/package/react-native-config"},"react-native-config")),e().createElement("li",null,e().createElement(n.Link,{to:"https://www.npmjs.com/package/babel-plugin-module-resolve"},"babel-plugin-module-resolve")),e().createElement("li",null,e().createElement(n.Link,{to:"https://rn.mobile.ant.design/index-cn"},"antd-RN")),e().createElement("li",null,e().createElement(n.Link,{to:"https://reactnavigation.org/"},"React Navigation"))))));c.default=l=>{const i=e().useContext(n.context),m=i.demos;return e().useEffect(()=>{var a;l!=null&&(a=l.location)!==null&&a!==void 0&&a.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(l.location.hash.slice(1)))},[]),e().createElement(o,{demos:m})}}}]);
