import cls from './ProfileCard.module.scss';
import { memo } from "react";
import { classNames, HStack, Input, VStack } from '@/shared';
import { Text } from '@/shared';
import { useTranslation } from 'react-i18next';
import { Spinner, SpinnerSize } from '@/shared/ui/Spinner';
import { Align, TextSize, TextTheme } from '@/shared/ui/Text';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Avatar } from '@/shared/ui/Avatar';
import { Mods } from '@/shared/lib/classNames/classNames';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { Country, CountrySelect } from '@/entities/Country';
import { ProfileType } from '../../model/types/profile';


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
            <HStack justify={'center'} max
                className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
                <Spinner size={SpinnerSize.M} />
            </HStack>
        )
    }

    if (error) {
        return (
            <HStack justify={'center'} max
                className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    size={TextSize.S}
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                    align={Align.CENTER}
                />
            </HStack>
        )
    }
    return (
        <VStack gap={'8'} className={classNames(cls.ProfileCard, mods, [className])}>
            {data?.avatar && (
                <HStack justify={'center'} max className={cls.AvatarWrapper}>
                    <Avatar size={200} src={data?.avatar} className={cls.ProfileAvatar} />
                </HStack>
            )
            }
            <Input
                value={data?.first}
                placeholder={t('Ваше имя')}
                onChange={onChangeFirstname}
                readonly={readonly}
                className={cls.ProfileCardInput}
                data-testid='ProfileCard.firstname'
            />
            <Input
                value={data?.last}
                placeholder={t('Ваша фамилия')}
                onChange={onChangeLastname}
                readonly={readonly}
                className={cls.ProfileCardInput}
                data-testid={`ProfileCard.lastname`}
            />

            <Input
                value={data?.age}
                placeholder={t('Ваш возраст')}
                onChange={onChangeAge}
                readonly={readonly}
                className={cls.ProfileCardInput}
                data-testid={`ProfileCard.age`}
            />


            <Input
                value={data?.city}
                placeholder={t('Город')}
                onChange={onChangeCity}
                readonly={readonly}
                className={cls.ProfileCardInput}
                data-testid={`ProfileCard.city`}
            />
            <Input
                value={data?.username}
                placeholder={t('Имя пользователя')}
                onChange={onChangeUsername}
                readonly={readonly}
                className={cls.ProfileCardInput}
                data-testid={`ProfileCard.username`}
            />
            <Input
                value={data?.avatar}
                placeholder={t('Аватар')}
                onChange={onChangeAvatar}
                readonly={readonly}
                className={cls.ProfileCardInput}
                data-testid={`ProfileCard.avatar`}
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
        </VStack>
    );
});
