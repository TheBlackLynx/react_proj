import { StateSchema } from "app/providers/StoreProvider";
import { LoginSchema } from "../types/LoginSchema";


export const getLoginIsLoading = (state: StateSchema): boolean => {
    return state?.loginForm?.isLoading;
}