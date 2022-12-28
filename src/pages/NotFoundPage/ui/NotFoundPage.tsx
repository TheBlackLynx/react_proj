import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared";
import cls from './NotFoundPage.module.scss'

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage = memo(( props: NotFoundPageProps) => {
    const { t } = useTranslation();
    const { className } = props;
    return (
        <div className={classNames(cls.notFoundPage, {}, [className])}>
            { t( 'Страница не найдена' )}
        </div>
    )
});