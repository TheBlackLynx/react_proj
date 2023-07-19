import {
    createEntityAdapter,
    createSlice,
    EntityState,
    PayloadAction,
} from '@reduxjs/toolkit'
import { StateSchema } from '@/app/providers/StoreProvider';
import { Article } from '@/entities/Article';
import { fetchArticlesRecommendations } 
    from '../services/fetchArticlesRecommendations/fetchArticlesRecommendations';
import { ArticleDetailsRecomendationsSchema } from '../types/ArticleDetailsRecomendationsSchema';
  
  
const recomendationsAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
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
export const { 
    actions: articleDetailsPageRecomendationsActions } = articleDetailsPageRecomendationsSlice;
export const { 
    reducer: articleDetailsPageRecomendationsReducer } = articleDetailsPageRecomendationsSlice;