import { Spinner } from '@/shared/ui/Spinner/Spinner';
import { lazy, FC, Suspense } from 'react';
import { ArticleRatingProps } from './ArticleRating';

const ArticleRatingLazy = 
lazy(() => import('./ArticleRating'), );

export const ArticleRatingAsync = (props: ArticleRatingProps) => {
    return (
        <Suspense fallback={<Spinner />}>
            <ArticleRatingLazy {...props} />
        </Suspense>
    )

}