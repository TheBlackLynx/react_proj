import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { validateProfileData } from './validateProfileData';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ValidateProfileError } from '../../consts/consts';

const data = {
    first: 'Marica',
    last: 'Sav',
    age: 32,
    currency: Currency.EUR,
    country: Country.RU,
    city: 'Moscow',
    username: 'marica',
    avatar: 'https://avatarko.ru/img/avatar/27/multfilm_animaciya_26814.gif',
};

describe('login by username tests', () => {
    //с использованием TestAsyncThunk
    let dispatch: Dispatch;
    let getState: () => StateSchema;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    });
    test('should return value from server ', async () => {
        const result = validateProfileData(data);
        expect(result).toEqual([]);
    });

    test('without first and last ', async () => {
        const result = validateProfileData({ ...data, first: '', last: '' });
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('incorrect age ', async () => {
        const result = validateProfileData({ ...data, age: undefined });
        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('incorrect age ', async () => {
        const result = validateProfileData({ ...data, age: 1323123 });
        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE_LENGTH]);
    });

    test('incorrect country ', async () => {
        const result = validateProfileData({ ...data, country: undefined });
        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });

    test('incorrect username ', async () => {
        const result = validateProfileData({ ...data, username: '' });
        expect(result).toEqual([ValidateProfileError.INCORRECT_USERNAME]);
    });

    test('incorrect all ', async () => {
        const result = validateProfileData({});
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
