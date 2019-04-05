export interface IMenuData {
    items: IMenuItem[];
}

export interface IMenuItem extends IMenuPanel {
    label: string;
}

export interface IMenuPanel {
    description?: string;
    href: string;
    sections: IMenuPanelSection[];
    title: string;
}

export interface IMenuPanelSection {
    description?: string;
    href: string;
    links: IMenuLink[];
    title: string;
}

export interface IMenuLink {
    href: string;
    hasSeparator?: boolean;
    text: string;
}
