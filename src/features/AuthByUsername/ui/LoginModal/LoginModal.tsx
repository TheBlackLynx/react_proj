import { Modal } from "shared/ui/Modal/Modal";
import { classNames } from "shared";
import { LoginForm } from "../LoginForm/LoginForm";


export interface LoginModalProps {
    className?: string,
    isOpen?: boolean,
    onClose: () => void
}
export const LoginModal = (props: LoginModalProps) => {
    const { className, isOpen, onClose } = props;
    return (
        <Modal className={classNames('cls.LangSwitcher', {}, [])}
            isOpen={isOpen}
            onClose={onClose}
            lazy={true}>
            <LoginForm />
        </Modal>
    );
};
