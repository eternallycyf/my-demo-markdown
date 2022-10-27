import { Card } from 'antd';
import React, {
  forwardRef,
  LegacyRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';

type ChildrenHandle = {
  getData: () => number[];
};

interface ChildrenProps {
  ModalRef: React.RefObject<Partial<HTMLDivElement & ChildrenHandle>>;
}

const Child: React.ForwardRefRenderFunction<ChildrenHandle, ChildrenProps> = (
  props,
  ref,
) => {
  const { ModalRef } = props;
  useImperativeHandle(ModalRef, () => ({
    getData: () => [1, 2, 3],
  }));

  return (
    <>
      <div>sss</div>
    </>
  );
};

const Children = forwardRef(Child);

const Father = () => {
  const ModalRef = useRef<React.ElementRef<typeof Children>>(null!);

  useEffect(() => {
    console.log(ModalRef.current.getData());
  }, []);

  return (
    <>
      <Card style={{ margin: 24 }}>
        <Children ModalRef={ModalRef} />
      </Card>
    </>
  );
};

export default Father;
