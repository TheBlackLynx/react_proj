import {
    createEntityAdapter,
    createSlice,
    EntityState,
    PayloadAction,
} from '@reduxjs/toolkit'
import { StateSchema } from '@/app/providers/StoreProvider';
import { Article } from '@/entities/Article';
import { CommentType } from '@/entities/Comment';
import { fetchArticlesRecommendations } from '../services/fetchArticlesRecommendations/fetchArticlesRecommendations';
import { fetchCommentsByArticleId } 
    from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleDetailsCommentSchema } from '../types/ArticleDetailsCommentSchema';
import { ArticleDetailsRecomendationsSchema } from '../types/ArticleDetailsRecomendationsSchema';
  
  
const recomendationsAdapter = createEntityAdapter<Article>({
    // Assume IDs are stored in a field other than `book.id`
    selectId: (article) => article.id,
    // Keep the "all IDs" array sorted based on book titles
})
  
export const getArticleRecomendations = recomendationsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.recommendations || recomendationsAdapter.getInitialState())
const articleDetailsPageRecomendationsSlice = createSlice({
    name: 'articleDetailsPageRecomendationsSlice',
    initialState: recomendationsAdapter.getInitialState<ArticleDetailsRecomendationsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {}
    }),
    reducers: {
     
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesRecommendations.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticlesRecommendations.fulfilled, (state, 
                action
            ) => {
                state.isLoading = false;
                recomendationsAdapter.setAll(state, action.payload)
            })
            .addCase(fetchArticlesRecommendations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
},
)
export const { actions: articleDetailsPageRecomendationsActions } = articleDetailsPageRecomendationsSlice;
export const { reducer: articleDetailsPageRecomendationsReducer } = articleDetailsPageRecomendationsSlice;