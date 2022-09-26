(self.webpackChunkmy_demo_markdown=self.webpackChunkmy_demo_markdown||[]).push([[4436],{69096:function(i,o,e){"use strict";e.r(o);var s=e(12924),n=e.n(s),l=e(16924),r=e(53401);const d=n().memo(({demos:a})=>n().createElement(n().Fragment,null,n().createElement("div",{className:"markdown"},n().createElement(r.Z,{code:`import React, { useEffect, useState } from 'react';
import { Card, Button } from 'antd';
import * as d3 from 'd3';

const D3 = (props: any) => {
  const handleInitChart = () => {
    var dataset = [1.2, 2.3, 0.9, 1.5, 3.3];
    var min = d3.min(dataset) as number; //\u5F97\u5230\u6700\u5C0F\u503C
    var max = d3.max(dataset) as number; //\u5F97\u5230\u6700\u5927\u503C
    var scaleLinear = d3
      .scaleLinear()
      .domain([min, max])
      .range([0, 300]);
    console.log('scaleLinear(1)\u8F93\u51FA\uFF1A' + scaleLinear(1)); // 12.499999999
    d3.select('body').append('br');
    console.log('scaleLinear(2)\u8F93\u51FA\uFF1A' + scaleLinear(2)); // 137.5
    d3.select('body').append('br');
    console.log('scaleLinear(3.3)\u8F93\u51FA\uFF1A' + scaleLinear(3.3)); // 300
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
export default D3;`,lang:"tsx"}))));o.default=a=>{const c=n().useContext(l.context),m=c.demos;return n().useEffect(()=>{var t;a!=null&&(t=a.location)!==null&&t!==void 0&&t.hash&&l.AnchorLink.scrollToAnchor(decodeURIComponent(a.location.hash.slice(1)))},[]),n().createElement(d,{demos:m})}},28410:function(i,o,e){"use strict";e.r(o);var s=e(12924),n=e.n(s),l=e(16924),r=e(53401);const d=n().memo(({demos:a})=>n().createElement(n().Fragment,null,n().createElement("div",{className:"markdown"},n().createElement(r.Z,{code:`import React, { useEffect, useState } from 'react';
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
    console.log('scaleOrdinal(1)\u8F93\u51FA\uFF1A' + scaleOrdinal('1')); // blue
    d3.select('body').append('br');
    console.log('scaleOrdinal(2)\u8F93\u51FA\uFF1A' + scaleOrdinal('2')); // yellow
    d3.select('body').append('br');
    console.log('scaleOrdinal(4)\u8F93\u51FA\uFF1A' + scaleOrdinal('4')); // green
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
export default D3;`,lang:"tsx"}))));o.default=a=>{const c=n().useContext(l.context),m=c.demos;return n().useEffect(()=>{var t;a!=null&&(t=a.location)!==null&&t!==void 0&&t.hash&&l.AnchorLink.scrollToAnchor(decodeURIComponent(a.location.hash.slice(1)))},[]),n().createElement(d,{demos:m})}}}]);
