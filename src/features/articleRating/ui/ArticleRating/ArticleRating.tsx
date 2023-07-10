import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { RatingCard } from '@/entities/Rating';
import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

export interface ArticleRatingProps {
    className: string | null;
    articleId: string | null;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
    const { className, articleId } = props;
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData); 
    

    const { data, isLoading } = useGetArticleRating({
        articleId:  articleId ?? '',
        userId: userData?.id ?? '',
    })

    console.log('????rating data', data);
    
   

    const [rateArticleMutation] = useRateArticle();

    const rating = data?.[0];

    const handleRateArticleMutation = useCallback((starCount: number, feedback?: string) => {
        try {
            rateArticleMutation({
                userId: userData?.id ?? '',
                articleId: articleId ?? '',
                rate: starCount ?? 0,
                feedback: feedback ?? ''
            })
        } catch (e) {
            console.log(e);
        }
    }, [userData?.id, rateArticleMutation,articleId ])

    const onCancel = useCallback((starCount: number) => {
        handleRateArticleMutation(starCount)
    }, [handleRateArticleMutation])

    const onAccept = useCallback((starCount: number, feedback?: string) => {
        handleRateArticleMutation(starCount, feedback)
    }, [handleRateArticleMutation])


    if (isLoading) {
        return (
            <Skeleton width={'100%'} height={120} />
        )
    }
    return (
        <RatingCard 
            className={classNames('', {}, [className ?? ''])}
            title={t('Rate the article')}
            feedBackTitle={t('Leave feedback on then article')}
            hasfeedback
            onCancel={onCancel}
            onAccept={onAccept} rate={rating?.rate ?? null} />
    );
});

export default ArticleRating;