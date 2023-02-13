import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { AppButton, classNames } from "shared";
import { AppButtonTheme } from "shared/ui/AppButton/AppButton";
import { Text } from "shared";
import cls from './ProfilePageHeader.module.scss'
import { TextSize } from "shared/ui/Text/Text";
import { useSelector } from "react-redux";
import {
    getProfileData, getProfileReadOnly,
    profileActions, updateProfileData
} from "entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { profile } from "console";
import { getUserAuthData } from "entities/User";

interface ProfilePageHeaderProps {
    className?: string
}

export const ProfilePageHeader = memo((props: ProfilePageHeaderProps) => {
    const { t } = useTranslation();
    const { className } = props;
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const readonly = useSelector(getProfileReadOnly);
    const dispatch = useAppDispatch();
    const EditClickHandler = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    }, [dispatch])

    const CancelClickHandler = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    }, [dispatch])

    const SaveClickHandler = useCallback(() => {

        dispatch(profileActions.save())
        dispatch(updateProfileData())
    }, [dispatch])
    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text
                title={t('Профиль')}
                className={classNames(cls.ProfilePageHeaderText)}
                size={TextSize.M} />
            {(authData?.id == profileData?.id) && (
                <div className={cls.btnWrapper}>
                    {readonly ?

                        <AppButton
                            buttonTheme={AppButtonTheme.OUTLINE}
                            className={cls.ProfileCardEditBtn}
                            onClick={EditClickHandler}>
                            {t('Редактировать')}
                        </AppButton>
                    :
                    <div>
                        <AppButton
                            buttonTheme={AppButtonTheme.OUTLINE_RED}
                            className={cls.ProfileCardEditBtn}
                            onClick={CancelClickHandler}>
                            {t('Отменить')}
                        </AppButton>
                        <AppButton
                            buttonTheme={AppButtonTheme.OUTLINE}
                            className={cls.ProfileCardSaveBtn}
                            onClick={SaveClickHandler}>
                            {t('Сохранить')}
                        </AppButton>
                    </div>
                }
                </div>

            )}

        </div>
    )
});