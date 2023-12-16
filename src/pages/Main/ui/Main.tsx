import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';
import { Page } from '@/widgets';

const Main = memo(() => {
    const { t } = useTranslation('main');

    const [inputValue, setInputValue] = useState('');

    return <Page data-testid={'Main'}></Page>;
});

export default Main;
