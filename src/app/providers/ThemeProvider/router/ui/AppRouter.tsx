import { Routes, Route } from "react-router-dom";
import { AboutPage } from 'pages/About'
import { MainPage } from "pages/Main";
import { Suspense, useState } from "react";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
    return (
        <>
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            {
              Object.values(routeConfig).map(({path, element}) => (
                <Route 
                key={path}
                element={(
                  <div className="page-wrapper"> 
                    {element}
                  </div>
                  )}
                path={path}
                />
              ))}
        </Routes>
      </Suspense>
      </>
    )
}

export default AppRouter;