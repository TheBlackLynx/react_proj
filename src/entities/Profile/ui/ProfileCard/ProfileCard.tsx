import cls from './ProfileCard.module.scss';
import { memo } from "react";
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


export interface ProfileCardProps {
    className?: string,
}
export const ProfileCard = memo((props: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const { className } = props;
    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.ProfileCardHeader}>
                <Text title={t('Профиль')} />
                <AppButton theme={AppButtonTheme.OUTLINE} className={cls.ProfileCardEditBtn}>
                    {t('Редактировать')}
                </AppButton>
            </div>
            <div className={cls.ProfileData}>
                <Input
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    className={cls.ProfileCardInput}

                />
                <Input
                    value={data?.last}
                    placeholder={t('Ваша фамилия')}
                    className={cls.ProfileCardInput}
                />
            </div>
        </div>
    );
});
