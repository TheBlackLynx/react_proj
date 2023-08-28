import { createSlice } from '@reduxjs/toolkit';
import { ArticleRatingSchema } from '../types/articleRatingSchema';
    
const initialState: ArticleRatingSchema = {
        
};
    
export const articleRatingSlice = createSlice({
    name: 'articleRating',
    initialState,
    reducers: {},
});
    
export const { actions: articleRatingActions } = articleRatingSlice;
export const { reducer: articleRatingReducer } = articleRatingSlice;