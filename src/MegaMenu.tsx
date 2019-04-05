import React from 'react';
import { IMenuData } from './interfaces';
import MenuItem from './MenuItem';

const MegaMenu = (data: IMenuData) => {
    const { items } = data;

    return (
        <nav className="megamenu">
            <button>X</button>
            <ol>
                {items.map(item => (
                    <li key={item.label}>
                        <MenuItem {...item} />
                    </li>
                ))}
            </ol>
        </nav>
    )
}

export default MegaMenu;
