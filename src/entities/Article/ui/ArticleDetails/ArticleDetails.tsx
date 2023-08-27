import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading }
    from '../../model/selectors/articleDetails';
import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import cls from './ArticleDetails.module.scss'
import { DynamicModuleLoader, ReducerList } from
    '@/shared/lib/components/DynamicModuleLoaders/DynamicModuleLoaders';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Spinner } from '@/shared/ui/Spinner';
import { HStack, Icon, Text, VStack } from '@/shared';
import { Align, TextSize } from '@/shared/ui/Text';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Avatar } from '@/shared/ui/Avatar';
import EyeIcon from '../../../../shared/assets/icons/eye-20-20.svg'
import CalendarIcon from '../../../../shared/assets/icons/calendar-20-20.svg'
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } 
    from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { ActicleBlocks } from '../../model/types/article';
import { articleDetailsReducer } from '../../model/slice/articleSlice';
import { ArticleBlockType } from '../../model/consts/consts';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';

interface ArticleDetailsProps {
    className?: string,
    articleId?: string
}
const reducers: ReducerList = {
    articleDetails: articleDetailsReducer
}
export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { articleId } = props;
    const { t } = useTranslation('article');
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const article = useSelector(getArticleDetailsData);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(articleId))
        }

    }, [dispatch, articleId])

    const renderBlocks = useCallback((block: ActicleBlocks) => {


        switch (block.type) {
        case (ArticleBlockType.CODE):
            return <ArticleCodeBlockComponent key={block.id} className={cls.block} block={block} />
        case (ArticleBlockType.IMAGE):
            return <ArticleImageBlockComponent key={block.id} className={cls.block} block={block} />

        case (ArticleBlockType.TEXT):
            return <ArticleTextBlockComponent key={block.id} className={cls.block} block={block} />
        default:
            return null;
        }

    }, [])
    let content;
    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.Avatar} width={200} height={200} border={'50%'} />
                <Skeleton className={cls.Title} width={300} height={32} />
                <Skeleton className={cls.Skeleton} width={600} height={24} />
                <Skeleton className={cls.Skeleton} width={'100%'} height={200} />
                <Skeleton className={cls.Skeleton} width={'100%'} height={200} />
            </>
        )
    } else if (error) {
        content = (
            <Text
                align={Align.CENTER}
                title={'Произошла ошибка при загрузке статьи'} />
        )
    } else {
        content = (
            <>
                <HStack justify={'center'} max className={cls.AvatarWrapper}>
                    <Avatar
                        size={200}
                        src={article?.img}
                        className={cls.Avatar}
                    />
                </HStack>

                <VStack gap={'4'}  max>
                    <Text
                        className={cls.Title}
                        align={Align.LEFT}
                        title={article?.title}
                        text={article?.subtitle}
                        size={TextSize.L}
                    />
                    <HStack gap={'8'} className={cls.ArticleInfo}>
                        <Icon Svg={EyeIcon} className={cls.icons} />
                        <Text
                            text={article?.views.toString()}
                            size={TextSize.S} />
                    </HStack>

                    <HStack gap={'8'} className={cls.ArticleInfo}>
                        <Icon Svg={CalendarIcon} className={cls.icons} />
                        <Text
                            text={String(article?.createdAt)}
                            size={TextSize.S} />
                    </HStack>
                </VStack>
                {article?.blocks.map(renderBlocks)}
            </>
        )
    }
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <VStack gap={'16'} max className={cls.ArticleDetails}>
                {content}
            </VStack>
        </DynamicModuleLoader>

    )
});

