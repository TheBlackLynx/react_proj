import { StateSchema } from "app/providers/StoreProvider";

export const getArticlesPageError = (state: StateSchema) => state.articles?.error;
export const getArticlesPageIsLoading = (state: StateSchema) => state.articles?.isLoading;
export const getArticlesPageView = (state: StateSchema) => state.articles?.view;