import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { DynamicModuleLoaders, ReducerList } from
    'shared/lib/components/DynamicModuleLoaders/DynamicModuleLoaders';
import { fetchProfileData, getProfileError, getProfileForm, 
    getProfileIsLoading, getProfileReadOnly,
    getProfileValidateErrors,
    profileActions, ProfileCard, profileReducer, ValidateProfileError } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country/model/types/country';
import { TextTheme } from 'shared/ui/Text/Text';
import { Text } from 'shared/ui/Text/Text';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useParams } from 'react-router-dom';
import { Page } from 'shared';


const reducers: ReducerList = {
    profile: profileReducer
}
const ProfilePage = memo(() => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const data = useSelector(getProfileForm)
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadOnly);
    const validationErrors = useSelector(getProfileValidateErrors);
    const { id } = useParams<{ id: string }>();

    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({first: value || ''}))
    }, [dispatch])
    const onChangeLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({last: value || ''}))
    }, [dispatch])

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({city: value || ''}))
    }, [dispatch])

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({username: value || ''}))
    }, [dispatch])

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({avatar: value || ''}))
    }, [dispatch])

    const onChangeCurrency = useCallback((currency?: Currency) => {
        dispatch(profileActions.updateProfile({ currency }))
    }, [dispatch])

    const onChangeCountry = useCallback((country?: Country) => {
        dispatch(profileActions.updateProfile({ country }))
    }, [dispatch])


    const validateErrorTranslates  = {
        [ValidateProfileError.SERVER_ERROR]: 
        t('Серверная ошибка при сохранении'),
        [ValidateProfileError.INCORRECT_AGE]:
         t('Неверный формат возраста'),
        [ValidateProfileError.INCORRECT_AGE_LENGTH]:
         t('Значение возраста не может превыщать 3 символов'),
        [ValidateProfileError.NO_DATA]:
         t('Данные не указаны'),
        [ValidateProfileError.INCORRECT_USER_DATA]:
         t('Логин и имя пользователя обязательны при сохранении'),
        [ValidateProfileError.INCORRECT_COUNTRY]: 
        t('Не указана страна'),
        [ValidateProfileError.INCORRECT_USERNAME]: 
        t('Не указано имя пользователя'),

    }
     
    if (!id) {
        return (
            <div >
                {t('профиль пользователя не найден')}
            </div>
        )
    }
    useInitialEffect(() => {
        dispatch(fetchProfileData(id))
    })

    return (
        <Page>
            <DynamicModuleLoaders reducers={reducers} removeAfterUnmount={true}>
                <ProfilePageHeader />
                {
                    validationErrors?.length && validationErrors.map(err => (
                        <Text 
                            key={err}
                            theme={TextTheme.ERROR} 
                            text={validateErrorTranslates[err]}/>
                    ))
                }
                <ProfileCard
                    data={data}
                    isLoading={isLoading || false}
                    error={error} 
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    readonly={readonly}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </DynamicModuleLoaders>
        </Page>
    )
});

export default ProfilePage;