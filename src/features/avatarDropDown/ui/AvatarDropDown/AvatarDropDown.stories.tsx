   import { classNames } from '@/shared/lib/classNames/classNames';
            import { useTranslation } from 'react-i18next';
            import cls from './AvatarDropDown.module.scss';
            import { memo } from 'react';

interface AvatarDropDownProps {
    className?: string;
}

export const AvatarDropDown = memo((props: AvatarDropDownProps) => {
    const { className } = props;
    const { t } = useTranslation();
    
    return (
        <div className={classNames(cls.AvatarDropDown, {}, [className])}>
           
        </div>
    );
});