import { RouteInfo } from './navbar.metadata';

export const ROUTES: RouteInfo[] = [
    {
        path: '/home', title: 'HOME', submenu: [], hasSubmenu: false,
    },
    {
        path: '', title: 'GALLERIES', submenu: [
            {
                path: '/animals', title: 'ANIMALS', submenu: [], hasSubmenu: false,
            }
        ], hasSubmenu: true,
    },
    {
        path: '/about', title: 'ABOUT', submenu: [], hasSubmenu: false,
    },
    {
        path: '/contact', title: 'CONTACT', submenu: [], hasSubmenu: false,
    },
];
