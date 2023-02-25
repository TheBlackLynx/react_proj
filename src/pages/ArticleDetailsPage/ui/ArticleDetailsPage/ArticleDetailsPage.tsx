import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { AddNewCommentForm } from 'features/AddNewComment';
import { getCommentsError, getCommentsIsLoading }
    from 'pages/ArticleDetailsPage/model/selectors/comments';
import { addCommentForArticle }
    from 'pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId }
    from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { atricleDetailsCommentsReducer, getArticleComments }
    from 'pages/ArticleDetailsPage/model/slice/atricleDetailsCommentsSlice';
import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { clearScreenDown } from 'readline';
import { AppButton, Text } from 'shared';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { DynamicModuleLoaders, ReducerList }
    from 'shared/lib/components/DynamicModuleLoaders/DynamicModuleLoaders';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { AppButtonTheme } from 'shared/ui/AppButton/AppButton';
import cls from './ArticleDetailsPage.module.scss'

const reducersList: ReducerList = {
    comments: atricleDetailsCommentsReducer
}

interface ArticleDetailsPageProps {
    className?: string,
}
const ArticleDetailsPage = memo((props: ArticleDetailsPageProps) => {

    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getCommentsIsLoading);
    const error = useSelector(getCommentsError);
    const navigate = useNavigate();
    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate])


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
    })
    return (
        <DynamicModuleLoaders reducers={reducersList} removeAfterUnmount>
            <div >
                <AppButton
                    buttonTheme={AppButtonTheme.OUTLINE}
                    onClick={onBackToList}>{t('Назад к списку')}</AppButton>
                <ArticleDetails articleId={id} />
                <Text title='Комментарии' className={cls.commentTitle} />
                <AddNewCommentForm onSendComment={onSendComment} />
                <CommentList
                    isLoading={isLoading}
                    comments={comments} />
            </div>
        </DynamicModuleLoaders>

    )
});
export default memo(ArticleDetailsPage);

