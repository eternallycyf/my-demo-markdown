(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{"19jV":function(o,r,a){"use strict";a.r(r);var i=a("cDcd"),e=a.n(i),t=a("dEAq"),s=a.n(t),n=a("H1Ra"),u=a("dMo/");const E=e.a.memo(({demos:l})=>e.a.createElement(e.a.Fragment,null,e.a.createElement("div",{className:"markdown"},e.a.createElement("h2",{id:"canvas"},e.a.createElement(t.AnchorLink,{to:"#canvas","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"canvas"),e.a.createElement("h3",{id:"1-canvas-\u521D\u59CB\u5316"},e.a.createElement(t.AnchorLink,{to:"#1-canvas-\u521D\u59CB\u5316","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"1. Canvas \u521D\u59CB\u5316"),e.a.createElement("blockquote",null,e.a.createElement("p",null,"canvas \u7684\u6837\u5F0F\u901A\u8FC7 canvas \u6807\u7B7E\u5904 \u8BBE\u7F6E")),e.a.createElement("blockquote",null,e.a.createElement("p",null,"\u4F8B\u5982: ",e.a.createElement("canvas",{id:"myCanvas",width:200,height:100}))),e.a.createElement(u.a,null,e.a.createElement("thead",null,e.a.createElement("tr",null,e.a.createElement("th",{align:"left"},"\u521D\u59CB\u7684\u6837\u5F0F"),e.a.createElement("th",null),e.a.createElement("th",null))),e.a.createElement("tbody",null,e.a.createElement("tr",null,e.a.createElement("td",{align:"left"},"\u9ED8\u8BA4\u7684\u5BBD\u5EA6 1px"),e.a.createElement("td",null),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",{align:"left"},"\u9ED8\u8BA4\u7684\u989C\u8272 \u9ED1\u8272"),e.a.createElement("td",null),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",{align:"left"}),e.a.createElement("td",null),e.a.createElement("td",null)))),e.a.createElement("p",null,"\u5BF9\u9F50\u7684\u70B9 \u662F \u7EBF\u7684\u4E2D\u5FC3\u4F4D\u7F6E \u6240\u4EE5 \u9700\u8981\u5728\u539F\u6765\u5750\u6807\u52A0 0.5 px"),e.a.createElement("hr",null),e.a.createElement("h3",{id:"2-canvas-\u57FA\u7840\u6A21\u677F"},e.a.createElement(t.AnchorLink,{to:"#2-canvas-\u57FA\u7840\u6A21\u677F","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"2. ",e.a.createElement("strong",null,"Canvas")," \u57FA\u7840\u6A21\u677F"),e.a.createElement(n.a,{code:`<!DOCTYPE html>
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
</html>`,lang:"javascript"}),e.a.createElement("hr",null),e.a.createElement("h3",{id:"3-canvas-\u57FA\u672C\u65B9\u6CD5"},e.a.createElement(t.AnchorLink,{to:"#3-canvas-\u57FA\u672C\u65B9\u6CD5","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"3. canvas \u57FA\u672C\u65B9\u6CD5"),e.a.createElement(n.a,{code:`<script>
  var myCanvas = document.querySelector('canvas'); var ctx =
  myCanvas.getContext('2d'); ctx.moveTo(100, 100); /* moveTO::: \u521D\u59CB\u4F4D\u7F6E x y
  \u5750\u6807*/ ctx.lineTo(100, 50); /* lineTO::: \u6700\u7EC8\u4F4D\u7F6E x y \u5750\u6807*/ ctx.stroke();
  /*\u63CF\u8FB9 */
</script>`,lang:"javascript"}),e.a.createElement("h4",{id:"31-\u57FA\u7840\u5916\u5F62\u6837\u5F0F"},e.a.createElement(t.AnchorLink,{to:"#31-\u57FA\u7840\u5916\u5F62\u6837\u5F0F","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"3.1 \u57FA\u7840\u5916\u5F62\u6837\u5F0F"),e.a.createElement(u.a,null,e.a.createElement("thead",null,e.a.createElement("tr",null,e.a.createElement("th",null,"\u6837\u5F0F\u7C7B\u578B"),e.a.createElement("th",null,"\u6837\u5F0F\u540D\u79F0"),e.a.createElement("th",null,"\u4F7F\u7528\u65B9\u6CD5"),e.a.createElement("th",null,"\u5176\u4ED6\u6CE8\u91CA"))),e.a.createElement("tbody",null,e.a.createElement("tr",null,e.a.createElement("td",null,"\u989C\u8272"),e.a.createElement("td",null,"storkeStyle"),e.a.createElement("td",null,'ctx.strokeStyle = "blue";'),e.a.createElement("td",null,'ctx.strokeStyle = "rgb(0,0,0)";')),e.a.createElement("tr",null,e.a.createElement("td",null,"\u5BBD\u5EA6"),e.a.createElement("td",null,"lineWidth"),e.a.createElement("td",null,"ctx.lineWidth = 10;"),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"\u586B\u5145\u989C\u8272"),e.a.createElement("td",null,"fillStyle"),e.a.createElement("td",null,'ctx.fillStyle = "red";'),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"\u7EBF\u672B\u7AEF\u7C7B\u578B"),e.a.createElement("td",null,"lineCap"),e.a.createElement("td",null,'ctx.lineCap = "round";'),e.a.createElement("td",null,"butt [\u9ED8\u8BA4] | round | square")),e.a.createElement("tr",null,e.a.createElement("td",null,"\u76F8\u4EA4\u7EBF\u62D0\u70B9"),e.a.createElement("td",null,"lineJoin"),e.a.createElement("td",null,'ctx.lineJoin = "round";'),e.a.createElement("td",null,"miter[\u9ED8\u8BA4] | round | bevel")),e.a.createElement("tr",null,e.a.createElement("td",null,"\u865A\u7EBF"),e.a.createElement("td",null,"setLineDash"),e.a.createElement("td",null,"ctx.setLineDash ( [ 5 ] ) ;"),e.a.createElement("td",null,"\u6570\u7EC4\uFF1A\u4F9D\u6B21\u5B9E \u865A \u5B9E \u865A \u2026\u2026")),e.a.createElement("tr",null,e.a.createElement("td",null,"\u83B7\u53D6\u865A\u7EBF"),e.a.createElement("td",null,"getLineDash"),e.a.createElement("td",null,"ctx.setLineDash ( [ 5,10 ] ) ;"),e.a.createElement("td",null,"\u83B7\u53D6\u4E0D\u91CD\u590D\u7684\u90A3\u4E00\u6BB5\u6570\u7EC4")),e.a.createElement("tr",null,e.a.createElement("td",null,"\u865A\u7EBF\u504F\u79FB\u91CF"),e.a.createElement("td",null,"lineDashOffset"),e.a.createElement("td",null,"ctx.lineDashOffset = 20 ;"),e.a.createElement("td",null,"\u8D1F\u503C\u5411\u53F3\u504F\u79FB")),e.a.createElement("tr",null,e.a.createElement("td",null,"\u9634\u5F71\u989C\u8272"),e.a.createElement("td",null,"shadowColor"),e.a.createElement("td",null,"shadowColor = 'd53';"),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"\u9634\u5F71\u7B49\u7EA7"),e.a.createElement("td",null,"shadowBlur"),e.a.createElement("td",null,"ctx.shadowBlur = 20"),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null),e.a.createElement("td",null),e.a.createElement("td",null),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null),e.a.createElement("td",null),e.a.createElement("td",null),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null),e.a.createElement("td",null),e.a.createElement("td",null),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null),e.a.createElement("td",null),e.a.createElement("td",null),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null),e.a.createElement("td",null),e.a.createElement("td",null),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null),e.a.createElement("td",null),e.a.createElement("td",null),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null),e.a.createElement("td",null),e.a.createElement("td",null),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null),e.a.createElement("td",null),e.a.createElement("td",null),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null),e.a.createElement("td",null),e.a.createElement("td",null),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null),e.a.createElement("td",null),e.a.createElement("td",null),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null),e.a.createElement("td",null),e.a.createElement("td",null),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null),e.a.createElement("td",null),e.a.createElement("td",null),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null),e.a.createElement("td",null),e.a.createElement("td",null),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null),e.a.createElement("td",null),e.a.createElement("td",null),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null),e.a.createElement("td",null),e.a.createElement("td",null),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null),e.a.createElement("td",null),e.a.createElement("td",null),e.a.createElement("td",null)))),e.a.createElement("h4",{id:"32-\u590D\u6742\u529F\u80FD\u6837\u5F0F"},e.a.createElement(t.AnchorLink,{to:"#32-\u590D\u6742\u529F\u80FD\u6837\u5F0F","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"3.2 \u590D\u6742\u529F\u80FD\u6837\u5F0F"),e.a.createElement(u.a,null,e.a.createElement("thead",null,e.a.createElement("tr",null,e.a.createElement("th",null,"\u51FD\u6570\u4F5C\u7528"),e.a.createElement("th",null,"\u51FD\u6570\u540D\u79F0"),e.a.createElement("th",null,"\u4F7F\u7528\u65B9\u6CD5"),e.a.createElement("th",null,"\u5176\u4ED6\u6CE8\u91CA"))),e.a.createElement("tbody",null,e.a.createElement("tr",null,e.a.createElement("td",null,"\u521D\u59CB\u70B9"),e.a.createElement("td",null,"moveTo"),e.a.createElement("td",null,"moveTo(x \u5750\u6807,y \u5750\u6807);"),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"\u79FB\u52A8\u76EE\u6807\u70B9"),e.a.createElement("td",null,"lineTo"),e.a.createElement("td",null,"lineTo(x \u5750\u6807,y \u5750\u6807);"),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"\u63CF\u8FB9"),e.a.createElement("td",null,"Stroke"),e.a.createElement("td",null,"ctx.stroke();"),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,e.a.createElement("strong",null,"\u5F00\u542F\u65B0\u8DEF\u5F84")),e.a.createElement("td",null,"beginPath"),e.a.createElement("td",null,"ctx.beginPath();"),e.a.createElement("td",null,"\u7C7B\u4F3C\u5F00\u542F\u65B0\u4F5C\u7528\u57DF")),e.a.createElement("tr",null,e.a.createElement("td",null,"\u5173\u95ED\u8DEF\u5F84"),e.a.createElement("td",null,"closePath"),e.a.createElement("td",null,"ctx.closePath();"),e.a.createElement("td",null,"\u81EA\u52A8\u95ED\u5408\uFF08\u6700\u540E\u4E00\u6761\u7EBF\uFF09")),e.a.createElement("tr",null,e.a.createElement("td",null,"\u586B\u5145"),e.a.createElement("td",null,"fill"),e.a.createElement("td",null,"ctx.fill();"),e.a.createElement("td",null,"\u53C2\u8003\u975E\u96F6\u73AF\u7ED5\u89C4\u5219")),e.a.createElement("tr",null,e.a.createElement("td",null),e.a.createElement("td",null),e.a.createElement("td",null),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null),e.a.createElement("td",null),e.a.createElement("td",null),e.a.createElement("td",null)))),e.a.createElement("h4",{id:"3-3-\u5E94\u7528"},e.a.createElement(t.AnchorLink,{to:"#3-3-\u5E94\u7528","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"3. 3 \u5E94\u7528"),e.a.createElement("h6",{id:"331-\u6E10\u53D8\u77E9\u5F62"},e.a.createElement(t.AnchorLink,{to:"#331-\u6E10\u53D8\u77E9\u5F62","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"3.3.1 \u6E10\u53D8\u77E9\u5F62"),e.a.createElement(n.a,{code:`ctx.lineWidth = 30;
for (var i = 0; i < 255; i++) {
  ctx.beginPath();
  ctx.moveTo(100 + i - 1, 100);
  ctx.lineTo(100 + i, 100);
  ctx.strokeStyle = 'rgb(' + i + ',0,0)';
  ctx.stroke();
}`,lang:"javascript"}),e.a.createElement("h6",{id:"332-\u6E10\u53D8\u77E9\u5F62"},e.a.createElement(t.AnchorLink,{to:"#332-\u6E10\u53D8\u77E9\u5F62","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"3.3.2 \u6E10\u53D8\u77E9\u5F62"),e.a.createElement(n.a,{code:`/*2.\u7F51\u683C\u7684\u5927\u5C0F*/
var gridSize = 10;
var canvasHeight = ctx.canvas.height;
var canvasWidth = ctx.canvas.width;
/*3.\u753B\u591A\u5C11\u6761X\u8F74\u65B9\u5411\u7684\u7EBF \u6A2A\u7EBF\u7684\u6761\u6570  \u753B\u5E03\u9AD8\u5EA6*/
var xLineTotal = Math.floor(canvasHeight / gridSize);
for (var i = 0; i <= xLineTotal; i++) {
  ctx.beginPath();
  ctx.moveTo(0, i * gridSize - 0.5);
  ctx.lineTo(canvasWidth, i * gridSize - 0.5);
  ctx.strokeStyle = '#eee';
  ctx.stroke();
}
/*4.\u753B\u591A\u5C11\u6761Y\u8F74\u65B9\u5411\u7684\u7EBF*/
var yLineTotal = Math.floor(canvasWidth / gridSize);
for (var i = 0; i <= yLineTotal; i++) {
  ctx.beginPath();
  ctx.moveTo(i * gridSize - 0.5, 0);
  ctx.lineTo(i * gridSize - 0.5, canvasHeight);
  ctx.strokeStyle = '#eee';
  ctx.stroke();
}`,lang:"javascript"}),e.a.createElement("h6",{id:"333-\u5750\u6807\u7CFB"},e.a.createElement(t.AnchorLink,{to:"#333-\u5750\u6807\u7CFB","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"3.3.3 \u5750\u6807\u7CFB"),e.a.createElement(n.a,{code:`var space = 20;
var arrowSize = 10;
/*\u8BA1\u7B97\u539F\u70B9*/
var canvasWidth = ctx.canvas.width;
var canvasHeight = ctx.canvas.height;
var x0 = space;
var y0 = canvasHeight - space;
/*\u7ED8\u5236x\u8F74*/
ctx.beginPath();
ctx.moveTo(x0, y0);
ctx.lineTo(canvasWidth - space, y0);
/*\u7BAD\u5934*/
ctx.lineTo(canvasWidth - space - arrowSize, y0 + arrowSize / 2);
ctx.lineTo(canvasWidth - space - arrowSize, y0 - arrowSize / 2);
ctx.lineTo(canvasWidth - space, y0);
ctx.fill();
ctx.stroke();
/*\u7ED8\u5236y\u8F74*/
ctx.beginPath();
ctx.moveTo(x0, y0);
ctx.lineTo(space, space);
/*\u7BAD\u5934*/
ctx.lineTo(space + arrowSize / 2, space + arrowSize);
ctx.lineTo(space - arrowSize / 2, space + arrowSize);
ctx.lineTo(space, space);
ctx.fill();
ctx.stroke();`,lang:"javascript"}),e.a.createElement("h6",{id:"334-\u70B9"},e.a.createElement(t.AnchorLink,{to:"#334-\u70B9","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"3.3.4 \u70B9"),e.a.createElement(n.a,{code:`var coordinate = {
  x: 100,
  y: 100,
};
/*\u70B9\u5C3A\u5BF8*/
var dottedSize = 10;
ctx.moveTo(coordinate.x - dottedSize / 2, coordinate.y - dottedSize / 2);
ctx.lineTo(coordinate.x + dottedSize / 2, coordinate.y - dottedSize / 2);
ctx.lineTo(coordinate.x + dottedSize / 2, coordinate.y + dottedSize / 2);
ctx.lineTo(coordinate.x - dottedSize / 2, coordinate.y + dottedSize / 2);
ctx.closePath();
ctx.fill();`,lang:"javascript"}),e.a.createElement("h6",{id:"335-\u6298\u7EBF\u56FE"},e.a.createElement(t.AnchorLink,{to:"#335-\u6298\u7EBF\u56FE","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"3.3.5 \u6298\u7EBF\u56FE"),e.a.createElement(n.a,{code:`/*1.\u6784\u9020\u51FD\u6570*/
var LineChart = function(ctx) {
  /*\u83B7\u53D6\u7ED8\u56FE\u5DE5\u5177*/
  this.ctx = ctx || document.querySelector('canvas').getContext('2d');
  /*\u753B\u5E03\u7684\u5927\u5C0F*/
  this.canvasWidth = this.ctx.canvas.width;
  this.canvasHeight = this.ctx.canvas.height;
  /*\u7F51\u683C\u7684\u5927\u5C0F*/
  this.gridSize = 10;
  /*\u5750\u6807\u7CFB\u7684\u95F4\u8DDD*/
  this.space = 20;
  /*\u5750\u6807\u539F\u70B9*/
  this.x0 = this.space;
  this.y0 = this.canvasHeight - this.space;
  /*\u7BAD\u5934\u7684\u5927\u5C0F*/
  this.arrowSize = 10;
  /*\u7ED8\u5236\u70B9*/
  this.dottedSize = 6;
  /*\u70B9\u7684\u5750\u6807 \u548C\u6570\u636E\u6709\u5173\u7CFB  \u6570\u636E\u53EF\u89C6\u5316*/
};
/*2.\u884C\u4E3A\u65B9\u6CD5*/
LineChart.prototype.init = function(data) {
  this.drawGrid();
  this.drawAxis();
  this.drawDotted(data);
};
/*\u7ED8\u5236\u7F51\u683C*/
LineChart.prototype.drawGrid = function() {
  /*x\u65B9\u5411\u7684\u7EBF*/
  var xLineTotal = Math.floor(this.canvasHeight / this.gridSize);
  this.ctx.strokeStyle = '#eee';
  for (var i = 0; i <= xLineTotal; i++) {
    this.ctx.beginPath();
    this.ctx.moveTo(0, i * this.gridSize - 0.5);
    this.ctx.lineTo(this.canvasWidth, i * this.gridSize - 0.5);
    this.ctx.stroke();
  }
  /*y\u65B9\u5411\u7684\u7EBF*/
  var yLineTotal = Math.floor(this.canvasWidth / this.gridSize);
  for (var i = 0; i <= yLineTotal; i++) {
    this.ctx.beginPath();
    this.ctx.moveTo(i * this.gridSize - 0.5, 0);
    this.ctx.lineTo(i * this.gridSize - 0.5, this.canvasHeight);
    this.ctx.stroke();
  }
};
/*\u7ED8\u5236\u5750\u6807\u7CFB*/
LineChart.prototype.drawAxis = function() {
  /*X\u8F74*/
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
  /*Y\u8F74*/
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
/*\u7ED8\u5236\u6240\u6709\u70B9*/
LineChart.prototype.drawDotted = function(data) {
  /*1.\u6570\u636E\u7684\u5750\u6807 \u9700\u8981\u8F6C\u6362 canvas\u5750\u6807*/
  /*2.\u518D\u8FDB\u884C\u70B9\u7684\u7ED8\u5236*/
  /*3.\u628A\u7EBF\u8FDE\u8D77\u6765*/
  var that = this;
  /*\u8BB0\u5F55\u5F53\u524D\u5750\u6807*/
  var prevCanvasX = 0;
  var prevCanvasY = 0;
  data.forEach(function(item, i) {
    /* x = \u539F\u70B9\u7684\u5750\u6807 + \u6570\u636E\u7684\u5750\u6807 */
    /* y = \u539F\u70B9\u7684\u5750\u6807 - \u6570\u636E\u7684\u5750\u6807 */
    var canvasX = that.x0 + item.x;
    var canvasY = that.y0 - item.y;
    /*\u7ED8\u5236\u70B9*/
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
    /*\u70B9\u7684\u8FDE\u7EBF*/
    /*\u5F53\u65F6\u7B2C\u4E00\u4E2A\u70B9\u7684\u65F6\u5019 \u8D77\u70B9\u662F x0 y0*/
    /*\u5F53\u65F6\u4E0D\u662F\u7B2C\u4E00\u4E2A\u70B9\u7684\u65F6\u5019 \u8D77\u70B9\u662F \u4E0A\u4E00\u4E2A\u70B9*/
    if (i == 0) {
      that.ctx.beginPath();
      that.ctx.moveTo(that.x0, that.y0);
      that.ctx.lineTo(canvasX, canvasY);
      that.ctx.stroke();
    } else {
      /*\u4E0A\u4E00\u4E2A\u70B9*/
      that.ctx.beginPath();
      that.ctx.moveTo(prevCanvasX, prevCanvasY);
      that.ctx.lineTo(canvasX, canvasY);
      that.ctx.stroke();
    }
    /*\u8BB0\u5F55\u5F53\u524D\u7684\u5750\u6807\uFF0C\u4E0B\u4E00\u6B21\u8981\u7528*/
    prevCanvasX = canvasX;
    prevCanvasY = canvasY;
  });
};
/*3.\u521D\u59CB\u5316*/
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
lineChart.init(data);`,lang:"javascript"}),e.a.createElement("h6",{id:"336-\u6E10\u53D8\u77E9\u5F62"},e.a.createElement(t.AnchorLink,{to:"#336-\u6E10\u53D8\u77E9\u5F62","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"3.3.6 \u6E10\u53D8\u77E9\u5F62"),e.a.createElement(n.a,{code:`\u7B2C\u4E00\u79CD\u65B9\u6CD5
.linearGradient{
            width: 400px;
            height: 100px;
            background-image: linear-gradient(to right,pink,blue);
        }

ctx.fillRect(100,100,400,100);


\u7B2C\u4E8C\u79CD\u65B9\u6CD5
var linearGradient = ctx.createLinearGradient(100, 100, 500, 400);
      linearGradient.addColorStop(0, "pink");
      linearGradient.addColorStop(1, "blue");
      ctx.fillStyle = linearGradient;
      ctx.fillRect(100, 100, 400, 100);`,lang:"javascript"}),e.a.createElement("h3",{id:"4-\u56FE\u5F62\u7ED8\u5236\u8FDB\u9636"},e.a.createElement(t.AnchorLink,{to:"#4-\u56FE\u5F62\u7ED8\u5236\u8FDB\u9636","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"4. \u56FE\u5F62\u7ED8\u5236\u8FDB\u9636"),e.a.createElement("h4",{id:"41-\u77E9\u5F62"},e.a.createElement(t.AnchorLink,{to:"#41-\u77E9\u5F62","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"4.1 \u77E9\u5F62"),e.a.createElement(n.a,{code:`- rect(x,y,w,h) \u6CA1\u6709\u72EC\u7ACB\u8DEF\u5F84
- strokeRect(x,y,w,h) \u6709\u72EC\u7ACB\u8DEF\u5F84\uFF0C\u4E0D\u5F71\u54CD\u522B\u7684\u7ED8\u5236
- fillRect(x,y,w,h) \u6709\u72EC\u7ACB\u8DEF\u5F84\uFF0C\u4E0D\u5F71\u54CD\u522B\u7684\u7ED8\u5236
- clearRect(x,y,w,h) \u64E6\u9664\u77E9\u5F62\u533A\u57DF`,lang:"markdown"}),e.a.createElement("h4",{id:"42-\u5706\u5F27\u7ED8\u5236"},e.a.createElement(t.AnchorLink,{to:"#42-\u5706\u5F27\u7ED8\u5236","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"4.2 \u5706\u5F27\u7ED8\u5236"),e.a.createElement(n.a,{code:`\u5F27\u5EA6\u6982\u5FF5 \u03C0/180===\u5F27\u5EA6

\u83B7\u53D6 canvas \u7684\u5BBD\u5EA6\u548C\u9AD8\u5EA6

var w = ctx.canvas.width;

var h = ctx.canvas.height;

canvas \u5DE5\u5177 \u4E2D\u5FC3\u5750\u6807\u5373\u4E3A\uFF08 w/2, y/2 \uFF09

- \u5982\u679C\u8981\u5185\u90E8\u586B\u5145\uFF0C\u9700\u8981\u5148\u5C06\u5706\u5FC3\u79FB\u52A8\u5230 \u4E2D\u5FC3\u70B9

  ctx.moveTo(w / 2, h / 2); ctx.fill();

- arc()
  - x \u5706\u5FC3\u6A2A\u5750\u6807
  - y \u5706\u5FC3\u7EB5\u5750\u6807
  - r \u534A\u5F84
  - startAngle \u5F00\u59CB\u89D2\u5EA6 Math.PI (\u03C0) ==180 \u5EA6
  - endAngle \u7ED3\u675F\u89D2\u5EA6
  - anticlockwise \u662F\u5426\u9006\u65F6\u9488\u65B9\u5411\u7ED8\u5236\uFF08\u9ED8\u8BA4 false \u8868\u793A\u987A\u65F6\u9488\uFF1Btrue \u8868\u793A\u9006\u65F6\u9488\uFF09

<img width="400px" height="300px" src="images/square.jpg"></img>`,lang:"markdown"}),e.a.createElement("h4",{id:"43-\u7ED8\u5236\u6587\u672C"},e.a.createElement(t.AnchorLink,{to:"#43-\u7ED8\u5236\u6587\u672C","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"4.3 \u7ED8\u5236\u6587\u672C"),e.a.createElement(n.a,{code:`- ctx.font = '18px \u5FAE\u8F6F\u96C5\u9ED1' \u8BBE\u7F6E\u5B57\u4F53
- ctx.strokeText(text,x,y,maxWidth)
- ctx.fillText(text,x,y,maxWidth)
  - text \u8981\u7ED8\u5236\u7684\u6587\u672C
  - x,y \u6587\u672C\u7ED8\u5236\u7684\u5750\u6807\uFF08\u6587\u672C\u5DE6\u4E0B\u89D2\uFF09
  - maxWidth \u8BBE\u7F6E\u6587\u672C\u6700\u5927\u5BBD\u5EA6\uFF0C\u53EF\u9009\u53C2\u6570
- ctx.textAlign \u6587\u672C\u6C34\u5E73\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u76F8\u5BF9\u7ED8\u5236\u5750\u6807\u6765\u8BF4\u7684
  - left
  - center
  - right
  - start \u9ED8\u8BA4
  - end
- ctx.direction \u5C5E\u6027 css(rtl ltr) start \u548C end \u4E8E\u6B64\u76F8\u5173 [\u53F3\u5BF9\u9F50 \u5DE6\u5BF9\u9F50]
  - \u5982\u679C\u662F ltr,start \u548C left \u8868\u73B0\u4E00\u81F4
  - \u5982\u679C\u662F rtl,start \u548C right \u8868\u73B0\u4E00\u81F4
- ctx.textBaseline \u8BBE\u7F6E\u57FA\u7EBF\uFF08\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F \uFF09 [ \u6587\u672C\u5BF9\u9F50\u57FA\u7EBF ]
  - top \u6587\u672C\u7684\u57FA\u7EBF\u5904\u4E8E\u6587\u672C\u7684\u6B63\u4E0A\u65B9\uFF0C\u5E76\u4E14\u6709\u4E00\u6BB5\u8DDD\u79BB
  - middle \u6587\u672C\u7684\u57FA\u7EBF\u5904\u4E8E\u6587\u672C\u7684\u6B63\u4E2D\u95F4
  - bottom \u6587\u672C\u7684\u57FA\u7EBF\u5904\u4E8E\u6587\u672C\u7684\u8BC1\u4E0B\u65B9\uFF0C\u5E76\u4E14\u6709\u4E00\u6BB5\u8DDD\u79BB
  - hanging \u6587\u672C\u7684\u57FA\u7EBF\u5904\u4E8E\u6587\u672C\u7684\u6B63\u4E0A\u65B9\uFF0C\u5E76\u4E14\u548C\u6587\u672C\u7C98\u5408
  - alphabetic \u9ED8\u8BA4\u503C\uFF0C\u57FA\u7EBF\u5904\u4E8E\u6587\u672C\u7684\u4E0B\u65B9\uFF0C\u5E76\u4E14\u7A7F\u8FC7\u6587\u5B57
  - ideographic \u548C bottom \u76F8\u4F3C\uFF0C\u4F46\u662F\u4E0D\u4E00\u6837
- measureText() \u83B7\u53D6\u6587\u672C\u5BBD\u5EA6 obj.width`,lang:"markdown"}),e.a.createElement("p",null,"4.4"),e.a.createElement("p",null,"4.5"),e.a.createElement("p",null,"4.6"),e.a.createElement("h3",{id:"5\u52A8\u753B"},e.a.createElement(t.AnchorLink,{to:"#5\u52A8\u753B","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"5.\u52A8\u753B"),e.a.createElement("h6",{id:"\u7ED8\u5236\u56FE\u7247"},e.a.createElement(t.AnchorLink,{to:"#\u7ED8\u5236\u56FE\u7247","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u7ED8\u5236\u56FE\u7247"),e.a.createElement("h4",{id:"51drawimage"},e.a.createElement(t.AnchorLink,{to:"#51drawimage","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"5.1drawImage()"),e.a.createElement(n.a,{code:`- \u4E09\u4E2A\u53C2\u6570 drawImage(img,x,y)
  - img \u56FE\u7247\u5BF9\u8C61\u3001canvas \u5BF9\u8C61\u3001video \u5BF9\u8C61
  - x,y \u56FE\u7247\u7ED8\u5236\u7684\u5DE6\u4E0A\u89D2
- \u4E94\u4E2A\u53C2\u6570 drawImage(img,x,y,w,h)
  - img \u56FE\u7247\u5BF9\u8C61\u3001canvas \u5BF9\u8C61\u3001video \u5BF9\u8C61
  - x,y \u56FE\u7247\u7ED8\u5236\u7684\u5DE6\u4E0A\u89D2
  - w,h \u56FE\u7247\u7ED8\u5236\u5C3A\u5BF8\u8BBE\u7F6E(\u56FE\u7247\u7F29\u653E\uFF0C\u4E0D\u662F\u622A\u53D6)
- \u4E5D\u4E2A\u53C2\u6570 drawImage(img,x,y,w,h,x1,y1,w1,h1)
  - img \u56FE\u7247\u5BF9\u8C61\u3001canvas \u5BF9\u8C61\u3001video \u5BF9\u8C61
  - x,y,w,h \u56FE\u7247\u4E2D\u7684\u4E00\u4E2A\u77E9\u5F62\u533A\u57DF
  - x1,y1,w1,h1 \u753B\u5E03\u4E2D\u7684\u4E00\u4E2A\u77E9\u5F62\u533A\u57DF`,lang:"markdown"}),e.a.createElement("h4",{id:"52-\u5E8F\u5217\u5E27\u52A8\u753B"},e.a.createElement(t.AnchorLink,{to:"#52-\u5E8F\u5217\u5E27\u52A8\u753B","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"5.2 \u5E8F\u5217\u5E27\u52A8\u753B"),e.a.createElement(n.a,{code:`- \u7ED8\u5236\u7CBE\u7075\u56FE
- \u52A8\u8D77\u6765
- \u63A7\u5236\u8FB9\u754C
- \u952E\u76D8\u63A7\u5236`,lang:"markdown"}),e.a.createElement("h4",{id:"53-\u5750\u6807\u53D8\u6362"},e.a.createElement(t.AnchorLink,{to:"#53-\u5750\u6807\u53D8\u6362","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"5.3 \u5750\u6807\u53D8\u6362"),e.a.createElement(n.a,{code:`- \u5E73\u79FB \u79FB\u52A8\u753B\u5E03\u7684\u539F\u70B9
  - translate(x,y) \u53C2\u6570\u8868\u793A\u79FB\u52A8\u76EE\u6807\u70B9\u7684\u5750\u6807
- \u7F29\u653E
  - scale(x,y) \u53C2\u6570\u8868\u793A\u5BBD\u9AD8\u7684\u7F29\u653E\u6BD4\u4F8B
- \u65CB\u8F6C
  - rotate(angle) \u53C2\u6570\u8868\u793A\u65CB\u8F6C\u89D2\u5EA6`,lang:"markdown"}),e.a.createElement("h3",{id:"6-canvas-\u51FA\u73B0\u7684\u95EE\u9898"},e.a.createElement(t.AnchorLink,{to:"#6-canvas-\u51FA\u73B0\u7684\u95EE\u9898","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"6. canvas \u51FA\u73B0\u7684\u95EE\u9898"),e.a.createElement("ul",null,e.a.createElement("li",null,e.a.createElement("p",null,"\u975E\u96F6\u73AF\u7ED5\u89C4\u5219\uFF1A \u9488\u5BF9\u586B\u5145\u95EE\u9898"),e.a.createElement("blockquote",null,e.a.createElement("p",null,"\u5224\u65AD\u662F\u5426\u9700\u8981\u586B\u5145 \u7684\u533A\u57DF\u753B\u4E00\u6761 \u5230\u6700\u5916\u90E8\u7684\u7EBF"),e.a.createElement("p",null,"\u78B0\u5230\u987A\u65F6\u9488 +1 \u78B0\u5230\u9006\u65F6\u9488 -1"),e.a.createElement("p",null,"\u6700\u7EC8\u7ED3\u679C \u975E\u96F6\u586B\u5145 \u96F6\u4E0D\u586B\u5145")))),e.a.createElement("p",null,"\u83B7\u53D6\u968F\u673A\u989C\u8272"),e.a.createElement(n.a,{code:`var getRandomColor = function() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return 'rgb(' + r + ',' + g + ',' + b + ')';
};`,lang:"javascript"}))));r.default=l=>{const d=e.a.useContext(t.context),m=d.demos;return e.a.useEffect(()=>{var c;l!=null&&(c=l.location)!==null&&c!==void 0&&c.hash&&t.AnchorLink.scrollToAnchor(decodeURIComponent(l.location.hash.slice(1)))},[]),e.a.createElement(E,{demos:m})}}}]);
