import { UserRole } from "../consts/consts"

export interface User {
    id: string,
    login: string,
    avatar?: string,
    roles?: UserRole[]
}

export interface UserSchema {
    authData?: User,
    _mounted: boolean
}