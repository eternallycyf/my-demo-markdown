(self.webpackChunkmy_demo_markdown=self.webpackChunkmy_demo_markdown||[]).push([[1971],{11406:function(d,o,a){"use strict";a.r(o);var c=a(12924),e=a.n(c),n=a(16924),t=a(53401),l=a(86821);const u=e().memo(({demos:r})=>e().createElement(e().Fragment,null,e().createElement("div",{className:"markdown"},e().createElement("h1",{id:"reative-native"},e().createElement(n.AnchorLink,{to:"#reative-native","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"Reative Native"),e().createElement("h2",{id:"1-\u51C6\u5907\u9636\u6BB5"},e().createElement(n.AnchorLink,{to:"#1-\u51C6\u5907\u9636\u6BB5","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"1. \u51C6\u5907\u9636\u6BB5"),e().createElement("h3",{id:"\u57FA\u672C\u73AF\u5883\u7684\u5B89\u88C5"},e().createElement(n.AnchorLink,{to:"#\u57FA\u672C\u73AF\u5883\u7684\u5B89\u88C5","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u57FA\u672C\u73AF\u5883\u7684\u5B89\u88C5"),e().createElement(t.Z,{code:`npx react-native init AwesomeProject
npx react-native init RN --template react-native-template-typescript
yarn android
yarn ios
# \u5177\u4F53\u6D41\u7A0B: \u53C2\u8003\u5B98\u7F51
https://www.react-native.cn/docs/environment-setup
# \u5B89\u88C5\u8FC7\u7A0B\u4E2D\u9047\u5230\u7684\u95EE\u9898: \u6307\u5B9A\u955C\u50CF(\u5FC5\u987B \u6216\u8005\u81EA\u5DF1\u4EE3\u7406)
https://www.jianshu.com/p/412d760bcacd
# \u5176\u4ED6bug
- yarn ios \u540E\u6CA1\u6709app
sudo chown -R eternallycyf ~/react_native_project
chmod 777 RN
- \u8FD0\u884C\u62A5\u9519
\u7AEF\u53E3\u5728\u8FD0\u884C\u4E86 \u6740\u4E0B\u7AEF\u53E3`,lang:"js"}),e().createElement("h3",{id:"\u8C03\u8BD5"},e().createElement(n.AnchorLink,{to:"#\u8C03\u8BD5","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u8C03\u8BD5"),e().createElement(t.Z,{code:`# vscode \u5B89\u88C5 react native tools \u63D2\u4EF6
# brew \u5B89\u88C5\u96C6\u6210\u7684\u8C03\u8BD5\u63D2\u4EF6 brew install --cask react-native-debugger
open "rndebugger://set-debugger-loc?host=localhost&port=8081"
# \u8BED\u6CD5\u63D0\u793A
npm install --save @types/react-native
\u6839\u76EE\u5F55\u6784\u5EFAtsconfig.json\u6587\u4EF6
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
# \u5237\u65B0\u6A21\u62DF\u5668
1.\u6309\u4E24\u4E0B R || r \u5FEB\u901F\u5237\u65B0
2.command+R || command+D  => reload
3.\u5B89\u5353
  avd manager
  command + m reload
# commend+d => show Inspector => \u70B9\u51FB\u5143\u7D20
# console.log
1.yarn ios \u8FD0\u884C\u7684\u7EC8\u7AEF\u90A3\u91CC\u53EF\u4EE5\u770B\u5230 console.log()\u7684\u8F93\u51FA
2.command+D => Debug with Chrome => \u5207\u6362\u5230console\u754C\u9762 => \u5C06top\u5207\u6362\u4E3A debug...
3.react native debugger \u5E94\u7528
# react \u8C03\u8BD5\u5DE5\u5177
npm i -g react-devtools@^4.13.0
\u7EC8\u7AEF\u8F93\u5165 react-devtools
\u5728\u6A21\u62DF\u5668\u5237\u65B0\u540E react-devtools \u5C31\u6709\u5185\u5BB9\u4E86
# \u7F51\u7EDC\u8BF7\u6C42
brew install --cask react-native-debugger
\u5982\u679C\u6CA1\u5F00\u542F \u9F20\u6807\u5728react\u8C03\u8BD5\u5DE5\u5177Hover \u53F3\u952E\u5F00\u542Fnetwork
# \u771F\u673A\u8C03\u8BD5`,lang:"js"}),e().createElement("h3",{id:"\u76EE\u5F55\u7ED3\u6784"},e().createElement(n.AnchorLink,{to:"#\u76EE\u5F55\u7ED3\u6784","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u76EE\u5F55\u7ED3\u6784"),e().createElement(t.Z,{code:`__tests__.bundle;
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
package.json;`,lang:"js"}),e().createElement("h2",{id:"2-css"},e().createElement(n.AnchorLink,{to:"#2-css","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"2. CSS"),e().createElement("h3",{id:"style"},e().createElement(n.AnchorLink,{to:"#style","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"style"),e().createElement(t.Z,{code:`// \u6240\u6709\u5C3A\u5BF8\u90FD\u6CA1\u6709\u5355\u4F4D \u53EF\u4EE5\u7528\u767E\u5206\u6BD4\u8868\u793A \u9700\u8981\u53CC\u5F15\u53F7
// view \u7684css\u4E0D\u80FD\u88AB\u7EE7\u627F
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
# flex`,lang:"js"}),e().createElement("h3",{id:"\u56FE\u7247"},e().createElement(n.AnchorLink,{to:"#\u56FE\u7247","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u56FE\u7247"),e().createElement(t.Z,{code:`# \u5F15\u7528\u672C\u5730\u56FE\u7247
<Image source={require('./my-icon.png')} /> // \u56FE\u7247\u540D \u4E0D\u80FD\u662F\u53D8\u91CF
my-icon@2x.png //\u547D\u540D\u6210\u8FD9\u6837 \u53EF\u4EE5\u81EA\u52A8\u6839\u636E\u5C4F\u5E55\u5927\u5C0F\u9002\u914D
# \u5F15\u7528\u7F51\u7EDC\u56FE\u7247 \u9700\u8981\u624B\u52A8\u6307\u5B9A\u5C3A\u5BF8\u5927\u5C0F \u53EF\u6307\u5B9A\u8BF7\u6C42\u53C2\u6570
<Image source={
               {uri: 'https://...},
               headers:{\u53C2\u6570\u540D:"\u53C2\u6570"}
              }
       style={{width: 400, height: 400}}
 />
# base64 \u9700\u8981\u624B\u52A8\u6307\u5B9A\u56FE\u7247\u5C3A\u5BF8
<Image
  style={{width: 51,height: 51,resizeMode: 'contain',}}
  source={{uri:'data: xxxxxx',}}
/>
# \u80CC\u666F\u56FE\u7247
 <ImageBackground source={...} style={{width: '100%', height: '100%'}} />`,lang:"js"}),e().createElement("h3",{id:"\u52A8\u753B"},e().createElement(n.AnchorLink,{to:"#\u52A8\u753B","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u52A8\u753B"),e().createElement(t.Z,{code:"",lang:"js"}),e().createElement("h2",{id:"3-\u7EC4\u4EF6"},e().createElement(n.AnchorLink,{to:"#3-\u7EC4\u4EF6","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"3. \u7EC4\u4EF6"),e().createElement("ul",null,e().createElement("li",null,"import","{"," View, Text ","}",' from "react-native";')),e().createElement("h3",{id:"\u57FA\u672C\u7EC4\u4EF6"},e().createElement(n.AnchorLink,{to:"#\u57FA\u672C\u7EC4\u4EF6","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u57FA\u672C\u7EC4\u4EF6"),e().createElement("h4",{id:"view"},e().createElement(n.AnchorLink,{to:"#view","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"View"),e().createElement(t.Z,{code:`# div  \u4ED6\u7684style\u4E0D\u4F1A\u88AB\u7EE7\u627F
<View
/>`,lang:"js"}),e().createElement("h4",{id:"text"},e().createElement(n.AnchorLink,{to:"#text","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"Text"),e().createElement(t.Z,{code:`# p \u6587\u672C\u53EA\u80FD\u653E\u5728\u8FD9\u4E2A\u91CC
<Text

/>`,lang:"js"}),e().createElement("h4",{id:"textinput"},e().createElement(n.AnchorLink,{to:"#textinput","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"TextInput"),e().createElement(t.Z,{code:`# <input type="text">
<TextInput
	onChangeText
/>`,lang:"js"}),e().createElement("h4",{id:"image"},e().createElement(n.AnchorLink,{to:"#image","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"Image"),e().createElement(t.Z,{code:'<Image source="url" />',lang:"js"}),e().createElement("h4",{id:"button"},e().createElement(n.AnchorLink,{to:"#button","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"Button"),e().createElement(l.Z,null,e().createElement("thead",null,e().createElement("tr",null,e().createElement("th",null,"\u539F\u6807\u7B7E"),e().createElement("th",null,"Native \u4E8B\u4EF6"),e().createElement("th",null,"\u5C5E\u6027\u53CA\u4F5C\u7528"),e().createElement("th",null,"\u5176\u4ED6"))),e().createElement("tbody",null,e().createElement("tr",null,e().createElement("td",null,"button"),e().createElement("td",null,"TouchableHighlight"),e().createElement("td",null,"\u9ED8\u8BA4\u5728\u6309\u4E0B\u540E\u80CC\u666F\u53D8\u6697"),e().createElement("td",null,"\u6309\u94AE/\u94FE\u63A5")),e().createElement("tr",null,e().createElement("td",null),e().createElement("td",null,"TouchableNativeFeedback"),e().createElement("td",null,"\u5B89\u5353\u6309\u4E0B\u4EA7\u751F\u6C34\u82B1\u6D9F\u6F2A\u6548\u679C"),e().createElement("td",null)),e().createElement("tr",null,e().createElement("td",null),e().createElement("td",null,"TouchableOpacity"),e().createElement("td",null,"\u6309\u4E0B\u540E\u964D\u4F4E\u6309\u94AE\u900F\u660E\u5EA6"),e().createElement("td",null)),e().createElement("tr",null,e().createElement("td",null),e().createElement("td",null,"TouchableWithoutFeedback"),e().createElement("td",null,"\u6309\u4E0B\u540E\u6CA1\u6709\u4EFB\u4F55\u53CD\u9988"),e().createElement("td",null)))),e().createElement(t.Z,{code:'<Button title="" onPress={} />',lang:"js"}),e().createElement("h3",{id:"\u590D\u6742\u7EC4\u4EF6"},e().createElement(n.AnchorLink,{to:"#\u590D\u6742\u7EC4\u4EF6","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u590D\u6742\u7EC4\u4EF6"),e().createElement("h4",{id:"scrollview"},e().createElement(n.AnchorLink,{to:"#scrollview","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"ScrollView"),e().createElement(t.Z,{code:`// \u9ED8\u8BA4\u5782\u76F4\u6EDA\u52A8
<ScrollView
  // \u5141\u8BB8\u4F7F\u7528\u6ED1\u52A8\u624B\u52BF\u5BF9\u89C6\u56FE\u5206\u9875 Android \u4E5F\u53EF\u4EE5\u4F7F\u7528 ViewPager
  pagingEnabled={}
  // \u6C34\u5E73\u6EDA\u52A8
  horizontal={boolean}
# ios \u53EF\u4EE5\u8BBE\u7F6E\u7F29\u653E
  maximumZoomScale
  minimumZoomScale
/>
#
\u60F3\u8981\u4E00\u90E8\u5206\u4E0D\u6EDA\u52A8 \u5C31\u5728\u6700\u5916\u5C42\u589E\u52A0\u4E00\u4E2Aview\u5143\u7D20 \u548C \u4E0D\u6EDA\u52A8\u7684\u5185\u5BB9`,lang:"js"}),e().createElement("h4",{id:"flatlist"},e().createElement(n.AnchorLink,{to:"#flatlist","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"FlatList"),e().createElement(t.Z,{code:`# FlatList
// \u5782\u76F4\u7684\u6EDA\u52A8\u5217\u8868 \u61D2\u52A0\u8F7D \u5143\u7D20\u53EF\u589E\u5220
// \u5FC5\u987B\u6307\u5B9Adata\u548CrenderItem
<FlatList
   data={[{name:Andy}]}
   renderItem={
     ({item,index}) => <Text>{item.name}</Text>
   }
/>`,lang:"jsx"}),e().createElement("h4",{id:"sectionlist"},e().createElement(n.AnchorLink,{to:"#sectionlist","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"SectionList"),e().createElement(t.Z,{code:`// \u5206\u7EC4\u7684\u957F\u5217\u8868
 <SectionList
    sections={[
      {
        title: '\u6D59\u6C5F\u7701',
        data: ['\u5B81\u6CE2', '\u676D\u5DDE', '\u7ECD\u5174'],
      },
      {
        title: '\u6CB3\u5317\u7701',
        data: ['\u77F3\u5BB6\u5E84', '\u5510\u5C71'],
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
/>`,lang:"js"}),e().createElement("h2",{id:"4-api"},e().createElement(n.AnchorLink,{to:"#4-api","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"4. API"),e().createElement("h3",{id:"\u517C\u5BB9-api"},e().createElement(n.AnchorLink,{to:"#\u517C\u5BB9-api","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u517C\u5BB9 API"),e().createElement("h4",{id:"platform"},e().createElement(n.AnchorLink,{to:"#platform","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"Platform"),e().createElement(t.Z,{code:`// \u68C0\u6D4B\u5E73\u53F0
# Platform.OS
const styles = StyleSheet.create({
  height: Platform.OS === 'ios' ? 200 : 100
  // Platform.OS \u5728 ios \u4E0A\u8FD4\u56DEios \u5728 Android \u8FD4\u56DE android
});
# Platform.select() \u81EA\u52A8\u4F20\u5165\u76F8\u5E94\u7684\u503C   \u53EF\u4EE5\u8FD4\u56DE\u7EC4\u4EF6
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
# Platform.Version   \u68C0\u6D4B\u5B89\u5353API\u7248\u672C
# ios\u7248\u672C
const IOSApiVersion = parseInt(Platform.Version, 10);`,lang:"jsx"}),e().createElement("h4",{id:"\u7279\u5B9A\u5E73\u53F0\u62D3\u5C55\u540D"},e().createElement(n.AnchorLink,{to:"#\u7279\u5B9A\u5E73\u53F0\u62D3\u5C55\u540D","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u7279\u5B9A\u5E73\u53F0\u62D3\u5C55\u540D"),e().createElement(t.Z,{code:`# \u521B\u5EFA\u4E0D\u540C\u540E\u7F00\u6587\u4EF6 \u4F1A\u81EA\u52A8\u5207\u6362
BigButton.ios.js
BigButton.android.js
import BigButton from './BigButton';`,lang:"jsx"}),e().createElement("h3",{id:"\u4E8B\u4EF6"},e().createElement(n.AnchorLink,{to:"#\u4E8B\u4EF6","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u4E8B\u4EF6"),e().createElement("h4",{id:"\u5E38\u7528\u4E8B\u4EF6"},e().createElement(n.AnchorLink,{to:"#\u5E38\u7528\u4E8B\u4EF6","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u5E38\u7528\u4E8B\u4EF6"),e().createElement(l.Z,null,e().createElement("thead",null,e().createElement("tr",null,e().createElement("th",null,"\u4E8B\u4EF6\u540D"),e().createElement("th",null,"\u539F\u751F\u4E8B\u4EF6\u540D"),e().createElement("th",null,"\u63CF\u8FF0"),e().createElement("th",null,"\u5176\u4ED6"))),e().createElement("tbody",null,e().createElement("tr",null,e().createElement("td",null,"onPress"),e().createElement("td",null,"onClick"),e().createElement("td",null,"\u70B9\u51FB\u4E8B\u4EF6/\u89E6\u6478\u4E8B\u4EF6"),e().createElement("td",null)),e().createElement("tr",null,e().createElement("td",null,"onLongPress"),e().createElement("td",null),e().createElement("td",null,"\u957F\u6309"),e().createElement("td",null)),e().createElement("tr",null,e().createElement("td",null,"onLayout"),e().createElement("td",null),e().createElement("td",null,"\u5F53\u52A0\u8F7D\u6216\u5E03\u5C40\u6539\u53D8"),e().createElement("td",null)),e().createElement("tr",null,e().createElement("td",null,"onPressIn"),e().createElement("td",null),e().createElement("td",null,"\u6309\u4E0B\u5E76\u8C03\u7528 touchable \u5143\u7D20 \u5728 onPress \u4E4B\u524D\u8C03\u7528"),e().createElement("td",null)),e().createElement("tr",null,e().createElement("td",null,"onPressOut"),e().createElement("td",null),e().createElement("td",null,"\u89E6\u6478\u91CA\u653E\u540E\u7ACB\u5373\u8C03\u7528 \u5728 onPress \u4E4B\u524D\u8C03\u7528"),e().createElement("td",null)))),e().createElement("h4",{id:"\u4E8B\u4EF6\u5BF9\u8C61"},e().createElement(n.AnchorLink,{to:"#\u4E8B\u4EF6\u5BF9\u8C61","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u4E8B\u4EF6\u5BF9\u8C61"),e().createElement("h2",{id:"5-react-navigation"},e().createElement(n.AnchorLink,{to:"#5-react-navigation","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"5 React Navigation"),e().createElement("h4",{id:"demo"},e().createElement(n.AnchorLink,{to:"#demo","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"demo"),e().createElement(t.Z,{code:`#
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
              headerTitle: '\u9996\u9875'
            }}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{
              title: '\u8BE6\u60C5\u9875'
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
      <Button title="\u8DF3\u8F6C\u5230\u8BE6\u60C5\u9875" onPress={() => props.navigation.navigate('Detail')} />
    </>
  )
}
export default Home`,lang:"js"}),e().createElement("h4",{id:"navigationcontainer"},e().createElement(n.AnchorLink,{to:"#navigationcontainer","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"NavigationContainer"),e().createElement(t.Z,{code:`// \u5BB9\u5668 src/navigator/index.tsx
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
<NavigationContainer>...</NavigationContainer>;`,lang:"js"}),e().createElement("h4",{id:"native-stack"},e().createElement(n.AnchorLink,{to:"#native-stack","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"native-stack"),e().createElement("ul",null,e().createElement("li",null,"navbar")),e().createElement("h5",{id:"\u5BB9\u5668"},e().createElement(n.AnchorLink,{to:"#\u5BB9\u5668","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u5BB9\u5668"),e().createElement(t.Z,{code:`yarn add @react-navigation/native-stack
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@/pages/Home'
// Stack.Navigator Stack.Screen:\u5B9A\u4E49\u8DEF\u7531
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
export default Navigator`,lang:"js"}),e().createElement("h5",{id:"stacknavigator"},e().createElement(n.AnchorLink,{to:"#stacknavigator","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"Stack.Navigator"),e().createElement(t.Z,{code:`<Stack.Navigator
  // \u521D\u59CB\u8DEF\u7531\u540D
  initialRouteName="Home"
  // \u6240\u6709\u8DEF\u7531\u7EDF\u4E00\u914D\u7F6E
  screenOptions={screenOptions}
/>
# screenOptions =>
// \u53EF\u4EE5\u662F obj || ({route,navigation})=>({ ... })
 const screenOptions = {
   // navbar \u5C45\u4E2D\u663E\u793A
   headerTitleAlign: 'center'
   // navbar \u7684\u6587\u5B57
   title: string
   headerTitle: string
   headerStyle: {color:'red'}
   // \u9690\u85CF
   headerShown: false
 }`,lang:"js"}),e().createElement("h5",{id:"stackscreen"},e().createElement(n.AnchorLink,{to:"#stackscreen","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"Stack.Screen"),e().createElement(t.Z,{code:`<Stack.Screen
  name="Home"
  component={}
#
  // \u81EA\u5DF1\u7684\u914D\u7F6E\u4FE1\u606F
  options={{ title: 'Overview' }}
/>`,lang:"js"}),e().createElement("h5",{id:"api"},e().createElement(n.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"API"),e().createElement("h6",{id:"\u8DEF\u7531\u8DF3\u8F6C"},e().createElement(n.AnchorLink,{to:"#\u8DEF\u7531\u8DF3\u8F6C","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u8DEF\u7531\u8DF3\u8F6C"),e().createElement(t.Z,{code:`// \u53EA\u8981\u88AB\u5BB9\u6613\u5305\u88F9\u4E86\u5C31\u53EF\u4EE5\u7528
// \u4F1A\u5173\u95ED\u591A\u4F59\u7684\u9875\u9762 \u7136\u540E\u8DF3\u8F6C
props.navigation.navigate('RouteName');
props.navigation.push('RouteName');
props.navigation.goBack();
// \u8FD4\u56DE\u9996\u9875
props.navigation.popToTop();`,lang:"js"}),e().createElement("h6",{id:"\u8DEF\u7531\u4F20\u53C2"},e().createElement(n.AnchorLink,{to:"#\u8DEF\u7531\u4F20\u53C2","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u8DEF\u7531\u4F20\u53C2"),e().createElement(t.Z,{code:`#
props.navigation.navigate(
  'RouteName',
  { paramName: 'value'}
)
props.navigation.getParam`,lang:"js"}),e().createElement("h4",{id:"\u5176\u4ED6"},e().createElement(n.AnchorLink,{to:"#\u5176\u4ED6","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u5176\u4ED6"),e().createElement("h5",{id:"\u9690\u85CF-bar"},e().createElement(n.AnchorLink,{to:"#\u9690\u85CF-bar","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u9690\u85CF bar"),e().createElement(t.Z,{code:`static navigationOptions = ({ navigation,screenProps,navigationOptions }) => {
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
  };`,lang:"js"}),e().createElement("h5",{id:"\u9876\u90E8\u6309\u94AE"},e().createElement(n.AnchorLink,{to:"#\u9876\u90E8\u6309\u94AE","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u9876\u90E8\u6309\u94AE"),e().createElement(t.Z,{code:`## \u9876\u90E8\u6309\u94AE
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
}`,lang:"js"}),e().createElement("h5",{id:"createbottomtabnavigator"},e().createElement(n.AnchorLink,{to:"#createbottomtabnavigator","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"createBottomTabNavigator"),e().createElement("h2",{id:"6-dva"},e().createElement(n.AnchorLink,{to:"#6-dva","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"6 dva"),e().createElement(t.Z,{code:"yarn add dva-core-ts react-redux @types/react-redux",lang:"js"}),e().createElement(t.Z,{code:`import { create, Model } from 'dva-core-ts';
import createLoading from 'dva-loading-ts';
import models from '@/models/index';
import '@/config/http';
import home, { HomeModelType } from '@/models/home';
import { Animated } from 'react-native';

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
}`,lang:"js"}),e().createElement("h2",{id:"8-\u5E93"},e().createElement(n.AnchorLink,{to:"#8-\u5E93","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"8 \u5E93"),e().createElement("h3",{id:"react-native-config"},e().createElement(n.AnchorLink,{to:"#react-native-config","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"react-native-config"),e().createElement(t.Z,{code:`// \u533A\u5206\u591A\u73AF\u5883 \u9700\u8981\u91CD\u65B0\u6253\u5305
yarn add react-native-config
# \u914D\u7F6E \u53C2\u8003Npm\u5B98\u7F51
...
npx react-native link react-native-config
// \u6CE8\u610F\u5B89\u5353\u9700\u8981\u989D\u5916\u914D\u7F6E  resValue
# \u6839\u76EE\u5F55\u65B0\u5EFA .env
API_URL=https://myapi.com
# App.tsx
import Config from 'react-native-config'`,lang:"js"}),e().createElement("h3",{id:"babel-plugin-module-resolve"},e().createElement(n.AnchorLink,{to:"#babel-plugin-module-resolve","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"babel-plugin-module-resolve"),e().createElement(t.Z,{code:`yarn add babel-plugin-module-resolver
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
 },`,lang:"jsx"}),e().createElement("h3",{id:"yapi"},e().createElement(n.AnchorLink,{to:"#yapi","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"Yapi"),e().createElement(t.Z,{code:`yapi server
node vendors/server/app.js
3301
node\u7248\u672C\u4E0D\u8981\u592A\u9AD8 11.0.0\u5C31\u884C
\u9ED8\u8BA4\u5BC6\u7801 ymfe.org
#
\u53F3\u4E0A\u89D2 \u65B0\u5EFA\u9879\u76EE \u968F\u4FBF\u5199
\u5DE6\u8FB9 \u516C\u5171\u5206\u7C7B \u6DFB\u52A0\u63A5\u53E3
/test
\u4E2D\u95F4 \u7F16\u8F91 \u8BBE\u7F6E\u63A5\u53E3\u76F8\u5173\u53C2\u6570
    \u8FD4\u56DE\u6570\u636E\u8BBE\u7F6E JSON \u5BFC\u5165json
     id  string @id
# \u5728 mock.js \u6587\u6863\u67E5\u770B\u81EA\u5B9A\u4E49\u8BBE\u7F6E\u6570\u636E\u7C7B\u578B
@integer(60, 100)
http://39.105.213.120/mock/11`,lang:"js"}),e().createElement("h2",{id:"9-antd"},e().createElement(n.AnchorLink,{to:"#9-antd","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"9. antd"),e().createElement(t.Z,{code:`import { View, Text, Button } from 'react-native';
import { Icon } from '@ant-design/react-native';`,lang:"js"}),e().createElement("h2",{id:"10-\u6253\u5305"},e().createElement(n.AnchorLink,{to:"#10-\u6253\u5305","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"10. \u6253\u5305"),e().createElement("h4",{id:"android"},e().createElement(n.AnchorLink,{to:"#android","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"android"),e().createElement("ul",null,e().createElement("li",null)),e().createElement(t.Z,{code:`# \u7B7E\u540D\u5BC6\u5319
keytool -genkey -v -keystore \${\u540D\u7A31}.keystore -alias \${\u5225\u540D} -keyalg RSA -keysize 2048 -validity 10000

keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -KEYSIZE 2048 -VALIDITY 10000
wangxince1999
\u662F
#
brew install gradle
export JAVA_HOME=$(/usr/libexec/java_home)
./gradlew assembleRelease
./gradlew assembleRelease  // apk`,lang:"js"}),e().createElement("h4",{id:"ios"},e().createElement(n.AnchorLink,{to:"#ios","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"ios"),e().createElement(t.Z,{code:`# \u5BFC\u51FA\u6587\u4EF6\u548C\u8D44\u6E90
react-native bundle --platform ios --entry-file index.js --bundle-output ./bundles/main.jsbundle --assets-dest  ./bundles --dev false`,lang:"js"}))));o.default=r=>{const s=e().useContext(n.context),m=s.demos;return e().useEffect(()=>{var i;r!=null&&(i=r.location)!==null&&i!==void 0&&i.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(r.location.hash.slice(1)))},[]),e().createElement(u,{demos:m})}}}]);
