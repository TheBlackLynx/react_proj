import { 
    getArticlesPageOrder, 
    getArticlesPageSearch, 
    getArticlesPageSort, 
    getArticlesPageType, 
    getArticlesPageView 
} from '../../model/selectors/articlesPageSelectors'

import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Card, classNames, Input } from "@/shared";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useDebounce } from "@/shared/lib/hooks/useDebounce";
import { SortOrder } from "@/shared/types/sort";
import cls from './ArticlesPageFilters.module.scss'
import { articlePageActions } from "../../model/slice/ArticlePageSlice";
import { fetchArticlesList } from "../../model/services/fetchArticlesList/fetchArticlesList";
import { 
    ArticleSortField, 
    ArticleType, 
    ArticleView, } from '@/entities/Article';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';

interface ArticlesPageFiltersProps {
    className?: string
}

export const ArticlesPageFilters = memo(( props: ArticlesPageFiltersProps) => {
    const { t } = useTranslation();
    const { className } = props;
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);
    const order = useSelector(getArticlesPageOrder);
    const sort = useSelector(getArticlesPageSort);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({replace: true}))
    }, [dispatch])
    const onViewClick = useCallback((view: ArticleView) => {
        dispatch(articlePageActions.setView(view))
        dispatch(articlePageActions.setPage(1))
        fetchData()
    }, [dispatch, fetchData])

    const onChangeOrder = useCallback((newOrder: SortOrder) => {
        dispatch(articlePageActions.setOrder(newOrder))
        dispatch(articlePageActions.setPage(1))
        fetchData()
    }, [dispatch, fetchData])

    const onChangeSort = useCallback((newSort: ArticleSortField) => {
        dispatch(articlePageActions.setSort(newSort))
        dispatch(articlePageActions.setPage(1))
        fetchData()
    }, [dispatch, fetchData])
    const debauncedFetchData = useDebounce(fetchData, 500)

    const onChangeSearch = useCallback( (search: string) => {
        dispatch(articlePageActions.setSearch(search))
        dispatch(articlePageActions.setPage(1))
        debauncedFetchData();
    }, [dispatch, debauncedFetchData])

    const onChangeType = useCallback( (value: ArticleType) => {
        dispatch(articlePageActions.setType(value))
        dispatch(articlePageActions.setPage(1))
        fetchData();
    }, [dispatch, fetchData])

   
    return (
        <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort} />
                <ArticleViewSelector view={view as ArticleView} onViewClick={onViewClick} />
            </div>
            <Card className={cls.search}>
                <Input placeholder={t('Поиск')} onChange={onChangeSearch} value={search} />
            </Card>
            <ArticleTypeTabs className={cls.tabs} value={type} onChangeType={onChangeType} />
        </div>
    )
});