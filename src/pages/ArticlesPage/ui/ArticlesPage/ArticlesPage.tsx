import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Page } from 'shared';
import cls from './ArticlesPage.module.scss';
import { Article, ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article';
import { ArticleType } from 'entities/Article/model/types/article';
import { DynamicModuleLoaders, ReducerList } from 'shared/lib/components/DynamicModuleLoaders/DynamicModuleLoaders';
import { articlePageActions, articlePageReducer, getArticles } from '../../model/slice/ArticlePageSlice';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { useSelector } from 'react-redux';
import { getArticlesPageError, getArticlesPageHasMore, getArticlesPageInited, getArticlesPageIsLoading, getArticlesPagePage, getArticlesPageView } from '../../model/selectors/articlesPageSelectors';
import { articleDetailsActions } from 'entities/Article/model/slice/articleSlice';
import { fetchNextArticlePage } from 'pages/ArticlesPage/model/services/fetchNextArticlePage/fetchNextArticlePage';
import { unmountComponentAtNode } from 'react-dom';
import { initeArticlesPage } from 'pages/ArticlesPage/model/services/initeArticlesPage/initeArticlesPage';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { useSearchParams } from 'react-router-dom';
import { Text } from 'shared';


const ArticlesPage = memo(() => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const page = useSelector(getArticlesPagePage);
    const hasMore = useSelector(getArticlesPageHasMore);
    const inited = useSelector(getArticlesPageInited);
    const view = useSelector(getArticlesPageView);
    const [searchParams, setSearchParams] = useSearchParams();
    //console.log(searchParams);
  
    const reducers: ReducerList = {
        articles: articlePageReducer,
    }

    useInitialEffect(() => {
        dispatch(initeArticlesPage(searchParams))
    })

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlePage())

    }, [dispatch])


    // if (!isLoading && !articles.length) {
    //   return (
    //     <div className={classNames('', {}, [])}>
    //       <Text title={t('статьи не найдены')}  />
    //       </div>
    //   )
    // }

    console.log(articles);
  

    return (
        <DynamicModuleLoaders reducers={reducers} removeAfterUnmount={false}>
            {/* <Page
        className={classNames(cls.ArticlePage, {}, [])}
      //  onScrollEnd={onLoadNextPart}
      > */}
            <ArticleList
                articles={articles}
                isLoading={isLoading}
                error={error}
                view={view}
                className={cls.list}
                onScrollEnd={onLoadNextPart}

            />
            {/* </Page> */}
        </DynamicModuleLoaders>
    )
});
export default memo(ArticlesPage);