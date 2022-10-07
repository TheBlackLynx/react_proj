import { AboutPage } from "pages/About"
import { MainPage } from "pages/Main"
import { RouteMatch, RouteProps } from "react-router-dom"

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about'
}

export const RoutePath:Record<AppRoutes, string> = {
    [AppRoutes.ABOUT]: '/',
    [AppRoutes.MAIN]: '/about'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />
    }
}
