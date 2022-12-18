import React, { useState, useRef, useEffect, useCallback } from 'react';
import cls from "./Modal.module.scss";
import { classNames } from 'shared';
import {  ReactNode } from "react";
import { Portal } from '../Portal/Portal';
import { useTheme } from 'app/providers';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy: boolean
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose, 
        lazy,
    } = props;
    const {theme } = useTheme();
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        if(isOpen){
            setIsMounted(true)
        }
    }, [isOpen])
    const closeHandler = useCallback(() => {
        onClose ? onClose() : null
        timeRef.current = setTimeout(() => {
            onClose()
        }, ANIMATION_DELAY)
    }, [onClose])
    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler])


    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearTimeout(timeRef?.current);
            window.removeEventListener('keydown', onKeyDown);
        }
    }, [isOpen, onKeyDown])
    
    // if (lazy && !isMounted ) {
    //     return null;
    // }
  
    const [isClosing, setIsClosing] = useState(false);
    const timeRef = useRef<ReturnType<typeof setTimeout>>();
    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen
    }

    const contentClickHandler = (e: React.MouseEvent) => {
        e.stopPropagation();
    }
    return (
        <Portal >
            <div className={
                classNames(cls.Modal, 
                    mods, 
                    [theme, 'app_modal'])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content}
                        onClick={(e) => contentClickHandler(e)}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}
