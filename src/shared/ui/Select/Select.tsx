import cls from './Select.module.scss'
import { classNames } from 'shared';
import { ChangeEvent, CSSProperties, memo, useMemo } from 'react';
import { TextSize } from '../Text/Text';

export interface SelectOption<T extends string>{
    value: T,
    content: T
}
interface SelectProps<T extends string> {
    className?: string;
    label?: T;
    options?: SelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readonly?: boolean
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const {
        className,
        label,
        options,
        value,
        readonly,
        onChange } = props;

    const optionList = useMemo(() => {
        return options?.map(opt => {
            return (
                <option
                    className={cls.option}
                    value={opt.value}
                    key={opt.value}
                >
                    {opt.content}
                </option>
            )
        })
    }, [options])

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T)
    }
    return (
        <div
            className={classNames(cls.Wrapper, {}, [className])}
        >
            {label && (
                <span className={cls.Label}>{label}</span>
            )}
            <select
                className={cls.Select}
                value={value}
                disabled={readonly}
                onChange={onChangeHandler}>
                {optionList}
            </select>
        </div>
    )
};