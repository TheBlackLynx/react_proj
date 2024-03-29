import { ArticleView } from 'entities/Article/model/consts/consts';
import { memo } from 'react';
import { classNames} from 'shared';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
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