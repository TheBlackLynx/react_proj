import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from 'entities/Article/model/selectors/articleDetails';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleSlice';
import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import cls from './ArticleDetails.module.scss'
import { DynamicModuleLoaders, ReducerList } from 'shared/lib/components/DynamicModuleLoaders/DynamicModuleLoaders';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Spinner } from 'shared/ui/Spinner/Spinner';
import { Text } from 'shared';
import { Align } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

interface ArticleDetailsProps {
    className?: string,
    articleId: string
}
const reducers: ReducerList = {
    articleDetails: articleDetailsReducer
}
export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { articleId } = props;
    const { t } = useTranslation('article');
   // const isLoading = useSelector(getArticleDetailsIsLoading);
   const isLoading = true;
    const error = useSelector(getArticleDetailsError);
    const article = useSelector(getArticleDetailsData);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchArticleById(articleId))
    }, [dispatch, articleId])

        let content;
    if (isLoading) {
        content = (
        <div>
            <Skeleton className={cls.Avatar} width={200} height={200} border={'50%'}/>
            <Skeleton className={cls.Title} width={300} height={32} />
            <Skeleton className={cls.Skeleton} width={600} height={24} />
            <Skeleton className={cls.Skeleton} width={'100%'} height={200} />
            <Skeleton className={cls.Skeleton} width={'100%'}height={200} />
        </div>
        )
     } else if (error) {
        content = (
        <Text
        align={Align.CENTER}
        title={'Произошла ошибка при загрузке статьи'} />
        )
    } else {
        content  = 'ArticleDetails'
    }
    return (
        <DynamicModuleLoaders reducers={reducers} removeAfterUnmount={true}>
            <div className={cls.ArticleDetails}>
                {content}
            </div>
        </DynamicModuleLoaders>

    )
});

