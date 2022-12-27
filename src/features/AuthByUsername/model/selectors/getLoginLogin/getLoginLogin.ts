import { StateSchema } from "app/providers/StoreProvider";
import { LoginSchema } from "../../types/LoginSchema";


export const getLoginLogin = (state: StateSchema): string => {
    return state?.loginForm?.login;
}