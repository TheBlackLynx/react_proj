import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Page } from 'shared';
import cls from './ArticlesPage.module.scss';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoaders/DynamicModuleLoaders';
import {articlePageReducer, getArticles } from '../../model/slice/ArticlePageSlice';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { getArticlesPageError, getArticlesPageHasMore, getArticlesPageInited, getArticlesPageIsLoading, getArticlesPagePage, getArticlesPageView } from '../../model/selectors/articlesPageSelectors';
import { initeArticlesPage } from 'pages/ArticlesPage/model/services/initeArticlesPage/initeArticlesPage';
import { useSearchParams } from 'react-router-dom';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';


const ArticlesPage = memo(() => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const reducers: ReducerList = {
        articles: articlePageReducer,
    }

    useInitialEffect(() => {
        dispatch(initeArticlesPage(searchParams))
    })

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page // падает из-за использования библиотеки с частичной подгрузкой статей
                className={classNames(cls.ArticlePage, {}, [])}
                //  onScrollEnd={onLoadNextPart}
            >
                <ArticleInfiniteList className={cls.list}/>
            </Page>

            {/* <ArticlesPageFilters /> */}
          
        </DynamicModuleLoader>
    )
});
export default memo(ArticlesPage);