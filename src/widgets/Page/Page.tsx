import {classNames} from 'shared';
import { memo, MutableRefObject, ReactNode, useRef, UIEvent } from 'react';
import cls from './Page.module.scss'
import { UseInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getScrollPositionByPath, scrollActions } from 'features/ScrollSave';
import { useLocation } from 'react-router-dom';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { useThrottle } from 'shared/lib/hooks/useThrottle';

interface PageProps {
   className?: string;
   children: ReactNode;
   onScrollEnd?: () => void;
}

export const Page = ( props: PageProps ) => {
    const { className, children, onScrollEnd } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
    const dispatch = useAppDispatch();
    const {pathname} = useLocation();
    const scrollPos = useSelector((state: StateSchema) => getScrollPositionByPath(state, pathname))

    UseInfiniteScroll({
        triggerRef,
        wrapperRef, 
        callback: onScrollEnd
    })

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPos
    })

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(scrollActions.setScrollPositiont({
            path: pathname,
            position: e.currentTarget.scrollTop
        }))
        console.log('scroll', e.currentTarget.scrollTop);
        
    }, 1000)
    return (
        <section 
        ref={wrapperRef} 
        className={classNames(cls.Page, {}, [className])}
        onScroll={onScroll}
        >
            {children}
            <div ref={triggerRef} />
        </section>
    )
};