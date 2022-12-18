import { Modal } from "shared/ui/Modal/Modal";
import cls from './LoginForm.module.scss'
import { AppButton, classNames, Text } from "shared";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";
import { AppButtonTheme } from "shared/ui/AppButton/AppButton";
import { useDispatch, useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { loginActions } from "features/AuthByUsername/model/slice/loginSlice";
import { getLoginState } from
    "features/AuthByUsername/model/selectors/getLoginState";
import { loginByUserName } from
    "features/AuthByUsername/model/services/loginByUserName/loginByUserName";
import { AnyAction, AsyncThunkAction } from "@reduxjs/toolkit";
import { dddd } from "app/providers/StoreProvider/ui/StoreProvider";
import { AppDispatch } from "app/providers/StoreProvider/config/store";
import { TextTheme } from "shared/ui/Text/Text";


export interface LoginFormProps {
    className?: string,
}
export const LoginForm = memo(({ className }: LoginFormProps) => {
    const {t} = useTranslation();
    const dispatch = useDispatch<AppDispatch>();
    const { login, password, error, isLoading } = useSelector(getLoginState);

    const onChangeLogin = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUserName({login, password}))
    }, [dispatch, login, password]);

    return (
        <div className={cls.loginForm}>
            <Text title="Форма авторизации"/>
            {error && 
                <Text text={error} theme={TextTheme.ERROR}/>
            }
            <Input 
                className={cls.loginInputs} 
                placeholder={t('Username')} type='text'
                onChange={onChangeLogin} 
                value={login} />
            <Input 
                className={cls.loginInputs} 
                placeholder={t('Password')} 
                type='text'
                onChange={onChangePassword} 
                value={password} />
            <AppButton 
                buttonTheme={AppButtonTheme.OUTLINE}
                className={cls.loginBtn}
                disabled={isLoading}
                onClick={onLoginClick}>
                {t('Войти')}
            </AppButton>
        </div>
    );
});
