import { useTranslation } from 'react-i18next';
import { memo, useEffect, useState } from 'react';
import { DynamicModuleLoaders, ReducerList } from 
    'shared/lib/components/DynamicModuleLoaders/DynamicModuleLoaders';
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';


const reducers: ReducerList = {
    profile: profileReducer
}
const ProfilePage = memo(() => {
    const {t} = useTranslation('main');
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])

    const [inputValue, setInputValue] = useState('');

    return (
        <div >
            <DynamicModuleLoaders reducers={reducers} removeAfterUnmount={true}>
                <ProfileCard />
            </DynamicModuleLoaders>
        </div>
    )
});

export default ProfilePage;