---
order: 9
nav:
  title: 前端之路
  path: /guide
---

# Reative Native

## 1. 准备阶段

### 基本环境的安装

```js
npx react-native init AwesomeProject
npx react-native init RN --template react-native-template-typescript
yarn android
yarn ios
# 具体流程: 参考官网
https://www.react-native.cn/docs/environment-setup
# 安装过程中遇到的问题: 指定镜像(必须 或者自己代理)
https://www.jianshu.com/p/412d760bcacd
# 其他bug
- yarn ios 后没有app
sudo chown -R eternallycyf ~/react_native_project
chmod 777 RN
- 运行报错
端口在运行了 杀下端口
```

### 调试

```js
# vscode 安装 react native tools 插件
# brew 安装集成的调试插件 brew install --cask react-native-debugger
open "rndebugger://set-debugger-loc?host=localhost&port=8081"
# 语法提示
npm install --save @types/react-native
根目录构建tsconfig.json文件
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
}
# 刷新模拟器
1.按两下 R || r 快速刷新
2.command+R || command+D  => reload
3.安卓
  avd manager
  command + m reload
# commend+d => show Inspector => 点击元素
# console.log
1.yarn ios 运行的终端那里可以看到 console.log()的输出
2.command+D => Debug with Chrome => 切换到console界面 => 将top切换为 debug...
3.react native debugger 应用
# react 调试工具
npm i -g react-devtools@^4.13.0
终端输入 react-devtools
在模拟器刷新后 react-devtools 就有内容了
# 网络请求
brew install --cask react-native-debugger
如果没开启 鼠标在react调试工具Hover 右键开启network
# 真机调试
```

### 目录结构

```js
__tests__.bundle;
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
package.json;
```

## 2. CSS

### style

```js
// 所有尺寸都没有单位 可以用百分比表示 需要双引号
// view 的css不能被继承
# StyleSheet
import { StyleSheet } from 'react-native';
const App = () => {
  const styles = StyleSheet.create({
    active: {
      color: '#fff',
      width: '50%',
      marginTop: 100,
      backgroundColor: 'red',
    },
  });
  return <Text style={styles.active}> hello World </Text>;
};
export default App;
# flex

```

### 图片

```js
# 引用本地图片
<Image source={require('./my-icon.png')} /> // 图片名 不能是变量
my-icon@2x.png //命名成这样 可以自动根据屏幕大小适配
# 引用网络图片 需要手动指定尺寸大小 可指定请求参数
<Image source={
               {uri: 'https://...},
               headers:{参数名:"参数"}
              }
       style={{width: 400, height: 400}}
 />
# base64 需要手动指定图片尺寸
<Image
  style={{width: 51,height: 51,resizeMode: 'contain',}}
  source={{uri:'data: xxxxxx',}}
/>
# 背景图片
 <ImageBackground source={...} style={{width: '100%', height: '100%'}} />
```

### 动画

```js
```

## 3. 组件

- import{ View, Text } from "react-native";

### 基本组件

#### View

```js
# div  他的style不会被继承
<View
/>
```

#### Text

```js
# p 文本只能放在这个里
<Text

/>
```

#### TextInput

```js
# <input type="text">
<TextInput
	onChangeText
/>
```

#### Image

```js
<Image source="url" />
```

#### Button

| 原标签 | Native 事件              | 属性及作用               | 其他      |
| ------ | ------------------------ | ------------------------ | --------- |
| button | TouchableHighlight       | 默认在按下后背景变暗     | 按钮/链接 |
|        | TouchableNativeFeedback  | 安卓按下产生水花涟漪效果 |           |
|        | TouchableOpacity         | 按下后降低按钮透明度     |           |
|        | TouchableWithoutFeedback | 按下后没有任何反馈       |           |

```js
<Button title="" onPress={} />
```

### 复杂组件

#### ScrollView

```js
// 默认垂直滚动
<ScrollView
  // 允许使用滑动手势对视图分页 Android 也可以使用 ViewPager
  pagingEnabled={}
  // 水平滚动
  horizontal={boolean}
# ios 可以设置缩放
  maximumZoomScale
  minimumZoomScale
/>
#
想要一部分不滚动 就在最外层增加一个view元素 和 不滚动的内容
```

#### FlatList

```jsx | pure
# FlatList
// 垂直的滚动列表 懒加载 元素可增删
// 必须指定data和renderItem
<FlatList
   data={[{name:Andy}]}
   renderItem={
     ({item,index}) => <Text>{item.name}</Text>
   }
/>
```

#### SectionList

```js
// 分组的长列表
 <SectionList
    sections={[
      {
        title: '浙江省',
        data: ['宁波', '杭州', '绍兴'],
      },
      {
        title: '河北省',
        data: ['石家庄', '唐山'],
      },
    ]}
    // item => data
    renderItem={({ item }) => <Text>{item}</Text>}
    // section => sections
    renderSectionHeader={({ section }) => (
      <Text{section.title}</Text>
    )}
    // item => data
    keyExtractor={(item, index) => index}
/>
```

## 4. API

### 兼容 API

#### Platform

```jsx | pure
// 检测平台
# Platform.OS
const styles = StyleSheet.create({
  height: Platform.OS === 'ios' ? 200 : 100
  // Platform.OS 在 ios 上返回ios 在 Android 返回 android
});
# Platform.select() 自动传入相应的值   可以返回组件
const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: 'red'
      },
      android: {
        backgroundColor: 'blue'
      }
    })
  }
});
# Platform.Version   检测安卓API版本
# ios版本
const IOSApiVersion = parseInt(Platform.Version, 10);
```

#### 特定平台拓展名

```jsx | pure
# 创建不同后缀文件 会自动切换
BigButton.ios.js
BigButton.android.js
import BigButton from './BigButton';
```

### 事件

#### 常用事件

| 事件名      | 原生事件名 | 描述                                          | 其他 |
| ----------- | ---------- | --------------------------------------------- | ---- |
| onPress     | onClick    | 点击事件/触摸事件                             |      |
| onLongPress |            | 长按                                          |      |
| onLayout    |            | 当加载或布局改变                              |      |
| onPressIn   |            | 按下并调用 touchable 元素 在 onPress 之前调用 |      |
| onPressOut  |            | 触摸释放后立即调用 在 onPress 之前调用        |      |

#### 事件对象

## 5 React Navigation

#### demo

```js
#
import React, { useEffect, useRef, useState } from 'react'
import Home from '@/pages/Home'
import Detail from "@/pages/Detail";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
type RootSatackParamList = {
  Home: undefined,
  Detail: undefined
}
export type RootSatackNavigation = NativeStackNavigationProp<RootSatackParamList>
const Stack = createNativeStackNavigator<RootSatackParamList>();
const Navigator = () => {
  return (
    <>
      <NavigationContainer >
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerTitleAlign: 'center' }}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerTitle: '首页'
            }}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{
              title: '详情页'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
export default Navigator
#
import { RootSatackNavigation } from "@/navigator/index"
import React, { FC, useEffect, useRef, useState } from 'react'
import { View, Text, Button } from "react-native"
interface Iprops {
  navigation: RootSatackNavigation
}
const Home: FC<Iprops> = (props) => {
  return (
    <>
      <Button title="跳转到详情页" onPress={() => props.navigation.navigate('Detail')} />
    </>
  )
}
export default Home
```

#### NavigationContainer

```js
// 容器 src/navigator/index.tsx
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
<NavigationContainer>...</NavigationContainer>;
```

#### native-stack

- navbar

##### 容器

```js
yarn add @react-navigation/native-stack
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@/pages/Home'
// Stack.Navigator Stack.Screen:定义路由
const Stack = createNativeStackNavigator();
const Navigator = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
export default Navigator
```

##### Stack.Navigator

```js
<Stack.Navigator
  // 初始路由名
  initialRouteName="Home"
  // 所有路由统一配置
  screenOptions={screenOptions}
/>
# screenOptions =>
// 可以是 obj || ({route,navigation})=>({ ... })
 const screenOptions = {
   // navbar 居中显示
   headerTitleAlign: 'center'
   // navbar 的文字
   title: string
   headerTitle: string
   headerStyle: {color:'red'}
   // 隐藏
   headerShown: false
 }
```

##### Stack.Screen

```js
<Stack.Screen
  name="Home"
  component={}
#
  // 自己的配置信息
  options={{ title: 'Overview' }}
/>
```

##### API

###### 路由跳转

```js
// 只要被容易包裹了就可以用
// 会关闭多余的页面 然后跳转
props.navigation.navigate('RouteName');
props.navigation.push('RouteName');
props.navigation.goBack();
// 返回首页
props.navigation.popToTop();
```

###### 路由传参

```js
#
props.navigation.navigate(
  'RouteName',
  { paramName: 'value'}
)
props.navigation.getParam
```

#### 其他

##### 隐藏 bar

```js
static navigationOptions = ({ navigation,screenProps,navigationOptions }) => {
    return {
      title: navigation.getParam('otherParam', 'A Nested Details Screen'),
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    };
  };
```

##### 顶部按钮

```js
## 顶部按钮
class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
      />
    ),
  };
}
```

##### createBottomTabNavigator

## 6 dva

```js
yarn add dva-core-ts react-redux @types/react-redux
```

```js
import { create, Model } from 'dva-core-ts';
import createLoading from 'dva-loading-ts';
import models from '@/models/index';
import '@/config/http';
import home, { HomeModelType } from '@/models/home';
import { Animated } from 'react-native';

const modelExtend = require('dva-model-extend').default;

// 1.创建实例
const app = create({
  onError: function(e) {
    console.log('e', e);
  },
});
// 2.加载model对象
models.forEach(model => {
  app.model(model);
});

app.use(createLoading());

// 3.启动dva
app.start();
// 4.导出dva的数据
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
}
```

## 8 库

### react-native-config

```js
// 区分多环境 需要重新打包
yarn add react-native-config
# 配置 参考Npm官网
...
npx react-native link react-native-config
// 注意安卓需要额外配置  resValue
# 根目录新建 .env
API_URL=https://myapi.com
# App.tsx
import Config from 'react-native-config'
```

### babel-plugin-module-resolve

```jsx | pure
yarn add babel-plugin-module-resolver
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
 },
```

### Yapi

```js
yapi server
node vendors/server/app.js
3301
node版本不要太高 11.0.0就行
默认密码 ymfe.org
#
右上角 新建项目 随便写
左边 公共分类 添加接口
/test
中间 编辑 设置接口相关参数
    返回数据设置 JSON 导入json
     id  string @id
# 在 mock.js 文档查看自定义设置数据类型
@integer(60, 100)
http://39.105.213.120/mock/11
```

## 9. antd

```js
import { View, Text, Button } from 'react-native';
import { Icon } from '@ant-design/react-native';
```

## 10. 打包

#### android

-

```js
# 签名密匙
keytool -genkey -v -keystore ${名稱}.keystore -alias ${別名} -keyalg RSA -keysize 2048 -validity 10000

keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -KEYSIZE 2048 -VALIDITY 10000
wangxince1999
是
#
brew install gradle
export JAVA_HOME=$(/usr/libexec/java_home)
./gradlew assembleRelease
./gradlew assembleRelease  // apk
```

#### ios

```js
# 导出文件和资源
react-native bundle --platform ios --entry-file index.js --bundle-output ./bundles/main.jsbundle --assets-dest  ./bundles --dev false

```
