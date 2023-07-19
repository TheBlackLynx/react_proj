import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AvatarDropDownSchema } from '../types/avatarDropDownSchema';
    
const initialState: AvatarDropDownSchema = {
        
};
    
export const avatarDropDownSlice = createSlice({
    name: 'avatarDropDown',
    initialState,
    reducers: {},
});
    
export const { actions: avatarDropDownActions } = avatarDropDownSlice;
export const { reducer: avatarDropDownReducer } = avatarDropDownSlice;