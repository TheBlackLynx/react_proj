import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider/config/StateSchema";
import { User, userActions } from "entities/User";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstogare";
import { getProfileData } from "../../selectors/getProfileData/getProfileData";
import { ProfileType } from "../../types/profile";



export const fetchProfileData = createAsyncThunk<ProfileType, string, 
ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (profileId, thunkAPI) => {
        const { extra, dispatch, rejectWithValue } = thunkAPI;
        if (!profileId) {
            return rejectWithValue('no profile id')
        }
       
        try {
            const response = await extra.api.get<ProfileType>(
                `/profile/${profileId}`)
            if (!response){
                throw new Error()
            }
            return response?.data
        } catch (e){
            console.log(e);
            return rejectWithValue('Невозможно получить данные о профиле пользователя')
        }
       
      
    }
)