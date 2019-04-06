import React from 'react';
import { IMenuPanelSection } from './interfaces';
import MenuLink from './MenuLink';

const MenuPanelSection = ({
  description,
  href,
  links,
  title,
}: IMenuPanelSection) => {
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
