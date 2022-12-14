import { DeepPartial } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/StoreProvider"
import { CounterSchema } from "../types/CounterSchema"
import { counterActions, counterReducer } from "./counterSlice"

describe('getCounterValue', () => {
    test('decrement', () => {
        const state: DeepPartial<CounterSchema>  = {
            value: 10
        }
        expect(counterReducer(
            state as CounterSchema,
            counterActions.decremented()
        )).toEqual({ value: 9} )
    });
    test('increment', () => {
        const state: DeepPartial<CounterSchema>  = {
            value: 10
        }
        expect(counterReducer(
            state as CounterSchema,
            counterActions.incremented()
        )).toEqual({ value: 11} )
    })

    test('with empty state', () => {
        const state: DeepPartial<CounterSchema>  = {
            value: 10
        }
        expect(counterReducer(undefined,
            counterActions.incremented()
        )).toEqual({ value: 1} )
    })
})