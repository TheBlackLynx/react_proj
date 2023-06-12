import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NotificationButton.module.scss';
import { memo } from 'react';
import { Popover } from 'shared/ui/Popups';
import { AppButton, AppButtonTheme, HStack, Icon } from 'shared';
import { NotificationList } from 'entities/Notification';
import Notification from 'shared/assets/icons/Notification.svg'

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;
    const { t } = useTranslation();
    
    return (
        <div className={classNames(cls.NotificationButton, {}, [className])}>
            <HStack gap={"16"}
                    
            >
                <Popover trigger={(
                    <AppButton buttonTheme={AppButtonTheme.CLEAR}>
                        <Icon Svg={Notification} inverted/>
                    </AppButton>
                )}
                    className={cls.actions}
                >
                    <NotificationList className={cls.notifications}/>
                </Popover> </HStack>
        </div>
    );
});