import { MutableRefObject, useEffect, useRef } from "react";

export interface UseInfiniteScrollOptions {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef: MutableRefObject<HTMLElement>;
}

export function UseInfiniteScroll({ callback, triggerRef, wrapperRef }: UseInfiniteScrollOptions) {
    // const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        if (callback) {
            let options = {
                root: wrapperRef.current,
                rootMargin: "0px",
                threshold: 1.0,
            };

           const observer = new IntersectionObserver(([entry]) => {
            
                callback();
            }, options);
            observer.observe(triggerRef.current)

            return () => {
                if (observer) {
                    observer.unobserve(triggerRef.current)
                }
            }
        }
    }, [triggerRef, wrapperRef])
}