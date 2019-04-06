import classNames from "classnames";
import React from "react";
import { IMenuPanel } from "./interfaces";
import MenuPanelSection from "./MenuPanelSection";

const MenuPanel = ({
  href,
  description,
  open,
  sections,
  title
}: IMenuPanel & { open?: boolean }) => (
  <div
    aria-expanded={open}
    aria-hidden={!open}
    className={classNames({ open: open })}
  >
    <h2>
      <a href={href}>{title}</a>
    </h2>
    {description && <p>{description}</p>}
    <ol>
      {sections.map(section => (
        <li key={section.title}>
          <MenuPanelSection {...section} />
        </li>
      ))}
    </ol>
  </div>
);

export default MenuPanel;
