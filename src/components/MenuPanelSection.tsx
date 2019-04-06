import React from 'react';
import { IMegaMenuPanelSection } from '../interfaces';
import MenuLink from './MegaMenuLink';

const MenuPanelSection = ({
  description,
  href,
  links,
  title,
}: IMegaMenuPanelSection) => {
  return (
    <>
      <h3>
        <a href={href}>
          {title}
        </a>
      </h3>
      {description && (
        <p>
          {description}
        </p>
      )}
      <ol>
        {links.map(link => (
          <li key={link.text}>
            <MenuLink {...link} />
          </li>
        ))}
      </ol>
    </>
  );
}

export default MenuPanelSection;
