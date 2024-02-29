

export enum AppRoutes {
    ABOUT = 'About',
    HOME = 'Home',
    CONTACTS = 'Contacts'
}

export type DynamicRoute = (options?: {
    slug?: string,
}) => string

export const RoutePath: Record<AppRoutes, DynamicRoute> = {
    [AppRoutes.HOME]: (options) => '/',
    [AppRoutes.ABOUT]: (options) => '/about',
    [AppRoutes.CONTACTS]: (options) => '/contacts',
}

export type routesType = {
    path: string;
    label: string;
    icon?: string;
}

export const headerRoutes = (): routesType[] => [
    { path: RoutePath.Home(), label: 'Головна' },
    { path: RoutePath.About(), label: 'Про автора' },
    { path: RoutePath.Contacts(), label: 'Контакти' },
]
