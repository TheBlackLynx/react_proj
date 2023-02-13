import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider/config/StateSchema";
import { User, userActions } from "entities/User";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstogare";
import { getProfileData } from "../../selectors/getProfileData/getProfileData";
import { ProfileType, ValidateProfileError } from "../../types/profile";
import { validateProfileData } from "../validateProfileData/validateProfileData";


export const updateProfileData = createAsyncThunk<ProfileType, void, 
ThunkConfig<ValidateProfileError[]>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { extra, dispatch, rejectWithValue, getState } = thunkAPI;
        const formData = getProfileData(getState());
        const errors = validateProfileData(formData);
       
        console.log('formData', formData);
        
        if (errors.length) {
            return rejectWithValue(errors);

        }
        
        try {
            const response = await extra.api.put<ProfileType>(
                `/profile/${formData?.id}`, formData)
            if (!response.data){
                throw new Error()
            }
            return response?.data
        } catch (e){
            console.log(e);
            return rejectWithValue([ValidateProfileError.SERVER_ERROR])
        }
       
      
    }
)