import { useTranslation } from "react-i18next";
import { AppButton } from "shared";
import cls from "./LangSwitcher.module.scss";
import { classNames } from "shared";
import { AppButtonTheme } from "shared/ui/AppButton/AppButton";

export const LangSwitcher = () => {
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
            {t("Язык")}
        </AppButton>
    );
};
