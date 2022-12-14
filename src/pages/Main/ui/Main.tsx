import classes from './Main.module.scss';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import { useState } from 'react';
import { Input } from 'shared/ui/Input/Input';

const Main = () => {
    const {t} = useTranslation('main');

    const [inputValue, setInputValue] = useState('');

    const onChangeHandler = (value: string) => {
        setInputValue(value)
    }
    return (
        <div className={classes.main}>
            <BugButton />
            {t('Главная страница')}
            <Counter />
            <Input type='text' value={inputValue} onChange={onChangeHandler} placeholder='sfsdfsdf'/>
        </div>
    )
}

export default Main;