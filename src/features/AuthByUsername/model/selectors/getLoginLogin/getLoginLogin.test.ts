import { DeepPartial } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/StoreProvider"
import { getLoginLogin } from "./getLoginLogin"

describe('getLoginLogin.test', () => {
    test('should return value login ', () => {
        const state: DeepPartial<StateSchema>  = {
            loginForm: {login: 'user', password: '123'}
        }
        expect(getLoginLogin(state as StateSchema)).toEqual('user')
    })
    test('value with empty state', () => {
        const state: DeepPartial<StateSchema>  = {
            loginForm: {}
        }
        expect(getLoginLogin(state as StateSchema)).toEqual(undefined)
    })
})