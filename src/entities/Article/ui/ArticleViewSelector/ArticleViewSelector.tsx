import { ArticleView } from '../../model/types/article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Code } from 'shared/ui/Code/Code';
import TileIcon from 'shared/assets/icons/TileIcon.svg';
import ListIcon from 'shared/assets/icons/ListIcon.svg';
import { AppButton, classNames, Icon } from 'shared';
import cls from './ArticleViewSelector.module.scss'
import { AppButtonTheme } from 'shared/ui/AppButton/AppButton';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick: (view: ArticleView) => void
}

const viewTypes = [
    {
        view: ArticleView.LIST,
        icon: ListIcon
    },
    {
        view: ArticleView.TILE,
        icon: TileIcon
    }
]

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { t } = useTranslation('article');
    const { className, view, onViewClick } = props;

    const onButtonClick = (newView: ArticleView) => {
        return () => {
            onViewClick?.(newView)
        }
    }
    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {
                viewTypes.map(viewType => (
                    <AppButton
                        buttonTheme={AppButtonTheme.CLEAR}
                        onClick={onButtonClick(viewType.view)}
                        className={viewType.view === view ? cls.selected : ''}
                    >
                        <Icon Svg={viewType.icon} />
                    </AppButton>
                ))
            }

        </div>
    )
});