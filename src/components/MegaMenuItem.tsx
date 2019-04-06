import classNames from 'classnames';
import React from 'react';
import { IMegaMenuItem } from '../interfaces';
import MenuPanel from './MegaMenuPanel';
import '../styles/MegaMenuItem.scss';

const MenuItem = (item: IMegaMenuItem & { open?: boolean }) => {
  const { label, ...panelProps } = item;

  return (
    <div className={classNames('megamenu-item', { open: item.open })}>
      <h2 className="megamenu-item-header">
          <a
            aria-expanded={item.open}
            className={classNames('megamenu-item-link', { open: item.open })}
            href={item.href}
            onClick={(e) => e.preventDefault()}
          >
            {label}
          </a>
      </h2>
      <MenuPanel {...panelProps} />
    </div>
  );
}

export default MenuItem;
