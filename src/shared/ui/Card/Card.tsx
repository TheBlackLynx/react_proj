import './Card.module.scss';
import cls from './Card.module.scss'
import { classNames } from '../../lib/classNames/classNames';
import { HTMLAttributes, memo, ReactNode } from 'react';

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