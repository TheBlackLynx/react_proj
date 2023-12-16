import { Suspense, useEffect } from 'react';
import { classNames } from '@/shared';
import { AppRouter } from './providers/router';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import '@/shared/config/i18n/i18n';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, getUserMounted, userActions } from '@/entities/User';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { useUserActions } from '@/entities/User/model/slice/userSlice';
import { useUserAuthData } from '@/entities/User/model/selectors/getUserAuthData/getUserAuthData';

const App = () => {
    const { theme } = useTheme();
    const { initAuthdata } = useUserActions();
    const userMounted = useSelector(getUserMounted);
    const authData = useUserAuthData();

    useEffect(() => {
        initAuthdata();
    }, []);

    return (
        <>
            {/* <Spinner /> */}
            <div
                className={classNames(
                    'app',
                    { hovered: true, selected: false },
                    [theme],
                )}
            >
                <Suspense fallback="">
                    <Navbar />
                    <div className="content-page">
                        <Sidebar />
                        {userMounted && <AppRouter />}
                    </div>
                </Suspense>
            </div>
        </>
    );
};

export default App;
