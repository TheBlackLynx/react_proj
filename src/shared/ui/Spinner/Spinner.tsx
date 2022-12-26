import { FC } from "react";
import { Link } from "react-router-dom";
import { LinkProps } from "react-router-dom";
import { classNames } from "shared";
import cls from "./Spinner.module.scss";

interface SpinnerProps {
    className?: string;
}
export const Spinner: FC<SpinnerProps> = (props) => {
    const {
        className
    } = props;
    return (
        <div className={cls.container}>
            <div className={cls.box}>
                <div className={cls.loader}><span></span></div>
                <div className={cls.loader}><span></span></div>
                <div className={cls.loader}><i></i></div>
                <div className={cls.loader}><i></i></div>
            </div>
        </div>
    )

};
