import React from 'react';
import { IMenuItem } from './interfaces';
import MenuPanel from './MenuPanel';

const MenuItem = (item: IMenuItem) => {
  const { label, ...panelProps } = item;

  return (
    <>
      <h2>
          <a href={item.href}>
              {label}
          </a>
      </h2>
      <MenuPanel {...panelProps} />
    </>
  );
}

export default MenuItem;
