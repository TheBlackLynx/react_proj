import { memo } from 'react';
import { classNames, Text } from '@/shared';
import { TextSize } from '@/shared/ui/Text';
import cls from './ArticleTextBlockComponent.module.scss'
import { ArticleTextBlock } from '../../model/types/article';

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
                return (
                    <Text 
                        key={paragraph} 
                        text={paragraph} 
                        className={cls.paragraph} 
                        size={TextSize.S} 
                    />
                )
              
            })}
        </div>
    )
});