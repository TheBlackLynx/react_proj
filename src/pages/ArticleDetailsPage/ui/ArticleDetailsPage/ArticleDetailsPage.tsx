import { ArticleDetails, ArticleList, ArticleView } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { AddNewCommentForm } from 'features/AddNewComment';
import { getCommentsError, getCommentsIsLoading }
    from 'pages/ArticleDetailsPage/model/selectors/comments';
import { addCommentForArticle }
    from 'pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId }
    from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { articleDetailsPageRecomendationsReducer, getArticleRecomendations } from '../../model/slice/articleDetailsPageRecomendationsSlice';
import { atricleDetailsCommentsReducer, getArticleComments }
    from 'pages/ArticleDetailsPage/model/slice/atricleDetailsCommentsSlice';
import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { clearScreenDown } from 'readline';
import { AppButton, Page, Text } from 'shared';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { DynamicModuleLoaders, ReducerList }
    from 'shared/lib/components/DynamicModuleLoaders/DynamicModuleLoaders';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { AppButtonTheme } from 'shared/ui/AppButton/AppButton';
import cls from './ArticleDetailsPage.module.scss'
import { getRecommendationsError, getRecommendationsIsLoading } from 'pages/ArticleDetailsPage/model/selectors/recomendations';
import { TextSize } from 'shared/ui/Text/Text';
import { fetchArticlesRecommendations } from 'pages/ArticleDetailsPage/model/services/fetchArticlesRecommendations/fetchArticlesRecommendations';
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/model/slice';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { VStack } from 'shared/ui/Stack';
import { ArticleReccomendationsList } from 'features/articleReccomendationsList';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';

const reducersList: ReducerList = {
    articleDetailsPage: articleDetailsPageReducer
}

interface ArticleDetailsPageProps {
    className?: string,
}
const ArticleDetailsPage = memo((props: ArticleDetailsPageProps) => {

    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const recommendations = useSelector(getArticleRecomendations.selectAll);
    const isLoading = useSelector(getCommentsIsLoading);
  
 


    if (!id) {
        return (
            <div >
                {t('статья не найдена')}
            </div>
        )
    }


  
    console.log('recommendations', recommendations);
    
    return (
        <DynamicModuleLoaders reducers={reducersList} removeAfterUnmount>
            <Page className={cls.ArticleDetailsPage}>
                <ArticleDetailsPageHeader />
                <ArticleDetails articleId={id} />
                <ArticleReccomendationsList />
                <ArticleDetailsComments id={id}/>
            </Page>
        </DynamicModuleLoaders>

    )
});
export default ArticleDetailsPage;

