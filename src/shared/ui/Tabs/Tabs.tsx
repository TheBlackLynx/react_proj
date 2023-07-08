import { memo, ReactNode, useCallback } from "react";
import cls from './Tabs.module.scss';
import { classNames } from "@/shared/lib/classNames/classNames";
import { Card } from "@/shared";
import { CardTheme } from "../Card/Card";

export interface TabItem {
    value: string;
    content: ReactNode
}
interface TabProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void
}

export const Tabs = memo((props: TabProps) => {
    const {
        className,
        tabs,
        value,
        onTabClick
    } = props

    const clickHandler =  useCallback((tab: TabItem) => () => {
        {
            onTabClick(tab)
        }
    }, [onTabClick])
    return (
        <div className={classNames(cls.Tabs, {
        }, [className])} >
            {tabs.map(tab => {
                {console.log('!!!!', value)
                }
                return (
                    <Card 
                        theme={tab.value == value ? CardTheme.NORMAL : CardTheme.OUTLINED}
                        key={tab.value}
                        className={cls.card}
                        onClick={clickHandler(tab)}>
                        {tab.content}
                    </Card>
                )
            })}
        </div>
    )
});