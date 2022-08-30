```tsx | pure
import React, { useEffect, useState } from 'react';
import { Card, Button } from 'antd';
import * as d3 from 'd3';

const D3 = (props: any) => {
  const handleInitChart = () => {
    var index = ([0, 1, 2, 3, 4] as unknown) as string;
    var color = ['red', 'blue', 'yellow', 'black', 'green'];
    var scaleOrdinal = d3
      .scaleOrdinal()
      .domain(index)
      .range(color);
    console.log('scaleOrdinal(1)输出：' + scaleOrdinal('1')); // blue
    d3.select('body').append('br');
    console.log('scaleOrdinal(2)输出：' + scaleOrdinal('2')); // yellow
    d3.select('body').append('br');
    console.log('scaleOrdinal(4)输出：' + scaleOrdinal('4')); // green
  };

  useEffect(() => {
    handleInitChart();
  }, []);

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
