import cls from "./Sidebar.module.scss";
import { AppButton, AppLink, classNames } from "shared";
import { memo, useMemo, useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { AppButtonSize, AppButtonTheme } from "shared/ui/AppButton/AppButton";
import { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { SidebarItemsList } from "widgets/Sidebar/model/items";
import { SidebarItem } from "../SidebarItem/SidebarItem";



export const Sidebar = memo(() => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(() => {
        return (SidebarItemsList.map(item => {
            return (
                <SidebarItem key={item.path} item={item} collapsed={collapsed}/>
            )
        }))
    
    }, [collapsed])
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
                {itemsList}
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher 
                    short={collapsed}
                />
            </div>
        </div>
    );
});
