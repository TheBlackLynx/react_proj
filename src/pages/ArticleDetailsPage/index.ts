export {
    ArticleDetailsPageAsync as ArticleDetailPage
} from './ui/ArticleDetailsPage/ArticleDetailsPage.async'

export type {
    ArticleDetailsCommentSchema
} from './model/types/ArticleDetailsCommentSchema';

export type {
    ArticleDetailsRecomendationsSchema
} from './model/types/ArticleDetailsRecomendationsSchema';

export {
    getCommentsIsLoading, getCommentsError
} from './model/selectors/comments';