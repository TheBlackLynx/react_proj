import  cls from './Drawer.module.scss';
import {classNames, Mods} from '../../lib/classNames/classNames';
import { memo, ReactNode } from 'react';
import { useTheme } from 'app/providers';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';
import { useModal } from 'shared/lib/hooks/useModal';

interface DrawerProps {
   className: string | null;
   children: ReactNode;
   isOpen: boolean | null;
   onClose: (() => void) | null;
   lazy: boolean | null
}

export const Drawer = memo(( props: DrawerProps ) => {
    const { 
        className, 
        children,
        isOpen,
        onClose,
        lazy,
    } = props;

    const { theme } = useTheme();

    const {
        closeHandler,
        isClosing,
        isMounted } = useModal({
        animationDelay: 500,
        onClose,
        isOpen
    });
    const mods: Mods = {
        [cls.opened]: isOpen && !isClosing,
        [cls.isClosing]: isClosing,
        //  баг - isOpen меняет свое значение по истечении animationDelay
 

    }

    if(lazy && !isMounted) {
        return null;
    }
    console.log('isClosing', isClosing);
    

    return (
        <Portal>
            <div 
                className={
                    classNames(cls.Drawer, mods, [className? className : '', theme, 'app_drawer'])}>
                <Overlay onClick={closeHandler} className={null}/>   
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
      
    )
});