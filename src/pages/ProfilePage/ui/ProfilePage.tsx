import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect, useState } from 'react';
import { DynamicModuleLoaders, ReducerList } from
    'shared/lib/components/DynamicModuleLoaders/DynamicModuleLoaders';
import { fetchProfileData, getProfileAgeError, getProfileData, getProfileError, getProfileForm, 
    getProfileIsLoading, getProfileReadOnly,
    profileActions, ProfileCard, profileReducer } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country/model/types/country';


const reducers: ReducerList = {
    profile: profileReducer
}
const ProfilePage = memo(() => {
    const { t } = useTranslation('main');
    const dispatch = useAppDispatch();
    const data = useSelector(getProfileForm)
    const error = useSelector(getProfileError);
    const ageError = useSelector(getProfileAgeError);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadOnly);

    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({first: value || ''}))
    }, [dispatch])
    const onChangeLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({last: value || ''}))
    }, [dispatch])

    const onChangeAge = useCallback((value?: string) => {
        const re = new RegExp(/^\d+$/);
        // @ts-ignore
        if (re.test(value) && value?.length <= 3){
            dispatch(profileActions.updateProfile({age: Number(value) || 0}))
            dispatch(profileActions.setAgeError(''))
        }
        else {
            dispatch(profileActions.updateProfile({age: 0}))
            dispatch(profileActions.setAgeError('Неверное значение поля Age'))
        }
        
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


    useEffect(() => {
        
        dispatch(fetchProfileData())
        
    }, [dispatch])

    return (
        <div >
            <DynamicModuleLoaders reducers={reducers} removeAfterUnmount={true}>
                <ProfilePageHeader />
                <ProfileCard
                    data={data}
                    isLoading={isLoading || false}
                    error={error} 
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    readonly={readonly}
                    ageError={ageError}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </DynamicModuleLoaders>
        </div>
    )
});

export default ProfilePage;