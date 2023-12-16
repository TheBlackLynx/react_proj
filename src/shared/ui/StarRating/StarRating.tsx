import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StarRating.module.scss';
import { memo, useState } from 'react';
import { Icon } from '@/shared';
import StarIcon from '@/shared/assets/icons/star.svg';

interface StarRatingProps {
    className: string | null;
    onSelect: ((startsCount: number) => void) | null;
    size: number | null;
    selectedStars: number | null;
}
const rating = [1, 2, 3, 4, 5];
export const StarRating = memo((props: StarRatingProps) => {
    const { className, onSelect, size = 30, selectedStars = 0 } = props;
    const [currentStarsCount, setCurrentStarsCount] = useState(
        selectedStars ?? 0,
    );
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));
    console.log('isSelected ' + Boolean(0));
    const onHover = (starCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(0);
        }
    };

    const onClick = (starCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starCount);
            setCurrentStarsCount(starCount);
            setIsSelected(true);
            console.log('user select ' + starCount);
        }
    };

    return (
        <div className={classNames(cls.StarRating, {}, [className ?? ''])}>
            {rating.map((star) => {
                return (
                    <Icon
                        className={classNames(
                            cls.StarIcon,
                            { [cls.selected]: isSelected },
                            [
                                currentStarsCount >= star
                                    ? cls.hovered
                                    : cls.normal,
                            ],
                        )}
                        Svg={StarIcon}
                        key={star}
                        width={size ?? 30}
                        height={size ?? 30}
                        onMouseLeave={onLeave}
                        onMouseEnter={onHover(star)}
                        onClick={onClick(star)}
                    />
                );
            })}
        </div>
    );
});
