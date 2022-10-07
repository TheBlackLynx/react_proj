import classes from './Main.module.scss';
import { useTranslation } from 'react-i18next';

const Main = () => {
    const {t} = useTranslation('main');
    return (
        <div className={classes.main}>
            {t('Главная страница')}
        </div>
    )
}

export default Main;