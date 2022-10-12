import { Link } from "react-router-dom";
import { classNames } from "shared";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
  
            <div className={classNames(cls.links)}>
                <AppLink 
                    to={"/"} 
                    theme={AppLinkTheme.PRIMARY} 
                    className={classNames(cls.mainLink)}
                >
                    Главная
                </AppLink>
                <AppLink 
                    to={"/about"} 
                    theme={AppLinkTheme.PRIMARY}
                >
                    О сайте
                </AppLink>
            </div>
        </div>
    );
};
