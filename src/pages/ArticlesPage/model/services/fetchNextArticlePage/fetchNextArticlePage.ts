

import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider/config/StateSchema";
import { Article } from "@/entities/Article";
import { 
    getArticlesPageHasMore, 
    getArticlesPageIsLoading, 
    getArticlesPageLimit, 
    getArticlesPagePage } from "../../selectors/articlesPageSelectors";
import { articlePageActions } from "../../slice/ArticlePageSlice";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";


export const fetchNextArticlePage = createAsyncThunk<
void, 
void, 
ThunkConfig<string>>(
    'articlesPage/fetchNextArticlePage',
    async (_, thunkAPI) => {
        const { extra, dispatch, getState } = thunkAPI;
        const hasMore = getArticlesPageHasMore(getState());
        const page = getArticlesPagePage(getState());
        const limit = getArticlesPageLimit(getState());
        const isLoading = getArticlesPageIsLoading(getState());


        if ( hasMore && !isLoading) {
            dispatch(articlePageActions.setPage(page + 1))
            dispatch(fetchArticlesList(
                { }
            ))
        }
    }
)