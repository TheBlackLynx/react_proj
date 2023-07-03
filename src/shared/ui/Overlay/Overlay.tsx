import  cls from './Overlay.module.scss';
import {classNames} from '../../lib/classNames/classNames';
import { memo, MouseEventHandler } from 'react';

interface OverlayProps {
   className: string | null;
   onClick: (() => void) | null;
}

export const Overlay = memo(( props: OverlayProps ) => {
    const { 
        className, 
        onClick 
    } = props;
    return (
        <div 
            className={
                classNames(cls.Overlay, {}, [className? className : ''])
            }
            onClick={onClick as MouseEventHandler}>
        </div>
    )
});