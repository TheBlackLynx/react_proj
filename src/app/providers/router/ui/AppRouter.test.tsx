import { componentRender } from '@/shared/config/tests/componentRender/componentRender';
import AppRouter from './AppRouter';
import {
    getRouteAbout,
    getRouteAdmin,
    getRouteProfile,
} from '@/shared/const/router';
import { screen } from '@testing-library/dom';
import { UserRole } from '@/entities/User';

describe('app/providers/router/AppRouter', function () {
    test('Page should be rendered', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAbout(),
        });
        const pages = await screen.findByTestId('AboutPage');
        expect(pages).toBeInTheDocument();
    });

    test('Page doesnt found', async () => {
        componentRender(<AppRouter />, {
            route: '/fdfsdfsdfdsf',
        });
        const pages = await screen.findByTestId('NotFoundPage');

        expect(pages).toBeInTheDocument();
    });

    test('UnAuthorizated user redirect to main page', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
        });
        const pages = await screen.findByTestId('Main');
        expect(pages).toBeInTheDocument();
    });

    test('Authorizated user can get access to closed page', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
            initialState: {
                user: {
                    authData: {},
                },
            },
        });
        const pages = await screen.findByTestId('ProfilePage');
        expect(pages).toBeInTheDocument();
    });

    test('Access forbidden', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: {
                    authData: {},
                },
            },
        });
        const pages = await screen.findByTestId('ForbiddenPage');
        expect(pages).toBeInTheDocument();
    });
    test('Access resolved', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: {
                    authData: { roles: [UserRole.ADMIN] },
                },
            },
        });
        const pages = await screen.findByTestId('AdminPanelPage');
        expect(pages).toBeInTheDocument();
    });
});
