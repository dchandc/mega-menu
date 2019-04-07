import classNames from 'classnames';
import React from 'react';
import { IMegaMenuItem } from '../interfaces';
import MegaMenuPanel from './MegaMenuPanel';
import '../styles/MegaMenuItem.scss';

interface IMegaMenuItemProps extends IMegaMenuItem {
  clickHandler?: any;
  open?: boolean;
}

const MegaMenuItem: React.FC<IMegaMenuItemProps> = (
  item: IMegaMenuItemProps,
) => {
  const { clickHandler, label, ...panelProps } = item;

  return (
    <div className="megamenu-item">
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
