import { StateSchema } from "@/app/providers/StoreProvider";

export const getRecommendationsIsLoading = (state: StateSchema) => state.articleDetailsPage?.recommendations?.isLoading;
export const getRecommendationsError = (state: StateSchema) => state.articleDetailsPage?.recommendations?.error;