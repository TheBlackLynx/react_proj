import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NotificationButton.module.scss';
import { memo, useCallback, useState } from 'react';
import { Popover } from '@/shared/ui/Popups';
import { AppButton, AppButtonTheme, HStack, Icon } from '@/shared';
import { NotificationList } from '@/entities/Notification';
import Notification from '@/shared/assets/icons/Notification.svg'
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { BrowserView, MobileView } from 'react-device-detect';
import { AnimationProvider } from '@/shared/lib/components/AnimationProvider';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const [isOpen, isOpenHandler ]  = useState(false);

    const onOpenDrawer = useCallback(() => {
        isOpenHandler(true)
    }, [isOpenHandler])

    const onCloseDrawer = useCallback(() => {
        isOpenHandler(false)
    }, [isOpenHandler])
    
    const trigger = (
        <AppButton buttonTheme={AppButtonTheme.CLEAR} onClick={onOpenDrawer}>
            <Icon Svg={Notification} inverted/>
        </AppButton>
    )
    return (
        <div className={classNames(cls.NotificationButton, {}, [className])}>
            <BrowserView>
                <HStack gap={"16"}>
                    <Popover trigger={trigger} className={cls.actions}>
                        <NotificationList className={cls.notifications}/>
                    </Popover> </HStack>
            </BrowserView>
            <MobileView>
                {trigger}
                    <Drawer isOpen={isOpen} onClose={onCloseDrawer} className={null} lazy={true}>
                        <NotificationList className={cls.notifications}/>
                    </Drawer>
            </MobileView>
           
            
        </div>
    );
});