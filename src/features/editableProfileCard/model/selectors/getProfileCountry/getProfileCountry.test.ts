import { StateSchema } from "app/providers/StoreProvider"
import { Country } from "entities/Country"
import { getProfileCountry } from "./getProfileCountry"

describe('getProfileCountry', () => {
    test('should return value ', () => {
        const state: DeepPartial<StateSchema>  = {
            profile: {
                data: {
                    country: Country.RU
                }
            }
        }
        expect(getProfileCountry(state as StateSchema)).toEqual('Russia')
    })
    test('value with empty state', () => {
        const state: DeepPartial<StateSchema>  = {}
        expect(getProfileCountry(state as StateSchema)).toEqual('')
    })
})