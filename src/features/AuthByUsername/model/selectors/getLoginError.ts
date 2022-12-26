import { StateSchema } from "app/providers/StoreProvider";
import { LoginSchema } from "../types/LoginSchema";


export const getLoginError = (state: StateSchema): string => {
    return state?.loginForm?.error;
}