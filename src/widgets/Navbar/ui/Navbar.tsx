import { t } from "i18next";
import { Link } from "react-router-dom";
import { AppButton, classNames } from "shared";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import cls from "./Navbar.module.scss";
import { Modal } from "shared/ui/Modal/Modal";
import { useState, useCallback } from "react";
import { AppButtonTheme } from "shared/ui/AppButton/AppButton";
import { LoginModal } from "features/AuthByUsername";

interface NavbarProps {
  className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [setIsAuthModal])
    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    }, [setIsAuthModal])
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
  
            <AppButton 
                buttonTheme={AppButtonTheme.CLEAR_INVERTED} 
                className={classNames(cls.links)}
                onClick={onShowModal}>
                {t('Войти')}
            </AppButton>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>
        </div>
    );
};
