import { FC, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Spinner.module.scss';

export enum SpinnerSize {
    'S' = 'small',
    'M' = 'medium',
    'L' = 'large',
}
interface SpinnerProps {
    className?: string;
    size?: SpinnerSize;
}
export const Spinner: FC<SpinnerProps> = memo((props) => {
    const { size = SpinnerSize.M } = props;
    return (
        <div className={cls.container}>
            <div className={classNames(cls.box, {}, [cls[size]])}>
                <div className={cls.loader}>
                    <span></span>
                </div>
                <div className={cls.loader}>
                    <span></span>
                </div>
                <div className={cls.loader}>
                    <i></i>
                </div>
                <div className={cls.loader}>
                    <i></i>
                </div>
            </div>
        </div>
    );
});
