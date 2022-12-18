import { createAsyncThunk } from "@reduxjs/toolkit";
import { LOCAL_STORAGE_THEME_KEY } from "app/providers/ThemeProvider/ui/ThemeContext";
import axios from "axios";
import { User, userActions } from "entities/User";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstogare";

interface LoginByUserNameProps {
    login: string;
    password: string;
}


export const loginByUserName = createAsyncThunk<User, LoginByUserNameProps, 
{ rejectValue: string }>(
    'login/loginByUserName',
    async (authData: LoginByUserNameProps, thunkAPI) => {
        try {
            const response = await axios.post<User>(
                'http://localhost:8000/login ', 
                authData)
            if (!response) {
                throw new Error('no data')
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, 
                JSON.stringify(response.data))
            thunkAPI.dispatch(userActions.setAuthData(response.data))
            
            return response.data
        } catch (e){
            console.log(e);
            return thunkAPI.rejectWithValue('Неверный логин или пароль')
        }
       
      
    }
)