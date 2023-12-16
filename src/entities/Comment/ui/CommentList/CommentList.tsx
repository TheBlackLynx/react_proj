import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, VStack } from '@/shared';
import { CommentItem } from '../CommentItem/CommentItem';
import { CommentType } from '../../model/types/comment';

interface CommentList {
    className?: string;
    comments?: CommentType[];
    isLoading?: boolean;
}
export const CommentList = memo((props: CommentList) => {
    const { comments, isLoading } = props;
    const { t } = useTranslation('comments');

    if (isLoading) {
        return (
            <VStack gap={'16'} max>
                <CommentItem isLoading />
                <CommentItem isLoading />
                <CommentItem isLoading />
            </VStack>
        );
    }
    return (
        <VStack gap={'16'} max>
            {comments?.length ? (
                comments.map((comment) => (
                    <CommentItem key={comment.id} comment={comment} />
                ))
            ) : (
                <Text text={t('Комментарии отсутствуют')} />
            )}
        </VStack>
    );
});
