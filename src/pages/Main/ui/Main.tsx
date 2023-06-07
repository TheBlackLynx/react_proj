import classes from './Main.module.scss';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { memo, useState } from 'react';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Page } from 'widgets';
import { HStack } from 'shared';

const Main = memo(() => {
    const {t} = useTranslation('main');

    const [inputValue, setInputValue] = useState('');

    return (
        <Page className={classes.main}>
            <HStack>
                <ListBox 
                    defaultValue={'Выберите значение'}
                    onChange={(value: string) => { const c = value}} 
                    items={
                        [
                            {
                                value: '123213',
                                content: <div>weqweqwe</div>
                            },
                    
                            {
                                value: '23234',
                                content: <div>weq23423weqwe</div>,
                                disabled: true
                            },
                            {
                                value: '1231323213',
                                content: <div>123</div>
                            }
                        ]}/>
            </HStack>
        </Page>
    )
});

export default Main;