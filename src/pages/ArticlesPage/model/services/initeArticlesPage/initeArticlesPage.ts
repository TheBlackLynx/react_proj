

import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider/config/StateSchema";
import { Article, ArticleSortField } from "entities/Article";
import { SortOrder } from "shared/types";
import { URLSearchParams } from "url";
import { getArticlesPageHasMore, getArticlesPageInited, getArticlesPageIsLoading, getArticlesPageLimit, getArticlesPagePage } from "../../selectors/articlesPageSelectors";
import { articlePageActions } from "../../slice/ArticlePageSlice";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";


export const initeArticlesPage = createAsyncThunk<
void, 
URLSearchParams, 
ThunkConfig<string>>(
    'articlesPage/initeArticlesPage',
    async (searchParams, thunkAPI) => {
        const { extra, dispatch, getState } = thunkAPI;
        
        const inited = getArticlesPageInited(getState());


        if (!inited) {
            const orderFromUrl = searchParams.get('order') as SortOrder;
            const sortFromUrl = searchParams.get('sort') as ArticleSortField;
            const searchFromUrl = searchParams.get('search');
            if(orderFromUrl){
                dispatch(articlePageActions.setOrder(orderFromUrl))
            }
            if(sortFromUrl){
                dispatch(articlePageActions.setSort(sortFromUrl))
            }
            if(searchFromUrl){
                dispatch(articlePageActions.setSearch(searchFromUrl))
            }
            dispatch(articlePageActions.initState())
            dispatch(fetchArticlesList({}
            ))
            }
    }
)