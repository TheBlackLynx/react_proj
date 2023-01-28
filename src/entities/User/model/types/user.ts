export interface User {
    id: string,
    login: string,
    avatar?: string
}

export interface UserSchema {
    authData?: User,
    _mounted: boolean
}