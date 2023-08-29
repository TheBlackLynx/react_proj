import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { AppButton, classNames , Text } from "@/shared";
import { AppButtonTheme } from "@/shared/ui/AppButton";
import { TextSize } from "@/shared/ui/Text";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { getUserAuthData } from "@/entities/User";
import { HStack } from "@/shared/ui/Stack";
import { getProfileData }
    from "../../model/selectors/getProfileData/getProfileData";
import { getProfileReadOnly } 
    from "../../model/selectors/getProfileReadOnly/getProfileReadOnly";
import { profileActions } 
    from "../../model/slice/profileSlice";
import { updateProfileData } 
    from "../../model/services/updateProfileData/updateProfileData";

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
                            data-testid={`EditableProfileCardHeader.EditButton`} 
                            fullWidth={null}>
                            {t('Редактировать')}
                        </AppButton>
                        :
                        <HStack gap={'8'}>
                            <AppButton
                                buttonTheme={AppButtonTheme.OUTLINE_RED}
                                onClick={CancelClickHandler}
                                data-testid={`EditableProfileCardHeader.CancelButton`} 
                                fullWidth={null}>
                                {t('Отменить')}
                            </AppButton>
                            <AppButton
                                buttonTheme={AppButtonTheme.OUTLINE}
                                onClick={SaveClickHandler}
                                data-testid={`EditableProfileCardHeader.SaveButton`} 
                                fullWidth={null}>
                                {t('Сохранить')}
                            </AppButton>
                        </HStack>
                    }
                </div>

            )}

        </HStack>
    )
});