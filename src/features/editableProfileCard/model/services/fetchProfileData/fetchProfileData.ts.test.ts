import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { fetchProfileData } from './fetchProfileData';
import { TestAsyncThunk } from '@/shared/config/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

const data = {
    first: "Marica",
    last: "Sav",
    age: 32,
    currency: Currency.EUR,
    country: Country.RU,
    city: "Moscow",
    username: "marica",
    avatar: "https://avatarko.ru/img/avatar/27/multfilm_animaciya_26814.gif"
  
}

describe('login by username tests', () => {
//с использованием TestAsyncThunk
    let dispatch: Dispatch;
    let getState: () => StateSchema;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    })
    test('should return value from server ', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({data: data}))
        const result = await thunk.callThunk('1');
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toBe(data)
    })

    test('should return response with 403 status ', async () => {
        
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.reject({status: 403}))
        const result = await thunk.callThunk('1');
        expect(result.meta.requestStatus).toBe('rejected');
    })
})