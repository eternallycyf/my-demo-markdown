import React, { useEffect, useState } from 'react';
import { Card, Button } from 'antd';
import * as d3 from 'd3';

const D3 = () => {
  const [dataset, setDataset] = useState<number[]>([30, 10, 43, 55, 13]);

  const handleInitChart = () => {
    let body = d3.select('body');
    let marge = { top: 30, bottom: 30, left: 30, right: 30 };
    let svg = body.select('#mainsvg3');
    var width = (svg.attr('width') as unknown) as number; //得到画布的宽
    var height = (svg.attr('height') as unknown) as number; //得到画布的长
    var g = svg
      .append('g')
      .attr('transform', 'translate(' + marge.top + ',' + marge.left + ')');
    //设置一个color的颜色比例尺，为了让不同的扇形呈现不同的颜色
    var colorScale = d3
      .scaleOrdinal()
      .domain(d3.range(dataset.length))
      .range(d3.schemeCategory10);

    //新建一个饼状图
    var pie = d3.pie();
    //新建一个弧形生成器
    var innerRadius = 0; //内半径
    var outerRadius = 100; //外半径
    var arc_generator = d3
      .arc()
      .innerRadius(0)
      .outerRadius(100);

    var pieData = pie(dataset);
    console.log(pieData);

    var gs = g
      .selectAll('.g')
      .data(pieData)
      .enter()
      .append('g')
      .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')'); //位置信息

    //绘制饼状图的各个扇形
    gs.append('path')
      .attr('d', function(d) {
        return arc_generator(d); //往弧形生成器中出入数据
      })
      .attr('fill', function(d, i) {
        return colorScale(i); //设置颜色
      });

    //绘制饼状图上面的文字信息
    gs.append('text')
      .attr('transform', function(d) {
        //位置设在中心处
        return 'translate(' + arc_generator.centroid(d) + ')';
      })
      .attr('text-anchor', 'middle')
      .text(function(d) {
        return d.data;
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
