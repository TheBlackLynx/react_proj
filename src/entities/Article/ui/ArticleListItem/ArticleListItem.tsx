import { ArticleBlockType, ArticleView } from '../../model/consts/consts';
import { Article, ArticleTextBlock } from '../../model/types/article';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { AppButton, AppButtonTheme, AppLink,
    Avatar, Card, classNames, Icon, Text, TextSize } from '@/shared';
import { ARTICLE_LIST_ITEM_INDEX } from '@/shared/const/localstogare';
import { useHover } from '@/shared/lib/hooks/useHover';

import EyeIcon from '../../../../shared/assets/icons/eye-20-20.svg'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleListItem.module.scss'
import { getRouteArticleDetails } from '@/shared/const/router';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    index?:number
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { className, article, view, target, index } = props;
    const [isHover, bindHover] = useHover();

    const handleButtonClick = () => {
        sessionStorage.setItem(ARTICLE_LIST_ITEM_INDEX, JSON.stringify(index));
    }

    if (view === ArticleView.LIST || view === undefined) {
        const textBlock = 
        article.blocks.find(block => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;
        return (
            // @ts-ignore
            <div {...bindHover} 
                className={classNames(cls.ArticleListItem, {}, [className, cls[view ? view : ""]])}>
                <Card className={cls.Card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text text={article.user.login} className={cls.Login} />
                        <Text text={article.createdAt} className={cls.Date} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    <Text text={article.type.join(',')} className={cls.types} />
                    <img src={article.img} alt="" className={cls.image} />
                    {textBlock &&
                        <ArticleTextBlockComponent block={textBlock} className={cls.Paragraphs} />
                    }


                    <div className={cls.footer}>
                        <AppLink 
                            target={target}
                            to={getRouteArticleDetails(article.id)}>
                            <AppButton
                                buttonTheme={AppButtonTheme.OUTLINE}
                                onClick={handleButtonClick} 
                                // eslint-disable-next-line i18next/no-literal-string
                                fullWidth={null}                            >
                                t(`Читать далее...`)
                            </AppButton>
                        </AppLink>


                        <Text 
                            text={String(article.views)} 
                            className={cls.views} size={TextSize.S} />
                        <Icon Svg={EyeIcon} className={cls.icons} />
                    </div>
                </Card>
            </div>
        )
    }
    else {

        return (
        // @ts-ignore
            <AppLink  {...bindHover}  
                target={target}
                to={getRouteArticleDetails(article.id)} 
                className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card >
                    <div className={cls.imgWrapper}>
                        <img src={article.img} alt="" className={cls.image} />
                        <Text text={article.createdAt} className={cls.date} size={TextSize.S} />
                    </div>
                    <div className={cls.infoWrapper}>
                        <Text 
                            text={article.type.join(',')} 
                            className={cls.types} size={TextSize.S} 
                        />
                        <Text 
                            text={String(article.views)} 
                            className={cls.views} size={TextSize.S} 
                        />
                        <Icon Svg={EyeIcon} className={cls.icons} />
                    </div>
                    <Text className={cls.title} title={article.title} />

                </Card>
            </AppLink>
        )
    }
});
