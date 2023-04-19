import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { classNames, Page } from "shared";
import cls from './ArticleEditPage.module.scss'

interface ArticleEditPageProps {
    className?: string
}

const ArticleEditPage = memo(( props: ArticleEditPageProps) => {
    const { t } = useTranslation();
    const { className } = props;
    const {id} = useParams<{id: string}>();
    const isEdit = Boolean(id)
    return (
        <Page className={classNames('', {}, [className])}>
            {isEdit ? 
                t( 'Редактирование статьи' ) :
                t( 'Создание статьи' )} 
        </Page>
    )
});

export default ArticleEditPage;