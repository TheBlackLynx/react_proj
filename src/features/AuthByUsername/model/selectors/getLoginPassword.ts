import { StateSchema } from "app/providers/StoreProvider";
import { LoginSchema } from "../types/LoginSchema";


export const getLoginPassword = (state: StateSchema): string => {
    return state?.loginForm?.password;
}