import React from 'react';
import { IMegaMenuPanelSection } from '../interfaces';
import '../styles/MegaMenuSection.scss';

const MegaMenuPanelSection: React.FC<IMegaMenuPanelSection> = ({
  description,
  href,
  links,
  title,
}: IMegaMenuPanelSection) => {
  return (
    <div className="megamenu-section">
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
            <a className="megamenu-section-link" href={href}>
              {link.text}
            </a>
            {link.hasSeparator && <hr role="separator" />}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default MegaMenuPanelSection;
