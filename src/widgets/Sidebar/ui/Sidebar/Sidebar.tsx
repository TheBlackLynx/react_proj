import cls from "./Sidebar.module.scss";
import { AppButton, classNames } from "shared";
import { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";

export const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev: any) => !prev);
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
            >
                Toggle
            </AppButton>
            <div className={cls.switchers}>
                <ThemeSwitcher />

                <LangSwitcher />
            </div>
        </div>
    );
};
