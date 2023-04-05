import { Article, ArticleBlockType, ArticleImageBlock, ArticleTextBlock, ArticleView } from 'entities/Article/model/types/article';
import { HTMLAttributeAnchorTarget, memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppButton, AppLink, classNames, Icon, Text } from 'shared';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useHover } from 'shared/lib/hooks/useHover';
import { AppButtonTheme } from 'shared/ui/AppButton/AppButton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Card } from 'shared/ui/Card/Card';
import { TextSize } from 'shared/ui/Text/Text';

import EyeIcon from '../../../../shared/assets/icons/eye-20-20.svg'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleListItem.module.scss'

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { className, article, view, target } = props;
    const [isHover, bindHover] = useHover();


    if (view === ArticleView.LIST || view === undefined) {
        const textBlock = article.blocks.find(block => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;
        return (
            // @ts-ignore
            <div {...bindHover} className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
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
                        to={RoutePath.article_details + article.id}>
                            <AppButton
                                buttonTheme={AppButtonTheme.OUTLINE}
                            >
                                Читать далее...
                            </AppButton>
                        </AppLink>


                        <Text text={String(article.views)} className={cls.views} size={TextSize.S} />
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
        to={RoutePath.article_details + article.id} 
        className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Card >
                    <div className={cls.imgWrapper}>
                        <img src={article.img} alt="" className={cls.image} />
                        <Text text={article.createdAt} className={cls.date} size={TextSize.S} />
                    </div>
                    <div className={cls.infoWrapper}>
                        <Text text={article.type.join(',')} className={cls.types} size={TextSize.S} />
                        <Text text={String(article.views)} className={cls.views} size={TextSize.S} />
                        <Icon Svg={EyeIcon} className={cls.icons} />
                    </div>
                    <Text className={cls.title} title={article.title} />

                </Card>
        </AppLink>
    )
    }
});
