import { ElementRef, useImperativeHandle } from 'react';
import { Card } from 'antd';
import React from 'react';

type ChildrenHandle = {
  getData: () => number[];
};

interface ChildrenProps {
  ModalRef: React.RefObject<Partial<HTMLDivElement & ChildrenHandle>>;
}

const Child: React.ForwardRefRenderFunction<
  ChildrenHandle,
  ChildrenProps
> = props => {
  const { ModalRef } = props;
  useImperativeHandle(ModalRef, () => ({
    getData: () => {
      return [1, 2, 3];
    },
  }));
  return <>Children</>;
};
const Children = React.forwardRef(Child);

export default class Father extends React.PureComponent<any, any> {
  private readonly ModalRef = React.createRef<ElementRef<typeof Children>>();
  state = {};
  componentDidMount() {
    console.log(this.ModalRef.current?.getData());
  }

  render() {
    return (
      <>
        <Card style={{ margin: 24 }}>
          <Children ModalRef={this.ModalRef} />
        </Card>
      </>
    );
  }
}
