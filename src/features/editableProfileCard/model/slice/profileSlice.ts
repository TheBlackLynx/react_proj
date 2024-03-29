import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProfileType } from "entities/Profile";
import { ProfileSchema } from "../types/editableProfileCardSchema";
import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";


const initialState: ProfileSchema = {
    isLoading: false,
    readonly: true,
    error: undefined,
    data: undefined,
    validateErrors: undefined
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload
        },
        updateProfile: (state, action: PayloadAction<ProfileType>) => {
            state.form = {
                ...state.data,
                ...action.payload
            }
        },
        cancelEdit: (state) => {
            state.readonly = true
            state.validateErrors = [];
            state.form = {
                ...state.data
            }
        },
        save: (state) => {
            state.readonly = true
            state.data = {
                ...state.form
            }
            console.log('state.data after save', state.data );
        
        }
    }, extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchProfileData.fulfilled, (state, 
                action: PayloadAction<ProfileType>
            ) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(updateProfileData.pending, (state) => {
                state.validateErrors = undefined;
                state.isLoading = true;
            })
            .addCase(updateProfileData.fulfilled, (state, 
                action: PayloadAction<ProfileType>
            ) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.validateErrors = action.payload;
                
            })
        
    }
}) 
export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;