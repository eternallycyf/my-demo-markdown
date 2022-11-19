import { useCallback } from 'react';

const myComponent = () => {
  const elemRef = useCallback((node: HTMLDivElement) => {
    if (node !== null) {
      // do stuff here
    }
  }, []);

  return (
    <div id="base-element">
      <div id="element" ref={elemRef}></div>
    </div>
  );
};

export default myComponent;
