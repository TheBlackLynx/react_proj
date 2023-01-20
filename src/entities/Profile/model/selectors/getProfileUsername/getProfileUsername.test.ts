import { StateSchema } from "app/providers/StoreProvider"
import { Country } from "entities/Country"
import { getProfileUsername } from "./getProfileUsername"

describe('getProfileCurrency', () => {
    test('should return value ', () => {
        const state: DeepPartial<StateSchema>  = {
            profile: {
                data: {
                    username: 'marica'
                }
            }
        }
        expect(getProfileUsername(state as StateSchema)).toEqual('marica')
    })
    test('value with empty state', () => {
        const state: DeepPartial<StateSchema>  = {}
        expect(getProfileUsername(state as StateSchema)).toEqual('')
    })
})