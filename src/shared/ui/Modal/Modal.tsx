import cls from "./Modal.module.scss";
import { classNames } from '@/shared';
import { ReactNode } from "react";
import { Portal } from '../Portal/Portal';
import { useTheme } from '@/app/providers';
import { Mods } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal';
import { Overlay } from "../Overlay/Overlay";

interface ModalProps {
    className: string | null;
    children: ReactNode | null;
    isOpen: boolean | null;
    onClose: (() => void) | null;
    lazy: boolean | null
}

export const Modal = (props: ModalProps) => {
    const {
        children,
        isOpen,
        onClose,
    } = props;
    const { theme } = useTheme();

    const {
        closeHandler } = useModal({
        animationDelay: 300,
        onClose,
        isOpen
    });
    const mods: Mods = {
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
                <Overlay onClick={closeHandler} className={null} />
                <div className={cls.content}
                    onClick={(e) => contentClickHandler(e)}>
                    {children}
                </div>
            </div>
        </Portal>
    )
}
