import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';
import { DynamicModuleLoaders, ReducerList } from 
    'shared/lib/components/DynamicModuleLoaders/DynamicModuleLoaders';
import { profileReducer } from 'entities/Profile';


const reducers: ReducerList = {
    profile: profileReducer
}
const ProfilePage = memo(() => {
    const {t} = useTranslation('main');

    const [inputValue, setInputValue] = useState('');

    return (
        <div >
            <DynamicModuleLoaders reducers={reducers} removeAfterUnmount={true}>
                {t('Профиль пользователя')}
            </DynamicModuleLoaders>
        </div>
    )
});

export default ProfilePage;