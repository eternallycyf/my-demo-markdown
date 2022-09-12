---
order: 9
nav:
  title: 前端之路
  path: /guide
---

# React-map

## 准备阶段

### 引入

```js
npm install --save react-amap

import styles from './index.less';
import { Map } from 'react-amap';
export default function IndexPage() {
  return (
    <div className={styles.mapContenter}>
      <Map amapkey={'8dec1a9e7c97b30691b132b24b5f6325'} />
    </div>
  );
}

.mapContenter {
  width: 1000px;
  height: 1000px;
}

# 属性最好用 state 处理 不然会有不必要的刷新
```

### 事件绑定

```js
const events = {
    created: (instance)=> { console.log(instance.getZoom())},
    click: () => {
      console.log('clicked')
    },
}
<Polygon events={events}  />
```

### 注意事项

```js
```

## 组件

### 容器

#### Map

```js
# 会给每个子组件注入 props.__ele__  props.__map__ 属性
<Map
  mapStyle={ normal dark light fresh blue_night }
// 地图元素 背景 点 道路 建筑物
  features={['bg','point','road','building']}
  loading={ReactNode}
// 是否加载 AMapUI组件库
  useAMapUI={boolean}
// 中心位置
  conter={
    longitude: 135,
    latitude: 30
  }
// 缩小比例
  zoom={4}
// 开启3d 最好配合 plugin 的 ControlBar 控件
  viewMode="3D"
// 可以都放在status管理 也可以直接写在 外面第一层
  status={
    {
      zoomEnable:false, 是否可以缩放
      animateEnable:false,
      doubleClickZoom:false,
      dragEnable:false,
      isHotspot:false,
      jogEnable:false,
      keyboardEnable:false,
      resizeEnable:false,
      rotateEnable:false,
      scrollWheel:false,
      touchZoom:false,
    }
  }
/* 地图空间 string[] | object[]
plugins={[
 'ToolBar',      放大缩小
 'MapType',      切换卫星地图
 'Scale',        地图比例尺
 'OverView',     右下角鹰眼
 'ControlBar'    3d效果 操作面板
]}
*/
  plugins={[
    {
       name:"ToolBar",
       options:{
         position:'LT RT LB RB',
         // 精简模式
         liteStyle:Boolean,
         // 标尺 当liteStyle=false 时有效
         ruler:Boolean,
         visible:true,
         // 自动定位到用户的位置
         autoPosition:Boolean,
         onCreated(ins){
           console.log(ins)
         }

       }
    }
  ]}
  events={
    {
      created: (ins) => {console.log(ins)},
      click: () => {console.log('clicked')}
    }
  }
/>
```

###### dom

```js
// 需要 固定定位
<Map>自定义节点</Map>
```

#### MouseTool

```js
# 用户绘制图形
const [ tool, setTool ] = useState({})
<Map>
   <MouseTool
     events={{
       created:(_tool)=>{
         setTool(_tool)
       },
// 绘制完毕后触发
        draw(){}
      }}
/>
</Map>

<button
  onClick={
    ()=>{
       tool.circle()
       tool.rectangle()
       tool.marker()
       tool.polygon()
       tool.close()
    }
  }
>
  绘制图形
</button>
```

### 覆盖物

#### Marker

- 单个坐标点

```js
<Marker
  position={{longitude: 121, latitude: 36}}
  offset={[-10,-34]}
  visible={boolean}
// 是否可点击
  clickable={boolean}
// 可拖动
  draggable={boolean}
  events={{
    created(instance){
      // instance 是高德地图原生的 Marker 实例
    }
    click(){
    }
  }}
// 自定义外观 配合extData 数据
  render={(extData)=>{
    return <>{extData}<>
  }}
  extData={'lable'}
>
  <div>
    自定义外观
  </div>
</Marker>
```

#### Markers

- 多个坐标点

```js
<Markers
   markers={[
    { position:{longitude: 121, latitude: 36} },
    ...
   ]}
   events={{
     created:(allMarkers)=>{}
     click:(MapOption,marker)=>{
        // 使用原生方法获取所有的数据
        const extData = marker.getExtData();
     }
   }}
// 开启聚合
   useCluster={boolean}
// 倾斜角度
   angle={(data,index)=>({...})}
// 自定义外观
   render={()=>ReactNode}
/>
#
  获取点击事件的索引
  在markers初始数据中定义索引
```

#### Polygon

- 多边形

```js
<Polygon
  path={[
    { longitude: 101, latitude: 36 },
    { longitude: 111, latitude: 36 },
    { longitude: 121, latitude: 36 },
  ]}
  draggable
  style={{
    strokeColor: 'red',
    fillColor: 'red',
  }}
/>
```

#### Polyline

- 线

```js
<Polyline
  path={[
    { longitude: 101, latitude: 36 },
    { longitude: 111, latitude: 36 },
    { longitude: 121, latitude: 36 },
  ]}
  style={{
    strokeColor: 'red',
    fillColor: 'red',
  }}
/>
```

#### PolyEditor

- 编辑功能

```js
 <Polygon path={...}>
     <PolyEditor
          active={Boolean}
          events={}
/>
</Polygon>
```

#### Circle

```js
<Circle
  center={{ longitude: 120, latitude: 30 }}
  radius={Number}
  events={}
  visible={}
  style={}
  draggable={}
/>
```

#### CircleEditor

```js
<Circle>
  <CircleEditor active={true} />
</Circle>
```

#### GroundImage

```js
     <GroundImage
// 根据西南方和东北方的坐标确定的边界范围
            bounds={
                sw: {
                  longitude: 120,
                  latitude: 20,
                },
                ne: {
                  longitude: 130,
                  latitude: 30
                }
            }
            src={String}
            opacity={Number}

            visible={}
            events={}
            clickable
   />
```

### 信息窗体

#### InfoWindow

```js
<InfoWindow
  position={{ longitude: 120, latitude: 30 }}
  // 是否自定义外观 配和 content
  isCustom={false}
  // 是字符串形式的 Html
  content={`html` | string}
  visible={true}
  size={{ width: 100, height: 100 }}
  offset={[-10, -34]}
  events={}
>
  这这里jsx自定义样式
</InfoWindow>
```

## 自定义组件

```js
 <Map amapkey={'788e08def03f95c670944fe2c78fa76f'}>
        <MyMapComponent />
  </Map>
const MyMapComponent = ({__ele__:ele,__map__:map})=>{
  const zoomIn = () => map.zoomIn()
  const zoomOut = () => map.zoomOut()
   return (
    <div>
        <span onClick={zoomIn}>+</span>
        <span onClick={zoomOut}>-</span>
    </div>);
)}
```

## 使用高德地图 API
