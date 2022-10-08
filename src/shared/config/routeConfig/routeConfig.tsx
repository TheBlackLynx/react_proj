import { AboutPage } from "pages/About"
import { MainPage } from "pages/Main"
import { NotFoundPage } from 'pages/NotFoundPage'
import { RouteMatch, RouteProps } from "react-router-dom"

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    OTHER = 'other'
}

export const RoutePath:Record<AppRoutes, string> = {
    [AppRoutes.ABOUT]: '/',
    [AppRoutes.MAIN]: '/about',
    
    //всегда должен последним
    [AppRoutes.OTHER]: '/*'

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
    [AppRoutes.OTHER]: {
        path: RoutePath.other,
        element: <NotFoundPage />
    },
}
