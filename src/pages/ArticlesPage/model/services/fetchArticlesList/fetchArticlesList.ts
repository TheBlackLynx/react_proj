import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider/config/StateSchema";
import { Article } from "entities/Article";
import { getArticlesPageLimit } from "../../selectors/articlesPageSelectors";


interface FetchArticlesListProps {
    page?: number;

}
export const fetchArticlesList = createAsyncThunk<
Article[], 
FetchArticlesListProps, 
ThunkConfig<string>>(
    'articlesPage/fetchArticlesList',
    async (props, thunkAPI) => {
        const { extra, dispatch, rejectWithValue, getState } = thunkAPI;
        const { page = 1 } = props;
        const limit = getArticlesPageLimit(getState())
        try {
            const response = await extra.api.get<Article[]>(
                `/articles`, {
                    params: {
                        _expand: 'user',
                        _limit: limit,
                        _page: page
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



