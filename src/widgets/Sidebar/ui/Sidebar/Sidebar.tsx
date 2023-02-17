import cls from "./Sidebar.module.scss";
import { AppButton, classNames } from "shared";
import { memo, useMemo, useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { AppButtonSize, AppButtonTheme } from "shared/ui/AppButton/AppButton";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import { useSelector } from "react-redux";
import { getSidebarItems } from "../../model/selectors/getSidebarItems";



export const Sidebar = memo(() => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSelector(getSidebarItems);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(() => {
        return (sidebarItemsList.map(item  => {
            return (
                <SidebarItem 
                    key={item.path} 
                    item={item} 
                    collapsed={collapsed}/>
            )
        }))
    
    }, [collapsed, sidebarItemsList])
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
