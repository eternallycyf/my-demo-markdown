/* eslint-disable react/jsx-key */
import { useRef } from "react";
import { Card } from "antd";

const MuitipleRef = () => {
  const list = [...Array(8).keys()];
  const inputRef = useRef([]);
  const handler = (idx: number): any => {
    const next = inputRef.current[idx + 1];
    if (next) {
      (next as any).focus();
    }
  };

  return (
    <Card style={{ margin: 24 }}>
      <div className="App">
        <div className="input_boxes">
          {list.map((x) => (
            <div>
              <input
                key={x}
                ref={(el) => ((inputRef as any).current[x] = el)}
                onChange={handler(x)}
                type="number"
                className="otp_box"
              />
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default MuitipleRef;
