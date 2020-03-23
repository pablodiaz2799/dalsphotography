export interface RouteInfo {
    path: string;
    title: string;
    submenu : RouteInfo[];
    hasSubmenu: boolean;
}
