import  cls from './Drawer.module.scss';
import {classNames, Mods} from '../../lib/classNames/classNames';
import { memo, ReactNode } from 'react';
import { useTheme } from 'app/providers';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';

interface DrawerProps {
   className: string | null;
   children: ReactNode;
   isOpen: boolean | null;
   onClose: (() => void) | null;
}

export const Drawer = memo(( props: DrawerProps ) => {
    const { 
        className, 
        children,
        isOpen,
        onClose
    } = props;

    const { theme } = useTheme();

    const mods: Mods = {
        [cls.opened]: isOpen
    }
    return (
        <Portal>
            <div 
                className={
                    classNames(cls.Drawer, mods, [className? className : '', theme, 'app_drawer'])}>
                <Overlay onClick={onClose} className={null}/>   
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
      
    )
});