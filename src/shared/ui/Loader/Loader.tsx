import  './Loader.scss';
import {classNames} from 'shared';

interface LoaderProps {
   className?: string;
}

export const Loader = ( props: LoaderProps ) => {
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
}