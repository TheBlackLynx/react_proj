import { memo, useCallback, useMemo } from 'react';
import { TabItem, Tabs } from '@/shared/ui/Tabs';
import { ArticleType } from '@/entities/Article';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void
}


export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { className, value, onChangeType } = props;

    const typeTabs = useMemo<TabItem[]>(() => [
        {
            value: ArticleType.FRONTEND,
            content: 'FRONTEND'
        },
        {
            value: ArticleType.IT,
            content: 'IT'
        },
        {
            value: ArticleType.WEB,
            content: 'WEB'
        },
    ], [])
      
    const onChangeTypeHandler = useCallback( (tab: TabItem) => {
        onChangeType(tab.value as ArticleType)
    }, [onChangeType])

    return ( 
        <Tabs 
            tabs={typeTabs}
            value={value} 
            onTabClick={onChangeTypeHandler} 
            className={className}/>
    )
});

