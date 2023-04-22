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

export type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTag> = {
    [TextSize.L]: 'h1',
    [TextSize.M]: 'h2',
    [TextSize.S]: 'h3',
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

    const HeaderTag = mapSizeToHeaderTag[size]

    return (
        <div className={classNames(cls.Text, {
        }, [className, cls[align], cls[size], cls[theme]])} >
            {
                title && 
                <HeaderTag className={cls.title}>{title}</HeaderTag>
            }
            {
                text && 
                <p className={cls.text}>{text}</p>
            }
            
        </div>
    )
});