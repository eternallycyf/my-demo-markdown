import React from "react";
import { useRef, useEffect } from "react";

import ReactEChart from "./REcharts";

const option = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  toolbox: {
    show: true,
    top: 20,
    right: 20,
    feature: {
      saveAsImage: {
        name: "岗位认证",
        title: "下载图片",
      },
    },
  },
  legend: {},
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
  ],
  yAxis: [
    {
      type: "value",
    },
  ],
  series: [
    {
      name: "Direct",
      type: "bar",
      emphasis: {
        focus: "series",
      },
      data: [320, 332, 301, 334, 390, 330, 320],
    },
    {
      name: "Email",
      type: "bar",
      stack: "Ad",
      emphasis: {
        focus: "series",
      },
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: "Union Ads",
      type: "bar",
      stack: "Ad",
      emphasis: {
        focus: "series",
      },
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: "Video Ads",
      type: "bar",
      stack: "Ad",
      emphasis: {
        focus: "series",
      },
      data: [150, 232, 201, 154, 190, 330, 410],
    },
    {
      name: "Search Engine",
      type: "bar",
      data: [862, 1018, 964, 1026, 1679, 1600, 1570],
      emphasis: {
        focus: "series",
      },
      markLine: {
        lineStyle: {
          type: "dashed",
        },
        data: [[{ type: "min" }, { type: "max" }]],
      },
    },
    {
      name: "Baidu",
      type: "bar",
      barWidth: 5,
      stack: "Search Engine",
      emphasis: {
        focus: "series",
      },
      data: [620, 732, 701, 734, 1090, 1130, 1120],
    },
    {
      name: "Google",
      type: "bar",
      stack: "Search Engine",
      emphasis: {
        focus: "series",
      },
      data: [120, 132, 101, 134, 290, 230, 220],
    },
    {
      name: "Bing",
      type: "bar",
      stack: "Search Engine",
      emphasis: {
        focus: "series",
      },
      data: [60, 72, 71, 74, 190, 130, 110],
    },
    {
      name: "Others",
      type: "bar",
      stack: "Search Engine",
      emphasis: {
        focus: "series",
      },
      data: [62, 82, 91, 84, 109, 110, 120],
    },
  ],
};

const EchartsReact = () => {
  const echartsRef = useRef<any>(null!);

  useEffect(() => {
    const base64 = echartsRef.current.ref.getDataURL();
    console.log(base64);
  }, []);

  const onChartClick = (params: any) => {
    console.log(params);
  };

  const onChartLegendselectchanged = (params: any) => {
    console.log(params);
  };

  const onEvents = {
    click: onChartClick,
    legendselectchanged: onChartLegendselectchanged,
  };

  return (
    <>
      <ReactEChart
        ref={echartsRef}
        option={option}
        onEvents={onEvents}
      />
    </>
  );
};

export default EchartsReact;
