import cls from './Icon.module.scss';
import { memo } from 'react';
import { clearScreenDown } from 'readline';
import { classNames } from '../../lib/classNames/classNames';

interface StarRatingProps {
   className?: string;
   Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
   inverted?: boolean
}

export const StarRating = memo(( props: StarRatingProps ) => {
    const { className, Svg, inverted} = props;
    return (
        
        <Svg className={classNames(inverted? cls.inverted : cls.Icon, {}, [className])}/>
    )
});