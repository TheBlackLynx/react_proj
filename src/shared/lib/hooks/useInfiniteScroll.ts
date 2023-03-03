import { MutableRefObject, useEffect, useRef } from "react";

export interface UseInfiniteScrollOptions {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef: MutableRefObject<HTMLElement>;
}

export function UseInfiniteScroll({ callback, triggerRef, wrapperRef }: UseInfiniteScrollOptions) {
    // const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
 // добавляем переменные в замыкание, чтобы зафиксировать ссылки wrapperRef и triggerRef
        const wrapperRefClosure = wrapperRef.current
        const triggerRefClosure = triggerRef.current
        if (callback) {
            let options = {
                root: wrapperRefClosure,
                rootMargin: "0px",
                threshold: 1.0,
            };

           const observer = new IntersectionObserver(([entry]) => {
       
                callback();
            }, options);
            observer.observe(triggerRefClosure)

            return () => {
                if (observer && triggerRefClosure) {
                    observer.unobserve(triggerRefClosure)
                }
            }
        }
    }, [triggerRef, wrapperRef])
}