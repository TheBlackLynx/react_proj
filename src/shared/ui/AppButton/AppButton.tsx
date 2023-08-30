import cls from './AppButton.module.scss';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC, memo } from 'react';

export enum AppButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outlineRed',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
    CLEAR_INVERTED = 'clearInverted'
    
}

export enum AppButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

interface AppButtonType extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    buttonTheme?: AppButtonTheme;
    square?: boolean;
    size?: AppButtonSize;
    disabled?: boolean;
    fullWidth: boolean | null;
}

export const AppButton: FC<AppButtonType> = memo(( props ) => {
    const { 
        className,
        /**
         * Содержимое кнопки
         */
        children,
        /**
         * Тема кнопки
         */
        buttonTheme = AppButtonTheme.OUTLINE,
        /**
         * Флаг, делающий кнопку квадратной
         */
        square,
        /**
         * Размер кнопки
         */
        size = AppButtonSize.M,
        /**
         * Флаг, отключающий кнопку
         */
        disabled,
        /**
         * Флаг, устанавливающий размер кнопки на всю доступную ширину
         */
        fullWidth,
        ...otherProps
    } = props;
    
    const mods: Mods = {
        [cls.square] : square,
        [cls.disabled]: disabled,
        [cls.fullwidth]: fullWidth,
    }
    return (
        <button 
            type='button'
            className={
                classNames(cls.AppButton, mods,
                    [className, cls[buttonTheme], cls[size]])} 
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    )
});