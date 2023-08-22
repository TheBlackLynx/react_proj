import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { CommentType } from "@/entities/Comment";



export const fetchCommentsByArticleId = createAsyncThunk<CommentType[], 
string | undefined, 
ThunkConfig<string>>(
    'articleDetails/fetchCommentsByArticleId',
    async (articleId, thunkAPI) => {
        const { extra, dispatch, rejectWithValue } = thunkAPI;
        if (!articleId) {
            return rejectWithValue('no article id')
        }
        try {
            const response = await extra.api.get<CommentType[]>(
                `/comments/`, {
                    params: {
                        articleId,
                        _expand: 'user'
                    }
                })
            if (!response){
                throw new Error()
            }
            return response?.data
        } catch (e){
            console.log(e);
            return rejectWithValue('Невозможно получить статью по ID')
        }
       
      
    }
)