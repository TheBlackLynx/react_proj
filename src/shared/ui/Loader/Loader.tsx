import  './Loader.module.scss';
import {classNames} from 'shared';
import { memo } from 'react';

interface LoaderProps {
   className?: string;
}

export const Loader = memo(( props: LoaderProps ) => {
    const { className } = props;
    return (
        <div className={classNames("lds-roller", {}, [className])}>
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>
    )
});