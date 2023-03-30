import './Card.module.scss';
import cls from './Card.module.scss'
import { classNames } from 'shared';
import { CSSProperties, HTMLAttributes, memo, ReactNode, useMemo } from 'react';
import { TextSize } from '../Text/Text';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined'
}

interface CardProps extends HTMLAttributes<HTMLDivElement>{
    children: ReactNode;
    className?: string;
    theme?: CardTheme
}

export const Card = memo((props: CardProps) => {
    const { className, 
        children, 
        theme = CardTheme.NORMAL,
        ...otherProps } = props;


    return (
        <div className={classNames(cls.Card, {}, [className, cls[theme]])}
        {...otherProps} >
            {children}
        </div>
    )
});