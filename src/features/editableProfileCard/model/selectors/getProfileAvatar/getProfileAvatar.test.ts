import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileAvatar } from './getProfileAvatar';

describe('getProfileAvatar', () => {
    test('should return value ', () => {
        const avatarLink =
            'https://photopict.ru/wp-content/uploads/2019/05/kartinki-na-avu-v-vatsap3.jpg';
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: {
                    avatar: avatarLink,
                },
            },
        };
        expect(getProfileAvatar(state as StateSchema)).toEqual(avatarLink);
    });
    test('value with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileAvatar(state as StateSchema)).toEqual('');
    });
});
