import { StateSchema } from '@/app/providers/StoreProvider';
import { Currency } from '@/entities/Currency';
import { getProfileCurrency } from './getProfileCurrency';

describe('getProfileCurrency', () => {
    test('should return value ', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: {
                    currency: Currency.EUR,
                },
            },
        };
        expect(getProfileCurrency(state as StateSchema)).toEqual('EUR');
    });
    test('value with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileCurrency(state as StateSchema)).toEqual('');
    });
});
