import cls from './ProfileCard.module.scss';
import { memo, useCallback, useEffect } from "react";
import { ProfileType } from "entities/Profile/model/types/profile";
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { useSelector } from 'react-redux';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from
    'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { AppButton, classNames, Input } from 'shared';
import { Text } from 'shared';
import { useTranslation } from 'react-i18next';
import App from 'app/App';
import { AppButtonTheme } from 'shared/ui/AppButton/AppButton';
import { Spinner, SpinnerSize } from 'shared/ui/Spinner/Spinner';
import { Align, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { profileActions } from 'entities/Profile/model/slice/profileSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getProfileReadOnly } 
    from 'entities/Profile/model/selectors/getProfileReadOnly/getProfileReadOnly';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Mods } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';


export interface ProfileCardProps {
    className?: string,
    data?: ProfileType,
    isLoading: boolean,
    error?: string,
    readonly?: boolean,
    onChangeLastname?: (value?: string) => void,
    onChangeFirstname?: (value?: string) => void,
    onChangeAge?: (value?: string) => void,
    onChangeCity?: (value?: string) => void,
    onChangeUsername?: (value?: string) => void,
    onChangeAvatar?: (value?: string) => void,
    onChangeCurrency?: (value?: Currency) => void
    onChangeCountry?: (value?: Country) => void
}
export const ProfileCard = memo((props: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const { className,
        data,
        isLoading,
        error,
        readonly,
        onChangeLastname,
        onChangeFirstname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry
    } = props;

    const mods: Mods = {
        [cls.editing]: !readonly
    }

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
                <Spinner size={SpinnerSize.M} />
            </div>
        )
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    size={TextSize.S}
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                    align={Align.CENTER}
                />
            </div>
        )
    }
    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.ProfileData}>
                {data?.avatar && (
                    <div className={cls.AvatarWrapper}>
                        <Avatar src={data?.avatar} className={cls.ProfileAvatar} />
                    </div>
                )
                }
                <Input
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    onChange={onChangeFirstname}
                    readonly={readonly}
                    className={cls.ProfileCardInput}
                />
                <Input
                    value={data?.last}
                    placeholder={t('Ваша фамилия')}
                    onChange={onChangeLastname}
                    readonly={readonly}
                    className={cls.ProfileCardInput}
                />

                <Input
                    value={data?.age}
                    placeholder={t('Ваш возраст')}
                    onChange={onChangeAge}
                    readonly={readonly}
                    className={cls.ProfileCardInput}
                />


                <Input
                    value={data?.city}
                    placeholder={t('Город')}
                    onChange={onChangeCity}
                    readonly={readonly}
                    className={cls.ProfileCardInput}
                />
                <Input
                    value={data?.username}
                    placeholder={t('Имя пользователя')}
                    onChange={onChangeUsername}
                    readonly={readonly}
                    className={cls.ProfileCardInput}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('Аватар')}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                    className={cls.ProfileCardInput}
                />
                <CurrencySelect
                    className={cls.ProfileCardInput}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />

                <CountrySelect
                    className={cls.ProfileCardInput}
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </div>
    );
});
