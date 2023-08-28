import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit'
import { StateSchema } from '@/app/providers/StoreProvider';
import { Article, ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from '@/shared/const/localstogare';
import { SortOrder } from '@/shared/types';
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
        _inited: false,
        limit: 9,
        sort: ArticleSortField.CREATED,
        search: '', 
        order: 'asc',
        type: ArticleType.IT
    }),
    reducers: { 
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, JSON.stringify(action.payload))
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setSort: (state, action: PayloadAction<ArticleSortField>) => {
            state.sort = action.payload;
        },
        setType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload;
        },
        initState: (state) => {
            // @ts-ignore
            try{
                const view = 
                JSON.parse(
                    localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) ?? '') as ArticleView;
                state.view = view;
                state.limit = view === ArticleView.LIST ? 4 : 5;
            }
            catch (e) {
                console.log(e);  
            }  
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
                if (action.meta.arg.replace) {
                    articlesAdapter.removeAll(state);   
                }
            })
            .addCase(fetchArticlesList.fulfilled, (state, 
                action
            ) => {
                state.isLoading = false;
                
                state.hasMore = action.payload.length >= state.limit;

                if (action.meta.arg.replace) {
                    articlesAdapter.setAll(state, action.payload);   
                } else {
                    articlesAdapter.addMany(state, action.payload);   
                }
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