```tsx | pure
import React, { useEffect, useState } from 'react';
import { Card, Button } from 'antd';
import * as d3 from 'd3';

const D3 = (props: any) => {
  const handleInitChart = () => {
    var dataset = [1.2, 2.3, 0.9, 1.5, 3.3];
    var min = d3.min(dataset) as number; //得到最小值
    var max = d3.max(dataset) as number; //得到最大值
    var scaleLinear = d3
      .scaleLinear()
      .domain([min, max])
      .range([0, 300]);
    console.log('scaleLinear(1)输出：' + scaleLinear(1)); // 12.499999999
    d3.select('body').append('br');
    console.log('scaleLinear(2)输出：' + scaleLinear(2)); // 137.5
    d3.select('body').append('br');
    console.log('scaleLinear(3.3)输出：' + scaleLinear(3.3)); // 300
  };

  useEffect(() => {
    handleInitChart();
  }, []);

  const setNewChartData = () => {};

  return (
    <>
      <Card style={{ margin: 24 }}>
        <svg width="1200" height="180" id="mainsvg" className="svgs" />
      </Card>
    </>
  );
};
export default D3;
```
