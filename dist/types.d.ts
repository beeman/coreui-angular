export declare type CoreUINavItem = {
    label: string;
    link: string | string[];
    type?: string;
    icon?: string;
};
export declare type CoreUIConfig = {
    footer?: CoreUIConfigFooter;
    header?: CoreUIConfigHeader;
    main?: CoreUIConfigMain;
    sidebar?: CoreUIConfigSidebar;
};
export declare type CoreUIConfigFooter = {
    left?: string;
    right?: string;
};
export declare type CoreUIConfigHeader = {
    aside?: boolean;
    nav?: CoreUINavItem[];
};
export declare type CoreUIConfigMain = {
    breadcrumbs?: boolean;
    nav?: CoreUINavItem[] | boolean;
};
export declare type CoreUIConfigSidebar = {
    nav?: CoreUINavItem[];
};
