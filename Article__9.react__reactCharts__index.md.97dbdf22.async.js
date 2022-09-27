(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{"2PYP":function(d,c,l){"use strict";l.r(c);var m=l("cDcd"),e=l.n(m),n=l("dEAq"),s=l.n(n),t=l("H1Ra"),a=l("dMo/");const E=e.a.memo(({demos:u})=>e.a.createElement(e.a.Fragment,null,e.a.createElement("div",{className:"markdown"},e.a.createElement("h1",{id:"reactcharts"},e.a.createElement(n.AnchorLink,{to:"#reactcharts","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"reactCharts"),e.a.createElement("h2",{id:"1-\u51C6\u5907\u9636\u6BB5"},e.a.createElement(n.AnchorLink,{to:"#1-\u51C6\u5907\u9636\u6BB5","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"1. \u51C6\u5907\u9636\u6BB5"),e.a.createElement("h3",{id:"canvas"},e.a.createElement(n.AnchorLink,{to:"#canvas","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"canvas"),e.a.createElement(t.a,{code:`yarn add @ant-design/charts

import React from 'react';
const Index = () => {
  const style = {
    border: "1px solid #ccc",
  }
  let canvas = React.useRef(null)
  React.useEffect(() => {
    let ctx = canvas.current.getContext('2d')
  }, [])
  return (
  <canvas width="800" height="800" style={style} ref={canvas}></canvas>
  )
}
export default Index`,lang:"js"}),e.a.createElement("h2",{id:"2-\u4E00\u7EA7\u83DC\u5355"},e.a.createElement(n.AnchorLink,{to:"#2-\u4E00\u7EA7\u83DC\u5355","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"2. \u4E00\u7EA7\u83DC\u5355"),e.a.createElement(a.a,null,e.a.createElement("thead",null,e.a.createElement("tr",null,e.a.createElement("th",null,"\u914D\u7F6E\u9879"),e.a.createElement("th",null,"\u63CF\u8FF0"),e.a.createElement("th",null,"\u9ED8\u8BA4\u503C"),e.a.createElement("th",null,"\u4F7F\u7528\u65B9\u5F0F"),e.a.createElement("th",null,"\u5176\u4ED6"))),e.a.createElement("tbody",null,e.a.createElement("tr",null,e.a.createElement("td",null,"width"),e.a.createElement("td",null),e.a.createElement("td",null,"500"),e.a.createElement("td",null,"number"),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"height"),e.a.createElement("td",null),e.a.createElement("td",null,"500"),e.a.createElement("td",null,"number"),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"nodeCfg"),e.a.createElement("td",null,"\u8282\u70B9\u914D\u7F6E"),e.a.createElement("td",null),e.a.createElement("td",null,"\u89C1\u4E0B\u8868"),e.a.createElement("td",null)))),e.a.createElement(t.a,{code:`data:\u6570\u636E,
width:
height:
xField:"type",    // \u56FE\u5F62\u5728 x \u65B9\u5411\u5BF9\u5E94\u7684data\u5B57\u6BB5\u540D
yField:"value",   // \u56FE\u5F62\u5728 y \u65B9\u5411\u5BF9\u5E94\u7684data\u5B57\u6BB5\u540D
seriesField:""    // \u5206\u7EC4\u5B57\u6BB5
meta:""           // \u5143\u4FE1\u606F


color:"",         // \u81EA\u5B9A\u4E49\u7EBF\u6761\u7684\u989C\u8272
point:{}          // \u66F4\u6539 \u8F85\u52A9\u6570\u636E\u70B9\u5927\u5C0F\u53CA\u6837\u5F0F
yAxis:{}            // \u683C\u5F0F\u5316y\u8F74\u6807\u7B7E\u52A0\u5355\u4F4D \u81EA\u5B9A\u4E49label\u6837\u5F0F
label:{},
annotations:[        // \u6DFB\u52A0\u8F85\u52A9\u6587\u672C \u8F85\u52A9\u7EBF]`,lang:"js"}),e.a.createElement("h2",{id:"3-\u901A\u7528-api"},e.a.createElement(n.AnchorLink,{to:"#3-\u901A\u7528-api","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"3. \u901A\u7528 API"),e.a.createElement(a.a,null,e.a.createElement("thead",null,e.a.createElement("tr",null,e.a.createElement("th",null,"\u914D\u7F6E\u9879"),e.a.createElement("th",null,"\u63CF\u8FF0"),e.a.createElement("th",null,"\u7C7B\u578B"),e.a.createElement("th",null,"\u9ED8\u8BA4\u503C"))),e.a.createElement("tbody",null,e.a.createElement("tr",null,e.a.createElement("td",null,"onReady"),e.a.createElement("td",null,"\u56FE\u8868\u52A0\u8F7D\u56DE\u8C03"),e.a.createElement("td",null,"(plot)=> void"),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"onEvent"),e.a.createElement("td",null,"\u56FE\u8868\u4E8B\u4EF6\u7ED1\u5B9A"),e.a.createElement("td",null,"(chart, event)=> void"),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"loading"),e.a.createElement("td",null,"\u662F\u5426\u663E\u793A\u52A0\u8F7D\u72B6\u6001\uFF0C\u5F02\u6B65\u83B7\u53D6\u6570\u636E\u65F6\u4F7F\u7528"),e.a.createElement("td",null,"boolean"),e.a.createElement("td",null,"false")),e.a.createElement("tr",null,e.a.createElement("td",null,"loadingTemplate"),e.a.createElement("td",null,"\u81EA\u5B9A\u4E49 loading \u7EC4\u4EF6"),e.a.createElement("td",null,"React.ReactElement"),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"errorTemplate"),e.a.createElement("td",null,"\u56FE\u8868\u52A0\u8F7D\u51FA\u9519\u65F6\u5448\u73B0\u7684\u6A21\u677F"),e.a.createElement("td",null,"(e: Error) => React.ReactNode"),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"className"),e.a.createElement("td",null,"\u56FE\u8868\u5BB9\u5668 class"),e.a.createElement("td",null,"string"),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"style"),e.a.createElement("td",null,"\u56FE\u8868\u5BB9\u5668 style"),e.a.createElement("td",null,"React.CSSProperties"),e.a.createElement("td",null)))),e.a.createElement("h2",{id:"4-\u56FE\u8868\u7EC4\u4EF6"},e.a.createElement(n.AnchorLink,{to:"#4-\u56FE\u8868\u7EC4\u4EF6","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"4. \u56FE\u8868\u7EC4\u4EF6"),e.a.createElement("h2",{id:"5-\u901A\u7528\u914D\u7F6E"},e.a.createElement(n.AnchorLink,{to:"#5-\u901A\u7528\u914D\u7F6E","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"5. \u901A\u7528\u914D\u7F6E"),e.a.createElement("h3",{id:"nodecfg"},e.a.createElement(n.AnchorLink,{to:"#nodecfg","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"nodeCfg"),e.a.createElement(a.a,null,e.a.createElement("thead",null,e.a.createElement("tr",null,e.a.createElement("th",null,"\u914D\u7F6E\u9879"),e.a.createElement("th",null,"\u63CF\u8FF0"),e.a.createElement("th",null,"\u7C7B\u578B"),e.a.createElement("th",null,"\u4F7F\u7528\u65B9\u5F0F"),e.a.createElement("th",null,"\u5176\u4ED6"))),e.a.createElement("tbody",null,e.a.createElement("tr",null,e.a.createElement("td",null,"type"),e.a.createElement("td",null,"\u8282\u70B9\u7C7B\u578B"),e.a.createElement("td",null,"string"),e.a.createElement("td",null,"icon-node card ..."),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"size"),e.a.createElement("td",null,"\u8282\u70B9\u5927\u5C0F"),e.a.createElement("td",null,"Number [ ]"),e.a.createElement("td",null),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"style"),e.a.createElement("td",null,"\u8282\u70B9\u6837\u5F0F"),e.a.createElement("td",null,"object | Function"),e.a.createElement("td",null,"\u652F\u6301\u56DE\u8C03"),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"label"),e.a.createElement("td",null,"\u8282\u70B9\u6587\u672C\u6837\u5F0F"),e.a.createElement("td",null,"object"),e.a.createElement("td",null,"\u652F\u6301\u56DE\u8C03"),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"anchorPoints"),e.a.createElement("td",null,"\u8282\u70B9\u7684\u8FDE\u63A5\u70B9"),e.a.createElement("td",null,"Number [ ]"),e.a.createElement("td",null,"[[0.5, 0], [0.5, 1]]"),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"padding"),e.a.createElement("td",null,"\u6587\u672C\u5185\u8FB9\u8DDD"),e.a.createElement("td",null,"number | number [ ]"),e.a.createElement("td",null),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"customContent"),e.a.createElement("td",null,"\u81EA\u5B9A\u4E49 Items"),e.a.createElement("td",null,"Function"),e.a.createElement("td",null,"\u8981\u8FD4\u56DE\u81EA\u5B9A\u4E49 items \u6700\u5927\u9AD8\u5EA6"),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"nodeStateStyles"),e.a.createElement("td",null,"\u8282\u70B9\u4E0D\u540C\u72B6\u6001\u6837\u5F0F"),e.a.createElement("td",null,"Object"),e.a.createElement("td",null),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null),e.a.createElement("td",null),e.a.createElement("td",null),e.a.createElement("td",null),e.a.createElement("td",null)))),e.a.createElement("h3",{id:"edgecfg-\u8FB9\u914D\u7F6E"},e.a.createElement(n.AnchorLink,{to:"#edgecfg-\u8FB9\u914D\u7F6E","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"edgeCfg \u8FB9\u914D\u7F6E"),e.a.createElement(a.a,null,e.a.createElement("thead",null,e.a.createElement("tr",null,e.a.createElement("th",null,"\u914D\u7F6E\u9879"),e.a.createElement("th",null,"\u63CF\u8FF0"),e.a.createElement("th",null,"\u7C7B\u578B"),e.a.createElement("th",null,"\u4F7F\u7528\u65B9\u5F0F"),e.a.createElement("th",null,"\u5176\u4ED6"))),e.a.createElement("tbody",null,e.a.createElement("tr",null,e.a.createElement("td",null,"type"),e.a.createElement("td",null,"\u8FB9\u7C7B\u578B"),e.a.createElement("td",null),e.a.createElement("td",null,"line | ..."),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"label"),e.a.createElement("td",null,"\u8FB9\u6587\u672C\u6837\u5F0F"),e.a.createElement("td",null,"Object"),e.a.createElement("td",null,"\u652F\u6301\u56DE\u8C03"),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"startArrow"),e.a.createElement("td",null,"\u8FB9\u5F00\u59CB\u7BAD\u5934"),e.a.createElement("td",null,"Object"),e.a.createElement("td",null),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"endArrow"),e.a.createElement("td",null,"\u8FB9\u7ED3\u675F\u7BAD\u5934"),e.a.createElement("td",null,"Object"),e.a.createElement("td",null),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"edgeStateStyles"),e.a.createElement("td",null,"\u8FB9\u4E0D\u540C\u72B6\u6001\u6837\u5F0F"),e.a.createElement("td",null,"Object"),e.a.createElement("td",null),e.a.createElement("td",null)))),e.a.createElement("h3",{id:"behaviors-\u4EA4\u4E92\u6A21\u5F0F"},e.a.createElement(n.AnchorLink,{to:"#behaviors-\u4EA4\u4E92\u6A21\u5F0F","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"behaviors \u4EA4\u4E92\u6A21\u5F0F"),e.a.createElement(t.a,{code:`\u7C7B\u578B   Number[]
\u9ED8\u8BA4\u503C ['drag-canvas', 'zoom-canvas']
drag-canvas: \u62D6\u62FD\u753B\u5E03
scroll-canvas: \u6EDA\u8F6E\u6EDA\u52A8\u753B\u5E03
zoom-canvas: \u7F29\u653E\u753B\u5E03
drag-node: \u62D6\u62FD\u8282\u70B9`,lang:"js"}),e.a.createElement("h3",{id:"\u5176\u4ED6\u914D\u7F6E"},e.a.createElement(n.AnchorLink,{to:"#\u5176\u4ED6\u914D\u7F6E","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5176\u4ED6\u914D\u7F6E"),e.a.createElement(a.a,null,e.a.createElement("thead",null,e.a.createElement("tr",null,e.a.createElement("th",null,"\u914D\u7F6E\u9879"),e.a.createElement("th",null,"\u63CF\u8FF0"),e.a.createElement("th",null,"\u7C7B\u578B"),e.a.createElement("th",null,"\u4F7F\u7528\u65B9\u5F0F"),e.a.createElement("th",null,"\u9ED8\u8BA4\u503C"))),e.a.createElement("tbody",null,e.a.createElement("tr",null,e.a.createElement("td",null,"markerCfg"),e.a.createElement("td",null,"Marker \u914D\u7F6E"),e.a.createElement("td",null,"Boolean|MarkerCfg"),e.a.createElement("td",null),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"animate"),e.a.createElement("td",null,"\u662F\u5426\u5F00\u542F\u52A8\u753B"),e.a.createElement("td",null,"Boolean"),e.a.createElement("td",null),e.a.createElement("td",null,"true")),e.a.createElement("tr",null,e.a.createElement("td",null,"autoFit"),e.a.createElement("td",null,"\u662F\u5426\u7F29\u653E\u8282\u70B9\u5927\u5C0F\u81EA\u9002\u5E94\u5BB9\u5668"),e.a.createElement("td",null,"Boolean"),e.a.createElement("td",null),e.a.createElement("td",null,"true")),e.a.createElement("tr",null,e.a.createElement("td",null,"fitCenter"),e.a.createElement("td",null,"\u5F00\u542F\u540E \u56FE\u7247\u5E73\u79FB\u81F3\u753B\u5E03\u4E2D\u5FC3 \u4E0D\u7F29\u653E"),e.a.createElement("td",null,"Boolean"),e.a.createElement("td",null),e.a.createElement("td",null,"true")),e.a.createElement("tr",null,e.a.createElement("td",null,"minimapCfg"),e.a.createElement("td",null,"\u8FF7\u4F60 map \u914D\u7F6E"),e.a.createElement("td",null,"Object"),e.a.createElement("td",null),e.a.createElement("td",null)))),e.a.createElement("h2",{id:"6-\u5E38\u7528\u63A7\u4EF6"},e.a.createElement(n.AnchorLink,{to:"#6-\u5E38\u7528\u63A7\u4EF6","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"6. \u5E38\u7528\u63A7\u4EF6"),e.a.createElement("h3",{id:"annotation"},e.a.createElement(n.AnchorLink,{to:"#annotation","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"annotation"),e.a.createElement(t.a,{code:`annotations:[
  {
        type: "line",
        // \u7B2C\u4E00\u4E2A\u662F x\u8F74 \u7B2C\u4E8C\u4E2A\u662FY\u8F74 start[x,y]
        start: ['min,0%,start', '2000'],
        end: ['max,100%,end', '2000'],
        style: {
          stroke: 'red',
          lineDash: [2, 2],
          lineWidth: 2,
        },
  }
]
# dataMarker  // \u6298\u7EBF\u56FE\u7684\u70B9
      {
        type: "dataMarker",
        position: ['12\u6708', 20],
        point: {
          style: {
            fill: 'red',
            stroke: "red"
          },
        },
        line:false
      },
# region \u80CC\u666F
      {
        type: "region",
        start: function start(xScale) {
          console.log(xScale);
          return [''.concat(0 * 100, '%'), '0%'];
        },
        end: function end(xScale) {
        return [''.concat(xScale.range[0] * 2 * 100, '%'), '100%'];
        }
      }
# html    // \u81EA\u5B9A\u4E49\u56FE\u5F62
  {
    type:'html'
    position: ['12\u6708', 20],  // x \u548C y \u8F74\u7684\u67D0\u4E00\u9879\u503C
    html: '<p>\u8F85\u52A9\u6807\u8BB0</p>',
    style: {
        fill: 'blue'
     },
  }
# regionFilter
// \u5982\u679C \u540C\u65F6\u4F7F\u7528\u70B9\u4E86 \u5C06\u70B9\u7684\u989C\u8272\u4E5F\u6539\u53D8\u4E86  \u5C06\u8D77\u70B9\u8BBE\u7F6E\u6210\u8D1F\u503C
// start['start',-1]
 {
        type: 'regionFilter',
        start: ['start', -2],
        end: ['end', lower],
        color: '#F4664A',
        top: true,
        style: {
          fill: 'F4664A'
        },
      },

# text
         {
          type: 'text',
          content: "\u65E5\u671F\u4E3A\u677F\u576F\u751F\u4EA7\u65E5\u671F",
          position: ["93%", '0%'],
          style: {
            textAlign: 'center',
            fill: 'rgba(0, 0, 0, 0.45)',
            fontSize: 14
          },
        }
      ]`,lang:"js"}),e.a.createElement("h3",{id:"tooltip"},e.a.createElement(n.AnchorLink,{to:"#tooltip","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"tooltip"),e.a.createElement(t.a,{code:`tooltip: {
      // showTitle: false,
      // formatter: (text) => {
      //   return {
      //     name: moment(text.date).format("YYYY-MM-DD HH:mm:ss"),
      //     value: text?.trendPoint + '%',
      //   }
      // }
      customContent: (_, config) => {
        const title = config[0]?.title;
        if (!title) return;
        return (
          <>
            <div style={{ padding: '10px 0' }} className={styles.tooltip}>
              <div className={styles.tooltipTtitle}>{config?.data?.date}</div>
              <ul className={styles.tooltipContent}>
                <li>
                  <span>{ }:</span>
                  <span>
                    {/* {datum?.avgValue ? datum?.avgValue.toFixed(tooltipNum) : '--'} */}
                  </span>
                </li>
              </ul>
            </div>
          </>
        )
      }
    },


      .tooltip {
  text-align: left;

  .tooltipTtitle {
    padding: 10px;
    font-size: 30px;
    margin-bottom: 10px;
  }

  .tooltipContent {
    padding: 10px;
    position: relative;

    >li {
      padding: 6px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 32px;

      >span:first-child {
        margin-right: 30px;
      }
    }

    >li:last-child {
      margin-bottom: 0;
    }
  }
}`,lang:"js"}),e.a.createElement("h3",{id:"meta"},e.a.createElement(n.AnchorLink,{to:"#meta","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"meta"),e.a.createElement(t.a,{code:`\u5168\u5C40\u4FE1\u606F\u8FC7\u6EE4
  meta: {
      \u5B57\u6BB5\u540D: {
        // quantile \u54EA\u91CC\u6570\u636E\u591A \u54EA\u91CC\u95F4\u9694\u5927
        type: 'cat',
        formatter(value) {
          return ~~value
        }

        min: 0,
        max: 100,
        // \u81EA\u5B9A\u4E49\u523B\u5EA6
        ticks: [10, 20, 50, 100, 150, 300]


        // tooltip \u7684\u540D\u5B57
        alias: '\u6E29\u5EA6',
        nice: true,
        // \u4E24\u4E2A\u5B57\u6BB5\u540C\u6B65\u914D\u7F6E
        sync: true,

      },
    },`,lang:"js"}),e.a.createElement("h3",{id:"\u7EB5\u5750\u6807\u81EA\u9002\u5E94"},e.a.createElement(n.AnchorLink,{to:"#\u7EB5\u5750\u6807\u81EA\u9002\u5E94","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u7EB5\u5750\u6807\u81EA\u9002\u5E94"),e.a.createElement(t.a,{code:`#
https://g2.antv.vision/zh/docs/manual/tutorial/scale#quantize
  yAxis:{
    tickMethod
  }
  type= "quantize"
  \u5BF9\u4E8E\u6570\u636E\u90FD\u662F0 \u7684\u65F6\u5019 \u8BBE\u7F6E meta:{max:0}
#
function findMaxNum(val, type) {
    let number = [];
    val.map((res) => {
      if (typeof res[type] === 'number') number.push(res[type]);
    });
    let max = Math.max(...number) * 1.1 > 100 ? 100 : Math.max(...number) * 1.1;
    let min = Math.min(...number) * 0.9;
    return {
      min: min,
      max: max,
    };
  }

   findMaxNum(chartData, 'trendPoint').max >= high && {
        type: 'region',
        start: [
          'start',
          findMaxNum(chartData, 'trendPoint').min >= high ? 'min' : high,
        ],
        end: ['end', 'max'],
        style: {
          fill: '#18C54B',
          fillOpacity: 0.1,
        },
      },`,lang:"js"}),e.a.createElement("h2",{id:"6-\u56FE\u8868\u7EC6\u5206"},e.a.createElement(n.AnchorLink,{to:"#6-\u56FE\u8868\u7EC6\u5206","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"6. \u56FE\u8868\u7EC6\u5206"),e.a.createElement("h3",{id:"\u67F1\u72B6\u56FE"},e.a.createElement(n.AnchorLink,{to:"#\u67F1\u72B6\u56FE","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u67F1\u72B6\u56FE"),e.a.createElement(t.a,{code:`# \u5E38\u7528\u5C5E\u6027
$ theme:'dark | default'       // \u5E95\u8272\u662F\u767D\u8272\u8FD8\u662F\u9ED1\u8272`,lang:"js"}),e.a.createElement(t.a,{code:`{
$ width: number,
$ height: number,
$ autoFit: boolean,                   // \u81EA\u9002\u5E94\u5BB9\u5668\u5BBD\u9AD8
$ padding:number[] | number | 'auto'  // \u6574\u4F53\u7684padding
$ renderer                            // canvas \u8FD8\u662F svg
$ limitInPlot: boolean        // \u5BF9\u8D85\u51FA\u7684geometry \u8FDB\u884C\u88C1\u5207
$ data:                       // \u6570\u636E\u6E90
$ xField                      // \u56FE\u5F62\u5728x\u65B9\u5411\u7684\u6570\u636E\u5B57\u6BB5\u540D
$ yField                      // \u56FE\u5F62\u5728y\u65B9\u5411\u7684\u6570\u636E\u5B57\u6BB5\u540D
$ seriesField                 // \u62C6\u5206\u5B57\u6BB5
     //stackField \u62C6\u5206\u989C\u8272\u7528  colorField
$ groupField                  // \u5806\u53E0\u5206\u7EC4\u67F1\u72B6\u56FE\u62C6\u5206\u5B57\u6BB5
$ isGroup                     // \u662F\u5426\u5206\u7EC4\u67F1\u72B6\u56FE
$ isStack                     // \u662F\u5426\u5806\u79EF\u67F1\u72B6\u56FE
$ isRange                     // \u662F\u5426\u533A\u95F4\u67F1\u72B6\u56FE
$ isPercent                   // \u662F\u5426\u5806\u79EF\u767E\u5206\u6BD4\u67F1\u72B6\u56FE
  // \u5F53 isPercent:true  && isStack:true


$  minColumnWidth              // \u67F1\u5B50\u7684\u6700\u5C0F\u5BBD\u5EA6
$  maxColumnWidth              // \u67F1\u5B50\u7684\u6700\u5927\u5BBD\u5EA6
$  columnWidthRatio: [0-1],    // \u67F1\u72B6\u56FE \u4E2A\u4F53\u5BBD\u5EA6\u5360\u6BD4
$  intervalPadding             // \u5206\u7EC4\u67F1\u72B6\u56FE\u7684 \u6BCF\u7EC4\u95F4\u8DDD
$  dodgePadding                // \u5206\u7EC4\u67F1\u72B6\u56FE\u7684 \u7EC4\u5185\u95F4\u8DDD


$  color:string | string[] | Function  // \u70B9\u7684\u989C\u8272
  // \u914D\u7F6E colorFiled \u7528\u4E8E\u62C6\u5206\u989C\u8272
$  columnStyle:{}                 // \u8BBE\u7F6E \u67F1\u5F62\u56FE\u7684\u6837\u5F0F
$  columnBackground: {            // \u67F1\u5B50 \u80CC\u666F\u6837\u5F0F\u8BBE\u7F6E
      style: {
        fill: "#ccc",
        fillOpacity: 0.25
      }
    },

$ xAxis:{
    top:boolean              // \u662F\u5426\u53EF\u6E32\u67D3\u5728\u753B\u5E03\u9876\u5C42 \u9632\u906E\u6321
    position:"top"...        // \u8BBE\u7F6E\u5750\u6807\u8F74\u7684\u4F4D\u7F6E
    verticalFactor:-1 | 1    // \u5750\u6807\u8F74\u6587\u5B57\u76F8\u5BF9\u4E8E\u5750\u6807\u8F74\u7684\u4F4D\u7F6E
    verticalLimitLength:number // \u5782\u76F4\u65B9\u5411\u6700\u5927\u957F\u5EA6
    min                      // \u5750\u6807\u8F74\u6700\u5C0F\u503C
    max                       // \u5750\u6807\u8F74\u6700\u5927\u503C
    minLimit
    maxLimit
    tickCount                 // \u671F\u671B\u7684\u5750\u6807\u8F74\u6570\u91CF
    tickInterval              // \u5750\u6807\u8F74\u523B\u5EA6\u95F4\u9694

-   label:{ null                 // \u5750\u6807\u8F74\u7684\u6587\u5B57
      content:                // \u5C55\u793A\u7684\u6587\u672C\u5185\u5BB9
      style:{ShapeAttrs

          }
      formatter: (text) => {
            let time = momnet(text).format('hh:mm');
            return time;
          },
      type
      layout                //\u6587\u672C\u5E03\u5C40\u7C7B\u578B
      animate
      position
      offset
      offsetX
      offsetY
      labelLine	             // \u6587\u672C\u7684\u8FDE\u63A5\u7EBF
      autoRotate             // \u662F\u5426\u81EA\u52A8\u65CB\u8F6C
      rotate                 // \u6587\u672C\u65CB\u8F6C\u89D2\u5EA6
      labelEmit              // \u8FDB\u884C\u653E\u5C04\u72B6\u663E\u793A
      autoHide               // \u662F\u5426\u81EA\u52A8\u9690\u85CF
    }


-   grid:{ null               // \u5750\u6807\u8F74\u7F51\u683C
       line: {                // \u7F51\u683C\u7EBF
          style: {
                stroke: 'rgba(255,255,255,.1)'
           }
       }
       alternateColor:string  // \u4E24\u4E2A\u6805\u683C\u7EBF\u95F4\u7684\u586B\u5145\u8272
       closed                 //  circle \u662F\u5426\u5173\u95ED grid
       alignTick              // \u662F\u5426\u540C\u523B\u5EA6\u7EBF\u5BF9\u9F50
    }

-   tickLine:{              // \u5750\u6807\u8F74\u523B\u5EA6\u7EBF
         style:{

         },
         alignTick:boolean    // \u662F\u5426\u5BF9\u9F50
         length:number
     }
-  tickMethod: function tickMethod(_ref) { // \u523B\u5EA6\u81EA\u5B9A\u4E49
        var max = _ref.max;
        var interval = Math.ceil(max / 5);
        return [
          0,
          interval,
          interval * 2,
          interval * 3,
          interval * 4,
          max.toFixed(0),
        ];
      },
-   subTickLine:{             // \u5750\u6807\u8F74\u5B50\u523B\u5EA6\u7EBF
       style:{}
       count
       length
     }

-   title:{null              //  \u56FE\u8868\u6574\u4F53\u4E0B\u65B9\u7684\u6807\u9898
      text:""
      position
      offset
      spacing
      style:shapeStyle
      autoRotate              // \u662F\u5426\u81EA\u52A8\u65CB\u8F6C
    }
  }


$ legend:{ false
  layout: 'horizontal vertical',
  position: 'right'
  offsetX
  offsetY
  itemWidth:""        // \u5206\u7C7B\u56FE\u4F8B \u7684\u5BBD\u5EA6
  itemHeight:""       // \u5206\u7C7B\u56FE\u4F8B \u7684\u9AD8\u5EA6
  itemSpacing:""      // \u6BCF\u4E2A\u5206\u7C7B\u56FE\u4F8B\u4E4B\u95F4 \u6C34\u5E73\u65B9\u5411\u95F4\u8DDD
  // \u8BBE\u7F6E\u6BCF\u4E2A \u56FE\u6807\u548C\u6587\u5B57\u4E4B\u95F4\u7684\u95F4\u8DDD marker => spacing


  maxWidth  // \u5206\u7C7B\u56FE\u4F8B\u5206\u9875 \u5F53layout:horzontal\u65F6 \u8D85\u8FC7\u5C31\u5206\u9875
  maxHeight // \u5206\u7C7B\u56FE\u4F8B\u5206\u9875
  min                 // \u8FDE\u7EED\u56FE\u4F8B\u7684\u8303\u56F4
  max                 // \u8FDE\u7EED\u56FE\u4F8B\u7684\u8303\u56F4
  value:number[]     // \u8FDE\u7EED\u56FE\u4F8B \u5F53\u524D\u9009\u4E2D\u7684\u8303\u56F4
  slidable            // \u8FDE\u7EED\u56FE\u4F8B \u662F\u5426\u53EF\u4EE5\u6ED1\u52A8
  rail               // \u8FDE\u7EED\u56FE\u4F8B \u6ED1\u5757\u80CC\u666F\u7684\u6837\u5F0F\u914D\u7F6E

- itemName:{          // \u56FE\u4F8B\u6587\u5B57\u6837\u5F0F\u8BBE\u7F6E
     style,
     spacing          // \u548C itemValue\u7684\u8DDD\u79BB
     formatter:()=>{}
  }
- itemValue:{         // \u81EA\u5B9A\u4E49\u589E\u52A0\u7684\u6587\u5B57\u540E\u7F00
     style
     alignRight
     formatter
  }
- marker:{             // \u56FE\u4F8B\u7684 \u56FE\u6807\u8BBE\u7F6E
    symbol:'square',
    style// innerwidth \u53EF\u4EE5\u63A7\u5236\u56FE\u6807\u5927\u5C0F \u4ECE\u800C\u8BA9\u6587\u5B57\u4E0D\u518D\u7701\u7565
    spacing            // \u56FE\u6807\u540C \u540E\u9762\u6587\u4EF6\u7684\u95F4\u8DDD
  }


- custom     // \u81EA\u5B9A\u4E49\u56FE\u4F8B\u65F6 \u5FC5\u987B\u4E3A true \u4E14\u8981\u58F0\u660E items
- items      // \u914D\u7F6E\u81EA\u5B9A\u4E49\u56FE\u4F8B \u914D\u7F6E

- background:{        // \u80CC\u666F\u6846
    padding
    style
  }
- title:{         // \u56FE\u4F8B\u4E0A\u9762\u7684\u6807\u9898
     title
     spacing     //\u6807\u9898\u540C\u56FE\u4F8B\u9879\u7684\u95F4\u8DDD
     style:{

     }
  }
}

 // \u5F53\u906E\u6321label\u7684\u65F6\u5019 \u52A0padding
$ label:{          //  \u6BCF\u4E2A\u77E9\u5F62 \u4E0A\u8FB9\u7684 \u6570\u636E\u63CF\u8FF0
  offsetX
  offsetY
  position
  style:{fill:"red"}
  formatter

  labelLine        // \u8FDE\u63A5\u7EBF
  content
}


$ tooltip: {   // \u5F53hover\u7684\u65F6\u5019 \u663E\u793A\u7684\u6570\u636E\u6846
   fields:['x','y']             // \u663E\u793A\u7684\u5B57\u6BB5
   formatter:(text)=>{
     return {
       name:"",
       value:""
     }
   }
   showTitle                   // \u662F\u5426\u663E\u793A\u6807\u9898
   title                       // \u81EA\u5B9A\u4E49\u6807\u9898
   position
   showContent  // \u662F\u5426\u5C55\u793A tooltip\u5185\u5BB9\u5E93
   showMarkers  // \u662F\u5426\u5C55\u793A \u6BCF\u4E2A\u6811\u72B6\u56FE\u4E0A\u7684 \u6570\u503C\u4F4D\u7F6E\u7684\u5C0F\u56FE\u6807
   marker:{     // \u914D\u7F6E showMarkers \u7684\u56FE\u6807
         symbol:'square',
         style
   },
   customItems:(originItem)=> return originItem
   // \u81EA\u5B9A\u4E49\u5904\u7406
    customContent: (title, data) => {  // \u81EA\u5B9A\u4E49\u6A21\u677F
      return \`<div>\${title}</div>\`;
    };
 }
//  annotations:{
//     value:[
//        { \u914D\u7F6E\u5185\u5BB9 }
//       ]
//    }

$ annotations:[        // \u8F85\u52A9\u7EBF
  {
  type:"text line region"    //
  // text line
  // region \u6846\u4E00\u4E2A\u70ED\u533A
  // regionFilter \u5BF9\u4E00\u4E2A\u533A\u57DF\u7684\u56FE\u5F62\u91CD\u65B0\u7740\u8272 \u914D\u5408color\u4E0A\u8272

  // min max median start end
  start:[x,y]
  end:[x,y],
  position:[start,end]
  top:false            // \u5C42\u53E0\u6027 \u662F\u5426\u53EF\u88AB\u906E\u6321
  offsetX
  offsetY

  color:               // \u914D\u5408 regionFilter \u7C7B\u578B\u4F7F\u7528

  content:''            // \u6587\u672C\u5185\u5BB9 \u7528\u4E8Etext
  maxLength             // \u6587\u672C\u6700\u5927\u957F\u5EA6
  background:{
    style,
    padding
  }
  isVertical            // \u6587\u672C\u5728x\u8F74\u8FD8\u662FY\u8F74\u663E\u793A
  autoEllipsis
  ellipsisPosition      // \u6587\u672C\u622A\u65AD\u7684\u4F4D\u7F6E
}

$ geometryOptions:[

]
  }]


$  meta:{                        // \u5143\u4FE1\u606F
    alias:""                    // \u5B57\u6BB5\u522B\u540D
    formatter:(){}              // \u5BF9\u5B57\u6BB5\u6240\u6709\u503C\u8FDB\u884C\u683C\u5F0F\u5316
    values:string[]             // \u679A\u4E3E\u8BE5\u5B57\u6BB5\u4E0B\u6240\u6709\u503C
    range:number[]
  }


  // hover\u7684\u6548\u679C default inactive selected
$   interactions: [{ type: 'element-active' }],
$   state:{   // \u8BBE\u7F6E\u6FC0\u6D3B\u65F6\u7684\u6837\u5F0F
     active:{
      animate: { duration: 100, easing: 'easeLinear' },
      style: {
        lineWidth: 2,
        stroke: '#000',
      },
     }
   }
}`,lang:"js"}),e.a.createElement(a.a,null,e.a.createElement("thead",null,e.a.createElement("tr",null,e.a.createElement("th",null,"columnStyle \u5C5E\u6027"),e.a.createElement("th",null,"\u7C7B\u578B"),e.a.createElement("th",null,"\u63CF\u8FF0"))),e.a.createElement("tbody",null,e.a.createElement("tr",null,e.a.createElement("td",null,"fill"),e.a.createElement("td",null,e.a.createElement("em",null,"string")),e.a.createElement("td",null,"\u56FE\u5F62\u7684\u586B\u5145\u8272")),e.a.createElement("tr",null,e.a.createElement("td",null,"r"),e.a.createElement("td",null,e.a.createElement("em",null,"number")),e.a.createElement("td",null,"\u7528\u4E8E ",e.a.createElement("code",null,"point"),", \u4EE3\u8868\u56FE\u5F62\u7684\u534A\u5F84\u5927\u5C0F")),e.a.createElement("tr",null,e.a.createElement("td",null,"fillOpacity"),e.a.createElement("td",null,e.a.createElement("em",null,"number")),e.a.createElement("td",null,"\u56FE\u5F62\u7684\u586B\u5145\u900F\u660E\u5EA6")),e.a.createElement("tr",null,e.a.createElement("td",null,"stroke"),e.a.createElement("td",null,e.a.createElement("em",null,"string")),e.a.createElement("td",null,"\u56FE\u5F62\u7684\u63CF\u8FB9")),e.a.createElement("tr",null,e.a.createElement("td",null,"lineWidth"),e.a.createElement("td",null,e.a.createElement("em",null,"number")),e.a.createElement("td",null,"\u56FE\u5F62\u63CF\u8FB9\u7684\u5BBD\u5EA6")),e.a.createElement("tr",null,e.a.createElement("td",null,"lineDash"),e.a.createElement("td",null,"[number,number]"),e.a.createElement("td",null,"\u63CF\u8FB9\u7684\u865A\u7EBF\u914D\u7F6E\uFF0C\u7B2C\u4E00\u4E2A\u503C\u4E3A\u865A\u7EBF\u6BCF\u4E2A\u5206\u6BB5\u7684\u957F\u5EA6\uFF0C\u7B2C\u4E8C\u4E2A\u503C\u4E3A\u5206\u6BB5\u95F4\u9694\u7684\u8DDD\u79BB\u3002lineDash \u8BBE\u4E3A[0,0]\u7684\u6548\u679C\u4E3A\u6CA1\u6709\u63CF\u8FB9\u3002")),e.a.createElement("tr",null,e.a.createElement("td",null,"lineOpacity"),e.a.createElement("td",null,e.a.createElement("em",null,"number")),e.a.createElement("td",null,"\u63CF\u8FB9\u900F\u660E\u5EA6")),e.a.createElement("tr",null,e.a.createElement("td",null,"opacity"),e.a.createElement("td",null,e.a.createElement("em",null,"number")),e.a.createElement("td",null,"\u56FE\u5F62\u7684\u6574\u4F53\u900F\u660E\u5EA6")),e.a.createElement("tr",null,e.a.createElement("td",null,"shadowColor"),e.a.createElement("td",null,e.a.createElement("em",null,"string")),e.a.createElement("td",null,"\u56FE\u5F62\u9634\u5F71\u989C\u8272")),e.a.createElement("tr",null,e.a.createElement("td",null,"strokeOpacity"),e.a.createElement("td",null,e.a.createElement("em",null,"number")),e.a.createElement("td",null,"\u56FE\u5F62\u8FB9\u6846\u900F\u660E\u5EA6")),e.a.createElement("tr",null,e.a.createElement("td",null,"shadowBlur"),e.a.createElement("td",null,e.a.createElement("em",null,"number")),e.a.createElement("td",null,"\u56FE\u5F62\u9634\u5F71\u7684\u9AD8\u65AF\u6A21\u7CCA\u7CFB\u6570")),e.a.createElement("tr",null,e.a.createElement("td",null,"shadowOffsetX"),e.a.createElement("td",null,e.a.createElement("em",null,"number")),e.a.createElement("td",null,"\u8BBE\u7F6E\u9634\u5F71\u8DDD\u56FE\u5F62\u7684\u6C34\u5E73\u8DDD\u79BB")),e.a.createElement("tr",null,e.a.createElement("td",null,"shadowOffsetY"),e.a.createElement("td",null,e.a.createElement("em",null,"number")),e.a.createElement("td",null,"\u8BBE\u7F6E\u9634\u5F71\u8DDD\u56FE\u5F62\u7684\u5782\u76F4\u8DDD\u79BB")),e.a.createElement("tr",null,e.a.createElement("td",null,"cursor"),e.a.createElement("td",null,e.a.createElement("em",null,"string")),e.a.createElement("td",null,"\u9F20\u6807\u6837\u5F0F\u3002\u540C css \u7684\u9F20\u6807\u6837\u5F0F\uFF0C\u9ED8\u8BA4 'default'\u3002")),e.a.createElement("tr",null,e.a.createElement("td",null),e.a.createElement("td",null),e.a.createElement("td",null)))),e.a.createElement("h3",{id:"\u6298\u7EBF\u56FE"},e.a.createElement(n.AnchorLink,{to:"#\u6298\u7EBF\u56FE","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u6298\u7EBF\u56FE"),e.a.createElement(t.a,{code:`{
  width:400
  height:400
  minColumnWidth: 2,         // \u6700\u5927 \u6700\u5C0F\u5BBD\u5EA6
  maxColumnWidth: 2,
  data:[{}]                   // \u6570\u636E
  xField: string              // x\u8F74 \u5BF9\u5E94\u7684\u5B57\u6BB5
  yField: string              // y\u8F74 \u5BF9\u5E94\u7684\u5B57\u6BB5
  seriesField:"key"           // \u5206\u7EC4\u6570\u636E \u5728\u6570\u636E\u4E2D\u52A0\u4E00\u4E2Akey
  // \u4F8B\u5982 data:[{key:"series1"},{key:"series2"}]
  meta:{                      // \u5168\u5C40\u5143\u4FE1\u606F
    alias:string              // \u5B57\u6BB5\u522B\u540D
    formatter:()=>{}
    values:string[]           // \u679A\u4E3E\u8BE5\u5B57\u6BB5\u4E0B\u6240\u6709\u503C
    range:number[]            // \u5B57\u6BB5\u7684\u6570\u636E\u6620\u5C04\u533A\u95F4
  }
  color: srting string[]      // \u7EBF\u7684\u989C\u8272
  lineStyle:{
    //\u8FD9\u91CC\u5199\u7ED8\u56FE\u5C5E\u6027 \u5982\u679C\u662F \u6298\u7EBF\u56FE\u5C31\u662F lineStyle
  },
  point:{          // \u8FD9\u91CC\u5199\u70B9\u7684\u6837\u5F0F
    color:string,string[],
    shape:custom-shape|custom-shape|breath-point|circle|
      square|circle
    size:number
    style:object,
  }
   state:{                  //\u64CD\u4F5C\u65F6\u5019\u70B9\u7684\u6837\u5F0F
      active:{
        style:{}
      },
      default | inactive | selected
    }
  tooltip:{                       // \u7EC4\u4EF6
    follow: true                 // \u662F\u5426\u8DDF\u968F\u9F20\u6807\u79FB\u52A8
    enterable: false              // \u662F\u5426\u5141\u8BB8\u9F20\u6807\u6ED1\u5165
    marker: {
          symbol: "square",
          style: (item) => ({
            ...item,
            fill: item.stroke,
            innerWidth: 15
          })
        },
  }
  xAxis:{
    false   //\u9690\u85CF\u5750\u6807\u8F74
    position: top|botton|left|right  // \u5750\u6807\u8F74\u4F4D\u7F6E
    title:{                       // \u6807\u9898\u7684\u914D\u7F6E\u9879 null
      text:""                      // \u5750\u6807\u8F74\u4E0B\u65B9\u5927\u6807\u9898
      offset:number
      spacing:number
      style:\u7ED8\u56FE\u5C5E\u6027 shape
      autoRotate:\u662F\u5426\u81EA\u52A8\u65CB\u8F6C
    },
    grid: {  // \u7F51\u683C\u7684\u5E95\u8272
            line: {
              style: {
                stroke: 'rgba(255,255,255,.1)'
              }
            }
          }
    line                               // \u7F51\u683C\u7EBF
    label:{        //x\u8F74\u7684\u6587\u5B57
      offset: 56,  // \u8DDD\u79BB\u5750\u6807\u8F74\u8DDD\u79BB
      style:{
        fontSize:20
      }
     formatter: (text) => {
            let time = momnet(text).format('hh:mm');
            return time;
          },
    }
  },
  yAxis:{

  },
  label:{}                     // \u7ED8\u56FE\u7684\u6587\u672Cstyle
  legend:boolean | object {           // \u56FE\u4F8B

  },
   annotations={{
        value: [
          {
            type: "line",
            start: ['0%', 50],
            end: ['100%', 50],
            style: {
              lineWidth: 1,
              stroke: '#F4664A',
              lineDash: [3, 3],
            },
            {
               type: 'regionFilter',
               start: ['min', min],
               end: ['max', 'max'],
               color: '#ff3c03ff',
            },

          }
        ]
      }}
  smooth:boolean              // \u66F2\u7EBF\u662F\u5426\u5E73\u6ED1
  stepType:hv | vh | hvh | vhv   // \u9636\u68AF\u6298\u7EBF\u56FE\u7C7B\u578B
  isStack:boolean               // \u5F53\u5B57\u6BB5\u5206\u7EC4 \u8BA9\u6298\u7EBF\u5806\u53E0
  antoFit:true|false          // \u662F\u5426\u81EA\u9002\u5E94
  padding:[0,0,0,0] | "auto"  // \u753B\u5E03\u7684padding
appendPadding number[]| number // \u5728padding \u57FA\u7840\u4E0A \u7EE7\u7EED\u52A0padding
  renderer:"canvas" | "svg"       // \u8BBE\u7F6E\u6E32\u67D3\u65B9\u5F0F
}`,lang:"js"}),e.a.createElement("h3",{id:"\u6761\u5F62\u56FE"},e.a.createElement(n.AnchorLink,{to:"#\u6761\u5F62\u56FE","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u6761\u5F62\u56FE"),e.a.createElement(t.a,{code:`barWidthRatio={0.3} \u6BCF\u4E2A\u56FE\u7684\u5BBD\u5EA6
 label={null}       \u6BCF\u4E2A\u56FE\u4E0A\u9762\u7684\u6587\u5B57`,lang:"unknown"}),e.a.createElement("h3",{id:"\u997C\u56FE"},e.a.createElement(n.AnchorLink,{to:"#\u997C\u56FE","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u997C\u56FE"),e.a.createElement("h3",{id:"\u9762\u79EF\u56FE"},e.a.createElement(n.AnchorLink,{to:"#\u9762\u79EF\u56FE","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u9762\u79EF\u56FE"),e.a.createElement("h3",{id:"\u53CC\u8F74\u56FE"},e.a.createElement(n.AnchorLink,{to:"#\u53CC\u8F74\u56FE","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u53CC\u8F74\u56FE"),e.a.createElement(t.a,{code:`# \u81EA\u5B9A\u4E49\u989C\u8272
    data: [cokeAndFuelList, burnList],
    xField="time"
    yField={['value', 'count']}
    geometryOptions={[
        {
          geometry: 'line',
          lineStyle: { lineWidth: 2 },
          color: "#FFC100"
        },
        {//\u4E3A\u67F1\u72B6\u56FE\u6DFB\u52A0\u989C\u8272 \u9700\u8981\u5148\u62C6\u5F00\u5B57\u6BB5 colorField
          geometry: 'column',
          color: '#FFC100',
          colorField: "time",
          color: (a) => {
            let color =
              timeFilter.indexOf(a.time) > -1
                ? 'l(0) 0:#007785 1:#00FFF9'
                : 'l(0) 0:#6C000C 1:#FF3C03';
            return color;
          }
        },
    ]},
    yAxis: {
      value:{
        ...
      },
      number:{
        min: findMaxNum(cokeAndFuelList, 'number').min,
        max: findMaxNum(cokeAndFuelList, 'number').max,
      }
    }


  export function findMaxNum(val, type) {
  let number = [];
  val.map((res) => {
    if (typeof res[type] === 'number') number.push(res[type]);
  });
  let max = Math.max(...number) * 1.1;
  let min = Math.min(...number) * 0.9;
  return {
    min: min,
    max: max,
  };
}`,lang:"js"}),e.a.createElement("h3",{id:"\u533A\u57DF\u5730\u56FE"},e.a.createElement(n.AnchorLink,{to:"#\u533A\u57DF\u5730\u56FE","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u533A\u57DF\u5730\u56FE"),e.a.createElement(t.a,{code:`#
  source:{
    data:data,
    parser: {
        type: 'geojson',
    },
  },

< AreaMap/>
{
  // \u662F\u5426\u5F00\u542F\u6297\u952F\u9F7F
  antialias: boolean[true],
  // \u662F\u5426\u4FDD\u7559\u7F13\u51B2\u533A\u6570\u636E
  preserveDrawingBuffer: boolean[false],
  // \u663E\u793A\u4E2D\u56FD\u56FD\u754C\u7EBF
  chinaBorder: boolean[true],
  // \u662F\u5426\u5F00\u542F \u591A\u9009\u4EA4\u4E92
  enabledMultiSelect: boolean[false],

  // \u662F\u5426\u663E\u793A logo
  logo: boolean[true],
  // \u521D\u59CB\u5316 \u662F\u5426\u81EA\u52A8\u7F29\u653E\u5230\u56FE\u5C42\u6570\u636E\u8FB9\u754C\u8303\u56F4
  autoFit: boolean[false],

  width:number | null,
  height:number | null,
  style:{ \u7ED8\u56FE\u5C5E\u6027 }
$ source:{
    data:data,
    parser: {
        type: 'geojson',
    },
  },
$ color:{ // color:red \u80CC\u666F\u8272
    field:'\u5B57\u6BB5\u540D',
    // \u989C\u8272\u6570\u7EC4
    value: string[] | ({ \u5B57\u6BB5\u540D }) => { return \u5B57\u6BB5\u540D} ,
/* \u989C\u8272\u6548\u679C
linear:\u7EBF\u6027 power:\u6307\u6570 log:\u5BF9\u6570 quantile:\u7B49\u5206\u4F4D
quantize:\u7B49\u95F4\u8DDD cat:\u679A\u4E3E
*/
    scale: {
        type: 'quantile',
    },
  }

$ map: { // \u5730\u56FE\u7684\u57FA\u672C\u914D\u7F6E
    type: 'amap' | 'mapbox',
    token: '8dec1a9e7c97b30691b132b24b5f6325',
    // \u521D\u59CB\u7ECF\u7EAC\u5EA6
    center: [0,0],
    // \u521D\u59CB\u503E\u659C\u89D2
    pitch: number,
    // \u521D\u59CB\u65CB\u8F6C\u89D2\u5EA6
    rotation: number,
    // \u521D\u59CB\u7F29\u653E\u5C42\u7EA7 \u9AD8\u5FB7:2-19 Mapbox: 0-24
    zoom: number,
    minZoom: number,
    maxZoom: number,
    style: 'dark' 'light' 'normal' 'blank'
  }
// \u5730\u56FE\u4E0A \u663E\u793A\u7684\u6587\u5B57 (\u4F8B\u5982 '\u6D59\u6C5F\u7701')
$ label: {
    visible: true,
    field: 'name',
    content: '',
    style: {

    },
    active:{color:'red'},
    select:{color:'red'}
  },
$ tooltip: { items:['\u5B57\u6BB51','\u5B57\u6BB52'] },
$ legend: {...}

$ zoom: {  // \u653E\u5927\u7F29\u5C0F\u63A7\u4EF6
    position: 'topright' 'topleft' 'bottomright' 'bottomleft',
    zoomInText: '\u653E\u5927\u6309\u94AE\u6587\u672C',
    zoomInTitle: '\u653E\u5927\u6309\u94AE\u540D\u79F0',
    zoomOutText: '\u7F29\u5C0F\u6309\u94AE\u6587\u672C',
    zoomOutTitle: '\u7F29\u5C0F\u6309\u94AE\u540D\u79F0'
 }
$ scale: {  // \u6BD4\u4F8B\u5C3A \u63A7\u4EF6
   position: 'topright' 'topleft' 'bottomright' 'bottomleft',
   maxWidth: number,
   // \u5730\u56FE\u79FB\u52A8\u4E2D\u662F\u5426\u66F4\u65B0\u6BD4\u4F8B\u5C3A
   updateWhenIdle: boolean[false],
   // \u662F\u5426\u663E\u793A\u516C\u5236\u523B\u5EA6\u7EBF\uFF08m/km) \u82F1\u5236\u523B\u5EA6\u7EBF
   metric: boolean,
 }
$ layerMenu: {  // \u5730\u56FE\u56FE\u5C42\u5217\u8868\u63A7\u4EF6 }

$ state:{ // \u4EA4\u4E92\u53CD\u9988\u6548\u679C
    active: { // active: true
      ... \u7ED8\u56FE\u5C5E\u6027
      color: 'red'
    },
    select: {
      ... \u7ED8\u56FE\u5C5E\u6027,
      color: 'red'
    }
  }

}`,lang:"js"}),e.a.createElement("h3",{id:"\u884C\u653F\u533A\u57DF\u5730\u56FE"},e.a.createElement(n.AnchorLink,{to:"#\u884C\u653F\u533A\u57DF\u5730\u56FE","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u884C\u653F\u533A\u57DF\u5730\u56FE"),e.a.createElement(t.a,{code:`// \u4E0E\u533A\u57DF\u5730\u56FE\u7C7B\u4F3C
<ChoroplethMap
 $ source: {
      data: [],
/* \u5730\u56FE\u5143\u6570\u636E\u5173\u8054
sourceField \u4E1A\u52A1\u5143\u6570\u636E\u5730\u7406\u5B57\u6BB5
geoField    \u5730\u7406\u6570\u636E\u5B57\u6BB5
geoData     \u8BBE\u7F6E\u5219\u8986\u76D6\u5F53\u524D\u5C42\u7EA7\u884C\u653F\u5730\u5740\u6570\u636E
*/
      joinBy: {
        sourceField: 'code',
        geoField: 'adcode',
      },
    },
/* \u884C\u653F\u7EA7\u522B \u884C\u653F\u540D\u79F0 \u94BB\u53D6\u4E0B\u7EA7\u522Blevel
level: 'world'\uFF5C'country'\uFF5C'province'\uFF5C'city'\uFF5C'district'
adcode:
granularity: 'country'\uFF5C'province'\uFF5C'city'\uFF5C'district'
\u4E16\u754C\u5730\u56FE                 level: 'world', adcode: 'all'
\u4E2D\u56FD\u5730\u56FE(\u663E\u793A\u7701\u4EFDlable)   level: 'country', adcode: 100000,
\u4E2D\u56FD\u5730\u56FE\u5E02\u7EA7 level: 'country',adcode: 100000,granularity: 'city'
\u6D59\u6C5F\u7701\u5730\u56FE               level: 'province', adcode: 330000,
\u6D59\u6C5F\u53BF\u7EA7 level:'province',adcode:330000,granularity: 'district'
\u676D\u5DDE\u5730\u56FE                level: 'city',adcode: 330100
\u897F\u6E56\u533A\u5730\u56FE              level: 'district', adcode: 330106,
*/
 $ viewLevel: {
      level: 'world',
      adcode: 'all',
      granularity: ...
    },

 $ drill: {
     // \u662F\u5426\u542F\u52A8\u533A\u57DF\u94BB\u53D6
     enabled: boolean[true],
     // \u4E0A\u94BB\u53D6 \u4E0B\u94BB\u53D6 \u89E6\u53D1\u4E8B\u4EF6\u7684\u65B9\u5F0F
     triggerUp: 'unclick' 'undblclick' 'uncontextmenu',
     triggerDown: 'unclick' 'undblclick' 'uncontextmenu',

     // \u4E0A\u94BB\u4E8B\u4EF6\u56DE\u8C03 \u5F02\u6B65\u8BF7\u6C42\u4E0A\u94BB\u7684\u6570\u636E
     onUp: (form,to,callback)=>{
       const { level, adcode, granularity } = to
       callback(
         {
           source: { data: [],
           joinBy: { sourceField: 'code' }
          }
        })
     },
     // \u4E0B\u94BB\u62E6\u622A \u5982\u679C\u662F\u6D59\u6C5F\u7701 \u5C31\u70B9\u4E0D\u4E86
     onDown: (form,to,callback)=>{
       const { adcode, level, granularity } = to
       if (adcode === 330000) {
          return;
        }
       if (granularity === 'city') {
          callback({source: { data:[] } })
       } else if (granularity === 'district'){
          callback({source: { data:[] } })
       }
     },
     steps:[
       {
         color: string object function,
         style: object,
         // \u70B9\u51FB\u53CD\u9988
         state: object,
         tooltip: 'province' 'city' 'district',
         // \u5F53\u524D\u6587\u672C
         label: 'parvince' 'city' 'district',

         level:"country" "province" "city" "district",
         granularity: 'province' 'city' 'district',
         source: { data:xxx },

       },
         ...
     ]
   }`,lang:"js"}),e.a.createElement("h3",{id:"\u6563\u70B9\u5730\u56FE"},e.a.createElement(n.AnchorLink,{to:"#\u6563\u70B9\u5730\u56FE","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u6563\u70B9\u5730\u56FE"),e.a.createElement(t.a,{code:`csv \u4EE5\u9017\u53F7\u5206\u9694\u7684\u6570\u636E
geojson \u6709\u5C42\u7EA7\u7684json
json \u5E73\u7EA7\u7684json
<DotMap
  source: {
      data: data,
      parser: {
        type: 'json csv geojson',
        // x y x1 y1 \u662F\u67D0\u4E00\u9879\u6570\u636E\u7684\u6620\u5C04 \u53EF\u4EE5\u5728 shape \u4E2D\u4F7F\u7528
        x: 'Longitude',
        y: 'Latitude',
        // \u6620\u5C04 type:json \u7684 coordinates \u5B57\u6BB5
        coordinates: 'coordinates',
      },
    },
/*  shape: 'dot'
shape:'data\u4E2D\u7684\u5B57\u6BB5'   \u8FD9\u4E2A\u5B57\u6BB5\u662F\u56FE\u5F62\u7684\u540D\u79F0 \u4F8B\u5982 circle
*/
   shape: {
      field: 'typecode',
      value: ({ typecode }) => typecode,
      // linear power log quantile quantize cat
      scale: {type: 'quantile'}
    },
/>`,lang:"js"}),e.a.createElement("h3",{id:"\u70ED\u529B\u5730\u56FE"},e.a.createElement(n.AnchorLink,{to:"#\u70ED\u529B\u5730\u56FE","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u70ED\u529B\u5730\u56FE"),e.a.createElement("h4",{id:"\u70B9\u70ED\u529B\u56FE"},e.a.createElement(n.AnchorLink,{to:"#\u70B9\u70ED\u529B\u56FE","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u70B9\u70ED\u529B\u56FE"),e.a.createElement(t.a,{code:`<HeatMap
  style: {
    // \u6BCF\u4E00\u4E2A\u9636\u6BB5\u7684\u989C\u8272 positon: 0-100
    colorsRamp: [
      {color:'',position:0 },
      ...
    ]
  }
  // \u5F00\u542F 3d
  shape: 'heatmap3D',
  size: {
      field: 'avg',
      value: ({ avg }) => avg / 100,
    },
/>`,lang:"js"}),e.a.createElement("h4",{id:"\u7F51\u683C\u805A\u5408\u56FE"},e.a.createElement(n.AnchorLink,{to:"#\u7F51\u683C\u805A\u5408\u56FE","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u7F51\u683C\u805A\u5408\u56FE"),e.a.createElement(t.a,{code:`<GridMap
  source{
    ...,
    // \u751F\u6210\u65B9\u683C\u7F51\u683C\u5E03\u5C40
    aggregation: {
        field: 'count',
        // \u7F51\u683C\u534A\u5F84
        radius: 1000,
        type: 'count max min sum mean',
    },
  },
  style: {
    coverage: 0.9,
    angle: 0,
    opacity: 1.0,
  }
/>`,lang:"js"}),e.a.createElement("h3",{id:"\u8702\u7A9D\u805A\u5408\u56FE"},e.a.createElement(n.AnchorLink,{to:"#\u8702\u7A9D\u805A\u5408\u56FE","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u8702\u7A9D\u805A\u5408\u56FE"),e.a.createElement(t.a,{code:"shape: 'hexagonColumn',",lang:"js"}),e.a.createElement("h2",{id:"7-\u7ED8\u56FE\u5C5E\u6027"},e.a.createElement(n.AnchorLink,{to:"#7-\u7ED8\u56FE\u5C5E\u6027","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"7. \u7ED8\u56FE\u5C5E\u6027"),e.a.createElement("h3",{id:"shapestyle"},e.a.createElement(n.AnchorLink,{to:"#shapestyle","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"shapeStyle"),e.a.createElement(a.a,null,e.a.createElement("thead",null,e.a.createElement("tr",null,e.a.createElement("th",null,"\u5C5E\u6027\u540D"),e.a.createElement("th",null,"\u7C7B\u578B"),e.a.createElement("th",null,"\u63CF\u8FF0"))),e.a.createElement("tbody",null,e.a.createElement("tr",null,e.a.createElement("td",null,"fill"),e.a.createElement("td",null,"string"),e.a.createElement("td",null,"\u56FE\u5F62\u7684\u586B\u5145\u8272")),e.a.createElement("tr",null,e.a.createElement("td",null,"fillOpacity"),e.a.createElement("td",null,"number"),e.a.createElement("td",null,"\u56FE\u5F62\u7684\u586B\u5145\u900F\u660E\u5EA6")),e.a.createElement("tr",null,e.a.createElement("td",null,"stroke"),e.a.createElement("td",null,"string"),e.a.createElement("td",null,"\u56FE\u5F62\u7684\u63CF\u8FB9")),e.a.createElement("tr",null,e.a.createElement("td",null,"lineWidth"),e.a.createElement("td",null,"number"),e.a.createElement("td",null,"\u56FE\u5F62\u63CF\u8FB9\u7684\u5BBD\u5EA6")),e.a.createElement("tr",null,e.a.createElement("td",null,"lineDash"),e.a.createElement("td",null,"[number,number]"),e.a.createElement("td",null,"\u63CF\u8FB9\u7684\u865A\u7EBF\u914D\u7F6E\uFF0C\u7B2C\u4E00\u4E2A\u503C\u4E3A\u865A\u7EBF\u6BCF\u4E2A\u5206\u6BB5\u7684\u957F\u5EA6\uFF0C\u7B2C\u4E8C\u4E2A\u503C\u4E3A\u5206\u6BB5\u95F4\u9694\u7684\u8DDD\u79BB\u3002lineDash \u8BBE\u4E3A[0,0]\u7684\u6548\u679C\u4E3A\u6CA1\u6709\u63CF\u8FB9\u3002")),e.a.createElement("tr",null,e.a.createElement("td",null,"lineOpacity"),e.a.createElement("td",null,"number"),e.a.createElement("td",null,"\u63CF\u8FB9\u900F\u660E\u5EA6")),e.a.createElement("tr",null,e.a.createElement("td",null,"opacity"),e.a.createElement("td",null,"number"),e.a.createElement("td",null,"\u56FE\u5F62\u7684\u6574\u4F53\u900F\u660E\u5EA6")),e.a.createElement("tr",null,e.a.createElement("td",null,"shadowColor"),e.a.createElement("td",null,"string"),e.a.createElement("td",null,"\u56FE\u5F62\u9634\u5F71\u989C\u8272")),e.a.createElement("tr",null,e.a.createElement("td",null,"shadowBlur"),e.a.createElement("td",null,"number"),e.a.createElement("td",null,"\u56FE\u5F62\u9634\u5F71\u7684\u9AD8\u65AF\u6A21\u7CCA\u7CFB\u6570")),e.a.createElement("tr",null,e.a.createElement("td",null,"shadowOffsetX"),e.a.createElement("td",null,"number"),e.a.createElement("td",null,"\u8BBE\u7F6E\u9634\u5F71\u8DDD\u56FE\u5F62\u7684\u6C34\u5E73\u8DDD\u79BB")),e.a.createElement("tr",null,e.a.createElement("td",null,"shadowOffsetY"),e.a.createElement("td",null,"number"),e.a.createElement("td",null,"\u8BBE\u7F6E\u9634\u5F71\u8DDD\u56FE\u5F62\u7684\u5782\u76F4\u8DDD\u79BB")),e.a.createElement("tr",null,e.a.createElement("td",null,"cursor"),e.a.createElement("td",null,"string"),e.a.createElement("td",null,"\u9F20\u6807\u6837\u5F0F\u3002\u540C css \u7684\u9F20\u6807\u6837\u5F0F\uFF0C\u9ED8\u8BA4 'default'\u3002")))),e.a.createElement("h3",{id:"linestyle"},e.a.createElement(n.AnchorLink,{to:"#linestyle","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"lineStyle"),e.a.createElement(a.a,null,e.a.createElement("thead",null,e.a.createElement("tr",null,e.a.createElement("th",null,"\u5C5E\u6027\u540D"),e.a.createElement("th",null,"\u7C7B\u578B"),e.a.createElement("th",null,"\u63CF\u8FF0"),e.a.createElement("th",null))),e.a.createElement("tbody",null,e.a.createElement("tr",null,e.a.createElement("td",null,"stroke"),e.a.createElement("td",null,"string"),e.a.createElement("td",null,"\u7EBF\u7684\u989C\u8272"),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"lineWidth"),e.a.createElement("td",null,"number"),e.a.createElement("td",null,"\u7EBF\u5BBD"),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"lineDash"),e.a.createElement("td",null,"[number,number]"),e.a.createElement("td",null,"\u865A\u7EBF\u914D\u7F6E\uFF0C\u7B2C\u4E00\u4E2A\u503C\u4E3A\u865A\u7EBF\u6BCF\u4E2A\u5206\u6BB5\u7684\u957F\u5EA6\uFF0C\u7B2C\u4E8C\u4E2A\u503C\u4E3A\u5206\u6BB5\u95F4\u9694\u7684\u8DDD\u79BB\u3002lineDash \u8BBE\u4E3A[0,0]\u7684\u6548\u679C\u4E3A\u6CA1\u6709\u63CF\u8FB9\u3002"),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"opacity"),e.a.createElement("td",null,"number"),e.a.createElement("td",null,"\u900F\u660E\u5EA6"),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"shadowColor"),e.a.createElement("td",null,"string"),e.a.createElement("td",null,"\u9634\u5F71\u989C\u8272"),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"shadowBlur"),e.a.createElement("td",null,"number"),e.a.createElement("td",null,"\u9AD8\u65AF\u6A21\u7CCA\u7CFB\u6570"),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"shadowOffsetX"),e.a.createElement("td",null,"number"),e.a.createElement("td",null,"\u8BBE\u7F6E\u9634\u5F71\u8DDD\u56FE\u5F62\u7684\u6C34\u5E73\u8DDD\u79BB"),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"shadowOffsetY"),e.a.createElement("td",null,"number"),e.a.createElement("td",null,"\u8BBE\u7F6E\u9634\u5F71\u8DDD\u56FE\u5F62\u7684\u5782\u76F4\u8DDD\u79BB"),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"cursor"),e.a.createElement("td",null,"string"),e.a.createElement("td",null,"\u9F20\u6807\u6837\u5F0F\u3002\u540C css \u7684\u9F20\u6807\u6837\u5F0F,\u9ED8\u8BA4 'default'\u3002"),e.a.createElement("td",null)))),e.a.createElement("h3",{id:"textstyle"},e.a.createElement(n.AnchorLink,{to:"#textstyle","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"textStyle"),e.a.createElement(a.a,null,e.a.createElement("thead",null,e.a.createElement("tr",null,e.a.createElement("th",null,"\u5C5E\u6027\u540D"),e.a.createElement("th",null,"\u7C7B\u578B"),e.a.createElement("th",null,"\u63CF\u8FF0"))),e.a.createElement("tbody",null,e.a.createElement("tr",null,e.a.createElement("td",null,"fontSize"),e.a.createElement("td",null,"number"),e.a.createElement("td",null,"\u6587\u5B57\u5927\u5C0F")),e.a.createElement("tr",null,e.a.createElement("td",null,"fontFamily"),e.a.createElement("td",null,"string"),e.a.createElement("td",null,"\u6587\u5B57\u5B57\u4F53")),e.a.createElement("tr",null,e.a.createElement("td",null,"fontWeight"),e.a.createElement("td",null,"number"),e.a.createElement("td",null,"\u5B57\u4F53\u7C97\u7EC6")),e.a.createElement("tr",null,e.a.createElement("td",null,"lineHeight"),e.a.createElement("td",null,"number"),e.a.createElement("td",null,"\u6587\u5B57\u7684\u884C\u9AD8")),e.a.createElement("tr",null,e.a.createElement("td",null,"textAlign"),e.a.createElement("td",null,"string"),e.a.createElement("td",null,"\u8BBE\u7F6E\u6587\u672C\u5185\u5BB9\u7684\u5F53\u524D\u5BF9\u9F50\u65B9\u5F0F, \u652F\u6301\u7684\u5C5E\u6027\uFF1A",e.a.createElement("code",null,"center"))),e.a.createElement("tr",null,e.a.createElement("td",null,"textBaseline"),e.a.createElement("td",null,"string"),e.a.createElement("td",null,"\u8BBE\u7F6E\u5728\u7ED8\u5236\u6587\u672C\u65F6\u4F7F\u7528\u7684\u5F53\u524D\u6587\u672C\u57FA\u7EBF, \u652F\u6301\u7684\u5C5E\u6027:",e.a.createElement("code",null,"top"))),e.a.createElement("tr",null,e.a.createElement("td",null,"fill"),e.a.createElement("td",null,"string"),e.a.createElement("td",null,"\u6587\u5B57\u7684\u586B\u5145\u8272")),e.a.createElement("tr",null,e.a.createElement("td",null,"fillOpacity"),e.a.createElement("td",null,"number"),e.a.createElement("td",null,"\u6587\u5B57\u7684\u586B\u5145\u900F\u660E\u5EA6")),e.a.createElement("tr",null,e.a.createElement("td",null,"stroke"),e.a.createElement("td",null,"string"),e.a.createElement("td",null,"\u6587\u5B57\u7684\u63CF\u8FB9")),e.a.createElement("tr",null,e.a.createElement("td",null,"lineWidth"),e.a.createElement("td",null,"number"),e.a.createElement("td",null,"\u6587\u5B57\u63CF\u8FB9\u7684\u5BBD\u5EA6")),e.a.createElement("tr",null,e.a.createElement("td",null,"lineDash"),e.a.createElement("td",null,"[number,number]"),e.a.createElement("td",null,"\u63CF\u8FB9\u7684\u865A\u7EBF\u914D\u7F6E\uFF0C\u7B2C\u4E00\u4E2A\u503C\u4E3A\u865A\u7EBF\u6BCF\u4E2A\u5206\u6BB5\u7684\u957F\u5EA6\uFF0C\u7B2C\u4E8C\u4E2A\u503C\u4E3A\u5206\u6BB5\u95F4\u9694\u7684\u8DDD\u79BB\u3002lineDash \u8BBE\u4E3A[0,0]\u7684\u6548\u679C\u4E3A\u6CA1\u6709\u63CF\u8FB9\u3002")),e.a.createElement("tr",null,e.a.createElement("td",null,"lineOpacity"),e.a.createElement("td",null,"number"),e.a.createElement("td",null,"\u63CF\u8FB9\u900F\u660E\u5EA6")),e.a.createElement("tr",null,e.a.createElement("td",null,"opacity"),e.a.createElement("td",null,"number"),e.a.createElement("td",null,"\u6587\u5B57\u7684\u6574\u4F53\u900F\u660E\u5EA6")),e.a.createElement("tr",null,e.a.createElement("td",null,"shadowColor"),e.a.createElement("td",null,"string"),e.a.createElement("td",null,"\u6587\u5B57\u9634\u5F71\u989C\u8272")),e.a.createElement("tr",null,e.a.createElement("td",null,"shadowBlur"),e.a.createElement("td",null,"number"),e.a.createElement("td",null,"\u6587\u5B57\u9634\u5F71\u7684\u9AD8\u65AF\u6A21\u7CCA\u7CFB\u6570")),e.a.createElement("tr",null,e.a.createElement("td",null,"shadowOffsetX"),e.a.createElement("td",null,"number"),e.a.createElement("td",null,"\u8BBE\u7F6E\u9634\u5F71\u8DDD\u6587\u5B57\u7684\u6C34\u5E73\u8DDD\u79BB")),e.a.createElement("tr",null,e.a.createElement("td",null,"shadowOffsetY"),e.a.createElement("td",null,"number"),e.a.createElement("td",null,"\u8BBE\u7F6E\u9634\u5F71\u8DDD\u6587\u5B57\u7684\u5782\u76F4\u8DDD\u79BB")),e.a.createElement("tr",null,e.a.createElement("td",null,"cursor"),e.a.createElement("td",null,"string"),e.a.createElement("td",null,"\u9F20\u6807\u6837\u5F0F\u3002\u540C css \u7684\u9F20\u6807\u6837\u5F0F,\u9ED8\u8BA4 'default'\u3002")))),e.a.createElement("h3",{id:"\u6E10\u53D8"},e.a.createElement(n.AnchorLink,{to:"#\u6E10\u53D8","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u6E10\u53D8"),e.a.createElement(t.a,{code:`# \u7EBF\u6027\u6E10\u53D8
stroke: 'l(0) 0:#ffffff 0.5:#7ec2f3 1:#1890ff';
// L \u8868\u793A\u4F7F\u7528\u7EBF\u6027\u6E10\u53D8
// \u6E10\u53D8\u89D2\u5EA6\u4E3A0
// \u6E10\u53D8\u7684\u8D77\u59CB\u70B9\u989C\u8272 #ffffff
// \u4E2D\u70B9\u7684\u6E10\u53D8\u8272\u4E3A #7ec2f3
// \u7ED3\u675F\u7684\u6E10\u53D8\u8272\u4E3A #1890ff
# \u73AF\u5F62\u6E10\u53D8
fill: 'r(0.5, 0.5, 0.1) 0:#ffffff 1:#1890ff';
// r \u8868\u793A\u4F7F\u7528\u653E\u5C04\u72B6\u6E10\u53D8
// \u534A\u5F84\u4E3A(\u5305\u56F4\u76D2\u5BF9\u89D2\u7EBF\u957F\u5EA6 / 2) \u7684 0.1 \u500D
// \u6E10\u53D8\u7684\u8D77\u59CB\u70B9\u989C\u8272 #ffffff
// \u4E2D\u70B9\u7684\u6E10\u53D8\u8272\u4E3A #7ec2f3
// \u7ED3\u675F\u7684\u6E10\u53D8\u8272\u4E3A #1890ff
             color={(ref) => {
                          let color = '';
                          fuelRatioData.map((res) => {
                            if (res.type == ref.type)
                              color =
                                typeof handleValue(
                                  fDate[res.date]?.headerMap?.[res.dateType],
                                  fDate[res.date]?.headerMap?.rangeMin,
                                  fDate[res.date]?.headerMap?.rangeMax,
                                ) === 'number'
                                  ? 'l(0) 0:#6C000C 1:#FF3C03'
                                  : 'l(0) 0:#007785 1:#00FFF9';
                          });
                          return color;
                        }}`,lang:"js"}),e.a.createElement("h3",{id:"\u7EB9\u7406"},e.a.createElement(n.AnchorLink,{to:"#\u7EB9\u7406","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u7EB9\u7406"),e.a.createElement(t.a,{code:`'p(a)https://xxx',
// p  \u8868\u793A\u4F7F\u7528\u7EB9\u7406
// a: \u8BE5\u6A21\u5F0F\u5728\u6C34\u5E73\u548C\u5782\u76F4\u65B9\u5411\u91CD\u590D
// x: \u8BE5\u6A21\u5F0F\u53EA\u5728\u6C34\u5E73\u65B9\u5411\u91CD\u590D\uFF1B
// y: \u8BE5\u6A21\u5F0F\u53EA\u5728\u5782\u76F4\u65B9\u5411\u91CD\u590D\uFF1B
// n: \u8BE5\u6A21\u5F0F\u53EA\u663E\u793A\u4E00\u6B21\uFF08\u4E0D\u91CD\u590D\uFF09`,lang:"js"}),e.a.createElement("h2",{id:"8-\u5176\u4ED6\u914D\u7F6E"},e.a.createElement(n.AnchorLink,{to:"#8-\u5176\u4ED6\u914D\u7F6E","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"8. \u5176\u4ED6\u914D\u7F6E"),e.a.createElement("h3",{id:"\u4E8B\u4EF6\u76D1\u542C"},e.a.createElement(n.AnchorLink,{to:"#\u4E8B\u4EF6\u76D1\u542C","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u4E8B\u4EF6\u76D1\u542C"),e.a.createElement("h4",{id:"\u7ED1\u5B9A\u4E8B\u4EF6"},e.a.createElement(n.AnchorLink,{to:"#\u7ED1\u5B9A\u4E8B\u4EF6","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u7ED1\u5B9A\u4E8B\u4EF6"),e.a.createElement(t.a,{code:`# \u7ED1\u5B9A\u4E8B\u4EF6
    onReady: (plot) => {
      plot.on('plot:click', (...args) => {
        console.log(...args);
      });
    }
# on once off
plot                 // \u6574\u4E2A\u56FE\u8868\u7684\u8303\u56F4
axis                 // x y \u8F74
axis-line            // x y \u8F74\u7684\u7EBF
axis-label           // x y \u8F74\u7684\u6587\u672C
annotation
legend               // \u56FE\u4F8B
legend-item          // \u56FE\u4F8B\u6BCF\u4E00\u9879
legend-item-name     // \u56FE\u4F8B\u6BCF\u4E00\u9879\u540D\u5B57
label                // \u67F1\u5F62\u56FE \u6BCF\u9879\u7684 label \u4F8B\u5982\u5728\u4E0A\u65B9\u663E\u793A\u661F\u671F\u4E00
slider               // \u6700\u4E0B\u65B9 \u6ED1\u5757
mask                 // mask
tooltip              // tooltip  show hide change click
element              // \u67F1\u5F62\u56FE \u6BCF\u9879\u751F\u6210\u7684 \u957F\u65B9\u5F62\u5143\u7D20
       interval
       line
       area
       point
       polygon
       schema
       path`,lang:"js"}),e.a.createElement("h4",{id:"meta-1"},e.a.createElement(n.AnchorLink,{to:"#meta-1","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Meta"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u5168\u5C40\u914D\u7F6E\u5143\u4FE1\u606F")),e.a.createElement(t.a,{code:`onReady: (plot) => {
      console.log(plot.options.meta);
}
meta: {
      sale: {
        min: 0,
        max: 100,
      },
    }`,lang:"js"}),e.a.createElement("h4",{id:"\u65B9\u6CD5"},e.a.createElement(n.AnchorLink,{to:"#\u65B9\u6CD5","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u65B9\u6CD5"),e.a.createElement(t.a,{code:`import React, { useRef } from 'react';
import { Line } from '@ant-design/charts';

const DemoLine: React.FC = () => {
  const data = [
    {
      year: '1991',
      value: 3,
    },
    {
      year: '1992',
      value: 4,
    },
    {
      year: '1993',
      value: 3.5,
    },
    {
      year: '1994',
      value: 5,
    },
    {
      year: '1995',
      value: 4.9,
    },
  ];

  const config = {
    data,
    height: 300,
    xField: 'year',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
      style: {
        fill: 'white',
        stroke: '#2593fc',
        lineWidth: 2,
      },
    },
  };
  const ref = useRef();

  // \u5BFC\u51FA\u56FE\u7247
  const downloadImage = () => {
    ref.current?.downloadImage();
  };

  // \u83B7\u53D6\u56FE\u8868 base64 \u6570\u636E
  const toDataURL = () => {
    console.log(ref.current?.toDataURL());
  };

  return (
    <div>
      <button type="button" onClick={downloadImage} style={{ marginRight: 24 }}>
        \u5BFC\u51FA\u56FE\u7247
      </button>
      <button type="button" onClick={toDataURL}>
        \u83B7\u53D6\u56FE\u8868\u4FE1\u606F
      </button>
      <Line
        {...config}
        onReady={plot => {
          ref.current = plot;
        }}
      />
    </div>
  );
};

export default DemoLine;`,lang:"js"}),e.a.createElement("h2",{id:"9bug"},e.a.createElement(n.AnchorLink,{to:"#9bug","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"9.bug"),e.a.createElement("h3",{id:"\u81EA\u9002\u5E94-y-\u8F74"},e.a.createElement(n.AnchorLink,{to:"#\u81EA\u9002\u5E94-y-\u8F74","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u81EA\u9002\u5E94 y \u8F74"),e.a.createElement(t.a,{code:"\u81EA\u5DF1\u81EA\u5B9A\u4E49min max",lang:"js"}),e.a.createElement("h3",{id:"\u6A2A\u5750\u6807\u4E71\u5E8F"},e.a.createElement(n.AnchorLink,{to:"#\u6A2A\u5750\u6807\u4E71\u5E8F","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u6A2A\u5750\u6807\u4E71\u5E8F"),e.a.createElement(t.a,{code:`\u81EA\u5B9A\u4E49min max
\u9700\u8981\u5BF9\u65F6\u95F4\u5904\u7406\u6210 g2 \u80FD\u8BC6\u522B\u7684\u65F6\u95F4\u683C\u5F0F
https://g2.antv.vision/zh/docs/manual/tutorial/scale#%E5%BA%A6%E9%87%8F%E5%AE%9A%E4%B9%89`,lang:"js"}),e.a.createElement("h3",{id:"label-\u6EA2\u51FA"},e.a.createElement(n.AnchorLink,{to:"#label-\u6EA2\u51FA","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Label \u6EA2\u51FA"),e.a.createElement(t.a,{code:`appendpadding;
padding;`,lang:"js"}),e.a.createElement("h3",{id:"label-\u91CD\u53E0"},e.a.createElement(n.AnchorLink,{to:"#label-\u91CD\u53E0","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"label \u91CD\u53E0"),e.a.createElement(t.a,{code:`autoRotate;
autoHide;`,lang:"js"}),e.a.createElement("h3",{id:"\u63A7\u5236-x-\u8F74\u5750\u6807\u4E2A\u6570"},e.a.createElement(n.AnchorLink,{to:"#\u63A7\u5236-x-\u8F74\u5750\u6807\u4E2A\u6570","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u63A7\u5236 x \u8F74\u5750\u6807\u4E2A\u6570"),e.a.createElement(t.a,{code:`\u81EA\u5B9A\u4E49tickMethods
       tickCount: 8,
        tickMethod: function tickMethod(_ref) {
          var max = _ref.max;
          var interval = Math.ceil(max / 9);
          return [
            0,
            interval,
            interval * 2,
            interval * 3,
            interval * 4,
            interval * 5,
            interval * 6,
            ~~max,
          ];
        },`,lang:"js"}),e.a.createElement("h3",{id:"\u5B50\u5F39\u56FE\u76EE\u6807\u503C-x-\u8F74\u4F4D\u7F6E\u4E0D\u5BF9"},e.a.createElement(n.AnchorLink,{to:"#\u5B50\u5F39\u56FE\u76EE\u6807\u503C-x-\u8F74\u4F4D\u7F6E\u4E0D\u5BF9","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5B50\u5F39\u56FE\u76EE\u6807\u503C x \u8F74\u4F4D\u7F6E\u4E0D\u5BF9"),e.a.createElement(t.a,{code:`# \u589E\u52A0\u4E00\u4E2A\u65B0\u7684\u76EE\u6807\u503C\u4E3A1000\u7684  \u6216\u66F4\u5927\u7684
\u5F02\u6B65\u52A0\u8F7D\u4F1A\u51FA\u95EE\u9898 \u9700\u8981\u52A0\u4E00\u4E2A\u7A7A\u7684\u76EE\u6807\u503C
let time = {};
  if (data?.length) {
    time = bdata[data.length - 1];
  }
  bDate = [...bdata]
  bDate.push({
    isType: false,
    ...time,
    ranges: [],
    measure: [],
    target: 1000,
  });
# 1000\u8BBE\u7F6E\u6210\u900F\u660E\u8272
        target: (datum) => {
          return {
            stroke:
              datum.target === targetMaxLimit
                ? 'transparent'
                : 'rgba(11, 10, 25, 1)',
            lineWidth: 2.5,
          };`,lang:"js"}),e.a.createElement("h3",{id:"minmax-\u4E0D\u751F\u6548"},e.a.createElement(n.AnchorLink,{to:"#minmax-\u4E0D\u751F\u6548","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"minmax \u4E0D\u751F\u6548"),e.a.createElement(t.a,{code:`# \u4F7F\u7528\u671F\u671B\u51FA\u73B0\u51E0\u6761
        tickCount: 6,
# \u624B\u52A8\u6307\u5B9A
  meta:{
      value:{
        min:100,
        ticks: [0, 20, 50, 100, 150, 300]
      }
    },
}`,lang:"js"}),e.a.createElement("h3",{id:"\u81EA\u5B9A\u4E49\u523B\u5EA6"},e.a.createElement(n.AnchorLink,{to:"#\u81EA\u5B9A\u4E49\u523B\u5EA6","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u81EA\u5B9A\u4E49\u523B\u5EA6"),e.a.createElement(t.a,{code:`// tickMethod: function tickMethod(_ref) {
//   var max = _ref.max;
//   var interval = Math.ceil(max / 6);
//   console.log(_ref);
//   return [
//     0,
//     interval,
//     interval * 2,
//     interval * 3,
//     interval * 4,
//     interval * 5,
//     max.toFixed(0),
//   ];
// },`,lang:"js"}))));c.default=u=>{const i=e.a.useContext(n.context),o=i.demos;return e.a.useEffect(()=>{var r;u!=null&&(r=u.location)!==null&&r!==void 0&&r.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(u.location.hash.slice(1)))},[]),e.a.createElement(E,{demos:o})}}}]);
