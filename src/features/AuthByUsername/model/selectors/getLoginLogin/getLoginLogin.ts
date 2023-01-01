import { StateSchema } from "app/providers/StoreProvider";
import { StringDecoder } from "string_decoder";


export const getLoginLogin = (state: StateSchema): string => {
    return state?.loginForm?.login as string;
}