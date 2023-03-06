

import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider/config/StateSchema";
import { Article } from "entities/Article";
import { getArticlesPageHasMore, getArticlesPageInited, getArticlesPageIsLoading, getArticlesPageLimit, getArticlesPagePage } from "../../selectors/articlesPageSelectors";
import { articlePageActions } from "../../slice/ArticlePageSlice";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";


export const initeArticlesPage = createAsyncThunk<
void, 
void, 
ThunkConfig<string>>(
    'articlesPage/initeArticlesPage',
    async (_, thunkAPI) => {
        const { extra, dispatch, getState } = thunkAPI;
        const inited = getArticlesPageInited(getState());


        if (!inited) {
            dispatch(articlePageActions.initState())
            dispatch(fetchArticlesList(
              { page: 1 }
            ))
            }
    }
)