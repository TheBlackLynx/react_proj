import { Countries, Currencies } from "shared/const/common";

export interface ProfileType {
    first: string,
    last: string,
    age: number,
    currency: Currencies,
    country: Countries,
    city: string,
    username: string,
    avatar: string
}


export interface ProfileSchema {
    data?: ProfileType,
    isLoading: boolean,
    error?: string,
    readonly: boolean
}
