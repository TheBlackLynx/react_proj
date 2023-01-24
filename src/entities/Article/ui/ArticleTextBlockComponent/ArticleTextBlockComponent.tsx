import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const ArticleTextBlockComponent = memo(() => {
    const {t} = useTranslation('article');
    return (
        <div >
            {t('ArticleTextBlockComponent')}
        </div>
    )
});
export default memo(ArticleTextBlockComponent);