import { memo } from "react";
import cls from './Text.module.scss';
import { classNames } from "@/shared/lib/classNames/classNames";

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
    size?: TextSize,
    'data-testid'?: string
}

export type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
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
        className,
        'data-testid': dataTestId = 'test'
    } = props

    const HeaderTag = mapSizeToHeaderTag[size]

    return (
        <div className={classNames(cls.Text, {
        }, [className, cls[align], cls[size], cls[theme]])} >
            {
                title && 
                <HeaderTag 
                    className={cls.title}
                    data-testid={`${dataTestId}.Header`}
                >{title}</HeaderTag>
            }
            {
                text && 
                <p className={cls.text}
                    data-testid={`${dataTestId}.Paragraph`}>{text}</p>
            }
            
        </div>
    )
});