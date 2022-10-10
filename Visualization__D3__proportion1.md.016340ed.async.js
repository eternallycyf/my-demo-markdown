(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{kOP2:function(i,s,e){"use strict";e.r(s);var d=e("cDcd"),n=e.n(d),t=e("dEAq"),u=e.n(t),r=e("6T1g");const l=n.a.memo(({demos:a})=>n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement(r.a,{code:`import React, { useEffect, useState } from 'react';
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
export default D3;`,lang:"tsx"}))));s.default=a=>{const c=n.a.useContext(t.context),m=c.demos;return n.a.useEffect(()=>{var o;a!=null&&(o=a.location)!==null&&o!==void 0&&o.hash&&t.AnchorLink.scrollToAnchor(decodeURIComponent(a.location.hash.slice(1)))},[]),n.a.createElement(l,{demos:m})}}}]);
