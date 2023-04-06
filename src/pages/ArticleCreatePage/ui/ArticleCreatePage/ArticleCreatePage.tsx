import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames, Page } from "shared";
import cls from './ArticleCreatePage.module.scss'

interface ArticleCreatePageProps {
    className?: string
}

const ArticleCreatePage = memo(( props: ArticleCreatePageProps) => {
    const { t } = useTranslation();
    const { className } = props;
    return (
        <Page className={classNames(cls.notFoundPage, {}, [className])}>
            { t( 'Создание статьи' )}
        </Page>
    )
});

export default ArticleCreatePage;
