import { StateSchema } from "@/app/providers/StoreProvider"
import { getProfileAge } from "./getProfileAge"

describe('getProfileAge', () => {
    test('should return value ', () => {
        const state: DeepPartial<StateSchema>  = {
            profile: {
                data: {
                    age: 32
                }
            }
        }
        expect(getProfileAge(state as StateSchema)).toEqual(32)
    })
    test('value with empty state', () => {
        const state: DeepPartial<StateSchema>  = {}
        expect(getProfileAge(state as StateSchema)).toEqual('')
    })
})