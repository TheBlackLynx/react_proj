import { createSlice } from "@reduxjs/toolkit"
import { CounterSchema } from "../types/counterSchema"

const initialState: CounterSchema = {
    value: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incremented: state => {
            state.value += 1
            console.log(state.value)
        },
        decremented: state => {
            state.value -= 1
            console.log(state.value)
        }
    }
})

export const { actions: counterActions } = counterSlice
export const { reducer: counterReducer } = counterSlice