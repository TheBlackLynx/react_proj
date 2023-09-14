import { getArticleDetailsData } from "@/entities/Article";
import { getCanEditArticle } from "../../model/selectors/article";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppButton, classNames} from "@/shared";
import { AppButtonTheme } from "@/shared/ui/AppButton";
import cls from './ArticleDetailsPageHeader.module.scss'
import { getRouteArticleEdit, getRouteArticles } from "@/shared/const/router";

interface ArticleDetailsPageHeaderProps {
    className?: string
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
    const { t } = useTranslation();
    const { className } = props;
    const navigate = useNavigate();
    const article = useSelector(getArticleDetailsData)

    const canEdit = useSelector(getCanEditArticle);
    const onBackToList = useCallback(() => {
        navigate(getRouteArticles());
    }, [navigate])

    const onEdit = useCallback(() => {
        navigate(getRouteArticleEdit(article?.id ?? ''));
    }, [article?.id, navigate])
    return (
        <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
            <AppButton
                buttonTheme={AppButtonTheme.OUTLINE}
                onClick={onBackToList} fullWidth={null}            >
                {t('Назад к списку')}
            </AppButton>
            {
                canEdit &&
                <AppButton
                    className={cls.editBtn}
                    buttonTheme={AppButtonTheme.OUTLINE}
                    onClick={onEdit} fullWidth={null}                >
                    {t('Редактировать')}
                </AppButton>
            }
        </div>
    )
});