import axios, { AxiosRequestConfig } from "axios";
import { config } from "process";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstogare";

export const $api = axios.create({
    baseURL: __API__, 
}
)
$api.interceptors.request.use((config: AxiosRequestConfig) => {
    if (config.headers) {
        config.headers.authorization = localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';
    }
    return config;
})