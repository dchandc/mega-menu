import classNames from 'classnames';
import React from 'react';
import { IMegaMenuItem } from '../interfaces';
import MegaMenuPanel from './MegaMenuPanel';
import '../styles/MegaMenuItem.scss';

const MegaMenuItem = (
  item: IMegaMenuItem & { clickHandler: any; open?: boolean }
) => {
  const { clickHandler, label, ...panelProps } = item;

  return (
    <div className={classNames('megamenu-item', { open: item.open })}>
      <h2 className="megamenu-item-header">
        <a
          aria-expanded={item.open}
          className={classNames('megamenu-item-link', { open: item.open })}
          href={item.href}
          onClick={clickHandler}
        >
          {label}
        </a>
      </h2>
      <MegaMenuPanel {...panelProps} />
    </div>
  );
};

export default MegaMenuItem;
