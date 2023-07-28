import { Notification } from '../../model/types/notification';
import { memo } from 'react';
import cls from './NotificationItem.module.scss'
import { Card, classNames } from '@/shared';
import { CardTheme } from '@/shared/ui/Card/Card';
import { Text } from '@/shared';

interface NotificationItemProps {
    className?: string,
    item: Notification
}
export const NotificationItem = memo((props: NotificationItemProps) => {
    const { item, className } = props;
    const content =    (
        <Card theme={CardTheme.OUTLINED} className={classNames(cls.NotificationItem, {}, [])}>
            <Text title={item.title} text={item.desctiption}/>
        </Card>)

    if (item.href) {
        return (
            <a target={'__blank'} href={item.href} className={cls.link}> 
                {content}
            </a>
        )
    }
    return content
});
