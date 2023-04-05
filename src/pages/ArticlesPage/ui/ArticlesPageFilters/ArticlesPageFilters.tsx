import { ArticleSortField, ArticleSortSelector, ArticleTypeTabs, ArticleView, ArticleViewSelector } from "entities/Article";
import { ArticleType } from "entities/Article/model/types/article";
import { fetchProfileData } from "entities/Profile";
import { getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort, getArticlesPageType, getArticlesPageView } from "pages/ArticlesPage/model/selectors/articlesPageSelectors";
import { fetchArticlesList } from "pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList";
import { articlePageActions } from "pages/ArticlesPage/model/slice/ArticlePageSlice";
import { FC, memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Card, classNames, Input, Page } from "shared";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useDebounce } from "shared/lib/hooks/useDebounce";
import { SortOrder } from "shared/types";
import { Select } from "shared/ui/Select/Select";
import { TabItem, Tabs } from "shared/ui/Tabs/Tabs";
import cls from './ArticlesPageFilters.module.scss'

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
      }, [dispatch, debauncedFetchData])

   
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