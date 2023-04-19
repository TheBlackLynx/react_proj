import { Article, ArticleBlockType, ArticleImageBlock, ArticleTextBlock, ArticleView } from 'entities/Article/model/types/article';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppButton, classNames, Icon, Text } from 'shared';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useHover } from 'shared/lib/hooks/useHover';
import { AppButtonTheme } from 'shared/ui/AppButton/AppButton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { TextSize } from 'shared/ui/Text/Text';

import EyeIcon from '../../../../shared/assets/icons/eye-20-20.svg'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleListItem.module.scss'

interface ArticleListItemSkeletonProps {
    className?: string;
    view?: ArticleView;
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
    const { className, view } = props;

    if (view === ArticleView.LIST) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Card className={cls.Card}>
                    <div className={cls.header}>
                        <Skeleton border={'50%'} width={30} height={30}  />
                        <Skeleton width={150} height={16} className={cls.Login}/>
                        <Skeleton  width={150} height={16} className={cls.Date}/>
                    </div>
                    <Skeleton  width={250} height={24} className={cls.title}/>
                    <Skeleton width={200} className={cls.image} />
                    <Skeleton  className={cls.Paragraphs}/>
                    <div className={cls.footer}>
                        <Skeleton  width={200} height={36} />
                    </div>
                </Card>
            </div>
        )
    }

    return (
        // @ts-ignore
        <div  className={classNames(cls.ArticleListItemSkeleton, {}, [className, cls[view]])}>
            <Card>
                <div className={cls.imgWrapper}>
                    <Skeleton width={200} height={200} className={cls.image} />
                </div>
                <div className={cls.infoWrapper}>
                    <Skeleton width={130} height={16} className={cls.types} />
                </div>
                <Skeleton width={150} height={16} className={cls.title} />

            </Card>
        </div>
    )
});