import cls from './AppButton.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';

export enum AppButtonTheme {
    CLEAR = 'clear',
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
        {...otherProps}
        className={
            classNames(cls.AppButton, {}, [className, cls[buttonTheme]])} 
            >
            {children}
        </button>
    )
}