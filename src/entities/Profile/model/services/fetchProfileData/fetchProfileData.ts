import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider/config/StateSchema";
import { User, userActions } from "entities/User";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstogare";
import { getProfileData } from "../../selectors/getProfileData/getProfileData";
import { ProfileType } from "../../types/profile";


export const fetchProfileData = createAsyncThunk<ProfileType, void, 
ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, thunkAPI) => {
        const { extra, dispatch, rejectWithValue } = thunkAPI;

       
        try {
            const response = await extra.api.get<ProfileType>(
                '/profile')
            console.log('1', response);
            console.log('2', response?.data);
            return response?.data
        } catch (e){
            console.log(e);
            return rejectWithValue('Невозможно получить данные о профиле пользователя')
        }
       
      
    }
)