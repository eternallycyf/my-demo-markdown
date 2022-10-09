(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{bI1T:function(i,l,e){"use strict";e.r(l);var s=e("cDcd"),n=e.n(s),t=e("dEAq"),u=e.n(t),d=e("6T1g");const r=n.a.memo(({demos:a})=>n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement(d.a,{code:`import React, { useEffect, useState } from 'react';
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
export default D3;`,lang:"tsx"}))));l.default=a=>{const c=n.a.useContext(t.context),m=c.demos;return n.a.useEffect(()=>{var o;a!=null&&(o=a.location)!==null&&o!==void 0&&o.hash&&t.AnchorLink.scrollToAnchor(decodeURIComponent(a.location.hash.slice(1)))},[]),n.a.createElement(r,{demos:m})}},fPM3:function(i,l,e){"use strict";e.r(l);var s=e("cDcd"),n=e.n(s),t=e("dEAq"),u=e.n(t),d=e("6T1g");const r=n.a.memo(({demos:a})=>n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement(d.a,{code:`import React, { useEffect, useState } from 'react';
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
export default D3;`,lang:"tsx"}))));l.default=a=>{const c=n.a.useContext(t.context),m=c.demos;return n.a.useEffect(()=>{var o;a!=null&&(o=a.location)!==null&&o!==void 0&&o.hash&&t.AnchorLink.scrollToAnchor(decodeURIComponent(a.location.hash.slice(1)))},[]),n.a.createElement(r,{demos:m})}}}]);
