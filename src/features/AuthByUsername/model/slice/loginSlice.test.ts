import { DeepPartial } from "@reduxjs/toolkit"
import { LoginSchema } from "../types/LoginSchema"
import { loginActions, loginReducer } from "./loginSlice"

describe('loginSlice', () => {
    test('test set login', () => {
        const state: DeepPartial<LoginSchema>  = {login: 'user'}
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('321'))).toEqual({"login": "321"})
    }),
    test('test set password', () => {
        const state: DeepPartial<LoginSchema>  = {password: 'user'}
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('456'))).toEqual({"password": "456"})
    })
})