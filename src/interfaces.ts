export interface IMegaMenuData {
    items: IMegaMenuItem[];
}

export interface IMegaMenuItem extends IMegaMenuPanel {
    label: string;
}

export interface IMegaMenuPanel {
    description?: string;
    href: string;
    sections: IMegaMenuPanelSection[];
    title: string;
}

export interface IMegaMenuPanelSection {
    description?: string;
    href: string;
    links: IMegaMenuLink[];
    title: string;
}

export interface IMegaMenuLink {
    href: string;
    hasSeparator?: boolean;
    text: string;
}
