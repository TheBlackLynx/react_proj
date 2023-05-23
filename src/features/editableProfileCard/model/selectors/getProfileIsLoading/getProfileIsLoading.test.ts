import { StateSchema } from "app/providers/StoreProvider"
import { Country } from "entities/Country"
import { getProfileIsLoading } from "./getProfileIsLoading"

describe('getProfileCurrency', () => {
    test('should return value ', () => {
        const state: DeepPartial<StateSchema>  = {
            profile: {
                isLoading: true
            }
        }
        expect(getProfileIsLoading(state as StateSchema)).toEqual(true)
    })
    test('value with empty state', () => {
        const state: DeepPartial<StateSchema>  = {}
        expect(getProfileIsLoading(state as StateSchema)).toEqual('')
    })
})