import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import cls from './ForbiddenPage.module.scss'

const ForbiddenPage = memo(() => {
    const {t} = useTranslation('about');
    return (
        <Page className={cls.ForbiddenPage}>
            {t('Запрещено')}
        </Page>
    )
});
export default ForbiddenPage;
