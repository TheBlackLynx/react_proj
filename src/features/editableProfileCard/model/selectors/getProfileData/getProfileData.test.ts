import { StateSchema } from "@/app/providers/StoreProvider"
import { Country } from "@/entities/Country"
import { Currency } from "@/entities/Currency"
import { getProfileData } from "./getProfileData"

describe('getProfileCurrency', () => {
    test('should return value ', () => {
        const data = {
            first: "Marica",
            last: "Sav",
            age: 32,
            currency: Currency.EUR,
            country: Country.RU,
            city: "Moscow",
            username: "marica",
            avatar: "https://avatarko.ru/img/avatar/27/multfilm_animaciya_26814.gif"
              
        }
        const state: DeepPartial<StateSchema>  = {
            profile: {
                data,
            }
        }
        expect(getProfileData(state as StateSchema)).toEqual(data)
    })
    test('value with empty state', () => {
        const state: DeepPartial<StateSchema>  = {}
        expect(getProfileData(state as StateSchema)).toEqual(undefined)
    })
})