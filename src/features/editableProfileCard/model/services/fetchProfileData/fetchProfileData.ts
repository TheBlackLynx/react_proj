import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider/config/StateSchema";
import { ProfileType } from "@/entities/Profile";



export const fetchProfileData = createAsyncThunk<ProfileType,
string | undefined, 
ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (profileId, thunkAPI) => {
        const { extra, dispatch, rejectWithValue } = thunkAPI;
        if (!profileId) {
            return rejectWithValue('no profile id')
        }
       
        try {
            if (!profileId) {
                throw new Error()
            }
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