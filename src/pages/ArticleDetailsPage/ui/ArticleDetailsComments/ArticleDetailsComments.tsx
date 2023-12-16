import { CommentList } from '@/entities/Comment';
import { AddNewCommentForm } from '@/features/AddNewComment';
import { getCommentsIsLoading } from '../../model/selectors/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleRecomendations } from '../../model/slice/articleDetailsPageRecomendationsSlice';
import { getArticleComments } from '../../model/slice/atricleDetailsCommentsSlice';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { TextSize, VStack, Text } from '@/shared';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';

interface ArticleDetailsCommentsProps {
    className?: string;
    id?: string;
}

export const ArticleDetailsComments = (props: ArticleDetailsCommentsProps) => {
    const { className, id } = props;
    const comments = useSelector(getArticleComments.selectAll);
    const recommendations = useSelector(getArticleRecomendations.selectAll);
    const isLoading = useSelector(getCommentsIsLoading);

    const dispatch = useAppDispatch();

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text));
        },
        [dispatch],
    );

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });
    return (
        <VStack gap={'16'} max>
            <Text
                size={TextSize.L}
                title="Комментарии"
                className={'cls.commentTitle'}
            />

            <AddNewCommentForm onSendComment={onSendComment} />
            <CommentList isLoading={isLoading} comments={comments} />
        </VStack>
    );
};
