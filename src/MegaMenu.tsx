import React, { useState } from 'react';
import { IMenuData } from './interfaces';
import MenuItem from './MenuItem';

const MegaMenu = (data: IMenuData) => {
  const { items } = data;
  const [openIndex, setOpenIndex] = useState(-1);
  const toggleOpenIndex = (clickedIndex: number) => {
    if (openIndex === clickedIndex) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(clickedIndex);
    }
  }

  return (
    <nav className="megamenu">
      <button>X</button>
      <ol>
        {items.map((item, index) => (
          <li
            key={item.label}
            onClick={() => toggleOpenIndex(index)}
          >
            <MenuItem
              open={openIndex === index}
              {...item}
            />
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default MegaMenu;
