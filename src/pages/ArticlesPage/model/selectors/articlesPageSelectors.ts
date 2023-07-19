import { StateSchema } from "@/app/providers/StoreProvider";
import { ArticleSortField, ArticleType } from "@/entities/Article";

export const getArticlesPageError = (state: StateSchema) => state.articles?.error;
export const getArticlesPageIsLoading = (state: StateSchema) => state.articles?.isLoading;
export const getArticlesPageView = (state: StateSchema) => state.articles?.view;
export const getArticlesPagePage = (state: StateSchema) => state.articles?.page || 1;
export const getArticlesPageLimit = (state: StateSchema) => state.articles?.limit || 5;
export const getArticlesPageHasMore = (state: StateSchema) => state.articles?.hasMore;
export const getArticlesPageInited = (state: StateSchema) => state.articles?._inited;

export const getArticlesPageOrder = (state: StateSchema) => state.articles?.order ?? 'asc';
export const getArticlesPageSort = 
(state: StateSchema) => state.articles?.sort ?? ArticleSortField.CREATED;
export const getArticlesPageSearch = (state: StateSchema) => state.articles?.search ?? '';
export const getArticlesPageType = 
(state: StateSchema) => state.articles?.type ?? ArticleType.FRONTEND;