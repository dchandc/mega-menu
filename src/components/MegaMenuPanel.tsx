import classNames from 'classnames';
import React from 'react';
import { IMegaMenuPanel } from '../interfaces';
import MegaMenuSection from './MegaMenuSection';
import '../styles/MegaMenuPanel.scss';

interface IMegaMenuPanelProps extends IMegaMenuPanel {
  open?: boolean;
}

const MegaMenuPanel: React.FC<IMegaMenuPanelProps> = ({
  href,
  description,
  open,
  sections,
  title
}: IMegaMenuPanelProps) => (
  <div
    aria-expanded={open}
    aria-hidden={!open}
    className={classNames('megamenu-panel', { open: open })}
  >
    <h2>
      <a href={href}>{title}</a>
    </h2>
    {description && <p>{description}</p>}
    <ol>
      {sections.map(section => (
        <li key={section.title}>
          <MegaMenuSection {...section} />
        </li>
      ))}
    </ol>
  </div>
);

export default MegaMenuPanel;
