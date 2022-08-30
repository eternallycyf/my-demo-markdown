import React, { useEffect, useState } from 'react';
import { Card, Button } from 'antd';
import * as d3 from 'd3';

const D3 = () => {
  const [dataset, setDataset] = useState<any[]>([
    //节点集
    { name: '湖南邵阳' },
    { name: '山东莱州' },
    { name: '广东阳江' },
    { name: '山东枣庄' },
    { name: '泽' },
    { name: '恒' },
    { name: '鑫' },
    { name: '明山' },
    { name: '班长' },
  ]);

  var nodes = [
    //节点集
    { name: '湖南邵阳' },
    { name: '山东莱州' },
    { name: '广东阳江' },
    { name: '山东枣庄' },
    { name: '泽' },
    { name: '恒' },
    { name: '鑫' },
    { name: '明山' },
    { name: '班长' },
  ];

  var edges = [
    //边集
    { source: 0, target: 4, relation: '籍贯', value: 1.3 },
    { source: 4, target: 5, relation: '舍友', value: 1 },
    { source: 4, target: 6, relation: '舍友', value: 1 },
    { source: 4, target: 7, relation: '舍友', value: 1 },
    { source: 1, target: 6, relation: '籍贯', value: 2 },
    { source: 2, target: 5, relation: '籍贯', value: 0.9 },
    { source: 3, target: 7, relation: '籍贯', value: 1 },
    { source: 5, target: 6, relation: '同学', value: 1.6 },
    { source: 6, target: 7, relation: '朋友', value: 0.7 },
    { source: 6, target: 8, relation: '职责', value: 2 },
  ];

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
      .domain(d3.range(nodes.length))
      .range(d3.schemeCategory10);

    var forceSimulation = d3
      .forceSimulation()
      .force('link', d3.forceLink())
      .force('charge', d3.forceManyBody())
      .force('center', d3.forceCenter());

    //生成节点数据
    forceSimulation.nodes(nodes).on('tick', ticked); //这个函数很重要，后面给出具体实现和说明

    //生成边数据
    forceSimulation
      .force('link')
      .links(edges)
      .distance(function(d) {
        //每一边的长度
        return d.value * 100;
      });

    //设置图形的中心位置
    forceSimulation
      .force('center')
      .x(width / 2)
      .y(height / 2);

    //在浏览器的控制台输出
    console.log(nodes);
    console.log(edges);

    //绘制边
    var links = g
      .append('g')
      .selectAll('line')
      .data(edges)
      .enter()
      .append('line')
      .attr('stroke', function(d, i) {
        return colorScale(i);
      })
      .attr('stroke-width', 1);

    var linksText = g
      .append('g')
      .selectAll('text')
      .data(edges)
      .enter()
      .append('text')
      .text(function(d) {
        return d.relation;
      });

    var gs = g
      .selectAll('.circleText')
      .data(nodes)
      .enter()
      .append('g')
      .attr('transform', function(d, i) {
        var cirX = d.x;
        var cirY = d.y;
        return 'translate(' + cirX + ',' + cirY + ')';
      })
      .call(
        d3
          .drag()
          .on('start', started)
          .on('drag', dragged)
          .on('end', ended),
      );

    //绘制节点
    gs.append('circle')
      .attr('r', 10)
      .attr('fill', function(d, i) {
        return colorScale(i);
      });
    //文字
    gs.append('text')
      .attr('x', -10)
      .attr('y', -20)
      .attr('dy', 10)
      .text(function(d) {
        return d.name;
      });

    function ticked() {
      links
        .attr('x1', function(d) {
          return d.source.x;
        })
        .attr('y1', function(d) {
          return d.source.y;
        })
        .attr('x2', function(d) {
          return d.target.x;
        })
        .attr('y2', function(d) {
          return d.target.y;
        });

      linksText
        .attr('x', function(d) {
          return (d.source.x + d.target.x) / 2;
        })
        .attr('y', function(d) {
          return (d.source.y + d.target.y) / 2;
        });

      gs.attr('transform', function(d) {
        return 'translate(' + d.x + ',' + d.y + ')';
      });
    }

    function started(d) {
      if (!d3.active) {
        forceSimulation.alphaTarget(0.8).restart();
      }
      d.subject.fx = d.x;
      d.subject.fy = d.y;
    }
    function dragged(d) {
      d.subject.fx = d.x;
      d.subject.fy = d.y;
    }
    function ended(d) {
      if (!d3.active) {
        forceSimulation.alphaTarget(0);
      }
      d.subject.fx = null;
      d.subject.fy = null;
    }
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
