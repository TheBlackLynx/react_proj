import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { Article } from "@/entities/Article";
import { addQueryParams } from "@/shared/lib/url/addQueryParams/addQueryParams";
import { 
    getArticlesPageLimit, 
    getArticlesPageOrder, 
    getArticlesPagePage, 
    getArticlesPageSearch, 
    getArticlesPageSort, 
    getArticlesPageType } from "../../selectors/articlesPageSelectors";


interface FetchArticlesListProps {
    replace?: boolean
}
export const fetchArticlesList = createAsyncThunk<
Article[], 
FetchArticlesListProps, 
ThunkConfig<string>>(
    'articlesPage/fetchArticlesList',
    async (props, thunkAPI) => {
        const { extra, dispatch, rejectWithValue, getState } = thunkAPI;
        const limit = getArticlesPageLimit(getState())
        const order = getArticlesPageOrder(getState());
        const sort = getArticlesPageSort(getState());
        const search = getArticlesPageSearch(getState());
        const page = getArticlesPagePage(getState());
        const type = getArticlesPageType(getState());

        try {
            addQueryParams({
                sort,
                order,
                search,
                type
            })
            const response = await extra.api.get<Article[]>(
                `/articles`, {
                    params: {
                        _expand: 'user',
                        _limit: limit,
                        _page: page,
                        _sort: sort,
                        _order: order,
                        q: search,
                        type: undefined
                    }
                })
            if (!response){
                throw new Error()
            }
            return response?.data
        } catch (e){
            return rejectWithValue('Невозможно получить массив статей')
        }
       
      
    }
)



