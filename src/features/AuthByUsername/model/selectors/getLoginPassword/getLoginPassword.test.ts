import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
    test('should return value login ', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { login: 'user', password: '123' },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('123');
    });
    test('value with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {},
        };
        expect(getLoginPassword(state as StateSchema)).toEqual(undefined);
    });
});
