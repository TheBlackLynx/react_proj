import { memo } from "react";
import cls from './Text.module.scss';
import { classNames } from "shared/lib/classNames/classNames";

export enum TextTheme {
    'NORMAL'= 'normal',
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
        size = TextSize.M
    } = props
    const mods: Record<string, boolean> = {
        [cls[theme]] : true,
    }
    return (
        <div className={classNames(cls.Text, mods, [cls[align]])} >
            {
                title && 
                <p className={classNames(cls.title, {}, [cls[size]])}>{title}</p>
            }
            {
                text && 
                <p className={classNames(cls.text, {}, [cls[size]])}>{text}</p>
            }
            
        </div>
    )
});