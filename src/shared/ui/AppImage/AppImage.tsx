import {
    ImgHTMLAttributes,
    ReactElement,
    useLayoutEffect,
    useState,
} from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    fallback: ReactElement;
    errorFallBack: ReactElement;
}

export const AppImage = (props: AppImageProps) => {
    const { className, fallback, errorFallBack, src, alt, ...otherProps } =
        props;
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useLayoutEffect(() => {
        const img = new Image();
        img.src = src ?? '';
        img.onload = () => {
            setIsLoading(false);
        };
        img.onerror = () => {
            setIsLoading(false);
            setHasError(true);
        };
    }, [src]);
    if (isLoading) {
        return fallback;
    }
    if (hasError) {
        return errorFallBack;
    }
    return <img className={className} src={src} alt={alt} {...otherProps} />;
};
