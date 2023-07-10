import cls from "./Sidebar.module.scss";
import { AppButton, classNames } from "@/shared";
import { memo, useMemo, useState } from "react";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";
import { LangSwitcher } from "@/widgets/LangSwitcher";
import { AppButtonSize, AppButtonTheme } from "@/shared/ui/AppButton/AppButton";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import { useSelector } from "react-redux";
import { getSidebarItems } from "../../model/selectors/getSidebarItems";
import { VStack } from "@/shared/ui/Stack/VStack/VStack";
import { isUserAdmin, isUserManager } from "@/entities/User";



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
        <aside
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
                buttonTheme={AppButtonTheme.BACKGROUND_INVERTED} fullWidth={null}               
            >
                {collapsed? ">" : "<"}
            </AppButton>
            <VStack role="navigation" gap={'8'} align={'center'} className={cls.links}>
                {itemsList}
            </VStack>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher 
                    short={collapsed}
                />
            </div>
        </aside>
    );
});
