import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { AppButton, classNames } from "@/shared";
import { AppButtonTheme } from "@/shared/ui/AppButton/AppButton";
import { Text } from "@/shared";
import { TextSize } from "@/shared/ui/Text/Text";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { profile } from "console";
import { getUserAuthData } from "@/entities/User";
import { HStack } from "@/shared/ui/Stack/HStack/HStack";
import { getProfileData } from "@/features/editableProfileCard/model/selectors/getProfileData/getProfileData";
import { getProfileReadOnly } from "@/features/editableProfileCard/model/selectors/getProfileReadOnly/getProfileReadOnly";
import { profileActions } from "@/features/editableProfileCard/model/slice/profileSlice";
import { updateProfileData } from "@/features/editableProfileCard/model/services/updateProfileData/updateProfileData";

interface ProfilePageHeaderProps {
    className?: string
}

export const EditableProfileCardHeader = memo((props: ProfilePageHeaderProps) => {
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
        <HStack justify={'between'} className={classNames('', {}, [className])}>
            <Text
                title={t('Профиль')}
                size={TextSize.M} />
            {(authData?.id == profileData?.id) && (
                <div>
                    {readonly ?

                        <AppButton
                            buttonTheme={AppButtonTheme.OUTLINE}
                            onClick={EditClickHandler}
                            data-testid={`EditableProfileCardHeader.EditButton`}>
                            {t('Редактировать')}
                        </AppButton>
                        :
                        <HStack gap={'8'}>
                            <AppButton
                                buttonTheme={AppButtonTheme.OUTLINE_RED}
                                onClick={CancelClickHandler}
                                data-testid={`EditableProfileCardHeader.CancelButton`}>
                                {t('Отменить')}
                            </AppButton>
                            <AppButton
                                buttonTheme={AppButtonTheme.OUTLINE}
                                onClick={SaveClickHandler}
                                data-testid={`EditableProfileCardHeader.SaveButton`}>
                                {t('Сохранить')}
                            </AppButton>
                        </HStack>
                    }
                </div>

            )}

        </HStack>
    )
});