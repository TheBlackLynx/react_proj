import { ArticleList } from '@/entities/Article/ui/ArticleList/ArticleList';
import { t } from 'i18next';
import { getArticlesPageError, getArticlesPageHasMore, getArticlesPageInited, getArticlesPageIsLoading, getArticlesPagePage, getArticlesPageView } from '@/pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { fetchNextArticlePage } from '@/pages/ArticlesPage/model/services/fetchNextArticlePage/fetchNextArticlePage';
import { getArticles } from '@/pages/ArticlesPage/model/slice/ArticlePageSlice';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Text } from '@/shared';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import cls from './ArticleInfiniteList.module.scss'

interface ArticleInfiniteListProps {
    className?: string
}

export const ArticleInfiniteList = (props: ArticleInfiniteListProps) => {

    const dispatch = useAppDispatch();
    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlePage())
    }, [dispatch])
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);
    const {t} = useTranslation('article'); 
   
    if (error) {
        return (
            <Text text={t('Произошла ошибка при подгрузке статей')} />
        )
    }
    return (
        <ArticleList
            articles={articles}
            isLoading={isLoading}
            error={error}
            view={view}
            className={cls.list}
            onScrollEnd={onLoadNextPart}

        />
    )
}


