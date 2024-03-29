import { Routes, Route } from "react-router-dom";
import { memo, Suspense, useCallback, useMemo } from "react";
import { AppRouteProps, AppRoutes, routeConfig } from "shared/config/routeConfig/routeConfig";
import { PageLoader } from "widgets/PageLoader";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { RequireAuth } from "./RequireAuth";

const AppRouter = () => {
    const isAuth = useSelector(getUserAuthData);
    
    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                {route.element}
            </Suspense>
        )
        return (
            <Route
                key={route.path}
                element={route.authOnly ?
                    <RequireAuth roles={route.roles}>
                        {element}
                    </RequireAuth>
                    :
                    element}
                path={route.path}
            />
        )
    }, [])

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>

    )
}

export default memo(AppRouter);