import cls from './AppButton.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';

export enum AppButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
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
}

export const AppButton: FC<AppButtonType> = ( props ) => {
    const { 
        className,
        children,
        buttonTheme,
        square,
        size,
        disabled,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls.square] : square,
        [cls.disabled]: disabled
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
}