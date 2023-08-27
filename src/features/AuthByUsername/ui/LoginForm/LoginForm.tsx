import cls from './LoginForm.module.scss'
import { AppButton, Text } from "@/shared";
import { useTranslation } from "react-i18next";
import { Input } from "@/shared/ui/Input";
import { AppButtonTheme } from "@/shared/ui/AppButton";
import { useSelector} from "react-redux";
import { memo, useCallback } from "react";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";

import { loginByUserName } from
    "../../model/services/loginByUserName/loginByUserName";
// import { AppDispatch } from "app/providers/StoreProvider/config/store";
import { TextTheme } from "@/shared/ui/Text";
import { getLoginLogin } from "../../model/selectors/getLoginLogin/getLoginLogin";
import { getLoginPassword } from 
    "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginError } from
    "../../model/selectors/getLoginError/getLoginError";
import { getLoginIsLoading } from 
    "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { DynamicModuleLoader, ReducerList } from 
    "@/shared/lib/components/DynamicModuleLoaders/DynamicModuleLoaders";
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';


export interface LoginFormProps {
    className: string | null,
    onSuccess: (() => void) | null
}

const initialReducers: ReducerList = {
    loginForm: loginReducer
}
const LoginForm = memo(({ onSuccess }: LoginFormProps) => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const login = useSelector(getLoginLogin)
    const password = useSelector(getLoginPassword)
    const error = useSelector(getLoginError)
    const isLoading = useSelector(getLoginIsLoading);

    const onChangeLogin = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
       
        
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        // @ts-ignore
        const result = await dispatch(loginByUserName({login, password}))
        if (result.meta.requestStatus === 'fulfilled'){
            if(onSuccess){
                onSuccess()
            }
        }
       
    }, [onSuccess, dispatch, login, password]);

    return (
        <DynamicModuleLoader
            reducers={initialReducers} 
            // reducers={loginForm: loginReducer} 
            // если передавать в таком виде, то при каждом рендере ссылка будет меняться
            removeAfterUnmount={true}
        >
            <div className={cls.loginForm}>
                <Text title={'Форма авторизации'}/>
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
                    onClick={onLoginClick} fullWidth={null}>
                    {t('Войти')}
                </AppButton>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;