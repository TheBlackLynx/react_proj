import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { DropDown } from '@/shared/ui/Popups';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User';
import { Avatar } from '@/shared';
import { getRouteAdmin, getRouteProfile } from '@/shared/const/router';

interface AvatarDropDownProps {
    className?: string;
}

export const AvatarDropDown = memo((props: AvatarDropDownProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const isAdminPanelAvailiable = isAdmin || isManager;
    const dispatch = useDispatch();
    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    const authData = useSelector(getUserAuthData);
    return (   
        <DropDown 
            direction='bottom left'
            items={[
                ...(isAdminPanelAvailiable ? [{
                    content: t('Админ панель'),
                    href: getRouteAdmin()
                }] : []),
                {
                    content: t('Профиль'),
                    href: getRouteProfile(authData!.id)
                },
                {
                    content: t('Выйти'),
                    onClick: onLogout
                }
            ]} 
            trigger={<Avatar size={30} src={authData!.avatar} />} />
    );
});