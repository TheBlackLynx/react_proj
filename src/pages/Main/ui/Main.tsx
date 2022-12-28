import classes from './Main.module.scss';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import { memo, useState } from 'react';
import { Input } from 'shared';

const Main = memo(() => {
    const {t} = useTranslation('main');

    const [inputValue, setInputValue] = useState('');

    const onChangeHandler = (value: string) => {
        setInputValue(value)
    }
    return (
        <div className={classes.main}>
            <BugButton />
            {t('Главная страница')}
            <Input />
        </div>
    )
});

export default Main;