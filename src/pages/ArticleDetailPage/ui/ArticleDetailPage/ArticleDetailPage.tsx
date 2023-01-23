import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const ArticleDetailPage = memo(() => {
    const {t} = useTranslation('article');
    return (
        <div >
            {t('ArticleDetailPage')}
        </div>
    )
});
export default memo(ArticleDetailPage);

