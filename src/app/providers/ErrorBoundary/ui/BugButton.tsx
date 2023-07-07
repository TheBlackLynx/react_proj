import { useEffect, useState, } from "react";
import { useTranslation } from "react-i18next";
import { AppButton } from "@/shared";

//для теcтирования ErrorBoundary
export const BugButton = () => {
    const [error, setError] =  useState(false);
    const { t } = useTranslation();
    const onThrow = () => setError(true);

    useEffect(() => {
        if(error)
        {
            throw new Error();
        }
      

    }, [error])
    return (
        <AppButton onClick={onThrow}>
            {t("Генерация ошибки")}
        </AppButton>
    )
}