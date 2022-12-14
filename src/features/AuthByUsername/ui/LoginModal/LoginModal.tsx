import { Modal } from "shared/ui/Modal/Modal";
import { classNames, Loader } from "shared";
import { memo, Suspense } from "react";
import { LoginFormAsync } from "../LoginForm/LoginForm.async";


export interface LoginModalProps {
    className?: string,
    isOpen?: boolean,
    onClose: () => void
}
export const LoginModal = memo((props: LoginModalProps) => {
    const { isOpen, onClose } = props;
    return (
        <Modal className={classNames('cls.LangSwitcher', {}, [])}
            isOpen={isOpen}
            onClose={onClose}
            lazy={true}>

            <Suspense fallback={<Loader />}>
                <LoginFormAsync onSuccess={onClose}/>
            </Suspense>
           
        </Modal>
    );
});
