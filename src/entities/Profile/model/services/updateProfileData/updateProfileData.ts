import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider/config/StateSchema";
import { User, userActions } from "entities/User";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstogare";
import { getProfileData } from "../../selectors/getProfileData/getProfileData";
import { ProfileType } from "../../types/profile";


export const updateProfileData = createAsyncThunk<ProfileType, void, 
ThunkConfig<string>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { extra, dispatch, rejectWithValue, getState } = thunkAPI;
        const formData = getProfileData(getState());
        console.log('formData', formData);
        
        try {
            const response = await extra.api.put<ProfileType>(
                '/profile', formData)
            
            return response?.data
        } catch (e){
            console.log(e);
            return rejectWithValue('Невозможно сохранить профиль пользователя')
        }
       
      
    }
)