import {classNames} from 'shared';
import { memo, MutableRefObject, ReactNode, useRef } from 'react';
import cls from './Page.module.scss'
import { UseInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll';

interface PageProps {
   className?: string;
   children: ReactNode;
   onScrollEnd?: () => void;
}

export const Page = ( props: PageProps ) => {
    const { className, children, onScrollEnd } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>

    UseInfiniteScroll({
        triggerRef,
        wrapperRef, 
        callback: onScrollEnd
    })
    return (
        <section 
        ref={wrapperRef} 
        className={classNames(cls.Page, {}, [className])}
        >
            {children}
            <div ref={triggerRef} />
        </section>
    )
};