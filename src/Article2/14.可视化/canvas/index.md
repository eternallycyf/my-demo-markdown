---
order: 3
nav:
  title: Article2
  path: /article2
---

# canvas

## **1. Canvas 初始化 **

> canvas 的样式通过 canvas 标签处 设置

> 例如: `<canvas id="myCanvas" width="200" height="100"></canvas>`

| 初始的样式      |     |     |
| :-------------- | --- | --- |
| 默认的宽度 1px  |     |     |
| 默认的颜色 黑色 |     |     |
|                 |     |     |

对齐的点 是 线的中心位置 所以 需要在原来坐标加 0.5 px

​ `<img width="900px" height="300px" src="images/2.jpg"></img>`

---

## 2. **Canvas** 基础模板

```javascript
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title></title>
  <style>
     canvas{border: 1px solid #ccc;}
  </style>
</head>
<body>
<canvas width='1000' height='800' ></canvas>
<script>

var myCanvas = document.querySelector('canvas');
var ctx = myCanvas.getContext('2d');

</script>
</body>
</html>

```

---

## 3. canvas 基本方法

```javascript
<script>
  var myCanvas = document.querySelector('canvas'); var ctx =
  myCanvas.getContext('2d'); ctx.moveTo(100, 100); /* moveTO::: 初始位置 x y
  坐标*/ ctx.lineTo(100, 50); /* lineTO::: 最终位置 x y 坐标*/ ctx.stroke();
  /*描边 */
</script>
```

### 3.1 基础外形样式

| 样式类型     | 样式名称       | 使用方法                                                 | 其他注释                        |
| ------------ | -------------- | -------------------------------------------------------- | ------------------------------- |
|              | font           | ctx.font = "bold 48px serif";                            |                                 |
|              | textAlign      | ctx.textAlign = "left"                                   | right center start end          |
| 文本基线     | textBaseline   | top hanging middle alphabetic ideographic bottom         |                                 |
| 文本方向     | direction      | ltr rtl inherit                                          | 从左到右                        |
| 颜色         | storkeStyle    | ctx.strokeStyle = "blue";                                | ctx.strokeStyle = "rgb(0,0,0)"; |
| 宽度         | lineWidth      | ctx.lineWidth = 10;                                      |                                 |
| 填充颜色     | fillStyle      | ctx.fillStyle = "red";                                   |                                 |
| 线末端类型   | lineCap        | ctx.lineCap = "round";                                   | butt [默认] \| round \| square  |
| 相交线拐点   | lineJoin       | ctx.lineJoin = "round";                                  | miter[默认] \| round \| bevel   |
| 两线之间夹角 | miterLimit     |                                                          | 10.0                            |
| 虚线         | setLineDash    | ctx.setLineDash ( [ 5 ] ) ;                              | 数组：依次实 虚 实 虚 ……        |
|              |                | [1,1][10,10] [20,5][15,3,3,3] [20,3,3,3,3,3,3,3][12,3,3] |                                 |
| 获取虚线     | getLineDash    | ctx.setLineDash ( [ 5,10 ] ) ;                           | 获取不重复的那一段数组          |
| 虚线偏移量   | lineDashOffset | ctx.lineDashOffset = 20 ;                                | 负值向右偏移                    |
|              | shadowOffsetX  | ctx.shadowOffsetX = 10;                                  | 在 X 的延伸距离                 |
|              | shadowOffsetY  | ctx.shadowOffsetY = 10;                                  | 在 Y 轴延伸距离                 |
| 阴影颜色     | shadowColor    | shadowColor = 'd53';                                     |                                 |
| 阴影等级     | shadowBlur     | ctx.shadowBlur = 20                                      |                                 |
|              |                |                                                          |                                 |

### 3.2 复杂功能样式

| 函数作用       | 函数名称  | 使用方法                | 其他注释               |
| -------------- | --------- | ----------------------- | ---------------------- |
| 初始点         | moveTo    | moveTo(x 坐标,y 坐标);  |                        |
| 移动目标点     | lineTo    | lineTo(x 坐标,y 坐标);  |                        |
| 描边           | Stroke    | ctx.stroke();           |                        |
| **开启新路径** | beginPath | ctx.beginPath();        | 类似开启新作用域       |
| 关闭路径       | closePath | ctx.closePath();        | 自动闭合（最后一条线） |
| 填充           | fill      | ctx.fill();             | 参考非零环绕规则       |
|                |           |                         |                        |
| 预测量文本宽度 |           | ctx.measureText("foo"); |                        |

### 3. 3 应用

#### 渐变矩形

```javascript
ctx.lineWidth = 30;
for (var i = 0; i < 255; i++) {
  ctx.beginPath();
  ctx.moveTo(100 + i - 1, 100);
  ctx.lineTo(100 + i, 100);
  ctx.strokeStyle = 'rgb(' + i + ',0,0)';
  ctx.stroke();
}
```

#### 渐变矩形

```javascript
/*2.网格的大小*/
var gridSize = 10;
var canvasHeight = ctx.canvas.height;
var canvasWidth = ctx.canvas.width;
/*3.画多少条X轴方向的线 横线的条数  画布高度*/
var xLineTotal = Math.floor(canvasHeight / gridSize);
for (var i = 0; i <= xLineTotal; i++) {
  ctx.beginPath();
  ctx.moveTo(0, i * gridSize - 0.5);
  ctx.lineTo(canvasWidth, i * gridSize - 0.5);
  ctx.strokeStyle = '#eee';
  ctx.stroke();
}
/*4.画多少条Y轴方向的线*/
var yLineTotal = Math.floor(canvasWidth / gridSize);
for (var i = 0; i <= yLineTotal; i++) {
  ctx.beginPath();
  ctx.moveTo(i * gridSize - 0.5, 0);
  ctx.lineTo(i * gridSize - 0.5, canvasHeight);
  ctx.strokeStyle = '#eee';
  ctx.stroke();
}
```

#### 坐标系

```javascript
var space = 20;
var arrowSize = 10;
/*计算原点*/
var canvasWidth = ctx.canvas.width;
var canvasHeight = ctx.canvas.height;
var x0 = space;
var y0 = canvasHeight - space;
/*绘制x轴*/
ctx.beginPath();
ctx.moveTo(x0, y0);
ctx.lineTo(canvasWidth - space, y0);
/*箭头*/
ctx.lineTo(canvasWidth - space - arrowSize, y0 + arrowSize / 2);
ctx.lineTo(canvasWidth - space - arrowSize, y0 - arrowSize / 2);
ctx.lineTo(canvasWidth - space, y0);
ctx.fill();
ctx.stroke();
/*绘制y轴*/
ctx.beginPath();
ctx.moveTo(x0, y0);
ctx.lineTo(space, space);
/*箭头*/
ctx.lineTo(space + arrowSize / 2, space + arrowSize);
ctx.lineTo(space - arrowSize / 2, space + arrowSize);
ctx.lineTo(space, space);
ctx.fill();
ctx.stroke();
```

#### 点

```javascript
var coordinate = {
  x: 100,
  y: 100,
};
/*点尺寸*/
var dottedSize = 10;
ctx.moveTo(coordinate.x - dottedSize / 2, coordinate.y - dottedSize / 2);
ctx.lineTo(coordinate.x + dottedSize / 2, coordinate.y - dottedSize / 2);
ctx.lineTo(coordinate.x + dottedSize / 2, coordinate.y + dottedSize / 2);
ctx.lineTo(coordinate.x - dottedSize / 2, coordinate.y + dottedSize / 2);
ctx.closePath();
ctx.fill();
```

#### 折线图

```javascript
/*1.构造函数*/
var LineChart = function(ctx) {
  /*获取绘图工具*/
  this.ctx = ctx || document.querySelector('canvas').getContext('2d');
  /*画布的大小*/
  this.canvasWidth = this.ctx.canvas.width;
  this.canvasHeight = this.ctx.canvas.height;
  /*网格的大小*/
  this.gridSize = 10;
  /*坐标系的间距*/
  this.space = 20;
  /*坐标原点*/
  this.x0 = this.space;
  this.y0 = this.canvasHeight - this.space;
  /*箭头的大小*/
  this.arrowSize = 10;
  /*绘制点*/
  this.dottedSize = 6;
  /*点的坐标 和数据有关系  数据可视化*/
};
/*2.行为方法*/
LineChart.prototype.init = function(data) {
  this.drawGrid();
  this.drawAxis();
  this.drawDotted(data);
};
/*绘制网格*/
LineChart.prototype.drawGrid = function() {
  /*x方向的线*/
  var xLineTotal = Math.floor(this.canvasHeight / this.gridSize);
  this.ctx.strokeStyle = '#eee';
  for (var i = 0; i <= xLineTotal; i++) {
    this.ctx.beginPath();
    this.ctx.moveTo(0, i * this.gridSize - 0.5);
    this.ctx.lineTo(this.canvasWidth, i * this.gridSize - 0.5);
    this.ctx.stroke();
  }
  /*y方向的线*/
  var yLineTotal = Math.floor(this.canvasWidth / this.gridSize);
  for (var i = 0; i <= yLineTotal; i++) {
    this.ctx.beginPath();
    this.ctx.moveTo(i * this.gridSize - 0.5, 0);
    this.ctx.lineTo(i * this.gridSize - 0.5, this.canvasHeight);
    this.ctx.stroke();
  }
};
/*绘制坐标系*/
LineChart.prototype.drawAxis = function() {
  /*X轴*/
  this.ctx.beginPath();
  this.ctx.strokeStyle = '#000';
  this.ctx.moveTo(this.x0, this.y0);
  this.ctx.lineTo(this.canvasWidth - this.space, this.y0);
  this.ctx.lineTo(
    this.canvasWidth - this.space - this.arrowSize,
    this.y0 + this.arrowSize / 2,
  );
  this.ctx.lineTo(
    this.canvasWidth - this.space - this.arrowSize,
    this.y0 - this.arrowSize / 2,
  );
  this.ctx.lineTo(this.canvasWidth - this.space, this.y0);
  this.ctx.stroke();
  this.ctx.fill();
  /*Y轴*/
  this.ctx.beginPath();
  this.ctx.strokeStyle = '#000';
  this.ctx.moveTo(this.x0, this.y0);
  this.ctx.lineTo(this.space, this.space);
  this.ctx.lineTo(this.space + this.arrowSize / 2, this.space + this.arrowSize);
  this.ctx.lineTo(this.space - this.arrowSize / 2, this.space + this.arrowSize);
  this.ctx.lineTo(this.space, this.space);
  this.ctx.stroke();
  this.ctx.fill();
};
/*绘制所有点*/
LineChart.prototype.drawDotted = function(data) {
  /*1.数据的坐标 需要转换 canvas坐标*/
  /*2.再进行点的绘制*/
  /*3.把线连起来*/
  var that = this;
  /*记录当前坐标*/
  var prevCanvasX = 0;
  var prevCanvasY = 0;
  data.forEach(function(item, i) {
    /* x = 原点的坐标 + 数据的坐标 */
    /* y = 原点的坐标 - 数据的坐标 */
    var canvasX = that.x0 + item.x;
    var canvasY = that.y0 - item.y;
    /*绘制点*/
    that.ctx.beginPath();
    that.ctx.moveTo(
      canvasX - that.dottedSize / 2,
      canvasY - that.dottedSize / 2,
    );
    that.ctx.lineTo(
      canvasX + that.dottedSize / 2,
      canvasY - that.dottedSize / 2,
    );
    that.ctx.lineTo(
      canvasX + that.dottedSize / 2,
      canvasY + that.dottedSize / 2,
    );
    that.ctx.lineTo(
      canvasX - that.dottedSize / 2,
      canvasY + that.dottedSize / 2,
    );
    that.ctx.closePath();
    that.ctx.fill();
    /*点的连线*/
    /*当时第一个点的时候 起点是 x0 y0*/
    /*当时不是第一个点的时候 起点是 上一个点*/
    if (i == 0) {
      that.ctx.beginPath();
      that.ctx.moveTo(that.x0, that.y0);
      that.ctx.lineTo(canvasX, canvasY);
      that.ctx.stroke();
    } else {
      /*上一个点*/
      that.ctx.beginPath();
      that.ctx.moveTo(prevCanvasX, prevCanvasY);
      that.ctx.lineTo(canvasX, canvasY);
      that.ctx.stroke();
    }
    /*记录当前的坐标，下一次要用*/
    prevCanvasX = canvasX;
    prevCanvasY = canvasY;
  });
};
/*3.初始化*/
var data = [
  {
    x: 100,
    y: 120,
  },
  {
    x: 200,
    y: 160,
  },
  {
    x: 300,
    y: 240,
  },
  {
    x: 400,
    y: 120,
  },
  {
    x: 500,
    y: 80,
  },
];
var lineChart = new LineChart();
lineChart.init(data);
```

#### 蚂蚁线

```js
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
let offset = 0;
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.setLineDash([4, 4, 12, 4]);
  ctx.lineDashOffset = offset;
  ctx.strokeRect(20, 20, 150, 150);
}

function march() {
  offset++;
  if (offset > 24) {
    offset = 0;
  }
  draw();
  setTimeout(march, 20);
}

march();
```

#### 阴影矩形

```js
ctx.shadowOffsetX = 10;
ctx.shadowOffsetY = 10;
ctx.shadowBlur = 10;
ctx.shadowColor = 'rgba(23,23,23,0.5)';
ctx.fillRect(20, 20, 150, 150);
```

## 4. 图形绘制进阶

### 矩形

- rect(x,y,w,h) 没有独立路径
- strokeRect(x,y,w,h) 有独立路径，不影响别的绘制
- fillRect(x,y,w,h) 有独立路径，不影响别的绘制
- clearRect(x,y,w,h) 擦除矩形区域

### 圆弧绘制

- 弧度概念 π/180===弧度

- 获取 canvas 的宽度和高度

  var w = ctx.canvas.width;

  var h = ctx.canvas.height;

  canvas 工具 中心坐标即为（ w/2, y/2 ）

- 如果要内部填充，需要先将圆心移动到 中心点

  ctx.moveTo(w / 2, h / 2); ctx.fill();

- arc()

  - x 圆心横坐标
  - y 圆心纵坐标
  - r 半径
  - startAngle 开始弧度 Math.PI (π) ==180 度
  - endAngle 结束弧度
  - anticlockwise 是否逆时针方向绘制（默认 false 表示顺时针；true 表示逆时针）

- arcTo(x1, y1, x2, y2, radius);

### 绘制文本

- ctx.font = '18px 微软雅黑' 设置字体
- ctx.strokeText(text,x,y,maxWidth)
- ctx.fillText(text,x,y,maxWidth)
  - text 要绘制的文本
  - x,y 文本绘制的坐标（文本左下角）
  - maxWidth 设置文本最大宽度，可选参数
- ctx.textAlign 文本水平对齐方式，相对绘制坐标来说的
  - left
  - center
  - right
  - start 默认
  - end
- ctx.direction 属性 css(rtl ltr) start 和 end 于此相关 [右对齐 左对齐]
  - 如果是 ltr,start 和 left 表现一致
  - 如果是 rtl,start 和 right 表现一致
- ctx.textBaseline 设置基线（垂直对齐方式 ） [ 文本对齐基线 ]
  - top 文本的基线处于文本的正上方，并且有一段距离
  - middle 文本的基线处于文本的正中间
  - bottom 文本的基线处于文本的证下方，并且有一段距离
  - hanging 文本的基线处于文本的正上方，并且和文本粘合
  - alphabetic 默认值，基线处于文本的下方，并且穿过文字
  - ideographic 和 bottom 相似，但是不一样
- measureText() 获取文本宽度 obj.width

### 二次贝塞尔曲线

- quadraticCurveTo(cp1x, cp1y, x, y)

```js
cp1x cp1y 中间控制点
x y 为结束点
```

### 三次贝塞尔曲线

- bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)

```js
cp1x cp1y 控制点1
cp2x cp2y 控制点2
x y 开始和结束点
```

### Path2D

- 记录命令

- 可以使用 svg path

- ### addpath

  - 可以将 path 结合起来（添加一条路径到当前路径）
  - Path2D.addPath(path[, transform])

```js
var path1 = new Path2D();
path1.rect(10, 10, 100, 100);

var path2 = new Path2D(path1);
path2.moveTo(220, 60);
path2.arc(170, 60, 50, 0, 2 * Math.PI);

ctx.stroke(path2);

#
var p = new Path2D("M10 10 h 80 v 80 h -80 Z");
ctx.fill(p);
```

### 渐变

- createLinearGradient(x1, y1, x2, y2)
  - 渐变的起点 (x1,y1) ，终点 (x2,y2)
- createRadialGradient(x1, y1, r1, x2, y2, r2)
  - 一个以 (x1,y1) 为原点，半径为 r1 的圆
  - 一个以 (x2,y2) 为原点，半径为 r2 的圆
- gradient.addColorStop(position, color);
  - position 0.0-1.0 表示渐变中颜色所在的相对位置
  - color 有效的 CSS 颜色值
- createPattern(image, type);
  - 一个 Image 对象的引用，或者另一个 canvas 对象
  - `repeat`，`repeat-x`，`repeat-y` 和 `no-repeat`。

```javascript
第一种方法
.linearGradient{
            width: 400px;
            height: 100px;
            background-image: linear-gradient(to right,pink,blue);
        }

ctx.fillRect(100,100,400,100);


第二种方法
var linearGradient = ctx.createLinearGradient(100, 100, 500, 400);
      linearGradient.addColorStop(0, "pink");
      linearGradient.addColorStop(1, "blue");
      ctx.fillStyle = linearGradient;
      ctx.fillRect(100, 100, 400, 100);


# 圆形渐变
  // 创建渐变
    var ball = ctx.createRadialGradient(45, 45, 10, 52, 50, 30);
    ball.addColorStop(0, "#A7D30C");
    ball.addColorStop(0.9, "#019F62");
    ball.addColorStop(1, "rgba(1,159,98,0)");

    // 画图形
    ctx.fillStyle = ball;
    ctx.fillRect(0, 0, 150, 150);

# 图片渐变
// 创建新 image 对象，用作图案
let img = new Image();
img.src = "someimage.png";

// 确认 image 对象加载完毕
img.onload = function () {
  // 创建图案
  let ptrn = ctx.createPattern(img, "repeat");
  ctx.fillStyle = ptrn;
  ctx.fillRect(0, 0, 150, 150);
};

```

### 绘制图像

- new Image()
- <img/>
- < /video />
- canvas
- ImageBitmap 高性能的位图

```js
# new Image()
let img = new Image();
img.onload = function () {
  // drawImage to canvas
};
img.src = "XXX.png";

# <img/>
<img id="img" src="XXX.png" />
<script>
  let img = document.getElementById("img");
  img.onload = function () {
    // drawImage to canvas
  };
</script>

# <video />
  let video = document.getElementById("video");
// 媒体的第一帧加载完成时，渲染第一帧
video.onloadeddata = function () {};
// 播放暂停时，渲染当前帧
video.onpause = function () {};

# 将第二个 canvas 作为第一个 canvas 的缩略图
let sourceCanvas = document.getElementById("source");
let thumbCanvas = document.getElementById("thumb");
thumbCtx.drawImage(source, 0, 0, 100, 50);
```

### 状态的保存和恢复

- `save()`：保存画布的所有状态
- `restore()`：恢复保存的画布状态

```js
画布的状态被保存在一个栈中，一个绘画状态包括

描边/填充样式：strokeStyle, fillStyle, globalAlpha
线的样式：lineWidth, lineCap, lineJoin, miterLimit, lineDashOffset
阴影：shadowOffsetX, shadowOffsetY, shadowBlur, shadowColor,
字体样式：font, textAlign, textBaseline, direction
平滑质量：imageSmoothingEnabled
合成属性：globalCompositeOperation


当前变形
当前裁剪路径
```

## 5.动画

### toDataURL

```js
// type: image/png
// encoderOptions: 0.92 图片质量 0-1
var dataUrl = canvas.toDataURL(type, encoderOptions);
// data:image/png;base64 ,xxxxxx
```

### drawImage()

- 三个参数 drawImage(img,x,y)
  - img 图片对象、canvas 对象、video 对象
  - x,y 图片绘制的左上角
- 五个参数 drawImage(img,x,y,w,h)
  - img 图片对象、canvas 对象、video 对象
  - x,y 图片绘制的左上角
  - w,h 图片绘制尺寸设置(图片缩放，不是截取)
- 九个参数 drawImage(img,x,y,w,h,x1,y1,w1,h1)
  - img 图片对象、canvas 对象、video 对象
  - x,y,w,h 图片中的一个矩形区域
  - x1,y1,w1,h1 画布中的一个矩形区域

### 序列帧动画

- 绘制精灵图
- 动起来
- 控制边界
- 键盘控制

### 坐标变换

- 变形

- 平移 移动画布的原点
  - translate(x,y) 参数表示移动目标点的坐标
- 缩放
  - scale(x,y) 参数表示宽高的缩放比例
- 旋转
  - rotate(angle) 参数表示旋转角度

```js
// 被拉伸的矩形
ctx.save();
ctx.scale(10, 3);
ctx.fillRect(1, 10, 10, 10);
ctx.restore();

// 以 y 轴为对称轴做镜像反转
ctx.scale(-1, 1);
ctx.font = '48px serif';
ctx.fillText('荷包蛋卷', -193, 120);
```

### 变形矩阵

- resetTransform();
  - 重置矩阵
  - 重置当前变形为单位矩阵
  - 等同于 `ctx.setTransform(1, 0, 0, 1, 0, 0);`
- setTransform(a, b, c, d, e, f);
  - **重置并修改矩阵**
  - 将当前的变形矩阵重置为单位矩阵
  - 然后用相同的参数调用 transform 方法

```js
transform(a, b, c, d, e, f);
a：水平方向的缩放
b：竖直方向的倾斜偏移
c：水平方向的倾斜偏移
d：竖直方向的缩放
e：水平方向的移动
f：竖直方向的移动
```

### 组合

- globalCompositeOperation
- 12 种

### 裁切

- clip()
- 会将当前正在构建的路径转换为当前的裁剪路径
- 所有在路径以外的部分都会被隐藏

```js
<body>
  <canvas width='1000' height='800' id="canvas"></canvas>
  <script>
    function draw() {
      var ctx = document.getElementById("canvas").getContext("2d");

      // 黑色背景
      ctx.fillRect(0, 0, 600, 600);
      ctx.translate(300, 300);

      // 圆形裁剪区域
      ctx.beginPath();
      ctx.arc(0, 0, 250, 0, Math.PI * 2, true);
      ctx.clip();

      // 渐变蓝色背景
      var lingrad = ctx.createLinearGradient(0, 0, 600, 600);
      lingrad.addColorStop(0, "#232256");
      lingrad.addColorStop(1, "#143778");

      ctx.fillStyle = lingrad;
      ctx.fillRect(-300, -300, 600, 600);

      // 画星星✨
      for (var j = 1; j < 100; j++) {
        ctx.save();
        ctx.fillStyle = "#fff";
        ctx.translate(
          250 - Math.floor(Math.random() * 500),
          250 - Math.floor(Math.random() * 500)
        );
        drawStar(ctx, Math.floor(Math.random() * 4) + 2);
        ctx.restore();
      }
    }
    function drawStar(ctx, r) {
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(r, 0);
      for (var i = 0; i < 9; i++) {
        ctx.rotate(Math.PI / 5);
        if (i % 2 == 0) {
          ctx.lineTo((r / 0.525731) * 0.200811, 0);
        } else {
          ctx.lineTo(r, 0);
        }
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
    draw()
    drawStar()
  </script>
</body>
```

## 6. canvas 出现的问题

- 非零环绕规则： 针对填充问题

  > 判断是否需要填充 的区域画一条 到最外部的线
  >
  > 碰到顺时针 +1 碰到逆时针 -1
  >
  > 最终结果 非零填充 零不填充

获取随机颜色

```javascript
var getRandomColor = function() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return 'rgb(' + r + ',' + g + ',' + b + ')';
};
```

## 7.高级 demo
