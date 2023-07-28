import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider/config/StateSchema";
import { getArticleDetailsData } from "@/entities/Article";
import { CommentType } from "@/entities/Comment";
import { getUserAuthData } from "@/entities/User";
import { fetchCommentsByArticleId } from "../fetchCommentsByArticleId/fetchCommentsByArticleId";


export const addCommentForArticle = createAsyncThunk<CommentType, string,
ThunkConfig<string>>(
    'ArticleDetailsPage/addCommentForArticle',
    async (text, thunkAPI) => {
        const { extra, dispatch, rejectWithValue, getState } = thunkAPI;

        const userData = getUserAuthData(getState());
        //const text = getAddNewCommentFormText(getState());
        const articleData = getArticleDetailsData(getState());

        
        if ( !userData || !text || !articleData ) {
            return rejectWithValue('no data99999')
        }
        try {
            const response = await extra.api.post<CommentType>(
                '/comments', 
                {
                    articleId: articleData?.id,
                    userId: userData.id,
                    text

                })
            if (!response) {
                throw new Error('no data')
            }
            dispatch(fetchCommentsByArticleId(articleData.id))
            return response.data
        } catch (e){
            console.log(e);
            return rejectWithValue('Ошибка при сохранении комментария')
        }
       
      
    }
)