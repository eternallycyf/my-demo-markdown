(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{ZuYE:function(m,l,e){"use strict";e.r(l);var d=e("cDcd"),n=e.n(d),t=e("dEAq"),u=e.n(t),s=e("H1Ra");const r=n.a.memo(({demos:a})=>n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement(s.a,{code:`import React, { useEffect, useState } from 'react';
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
export default D3;`,lang:"tsx"}))));l.default=a=>{const c=n.a.useContext(t.context),i=c.demos;return n.a.useEffect(()=>{var o;a!=null&&(o=a.location)!==null&&o!==void 0&&o.hash&&t.AnchorLink.scrollToAnchor(decodeURIComponent(a.location.hash.slice(1)))},[]),n.a.createElement(r,{demos:i})}}}]);
