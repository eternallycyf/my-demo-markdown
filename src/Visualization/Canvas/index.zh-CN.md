---
nav:
  title: Visualization
  path: /visualization
group:
  title: canvas
---

## canvas

### 1. Canvas 初始化

> canvas 的样式通过 canvas 标签处 设置

> 例如: <canvas id="myCanvas" width="200" height="100"></canvas>

| 初始的样式      |     |     |
| :-------------- | --- | --- |
| 默认的宽度 1px  |     |     |
| 默认的颜色 黑色 |     |     |
|                 |     |     |

对齐的点 是 线的中心位置 所以 需要在原来坐标加 0.5 px

---

### 2. **Canvas** 基础模板

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

### 3. canvas 基本方法

```javascript
<script>
  var myCanvas = document.querySelector('canvas'); var ctx =
  myCanvas.getContext('2d'); ctx.moveTo(100, 100); /* moveTO::: 初始位置 x y
  坐标*/ ctx.lineTo(100, 50); /* lineTO::: 最终位置 x y 坐标*/ ctx.stroke();
  /*描边 */
</script>
```

#### 3.1 基础外形样式

| 样式类型   | 样式名称       | 使用方法                       | 其他注释                        |
| ---------- | -------------- | ------------------------------ | ------------------------------- |
| 颜色       | storkeStyle    | ctx.strokeStyle = "blue";      | ctx.strokeStyle = "rgb(0,0,0)"; |
| 宽度       | lineWidth      | ctx.lineWidth = 10;            |                                 |
| 填充颜色   | fillStyle      | ctx.fillStyle = "red";         |                                 |
| 线末端类型 | lineCap        | ctx.lineCap = "round";         | butt [默认] \| round \| square  |
| 相交线拐点 | lineJoin       | ctx.lineJoin = "round";        | miter[默认] \| round \| bevel   |
| 虚线       | setLineDash    | ctx.setLineDash ( [ 5 ] ) ;    | 数组：依次实 虚 实 虚 ……        |
| 获取虚线   | getLineDash    | ctx.setLineDash ( [ 5,10 ] ) ; | 获取不重复的那一段数组          |
| 虚线偏移量 | lineDashOffset | ctx.lineDashOffset = 20 ;      | 负值向右偏移                    |
| 阴影颜色   | shadowColor    | shadowColor = 'd53';           |                                 |
| 阴影等级   | shadowBlur     | ctx.shadowBlur = 20            |                                 |
|            |                |                                |                                 |
|            |                |                                |                                 |
|            |                |                                |                                 |
|            |                |                                |                                 |
|            |                |                                |                                 |
|            |                |                                |                                 |
|            |                |                                |                                 |
|            |                |                                |                                 |
|            |                |                                |                                 |
|            |                |                                |                                 |
|            |                |                                |                                 |
|            |                |                                |                                 |
|            |                |                                |                                 |
|            |                |                                |                                 |
|            |                |                                |                                 |
|            |                |                                |                                 |

#### 3.2 复杂功能样式

| 函数作用       | 函数名称  | 使用方法               | 其他注释               |
| -------------- | --------- | ---------------------- | ---------------------- |
| 初始点         | moveTo    | moveTo(x 坐标,y 坐标); |                        |
| 移动目标点     | lineTo    | lineTo(x 坐标,y 坐标); |                        |
| 描边           | Stroke    | ctx.stroke();          |                        |
| **开启新路径** | beginPath | ctx.beginPath();       | 类似开启新作用域       |
| 关闭路径       | closePath | ctx.closePath();       | 自动闭合（最后一条线） |
| 填充           | fill      | ctx.fill();            | 参考非零环绕规则       |
|                |           |                        |                        |
|                |           |                        |                        |

#### 3. 3 应用

###### 3.3.1 渐变矩形

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

###### 3.3.2 渐变矩形

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

###### 3.3.3 坐标系

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

###### 3.3.4 点

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

###### 3.3.5 折线图

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

###### 3.3.6 渐变矩形

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
```

### 4. 图形绘制进阶

#### 4.1 矩形

```markdown
- rect(x,y,w,h) 没有独立路径
- strokeRect(x,y,w,h) 有独立路径，不影响别的绘制
- fillRect(x,y,w,h) 有独立路径，不影响别的绘制
- clearRect(x,y,w,h) 擦除矩形区域
```

#### 4.2 圆弧绘制

```markdown
弧度概念 π/180===弧度

获取 canvas 的宽度和高度

var w = ctx.canvas.width;

var h = ctx.canvas.height;

canvas 工具 中心坐标即为（ w/2, y/2 ）

- 如果要内部填充，需要先将圆心移动到 中心点

  ctx.moveTo(w / 2, h / 2); ctx.fill();

- arc()
  - x 圆心横坐标
  - y 圆心纵坐标
  - r 半径
  - startAngle 开始角度 Math.PI (π) ==180 度
  - endAngle 结束角度
  - anticlockwise 是否逆时针方向绘制（默认 false 表示顺时针；true 表示逆时针）

<img width="400px" height="300px" src="images/square.jpg"></img>
```

#### 4.3 绘制文本

```markdown
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
```

4.4

4.5

4.6

### 5.动画

###### 绘制图片

#### 5.1drawImage()

```markdown
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
```

#### 5.2 序列帧动画

```markdown
- 绘制精灵图
- 动起来
- 控制边界
- 键盘控制
```

#### 5.3 坐标变换

```markdown
- 平移 移动画布的原点
  - translate(x,y) 参数表示移动目标点的坐标
- 缩放
  - scale(x,y) 参数表示宽高的缩放比例
- 旋转
  - rotate(angle) 参数表示旋转角度
```

### 6. canvas 出现的问题

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
