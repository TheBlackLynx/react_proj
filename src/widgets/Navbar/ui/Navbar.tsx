import { t } from "i18next";
import { AppButton, AppLink, classNames , Text } from "@/shared";
import cls from "./Navbar.module.scss";
import { useState, useCallback, memo } from "react";
import { AppButtonTheme } from "@/shared/ui/AppButton";
import { LoginModal } from "@/features/AuthByUsername";
import { useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User";
import { AppLinkTheme } from "@/shared/ui/AppLink";
import { TextTheme } from "@/shared/ui/Text";
import { NotificationButton } from "@/features/notificationButton";
import { AvatarDropDown } from "@/features/avatarDropDown";
import { getRouteArticleCreate } from "@/shared/const/router";
import { useUserAuthData } from "@/entities/User/model/selectors/getUserAuthData/getUserAuthData";

interface NavbarProps {
  className?: string;
}
export const Navbar = memo(({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useUserAuthData();
  

   
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
                    to={getRouteArticleCreate()}
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
