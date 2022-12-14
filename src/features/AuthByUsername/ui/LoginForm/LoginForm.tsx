import { Modal } from "shared/ui/Modal/Modal";
import cls from './LoginForm.module.scss'
import { AppButton, classNames } from "shared";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";


export interface LoginFormProps {
    className?: string,
}
export const LoginForm = ({ className }: LoginFormProps) => {
    const {t} = useTranslation()
    return (
        <div className={cls.loginForm}>
            <Input placeholder={t('Username')} type='text' />
            <Input placeholder={t('Password')} type='text' />
            <AppButton className={cls.loginBtn}>
                {t('Войти')}
            </AppButton>
        </div>
    );
};
