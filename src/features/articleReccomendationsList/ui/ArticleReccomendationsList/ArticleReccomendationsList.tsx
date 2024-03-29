import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { TextSize } from 'shared';
import { ArticleList, ArticleView } from 'entities/Article';
import { Text } from 'shared';
import { VStack } from 'shared';
import { rtkApi } from 'shared/api/rtkApi';
import { getArticleRecomendations }
    from 'pages/ArticleDetailsPage/model/slice/articleDetailsPageRecomendationsSlice';
import { useArticleReccomendationsList } 
    from '../../api/articleReccomendationsApi';

interface ArticleReccomendationsListProps {
    className?: string;
}
export const ArticleReccomendationsList = memo((props: ArticleReccomendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { isLoading, data: articles, error } = useArticleReccomendationsList(3);

    if (isLoading || error || !articles) {
        return (
            <VStack>
                <Text size={TextSize.L}  title={t('Произошла ошибка')} />
            </VStack>
        )
    }
    return (
        <VStack gap={'8'} className={classNames('', {}, [className])}>
            <Text
                size={TextSize.L}
                title='Рекомендуем'
            />
            <ArticleList
                view={ArticleView.TILE}
                articles={articles} 
                target='_blank' />
        </VStack>
    );
});