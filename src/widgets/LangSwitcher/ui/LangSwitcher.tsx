import { useTranslation } from "react-i18next";
import { AppButton } from "@/shared";
import cls from "./LangSwitcher.module.scss";
import { classNames } from "@/shared";
import { AppButtonTheme } from "@/shared/ui/AppButton/AppButton";
import { memo } from "react";

export interface LangSwitcherProps {
    className?: string,
    short?: boolean
}
export const LangSwitcher = memo((props: LangSwitcherProps) => {
    const { short } = props;
    const { t, i18n } = useTranslation();
    const toggle = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };
    return (
        <AppButton
            className={classNames(cls.LangSwitcher, {}, [])}
            onClick={toggle}
            buttonTheme={AppButtonTheme.CLEAR}
        >
            {t(short? "Короткий язык" : "Язык")}
        </AppButton>
    );
});
