import { ProfileType } from "entities/Profile";


export interface ProfileSchema {
    data?: ProfileType,
    form?: ProfileType,
    isLoading: boolean,
    error?: string,
    validateErrors?: ValidateProfileError[],
    readonly: boolean
}


export enum ValidateProfileError {
    INCORRECT_USER_DATA = "INCORRECT_USER_DATA",
    INCORRECT_AGE = "INCORRECT_AGE",
    INCORRECT_COUNTRY = "INCORRECT_COUNTRY",
    INCORRECT_USERNAME = "INCORRECT_USERNAME",
    INCORRECT_AGE_LENGTH = "INCORRECT_AGE_LENGTH",
    NO_DATA = "NO_DATA",
    SERVER_ERROR = "SERVER_ERROR"
} 