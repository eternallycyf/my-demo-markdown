import { useRef, useImperativeHandle, forwardRef } from "react";
import type { EChartsReactProps } from "echarts-for-react/lib/types";
import ReactECharts from "echarts-for-react";

const ReactEChart = (props: EChartsReactProps, echartsRef: any) => {
  const ref = useRef<any>(null!);
  useImperativeHandle(echartsRef, () => ({
    ref: ref.current.getEchartsInstance(),
  }));

  return (
    <div ref={echartsRef}>
      <ReactECharts ref={ref} {...props} />
    </div>
  );
};

export default forwardRef(ReactEChart);
