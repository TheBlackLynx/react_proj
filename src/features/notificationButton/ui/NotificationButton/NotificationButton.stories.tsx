   import { classNames } from '@/shared/lib/classNames/classNames';
            import { useTranslation } from 'react-i18next';
            import cls from './NotificationButton.module.scss';
            import { memo } from 'react';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;
    const { t } = useTranslation();
    
    return (
        <div className={classNames(cls.NotificationButton, {}, [className])}>
           
        </div>
    );
});