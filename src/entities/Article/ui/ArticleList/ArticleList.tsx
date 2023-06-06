import { Article, ArticleView } from 'entities/Article';
import { ArticlesPageFilters } from 'pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters';
import { FC, HTMLAttributeAnchorTarget, memo, MutableRefObject, Ref, useEffect, useRef, useState } from 'react';
import { AutoSizer, List, WindowScroller } from 'react-virtualized';
import { Virtuoso, VirtuosoGrid, VirtuosoGridHandle } from 'react-virtuoso';
import { classNames, Text } from 'shared';
import { ARTICLE_LIST_ITEM_INDEX } from 'shared/const/localstogare';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss'

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    error?: string;
    target?: HTMLAttributeAnchorTarget,
    virtualized?: boolean,
    onScrollEnd?: () => void,
  

}

const getSkeletons = () => {
    return new Array(3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton className={cls.Card} key={index} view={ArticleView.LIST} />
        ))
}

// @ts-ignore
export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        error,
        target,
        onScrollEnd,
        view = ArticleView.LIST,
        virtualized = false } = props;

    const virtuosoRef = useRef<VirtuosoGridHandle>(null);
    // if (isLoading) {
    //     return (
    //         <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
    //             {
    //            getSkeletons(view)
    //         }
    //         </div>
    //     )
    // }

    const [selectedArticleId, setSelectedArticleId] = useState(1);

    useEffect (()=> { 
        const articleIndex = sessionStorage.getItem(ARTICLE_LIST_ITEM_INDEX) || 1;
        setSelectedArticleId(+articleIndex)

    }, [])

    useEffect(() => {
        let timeoutID: NodeJS.Timeout;

        if (view === 'TILE') {
            timeoutID = setTimeout(() => {
                if(virtuosoRef.current) {
                    virtuosoRef.current.scrollToIndex(selectedArticleId)
                }
            }, 100)
            return () => clearTimeout(timeoutID);
        }
    }, [selectedArticleId, view])
    const Header = () => <ArticlesPageFilters  className={cls.header}/>

    const Footer = memo(() => {
        if (isLoading) {
            return (
                <div className={cls.skeleton}>
                    {getSkeletons()}
                </div>
            )
        }
        return null;
    })


    const ItemContainerComp: 
    FC<{height: number, width: number, index: number}> = ({height, width, index}) => (
        <div className={cls.gridItemsContainer}>
            <ArticleListItemSkeleton key={index} view={view} className={cls.card}/>
        </div>
    )

    const renderArticle = (index: number, article: Article) => (

        <ArticleListItem
            article={article}
            view={view}
            className={cls.Card}
            key={article.id}
            target={target}
            index={index}
        />
    )
    if (view === 'LIST' ) {
        return (
            virtualized ? (
                <Virtuoso
                    className={cls.listItemsWrapper}
                    style={{ height: '100%', position: 'relative' }}
                    data={articles}
                    itemContent={renderArticle}
                    endReached={onScrollEnd}
                    initialTopMostItemIndex={selectedArticleId}
                    components={
                        {
                            Header,
                            Footer,
                        }
                    }
                />)
                : (
                    <>
                        <ArticlesPageFilters  className={cls.header}/>
                        {
                            articles.map(article => (
                                <ArticleListItem 
                                    article={article}
                                    view={view}
                                    target={target}
                                    key={article.id}
                                    className={cls.card}

                                />
                   
                            ))}
                    </>
                    
                )
            
        )
    }
    else {
        return (
            <VirtuosoGrid 
                className={cls.gridItemsWrapper}
                ref={virtuosoRef}
                totalCount={articles.length}
                components={{
                    Header,
                    ScrollSeekPlaceholder: ItemContainerComp
                }}
                endReached={onScrollEnd}
                data={articles}
                itemContent={renderArticle}
                listClassName={cls.itemsWrapper}
                scrollSeekConfiguration={{
                    enter: (velocity) => Math.abs(velocity) > 200,
                    exit: (velocity) => Math.abs(velocity) < 30
                }}

            />
        )
    }
 
});