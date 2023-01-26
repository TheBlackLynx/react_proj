import { ArticleImageBlock } from 'entities/Article/model/types/article';
import { memo } from 'react';
import { Text } from 'shared';
import { Align } from 'shared/ui/Text/Text';
import cls from './ArticleImageBlockComponent.module.scss'

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
    const { className, block } = props;
    return (
        <div className={cls.imgWrapper}>
            <img src={block.src} className={cls.img}></img>
            {block.title && <Text title={block.title} className={cls.title} align={Align.CENTER}/> }
        </div>
    )
});