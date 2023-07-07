import { StateSchema } from "@/app/providers/StoreProvider"
import { Country } from "@/entities/Country"
import { getProfileFirstName } from "./getProfileFirstName"

describe('getProfileCurrency', () => {
    test('should return value ', () => {
        const state: DeepPartial<StateSchema>  = {
            profile: {
                data: {
                    first: 'Marica'
                }
            }
        }
        expect(getProfileFirstName(state as StateSchema)).toEqual('Marica')
    })
    test('value with empty state', () => {
        const state: DeepPartial<StateSchema>  = {}
        expect(getProfileFirstName(state as StateSchema)).toEqual('')
    })
})