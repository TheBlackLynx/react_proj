import { StateSchema } from "app/providers/StoreProvider"
import { Country } from "entities/Country"
import { ValidateProfileError } from "../../types/profile"
import { getProfileValidateErrors } from "./getProfileValidateErrors"

describe('getProfileCurrency', () => {
    test('should return value ', () => {
        const validationData = [
            ValidateProfileError.INCORRECT_AGE
        ]
        const state: DeepPartial<StateSchema>  = {
            profile: {
                validateErrors: validationData
            }
        }
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(validationData)
    })
    test('value with empty state', () => {
        const state: DeepPartial<StateSchema>  = {}
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined)
    })
})