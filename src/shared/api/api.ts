import axios from "axios";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstogare";

export const $api = axios.create({
    baseURL: __API__, 
    headers: {
        autorization: localStorage.getItem(USER_LOCALSTORAGE_KEY)
    }
}

)