---
order: 9
nav:
  title: 前端之路
  path: /guide
---

# React-Charts

## 1. 准备阶段

### canvas

```js
yarn add @ant-design/charts

import React from 'react';
const Index = () => {
  const style = {
    border: "1px solid #ccc",
  }
  let canvas = React.useRef(null)
  React.useEffect(() => {
    let ctx = canvas.current.getContext('2d')
  }, [])
  return (
  <canvas width="800" height="800" style={style} ref={canvas}></canvas>
  )
}
export default Index
```

## 2. 一级菜单

| 配置项  | 描述     | 默认值 | 使用方式 | 其他 |
| ------- | -------- | ------ | -------- | ---- |
| width   |          | 500    | number   |      |
| height  |          | 500    | number   |      |
| nodeCfg | 节点配置 |        | 见下表   |      |

```js
data:数据,
width:
height:
xField:"type",    // 图形在 x 方向对应的data字段名
yField:"value",   // 图形在 y 方向对应的data字段名
seriesField:""    // 分组字段
meta:""           // 元信息


color:"",         // 自定义线条的颜色
point:{}          // 更改 辅助数据点大小及样式
yAxis:{}            // 格式化y轴标签加单位 自定义label样式
label:{},
annotations:[        // 添加辅助文本 辅助线]
```

## 3. 通用 API

| 配置项          | 描述                                 | 类型                          | 默认值 |
| --------------- | ------------------------------------ | ----------------------------- | ------ |
| onReady         | 图表加载回调                         | (plot)=> void                 |        |
| onEvent         | 图表事件绑定                         | (chart, event)=> void         |        |
| loading         | 是否显示加载状态，异步获取数据时使用 | boolean                       | false  |
| loadingTemplate | 自定义 loading 组件                  | React.ReactElement            |        |
| errorTemplate   | 图表加载出错时呈现的模板             | (e: Error) => React.ReactNode |        |
| className       | 图表容器 class                       | string                        |        |
| style           | 图表容器 style                       | React.CSSProperties           |        |

## 4. 图表组件

## 5. 通用配置

### nodeCfg

| 配置项          | 描述             | 类型                 | 使用方式                    | 其他 |
| --------------- | ---------------- | -------------------- | --------------------------- | ---- |
| type            | 节点类型         | string               | icon-node card ...          |      |
| size            | 节点大小         | Number [ ]           |                             |      |
| style           | 节点样式         | object \| Function   | 支持回调                    |      |
| label           | 节点文本样式     | object               | 支持回调                    |      |
| anchorPoints    | 节点的连接点     | Number [ ]           | [[0.5, 0], [0.5, 1]]        |      |
| padding         | 文本内边距       | number \| number [ ] |                             |      |
| customContent   | 自定义 Items     | Function             | 要返回自定义 items 最大高度 |      |
| nodeStateStyles | 节点不同状态样式 | Object               |                             |      |
|                 |                  |                      |                             |      |

### edgeCfg 边配置

| 配置项          | 描述           | 类型   | 使用方式    | 其他 |
| --------------- | -------------- | ------ | ----------- | ---- |
| type            | 边类型         |        | line \| ... |      |
| label           | 边文本样式     | Object | 支持回调    |      |
| startArrow      | 边开始箭头     | Object |             |      |
| endArrow        | 边结束箭头     | Object |             |      |
| edgeStateStyles | 边不同状态样式 | Object |             |      |

### behaviors 交互模式

```js
类型   Number[]
默认值 ['drag-canvas', 'zoom-canvas']
drag-canvas: 拖拽画布
scroll-canvas: 滚轮滚动画布
zoom-canvas: 缩放画布
drag-node: 拖拽节点
```

### 其他配置

| 配置项     | 描述                             | 类型               | 使用方式 | 默认值 |
| ---------- | -------------------------------- | ------------------ | -------- | ------ |
| markerCfg  | Marker 配置                      | Boolean\|MarkerCfg |          |        |
| animate    | 是否开启动画                     | Boolean            |          | true   |
| autoFit    | 是否缩放节点大小自适应容器       | Boolean            |          | true   |
| fitCenter  | 开启后 图片平移至画布中心 不缩放 | Boolean            |          | true   |
| minimapCfg | 迷你 map 配置                    | Object             |          |        |

## 6. 常用控件

### annotation

```js
annotations:[
  {
        type: "line",
        // 第一个是 x轴 第二个是Y轴 start[x,y]
        start: ['min,0%,start', '2000'],
        end: ['max,100%,end', '2000'],
        style: {
          stroke: 'red',
          lineDash: [2, 2],
          lineWidth: 2,
        },
  }
]
# dataMarker  // 折线图的点
      {
        type: "dataMarker",
        position: ['12月', 20],
        point: {
          style: {
            fill: 'red',
            stroke: "red"
          },
        },
        line:false
      },
# region 背景
      {
        type: "region",
        start: function start(xScale) {
          console.log(xScale);
          return [''.concat(0 * 100, '%'), '0%'];
        },
        end: function end(xScale) {
        return [''.concat(xScale.range[0] * 2 * 100, '%'), '100%'];
        }
      }
# html    // 自定义图形
  {
    type:'html'
    position: ['12月', 20],  // x 和 y 轴的某一项值
    html: '<p>辅助标记</p>',
    style: {
        fill: 'blue'
     },
  }
# regionFilter
// 如果 同时使用点了 将点的颜色也改变了  将起点设置成负值
// start['start',-1]
 {
        type: 'regionFilter',
        start: ['start', -2],
        end: ['end', lower],
        color: '#F4664A',
        top: true,
        style: {
          fill: 'F4664A'
        },
      },

# text
         {
          type: 'text',
          content: "日期为板坯生产日期",
          position: ["93%", '0%'],
          style: {
            textAlign: 'center',
            fill: 'rgba(0, 0, 0, 0.45)',
            fontSize: 14
          },
        }
      ]
```

### tooltip

```js
   tooltip: {
      // showTitle: false,
      // formatter: (text) => {
      //   return {
      //     name: moment(text.date).format("YYYY-MM-DD HH:mm:ss"),
      //     value: text?.trendPoint + '%',
      //   }
      // }
      customContent: (_, config) => {
        const title = config[0]?.title;
        if (!title) return;
        return (
          <>
            <div style={{ padding: '10px 0' }} className={styles.tooltip}>
              <div className={styles.tooltipTtitle}>{config?.data?.date}</div>
              <ul className={styles.tooltipContent}>
                <li>
                  <span>{ }:</span>
                  <span>
                    {/* {datum?.avgValue ? datum?.avgValue.toFixed(tooltipNum) : '--'} */}
                  </span>
                </li>
              </ul>
            </div>
          </>
        )
      }
    },


      .tooltip {
  text-align: left;

  .tooltipTtitle {
    padding: 10px;
    font-size: 30px;
    margin-bottom: 10px;
  }

  .tooltipContent {
    padding: 10px;
    position: relative;

    >li {
      padding: 6px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 32px;

      >span:first-child {
        margin-right: 30px;
      }
    }

    >li:last-child {
      margin-bottom: 0;
    }
  }
}

```

### meta

```js
全局信息过滤
  meta: {
      字段名: {
        // quantile 哪里数据多 哪里间隔大
        type: 'cat',
        formatter(value) {
          return ~~value
        }

        min: 0,
        max: 100,
        // 自定义刻度
        ticks: [10, 20, 50, 100, 150, 300]


        // tooltip 的名字
        alias: '温度',
        nice: true,
        // 两个字段同步配置
        sync: true,

      },
    },

```

### 纵坐标自适应

```js
#
https://g2.antv.vision/zh/docs/manual/tutorial/scale#quantize
  yAxis:{
    tickMethod
  }
  type= "quantize"
  对于数据都是0 的时候 设置 meta:{max:0}
#
function findMaxNum(val, type) {
    let number = [];
    val.map((res) => {
      if (typeof res[type] === 'number') number.push(res[type]);
    });
    let max = Math.max(...number) * 1.1 > 100 ? 100 : Math.max(...number) * 1.1;
    let min = Math.min(...number) * 0.9;
    return {
      min: min,
      max: max,
    };
  }

   findMaxNum(chartData, 'trendPoint').max >= high && {
        type: 'region',
        start: [
          'start',
          findMaxNum(chartData, 'trendPoint').min >= high ? 'min' : high,
        ],
        end: ['end', 'max'],
        style: {
          fill: '#18C54B',
          fillOpacity: 0.1,
        },
      },
```

## 6. 图表细分

### 柱状图

```js
# 常用属性
$ theme:'dark | default'       // 底色是白色还是黑色
```

```js
{
$ width: number,
$ height: number,
$ autoFit: boolean,                   // 自适应容器宽高
$ padding:number[] | number | 'auto'  // 整体的padding
$ renderer                            // canvas 还是 svg
$ limitInPlot: boolean        // 对超出的geometry 进行裁切
$ data:                       // 数据源
$ xField                      // 图形在x方向的数据字段名
$ yField                      // 图形在y方向的数据字段名
$ seriesField                 // 拆分字段
     //stackField 拆分颜色用  colorField
$ groupField                  // 堆叠分组柱状图拆分字段
$ isGroup                     // 是否分组柱状图
$ isStack                     // 是否堆积柱状图
$ isRange                     // 是否区间柱状图
$ isPercent                   // 是否堆积百分比柱状图
  // 当 isPercent:true  && isStack:true


$  minColumnWidth              // 柱子的最小宽度
$  maxColumnWidth              // 柱子的最大宽度
$  columnWidthRatio: [0-1],    // 柱状图 个体宽度占比
$  intervalPadding             // 分组柱状图的 每组间距
$  dodgePadding                // 分组柱状图的 组内间距


$  color:string | string[] | Function  // 点的颜色
  // 配置 colorFiled 用于拆分颜色
$  columnStyle:{}                 // 设置 柱形图的样式
$  columnBackground: {            // 柱子 背景样式设置
      style: {
        fill: "#ccc",
        fillOpacity: 0.25
      }
    },

$ xAxis:{
    top:boolean              // 是否可渲染在画布顶层 防遮挡
    position:"top"...        // 设置坐标轴的位置
    verticalFactor:-1 | 1    // 坐标轴文字相对于坐标轴的位置
    verticalLimitLength:number // 垂直方向最大长度
    min                      // 坐标轴最小值
    max                       // 坐标轴最大值
    minLimit
    maxLimit
    tickCount                 // 期望的坐标轴数量
    tickInterval              // 坐标轴刻度间隔

-   label:{ null                 // 坐标轴的文字
      content:                // 展示的文本内容
      style:{ShapeAttrs

          }
      formatter: (text) => {
            let time = momnet(text).format('hh:mm');
            return time;
          },
      type
      layout                //文本布局类型
      animate
      position
      offset
      offsetX
      offsetY
      labelLine	             // 文本的连接线
      autoRotate             // 是否自动旋转
      rotate                 // 文本旋转角度
      labelEmit              // 进行放射状显示
      autoHide               // 是否自动隐藏
    }


-   grid:{ null               // 坐标轴网格
       line: {                // 网格线
          style: {
                stroke: 'rgba(255,255,255,.1)'
           }
       }
       alternateColor:string  // 两个栅格线间的填充色
       closed                 //  circle 是否关闭 grid
       alignTick              // 是否同刻度线对齐
    }

-   tickLine:{              // 坐标轴刻度线
         style:{

         },
         alignTick:boolean    // 是否对齐
         length:number
     }
-  tickMethod: function tickMethod(_ref) { // 刻度自定义
        var max = _ref.max;
        var interval = Math.ceil(max / 5);
        return [
          0,
          interval,
          interval * 2,
          interval * 3,
          interval * 4,
          max.toFixed(0),
        ];
      },
-   subTickLine:{             // 坐标轴子刻度线
       style:{}
       count
       length
     }

-   title:{null              //  图表整体下方的标题
      text:""
      position
      offset
      spacing
      style:shapeStyle
      autoRotate              // 是否自动旋转
    }
  }


$ legend:{ false
  layout: 'horizontal vertical',
  position: 'right'
  offsetX
  offsetY
  itemWidth:""        // 分类图例 的宽度
  itemHeight:""       // 分类图例 的高度
  itemSpacing:""      // 每个分类图例之间 水平方向间距
  // 设置每个 图标和文字之间的间距 marker => spacing


  maxWidth  // 分类图例分页 当layout:horzontal时 超过就分页
  maxHeight // 分类图例分页
  min                 // 连续图例的范围
  max                 // 连续图例的范围
  value:number[]     // 连续图例 当前选中的范围
  slidable            // 连续图例 是否可以滑动
  rail               // 连续图例 滑块背景的样式配置

- itemName:{          // 图例文字样式设置
     style,
     spacing          // 和 itemValue的距离
     formatter:()=>{}
  }
- itemValue:{         // 自定义增加的文字后缀
     style
     alignRight
     formatter
  }
- marker:{             // 图例的 图标设置
    symbol:'square',
    style// innerwidth 可以控制图标大小 从而让文字不再省略
    spacing            // 图标同 后面文件的间距
  }


- custom     // 自定义图例时 必须为 true 且要声明 items
- items      // 配置自定义图例 配置

- background:{        // 背景框
    padding
    style
  }
- title:{         // 图例上面的标题
     title
     spacing     //标题同图例项的间距
     style:{

     }
  }
}

 // 当遮挡label的时候 加padding
$ label:{          //  每个矩形 上边的 数据描述
  offsetX
  offsetY
  position
  style:{fill:"red"}
  formatter

  labelLine        // 连接线
  content
}


$ tooltip: {   // 当hover的时候 显示的数据框
   fields:['x','y']             // 显示的字段
   formatter:(text)=>{
     return {
       name:"",
       value:""
     }
   }
   showTitle                   // 是否显示标题
   title                       // 自定义标题
   position
   showContent  // 是否展示 tooltip内容库
   showMarkers  // 是否展示 每个树状图上的 数值位置的小图标
   marker:{     // 配置 showMarkers 的图标
         symbol:'square',
         style
   },
   customItems:(originItem)=> return originItem
   // 自定义处理
    customContent: (title, data) => {  // 自定义模板
      return `<div>${title}</div>`;
    };
 }
//  annotations:{
//     value:[
//        { 配置内容 }
//       ]
//    }

$ annotations:[        // 辅助线
  {
  type:"text line region"    //
  // text line
  // region 框一个热区
  // regionFilter 对一个区域的图形重新着色 配合color上色

  // min max median start end
  start:[x,y]
  end:[x,y],
  position:[start,end]
  top:false            // 层叠性 是否可被遮挡
  offsetX
  offsetY

  color:               // 配合 regionFilter 类型使用

  content:''            // 文本内容 用于text
  maxLength             // 文本最大长度
  background:{
    style,
    padding
  }
  isVertical            // 文本在x轴还是Y轴显示
  autoEllipsis
  ellipsisPosition      // 文本截断的位置
}

$ geometryOptions:[

]
  }]


$  meta:{                        // 元信息
    alias:""                    // 字段别名
    formatter:(){}              // 对字段所有值进行格式化
    values:string[]             // 枚举该字段下所有值
    range:number[]
  }


  // hover的效果 default inactive selected
$   interactions: [{ type: 'element-active' }],
$   state:{   // 设置激活时的样式
     active:{
      animate: { duration: 100, easing: 'easeLinear' },
      style: {
        lineWidth: 2,
        stroke: '#000',
      },
     }
   }
}
```

| columnStyle 属性 | 类型            | 描述                                                                                                         |
| ---------------- | --------------- | ------------------------------------------------------------------------------------------------------------ |
| fill             | _string_        | 图形的填充色                                                                                                 |
| r                | _number_        | 用于 `point`, 代表图形的半径大小                                                                             |
| fillOpacity      | _number_        | 图形的填充透明度                                                                                             |
| stroke           | _string_        | 图形的描边                                                                                                   |
| lineWidth        | _number_        | 图形描边的宽度                                                                                               |
| lineDash         | [number,number] | 描边的虚线配置，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。lineDash 设为[0,0]的效果为没有描边。 |
| lineOpacity      | _number_        | 描边透明度                                                                                                   |
| opacity          | _number_        | 图形的整体透明度                                                                                             |
| shadowColor      | _string_        | 图形阴影颜色                                                                                                 |
| strokeOpacity    | _number_        | 图形边框透明度                                                                                               |
| shadowBlur       | _number_        | 图形阴影的高斯模糊系数                                                                                       |
| shadowOffsetX    | _number_        | 设置阴影距图形的水平距离                                                                                     |
| shadowOffsetY    | _number_        | 设置阴影距图形的垂直距离                                                                                     |
| cursor           | _string_        | 鼠标样式。同 css 的鼠标样式，默认 'default'。                                                                |
|                  |                 |                                                                                                              |

### 折线图

```js
{
  width:400
  height:400
  minColumnWidth: 2,         // 最大 最小宽度
  maxColumnWidth: 2,
  data:[{}]                   // 数据
  xField: string              // x轴 对应的字段
  yField: string              // y轴 对应的字段
  seriesField:"key"           // 分组数据 在数据中加一个key
  // 例如 data:[{key:"series1"},{key:"series2"}]
  meta:{                      // 全局元信息
    alias:string              // 字段别名
    formatter:()=>{}
    values:string[]           // 枚举该字段下所有值
    range:number[]            // 字段的数据映射区间
  }
  color: srting string[]      // 线的颜色
  lineStyle:{
    //这里写绘图属性 如果是 折线图就是 lineStyle
  },
  point:{          // 这里写点的样式
    color:string,string[],
    shape:custom-shape|custom-shape|breath-point|circle|
      square|circle
    size:number
    style:object,
  }
   state:{                  //操作时候点的样式
      active:{
        style:{}
      },
      default | inactive | selected
    }
  tooltip:{                       // 组件
    follow: true                 // 是否跟随鼠标移动
    enterable: false              // 是否允许鼠标滑入
    marker: {
          symbol: "square",
          style: (item) => ({
            ...item,
            fill: item.stroke,
            innerWidth: 15
          })
        },
  }
  xAxis:{
    false   //隐藏坐标轴
    position: top|botton|left|right  // 坐标轴位置
    title:{                       // 标题的配置项 null
      text:""                      // 坐标轴下方大标题
      offset:number
      spacing:number
      style:绘图属性 shape
      autoRotate:是否自动旋转
    },
    grid: {  // 网格的底色
            line: {
              style: {
                stroke: 'rgba(255,255,255,.1)'
              }
            }
          }
    line                               // 网格线
    label:{        //x轴的文字
      offset: 56,  // 距离坐标轴距离
      style:{
        fontSize:20
      }
     formatter: (text) => {
            let time = momnet(text).format('hh:mm');
            return time;
          },
    }
  },
  yAxis:{

  },
  label:{}                     // 绘图的文本style
  legend:boolean | object {           // 图例

  },
   annotations={{
        value: [
          {
            type: "line",
            start: ['0%', 50],
            end: ['100%', 50],
            style: {
              lineWidth: 1,
              stroke: '#F4664A',
              lineDash: [3, 3],
            },
            {
               type: 'regionFilter',
               start: ['min', min],
               end: ['max', 'max'],
               color: '#ff3c03ff',
            },

          }
        ]
      }}
  smooth:boolean              // 曲线是否平滑
  stepType:hv | vh | hvh | vhv   // 阶梯折线图类型
  isStack:boolean               // 当字段分组 让折线堆叠
  antoFit:true|false          // 是否自适应
  padding:[0,0,0,0] | "auto"  // 画布的padding
appendPadding number[]| number // 在padding 基础上 继续加padding
  renderer:"canvas" | "svg"       // 设置渲染方式
}
```

### 条形图

```
barWidthRatio={0.3} 每个图的宽度
 label={null}       每个图上面的文字
```

### 饼图

### 面积图

### 双轴图

```js
# 自定义颜色
    data: [cokeAndFuelList, burnList],
    xField="time"
    yField={['value', 'count']}
    geometryOptions={[
        {
          geometry: 'line',
          lineStyle: { lineWidth: 2 },
          color: "#FFC100"
        },
        {//为柱状图添加颜色 需要先拆开字段 colorField
          geometry: 'column',
          color: '#FFC100',
          colorField: "time",
          color: (a) => {
            let color =
              timeFilter.indexOf(a.time) > -1
                ? 'l(0) 0:#007785 1:#00FFF9'
                : 'l(0) 0:#6C000C 1:#FF3C03';
            return color;
          }
        },
    ]},
    yAxis: {
      value:{
        ...
      },
      number:{
        min: findMaxNum(cokeAndFuelList, 'number').min,
        max: findMaxNum(cokeAndFuelList, 'number').max,
      }
    }


  export function findMaxNum(val, type) {
  let number = [];
  val.map((res) => {
    if (typeof res[type] === 'number') number.push(res[type]);
  });
  let max = Math.max(...number) * 1.1;
  let min = Math.min(...number) * 0.9;
  return {
    min: min,
    max: max,
  };
}
```

### 区域地图

```js
#
  source:{
    data:data,
    parser: {
        type: 'geojson',
    },
  },

< AreaMap/>
{
  // 是否开启抗锯齿
  antialias: boolean[true],
  // 是否保留缓冲区数据
  preserveDrawingBuffer: boolean[false],
  // 显示中国国界线
  chinaBorder: boolean[true],
  // 是否开启 多选交互
  enabledMultiSelect: boolean[false],

  // 是否显示 logo
  logo: boolean[true],
  // 初始化 是否自动缩放到图层数据边界范围
  autoFit: boolean[false],

  width:number | null,
  height:number | null,
  style:{ 绘图属性 }
$ source:{
    data:data,
    parser: {
        type: 'geojson',
    },
  },
$ color:{ // color:red 背景色
    field:'字段名',
    // 颜色数组
    value: string[] | ({ 字段名 }) => { return 字段名} ,
/* 颜色效果
linear:线性 power:指数 log:对数 quantile:等分位
quantize:等间距 cat:枚举
*/
    scale: {
        type: 'quantile',
    },
  }

$ map: { // 地图的基本配置
    type: 'amap' | 'mapbox',
    token: '8dec1a9e7c97b30691b132b24b5f6325',
    // 初始经纬度
    center: [0,0],
    // 初始倾斜角
    pitch: number,
    // 初始旋转角度
    rotation: number,
    // 初始缩放层级 高德:2-19 Mapbox: 0-24
    zoom: number,
    minZoom: number,
    maxZoom: number,
    style: 'dark' 'light' 'normal' 'blank'
  }
// 地图上 显示的文字 (例如 '浙江省')
$ label: {
    visible: true,
    field: 'name',
    content: '',
    style: {

    },
    active:{color:'red'},
    select:{color:'red'}
  },
$ tooltip: { items:['字段1','字段2'] },
$ legend: {...}

$ zoom: {  // 放大缩小控件
    position: 'topright' 'topleft' 'bottomright' 'bottomleft',
    zoomInText: '放大按钮文本',
    zoomInTitle: '放大按钮名称',
    zoomOutText: '缩小按钮文本',
    zoomOutTitle: '缩小按钮名称'
 }
$ scale: {  // 比例尺 控件
   position: 'topright' 'topleft' 'bottomright' 'bottomleft',
   maxWidth: number,
   // 地图移动中是否更新比例尺
   updateWhenIdle: boolean[false],
   // 是否显示公制刻度线（m/km) 英制刻度线
   metric: boolean,
 }
$ layerMenu: {  // 地图图层列表控件 }

$ state:{ // 交互反馈效果
    active: { // active: true
      ... 绘图属性
      color: 'red'
    },
    select: {
      ... 绘图属性,
      color: 'red'
    }
  }

}
```

### 行政区域地图

```js
// 与区域地图类似
<ChoroplethMap
 $ source: {
      data: [],
/* 地图元数据关联
sourceField 业务元数据地理字段
geoField    地理数据字段
geoData     设置则覆盖当前层级行政地址数据
*/
      joinBy: {
        sourceField: 'code',
        geoField: 'adcode',
      },
    },
/* 行政级别 行政名称 钻取下级别level
level: 'world'｜'country'｜'province'｜'city'｜'district'
adcode:
granularity: 'country'｜'province'｜'city'｜'district'
世界地图                 level: 'world', adcode: 'all'
中国地图(显示省份lable)   level: 'country', adcode: 100000,
中国地图市级 level: 'country',adcode: 100000,granularity: 'city'
浙江省地图               level: 'province', adcode: 330000,
浙江县级 level:'province',adcode:330000,granularity: 'district'
杭州地图                level: 'city',adcode: 330100
西湖区地图              level: 'district', adcode: 330106,
*/
 $ viewLevel: {
      level: 'world',
      adcode: 'all',
      granularity: ...
    },

 $ drill: {
     // 是否启动区域钻取
     enabled: boolean[true],
     // 上钻取 下钻取 触发事件的方式
     triggerUp: 'unclick' 'undblclick' 'uncontextmenu',
     triggerDown: 'unclick' 'undblclick' 'uncontextmenu',

     // 上钻事件回调 异步请求上钻的数据
     onUp: (form,to,callback)=>{
       const { level, adcode, granularity } = to
       callback(
         {
           source: { data: [],
           joinBy: { sourceField: 'code' }
          }
        })
     },
     // 下钻拦截 如果是浙江省 就点不了
     onDown: (form,to,callback)=>{
       const { adcode, level, granularity } = to
       if (adcode === 330000) {
          return;
        }
       if (granularity === 'city') {
          callback({source: { data:[] } })
       } else if (granularity === 'district'){
          callback({source: { data:[] } })
       }
     },
     steps:[
       {
         color: string object function,
         style: object,
         // 点击反馈
         state: object,
         tooltip: 'province' 'city' 'district',
         // 当前文本
         label: 'parvince' 'city' 'district',

         level:"country" "province" "city" "district",
         granularity: 'province' 'city' 'district',
         source: { data:xxx },

       },
         ...
     ]
   }
```

### 散点地图

```js
csv 以逗号分隔的数据
geojson 有层级的json
json 平级的json
<DotMap
  source: {
      data: data,
      parser: {
        type: 'json csv geojson',
        // x y x1 y1 是某一项数据的映射 可以在 shape 中使用
        x: 'Longitude',
        y: 'Latitude',
        // 映射 type:json 的 coordinates 字段
        coordinates: 'coordinates',
      },
    },
/*  shape: 'dot'
shape:'data中的字段'   这个字段是图形的名称 例如 circle
*/
   shape: {
      field: 'typecode',
      value: ({ typecode }) => typecode,
      // linear power log quantile quantize cat
      scale: {type: 'quantile'}
    },
/>
```

### 热力地图

#### 点热力图

```js
<HeatMap
  style: {
    // 每一个阶段的颜色 positon: 0-100
    colorsRamp: [
      {color:'',position:0 },
      ...
    ]
  }
  // 开启 3d
  shape: 'heatmap3D',
  size: {
      field: 'avg',
      value: ({ avg }) => avg / 100,
    },
/>
```

#### 网格聚合图

```js
<GridMap
  source{
    ...,
    // 生成方格网格布局
    aggregation: {
        field: 'count',
        // 网格半径
        radius: 1000,
        type: 'count max min sum mean',
    },
  },
  style: {
    coverage: 0.9,
    angle: 0,
    opacity: 1.0,
  }
/>
```

### 蜂窝聚合图

```js
shape: 'hexagonColumn',
```

## 7. 绘图属性

### shapeStyle

| 属性名        | 类型            | 描述                                                                                                         |
| ------------- | --------------- | ------------------------------------------------------------------------------------------------------------ |
| fill          | string          | 图形的填充色                                                                                                 |
| fillOpacity   | number          | 图形的填充透明度                                                                                             |
| stroke        | string          | 图形的描边                                                                                                   |
| lineWidth     | number          | 图形描边的宽度                                                                                               |
| lineDash      | [number,number] | 描边的虚线配置，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。lineDash 设为[0,0]的效果为没有描边。 |
| lineOpacity   | number          | 描边透明度                                                                                                   |
| opacity       | number          | 图形的整体透明度                                                                                             |
| shadowColor   | string          | 图形阴影颜色                                                                                                 |
| shadowBlur    | number          | 图形阴影的高斯模糊系数                                                                                       |
| shadowOffsetX | number          | 设置阴影距图形的水平距离                                                                                     |
| shadowOffsetY | number          | 设置阴影距图形的垂直距离                                                                                     |
| cursor        | string          | 鼠标样式。同 css 的鼠标样式，默认 'default'。                                                                |

### lineStyle

| 属性名        | 类型            | 描述                                                                                                   |     |
| ------------- | --------------- | ------------------------------------------------------------------------------------------------------ | --- |
| stroke        | string          | 线的颜色                                                                                               |     |
| lineWidth     | number          | 线宽                                                                                                   |     |
| lineDash      | [number,number] | 虚线配置，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。lineDash 设为[0,0]的效果为没有描边。 |     |
| opacity       | number          | 透明度                                                                                                 |     |
| shadowColor   | string          | 阴影颜色                                                                                               |     |
| shadowBlur    | number          | 高斯模糊系数                                                                                           |     |
| shadowOffsetX | number          | 设置阴影距图形的水平距离                                                                               |     |
| shadowOffsetY | number          | 设置阴影距图形的垂直距离                                                                               |     |
| cursor        | string          | 鼠标样式。同 css 的鼠标样式,默认 'default'。                                                           |     |

### textStyle

| 属性名        | 类型            | 描述                                                                                                         |
| ------------- | --------------- | ------------------------------------------------------------------------------------------------------------ |
| fontSize      | number          | 文字大小                                                                                                     |
| fontFamily    | string          | 文字字体                                                                                                     |
| fontWeight    | number          | 字体粗细                                                                                                     |
| lineHeight    | number          | 文字的行高                                                                                                   |
| textAlign     | string          | 设置文本内容的当前对齐方式, 支持的属性：`center`                                                             |
| textBaseline  | string          | 设置在绘制文本时使用的当前文本基线, 支持的属性:`top`                                                         |
| fill          | string          | 文字的填充色                                                                                                 |
| fillOpacity   | number          | 文字的填充透明度                                                                                             |
| stroke        | string          | 文字的描边                                                                                                   |
| lineWidth     | number          | 文字描边的宽度                                                                                               |
| lineDash      | [number,number] | 描边的虚线配置，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。lineDash 设为[0,0]的效果为没有描边。 |
| lineOpacity   | number          | 描边透明度                                                                                                   |
| opacity       | number          | 文字的整体透明度                                                                                             |
| shadowColor   | string          | 文字阴影颜色                                                                                                 |
| shadowBlur    | number          | 文字阴影的高斯模糊系数                                                                                       |
| shadowOffsetX | number          | 设置阴影距文字的水平距离                                                                                     |
| shadowOffsetY | number          | 设置阴影距文字的垂直距离                                                                                     |
| cursor        | string          | 鼠标样式。同 css 的鼠标样式,默认 'default'。                                                                 |

### 渐变

```js
# 线性渐变
stroke: 'l(0) 0:#ffffff 0.5:#7ec2f3 1:#1890ff';
// L 表示使用线性渐变
// 渐变角度为0
// 渐变的起始点颜色 #ffffff
// 中点的渐变色为 #7ec2f3
// 结束的渐变色为 #1890ff
# 环形渐变
fill: 'r(0.5, 0.5, 0.1) 0:#ffffff 1:#1890ff';
// r 表示使用放射状渐变
// 半径为(包围盒对角线长度 / 2) 的 0.1 倍
// 渐变的起始点颜色 #ffffff
// 中点的渐变色为 #7ec2f3
// 结束的渐变色为 #1890ff
             color={(ref) => {
                          let color = '';
                          fuelRatioData.map((res) => {
                            if (res.type == ref.type)
                              color =
                                typeof handleValue(
                                  fDate[res.date]?.headerMap?.[res.dateType],
                                  fDate[res.date]?.headerMap?.rangeMin,
                                  fDate[res.date]?.headerMap?.rangeMax,
                                ) === 'number'
                                  ? 'l(0) 0:#6C000C 1:#FF3C03'
                                  : 'l(0) 0:#007785 1:#00FFF9';
                          });
                          return color;
                        }}
```

### 纹理

```js
'p(a)https://xxx',
// p  表示使用纹理
// a: 该模式在水平和垂直方向重复
// x: 该模式只在水平方向重复；
// y: 该模式只在垂直方向重复；
// n: 该模式只显示一次（不重复）
```

## 8. 其他配置

### 事件监听

#### 绑定事件

```js
# 绑定事件
    onReady: (plot) => {
      plot.on('plot:click', (...args) => {
        console.log(...args);
      });
    }
# on once off
plot                 // 整个图表的范围
axis                 // x y 轴
axis-line            // x y 轴的线
axis-label           // x y 轴的文本
annotation
legend               // 图例
legend-item          // 图例每一项
legend-item-name     // 图例每一项名字
label                // 柱形图 每项的 label 例如在上方显示星期一
slider               // 最下方 滑块
mask                 // mask
tooltip              // tooltip  show hide change click
element              // 柱形图 每项生成的 长方形元素
       interval
       line
       area
       point
       polygon
       schema
       path
```

#### Meta

- 全局配置元信息

```js
 onReady: (plot) => {
      console.log(plot.options.meta);
}
meta: {
      sale: {
        min: 0,
        max: 100,
      },
    }
```

#### 方法

```js
import React, { useRef } from 'react';
import { Line } from '@ant-design/charts';

const DemoLine: React.FC = () => {
  const data = [
    {
      year: '1991',
      value: 3,
    },
    {
      year: '1992',
      value: 4,
    },
    {
      year: '1993',
      value: 3.5,
    },
    {
      year: '1994',
      value: 5,
    },
    {
      year: '1995',
      value: 4.9,
    },
  ];

  const config = {
    data,
    height: 300,
    xField: 'year',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
      style: {
        fill: 'white',
        stroke: '#2593fc',
        lineWidth: 2,
      },
    },
  };
  const ref = useRef();

  // 导出图片
  const downloadImage = () => {
    ref.current?.downloadImage();
  };

  // 获取图表 base64 数据
  const toDataURL = () => {
    console.log(ref.current?.toDataURL());
  };

  return (
    <div>
      <button type="button" onClick={downloadImage} style={{ marginRight: 24 }}>
        导出图片
      </button>
      <button type="button" onClick={toDataURL}>
        获取图表信息
      </button>
      <Line
        {...config}
        onReady={plot => {
          ref.current = plot;
        }}
      />
    </div>
  );
};

export default DemoLine;
```

## 9.bug

### 自适应 y 轴

```js
自己自定义min max
```

### 横坐标乱序

```js
自定义min max
需要对时间处理成 g2 能识别的时间格式
https://g2.antv.vision/zh/docs/manual/tutorial/scale#%E5%BA%A6%E9%87%8F%E5%AE%9A%E4%B9%89
```

### Label 溢出

```js
appendpadding;
padding;
```

### label 重叠

```js
autoRotate;
autoHide;
```

### 控制 x 轴坐标个数

```js
自定义tickMethods
       tickCount: 8,
        tickMethod: function tickMethod(_ref) {
          var max = _ref.max;
          var interval = Math.ceil(max / 9);
          return [
            0,
            interval,
            interval * 2,
            interval * 3,
            interval * 4,
            interval * 5,
            interval * 6,
            ~~max,
          ];
        },
```

### 子弹图目标值 x 轴位置不对

```js
# 增加一个新的目标值为1000的  或更大的
异步加载会出问题 需要加一个空的目标值
let time = {};
  if (data?.length) {
    time = bdata[data.length - 1];
  }
  bDate = [...bdata]
  bDate.push({
    isType: false,
    ...time,
    ranges: [],
    measure: [],
    target: 1000,
  });
# 1000设置成透明色
        target: (datum) => {
          return {
            stroke:
              datum.target === targetMaxLimit
                ? 'transparent'
                : 'rgba(11, 10, 25, 1)',
            lineWidth: 2.5,
          };
```

### minmax 不生效

```js
# 使用期望出现几条
        tickCount: 6,
# 手动指定
  meta:{
      value:{
        min:100,
        ticks: [0, 20, 50, 100, 150, 300]
      }
    },
}
```

### 自定义刻度

```js
// tickMethod: function tickMethod(_ref) {
//   var max = _ref.max;
//   var interval = Math.ceil(max / 6);
//   console.log(_ref);
//   return [
//     0,
//     interval,
//     interval * 2,
//     interval * 3,
//     interval * 4,
//     interval * 5,
//     max.toFixed(0),
//   ];
// },
```
