import cls from  './Avatar.module.scss';
import {classNames} from '../../lib/classNames/classNames';
import { CSSProperties, memo, useMemo } from 'react';
import { AppImage } from '../AppImage';
import  DefaultUserAvavtar from '../../assets/icons/defaultUserAvatar.svg'
import { Skeleton } from '../Skeleton';
import { Icon } from '../Icon';


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

    const errorFallback = <Icon 
        width={size}
        height={size}
        Svg={DefaultUserAvavtar} />

    const fallback = <Skeleton 
        width={size}
        height={size}
        border={'50%'}/>
    return (
        <AppImage 
            fallback={fallback}
            errorFallBack={errorFallback}
            style={styles}
            className={classNames(cls.Avatar, {}, [className])}
            src={src}
            alt={alt} />
    )
});