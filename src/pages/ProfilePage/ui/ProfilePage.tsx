import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { EditableProfileCard } from '@/features/editableProfileCard';
import { Page } from '@/widgets';
import { VStack } from '@/shared';



const ProfilePage = memo(() => {
    const { t } = useTranslation('profile');
    const { id } = useParams<{ id: string }>();
    

    return (
        <Page data-testid={'ProfilePage'}>
            <VStack gap={'16'} max>
                <EditableProfileCard id={id}/>
            </VStack>
        </Page>
    )
});

export default ProfilePage;