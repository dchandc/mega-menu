import React, { useState } from "react";
import { IMegaMenuData } from "../interfaces";
import "../styles/MegaMenu.scss";
import MenuItem from "./MegaMenuItem";

const MegaMenu = (data: IMegaMenuData) => {
  const { items } = data;
  const [openIndex, setOpenIndex] = useState(-1);
  const [buttonPressed, setButtonPress] = useState(false);

  return (
    <nav className="megamenu" role="navigation">
      <button
        aria-expanded={buttonPressed}
        aria-pressed={buttonPressed}
        className="megamenu-button"
        onClick={() => setButtonPress(!buttonPressed)}
      >
        X
      </button>
      <ol className="megamenu-list">
        {items.map((item, index) => (
          <li key={item.label} onClick={() => setOpenIndex(openIndex === index ? -1 : index)}>
            <MenuItem open={openIndex === index} {...item} />
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default MegaMenu;
