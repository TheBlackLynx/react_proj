import { StateSchema } from "app/providers/StoreProvider";
import { LoginSchema } from "../types/LoginSchema";


export const getLoginState = (state: StateSchema): LoginSchema => {
    return state.loginForm;
}