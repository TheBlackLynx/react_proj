import classes from './Main.module.scss';
import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';
import { Page } from '@/widgets';

const Main = memo(() => {
    const {t} = useTranslation('main');

    const [inputValue, setInputValue] = useState('');

    return (
        <Page data-testid={'Main'} className={classes.main}>
        </Page>
    )
});

export default Main;