import { StateSchema } from "app/providers/StoreProvider"
import { Country } from "entities/Country"
import { getProfileReadOnly } from "./getProfileReadOnly"

describe('getProfileCurrency', () => {
    test('should return value ', () => {
        const state: DeepPartial<StateSchema>  = {
            profile: {
                readonly: true
            }
        }
        expect(getProfileReadOnly(state as StateSchema)).toEqual(true)
    })
    test('value with empty state', () => {
        const state: DeepPartial<StateSchema>  = {}
        expect(getProfileReadOnly(state as StateSchema)).toEqual(false)
    })
})