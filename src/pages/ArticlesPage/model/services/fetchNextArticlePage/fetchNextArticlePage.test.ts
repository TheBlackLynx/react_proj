import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { TestAsyncThunk } from 'shared/config/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchNextArticlePage } from './fetchNextArticlePage';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');
describe('login by username tests', () => {
//с использованием TestAsyncThunk
    let dispatch: Dispatch;
    let getState: () => StateSchema;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    })
    test('should return value from server ', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlePage, {
            articles: {
                page: 2, 
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true
            }
        });
        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticlesList).toBeCalledWith({page: 3});
    })

    test('fetchArticlesList not called ', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlePage, {
            articles: {
                page: 2, 
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: false
            }
        });
        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    })

    test('fetchArticlesList not called ', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlePage, {
            articles: {
                page: 2, 
                ids: [],
                entities: {},
                limit: 5,
                isLoading: true,
                hasMore: true
            }
        });
        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    })

})