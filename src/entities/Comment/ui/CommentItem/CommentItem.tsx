import { ArticleDetails } from 'entities/Article';
import { CommentType } from 'entities/Comment/model/types/comment';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AppLink, classNames, Text } from 'shared';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { TextSize } from 'shared/ui/Text/Text';
import cls from './CommentItem.module.scss'

interface CommentItemProps {
    className?: string,
    comment?: CommentType,
    isLoading?: boolean
}
export const CommentItem = memo((props: CommentItemProps) => {
    const { t } = useTranslation('article');
    const { className, comment, isLoading } = props;
  //  const isLoading = useSelector(getCommentsIsLoading);
    if (isLoading) {
        return (
            <div className={classNames(cls.CommentItem, {}, [className])}>
            <div className={cls.CommentItemHeader}>
                 <Skeleton width={30} height={30} border={'50%'} />
                 <Skeleton  height={30} width={80}/>
            </div>
            <Skeleton  height={30} width={150} className={cls.CommentItemText}/>
        </div>
        )
    }
    return (
        <div className={classNames(cls.CommentItem, {}, [className])}>
            <AppLink to={`${RoutePath.profile}${comment?.user.id}`} className={cls.CommentItemHeader}>
                { comment?.user.avatar &&
                 <Avatar size={30} src={comment?.user.avatar}  />
                }
                <Text size={TextSize.S} text={comment?.user.login} />
            </AppLink>
            <Text size={TextSize.S} text={comment?.text} className={cls.CommentItemText}/>
        </div>

    )
});

