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
    const recommendationsIsLoading = useSelector(getRecommendationsIsLoading);
    const error = useSelector(getCommentsError);
    const recommendationsError = useSelector(getRecommendationsError);
  
 


    if (!id) {
        return (
            <div >
                {t('статья не найдена')}
            </div>
        )
    }

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text))
        
    }, [])

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id))
        dispatch(fetchArticlesRecommendations())
    })
    console.log('recommendations', recommendations);
    
    return (
        <DynamicModuleLoaders reducers={reducersList} removeAfterUnmount>
            <Page className={cls.ArticleDetailsPage}>
                <ArticleDetailsPageHeader />
                <ArticleDetails articleId={id} />
                <Text
                    size={TextSize.L}
                    title='Рекомендуем'
                    className={cls.commentTitle}
                />
                <ArticleList
                    articles={recommendations} 
                    isLoading={recommendationsIsLoading} 
                    view = {ArticleView.TILE}
                    className={cls.recommendations}
                    target='_blank' />
                <Text
                    size={TextSize.L}
                    title='Комментарии'
                    className={cls.commentTitle}
                />
                <AddNewCommentForm onSendComment={onSendComment} />
                <CommentList
                    isLoading={isLoading}
                    comments={comments} />
            </Page>
        </DynamicModuleLoaders>

    )
});
export default ArticleDetailsPage;

