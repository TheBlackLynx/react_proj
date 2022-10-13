import cls from "./Sidebar.module.scss";
import { AppButton, AppLink, classNames } from "shared";
import { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { AppButtonSize, AppButtonTheme } from "shared/ui/AppButton/AppButton";
import { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import AboutIcon from 'shared/assets/icons/list.svg';
import MainIcon from 'shared/assets/icons/home.svg';


export const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div
            data-testid="sidebar"
            className={classNames(
                cls.Sidebar, 
                { [cls.collapsed]: collapsed }, 
                []
            )}
        >
            <AppButton
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={classNames(cls.collapseBtn, {}, [cls.square])}
                square
                size={AppButtonSize.XL}
                buttonTheme={AppButtonTheme.BACKGROUND_INVERTED}
               
            >
                {collapsed? ">" : "<"}
            </AppButton>
            <div className={cls.links}>
                <div className={cls.item}>
                    {
                        collapsed?
                            <AppLink to={RoutePath.main}>
                                <MainIcon className={cls.icon}/>
                            </AppLink>
                            :
                            <AppLink 
                                to={RoutePath.main} 
                                theme={AppLinkTheme.PRIMARY} 
                                className={classNames(cls.linkItem)}
                            >
                                Главная
                            </AppLink>
                    }    
                </div>
                <div className={cls.item}>
                    {
                        collapsed?
                            <AppLink to={RoutePath.about} >
                                <AboutIcon className={cls.icon}/>
                            </AppLink>
                            :
                            <AppLink 
                                to={RoutePath.about} 
                                theme={AppLinkTheme.PRIMARY}
                                className={classNames(cls.linkItem)}
                            >
                                О сайте
                            </AppLink>
                    }
                </div>
                
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />

                <LangSwitcher 
                    short={collapsed}
                />
            </div>
        </div>
    );
};
