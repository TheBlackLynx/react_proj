import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

import { loginByUserName } from './loginByUserName';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/config/tests/TestAsyncThunk/TestAsyncThunk';

jest.mock('axios');

const mockedAxios  = jest.mocked(axios);

describe('login by username tests', () => {
//с использованием TestAsyncThunk
 let dispatch: Dispatch;
    let getState: () => StateSchema;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    })
 test('should return value from server ', async () => {
       const userValue = {username: '123', id: '1'};
        mockedAxios.post.mockReturnValue(Promise.resolve({data: userValue}))

        const thunk = new TestAsyncThunk(loginByUserName);
        const result = await thunk.callThunk({login: '123', password: '123'});
        console.log(result);
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
        expect(thunk.dispatch).toHaveBeenCalledTimes(3)
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled')
    })

    test('should return response with 403 status ', async () => {
            const userValue = {username: '123', id: '1'};
             mockedAxios.post.mockReturnValue(Promise.reject({status: 403}))
             const thunk = new TestAsyncThunk(loginByUserName);
             const result = await thunk.callThunk({login: '123', password: '123'});
             console.log(result);
             expect(thunk.dispatch).toHaveBeenCalledTimes(2)
             expect(mockedAxios.post).toHaveBeenCalled();
             expect(result.meta.requestStatus).toBe('rejected')
         })

    //обычный вариант
    // let dispatch: Dispatch;
    // let getState: () => StateSchema;

    // beforeEach(() => {
    //     dispatch = jest.fn();
    //     getState = jest.fn();
    // })
    // test('should return value from server ', async () => {
    //    const userValue = {username: '123', id: '1'};
    //     mockedAxios.post.mockReturnValue(Promise.resolve({data: userValue}))
    //     const action = loginByUserName({login: '123', password: '123'})
    //     const result = await action(dispatch, getState, undefined);
    //     console.log(result);
    //     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
    //     expect(dispatch).toHaveBeenCalledTimes(3)
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toBe('fulfilled')
    // })

    // test('should return response with 403 status ', async () => {
    //     const userValue = {username: '123', id: '1'};
    //      mockedAxios.post.mockReturnValue(Promise.reject({status: 403}))
    //      const action = loginByUserName({login: '123', password: '123'})
    //      const result = await action(dispatch, getState, undefined);
    //      console.log(result);
    //      expect(mockedAxios.post).toHaveBeenCalled();
    //      expect(result.meta.requestStatus).toBe('rejected')
    //  })
})