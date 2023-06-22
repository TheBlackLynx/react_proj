import { useTheme } from "app/providers";
import { MutableRefObject, useCallback, useEffect, useRef, useState } from "react";

interface UseModalProps {
    onClose: (() => void) | null;
    isOpen: boolean | null;
    animationDelay: number | null;
}

export function useModal({
    onClose,
    isOpen,
    animationDelay
}: UseModalProps) {
    const [isMounted, setIsMounted] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const timeRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;


    useEffect(() => {
        if (isOpen) {
            setIsMounted(true)
        }
    }, [isOpen])
    const closeHandler = useCallback(() => {
        setIsClosing(true)
        if (onClose) {
            timeRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, animationDelay ? animationDelay : 0)
        }
    }, [onClose, animationDelay])

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
            clearTimeout(timeRef.current);
            window.removeEventListener('keydown', onKeyDown);
        }
    }, [isOpen, onKeyDown])

    return {
        isClosing,
        isMounted,
        closeHandler
    }

}