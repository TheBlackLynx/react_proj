import classes from './Main.module.scss';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';

const Main = () => {
    const {t} = useTranslation('main');
    return (
        <div className={classes.main}>
            <BugButton />
            {t('Главная страница')}
        </div>
    )
}

export default Main;