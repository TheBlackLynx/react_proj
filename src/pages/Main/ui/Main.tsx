import classes from './Main.module.scss';
import { useTranslation } from 'react-i18next';
import { BugButton } from '@/app/providers/ErrorBoundary';
import { memo, useState } from 'react';
import { Page } from '@/widgets';
import { HStack } from '@/shared';
import { ListBox } from '@/shared/ui/Popups';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { RatingCard } from '@/entities/Rating';

const Main = memo(() => {
    const {t} = useTranslation('main');

    const [inputValue, setInputValue] = useState('');

    return (
        <Page className={classes.main}>
        </Page>
    )
});

export default Main;