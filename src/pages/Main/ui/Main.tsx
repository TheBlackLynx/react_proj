import classes from './Main.module.scss';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';

const Main = () => {
    const {t} = useTranslation('main');
    return (
        <div className={classes.main}>
            <BugButton />
            {t('Главная страница')}
            <Counter />
        </div>
    )
}

export default Main;