import { Routes, Route } from "react-router-dom";
import { memo, Suspense, useMemo } from "react";
import { routeConfig } from "shared/config/routeConfig/routeConfig";
import { PageLoader } from "widgets/PageLoader";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";

const AppRouter = () => {
    const isAuth = useSelector(getUserAuthData);

    const routes = useMemo(() => {
        return Object.values(routeConfig).filter(route => {
            if(route.authOnly && isAuth) {
                return false;
            }
            return true;
        })
    }, [isAuth])
    return (
        <>
            
            <Routes>
                {
                    routes.map(({path, element}) => (
                        <Route 
                            key={path}
                            element={(
                                <Suspense fallback={<PageLoader />}>
                                    <div className="page-wrapper"> 
                                        {element}
                                    </div>
                                </Suspense>
                            )}
                            path={path}
                        />
                    ))}
            </Routes>
           
        </>
    )
}

export default memo(AppRouter);