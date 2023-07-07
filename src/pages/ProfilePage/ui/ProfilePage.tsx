import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { EditableProfileCardHeader } from '../../../features/editableProfileCard/ui/EditableProfileCardHeader/EditableProfileCardHeader';
import { Text } from '@/shared/ui/Text/Text';
import { useParams } from 'react-router-dom';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { EditableProfileCard } from '@/features/editableProfileCard';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { fetchProfileData } from '@/features/editableProfileCard/model/services/fetchProfileData/fetchProfileData';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Page } from '@/widgets';



const ProfilePage = memo(() => {
    const { t } = useTranslation('profile');
    const { id } = useParams<{ id: string }>();
    

    return (
        <Page>
            <VStack gap={'16'} max>
                <EditableProfileCard id={id}/>
            </VStack>
        </Page>
    )
});

export default ProfilePage;