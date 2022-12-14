import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './About.module.scss';

const About = memo(() => {
    const {t} = useTranslation('about');
    return (
        <div className={classes.about}>
            {t('О сайте')}
        </div>
    )
});
export default About;

