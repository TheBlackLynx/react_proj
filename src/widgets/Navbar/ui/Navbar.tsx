import { t } from "i18next";
import { AppButton, AppLink, classNames, HStack, Icon } from "@/shared";
import cls from "./Navbar.module.scss";
import { useState, useCallback, memo } from "react";
import { AppButtonTheme } from "@/shared/ui/AppButton/AppButton";
import { LoginModal } from "@/features/AuthByUsername";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from "@/entities/User";
import { Text } from "@/shared";
import { RoutePath } from "@/shared/config/routeConfig/routeConfig";
import { AppLinkTheme } from "@/shared/ui/AppLink/AppLink";
import { TextTheme } from "@/shared/ui/Text/Text";
import { DropDown } from "@/shared/ui/Popups/ui/DropDown/DropDown";
import { Avatar } from "@/shared/ui/Avatar/Avatar";
import { NotificationButton } from "@/features/notificationButton";
import { AvatarDropDown } from "@/features/avatarDropDown";

interface NavbarProps {
  className?: string;
}
export const Navbar = memo(({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
   

   
    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [setIsAuthModal])
    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    }, [setIsAuthModal])
 


    
    if (authData) {
        return (
            <div className={classNames(cls.navbar, {}, [className])}>
                <Text 
                    className={cls.appName} 
                    title='App'
                    theme={TextTheme.INVERTED} />
                <AppLink 
                    to={RoutePath.article_create}
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.createBtn}>
                    {t('создать статью')}
                </AppLink>
                
                <NotificationButton className={cls.actions}/>
                <AvatarDropDown />
              
            </div>
        )
       
    }
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
         
            <AppButton 
                buttonTheme={AppButtonTheme.CLEAR_INVERTED}
                className={classNames(cls.links)}
                onClick={onShowModal} fullWidth={null}>
                {t('Войти')}
            </AppButton>
            {isAuthModal && <LoginModal isOpen={isAuthModal} 
                onClose={onCloseModal}
                className={null} />}
        </div>
    );
});
