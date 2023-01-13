import cls from './Select.module.scss'
import { classNames } from 'shared';
import { ChangeEvent, CSSProperties, memo, useMemo } from 'react';
import { TextSize } from '../Text/Text';

export interface SelectOption {
    value: string,
    content: string
}
interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean
}

export const Select = memo((props: SelectProps) => {
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
        onChange?.(e.target.value)
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
});