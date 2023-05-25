import React from 'react';

export interface MenuItemProps<T = string> {
  desc: T;
}

function MenuItem<Values = any>(
  props: MenuItemProps<Values>,
): React.ReactElement {
  return <>ss</>;
}

export default MenuItem;
