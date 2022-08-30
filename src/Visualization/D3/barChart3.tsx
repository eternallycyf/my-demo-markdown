import React, { useEffect, useState } from 'react';
import { Card, Button } from 'antd';
import * as d3 from 'd3';

const D3 = () => {
  const [dataset, setDataset] = useState<number[]>([250, 210, 170, 130, 90]);

  const handleInitChart = () => {
    let body = d3.select('body');
    let marge = { top: 30, bottom: 30, left: 30, right: 30 };
    let svg = body.select('#mainsvg3');
    var width = (svg.attr('width') as unknown) as number; //得到画布的宽
    var height = (svg.attr('height') as unknown) as number; //得到画布的长

    var xScale = d3
      .scaleBand()
      .domain((d3.range(dataset.length) as unknown) as string[])
      .rangeRound([0, width - marge.left - marge.right]);
    var xAxis = d3.axisBottom(xScale);

    var yScale = d3
      .scaleLinear()
      .domain([0, d3.max(dataset)] as number[])
      .range([height - marge.top - marge.bottom, 0]);
    var yAxis = d3.axisLeft(yScale);

    svg.selectAll('g').remove();
    let g = svg
      .append('g')
      .attr('transform', 'translate(' + marge.top + ',' + marge.left + ')');

    var gs = g
      .selectAll('.rect')
      .data(dataset)
      .enter()
      .append('g');

    var rectPadding = 10; //矩形之间的间隙
    gs.append('rect')
      .attr('x', function(d, i) {
        return xScale(i) + rectPadding / 2;
      })
      .attr('y', function(d) {
        return yScale(d);
      })
      .attr('width', function() {
        return xScale.step() - rectPadding;
      })
      .attr('height', function(d) {
        return height - marge.top - marge.bottom - yScale(d);
      })
      .attr('fill', 'blue')
      .on('mouseover', function() {
        var rect = d3
          .select(this)
          .transition()
          .duration(1500) //当鼠标放在矩形上时，矩形变成黄色
          .attr('fill', 'yellow');
      })
      .on('mouseout', function() {
        var rect = d3
          .select(this)
          .transition()
          .delay(1500)
          .duration(1500) //当鼠标移出时，矩形变成蓝色
          .attr('fill', 'blue');
      });

    gs.append('text')
      .attr('x', function(d, i) {
        return xScale(i) + rectPadding / 2;
      })
      .attr('y', function(d) {
        return yScale(d);
      })
      .attr('dx', function() {
        (xScale.step() - rectPadding) / 2;
      })
      .attr('dy', 20)
      .text(function(d) {
        return d;
      });

    gs.append('rect')
      .attr('x', function(d, i) {
        return xScale(i) + rectPadding / 2;
      })
      .attr('y', function(d) {
        //这里是要改变的，即初始状态
        var min = yScale.domain()[0];
        return yScale(min); //可以得知，这里返回的是最大值
      })
      .attr('width', function() {
        return xScale.step() - rectPadding;
      })
      .attr('height', function(d) {
        //这里要改变，即初始状态
        return 0;
      })
      .attr('fill', 'blue')
      .transition() //添加过渡
      .duration(2000) //持续时间
      .delay(function(d, i) {
        //延迟
        return i * 400;
      })
      //.ease(d3.easeElasticInOut)//这里读者可以自己将注释去掉，看看效果（chrome浏览器会报错，但是不影响效果）
      .attr('y', function(d) {
        //回到最终状态
        return yScale(d);
      })
      .attr('height', function(d) {
        //回到最终状态
        return height - marge.top - marge.bottom - yScale(d);
      });

    gs.append('text')
      .attr('x', function(d, i) {
        return xScale(i) + rectPadding / 2;
      })
      .attr('y', function(d) {
        var min = yScale.domain()[0];
        return yScale(min);
      })
      .attr('dx', function() {
        (xScale.step() - rectPadding) / 2;
      })
      .attr('dy', 20)
      .text(function(d) {
        return d;
      })
      .transition()
      .duration(2000)
      .delay(function(d, i) {
        return i * 400;
      })
      //.ease(d3.easeElasticInOut)
      .attr('y', function(d) {
        return yScale(d);
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
        <svg width="1200" height="180" id="mainsvg3" className="svgs" />
      </Card>
    </>
  );
};
export default D3;
