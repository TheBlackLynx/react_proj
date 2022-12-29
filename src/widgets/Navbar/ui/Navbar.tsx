import { t } from "i18next";
import { AppButton, classNames } from "shared";
import cls from "./Navbar.module.scss";
import { useState, useCallback, memo } from "react";
import { AppButtonTheme } from "shared/ui/AppButton/AppButton";
import { LoginModal } from "features/AuthByUsername";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userActions } from "entities/User";

interface NavbarProps {
  className?: string;
}
export const Navbar = memo(({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [setIsAuthModal])
    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    }, [setIsAuthModal])
    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    if (authData) {
        return (
            <div className={classNames(cls.navbar, {}, [className])}>
                <AppButton 
                    buttonTheme={AppButtonTheme.CLEAR_INVERTED} 
                    className={classNames(cls.links)}
                    onClick={onLogout}>
                    {t('Выйти')}
                </AppButton>
            </div>
        )
       
    }
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
         
            <AppButton 
                buttonTheme={AppButtonTheme.CLEAR_INVERTED} 
                className={classNames(cls.links)}
                onClick={onShowModal}>
                {t('Войти')}
            </AppButton>
            {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>}
        </div>
    );
});
