import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const ArticleImageBlockComponent = memo(() => {
    const {t} = useTranslation('article');
    return (
        <div >
            {t('ArticleImageBlockComponent')}
        </div>
    )
});
export default memo(ArticleImageBlockComponent);