import React from 'react';
import { IMenuPanel } from './interfaces';
import MenuPanelSection from './MenuPanelSection';

const MenuPanel = ({
  href,
  description,
  sections,
  title,
}: IMenuPanel) => {

  return (
    <div>
      <h2>
          <a href={href}>
              {title}
          </a>
      </h2>
      {description && (
        <p>
          {description}
        </p>
      )}
      <ol>
        {sections.map(section => (
          <li key={section.title}>
            <MenuPanelSection  {...section} />
          </li>
        ))}
      </ol>
    </div>
  )
}

export default MenuPanel;
