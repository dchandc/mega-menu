import React, { useEffect, useRef, useState } from 'react';
import { IMegaMenuData } from '../interfaces';
import '../styles/MegaMenu.scss';
import MegaMenuItem from './MegaMenuItem';

const MegaMenu: React.FC<IMegaMenuData> = (data: IMegaMenuData) => {
  const [openIndex, setOpenIndex] = useState(-1);
  const [buttonPressed, setButtonPress] = useState(false);
  const menuRef = useRef(null);
  const { items } = data;

  const itemClickHandler = (index: number) => (e: Event) => {
    e.preventDefault();
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const clickListener = (e: Event) => {
    const menuElement: any = menuRef.current;
    if (menuElement && !menuElement.contains(e.target) && openIndex != -1) {
      setOpenIndex(-1);
    }
  };

  useEffect(() => {
    document.addEventListener('click', clickListener);

    return () => {
      document.removeEventListener('click', clickListener);
    };
  });

  return (
    <nav className="megamenu" role="navigation" ref={menuRef}>
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
          <li key={item.label}>
            <MegaMenuItem
              clickHandler={itemClickHandler(index)}
              open={openIndex === index}
              {...item}
            />
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default MegaMenu;
