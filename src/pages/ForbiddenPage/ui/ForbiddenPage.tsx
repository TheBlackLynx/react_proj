import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ForbiddenPage.module.scss';
import { Page } from '@/widgets';

const ForbiddenPage = memo(() => {
    const { t } = useTranslation('about');
    return (
        <Page data-testid={'ForbiddenPage'} className={cls.ForbiddenPage}>
            {t('Запрещено')}
        </Page>
    );
});
export default ForbiddenPage;
