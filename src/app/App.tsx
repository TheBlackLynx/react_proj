import { Routes, Route, Link } from "react-router-dom";
import "./styles/index.scss";
import { Suspense, useState } from "react";
import { useTheme } from "./providers";
import { AboutPage } from "../pages/About";
import { MainPage } from "../pages/Main";
import { classNames } from "shared";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

import "shared/config/i18n/i18n";
import { LangSwitcher } from "widgets/LangSwitcher";


const App = () => {
    const { theme } = useTheme();


    return (
        <>
            <div
                className={classNames("app", { hovered: true, selected: false }, [
                    theme,
                ])}
            >
                <Suspense fallback=''>
                    <Navbar />
                    <div className="content-page">
                        <Sidebar />
                        <AppRouter />
                    </div>
                </Suspense>
            </div>
        </>
    );
};

export default App;
