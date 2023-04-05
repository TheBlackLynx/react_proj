import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider/config/StateSchema";
import { Article } from "entities/Article";

export const fetchArticlesRecommendations = createAsyncThunk<
Article[], 
void, 
ThunkConfig<string>>(
    'articlesPage/fetchArticlesRecommendations',
    async (_, thunkAPI) => {
        const { extra, dispatch, rejectWithValue, getState } = thunkAPI;

        try {
            const response = await extra.api.get<Article[]>(
                `/articles`, {
                    params: {
                        _expand: 'user',
                        _limit: 7
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



