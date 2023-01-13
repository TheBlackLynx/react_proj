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

type AppRouteProps  = RouteProps & {
    authOnly?: boolean
}

export const RoutePath:Record<AppRoutes, string> = {
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.MAIN]: '/',
    [AppRoutes.PROFILE]: '/profile',
    
    //всегда должен последним
    [AppRoutes.NOT_FOUND]: '/*'

}

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
        authOnly: false
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
        authOnly: false
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage />,
        authOnly: true
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
        authOnly: false
    },
}
