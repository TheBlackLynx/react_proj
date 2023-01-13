import cls from './Input.module.scss'
import React, { 
    FC,
    InputHTMLAttributes, 
    memo, 
    useEffect, 
    useRef, 
    useState } from "react";
import { Mods } from 'shared/lib/classNames/classNames';
import { classNames } from 'shared/lib/classNames/classNames';

type HTMLInputProps = 
Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

export interface InputProps extends HTMLInputProps {
    className?: string,
    type?: string,
    value?: string | number,
    onChange?: (value: string) => void,
    placeholder?: string,
    autoFocus?: boolean,
    readonly?: boolean
}


export const Input:FC<InputProps> = memo((props: InputProps) => {
    const { 
        className, 
        value, 
        type = 'text',
        onChange,
        placeholder,
        autoFocus,
        readonly,
        ...otherProps } = props;

    const [isfocused, setIsFocused] = useState(false);
    const [carriagePosition, setCarriagePosition] = useState(0)
    const ref = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if(autoFocus){
            setIsFocused(true)
            ref?.current?.focus();
            
        }
    }, [autoFocus])
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
        setCarriagePosition(e.target.value.length)
    }

    const onBlur = () => {
        setIsFocused(false)
    }
    const onFocus = () => {
        setIsFocused(true)
    }
    const onSelect = (e: any) => {
        setCarriagePosition(e?.target?.selectionStart || 0)
    }

    const mods: Mods = {
        [cls.readonly]: readonly
    }

    const isCarret = isfocused && !readonly;
    return (
        <div className={classNames(cls.InputWrapper, mods, [])}>
            { placeholder && <div className={cls.placeholder}>
                {`${placeholder} >`}
            </div>}
            <div className={cls.carriageWrapper}>
                <input 
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={cls.Input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    readOnly={readonly}
                />
                { isCarret &&
                <span 
                    style={{left: `${carriagePosition * 7.5}px`}}
                    className={cls.carriage}/>}
            </div>
        </div>
        
    );
});
