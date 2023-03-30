import { ArticleImageBlock, ArticleType } from 'entities/Article/model/types/article';
import { articlePageActions } from 'pages/ArticlesPage/model/slice/ArticlePageSlice';
import { memo, useCallback, useMemo } from 'react';
import { Text } from 'shared';
import { useDebounce } from 'shared/lib/hooks/useDebounce';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { Align } from 'shared/ui/Text/Text';
import cls from './ArticleTypeTabs.module.scss'

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

