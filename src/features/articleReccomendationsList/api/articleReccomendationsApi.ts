import { Article } from "entities/Article";
import { rtkApi } from "shared/api/rtkApi";

const reccomendationApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleReccomendationsList: build.query<Article[], number>({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _expand: 'user',
                    _limit: limit,
                }
            }),
        }),
    }),
    overrideExisting: false,
})
export const useArticleReccomendationsList = reccomendationApi.useGetArticleReccomendationsListQuery