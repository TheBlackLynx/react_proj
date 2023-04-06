import { memo } from "react";
import cls from './Text.module.scss';
import { classNames } from "shared/lib/classNames/classNames";

export enum TextTheme {
    'NORMAL'= 'normal',
    'INVERTED'= 'inverted',
    'ERROR' = 'error',
}

export enum Align {
    'RIGHT'= 'right',
    'CENTER' = 'center',
    'LEFT' = 'left',
}

export enum TextSize {
    'S' = 'small',
    'M' = 'medium',
    'L' = 'large'
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: Align,
    size?: TextSize
}

export const Text = memo((props: TextProps) => {
    const {
        title, 
        text, 
        theme = TextTheme.NORMAL,
        align = Align.LEFT,
        size = TextSize.M,
        className
    } = props

    return (
        <div className={classNames(cls.Text, {
        }, [className, cls[align], cls[size], cls[theme]])} >
            {
                title && 
                <p className={cls.title}>{title}</p>
            }
            {
                text && 
                <p className={cls.text}>{text}</p>
            }
            
        </div>
    )
});