 
import { formToJSON } from "axios"
import { Country } from "entities/Country"
import { Currency } from "entities/Currency"
import { truncate } from "fs"
import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData"
import { ProfileSchema, ValidateProfileError } from "../types/profile"
import { profileActions, profileReducer } from "./profileSlice"

const data = {
    first: "Marica",
    last: "",
    age: 32,
    currency: Currency.EUR,
    country: Country.RU,
    city: "Moscow",
    username: "marica",
    avatar: "https://avatarko.ru/img/avatar/27/multfilm_animaciya_26814.gif"
}

describe('loginSlice', () => {
    test('test set readonly flag ', () => {
        const state: DeepPartial<ProfileSchema>  = {readonly: false }
        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({readonly: true})
    }),
    test('test updateProfile', () => {
        
        const state: DeepPartial<ProfileSchema>  = {form: {first: ''}}
        expect(profileReducer(
            state as ProfileSchema, 
            profileActions.updateProfile
            ({
                first: 'MARICA'
            })
            )).toEqual({
                form: {first: 'MARICA'}
            })
    })

    test('test save', () => {
        
        const state: DeepPartial<ProfileSchema>  = {form: data}
        expect(profileReducer(
            state as ProfileSchema, 
            profileActions.save())).toEqual({
                readonly: true,
                data,
                form: data
            })
    })

    test('test cancel edit', () => {
        
        const state: DeepPartial<ProfileSchema>  = {data: data, form: { first: ''}}
        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit
            ())).toEqual({
                readonly: true,
                validateErrors: [],
                data,
                form: data
            })
    })

    test('test fetchProfileData pending', () => {
        
        const state: DeepPartial<ProfileSchema>  = {isLoading: false, validateErrors: [ValidateProfileError.SERVER_ERROR]}
        expect(profileReducer(state as ProfileSchema, fetchProfileData.pending())).toEqual({
                isLoading: true,
                validateErrors: [ValidateProfileError.SERVER_ERROR],
            })
    })

    test('test fetchProfileData fulfilled', () => {
        
        const state: DeepPartial<ProfileSchema>  = {isLoading: true}
        expect(profileReducer(state as ProfileSchema, fetchProfileData.fulfilled(data, ''))).toEqual({
                isLoading: false,
                data,
                form: data
            })
    })
})