(self.webpackChunkmy_demo_markdown=self.webpackChunkmy_demo_markdown||[]).push([[2376],{39701:function(i,o,e){"use strict";e.r(o);var r=e(12924),n=e.n(r),s=e(16924),d=e(53401);const l=n().memo(({demos:a})=>n().createElement(n().Fragment,null,n().createElement("div",{className:"markdown"},n().createElement(d.Z,{code:`import React, { useEffect, useState } from 'react';
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
export default D3;`,lang:"tsx"}))));o.default=a=>{const c=n().useContext(s.context),m=c.demos;return n().useEffect(()=>{var t;a!=null&&(t=a.location)!==null&&t!==void 0&&t.hash&&s.AnchorLink.scrollToAnchor(decodeURIComponent(a.location.hash.slice(1)))},[]),n().createElement(l,{demos:m})}}}]);
