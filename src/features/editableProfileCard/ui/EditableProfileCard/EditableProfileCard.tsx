import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { TextTheme } from '@/shared/ui/Text/Text';
import { Text, VStack } from '@/shared';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { ProfileCard } from '@/entities/Profile';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoaders/DynamicModuleLoaders';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { ValidateProfileError } from '@/features/editableProfileCard/model/consts/consts';

interface EditableProfileCardProps {
    className?: string;
    id?: string
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const data = useSelector(getProfileForm)
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadOnly);
    const validationErrors = useSelector(getProfileValidateErrors);

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });
    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ first: value || '' }))
    }, [dispatch])
    const onChangeLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ last: value || '' }))
    }, [dispatch])

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }))
    }, [dispatch])

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ username: value || '' }))
    }, [dispatch])

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }))
    }, [dispatch])

    const onChangeCurrency = useCallback((currency?: Currency) => {
        dispatch(profileActions.updateProfile({ currency }))
    }, [dispatch])

    const onChangeCountry = useCallback((country?: Country) => {
        dispatch(profileActions.updateProfile({ country }))
    }, [dispatch])

    const reducers: ReducerList = {
        profile: profileReducer
    }
    const validateErrorTranslates = {
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

    if (!data && !id) {
        return <Text theme={TextTheme.ERROR} text={t('Профиль не найден')}/>
    }
    
    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack gap={'8'}
                max >
                <EditableProfileCardHeader />
                {
                    validationErrors?.length && 
                    validationErrors.map((err: ValidateProfileError) => (
                        <Text
                            key={err}
                            theme={TextTheme.ERROR}
                            text={validateErrorTranslates[err]} 
                            data-testid="EditableProfileCard.Error"/>
                    ))}

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
            </VStack>
        </DynamicModuleLoader>
    );
});