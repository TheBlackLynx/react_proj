import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const ArticleCodeBlockComponent = memo(() => {
    const {t} = useTranslation('article');
    return (
        <div >
            {t('ArticleCodeBlockComponent')}
        </div>
    )
});
export default memo(ArticleCodeBlockComponent);