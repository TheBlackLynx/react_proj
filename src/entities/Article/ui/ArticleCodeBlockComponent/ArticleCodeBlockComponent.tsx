import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Code } from '@/shared/ui/Code';
import { ArticleCodeBlock } from '../../model/types/article';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(
    (props: ArticleCodeBlockComponentProps) => {
        const { t } = useTranslation('article');
        const { className, block } = props;
        return (
            <div>
                <Code text={block.code} />
            </div>
        );
    },
);
