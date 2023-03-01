import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider/config/StateSchema";
import { Article } from "entities/Article";

export const fetchArticlesList = createAsyncThunk<
Article[], 
void, 
ThunkConfig<string>>(
    'arrticlesPage/fetchArticlesList',
    async (articleId, thunkAPI) => {
        const { extra, dispatch, rejectWithValue } = thunkAPI;
        try {
            const response = await extra.api.get<Article[]>(
                `/articles`, {
                    params: {
                        _expand: 'user'
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