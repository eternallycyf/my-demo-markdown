(self.webpackChunkmy_demo_markdown=self.webpackChunkmy_demo_markdown||[]).push([[5184],{53781:function(i,l,e){"use strict";e.r(l);var d=e(12924),n=e.n(d),o=e(16924),s=e(53401);const r=n().memo(({demos:a})=>n().createElement(n().Fragment,null,n().createElement("div",{className:"markdown"},n().createElement(s.Z,{code:`import React, { useEffect, useState } from 'react';
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
export default D3;`,lang:"tsx"}))));l.default=a=>{const c=n().useContext(o.context),m=c.demos;return n().useEffect(()=>{var t;a!=null&&(t=a.location)!==null&&t!==void 0&&t.hash&&o.AnchorLink.scrollToAnchor(decodeURIComponent(a.location.hash.slice(1)))},[]),n().createElement(r,{demos:m})}}}]);
