import { useCallback, useRef } from 'react';

export function useThrottle(callback: (...args: any[]) => void, delay: number) {
    const throttleRef = useRef(false);

    return useCallback(
        (...args: any[]) => {
            if (!throttleRef.current) {
                callback(...args);
                // @ts-ignore
                throttleRef.current = true;

                setTimeout(() => {
                    // @ts-ignore
                    throttleRef.current = false;
                }, delay);
            }
        },
        [callback, delay],
    );
}
