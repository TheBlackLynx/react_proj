import  cls from './Drawer.module.scss';
import {classNames, Mods} from '../../lib/classNames/classNames';
import { memo, ReactNode, useCallback, useEffect } from 'react';
import { useTheme } from '@/app/providers';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';
import { useAnimationLibs } from '@/shared/lib/components/AnimationProvider';


interface DrawerProps {
   className: string | null;
   children: ReactNode;
   isOpen: boolean | null;
   onClose: (() => void) | null;
   lazy: boolean | null
}

const height = window.innerHeight - 100;

const DrawerContent = memo(( props: DrawerProps ) => {
    const { 
        className, 
        children,
        isOpen,
        onClose,
        lazy,
    } = props;

    const { theme } = useTheme();
    const {Spring, Gesture} = useAnimationLibs();
    const [{ y }, api] = Spring.useSpring(() => ({ y: height }));
    const openDrawer = useCallback(() => {
        api.start({y:0, immediate: false})
    }, [api]);

    useEffect(() => {
        if (isOpen) {
            openDrawer();
        }
    }, [api, isOpen, openDrawer]);


    const close = (velocity = 0) => {
        api.start({
            y:height, 
            immediate: false,
            config: {...Spring.config.stiff, velocity},
            onResolve: onClose as () => void})
    }

    const bind = Gesture.useDrag(
        ( {
            last,
            velocity: [, vy],
            direction: [, dy],
            movement: [, my],
            cancel
        }) => {
            if (my < -70) cancel();
            if (last) {
                if ((my > height * 0.5) || (vy > 0.5 && dy > 0)) {
                    close()
                } else {
                    api.start({
                        y: my,
                        immediate: true,
                    })
                }
            }
        },
        {
            from: () => [0, y.get()], filterTaps: true, bounds: { top: 0}, rubberband: true
        }
    )

    if (!isOpen) {
        return null;
    }

    const display = y.to((py) => (py < height ? 'block' : 'none'))

    return (
        <Portal>
            <div 
                className={
                    classNames(cls.Drawer, {}, [className? className : '', theme, 'app_drawer'])}>
                <Overlay onClick={close} className={null}/>   
                <Spring.a.div className={cls.sheet}
                    style={{display, bottom: `calc(-100vh + ${height - 100}px)`, y}}
                    {...bind()}>
                    {children}
                </Spring.a.div>
            </div>
        </Portal>
      
    )
});

export const Drawer = memo((props: DrawerProps) => {
    const {isLoaded} = useAnimationLibs();

    if (!isLoaded) {
        return (
            <div>
                Библиотеки загружаются
            </div>
        );
    }
    return <DrawerContent {...props} />
})