import { createSlice } from '@reduxjs/toolkit';
import { NotificationButtonSchema } from '../types/notificationButtonSchema';

const initialState: NotificationButtonSchema = {};

export const notificationButtonSlice = createSlice({
    name: 'notificationButton',
    initialState,
    reducers: {},
});

export const { actions: notificationButtonActions } = notificationButtonSlice;
export const { reducer: notificationButtonReducer } = notificationButtonSlice;
