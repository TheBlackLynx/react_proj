import { Routes, Route } from "react-router-dom";
import { AboutPage } from 'pages/About'
import { MainPage } from "pages/Main";
import { Suspense, useState } from "react";
import { routeConfig } from "shared/config/routeConfig/routeConfig";
import { PageLoader } from "widgets/PageLoader";

const AppRouter = () => {
    return (
        <>
            
            <Routes>
                {
                    Object.values(routeConfig).map(({path, element}) => (
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

export default AppRouter;