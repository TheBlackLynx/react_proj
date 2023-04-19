import { getArticleDetailsData } from "entities/Article";
import { getUserAuthData } from "entities/User";
import { getCanEditArticle } from "../../model/selectors/article";
import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppButton, classNames, Page } from "shared";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { AppButtonTheme } from "shared/ui/AppButton/AppButton";
import cls from './ArticleDetailsPageHeader.module.scss'

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
        navigate(RoutePath.articles);
    }, [navigate])

    const onEdit = useCallback(() => {
        navigate(RoutePath.articles + '/' + article?.id + '/edit');
    }, [article?.id, navigate])
    return (
        <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
            <AppButton
                buttonTheme={AppButtonTheme.OUTLINE}
                onClick={onBackToList}
            >
                {t('Назад к списку')}
            </AppButton>
            {
                canEdit &&
                <AppButton
                    className={cls.editBtn}
                    buttonTheme={AppButtonTheme.OUTLINE}
                    onClick={onEdit}
                >
                    {t('Редактировать')}
                </AppButton>
            }
        </div>
    )
});