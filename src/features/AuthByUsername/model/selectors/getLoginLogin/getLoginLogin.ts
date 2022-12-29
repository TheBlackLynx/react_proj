import { StateSchema } from "app/providers/StoreProvider";


export const getLoginLogin = (state: StateSchema): string => {
    return state?.loginForm?.login;
}