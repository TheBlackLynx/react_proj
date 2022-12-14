import cls from './Input.module.scss'
import React, { 
    InputHTMLAttributes, 
    memo, 
    useEffect, 
    useRef, 
    useState } from "react";

type HTMLInputProps = 
Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

export interface InputProps extends HTMLInputProps {
    className?: string,
    type: string,
    value?: string,
    onChange?: (value: string) => void,
    placeholder: string,
    autoFocus?: boolean
}


export const Input = memo((props: InputProps) => {
    const { 
        className, 
        value, 
        type = 'text',
        onChange,
        placeholder,
        autoFocus,
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
    return (
        <div className={cls.InputWrapper}>
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
                />
                { isfocused &&
                <span style={{left: `${carriagePosition * 7.5}px`}}className={cls.carriage}/>}
            </div>
        </div>
        
    );
});
