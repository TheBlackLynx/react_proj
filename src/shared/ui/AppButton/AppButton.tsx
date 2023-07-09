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
        children,
        buttonTheme = AppButtonTheme.OUTLINE,
        square,
        size = AppButtonSize.M,
        disabled,
        fullWidth,
        ...otherProps
    } = props;


    console.log('fullWidth', fullWidth);
    
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