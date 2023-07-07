import  './Skeleton.module.scss';
import {classNames} from '@/shared';
import { CSSProperties, memo } from 'react';
import { clearScreenDown } from 'readline';
import cls from './Skeleton.module.scss'

interface SkeletonProps {
   className?: string;
   height?: string | number;
   width?: string | number;
   border?: string
}

export const Skeleton = memo(( props: SkeletonProps ) => {
    const { 
        className,
        height,
        width,
        border
    } = props;

    const styles: CSSProperties = {
        height,
        width,
        borderRadius: border
    }
    return (
        <div 
            className={classNames(cls.Skeleton, {}, [className])}
            style={styles}>
       
        </div>
    )
});