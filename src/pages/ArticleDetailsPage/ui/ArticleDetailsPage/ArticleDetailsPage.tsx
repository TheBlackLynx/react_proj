import { ArticleDetails } from '@/entities/Article';
import { getCommentsIsLoading } from '../../model/selectors/comments';
import { getArticleRecomendations } from '../../model/slice/articleDetailsPageRecomendationsSlice';
import { getArticleComments } from '../../model/slice/atricleDetailsCommentsSlice';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
    DynamicModuleLoader,
    ReducerList,
} from '@/shared/lib/components/DynamicModuleLoaders/DynamicModuleLoaders';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import cls from './ArticleDetailsPage.module.scss';
import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleReccomendationsList } from '@/features/articleReccomendationsList';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { Page } from '@/widgets';
import { ArticleRating } from '@/features/articleRating';

const reducersList: ReducerList = {
    articleDetailsPage: articleDetailsPageReducer,
};

interface ArticleDetailsPageProps {
    className?: string;
}
const ArticleDetailsPage = memo((props: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const recommendations = useSelector(getArticleRecomendations.selectAll);
    const isLoading = useSelector(getCommentsIsLoading);

    console.log('recommendations', recommendations);

    return (
        <DynamicModuleLoader reducers={reducersList} removeAfterUnmount>
            <Page className={cls.ArticleDetailsPage}>
                <ArticleDetailsPageHeader />
                <ArticleDetails articleId={id} />
                <ArticleRating className={null} articleId={id ?? null} />
                <ArticleReccomendationsList />
                <ArticleDetailsComments id={id} />
            </Page>
        </DynamicModuleLoader>
    );
});
export default ArticleDetailsPage;
