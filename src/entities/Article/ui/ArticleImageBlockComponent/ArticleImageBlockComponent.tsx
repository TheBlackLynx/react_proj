import { memo } from 'react';
import { Text } from '@/shared';
import { Align } from '@/shared/ui/Text';
import cls from './ArticleImageBlockComponent.module.scss';
import { ArticleImageBlock } from '../../model/types/article';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
    (props: ArticleImageBlockComponentProps) => {
        const { className, block } = props;
        return (
            <div className={cls.imgWrapper}>
                <img src={block.src} className={cls.img}></img>
                {block.title && (
                    <Text
                        title={block.title}
                        className={cls.title}
                        align={Align.CENTER}
                    />
                )}
            </div>
        );
    },
);
