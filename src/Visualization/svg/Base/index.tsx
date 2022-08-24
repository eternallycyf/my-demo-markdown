
const Base: React.FC = () => {
  return (
    <>

      <h2>1. svg容器</h2>
      <svg
        width="20px"
        height="20px"
        // min-x min-y width height
        viewBox="0 0 100% 100%"
        xmlns="http://www.w3.org/2000/svg"
      />
      <h2>2. 共有的API</h2>
      <svg
        width="100px"
        height="100px"
        // min-x min-y width height
        viewBox="0 0 100% 100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0"
          y="0"
          width="100"
          height="100"
          fill="red"
          stroke="blue"
          strokeDasharray="10"
        />
      </svg>
      <h2>4. demo</h2>
      <svg
        width="1000px"
        height="250px"
        // min-x min-y width height
        viewBox="0 0 100% 100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0"
          y="0"
          width="100"
          height="200"
          // 圆角
          rx="15"
          ry="15"
          fill="lavender"
        />
        <circle
          // 圆心横坐标
          cx="220"
          // 圆心纵坐标
          cy="100"
          // 半径
          r="100"
          fill="red"
        />
        <ellipse
          //圆心横坐标
          cx="500"
          //圆心纵坐标
          cy="100"
          //横向半径
          rx="150"
          //纵向半径
          ry="100"
          fill="#f06"
        />
        <line
          // 起点横坐标
          x1="400"
          // 起点纵坐标
          y1="100"
          // 终点横坐标
          x2="100"
          // 终点纵坐标
          y2="0"
          stroke="black"
        />
        <polygon
          // x1,y1,x2,y2,x3,y3 ...
          points="200,10,250,190,160,210"
          stroke="blue"
        />
        <polyline
          // x1,y1,x2,y2,x3,y3 ...
          points="200,10,250,190,160,210"
          stroke="green"
        />
      </svg>
    </>
  );
};

export default Base;
