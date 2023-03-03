import classes from './Main.module.scss';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { memo, useState } from 'react';
import { Input, Page } from 'shared';

const Main = memo(() => {
    const {t} = useTranslation('main');

    const [inputValue, setInputValue] = useState('');

    return (
        <Page className={classes.main}>
            <BugButton />
            {t('Главная страницаfffff')}
            <Input />
        </Page>
    )
});

export default Main;