import { memo, ReactNode } from "react";
import { createPortal } from "react-dom";
import cls from './Text.module.scss';
import { classNames } from "shared/lib/classNames/classNames";

export enum TextTheme {
    'NORMAL'= 'normal',
    'ERROR' = 'error',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
}

export const Text = memo((props: TextProps) => {
    const {
        className, 
        title, 
        text, 
        theme = TextTheme.NORMAL
    } = props
    const mods: Record<string, boolean> = {
        [cls[theme]] : true,
    }
    return (
        <div className={classNames(cls.Text, mods)} >
            {
                title && 
                <p className={classNames(cls.title)}>{title}</p>
            }
            {
                text && 
                <p className={classNames(cls.text)}>{text}</p>
            }
            
        </div>
    )
});