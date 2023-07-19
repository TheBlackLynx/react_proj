import { ArticleList } from '@/entities/Article/ui/ArticleList/ArticleList';
import { 
    getArticlesPageError, 
    getArticlesPageHasMore, 
    getArticlesPageInited, 
    getArticlesPageIsLoading, 
    getArticlesPagePage, 
    getArticlesPageView } from '../../model/selectors/articlesPageSelectors';
import { fetchNextArticlePage } from 
    '../../model/services/fetchNextArticlePage/fetchNextArticlePage';
import { getArticles } from '../../model/slice/ArticlePageSlice';
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


