import { ArticleDetailsCommentSchema } from './ArticleDetailsCommentSchema';
import { ArticleDetailsRecomendationsSchema } from './ArticleDetailsRecomendationsSchema';

export interface ArticleDetailPageSchema {
    comments: ArticleDetailsCommentSchema;
    recommendations: ArticleDetailsRecomendationsSchema;
}
