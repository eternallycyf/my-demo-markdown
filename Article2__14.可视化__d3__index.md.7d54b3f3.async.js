(self.webpackChunkmy_demo_markdown=self.webpackChunkmy_demo_markdown||[]).push([[6736],{98427:function(s,c,a){"use strict";a.r(c);var i=a(12924),e=a.n(i),n=a(16924),t=a(53401);const u=e().memo(({demos:r})=>e().createElement(e().Fragment,null,e().createElement("div",{className:"markdown"},e().createElement("h1",{id:"d3"},e().createElement(n.AnchorLink,{to:"#d3","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"d3"),e().createElement(t.Z,{code:`import as d3 from "d3";
#
Bundle \u2014- \u6346\u56FE
Chord \u2014- \u5F26\u56FE
Cluster \u2014- \u96C6\u7FA4\u56FE
Force \u2014- \u529B\u5B66\u56FE\u3001\u529B\u5BFC\u5411\u56FE
Histogram \u2014- \u76F4\u65B9\u56FE\uFF08\u6570\u636E\u5206\u5E03\u56FE\uFF09
Pack \u2014- \u6253\u5305\u56FE
Partition \u2014- \u5206\u533A\u56FE
Pie \u2014- \u997C\u72B6\u56FE
Stack \u2014- \u5806\u6808\u56FE
Tree \u2014- \u6811\u72B6\u56FE
Treemap \u2014- \u77E9\u9635\u6811\u56FE`,lang:"js"}),e().createElement("h2",{id:"dom"},e().createElement(n.AnchorLink,{to:"#dom","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"dom"),e().createElement("ul",null,e().createElement("li",null,'let p = d3.select("body").selectAll("p");')),e().createElement("h3",{id:"select"},e().createElement(n.AnchorLink,{to:"#select","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"select"),e().createElement(t.Z,{code:`var body = d3.select("body"); //\u9009\u62E9\u6587\u6863\u4E2D\u7684body\u5143\u7D20
var p1 = body.select("p");      //\u9009\u62E9body\u4E2D\u7684\u7B2C\u4E00\u4E2Ap\u5143\u7D20
var svg = body.select("svg");   //\u9009\u62E9body\u4E2D\u7684svg\u5143\u7D20
#
className =>  .xxx
id        =>  #xxx
# \u6CE8\u610Ftext()\u4E2D\u7684\u56DE\u8C03\u51FD\u6570\u4E0D\u8981\u7528\u7BAD\u5934\u51FD\u6570
select(this)`,lang:"js"}),e().createElement("h3",{id:"selectall"},e().createElement(n.AnchorLink,{to:"#selectall","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"selectAll"),e().createElement(t.Z,{code:`var p = body.selectAll('p'); //\u9009\u62E9body\u4E2D\u7684\u6240\u6709p\u5143\u7D20
var rects = svg.selectAll('rect'); //\u9009\u62E9svg\u4E2D\u6240\u6709\u7684svg\u5143\u7D20`,lang:"js"}),e().createElement("h3",{id:"append"},e().createElement(n.AnchorLink,{to:"#append","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"append"),e().createElement("ul",null,e().createElement("li",null,"\u5728\u9009\u62E9\u96C6\u5C3E\u90E8\u63D2\u5165\u5143\u7D20")),e().createElement(t.Z,{code:'.append("p")',lang:"js"}),e().createElement("h3",{id:"insert"},e().createElement(n.AnchorLink,{to:"#insert","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"insert"),e().createElement("ul",null,e().createElement("li",null,"\u5728\u9009\u62E9\u96C6\u524D\u9762\u63D2\u5165\u5143\u7D20")),e().createElement(t.Z,{code:'.insert("p","#myP3")',lang:"js"}),e().createElement("h3",{id:"remove"},e().createElement(n.AnchorLink,{to:"#remove","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"remove"),e().createElement(t.Z,{code:"remove();",lang:"js"}),e().createElement("h3",{id:"update"},e().createElement(n.AnchorLink,{to:"#update","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"update"),e().createElement("ul",null,e().createElement("li",null,"update() \u5F53\u5BF9\u5E94\u7684\u5143\u7D20\u6B63\u597D\u6EE1\u8DB3\u65F6 \u7ED1\u5B9A\u6570\u636E\u6570\u91CF = \u5BF9\u5E94\u5143\u7D20")),e().createElement("h3",{id:"enter"},e().createElement(n.AnchorLink,{to:"#enter","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"enter"),e().createElement("ul",null,e().createElement("li",null,"enter() \u5F53\u5BF9\u5E94\u7684\u5143\u7D20\u4E0D\u8DB3\u65F6 \uFF08 \u7ED1\u5B9A\u6570\u636E\u6570\u91CF > \u5BF9\u5E94\u5143\u7D20 \uFF09")),e().createElement(t.Z,{code:`# \u5F53\u4E0D\u8DB3\u7684\u65F6\u5019\u81EA\u52A8\u6DFB\u52A0\u5269\u4F59\u7684
enter().append('li').text()`,lang:"js"}),e().createElement("h3",{id:"exit"},e().createElement(n.AnchorLink,{to:"#exit","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"exit"),e().createElement("ul",null,e().createElement("li",null,"\u5F53\u5BF9\u5E94\u7684\u5143\u7D20\u8FC7\u591A\u65F6 \uFF08 \u7ED1\u5B9A\u6570\u636E\u6570\u91CF < \u5BF9\u5E94\u5143\u7D20 \uFF09")),e().createElement(t.Z,{code:`# \u5F53\u8FC7\u591A\u7684\u65F6\u5019\u5220\u9664\u591A\u4F59\u7684
exit().remove()`,lang:"js"}),e().createElement("h2",{id:"\u6570\u636E"},e().createElement(n.AnchorLink,{to:"#\u6570\u636E","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u6570\u636E"),e().createElement("h3",{id:"datum"},e().createElement(n.AnchorLink,{to:"#datum","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"datum"),e().createElement("ul",null,e().createElement("li",null,"\u7ED1\u5B9A\u4E00\u4E2A\u6570\u636E\u5230\u9009\u62E9\u96C6\u4E0A")),e().createElement(t.Z,{code:`p.datum(str);
# data \u5C31\u662F datum\u7ED1\u5B9A\u7684\u6570\u636E index\u662F\u7D22\u5F15
p.text((data, index) => data)`,lang:"js"}),e().createElement("h3",{id:"data"},e().createElement(n.AnchorLink,{to:"#data","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"data"),e().createElement("ul",null,e().createElement("li",null,"\u7ED1\u5B9A\u4E00\u4E2A\u6570\u7EC4\u5230\u9009\u62E9\u96C6\u4E0A\uFF0C\u6570\u7EC4\u7684\u5404\u9879\u503C\u5206\u522B\u4E0E\u9009\u62E9\u96C6\u7684\u5404\u5143\u7D20\u7ED1\u5B9A")),e().createElement(t.Z,{code:`p.data([1,2,3])
# data\u76F4\u63A5\u5C31\u662F\u5BF9\u5E94\u7684\u6570\u636E \u4E0D\u7528data[index]
 .text((data,index)=>data)`,lang:"js"}),e().createElement("h2",{id:"css"},e().createElement(n.AnchorLink,{to:"#css","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"css"),e().createElement("h3",{id:"style"},e().createElement(n.AnchorLink,{to:"#style","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"style"),e().createElement(t.Z,{code:"p.style('color', 'red').style('font-size', '72px');",lang:"js"}),e().createElement("h3",{id:"attrs"},e().createElement(n.AnchorLink,{to:"#attrs","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"attrs"),e().createElement(t.Z,{code:'.attr("fill","blue")',lang:"js"}),e().createElement("h3",{id:"\u52A8\u753B"},e().createElement(n.AnchorLink,{to:"#\u52A8\u753B","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u52A8\u753B"),e().createElement(t.Z,{code:`.transition()//\u6DFB\u52A0\u8FC7\u6E21
.duration(2000)//\u6301\u7EED\u65F6\u95F4
.delay(function(d,i){//\u5EF6\u8FDF
    return i*400;
})
//.ease(d3.easeElasticInOut)//\u8FD9\u91CC\u8BFB\u8005\u53EF\u4EE5\u81EA\u5DF1\u5C06\u6CE8\u91CA\u53BB\u6389\uFF0C\u770B\u770B\u6548\u679C\uFF08chrome\u6D4F\u89C8\u5668\u4F1A\u62A5\u9519\uFF0C\u4F46\u662F\u4E0D\u5F71\u54CD\u6548\u679C\uFF09`,lang:"js"}),e().createElement("h2",{id:"\u6BD4\u4F8B\u5C3A"},e().createElement(n.AnchorLink,{to:"#\u6BD4\u4F8B\u5C3A","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u6BD4\u4F8B\u5C3A"),e().createElement("h3",{id:"\u7EBF\u6027\u6BD4\u4F8B\u5C3A"},e().createElement(n.AnchorLink,{to:"#\u7EBF\u6027\u6BD4\u4F8B\u5C3A","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u7EBF\u6027\u6BD4\u4F8B\u5C3A"),e().createElement(t.Z,{code:`var dataset = [1.2, 2.3, 0.9, 1.5, 3.3];
var min = d3.min(dataset); //\u5F97\u5230\u6700\u5C0F\u503C
var max = d3.max(dataset); //\u5F97\u5230\u6700\u5927\u503C
var scaleLinear = d3
  .scaleLinear()
  .domain([min, max])
  .range([0, 300]);
document.write('scaleLinear(1)\u8F93\u51FA\uFF1A' + scaleLinear(1));
d3.select('body').append('br'); //\u6362\u884C
document.write('scaleLinear(2)\u8F93\u51FA\uFF1A' + scaleLinear(2));
d3.select('body').append('br');
document.write('scaleLinear(3.3)\u8F93\u51FA\uFF1A' + scaleLinear(3.3));`,lang:"js"}),e().createElement("h3",{id:"\u5E8F\u6570\u6BD4\u4F8B\u5C3A"},e().createElement(n.AnchorLink,{to:"#\u5E8F\u6570\u6BD4\u4F8B\u5C3A","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u5E8F\u6570\u6BD4\u4F8B\u5C3A"),e().createElement("ul",null,e().createElement("li",null,"\u79BB\u6563\u6570\u7EC4")),e().createElement(t.Z,{code:`var index = [0, 1, 2, 3, 4] as unknown as string;
    var color = ["red", "blue", "yellow", "black", "green"];
    var scaleOrdinal = d3.scaleOrdinal()
      .domain(index)
      .range(color);
    document.write("scaleOrdinal(1)\u8F93\u51FA\uFF1A" + scaleOrdinal('1')); // blue
    d3.select("body").append("br");
    document.write("scaleOrdinal(2)\u8F93\u51FA\uFF1A" + scaleOrdinal('2')); // yellow
    d3.select("body").append("br");
    document.write("scaleOrdinal(4)\u8F93\u51FA\uFF1A" + scaleOrdinal('4')); // green`,lang:"js"}),e().createElement("h2",{id:"\u5750\u6807\u8F74"},e().createElement(n.AnchorLink,{to:"#\u5750\u6807\u8F74","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u5750\u6807\u8F74"),e().createElement(t.Z,{code:`//\u4E3A\u5750\u6807\u8F74\u5B9A\u4E49\u4E00\u4E2A\u7EBF\u6027\u6BD4\u4F8B\u5C3A
var xScale = d3
  .scaleLinear()
  .domain([0, d3.max(dataset)])
  .range([0, 250]);
//\u5B9A\u4E49\u4E00\u4E2A\u5750\u6807\u8F74
var xAxis = d3
  .axisBottom(xScale) //\u5B9A\u4E49\u4E00\u4E2Aaxis\uFF0C\u7531bottom\u53EF\u77E5\uFF0C\u662F\u671D\u4E0B\u7684
  .ticks(7); //\u8BBE\u7F6E\u523B\u5EA6\u6570\u76EE
g.append('g')
  .attr(
    'transform',
    'translate(' + 20 + ',' + dataset.length * rectHeight + ')',
  )
  .call(xAxis);`,lang:"js"}),e().createElement(t.Z,{code:`var xScale = d3
  .scaleBand()
  .domain(d3.range(dataset.length))
  .rangeRound([0, width - marge.left - marge.right]);
var xAxis = d3.axisBottom(xScale);

var yScale = d3
  .scaleLinear()
  .domain([0, d3.max(dataset)])
  .range([height - marge.top - marge.bottom, 0]);
var yAxis = d3.axisLeft(yScale);`,lang:"js"}),e().createElement("h2",{id:"\u4E8B\u4EF6"},e().createElement(n.AnchorLink,{to:"#\u4E8B\u4EF6","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u4E8B\u4EF6"),e().createElement(t.Z,{code:`.on("click",function(){
    console.log(d3.event);
})
d3.select(this)
#
click\uFF1A\u9F20\u6807\u5355\u51FB\u67D0\u5143\u7D20\u65F6\u89E6\u53D1\uFF0C\u76F8\u5F53\u4E8Emousedown\u548Cmouseup\u7684\u7EC4\u5408
mouseover\uFF1A\u9F20\u6807\u653E\u5728\u67D0\u5143\u7D20\u4E0A\u89E6\u53D1
mouseout\uFF1A\u9F20\u6807\u79FB\u51FA\u67D0\u5143\u7D20\u65F6\u89E6\u53D1
mousemove\uFF1A\u9F20\u6807\u79FB\u52A8\u65F6\u89E6\u53D1
mousedown\uFF1A\u9F20\u6807\u6309\u94AE\u88AB\u6309\u4E0B\u65F6\u89E6\u53D1
mouseup\uFF1A\u9F20\u6807\u6309\u94AE\u88AB\u677E\u5F00\u65F6\u89E6\u53D1
dblclick\uFF1A\u9F20\u6807\u53CC\u51FB\u65F6\u89E6\u53D1
#
.on("mouseover",function(){
    var rect = d3.select(this)
    .transition()
    .duration(1500)//\u5F53\u9F20\u6807\u653E\u5728\u77E9\u5F62\u4E0A\u65F6\uFF0C\u77E9\u5F62\u53D8\u6210\u9EC4\u8272
    .attr("fill","yellow");
})
.on("mouseout",function(){
    var rect = d3.select(this)
    .transition()
    .delay(1500)
    .duration(1500)//\u5F53\u9F20\u6807\u79FB\u51FA\u65F6\uFF0C\u77E9\u5F62\u53D8\u6210\u84DD\u8272
    .attr("fill","blue");
})`,lang:"js"}),e().createElement("h2",{id:"demo"},e().createElement(n.AnchorLink,{to:"#demo","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"demo"),e().createElement("h3",{id:"\u67F1\u5F62\u56FE"},e().createElement(n.AnchorLink,{to:"#\u67F1\u5F62\u56FE","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u67F1\u5F62\u56FE"),e().createElement(t.Z,{code:`import React, { useEffect, useState } from 'react';
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
        <Button onClick={setNewChartData}>\u8BBE\u7F6E\u65B0\u7684\u6570\u636E</Button>
        <svg width="1200" height="180" id="mainsvg" className="svgs" />
      </Card>
    </>
  );
};
export default D3;`,lang:"js"}),e().createElement("h3",{id:"\u5B8C\u6574\u7684"},e().createElement(n.AnchorLink,{to:"#\u5B8C\u6574\u7684","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u5B8C\u6574\u7684"),e().createElement(t.Z,{code:`import React, { useEffect, useState } from "react";
import { Card, Button } from "antd";
import * as d3 from "d3";

const D3 = () => {
  const [dataset, setDataset] = useState<number[]>([250, 210, 170, 130, 90])

  const handleInitChart = () => {
    let body = d3.select("body");
    let marge = { top: 30, bottom: 30, left: 30, right: 30 }
    let svg = body.select("#mainsvg3")
    var width = svg.attr("width") as unknown as number;//\u5F97\u5230\u753B\u5E03\u7684\u5BBD
    var height = svg.attr("height") as unknown as number;//\u5F97\u5230\u753B\u5E03\u7684\u957F

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

    var rectPadding = 10;//\u77E9\u5F62\u4E4B\u95F4\u7684\u95F4\u9699
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
          .duration(1500)//\u5F53\u9F20\u6807\u653E\u5728\u77E9\u5F62\u4E0A\u65F6\uFF0C\u77E9\u5F62\u53D8\u6210\u9EC4\u8272
          .attr("fill", "yellow");
      })
      .on("mouseout", function () {
        var rect = d3.select(this)
          .transition()
          .delay(1500)
          .duration(1500)//\u5F53\u9F20\u6807\u79FB\u51FA\u65F6\uFF0C\u77E9\u5F62\u53D8\u6210\u84DD\u8272
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
      .attr("y", function (d) {//\u8FD9\u91CC\u662F\u8981\u6539\u53D8\u7684\uFF0C\u5373\u521D\u59CB\u72B6\u6001
        var min = yScale.domain()[0];
        return yScale(min);//\u53EF\u4EE5\u5F97\u77E5\uFF0C\u8FD9\u91CC\u8FD4\u56DE\u7684\u662F\u6700\u5927\u503C
      })
      .attr("width", function () {
        return xScale.step() - rectPadding;
      })
      .attr("height", function (d) {//\u8FD9\u91CC\u8981\u6539\u53D8\uFF0C\u5373\u521D\u59CB\u72B6\u6001
        return 0;
      })
      .attr("fill", "blue")
      .transition()//\u6DFB\u52A0\u8FC7\u6E21
      .duration(2000)//\u6301\u7EED\u65F6\u95F4
      .delay(function (d, i) {//\u5EF6\u8FDF
        return i * 400;
      })
      //.ease(d3.easeElasticInOut)//\u8FD9\u91CC\u8BFB\u8005\u53EF\u4EE5\u81EA\u5DF1\u5C06\u6CE8\u91CA\u53BB\u6389\uFF0C\u770B\u770B\u6548\u679C\uFF08chrome\u6D4F\u89C8\u5668\u4F1A\u62A5\u9519\uFF0C\u4F46\u662F\u4E0D\u5F71\u54CD\u6548\u679C\uFF09
      .attr("y", function (d) {//\u56DE\u5230\u6700\u7EC8\u72B6\u6001
        return yScale(d);
      })
      .attr("height", function (d) {//\u56DE\u5230\u6700\u7EC8\u72B6\u6001
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
        <Button onClick={setNewChartData}>\u8BBE\u7F6E\u65B0\u7684\u6570\u636E</Button>
        <svg width="1200" height="180" id="mainsvg3" className="svgs" />
      </Card>
    </>
  );
};
export default D3;`,lang:"js"}),e().createElement("h3",{id:"\u997C\u72B6\u56FE"},e().createElement(n.AnchorLink,{to:"#\u997C\u72B6\u56FE","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u997C\u72B6\u56FE"),e().createElement(t.Z,{code:"",lang:"js"}))));c.default=r=>{const d=e().useContext(n.context),o=d.demos;return e().useEffect(()=>{var l;r!=null&&(l=r.location)!==null&&l!==void 0&&l.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(r.location.hash.slice(1)))},[]),e().createElement(u,{demos:o})}}}]);
