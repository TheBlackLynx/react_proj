import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { AppButton, classNames } from '@/shared';
import cls from './PageError.module.scss';

interface PageErrorType {
    className?: string;
}
export const PageError = memo((props: PageErrorType) => {
    const { t } = useTranslation();
    const { className } = props;
    const reloadPage = () => {
        location.reload();
    };
    return (
        <div className={classNames(cls.pageError, {}, [className])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <AppButton onClick={reloadPage} fullWidth={null}>
                {t('Обновить страницу')}
            </AppButton>
        </div>
    );
});
