import { UserRole, getUserRole, useUserAuthData } from '@/entities/User';

import { getRouteForbidden, getRouteMain } from '@/shared/const/router';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

interface RequireAuthProps {
    children: JSX.Element;
    roles?: UserRole[];
}

export function RequireAuth({ children, roles }: RequireAuthProps) {
    const auth = useUserAuthData();
    const location = useLocation();
    const userRoles = useSelector(getUserRole);
    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true;
        }
        return userRoles?.some((role) => {
            return Boolean(roles.includes(role));
        });
    }, [roles, userRoles]);
    console.log('???userRoles', hasRequiredRoles);

    if (!auth) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return (
            <Navigate to={getRouteMain()} state={{ from: location }}
replace />
        );
    }
    if (!hasRequiredRoles) {
        return <Navigate to={getRouteForbidden()} replace />;
    }

    return children;
}
