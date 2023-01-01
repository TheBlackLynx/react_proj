import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider/config/StateSchema";
import { User, userActions } from "entities/User";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstogare";
import { ProfileType } from "../../types/profile";


export const fetchProfileData = createAsyncThunk<ProfileType, void, 
ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, thunkAPI) => {
        const { extra, dispatch, rejectWithValue } = thunkAPI;
        try {
            const response = await extra.api.get<ProfileType>(
                '/profile')
            
            return response?.data
        } catch (e){
            console.log(e);
            return rejectWithValue('Невозможно получить данные о профиле пользователя')
        }
       
      
    }
)