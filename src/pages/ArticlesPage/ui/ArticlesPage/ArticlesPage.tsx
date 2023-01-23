import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const ArticlesPage = memo(() => {
    const {t} = useTranslation('article');
    return (
        <div >
            {t('ArticlesPage')}
        </div>
    )
});
export default memo(ArticlesPage);