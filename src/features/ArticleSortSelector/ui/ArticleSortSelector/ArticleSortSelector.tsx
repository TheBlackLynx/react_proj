import {useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared';
import cls from './ArticleSortSelector.module.scss'
import { Select, SelectOption } from '@/shared/ui/Select';
import { SortOrder } from '@/shared/types';
import { ArticleSortField } from '@/entities/Article';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
    const { t } = useTranslation('article');
    const { className, sort, order, onChangeOrder, onChangeSort} = props;

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(
        () => [
            {
                value: 'asc',
                content: t('возрастанию')
            },
            {
                value: 'desc',
                content: t('убыванию')
            },
        ]
        , [t])


    const sortFiledOptions = useMemo<SelectOption<ArticleSortField>[]>(
        () => [
            {
                value: ArticleSortField.CREATED,
                content: t('дате создания')
            },
            {
                value: ArticleSortField.TITLE,
                content: t('заголовку')
            },
            {
                value: ArticleSortField.VIEWS,
                content: t('количеству просмотров')
            },
        ]
        , [t])

    const onChangeSortHandler = useCallback((newSort) => {
        onChangeSort(newSort as ArticleSortField)
    }, [onChangeSort])

    const onChangeOrderHandler = useCallback((newOrder) => {
        onChangeOrder(newOrder as SortOrder)
    }, [onChangeOrder])

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select 
                className={classNames(cls.sort, {}, [className])}
                options={sortFiledOptions} 
                label={t('Сортировать по')}
                value={sort}
                onChange={onChangeSort}
           
            />
            <Select 
                options={orderOptions} 
                label={t('по')}
                value={order}
                onChange={onChangeOrder}/>
        </div>
    )
};