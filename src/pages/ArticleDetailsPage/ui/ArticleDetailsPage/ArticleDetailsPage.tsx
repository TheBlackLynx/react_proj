import { ArticleDetails } from 'entities/Article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

const ArticleDetailsPage = memo(() => {
    const {t} = useTranslation('article');
    const { id } = useParams<{id: string}>();

    if (!id) {
        return (
            <div >
            {t('статья не найдена')}
        </div>
        )
    }
    return (
        <div >
            <ArticleDetails articleId={id}/>
            {t('ArticleDetailPage')}
        </div>
    )
});
export default memo(ArticleDetailsPage);

