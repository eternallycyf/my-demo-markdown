---
order: 3
nav:
  title: Article2
  path: /article2
---

# d3

```js
import as d3 from "d3";
#
Bundle —- 捆图
Chord —- 弦图
Cluster —- 集群图
Force —- 力学图、力导向图
Histogram —- 直方图（数据分布图）
Pack —- 打包图
Partition —- 分区图
Pie —- 饼状图
Stack —- 堆栈图
Tree —- 树状图
Treemap —- 矩阵树图
```

## dom

- let p = d3.select("body").selectAll("p");

### select

```js
var body = d3.select("body"); //选择文档中的body元素
var p1 = body.select("p");      //选择body中的第一个p元素
var svg = body.select("svg");   //选择body中的svg元素
#
className =>  .xxx
id        =>  #xxx
# 注意text()中的回调函数不要用箭头函数
select(this)
```

### selectAll

```js
var p = body.selectAll('p'); //选择body中的所有p元素
var rects = svg.selectAll('rect'); //选择svg中所有的svg元素
```

### append

- 在选择集尾部插入元素

```js
.append("p")
```

### insert

- 在选择集前面插入元素

```js
.insert("p","#myP3")
```

### remove

```js
remove();
```

### update

- update() 当对应的元素正好满足时 绑定数据数量 = 对应元素

### enter

- enter() 当对应的元素不足时 （ 绑定数据数量 > 对应元素 ）

```js
# 当不足的时候自动添加剩余的
enter().append('li').text()
```

### exit

- 当对应的元素过多时 （ 绑定数据数量 < 对应元素 ）

```js
# 当过多的时候删除多余的
exit().remove()
```

## 数据

### datum

- 绑定一个数据到选择集上

```js
p.datum(str);
# data 就是 datum绑定的数据 index是索引
p.text((data, index) => data)
```

### data

- 绑定一个数组到选择集上，数组的各项值分别与选择集的各元素绑定

```js
p.data([1,2,3])
# data直接就是对应的数据 不用data[index]
 .text((data,index)=>data)
```

## css

### style

```js
p.style('color', 'red').style('font-size', '72px');
```

### attrs

```js
.attr("fill","blue")
```

### 动画

```js
.transition()//添加过渡
.duration(2000)//持续时间
.delay(function(d,i){//延迟
    return i*400;
})
//.ease(d3.easeElasticInOut)//这里读者可以自己将注释去掉，看看效果（chrome浏览器会报错，但是不影响效果）
```

## 比例尺

### 线性比例尺

```js
var dataset = [1.2, 2.3, 0.9, 1.5, 3.3];
var min = d3.min(dataset); //得到最小值
var max = d3.max(dataset); //得到最大值
var scaleLinear = d3
  .scaleLinear()
  .domain([min, max])
  .range([0, 300]);
document.write('scaleLinear(1)输出：' + scaleLinear(1));
d3.select('body').append('br'); //换行
document.write('scaleLinear(2)输出：' + scaleLinear(2));
d3.select('body').append('br');
document.write('scaleLinear(3.3)输出：' + scaleLinear(3.3));
```

### 序数比例尺

- 离散数组

```js
 var index = [0, 1, 2, 3, 4] as unknown as string;
    var color = ["red", "blue", "yellow", "black", "green"];
    var scaleOrdinal = d3.scaleOrdinal()
      .domain(index)
      .range(color);
    document.write("scaleOrdinal(1)输出：" + scaleOrdinal('1')); // blue
    d3.select("body").append("br");
    document.write("scaleOrdinal(2)输出：" + scaleOrdinal('2')); // yellow
    d3.select("body").append("br");
    document.write("scaleOrdinal(4)输出：" + scaleOrdinal('4')); // green
```

## 坐标轴

```js
//为坐标轴定义一个线性比例尺
var xScale = d3
  .scaleLinear()
  .domain([0, d3.max(dataset)])
  .range([0, 250]);
//定义一个坐标轴
var xAxis = d3
  .axisBottom(xScale) //定义一个axis，由bottom可知，是朝下的
  .ticks(7); //设置刻度数目
g.append('g')
  .attr(
    'transform',
    'translate(' + 20 + ',' + dataset.length * rectHeight + ')',
  )
  .call(xAxis);
```

```js
var xScale = d3
  .scaleBand()
  .domain(d3.range(dataset.length))
  .rangeRound([0, width - marge.left - marge.right]);
var xAxis = d3.axisBottom(xScale);

var yScale = d3
  .scaleLinear()
  .domain([0, d3.max(dataset)])
  .range([height - marge.top - marge.bottom, 0]);
var yAxis = d3.axisLeft(yScale);
```

## 事件

```js
.on("click",function(){
    console.log(d3.event);
})
d3.select(this)
#
click：鼠标单击某元素时触发，相当于mousedown和mouseup的组合
mouseover：鼠标放在某元素上触发
mouseout：鼠标移出某元素时触发
mousemove：鼠标移动时触发
mousedown：鼠标按钮被按下时触发
mouseup：鼠标按钮被松开时触发
dblclick：鼠标双击时触发
#
.on("mouseover",function(){
    var rect = d3.select(this)
    .transition()
    .duration(1500)//当鼠标放在矩形上时，矩形变成黄色
    .attr("fill","yellow");
})
.on("mouseout",function(){
    var rect = d3.select(this)
    .transition()
    .delay(1500)
    .duration(1500)//当鼠标移出时，矩形变成蓝色
    .attr("fill","blue");
})
```

## demo

### 柱形图

```js
import React, { useEffect, useState } from 'react';
import { Card, Button } from 'antd';
import * as d3 from 'd3';

const D3 = props => {
  const [dataset, setDataset] = useState([250, 210, 170, 130, 90]);

  const handleInitChart = () => {
    let marge = { top: 30, bottom: 30, left: 30, right: 30 };
    let body = d3.select('body');
    let svg = body.select('#mainsvg');
    svg.selectAll('g').remove();
    let g = svg
      .append('g')
      .attr('transform', 'translate(' + marge.top + ',' + marge.left + ')');

    let rectHeight = 30;
    g.selectAll('rect')
      .data(dataset)
      .enter()
      .append('rect')
      .attr('x', 20)
      .attr('y', function(d, i) {
        return i * rectHeight;
      })
      .attr('width', function(d) {
        return d;
      })
      .attr('height', rectHeight - 5)
      .attr('fill', 'blue');

    g.selectAll('text')
      .data(dataset)
      .enter()
      .append('text')
      .attr('x', function(d) {
        return 30 + d;
      })
      .attr('y', function(d, i) {
        return i * rectHeight + 15;
      })
      .text(function(d) {
        return d;
      });
  };

  useEffect(() => {
    handleInitChart();
  }, []);

  const setNewChartData = () => {
    let arr = Array.from({ length: 4 }, () => ~~(Math.random(0, 1000) * 100));
    setDataset(arr);
    handleInitChart();
  };

  return (
    <>
      <Card style={{ margin: 24 }}>
        <Button onClick={setNewChartData}>设置新的数据</Button>
        <svg width="1200" height="180" id="mainsvg" className="svgs" />
      </Card>
    </>
  );
};
export default D3;
```

### 完整的

```js
import React, { useEffect, useState } from "react";
import { Card, Button } from "antd";
import * as d3 from "d3";

const D3 = () => {
  const [dataset, setDataset] = useState<number[]>([250, 210, 170, 130, 90])

  const handleInitChart = () => {
    let body = d3.select("body");
    let marge = { top: 30, bottom: 30, left: 30, right: 30 }
    let svg = body.select("#mainsvg3")
    var width = svg.attr("width") as unknown as number;//得到画布的宽
    var height = svg.attr("height") as unknown as number;//得到画布的长

    var xScale = d3.scaleBand()
      .domain(d3.range(dataset.length) as unknown as string[])
      .rangeRound([0, width - marge.left - marge.right]);
    var xAxis = d3.axisBottom(xScale);

    var yScale = d3.scaleLinear()
      .domain([0, d3.max(dataset)] as number[])
      .range([height - marge.top - marge.bottom, 0]);
    var yAxis = d3.axisLeft(yScale);

    svg.selectAll('g').remove()
    let g = svg.append("g")
      .attr("transform", "translate(" + marge.top + "," + marge.left + ")");

    var gs = g.selectAll(".rect")
      .data(dataset)
      .enter()
      .append("g");

    var rectPadding = 10;//矩形之间的间隙
    gs.append("rect")
      .attr("x", function (d, i) {
        return xScale(i) + rectPadding / 2;
      })
      .attr("y", function (d) {
        return yScale(d);
      })
      .attr("width", function () {
        return xScale.step() - rectPadding;
      })
      .attr("height", function (d) {
        return height - marge.top - marge.bottom - yScale(d);
      })
      .attr("fill", "blue")
      .on("mouseover", function () {
        var rect = d3.select(this)
          .transition()
          .duration(1500)//当鼠标放在矩形上时，矩形变成黄色
          .attr("fill", "yellow");
      })
      .on("mouseout", function () {
        var rect = d3.select(this)
          .transition()
          .delay(1500)
          .duration(1500)//当鼠标移出时，矩形变成蓝色
          .attr("fill", "blue");
      })


    gs.append("text")
      .attr("x", function (d, i) {
        return xScale(i) + rectPadding / 2;
      })
      .attr("y", function (d) {
        return yScale(d);
      })
      .attr("dx", function () {
        (xScale.step() - rectPadding) / 2;
      })
      .attr("dy", 20)
      .text(function (d) {
        return d;
      })

    gs.append("rect")
      .attr("x", function (d, i) {
        return xScale(i) + rectPadding / 2;
      })
      .attr("y", function (d) {//这里是要改变的，即初始状态
        var min = yScale.domain()[0];
        return yScale(min);//可以得知，这里返回的是最大值
      })
      .attr("width", function () {
        return xScale.step() - rectPadding;
      })
      .attr("height", function (d) {//这里要改变，即初始状态
        return 0;
      })
      .attr("fill", "blue")
      .transition()//添加过渡
      .duration(2000)//持续时间
      .delay(function (d, i) {//延迟
        return i * 400;
      })
      //.ease(d3.easeElasticInOut)//这里读者可以自己将注释去掉，看看效果（chrome浏览器会报错，但是不影响效果）
      .attr("y", function (d) {//回到最终状态
        return yScale(d);
      })
      .attr("height", function (d) {//回到最终状态
        return height - marge.top - marge.bottom - yScale(d);
      })

    gs.append("text")
      .attr("x", function (d, i) {
        return xScale(i) + rectPadding / 2;
      })
      .attr("y", function (d) {
        var min = yScale.domain()[0];
        return yScale(min);
      })
      .attr("dx", function () {
        (xScale.step() - rectPadding) / 2;
      })
      .attr("dy", 20)
      .text(function (d) {
        return d;
      })
      .transition()
      .duration(2000)
      .delay(function (d, i) {
        return i * 400;
      })
      //.ease(d3.easeElasticInOut)
      .attr("y", function (d) {
        return yScale(d);
      })
  }

  useEffect(() => {
    handleInitChart()
  }, [])

  const setNewChartData = () => {
    let arr = Array.from({ length: 4 }, () => ~~(Math.random(0, 1000) * 100))
    setDataset(arr)
    handleInitChart()
  }

  return (
    <>
      <Card style={{ margin: 24 }}>
        <Button onClick={setNewChartData}>设置新的数据</Button>
        <svg width="1200" height="180" id="mainsvg3" className="svgs" />
      </Card>
    </>
  );
};
export default D3;

```

### 饼状图

```js
```
