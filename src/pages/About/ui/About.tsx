import classes from './About.module.scss';
import { useTranslation } from 'react-i18next';

const About = () => {
    const {t} = useTranslation('about');
    return (
        <div className={classes.about}>
        {t('О сайте')}
        </div>
    )
}
export default About;