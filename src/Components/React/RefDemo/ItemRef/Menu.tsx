import React, { useImperativeHandle } from 'react';

export interface IMenuProps<T = string> {
  title?: T;
}
export type IMenuRef = {
  handleOpen: <U>(args: U) => void;
};

const InternalMenu: React.ForwardRefRenderFunction<IMenuRef, IMenuProps> = (
  props,
  ref,
) => {
  useImperativeHandle(ref, () => ({
    handleOpen: () => {},
  }));

  return <div>ss</div>;
};

export default InternalMenu;
