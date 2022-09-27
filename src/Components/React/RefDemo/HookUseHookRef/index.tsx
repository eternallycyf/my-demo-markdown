import {
  useImperativeHandle,
  useRef,
  useEffect,
  forwardRef,
} from "react";
import { Card } from "antd";
import React from "react";

const Child = (props: any, ModalRef: any) => {
  useImperativeHandle(ModalRef, () => ({
    getData: () => {
      return [1, 2, 3];
    },
  }));

  return (
    <>
      <div ref={ModalRef}>sss</div>
    </>
  );
};

const Children = forwardRef(Child);

const Father = () => {
  const ModalRef = useRef<any>(null);

  useEffect(() => {
    console.log(ModalRef.current.getData());
  }, []);

  return (
    <>
      <Card style={{ margin: 24 }}>
        <Children ref={ModalRef} />
      </Card>
    </>
  );
};

export default Father;
