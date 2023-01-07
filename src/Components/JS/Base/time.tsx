import useDefer from "./useDefer";
import React, { useState } from 'react';

const DATA = Array.from({ length: 300 }, (v, k) => k);

const App = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const defer = useDefer({ maxFrameCount: 300 });

  const handleToogle = () => {
    setVisible(!visible);
  }

  return (
    <div>
      <button onClick={handleToogle}>{visible ? '隐藏' : '展示'}</button>
      {visible && DATA.map((item, index) => {
        return defer(item) ? (
          <div key={index} >
            {item}
          </div>
        ) : null
      })
      }
    </div>
  )
}

export default App;