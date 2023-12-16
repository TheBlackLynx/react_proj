import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
    test('should return value ', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { error: 'user not found' },
        };
        expect(getLoginError(state as StateSchema)).toEqual('user not found');
    });
    test('value with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {},
        };
        expect(getLoginError(state as StateSchema)).toEqual(undefined);
    });
});
