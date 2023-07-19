import { StateSchema } from "@/app/providers/StoreProvider";

export const getCommentsIsLoading = 
(state: StateSchema) => state.articleDetailsPage?.comments?.isLoading;
export const getCommentsError = (state: StateSchema) => state.articleDetailsPage?.comments?.error;