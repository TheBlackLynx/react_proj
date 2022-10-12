import cls from './AppButton.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';

export enum AppButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    PINK = 'pink'
}

interface AppButtonType extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    buttonTheme?: AppButtonTheme
}

export const AppButton: FC<AppButtonType> = ( props ) => {
    const { 
        className,
        children,
        buttonTheme,
        ...otherProps
    } = props;
    return (
        <button 
            type='button'
            className={
                classNames(cls.AppButton, {[cls[buttonTheme]]: true }, [className])} 
            {...otherProps}
        >
            {children}
        </button>
    )
}