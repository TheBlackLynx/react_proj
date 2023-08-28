import { StateSchema } from "@/app/providers/StoreProvider"
import { getProfileLastName } from "./getProfileLastName"

describe('getProfileCurrency', () => {
    test('should return value ', () => {
        const state: DeepPartial<StateSchema>  = {
            profile: {
                data: {
                    last: 'Sav'
                }
            }
        }
        expect(getProfileLastName(state as StateSchema)).toEqual('Sav')
    })
    test('value with empty state', () => {
        const state: DeepPartial<StateSchema>  = {}
        expect(getProfileLastName(state as StateSchema)).toEqual('')
    })
})