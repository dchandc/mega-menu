import classNames from 'classnames';
import React from 'react';
import { IMenuItem } from './interfaces';
import MenuPanel from './MenuPanel';

const MenuItem = (item: IMenuItem & { open?: boolean }) => {
  const { label, ...panelProps } = item;

  return (
    <>
      <h2>
          <a
            className={classNames({ open: item.open })}
            href={item.href}
          >
            {label}
          </a>
      </h2>
      <MenuPanel {...panelProps} />
    </>
  );
}

export default MenuItem;
