import React, { useEffect, useState } from 'react';
import { Card, Button } from 'antd';
import * as d3 from 'd3';

const D3 = () => {
  const [dataset, setDataset] = useState<number[]>([250, 210, 170, 130, 90]);

  var scaleLinear = d3
    .scaleLinear()
    .domain([0, d3.max(dataset)] as number[])
    .range([0, 250]);

  //为坐标轴定义一个线性比例尺
  var xScale = d3
    .scaleLinear()
    .domain([0, d3.max(dataset)] as number[])
    .range([0, 250]);
  var xAxis = d3
    .axisBottom(xScale) //定义一个axis，由bottom可知，是朝下的
    .ticks(10); //设置刻度数目

  const handleInitChart = () => {
    let marge = { top: 30, bottom: 30, left: 30, right: 30 };
    let body = d3.select('body');
    let svg = body.select('#mainsvg2');
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
        return scaleLinear(d);
      })
      .attr('height', rectHeight - 5)
      .attr('fill', 'blue');

    g.selectAll('text')
      .data(dataset)
      .enter()
      .append('text')
      .attr('x', function(d) {
        return 30 + scaleLinear(d);
      })
      .attr('y', function(d, i) {
        return i * rectHeight + 15;
      })
      .text(function(d) {
        return d;
      });

    g.append('g')
      .attr(
        'transform',
        'translate(' + 20 + ',' + dataset.length * rectHeight + ')',
      )
      .call(xAxis);
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
        <svg width="1200" height="180" id="mainsvg2" className="svgs" />
      </Card>
    </>
  );
};
export default D3;
