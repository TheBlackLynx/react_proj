import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';
import classes from './About.module.scss';

const About = memo(() => {
    const {t} = useTranslation('about');
    return (
        <Page className={classes.about}>
            {t('О сайте')}
        </Page>
    )
});
export default About;

