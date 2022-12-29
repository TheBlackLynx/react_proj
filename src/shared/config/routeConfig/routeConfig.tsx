import { AboutPage } from "pages/About"
import { MainPage } from "pages/Main"
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from "pages/ProfilePage"
import { RouteProps } from "react-router-dom"

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    //last
    NOT_FOUND = 'not_found'
}

export const RoutePath:Record<AppRoutes, string> = {
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.MAIN]: '/',
    [AppRoutes.PROFILE]: '/profile',
    
    //всегда должен последним
    [AppRoutes.NOT_FOUND]: '/*'

}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage />
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />
    },
}
