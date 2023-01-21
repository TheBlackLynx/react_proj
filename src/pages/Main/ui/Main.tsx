import classes from './Main.module.scss';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { memo, useState } from 'react';
import { Input } from 'shared';

const Main = memo(() => {
    const {t} = useTranslation('main');

    const [inputValue, setInputValue] = useState('');

    return (
        <div className={classes.main} style={{color: 'pink'}}>
            <BugButton />
            {t('Главная страницаfffff')}
            <Input />
        </div>
    )
});

export default Main;