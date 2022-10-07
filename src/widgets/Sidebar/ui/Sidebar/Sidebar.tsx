import cls from "./Sidebar.module.scss";
import { classNames } from "shared";
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
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [])}
    >
      <button onClick={onToggle}>Toggle</button>
      <div className={cls.switchers}>
      <ThemeSwitcher />

      <LangSwitcher />
      </div>
    </div>
  );
};
