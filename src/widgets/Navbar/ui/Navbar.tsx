import { t } from "i18next";
import { Link } from "react-router-dom";
import { AppButton, classNames } from "shared";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import cls from "./Navbar.module.scss";
import { Modal } from "shared/ui/Modal/Modal";
import { useState, useCallback } from "react";
import { AppButtonTheme } from "shared/ui/AppButton/AppButton";

interface NavbarProps {
  className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);

    const toggleModal = useCallback(() => {
        setIsAuthModal(prev => !prev)
    }, [setIsAuthModal])
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
  
            <AppButton 
                buttonTheme={AppButtonTheme.CLEAR_INVERTED} 
                className={classNames(cls.links)}
                onClick={toggleModal}>
                {t('Войти')}
            </AppButton>
            <Modal isOpen={isAuthModal} onClose={toggleModal}>fwerwerwerwerwer</Modal>
        </div>
    );
};
