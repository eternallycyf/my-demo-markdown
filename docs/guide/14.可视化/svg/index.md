---
order: 14
nav:
  title: 前端之路
  path: /guide
---

# SVG

## 准备阶段

## bug

```js
useState 需要 ...
不能深拷贝
```

### SVG

```js
<svg
  width="100%"
	height="1000"
// min-x min-y width height
	viewBox="0 0 100% 100%"
	xmlns="http://www.w3.org/2000/svg"
>
#
<embed src="circle1.svg" type="image/svg+xml" />
<a href="circle1.svg">查看 SVG 文件</a>
```

### 通用 API

```js
<xxx x="0" y="0" width="100" height="100" fill="red" />
```

### style

```js
# style='fill:red;...'
# fill='red'
fill(填充颜色)
fill-opacity(填充透明度)
stroke(边框颜色)
stroke-width(边框宽度)
stroke-opacity(边框透明度)
stroke-dasharray(创建虚线)
transform(变换)
filter(滤镜)(url[#滤镜id)]

text-anchor="middle"
```

## 内置图形

### rect

```js
<rect
  x="10"
  y="100"
  width="100"
  height="200"
  // 圆角
  rx="15"
  ry="15"
/>
```

### circle

```js
<circle
  // 圆心横坐标
  cx="100"
  // 圆心纵坐标
  cy="50"
  // 半径
  r="100"
/>
```

### ellipse 椭圆

```js
<ellipse
  //圆心横坐标
  cx="300"
  //圆心纵坐标
  cy="80"
  //横向半径
  rx="150"
  //纵向半径
  ry="100"
  fill="#f06"
/>
```

### line

```js
<line
  // 起点横坐标
  x1="0"
  // 起点纵坐标
  y1="100"
  // 终点横坐标
  x2="100"
  // 终点纵坐标
  y2="0"
/>
```

### polygon 多边形

```js
<polygon
  // x1,y1,x2,y2,x3,y3 ...
  points="200,10,250,190,160,210"
/>
```

### polyline 折线

```js
<polyline
  // x1,y1,x2,y2,x3,y3 ...
  points="200,10,250,190,160,210"
/>
```

## 其他实例

### text

```js
<text x="10" y="15">I love SVG</text>
#
transform="rotate(30 20,40)"
// dx，dy表示平移的距离

```

#### textPath

```js
// 沿path方向排列文本textPath
<path
  id="wavyPath"
  d="M75,100 a50,25 0 1,0 50,25"
  fill="none" />
<text x="50" y="50" font-size="14">
        <textPath xlink:href="#wavyPath">
        Text travels along any path that you define for it.
        </textPath>
</text>
```

### A

```js
<a xlink:href="http://www.w3schools.com/svg/" target="_blank">
  {' '}
  ...{' '}
</a>
```

### span

```js
<tspan fill="red">D3</tspan>
```

### linearGradient

```js
// 线性渐变 径向渐变
<defs>
    <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <!--x1,y1 x2,y2用来定义径向渐变的方向，此处为向右-->
        <stop offset="0%" stop-color="blue">
        <stop offset="100%" stop-color="red">
    </linearGradient>
    <radialGradient id="irisGradient">
        <stop offset="25%" stop-color="green" />
        <stop offset="100%" stop-color="dodgerblue" />
    </radialGradient>
</defs>
<rect fill="url(#myGradient)" x1="10" y1="10" width="300" height="100"/>
```

### defs

```jd
// 定义可重用组件
<defs />

<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <style type="text/css"><![CDATA[
       #MyRect {
         stroke: black;
         fill: red;
       }
    ]]></style>
  </defs>
  <rect x="10" height="180" y="10" width="180" id="MyRect"/>
</svg>
```

### g

```js
// 分组 定义统一的样式
<g />
```

### use

```js
// 引用defs中定义的元素
<g id="eye"> ... </g>
<use xlink:href="#eye" x="250" fill="dodgerblue" />
```

## path

### base

```js
#
 字母大写:绝对位置 小写:相对位置
#
命令            名称                        参数
 M           moveto  移动到                (x y)+
 L           lineto  画线到                (x y)+
 Z          closepath  关闭路径            (none)
 H          horizontal lineto  水平线到      x+
 V          vertical lineto  垂直线到        y+
 A        elliptical arc椭圆弧
   (rx ry x-axis-rotation large-arc-flag sweep-flag x y)+
 C        curveto 三次贝塞尔曲线到          (x1 y1 x2 y2 x y)+
 S     smooth curveto光滑三次贝塞尔曲线到   (x2 y2 x y)+
 Q        Bézier curveto二次贝塞尔曲线到    (x1 y1 x y)+
 T     smooth Bézier curveto光滑二次贝塞尔曲线到  (x y)+
 #
    <path d="M150 0 L75 200 L225 200 Z" />
```

### 贝塞尔曲线

#### 三次

```js
 # 贝赛尔曲线
// x1 y1 x2 y2 为控制点 x y 为关键点
 Cx1 y1, x2 y2, x y
 <path
	d="M20 20 C140 30 60 160 200 200"
	stroke="#000000"
	fill="none"
	style="stroke-width: 2px;"
/>
```

#### 光滑三次

```js
// S用来补刀 自动生成一个对称点
// Sx2 y2, x y
<path
  d="M20 20 C140 30 60 160 200 200 S140 30 200 200"
  stroke="#000000"
  fill="none"
  style="stroke-width: 2px;"
/>
```

#### 二次

```js
// X1,y1,x,y
<path
  d="M20 20 Q140 30 200 200"
  stroke="#000000"
  fill="none"
  style="stroke-width: 2px;"
/>
```

#### 光滑二次

```js
// T用来补刀 自动生成一个对称点
// Tx y
<path
  d="M20 20 Q140 30 200 200 T"
  stroke="#000000"
  fill="none"
  style="stroke-width: 2px;"
/>
```

### 圆弧

```js
// A rx ry x-deg large-arc sweep-flag x y
// rx    x轴半径
// x-deg x轴旋转角度
// large-arc 表示大于180度还是小于180 0为小 1位大
// sweep-flag 弧线方向 0为沿逆时针，1为沿顺时针
// x y为最终坐标。
<path d="M80 80 A45 45, 0, 0, 0, 125 125" fill="green" />
```

## 事件

```js
document.getElementById('...')
  .addEventListener("click",function(){
     ...
  })
```

## demo

### 基本图形

```js
<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <rect
    x="10"
    y="10"
    width="30"
    height="30"
    stroke="black"
    fill="transparent"
    stroke-width="5"
  />
  <rect
    x="60"
    y="10"
    rx="10"
    ry="10"
    width="30"
    height="30"
    stroke="black"
    fill="transparent"
    stroke-width="5"
  />

  <circle
    cx="25"
    cy="75"
    r="20"
    stroke="red"
    fill="transparent"
    stroke-width="5"
  />
  <ellipse
    cx="75"
    cy="75"
    rx="20"
    ry="5"
    stroke="red"
    fill="transparent"
    stroke-width="5"
  />

  <line
    x1="10"
    x2="50"
    y1="110"
    y2="150"
    stroke="orange"
    fill="transparent"
    stroke-width="5"
  />
  <polyline
    points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"
    stroke="orange"
    fill="transparent"
    stroke-width="5"
  />

  <polygon
    points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
    stroke="green"
    fill="transparent"
    stroke-width="5"
  />

  <path
    d="M20,230 Q40,205 50,230 T90,230"
    fill="none"
    stroke="blue"
    stroke-width="5"
  />
</svg>
```

### 渐变

```js
<svg width="400" height="500" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="Gradient1" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="red" />
      <stop offset="50%" stop-color="black" stop-opacity="0" />
      <stop offset="100%" stop-color="blue" />
    </linearGradient>
    <radialGradient
      id="RadialGradient1"
      cx="0.5"
      cy="0.5"
      r="0.5"
      fx="0.25"
      fy="0.25"
    >
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="blue" />
    </radialGradient>
  </defs>
  <rect
    x="10"
    y="10"
    rx="15"
    ry="15"
    width="100"
    height="100"
    fill="url(#RadialGradient1)"
  />
  <rect
    x="120"
    y="10"
    rx="15"
    ry="15"
    width="100"
    height="100"
    fill="url(#Gradient1)"
  />
</svg>
```
