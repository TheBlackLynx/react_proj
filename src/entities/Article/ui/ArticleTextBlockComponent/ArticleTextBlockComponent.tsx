import { ArticleTextBlock } from 'entities/Article/model/types/article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Text } from 'shared';
import { TextSize } from 'shared/ui/Text/Text';
import cls from './ArticleTextBlockComponent.module.scss'

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
    const { className, block } = props;
    return (
        <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])} >
            { block.title && (
                <Text 
                    title={block.title}
                    className={cls.title}/>)}
            {block.paragraphs.map((paragraph, index) => {
                console.log(paragraph);
                return (
                    <Text 
                        key={paragraph} 
                        text={paragraph} 
                        className={cls.paragraph} 
                        size={TextSize.S} />
                )
              
            })}
        </div>
    )
});