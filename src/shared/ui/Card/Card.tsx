import './Card.module.scss';
import cls from './Card.module.scss'
import { classNames } from 'shared';
import { CSSProperties, HTMLAttributes, memo, ReactNode, useMemo } from 'react';
import { TextSize } from '../Text/Text';

interface CardProps extends HTMLAttributes<HTMLDivElement>{
    children: ReactNode;
    className?: string;
}

export const Card = memo((props: CardProps) => {
    const { className, children, ...otherProps } = props;


    return (
        <div className={classNames(cls.Card, {}, [className])}
        {...otherProps} >
            {children}
        </div>
    )
});