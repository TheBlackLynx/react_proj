import {
    createEntityAdapter,
    createSlice,
    EntityState,
    PayloadAction,
} from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticleView } from 'entities/Article';
import { CommentType } from 'entities/Comment';
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstogare';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { ArticlesPageSchema } from '../types/ArticlesPageSchema';
  
  
const articlesAdapter = createEntityAdapter<Article>({
    // Assume IDs are stored in a field other than `book.id`
    selectId: (article) => article.id,
    // Keep the "all IDs" array sorted based on book titles
})
  
export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articles || articlesAdapter.getInitialState())

const articlePageSlice = createSlice({
    name: 'articlePageSlice',
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: ArticleView.TILE,
        page: 1,
        hasMore: true,
        _inited: false
    }),
    reducers: { 
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, JSON.stringify(action.payload))
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        initState: (state) => {
            // @ts-ignore
            const view = JSON.parse(localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY)) as ArticleView;
            state.view = view;
       
            
            state.limit = view === ArticleView.LIST ? 4 : 5;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticlesList.fulfilled, (state, 
                action: PayloadAction<Article[]>
            ) => {
                state.isLoading = false;
                articlesAdapter.addMany(state, action.payload);   
                state.hasMore = action.payload.length > 0;
                state._inited = true;

            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false;
            })
    }
},
)
export const { actions: articlePageActions } = articlePageSlice;
export const { reducer: articlePageReducer } = articlePageSlice;