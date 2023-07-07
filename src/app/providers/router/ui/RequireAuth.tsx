import { getUserAuthData, UserRole } from "@/entities/User";
import { getUserRole } from "@/entities/User/model/selectors/roleSelectors";
import { ForbiddenPage } from "@/pages/ForbiddenPage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RoutePath } from "@/shared/config/routeConfig/routeConfig";

 interface RequireAuthProps {
    children: JSX.Element 
    roles?: UserRole[]
 }

export function RequireAuth({ children, roles }: RequireAuthProps) {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();
    const userRoles = useSelector(getUserRole);
    const hasRequiredRoles = useMemo(() => {
        if(!roles) {
            return true;
        }
        return userRoles?.some(role => {
            return Boolean(roles.includes(role))
        })
    }, [roles, userRoles])
    console.log('???userRoles', hasRequiredRoles);
    
 
    if (!auth ) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }
    if (!hasRequiredRoles){
        return <Navigate to={RoutePath.forbidden} replace />;
    }
  
    return children;
}