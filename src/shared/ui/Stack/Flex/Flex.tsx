import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { classNames } from "shared";
import { Mods } from "shared/lib/classNames/classNames";
import cls from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';

export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';

export type FlexGap = '4' | '8' | '16' | '32';
type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export interface FlexProps extends DivProps {
    children: ReactNode;
    className?: string;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction: FlexDirection;
    gap?: FlexGap,
    max?: boolean
}

const justifyClasses: Record<FlexJustify, string> = {
   
    center: cls.justifyCenter,
    between: cls.justifyBetween,
    start: cls.justifyStart,
    end: cls.justifyEnd,
}

const alignClasses: Record<FlexAlign, string> = {
    center: cls.alignCenter,
    start: cls.alignStart,
    end: cls.alignEnd,
}

const directionClasses: Record<FlexDirection, string> = {
    row: cls.directionRow,
    column: cls.directionColumn
}

const gapClasses: Record<FlexGap, string> = {
    4: cls.gap4,
    8: cls.gap8,
    16: cls.gap16,
    32: cls.gap32,
}



export const Flex = ({
    children, 
    className,
    justify = 'start',
    align = 'center',
    direction = 'row',
    gap = '4', 
    max = true }: FlexProps) => {

    const mods: Mods = {
        [cls.max]: max
    }
    return (
        <div className={classNames(cls.Flex, mods, [className,
            justifyClasses[justify], alignClasses[align], directionClasses[direction],
            gapClasses[gap], ])}>
            {children}
        </div>
    )
}