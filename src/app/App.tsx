import { Suspense, useEffect } from "react";
import { useTheme } from "./providers";
import { classNames } from "shared";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import "shared/config/i18n/i18n";
import { useDispatch } from "react-redux";
import { userActions } from "entities/User";


const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userActions.initAuthdata)
    }, [dispatch])


    return (
        <>
            {/* <Spinner /> */}
            <div
                className={
                    classNames(
                        "app",
                        { hovered: true, selected: false },
                        [
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
