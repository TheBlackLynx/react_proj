import { ArticleDetails } from 'entities/Article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Text } from 'shared';
import { CommentItem } from '../CommentItem/CommentItem';
import { CommentType } from 'entities/Comment/model/types/comment';
import cls from './CommentList.module.scss'
import { IsLoading } from 'entities/Profile/ui/ProfileCard/ProfileCard.stories';

interface CommentList {
    className?: string,
    comments?: CommentType[],
    isLoading?: boolean
}
export const CommentList = memo((props: CommentList) => {
    const { comments, isLoading } = props;
    const {t} = useTranslation('comments')
   
    return (
        <div >
            {comments?.length
            ? comments.map((comment) => (
                    <CommentItem  className={cls.CommentItem} comment={comment}/>
                ))
        : <Text text={t('Комментарии отсутствуют')}/>}
        </div>
    )
});

