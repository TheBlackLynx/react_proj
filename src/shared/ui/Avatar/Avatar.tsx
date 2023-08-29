import cls from  './Avatar.module.scss';
import {classNames} from '../../lib/classNames/classNames';
import { CSSProperties, memo, useMemo } from 'react';

interface AvatarProps {
   className?: string;
   src?: string;
   size?: number;
   alt?: string;
}

export const Avatar = memo(( props: AvatarProps ) => {
    const { className, src, size, alt } = props;

    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size
    }), [size])

    return (
        <img 
            style={styles}
            className={classNames(cls.Avatar, {}, [className])}
            src={src}
            alt={alt} />
    )
});