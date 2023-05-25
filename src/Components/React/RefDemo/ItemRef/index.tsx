import React from 'react';
import InternalMenu, { IMenuProps, IMenuRef } from './Menu';
import MenuItem from './MenuItem';

const MenuComponent = React.forwardRef<IMenuRef, IMenuProps>(InternalMenu) as <
  Values = any
>(
  props: React.PropsWithChildren<IMenuProps<Values>> & {
    ref?: React.Ref<IMenuRef>;
  },
) => React.ReactElement;

type CompoundedComponent = typeof MenuComponent & {
  Item: typeof MenuItem;
};

const Menu = MenuComponent as CompoundedComponent;

Menu.Item = MenuItem;

export default Menu;
