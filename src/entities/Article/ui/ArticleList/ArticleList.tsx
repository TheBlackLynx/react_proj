import { Article, ArticleImageBlock, ArticleView } from 'entities/Article/model/types/article';
import { memo } from 'react';
import { classNames, Text } from 'shared';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss'

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    error?: string

}

const getSkeletons = (view: ArticleView) => {
    return new Array(view === ArticleView.TILE ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton className={cls.Card} key={index} view={view} />
    ))
}


export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        error,
        view = ArticleView.LIST } = props;


    // if (isLoading) {
    //     return (
    //         <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
    //             {
    //            getSkeletons(view)
    //         }
    //         </div>
    //     )
    // }

    const renderArticle = (article: Article) => (
        <ArticleListItem article={article} view={view} className={cls.Card} key={article.id} />
    )
    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles ?
                articles.map(renderArticle)
                :
                null
            }
            {isLoading &&  getSkeletons(view)}
        </div>
    )
});