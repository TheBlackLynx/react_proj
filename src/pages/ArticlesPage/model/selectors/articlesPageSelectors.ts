import { StateSchema } from "app/providers/StoreProvider";

export const getArticlesPageError = (state: StateSchema) => state.articles?.error;
export const getArticlesPageIsLoading = (state: StateSchema) => state.articles?.isLoading;
export const getArticlesPageView = (state: StateSchema) => state.articles?.view;
export const getArticlesPagePage = (state: StateSchema) => state.articles?.page || 1;
export const getArticlesPageLimit = (state: StateSchema) => state.articles?.limit || 5;
export const getArticlesPageHasMore = (state: StateSchema) => state.articles?.hasMore;