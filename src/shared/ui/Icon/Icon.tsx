import cls from './Icon.module.scss';
import { memo } from 'react';
import { clearScreenDown } from 'readline';
import { classNames } from 'shared';

interface IconProps {
   className?: string;
   Svg: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const Icon = memo(( props: IconProps ) => {
    const { className, Svg } = props;
    return (
        
    <Svg className={classNames(cls.Icon, {}, [className])}/>
    )
});