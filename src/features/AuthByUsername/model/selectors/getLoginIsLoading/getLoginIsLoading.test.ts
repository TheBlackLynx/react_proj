import { DeepPartial } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/StoreProvider"
import { getLoginIsLoading } from "./getLoginIsLoading"

describe('getLoginIsLoading.test', () => {
    test('should return value is loading ', () => {
        const state: DeepPartial<StateSchema>  = {
            loginForm: {isLoading: true}
        }
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true)
    })
    test('value with empty state', () => {
        const state: DeepPartial<StateSchema>  = {}
        expect(getLoginIsLoading(state as StateSchema)).toEqual(undefined)
    })
})