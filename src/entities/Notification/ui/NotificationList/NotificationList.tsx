import { useNotifications } from '../../api/notificationApi';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, VStack } from '@/shared';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import cls from './NotificationList.module.scss'

interface NotificationListProps {
    className?: string
}
export const NotificationList = memo((props: NotificationListProps) => {
    const {className } = props
    const {t} = useTranslation('notifications');
    const {data, isLoading} = useNotifications(null, {
        pollingInterval: 5000
    })
    if (isLoading) {
        return (
            <VStack 
                gap={'16'} 
                max
                className={classNames(cls.NotificationList, {}, [className])}>

                <Skeleton width={150} height={50} />
                <Skeleton width={150} height={50} />
                <Skeleton width={150} height={50} />
            </VStack>
        )
    }
    return (
        <VStack 
            gap={'16'} 
            max
            className={classNames(cls.NotificationList, {}, [className])}>

            {data?.map(item => (
                <NotificationItem key={item.id} item={item}/>
            ))}
        </VStack>
    )
});
