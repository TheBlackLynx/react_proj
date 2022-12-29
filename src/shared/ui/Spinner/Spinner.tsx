import { FC, memo } from "react";
import cls from "./Spinner.module.scss";

interface SpinnerProps {
    className?: string;
}
export const Spinner: FC<SpinnerProps> = memo((props) => {

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

});
