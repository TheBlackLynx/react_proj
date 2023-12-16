import { useTranslation } from 'react-i18next';
import { AppButton, classNames } from '@/shared';
import cls from './LangSwitcher.module.scss';
import { AppButtonTheme } from '@/shared/ui/AppButton';
import { memo } from 'react';

export interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}
export const LangSwitcher = memo((props: LangSwitcherProps) => {
    const { short } = props;
    const { t, i18n } = useTranslation();
    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <AppButton
            className={classNames(cls.LangSwitcher, {}, [])}
            onClick={toggle}
            buttonTheme={AppButtonTheme.CLEAR}
            fullWidth={null}
        >
            {t(short ? 'Короткий язык' : 'Язык')}
        </AppButton>
    );
});
